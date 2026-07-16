# 🏛️ Portal Web Institucional — Astro PJECZ

Este repositorio contiene el código fuente del portal oficial del **Poder Judicial del Estado de Coahuila de Zaragoza**, desarrollado con el framework **Astro**. Este documento sirve como manual de inducción técnica y guía rápida para el equipo de desarrollo institucional.

---

# 📁 1. Arquitectura del Proyecto

 La distribución del código de la aplicación se detalla a continuación:

```text
pjecz-gob-mx-astro/
└──
    ├── public/                     # Archivos estáticos globales (fuentes, favicon)
    ├── src/                        # Código fuente principal de la aplicación
    │   ├── assets/                 # Recursos gráficos optimizados por Astro
    │   ├── components/             # Componentes de interfaz modulares (PascalCase)
    │   ├── layouts/                # Plantillas estructurales (BaseLayout.astro) (Se recomienda no modificarlo y de ser necesario comentar en el codigo los cambios realizados)
    │   ├── pages/                  # Sistema de enrutamiento basado en archivos
    │   │   ├── boletin/            # Directorio del Boletín Judicial Oficial
    │   │   ├── category/           # Colecciones y listados por categorías (.md)
    │   │   ├── conocenos/          # Apartados informativos de la organización
    │   │   ├── consultas/          # Módulos de atención ciudadana y citas
    │   │   └── index.astro         # Página de inicio del portal (/)
    │   └── styles/                 # Hojas de estilo globales (global.css, tokens.css)
    └── astro.config.mjs            # Archivo de configuración central de Astro
```

---

# 🛠️ 2. Comandos de Trabajo y Configuración

El entorno local de desarrollo debe configurarse mediante el **Subsistema de Windows para Linux (WSL)**. A continuación se detallan los comandos obligatorios para la gestión del proyecto.

| Comando | Propósito técnico | ¿Cuándo se ejecuta? |
|---------|-------------------|---------------------|
| `npm install` | Instalación local de dependencias. | Al clonar el repositorio o actualizar paquetes. |
| `npm run dev` | Servidor de desarrollo local (puerto **4321**). | Durante el desarrollo y maquetación de archivos. |
| `npm run build` | Compila el sitio estático en la carpeta `/dist`. | Previo al envío de cambios y despliegue a producción. |
| `npx astro check` | Diagnóstico de TypeScript y validación Astro. | Paso de control de calidad obligatorio antes de realizar *commits*. |

---

# 📐 3. Directrices Generales de Código

## Nomenclatura

- Los componentes deben utilizar **PascalCase**.

  **Ejemplo:**
  ```text
  Header.astro
  ```

- Las imágenes deben ser nombradas en minúsculas y su nombre separado por guiones medios (similando los espacios)**kebab-case**.

  **Ejemplo:**
 ```text
  logo-institucional-pjecz.png 
  ```

- Se debe cuidar que no existan saltos de línea inútiles dentro del bloque de código.
