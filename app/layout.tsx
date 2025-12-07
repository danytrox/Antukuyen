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
    <html lang="es" className={`${montserrat.variable} ${openSans.variable} antialiased splash-visible`}>
      <body className="font-sans">
        {/* Server-rendered splash overlay (controlled by inline script) */}
        <div
          id="splash-overlay"
          style={{ display: "flex", background: "linear-gradient(180deg,#000 0%, rgba(0,0,0,0.85) 100%)" }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden cursor-pointer"
        >
          {/* Lightweight splash: no external images required so it appears instantly on slow networks */}
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
            <div className="mx-auto mb-6" style={{ width: 96, height: 96 }}>
              {/* Simple inline SVG logo to avoid external image load */}
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" width="96" height="96" aria-hidden>
                <circle cx="50" cy="50" r="48" fill="#0f766e" />
                <text x="50%" y="55%" textAnchor="middle" fontFamily="Montserrat, serif" fontWeight="700" fontSize="28" fill="#fff">A</text>
              </svg>
            </div>
            <h1 className="font-serif font-black text-4xl md:text-6xl mb-4 leading-tight drop-shadow-2xl">
              Antukuyen Nativa
            </h1>
            <p className="text-lg md:text-xl mb-6 font-light leading-relaxed drop-shadow-xl">
              Desconexión y conexión con la naturaleza en Isla Huapi
            </p>
            <a
              href="https://wa.link/8nh1kp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-base font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              Reserva tu experiencia
            </a>
            <p className="text-white/70 text-sm mt-6 animate-pulse">Haz clic en cualquier lugar para continuar</p>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <div className="h-full bg-green-500" style={{ width: "100%" }} />
          </div>
        </div>

        {/* Inline script: muestra el splash inmediatamente antes de hidratación si no se ha mostrado en la sesión */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var shown=sessionStorage.getItem('splashShown');var overlay=document.getElementById('splash-overlay');if(!overlay) return; if(shown){overlay.style.display='none'; try{sessionStorage.setItem('splashShown','true')}catch(e){} } else {overlay.style.display='flex'; var hide=function(){overlay.style.display='none'; try{sessionStorage.setItem('splashShown','true')}catch(e){} }; overlay.addEventListener('click',hide); setTimeout(hide,4000);} }catch(e){console.error(e)}})();`,
          }}
        />

        {children}
      </body>
    </html>
  )
}
