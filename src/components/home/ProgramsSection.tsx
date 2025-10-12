import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { BookOpen, Music, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ProgramsSection = () => {
  const { language, t } = useLanguage();

  const programs = [
    {
      icon: BookOpen,
      title: t.programs.education,
      description: language === 'uk'
        ? 'Мовні курси, освітні семінари та культурні лекції для всіх вікових груп'
        : 'Sprachkurse, Bildungsseminare und Kulturvorträge für alle Altersgruppen',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: Music,
      title: t.programs.cultural,
      description: language === 'uk'
        ? 'Концерти, виставки, театральні вистави та святкування українських традицій'
        : 'Konzerte, Ausstellungen, Theateraufführungen und Feiern ukrainischer Traditionen',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: Users,
      title: t.programs.social,
      description: language === 'uk'
        ? 'Підтримка новоприбулих, консультації та допомога в інтеграції'
        : 'Unterstützung für Neuankömmlinge, Beratung und Integrationshilfe',
      color: 'text-accent-foreground',
      bgColor: 'bg-accent',
    },
  ];

  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.programs.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {language === 'uk'
              ? 'Різноманітні програми для підтримки та розвитку нашої громади'
              : 'Vielfältige Programme zur Unterstützung und Entwicklung unserer Gemeinschaft'}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg ${program.bgColor}`}>
                  <program.icon className={`h-6 w-6 ${program.color}`} />
                </div>
                <CardTitle className="text-xl">{program.title}</CardTitle>
                <CardDescription className="text-base">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="w-full" asChild>
                  <Link to="/programs">
                    {t.programs.learnMore}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
