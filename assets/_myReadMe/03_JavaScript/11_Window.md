TUDO NO JAVASCRIPT É UM OBJETO

<window>É um objeto de onde provem a mairia dos metodos que usamos, como console.log ou alert
<console.log>
É um metodo de window que execute uma funcao (so aparece dentro do console do chrome);
Console.log é um metodo de window por isso nao precisamos chamar window.console.log()
<alert>
Mostra um pop-up na tela
<prompt>
Abre uma caixa, que pode ser usada, para conseguir um imput do usuario (Sempre é uma string, para numeros use Parse)
<document>
Mostra o nosso documento html no console do chrome, assim podemos acessar uma propriedade do html
document
document.body
<innerHTML>
É uma propriedade de body
document.body.innerHTML
<getElementByTagName>
Pega todos os elesmentos do Document pela Tag
<getElementById>
pega o elemento do Document pelo ID
<getElementByIClassName>
Pega os elementos do Docuemnt pela CLASS

EXEMPLO

let p = document.getElementById("p1") //VAMOS USAR AS 3 PROPRIEDADE PARA ALTERAR O QUE TEM DENTRO DO "P1"

p.innerHTML = "<h1>Novo Conteudo</h1>" //ISSO VAI ADICIONAR UM ELEMENTO AO h1 com um texto dentro do nosso ID
p.innerText = "<h1>Novo Conteudo</h1>" //ISSO VAI MUDAR O CONTEUDO DO ID PARA UM TEXTO <h1>Novo Conteudo</h1>
P.textContent = "<h1>Novo Conteudo</h1>" //ISSO VAI MUDAR O CONTEUDO DO ID PARA UM TEXTO <h1>Novo Conteudo</h1> POREM CASO TENHAMOS OUTRO ELEMENTO
DENTRO DO ID, ELE TRARIA JUNTO MESMO, QUE ELE NAO ESJA APARECENDO NA TELA.

<Biblioteca Math>
É usada para fazer calculos matematicos

<JSOM>
usado para transformar uma String em um objeto ou um objeto em uma string
