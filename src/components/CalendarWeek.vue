<template>
  <div id="calendar-week">
    <CalendarDay v-for="day in sharedState.seedData" :myDay="day" :key="day.id" />
  </div>
</template>

<script>
import { store } from "../store.js";
import CalendarDay from "./CalendarDay.vue";

export default {
  data() {
    return { sharedState: store.state };
  },
  components: {
    CalendarDay
  }
};
</script>


<style lang="scss" scoped>
#calendar-week {
  margin-bottom: 50px;
  display: flex;

  .column {
    padding: 2px;
  }
}
</style>



