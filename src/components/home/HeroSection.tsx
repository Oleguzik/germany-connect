import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20 md:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main heading */}
          <h1 className="mb-6 text-4xl font-heading font-light tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {t.hero.title}
          </h1>
          
          {/* Subtitle */}
          <p className="mb-8 text-lg text-muted-foreground sm:text-xl md:text-2xl">
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="w-full sm:w-auto" asChild>
              <Link to="/donate">
                <Heart className="mr-2 h-5 w-5" />
                {t.hero.cta}
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
              <Link to="/events">
                <Calendar className="mr-2 h-5 w-5" />
                {t.hero.viewEvents}
              </Link>
            </Button>
          </div>

          {/* Ukrainian pattern decoration */}
          <div className="mt-16 flex justify-center gap-2">
            <div className="h-2 w-16 bg-primary" />
            <div className="h-2 w-16 bg-secondary" />
            <div className="h-2 w-16 bg-primary" />
          </div>
        </div>
      </div>
    </section>
  );
};
