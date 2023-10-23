//hace referencia a un objeto sin propiedades ni contenido.
const math = {};

// Esta función invierte el orden de los dígitos en un número dado 
const invertirNumero = numero => { 
//está declarando una llamada variable invertidoe inicializándola con el valor 0.
let invertido = 0; 
//Este bucle se ejecutará siempre que 'numero' sea diferente de 0  
while (numero != 0) { 
//Agrega el último dígito de 'numero' al final de 'invertido' 
 invertido = 10 * invertido + numero % 10 
//Eliminar el último dígito de 'numero' dividiendo entre 10
 numero = (Math.floor(numero / 10)) 
}
//Devolver el número invertido
return invertido
};

//Esta función invierte el orden de los dígitos en un número dado y lo devuelve como texto
 const invertirNumeroComoTexto = numero => {
//convierte un número en su versión invertida como texto
 const numeroInvertidoComoTexto = numero.toString().split("").reverse().join("");
//invierte el orden de los dígitos en un número dado y lo devuelve como texto
return numeroInvertidoComoTexto; 
}; 

//invierte el orden de los caracteres en un texto dado y lo devuelve como resultado
 const invertirTexto = texto => {
//divide un texto en un array de caracteres individuales
 const splitText = texto.split(''); 
//Invertir el orden de los caracteres en el array
 const reversedText = splitText.reverse(); 
//Unir los caracteres invertidos en un texto
 const joinedText = reversedText.join(''); 
//Devolver el texto invertido
return joinedText;
}; 

//invierte el orden de los arreglos en un texto dado y lo devuelve como resultado
const invertirArreglo = arreglo => {
    //constante que se encarga de revertir el objeto
    const reverseobject = arreglo.reverse();
    //devuelve el valor del arreglo 
    return reverseobject;
};

//convierte los datos a una base de datos
const conversionDatos = data => {
    //se usa para cambiar la variable a datos 
    let datatype = typeof data;
    //se guardan los datos
    let datavar;

    //se crea un if para los datos de cada una
    if(data === '' || data === null || data === undefined ||data.length === 0) {
        //mensaje que vota un mensaje sobre los datos
        datavar = 'el valor ingresado esta vacio o incorrecto';
    }else{
        //mensaje que dice el valor de cada objeto o arreglo
        console.log(`el valor ingresado es de tipo: ${datatype}, con unvalor de: ${data}`);
        //se usa para pedir el tipo de arreglo
        switch (datatype) {
            //caso que vota un numero
            case 'number':
                //dato que guarda un numero
                datavar = invertirNumero(data);
                //pausa
                break;
                //caso que vota un texto en cadena
            case 'string':
                //dato que guarda un texto en cadena
                datavar = invertirTexto(data);
                //pausa
                break;
                //caso que vota un objeto
            case 'object':
                //dato que guarda un arreglo
                datavar = invertirArreglo(data);
                //pausa
                break;
            default:
                //dato que guarda un mensaje 
                datavar = 'el valor ingresado no se puede invertir'
        }
    }
    //devuelve los datos solicitados
    return datavar;
}

//dato matematico de invertirNumero
math.invertirNumero = invertirNumero;
//dato matematico de invertirNumeroComoTexto
math.invertirNumeroComoCadena = invertirNumeroComoTexto;
//dato matematico de invertirTexto
math.invertirTexto = invertirTexto;
//dato matematico de invertirArreglos
math.invertirArreglo = invertirArreglo;
//dato matematico de conversionDatos
math.conversionDatos = conversionDatos;

//modulo que exporta los datos de matematicas
module.exports = math;