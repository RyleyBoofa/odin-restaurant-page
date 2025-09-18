const pageHeading = "Our Menu";

const startersHeading = "Starters";
const starterItems = [
    {
        name: "Nachos",
        desc: "Corn chips topped with melted cheese",
        price: "$10",
    },
    {
        name: "Bruschetta",
        desc: "Toasted bread slices topped with diced tomatoes",
        price: "$8",
    },
];

const mainsHeading = "Mains";
const mainItems = [
    {
        name: "Steak",
        desc: "300gm Porterhouse, served with chips and salad",
        price: "$35",
    },
    {
        name: "Chicken Parma",
        desc: "Crumbed chicken breast topped with tomato sauce and cheese, served with chips and salad",
        price: "$30",
    },
];

export function loadMenuPage(content) {
    const container = document.createElement("div");
    container.classList.add("container");

    const h1 = document.createElement("h1");
    h1.textContent = pageHeading;
    container.appendChild(h1);

    container.appendChild(section(startersHeading, starterItems));

    container.appendChild(section(mainsHeading, mainItems));

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

        const desc = document.createElement("p");
        desc.textContent = item.desc;
        div.appendChild(desc);

        const price = document.createElement("p");
        price.textContent = item.price;
        div.appendChild(price);

        section.appendChild(div);
    });

    return section;
}
