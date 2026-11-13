# Portfolio de Safira Yael Abraham

Sitio estático (HTML + CSS + JS), bilingüe ES/EN, listo para **GitHub Pages**. Gratis y sin servidor.

## Qué hay en cada archivo

| Archivo | Para qué sirve |
|---|---|
| `content.js` | **Todos los textos y links.** Es el único archivo que necesitás editar. |
| `index.html` | Estructura de la página y etiquetas de vista previa para LinkedIn. |
| `style.css` | Diseño. Los colores están al principio del archivo (bloque `:root`). |
| `main.js` | Arma la página y cambia de idioma sin recargar ni abrir otra pestaña. |
| `og-preview.png` | Imagen que se ve cuando compartís el link en LinkedIn (1200×627). |

## 1. Antes de publicar

Ya están cargados tus links reales (LinkedIn, GitHub, Tienda Nube y cada proyecto) y tu usuario
de GitHub en las etiquetas de vista previa de `index.html`. Solo revisá:

1. Que el repositorio se llame **`portfolio`**. Si usás otro nombre, cambialo en `index.html`
   en las líneas `og:url` y `og:image` (`https://abrahamsafirayael-gif.github.io/NOMBRE/`).
2. Los textos de `content.js`. La sección "6 razones" viene de tu carrusel de LinkedIn
   (traducida al inglés por mí) y la Tecnicatura figura como en el resto del sitio
   ("Sistemas de Información de las Organizaciones"; el carrusel dice "Informática de Gestión").

## 2. Publicar en GitHub Pages (gratis)

1. Entrá a https://github.com y creá una cuenta si no tenés.
2. **New repository**. Nombre: `portfolio` (queda `https://abrahamsafirayael-gif.github.io/portfolio/`).
   Si lo llamás exactamente `abrahamsafirayael-gif.github.io`, la dirección queda más corta:
   `https://abrahamsafirayael-gif.github.io/`. Dejalo en **Public**.
3. **Add file → Upload files** y arrastrá **todos** los archivos de esta carpeta
   (incluida `og-preview.png` y `.nojekyll`). **Commit changes**.
4. **Settings → Pages**. En *Build and deployment*: Source = **Deploy from a branch**,
   Branch = **main**, carpeta **/ (root)**. **Save**.
5. En 1 o 2 minutos aparece arriba la dirección de tu sitio.

## 3. Vista previa en LinkedIn

1. Pegá el link de tu sitio en https://www.linkedin.com/post-inspector/ y tocá **Inspect**.
   Así LinkedIn actualiza su caché y muestra la imagen nueva.
2. Podés usar ese mismo link en tu perfil (sección *Destacados* o *Información de contacto*)
   y en publicaciones.

## 4. Editar el sitio después

Desde GitHub: abrí `content.js` → ícono del lápiz → cambiá el texto → **Commit changes**.
En un minuto se actualiza. También podés editarlo en tu computadora y volver a subirlo.

## 5. Sobre el dominio

Gratis, la dirección es `abrahamsafirayael-gif.github.io/...`. Un dominio propio tipo
`tunombre.com` se paga siempre (alrededor de USD 10–15 por año). Si más adelante lo querés,
GitHub Pages lo admite en *Settings → Pages → Custom domain*.
