// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo (){
    const nombre = document.getElementById("nombreAmigo").value;

    if (nombre.trim() === ""){
        alert("Ingrese un nombre porfavor")
        return;
    }

amigos.push(nombre);


mostrarAmigos();


document.getElementById("nombreAmigo").value = "";
}

function mostrarAmigos(){
    const listaAmigosElement = document.getElementById("listaAmigos");

    //limpiar lista

    listaAmigosElement.innerHTML = "";

    // iterar para agregar amigos

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigosElement.appendChild(li);
    }
}

function sortearAmigo(){
    if (amigos.length === 0) {
        alert("No hay amigos para sortear!");
        return;
    }

    const indice = Math.floor(Math.random()* amigos.length);

    const amigoSorteado = amigos[indice];

    document.getElementById("resultado").innerHTML = `El amigo secreto sorteado es: ${amigoSorteado}`;

}
