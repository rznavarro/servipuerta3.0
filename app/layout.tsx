import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import SmoothScrollProvider from "@/components/layout/SmoothScrollProvider";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Cerrajería ServiPuerta — Cerrajero a domicilio 24/7 en Santiago",
  description:
    "Apertura de puertas sin daños, cambio de cerraduras y cerraduras digitales en toda la Región Metropolitana. Atención 24 horas, técnicos certificados, presupuesto confirmado antes de trabajar.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${interTight.variable}`}>
      <body className="font-sans antialiased">
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
