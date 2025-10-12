import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Event {
  id: string;
  title: { uk: string; de: string };
  description: { uk: string; de: string };
  date: string;
  time: string;
  location: string;
  type: 'educational' | 'cultural' | 'social';
}

// Mock data - will be replaced with Ghost CMS data
const mockEvents: Event[] = [
  {
    id: '1',
    title: {
      uk: 'Українська мова для дітей',
      de: 'Ukrainisch für Kinder',
    },
    description: {
      uk: 'Заняття з української мови та культури для дітей віком 6-12 років',
      de: 'Ukrainische Sprach- und Kulturunterricht für Kinder im Alter von 6-12 Jahren',
    },
    date: '2025-11-15',
    time: '15:00',
    location: 'COD Zentrum',
    type: 'educational',
  },
  {
    id: '2',
    title: {
      uk: 'Вечір української музики',
      de: 'Abend der ukrainischen Musik',
    },
    description: {
      uk: 'Концерт українських виконавців з традиційною та сучасною музикою',
      de: 'Konzert ukrainischer Künstler mit traditioneller und moderner Musik',
    },
    date: '2025-11-20',
    time: '18:00',
    location: 'Kulturhaus',
    type: 'cultural',
  },
  {
    id: '3',
    title: {
      uk: 'Кулінарний майстер-клас',
      de: 'Kulinarischer Meisterkurs',
    },
    description: {
      uk: 'Готуємо традиційні українські страви разом',
      de: 'Gemeinsam traditionelle ukrainische Gerichte kochen',
    },
    date: '2025-11-25',
    time: '17:00',
    location: 'COD Küche',
    type: 'social',
  },
];

export const EventsSection = () => {
  const { language, t } = useLanguage();

  const getEventTypeLabel = (type: Event['type']) => {
    const labels = {
      educational: t.events.educational,
      cultural: t.events.cultural,
      social: t.events.social,
    };
    return labels[type];
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat(language, { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    }).format(date);
  };

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {t.events.title}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {language === 'uk' 
              ? 'Долучайтесь до наших подій та заходів' 
              : 'Nehmen Sie an unseren Veranstaltungen teil'}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockEvents.map((event) => (
            <Card key={event.id} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <Badge variant="secondary">
                    {getEventTypeLabel(event.type)}
                  </Badge>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    {formatDate(event.date)}
                  </div>
                </div>
                <CardTitle className="text-xl">{event.title[language]}</CardTitle>
                <CardDescription>{event.description[language]}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4" />
                    {event.location}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">
                  {t.events.register}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/events">
              {t.events.viewAll}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
