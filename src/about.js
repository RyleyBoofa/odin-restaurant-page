import { createElement, createPageContainer } from "./util.js";

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
    const container = createPageContainer(pageHeading);

    container.appendChild(section(aboutHeading, aboutItems));

    container.appendChild(section(contactHeading, contactItems));

    return container;
}

function section(heading, items) {
    const section = createElement("section", { classes: ["about-section"] });

    section.appendChild(
        createElement("h2", {
            text: heading,
            classes: ["section-heading", "about-section-heading"],
        })
    );

    items.forEach((item) => {
        const div = createElement("div", { classes: ["about-item"] });

        if (item.name) {
            div.appendChild(
                createElement("h3", {
                    text: item.name,
                    classes: ["section-heading"],
                })
            );
        }

        if (item.p1) {
            div.appendChild(
                createElement("p", {
                    text: item.p1,
                    classes: ["about-contact-info"],
                })
            );
        }

        if (item.p2) {
            div.appendChild(
                createElement("p", {
                    text: item.p2,
                    classes: ["about-contact-info"],
                })
            );
        }

        if (item.p3) {
            div.appendChild(
                createElement("p", {
                    text: item.p3,
                    classes: ["about-contact-info"],
                })
            );
        }

        section.appendChild(div);
    });

    return section;
}
