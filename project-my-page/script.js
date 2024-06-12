const links = document.querySelectorAll("a");
const paragrafos = document.querySelectorAll(".grid-section p");

console.log(links.length);
console.log(paragrafos.length);

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
