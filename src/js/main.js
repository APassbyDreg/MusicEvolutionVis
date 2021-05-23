let appconf = {
    data() {
        return {
            // options
            attr: 0,
            attrs: ["danceability", "energy", "valence", "tempo", "loudness", "mode", "key", "acousticness", "instrumentalness", "liveness", "speechiness", "explicit", "duration_ms", "popularity"],
            time_range: [1921, 2020],
            graph_mode_list: ["In", "Out", "Both"],
            graph_mode: 0,
            genres: ["Electronic", "R&B", "Vocal", "Pop/Rock", "Religious", "Blues", "Country", "Jazz", "Latin", "New Age", "Folk", "International", "Reggae", "Comedy/Spoken", "Easy Listening", "Classical", "Avant-Garde", "Stage & Screen", "Children's"],
            using_genres: Array(19).fill(true),
        }
    },
    methods: {
        change_graph_mode: function(mode) {
            this.graph_mode = mode;
            $("#graph-mode-switch button").removeClass("active");
            $("#graph-mode-switch button")[mode].classList.add("active");
        },
        grene_change: function(idx) {
            console.log("genres", this.genres[idx], "toggled");
        },
        range_change: function() {
            let start = (typeof(this.time_range[0]) === "number") ? this.time_range[0] : parseInt(this.time_range[0]);
            let end = (typeof(this.time_range[1]) === "number") ? this.time_range[1] : parseInt(this.time_range[1]);
            start = Math.max(1921, Math.min(2020, start));
            end = Math.max(1921, Math.min(2020, end));
            this.time_range = (start > end) ? [end, start] : [start, end];
            update_table(start, end);
            update_graph(start, end, this.graph_mode);
            update_bar(start, end);
        }
    },
    computed: {

    },
    mounted: function() {
        // initialize options
        // this.change_view_mode(0);
        this.change_graph_mode(0);
    }
}

let app = Vue.createApp(appconf)
    .component("v-chart", VueECharts)
    .component("v-slider", window['vue-slider-component'])
    .mount("#app");


async function init_page() {
    await init_bar();
    await init_graph();
    await init_table();
}
window.onload = init_page;