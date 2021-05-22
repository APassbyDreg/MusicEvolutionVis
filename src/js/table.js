var table_dom = document.getElementById("table-main");
var table_myChart = echarts.init(table_dom);

var table_option;

// 生成纵列degree
var table_grids = 11;
var table_arr = new Array(table_grids);
for (var i = 0; i < table_arr.length; i++) {
    table_arr[i]=i-5+"";
};
var degree = table_arr;
// 生成横列（属性）
var attrs = ["danceability", "energy", "valence", "tempo", "loudness", "mode", "key", "acousticness", "instrumentalness", "liveness", "speechiness", "explicit", "duration_ms", "popularity"];

var full_table_data;
var table_data = new Array(attrs.length*table_grids);

// 读取表格数据, 目前的是三元组[横坐标，纵坐标，值]，后续还要处理一下文件。
// 目前我统计在了"attr_by_year_for_table.json"中，里面统计了每年的各个attr，每个属性都被分成了table_grids份，代表从低到高的table_grids个区间内的分布

table_option = {
    tooltip: {
        position: 'center'
    },
    grid: {
        height: '85%',
        top: 'center'
    },
    xAxis: {
        type: 'category',
        data: attrs,
        position: 'top',
        splitArea: {
            show: true
        },
        axisTick: {
            show: false
        },
        axisLabel: {
            show: true,
            interval: '0',
            margin: 3,
            rotate: 330
        }
    },
    yAxis: {
        type: 'category',
        data: degree,
        splitArea: {
            show: true
        }
    },
    // 这也是个可以选区间的控件，不知道要不要留。是根据值得大小来筛选的
    visualMap: {
        min: 0,
        max: 100000,
        calculable: true,
        left: 'right',
        bottom: 'center'
    },
    series: [{
        // name: 'Punch Card',
        type: 'heatmap',
        data: table_data,
        label: {
            show: true
        },
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
};

async function init_table(url){
    await readJson("./assets/data/attr_by_year_for_table.json")
    full_table_data = window.__loaded_json;
    for (i = 0; i < attrs.length; i++){
        for (j = 0; j < table_grids; j++){
            table_data[i*table_grids+j] = [i, j, 0];
        }
    }
    for (i = 1921; i < 2021; i++){
        if (full_table_data[i+""] == undefined) continue;
        for (k = 0; k < attrs.length; k++){
            for (j = 0; j < table_grids; j++){
                 table_data[k*table_grids+j][2] += full_table_data[i+""][attrs[k]][j];
            }
        }
    }
    table_option.series.data = table_data;
    if (table_option && typeof table_option === 'object') {
        table_myChart.setOption(table_option);
    }
    // table_data = table_data.map(function (item) {
    //     return [item[1], item[0], item[2]];
    // });
    console.log(table_data)
}


function update_table(start, end){
    // console.log(start, end);
    for (i = 0; i < attrs.length; i++){
        for (j = 0; j < table_grids; j++){
            table_data[i*table_grids+j][2] = 0;
        }
    }
    for (i = start; i <= end; i++){
        if (full_table_data[i+""] == undefined) continue;
        for (k = 0; k < attrs.length; k++){
            for (j = 0; j < table_grids; j++){
                table_data[k*table_grids+j][2] += full_table_data[i+""][attrs[k]][j];
            }
        }
    }
    table_option.series.data = table_data;
    if (table_option && typeof table_option === 'object') {
        table_myChart.setOption(table_option);
    }
    // table_data = table_data.map(function (item) {
    //     return [item[1], item[0], item[2] || '-'];
    // });
}

if (table_option && typeof table_option === 'object') {
    table_myChart.setOption(table_option);
}
