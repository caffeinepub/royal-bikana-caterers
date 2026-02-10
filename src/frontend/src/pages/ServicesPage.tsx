import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, PartyPopper, Cake, Users, Briefcase, Flame, UtensilsCrossed, ClipboardList } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';

export default function ServicesPage() {
  useSeo({
    title: 'Our Services - Royal Bikana Caterers',
    description:
      'Explore our catering services including wedding catering, engagement, birthday parties, corporate events, live food counters, and royal Marwari thali in Bikaner.',
  });

  const services = [
    {
      icon: Heart,
      title: 'Wedding Catering',
      description: 'Make your special day unforgettable with our royal wedding catering services',
    },
    {
      icon: PartyPopper,
      title: 'Engagement & Reception Catering',
      description: 'Elegant catering for your engagement and reception celebrations',
    },
    {
      icon: Cake,
      title: 'Birthday Party Catering',
      description: 'Delicious food and memorable experiences for birthday celebrations',
    },
    {
      icon: Users,
      title: 'Anniversary & Family Functions',
      description: 'Perfect catering solutions for family gatherings and anniversaries',
    },
    {
      icon: Briefcase,
      title: 'Corporate Catering',
      description: 'Professional catering services for corporate events and meetings',
    },
    {
      icon: Flame,
      title: 'Live Food Counters',
      description: 'Fresh food prepared live at your event with interactive cooking stations',
    },
    {
      icon: UtensilsCrossed,
      title: 'Royal Marwari Thali',
      description: 'Authentic traditional Rajasthani thali with royal presentation',
    },
    {
      icon: ClipboardList,
      title: 'Customized Menu Planning',
      description: 'Tailored menus designed to match your preferences and event theme',
    },
  ];

  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-maroon md:text-5xl">Our Services</h1>
          <p className="mx-auto max-w-2xl text-lg text-maroon/80">
            Comprehensive catering solutions for all your special occasions in Bikaner and nearby areas
          </p>
          <div className="mx-auto mt-4 h-1 w-24 bg-gold"></div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-gold/20 bg-white shadow-md transition-all hover:shadow-lg hover:scale-105"
              >
                <CardHeader>
                  <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                    <Icon className="h-7 w-7 text-gold" />
                  </div>
                  <CardTitle className="text-xl text-maroon">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-maroon/70">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
