export const store = {
    state: {
        activeEdit: null,
        seedData: [
            {
                id: 1,
                abbvTitle: "Mon",
                fullTitle: "Monday",
                events: [{ id: 1, details: "Get Groceries", edit: false, color: "#ff0000", time: "13:20" }, { id: 2, details: "Carpool", edit: false, color: "#0000ff", time: "11:00" }],
                active: false,
            },
            {
                id: 2,
                abbvTitle: "Tue",
                fullTitle: "Tuesday",
                events: [{ id: 1, details: "Yoga/Gym", edit: false, color: "#008000" }],
                active: false,
            },
            {
                id: 3,
                abbvTitle: "Wed",
                fullTitle: "Wednesday",
                events: [{ id: 1, details: "Work social", edit: false, color: "#ffa500" }],
                active: false,
            },
            {
                id: 4,
                abbvTitle: "Thu",
                fullTitle: "Thursday",
                events: [],
                active: true,
            },
            {
                id: 5,
                abbvTitle: "Fri",
                fullTitle: "Friday",
                events: [{ id: 1, details: "Dinner/drinks", edit: false, color: "#008000" }],
                active: false,
            },
            {
                id: 6,
                abbvTitle: "Sat",
                fullTitle: "Saturday",
                events: [{ id: 1, details: "Chill with the parents", edit: false, color: "#ffa500" }],
                active: false,
            },
            {
                id: 7,
                abbvTitle: "Sun",
                fullTitle: "Sunday",
                events: [{ details: "Netflix/Chill", edit: false, color: "#0000ff" }],
                active: false,
            },
        ],
    },
};
