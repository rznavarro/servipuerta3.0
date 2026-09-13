export const business = {
  phone: "+56 9 5511 6728",
  phoneHref: "tel:+56955116728",
  whatsappBase: "https://wa.me/56955116728",
  email: "contacto@servipuerta.cl",
  instagram: "https://www.instagram.com/cerrajeria_servipuerta/",
  facebook: "https://www.facebook.com/people/Servi-Puerta/61573322147769/",
};

export function whatsappUrl(message: string) {
  return `${business.whatsappBase}?text=${encodeURIComponent(message)}`;
}

export type NavLink = { href: string; label: string };
export const navLinks: NavLink[] = [
  { href: "#servicios", label: "Servicios" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#digitales", label: "Cerraduras digitales" },
  { href: "#cobertura", label: "Cobertura" },
  { href: "#faq", label: "Preguntas" },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  image: string;
  whatsappMessage: string;
  ctaLabel: string;
};
export const services: Service[] = [
  {
    slug: "apertura-de-puertas",
    title: "Apertura de puertas",
    description:
      "Casas, departamentos y oficinas. Técnica de apertura sin daño a la puerta ni al marco. Si la cerradura quedó inservible, la reemplazamos en la misma visita.",
    image: "/images/apertura-puertas.jpg",
    whatsappMessage: "Hola, necesito una apertura de puerta. Mi comuna es:",
    ctaLabel: "Pedir apertura",
  },
  {
    slug: "cambio-de-cilindros",
    title: "Cambio de cilindros y reparación",
    description:
      "Cambio de cilindro por pérdida de llaves, mudanza o intento de robo. Reparación integral de la cerradura, el picaporte y el marco cuando hace falta.",
    image: "/images/cambio-cerraduras.jpg",
    whatsappMessage: "Hola, quiero cambiar o reparar la cerradura de mi puerta.",
    ctaLabel: "Cotizar cambio",
  },
  {
    slug: "cerraduras-digitales",
    title: "Cerraduras digitales",
    description:
      "Instalación y configuración de Smart Lock, EZVIZ y Yale: huella, PIN, tarjeta y app móvil. Incluye la configuración de usuarios y la entrega funcionando.",
    image: "/images/cerraduras-digitales.jpg",
    whatsappMessage: "Hola, quiero cotizar la instalación de una cerradura digital.",
    ctaLabel: "Cotizar instalación",
  },
];

export type SupportService = { title: string; description: string };
export const supportServices: SupportService[] = [
  { title: "Control de acceso", description: "Tarjeta y código para oficinas, edificios y locales comerciales." },
  { title: "Cerrajería automotriz", description: "Apertura de vehículos sin forzar la chapa ni el burlete." },
  { title: "Reparación integral", description: "Cerradura, marco y picaporte revisados y ajustados en una visita." },
];

export type Step = { number: string; title: string; description: string };
export const steps: Step[] = [
  {
    number: "01",
    title: "Llamás o escribís",
    description: "Nos contás dónde estás y qué cerradura es. Atendemos las 24 horas, incluidos festivos.",
  },
  {
    number: "02",
    title: "Confirmamos precio y tiempo",
    description:
      "Te damos el valor y la hora de llegada por teléfono, antes de mover el vehículo. Sin sorpresas al final.",
  },
  {
    number: "03",
    title: "Llegamos",
    description:
      "Técnico certificado, identificado y con el maletín completo. Menos de 20 minutos en la mayoría de las comunas de la RM.",
  },
  {
    number: "04",
    title: "Abrimos sin dañar y pagás",
    description: "Probamos la cerradura frente a ti, emitimos boleta o factura y dejamos la garantía por escrito.",
  },
];

export type UnlockMethod = { title: string; description: string };
export const unlockMethods: UnlockMethod[] = [
  { title: "Huella", description: "Apertura en menos de un segundo" },
  { title: "PIN", description: "Códigos temporales para visitas" },
  { title: "Tarjeta", description: "Ideal para oficinas y equipos" },
  { title: "App móvil", description: "Abrís y auditás desde el celular" },
];

export type Zone = { name: string; comunas: string[] };
export const zones: Zone[] = [
  {
    name: "Centro",
    comunas: ["Santiago Centro", "Estación Central", "Quinta Normal", "Independencia", "Recoleta"],
  },
  {
    name: "Oriente",
    comunas: ["Providencia", "Las Condes", "Vitacura", "Lo Barnechea", "Ñuñoa", "La Reina", "Macul", "Peñalolén"],
  },
  {
    name: "Sur",
    comunas: [
      "San Miguel",
      "La Florida",
      "Puente Alto",
      "La Cisterna",
      "San Bernardo",
      "San Joaquín",
      "Pedro Aguirre Cerda",
      "Lo Espejo",
      "El Bosque",
      "La Granja",
      "La Pintana",
      "Buin",
    ],
  },
  {
    name: "Poniente",
    comunas: ["Maipú", "Pudahuel", "Cerrillos", "Renca", "Peñaflor", "Talagante", "Padre Hurtado", "Melipilla"],
  },
  {
    name: "Norte",
    comunas: ["Conchalí", "Huechuraba", "Quilicura", "Colina", "Lampa"],
  },
];

export type Faq = { question: string; answer: string };
export const faqs: Faq[] = [
  {
    question: "¿Cuánto cuesta una apertura de puerta?",
    answer:
      "El precio se confirma por teléfono antes de que salga el técnico, según el tipo de cerradura y la comuna. No cobramos por visita ni agregamos cargos al terminar: el valor que te damos en la llamada es el que pagás.",
  },
  {
    question: "¿Cuánto tardan en llegar?",
    answer:
      "Menos de 20 minutos en la mayoría de las comunas de la Región Metropolitana. Al llamar te confirmamos la hora exacta de llegada según el tráfico y tu ubicación.",
  },
  {
    question: "¿Se daña la puerta al abrirla?",
    answer:
      "No. Trabajamos con técnicas de apertura que no dañan la puerta ni el marco. Si la cerradura queda inservible por su propio estado, te lo decimos antes y la reemplazamos en la misma visita.",
  },
  {
    question: "¿Atienden de noche y en festivos?",
    answer:
      "Sí, atendemos las 24 horas, todos los días del año, incluidos festivos y de madrugada. El mismo número funciona a cualquier hora: +56 9 5511 6728.",
  },
  {
    question: "¿Qué formas de pago aceptan y emiten boleta?",
    answer: "Emitimos boleta y factura por todos los trabajos. Las formas de pago disponibles se confirman en la llamada.",
  },
  {
    question: "¿El trabajo tiene garantía?",
    answer:
      "Sí. Toda instalación y cambio de cerradura queda con garantía por escrito, entregada al finalizar junto con la boleta.",
  },
  {
    question: "¿Abren vehículos?",
    answer:
      "Sí, hacemos cerrajería automotriz: apertura de vehículos sin forzar la chapa ni dañar el burlete. Indicanos marca y modelo al llamar.",
  },
];

export const trustPhrases: string[] = [
  "Boleta y factura",
  "Presupuesto antes de trabajar",
  "Garantía por escrito",
  "Yale",
  "EZVIZ",
  "Smart Lock",
  "Toda la Región Metropolitana",
];
