import { SiInstagram, SiWhatsapp } from 'react-icons/si';
import { Heart } from 'lucide-react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = encodeURIComponent(window.location.hostname || 'royal-bikana-caterers');

  return (
    <footer className="border-t border-gold/20 bg-maroon-dark text-gold/90">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Business Info */}
          <div>
            <h3 className="mb-3 text-lg font-bold text-gold">ROYAL BIKANA CATERERS</h3>
            <p className="mb-4 text-sm text-gold/80">Shahi Swad • Royal Andaaz</p>
            <p className="text-sm text-gold/70">
              Authentic Marwari & Royal Indian Cuisine for Weddings, Parties & Events
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="mb-3 text-base font-semibold text-gold">Contact Us</h4>
            <div className="space-y-2 text-sm text-gold/80">
              <p>Sarwan Singh: 9983685264</p>
              <p>Prakash Sain: 6376424249</p>
              <p className="pt-2 font-medium text-gold/90">Bikaner, Rajasthan</p>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="mb-3 text-base font-semibold text-gold">Connect With Us</h4>
            <div className="flex gap-4">
              <a
                href="https://wa.me/919983685264"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors hover:bg-gold/20"
                aria-label="WhatsApp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gold/10 text-gold transition-colors hover:bg-gold/20"
                aria-label="Instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gold/20 pt-6 text-center text-sm text-gold/70">
          <p>© {currentYear} Royal Bikana Caterers. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 fill-gold text-gold" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
