import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useSeo } from '@/hooks/useSeo';

export default function MenuPage() {
  useSeo({
    title: 'Menu - Royal Bikana Caterers',
    description:
      'Explore our authentic Marwari catering menu featuring royal specialties, main courses, starters, sweets, and beverages for your wedding or event in Bikaner.',
  });

  const menuCategories = [
    {
      id: 'marwari',
      name: 'Royal Marwari Special (Live)',
      items: [
        'Dal Baati Churma',
        'Desi Ghee Churma',
        'Gatte ki Sabzi',
        'Ker Sangri',
        'Bajra Roti / Tandoor Roti',
        'Lehsun Chutney',
        'Chhachh / Jaljeera',
      ],
    },
    {
      id: 'main',
      name: 'Veg Main Course',
      items: ['Shahi Paneer', 'Paneer Butter Masala', 'Mix Veg', 'Malai Kofta', 'Dum Aloo', 'Sev Tamatar'],
    },
    {
      id: 'rice',
      name: 'Rice & Bread',
      items: ['Plain Rice', 'Jeera Rice', 'Veg Pulao', 'Tandoor Roti', 'Butter Naan', 'Missi Roti'],
    },
    {
      id: 'starters',
      name: 'Starters & Chaat',
      items: ['Paneer Tikka (Live)', 'Veg Cutlet', 'Dahi Bhalla', 'Pani Puri (Live)', 'Papdi Chaat'],
    },
    {
      id: 'sweets',
      name: 'Sweets',
      items: ['Moong Dal Halwa', 'Gulab Jamun', 'Rasgulla', 'Kesar Shrikhand'],
    },
    {
      id: 'beverages',
      name: 'Beverages',
      items: ['Mineral Water', 'Soft Drinks', 'Masala Chhachh', 'Welcome Drink'],
    },
  ];

  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-maroon md:text-5xl">Our Menu</h1>
          <p className="mx-auto max-w-2xl text-lg text-maroon/80">
            Authentic Marwari and royal Indian cuisine prepared with traditional recipes and premium ingredients
          </p>
          <div className="mx-auto mt-4 h-1 w-24 bg-gold"></div>
        </div>

        <div className="mx-auto max-w-5xl">
          <Tabs defaultValue="marwari" className="w-full">
            <TabsList className="mb-8 grid w-full grid-cols-2 gap-2 bg-white p-2 md:grid-cols-3 lg:grid-cols-6">
              {menuCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="data-[state=active]:bg-gold data-[state=active]:text-maroon"
                >
                  {category.name.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <Card className="border-gold/20 bg-white shadow-lg">
                  <CardHeader className="border-b border-gold/20 bg-maroon/5">
                    <CardTitle className="text-2xl text-maroon">{category.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <ul className="grid gap-3 md:grid-cols-2">
                      {category.items.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <div className="h-2 w-2 rounded-full bg-gold"></div>
                          <span className="text-maroon/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>

          <Card className="mt-8 border-gold/20 bg-maroon shadow-lg">
            <CardContent className="p-6 text-center">
              <p className="text-lg text-gold">
                All menus can be customized according to your preferences and event requirements
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
