// Asi se ponenen comentarios

/*
Si necesito poner un comentario que sea de multiples lineas
Se hace de esta manera
*/

// La funcion prompt va a capturar informacion del navegar y la va almacenar en la variable miNombre
const miNombre = prompt("Cual es su nombre perra? ");

// Acá se actualizara el formulario HTML una vez que el usuario ingrese su nombre
document.querySelector(".contenido").innerHTML = `${miNombre} y estoy aprendiendo javascript pedazo de hijo de puta!!`;