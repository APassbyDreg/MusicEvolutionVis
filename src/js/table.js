var table_dom = document.getElementById("table-main");
var table_chart = echarts.init(table_dom);

// 生成纵列degree
var table_grids = 11;   // 纵列的刻度，即分成几格
var table_arr = new Array(table_grids);
for (var i = 0; i < table_arr.length; i++) {
    table_arr[i]=i-5+"";
};
var degree = table_arr;
// 生成横列（属性）
var attrs = ["danceability", "energy", "valence", "tempo", "loudness", "mode", "key", "acousticness", "instrumentalness", "liveness", "speechiness", "explicit", "duration_ms", "popularity"];
var genres = ["Electronic", "R&B;", "Vocal", "Pop/Rock", "Religious", "Blues", "Country", "Jazz", "Latin", "New Age", "Folk", "International", "Reggae", "Comedy/Spoken", "Easy Listening", "Classical", "Avant-Garde", "Stage & Screen", "Children's", "Unknown"];
// 表格数据
var full_table_data;
var full_table_data_genre;
var table_data = new Array(attrs.length*table_grids); //这个是直接给table用的数据，[纵坐标，横坐标，值]

// 表格数据起止年份
var table_start = 1921;
var table_end = 2021;

// 用于确定表格内数据的尺度
var table_range_cnt = 0;  //用于统计该区间内的乐曲数量

var table_color = ['#e6cda8', '#de8c5c', '#f3772e', '#ee6666', '#ca3535'];
// 表格的样式的设置
var table_option = {
    gradientColor: table_color,
    tooltip: {
        position: 'bottom'
    },
    grid: {
        height: '85%',
        top: '11%'
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
            rotate: 345,
        }
    },
    yAxis: {
        type: 'category',
        data: degree,
        splitArea: {
            show: true
        }
    },
    visualMap: {
        min: 0,
        max: 98340,
        calculable: true,
        left: 'right',
        bottom: 'center',
        itemHeight: '200%',
        itemWidth: '30%',
        text: ['High', 'Low'],
    },
    series: [{
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

// 读取表格数据, 目前的是三元组[横坐标，纵坐标，值]，后续还要处理一下文件。
// 目前我统计在了"attr_by_year_for_table.json"中，里面统计了每年的各个attr，
// 每个属性都被分成了table_grids份，代表从低到高的table_grids个区间内的分布
async function init_table(){
    await readJson("./assets/data/attr_by_year_for_table.json")
    full_table_data = window.__loaded_json;
    await readJson("./assets/data/attr_by_year_with_genre.json")
    full_table_data_genre = window.__loaded_json;
    for (i = 0; i < attrs.length; i++){
        for (j = 0; j < table_grids; j++){
            table_data[i*table_grids+j] = [i, j, 0];
        }
    }
    table_range_cnt = 0;
    for (i = table_start; i < table_end; i++){
        if (full_table_data[i+""] != undefined){
            table_range_cnt += full_table_data[i+""]["cnt"];
            for (k = 0; k < attrs.length; k++){
                for (j = 0; j < table_grids; j++){
                    table_data[k*table_grids+j][2] += full_table_data[i+""][attrs[k]][j];
                }
            }
        }
     }
    table_option.series.data = table_data;
    table_option.visualMap.max = table_range_cnt;
    if (table_option && typeof table_option === 'object') {
        table_chart.setOption(table_option);
    }
}

// 每次更改区间时候更改表格数据
function update_table(start, end, selected_genre){
    table_start = start;
    table_end = end;
    // 对数值进行清零
    for (i = 0; i < attrs.length; i++){
        for (j = 0; j < table_grids; j++){
            table_data[i*table_grids+j][2] = 0;
        }
    }
    // 重新计算区间内的数值
    table_range_cnt = 0;
    for (i = table_start; i <= table_end; i++){
        if (full_table_data_genre[i+""] != undefined){
            for (var ii=0; ii < genres.length; ii++){
                if (selected_genre[ii]){
                    genre = genres[ii]
                    table_range_cnt += full_table_data_genre[i+""][genre]["cnt"]
                    for (k = 0; k < attrs.length; k++){
                        for (j = 0; j < table_grids; j++){
                            table_data[k*table_grids+j][2] += full_table_data_genre[i+""][genre][attrs[k]][j];
                        }
                    }    
                }
            }
        }
    }
    table_option.series.data = table_data;
    table_option.visualMap.max = table_range_cnt;
    if (table_option && typeof table_option === 'object') {
        table_chart.setOption(table_option);
    }
}

if (table_option && typeof table_option === 'object') {
    table_chart.setOption(table_option);
}
