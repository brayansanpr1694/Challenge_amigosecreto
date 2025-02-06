let amigos = [];
let BotonSortear = document.getElementById("sortearAmigoButton");

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    let buttonAdd = document.getElementById("button-add");
    if (amigo == "") {
        alert("Por favor, inserte un nombre");
    } else {
        amigos.push(amigo);
        document.getElementById("amigo").value = "";  // Limpiar el campo de entrada
        mostrarListaAmigos();
        buttonAdd.style.backgroundColor = "var(--color-tertiary)"; // Color original
        buttonAdd.style.color = "var(--color-text)";
    }
};

function mostrarListaAmigos(){
    let lista = document.getElementById("listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");  
        li.textContent = amigos[i];  
        lista.appendChild(li); 
    }
};

function sortearAmigo() {
    if (BotonSortear.textContent.trim() === "Reiniciar") {
        BotonSortear.textContent = "Sortear amigo secreto";
        document.getElementById("listaAmigos").innerHTML = "";
        document.getElementById("resultado").textContent = ""; 
    } else {
        if (amigos.length === 0) {
            alert("No ha introducido ningún amigo para sortear, por favor ingrese un nombre.");
        } else {
            let amigoSecretoAleatorio = amigos[Math.floor(Math.random() * amigos.length)];
            document.getElementById("resultado").textContent = `Tu amigo secreto es: ${amigoSecretoAleatorio}`;

            amigos = []; 
            document.getElementById("listaAmigos").innerHTML = "";
            BotonSortear.textContent = "Reiniciar";
        }
    }
};


document.addEventListener("DOMContentLoaded", function() {
    let input = document.getElementById("amigo");
    let buttonAdd = document.getElementById("button-add");

    input.addEventListener("input", function() {
        if (input.value.trim() !== "") {
            buttonAdd.style.backgroundColor = "var(--color-primary)"; // Color cuando hay texto
            buttonAdd.style.color = "var(--color-white)"; // Cambia color del texto si es necesario
        } else {
            buttonAdd.style.backgroundColor = "var(--color-tertiary)"; // Color original
            buttonAdd.style.color = "var(--color-text)";
        }
    });
});


