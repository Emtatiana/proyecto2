function login(){
    var user, password 

    user= document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if(user == "usuario" && password == "1234"){
        window.location = "index2.html";
        } else {
            alert("Datos Incorrectos")
    }
}