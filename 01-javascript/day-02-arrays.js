/* Objetivo a practicar

.push()
.map() crear un nuevo arreglo
.filter() filtra varios
.find() busca a uno
.some() recorre el array y devuelve: true  → si al menos un elemento cumple la condición false → si ninguno cumple la condición
.every() metodo que responde si es verdadero o falso para todos los elementos
.includes()

*/

// Array principal
const residents = [
  { id: 1, name: "Ana", status: "active", debt: 0 },
  { id: 2, name: "Luis", status: "inactive", debt: 500 },
  { id: 3, name: "Carlos", status: "active", debt: 1200 },
  { id: 4, name: "María", status: "active", debt: 0 },
  { id: 5, name: "Sofía", status: "inactive", debt: 300 }
];

// Ejercicio 1

/* Obtener solo residentes activos.

Pista: necesitas un método que devuelve varios elementos que cumplen una condición. */

function esActivo(resident){
    return resident.status === "active";
}
const activeResidents = residents.filter(esActivo);

console.log("Residentes activos:");  
console.log(activeResidents);
// ----------------------------------------------------------------------------------------------------------------------------------------------






// Ejercicio 2 

/* Obtener residentes con deuda.

Pista: deuda mayor que 0.*/

function hasDebt(resident){
    return resident.debt > 0;
}

const residentsWithDebt = residents.filter(hasDebt);

console.log("Residentes con deuda:");  
console.log(residentsWithDebt);
// ----------------------------------------------------------------------------------------------------------------------------------------------






// Ejercicio 3

/* Buscar residente por nombre.

Función:

function findResidentByName(name) {
  // tu lógica
}

Debe funcionar aunque escribas:

"ana"
"ANA"
"Ana"

Pista: vas a necesitar comparar textos en el mismo formato, probablemente usando .toLowerCase(). */

function findResidentByName(name) {
  return residents.find(function(resident){
    return resident.name.toLowerCase() === name.toLowerCase()
  });
}

console.log("Sin importar como se escriba el nombre se va a mostrar")

console.log(findResidentByName("ana"));
console.log(findResidentByName("ANA"));
console.log(findResidentByName("Ana"));

/* El toLowerCase sirve para convertir todas las letras de una cadena de texto a 
minúsculas, permitiendo estandarizar y normalizar el contenido */

/* El primer return devuelve el resultado de residents.find().
find() recorre el array residents y devuelve el primer residente que cumpla la condición.
El segundo return es la condición que se evalúa para cada residente.
Se convierte resident.name y name a minúsculas para comparar ambos textos sin importar si el usuario escribe "ana", "ANA" o "Ana". */
// ----------------------------------------------------------------------------------------------------------------------------------------------






// Ejercicio 4

/* Crear un nuevo array solo con nombres.

Resultado esperado:

["Ana", "Luis", "Carlos", "María", "Sofía"]

Pista: aquí no quieres filtrar, quieres transformar. */

const residentNames = residents.map(resident => resident.name)

console.log("Nombre de residentes)")
console.log(residentNames);

/* Lo que hace el map() es transformar todo esto: { id: 1, name: "Ana", status: "active", debt: 0 } a solo esto "Ana".
La const creada se llama "name" que es asignado "residents.map" que "residents es la const principal" el map ya lo comente que es lo que hace, map() recorre el array original y crea un nuevo array con el resultado de transformar cada elemento. En este caso, transforma cada objeto resident en solo resident.name. No modifica el array original residents..
Use resident porque representa a un solo residente */
// ----------------------------------------------------------------------------------------------------------------------------------------------






// Ejercicio 5

/* Verificar si todos los residentes activos no tienen deuda.

Pista: primero piensa si necesitas filtrar activos y luego verificar una condición. */

function hasNoDebt(resident){
      return resident.debt === 0;
}

const activeResidentsWithoutDebt = activeResidents.every(hasNoDebt);

console.log("¿Todos los residentes activos no tienen deuda?");
console.log(activeResidentsWithoutDebt);
// ----------------------------------------------------------------------------------------------------------------------------------------------






// Ejercicio 6

/* Verificar si existe algún residente con deuda mayor a 1000.

Pista: no necesitas traer el residente completo, solo saber si existe o no. */

function hasDebtGreaterThan1000(resident) {
  return resident.debt > 1000;
}

const existsDebtGreaterThan1000 = residents.some(hasDebtGreaterThan1000);

console.log("¿Existe algún residente con deuda mayor a 1000?");
console.log(existsDebtGreaterThan1000);



/* 
  map()    transforma cada elemento y devuelve un nuevo array.
  filter() devuelve un nuevo array con los elementos que cumplen una condición.
  find()   devuelve el primer elemento que cumple una condición.
  some()   devuelve true si al menos uno cumple la condición.
  every()  devuelve true si todos cumplen la condición.

*/



// Para poder ejecutarlo: node 01-javascript/day-02-arrays.js