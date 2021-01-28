<template>
    <div id="app">
        <h1>Calendar Week</h1>
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
        AddEvent,
    },
};
</script>

<style>
html,
body {
    height: 100%;
    margin: 0;
}
</style>

<style scoped>
h1 {
    color: white;
}
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    background: #7e7e7e;
    display: flex;
    flex-direction: column;
    align-items: center;
    -webkit-align-items: center;
    justify-content: flex-start;
    -webkit-justify-content: flex-start;
}
</style>
