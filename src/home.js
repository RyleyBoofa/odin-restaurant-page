const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent suscipit eget
                eros id egestas. Nulla sed congue enim. Maecenas nisi odio, scelerisque vel
                justo vel, accumsan faucibus odio. Nulla turpis libero, faucibus ut lorem
                luctus, dignissim consectetur lorem. Phasellus dictum urna laoreet massa dapibus
                aliquam. Mauris consequat rhoncus massa, sed bibendum neque rutrum sit amet.
                Aenean enim ante, consectetur ut laoreet et, sodales ut neque. Phasellus ut odio
                eros. Sed porttitor tortor et porta scelerisque.`;

const imgSrc = "https://upload.wikimedia.org/wikipedia/commons/c/ca/Idafiun_food.jpg";
const imgAlt = "Food platter";
const imgAttribHref = "https://commons.wikimedia.org/wiki/File:Idafiun_food.jpg";
const imgAttribName = "Idafiun";

export function loadHomePage() {
    const content = document.querySelector("#content");

    const container = document.createElement("div");
    container.classList.add("container");

    const h1 = document.createElement("h1");
    h1.textContent = "Odin Restaurant";
    container.appendChild(h1);

    container.appendChild(section());

    content.appendChild(container);
}

function section() {
    const section = document.createElement("section");

    const h2 = document.createElement("h2");
    h2.textContent = "Intro";
    section.appendChild(h2);

    const p = document.createElement("p");
    p.textContent = lorem;
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
