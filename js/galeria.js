import {
  categoryProjects,
  mongoDb,
  nodeJs,
  sql,
  vanillaJs,
} from "./bd_projects.js";

const printBtnCategories = (categories) => {
  let htmlCategories = "";
  for (const category of categories) {
    htmlCategories += `<a href="#" id="${category}" class='btnCategory'> ${category}</a>`;
  }
  document.getElementById("all").insertAdjacentHTML("afterend", htmlCategories);
};

const formatItems = (array) => {
  const arrayFormated = [];
  for (const itemData of array) {
    const item = document.createElement("div");
    item.classList.add(
      "item",
      `${itemData.category.toLowerCase()}`,
      "container"
    );
    item.dataset.description = itemData.description;
    item.dataset.keyword = itemData.keyword;
    item.dataset.title = itemData.title;
    item.dataset.linkProjGit = itemData.linkProjGit;
    item.dataset.linkProjWeb = itemData.linkProjWeb;
    item.dataset.tecnologias = itemData.tecnologias;
    item.dataset.imgSrc = itemData.imgSrc;
    item.innerHTML += `
    <div class="item-content figure">
              <img src="${itemData.imgSrc}" alt="" />
                          <div class="capa">
              <i class="fas fa-info-circle viewProj"></i>
            </div>
            </div>
    
    `;
    arrayFormated.push(item);
  }
  return arrayFormated;
};

printBtnCategories(categoryProjects);
const projects = formatItems([
  ...mongoDb.projects,
  ...sql.projects,
  ...vanillaJs.projects,
  ...nodeJs.projects,
]);

const grid = new Muuri(".grid", {
  items: projects,
  layout: {
    rounding: false,
  },
});

grid.refreshItems().layout();

const findProjectsByKeyWord = (keywords) => {
  grid.filter((item) => {
    return item.getElement().dataset.keyword.includes(keywords.toLowerCase());
  });
};

const filterProjectsByCategories = (category) => {
  category === "all" ? grid.filter(`.item`) : grid.filter(`.${category}`);
};

export { findProjectsByKeyWord, filterProjectsByCategories };
