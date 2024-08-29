//  Reversión de cadena: Dada una frase y luego muestra la misma frase pero con las palabras en 
//  orden inverso.

    const cadena = "Rock your body know, backstreet back alright (drop)";
    let cadenaInversa = "";

    cadenaInversa = cadena.split('').reverse().join('');

    console.log("Cadena original: " + cadena);
    console.log("Cadena invertida: " + cadenaInversa)
