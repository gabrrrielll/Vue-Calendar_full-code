export const store = {
    state: {
        seedData: [
            {
                id: 1,
                abbvTitle: "Mon",
                fullTitle: "Monday",
                events: [{ id: 1, details: "Get Groceries", edit: false, color: "red", time: 13 }, { id: 2, details: "Carpool", edit: false, color: "blue", time: 11 }],
                active: false,
            },
            {
                id: 2,
                abbvTitle: "Tue",
                fullTitle: "Tuesday",
                events: [{ id: 1, details: "Yoga/Gym", edit: false, color: "green" }],
                active: false,
            },
            {
                id: 3,
                abbvTitle: "Wed",
                fullTitle: "Wednesday",
                events: [{ id: 1, details: "Work social", edit: false, color: "orange" }],
                active: false,
            },
            {
                id: 4,
                abbvTitle: "Thu",
                fullTitle: "Thursday",
                events: [],
                active: false,
            },
            {
                id: 5,
                abbvTitle: "Fri",
                fullTitle: "Friday",
                events: [{ id: 1, details: "Dinner/drinks", edit: false, color: "green" }],
                active: false,
            },
            {
                id: 6,
                abbvTitle: "Sat",
                fullTitle: "Saturday",
                events: [{ id: 1, details: "Chill with the parents", edit: false, color: "cyan" }],
                active: false,
            },
            {
                id: 7,
                abbvTitle: "Sun",
                fullTitle: "Sunday",
                events: [{ details: "Netflix/Chill", edit: false, color: "grey" }],
                active: false,
            },
        ],
    },
};
