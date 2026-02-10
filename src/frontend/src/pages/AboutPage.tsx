import { Card, CardContent } from '@/components/ui/card';
import { useSeo } from '@/hooks/useSeo';

export default function AboutPage() {
  useSeo({
    title: 'About Us - Royal Bikana Caterers',
    description:
      'Learn about Royal Bikana Caterers, a trusted name in wedding and event catering in Bikaner, Rajasthan, specializing in authentic Marwari and royal Indian cuisine.',
  });

  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <img
              src="/assets/generated/royal-bikana-logo.dim_512x512.png"
              alt="Royal Bikana Logo"
              className="mx-auto mb-6 h-24 w-24"
            />
            <h1 className="mb-4 text-4xl font-bold text-maroon md:text-5xl">About Us</h1>
            <div className="mx-auto h-1 w-24 bg-gold"></div>
          </div>

          <Card className="border-gold/20 bg-white shadow-lg">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg leading-relaxed text-maroon/90">
                Royal Bikana Caterers is a trusted name in wedding and event catering in Bikaner, Rajasthan. We
                specialize in authentic Marwari and royal Indian cuisine, prepared with purity, hygiene, and traditional
                taste. Our mission is to deliver shahi swad with royal andaaz for every occasion. With experienced
                chefs, live cooking counters, and premium presentation, we turn every event into a memorable
                celebration.
              </p>
            </CardContent>
          </Card>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Card className="border-gold/20 bg-white text-center shadow-md">
              <CardContent className="p-6">
                <div className="mb-3 text-4xl font-bold text-gold">10+</div>
                <p className="text-maroon/80">Years Experience</p>
              </CardContent>
            </Card>
            <Card className="border-gold/20 bg-white text-center shadow-md">
              <CardContent className="p-6">
                <div className="mb-3 text-4xl font-bold text-gold">500+</div>
                <p className="text-maroon/80">Events Catered</p>
              </CardContent>
            </Card>
            <Card className="border-gold/20 bg-white text-center shadow-md">
              <CardContent className="p-6">
                <div className="mb-3 text-4xl font-bold text-gold">100%</div>
                <p className="text-maroon/80">Client Satisfaction</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
