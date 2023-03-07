const closeModalAction = document.querySelector('.modal .ri-close-line')
const modal = document.querySelector('.modal')
const modalTitle = modal.querySelector('.title h2')
const modalDescription = modal.querySelector('.info p')
const modalDate = modal.querySelector('span')
const modalLinkProject = modal.querySelector('.links a.link-project')
const modalLinkRepository = modal.querySelector('.links a.link-repository')
const modalLinkLinkedin = modal.querySelector('.links a.link-linkedin')
const iframe = modal.querySelector('.video iframe')
const highlightsProjectsContainer = document.querySelector('.highlights .cards-projects');
const allProjectsContainer = document.querySelector('.allprojects .cards-projects');
const HIGHTLIGHT_TYPE = 2;
const ALL_TYPE = 1;

const getProjectsByTypeOrAll = (typeId) => {
  const dataProjects = [
    {
      id: 1,
      type: 2,
      title: 'StopWatch',
      languages: ['css', 'html', 'javascript'],
      imgSrc: 'assets/projects/stopwatch.jpg',
      repository: 'https://github.com/alancptk7/StopWatch',
      site: 'https://alancptk7.github.io/StopWatch/'
    },
    {
      id: 2,
      type: 1,
      title: 'Calculadora Web',
      languages: ['css', 'html', 'javascript'],
      imgSrc: 'assets/projects/calcweb.png',
      repository: 'https://github.com/alancptk7/Calculator-Web',
      site: 'https://alancptk7.github.io/Calculator-Web/'
    },
    {
      id: 3,
      type: 1,
      title: 'Conversor Romano',
      languages: ['css', 'html', 'javascript'],
      imgSrc: 'assets/projects/converter.png',
      repository: 'https://github.com/alancptk7/ConverterRoman',
      site: 'https://alancptk7.github.io/ConverterRoman/'
    },
    {
      id: 4,
      type: 1,
      title: 'Relógio Digital',
      languages: ['css', 'html', 'javascript'],
      imgSrc: 'assets/projects/clock.png',
      repository: 'https://github.com/alancptk7/Clock',
      site: 'https://alancptk7.github.io/Clock/'
    },
    {
      id: 5,
      type: 1,
      title: 'Login',
      languages: ['css', 'html', 'javascript'],
      imgSrc: 'assets/projects/login.png',
      repository: 'https://github.com/alancptk7/Login',
      site: 'https://alancptk7.github.io/Login/'
    },
    {
      id: 6,
      type: 1,
      title: 'Lista de Tarefas',
      languages: ['css', 'html', 'javascript'],
      imgSrc: 'assets/projects/task.png',
      repository: 'https://github.com/alancptk7/Task-List',
      site: 'https://alancptk7.github.io/Task-List/'
    },
    {
      id: 7,
      type: 1,
      title: 'Calculadora Windows',
      languages: ['java'],
      imgSrc: 'assets/projects/calc.png',
      repository: 'https://github.com/alancptk7/Calculator'
    },
    {
      id: 8,
      type: 1,
      title: 'Facebook',
      languages: ['java', 'mysql'],
      imgSrc: 'assets/projects/facebook.png',
      repository: 'https://github.com/alancptk7/Facebook'
    },
    {
      id: 9,
      type: 2,
      title: 'CRUD',
      languages: ['java', 'mysql'],
      imgSrc: 'assets/projects/crud.png',
      repository: 'https://github.com/alancptk7/CRUD'
    },
    {
      id: 10,
      type: 1,
      title: 'Sorteio de Números',
      languages: ['java'],
      imgSrc: 'assets/projects/sorteio.png',
      repository: 'https://github.com/alancptk7/Numbers-Draw'
    }
  ];

  return typeId ? dataProjects.filter(({ type }) => type === typeId) : dataProjects;
}

const allProjects = getProjectsByTypeOrAll(ALL_TYPE);
const hightLightProjects = getProjectsByTypeOrAll(HIGHTLIGHT_TYPE);

const renderProjects = (container, data) => {
  container.innerHTML = data.map(({ id, title, imgSrc, languages, site, repository }) => {

    if (typeof site != "undefined") {

      return `
          <div class="box" id="${id}">
            <div class="cover">
              <img src=${imgSrc} alt="dowhile 2021">
              <div class="details">
                <p>${title}</p>
                <div class="mini-languages">
                  ${languages.map((language) => `<img src="assets/mini-languages/${language}.svg" alt="${language}">`)}
                </div>
              </div>
            </div>
            <div class="description">
              <a href=${site} target="_blank" class="proj">Acessar projeto</a>
              <a href=${repository} target="_blank" class="rep">Acessar repositório</a>
            </div>
          </div>
        `
    } else {

      return `
          <div class="box" id="${id}">
            <div class="cover">
              <img src=${imgSrc} alt="dowhile 2021">
              <div class="details">
                <p>${title}</p>
                <div class="mini-languages">
                  ${languages.map((language) => `<img src="assets/mini-languages/${language}.svg" alt="${language}">`)}
                </div>
              </div>
            </div>
            <div class="description">
              <a href=${repository} target="_blank" class="rep">Acessar repositório</a>
            </div>
          </div>
        `
    }


  }).join('');
}

const renderSkillsSection = () => {
  const cardsContainer = document.querySelector('.cards');

  const skills = [
    {
      name: 'HTML5',
      src: 'html'
    },
    {
      name: 'CSS3',
      src: 'css'
    },
    {
      name: 'JavaScript',
      src: 'javascript'
    },
    {
      name: 'Java',
      src: 'java'
    },
    {
      name: 'PHP',
      src: 'php'
    },
    {
      name: 'MySQL',
      src: 'mysql'
    },
    {
      name: 'Spring Boot',
      src: 'spring'
    },
    {
      name: 'Microsoft Office',
      src: 'office'
    },
    {
      name: 'Hibernate',
      src: 'hibernate'
    },
    {
      name: 'NetBeans',
      src: 'netbeans'
    },
    {
      name: 'Git',
      src: 'git'
    },
    {
      name: 'Visual Studio Code',
      src: 'vscode'
    },
    {
      name: 'Windows',
      src: 'windows'
    },
    {
      name: 'GitHub',
      src: 'github'
    },
    {
      name: 'Figma',
      src: 'figma'
    }
  ]

  cardsContainer.innerHTML = skills.map(({ name, src }, index) => `
    <div class="box" key="${index}">
      <p>${name}</p>
      <img src="assets/languages/${src}.svg" alt="html">
    </div>
  `).join('')
}

const insertProjectAction = () => {
  projectsBox.forEach((project) => {
    const id = Number(project.getAttribute('id'));

    project.addEventListener('click', () => {
      const allProjects = getProjectsByTypeOrAll();
      const foundProject = allProjects.find((project) => project.id === id);
      addData(foundProject);
    })
  });
}

const closeModal = () => {
  modal.classList.add('hidden')
  document.body.style.overflow = 'visible';
  document.body.classList.remove('transparent');
  iframe.setAttribute('src', '');
}

const detectCloseModal = () => {
  closeModalAction.addEventListener('click', closeModal)
  document.addEventListener('keydown', ({ key }) => key === "Escape" && closeModal());
}

renderSkillsSection();
renderProjects(highlightsProjectsContainer, hightLightProjects);
renderProjects(allProjectsContainer, allProjects);
const projectsBox = document.querySelectorAll('.box');
detectCloseModal();
insertProjectAction();