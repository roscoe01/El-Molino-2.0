const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

const links = document.querySelectorAll("#link");

abrir.addEventListener("click", () => {
    nav.classList.add("nav-visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("nav-visible");
});

links.forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("nav-visible");
    });
});
