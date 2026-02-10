import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, MapPin, MessageCircle } from 'lucide-react';
import { SiWhatsapp } from 'react-icons/si';
import { useSubmitContactInquiry } from '@/hooks/useSubmitContactInquiry';
import { useSeo } from '@/hooks/useSeo';

export default function ContactPage() {
  useSeo({
    title: 'Contact Us - Royal Bikana Caterers',
    description:
      'Contact Royal Bikana Caterers for wedding and event catering in Bikaner. Call us or fill out our contact form to book your catering service.',
  });

  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    eventType: '',
    eventDate: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const { mutate: submitInquiry, isPending, isSuccess, isError } = useSubmitContactInquiry();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.mobileNumber.trim()) newErrors.mobileNumber = 'Mobile number is required';
    if (!formData.eventType.trim()) newErrors.eventType = 'Event type is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      submitInquiry({
        name: formData.name,
        mobileNumber: formData.mobileNumber,
        eventType: formData.eventType,
        eventDate: formData.eventDate || null,
        message: formData.message,
      });
    }
  };

  const handleWhatsApp = () => {
    const message = `Hello Royal Bikana Caterers,\n\nName: ${formData.name || '[Your Name]'}\nEvent Type: ${formData.eventType || '[Event Type]'}\nEvent Date: ${formData.eventDate || '[Date]'}\n\nI would like to inquire about your catering services.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/919983685264?text=${encodedMessage}`, '_blank');
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-cream py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <Card className="border-gold/20 bg-white shadow-lg">
              <CardContent className="p-12 text-center">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gold/10">
                    <MessageCircle className="h-10 w-10 text-gold" />
                  </div>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-maroon">Thank You!</h2>
                <p className="mb-6 text-lg text-maroon/80">
                  Your inquiry has been received. We will contact you shortly to discuss your catering needs.
                </p>
                <Button
                  onClick={() => {
                    setFormData({ name: '', mobileNumber: '', eventType: '', eventDate: '', message: '' });
                    window.location.reload();
                  }}
                  className="bg-gold text-maroon hover:bg-gold/90"
                >
                  Submit Another Inquiry
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-maroon md:text-5xl">Contact Us</h1>
          <p className="mx-auto max-w-2xl text-lg text-maroon/80">
            Get in touch with us to book your catering service or for any inquiries
          </p>
          <div className="mx-auto mt-4 h-1 w-24 bg-gold"></div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-gold/20 bg-white shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-maroon">
                  <Phone className="h-6 w-6 text-gold" />
                  Phone Numbers
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-maroon/90">
                  <strong>Sarwan Singh:</strong> 9983685264
                </p>
                <p className="text-maroon/90">
                  <strong>Prakash Sain:</strong> 6376424249
                </p>
              </CardContent>
            </Card>

            <Card className="border-gold/20 bg-white shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-maroon">
                  <MapPin className="h-6 w-6 text-gold" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-maroon/90">Bikaner, Rajasthan</p>
                <p className="mt-2 text-sm text-maroon/70">Service available in nearby areas</p>
              </CardContent>
            </Card>

            <Card className="border-gold/20 bg-maroon shadow-md">
              <CardContent className="p-6">
                <Button
                  onClick={handleWhatsApp}
                  className="w-full bg-gold text-maroon hover:bg-gold/90"
                  size="lg"
                >
                  <SiWhatsapp className="mr-2 h-5 w-5" />
                  Book Now on WhatsApp
                </Button>
                <p className="mt-3 text-center text-sm text-gold/80">Quick response via WhatsApp</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-gold/20 bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-maroon">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-maroon">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 ${errors.name ? 'border-red-500' : 'border-gold/20'}`}
                    placeholder="Your full name"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
                </div>

                <div>
                  <Label htmlFor="mobileNumber" className="text-maroon">
                    Mobile Number *
                  </Label>
                  <Input
                    id="mobileNumber"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className={`mt-1 ${errors.mobileNumber ? 'border-red-500' : 'border-gold/20'}`}
                    placeholder="Your mobile number"
                  />
                  {errors.mobileNumber && <p className="mt-1 text-sm text-red-500">{errors.mobileNumber}</p>}
                </div>

                <div>
                  <Label htmlFor="eventType" className="text-maroon">
                    Event Type *
                  </Label>
                  <Input
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    className={`mt-1 ${errors.eventType ? 'border-red-500' : 'border-gold/20'}`}
                    placeholder="e.g., Wedding, Birthday, Corporate"
                  />
                  {errors.eventType && <p className="mt-1 text-sm text-red-500">{errors.eventType}</p>}
                </div>

                <div>
                  <Label htmlFor="eventDate" className="text-maroon">
                    Event Date
                  </Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    className="mt-1 border-gold/20"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-maroon">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 border-gold/20"
                    placeholder="Tell us about your event requirements"
                    rows={4}
                  />
                </div>

                {isError && (
                  <div className="rounded-md bg-red-50 p-3 text-sm text-red-600">
                    Failed to submit inquiry. Please try again or contact us directly.
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-gold text-maroon hover:bg-gold/90"
                  size="lg"
                >
                  {isPending ? 'Submitting...' : 'Submit Inquiry'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
