"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Dialog, DialogContent, DialogPortal, DialogOverlay } from "@/components/ui/dialog"
import { MapPin, Leaf, Mountain, Users, Heart, Phone, Mail, Facebook, Instagram, Youtube, Ship, X } from "lucide-react"
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
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  // Intersection Observer para animaciones de cards
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    cardRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setTimeout(() => {
                  setVisibleCards((prev) => [...prev, index])
                }, index * 200) // Delay progresivo para cada card
              }
            })
          },
          { threshold: 0.1 }
        )
        observer.observe(ref)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section - Portada Inmersiva */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/bcadf52e-2dfb-482f-9fee-b3b3d9855c4a.avif')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>

        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="font-serif font-black text-5xl md:text-7xl mb-6 leading-tight">Antukuyen Nativa</h1>
          <p className="text-xl md:text-2xl mb-4 font-light leading-relaxed">Sol y Luna en idioma mapuzungun</p>
          <p className="text-lg md:text-xl mb-8 font-light leading-relaxed">
            Desconexión total de la ciudad y conexión profunda con la naturaleza en la ancestral Isla Huapi
          </p>
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            asChild
          >
            <a href="https://wa.link/8nh1kp" target="_blank" rel="noopener noreferrer">
              Reserva tu experiencia
            </a>
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="font-serif font-black text-2xl text-green-700">Antukuyen Nativa</div>
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#sobre-nosotros" className="text-gray-700 hover:text-green-600 transition-colors">
                Sobre Nosotros
              </a>
              <a href="#domos" className="text-gray-700 hover:text-green-600 transition-colors">
                Domos
              </a>
              <a href="#experiencias" className="text-gray-700 hover:text-green-600 transition-colors">
                Experiencias
              </a>
              <a href="#recorrido-lancha" className="text-gray-700 hover:text-green-600 transition-colors">
                Recorrido de Lancha
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-green-600 transition-colors">
                Contacto
              </a>
            </div>
            <div className="flex items-center space-x-4">
              {/* Iconos de Redes Sociales */}
              <div className="flex items-center space-x-3">
                <a
                  href="https://www.facebook.com/domosantukuyen"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-all transform hover:scale-110"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 text-white" />
                </a>
                <a
                  href="https://www.instagram.com/cabanas_domo_antukuyen/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
              <Button
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
              >
                <a href="https://wa.link/8nh1kp" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Carrusel de Imágenes Principal */}
      <section className="relative py-16 overflow-hidden">
        {/* Imagen de fondo difuminada */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('/amanecer-montanas-sagradas.png')`,
            }}
          />
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
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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

      {/* Sobre Nosotros Section */}
      <section id="sobre-nosotros" className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h2 className="font-serif font-black text-4xl md:text-5xl text-gray-800 mb-6">Nuestra Historia</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Soy Claudia Antillanca Manque, mapuche Huilliche, mujer emprendedora y visionaria que busca
                desarrollarse en su tierra aportando a la comunidad con su emprendimiento turístico, generando fuente
                laboral para mujeres y jóvenes.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Mi objetivo es entregar un servicio de calidad poniendo en valor mi cultura y mi comunidad.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Leaf,
                iconBg: "bg-green-100",
                iconHoverBg: "group-hover:bg-green-200",
                iconColor: "text-green-600",
                title: "Cultura Mapuche Huilliche",
                description:
                  "Charlas de relatos locales, talleres de mapudungun y teñido de lana para conectar con nuestras tradiciones ancestrales.",
                badge: "Tradición viva",
                badgeBg: "bg-emerald-100 text-emerald-700",
              },
              {
                icon: Mountain,
                iconBg: "bg-emerald-100",
                iconHoverBg: "group-hover:bg-emerald-200",
                iconColor: "text-emerald-600",
                title: "Isla Huapi Ancestral",
                description:
                  "Una isla mística con vistas espectaculares a la cordillera y el lago Ranco, donde la naturaleza abraza el alma.",
                badge: "Paisaje sagrado",
                badgeBg: "bg-green-100 text-green-700",
              },
              {
                icon: Users,
                iconBg: "bg-green-100",
                iconHoverBg: "group-hover:bg-green-200",
                iconColor: "text-green-600",
                title: "Comunidad y Trabajo",
                description:
                  "Trabajo complementario con emprendedoras artesanas, huerteras y guías locales, fortaleciendo nuestra comunidad.",
                badge: "Desarrollo local",
                badgeBg: "bg-emerald-100 text-emerald-700",
              },
            ].map((card, index) => {
              const Icon = card.icon
              const isVisible = visibleCards.includes(index)
              return (
                <div
                  key={index}
                  ref={(el) => {
                    cardRefs.current[index] = el
                  }}
                  className={`transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm h-full">
                    <CardContent className="p-8">
                      <div
                        className={`w-16 h-16 ${card.iconBg} rounded-full flex items-center justify-center mb-6 ${card.iconHoverBg} transition-colors`}
                      >
                        <Icon className={`w-8 h-8 ${card.iconColor}`} />
                      </div>
                      <h3 className="font-serif font-bold text-2xl text-gray-800 mb-4">{card.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{card.description}</p>
                      <Badge variant="secondary" className={card.badgeBg}>
                        {card.badge}
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              )
            })}
          </div>
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
              className="relative cursor-pointer group"
              onClick={() =>
                setSelectedImage({ src: "/mystical-ancestral-map.png", alt: "Vista de los Domos Antukuyen" })
              }
            >
              <img
                src="/domos-arriba.avif"
                alt="Domos Antukuyen ecológicos en Isla Huapi con vista panorámica al Lago Ranco y la cordillera, turismo ancestral mapuche huilliche"
                className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
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

      {/* Experiencias Section */}
      <section id="experiencias" className="py-20 bg-gradient-to-b from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif font-black text-4xl md:text-5xl text-gray-800 mb-6">Experiencias Culturales</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Actividades que conectan con la cultura Huilliche y la naturaleza de la Isla Huapi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/meditating-mountain-sunrise.png",
                title: "Taller de Mapudungun",
                description: "Aprende el idioma ancestral mapuche y conecta con la sabiduría de nuestros antepasados.",
                badge: "Cultura",
              },
              {
                image: "/ancestral-ceremony-waterfall.png",
                title: "Teñido de Lana",
                description: "Técnicas tradicionales de teñido usando plantas nativas de la región.",
                badge: "Artesanía",
              },
              {
                image: "/nocturnal-fire-ritual.png",
                title: "Relatos Locales",
                description: "Charlas sobre la historia y tradiciones de la cultura Huilliche en Isla Huapi.",
                badge: "Tradición",
              },
            ].map((experience, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm overflow-hidden"
              >
                <div
                  className="relative h-64 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage({ src: experience.image, alt: experience.title })}
                >
                  <img
                    src={experience.image || "/placeholder.svg"}
                    alt={`${experience.title} - ${experience.description} en Antukuyen Nativa, Isla Huapi`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
                  <div className="absolute bottom-4 left-4 text-white">
                    <Badge className="bg-green-600 text-white mb-2">{experience.badge}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif font-bold text-xl text-gray-800 mb-3">{experience.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{experience.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="font-serif font-bold text-2xl text-gray-800 mb-8">Actividades Adicionales</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 p-6 bg-white/80 rounded-xl">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">Paseos en Bote</h4>
                  <p className="text-gray-600">Explora el lago Ranco y sus alrededores</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-white/80 rounded-xl">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800">Paseos en Carreta</h4>
                  <p className="text-gray-600">Recorridos tradicionales por la isla</p>
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
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif font-black text-4xl md:text-5xl text-gray-800 mb-6">Contacto</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Claudia Antillanca Manque - Pueblo Mapuche Huilliche, Isla Huapi, Futrono, Chile
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
              <p className="text-gray-600">+56 9 7454 3737</p>
              <Button className="mt-4 bg-green-600 hover:bg-green-700" asChild>
                <a href="https://wa.link/8nh1kp" target="_blank" rel="noopener noreferrer">
                  Contactar
                </a>
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-600">c.antillancam@gmail.com</p>
            </Card>

            <Card className="p-8 hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Ubicación</h3>
              <p className="text-gray-600">Isla Huapi S/n°, Futrono, Chile</p>
            </Card>
          </div>

          <div className="text-center mt-12">
            <h3 className="font-semibold text-lg mb-6">Síguenos en Redes Sociales</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/domosantukuyen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
              >
                <Facebook className="w-6 h-6 text-blue-600" />
              </a>
              <a
                href="https://www.instagram.com/cabanas_domo_antukuyen/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors"
              >
                <Instagram className="w-6 h-6 text-pink-600" />
              </a>

            </div>
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
              <h4 className="font-semibold text-lg mb-4">Experiencias</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Taller de Mapudungun
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Teñido de Lana
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Relatos Culturales
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-4">Servicios</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Domos Kuyen
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Paseos en Bote
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Actividades Culturales
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
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="max-w-[95vw] max-h-[88vh] w-auto h-auto object-contain rounded-lg shadow-2xl animate-in zoom-in-95 fade-in-0 duration-300 pointer-events-auto cursor-default"
                    onClick={(e) => e.stopPropagation()}
                  />
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
