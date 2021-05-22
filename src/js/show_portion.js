var port_part = document.getElementById("graph-bar");
var my_chart = echarts.init(port_part);

var portion_csv;
var genre_list;
var now_start_time;
var now_end_time;

async function init_page_1() {
    // example code
    await readCSV("./assets/data/music_portion.csv");
    // console.log(window.__loaded_csv[0]);
    portion_csv = window.__loaded_csv;
    genre_list = portion_csv[0];
    // console.log(portion_csv);
}
window.onload = init_page_1;

port_option = {
    color: ["#5470c6", "#91cc75", "#fac858"],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Direct', 'Mail Ad', 'Affiliate Ad', 'Video Ad', 'Search Engine'],
        // selectorLabel: {
        //     show: false
        // },
        // emphasis: {
        //     selectorLabel: {
        //         show: false
        //     }
        // }
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
    series: [{
            name: 'Direct',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [320]
        },
        {
            name: 'Mail Ad',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [120]
        },
        {
            name: 'Affiliate Ad',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [220]
        },
        {
            name: 'Video Ad',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [150]
        },
        {
            name: 'Search Engine',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [120]
        }
    ]
};
if (port_option && typeof port_option === 'object') {
    my_chart.setOption(port_option);
}

// function portion_time_change() {
//     now_start_time = app.$data.time_range[0];
//     now_end_time = app.$data.time_range[1];
// }

// let app_portion = {
//     data() {
//         return {
//             year_range: [1921, 2020],
//             start_year = 1921,
//             end_year = 2020,
//         }
//     }
// }