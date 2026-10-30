# Aula abierta · Universidad en Colombia

Portal de tres herramientas educativas independientes, gratuitas y utilizables directamente desde el navegador. No requiere registro, instalación ni claves de API.

**Entrada:** https://rekol08.github.io/aula-universitaria-colombia/

| Herramienta | Uso | Código y documentación |
|---|---|---|
| [Consultas multidisciplinares](https://rekol08.github.io/aula-consultas-multidisciplinares/) | Descomponer tareas y organizar fuentes y evidencias | [Repositorio](https://github.com/REKOL08/aula-consultas-multidisciplinares) |
| [Ejercicios paso a paso](https://rekol08.github.io/aula-ejercicios-paso-a-paso/) | Resolver y comprobar ejercicios matemáticos soportados | [Repositorio](https://github.com/REKOL08/aula-ejercicios-paso-a-paso) |
| [Laboratorio de datos](https://rekol08.github.io/aula-laboratorio-datos/) | Estadística descriptiva y conversión de unidades | [Repositorio](https://github.com/REKOL08/aula-laboratorio-datos) |

## Alcance

Las consultas generan guías de trabajo por disciplina, no respuestas factuales de una IA. Las verificaciones automáticas cubren únicamente los métodos declarados en cada herramienta. No se promete validar ejercicios de cualquier tema. Las herramientas no sustituyen la rúbrica del docente ni reglamentos de una institución. No hay servicio de IA, cuentas ni sincronización remota. GitHub recibe las solicitudes web; los datos introducidos por el estudiante se procesan localmente según el manual de cada app.

## Desarrollo en Visual Studio Code

Abre `../Universidad.code-workspace` en la carpeta local de entrega: contiene cuatro repositorios separados. Cada repositorio incluye un `AGENTS.md` con su especialidad, alcance y mantenimiento. Esos archivos orientan futuras sesiones de agentes; no son agentes ejecutándose permanentemente en GitHub Pages. El workspace es una configuración local y no es necesaria para estudiantes.

El portal contiene `index.html` y `style.css`, sin compilación ni dependencias. Para previsualizar, sirve la carpeta con cualquier servidor estático (por ejemplo `python -m http.server 8765` si tienes Python como desarrollador). Los visitantes solo abren el enlace publicado.

## Publicación y mantenimiento

GitHub Pages publica `main`, carpeta raíz `/`. `.nojekyll` evita procesamiento Jekyll. Los enlaces y assets son compatibles con subrutas de Pages. Para cambios: edita el repositorio correspondiente, ejecuta sus pruebas, revisa el diff, confirma y sube a `main`. Comprueba el despliegue en Actions y la URL pública. El portal no copia código de las apps: cada proyecto mantiene su documentación y publicación.

- [Guía docente](docs/GUIA-DOCENTE.md)
- [Arquitectura, agentes y recursos](docs/ARQUITECTURA.md)

Licencia MIT. No se exige afiliación universitaria y no se representa a una universidad específica.
