# Presentación del equipo · 30 de octubre de 2026

## Recorrido

1. La portada explica el propósito con una situación de práctica universitaria y muestra cómo se relacionan las tres herramientas.
2. Las fichas presentan nombre, especialidad, capacidades concretas, ejemplo, acceso directo, manual y límites.
3. El selector «Hoy necesito…» cambia la recomendación, tres pasos de uso, resultado esperado y enlace de destino.
4. La sección docente ofrece un modo de trabajo en clase. Las preguntas frecuentes explican alcance, almacenamiento y requisitos.

Los nombres públicos son Explora, Resuelve y Comprueba. Las URLs, repositorios y capacidades de las aplicaciones se conservan. Los ejemplos de las fichas son ilustraciones de uso; el enlace abre la herramienta sin reemplazar datos guardados ni cargar automáticamente un ejercicio.

## Archivos y mantenimiento

- `index.html`: contenido semántico, navegación, fichas, orientación inicial y preguntas frecuentes nativas mediante `details`.
- `style.css`: identidad visual verde, colores por especialidad, símbolos realizados con texto y CSS, distribución en escritorio y móvil, foco visible y movimiento reducido.
- `app.js`: datos de las tres recomendaciones y actualización del selector. Usa `textContent`, destinos fijos y estados `aria-pressed`; el panel anuncia cambios con `aria-live`.

El portal no añade persistencia, capturas de datos, servicios externos ni dependencias. Las aplicaciones enlazadas conservan su propio almacenamiento. La selección se reinicia al recargar. Sin JavaScript permanecen visibles la recomendación inicial y los tres accesos directos.

## Verificación de esta presentación

- `node --check app.js`: aprobado.
- Vista local HTTP 200 y revisión visual en escritorio.
- Selector: se comprobó cambio a Resuelve y Comprueba, incluyendo pasos y URL de cada destino.
- Pantalla móvil de 390 × 844: selector visible y sin desbordamiento horizontal en el documento inspeccionado.
- Las pruebas de lógica de las herramientas no se repitieron: no cambió su código.

Esta entrega mejora la presentación y la orientación inicial. No incorpora un modelo de IA, conversación libre ni validación universal de tareas.
