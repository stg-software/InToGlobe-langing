# 🌐 InToGlobe – Landing Page

Landing page corporativa para **InToGlobe**, startup de seguridad inteligente. Construida con **React + Tailwind CSS + Vite**.

---

## 🚀 Inicio rápido

### Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior (viene incluido con Node.js)

### 1. Instalar dependencias

```bash
npm install
```

### 2. Modo desarrollo (con hot-reload)

```bash
npm run dev
```

Abre tu navegador en [http://localhost:5173](http://localhost:5173)

### 3. Build de producción

```bash
npm run build
```

Los archivos generados quedan en la carpeta `dist/`.

### 4. Previsualizar el build

```bash
npm run preview
```

---

## 📁 Estructura del proyecto

```
intoglobe/
├── index.html                  # HTML base
├── vite.config.js              # Configuración de Vite
├── tailwind.config.js          # Configuración de Tailwind
├── postcss.config.js
├── package.json
└── src/
    ├── assets/                 # Imágenes y recursos estáticos
    │   ├── logo.png            # (reemplaza con tu logo)
    │   └── hero-image.png      # (reemplaza con tu imagen)
    │
    ├── components/
    │   ├── Navbar.jsx          # Barra de navegación
    │   ├── Hero.jsx            # Sección principal con brain orb
    │   ├── Services.jsx        # Tarjetas de soluciones
    │   ├── Stats.jsx           # Contadores animados
    │   ├── CTA.jsx             # Sección de llamada a la acción
    │   └── Footer.jsx          # Pie de página con badges
    │
    ├── pages/
    │   └── Home.jsx            # Página principal (ensambla todos los componentes)
    │
    ├── data/
    │   └── content.js          # ✏️ AQUÍ cambias todos los textos
    │
    ├── App.jsx                 # Raíz de la app
    ├── main.jsx                # Punto de entrada
    └── index.css               # Estilos globales + Tailwind
```

---

## ✏️ Cómo cambiar los textos

Todos los textos de la landing están centralizados en:

```
src/data/content.js
```

Edita este archivo para actualizar textos sin tocar los componentes:

```js
// Ejemplo: cambiar el titular principal
export const hero = {
  headline1: "Transformamos",
  headline2: "seguridad en",
  highlight: "inteligencia",   // ← Texto con degradado naranja/morado
  description: "Tu descripción aquí...",
  ctaPrimary: "Solicitar demo",
  ctaSecondary: "Conocer más",
};
```

---

## 🎨 Personalización de colores

Los colores de marca están en `tailwind.config.js`:

```js
colors: {
  brand: {
    orange: '#F97316',       // Naranja principal
    purple: '#7C3AED',       // Morado principal
    'purple-light': '#A78BFA',
    dark: '#1E1B4B',
  }
}
```

---

## 🖼️ Agregar imágenes propias

Coloca tus imágenes en `src/assets/` y luego impórtalas en el componente correspondiente:

```jsx
import logoImg from "../assets/logo.png";

// En el JSX:
<img src={logoImg} alt="InToGlobe" />
```

---

## 📦 Dependencias principales

| Paquete | Versión | Uso |
|---|---|---|
| react | ^18.3 | UI framework |
| vite | ^5.4 | Build tool |
| tailwindcss | ^3.4 | Estilos utilitarios |
| lucide-react | ^0.383 | Iconos SVG |

---

## 🌐 Deploy

### Vercel (recomendado)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta dist/ a Netlify
```

### GitHub Pages
```bash
npm run build
# Configura la carpeta dist/ como raíz del sitio
```

---

## 📄 Licencia

MIT – Libre para uso comercial y personal.
