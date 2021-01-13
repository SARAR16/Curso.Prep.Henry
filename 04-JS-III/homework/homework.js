// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

devolverPrimerElemento(['piña', 'manzana', 'pera']);


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length -1];
}
devolverUltimoElemento(['pez', 'caracol', 'ostra']);

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}
obtenerLargoDelArray ([1, 2, 3, 4, 5, 6]);

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arreglo = [];
  for(var num=0; num < array.length; num++){
    arreglo[num] = array [num] + 1;
  }
  return arreglo;
}
incrementarPorUno([10]);

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
array.push(elemento);
return array;

}
agregarItemAlFinalDelArray (['patricia']);

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

agregarItemAlComienzoDelArray (['dos']);

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');
}
dePalabrasAFrase(['soy', 'una', 'frase']);

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

for (var num=0; num < array.length; num++){
  if (elemento === array[num]){
  return true;
  }
}
return false;
}

arrayContiene([3], 3)

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var suma = 0;
  for (var num = 0; num < numeros.length; num++){
    suma = suma + numeros[num];
  }
 return suma;
}
agregarNumeros([2, 3, 5]);

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var suma = 0;
  for (var num = 0; num < resultadosTest.length; num++){
    suma = suma + resultadosTest[num];
  }
return suma / resultadosTest.length;
}

promedioResultadosTest([6,4]);

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var maxnum = numeros[0];
for ( var i = 0; i < numeros.length; i++){
  if (numeros[i] > maxnum){
      maxnum = numeros[i];
  }
}
return maxnum;
}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  var  multiplica = 1;

 if (arguments.length < 1){
   return 0;
 }
  for (i = 0; i < arguments.length; i++ ){
    multiplica = multiplica * arguments [i];
  }
  return multiplica;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
};
