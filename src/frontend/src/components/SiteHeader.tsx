import { useState } from 'react';
import { Link, useNavigate } from '@tanstack/react-router';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Menu', path: '/menu' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gold/20 bg-maroon/95 backdrop-blur supports-[backdrop-filter]:bg-maroon/90">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link to="/" className="flex flex-col">
          <div className="flex items-center gap-3">
            <img src="/assets/generated/royal-bikana-logo.dim_512x512.png" alt="Royal Bikana Logo" className="h-12 w-12" />
            <div>
              <h1 className="text-xl font-bold text-gold md:text-2xl">ROYAL BIKANA CATERERS</h1>
              <p className="text-xs text-gold/80 md:text-sm">Shahi Swad • Royal Andaaz</p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:items-center md:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-medium text-gold/90 transition-colors hover:text-gold"
              activeProps={{ className: 'text-gold font-semibold' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-gold hover:bg-gold/10 hover:text-gold">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] border-gold/20 bg-maroon">
            <div className="flex flex-col gap-6 pt-8">
              <div className="flex flex-col gap-1 border-b border-gold/20 pb-4">
                <h2 className="text-lg font-bold text-gold">ROYAL BIKANA CATERERS</h2>
                <p className="text-xs text-gold/80">Shahi Swad • Royal Andaaz</p>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.path}>
                    <Link
                      to={link.path}
                      className="text-base font-medium text-gold/90 transition-colors hover:text-gold"
                      activeProps={{ className: 'text-gold font-semibold' }}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
