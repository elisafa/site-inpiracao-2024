const questionsIcone = document.querySelectorAll(".quest-icone")
const questionMargin = document.querySelector(".question")
// const res = document.querySelectorAll(".res")

questionsIcone.forEach((questionIcone) => {
  questionIcone.addEventListener("click", () => {
    const resposta = questionIcone.parentElement.nextElementSibling
    resposta.classList.toggle("show")
    if (questionIcone.innerHTML === "+") {
      questionIcone.innerHTML = "-"
    } else {
      questionIcone.innerHTML = "+"
    }
  })
})

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 4,
//   centeredSlides: false,
//   spaceBetween: 20,
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// })

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // Configuração para telas menores que 480px
    480: {
      slidesPerView: 1,
      centeredSlides: true,
    },
  },
})
