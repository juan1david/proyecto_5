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