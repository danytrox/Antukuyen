import type React from "react"
import type { Metadata } from "next"
import { Montserrat, Open_Sans } from "next/font/google"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Antukuyen Nativa | Turismo Ancestral Mapuche Huilliche en Isla Huapi, Futrono",
  description:
    "Domos ecológicos y experiencias culturales mapuche huilliche en la mística Isla Huapi, Lago Ranco. Turismo ancestral con talleres de mapudungun, teñido de lana y relatos tradicionales. Reserva tu experiencia única en la naturaleza.",
  keywords: [
    "turismo ancestral",
    "mapuche huilliche",
    "Isla Huapi",
    "Futrono",
    "Lago Ranco",
    "domos ecológicos",
    "turismo cultural",
    "Chile",
    "experiencias mapuche",
    "taller mapudungun",
    "teñido lana",
    "turismo sostenible",
    "Antukuyen Nativa",
    "Claudia Antillanca Manque",
  ],
  authors: [{ name: "Claudia Antillanca Manque" }],
  creator: "Claudia Antillanca Manque",
  publisher: "Antukuyen Nativa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://antukuyen.cl"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Antukuyen Nativa | Turismo Ancestral Mapuche Huilliche en Isla Huapi",
    description:
      "Domos ecológicos y experiencias culturales mapuche huilliche en la mística Isla Huapi, Lago Ranco. Turismo ancestral con talleres de mapudungun, teñido de lana y relatos tradicionales.",
    url: "/",
    siteName: "Antukuyen Nativa",
    locale: "es_CL",
    type: "website",
    images: [
      {
        url: "/domos-arriba.avif",
        width: 1200,
        height: 630,
        alt: "Domos Antukuyen en Isla Huapi con vista al Lago Ranco",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antukuyen Nativa | Turismo Ancestral Mapuche Huilliche",
    description:
      "Domos ecológicos y experiencias culturales mapuche huilliche en la mística Isla Huapi, Lago Ranco.",
    images: ["/domos-arriba.avif"],
    creator: "@antukuyen",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || "",
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION || "",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${openSans.variable} antialiased`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
