"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Leaf, Mountain, Users, Facebook, Instagram, Share2, MessageCircle, X, Menu, Home, Sparkles, Ship, Phone } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function SobreNosotrosPage() {
  const [visibleCards, setVisibleCards] = useState<number[]>([])
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [showContactMenu, setShowContactMenu] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
                }, index * 200)
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
              <Link href="/sobre-nosotros" className="text-green-600 font-semibold transition-colors">
                Sobre Nosotros
              </Link>
              <Link href="/#domos" className="text-gray-700 hover:text-green-600 transition-colors">
                Domos
              </Link>
              <Link href="/experiencias" className="text-gray-700 hover:text-green-600 transition-colors">
                Experiencias
              </Link>
              <Link href="/#recorrido-lancha" className="text-gray-700 hover:text-green-600 transition-colors">
                Recorrido de Lancha
              </Link>
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
                    className="group flex items-center space-x-4 p-4 rounded-xl bg-green-50 border-2 border-green-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center">
                      <Users className="w-5 h-5 text-green-700" />
                    </div>
                    <span className="text-base font-semibold text-green-700">Sobre Nosotros</span>
                  </Link>

                  <Link 
                    href="/#domos" 
                    className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:translate-x-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                      <Home className="w-5 h-5 text-emerald-600" />
                    </div>
                    <span className="text-base font-medium text-gray-700 group-hover:text-green-700">Domos</span>
                  </Link>

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

                  <Link 
                    href="/#recorrido-lancha" 
                    className="group flex items-center space-x-4 p-4 rounded-xl hover:bg-green-50 transition-all duration-300 transform hover:translate-x-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Ship className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-base font-medium text-gray-700 group-hover:text-green-700">Recorrido de Lancha</span>
                  </Link>

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
        <div className={`flex flex-col gap-3 mb-3 transition-all duration-500 ${
          showContactMenu 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
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

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: `url('/amanecer-montanas-sagradas.png')`,
            }}
          />
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <h1 className="font-serif font-black text-5xl md:text-6xl text-gray-800 mb-6">Mari Mari kom pu che</h1>
            <h2 className="font-serif font-bold text-2xl md:text-3xl text-green-700 mb-8">Nuestra Historia</h2>
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-xl text-gray-700 leading-relaxed font-medium">
                Mi nombre es Claudia Antillanca Manque, fundadora de Turismo Antukuyen Nativa, un emprendimiento turístico cultural en Isla Huapi, Cuenca del Lago Ranco, liderado por mujeres mapuche comprometidas con la puesta en valor del territorio, la biodiversidad y la cosmovisión ancestral.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Con más de 10 años desarrollando experiencias de turismo con identidad, nuestro proyecto nace para ofrecer vivencias auténticas donde los visitantes puedan aprender, descansar y reconectarse con el entorno y la comunidad, alejándose del turismo convencional que carece de profundidad cultural.
              </p>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                En una región donde el 63% está cubierto por bosques nativos y la ansiedad afecta al 25,8% de la población, nuestras experiencias están diseñadas para aliviar el estrés, proteger los ecosistemas y fomentar una relación respetuosa con el territorio desde la cosmovisión mapuche.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Ofrecemos paquetes turísticos que combinan actividades comunitarias en huerta, cocina y recolección, junto con talleres de medicina mapuche, educación ambiental, gastronomía tradicional y caminatas vivenciales. Cada experiencia es una invitación a conocer el territorio desde la sabiduría local, fortaleciendo el vínculo entre la comunidad y quienes nos visitan.
              </p>

              <p className="text-xl text-green-700 font-semibold leading-relaxed italic">
                Turismo Antukuyen Nativa es más que una experiencia turística: es una forma de vivir el territorio con raíces y con alma.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed font-medium pt-4">
                Los invito a descubrir el espíritu de Isla Huapi, a aprender de la cultura mapuche y a ser parte del cuidado de nuestra naturaleza.
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
                title: "Cosmovisión Mapuche",
                description:
                  "Experiencias que conectan con la sabiduría ancestral, la medicina mapuche y el respeto por los ciclos naturales del territorio.",
                badge: "Identidad Cultural",
                badgeBg: "bg-emerald-100 text-emerald-700",
              },
              {
                icon: Mountain,
                iconBg: "bg-emerald-100",
                iconHoverBg: "group-hover:bg-emerald-200",
                iconColor: "text-emerald-600",
                title: "Turismo Consciente",
                description:
                  "Visitas pausadas y de bajo impacto que protegen la biodiversidad de nuestros bosques nativos y promueven la reconexión con la naturaleza.",
                badge: "Sustentabilidad",
                badgeBg: "bg-green-100 text-green-700",
              },
              {
                icon: Users,
                iconBg: "bg-green-100",
                iconHoverBg: "group-hover:bg-green-200",
                iconColor: "text-green-600",
                title: "Desarrollo Comunitario",
                description:
                  "Red de mujeres isleñas, guías locales, artesanas y educadoras que impulsan el rescate de saberes y el fortalecimiento de la comunidad.",
                badge: "Empoderamiento Local",
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

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif font-black text-4xl md:text-5xl mb-6">Vive el territorio con raíces y con alma</h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Descubre experiencias transformadoras que combinan medicina mapuche, educación ambiental, gastronomía tradicional y caminatas vivenciales por Isla Huapi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <Link href="/experiencias">Conoce Nuestras Experiencias</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="/contacto">Contáctanos</Link>
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
                  <Link href="/#domos" className="hover:text-green-400 transition-colors">
                    Domos Kuyen
                  </Link>
                </li>
                <li>
                  <Link href="/#recorrido-lancha" className="hover:text-green-400 transition-colors">
                    Recorrido de Lancha
                  </Link>
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
    </div>
  )
}

