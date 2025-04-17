// main.js
import { cargarMonedas, convertir } from "./conversion.js";
import { agregarTasa } from "./registrar.js";
import { renderizarTabla } from "./tabla.js";

// Carga dinámica según la página
document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;

  if (path.includes("convertir.html")) {
    cargarMonedas();
    window.convertir = convertir;
  }

  if (path.includes("registrar.html")) {
    window.agregarTasa = agregarTasa;
  }

  if (path.includes("listado.html")) {
    renderizarTabla();
  }
});
