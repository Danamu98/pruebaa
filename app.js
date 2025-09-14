// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];


function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, escribe un nombre válido.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Ese nombre ya está en la lista.");
    input.value = "";
    return;
  }

  amigos.push(nombre);
  mostrarAmigos();
  input.value = ""; 
}


function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = ""; 

  amigos.forEach((amigo, index) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    
    
    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";
    btnEliminar.classList.add("button-eliminar");
    btnEliminar.onclick = () => eliminarAmigo(index);

    li.appendChild(btnEliminar);
    lista.appendChild(li);
  });
}
function eliminarAmigo(index) {
  amigos.splice(index, 1);
  mostrarAmigos();
}


function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Debes tener al menos 2 amigos para hacer el sorteo.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indice];

  const resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li> Tu amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}

function reiniciarJuego() {
  amigos = []; 
  document.getElementById("listaAmigos").innerHTML = ""; 
  document.getElementById("resultado").innerHTML = "";   
  document.getElementById("amigo").value = "";          
}

