# 🏛️ Nuevo Sitio Web — Poder Judicial del Estado de Coahuila de Zaragoza

Este repositorio contiene el código fuente del portal institucional desarrollado con **Astro**. Este documento resume la estructura del proyecto y las principales reglas de desarrollo.

---

# 📁 Estructura del Proyecto

```text
pjecz-gob-mx-astro/
├── public/              # Archivos estáticos
├── src/
│   ├── assets/          # Imágenes y recursos
│   ├── components/      # Componentes (PascalCase)
│   ├── layouts/         # Plantillas base (Se recomienda no hacer cambios en este archivo y de ser necesario, se deberan comentar los cambios realizados)
│   ├── pages/           # Rutas del sitio
│   └── styles/          # Estilos globales
└── astro.config.mjs     # Configuración de Astro
```

---

# 🛠️ Comandos

| Comando | Descripción |
|---------|-------------|
| `npm install` | Instala las dependencias. |
| `npm run dev` | Inicia el servidor local. |
| `npm run build` | Genera la versión de producción. |
| `npx astro check` | Valida el proyecto antes de subir cambios. |

---

# 📐 Convenciones de Código

- Evitar espacios innecesarios.
- Usar nombres de variables descriptivos.
- Mantener el código limpio y reutilizable.

**Correcto**

```javascript
const datos = {id: 1, tipo: "civil"};
obtener_fecha_servidor();
```

**Incorrecto**

```javascript
const datos = { id : 1, tipo : "civil" };
obtener_fecha_servidor ();
```

---

# 📝 Nomenclatura

| Elemento | Convención | Ejemplo |
|----------|------------|----------|
| Componentes | **PascalCase** | `Header.astro` |
| Variables | **snake_case** | `nombre_usuario` |
| Imágenes | **kebab-case** | `logo-blanco.png` |
| Markdown | **kebab-case** | `boletin-judicial.md` |