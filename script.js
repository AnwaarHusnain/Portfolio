//=====================================Preloading=====================================//

const preLoader = document.querySelector(".preloader");
window.addEventListener("load", () => {
  preLoader.classList.add("remove");
});

//===================================== Toggle Menu=====================================//

let toggle_btn = document.querySelector(".toggle-btn");
let toggle_btn_icon = document.querySelector(".toggle-btn i");
let ul = document.querySelector("ul");

//Toggle the Menu-bar
toggle_btn.addEventListener("click", () => {
  ul.classList.toggle("active");

  const isactive = ul.classList.contains("active");
  toggle_btn_icon.classList = isactive ? "bx bx-x" : "bx bx-menu";

  if (isactive) {
    document.body ||
      document.documentElement.addEventListener("click", () => {
        ul.classList.remove("active");
        console.log("sadasd");
      });
  }
});

//=====================================Scroll top btn=====================================//

window.addEventListener("scroll", function () {
  let scroll_top = document.querySelector(".scroll-top");

  if (window.pageYOffset >= 200) {
    scroll_top.classList.add("active");
  } else {
    scroll_top.classList.remove("active");
  }
});

//=====================================Remove Menu When Click On Links=====================================//

let nav_links = document.querySelectorAll(".menu-link");

nav_links.forEach((link) => {
  link.addEventListener("click", () => {
    ul.classList.remove("active");
    const isactive = ul.classList.contains("active");
    toggle_btn_icon.classList = isactive ? "bx bx-x" : "bx bx-menu";
  });
});


//=====================================Gallery=====================================//

/*=====--- Filterable Gallery with Lightbox ---=====*/

const body = document.body;
const galleryTabs = document.querySelectorAll(".gallery_tabs li");
const galleryItems = document.querySelectorAll(".gallery_item");
const galleryImgs = document.querySelectorAll(".gallery_item img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox_img");
const lightboxCloseBtn = document.querySelector(".lightbox_close");

/*===== 01) Gallery Filtering functionality =====*/

galleryTabs.forEach((currTab) => {
  currTab.addEventListener("click", (e) => {
    // removing the existing 'active' class from the tabs.
    e.target.parentElement.querySelector(".active").classList.remove("active");

    // adding the 'active' class to the currently clicked tab.
    e.target.classList.add("active");

    let filterValue = e.target.getAttribute("data-filter");

    galleryItems.forEach((currItem) => {
      if (filterValue === "all" || currItem.classList.contains(filterValue)) {
        currItem.classList.remove("hide");
        currItem.classList.add("show");
      } else {
        currItem.classList.remove("show");
        currItem.classList.add("hide");
      }
    });
  });
});

/*===== 02) Lightbox functionality =====*/

galleryImgs.forEach((currImg) => {
  currImg.addEventListener("click", (e) => {
    let imgSrc = e.target.getAttribute("src");

    lightboxImg.setAttribute("src", imgSrc);

    lightbox.classList.add("open");
    body.classList.add("overflow_hide");
  });
});

// Function for closing the Lightbox
const lightboxClose = () => {
  lightbox.classList.remove("open");
  body.classList.remove("overflow_hide");
};

// closing the lightbox on clicking the lightboxClose btn.
lightboxCloseBtn.addEventListener("click", lightboxClose);

// closing the lightbox on clicking outside of it.
window.addEventListener("click", (e) => {
  if (e.target.className === "lightbox_wrapper") {
    lightboxClose();
  }
});

// closing the lightbox on pressing the Escape key.
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    lightboxClose();
  }
});

//=====================================Swiper JS=====================================//

var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1500: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    786: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
  },
});
