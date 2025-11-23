# ✅ AUTOPLAY CONFIGURADO - Carruseles Automáticos

## 🎯 Estado Actual

Los carruseles ya están configurados para moverse automáticamente:
- **Primer carrusel** (imágenes grandes): cada **2 segundos**
- **Segundo carrusel** (recorrido de lancha): cada **3 segundos**

## 📦 Instalación Requerida

Para que funcione, necesitas instalar la dependencia. Sigue estos pasos:

### 1. Detén el servidor
Presiona `Ctrl + C` en la terminal donde está corriendo el servidor

### 2. Instala la dependencia
```bash
pnpm install
```

### 3. Reinicia el servidor
```bash
pnpm run dev
```

## ⚙️ Características del Autoplay

- ✅ **Pausa automática** cuando pasas el mouse sobre el carrusel
- ✅ **Control manual** con las flechas de navegación
- ✅ **Loop infinito** - vuelve al inicio automáticamente
- ✅ **Transiciones suaves** entre imágenes

## 🔧 Personalización

Si quieres cambiar los tiempos, edita `app/page.tsx`:

```typescript
// Para el primer carrusel
plugins={[
  Autoplay({
    delay: 2000, // Cambia este valor (en milisegundos)
  }),
]}

// Para el segundo carrusel
plugins={[
  Autoplay({
    delay: 3000, // Cambia este valor (en milisegundos)
  }),
]}
```

**Ejemplos de tiempos:**
- 1000 = 1 segundo
- 2000 = 2 segundos (configurado actualmente)
- 3000 = 3 segundos
- 5000 = 5 segundos
