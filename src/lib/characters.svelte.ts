export const characters = [
    {
        id: 0,
        name: "Capybara",
        age: "26",
        height: "130cm",
        description: "An animal",
        image: "capybara.png"
    },
    {
        id: 1,
        name: "Sr. Arepa",
        age: "67",
        height: "11cm/4inch",
        description: "Una arepa bien rica",
        image: "mrarepa.png"
    },
    {
        id: 2,
        name: "Jáminton Campaz",
        age: "26",
        height: "1.65m/5ft 5in",
        description: "Very lethal goalscorer for la Selección when needed",
        image: "campaz.png"
    },
    {
        id: 3,
        name: "Richard Ríos",
        age: "26",
        height: "1.85m/6ft 1in",
        description: "Greater dancer and midfielder",
        image: "rios.jpg"
    },
    {
        id: 4,
        name: "Beatriz Pinzón",
        age: "25",
        height: "1.66m/5ft 5in",
        description: "Secretary with great economic talent",
        image: "betty.png"
    },
    {
        id: 5,
        name: "Beatriz Pinzón",
        age: "26",
        height: "1.66m/5ft 5in",
        description: "",
        image: "bettydespues.png",
        depends: 4,
    }
];

export const remainingCharacters = $state(characters);
