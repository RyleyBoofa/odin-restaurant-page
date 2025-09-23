const pageHeading = "Our Menu";

const startersHeading = "Starters";
const starterItems = [
    {
        name: "Jugger Nuggets",
        desc: `Bite-sized power-ups that will give you the health boost you need. 
                Crispy on the outside, juicy and tender on the inside — guaranteed 
                to keep you fighting stronger, for longer.`,
        price: "$12.50",
    },
    {
        name: "Quick Refries",
        desc: `Crispy golden fries that will pick you up when you're feeling down. 
                Perfect for that second wind after a tough day.`,
        price: "$10.00",
    },
];

const mainsHeading = "Mains";
const mainItems = [
    {
        name: "PHD — Pretty Huge Dinner",
        desc: `The ultimate survivor's feast — 
                a towering plate stacked with burgers, fries, and other sides. 
                So much food you'll be left feeling like you could explode.`,
        price: "$25.00",
    },
    {
        name: "Stamin-Sub",
        desc: `A footlong sub packed with meats, cheese, and veggies. 
                It doesn't just fill you up — it keeps you moving faster, for longer.`,
        price: "$20.00",
    },
];

const drinksHeading = "Drinks";
const drinkItems = [
    {
        name: "Double-Scoop Root Beer Float",
        desc: `Classic root beer float stacked with two scoops of ice-cream. 
                Sweet, creamy, and guaranteed to double your fun with every sip.`,
        price: "Small $5.00 | Medium $8.00 | Large $10.00",
    },
    {
        name: "Greed Cola",
        desc: `Jumbo-sized glass of cola that will kick you into overdrive. 
                The perfect drink to keep you locked-in for those long nights.`,
        price: "$15.00",
    },
];

export function menuPage() {
    const container = document.createElement("div");
    container.classList.add("container");

    const h1 = document.createElement("h1");
    h1.textContent = pageHeading;
    h1.classList.add("page-heading");
    container.appendChild(h1);

    container.appendChild(section(startersHeading, starterItems));

    container.appendChild(section(mainsHeading, mainItems));

    container.appendChild(section(drinksHeading, drinkItems));

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

        const name = document.createElement("h3");
        name.textContent = item.name;
        name.classList.add("section-heading");
        div.appendChild(name);

        const desc = document.createElement("p");
        desc.textContent = item.desc;
        desc.classList.add("section-text");
        div.appendChild(desc);

        const price = document.createElement("p");
        price.textContent = item.price;
        price.classList.add("section-text");
        div.appendChild(price);

        section.appendChild(div);
    });

    return section;
}
