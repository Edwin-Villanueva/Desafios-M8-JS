let plan001 = [
  {
    nombre: "plan001",
    capital: 150000,
    plazo: 30,
    tasa: 15 / 100,
  },
];
let plan002 = [
  {
    nombre: "plan002",
    capital: 300000,
    plazo: 180,
    tasa: 10 / 100,
  },
];
let plan003 = [
  {
    nombre: "plan003",
    capital: 485000,
    plazo: 60,
    tasa: 23 / 100,
  },
];
function calcularInteres(plan) {
  return (plan.capital * plan.plazo * plan.tasa) / 100;
}
function añadirPropiedadInteres(planes) {
  return planes.map((plan) => {
    return { ...plan, interes: calcularInteres(plan) };
  });
}

function generarArrayDePlanes() {
  let planesUnificado = [...plan001, ...plan002, ...plan003];
  let planesFinal = añadirPropiedadInteres(planesUnificado);
  console.log(planesFinal);
  return planesFinal;
}
generarArrayDePlanes();
