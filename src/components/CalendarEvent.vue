<template>
  <div class="event-full">
    <p v-if="event.time" class="time">{{event.time}}</p>
    <div class="event" v-if="event" v-bind:style="{ backgroundColor: event.color }">
      <p class="text">{{event.details}}</p>
      <table id="options">
        <tr>
          <td>
            <span id="remove" @click="remove(myDay.id, event.id)">❌</span>
          </td>
        </tr>
        <tr>
          <td>
            <span id="edit" @click="edit(myDay.id, event.id)">🖊️</span>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";
export default {
  data() {
    return {
      activeColor: "red"
    };
  },
  name: "CalendarEvent",
  props: ["myDay", "event"],
  methods: {
    getColor(event) {
      var color = event;
      event? color = event : color = "green";
      return color;
    },
    remove(idDay, id) {
      if (window.confirm("Are you sure ?"))
        var day = store.state.seedData.find(el => el.id === idDay);
      var newEvents = day.events.filter(elem => elem.id !== id);
      day.events = newEvents;
    },
    edit(idDay, id) {
      var day = store.state.seedData.find(el => el.id === idDay);
      var event = day.events.find(elem => elem.id === id);
      //window.console.log("element de editat:", event);
      event.edit = true;
      store.state.info = "Modify event details";
    }
  }
};
</script>
<style scoped>
.event {
  padding: 5px;
  min-height: 27px;
  border: 1px solid black;
  display: flex;
  justify-content: space-between;
  min-width: 150px;
  border-radius: 0 0 5px 5px;
}
p.text {
  width: 80%;
}
table#options {
  background: white;
}
p.time {
  /* display: block; */
  text-align: center;
  position: relative;
  background: grey;
  bottom: -13px;
  line-height: 20px;
  border: 1px solid black;
  margin-top: -13px;
  border-radius: 5px 5px 0 0;
}
.event-full {
  box-shadow: 3px 5px 1px #00000025;
  margin-bottom: 9px;
}
</style>