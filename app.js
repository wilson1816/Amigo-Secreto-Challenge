                                        //Bloque de estructura para insertar listado de amigos//
   
    //Declarar variable tipo array para almacenar los datos//
let amigos = []
console.log(amigos);
    //Funcion para agregar amigos//
function agregarAmigo(){
    // si utilizo el metodo .queryselector el elemento amigo deberia ser #amigo//
    let nombreAmigo = document.getElementById("amigo").value;

    // Agregar el mensaje de alerta por medio de una condicional//
    if (nombreAmigo === ""){
    alert("Por favor, inserte un nombre"); 
    return;
    }
    
    //agregar amigos a la lista//
    amigos.push(nombreAmigo);

    //Limpiar campo//
    document.getElementById("amigo").value = "";

    //Funcion actualziarListaAmigos//
    actualizarListaAmigos();

}
                                   
                                    //Bloque para correr la estructura de la lista de amigos//
//Funcion actualizar la lista de amigos//
function actualizarListaAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";  //Limpiar la lista de amigos//

// Recorrer la lista de amnigos//
    amigos.forEach(function(amigo){
    let li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
    })
}


                                    //Bloque para realizar el sorteo de la lista de amigos// 
//Funcion para sortear amigos//
function sortearAmigo(){
    if (amigos.length === 0) {
        alert("No hay amigos en la lista");
        return; 
    }

// Generar amigo aleatorio //
    let amigoAleatorio = Math.floor(Math.random() * amigos.length);

// Obtener amigo aleatorio //
    let amigoElegido = amigos[amigoAleatorio];

// Mostrar resultado //
    document.getElementById("resultado").innerHTML = "Amigo Elegido: " + amigoElegido;
}
