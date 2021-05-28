var graph_dom = document.getElementById("graph-main");
var graph_chart = echarts.init(graph_dom);
var graph_mode = "Outgoing";

// 按艺术家划分图
function set_in_graph_opt() {
    var start = app.time_range[0];
    start = parseInt(start / 10) * 10;
    var end = app.time_range[1];
    end = (parseInt(end / 10) + 1) * 10;
    var genre = app.inspecting_genre;
    var inspecting_musician = app.inspecting_musician;

    var graph_option;
    var node_dict = {};
    var artist_id_dict = {};
    var artist_id = 0;
    var max_num = 20;
    var cate_set = new Set();

    for (year in artist_influence_data) {
        if (year < start || year > end) continue;
        influence_map = artist_influence_data[year][genre];
        for (artist in influence_map) {
            cate_set.add({ name: artist });
            if (artist_id_dict[artist] == undefined) {
                artist_id_dict[artist] = artist_id.toString();
                artist_id += 1
            }
            if (node_dict[artist] == undefined) {
                var artist_map = {
                    id: artist_id_dict[artist],
                    name: artist,
                    value: influence_map[artist].length,
                    start: start,
                    end: end,
                    category: artist,
                    symbolSize: 10,
                }
                node_dict[artist] = artist_map;
            } else {
                node_dict[artist].value += influence_map[artist].length;
            }

            influence_map[artist].forEach(element => {
                cate_set.add({ name: artist });
                if (artist_id_dict[element] == undefined) {
                    artist_id_dict[element] = artist_id.toString();
                    artist_id += 1;
                }
                // link_set.add({source: artist_id_dict[artist], target: artist_id_dict[element]});
            });
        }
    }

    var node_data_tmp = new Array();
    var max_value = 0
    for (key in node_dict) {
        var n = node_dict[key];
        if (n.value > max_value) max_value = n.value;
        var size = n.value;
        if (size < 15) size = 15;
        if (size > 60) size = 60;
        n.symbolSize = size;
        node_data_tmp.push(n);
    }
    node_data_tmp.sort(function(a, b) {
        return b.value - a.value;
    });
    var node_data = node_data_tmp.splice(0, max_num);
    var categ_data = Array.from(cate_set)
    var force = (max_value / 10 > 10) ? 10 : max_value / 10;
    // console.log(node_data);

    var link_set = new Set();
    for (year in artist_influence_data) {
        influence_map = artist_influence_data[year][genre];
        if (year < start || year > end) continue;
        for (artist in influence_map) {
            if (node_data.find(function(node) { return (artist == node.name) })) {
                influence_map[artist].forEach(function(element) {
                    if (node_data.find(function(node) { return (element == node.name) })) {
                        link_set.add({ source: artist_id_dict[artist], target: artist_id_dict[element] });
                    }
                })
            }
        }
    }
    var link_data = Array.from(link_set);
    // console.log(node_data);
    // console.log(link_data);

    var graph = { nodes: node_data, links: link_data, categories: categ_data };
    graph_option = {
        tooltip: {},
        series: [{
            type: 'graph',
            layout: 'force',
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            label: {
                show: true,
                position: 'right',
                formatter: '{b}'
            },
            lineStyle: {
                color: "source",
                curveness: 0.4
            },
            force: {
                repulsion: force * 200
            },
            emphasis: {
                focus: 'adjacency',
                blurScope: 'coordinateSystem'
            },
            draggable: true,
            edgeSymbol: ['none', 'arrow'], // 边的样式
            edgeSymbolSize: 10,
        }]
    };
    
    graph_chart.clear();
    graph_chart.setOption(graph_option);
    graph_chart.off("click");
};

// 按流派划分图
function set_out_graph_opt() {
    var start = app.time_range[0];
    start = parseInt(start / 10) * 10;
    var end = app.time_range[1];
    end = (parseInt(end / 10) + 1) * 10;
    var using_genres = app.using_genres;

    var graph_option;
    var ori_cate_data = ["Electronic", "R&B;", "Vocal", "Pop/Rock", "Religious", "Blues", "Country", "Jazz", "Latin", "New Age", "Folk", "International", "Reggae", "Comedy/Spoken", "Easy Listening", "Classical", "Avant-Garde", "Stage & Screen", "Children's"];
    cate_data = ori_cate_data.map(function(cate) {
        return { name: cate };
    });

    // 初始化node,link数据
    var node_data = new Array();
    var link_data = new Array();
    for (var i = 0; i < cate_data.length; i++) {
        node = {
            id: i,
            name: cate_data[i].name,
            category: i,
            symbolSize: 20,
            value: 0,
            start: start,
            end: end
        }
        node_data.push(node)
    }

    var max_value = 0;
    var min_value = 9999;
    // node data
    for (var key in portion_influence_data) {
        if (Number(key) < start || Number(key) > end) {
            continue;
        }
        year_data = portion_influence_data[key];
        for (var i = 0; i < ori_cate_data.length; i++) {
            if (!using_genres[i]) continue;
            var cate = ori_cate_data[i];
            if (year_data[cate] == undefined) {
                continue;
            }
            var portion_data = year_data[cate];
            var node_value = 0;
            for (var j = 0; j < ori_cate_data.length; j++) {
                if (i == j || portion_data[ori_cate_data[j]] == undefined) {
                    continue;
                }
                if (!using_genres[j]) continue;
                node_value += portion_data[ori_cate_data[j]];
            }
            node_data[i]["value"] = node_data[i]["value"] + node_value;
            if (node_value > max_value) {
                max_value = node_value;
            } else if (node_value != 0 && node_value < min_value) {
                min_value = node_value;
            }
        }
    }

    for (var i = 0; i < ori_cate_data.length; i++) {
        var size = 40 * (1.0 * (node_data[i]["value"] - min_value)) / (max_value - min_value)
        if (size < 20) {
            size = 20;
        }
        node_data[i]["symbolSize"] = size;
    }
    // console.log(node_data);
    // link data
    for (var i = 0; i < ori_cate_data.length; i++) {
        if (!using_genres[i]) continue;
        var src_cate = ori_cate_data[i];
        for (var j = 0; j < ori_cate_data.length; j++) {
            if (i == j || !using_genres[j]) continue;
            var value = 0;
            var tar_cate = ori_cate_data[j];
            for (var key in portion_influence_data) {
                if (Number(key) < start || Number(key) > end) {
                    continue;
                }
                year_data = portion_influence_data[key];
                if (year_data[src_cate] == undefined) continue;

                portion_data = year_data[src_cate];
                if (portion_data[tar_cate] == undefined) continue;

                value += portion_data[tar_cate];
            }
            if (value == 0) continue;
            // value = Math.ceil(value / 10)
            size = value / 25;
            if (size > 8) size = 8;
            if (size < 1) size = 1
            curve = (i < j) ? 0.2 : 0.5;
            link_data.push({
                source: String(i),
                target: String(j),
                value: value,
                lineStyle: {
                    width: size,
                    curveness: curve
                }
            });
        }
    }
    // console.log(link_data);

    var graph = { nodes: node_data, links: link_data, categories: cate_data }
    graph_option = {
        tooltip: {},
        series: [{
            type: 'graph',
            layout: 'circular',
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            circular: {
                rotateLabel: true
            },
            label: {
                show: true,
                position: 'right',
                formatter: '{b}'
            },
            lineStyle: {
                color: "source"
            },
            // 高亮
            emphasis: {
                focus: 'adjacency',
                blurScope: 'coordinateSystem'
            },
            draggable: true,
            edgeSymbol: ['none', 'arrow'], // 边的样式
            edgeSymbolSize: 15,
        }]
    };
    graph_chart.clear();
    graph_chart.setOption(graph_option);
    graph_chart.on("click", function(params) {
        genre = params.data.name;
        app.inspecting_genre = genre;
        // set_in_graph_opt(app.time_range[0], app.time_range[1], genre);
        app.select_genre(genre);
    })
};

function set_sunburst_graph_opt() {
    var start = app.time_range[0];
    start = parseInt(start / 10) * 10;
    var end = app.time_range[1];
    end = (parseInt(end / 10) + 1) * 10;
    var center_musision = app.inspecting_musician;
    var center_genre = app.inspecting_genre;

    var ori_cate_data = ["Electronic", "R&B;", "Vocal", "Pop/Rock", "Religious", "Blues", "Country", "Jazz", "Latin", "New Age", "Folk", "International", "Reggae", "Comedy/Spoken", "Easy Listening", "Classical", "Avant-Garde", "Stage & Screen", "Children's"];
    cate_data = ori_cate_data.map(function(cate) {
        return { name: cate };
    });

    var node_data = [
        {
            id: 0, 
            name: center_musision, 
            category: center_genre,
            symbolSize: 70,
            itemStyle: {
                borderWidth: 5,
                borderColor: "rgba(107, 72, 247, 1)"
            },
            symbol: "diamond"
        }
    ]

    var center_musision_data = artist_influence_danmaku_data[center_musision];
    console.log(center_musision_data);
    
    var influence_list = []
    var influence_by_list = []
    var id_cnt = 1

    for (year in center_musision_data) {
        if (year < start || year > end) continue;
        var year_data = center_musision_data[year];
        
        for (genre in year_data["influence"]) {
            year_data["influence"][genre].forEach(function(artist) {
                influence_list.push({
                    id: id_cnt,
                    name: artist, 
                    category: genre, 
                    value: artist_influence_value_data[artist]
                });
                id_cnt += 1;
            })
        }

        for (genre in year_data["influence_by"]) {
            year_data["influence_by"][genre].forEach(function(artist) {
                influence_by_list.push({
                    id: id_cnt,
                    name: artist, 
                    category: genre, 
                    value: artist_influence_value_data[artist]
                });
                id_cnt += 1;
            })
        }
    }

    influence_list.sort(function(a, b) {
        return (b.value - a.value)
    })
    influence_list = influence_list.splice(0,10);
    influence_by_list.sort(function(a, b) {
        return (b.value - a.value)
    })
    influence_by_list = influence_by_list.splice(0,10);
    console.log(influence_list);
    console.log(influence_by_list);

    var link_data = [];
    var sorted_value = [];
    influence_list.forEach(function(item) {
        node_data.push(item);
        link_data.push({
            source: "0",
            target: item.id.toString(),
            lineStyle: {
                color: "rgba(235, 27, 183, 1)" 
            }
        });
        sorted_value.push({name: item.name, value: item.value});
    });
    influence_by_list.forEach(function(item) {
        node_data.push(item);
        link_data.push({
            source: item.id.toString(),
            target: "0",
            lineStyle: {
                color: "rgba(42, 158, 176, 1)" 
            }
        });
        sorted_value.push({name: item.name, value: item.value});
    })

    sorted_value.sort(function(a, b) {
        return b.value - a.value;
    });
    var symbolSize_list = {};
    sorted_value.forEach(function(item, idx) {
        symbolSize_list[item.name] = idx;
    })

    node_data.forEach(function(item) {
        if (item.id == 0) return;
        item['symbolSize'] = 15 + 2 * symbolSize_list[item.name];
    });
    console.log(link_data)
    console.log(node_data)

    var graph_option = {
        tooltip: {},
        series: [{
            type: 'graph',
            layout: 'force',
            categories: cate_data,
            data: node_data,
            links:link_data,
            force: {
                repulsion: 1000
            },
            label: {
                show: true,
                position: "top"
            },
            edgeSymbol: ['none', 'arrow']
        }]    
    }
    graph_chart.clear();
    graph_chart.setOption(graph_option);
    graph_chart.off("click");
}

function update_graph() {
    set_out_graph_opt();
}

async function init_graph() {
    await readJson("./assets/data/portion_influence_node.json");
    portion_influence_data = window.__loaded_json;
    await readJson("./assets/data/artist_influence_data.json");
    artist_influence_data = window.__loaded_json;
    await readJson("./assets/data/name2genre.json");
    name2genre_map = window.__loaded_json;
    await readJson("./assets/data/artist_influence_danmaku_data.json");
    artist_influence_danmaku_data = window.__loaded_json;
    await readJson("./assets/data/artist_influence_value_data.json");
    artist_influence_value_data = window.__loaded_json;

    set_out_graph_opt();
}