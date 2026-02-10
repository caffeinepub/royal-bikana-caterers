import { useState } from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useSeo } from '@/hooks/useSeo';

export default function GalleryPage() {
  useSeo({
    title: 'Gallery - Royal Bikana Caterers',
    description:
      'View our gallery showcasing wedding catering setups, live food counters, royal food presentation, and event atmospheres from Royal Bikana Caterers.',
  });

  const galleryImages = [
    {
      src: '/assets/generated/gallery-wedding-setup.dim_1200x800.jpg',
      alt: 'Wedding Catering Setup',
      title: 'Wedding Catering Setup',
    },
    {
      src: '/assets/generated/gallery-live-counter.dim_1200x800.jpg',
      alt: 'Live Food Counter',
      title: 'Live Food Counter',
    },
    {
      src: '/assets/generated/gallery-royal-presentation.dim_1200x800.jpg',
      alt: 'Royal Food Presentation',
      title: 'Royal Food Presentation',
    },
    {
      src: '/assets/generated/gallery-atmosphere.dim_1200x800.jpg',
      alt: 'Wedding & Party Atmosphere',
      title: 'Wedding & Party Atmosphere',
    },
    {
      src: '/assets/generated/gallery-wedding-setup.dim_1200x800.jpg',
      alt: 'Premium Event Setup',
      title: 'Premium Event Setup',
    },
    {
      src: '/assets/generated/gallery-live-counter.dim_1200x800.jpg',
      alt: 'Interactive Cooking Station',
      title: 'Interactive Cooking Station',
    },
    {
      src: '/assets/generated/gallery-royal-presentation.dim_1200x800.jpg',
      alt: 'Traditional Marwari Cuisine',
      title: 'Traditional Marwari Cuisine',
    },
    {
      src: '/assets/generated/gallery-atmosphere.dim_1200x800.jpg',
      alt: 'Celebration Moments',
      title: 'Celebration Moments',
    },
  ];

  return (
    <div className="min-h-screen bg-cream py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-maroon md:text-5xl">Gallery</h1>
          <p className="mx-auto max-w-2xl text-lg text-maroon/80">
            Explore our premium catering setups and royal food presentations
          </p>
          <div className="mx-auto mt-4 h-1 w-24 bg-gold"></div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg border-2 border-gold/20 bg-white shadow-md transition-all hover:shadow-xl hover:scale-105">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-sm font-semibold text-gold">{image.title}</p>
                    </div>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl border-gold/20 bg-maroon p-2">
                <img src={image.src} alt={image.alt} className="h-auto w-full rounded-lg" />
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </div>
  );
}
