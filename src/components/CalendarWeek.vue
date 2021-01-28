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
        CalendarDay,
    },
    mounted: function() {
        var today = new Date();
        var weekday = today.getUTCDay();
        // window.console.log("s-a montat",weekday);
        store.state.seedData.forEach((el) => {
            if (el.id === weekday) {
                el.active = true;
            } else {
                el.active = false;
            }
        });
    },
};
</script>

<style lang="scss" scoped>
#calendar-week {
    margin-bottom: 10px;
    display: flex;

    .column {
        padding: 2px;
    }
}
</style>
