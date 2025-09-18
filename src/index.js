import "./styles.css";
import { loadHomePage } from "./home.js";
import { loadMenuPage } from "./menu.js";
import { loadAboutPage } from "./about.js";

const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");
const content = document.querySelector("#content");

homeBtn.addEventListener("click", () => {
    clearContent();
    loadHomePage(content);
});

menuBtn.addEventListener("click", () => {
    clearContent();
    loadMenuPage(content);
});

aboutBtn.addEventListener("click", () => {
    clearContent();
    loadAboutPage(content);
});

function clearContent() {
    Array.from(content.children).forEach((element) => {
        element.remove();
    });
}

loadHomePage(content);
