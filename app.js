'use strict';
const agents = {
  explora: {name:'Explora', title:'Dale estructura a tu próxima entrega.', description:'Empieza por lo que pide el docente y termina con una ruta, tus evidencias y una revisión de lo que falta.', steps:['Abre la herramienta y elige el área de tu asignatura.','Escribe la consigna y recorre la ruta de trabajo.','Añade fuentes, desarrolla tus ideas y revisa los criterios.'], outcome:'Una tarea organizada y un respaldo que puedes exportar.', url:'https://rekol08.github.io/aula-consultas-multidisciplinares/'},
  resuelve: {name:'Resuelve', title:'Comprende qué pasa entre el problema y la respuesta.', description:'Trabaja con una ecuación, un sistema, una proporción o un porcentaje. Compara tu solución con un procedimiento explícito.', steps:['Elige uno de los cinco tipos de ejercicio disponibles.','Introduce los coeficientes y, si quieres, tu respuesta.','Pulsa «Resolver y verificar» y revisa cada operación.'], outcome:'Una solución explicada y una comparación de tu respuesta con tolerancia numérica.', url:'https://rekol08.github.io/aula-ejercicios-paso-a-paso/'},
  comprueba: {name:'Comprueba', title:'Pon tus resultados sobre la mesa.', description:'Revisa la estadística de tu práctica o transforma unidades compatibles, con las fórmulas y los pasos a la vista.', steps:['Elige «Estadística descriptiva» o «Conversión de unidades».','Introduce datos separados por punto y coma, o el valor y las unidades.','Calcula y compara tu respuesta indicando la tolerancia que necesitas.'], outcome:'Estadísticos o una conversión de unidades, con el procedimiento para revisarlos.', url:'https://rekol08.github.io/aula-laboratorio-datos/'}
};
const byId=id=>document.getElementById(id);
const choices=document.querySelectorAll('[data-agent]');
for(const button of choices) button.addEventListener('click',()=>{
  const key=button.dataset.agent;if(!Object.hasOwn(agents,key))return;const agent=agents[key];
  for(const choice of choices)choice.setAttribute('aria-pressed',String(choice===button));
  byId('rec-label').textContent=`TE ACOMPAÑA ${agent.name.toUpperCase()}`;
  byId('rec-title').textContent=agent.title;byId('rec-description').textContent=agent.description;
  byId('rec-steps').replaceChildren(...agent.steps.map(step=>{const li=document.createElement('li');li.textContent=step;return li;}));
  byId('rec-outcome').textContent=agent.outcome;byId('rec-link').href=agent.url;byId('rec-link').textContent=`Abrir ${agent.name} ↗`;
});
