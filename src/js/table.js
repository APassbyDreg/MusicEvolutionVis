var table_dom = document.getElementById("table-main");
var table_chart = echarts.init(table_dom);
var attrs = ["danceability", "energy", "valence", "tempo", "loudness", "mode", "key", "acousticness", "instrumentalness", "liveness", "speechiness", "explicit", "duration_ms", "popularity"];
// 所有流派信息
var genres = ["Electronic", "R&B;", "Vocal", "Pop/Rock", "Religious", "Blues", "Country", "Jazz", "Latin", "New Age", "Folk", "International", "Reggae", "Comedy/Spoken", "Easy Listening", "Classical", "Avant-Garde", "Stage & Screen", "Children's", "Unknown"];
// 表格坐标轴尺度
var table_yrange = 11;   // 纵列的刻度，即分成几格
var table_xrange = attrs.length;

var i = 0;
var table_arr = new Array(table_yrange)

// 表格数据
var full_table_data;    // 百年所有数据，不分流派
var full_table_data_genre;  // 按年统计，按流派分类的数据
var table_data = new Array(table_xrange*table_yrange);; //这个是直接给table用的数据，[纵坐标，横坐标，值]
var table_mode = 'Attrs'; // 标记表格类型，是'Attrs'属性图，还是单一属性'Timeline'
var table_attr; //标记年趋势视图下是哪个属性信息
// 表格数据起止年份
var table_start = 1921;
var table_end = 2021;

// 选择的流派
var table_genres = new Array(genres.length).fill(true);

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
    },
};

// 表格数据初始化
async function init_table(){
    app.title = "好短"
    table_start = app.time_range[0];
    table_end = app.time_range[1];
    table_xrange = attrs.length;
    await readJson("./assets/data/attr_by_year_for_table.json")
    full_table_data = window.__loaded_json;
    await readJson("./assets/data/attr_by_year_with_genre.json")
    full_table_data_genre = window.__loaded_json;
    for (i = 0; i < table_xrange; i++){
        for (j = 0; j < table_yrange; j++){
            table_data[i*table_yrange+j] = [i, j, 0];
        }
    }
    for (i = table_start; i < table_end; i++){
        if (full_table_data[i+""]){
            for (k = 0; k < table_xrange; k++){
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
        },
    }]
    var col3 = table_data.map(function(value,index) { return value[2]; });
    table_option.series = series;
    table_option.visualMap.max = Math.max.apply(null, col3);
    table_option.xAxis.data = attrs;
    table_option.xAxis.axisLabel.interval = '0';
    table_chart.setOption(table_option);
    table_chart.on("click", function(params) {
        app.inspecting_attr = params.data[0];
        change_table_attr(params.data[0]);
    })
}

// 每次更改时间区间或者流派信息时候更改表格数据
function update_table(){
    // 更新选择的流派、模式
    table_mode = app.table_mode_list[app.table_mode];
    if (app.inspecting_genre){
        var tmp_genres = new Array(table_genres.length).fill(false)
        var idx = genres.findIndex(value=>value == app.inspecting_genre)
        tmp_genres[idx] = true;
        table_genres = tmp_genres;
    }else{
        table_genres = app.using_genres;
    }
    // 更新时间区间
    table_start = app.time_range[0];
    table_end = app.time_range[1];
    
    // 重新计算区间内的数值
    if (table_mode == 'Attrs'){
        // 对数值进行清零
        table_xrange = attrs.length;
        for (i = 0; i < table_xrange; i++){
            for (j = 0; j < table_yrange; j++){
                table_data[i*table_yrange+j][2] = 0;
            }
        }
        for (i = table_start; i <= table_end; i++){
            if (full_table_data_genre[i+""]){
                // 统计流派信息
                for (var ii=0; ii < genres.length; ii++){
                    if (table_genres[ii]){
                        genre = genres[ii]
                        for (k = 0; k < table_xrange; k++){
                            for (j = 0; j < table_yrange; j++){
                                table_data[k*table_yrange+j][2] += full_table_data_genre[i+""][genre][attrs[k]][j];
                            }
                        }    
                    }
                }
            }
        }
        table_option.xAxis.data = attrs;
        table_option.xAxis.axisLabel.interval = '0';
        app.title = "好短"
    }else if (table_mode == 'Timeline'){
        var year_range = table_end - table_start;
        table_xrange = year_range;
        table_data = new Array(table_xrange*table_yrange);
        for (i = 0; i < table_xrange; i++){
            for (j = 0; j < table_yrange; j++){
                table_data[i*table_yrange+j] = [i, j, 0];
            }
        }
        var table_year = new Array(year_range);
        table_attr = attrs[app.inspecting_attr];
        for (i = 0; i < year_range; i++){
            year_i = table_start+i;
            table_year[i] = year_i+"";
            if (full_table_data_genre[year_i+""]){
                for (var ii = 0; ii < genres.length; ii++){
                    if(table_genres[ii]){
                        genre = genres[ii]
                        for (j = 0; j < table_yrange; j++){
                            table_data[i*table_yrange+j][2] += full_table_data_genre[year_i+""][genre][table_attr+""][j];
                        }
                    }
                }
            }
        }
        table_option.xAxis.data = table_year;
        table_option.xAxis.axisLabel.interval = '1';
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
    var col3 = table_data.map(function(value,index) { return value[2]; });
    table_option.series = series;
    table_option.visualMap.max = Math.max.apply(null, col3);
    table_chart.setOption(table_option);
    table_chart.on("click", function(params) {
        app.inspecting_attr = params.data[0];
        change_table_attr();
    })
}

function change_table_attr(){
    var param_idx = app.inspecting_attr;
    table_attr = attrs[param_idx];
    app.inspecting_attr = param_idx;
    app.table_mode = 1
    app.title = table_attr;
    table_mode = 'Timeline';
    var year_range = table_end-table_start;
    table_xrange = year_range;
    table_data = new Array(table_xrange*table_yrange);
    for (i = 0; i < table_xrange; i++){
        for (j = 0; j < table_yrange; j++){
            table_data[i*table_yrange+j] = [i, j, 0];
        }
    }
    var table_year = new Array(year_range);
    for (i = 0; i < year_range; i++){
        year_i = table_start+i;
        table_year[i] = year_i+"";
        if (full_table_data_genre[year_i+""]){
            for (var ii = 0; ii < genres.length; ii++){
                if(table_genres[ii]){
                    genre = genres[ii]
                    for (j = 0; j < table_yrange; j++){
                        table_data[i*table_yrange+j][2] += full_table_data_genre[year_i+""][genre][table_attr+""][j];
                    }
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
    var col3 = table_data.map(function(value,index) { return value[2]; });
    table_option.series = series;
    table_option.visualMap.max = Math.max.apply(null, col3);
    table_option.xAxis.data = table_year;
    table_option.xAxis.axisLabel.interval = '1';
    table_chart.setOption(table_option);
    table_chart.off("click");
}