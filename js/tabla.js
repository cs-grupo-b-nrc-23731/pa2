// tabla.js
import { tasas, guardarTasas } from "./tasas.js";

export function renderizarTabla() {
  const tabla = document.getElementById("tablaTasas");
  if (!tabla) return;

  tabla.innerHTML = "";
  tasas.forEach((t, i) => {
    tabla.innerHTML += `
      <tr>
        <td>${t.origen}</td>
        <td>${t.destino}</td>
        <td>${t.tasa}</td>
        <td class="acciones">
          <button onclick="editarTasa(${i})">✏️</button>
          <button onclick="eliminarTasa(${i})">🗑️</button>
        </td>
      </tr>
    `;
  });
}

window.editarTasa = function(index) {
  const item = tasas[index];
  const nuevoOrigen = prompt("Editar moneda origen:", item.origen);
  const nuevoDestino = prompt("Editar moneda destino:", item.destino);
  const nuevaTasa = prompt("Editar tasa:", item.tasa);

  if (nuevoOrigen && nuevoDestino && !isNaN(nuevaTasa)) {
    tasas[index] = {
      origen: nuevoOrigen.toUpperCase(),
      destino: nuevoDestino.toUpperCase(),
      tasa: parseFloat(nuevaTasa)
    };
    guardarTasas();
    renderizarTabla();
  }
};

window.eliminarTasa = function(index) {
  if (confirm("¿Seguro que deseas eliminar esta tasa?")) {
    tasas.splice(index, 1);
    guardarTasas();
    renderizarTabla();
  }
};
