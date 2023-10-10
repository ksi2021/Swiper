// через  innerWidth
// const setSlider = () => {
//     if (window.innerWidth < 768) {
//         const swiper = new Swiper('.swiper', {
//             pagination: {
//                 el: '.swiper-pagination',
//             },
//         })
//         console.log('mobile')
//     } else {
//         let toggleButton = document.querySelector(".brands__listToggle");
//         let brandList = document.querySelector('.brand__list');
//         let opened = false;
//
//         toggleButton.onclick = function () {
//             opened = !opened;
//             brandList.classList.toggle("brand__list--opened");
//
//             let buttonIcon = toggleButton.querySelector(".toggle__icon");
//             let buttonText = toggleButton.querySelector(".toggle__text");
//
//             buttonIcon.classList.toggle("toggle__icon--reverse");
//             setTimeout(() => buttonText.textContent = opened ? "Скрыть всe" : "Показать всe", 400)
//         }
//         console.log('laptop+')
//     }
// }
// setSlider()


const swiper = new Swiper('.swiper', {
    pagination: {
        el: '.swiper-pagination',
    },
})

let toggleButton = document.querySelector(".brands__listToggle");
let brandList = document.querySelector('.brand__list');
let opened = false;

toggleButton.onclick = function () {

    opened = !opened;
    brandList.classList.toggle("brand__list--opened");

    let buttonIcon = toggleButton.querySelector(".toggle__icon");
    let buttonText = toggleButton.querySelector(".toggle__text");

    buttonIcon.classList.toggle("toggle__icon--reverse");
    setTimeout(() => buttonText.textContent = opened ? "Скрыть всe" : "Показать всe", 400)
}

