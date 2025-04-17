// tasas.js
export let tasas = JSON.parse(localStorage.getItem("tasas")) || [
    { origen: "USD", destino: "PEN", tasa: 3.80 },
    { origen: "PEN", destino: "USD", tasa: 0.26 },
    { origen: "USD", destino: "EUR", tasa: 0.91 }
  ];
  
  export function guardarTasas() {
    localStorage.setItem("tasas", JSON.stringify(tasas));
  }
  
