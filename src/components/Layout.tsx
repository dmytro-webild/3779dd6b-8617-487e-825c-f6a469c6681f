import FooterBrand from '@/components/sections/footer/FooterBrand';
import NavbarFullscreenStatic from '@/components/ui/NavbarFullscreenStatic';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Inicio",
    "href": "#hero"
  },
  {
    "name": "Sobre Nosotros",
    "href": "#about"
  },
  {
    "name": "Programas",
    "href": "#programs"
  },
  {
    "name": "Contacto",
    "href": "#contact"
  },
  {
    "name": "Features",
    "href": "#features"
  },
  {
    "name": "Gallery",
    "href": "#gallery"
  },
  {
    "name": "Faq",
    "href": "#faq"
  }
];

  return (
    <StyleProvider buttonVariant="expand" siteBackground="noiseGradient" heroBackground="horizonGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFullscreenStatic
      logo="Quiles Baseball"
      ctaButton={{
        text: "Registrarse",
        href: "#registration",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterBrand
      brand="Quiles Baseball Development"
      columns={[
        {
          items: [
            {
              label: "Inicio",
              href: "#hero",
            },
            {
              label: "Programas",
              href: "#programs",
            },
            {
              label: "FAQ",
              href: "#faq",
            },
          ],
        },
        {
          items: [
            {
              label: "Política de Privacidad",
              href: "#",
            },
            {
              label: "Términos y Condiciones",
              href: "#",
            },
          ],
        },
        {
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Facebook",
              href: "#",
            },
            {
              label: "TikTok",
              href: "#",
            },
          ],
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
