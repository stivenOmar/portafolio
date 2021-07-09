const categoryProjects = ["vanillaJs", "nodeJs", "sql", "MongoDb"];

const vanillaJs = {
  projects: [
    {
      title: "Administrador de citas",
      keyword: "js javascript frontend",
      imgSrc: "../img/AdministradorDeCitasJs.png",
      category: "vanillaJs",
      description:
        "Este proyecto permite al administrador de una veterinaria gestionar las citas que va a tener durante su jornada de trabajo",
      linkProjGit: "https://github.com/stivenOmar/administradorCitas",
      linkProjWeb: "https://xenodochial-torvalds-00abf3.netlify.app/",
      tecnologias: "Javascript - Local storage",
    },
    {
      title: "Imágenes de Pixabay",
      keyword: "js javascript frontend api",
      imgSrc: "../img/imgProyImagenesPixabay.png",
      category: "vanillaJs",
      description:
        "Si necesitas buscar imagenes de alta calidad y además que los derechos de autor no sea un problema, puedes utilizar esta app web",
      linkProjGit: "https://github.com/stivenOmar/Pixabay_Images",
      linkProjWeb: "https://romantic-wescoff-21b37f.netlify.app/",
      tecnologias: "Javascript - API - FETCH - Local Storage",
    },
  ],
};

const nodeJs = {
  projects: [],
};

const sql = {
  projects: [],
};

const mongoDb = {
  projects: [],
};

export { categoryProjects, mongoDb, nodeJs, sql, vanillaJs };
