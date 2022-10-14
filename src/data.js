const data = {
  en: {
    navbar: ["Home", "About me", "Projects", "Skills", "Contact"],
    init: [
      "Hello World! My name is",
      "Hernan Lorenzo.",
      [
        "Full Stack .",
        "MERN .",
        "PERN .",
        "Node.js .",
        "React.js .",
        "Next.js .",
      ],
      "I'm a web developer, I enjoy creating applications and working in a team. I found in programming what motivates me to keep myself in constant learning.",
      "Check my projects",
    ],
    aboutMe: [
      "About me",
      "Since I was a child I have always had a passion for technology, and this led me to challenge myself and do a Coding Bootcamp, where I found in programming what motivates me to keep myself inconstant learning.",
      "I did a programming bootcamp at Plataforma 5, composed by more than 800hs during 4 months, working in pair programming and in teams, applying agile methodologies like SCRUM, which helped me to strengthen both my hard and soft skills.",
      "I am a proactive, dedicated and responsible person. In my years of work experience what I value the most are the aptitudes and skills developed in pursuit of excellent teamwork and a fully satisfied customer.",
      "Download Resume",
    ],
    projects: {
      title: "Projects",
      projects: [
        {
          name: "Portfolio",

          linkGit: "https://github.com/HLorenzoo/portfolio",
          linkWeb: "#home",
          description: "My portfolio.",
          skills: ["Next.js", "ChakraUI"],
        },
        {
          name: "WOW Magazine",
          path: "/assets/images/revistaWOW.png",
          linkGit: "#home",
          linkWeb: "https://p5-wow-git-develop-joaquinreiners.vercel.app/",
          description:
            "Group project for Hogarth WorldWide developing a web page for a female oriented magazine. The site has completly dynamic desing and allsections can be laid ouy according to editorial needs.Development and Ux/UI design of an interactive widget,connecting the user's chosen emotion with recommended articles",
          skills: ["Strapi", "MongoDB", "Next.js", "ChakraUI"],
        },

        {
          name: "SmartStore",
          path: "/assets/images/e-commerce.png",
          linkGit: "https://github.com/HLorenzoo/SmartStore-",
          linkWeb: "#home",
          description: "Two-week project in a five-member SCRUM team.",
          skills: ["Node.js", "MongoDB", "React.js", "MUI"],
        },
        {
          name: "TMDB",
          path: "/assets/images/TMDB.png",
          linkGit: "https://github.com/HLorenzoo/TMDB",
          description: "Individual project for one week.",
          skills: ["Node.js", "MongoDB", "React.js", "SASS"],
        },
      ],
    },
  },
  es: {
    navbar: ["Inicio", "Sobre mí", "Proyectos", "Tecnologías", "Contacto"],
    init: [
      "Hola, mi nombre es",
      "Hernan Lorenzo.",
      [
        "Full Stack .",
        "MERN .",
        "PERN .",
        "Node.js .",
        "React.js .",
        "Next.js .",
      ],
      "Soy un desarrollador web, disfruto de crear aplicaciones y de trabajar en equipo. Encontré en la programación aquello que me motiva a mantenerme en constante aprendizaje .",
      "Mirá mis proyectos",
    ],
    aboutMe: [
      "Sobre mí",
      "Desde que era niño siempre tuve pasión por la tecnología, esta misma me llevo a desafiarme y realizar un Coding Bootcamp,donde encontré en la programación aquello que me motiva a mantenerme en constante aprendizaje.",
      "Hice un bootcamp de programación en Plataforma 5, compuesto por mas de 800hs durante 4 meses, trabajando en pair programming y en equipos, aplicando metodologías ágiles como SCRUM, lo cual me ayudó a fortalecer tanto mis habilidades duras como blandas.",
      "Soy una persona pro activa, dedicada y responsable. En mis años de experiencia laborales lo que mas valoro son las aptitudes y actitudes desarrolladas en pos de un excelente trabajo en equipo y de un cliente totalmente conforme.",
      "Descargar CV",
    ],
    projects: {
      title: "Proyectos",
      projects: [
        {
          name: "Portfolio",

          linkGit: "https://github.com/HLorenzoo/portfolio",
          linkWeb: "#home",
          description:
            "Mi Primer portfolio personal, creado con React utilizando un frameworks como ChakraUI y FramerMotion.",
          skills: ["Next.js", "ChakraUI"],
        },
        {
          name: "Revista WOW",
          path: "/assets/images/revistaWOW.png",
          linkGit: "#home",
          linkWeb: "https://p5-wow-git-develop-joaquinreiners.vercel.app/",
          description:
            "Proyecto profesional para Hogarth WorldWide.Desarrollo de una Aplicación Web de tipo prensa, portal de noticias, en un equipo SCRUM de 5 integrantes, donde todo el contenido es editable y dinámico a través de un CMS sobre Strapi y MongoDB.",
          skills: ["Strapi", "MongoDB", "Next.js", "ChakraUI"],
        },
        {
          name: "SmartStore",
          path: "/assets/images/e-commerce.png",
          linkGit: "https://github.com/HLorenzoo/SmartStore-",
          linkWeb: "#home",
          description:
            "Proyecto de dos semanas en un equipo SCRUM de cinco integrantes.",
          skills: ["Node.js", "MongoDB", "React.js", "MUI"],
        },
        {
          name: "TMDB",
          path: "/assets/images/TMDB.png",
          linkGit: "https://github.com/HLorenzoo/TMDB",
          description: "Proyecto individual durante una semana.",
          skills: ["Node.js", "MongoDB", "React.js", "SASS"],
        },
      ],
    },
  },
};

export default data;
