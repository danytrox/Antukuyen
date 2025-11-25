"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogPortal, DialogOverlay } from "@/components/ui/dialog"
import { Leaf, Mountain, Heart, Ship, X, MessageCircle, Share2, Facebook, Instagram, Menu, Home, Users as UsersIcon, Sparkles, Phone } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Autoplay from "embla-carousel-autoplay"

export default function TurismoAncestralPage() {
  // SEO - Structured Data
  const structuredData = {
    "@context": "https://schema.org",
    "@type": ["TouristAttraction", "LodgingBusiness"],
    name: "Antukuyen Nativa",
    description:
      "Domos ecológicos y experiencias culturales mapuche huilliche en la mística Isla Huapi, Lago Ranco. Turismo ancestral con talleres de mapudungun, teñido de lana y relatos tradicionales.",
    image: [
      "https://antukuyen.cl/domos-arriba.avif",
      "https://antukuyen.cl/bcadf52e-2dfb-482f-9fee-b3b3d9855c4a.avif",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "Isla Huapi S/n°",
      addressLocality: "Futrono",
      addressRegion: "Región de Los Ríos",
      addressCountry: "CL",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-40.1333",
      longitude: "-72.4000",
    },
    telephone: "+56974543737",
    email: "c.antillancam@gmail.com",
    url: "https://antukuyen.cl",
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    owner: {
      "@type": "Person",
      name: "Claudia Antillanca Manque",
      jobTitle: "Emprendedora Mapuche Huilliche",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "25",
    },
    sameAs: [
      "https://www.facebook.com/domosantukuyen",
      "https://www.instagram.com/cabanas_domo_antukuyen/",
      "https://www.airbnb.cl/rooms/16665460",
    ],
    offers: {
      "@type": "Offer",
      url: "https://www.airbnb.cl/rooms/16665460",
      priceCurrency: "CLP",
      availability: "https://schema.org/InStock",
    },
  }

  // Estados para lightbox y animaciones
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
  
  // Estado para el splash screen
  const [showSplash, setShowSplash] = useState(false)
  
  // Estado para el menú de contacto flotante
  const [showContactMenu, setShowContactMenu] = useState(false)
  
  // Estado para el menú hamburguesa móvil
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Efecto para controlar el splash (solo se muestra una vez por sesión)
  useEffect(() => {
    const splashShown = sessionStorage.getItem('splashShown')
    
    if (!splashShown) {
      setShowSplash(true)
      
      const timer = setTimeout(() => {
        setShowSplash(false)
        sessionStorage.setItem('splashShown', 'true')
      }, 4000)

      return () => clearTimeout(timer)
    }
  }, [])
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      {/* Splash Screen */}
      {showSplash && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-black cursor-pointer"
          onClick={() => {
            setShowSplash(false)
            sessionStorage.setItem('splashShown', 'true')
          }}
        >
          <div className="absolute inset-0 animate-in zoom-in-105 fade-in-0 duration-1000">
            <Image
              src="/bcadf52e-2dfb-482f-9fee-b3b3d9855c4a.avif"
              alt="Isla Huapi - Antukuyen Nativa"
              fill
              priority
              quality={85}
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
          </div>

          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 animate-in slide-in-from-bottom-8 fade-in-0 duration-1000 delay-300">
            <h1 className="font-serif font-black text-6xl md:text-8xl mb-8 leading-tight drop-shadow-2xl">
              Antukuyen Nativa
            </h1>
            <p className="text-2xl md:text-3xl mb-6 font-light leading-relaxed drop-shadow-xl">
              Sol y Luna en idioma mapuzungun
            </p>
            <p className="text-xl md:text-2xl mb-12 font-light leading-relaxed drop-shadow-xl">
              Desconexión total de la ciudad y conexión profunda con la naturaleza en la ancestral Isla Huapi
            </p>
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-xl font-semibold transition-all duration-300 transform hover:scale-110 shadow-2xl animate-in fade-in-0 duration-1000 delay-700"
              asChild
            >
              <a href="https://wa.link/8nh1kp" target="_blank" rel="noopener noreferrer">
                Reserva tu experiencia
              </a>
            </Button>
            
            {/* Indicador para hacer clic */}
            <p className="text-white/70 text-sm mt-8 animate-pulse">
              Haz clic en cualquier lugar para continuar
            </p>
          </div>

          {/* Indicador de progreso */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
            <div className="h-full bg-green-500 animate-[expand_4s_linear_forwards]" style={{
              animation: 'expand 4s linear forwards',
            }} />
          </div>
        </div>
      )}

      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-serif font-black text-xl md:text-2xl text-green-700 hover:text-green-800 transition-colors">
              Antukuyen Nativa
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link href="/sobre-nosotros" className="text-gray-700 hover:text-green-600 transition-colors">
                Sobre Nosotros
              </Link>
              <a href="#domos" className="text-gray-700 hover:text-green-600 transition-colors">
                Domos
              </a>
              <Link href="/experiencias" className="text-gray-700 hover:text-green-600 transition-colors">
                Experiencias
              </Link>
              <a href="#recorrido-lancha" className="text-gray-700 hover:text-green-600 transition-colors">
                Recorrido de Lancha
              </a>
              <Link href="/contacto" className="text-gray-700 hover:text-green-600 transition-colors">
                Contacto
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <button 
                  className="p-2 text-gray-700 hover:text-green-600 transition-colors"
                  aria-label="Abrir menú"
                >
                  <Menu className="w-6 h-6" />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[400px] bg-gradient-to-b from-white to-green-50/30">
                {/* Header del menú */}
                <div className="mb-8 pb-6 border-b border-green-100">
                  <h2 className="font-serif font-black text-2xl text-green-700 mb-2">Antukuyen Nativa</h2>
                  <p className="text-sm text-gray-600">Turismo ancestral mapuche</p>
                </div>

                <nav className="flex flex-col space-y-2">
                  <Link 
                    href="/sobre-nosotros" 
                    className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:translate-x-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <UsersIcon className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-base font-medium text-gray-700 group-hover:text-green-700">Sobre Nosotros</span>
                  </Link>

                  <a 
                    href="#domos" 
                    className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:translate-x-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <Home className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-base font-medium text-gray-700 group-hover:text-green-700">Domos</span>
                  </a>

                  <Link 
                    href="/experiencias" 
                    className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:translate-x-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <Sparkles className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-base font-medium text-gray-700 group-hover:text-green-700">Experiencias</span>
                  </Link>

                  <a 
                    href="#recorrido-lancha" 
                    className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:translate-x-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Ship className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-base font-medium text-gray-700 group-hover:text-green-700">Recorrido de Lancha</span>
                  </a>

                  <Link 
                    href="/contacto" 
                    className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:translate-x-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <Phone className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-base font-medium text-gray-700 group-hover:text-green-700">Contacto</span>
                  </Link>
                </nav>
                  
                {/* Redes Sociales en Mobile Menu */}
                <div className="absolute bottom-8 left-6 right-6">
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 shadow-lg">
                    <p className="text-sm font-semibold text-gray-700 mb-4">Síguenos en redes</p>
                    <div className="flex justify-center space-x-4">
                      <a
                        href="https://wa.link/8nh1kp"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-[#25D366] rounded-2xl flex items-center justify-center hover:bg-[#1fb855] transition-all transform hover:scale-110 shadow-md"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle className="w-7 h-7 text-white" fill="white" />
                      </a>
                      <a
                        href="https://www.instagram.com/cabanas_domo_antukuyen/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-2xl flex items-center justify-center hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all transform hover:scale-110 shadow-md"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-7 h-7 text-white" />
                      </a>
                      <a
                        href="https://www.facebook.com/domosantukuyen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-14 h-14 bg-[#1877F2] rounded-2xl flex items-center justify-center hover:bg-[#0c63d4] transition-all transform hover:scale-110 shadow-md"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-7 h-7 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
      
      {/* Botón Flotante de Contacto */}
      <div className="fixed bottom-8 right-8 z-50">
        {/* Iconos de Redes Sociales - Aparecen con animación */}
        <div className={`flex flex-col gap-3 mb-3 transition-all duration-500 ${
          showContactMenu 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
          {/* WhatsApp */}
          <a
            href="https://wa.link/8nh1kp"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#1fb855] transition-all transform hover:scale-110 shadow-xl animate-in zoom-in-50 fade-in-0 duration-300"
            style={{ animationDelay: '100ms' }}
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-7 h-7 text-white" fill="white" />
          </a>
          
          {/* Instagram */}
          <a
            href="https://www.instagram.com/cabanas_domo_antukuyen/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all transform hover:scale-110 shadow-xl animate-in zoom-in-50 fade-in-0 duration-300"
            style={{ animationDelay: '200ms' }}
            aria-label="Instagram"
          >
            <Instagram className="w-7 h-7 text-white" />
          </a>
          
          {/* Facebook */}
          <a
            href="https://www.facebook.com/domosantukuyen"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#0c63d4] transition-all transform hover:scale-110 shadow-xl animate-in zoom-in-50 fade-in-0 duration-300"
            style={{ animationDelay: '300ms' }}
            aria-label="Facebook"
          >
            <Facebook className="w-7 h-7 text-white" />
          </a>
        </div>
        
        {/* Botón Principal de Contacto */}
        <button
          onClick={() => setShowContactMenu(!showContactMenu)}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-110 ${
            showContactMenu 
              ? 'bg-red-600 hover:bg-red-700 rotate-45' 
              : 'bg-gradient-to-br from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 rotate-0'
          }`}
          aria-label={showContactMenu ? 'Cerrar menú de contacto' : 'Abrir menú de contacto'}
        >
          {showContactMenu ? (
            <X className="w-8 h-8 text-white" />
          ) : (
            <Share2 className="w-8 h-8 text-white" />
          )}
        </button>
      </div>

      {/* Carrusel de Imágenes Principal */}
      <section className="relative py-16 overflow-hidden">
        {/* Imagen de fondo difuminada */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0">
            <Image
              src="/amanecer-montanas-sagradas.png"
              alt="Amanecer en montañas"
              fill
              className="object-cover"
              quality={60}
              loading="lazy"
              sizes="100vw"
            />
          </div>
          <div className="absolute inset-0 bg-white/70 backdrop-blur-md" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif font-black text-4xl md:text-5xl text-gray-800 mb-4 drop-shadow-sm">
              Descubre Antukuyen Nativa
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-medium drop-shadow-sm">
              Imágenes de nuestra experiencia en la ancestral Isla Huapi
            </p>
          </div>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              {[
                { src: "/amanecer-montanas-sagradas.png", alt: "Amanecer en las montañas sagradas" },
                { src: "/ancestral-ceremony-waterfall.png", alt: "Ceremonia ancestral" },
                { src: "/meditating-mountain-sunrise.png", alt: "Meditación al amanecer" },
                { src: "/mystical-ancestral-map.png", alt: "Vista de la isla" },
                { src: "/nocturnal-fire-ritual.png", alt: "Ritual nocturno" },
              ].map((image, index) => (
                <CarouselItem key={index}>
                  <div className="p-2">
                    <Card className="border-0 overflow-hidden shadow-2xl">
                      <CardContent className="p-0">
                        <div
                          className="relative h-[500px] md:h-[600px] overflow-hidden cursor-pointer group"
                          onClick={() => setSelectedImage(image)}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            quality={75}
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 80vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/90 rounded-full p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-gray-800"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute bottom-8 left-8 right-8">
                            <p className="text-white font-bold text-2xl md:text-3xl drop-shadow-2xl">{image.alt}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-white/90 hover:bg-white border-green-600 text-green-600 w-12 h-12" />
            <CarouselNext className="right-4 bg-white/90 hover:bg-white border-green-600 text-green-600 w-12 h-12" />
          </Carousel>
        </div>
      </section>


      {/* Domos Section */}
      <section id="domos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif font-black text-4xl md:text-5xl text-gray-800 mb-6">Domos Antukuyen</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nuestro innovador diseño arquitectónico refleja el símil de una ruca, tomando aspectos de nuestra
              cosmovisión mapuche.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Mountain className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-gray-800 mb-2">Domo Kuyen (Luna)</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Alojamiento para 5 personas, full equipado con amplias terrazas y vista espectacular del lago Ranco.
                    Incluye kayak.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                  <Leaf className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-gray-800 mb-2">Energía Solar</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Domos iluminados con paneles solares, en armonía con la naturaleza y respetando el medio ambiente.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group cursor-pointer">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-gray-800 mb-2">Playa de Piedras</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Cerca de una hermosa playa de piedras donde puedes disfrutar mágicos amaneceres y la tranquilidad
                    del lago.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="relative cursor-pointer group h-[400px] md:h-[500px]"
              onClick={() =>
                setSelectedImage({ src: "/mystical-ancestral-map.png", alt: "Vista de los Domos Antukuyen" })
              }
            >
              <Image
                src="/domos-arriba.avif"
                alt="Domos Antukuyen ecológicos en Isla Huapi con vista panorámica al Lago Ranco y la cordillera, turismo ancestral mapuche huilliche"
                fill
                className="object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
                quality={80}
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl group-hover:from-black/30 transition-colors duration-300" />
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 rounded-full p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-800"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Recorrido de Lancha Section */}
      <section id="recorrido-lancha" className="py-20 bg-gradient-to-b from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Ship className="w-10 h-10 text-blue-600" />
            </div>
            <h2 className="font-serif font-black text-4xl md:text-5xl text-gray-800 mb-6">
              Recorrido de Lancha por el Lago Ranco
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre la belleza del lago Ranco y sus alrededores en una experiencia única navegando por aguas
              cristalinas con vistas espectaculares a la cordillera y la naturaleza de la Isla Huapi.
            </p>
          </div>

          {/* Carrusel de Fotos de Recorrido */}
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            className="w-full max-w-6xl mx-auto mb-12"
          >
            <CarouselContent>
              {[
                { src: "/amanecer-montanas-sagradas.png", alt: "Vista panorámica del lago al amanecer" },
                { src: "/mystical-ancestral-map.png", alt: "Lancha navegando por el lago" },
                { src: "/meditating-mountain-sunrise.png", alt: "Cordillera desde el lago" },
                { src: "/ancestral-ceremony-waterfall.png", alt: "Orillas naturales de la isla" },
                { src: "/nocturnal-fire-ritual.png", alt: "Atardecer en el lago Ranco" },
              ].map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2">
                  <div className="p-3">
                    <Card className="border-0 overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300">
                      <CardContent className="p-0">
                        <div
                          className="relative h-96 overflow-hidden group cursor-pointer"
                          onClick={() => setSelectedImage(image)}
                        >
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            quality={75}
                            loading="lazy"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 via-transparent to-transparent" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/90 rounded-full p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-800"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="absolute bottom-0 left-0 right-0 p-6">
                            <p className="text-white font-bold text-xl drop-shadow-2xl">{image.alt}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/90 hover:bg-white border-blue-600 text-blue-600" />
            <CarouselNext className="right-2 bg-white/90 hover:bg-white border-blue-600 text-blue-600" />
          </Carousel>

          {/* Información del Recorrido */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <Mountain className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-800 mb-3">Vistas Espectaculares</h3>
                <p className="text-gray-600 leading-relaxed">
                  Disfruta de vistas panorámicas únicas de la cordillera y los paisajes naturales del lago Ranco
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-cyan-200 transition-colors">
                  <Ship className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-800 mb-3">Experiencia Auténtica</h3>
                <p className="text-gray-600 leading-relaxed">
                  Navega en lancha tradicional con guías locales que conocen cada rincón del lago
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-serif font-bold text-xl text-gray-800 mb-3">Conexión con la Naturaleza</h3>
                <p className="text-gray-600 leading-relaxed">
                  Observa la flora y fauna nativa mientras recorres las tranquilas aguas del lago
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <a href="https://wa.link/8nh1kp" target="_blank" rel="noopener noreferrer">
                Reserva tu Recorrido de Lancha
              </a>
            </Button>
          </div>
        </div>
      </section>


      {/* Call to Action Final */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif font-black text-4xl md:text-5xl mb-6">Vive la experiencia Antukuyen</h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Desconéctate de la ciudad y conéctate profundamente con la naturaleza y la cultura mapuche en la mística
            Isla Huapi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://wa.link/8nh1kp" target="_blank" rel="noopener noreferrer">
                Reserva por WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
              asChild
            >
              <a
                href="https://www.airbnb.cl/rooms/16665460?source_impression_id=p3_1762987017_P32SfMac-9eBagLx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Alojamiento
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif font-black text-2xl text-green-400 mb-4">Antukuyen Nativa</h3>
              <p className="text-gray-300 leading-relaxed">
                Turismo ancestral mapuche huilliche en la mística Isla Huapi, conectando con la naturaleza y nuestras
                tradiciones.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Navegación</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/" className="hover:text-green-400 transition-colors">
                    Inicio
                  </Link>
                </li>
                <li>
                  <Link href="/sobre-nosotros" className="hover:text-green-400 transition-colors">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/experiencias" className="hover:text-green-400 transition-colors">
                    Experiencias
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#domos" className="hover:text-green-400 transition-colors">
                    Domos Kuyen
                  </a>
                </li>
                <li>
                  <a href="#recorrido-lancha" className="hover:text-green-400 transition-colors">
                    Recorrido de Lancha
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Contacto</h4>
              <ul className="space-y-2 text-gray-300">
                <li>c.antillancam@gmail.com</li>
                <li>+56 9 7454 3737</li>
                <li>Isla Huapi, Futrono, Chile</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Antukuyen Nativa - Claudia Antillanca Manque. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal para ver imágenes en grande */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogPortal>
          <DialogOverlay 
            className="bg-black/95 backdrop-blur-md cursor-pointer" 
            onClick={() => setSelectedImage(null)}
          />
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            {/* Botón de cerrar */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 bg-white/95 hover:bg-white rounded-full p-3 shadow-2xl transition-all duration-200 transform hover:scale-110 hover:rotate-90"
              aria-label="Cerrar"
            >
              <X className="w-7 h-7 text-gray-800" />
            </button>

            {/* Imagen en grande */}
            {selectedImage && (
              <div className="relative w-full h-full flex flex-col items-center justify-center pointer-events-none">
                <div className="w-full h-full flex items-center justify-center relative">
                  <div className="relative max-w-[95vw] max-h-[88vh] w-full h-full pointer-events-auto cursor-default" onClick={(e) => e.stopPropagation()}>
                    <Image
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      fill
                      className="object-contain rounded-lg shadow-2xl animate-in zoom-in-95 fade-in-0 duration-300"
                      quality={90}
                      sizes="95vw"
                    />
                  </div>
                </div>
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-black/90 backdrop-blur-md rounded-xl px-8 py-4 shadow-2xl max-w-4xl animate-in slide-in-from-bottom-4 duration-500">
                  <p className="text-white text-lg md:text-2xl font-bold text-center drop-shadow-lg">
                    {selectedImage.alt}
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogPortal>
      </Dialog>
      </div>
    </>
  )
}
