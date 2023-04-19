//Promp
/*
const sumarUno  = parseInt(prompt('Suma: '))
const sumarDos  = parseInt(prompt('Suma: '))
const resultado = sumarUno + sumarDos;
document.querySelector('.sumaResultado').innerHTML = `${resultado}`;
*/

const sumatoria = () =>{
    let sumaU = document.getElementById("numeroUnoSuma").value; 
    let sumaD = document.getElementById("numeroDosSuma").value; 

    document.getElementById("respuestaSuma").innerHTML = parseInt(sumaU) + parseInt(sumaD);
}
const restar = () =>{
    let restaU = document.getElementById("numeroUnoResta").value; 
    let restaD = document.getElementById("numeroDosResta").value; 

    document.getElementById("respuestaResta").innerHTML = parseInt(restaU) - parseInt(restaD);
}
const multiplicar = () =>{
    let MultiplicarUno = document.getElementById("numeroUnoMulti").value; 
    let MultiplicarDos = document.getElementById("numeroDosMulti").value; 

    document.getElementById("respuestaMultipliacion").innerHTML = parseInt(MultiplicarUno) * parseInt(MultiplicarDos);
}
const dividir = () =>{
    let DividirUno = document.getElementById("numeroUnoDivi").value; 
    let DivirdirDos = document.getElementById("numeroDosDivi").value; 

    document.getElementById("respuestaDividir").innerHTML = parseInt(DividirUno) / parseInt(DivirdirDos);
}