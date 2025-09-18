const pageHeading = "About Us";

const contactHeading = "Contact Us";
const contactItems = [
    {
        name: "Suburb",
        p1: "123 Street St, Suburb",
        p2: "1234 567 890",
    },
];

export function loadAboutPage(content) {
    const container = document.createElement("div");
    container.classList.add("container");

    const h1 = document.createElement("h1");
    h1.textContent = pageHeading;
    container.appendChild(h1);

    container.appendChild(section(contactHeading, contactItems));

    content.appendChild(container);
}

function section(heading, items) {
    const section = document.createElement("section");

    const h2 = document.createElement("h2");
    h2.textContent = heading;
    section.appendChild(h2);

    items.forEach((item) => {
        const div = document.createElement("div");

        const name = document.createElement("h3");
        name.textContent = item.name;
        div.appendChild(name);

        const p1 = document.createElement("p");
        p1.textContent = item.p1;
        div.appendChild(p1);

        const p2 = document.createElement("p");
        p2.textContent = item.p2;
        div.appendChild(p2);

        section.appendChild(div);
    });

    return section;
}
