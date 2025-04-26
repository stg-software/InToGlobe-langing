src/
├── assets/           # Imágenes, fuentes, archivos estáticos
├── components/       # Componentes reutilizables
│   ├── ui/           # Componentes de UI básicos (Button, Input, etc.)
│   ├── layout/       # Componentes de estructura (Header, Footer, etc.)
│   └── features/     # Componentes específicos de funcionalidades, está destinada a contener componentes que son específicos de ciertas funcionalidades o secciones de tu aplicación, y que normalmente combinan varios componentes UI

├── hooks/            # Custom hooks
├── pages/            # Páginas/rutas principales de la aplicación
├── services/         # Servicios, llamadas API, etc.
├── utils/            # Funciones utilitarias
├── types/            # Definiciones de tipos TypeScript
├── context/          # Contextos de React (si usas Context API)
├── store/            # Estado global (Redux, Zustand, etc.) si lo usas
├── styles/           # Estilos globales y variables
├── config/           # Configuraciones de la aplicación
├── constants/        # Constantes y valores fijos
├── App.tsx           # Componente principal
└── main.tsx          # Punto de entrada