$(document).ready(function () {

  $('.menuOpen a[href^="#"]').on('click', function (event) {
    event.preventDefault();

    const target = $(this).attr('href');

    $('html, body').animate({
      scrollTop: $(target).offset().top - 100
    }, 1000);
  });

  $('input[type="checkbox"]').on('change', function () {
    $('body').toggleClass('light-mode');
  });

  const initOpenMenu = () => {
    const menuBtn = $('header .menu i');
    const closeBtn = $('header .menu i:nth-child(2)');
    const menu = $('.menuOpen');
    const header = $('header');

    const close = () => {
      menu.addClass('hidden');
      menuBtn.removeClass('hidden');
      closeBtn.addClass('hidden');
      $('body').css('overflow', 'visible');
      header.removeClass('open');
    };

    const open = () => {
      menu.removeClass('hidden');
      menuBtn.addClass('hidden');
      closeBtn.removeClass('hidden');
      $('body').css('overflow', 'hidden');
      header.addClass('open');
    };

    menuBtn.on('click', open);
    closeBtn.on('click', close);
    $('nav a').on('click', close);

    $(document).on('keydown', function (e) {
      if (e.key === "Escape" && !menu.hasClass('hidden')) {
        toggleMenu();
      }
    });
  };

  const initAnimationScroll = () => {
    const windowHalfSize = $(window).height() * 0.5;

    const animateScroll = () => {
      $('.js-section').each(function () {
        const isSectionVisible = $(this).offset().top - $(window).scrollTop() < windowHalfSize;

        if (isSectionVisible) {
          $(this).addClass('active');
        } else {
          $(this).removeClass('active');
        }
      });
    };

    animateScroll();
    $(window).on('scroll', animateScroll);
  };

  const initTypingAnimation = () => {
    const typingAnimations = [
      {
        element: $('#sobre .banner h1'),
        text: 'Olá, eu sou o ',
        delay: 120
      },
      {
        element: $('#sobre .banner span'),
        text: 'Alan Capellão',
        delay: 150
      },
      {
        element: $('#sobre .banner p'),
        text: 'Desenvolvedor Back-end',
        delay: 75
      }
    ];

    const renderNextAnimation = (index) => {
      if (index >= typingAnimations.length) {
        return; 
      }

      const { element, text, delay } = typingAnimations[index];
      const textToArray = text.split('');
      let currentIndex = 0;

      element.html(''); 

      const renderCharacter = () => {
        if (currentIndex < textToArray.length) {
          element.append(textToArray[currentIndex]);
          currentIndex++;
          setTimeout(renderCharacter, delay);
        } else {
          renderNextAnimation(index + 1);
        }
      };

      renderCharacter();
    };

    renderNextAnimation(0);
  };

  initOpenMenu();
  initAnimationScroll();
  initTypingAnimation();
});
