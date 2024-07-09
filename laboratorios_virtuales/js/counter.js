function incrementarContador() {
  // Obtenemos el contador actual del almacenamiento local (si existe)
  var contador = localStorage.getItem("visitas");

  // Si no hay contador, comenzamos desde cero
  if (!contador) {
    contador = 0;
  }

  // Incrementamos el contador en 1
  contador++;

  // Actualizamos el contador en la página
  document.getElementById("contador").innerText = contador;

  // Guardamos el nuevo valor del contador en el almacenamiento local
  localStorage.setItem("visitas", contador);
}

// Llamamos a la función para incrementar el contador al cargar la página
window.onload = function () {
  incrementarContador();
};
