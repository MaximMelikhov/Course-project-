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

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header_search-form")) {
      document.querySelector(".header_search-adaptive-active").classList.add("is-active")
    }
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
    240: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    767: {
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

// catalog

$( function() {
  $( ".ac--list" ).accordion({
    icons: false,
    heightStyle: "content",
    collapsible: true,
    active: false
  });
    $(".heading-item--btn").click(function(e) {
      let path = e.currentTarget.dataset.path
      $(".tab-content").removeClass("tab-active");
      $(".heading-item--btn").removeClass("btn-active")
      $(`[data-target='${path}']`).addClass("tab-active");
      $(this).addClass("btn-active");
      $(`[data-target='${path}']`).find($(".ac--list")).accordion({
        active: 0
      })
    })

    document.querySelectorAll(".tab-content").forEach(item => {
      let btns = item.querySelectorAll(".ac_date_item-tab");
      let articles = item.querySelectorAll(".article-content");
      btns.forEach(el => {
        el.addEventListener("click",function(e) {
          let path = e.currentTarget.dataset.path;
          let tabCont = item.querySelector(`[data-target='${path}']`);
          console.log(tabCont)
          articles.forEach(el => {
            el.classList.remove("article-tabActive")
          })
          btns.forEach(el => {
            el.classList.remove("article-btn-active")
          })
          tabCont.classList.add("article-tabActive")
          this.classList.add("article-btn-active");
        })
      })
    })
  
});

// events

new Swiper(".events_block", {
  slidesPerView: 3,
  slidesPerGroup: 3,
  grid: {
    rows: 3
  },
  spaceBetween: 30,
  pagination: {
    el: ".events-swiper-pagination--right",
    type: "none"
  },
  navigation: {
    nextEl: ".events_swiper-btn--next",
    prevEl: ".events_swiper-btn--prev"
  },

  breakpoints: {
    240: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },
    520: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 40
    },
    767: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 28
    },
    1023: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 26
    },
    1200: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }

  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});



// editions

new Swiper(".newSwiperf", {
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
    nextEl: ".editions_swiper-btn--next",
    prevEl: ".editions_swiper-btn--prev"
  },

  breakpoints: {
    240: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 5
    },
    420: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 40
    },
    767: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 36
    },
    1023: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    },
    1200: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }

  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }
});



let btnn = document.querySelector(".subtitile-editions");
let checklist = document.querySelector(".editions_checkbox");
btnn.addEventListener("click", function() {
  checklist.classList.toggle("checklist__active");
  document.querySelectorAll(".editions_checkbox-label").forEach(el => {
    el.classList.toggle("active");
    let checkbox = el.querySelector(".editions-label");

    if (checkbox.checked) {
      el.classList.add("active");
    } 
  })
});

document.querySelectorAll(".editions_checkbox-label").forEach(el => {
  el.addEventListener("click", function() {
    let label = this;
    if (!checklist.classList.contains("checklist__active")) {
      label.classList.remove("active");
    } 
  });
})


// projects


let projectsSlider = new Swiper(".projects_swiper", {
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 30,
  loop: false,
  navigation: {
    nextEl: ".projects_swiper-button-next",
    prevEl: ".projects_swiper-button-prev"
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 0,
    },
    767: {
      slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 15,
    },
    1024: {
      slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 30,
    }

  },

  a11y: {
    prevSlideMessage: 'Предыдущий',
    nextSlideMessage: 'Следующий',
  }

});