const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
function pedir(tipo, index) {
  let valor;

  do {
    valor = parseFloat(
      prompt(`Ingrese el valor de ${tipo} para el mes de ${meses[index]}`)
    );
  } while (isNaN(valor) || valor < 0);

  return valor;
}

function pedirEgreso(index) {
  return pedir("EGRESO", index);
}
function pedirIngreso(index) {
  return pedir("INGRESO", index);
}
function totalizar(arr) {
  return arr.reduce((total, item) => {
    return (total += item);
  });
}
function revisarFlujo() {
  let ingresos = [];
  let egresos = [];
  for (let index = 0; index < 2; index++) {
    let ingreso = pedirIngreso(index);
    let egreso = pedirEgreso(index);
    ingresos.push(ingreso);
    egresos.push(egreso);
  }
  let totIngresos = totalizar(ingresos);
  let totEgresos = totalizar(egresos);
  console.log("ingresos : " + totIngresos);
  console.log("egresos : " + totEgresos);
  if (totIngresos < totEgresos) alert("El flujo genera perdidas");
  else alert("El flujo NO genera perdidas");
}
revisarFlujo();
