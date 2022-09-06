var resultado = document.getElementById("resultado").innerHTML;
ans = 0;

function insert(i){
ans = document.getElementById("resultado").innerHTML += i;
return ans; 

}

function clean(){
    document.getElementById("resultado").innerHTML = "";
}
function back(){
    
    document.getElementById("resultado").innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular(){
    var resultado = document.getElementById("resultado").innerHTML;

    if (resultado) {
        document.getElementById("resultado").innerHTML = eval(resultado);

    } else {
        document.getElementById("resultado").innerHTML = "nada para calcular";
    }
}