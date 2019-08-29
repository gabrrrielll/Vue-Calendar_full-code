<template>
  <div id="app">
    <h3>Calendar Week</h3>
    <CalendarWeek />
    <AddEvent />
  </div>
</template>

<script>
import CalendarWeek from "./components/CalendarWeek";
import AddEvent from "./components/AddEvent.vue";

export default {
  name: "App",
  components: {
    CalendarWeek,
    AddEvent
  }
};
</script>

<style>
html,
body {
  height: 100%;
}
</style>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: inherit;
  background: #7e7e7e;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-align-items: center;
  justify-content: flex-start;
  -webkit-justify-content: flex-start;
}
</style>
