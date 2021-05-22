let appconf = {
    data() {
        return {
            // options
            attr: 0,
            time_range: [1921, 2020],
            graph_mode_list:["Ingoing", "Outgoing"],
            graph_mode: 0,
        }
    },
    methods: {
        change_view_mode: function (mode) {
            this.view_mode = mode;
            $("#view-mode-switch button").removeClass("active");
            $("#view-mode-switch button")[mode].classList.add("active");
        },
        change_graph_mode: function (mode) {
            this.graph_mode = mode;
            $("#graph-mode-switch button").removeClass("active");
            $("#graph-mode-switch button")[mode].classList.add("active");
        },
        rangeChange: function () {
            let start = (typeof(this.time_range[0]) === "number") ? this.time_range[0] : parseInt(this.time_range[0]);
            let end = (typeof(this.time_range[1]) === "number") ? this.time_range[1] : parseInt(this.time_range[1]);
            start = Math.max(1921, Math.min(2020, start));
            end = Math.max(1921, Math.min(2020, end));
            this.time_range = (start > end) ? [end, start] : [start, end];
        }
    },
    computed: {

    },
    mounted: function () {
        // initialize options
        this.change_graph_mode(0);
    }
}

let app = Vue.createApp(appconf)
             .component("v-chart", VueECharts)
             .component("v-slider", window['vue-slider-component'])
             .mount("#app");


async function init_page () {
    // // example code
    // await readCSV("./assets/data/data_by_year.csv");
    // console.log(window.__loaded_csv[0]);
}

window.onload = init_page;