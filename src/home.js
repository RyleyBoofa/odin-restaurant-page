import { createPageContainer, createElement } from "./util.js";

const pageHeading = "Open 24 Hours";

const sectionHeading = "Surving the Apocalype, One Meal at a Time";
const sectionText = `Need a table, a take-out order, or just somewhere to lay-low for a while? 
                    Come visit us at the Last Stop Diner and enjoy our end of the world dining experience.`;

const imgSrc =
    "https://i.redd.it/so-now-that-we-have-bo2-early-origins-dlc-5-maps-stuff-v0-e17ldrjoz29e1.jpg?width=1920&format=pjpg&auto=webp&s=70d105fd21bad48d2f1a8ebf536183ed3984c705";
const imgAlt = "Tranzit Diner Placeholder Image";
const imgAttribHref =
    "https://www.reddit.com/r/CODZombies/comments/1hmc6md/so_now_that_we_have_bo2_early_origins_dlc_5_maps/";
const imgAttribName = "r/DerpyBox";

export function homePage() {
    const container = createPageContainer(pageHeading);

    container.appendChild(section());

    return container;
}

function section() {
    const section = createElement("section");

    section.appendChild(
        createElement("h2", {
            text: sectionHeading,
            classes: ["section-heading"],
        })
    );

    section.appendChild(
        createElement("p", {
            text: sectionText,
            classes: ["home-page-text"],
        })
    );

    section.appendChild(image());

    return section;
}

function image() {
    const imgContainer = createElement("div", {
        classes: ["img-container"],
    });

    imgContainer.appendChild(
        createElement("img", {
            attrs: {
                src: imgSrc,
                alt: imgAlt,
            },
        })
    );

    imgContainer.appendChild(
        createElement("a", {
            text: imgAttribName,
            classes: ["img-attrib"],
            attrs: {
                href: imgAttribHref,
            },
        })
    );

    return imgContainer;
}
