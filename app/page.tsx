import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Leaf, Mountain, Users, Heart, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react"

export default function TurismoAncestralPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section - Portada Inmersiva */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/amanecer-montanas-sagradas.png')`,
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
          >
            Reserva tu experiencia
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
            <div className="hidden md:flex space-x-8">
              <a href="#sobre-nosotros" className="text-gray-700 hover:text-green-600 transition-colors">
                Sobre Nosotros
              </a>
              <a href="#domos" className="text-gray-700 hover:text-green-600 transition-colors">
                Domos
              </a>
              <a href="#experiencias" className="text-gray-700 hover:text-green-600 transition-colors">
                Experiencias
              </a>
              <a href="#contacto" className="text-gray-700 hover:text-green-600 transition-colors">
                Contacto
              </a>
            </div>
            <Button
              variant="outline"
              className="border-green-600 text-green-600 hover:bg-green-600 hover:text-white bg-transparent"
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </nav>

      {/* Sobre Nosotros Section */}
      <section id="sobre-nosotros" className="py-20 bg-gradient-to-r from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
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
            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-gray-800 mb-4">Cultura Mapuche Huilliche</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Charlas de relatos locales, talleres de mapudungun y teñido de lana para conectar con nuestras
                  tradiciones ancestrales.
                </p>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                  Tradición viva
                </Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-emerald-200 transition-colors">
                  <Mountain className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-gray-800 mb-4">Isla Huapi Ancestral</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Una isla mística con vistas espectaculares a la cordillera y el lago Ranco, donde la naturaleza abraza
                  el alma.
                </p>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
                  Paisaje sagrado
                </Badge>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-200 transition-colors">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-gray-800 mb-4">Comunidad y Trabajo</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Trabajo complementario con emprendedoras artesanas, huerteras y guías locales, fortaleciendo nuestra
                  comunidad.
                </p>
                <Badge variant="secondary" className="bg-emerald-100 text-emerald-700">
                  Desarrollo local
                </Badge>
              </CardContent>
            </Card>
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

            <div className="relative">
              <img
                src="/mystical-ancestral-map.png"
                alt="Vista de los Domos Antukuyen"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
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
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
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
              <Button className="mt-4 bg-green-600 hover:bg-green-700">
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
            >
              <a href="https://wa.link/8nh1kp" target="_blank" rel="noopener noreferrer">
                Reserva por WhatsApp
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent"
            >
              Ver Alojamiento
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
            <p>&copy; 2024 Antukuyen Nativa - Claudia Antillanca Manque. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
