$(document).ready(function () {
  // const closeModalAction = $('.modal .ri-close-line');
  // const modal = $('.modal');
  // const modalTitle = modal.find('.title h2');
  // const modalDescription = modal.find('.info p');
  // const modalDate = modal.find('span');
  // const modalLinkProject = modal.find('.links a.link-project')
  // const modalLinkRepository = modal.find('.links a.link-repository')
  // const modalLinkLinkedin = modal.find('.links a.link-linkedin')
  // const iframe = modal.find('.video iframe')
  const highlightsProjectsContainer = $('.highlights .cards-projects');
  const allProjectsContainer = $('.allprojects .cards-projects');
  const HIGHTLIGHT_TYPE = 2;
  const ALL_TYPE = 1;

  const getProjectsByTypeOrAll = (typeId) => {
    return typeId ? dataProjects.filter(({ type }) => type === typeId) : dataProjects;
  };

  const allProjects = getProjectsByTypeOrAll(ALL_TYPE);
  const hightLightProjects = getProjectsByTypeOrAll(HIGHTLIGHT_TYPE);

  const renderProjects = (container, data) => {
    container.html(data.map(({ id, title, imgSrc, languages, site, repository }) => {
      const siteLink = site ? `<a href=${site} target="_blank" class="proj">Acessar projeto</a>` : '';
      return `
            <div class="box" id="${id}">
              <div class="cover">
                <img src=${imgSrc}>
                <div class="details">
                  <p>${title}</p>
                  <div class="mini-languages">
                    ${languages.map((language) => `<img src="assets/projects-technologies/${language}.svg" alt="${language}">`)}
                  </div>
                </div>
              </div>
              <div class="description">
                ${siteLink}
                <a href=${repository} target="_blank" class="rep">Acessar repositório</a>
              </div>
            </div>
          `;
    }).join(''));
  };

  const renderSkillsSection = () => {
    $('.cards').html(skills.map(({ name, src }, index) => `
        <div class="box" key="${index}">
          <p>${name}</p>
          <img src="assets/technologies/${src}.svg" alt="html">
        </div>
      `).join(''));
  };

  const insertProjectAction = () => {
    $('.box').on('click', function () {
      const id = Number($(this).attr('id'));
      const allProjects = getProjectsByTypeOrAll();
      const foundProject = allProjects.find((project) => project.id === id);
      addData(foundProject);
    });
  };

  const closeModal = () => {
    $('.modal').addClass('hidden');
    $('body').css('overflow', 'visible').removeClass('transparent');
    $('.video iframe').attr('src', '');
  };

  const detectCloseModal = () => {
    $('.modal .ri-close-line').on('click', closeModal);

    $(document).on('keydown', (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    });
  };

  renderSkillsSection();
  renderProjects(highlightsProjectsContainer, hightLightProjects);
  renderProjects(allProjectsContainer, allProjects);
  detectCloseModal();
  insertProjectAction();
});
