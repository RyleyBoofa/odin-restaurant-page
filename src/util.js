export function createPageContainer(heading) {
    if (!heading) {
        console.error("Required <string> heading not provided");
        return null;
    }

    const container = createElement("div", { classes: ["container"] });

    container.appendChild(
        createElement("h1", {
            text: heading,
            classes: ["page-heading"],
        })
    );

    return container;
}

export function createElement(tag, { text = "", classes = [], attrs = {} } = {}) {
    if (!tag) {
        console.error("Required <tag> not provided");
        return null;
    }

    const element = document.createElement(tag);

    if (text) {
        element.textContent = text;
    }

    classes.forEach((cls) => {
        element.classList.add(cls);
    });

    for (const [key, value] of Object.entries(attrs)) {
        element.setAttribute(key, value);
    }

    return element;
}
