const scale_fact = 0.4;
const show_artist_num = 15;

var port_part = document.getElementById("graph-bar");
var port_chart = echarts.init(port_part);

var portion_csv;
var artist_json_bar; // 用于绘制音乐家portion
var genre_list = ["Electronic", "R&B;", "Vocal", "Pop/Rock", "Religious", "Blues", "Country", "Jazz", "Latin", "New Age", "Folk", "International", "Reggae", "Comedy/Spoken", "Easy Listening", "Classical", "Avant-Garde", "Stage & Screen", "Children's"];
// var now_genre_list = genre_list.concat();
var bar_color_dict = {};
for (var i = 0; i < 19; i++) {
    bar_color_dict[app.genres[i]] = app.genre_colors[i];
}

function draw_bra(start, end, portion_csv, select_genre, color_list) {
    now_genre_list = genre_list.concat();
    now_port_colors = color_list.concat();
    for (var i = 0; i < select_genre.length; i++) {
        genre_flag = select_genre[i];
        if (genre_flag == false) {
            remove_genre = genre_list[i];
            var remove_idx = 0;
            for (var ii = 0; ii < genre_list.length; ii++) {
                if (now_genre_list[ii] == remove_genre) {
                    remove_idx = ii;
                    break;
                }
            } // 没查到返回列表元素下标的函数
            now_genre_list.splice(remove_idx, 1);
            now_port_colors.splice(remove_idx, 1);
        }
    }
    port_option = {
        color: now_port_colors,
        tooltip: {
            // trigger: 'axis',
            // axisPointer: {
            //     type: 'shadow'
            // }
        },
        animationDurationUpdate: 100,
        legend: {
            data: now_genre_list,
            show: false
        },
        grid: {
            left: '-10px',
            right: '-10px',
            bottom: '0%',
            top: '0%',
            containLabel: false
        },
        xAxis: {
            type: 'category',
            data: ['portion'],
            axisLabel: {
                show: false
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: false
            }
        },
        series: []
    };
    let total = 0;
    for (var i = 0; i < genre_list.length; i++) {
        var sum_num = 0;
        for (var j = start - 1920; j <= end - 1920; j++) {
            var trans_num = parseInt(portion_csv[j][i + 1]);
            sum_num += trans_num;
        }
        // scale sum_numto avoid thin lines
        sum_num = Math.pow(sum_num, scale_fact);
        // total += sum_num;
        new_part = {
            name: genre_list[i],
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series',
            },
            tooltip: {
                formatter: (v) => {
                    var orig = Math.round(Math.pow(v.data, 1 / scale_fact));
                    return `<b>${v.seriesName}:</b> ${orig}`;
                }
            },
            data: [sum_num]
        };
        genre_flag = select_genre[i];
        if (genre_flag == true) {
            port_option["series"].push(new_part);
            total += sum_num;
        }
    }
    port_option.yAxis.max = total;
    return port_option;
}

function draw_artist_bar(start, end, port_json, input_genre) {
    // 由于规划设计中音乐家之间的影响作用不大，因此此处更改为被其他genre影响的比例
    let need_genre_dict = port_json[input_genre];
    let now_artists_list = [];
    let now_artists_dict = {}; // 统计最终输入option数据
    let now_influence_genres = {}; // 修改后最终输入option的数据
    var now_port_colors = [];
    port_option = {
        color: now_port_colors,
        tooltip: {
            // trigger: 'axis',
            // axisPointer: {
            //     type: 'shadow'
            // }
        },
        animationDurationUpdate: 100,
        legend: {
            data: now_artists_list,
            show: false
        },
        grid: {
            left: '-10px',
            right: '-10px',
            bottom: '0%',
            top: '0%',
            containLabel: false
        },
        xAxis: {
            type: 'category',
            data: ['portion'],
            axisLabel: {
                show: false
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: false
            }
        },
        series: []
    };

    // for (var i = start; i <= end; i++) {
    //     year_str = i.toString();
    //     if (need_genre_dict.hasOwnProperty(year_str)) {
    //         let artist_year_dict = need_genre_dict[year_str]; // 中间变量，记录该genre某一年的情况
    //         for (var artist in artist_year_dict) {
    //             // console.log(artist_year_dict[artist]);
    //             if (now_artists_dict.hasOwnProperty(artist)) {
    //                 now_artists_dict[artist] += artist_year_dict[artist];
    //             } else {
    //                 now_artists_dict[artist] = artist_year_dict[artist];
    //             }
    //         }
    //     }
    // }

    for (var year in portion_influence_data) {
        if (parseInt(year) >= start && parseInt(year) <= end) {
            for (var genre in portion_influence_data[year]) {
                now_genre_influ_list = portion_influence_data[year][genre];
                if (now_genre_influ_list.hasOwnProperty(input_genre) && genre != input_genre) {
                    if (now_influence_genres.hasOwnProperty(genre)) {
                        now_influence_genres[genre] += now_genre_influ_list[input_genre];
                    } else {
                        now_influence_genres[genre] = now_genre_influ_list[input_genre];
                    }
                }
            }
        }
    }
    // var now_artists_num = 0;
    var total_length = 0;
    for (var genre in now_influence_genres) {
        input_num = Math.pow(now_influence_genres[genre], scale_fact);
        new_part = {
            name: genre,
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series',
            },
            tooltip: {
                formatter: (v) => {
                    var orig = Math.round(Math.pow(v.data, 1 / scale_fact));
                    return `<b>${v.seriesName}:</b> ${orig}`;
                }
            },
            data: [input_num]
        };
        total_length += input_num;
        port_option["series"].push(new_part);
        // now_artists_num += 1;
        // if (now_artists_num >= show_artist_num) {
        //     break;
        // }
    }
    port_option["series"].sort(function(first, second) {
        return (second["data"][0] - first["data"][0]);
    });
    for (var i = 0; i < port_option["series"].length; i++) {
        now_port_name = port_option["series"][i]["name"];
        // if (now_port_name == "Stage & Screen") {
        //     now_port_name = "Stage&Screen";
        // }
        // if (now_port_name == "R&B;") {
        //     now_port_name = "R&B";
        // }
        now_port_colors.push(bar_color_dict[now_port_name]);
    }
    port_option.yAxis.max = total_length;
    port_option.color = now_port_colors;
    return port_option;
}

async function init_bar() {
    genre_colors = ['#e78b8b', '#e78ba8', '#e78bc5', '#e78be2', '#cf8be7', '#b28be7', '#948be7', '#8b9ee7', '#8bbbe7', '#8bd8e7', '#8be7d8', '#8be7bb', '#8be79e', '#94e78b', '#b2e78b', '#cfe78b', '#e7e28b', '#e7c58b', '#e7a88b'];
    await readCSV("./assets/data/music_portion.csv");
    portion_csv = window.__loaded_csv;
    await readJson("./assets/data/genre_artists_portion.json")
    artist_json_bar = window.__loaded_json;
    basic_select_genre = Array(19).fill(true);
    // basic_select_genre[0] = false
    port_opt = draw_bra(app.time_range[0], app.time_range[1], portion_csv, basic_select_genre, app.genre_colors);
    if (port_opt && typeof port_opt === 'object') {
        port_chart.setOption(port_opt);
    }
    port_chart.on("click", function(params) {
        genre = params.seriesName;
        app.inspecting_genre = genre;
        app.select_genre(genre);
    })
    app.bar_title = "All Genres";
}

function update_bar() {
    port_opt = draw_bra(app.time_range[0], app.time_range[1], portion_csv, app.using_genres, app.genre_colors);
    if (port_opt && typeof port_opt === 'object') {
        port_chart.setOption(port_opt, true);
    }
    port_chart.on("click", function(params) {
            genre = params.seriesName;
            app.inspecting_genre = genre;
            app.select_genre(genre);
        })
        // 根据app.using_genres制定bar title
    if (app.using_genres.indexOf(true) > -1) {
        if (app.using_genres.indexOf(false) > -1) {
            app.bar_title = "Selected genres";
        } else app.bar_title = "All genres";
    } else app.bar_title = "Nothing to show";
}

function update_artist_bar() {
    // 选中流派时使用
    opt = draw_artist_bar(app.time_range[0], app.time_range[1], artist_json_bar, app.inspecting_genre);
    if (opt && typeof opt === 'object') {
        port_chart.setOption(opt, true);
    }
    port_chart.on("click", function(params) {
        genre = params.seriesName;
        app.inspecting_genre = genre;
        app.select_genre(genre);
    })
    app.bar_title = "Genres Affected " + app.inspecting_genre;
}

function update_bar_for_artist() {
    // 为选中的音乐家更新流派
    let now_influence_genres = {}; // 修改后最终输入option的数据
    let now_genre_list;
    var total_length = 0;
    var now_port_colors = [];
    port_option = {
        color: now_port_colors,
        tooltip: {},
        animationDurationUpdate: 100,
        legend: {
            data: now_genre_list,
            show: false
        },
        grid: {
            left: '-10px',
            right: '-10px',
            bottom: '0%',
            top: '0%',
            containLabel: false
        },
        xAxis: {
            type: 'category',
            data: ['portion'],
            axisLabel: {
                show: false
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: false
            }
        },
        series: []
    };
    for (var i = 0; i < 19; i++) {
        input_num = Math.pow(app.influence_genres[i], scale_fact);
        new_part = {
            name: app.genres[i],
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series',
            },
            tooltip: {
                formatter: (v) => {
                    // console.log(v);
                    var orig = Math.round(Math.pow(v.data, 1 / scale_fact));
                    return `<b>${v.seriesName}:</b> ${orig}`;
                }
            },
            data: [input_num]
        };
        total_length += input_num;
        port_option["series"].push(new_part);
    }
    port_option["series"].sort(function(first, second) {
        return (second["data"][0] - first["data"][0]);
    });
    for (var i = 0; i < port_option["series"].length; i++) {
        now_port_colors.push(bar_color_dict[port_option["series"][i]["name"]]);
    }
    port_option.yAxis.max = total_length;
    port_option.color = now_port_colors;
    port_chart.setOption(port_option, true);
    port_chart.on("click", function(params) {
        genre = params.seriesName;
        // if (genre == "R&B") {
        //     genre = "R&B;";
        // }
        // if (genre == "Stage&Screen") {
        //     genre = "Stage & Screen";
        // }
        app.inspecting_genre = genre;
        app.inspecting_musician = "";
        app.select_genre(genre);
    })
    app.bar_title = "Genres Affected " + app.inspecting_musician;
}

function draw_full_bar() {
    // var bar_new_portion = JSON.parse(JSON.stringify(port_chart._model.option));
    var bar_new_portion = {
        color: now_port_colors,
        tooltip: {},
        animationDurationUpdate: 100,
        legend: {
            data: port_chart._model.option.legend[0].data,
            show: true
        },
        grid: {
            left: '-10px',
            right: '-10px',
            bottom: '0%',
            top: '0%',
            containLabel: false
        },
        xAxis: {
            type: 'category',
            data: ['portion'],
            axisLabel: {
                show: false
            },
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: false
            }
        },
        series: port_chart._model.option.series
    };
    console.log(bar_new_portion);
    full_bar_chart.setOption(bar_new_portion);
}