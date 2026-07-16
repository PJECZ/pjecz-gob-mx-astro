# Portal Web Institucional — PJECZ (Astro)

¡Te damos la bienvenida al equipo de Desarrollo del Poder Judicial del Estado de Coahuila de Zaragoza!

Este repositorio alberga el código fuente del nuevo sitio web oficial del PJECZ, construido sobre el framework moderno **Astro** para garantizar una entrega de contenido ultra rápida, segura y accesible para toda la ciudadanía.

---

## 1. Inicio Rápido (Quick Start)

Para levantar el proyecto localmente bajo tu entorno de WSL (*Windows Subsystem for Linux*) en VS Code, sigue estos pasos:

1. **Clona tu fork del proyecto y accede al directorio:**
   ```bash
   git clone <URL_DE_TU_FORK>
   cd pjecz-gob-mx-astro
   Instala las dependencias autorizadas:

Bash
npm install
Inicia el servidor de desarrollo local:

Bash
npm run dev
El sitio estará disponible en: http://localhost:4321

2. Estructura del Directorio
Un mapa simplificado de las carpetas clave para tus tareas diarias:

Plaintext
pjecz-gob-mx-astro/
├── public/                 # Recursos estáticos globales (fuentes, favicon, PDFs)
└── src/                    # Código fuente de la aplicación
    ├── assets/             # Imágenes y recursos optimizados por Astro
    ├── components/         # Bloques de interfaz reutilizables (PascalCase)
    │   ├── Header.astro    # Cabecera principal del portal
    │   └── TramiteForm.astro # Formulario interactivo de trámites
    ├── layouts/            # Plantillas estructurales del sitio (BaseLayout.astro)
    ├── pages/              # Sistema de enrutamiento (Index.astro, .md)
    └── styles/             # Hojas de estilo globales (global.css, tokens.css)
3. Comandos Útiles
| Comando | Acción | ¿Cuándo usarlo? |
| :--- | :--- | :--- |
| `npm run dev` | Servidor de desarrollo local. | Durante tu proceso de maquetación diario. |
| `npm run build` | Compila el sitio estático en `/dist`. | Antes de hacer commit para validar que no haya errores de compilación. |
| `npx astro check` | Diagnóstico de TypeScript y Astro. | Para validar la integridad y tipado del código nuevo. |
Para mantener la calidad y el estándar de seguridad de la institución, es obligatorio que leas y sigas las reglas de estilo y flujos de trabajo documentados en el archivo de contribución. Se te recomienda encarecidamente consultar el documento CONTRIBUTING.md antes de iniciar cualquier desarrollo o abrir un nuevo Pull Request (PR).