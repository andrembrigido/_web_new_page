/*-----------------------------------------------------*/
/*----------------OPEN AND CLOSE MENU------------------*/
/*-----------------------------------------------------*/

let btnMenuVar = document.getElementById("btnMenu");

function toggleMenu() {
  let navMenuVar = document.getElementById("navMenu");
  navMenuVar.classList.toggle("active"); //toggle adiciona a classe caso tenha e remove caso nao tenha
}

btnMenuVar.addEventListener("click", toggleMenu);

/*-----------------------------------------------------*/
/*-----------------------------------------------------*/
/*-----------------------------------------------------*/
