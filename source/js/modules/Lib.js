export function Lib() {

  const burger = document.querySelector('.main-header__burger');
  const sectionBurger = document.querySelector('.main-header__nav');

  if (burger != null) {
    burger.addEventListener('click', () => {
      console.log('work')

      sectionBurger.classList.toggle('main-header__nav--active');
      burger.classList.toggle('main-header__burger--active');
      document.querySelector('body').classList.toggle('overflowHid')
    })
  }


  const sliderFirstMain = document.querySelectorAll('.mainSlider');


  for (let i = 1; i < sliderFirstMain.length; i++) {
    sliderFirstMain[i].style.display = 'none';
  }

  const sliderFirstPrev = document.querySelectorAll('.paginationFirstSlider-pagination');


  sliderFirstPrev.forEach((item) => {


    item.addEventListener('click', (e) => {


      e.preventDefault();

      for (let val of sliderFirstMain) {


        if (item.dataset.imgprev === val.dataset.img) {
          val.style.display = 'block';
          val.classList.add('fancy');
        } else {
          val.classList.remove('fancy');
          val.style.display = 'none';
        }

      }

    })

  })


  let scrollAge = document.querySelectorAll('.scrollBar .item');


  if (scrollAge.length > 0) {

    scrollAge[0].classList.add('active-age');

    scrollAge.forEach((item) => {

      item.addEventListener('click', (e) => {


        for (let val of scrollAge) {
          val.classList.remove('active-age')
        }

        item.classList.add('active-age');

      })
    })
  }


  const swiperProv = document.querySelector('.mySwiper');
const swiper4 = document.querySelector('.mySwiper3');
  if (swiperProv != null) {

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: "auto",
      freeMode: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 2006) + "</span>";
        },
      },
    });


    var swiper = new Swiper(".mySwiper1", {
      slidesPerView: "auto",
    });

    var swiper = new Swiper(".mySwiper12", {
      slidesPerView: 3,
      spaceBetween: 30,
    });

  }

if(swiper4 != null){
  var swiper = new Swiper(".mySwiper3", {
    slidesPerView: "auto",
  });
}


  let aboutus = document.querySelector('.aboutUs-text-wrapper__content');

  if (aboutus != null) {
    let aboutUsText = document.querySelectorAll('.aboutUs-text-wrapper__content p');

    for (let i = 0; i < aboutUsText.length; i++) {

      if (i == 0) {
        aboutUsText[i].setAttribute('data-aos', 'fade-up');
        aboutUsText[i].setAttribute('data-aos-duration', 1500);
        aboutUsText[i].setAttribute('data-aos-once', 'true');
      } else if (i == 1) {
        aboutUsText[i].setAttribute('data-aos', 'fade-up');
        aboutUsText[i].setAttribute('data-aos-duration', 1500);
        aboutUsText[i].setAttribute('data-aos-once', 'true');
      } else {
        aboutUsText[i].setAttribute('data-aos', 'fade-up');
        aboutUsText[i].setAttribute('data-aos-duration', 2000);
        aboutUsText[i].setAttribute('data-aos-once', 'true');
      }
    }


  }

  let history = document.querySelector('.ourHistory-text-wrapper');

  if (history != null) {
    let historyText = document.querySelectorAll('.ourHistory-text-wrapper p');

    for (let val of historyText) {
      val.setAttribute('data-aos', 'fade-up');
      val.setAttribute('data-aos-duration', 1500);
      val.setAttribute('data-aos-once', 'true');
    }
  }


  let whyAreMe = document.querySelector('.whyAreMe-text-wrapper');

  if (whyAreMe != null) {
    let whyAreMeText = document.querySelectorAll('.whyAreMe-text-wrapper p');
    let whyAreMeTextUl = document.querySelector('.whyAreMe-text-wrapper ul');


    whyAreMeTextUl.setAttribute('data-aos', 'fade-up');
    whyAreMeTextUl.setAttribute('data-aos-duration', 1500);
    whyAreMeTextUl.setAttribute('data-aos-once', 'true');

    for (let val of whyAreMeText) {
      val.setAttribute('data-aos', 'fade-up');
      val.setAttribute('data-aos-duration', 1500);
      val.setAttribute('data-aos-once', 'true');
    }
  }

  let projectInWork = document.querySelector('.projectInWork')
  if (projectInWork != null) {
    let projectInWorkLi = document.querySelectorAll('.projectInWork-wrapper ul li')


    for (let i = 0; i < projectInWorkLi.length; i++) {

      if (i == 0) {
        projectInWorkLi[i].setAttribute('data-aos', 'fade-up');
        projectInWorkLi[i].setAttribute('data-aos-duration', 1500);
        projectInWorkLi[i].setAttribute('data-aos-once', 'true');
      } else if (i == 1) {
        projectInWorkLi[i].setAttribute('data-aos', 'fade-up');
        projectInWorkLi[i].setAttribute('data-aos-duration', 2000);
        projectInWorkLi[i].setAttribute('data-aos-once', 'true');
      } else if (i == 2) {
        projectInWorkLi[i].setAttribute('data-aos', 'fade-up');
        projectInWorkLi[i].setAttribute('data-aos-duration', 2000);
        projectInWorkLi[i].setAttribute('data-aos-once', 'true');
      } else {
        projectInWorkLi[i].setAttribute('data-aos', 'fade-up');
        projectInWorkLi[i].setAttribute('data-aos-duration', 2500);
        projectInWorkLi[i].setAttribute('data-aos-once', 'true');
      }
    }

  }

  let scroll = document.querySelector('.scrollBar');

  if (scroll != null) {
    document.querySelector('footer').classList.add('marFooter')
  }


  let headerAge = document.querySelectorAll('.project-year');

  let scrollBar = document.querySelectorAll('.scrollBar .item');


  const position = (headerAge) => {
    let positionAge = [];
    for (let val of headerAge) {

      let targetPosition = {
        top: (window.pageYOffset + val.getBoundingClientRect().top) - 50,
        left: (window.pageXOffset + val.getBoundingClientRect().left) - 50,
        right: (window.pageXOffset + val.getBoundingClientRect().right) - 50,
        bottom: (window.pageYOffset + val.getBoundingClientRect().bottom) - 50
      }
      positionAge.push(targetPosition)
    }
    return positionAge;
  }

  const Visible = (scrollBar) => {
    let positionCurrentAge = position(headerAge);
    let windowPosition = {
      top: window.pageYOffset,
      left: window.pageXOffset,
      right: window.pageXOffset + document.documentElement.clientWidth,
      bottom: window.pageYOffset + document.documentElement.clientHeight
    };

    for (let i = 0; i < positionCurrentAge.length; i++) {

      if (positionCurrentAge[i].bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
        positionCurrentAge[i].top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
        positionCurrentAge[i].right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
        positionCurrentAge[i].left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
        // Если элемент полностью видно, то запускаем следующий код


        for (let val of scrollBar) {
          val.classList.remove('active-age')
        }

        scrollBar[i].classList.add('active-age')
        break;
      }
    }
  }


  if (headerAge.length > 0) {

    window.addEventListener('scroll', function () {
      Visible(scrollBar);
    });
  }


  let linkToProject = document.querySelectorAll('.linkToProject');
  let opacityImg = document.querySelectorAll('.hover_img_slider')


  if (linkToProject.length > 0) {

    linkToProject.forEach((item, index) => {

      item.addEventListener('mouseenter', (e) => {

        opacityImg[index].classList.add('hover_img_slider-active');
      });

    });

    linkToProject.forEach((item, index) => {
      item.addEventListener('mouseout', (e) => {
        opacityImg[index].classList.remove('hover_img_slider-active');
      })
    });


  }


  let backFooter = document.querySelector('.SERVICES');

  if (backFooter != null) {
    document.querySelector('.main-footer').classList.remove('main-footer')
  }


  let swiper3 = document.querySelector('.mySwiper2');

  if (swiper3 != null) {

    var swiper = new Swiper(".mySwiper2", {
      slidesPerView: "auto",
      spaceBetween: 30,
      breakpoints: {
        768: {
          slidesPerView: 7,
          spaceBetween: 30
        },
        425: {
          slidesPerView: 5,
          spaceBetween: 30
        },
        375: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        320: {
          slidesPerView: 3,
          spaceBetween: 50
        }

      }

    });

  }
  }





