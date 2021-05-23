var port_part = document.getElementById("graph-bar");
var port_chart = echarts.init(port_part);

var portion_csv;
var genre_list = ["Electronic", "R&B", "Vocal", "Pop/Rock", "Religious", "Blues", "Country", "Jazz", "Latin", "New Age", "Folk", "International", "Reggae", "Comedy/Spoken", "Easy Listening", "Classical", "Avant-Garde", "Stage & Screen", "Children's"];

function draw_bra(start, end, portion_csv) {
    port_option = {
        tooltip: {
            // trigger: 'axis',
            // axisPointer: {
            //     type: 'shadow'
            // }
        },
        legend: {
            data: genre_list,
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
            // sum_num += 1;
            var trans_num = parseInt(portion_csv[j][i + 1]);
            sum_num += trans_num;
            // bug is here
        }
        // scale sum_numto avoid thin lines
        sum_num = Math.pow(sum_num, 0.4);
        total += sum_num;
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
    port_option.yAxis.max = total;
    return port_option;
}

async function init_bar() {
    await readCSV("./assets/data/music_portion.csv");
    portion_csv = window.__loaded_csv;
    port_opt = draw_bra(1921, 2020, portion_csv);
    if (port_opt && typeof port_opt === 'object') {
        port_chart.setOption(port_opt);
    }
}

function update_bar(start, end) {
    port_opt = draw_bra(start, end, portion_csv);
    if (port_opt && typeof port_opt === 'object') {
        port_chart.setOption(port_opt);
    }
}