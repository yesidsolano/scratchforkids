# Landing Page - Curso de Programación con Scratch

Landing page multilingüe (Español / English / 日本語) para promocionar el **Curso de Programación con Scratch** de Lemniscate Académico.

## Características

- Diseño moderno, colorido y atractivo para niños y padres
- Totalmente responsive (móvil, tablet y desktop)
- Selector de idioma: Español, Inglés y Japonés
- Secciones: Hero, Sobre el curso, Habilidades, Contenido (8 clases), Cómo funciona, Equipo, Testimonios y CTA final
- Botones de inscripción enlazados al formulario de Google Forms
- Animaciones suaves y elementos visuales llamativos

## Cómo desplegar en GitHub Pages

1. Crea un nuevo repositorio en GitHub (puede ser público).
2. Sube **todos** los archivos de esta carpeta (`index.html`, `css/`, `js/`, etc.) a la raíz del repositorio.
3. Ve a **Settings → Pages**.
4. En "Source" selecciona la rama `main` (o `master`) y la carpeta `/ (root)`.
5. Guarda. En unos minutos tendrás tu página en:
   `https://tu-usuario.github.io/nombre-del-repositorio`

### Opción rápida con GitHub CLI o desde la web

También puedes arrastrar la carpeta completa en la interfaz de GitHub al crear el repositorio.

## Estructura

```
scratch-landing/
├── index.html
├── css/
│   └── styles.css
├── js/
│   ├── i18n.js      (traducciones)
│   └── main.js      (idioma + menú)
├── assets/          (puedes agregar imágenes aquí)
└── README.md
```

## Personalización recomendada

- Agrega un logo real en la carpeta `assets/` y actualiza el HTML.
- Sustituye los avatares de iniciales del equipo por fotos reales.
- Si tienes imágenes de proyectos de Scratch de los niños, agrégalas en la sección de testimonios o contenido.
- El enlace de inscripción actual es: https://forms.gle/RMVewoaJsrEVCAHn8

¡Listo para publicar!
