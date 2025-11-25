"use client"

import { useState } from "react"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Facebook, Instagram, Share2, MessageCircle, X, Menu, Home, Users as UsersIcon, Sparkles, Ship } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function ContactoPage() {
  const [showContactMenu, setShowContactMenu] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
              <Link href="/sobre-nosotros" className="text-gray-700 hover:text-green-600 transition-colors">
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
              <Link href="/contacto" className="text-green-600 font-semibold transition-colors">
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
                    className="group flex items-center space-x-4 p-4 rounded-xl bg-green-50 border-2 border-green-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-green-700" />
                    </div>
                    <span className="text-base font-semibold text-green-700">Contacto</span>
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

      {/* Contacto Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif font-black text-5xl md:text-6xl text-gray-800 mb-6">Contacto</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Claudia Antillanca Manque - Pueblo Mapuche Huilliche, Isla Huapi, Futrono, Chile
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center mb-16">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">+56 9 7454 3737</p>
              <Button className="mt-4 bg-green-600 hover:bg-green-700" asChild>
                <a href="https://wa.link/8nh1kp" target="_blank" rel="noopener noreferrer">
                  Contactar
                </a>
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-gray-600 mb-4">c.antillancam@gmail.com</p>
              <Button className="mt-4 bg-emerald-600 hover:bg-emerald-700" asChild>
                <a href="mailto:c.antillancam@gmail.com">
                  Enviar Email
                </a>
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Ubicación</h3>
              <p className="text-gray-600">Isla Huapi S/n°, Futrono, Chile</p>
            </Card>
          </div>

          <div className="text-center mb-16">
            <h3 className="font-semibold text-2xl mb-6 text-gray-800">Síguenos en Redes Sociales</h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/domosantukuyen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#1877F2] rounded-full flex items-center justify-center hover:bg-[#0c63d4] transition-all transform hover:scale-110 shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8 text-white" />
              </a>
              <a
                href="https://www.instagram.com/cabanas_domo_antukuyen/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-full flex items-center justify-center hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 transition-all transform hover:scale-110 shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8 text-white" />
              </a>
              <a
                href="https://wa.link/8nh1kp"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center hover:bg-[#1fb855] transition-all transform hover:scale-110 shadow-lg"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-8 h-8 text-white" fill="white" />
              </a>
            </div>
          </div>

          {/* Mapa o información adicional */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8 md:p-12">
            <div className="text-center">
              <h3 className="font-serif font-bold text-3xl text-gray-800 mb-4">¿Cómo llegar?</h3>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
                Estamos ubicados en la hermosa Isla Huapi en el Lago Ranco, Región de Los Ríos. El acceso a la isla es por lancha desde el sector de Futrono.
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                Contáctanos por WhatsApp para coordinar tu traslado y obtener información detallada sobre cómo llegar a nuestros domos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="font-serif font-black text-4xl md:text-5xl mb-6">¿Listo para tu aventura?</h2>
          <p className="text-xl mb-8 leading-relaxed opacity-90">
            Reserva ahora tu experiencia en Antukuyen Nativa y vive la conexión con la naturaleza y la cultura mapuche.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://wa.link/8nh1kp" target="_blank" rel="noopener noreferrer">
                Reservar por WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="/">Volver al Inicio</Link>
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

