// Obtener referencias a los elementos HTML
const agregarBtn = document.getElementById('agregar-btn');
const tabla = document.getElementById('tabla');
const tbody = tabla.querySelector('tbody');

// Contador para contar cuántas veces se han agregado datos
let contador = 0;

// Agregar manejador de eventos al botón "Agregar"
agregarBtn.addEventListener('click', function() {
  // Obtener los datos ingresados por el usuario
  const actividad = prompt('Ingrese la actividad:');
  const horas = parseFloat(prompt('Ingrese el número de horas:'));
  const observaciones = prompt('Ingrese las observaciones:');

  // Validar los datos ingresados por el usuario
  if (isNaN(horas)) {
    alert('El número de horas debe ser un valor numérico.');
    return;
  }

  // Crear una nueva fila en la tabla con los datos ingresados
  const fila = document.createElement('tr');
  fila.innerHTML = `
    <td>${actividad}</td>
    <td>${horas}</td>
    <td>${observaciones}</td>
  `;
  tbody.appendChild(fila);

  // Incrementar el contador
  contador++;

  // Verificar si se han ingresado 3 registros
  if (contador === 3) {
    alert('Sus datos han sido vistos.');
  }
});

