<template>
  <div
    class="day column"
    v-bind:style="{ backgroundColor: getActiveColor(myDay)}"
    @click="setActiveDay(myDay.id)"
  >
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
    CalendarEvent
  },
  methods: {
    setActiveDay(id) {
      var today = new Date();
      var weekday = today.getUTCDay();
      if (id < weekday) {
        store.state.message = "You cannot add or modify an event in the past";
      } else {
        store.state.message = "";
      }
      store.state.seedData.map(el => {
        if (el.id === id) return (el.active = true);
        else return (el.active = false);
      });
    },
    sortByObjectProperty(prop, getter) {
      return (a, b) => {
        (a = getter(a)), (b = getter(b));
        if (a[prop] < b[prop]) return -1;
        if (a[prop] > b[prop]) return 1;
        return 0;
      };
    },
    getActiveColor(day) {
      var today = new Date();
      var weekday = today.getUTCDay();
      if (weekday === 0) {
        weekday = 7;
      }
      if (
        weekday === day.id &&
        store.state.seedData.some(el => el.active !== true)
      ) {
        store.state.seedData.find(el => el.id === day.id).active = true;
        return "#8BC34A";
      }
      if (weekday <= day.id && day.active === false) {
        return "rgb(143, 235, 151)";
      }

      if (weekday <= day.id && day.active === true) {
        return "green";
      }
    }
  },
  computed: {
    sortedEvents() {
      const getter = v => v[Object.keys(v)[0]];
      const sorter = this.sortByObjectProperty("time", getter);
      return this.myDay.events.sort(sorter);
    }
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

  .day-details {
    padding: 10px;
  }

  &:last-child {
    border-right: 1px solid #8f8f8f;
  }
}
</style>

