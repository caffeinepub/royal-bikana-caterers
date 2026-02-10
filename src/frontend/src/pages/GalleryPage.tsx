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
      src: '/assets/gallery/IMG-20260210-WA0029.jpg',
      alt: 'Traditional Rajasthani welcome thali with decorative rangoli pattern',
      title: 'Traditional Welcome Thali',
    },
    {
      src: '/assets/gallery/IMG-20260210-WA0020.jpg',
      alt: 'Illuminated royal buffet counter with ornate geometric patterns and colorful drapes',
      title: 'Royal Buffet Counter Setup',
    },
    {
      src: '/assets/gallery/IMG-20260210-WA0015.jpg',
      alt: 'Outdoor evening catering setup with illuminated royal buffet stations on lawn',
      title: 'Outdoor Evening Event Setup',
    },
    {
      src: '/assets/gallery/IMG-20260210-WA0017.jpg',
      alt: 'Elegant illuminated buffet counter with traditional Rajasthani arch designs',
      title: 'Elegant Buffet Station',
    },
    {
      src: '/assets/gallery/IMG-20260210-WA0027.jpg',
      alt: 'Premium catering counter with purple drapes and decorative elements',
      title: 'Premium Catering Counter',
    },
    {
      src: '/assets/gallery/IMG-20260210-WA0029-1.jpg',
      alt: 'Decorative welcome thali with traditional rangoli design and rose petals',
      title: 'Decorative Welcome Arrangement',
    },
    {
      src: '/assets/gallery/IMG-20260210-WA0022.jpg',
      alt: 'Live food counter with traditional decorations and cultural statues',
      title: 'Live Food Counter Station',
    },
    {
      src: '/assets/gallery/IMG-20260210-WA0024.jpg',
      alt: 'Royal buffet setup with traditional Rajasthani motifs and colorful backdrop',
      title: 'Royal Buffet Display',
    },
    {
      src: '/assets/gallery/IMG-20260210-WA0020-1.jpg',
      alt: 'Illuminated catering counter with vibrant striped drapes and royal patterns',
      title: 'Vibrant Catering Setup',
    },
    {
      src: '/assets/gallery/IMG-20260210-WA0016.jpg',
      alt: 'Showroom display of premium catering equipment with royal architectural designs',
      title: 'Premium Catering Equipment',
    },
    {
      src: '/assets/gallery/IMG-20260210-WA0015-1.jpg',
      alt: 'Outdoor lawn catering setup with illuminated royal buffet counters at dusk',
      title: 'Outdoor Lawn Event',
    },
    {
      src: '/assets/gallery/IMG-20260210-WA0017-1.jpg',
      alt: 'Evening outdoor catering with illuminated traditional buffet stations',
      title: 'Evening Outdoor Catering',
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
