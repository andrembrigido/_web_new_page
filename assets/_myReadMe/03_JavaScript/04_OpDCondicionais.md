<ternario ?> Operador ternario serve para verificar apenas um condição
var tem18 = idade >= 18 ? true : false

--------------------------------------

<if>se (começa as condiçōes)
<else if> se senão (meio das condiçōes)
<else>se não (finaliza as condiçōes)
<Switch> Para comparacoes exatas

var nota1 = 8.0;
var nota2 = 7.0;
var media = (nota1 + nota2) / 2;
var conceito = ""

if (media >= 8) {
    conceito = "Otimo"; 
}
else if = (media >= 6.5) {
    conceito = "Bom";
}
else{
    conceito = "Regular";
}
cosole.media()
console.log(conceito);

switch (conceito) {
    case "Otimo":
        console.log("Voce Passou")
        break;
    case "Bom":
        console.log("Voce foi bem")
        break;
    case "Regular":
        console.log("Estude mais")
        break;
    default:
        console.log("houve algum erro")
        break;
}
