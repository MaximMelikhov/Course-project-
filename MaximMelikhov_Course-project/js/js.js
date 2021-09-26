// Bottom_nav

const button = document.querySelectorAll('button');
const drop = document.querySelectorAll('.nav_dropdawn-content')

button.forEach(el => {
el.addEventListener('click', (e) => {
  button.forEach(el => {el.classList.remove(('bottom_nav-btn--active'))});
  e.currentTarget.classList.add('bottom_nav-btn--active');
  drop.forEach(el => {el.classList.remove(('nav_dropdawn-content--active'))})
  e.currentTarget.closest('li').querySelector('.nav_dropdawn-content').classList.toggle('nav_dropdawn-content--active');
  });
});

document.addEventListener('click', (e) => {
console.log(e.target)
  if (!e.target.classList.contains('nav_dropdawn-content') && !e.target.classList.contains('bottom_nav-btn')) {
  button.forEach(el => {el.classList.remove(('bottom_nav-btn--active'))});
  drop.forEach(el => {el.classList.remove(('nav_dropdawn-content--active'))})
}
});



// Burger

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#header__burger-btn').addEventListener('click', function() {
      document.querySelector('#menu').classList.toggle('is-active')
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#cross__btn').addEventListener('click', function() {
      document.querySelector('#menu').classList.toggle('is-active')
  })
})


// Scroll

new SimpleBar(document.getElementById('myScrollone'), { autoHide: false });
new SimpleBar(document.getElementById('myScrolltwo'), { autoHide: false });
new SimpleBar(document.getElementById('myScrollthree'), { autoHide: false });
new SimpleBar(document.getElementById('myScrollfour'), { autoHide: false });
new SimpleBar(document.getElementById('myScrollfive'), { autoHide: false });

// Header-search

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#header_search-adaptive').addEventListener('click', function() {
      document.querySelector('#header_search-form').classList.toggle('is-active')
  })
})

window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#header_form-cross').addEventListener('click', function() {
      document.querySelector('#header_search-form').classList.toggle('is-active')
  })
})

// select

const element = document.querySelector('select');
const choices = new Choices(element, {
searchEnabled: false
});

// swiper gallery

new Swiper(".gallery_right", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 3
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination--right",
    type: "fraction"
  },
  navigation: {
    nextEl: ".swiper-btn--next",
    prevEl: ".swiper-btn--prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    576: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});