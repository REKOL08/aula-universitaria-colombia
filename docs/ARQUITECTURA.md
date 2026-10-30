# Arquitectura y agentes

## Repositorios independientes

| Agente de desarrollo | Repositorio | Responsabilidad |
|---|---|---|
| Coordinación | aula-universitaria-colombia | Portal, documentación global e integración de enlaces |
| Razonamiento matemático | aula-ejercicios-paso-a-paso | Métodos, casos degenerados y verificación numérica |
| Consulta académica | aula-consultas-multidisciplinares | Guías por disciplina, consignas, fuentes y evidencias |
| Análisis cuantitativo | aula-laboratorio-datos | Estadística, unidades y pasos de cálculo |

Los agentes tienen archivos de instrucciones personalizados versionados. Son roles de trabajo durante el desarrollo; no servicios residentes ni modelos de IA ejecutados en navegador.

## Recursos

HTML/CSS/JavaScript nativos; no backend, frameworks, fuentes externas, bibliotecas remotas ni llamadas a modelos. Cada app descarga sus propios archivos y ejecuta cálculos o guías locales. Publicar desde rama evita mantener una cadena de compilación. No hay tarifas de API en la implementación. Los límites del alojamiento corresponden a GitHub Pages.

## Datos

El portal no guarda entradas. Las apps mantienen su estado local y ofrecen respaldos según su documentación. El almacenamiento pertenece al navegador y puede perderse al limpiar datos. Los proyectos Pages bajo el mismo dominio comparten origen: no es aislamiento de seguridad entre aplicaciones. No introducir secretos ni datos sensibles. Los respaldos importados requieren validación y las entradas deben renderizarse como texto, no HTML.

## Verificación

Cada app conserva pruebas ejecutables de su lógica con Node y reporta sus límites. La publicación debe comprobarse separadamente de las pruebas locales: una prueba aprobada no acredita un despliegue. Revisar diseño en escritorio y móvil y operaciones principales; no afirmar compatibilidad universal sin haberla comprobado.
