var table_dom = document.getElementById("table-main");
var table_chart = echarts.init(table_dom);
var attrs = ["danceability", "energy", "valence", "tempo", "loudness", "mode", "key", "acousticness", "instrumentalness", "liveness", "speechiness", "explicit", "duration_ms", "popularity"];
// 所有流派信息
var genres = ["Electronic", "R&B;", "Vocal", "Pop/Rock", "Religious", "Blues", "Country", "Jazz", "Latin", "New Age", "Folk", "International", "Reggae", "Comedy/Spoken", "Easy Listening", "Classical", "Avant-Garde", "Stage & Screen", "Children's", "Unknown"];
// 表格坐标轴尺度
var table_yrange = 11;   // 纵列的刻度，即分成几格
var table_xrange = attrs.length;

var i = 0
var table_arr = new Array(table_yrange)

// 表格数据
var full_table_data;    // 百年所有数据，不分流派
var full_table_data_genre;  // 按年统计，按流派分类的数据
var table_data; //这个是直接给table用的数据，[纵坐标，横坐标，值]
table_data = new Array(table_xrange*table_yrange);
var table_mode = 'all'; // 标记表格类型，是'all'属性图，还是单一属性'year_trend'
var table_attr; //标记年趋势视图下是哪个属性信息
// 表格数据起止年份
var table_start = 1921;
var table_end = 2021;

// 选择的流派
var table_genres = new Array(genres.length).fill(true);

// 用于确定表格内数据的尺度
var table_range_cnt = 0;  //用于统计该区间内的乐曲数量

var table_color = ['#e6cda8', '#de8c5c', '#f3772e', '#ee6666', '#ca3535'];
// var table_color = [bright_color, mid_color, dark_color]
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
        data: table_arr,
        axisLabel: {
            show: false,
        },
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
    }
};

// 表格数据初始化
async function init_table(){
    await readJson("./assets/data/attr_by_year_for_table.json")
    full_table_data = window.__loaded_json;
    await readJson("./assets/data/attr_by_year_with_genre.json")
    full_table_data_genre = window.__loaded_json;
    for (i = 0; i < attrs.length; i++){
        for (j = 0; j < table_yrange; j++){
            table_data[i*table_yrange+j] = [i, j, 0];
        }
    }
    table_range_cnt = 0;
    for (i = table_start; i < table_end; i++){
        if (full_table_data[i+""]){
            table_range_cnt += full_table_data[i+""]["cnt"];
            for (k = 0; k < attrs.length; k++){
                for (j = 0; j < table_yrange; j++){
                    table_data[k*table_yrange+j][2] += full_table_data[i+""][attrs[k]][j];
                }
            }
        }
    }
    var series = [{
        type: 'heatmap',
        data: table_data,
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
    table_option.series = series;
    table_option.visualMap.max = table_range_cnt;
    table_chart.setOption(table_option);
    table_chart.on("click", function(params) {
        var attr = attrs[params.data[0]];
        change_table_attr(table_start, table_end, attr);
    })
}

// 每次更改时间区间或者流派信息时候更改表格数据
function update_table(start, end, selected_genres){
    if (app.inspecting_genre){
        console.log(selected_genres)
        var idx = genres.findIndex(value=>value == app.inspecting_genre)
        for (i = 0; i < selected_genres.length; i++){
            selected_genres[i] = false;
        }
        selected_genres[idx] = true;
    }
    // 更新选择的流派
    table_genres = selected_genres;
    // 更新时间区间
    table_start = start;
    table_end = end;
    // 对数值进行清零
    for (i = 0; i < attrs.length; i++){
        for (j = 0; j < table_yrange; j++){
            table_data[i*table_yrange+j][2] = 0;
        }
    }
    // 重新计算区间内的数值
    if (table_mode == 'all'){
        table_range_cnt = 0;
        for (i = table_start; i <= table_end; i++){
            if (full_table_data_genre[i+""]){
                // 统计流派信息
                for (var ii=0; ii < genres.length; ii++){
                    if (table_genres[ii]){
                        genre = genres[ii]
                        table_range_cnt += full_table_data_genre[i+""][genre]["cnt"];
                        for (k = 0; k < attrs.length; k++){
                            for (j = 0; j < table_yrange; j++){
                                table_data[k*table_yrange+j][2] += full_table_data_genre[i+""][genre][attrs[k]][j];
                            }
                        }    
                    }
                }
            }
        }    
    }else if (table_mode == 'year_trend'){
        var year_range = table_end - table_start;
        var table_year = new Array(year_range);
        table_range_cnt = 0;
        for (i = 0; i < year_range; i++){
            year_i = start+i;
            table_year[i] = year_i+"";
            var year_cnt = 0
            if (full_table_data_genre[year_i+""]){
                for (var ii = 0; ii < genres.length; ii++){
                    if(table_genres[ii]){
                        genre = genres[ii]
                        year_cnt += full_table_data_genre[year_i+""][genre]["cnt"];
                        for (j = 0; j < table_yrange; j++){
                            table_data[i*table_yrange+j][2] += full_table_data_genre[year_i+""][genre][table_attr+""][j];
                        }
                    }
                }
            }
            table_range_cnt = Math.max(table_range_cnt, year_cnt);
        }
        table_option.xAxis.data = table_year;
    }
    
    // 更新数据域
    var series = [{
        type: 'heatmap',
        data: table_data,
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
    table_option.series = series;
    table_option.visualMap.max = table_range_cnt;
    table_chart.setOption(table_option);
    table_chart.on("click", function(params) {
        var attr = attrs[params.data[0]];
        change_table_attr(table_start, table_end, attr);
    })
}

function change_table_attr(start, end, attr){
    table_attr = attr;
    table_mode = 'year_trend';
    var year_range = end-start;
    table_xrange = year_range;
    table_data = new Array(table_xrange*table_yrange);
    for (i = 0; i < table_xrange; i++){
        for (j = 0; j < table_yrange; j++){
            table_data[i*table_yrange+j] = [i, j, 0];
        }
    }
    var table_year = new Array(year_range);
    table_range_cnt = 0;
    for (i = 0; i < year_range; i++){
        year_i = start+i;
        table_year[i] = year_i+"";
        var year_cnt = 0
        if (full_table_data_genre[year_i+""]){
            for (var ii = 0; ii < genres.length; ii++){
                if(table_genres[ii]){
                    genre = genres[ii]
                    year_cnt += full_table_data_genre[year_i+""][genre]["cnt"];
                    for (j = 0; j < table_yrange; j++){
                        table_data[i*table_yrange+j][2] += full_table_data_genre[year_i+""][genre][attr+""][j];
                    }
                }
            }
        }
        table_range_cnt = Math.max(table_range_cnt, year_cnt);
    }
    var series = [{
        type: 'heatmap',
        data: table_data,
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }]
    table_option.series = series;
    table_option.visualMap.max = table_range_cnt;
    table_option.xAxis.data = table_year;
    table_option.xAxis.axisLabel.interval = '1';
    table_chart.setOption(table_option);
    table_chart.off("click");
}