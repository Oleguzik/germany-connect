import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t.nav.events, href: '/events' },
    { name: t.nav.programs, href: '/programs' },
    { name: t.nav.clubs, href: '/clubs' },
    { name: t.nav.about, href: '/about' },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/cod.ua.de', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/cod_e.v/', label: 'Instagram' },
  ];

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <img 
              src="/images/logo.png" 
              alt="COD Logo" 
              className="mb-4 h-12 w-auto"
            />
            <p className="text-sm text-muted-foreground">
              {t.about.missionText}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t.footer.quickLinks}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t.footer.contact}</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>Deutschland</span>
              </li>
              <li className="flex items-start space-x-2 text-sm text-muted-foreground">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <a href="mailto:info@codua.de" className="hover:text-primary">
                  info@codua.de
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">{t.footer.followUs}</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} COD e.V. {t.footer.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  );
};
