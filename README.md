🏛️ Nuevo Sitio Web (Astro) — Poder Judicial del Estado de Coahuila de Zaragoza

¡Te damos la bienvenida al equipo de Desarrollo del PJECZ! Si te encuentras leyendo esto, es porque probablemente te integraste como desarrollador o practicante de esta importante institución. ¡Nos alegra mucho tenerte con nosotros!

Sabemos que dar el salto de un entorno educativo al desarrollo institucional real puede parecer abrumador al principio. Configurar entornos como WSL, dominar flujos estrictos de Git y adaptarte a nuevos frameworks tiene su proceso.

💡 Un mensaje especial para ti: Es completamente normal que al principio la curva de aprendizaje se sienta retadora, o que tus primeros commits o Pull Requests reciban correcciones u observaciones. Es importante comprender que en esta institución esa es la forma en que mejoramos y pulimos nuestro código. ¡No te desanimes, pregunta sin miedo y disfruta el proceso!

📁 1. Sobre el Proyecto

Este repositorio alberga el código fuente del nuevo sitio web oficial del Poder Judicial del Estado de Coahuila de Zaragoza (PJECZ). El objetivo principal de este sistema es servir como el canal de comunicación digital más importante de la institución, facilitando a los ciudadanos y profesionales del derecho el acceso a acuerdos, servicios, convocatorias e información transparente de manera rápida y segura.

¿Por qué decidimos utilizar Astro?

La elección de Astro para el portal del PJECZ no es una decisión casual; responde directamente a los retos técnicos, legales y de responsabilidad social de la administración de justicia digital en nuestro estado:

Rendimiento en "Horas Pico" (Publicación de Acuerdos): Cuando se publica el Boletín Judicial o las listas de acuerdos, el tráfico del sitio se dispara de golpe. Al entregar páginas HTML estáticas y ultraligeras, el servidor no se satura ni se ralentiza, garantizando que los abogados y ciudadanos consulten sus expedientes sin interrupciones.

Acceso a la Justicia con Baja Conectividad: Coahuila es un estado geográficamente inmenso, y muchos usuarios acceden desde juzgados de distrito alejados o mediante conexiones móviles limitadas. La arquitectura de Zero JS por defecto de Astro reduce el peso de transferencia al mínimo, permitiendo que el portal cargue al instante en cualquier rincón del estado.

Blindaje de Seguridad Institucional: Al no depender de un gestor de contenidos tradicional (como WordPress) expuesto a bases de datos en tiempo real, la superficie de ataque para vulnerabilidades cibernéticas se reduce prácticamente a cero, protegiendo la integridad de la información judicial oficial.

SEO Impecable para la Transparencia: Por ley, el PJECZ debe cumplir con una total transparencia de cara a la ciudadanía. Al pre-renderizar todo el contenido en el servidor, los motores de búsqueda como Google indexan las convocatorias, acuerdos y directorios de forma nativa e inmediata.

🗺️ Estructura del Directorio

Para que no te pierdas buscando dónde hacer tus cambios, aquí tienes un mapa con la distribución de las carpetas más importantes de la aplicación:

pjecz-gob-mx-astro/
├── public/                     # Archivos estáticos globales servidos directamente
│   ├── assets/                 # Recursos gráficos públicos globales
│   ├── fonts/                  # Fuentes tipográficas oficiales de la institución
│   └── favicon.svg             # Icono de pestaña del navegador
├── src/                        # Carpeta raíz del código de la aplicación
│   ├── assets/                 # Imágenes y recursos procesados/optimizados por Astro
│   ├── components/             # Bloques modulares de interfaz (Componentes PascalCase)
│   │   ├── Badge.astro         # Etiqueta visual de estatus
│   │   ├── Button.astro        # Botón reutilizable con estilos del sistema
│   │   ├── DirectoryList.astro # Lista de directorios del personal judicial
│   │   ├── Footer.astro        # Pie de página institucional
│   │   ├── Header.astro        # Cabecera y menús de navegación principal
│   │   ├── Hero.astro          # Portada principal de las secciones de inicio
│   │   ├── NewsGrid.astro      # Cuadrícula para mostrar las últimas notas y noticias
│   │   ├── Overline.astro      # Líneas o llamadas de texto superiores
│   │   ├── QuoteBlock.astro    # Bloque de citas o testimonios
│   │   ├── RuleLine.astro      # Divisor o línea de estilo
│   │   ├── ServicesStrip.astro # Franja horizontal de enlaces de servicios rápidos
│   │   ├── TramiteForm.astro   # Formulario interactivo de trámites
│   │   └── TransparenciaGrid.astro # Cuadrícula para accesos rápidos de transparencia
│   ├── data/                   # Archivos de datos locales y constantes
│   ├── layouts/                # Plantillas o envoltorios estructurales del sitio
│   │   └── BaseLayout.astro    # Maquetación global de cabecera, pie de página y metatags (Se recomienda ampliamente no modificarlo; de ser necesario, se deberá comentar en el código)
│   ├── pages/                  # ¡El sistema de enrutamiento basado en archivos!
│   │   ├── boletin/            # Carpeta para documentos del boletín oficial
│   │   ├── category/           # Colecciones y listados de tipos de información
│   │   │   ├── acuerdos-del-consejo.md
│   │   │   ├── acuerdos-del-pleno.md
│   │   │   ├── comunicados.md
│   │   │   ├── entrevistas.md
│   │   │   ├── news-letter.md
│   │   │   ├── noticias.md
│   │   │   ├── pleno-del-tribunal-superior-de-justicia.md
│   │   │   ├── sala-civil-y-mercantil.md
│   │   │   ├── sala-familiar.md
│   │   │   ├── sala-penal.md
│   │   │   ├── sala-regional.md
│   │   │   └── tribunal-constitucional.md
│   │   ├── conocenos/          # Sección informativa sobre la institución
│   │   │   ├── estructura.md   # Estructura del organigrama
│   │   │   ├── observatorio-judicial.md
│   │   │   └── quienes-somos.md
│   │   ├── consultas/          # Módulos de atención al ciudadano
│   │   │   ├── armonizacion-contable.md
│   │   │   ├── boletines-judiciales.md
│   │   │   ├── calendario-de-labores.md
│   │   │   └── citas.md
│   │   ├── comunicados.md      # Página general de comunicados oficiales
│   │   ├── directorio.astro    # Buscador y listado de directorio institucional
│   │   ├── index.astro         # Portada principal del portal (pjecz.gob.mx/)
│   │   ├── news-letter.md      # Histórico de boletines informativos
│   │   ├── noticias.md         # Sección principal de prensa y noticias
│   │   ├── poder-en-linea.md   # Enlace a trámites digitales
│   │   ├── tramites-y-servicios.md
│   │   ├── tramites.astro      # Página interactiva de solicitudes y trámites
│   │   ├── transparencia-proactiva.md
│   │   ├── transparencia.astro # Página estática principal de Transparencia
│   │   └── transparencia.md    # Declaraciones de transparencia obligatorias
│   └── styles/                 # Hojas de estilo globales
│       ├── global.css          # Reglas CSS base para todo el portal
│       └── tokens.css          # Paleta de colores institucionales y variables CSS
├── .bashrc                     # Configuración del entorno de consola (alias y comandos)
├── .dockerignore               # Archivos excluidos de la compilación de Docker
├── .gitignore                  # Exclusiones de control de versiones de Git
├── astro.config.mjs            # Configuración principal de Astro y sus integraciones
├── Dockerfile                  # Receta de empaquetado del contenedor de producción
├── LICENSE                     # Licencia del software
├── package-lock.json           # Registro de versiones instaladas del ecosistema npm
├── package.json                # Dependencias autorizadas y scripts del proyecto
├── README.md                   # Este manual de bienvenida y estándares
└── tsconfig.json               # Reglas de compilación y tipado de TypeScript


🛠️ 2. Guía de Comandos Esenciales de Astro

A continuación, se listan los comandos clave de npm que utilizarás diariamente en la terminal bajo tu entorno WSL de Visual Studio Code:

Comando

Acción de npm

Propósito / ¿Cuándo usarlo?

npm install

npm i

Descarga las dependencias del proyecto. Úsalo al clonar o al actualizar el package.json.

npm run dev

astro dev

Inicia el servidor de desarrollo local en http://localhost:4321 con recarga automática.

npm run build

astro build

Compila y genera el sitio web estático optimizado para producción en la carpeta /dist.

npm run preview

astro preview

Levanta un servidor local para probar la versión ya compilada de producción (/dist).

npx astro check

astro check

Realiza un diagnóstico completo de tipos, enlaces e integridad del código Astro y TypeScript.

🐍 3. Estándar de Código (PEP 8 adaptado al PJECZ)

El desarrollo del portal web se rige bajo los principios de PEP 8 (el manual de estilo de Python) adaptados a nuestro entorno frontend. Esto asegura que el código sea limpio, legible y consistente para todo el equipo.

🎨 3.1. Formato y Maquetación

Indentación: Utilizar siempre 4 espacios por nivel de sangría. Nunca mezcles tabuladores y espacios en tu editor de código.

Tamaño máximo de línea: Las líneas deben limitarse a un máximo de 79 caracteres de forma estándar, pero en el PJECZ lo extendemos a un límite de 256 caracteres para mayor comodidad en pantallas modernas.

Líneas en blanco:

Separar las definiciones de clases y funciones principales con dos líneas en blanco.

Los métodos o subfunciones dentro de una clase se separan con una línea en blanco.

Utiliza líneas en blanco con moderación para separar bloques de lógica diferenciados dentro de tus funciones.

Formato de archivos: Todos los archivos de código fuente deben guardarse estrictamente bajo codificación UTF-8 y finalizar con una línea en blanco al final.

📦 3.2. Estructura de Imports

Los imports de distintos módulos deben declararse obligatoriamente en líneas diferentes:

Correcto:

import { Image } from 'astro:assets';
import BaseLayout from '../layouts/BaseLayout.astro';


Incorrecto:

import Header, { Image } from 'astro:assets', './Header.astro';


Está permitido colocar en una sola línea los elementos que se importan desde un mismo módulo:

from lib.safe_string import safe_expediente, safe_string


Ubicación: Los imports deben ir siempre en la parte superior del Frontmatter, agrupándose y separándose por una línea en blanco en el siguiente orden:

Librerías de desarrollo/core de Astro.

Librerías y componentes externos de terceros.

Componentes, layouts e imágenes locales.

🚀 4. Directrices de Astro y Optimización

En el PJECZ, el portal web debe cumplir con los más altos estándares de rendimiento y accesibilidad (calificaciones superiores a 95 en Lighthouse). Para lograrlo, es fundamental dominar la estructura lógica de los archivos .astro y utilizar las herramientas de optimización nativas del framework.

Este apartado establece las directrices obligatorias para estructurar el Frontmatter de tus componentes y optimizar el uso de Assets (imágenes).

📑 4.1. Orden y Estructura en el Frontmatter (---)

El Frontmatter es el bloque de código de JavaScript/TypeScript ubicado en la parte superior de cada archivo .astro, delimitado por los guiones triples (---).

Inspirándonos en la pulcritud de PEP 8, las importaciones y la lógica de programación deben agruparse y ordenarse de manera estrictamente limpia para facilitar su lectura rápida:

📐 Orden de Bloques en el Frontmatter:

Metadatos e importaciones de Astro / Framework: Componentes del núcleo de Astro (como <Image />).

Importaciones de Layouts y Componentes del PJECZ: Ordenados alfabéticamente en estilo PascalCase.

Importaciones de Assets e Imágenes: Logos, iconos y vectores de la carpeta local.

Variables globales / Constantes de la página: Declaradas en UPPER_SNAKE_CASE.

Lógica del componente: Extracción de Props, TypeScript y funciones de JavaScript en snake_case.

❌ vs. ✅ Ejemplo de Estructura de Frontmatter:

❌ Estructura Incorrecta (Amontonada y desordenada)

---
// SIN ORDEN, MEZCLANDO CONSTANTES, IMPORTS Y VARIABLES SIN SEPARAR POR LÍNEAS
import Header from './Header.astro';
const LIMITE_DIAS = 30;
import { Image } from 'astro:assets';
const { titulo_pagina } = Astro.props;
import logo from '../assets/logo-pjecz.png';
import BaseLayout from '../layouts/BaseLayout.astro';
console.log(titulo_pagina);
---


✅ Estructura Correcta (Estándar PJECZ)

---
// 1. IMPORTACIONES DEL CORE / COMPONENTES INTERNOS DE ASTRO
import { Image } from 'astro:assets';

// 2. IMPORTACIONES DE LAYOUTS Y COMPONENTES (PascalCase)
import BaseLayout from '../layouts/BaseLayout.astro';
import Header from './Header.astro';

// 3. IMPORTACIONES DE ASSETS LOCALES (PascalCase para recursos gráficos)
import LogoPjecz from '../assets/logo-pjecz.png';

// 4. CONSTANTES (UPPER_SNAKE_CASE) - Separado por una línea en blanco
const LIMITE_DIAS = 30;

// 5. EXTRACCIÓN DE PROPS Y LÓGICA (Variables en snake_case)
const { titulo_pagina, es_jurisdiccional = false } = Astro.props;

// Función de procesamiento local
function obtener_fecha_servidor() {
    return new Date().toLocaleDateString('es-MX');
}
---


🖼️ 4.2. Optimización de Imágenes con el Componente <Image />

En los portales de gobierno, el rendimiento móvil es clave. El uso de la etiqueta estándar <img> de HTML obliga al navegador a descargar las imágenes a tamaño completo y en formatos pesados (como .png o .jpg originales), ralentizando la navegación.

Por directriz institucional del PJECZ, está estrictamente prohibido usar la etiqueta clásica <img> para activos locales. Debes usar siempre el componente optimizado nativo de Astro.

🌟 Beneficios de usar <Image /> de Astro:

Conversión Automática: Transforma las imágenes pesadas de origen (.png, .jpg) al formato moderno .webp (hasta 80% más ligero) de forma automática.

Ajuste de Dimensiones: Evita que el navegador sufra de Cumulative Layout Shift (saltos bruscos de diseño) al exigir de manera obligatoria los atributos de tamaño.

Carga Perezosa (Lazy Loading): Las imágenes que están abajo en el scroll solo se descargan conforme el usuario navega hacia ellas, ahorrando valiosos datos móviles.

📐 Sintaxis Correcta de Implementación:

---
import { Image } from 'astro:assets';
import logotipoOficial from '../assets/logo-pjecz.png';
---

<!-- CORRECTO: Importación del asset y asignación explícita -->
<Image 
    src={logotipoOficial} 
    alt="Logotipo oficial del Poder Judicial del Estado de Coahuila de Zaragoza" 
    width={400} 
    height={120} 
    loading="eager" 
/>


📋 Atributos Clave a Configurar:

src (Obligatorio): Debe ser la variable del recurso importado directamente en el Frontmatter, no una ruta en texto crudo.

alt (Obligatorio): Una descripción de texto alternativa para accesibilidad. No uses palabras redundantes como "Imagen de..." o "Foto de...". Si la imagen es puramente decorativa (como un adorno de fondo), puedes dejar alt="".

width y height (Obligatorios para mantener el aspecto): Especifica los pixeles de renderizado óptimos para evitar deformaciones en la maquetación.

loading (Opcional):

Use loading="eager" para imágenes críticas de cabecera (Header, logotipo del PJECZ) que se ven inmediatamente al cargar.

Deja el comportamiento por defecto (lazy) para el resto de imágenes inferiores para optimizar el rendimiento de carga inicial.

🛠️ 4.3. Checklist de Optimización antes de Entregar:

[ ] ¿Cero etiquetas <img>? Todo recurso local se renderiza mediante <Image /> de Astro.

[ ] ¿Frontmatter ordenado? El código superior de JavaScript/TypeScript sigue la jerarquía (Framework -> Componentes -> Assets -> Constantes -> Props y Funciones).

[ ] ¿Atributos alt descriptivos? Ningún lector de pantalla para personas con discapacidad visual se topará con imágenes sin descripción en tus componentes modificados.

[ ] ¿Nombres correctos? Las variables que importan assets gráficos usan PascalCase (ej: LogoPjecz o IconoCalendario).

🔧 5. Flujo Seguro de Git (Fork y Sincronización)

En el PJECZ, la integridad de las ramas de producción es nuestra prioridad absoluta. Por políticas de seguridad de la Dirección de Informática, ningún desarrollador o practicante tiene permisos de escritura directa en el repositorio central (PJECZ/pjecz-gob-mx-astro).

Si intentas hacer un git push directo, te toparás de inmediato con el temido Error 403 (Permission Denied). Para trabajar de manera colaborativa, segura y ágil, implementamos el flujo de trabajo mediante Fork.

🚫 5.1. ¿Por qué ocurre el Error 403 y cómo evitarlo?

El Error 403 ocurre porque estás intentando subir tus cambios directamente al repositorio oficial del Poder Judicial:

❌ https://github.com/PJECZ/pjecz-gob-mx-astro.git

La Solución: El Flujo del Fork (Bifurcación)

Para poder subir cambios, debes trabajar sobre tu propia copia en la nube (tu Fork) y proponerlos mediante un Pull Request (PR). Sigue estos pasos para configurarlo desde cero:

Crea tu Fork: Ve al repositorio oficial en GitHub (PJECZ/pjecz-gob-mx-astro) y haz clic en el botón "Fork" (esquina superior derecha). Esto creará una copia idéntica del proyecto en tu cuenta personal de GitHub.

Configura tus Remotos en Local: Abre la terminal en tu entorno WSL y asegúrate de que el control remoto origin apunte a tu copia personal (tu Fork) y no al institucional:

# Redirige tu origin hacia tu Fork personal
git remote set-url origin [https://github.com/TU_USUARIO/pjecz-gob-mx-astro.git](https://github.com/TU_USUARIO/pjecz-gob-mx-astro.git)


Configura el Repositorio de la Organización (Upstream): Para poder descargar las actualizaciones que hagan tus compañeros en el repositorio oficial, configura un remoto de referencia llamado upstream:

# Agrega el repositorio oficial como fuente de actualización
git remote add upstream [https://github.com/PJECZ/pjecz-gob-mx-astro.git](https://github.com/PJECZ/pjecz-gob-mx-astro.git)


Verifica tu configuración: Ejecuta git remote -v. Deberías ver algo idéntico a esto:

origin    [https://github.com/TU_USUARIO/pjecz-gob-mx-astro.git](https://github.com/TU_USUARIO/pjecz-gob-mx-astro.git) (fetch)
origin    [https://github.com/TU_USUARIO/pjecz-gob-mx-astro.git](https://github.com/TU_USUARIO/pjecz-gob-mx-astro.git) (push)
upstream  [https://github.com/PJECZ/pjecz-gob-mx-astro.git](https://github.com/PJECZ/pjecz-gob-mx-astro.git) (fetch)
upstream  [https://github.com/PJECZ/pjecz-gob-mx-astro.git](https://github.com/PJECZ/pjecz-gob-mx-astro.git) (push)


💻 5.2. Trabajar Siempre en Ramas de Tareas (Features)

Regla de oro: Nunca, bajo ninguna circunstancia, realices commits directos en tu rama main local. Tu rama main debe usarse únicamente para sincronizarse con el repositorio oficial.

Cada vez que inicies un nuevo cambio (como arreglar el Header, crear un componente o redactar un Markdown), crea una rama temporal:

# 1. Asegúrate de estar en main
git checkout main

# 2. Crea y cámbiate a tu nueva rama descriptiva
git checkout -b feature/correccion-header


🏠 🔄 🏢 5.3. Sincronización Segura: Casa <--> Oficina

Es muy común que comiences una tarea en tu computadora en la oficina y desees continuarla en casa por la tarde, o viceversa. Al usar un Fork personal, este proceso es extremadamente sencillo y seguro:

Escenario: De la Oficina a la Casa

En la Oficina (Al terminar tu jornada): Sube tu rama de trabajo activa a tu Fork en GitHub:

git add .
git commit -m "style: Ajustes de responsividad en el Header del PJECZ"
git push origin feature/correccion-header


En Casa (Al encender tu computadora personal): Si ya tenías el proyecto clonado en tu computadora de casa:

# A. Descarga la lista de ramas y cambios nuevos desde tu Fork
git fetch origin

# B. Cámbiate a la rama en la que estabas trabajando en la oficina
git checkout feature/correccion-header


¡Listo! Tienes exactamente el mismo código que dejaste en la oficina.

Al terminar en Casa (Para regresar los cambios a la Oficina): Sigue programando, guarda tus commits y vuelve a empujarlos a tu Fork:

git add .
git commit -m "fix: Corrección de espaciados en vista móvil"
git push origin feature/correccion-header


De regreso en la Oficina (Al día siguiente): Actualiza tu rama local con lo que hiciste en la noche en casa:

git checkout feature/correccion-header
git pull origin feature/correccion-header


🔄 5.4. Sincronizar tu Fork con el Repositorio Institucional (Upstream)

Mientras tú trabajas en tu rama, otros compañeros pueden subir cambios al repositorio oficial del PJECZ. Para evitar conflictos de código (Merge Conflicts) al enviar tu propuesta, mantén tu código al día:

# 1. Ve a tu rama principal local
git checkout main

# 2. Trae los últimos cambios del repositorio oficial (upstream)
git fetch upstream

# 3. Une los cambios oficiales en tu rama main local
git merge upstream/main

# 4. Actualiza tu Fork de GitHub para que esté al día con la organización
git push origin main


Una vez que tu rama main local esté al día, puedes regresar a tu rama de trabajo (feature/correccion-header) e integrar las novedades con un simple git merge main.

🧠 6. Bitácora de Soluciones Rápidas (Troubleshooting)

En el día a día del desarrollo, es completamente normal toparse con muros técnicos. Esta bitácora recopila los dolores de cabeza más comunes en el entorno de desarrollo del PJECZ (WSL, Astro y Git) junto con sus soluciones directas "al grano".

🚫 6.1. Errores Comunes en Git

🚨 Caso 1: El temido Error 403: Permission to PJECZ/... denied

¿Qué pasó? Intentaste hacer un git push directo al repositorio de la organización.

¿Por qué ocurre? Por seguridad, no tienes permisos de escritura directa en el repositorio central (upstream). Tu flujo de trabajo exige que envíes los cambios a tu copia personal (origin).

La Solución:

Verifica tus remotos ejecutando git remote -v.

Si origin apunta a PJECZ/pjecz-gob-mx-astro, cámbialo a tu fork personal:

git remote set-url origin [https://github.com/TU_USUARIO_GITHUB/pjecz-gob-mx-astro.git](https://github.com/TU_USUARIO_GITHUB/pjecz-gob-mx-astro.git)


Asegúrate de hacer el push apuntando a tu fork:

git push origin feature/tu-rama


🚨 Caso 2: Conflicto de Fusión (Merge Conflict) al sincronizar con upstream

¿Qué pasó? Al hacer git merge upstream/main, Git se detiene y dice: «CONFLICT (content): Merge conflict in...».

¿Por qué ocurre? Tú y otro compañero modificaron exactamente las mismas líneas del mismo archivo, y Git no sabe cuál versión conservar.

La Solución:

Abre Visual Studio Code. Los archivos en conflicto se pintarán de color rojo.

Al abrirlos, verás decoradores interactivos con las opciones:

Accept Current Change (Mantener tus cambios locales).

Accept Incoming Change (Conservar lo que descargaste de internet).

Accept Both Changes (Mantener ambos bloques).

Elige la opción correcta (si tienes dudas, pregúntale a tu compañero qué lógica debe prevalecer).

Una vez resuelto, guarda el archivo, añádelo y haz commit:

git add .
git commit -m "merge: Resolviendo conflictos con rama principal"


🧭 6.2. Errores Comunes de Rutas y Compilación en Astro

🚨 Caso 3: Error de colisión de rutas (Conflicting routes)

¿Qué pasó? Al correr el comando npm run dev o intentar hacer un build, la terminal se detiene arrojando un error de rutas duplicadas.

¿Por qué ocurre? Tienes dos archivos en src/pages/ que resuelven la misma URL. Por ejemplo, tener src/pages/transparencia.astro y al mismo tiempo src/pages/transparencia.md (o transparencia/index.astro).

La Solución:

Revisa tu carpeta src/pages/.

Asegúrate de que no existan archivos con nombres idénticos pero diferentes extensiones (.astro, .md, .mdx).

Elimina o unifica el archivo duplicado.

🚨 Caso 4: Una ruta Markdown (.md) da error 404 o no hereda el diseño del portal

¿Qué pasó? Creaste un nuevo archivo Markdown (por ejemplo, en src/pages/conocenos/estructura.md), pero al abrir el navegador el diseño institucional desaparece o la página no carga.

¿Por qué ocurre? Los archivos .md de contenido crudo no saben por sí mismos qué envoltorio visual usar. Necesitan que les definas explícitamente el layout en su configuración superior.

La Solución:

Abre tu archivo .md.

En el Frontmatter superior, asegúrate de importar e indicar el Layout base:

---
layout: ../../layouts/BaseLayout.astro
title: "Estructura Organizacional"
---


(Ajusta los puntos ../../ según la profundidad de la carpeta donde se encuentre tu archivo).

💻 6.3. Errores del Entorno (WSL y Node)

🚨 Caso 5: ENOSPC: System limit for number of file watchers reached

¿Qué pasó? Al ejecutar npm run dev, el servidor se cae de inmediato con este error del sistema.

¿Por qué ocurre? El subsistema de Linux (WSL) tiene un límite de archivos que puede monitorear en tiempo real. Al tener proyectos grandes con miles de carpetas en node_modules, este límite se supera.

La Solución:

Abre tu terminal de WSL y ejecuta el siguiente comando para aumentar el límite en el sistema:

echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p


Introduce tu contraseña de WSL y reinicia tu servidor de desarrollo con npm run dev.

🚨 Caso 6: Las imágenes locales no se muestran tras compilar (npm run build)

¿Qué pasó? En desarrollo todo se ve perfecto, pero al compilar el proyecto final, algunas imágenes se muestran con un icono roto.

¿Por qué ocurre? Usaste rutas escritas en texto plano en el atributo de la imagen en lugar de importarlas de forma nativa.

La Solución:

Incorrecto (Ruta cruda en texto):

<Image src="/src/assets/logo.png" alt="Logo" width={100} height={100} />


Correcto (Importación en Frontmatter):

---
import LogoPjecz from '../assets/logo.png';
---
<Image src={LogoPjecz} alt="Logo" width={100} height={100} />


🔗 7. Enlaces Recomendados y Recursos de Consulta

Para resolver dudas adicionales o profundizar en los estándares del proyecto, te recomendamos guardar las siguientes URL oficiales en tus marcadores de desarrollo. Puedes copiarlas y pegarlas directamente en la barra de direcciones de tu navegador:

⚙️ Desarrollo y Frameworks

📘 Documentación Oficial de Astro (Español): https://docs.astro.build/es/getting-started/

(Guía completa sobre el ciclo de vida de componentes, islas de interactividad e integración de frameworks).

📦 Guía de Optimización de Imágenes en Astro: https://docs.astro.build/es/guides/images/

(Buenas prácticas detalladas para el uso de <Image /> y <Picture />).

🐍 Estándares y Manuales

🐍 Manual PEP 8 Oficial (Python): https://peps.python.org/pep-0008/

(El manual técnico de la comunidad en el que se basa nuestra filosofía de orden, indentación y nomenclatura).

📖 PEP 8 en Español - Guía Interactiva: https://recursospython.com/guias-y-manuales/pep-8-guia-de-estilo-para-python/

(Una explicación amigable de las reglas del estándar Python para una lectura veloz).

🐙 Entorno de Trabajo y Control de Versiones

💻 Documentación de Windows Subsystem for Linux (WSL): https://learn.microsoft.com/es-es/windows/wsl/

(Soporte oficial para la administración de entornos Linux y configuración de sistemas de archivos en Windows).

📙 Pro Git Book (Completo en Español): https://git-scm.com/book/es/v2

(El libro definitivo de Git para dominar flujos de trabajo, resolver conflictos y gestionar ramas).

🏛️ Portal en Producción del PJECZ: https://www.pjecz.gob.mx

(Enlace al portal oficial activo para contrastar maquetaciones e integraciones en vivo).