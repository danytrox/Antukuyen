"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogPortal, DialogOverlay } from "@/components/ui/dialog"
import { Mountain, Users, Facebook, Instagram, Share2, MessageCircle, X, Menu, Home, Sparkles, Ship, Phone, Users as UsersIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function ExperienciasPage() {
  const [showContactMenu, setShowContactMenu] = useState(false)
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)
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
              <Link href="/experiencias" className="text-green-600 font-semibold transition-colors">
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
                    className="group flex items-center space-x-4 p-4 rounded-xl bg-green-50 border-2 border-green-200"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <div className="w-10 h-10 bg-green-200 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-green-700" />
                    </div>
                    <span className="text-base font-semibold text-green-700">Experiencias</span>
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

      {/* Experiencias Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="font-serif font-black text-5xl md:text-6xl text-gray-800 mb-6">Experiencias Culturales</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Actividades que conectan con la cultura Huilliche y la naturaleza de la Isla Huapi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "/DSC01293.jpg",
                title: "Taller de Mapudungun",
                description: "Aprende el idioma ancestral mapuche y conecta con la sabiduría de nuestros antepasados.",
                badge: "Cultura",
              },
              {
                image: "/DSC01442.jpg",
                title: "Teñido de Lana",
                description: "Técnicas tradicionales de teñido usando plantas nativas de la región.",
                badge: "Artesanía",
              },
              {
                image: "/IMG_1632.jpg",
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
                  <Image
                    src={experience.image || "/placeholder.svg"}
                    alt={`${experience.title} - ${experience.description} en Antukuyen Nativa, Isla Huapi`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                    quality={75}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
            <h3 className="font-serif font-bold text-3xl text-gray-800 mb-8">Actividades Adicionales</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="flex items-center space-x-4 p-6 bg-white/80 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Mountain className="w-6 h-6 text-green-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 text-lg">Paseos en Bote</h4>
                  <p className="text-gray-600">Explora el lago Ranco y sus alrededores</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-6 bg-white/80 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 text-lg">Paseos en Carreta</h4>
                  <p className="text-gray-600">Recorridos tradicionales por la isla</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="https://wa.link/8nh1kp" target="_blank" rel="noopener noreferrer">
                Reserva tu Experiencia
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
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
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-50 bg-white/95 hover:bg-white rounded-full p-3 shadow-2xl transition-all duration-200 transform hover:scale-110 hover:rotate-90"
              aria-label="Cerrar"
            >
              <X className="w-7 h-7 text-gray-800" />
            </button>

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

