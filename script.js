let modoGato = false;

const images = document.getElementById("imagenInteractiva");
const boton = document.getElementById("cambiarImagen");

// Cargar hover dinámico
images.addEventListener("mouseover", () => {
  if (modoGato) {
    images.src = "images/gatoLengua.png";
  } else {
    images.src = "images/raquelGuino.png";
  }
});

images.addEventListener("mouseout", () => {
  if (modoGato) {
    images.src = "images/gato.png";
  } else {
    images.src = "images/raquel.png";
  }
});

// Botón que cambia entre modo Raquel y Gato
boton.addEventListener("click", () => {
  modoGato = !modoGato;

  // Cambiar imagen inicial
  images.src = modoGato ? "images/gato.png" : "images/raquel.png";

  // (Opcional) cambiar el texto del botón
  boton.textContent = modoGato ? "Volver a Raquel" : "Cambiar a Gato";
});
