# Fundo Santa Elisa — Sitio público

Sitio web público del loteo **Fundo Santa Elisa** (Buin · Alto Jahuel). Es un sitio
**100% estático** (HTML/CSS/JS, sin build ni backend): esta carpeta es la **raíz que se publica**.

## Deploy

Conectado a **Netlify** con **deploy continuo**: cada `git push` a `main` publica el sitio automáticamente.

- **Sitio:** https://fundosantaelisa.cl (una vez conectado el dominio)
- **Netlify project:** `shimmering-semolina-eda2c8` (site-id `615f7a4e-50d9-42ff-9bc9-31c920d9d85c`)
- **Publish directory:** raíz del repo (`.`) · **Build command:** ninguno.

### Publicar un cambio
```bash
# editar index.html (o los .js / assets)
git add -A
git commit -m "descripción del cambio"
git push          # → Netlify publica solo
```

Netlify guarda cada deploy → se puede hacer *rollback* instantáneo desde el dashboard.

## Qué hay acá
- `index.html` — landing one-page (hero, visor 360°, formulario de captación, FAQ).
- `politica-privacidad.html`, `terminos.html` — legales.
- `sitios-geo.js`, `pois.js`, `encuadre.js`, `calibracion.js` — geometría y calibración del visor 360°.
- `assets/` — imágenes, video y audio.
- `robots.txt`, `sitemap.xml`, `site.webmanifest` — SEO / PWA.
- `_headers` — cabeceras de seguridad (Netlify las aplica al desplegar).

## Integraciones
- **Google Analytics 4** — Measurement ID `G-1KMZP6BH1H` (con Consent Mode v2: GA solo dispara tras aceptar cookies).
- **Formulario** — Web3Forms: los leads llegan a `contacto@fundosantaelisa.cl`.

## Pendientes antes de publicar en el dominio real
- Razón social + RUT del titular en los legales (hoy `[RAZÓN SOCIAL]` / `[RUT]`).
- Testimonios reales en el bloque de confianza (hoy placeholders).
- Confirmar WhatsApp comercial, dominio definitivo (www vs apex) y la casilla de correo.

> El código fuente editable, el dashboard interno y los scripts viven en el proyecto principal
> (`~/proyectos-claude/almahue/santa-elisa/`), que **no** se versiona acá por contener datos comerciales sensibles.
> Este repo es **solo el sitio público desplegable**.
