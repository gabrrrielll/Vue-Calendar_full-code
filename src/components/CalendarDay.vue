<template>
    <div class="day column" v-bind:style="{ backgroundColor: getActiveColor(myDay) }" @click="setActiveDay(myDay.id)">
        <div v-if="myDay" class="day-banner has-text-centered">{{ myDay.abbvTitle }}</div>
        <div class="day-details">
            <CalendarEvent v-for="event in sortedEvents" :event="event" :key="event.id" :myDay="myDay" />
        </div>
    </div>
</template>

<script>
import { store } from "../store.js";
import CalendarEvent from "./CalendarEvent";
export default {
    name: "CalendarDay",
    props: ["myDay"],
    components: {
        CalendarEvent,
    },
    methods: {
        setActiveDay(id) {
            var today = new Date();
            var weekday = today.getUTCDay();
            if (id < weekday) {
                store.state.message = "It is not correct to modify or add an event in the past! 🤔";
            } else {
                store.state.message = "";
            }
            store.state.seedData.forEach((el) => {
                if (el.id === id) {
                    el.active = true;
                } else {
                    el.active = false;
                }
            });
        },

        getActiveColor(day) {
            var today = new Date();
            var weekday = today.getUTCDay();
            if (weekday === 0) {
                weekday = 7;
            }
            if (weekday === day.id && store.state.seedData.some((el) => el.active !== true)) {
                //store.state.seedData.find(el => el.id === day.id).active = true;
                return "#8BC34A";
            }
            if (weekday <= day.id && day.active === false) {
                return "rgb(143, 235, 151)";
            }

            if (weekday <= day.id && day.active === true) {
                return "green";
            }
        },
    },
    computed: {
        sortedEvents() {
            if (this.myDay.events.length < 2) return this.myDay.events;

            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            this.myDay.events.sort(function(a, b) {
                return Date.parse("1970/01/01 " + a.time) - Date.parse("1970/01/01 " + b.time);
            });
            return this.myDay.events;
        },
    }
};
</script>

<style lang="scss">
.day {
    background-color: #4a4a4a;
    color: #fff;
    border-left: 1px solid #8f8f8f;
    border-bottom: 1px solid #8f8f8f;
    font-size: 12px;
    min-width: 180px;
    cursor: pointer;

    &:hover {
        background: darken(#4a4a4a, 5%);
    }

    .day-banner {
        background-color: #333333;
        color: #fff;
        padding: 10px;
        text-transform: uppercase;
        letter-spacing: 1px;
        font-size: 12px;
        font-weight: 600;
    }

    &:last-child {
        border-right: 1px solid #8f8f8f;
    }
}
</style>
