import {
  findProjectsByKeyWord,
  filterProjectsByCategories,
} from "./js/galeria.js";

let sectionGrid = document.querySelector(".grid");
let sectionCategories = document.getElementById("categorias");
let finder = document.getElementById("barra-busqueda");
let overlay = document.getElementById("overlay");
let yearSpan = document.getElementsByClassName("year");

document.addEventListener("DOMContentLoaded", (e) => {
  e.preventDefault();

  /* No es parte del módulo de proyectos, solo es para imprimir el año actual en los span */
  const year = new Date().getFullYear();

  const elementsYearSpan = [...yearSpan];
  elementsYearSpan.forEach((span) => {
    span.textContent = year;
  });
  /* fin */

  sectionGrid.classList.toggle("effectOpacityImages");

  setTimeout(() => {
    window.dispatchEvent(new Event("resize"));
  }, 200);

  sectionCategories.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.classList.contains("btnCategory")) {
      document.querySelector("#categorias .activo").classList.remove("activo");
      e.target.classList.add("activo");
      const categoryId = e.target.id.toLowerCase();
      filterProjectsByCategories(categoryId);
    }
  });

  finder.addEventListener("keyup", (e) => {
    const keywords = finder.value;
    findProjectsByKeyWord(keywords);
  });

  sectionGrid.addEventListener("click", (e) => {
    e.preventDefault();
    let classShow = e.target.classList;
    if (classShow.contains("capa") || classShow.contains("viewProj")) {
      overlay.classList.add("active");
      let item = e.target.parentElement.parentElement;
      if (classShow.contains("viewProj")) {
        item = e.target.parentElement.parentElement.parentElement;
      }
      let {
        imgSrc,
        description,
        linkProjGit,
        linkProjWeb,
        title,
        tecnologias,
      } = item.dataset;
      overlay.innerHTML = `<div class="container-img">
          <div class="capImg">
          <a><i class="fas fa-times btnClose"></i></a>
          <img src="./${imgSrc}" alt="" />
          </div>
        </div>
        <div class="sectionLinkProj">
        <a class="linkProj" target='_blank' href='${linkProjGit}' title="Ir a repositorio de proyecto">
          <i class="fab fa-github"></i>
        </a>
        <a class="linkProj" target='_blank' href='${linkProjWeb}' title="Ir a proyecto">
          <i class="fab fa-chrome"></i>
        </a>
        </div>
        <h3 class="titleProj">${title}</h3>
        <p class="description">${description}</p>
        <p class="tecnologies"> Tecnologias : ${tecnologias}</p>`;
    }
  });

  overlay.addEventListener("click", (e) => {
    let elementClose = e.target.classList;
    if (elementClose.contains("btnClose") || elementClose.contains("overlay")) {
      overlay.classList.remove("active");
    }
  });
});
