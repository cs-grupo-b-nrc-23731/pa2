// registrar.js
import { tasas, guardarTasas } from "./tasas.js";

export function agregarTasa() {
  const origen = document.getElementById("nuevaOrigen").value.toUpperCase();
  const destino = document.getElementById("nuevaDestino").value.toUpperCase();
  const tasa = parseFloat(document.getElementById("nuevaTasa").value);

  if (!origen || !destino || isNaN(tasa)) {
    alert("Completa todos los campos correctamente.");
    return;
  }

  tasas.push({ origen, destino, tasa });
  guardarTasas();

  document.getElementById("nuevaOrigen").value = "";
  document.getElementById("nuevaDestino").value = "";
  document.getElementById("nuevaTasa").value = "";
}
