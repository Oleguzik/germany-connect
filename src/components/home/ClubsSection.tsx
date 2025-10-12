import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Heart, Sparkles, Baby } from 'lucide-react';

export const ClubsSection = () => {
  const { language, t } = useLanguage();

  const clubs = [
    {
      icon: Users,
      title: t.clubs.senior,
      description: language === 'uk'
        ? 'Зустрічі, екскурсії та культурні заходи для старшого покоління'
        : 'Treffen, Ausflüge und kulturelle Veranstaltungen für die ältere Generation',
      color: 'text-primary',
    },
    {
      icon: Heart,
      title: t.clubs.women,
      description: language === 'uk'
        ? 'Майстер-класи, обговорення та взаємопідтримка'
        : 'Workshops, Diskussionen und gegenseitige Unterstützung',
      color: 'text-secondary',
    },
    {
      icon: Sparkles,
      title: t.clubs.youth,
      description: language === 'uk'
        ? 'Творчі проєкти, спорт та соціальні ініціативи для молоді'
        : 'Kreative Projekte, Sport und soziale Initiativen für Jugendliche',
      color: 'text-accent-foreground',
    },
    {
      icon: Baby,
      title: t.clubs.children,
      description: language === 'uk'
        ? 'Ігри, навчання та розваги для наших найменших членів'
        : 'Spiele, Lernen und Unterhaltung für unsere jüngsten Mitglieder',
      color: 'text-primary',
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.clubs.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {language === 'uk'
              ? 'Знайдіть своє коло спілкування та нових друзів'
              : 'Finden Sie Ihre Gemeinschaft und neue Freunde'}
          </p>
        </div>

        {/* Clubs Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clubs.map((club, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                  <club.icon className={`h-8 w-8 ${club.color}`} />
                </div>
                <CardTitle className="text-lg">{club.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{club.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
