export const globalState: {
    character: {
        id: number;
        name: string;
        age: string;
        height: string;
        description: string;
        image: string;
        depends?: number;
    };
} = $state({
    character: {
        id: 0,
        name: "Capybara",
        age: "26",
        height: "130",
        description: "An animal",
        image: "capybara1.jpg",
    }
});
