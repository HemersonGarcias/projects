const links = document.querySelectorAll("a");
const paragrafos = document.querySelectorAll(".grid-section p");
const imagens = document.querySelector(".imgs-social")

console.log(links.length);
console.log(paragrafos.length);

paragrafos[0].classList.add("ativo");


function activeLink(index) {
  paragrafos.forEach((paragrafo) => {
    paragrafo.classList.remove("ativo");
    imagens.classList.remove("ativo")
  });
  paragrafos[index].classList.add("ativo");
  if(paragrafos[paragrafos.length-1].classList.contains("ativo")){
    imagens.classList.add("ativo")
    //alert("awd")
  }
}

links.forEach((link, index) => {
  link.addEventListener("click", () => {
    activeLink(index);
  });
});
