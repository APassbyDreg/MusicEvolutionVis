const { loadModule } = window['vue3-sfc-loader'];

let appconf = {
    data() {
        return {
            // 属性值
            attrs: ["danceability", "energy", "valence", "tempo", "loudness", "mode", "key", "acousticness", "instrumentalness", "liveness", "speechiness", "explicit", "duration_ms", "popularity"],
            graph_mode_list: ["In", "Out", "Both"],
            genres: ["Electronic", "R&B;", "Vocal", "Pop/Rock", "Religious", "Blues", "Country", "Jazz", "Latin", "New Age", "Folk", "International", "Reggae", "Comedy/Spoken", "Easy Listening", "Classical", "Avant-Garde", "Stage & Screen", "Children's"],
            genre_colors: ['#e78b8b', '#e78ba8', '#e78bc5', '#e78be2', '#cf8be7', '#b28be7', '#948be7', '#8b9ee7', '#8bbbe7', '#8bd8e7', '#8be7d8', '#8be7bb', '#8be79e', '#94e78b', '#b2e78b', '#cfe78b', '#e7e28b', '#e7c58b', '#e7a88b'],
            musicians: [],
            // APP 状态值
            time_range: [1921, 2020],           // 时间区域
            graph_mode: 0,                      // 边状态
            using_genres: Array(19).fill(true), // 被使用的流派
            inspecting_genre: "",               // 图显示细节所属的流派
            inspecting_musician: "",            // 图的中心音乐家
            inspecting_attr: "",                // 表展示的属性视图的属性
        }
    },
    methods: {
        change_graph_mode: function(mode) {
            `
                图中显示边状态更改时的函数
            `
            this.graph_mode = mode;
            $("#graph-mode-switch button").removeClass("active");
            $("#graph-mode-switch button")[mode].classList.add("active");
        },
        grene_change: function(idx) {
            `
                使用流派更改时的函数
            `
            update_graph(this.time_range[0], this.time_range[1], this.using_genres);
            update_table();
            update_bar(this.time_range[0], this.time_range[1], this.using_genres, this.genre_colors);
        },
        range_change: function() {
            `
                时间状态更改处理函数
            `
            let start = (typeof(this.time_range[0]) === "number") ? this.time_range[0] : parseInt(this.time_range[0]);
            let end = (typeof(this.time_range[1]) === "number") ? this.time_range[1] : parseInt(this.time_range[1]);
            start = Math.max(1921, Math.min(2020, start));
            end = Math.max(1921, Math.min(2020, end));
            this.time_range = (start > end) ? [end, start] : [start, end];
            update_table();
            update_graph(start, end, this.using_genres);
            update_bar(start, end, this.using_genres, this.genre_colors);
        },
        focus_musician: function (name) {
            `
                当弹幕被点击时触发的事件
            `
            this.inspecting_musician = name;    // 这个值标识了选中的音乐家名字
            console.log(name);
            let genre = "xxxx";         // 需要设置该音乐家所属的流派
            this.select_genre(genre);
        },
        select_genre: function (name) {
            `
                这个函数用来全局派发更改选定的流派的事件（包括从图中点击、点击弹幕、从流派中返回）
            `
            inspecting_genre = name;    // 把这个值先改了以便别的部分调取
            inspecting_musician = ""    // 可能需要清除这个值

            // 更改graph

            // 更改bar

            // 更改table
        }
    },
    computed: {
        
    },
    mounted: function() {
        // initialize options
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
    await initDanmaku();
}
window.onload = init_page;

window.onresize = () => {
    graph_chart.resize();
    table_chart.resize();
    port_chart.resize();
}