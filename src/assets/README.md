# Directorio reservado para imágenes procesadas por Astro

Coloca aquí imágenes que quieras importar desde componentes `.astro`
(optimización automática con `astro:assets`), por ejemplo:

```astro
---
import { Image } from 'astro:assets';
import foto from '@/assets/foto.jpg';
---
<Image src={foto} alt="…" />
```

Los logos y patrones de marca viven en `public/assets/` porque se referencian
por ruta absoluta (`/assets/...`) desde CSS y `<img>`.
