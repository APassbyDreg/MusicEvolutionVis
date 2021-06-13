const { loadModule } = window['vue3-sfc-loader'];

let appconf = {
    data() {
        return {
            // 属性值
            attrs: ["Danceability", "Energy", "Valence", "Tempo", "Loudness", "Mode", "Key", "Acousticness", "Instrumentalness", "Liveness", "Speechiness", "Explicit", "Duration", "Popularity"],
            table_mode_list: ["Attrs", "Timeline"],
            genres: ["Electronic", "R&B;", "Vocal", "Pop/Rock", "Religious", "Blues", "Country", "Jazz", "Latin", "New Age", "Folk", "International", "Reggae", "Comedy/Spoken", "Easy Listening", "Classical", "Avant-Garde", "Stage&Screen", "Children's"],
            genre_colors: ['#f09090', '#dea487', '#f0d090', '#d6d675', '#d0f090', '#93da70', '#90f090', '#83d9a0', '#90f0d0', '#75d2d2', '#90d0f0', '#6c8fd5', '#9090f0', '#9070d1', '#d090f0', '#e184e1', '#f090d0', '#dc87a3', '#c0c0c0'],
            musicians: [],
            // APP 状态值
            fullscreen: 0, // 0: 不显示, 1: 全屏显示表格, 2: 全屏显示图
            time_range: [1921, 2020], // 时间区域
            table_mode: 0, // 表状态， '0'是Attr图，'1'是Timeline变化图
            using_genres: Array(19).fill(true), // 被使用的流派
            inspecting_genre: "", // 图显示细节所属的流派
            inspecting_musician: "", // 图的中心音乐家
            inspecting_attr: 0, // 表展示的属性视图的属性
            table_title: "TITLE", // 表题
            table_subtitle: "SUBTITLE", // 表副标题，大部分时间和图标题差不多
            bar_title: "BAR_TITLE", // bar 标题
            // graph_title: "GRAPH_TITLE", // 图标题
            fullscreen_title: "FULLSCREEN_TITLE",
            animating: false, // 是否在动画
            influence_genres: Array(19).fill(0), // 影响流派数量
        }
    },
    methods: {
        set_fullscreen: function(state) {
            this.fullscreen = state;
            if (state == 1) {
                this.fullscreen_title = this.title;
                setTimeout(() => {
                    update_fs_table();
                }, 1);
            }
            if (state == 2) {
                this.fullscreen_title = this.bar_title;
                setTimeout(()=> {
                    update_fs_graph();
                }, 1)
            }
        },
        reset: function() {
            this.inspecting_attr = 0;
            this.inspecting_musician = "";
            this.inspecting_genre = "";
            this.using_genres = Array(19).fill(true);
            this.time_range = [1921, 2020];
            this.change_graph_mode(0);
            this.change_table_mode(0);
            this.set_fullscreen(0);
            this.range_change();
            stop_animation();
            update_bar();
        },
        change_graph_mode: function(mode) {
            `
                图中显示边状态更改时的函数
            `
            // this.graph_mode = mode;
            update_graph();
            // $("#graph-mode-switch button").removeClass("active");
            // $("#graph-mode-switch button")[mode].classList.add("active");
        },
        change_table_mode: function(mode) {
            `
                图中显示表格模式更改时的函数
            `
            this.table_mode = mode;
            update_table();
            $("#table-mode-switch button").removeClass("active");
            $("#table-mode-switch button")[mode].classList.add("active");
            if (mode == 1) {
                $("#table-mode-switch button")[2].classList.add("active");
            }
        },
        grene_change: function() {
            `
                使用流派更改时的函数
            `
            update_graph();
            update_table();
            update_bar();
        },
        attr_change: function(idx) {
            `
                展示属性变化时的函数
            `
            this.change_table_mode(1);
            this.inspecting_attr = idx - 1;
            change_table_attr();
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
            update_graph();
            update_bar();
        },
        focus_musician: function(name) {
            `
                当弹幕被点击时触发的事件
            `
            this.inspecting_musician = name; // 这个值标识了选中的音乐家名字
            console.log(name);
            let genre = name2genre_map[name]; // 需要设置该音乐家所属的流派
            console.log(genre);
            this.select_genre(genre);
        },
        select_genre: function(name = "") {
            `
                这个函数用来全局派发更改选定的流派的事件（包括从图中点击、点击弹幕、从流派中返回）
            `
            this.inspecting_genre = name; // 把这个值先改了以便别的部分调取
            if (this.inspecting_genre == "") {
                // 从流派返回
                this.inspecting_musician = ""
                set_out_graph_opt();
                // init_bar();
                update_bar();
            } else {
                // 图中点击
                if (this.inspecting_musician == "") {
                    set_in_graph_opt();
                    update_artist_bar();
                } else {
                    this.influence_genres = Array(19).fill(0);
                    set_artist_graph_opt();
                    update_bar_for_artist();
                    console.log(this.influence_genres);
                }
                // update_artist_bar();
            }
            update_table();
        },
        toggle_animation: function() {
            if (this.animating) {
                stop_animation();
            } else {
                start_animation(time_animation, 100);
            }
        },
    },
    computed: {},
    mounted: function() {
        // initialize options
        $("#table-mode-switch button")[0].classList.add("active");
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