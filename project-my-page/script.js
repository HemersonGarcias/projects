
function activeParagrafo() {
  const links = document.querySelectorAll("a");
  const paragrafos = document.querySelectorAll(".grid-section p");

  paragrafos[0].classList.add("ativo");

  function activeLink(index) {
    paragrafos.forEach((paragrafo) => {
      paragrafo.classList.remove("ativo");
    });
    paragrafos[index].classList.add("ativo");
  }

  links.forEach((link, index) => {
    link.addEventListener("click", () => {
      activeLink(index);
    });
  });
}
activeParagrafo();

function activeItem(){
  const lis = document.querySelectorAll("li");
  lis[0].classList.add("ativada");

  function activeP(index){
    lis.forEach((li)=>{
      li.classList.remove("ativada");
    })
    lis[index].classList.add("ativada");
  }

  lis.forEach((li, index)=>{
    li.addEventListener('click',()=>{
      activeP(index);
    })
  })
}
activeItem();