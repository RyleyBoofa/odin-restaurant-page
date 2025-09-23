import "./styles.css";
import { homePage } from "./home.js";
import { menuPage } from "./menu.js";
import { aboutPage } from "./about.js";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const content = document.querySelector("#content");

homeBtn.addEventListener("click", () => loadPage(homePage));
menuBtn.addEventListener("click", () => loadPage(menuPage));
aboutBtn.addEventListener("click", () => loadPage(aboutPage));

function loadPage(page) {
    Array.from(content.children).forEach((element) => element.remove());
    content.appendChild(page());
}

loadPage(homePage);
