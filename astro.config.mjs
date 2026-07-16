// @ts-check
//import { defineConfig } from 'astro/config';

// https://astro.build/config
//export default defineConfig({});

// Astro acepta un objeto de configuración plano; se evita la dependencia
// `astro/config` (defineConfig) para mantener el archivo libre de imports npm.
export default {
    site: 'https://www.pjecz.gob.mx',
    // Sitio estático institucional. No se requieren integraciones de framework:
    // los componentes son .astro (HTML/CSS sobre el design system oficial).
};
