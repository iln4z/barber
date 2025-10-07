const burger = document.getElementById("burger");
const mobileNav = document.getElementById("mobile-nav");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileNav.classList.toggle("active");
});

// Якорь
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    window.scrollTo({
      top: targetElement.offsetTop - 80,
      behavior: "smooth",
    });

    if (window.innerWidth <= 768) {
      mobileNav.classList.remove("active");
      burger.classList.remove("active");
    }
  });
});

// Прайс
const tabs = document.querySelectorAll(".price-tab");
const contents = document.querySelectorAll(".price-content");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    contents.forEach((c) => c.classList.remove("active"));
    tab.classList.add("active");
    const tabName = tab.dataset.tab;
    document.getElementById(`${tabName}-content`).classList.add("active");
  });
});

// Слайдер
const slider = document.getElementById("works-slider");
const prevBtn = document.getElementById("prev-slide");
const nextBtn = document.getElementById("next-slide");


const slides = document.querySelectorAll(".work-slide");
const totalSlides = slides.length;

let slideIndex = 0;

function updateSlider() {
  slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

prevBtn.addEventListener("click", () => {
  slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
  updateSlider();
});

nextBtn.addEventListener("click", () => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlider();
});

setInterval(() => {
  slideIndex = (slideIndex + 1) % totalSlides;
  updateSlider();
}, 5000);

// модальное окно
const modal = document.getElementById("booking-modal");
const closeModal = document.querySelector(".close-modal");
const successNotification = document.getElementById("success-notification");


const bookButtons = [
  document.getElementById("book-btn-desktop"),
  document.getElementById("book-btn-hero"),
  document.getElementById("book-btn-mobile"),
  document.getElementById("book-btn-footer"),
];


function openModal() {
  modal.style.display = "flex";
}


function closeModalFn() {
  modal.style.display = "none";
}


function showSuccess() {
  modal.style.display = "none";
  successNotification.style.display = "block";
  setTimeout(() => {
    successNotification.style.display = "none";
  }, 3000);
}

bookButtons.forEach((btn) => {
  if (btn) {
    btn.addEventListener("click", openModal);
  }
});


closeModal.addEventListener("click", closeModalFn);

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModalFn();
  }
});

document.getElementById("booking-form").addEventListener("submit", (e) => {
  e.preventDefault();
  showSuccess();
  document.getElementById("booking-form").reset();
});

// анимация
const animatedElements = document.querySelectorAll(".animate");

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= window.innerHeight * 0.8 &&
    rect.bottom >= window.innerHeight * 0.4
  );
}

function checkAnimation() {
  animatedElements.forEach((el) => {
    if (isElementInViewport(el)) {
      el.classList.add("visible");
    }
  });
}


window.addEventListener("load", () => {
  setTimeout(checkAnimation, 100); 
});

window.addEventListener("scroll", checkAnimation);
window.addEventListener("resize", checkAnimation);

document.addEventListener("DOMContentLoaded", () => {
  checkAnimation();
});
