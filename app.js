console.log(`TRABAJO ELABORADO POR: JUAN DAVID CUELLAR ROMERO`);
console.log(`FICHA: 2798618`);
console.log(`PROGRAMA: ANALISIS Y DESARROLLO DE SOFTWARE`);
//se utiliza para agregar estilos y colores a la salida de texto en la terminal. 
require('colors'); 

//permitirá acceder a las exportaciones que haya definido en ese archivo y utilizarlas en el archivo actual.
const math = require('./math.js')

//se utiliza para definir un punto de entrada o función principal de un programa
const main = async () => {

//muestra un mensaje en la consola con el texto "HOLA SENA CBA" en color rojo.
    console.log('HOLA SENA CBA\n'.red);

//crea un arreglo llamado numerosque contiene una serie de números enteros.
    const numeros = [1, 2, 800, 912, 1000, 1283, 2811];

    //Código a ejecutar para cada elemento   
    for (const numero of numeros) {
        //Implementación de la función para invertir el número
        const invertidoComoNumero = math.invertirNumero(numero);
        //Función para invertir un número y devolver su representación invertida como una cadena de caracteres.
        const invertidoComoCadena = math.invertirNumeroComoCadena(numero);
        //Mensaje de salida que muestra información sobre un número y su inversión como número y cadena.
        console.log("el numero '%s' es invertido como numero, y '%s' como cadena", 
        numero, invertidoComoNumero, invertidoComoCadena);
    }

    //Arreglo que almacena una colección de cadenas de texto.
    const textos = ['HOLA SENA', 'FICHA 2798618', 'ANALISIS Y DESARROLLO DE SOFTWARE']
    //Itera a través del arreglo 'textos' y realiza una operación para cada cadena de texto.
    for (const texto of textos){
        //Utiliza la función 'invertirTexto' para obtener la versión invertida de una cadena de texto.
        const textoInvertido = math.invertirTexto(texto);
        //Imprime información sobre la inversión de un texto.
        console.log("el texto '%s' se invierte como '%s'", texto, textoInvertido);
    }

    //Arreglo que almacena una colección de datos de diferentes tipos.
    const datos = [1234567, 'ADSO 2798618', [2798618, 'ADSO'] ]
    //Itera a través del arreglo 'datos' y realiza una operación para cada elemento.
    for (let dato of datos){
        //Utiliza la función 'conversionDatos' para realizar una conversión en un dato.
        const datoConvertido = math.conversionDatos(dato);
        // Imprime el resultado de la conversión de datos.
        console.log(`el resultado de conversion es: ${datoConvertido}`);
    }
}

//Llama a la función principal 'main()' para iniciar la ejecución del programa.
main();