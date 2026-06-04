// ─────────────────────────────────────────────
//  content.js  –  Aquí puedes cambiar todos los
//  textos de la landing sin tocar los componentes
// ─────────────────────────────────────────────

export const navbar = {
  brand: "InToGlobe",
  links: ["Inicio", "Soluciones", "Tecnología", "Nosotros", "Contacto"],
  cta: "Solicitar demo",
};

export const hero = {
  headline1: "Transformamos",
  headline2: "seguridad en",
  highlight: "inteligencia",
  badge: "Think · Create · Transform",
  description:
    "Desarrollamos soluciones de control de acceso, automatización y software que impulsan empresas hacia el futuro.",
  ctaPrimary: "Solicitar demo",
  ctaSecondary: "Conocer más",
};

export const services = {
  sectionTitle: "Nuestras soluciones",
  items: [
    {
      id: 1,
      icon: "Shield",
      title: "Control de Acceso",
      description: "Soluciones robustas para gestionar quién entra y cuándo.",
    },
    {
      id: 2,
      icon: "Fingerprint",
      title: "Biometría Inteligente",
      description: "Reconocimiento facial, huella, RFID y más tecnologías.",
    },
    {
      id: 3,
      icon: "Cpu",
      title: "Automatización e IoT",
      description: "Conecta dispositivos y automatiza procesos de forma inteligente.",
    },
    {
      id: 4,
      icon: "Code2",
      title: "Desarrollo de Software",
      description: "Sistemas a la medida para optimizar tu operación.",
    },
    {
      id: 5,
      icon: "BarChart3",
      title: "Analítica y Reportes",
      description: "Toma decisiones basadas en datos en tiempo real.",
    },
  ],
};

export const stats = {
  sectionTitle: "Tecnología que se adapta a ti",
  items: [
    { value: 250, prefix: "+", suffix: "", label: "Proyectos\ncompletados" },
    { value: 120, prefix: "+", suffix: "", label: "Empresas\nconfían en nosotros" },
    { value: 98,  prefix: "+", suffix: "%", label: "Satisfacción\nde clientes" },
    { value: "24/7", prefix: "", suffix: "", label: "Soporte técnico\nespecializado" },
  ],
};

export const about = {
  sectionTitle: "Nosotros",
  description:
    "En InToGlobe, creamos software a medida para impulsar tu negocio. Desde landing pages impactantes hasta aplicaciones con IA, nuestro equipo convierte tus desafíos en soluciones tecnológicas.",
  tagline: "Think · Create · Transform",
};

export const cta = {
  headline1: "Un mundo de posibilidades",
  headline2: "conectado por la tecnología",
  description: "Soluciones innovadoras para un mundo en constante evolución.",
  button: "Conocer soluciones",
};

export const footer = {
  brand: "InToGlobe",
  tagline: "Think · Create · Transform",
  description: "Transformamos tus desafíos en soluciones tecnológicas de alto impacto.",
  social: [
    { name: "Facebook",  href: "https://facebook.com/intoglobe",  icon: "Facebook" },
    { name: "Instagram", href: "https://instagram.com/intoglobe", icon: "Instagram" },
    { name: "LinkedIn",  href: "https://linkedin.com/company/intoglobe", icon: "Linkedin" },
    { name: "Twitter/X", href: "https://twitter.com/intoglobe",   icon: "Twitter" },
  ],
  links: [
    { label: "Inicio",      href: "#inicio" },
    { label: "Soluciones",  href: "#soluciones" },
    { label: "Tecnología",  href: "#tecnología" },
    { label: "Nosotros",    href: "#nosotros" },
    { label: "Contacto",    href: "#contacto" },
  ],
  copyright: "© 2025 InToGlobe. Todos los derechos reservados.",
  badges: [
    { icon: "ShieldCheck", label: "Seguridad avanzada" },
    { icon: "Link2",       label: "Integración sin límites" },
    { icon: "TrendingUp",  label: "Escalabilidad total" },
    { icon: "Lightbulb",   label: "Innovación constante" },
  ],
};
