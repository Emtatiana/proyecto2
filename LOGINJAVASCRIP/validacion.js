function validarDatos() {
    // Obtener los valores ingresados en los campos de entrada
    var estadoActual = document.getElementById("estadoActual").value;
    var fechaInicio = document.getElementById("fechaInicio").value;
    var horasPlanificadas = document.getElementById("horasPlanificadas").value;
  
    // Validar los valores ingresados
    if (estadoActual == "" || fechaInicio == "" || horasPlanificadas == "" || fechaFinal == "" || Text == "" || numero == "" ) {
      // Mostrar un mensaje de error si faltan datos
      alert("Vuelva a intentarlo, datos erróneos");
    } else {
        window.location = "index4.html";
      // Mostrar un mensaje de éxito si los datos son correctos
      alert("Datos enviados correctamente");
      
    }
}