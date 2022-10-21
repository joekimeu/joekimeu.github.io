const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');


navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open'); 
    })
})

const openButton = document.getElementById('open-button');

const dog = document.getElementById('dog');

openButton.addEventListener('click', () => {
    dog.classList.add('show');
    const close = document.querySelector(".close");
    close.addEventListener("click", () => {
      modal.classList.remove("appear");
    });
}
)


//modal
const images = document.querySelectorAll(".portfolio__img");
const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalTxt = document.querySelector(".modalTxt");
const close = document.querySelector(".close");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modalImg.src = image.src;
    modalTxt.innerHTML = image.alt;
    modal.classList.add("appear");

    close.addEventListener("click", () => {
      modal.classList.remove("appear");
    });
  });
})
 