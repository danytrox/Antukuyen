# Guía de SEO para Antukuyen Nativa

Esta guía contiene pasos detallados para mejorar el posicionamiento en buscadores de tu sitio web.

## 📋 Tabla de Contenidos

1. [Configuración Inicial](#configuración-inicial)
2. [Verificación en Buscadores](#verificación-en-buscadores)
3. [Optimización de Contenido](#optimización-de-contenido)
4. [Optimización Técnica](#optimización-técnica)
5. [Herramientas de Análisis](#herramientas-de-análisis)
6. [Monitoreo Continuo](#monitoreo-continuo)
7. [Checklist de SEO](#checklist-de-seo)

---

## 1. Configuración Inicial

### 1.1 Variables de Entorno

1. Copia el archivo `.env.example` a `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Edita `.env.local` y completa las siguientes variables:
   - `NEXT_PUBLIC_SITE_URL`: URL completa de tu sitio (ej: `https://antukuyen.cl`)
   - `NEXT_PUBLIC_GOOGLE_VERIFICATION`: Código de verificación de Google (ver sección 2.1)
   - `NEXT_PUBLIC_BING_VERIFICATION`: Código de verificación de Bing (opcional)
   - `NEXT_PUBLIC_GA_ID`: ID de Google Analytics (recomendado)
   - `NEXT_PUBLIC_GTM_ID`: ID de Google Tag Manager (opcional)

3. **IMPORTANTE**: Nunca subas `.env.local` a Git. Ya está en `.gitignore`.

### 1.2 Dominio y Hosting

- ✅ Asegúrate de tener un dominio profesional (ej: `antukuyen.cl`)
- ✅ Configura HTTPS/SSL (certificado SSL gratuito con Let's Encrypt)
- ✅ Verifica que el sitio cargue rápido (< 3 segundos)
- ✅ Configura redirección de `www` a no-www (o viceversa) y mantén consistencia

---

## 2. Verificación en Buscadores

### 2.1 Google Search Console

**Pasos:**

1. Ve a [Google Search Console](https://search.google.com/search-console)
2. Agrega tu propiedad (URL de tu sitio)
3. Verifica la propiedad usando uno de estos métodos:
   - **Método recomendado**: Agrega el código de verificación en `app/layout.tsx`:
     ```typescript
     verification: {
       google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
     },
     ```
   - O agrega un archivo HTML en `/public/google-site-verification.html`
4. Una vez verificado:
   - Envía tu sitemap (ver sección 3.3)
   - Revisa el informe de cobertura
   - Monitorea errores de indexación

**Beneficios:**
- Ver qué páginas están indexadas
- Identificar errores de rastreo
- Verificar cómo Google ve tu sitio
- Recibir alertas de problemas

### 2.2 Bing Webmaster Tools

1. Ve a [Bing Webmaster Tools](https://www.bing.com/webmasters)
2. Agrega tu sitio
3. Verifica usando el código de verificación
4. Envía tu sitemap

### 2.3 Verificación de Metadata

Usa estas herramientas para verificar que tu metadata esté correcta:

- **Facebook Debugger**: [developers.facebook.com/tools/debug](https://developers.facebook.com/tools/debug)
  - Ingresa tu URL y verifica cómo se ve al compartir en Facebook
  - Usa "Scrape Again" después de hacer cambios

- **Twitter Card Validator**: [cards-dev.twitter.com/validator](https://cards-dev.twitter.com/validator)
  - Verifica cómo se ven tus tarjetas de Twitter

- **LinkedIn Post Inspector**: [www.linkedin.com/post-inspector](https://www.linkedin.com/post-inspector)
  - Verifica cómo se ve al compartir en LinkedIn

---

## 3. Optimización de Contenido

### 3.1 Palabras Clave

**Palabras clave principales:**
- `turismo ancestral chile`
- `domos isla huapi`
- `turismo mapuche huilliche`
- `alojamiento futrono`
- `experiencias culturales chile`
- `isla huapi turismo`
- `domos ecológicos chile`

**Estrategia:**
- Usa palabras clave de forma natural en títulos (H1, H2, H3)
- Inclúyelas en los primeros 100 caracteres del contenido
- Úsalas en alt text de imágenes
- Crea contenido de blog sobre temas relacionados (ej: "Guía de turismo ancestral en Chile")

### 3.2 Contenido Único y Valioso

**Recomendaciones:**
- ✅ Escribe descripciones detalladas de cada experiencia
- ✅ Agrega testimonios de clientes
- ✅ Crea una sección de "Preguntas Frecuentes" (FAQ)
- ✅ Publica contenido sobre la cultura mapuche huilliche
- ✅ Comparte historias locales de Isla Huapi
- ✅ Agrega información sobre cómo llegar

**Ejemplo de contenido adicional:**
- Blog: "5 razones para visitar Isla Huapi"
- Guía: "Qué hacer en Futrono: Guía completa"
- Testimonios: Reseñas de clientes con fotos

### 3.3 Sitemap.xml

**Crear sitemap dinámico:**

1. Crea el archivo `app/sitemap.ts`:
   ```typescript
   import { MetadataRoute } from 'next'

   export default function sitemap(): MetadataRoute.Sitemap {
     const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://antukuyen.cl'
     
     return [
       {
         url: baseUrl,
         lastModified: new Date(),
         changeFrequency: 'monthly',
         priority: 1,
       },
       // Agrega más URLs cuando tengas más páginas
     ]
   }
   ```

2. El sitemap estará disponible en: `https://antukuyen.cl/sitemap.xml`

3. Envía el sitemap a:
   - Google Search Console
   - Bing Webmaster Tools

### 3.4 Robots.txt

**Crear robots.txt:**

Crea el archivo `public/robots.txt`:
```
User-agent: *
Allow: /

Sitemap: https://antukuyen.cl/sitemap.xml
```

---

## 4. Optimización Técnica

### 4.1 Velocidad del Sitio

**Herramientas de medición:**
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

**Mejoras recomendadas:**
- ✅ Optimiza imágenes (usa formatos WebP/AVIF)
- ✅ Implementa lazy loading en imágenes
- ✅ Minimiza CSS y JavaScript
- ✅ Usa CDN para assets estáticos
- ✅ Habilita compresión GZIP/Brotli
- ✅ Implementa caching apropiado

**Meta tag para viewport (ya está en Next.js):**
```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### 4.2 Mobile-First

- ✅ Verifica que el sitio sea responsive
- ✅ Prueba en diferentes dispositivos
- ✅ Usa Google Mobile-Friendly Test: [search.google.com/test/mobile-friendly](https://search.google.com/test/mobile-friendly)

### 4.3 Estructura de URLs

- ✅ Mantén URLs limpias y descriptivas
- ✅ Usa guiones en lugar de guiones bajos
- ✅ Evita parámetros innecesarios
- ✅ Ejemplo: `/domos-isla-huapi` en lugar de `/page?id=123`

### 4.4 Enlaces Internos

- ✅ Crea enlaces internos entre páginas relacionadas
- ✅ Usa texto descriptivo en los enlaces (no "click aquí")
- ✅ Mantén una estructura de navegación clara

---

## 5. Herramientas de Análisis

### 5.1 Google Analytics 4

**Configuración:**

1. Crea una cuenta en [Google Analytics](https://analytics.google.com/)
2. Obtén tu Measurement ID (formato: `G-XXXXXXXXXX`)
3. Agrega el ID en `.env.local` como `NEXT_PUBLIC_GA_ID`
4. Implementa el script en `app/layout.tsx`:
   ```typescript
   {process.env.NEXT_PUBLIC_GA_ID && (
     <>
       <script
         async
         src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
       />
       <script
         dangerouslySetInnerHTML={{
           __html: `
             window.dataLayer = window.dataLayer || [];
             function gtag(){dataLayer.push(arguments);}
             gtag('js', new Date());
             gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
           `,
         }}
       />
     </>
   )}
   ```

**Métricas importantes a monitorear:**
- Usuarios y sesiones
- Páginas más visitadas
- Tasa de rebote
- Tiempo en sitio
- Conversiones (reservas)

### 5.2 Google Tag Manager (Opcional)

Útil para gestionar múltiples tags sin modificar código:
1. Crea cuenta en [Google Tag Manager](https://tagmanager.google.com/)
2. Obtén el Container ID
3. Agrega en `.env.local`

### 5.3 Rich Results Test

Verifica que tus datos estructurados (JSON-LD) funcionen:
- [Google Rich Results Test](https://search.google.com/test/rich-results)
- Ingresa tu URL y verifica que no haya errores

---

## 6. Monitoreo Continuo

### 6.1 Tareas Semanales

- [ ] Revisar Google Search Console para errores
- [ ] Verificar nuevas palabras clave que traen tráfico
- [ ] Revisar métricas de Google Analytics
- [ ] Responder a reseñas y comentarios

### 6.2 Tareas Mensuales

- [ ] Actualizar contenido (agregar nuevas experiencias, fotos)
- [ ] Revisar y actualizar metadata si es necesario
- [ ] Analizar competencia
- [ ] Crear nuevo contenido de blog
- [ ] Verificar enlaces rotos

### 6.3 Tareas Trimestrales

- [ ] Auditoría completa de SEO
- [ ] Revisar y actualizar palabras clave
- [ ] Analizar tendencias del sector
- [ ] Optimizar imágenes antiguas
- [ ] Revisar velocidad del sitio

---

## 7. Checklist de SEO

### ✅ Configuración Básica

- [ ] Variables de entorno configuradas (`.env.local`)
- [ ] Dominio con HTTPS activo
- [ ] Sitemap.xml creado y enviado
- [ ] Robots.txt configurado
- [ ] Google Search Console verificado
- [ ] Bing Webmaster Tools verificado (opcional)

### ✅ Metadata

- [ ] Title optimizado (50-60 caracteres)
- [ ] Description optimizada (150-160 caracteres)
- [ ] Open Graph tags configurados
- [ ] Twitter Cards configurados
- [ ] Canonical URL configurada
- [ ] Keywords relevantes agregados

### ✅ Contenido

- [ ] H1 único en cada página
- [ ] Estructura de headings (H1, H2, H3) correcta
- [ ] Alt text en todas las imágenes
- [ ] Contenido único y valioso
- [ ] Enlaces internos implementados
- [ ] Datos estructurados (JSON-LD) agregados

### ✅ Técnico

- [ ] Sitio responsive (mobile-friendly)
- [ ] Velocidad de carga < 3 segundos
- [ ] URLs limpias y descriptivas
- [ ] Sin errores 404
- [ ] Redirecciones 301 configuradas (si aplica)

### ✅ Análisis

- [ ] Google Analytics configurado
- [ ] Eventos de conversión configurados
- [ ] Google Search Console monitoreado
- [ ] Rich Results Test pasado

### ✅ Contenido Adicional Recomendado

- [ ] Página "Sobre Nosotros" detallada
- [ ] Sección de FAQ
- [ ] Testimonios de clientes
- [ ] Blog con contenido relevante
- [ ] Galería de fotos
- [ ] Mapa de ubicación (Google Maps embed)

---

## 8. Recursos Adicionales

### Documentación Oficial

- [Next.js SEO](https://nextjs.org/docs/app/building-your-application/optimizing/metadata)
- [Google Search Central](https://developers.google.com/search)
- [Schema.org](https://schema.org/)

### Herramientas Gratuitas

- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Rich Results Test](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)

### Herramientas de Análisis de Competencia

- [SEMrush](https://www.semrush.com/) (pago, con trial)
- [Ahrefs](https://ahrefs.com/) (pago, con trial)
- [Ubersuggest](https://neilpatel.com/ubersuggest/) (gratis limitado)

---

## 9. Contacto y Soporte

Si tienes preguntas sobre la implementación de SEO:

1. Revisa esta guía primero
2. Consulta la documentación de Next.js
3. Usa las herramientas de Google Search Console
4. Considera contratar un especialista en SEO si necesitas ayuda avanzada

---

**Última actualización:** Enero 2025

**Nota:** El SEO es un proceso continuo. Los resultados pueden tardar semanas o meses en aparecer. Sé paciente y consistente con las mejoras.

