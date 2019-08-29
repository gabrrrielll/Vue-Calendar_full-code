<template>
  <div class="add-event">
    <p class="info" v-if="getInfo()">{{getInfo()}}</p>
    <div class="calendar-entry-note">
      <input type="text" placeholder="New Event" v-model="inputEntry" required />

      <br />
      <span>Select color:</span>
      <input type="color" v-model="color" id="color" />
      <br />
      <span>Select time:</span>
      <input type="time" v-model="time" id="time" />
      <p class="calendar-entry-day">
        Day of event:
        <span class="bold">{{activeDay()}}</span>
      </p>
      <button
        class="button is-primary is-small is-outlined"
        @click="submitEvent(inputEntry, color)"
      >Submit</button>
    </div>
    <p class="label-error" v-if=" getMessage()">{{getMessage()}}</p>
  </div>
</template>
<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      inputEntry: "",
      color: "#49aaf7",
      message: "",
      time: ""
    };
  },
  methods: {
    submitEvent(inputEntry, color) {
      if (this.inputEntry === "") {
        return (this.message = "You can't submit an empty event");
      }
      var day = store.state.seedData.find(el => el.active === true);
      if (day.events.some(el => el.edit)) {
        var oldEvent = day.events.find(el => el.edit === true);
        var newEvent = {
          id: oldEvent.id,
          details: this.inputEntry,
          time: this.time,
          edit: false,
          color: color
        };
        console.log("pt editare", oldEvent, newEvent);
        // oldEvent = newEv;
        day.events = day.events.filter(el => el.id !== oldEvent.id);
        store.state.info = "";
      } else {
        var newId =
          store.state.seedData.find(el => el.active === true).events.length + 1;
        var newEvent = {
          id: newId,
          details: this.inputEntry,
          time: this.time,
          edit: false,
          color: color
        };
      }
      day.events.push(newEvent);

      this.inputEntry = "";
      this.message = "";
      this.time = "";
    },
    activeDay() {
      var x = store.state.seedData.find(el => el.active === true);
      return x.fullTitle;
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
    getDates() {
      return "ceva aici";
    }
  }
};
</script>

<style scoped>
.add-event {
  width: 500px;
  background: #fff;
  border: 1px solid #42b883;
  border-radius: 10px;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px;
}
input {
  width: 200px;
  font-weight: 600;
  border: 0;
  border-bottom: 1px solid #ccc;
  font-size: 15px;
  height: 30px;
  margin-bottom: 10px;
}
input:focus {
  outline: none;
}
p.label-error {
  background: #ff1212;
  padding: 9px;
  color: white;
}
input#color {
  width: 40px;
  height: 25px;
  margin: 5px;
}
</style>