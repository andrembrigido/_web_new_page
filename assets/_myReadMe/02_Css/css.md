
________Identificadores________

•tag
•id="#id"
•class=".class"

___comentarios___

Ctrol + /

________Unidades________

Fixas

•Milímetro (1mm) CUIDADO - essa valor varia de acordo com o Zoom da tela
•Centímetro (1cm) CUIDADO - essa valor varia de acordo com o Zoom da tela
•inches (1in = 96px ou 2.54cm)
•Píxels (1px = 1/96 ou 1 inches) CUIDADO - Uma tela HD tem menos "px" que uma tela 4k
•Points (1pt = 1/72 ou 1 inches)
•Paica (1pc = 12 pontos)

Relativas

"UNIDADES RELATIVAS SAO RELATAIVAS A ALGO""

•Porcentagem (1% - Relativo ao tamanho do Elemento Pai) - CUIDADO - Se voce mudar o tamanho do Pai, o tamanho do Filho sera alterado
•Viewport Heith (1vh - Relativo a Altura da tela)
•Viewport Width (1vw - relativo a Largura da tela)
•Ems (em)
•Rems (rem)
•(Ex)
•character unit (ch)
•viewport minimun (vmin)
•viewport maximum (vmax)

________Edicao de Texto________
text-
text-transform
text-decoration
text-align
text-shadow
letter-spacing
word-spacing

________Edicao de font________
font-
font-family: Arail, sans-serif
font-family: "courier new", Courier, monospace
font-Style
font-size
font-weight

border
boxmodel
box sizing
scroll


________Position________

<Margin> - Espacamento externo
<Padding> - Espacamento0 interno

Display-
<inline> Elementos que NAO ocupam a linha toda, por exemplo em sua forma natural o elemento <span> esse vode NAO pode redimencionar a altura e largura
<block> Elementos que ocupam a linha toda como por exemplo em sua forma natural o elemento <p>, esse voce pode redimencionar a altura e largura
<inline-block> Elementos que NAO ocupam a linha toda, por exemplo em sua forma natural o elemento <span> esse vode NAO pode redimencionar a altura e largura

Position-
<static>
O elemento fica no fluxo normal do documento
<relative>
O elemento fica no fluxo normal do documento, O elemento é posicionado em relação a si mesmo
<absolute>
O elemento saio do fluxo normal do documento. O elemento é posicionado em relação ao Pai, se o Pai nao for Static
Sua posição final é determinada por top, right, bottome left.
<fixed>
O elemento sai do fluxo normal do documento. O elemento é posicionado em relação a ViewPort.
Sua posição final é determinada por top, right, bottom e left.
<sticky>
O elemento continua no fluxo normal do documento, mas quando rolamos a pagina, ele fica grudado ao Pai

Float
OverFlow


________FlexBox________

display:flex
flex-direction:row - Muda a direcao de row para column, e da direita pra esquerda
flex-wrap - para manter a altura e largura dos elementos, ele faz quebra de linha, porem se for muito grande ele vai sair do container pai
flex-flow - junta flex direction e flex wrap. para economizar uma linha.

PAI
justify-content - Muda a direcao dos filhos do container, dentro da Row ou Column em relacao ao container
align-content - Muda a direcao dos filhos do container, dentro da Row ou Column em relacao ao container
align-items - Muda a direcao dos filhos do container, dentro da Row ou Column em relacao do Row ou Column

FILHO
flex-shrink - Recebe de 0 ou 1, que diz se o filho pode encolher
flex-grow - Recebe um valor, que diz que se o filho pode almentar, esse valor é relativo, entao se voce colocar 2 ele sera 2x o tamanho a outro filho
order -  voce escolhe a ordem em que os elementos aparecem na tela
align-self - alinha o filho, onde voce quiser


________Grid________

display: grid;
grid-template-rows -  define o numero de linhas, pode usar qualquer medida, de preferencia a fr
grid-template-column - define o numero de colunas, pode usar qualquer medida, de preferencia a fr
grid-templete - shorthand para definir linhas e colunas na mesma linha
grid-row-gap - define um espacamento entre as linhas
grid-column-gap - define um espacamente entre as colunas
grid-gap - shorthand para grid-row-gap e grid-column-gap

justify-itens - modifica os elementos em relacao a column/espaco da grid que ele se encontra - horizontal
align-itens - modifica o elemento em relacao a row/espaco da grid que ele se encontra - vertival

justify-content - modifica as column em relacao ao container - horizontal
align-content - modifica as row em relacao ao container - vertical

grid-area

grid-row-start
grid-row-end


grid-template:
grid-column-start
grid-column-end









