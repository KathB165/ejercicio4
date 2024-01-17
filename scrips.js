
numeroUser = parseInt(prompt("Ingrese cantidad de numero a imprimir de la serie fibonacc"));

if(isNaN(numeroUser)){
    alert("No es un numero, por favor ingrese un numero");
}

function fibonacci(numeroUser) {
    let fibArray = [0, 1];

    for (let i = 2; i <= numeroUser; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
    }

    return fibArray.slice(0, numeroUser);
}


const resultado = fibonacci(numeroUser);
console.log(resultado)


let fiboResultadojs = document.getElementById("fiboResultado")
fiboResultadojs.innerHTML = (`${resultado}`);