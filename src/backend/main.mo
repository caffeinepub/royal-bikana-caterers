import Map "mo:core/Map";
import Time "mo:core/Time";
import Order "mo:core/Order";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the access control system
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile management
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Lead management
  let leadState = Map.empty<Text, Lead>();
  var nextId = 0;

  type Lead = {
    name : Text;
    mobileNumber : Text;
    eventType : Text;
    eventDate : ?Text;
    message : Text;
    createdAt : Int;
  };

  module Lead {
    public func compareByCreatedAt(lead1 : Lead, lead2 : Lead) : Order.Order {
      Int.compare(lead1.createdAt, lead2.createdAt);
    };
  };

  // Public endpoint - anyone can submit contact form (including guests)
  public shared ({ caller }) func submitContactForm(name : Text, mobileNumber : Text, eventType : Text, eventDate : ?Text, message : Text) : async () {
    if (name.size() == 0) { Runtime.trap("Name cannot be empty") };
    if (mobileNumber.size() == 0) { Runtime.trap("Mobile number cannot be empty") };
    if (eventType.size() == 0) { Runtime.trap("Event type cannot be empty") };

    let lead : Lead = {
      name;
      mobileNumber;
      eventType;
      eventDate;
      message;
      createdAt = Time.now();
    };

    let id = nextId.toText();
    leadState.add(id, lead);
    nextId += 1;
  };

  // Admin-only endpoint - contains sensitive customer data
  public query ({ caller }) func getAllLeads() : async [Lead] {
    if (not (AccessControl.isAdmin(accessControlState, caller))) {
      Runtime.trap("Unauthorized: Only admins can view leads");
    };
    leadState.values().toArray().sort(Lead.compareByCreatedAt);
  };
};
