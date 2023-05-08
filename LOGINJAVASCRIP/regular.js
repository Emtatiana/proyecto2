document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevenir que se recargue la página al enviar el formulario

  // Validar los campos
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var nivel = document.getElementById("number").value;
  var edad = document.getElementById("number").value;
  var campus = document.getElementById("text").value;
  var carrera = document.getElementById("text").value;
  if (name == "" || email == "" || nivel == ""|| edad == ""|| campus == ""|| carrera == "") {
    alert("Por favor, complete todos los campos");
    return;
  }
  // Redirigir a la siguiente página
  window.location.href = "index3.html";
});

