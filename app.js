let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    if (amigo == "") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(amigo);
        document.getElementById("amigo").value = "";  // Limpiar el campo de entrada
        mostrarListaAmigos()
    }
}

function mostrarListaAmigos(){
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");  
        li.textContent = amigos[i];  
        lista.appendChild(li); 
    }
}
