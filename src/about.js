const pageHeading = "About Us";

const aboutHeading = "The last stop before the end of the line";
const aboutItems = [
    {
        p1: `Need a table, a take-out order, or just somewhere to lay-low for a while? 
            Come visit us at the Last Stop Diner.`,
    },
];

const contactHeading = "Contact Us";
const contactItems = [
    {
        name: "Suburb",
        p1: "3 Green Run, Washington",
        p2: "Ph: 162 141171",
        p3: "Ph: 147 165156",
    },
];

export function aboutPage() {
    const container = document.createElement("div");
    container.classList.add("container");

    const h1 = document.createElement("h1");
    h1.textContent = pageHeading;
    h1.classList.add("page-heading");
    container.appendChild(h1);

    container.appendChild(section(aboutHeading, aboutItems));

    container.appendChild(section(contactHeading, contactItems));

    return container;
}

function section(heading, items) {
    const section = document.createElement("section");

    const h2 = document.createElement("h2");
    h2.textContent = heading;
    h2.classList.add("section-heading");
    section.appendChild(h2);

    items.forEach((item) => {
        const div = document.createElement("div");

        if (item.name) {
            const name = document.createElement("h3");
            name.textContent = item.name;
            name.classList.add("section-heading");
            div.appendChild(name);
        }

        if (item.p1) {
            const p1 = document.createElement("p");
            p1.textContent = item.p1;
            p1.classList.add("section-text");
            div.appendChild(p1);
        }

        if (item.p2) {
            const p2 = document.createElement("p");
            p2.textContent = item.p2;
            p2.classList.add("section-text");
            div.appendChild(p2);
        }

        if (item.p3) {
            const p3 = document.createElement("p");
            p3.textContent = item.p3;
            p3.classList.add("section-text");
            div.appendChild(p3);
        }

        section.appendChild(div);
    });

    return section;
}
