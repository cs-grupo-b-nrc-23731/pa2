// conversion.js
import { tasas } from "./tasas.js";

export function cargarMonedas() {
  const monedas = [...new Set(tasas.flatMap(t => [t.origen, t.destino]))];
  const origenSelect = document.getElementById("monedaOrigen");
  const destinoSelect = document.getElementById("monedaDestino");
  origenSelect.innerHTML = "";
  destinoSelect.innerHTML = "";

  monedas.forEach(moneda => {
    origenSelect.innerHTML += `<option value="${moneda}">${moneda}</option>`;
    destinoSelect.innerHTML += `<option value="${moneda}">${moneda}</option>`;
  });
}

export function convertir() {
  const cantidad = parseFloat(document.getElementById("cantidad").value);
  const origen = document.getElementById("monedaOrigen").value;
  const destino = document.getElementById("monedaDestino").value;

  if (origen === destino) {
    document.getElementById("resultado").textContent = "Selecciona monedas diferentes.";
    return;
  }

  const tasa = tasas.find(t => t.origen === origen && t.destino === destino);

  if (!tasa) {
    document.getElementById("resultado").textContent = "Tasa no encontrada.";
    return;
  }

  const resultado = cantidad * tasa.tasa;
  document.getElementById("resultado").textContent = `${cantidad} ${origen} = ${resultado.toFixed(2)} ${destino}`;
}
