//////////////Funçōes/////////////////

Function media(n1, n2){
    var nota1 = n1;
    var nota2 = n2;
    var media = (nota1 + nota2) / 2;
    return media;
}
var resultado = media(6, 7)
console.log(resultado)
--------------------------------------
<Função Anônima>
var media = function (n1, n2) {
    return (n1 + n2) / 2;
}
console.log(media(5, 6));
--------------------------------------
<Arrow Funcion>
var media = (n1, n2) => {
    return (n1 + n2) / 2;
}
console.log(media(5, 6));