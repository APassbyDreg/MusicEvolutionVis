var port_part = document.getElementById("graph-bar");
var my_chart = echarts.init(port_part);

var portion_csv;
var genre_list = ["Electronic", "R&B", "Vocal", "Pop/Rock", "Religious", "Blues", "Country", "Jazz", "Latin", "New Age", "Folk", "International", "Reggae", "Comedy/Spoken", "Easy Listening", "Classical", "Avant-Garde", "Stage & Screen", "Children's"];

function draw_bra(start, end, portion_csv) {
    port_option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: genre_list,
            show: false
        },
        grid: {
            left: '-5%',
            right: '-5%',
            bottom: '0%',
            top: '-8%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ['portion'],
            axisLabel: {
                show: false
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                show: false
            }
        },
        series: []
    };
    for (var i = 0; i < genre_list.length; i++) {
        var sum_num = 0;
        for (var j = start - 1920; j <= end - 1920; j++) {
            sum_num += 1;
            // sum_num += portion_csv[i+1][j];
            // bug is here
        }
        new_part = {
            name: genre_list[i],
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [sum_num]
        };
        port_option["series"].push(new_part);
    }
    return port_option;
}

async function init_bar() {
    await readCSV("./assets/data/music_portion.csv");
    portion_csv = window.__loaded_csv;
    port_opt = draw_bra(1921, 2020, portion_csv);
    if (port_opt && typeof port_opt === 'object') {
        my_chart.setOption(port_opt);
    }
}