<template>
    <div class="add-event">
        <p class="info" v-if="getInfo()">{{ getInfo() }}</p>
        <div class="calendar-entry-note">
            <input type="text" :placeholder="getDetails().details" v-model="inputEntry" />

            <br />
            <span>Select color:</span>
            <input type="color" v-model="color" id="color" />
            <br />
            <span>Select time:</span>
            <input type="time" v-model="time" id="time" />
            <p class="calendar-entry-day">
                Day of event:
                <span class="bold">{{ activeDay() }}</span>
            </p>
            <center>
                <button class="button" @click="submitEvent(color, inputEntry)">
                    Submit
                </button>
            </center>
        </div>
        <p class="label-error" v-if="getMessage()">{{ getMessage() }}</p>
    </div>
</template>
<script>
import { store } from "../store.js";
export default {
    data() {
        return {
            inputEntry: "",
            color: "",
            message: "",
            time: "",
        };
    },
    methods: {
        submitEvent(color, inputEntry) {
            // window.console.log("submitEvent-color", color);
            var day = store.state.seedData.find((el) => el.active);

            if (day.events.some((el) => el.edit)) {
                var oldEvent = day.events.find((el) => el.edit);
                var newEvent = {
                    id: oldEvent.id,
                    details: this.inputEntry !== "" ? this.inputEntry : oldEvent.details,
                    time: this.time !== "" ? this.time : oldEvent.time,
                    edit: false,
                    color: color !== "" ? color : oldEvent.color,
                };

                day.events = day.events.filter((el) => el.id !== oldEvent.id);
                store.state.info = "";
            } else {
                if (inputEntry === "") return (this.message = "You can't submit an empty event");
                var newId = Math.random()
                    .toString()
                    .substring(2);
                newEvent = {
                    id: newId,
                    details: this.inputEntry,
                    time: this.time,
                    edit: false,
                    color: color !== "" ? color : "#000000",
                };
            }
            day.events.push(newEvent);

            this.inputEntry = "";
            this.message = "";
            this.time = "";
        },
        activeDay() {
            var activeDay = store.state.seedData.find((el) => el.active === true);
            store.state.info = "Add event on this day";
            return activeDay.fullTitle;
        },
        getMessage() {
            if (this.inputEntry !== "") return (this.message = "");
            if (this.message) {
                return this.message;
            } else if (store.state.message) {
                return store.state.message;
            } else return null;
        },
        getInfo() {
            if (store.state.info) {
                return store.state.info;
            } else return null;
        },
        getDetails() {
            // return window.console.log("aici-getDetails------");
            var activeDay = store.state.seedData.find((el) => el.active === true);

            var evFind = activeDay.events.find((element) => {
                if (element.edit !== false) {
                    window.console.log("s-a gasit de edit eveniment", element.details);
                    return element;
                } else {
                    window.console.log("nu s-a gasit eveniment", element);
                }
            });
            window.console.log("evFind", evFind);
            if (evFind !== undefined) return evFind;
            else
                return {
                    color: "#dddddd",
                    details: "Ad new task here",
                    time: null,
                };
        },
    },
    getColor() {
        window.console.log("color", this.color);
        return this.color;
    },
};
</script>

<style scoped>
.add-event {
    width: 300px;
    background: #fff;
    border: 1px solid #42b883;
    border-radius: 10px;
    margin: 0 auto;
    padding: 10px;
}
input {
    width: 200px;
    font-weight: 5 00;
    border: 0;
    border-bottom: 1px solid #ccc;
    font-size: 14px;
    height: 20px;
    margin-bottom: 4px;
}
input:focus {
    outline: none;
}
p.label-error {
    background: #ff2a2a;
    padding: 9px;
    color: white;
    margin: 10px 0 0;
    border-radius: 10px;
}
input#color {
    width: 50px;
    height: 20px;
    margin: 3px;
}
p.info,
span.bold {
    margin: 3px auto;
    color: rgb(35, 179, 223);
    text-align: center;
    font-weight: 600;
}
p.label-error {
    text-align: center;
}
.button {
    background: #27b82c;
    color: white;
    padding: 6px 30px;
    box-shadow: 3px 5px 6px 1px grey;
    border-radius: 5px;
    border: 0 transparent;
}
.button:hover {
    background: #18a11c;
    box-shadow: 1px 1px 2px 0px grey;
}
</style>
