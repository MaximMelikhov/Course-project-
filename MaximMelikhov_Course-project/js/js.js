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

let btn = document.querySelector(".events_btn");
const slider = document.querySelector('.newSwiper');
let allitems = document.querySelectorAll(".events_item");
btn.addEventListener("click", function() {
  allitems.forEach(item => {
    item.style.display = "block";
  })
  
  this.style.display = "none";
  
})


let mySwiper;

function mobileSlider() {
	if (window.innerWidth <= 320 && slider.dataset.mobile == 'false') {
		mySwiper = new Swiper(slider, {
			slidesPerView: 1,
			spaceBetween: 10,
			loop: true,
			slideClass: 'events_item',
			pagination: {
				el: '.newSwiper-pagination',
				clickable: true,
			},
		});

		slider.dataset.mobile = 'true';
	}

	if (window.innerWidth > 320 && slider.dataset.mobile == 'true') {
		slider.dataset.mobile = 'false';
		if (slider.classList.contains('swiper-container-initialized')) {
			mySwiper.destroy();
		}
	}
}

mobileSlider()

window.addEventListener('resize', () => {
	mobileSlider();
});


// editions

const slidereditions = document.querySelector('.newSwiperf');
let allitemseditions = document.querySelectorAll(".editions_swiper-item");



let mySwipereditors;

function initSlide() {
		mySwipereditions = new Swiper(slidereditions, {
			slidesPerView: 3,
			spaceBetween: 50,
      slidesPerGroup: 2,
			loop: true,
			slideClass: 'editions_swiper-item',
      pagination: {
        el: ".swiper-pagination--right",
        type: "fraction"
      },
      navigation: {
        nextEl: ".swiper-btn--next",
        prevEl: ".swiper-btn--prev"
      },
      breakpoints: {
        1400: {
          slidesPerView: 2,
          grid: {
            rows: 1
          },
          spaceBetween: 50
        },
        1024: {
          slidesPerView: 2,
          grid: {
            rows: 1
          },
          spaceBetween: 50
        },
        768: {
          slidesPerView: 2,
          grid: {
            rows: 1
          },
          spaceBetween: 50
        }
      },
		});
}


initSlide() 
mySwipereditions.on('resize', function (e) {
  console.log();
  if (window.matchMedia("(max-width: 767px)").matches) {
    this.destroy();
    mySwiper = underfined;
  } 
  
});



// let button = ".h2-click";
// let labels = ".checkbox--label";
// let labelsList = ".checkbox-list";
// let labelsListActive = "checklist-active";
// let labelActive = "checkbox--label-active";
// let animationClass = "animation-test";
// let inputCheckbox = ".checkbox";

// function checkboxToggle(a, b, c, labelsListActive, labelActive, animationClass, inputCheckbox) {
//   let btn = document.querySelector(a);
//   let labels = document.querySelectorAll(b);
//   let listLabels = document.querySelector(c);
// btn.addEventListener("click", toggleSpoiler);
//   btn.addEventListener("keyup", function(e) {
//     console.log(e.key);
//     if (e.code === "Enter") {
//       toggleSpoiler();
//     }
//   })    
// function toggleSpoiler() {
//     if (!listLabels.classList.contains(labelsListActive)) {
//     listLabels.classList.add(labelsListActive);
//     labels.forEach(item => {
//      // item.classList.add("checkbox--label-active");
//       animationItem(item, labelActive, animationClass, "add");
//     })
//   } else {
//     listLabels.classList.remove(labelsListActive);
//     labels.forEach(item => {
//     	if (item.querySelector(inputCheckbox).checked) {
//     	animationItem(item, labelActive, animationClass, "add");
//       } else {
//         animationItem(item, labelActive, animationClass, "remove");
//       }
//       });
//   }
//   labels.forEach(item => {
//     item.addEventListener("click", function() {
//       if (!listLabels.classList.contains(labelsListActive)) {
//         animationItem(this, labelActive, animationClass, "remove");
//       }
//     });
//   })
// }
// function animationItem(item, class1, class2, f) {
//  if (f === "add") {
//     item.classList.add(class1);
//   setTimeout(function() {
//     item.classList.add(class2)
//   }, 100);

//  } else {
//      item.classList.remove(class2);
//   setTimeout(function() {
//     item.classList.remove(class1)
//   }, 300);
//   }
 
// }


// }



// checkboxToggle(button, labels, labelsList, labelsListActive, labelActive, animationClass, inputCheckbox);