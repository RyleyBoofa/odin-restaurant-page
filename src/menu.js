import { createElement, createPageContainer } from "./util.js";

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
    const container = createPageContainer(pageHeading);

    container.appendChild(section(startersHeading, starterItems));

    container.appendChild(section(mainsHeading, mainItems));

    container.appendChild(section(drinksHeading, drinkItems));

    return container;
}

function section(heading, items) {
    const section = createElement("section", { classes: ["section"] });

    section.appendChild(
        createElement("h2", {
            text: heading,
            classes: ["section-heading"],
        })
    );

    items.forEach((item) => {
        const div = createElement("div", { classes: ["section-item"] });

        div.appendChild(
            createElement("h3", {
                text: item.name,
                classes: ["section-heading"],
            })
        );

        div.appendChild(
            createElement("p", {
                text: item.desc,
                classes: ["section-text"],
            })
        );

        div.appendChild(
            createElement("p", {
                text: item.price,
                classes: ["section-text"],
            })
        );

        section.appendChild(div);
    });

    return section;
}
