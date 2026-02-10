import { useNavigate } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, Shield, Crown, Users } from 'lucide-react';
import { useSeo } from '@/hooks/useSeo';

export default function HomePage() {
  const navigate = useNavigate();

  useSeo({
    title: 'Royal Bikana Caterers - Best Wedding Caterers in Bikaner',
    description:
      'Royal Bikana Caterers offers authentic Marwari and royal Indian cuisine for weddings, parties, and events in Bikaner, Rajasthan. Experience shahi swad with royal andaaz.',
  });

  const highlights = [
    {
      icon: Sparkles,
      title: 'Live Catering Available',
      description: 'Fresh food prepared live at your event',
    },
    {
      icon: Shield,
      title: 'Pure & Hygienic Food',
      description: 'Highest standards of cleanliness and quality',
    },
    {
      icon: Crown,
      title: 'Royal Marwari Special',
      description: 'Authentic traditional Rajasthani cuisine',
    },
    {
      icon: Users,
      title: 'All Events Covered',
      description: 'Wedding • Party • Events • Corporate Catering',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(80, 20, 30, 0.85), rgba(80, 20, 30, 0.85)), url('/assets/generated/hero-royal-texture.dim_1920x1080.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mx-auto max-w-4xl">
            <img
              src="/assets/generated/royal-bikana-logo.dim_512x512.png"
              alt="Royal Bikana Logo"
              className="mx-auto mb-6 h-24 w-24 md:h-32 md:w-32"
            />
            <h1 className="mb-4 text-4xl font-bold text-gold md:text-5xl lg:text-6xl">
              Royal Wedding & Event Catering in Bikaner
            </h1>
            <p className="mb-8 text-lg text-gold/90 md:text-xl lg:text-2xl">
              Authentic Marwari & Shahi Cuisine for Weddings, Parties & Events
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                onClick={() => navigate({ to: '/contact' })}
                className="bg-gold text-maroon hover:bg-gold/90"
              >
                Book Catering
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate({ to: '/menu' })}
                className="border-gold text-gold hover:bg-gold/10"
              >
                Get Menu
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="bg-cream py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-maroon md:text-4xl">Why Choose Us</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <Card key={index} className="border-gold/20 bg-white shadow-md transition-shadow hover:shadow-lg">
                  <CardContent className="flex flex-col items-center p-6 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gold/10">
                      <Icon className="h-8 w-8 text-gold" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-maroon">{highlight.title}</h3>
                    <p className="text-sm text-maroon/70">{highlight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-maroon py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="mb-4 text-3xl font-bold text-gold md:text-4xl">Ready to Make Your Event Special?</h2>
          <p className="mb-8 text-lg text-gold/90">
            Contact us today for the best wedding and event catering service in Bikaner
          </p>
          <Button
            size="lg"
            onClick={() => navigate({ to: '/contact' })}
            className="bg-gold text-maroon hover:bg-gold/90"
          >
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
