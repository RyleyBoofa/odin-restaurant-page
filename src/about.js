const pageHeading = "About Us";

const aboutHeading = "The last stop before the end of the line";
const aboutItems = [
    {
        p1: `Welcome to the Last Stop Diner — serving survivors since 2012!  
            Our cheerful undead staff are always ready with a smile (or a groan), 
            while our loyal regulars keep the booths full. Hop aboard the bus, 
            with our state-of-the-art robotic driver at the wheel, and stop in 
            for a hot meal, a warm coffee, and a little piece of post-apocalyptic 
            comfort. Whether you're on your last leg or just passing through, 
            we're here to help you refuel before your next adventure.`,
    },
];

const contactHeading = "Contact Us";
const contactItems = [
    {
        name: "Washington",
        p1: "3 Green Run, Washington, USA",
        p2: "Phone: 162 141 171",
        p3: "Fax: 147 165 156",
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
    section.classList.add("about-section");

    const h2 = document.createElement("h2");
    h2.textContent = heading;
    h2.classList.add("section-heading");
    h2.classList.add("about-section-heading");
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
            p1.classList.add("about-contact-info");
            div.appendChild(p1);
        }

        if (item.p2) {
            const p2 = document.createElement("p");
            p2.textContent = item.p2;
            p2.classList.add("about-contact-info");
            div.appendChild(p2);
        }

        if (item.p3) {
            const p3 = document.createElement("p");
            p3.textContent = item.p3;
            p3.classList.add("about-contact-info");
            div.appendChild(p3);
        }

        section.appendChild(div);
    });

    return section;
}
