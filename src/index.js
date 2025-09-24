import "./styles.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

const nav = document.querySelector("nav");
const content = document.querySelector("#content");
const pages = { home: homePage, menu: menuPage, about: aboutPage };

nav.addEventListener("click", (e) => {
    const page = e.target.dataset.page;
    if (page && pages[page]) loadPage(pages[page]);
});

function loadPage(page) {
    content.innerHTML = "";
    content.appendChild(page());
}

loadPage(homePage);
