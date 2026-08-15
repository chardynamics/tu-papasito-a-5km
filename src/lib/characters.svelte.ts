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
        height: "1.65m/5'5\"",
        description: "goleador letal para la selección",
        image: "campaz.png"
    },
    {
        id: 3,
        name: "Richard Ríos",
        age: "26",
        height: "1.85m/6'1\"",
        description: "baila baila baila - ozuna",
        image: "rios.jpg"
    },
    {
        id: 4,
        name: "Beatriz Pinzón",
        age: "25",
        height: "1.66m/5'5\"",
        description: "Secretary with great economic talent",
        image: "betty.png"
    },
    {
        id: 5,
        name: "Beatriz Pinzón",
        age: "26",
        height: "1.66m/5'5\"",
        description: "Now strong, confident, and CEO of Ecomoda",
        image: "bettydespues.jpeg",
        depends: 4,
    },
    {
        id: 6,
        name: "Teacher Maluma",
        age: "32",
        height: "175cm/5'9\"",
        description: "maluma beibeee",
        image: "maluma.png"
    },
    {
        id: 7,
        name: "Colombian Skipper",
        age: "35",
        height: "74cm/2'9\"",
        description: "arriba la patria",
        image: "skipper.png"
    }
];

export const remainingCharacters = $state(characters);
