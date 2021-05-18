let appconf = {
    data() {
        return {
            // options
            year: 1921,
            attr: 0,
            view_mode_list:["Overview", "Year"],
            graph_mode_list:["Ingoing", "Outgoing"],
            view_mode: 0,
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
        }
    },
    computed: {

    },
    mounted: function () {
        this.change_view_mode(0);
        this.change_graph_mode(0);
    }
}

let app = Vue.createApp(appconf).mount("#app");
// app.component("v-chart", VueECharts);

