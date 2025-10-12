import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Heart, UserPlus, Mail } from 'lucide-react';

export const CTASection = () => {
  const { language, t } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground md:py-24">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
            {language === 'uk' 
              ? 'Долучайтесь до нашої спільноти' 
              : 'Werden Sie Teil unserer Gemeinschaft'}
          </h2>
          <p className="mb-8 text-lg opacity-90">
            {language === 'uk'
              ? 'Ваша підтримка допомагає нам створювати більше можливостей для української громади в Німеччині'
              : 'Ihre Unterstützung hilft uns, mehr Möglichkeiten für die ukrainische Gemeinschaft in Deutschland zu schaffen'}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button 
              size="lg" 
              variant="secondary" 
              className="w-full sm:w-auto"
            >
              <Heart className="mr-2 h-5 w-5" />
              {t.common.donate}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary sm:w-auto"
            >
              <UserPlus className="mr-2 h-5 w-5" />
              {t.about.getInvolved}
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary sm:w-auto"
            >
              <Mail className="mr-2 h-5 w-5" />
              {t.common.contact}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
