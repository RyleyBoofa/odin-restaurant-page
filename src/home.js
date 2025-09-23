const pageHeading = "Last Stop Diner";

const sectionHeading = "Open 24 Hours";
const sectionText = `Welcome to the Last Stop Diner — serving survivors since 2012! 
                    Our cheerful undead staff are always ready with a smile and a 
                    groan, while our loyal regulars keep the booths full. Hop aboard 
                    the bus with our state-of-the-art robotic driver at the wheel, 
                    and stop in for a hot meal, a warm coffee, and a little piece 
                    of post-apocalyptic comfort.`;

const imgSrc =
    "https://i.redd.it/so-now-that-we-have-bo2-early-origins-dlc-5-maps-stuff-v0-e17ldrjoz29e1.jpg?width=1920&format=pjpg&auto=webp&s=70d105fd21bad48d2f1a8ebf536183ed3984c705";
const imgAlt = "Tranzit Diner Placeholder Image";
const imgAttribHref =
    "https://www.reddit.com/r/CODZombies/comments/1hmc6md/so_now_that_we_have_bo2_early_origins_dlc_5_maps/";
const imgAttribName = "r/DerpyBox";

export function homePage() {
    const container = document.createElement("div");
    container.classList.add("container");

    const h1 = document.createElement("h1");
    h1.textContent = pageHeading;
    container.appendChild(h1);

    container.appendChild(section());

    return container;
}

function section() {
    const section = document.createElement("section");

    const h2 = document.createElement("h2");
    h2.textContent = sectionHeading;
    section.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = sectionText;
    section.appendChild(p);

    section.appendChild(image());

    return section;
}

function image() {
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("img-container");

    const img = document.createElement("img");
    img.src = imgSrc;
    img.alt = imgAlt;
    imgContainer.appendChild(img);

    const a = document.createElement("a");
    a.textContent = imgAttribName;
    a.href = imgAttribHref;
    a.classList.add("img-attrib");
    imgContainer.appendChild(a);

    return imgContainer;
}
