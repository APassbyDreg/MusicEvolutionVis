const scale_fact = 0.4;

var port_part = document.getElementById("graph-bar");
var port_chart = echarts.init(port_part);

var portion_csv;
var artist_json_bar; // 用于绘制音乐家portion
var genre_list = ["Electronic", "R&B", "Vocal", "Pop/Rock", "Religious", "Blues", "Country", "Jazz", "Latin", "New Age", "Folk", "International", "Reggae", "Comedy/Spoken", "Easy Listening", "Classical", "Avant-Garde", "Stage & Screen", "Children's"];
// var now_genre_list = genre_list.concat();

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
            // console.log(now_genre_list);
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
                    // console.log(v);
                    var orig = Math.round(Math.pow(v.data, 1 / scale_fact));
                    return `<b>${v.seriesName}:</b> ${orig}`;
                }
            },
            data: [sum_num]
        };
        genre_flag = select_genre[i];
        // console.log(genre_flag);
        if (genre_flag == true) {
            port_option["series"].push(new_part);
            total += sum_num;
        }
    }
    port_option.yAxis.max = total;
    return port_option;
}

function draw_artist_bar(start, end, port_json, input_genre) {
    port_option = {
        color: now_port_colors,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['test'],
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
        series: [new_part = {
            name: 'test',
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
            data: [10]
        }]
    };
    return port_option;
}

async function init_bar() {
    genre_colors = ['#e78b8b', '#e78ba8', '#e78bc5', '#e78be2', '#cf8be7', '#b28be7', '#948be7', '#8b9ee7', '#8bbbe7', '#8bd8e7', '#8be7d8', '#8be7bb', '#8be79e', '#94e78b', '#b2e78b', '#cfe78b', '#e7e28b', '#e7c58b', '#e7a88b'];
    await readCSV("./assets/data/music_portion.csv");
    portion_csv = window.__loaded_csv;
    basic_select_genre = Array(19).fill(true);
    // basic_select_genre[0] = false
    port_opt = draw_bra(1921, 2020, portion_csv, basic_select_genre, genre_colors);
    if (port_opt && typeof port_opt === 'object') {
        port_chart.setOption(port_opt);
    }
}

function update_bar(start, end, select_genre, color_list) {
    console.log(select_genre);
    port_opt = draw_bra(start, end, portion_csv, select_genre, color_list);
    console.log(port_opt);
    if (port_opt && typeof port_opt === 'object') {
        port_chart.setOption(port_opt, true);
    }
}

function update_artist_bar(start, end, select_genre) {
    opt = draw_artist_bar(start, end, artist_json_bar, select_genre);
    if (opt && typeof opt === 'object') {
        port_chart.setOption(opt, true);
    }
}