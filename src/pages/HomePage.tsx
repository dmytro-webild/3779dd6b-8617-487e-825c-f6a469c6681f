import AboutFeaturesSplit from '@/components/sections/about/AboutFeaturesSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import HeroBillboardTiltedCarousel from '@/components/sections/hero/HeroBillboardTiltedCarousel';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import { Award, Users, Zap } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardTiltedCarousel
      tag="Desarrollo de Élite"
      title="Desarrollando el talento de la próxima generación de peloteros."
      description="Entrenamientos de béisbol para jugadores de todas las edades enfocados en fundamentos, disciplina, velocidad, fuerza y desarrollo integral."
      primaryButton={{
        text: "Reservar Entrenamiento",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Contáctanos",
        href: "#contact",
      }}
      items={[
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FpiWD2mEatqO8d1l0ntgz68nHG/uploaded-1782926144002-83jhu8pd.jpg?_wi=1",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FpiWD2mEatqO8d1l0ntgz68nHG/uploaded-1782926144004-8p4zicxt.jpg?_wi=1",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FpiWD2mEatqO8d1l0ntgz68nHG/uploaded-1782926144004-spkyru6f.jpg?_wi=1",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FpiWD2mEatqO8d1l0ntgz68nHG/uploaded-1782926144006-hjljxp62.jpg?_wi=1",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FpiWD2mEatqO8d1l0ntgz68nHG/uploaded-1783002394340-b256z9ht.jpg?_wi=1",
        },
        {
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FpiWD2mEatqO8d1l0ntgz68nHG/uploaded-1783002715658-7a70piou.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutFeaturesSplit
      tag="Nuestra Misión"
      title="Fundadores comprometidos con tu éxito"
      description="Quiles Baseball Development nace de la visión de un jugador colegial con la misión de transformar a jóvenes atletas. No solo enseñamos béisbol; cultivamos disciplina, confianza, liderazgo y una ética de trabajo incansable para maximizar el potencial de cada jugador."
      items={[
        {
          icon: Award,
          title: "Entrenamiento Personalizado",
          description: "Programas diseñados según las necesidades específicas de cada pelotero.",
        },
        {
          icon: Zap,
          title: "Desarrollo Integral",
          description: "Enfocados en fundamentos técnicos, fuerza, velocidad y acondicionamiento mental.",
        },
        {
          icon: Users,
          title: "Liderazgo",
          description: "Formamos jugadores con carácter, confianza y mentalidad ganadora dentro y fuera del campo.",
        },
      ]}
      imageSrc="https://storage.googleapis.com/webild/users/user_3FpiWD2mEatqO8d1l0ntgz68nHG/uploaded-1782926144004-spkyru6f.jpg?_wi=2"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesTaggedCards
      tag="Por qué Elegirnos"
      title="El camino hacia la excelencia en el béisbol"
      description="Ofrecemos una metodología de entrenamiento comprobada que garantiza una evolución constante."
      items={[
        {
          tag: "Técnica",
          title: "Fundamentos Sólidos",
          description: "Dominio de las mecánicas básicas esenciales para cualquier nivel de juego.",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FpiWD2mEatqO8d1l0ntgz68nHG/uploaded-1782926144002-83jhu8pd.jpg",
          primaryButton: {
            text: "Saber Más",
            href: "#",
          },
        },
        {
          tag: "Potencia",
          title: "Fuerza y Agilidad",
          description: "Programas de acondicionamiento físico diseñados para atletas de alto rendimiento.",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FpiWD2mEatqO8d1l0ntgz68nHG/uploaded-1782926144004-spkyru6f.jpg",
          primaryButton: {
            text: "Saber Más",
            href: "#",
          },
        },
        {
          tag: "Mentatal",
          title: "Disciplina Ganadora",
          description: "Desarrollamos la confianza y la disciplina necesaria para triunfar bajo presión.",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FpiWD2mEatqO8d1l0ntgz68nHG/uploaded-1782926144006-hjljxp62.jpg?_wi=2",
          primaryButton: {
            text: "Saber Más",
            href: "#",
          },
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="programs" data-section="programs">
    <SectionErrorBoundary name="programs">
          <FeaturesRevealCardsBento
      tag="Nuestros Programas"
      title="Programas diseñados para ti"
      description="Desde principiantes hasta jugadores avanzados, tenemos el entrenamiento perfecto."
      items={[
        {
          title: "Individual",
          description: "Entrenamiento 1-a-1 enfocado en correcciones específicas.",
          href: "#",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FpiWD2mEatqO8d1l0ntgz68nHG/uploaded-1783002394340-b256z9ht.jpg?_wi=2",
        },
        {
          title: "En Grupo",
          description: "Trabajo colaborativo y competitivo en equipo.",
          href: "#",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FpiWD2mEatqO8d1l0ntgz68nHG/uploaded-1783002660449-fldefwe5.jpg",
        },
        {
          title: "Clínicas",
          description: "Intensivos de fin de semana para desarrollo rápido.",
          href: "#",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FpiWD2mEatqO8d1l0ntgz68nHG/uploaded-1782926144006-hjljxp62.jpg",
        },
        {
          title: "Bateo",
          description: "Perfeccionamiento de mecánicas de swing y poder.",
          href: "#",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FpiWD2mEatqO8d1l0ntgz68nHG/uploaded-1782926144004-8p4zicxt.jpg?_wi=2",
        },
        {
          title: "Defensa",
          description: "Dominio del guante y desplazamientos en el cuadro.",
          href: "#",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FpiWD2mEatqO8d1l0ntgz68nHG/tmp/baseball-player-filding-a-baseball-1783003934332-f0fde137.png",
        },
        {
          title: "Lanzamiento",
          description: "Control, mecánica y seguridad en el montículo.",
          href: "#",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FpiWD2mEatqO8d1l0ntgz68nHG/tmp/baseball-player-throwing-a-baseball-1783003846154-bd0fb19e.png",
        },
        {
          title: "Velocidad",
          description: "Agilidad, velocidad de piernas y explosividad.",
          href: "#",
          imageSrc: "https://storage.googleapis.com/webild/users/user_3FpiWD2mEatqO8d1l0ntgz68nHG/tmp/baseball-player-running-1783003781899-43dd0b47.png",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="gallery" data-section="gallery">
    <SectionErrorBoundary name="gallery">
          <MetricsSimpleCards
      tag="Impacto"
      title="Resultados en el Campo"
      description="Estamos comprometidos con el desarrollo constante de nuestros atletas."
      metrics={[
        {
          value: "+500",
          description: "Peloteros formados",
        },
        {
          value: "100%",
          description: "Enfoque en disciplina",
        },
        {
          value: "12+",
          description: "Programas especializados",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSimple
      tag="Preguntas Frecuentes"
      title="¿Tienes dudas?"
      description="Estamos aquí para ayudarte a comenzar tu carrera en el béisbol."
      items={[
        {
          question: "¿Qué edades entrenan?",
          answer: "Entrenamos peloteros desde nivel infantil hasta colegial.",
        },
        {
          question: "¿Necesito experiencia?",
          answer: "No, recibimos jugadores de todos los niveles de experiencia.",
        },
        {
          question: "¿Qué equipo necesito?",
          answer: "Guante, spikes y equipo básico de bateo; nosotros proveemos los materiales de práctica.",
        },
        {
          question: "¿Dónde se realizan las prácticas?",
          answer: "Contamos con instalaciones de primer nivel en Puerto Rico.",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Contacto"
      text="¿Listo para empezar a entrenar como un profesional? Reserva tu espacio hoy mismo."
      primaryButton={{
        text: "Registrarse",
        href: "#",
      }}
      secondaryButton={{
        text: "Enviar Texto",
        href: "sms:908-340-5099",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
