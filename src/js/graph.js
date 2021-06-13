var graph_dom = document.getElementById("graph-main");
var graph_fs_dom = document.getElementById("fullscreen-graph");
var graph_chart = echarts.init(graph_dom);
var graph_fs_chart = echarts.init(graph_fs_dom);

// 按艺术家划分图
function set_in_graph_opt() {
    graph_chart.showLoading();

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
    var max_num = 25;
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
        node_data_tmp.push(n);
    }
    node_data_tmp.sort(function(a, b) {
        return b.value - a.value;
    });
    var node_data = node_data_tmp.splice(0, max_num);
    var min_value = node_data[node_data.length - 1].value;
    node_data.forEach((n) => {
        var size
        if (max_value == min_value) {
            size = 40
        } else {
            size = 15 + 30 * (n.value - min_value) / (max_value - min_value);
        }
        
        n.symbolSize = size;
    })

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
                        link_set.add({ 
                            source: artist_id_dict[artist], 
                            target: artist_id_dict[element] 
                        });
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
                repulsion: [800, 1600],
                gravity: 0.5,
                edgeLength: [100, 200],
                friction: 0.5,
                // layoutAnimation: false
            },
            draggable: false,
            emphasis: {
                focus: 'adjacency',
                blurScope: 'coordinateSystem'
            },
            roam: true,
            graph_modeSymbol: ['none', 'arrow'], // 边的样式
            edgeSymbolSize: 10,
        }],
        center: [],
        mode: 2
    };
    
    // graph_chart.clear();
    graph_chart.setOption(graph_option);
    graph_chart.off("click");
    graph_chart.on("click", function(params) {
        artist_name = params.data.name;
        app.focus_musician(artist_name);
    })

    let delay = 2000 * Math.random() + 500;
    setTimeout(()=>{graph_chart.hideLoading();}, delay);
    // full screen
    if (app.fullscreen == 2) {
        update_fs_graph()
    }
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
    var cate_data = [];

    ori_cate_data.forEach(function(cate, idx) {
        if (using_genres[idx]) {
            cate_data.push({
                name: cate,
                itemStyle: {
                    color: app.genre_colors[idx]
                }
            })
        };
    })

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
            end: end,
            label: {
                // color: 'black'
            },
            itemStyle: {
                color: cate_data[i].itemStyle.color
            }
        }
        node_data.push(node)
    }

    var max_value = -1;
    var min_value = 9999;
    // node data
    for (var key in portion_influence_data) {
        if (Number(key) < start || Number(key) > end) {
            continue;
        }
        year_data = portion_influence_data[key];
        for (var i = 0; i < cate_data.length; i++) {
            var cate = cate_data[i].name;
            if (year_data[cate] == undefined) {
                continue;
            }
            var portion_data = year_data[cate];
            var node_value = 0;
            for (var j = 0; j < cate_data.length; j++) {
                if (i == j || portion_data[cate_data[j].name] == undefined) {
                    continue;
                }
                node_value += portion_data[cate_data[j].name];
            }
            node_data[i]["value"] = node_data[i]["value"] + node_value;
            if (node_data[i]["value"] > max_value) {
                max_value = node_data[i]["value"];
            } else if (node_data[i]["value"] < min_value) {
                min_value = node_data[i]["value"];
            }
        }
    }

    for (var i = 0; i < cate_data.length; i++) {
        var size
        if (max_value == min_value) {
            size = 40;
        } else {
            size = 40 * (1.0 * (node_data[i]["value"] - min_value)) / (max_value - min_value)
        }
        if (size < 20) {
            size = 20;
        }
        node_data[i]["symbolSize"] = size;
    }
    // console.log(node_data);
    // link data
    for (var i = 0; i < cate_data.length; i++) {
        var src_cate = cate_data[i].name;
        for (var j = 0; j < cate_data.length; j++) {
            if (i == j) continue;
            var value = 0;
            var tar_cate = cate_data[j].name;
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

    var rect = graph_dom.getBoundingClientRect()
    var graph = { nodes: node_data, links: link_data, categories: cate_data }
    graph_option = {
        tooltip: {},
        animationDurationUpdate: 100,
        series: [{
            type: 'graph',
            layout: 'circular',
            data: graph.nodes,
            links: graph.links,
            categories: graph.categories,
            circular: {
                rotateLabel: false
            },
            label: {
                show: true,
                position: 'inside',
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
            roam: false,
            zoom: 1,
            center: [rect.width/2, rect.height/2],
            edgeSymbol: ['none', 'arrow'], // 边的样式
            edgeSymbolSize: 15,
        }],
        center: [],
        mode: 1
    };

    graph_chart.setOption(graph_option);
    graph_chart.off("click");
    graph_chart.on("click", function(params) {
        genre = params.data.name;
        app.inspecting_genre = genre;
        app.select_genre(genre);
    })
    // fullscreen
    if (app.fullscreen == 2) {
        update_fs_graph()
    }
};

function set_artist_graph_opt() {
    graph_chart.showLoading();

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
    var color_map = {};
    ori_cate_data.forEach(function(item, idx) {
        color_map[item] = app.genre_colors[idx];
    })

    var using_cates = new Set();
    var first_level_num = 3, second_level_num = 2;

    var node_data = [
        {
            id: 0, 
            name: center_musision, 
            category: center_genre,
            value: (artist_influence_value_data[center_musision] == undefined) ? 1: artist_influence_value_data[center_musision],
            symbolSize: 70,
            itemStyle: {
                borderWidth: 5,
                borderColor: "rgba(107, 72, 247, 1)"
            },
            label: {
                fontStyle: "italic",
                fontWeight: "bolder",
                fontSize: 20
            },
            itemStyle: {
                color: color_map[center_genre]
            },
            symbol: "diamond"
        }
    ]
    using_cates.add(center_genre);

    var center_musision_data = artist_influence_danmaku_data[center_musision];
    // console.log(center_musision_data);
    // 第一层节点
    var influence_list = [];
    var influence_by_list = [];
    var id_cnt = 1;
    var name2id_map = {center_musision: 0};

    for (year in center_musision_data) {
        if (year < start || year > end) continue;
        var year_data = center_musision_data[year];
        
        for (genre in year_data["influence"]) {
            year_data["influence"][genre].forEach(function(artist) {
                influence_list.push({
                    id: id_cnt,
                    name: artist, 
                    category: genre, 
                    value: (artist_influence_value_data[artist] == undefined) ? 1: artist_influence_value_data[artist],
                    label: {
                        fontWeight: "bold",
                        fontSize: 14
                    },
                    itemStyle: {
                        color: color_map[genre]
                    }
                });
                name2id_map[artist] = id_cnt;
                id_cnt += 1;

                // bar info
                app.influence_genres[ori_cate_data.indexOf(genre)] += 1;
            })
        }

        for (genre in year_data["influence_by"]) {
            year_data["influence_by"][genre].forEach(function(artist) {
                influence_by_list.push({
                    id: id_cnt,
                    name: artist, 
                    category: genre, 
                    value: (artist_influence_value_data[artist] == undefined) ? 1: artist_influence_value_data[artist],
                    label: {
                        fontWeight: "bold",
                        fontSize: 14
                    },
                    itemStyle: {
                        color: color_map[genre]
                    }
                });
                name2id_map[artist] = id_cnt;
                id_cnt += 1;

                // bar info
                app.influence_genres[ori_cate_data.indexOf(genre)] += 1;
            })
        }
    }

    influence_list.sort(function(a, b) {
        return (b.value - a.value)
    })
    influence_list = influence_list.splice(0,first_level_num);
    influence_by_list.sort(function(a, b) {
        return (b.value - a.value)
    })
    influence_by_list = influence_by_list.splice(0,first_level_num);
    // console.log(influence_list);
    // console.log(influence_by_list);

    var link_data = [];
    var sorted_value = [];
    influence_list.forEach(function(item) {
        node_data.push(item);
        link_data.push({
            source: "0",
            target: item.id.toString(),
            lineStyle: {
                color: color_map[center_genre] ,
                width: 3
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
                color: color_map[item.category],
                width: 3
            }
        });
        sorted_value.push({name: item.name, value: item.value});
    })

    sorted_value.sort(function(a, b) {
        return a.value - b.value;
    });
    var symbolSize_list = {};
    sorted_value.forEach(function(item, idx) {
        symbolSize_list[item.name] = idx;
    })

    node_data.forEach(function(item) {
        if (item.id == 0) return;
        item['symbolSize'] = 20 + 3 * symbolSize_list[item.name];
    });
    
    // 第二层节点
    var second_layer_nodes = [];
    var second_layer_links = [];

    for (var i = 1; i < node_data.length; i++) {
        var second_artist = node_data[i].name;
        var second_layer_influence_data = artist_influence_danmaku_data[second_artist];
        var second_infulence_nodes = [];
        var second_infulence_by_nodes = [];

        for (year in second_layer_influence_data) {
            if (year < start || year > end) continue;
            var year_data = second_layer_influence_data[year];

            for (genre in year_data["influence"]) {
                year_data["influence"][genre].forEach(function(artist) {
                    if (node_data.find(function(item) {return item.name == artist})) return;
                    second_infulence_nodes.push({
                        id: id_cnt,
                        name: artist, 
                        category: genre, 
                        value: (artist_influence_value_data[artist] == undefined) ? 1: artist_influence_value_data[artist],
                        symbolSize: 15,
                        label: {
                            fontSize: 9
                        },
                        itemStyle: {
                            color: color_map[genre]
                        }
                    });
                    name2id_map[artist] = id_cnt;
                    id_cnt += 1;
                })
            }
    
            for (genre in year_data["influence_by"]) {
                year_data["influence_by"][genre].forEach(function(artist) {
                    if (node_data.find(function(item) {return item.name == artist})) return;
                    second_infulence_by_nodes.push({
                        id: id_cnt,
                        name: artist, 
                        category: genre, 
                        value: (artist_influence_value_data[artist] == undefined) ? 1: artist_influence_value_data[artist],
                        symbolSize: 20,
                        label: {
                            fontSize: 9
                        },
                        itemStyle: {
                            color: color_map[genre]
                        }
                    });
                    name2id_map[artist] = id_cnt;
                    id_cnt += 1;
                })
            }
        }

        second_infulence_nodes.sort(function(a, b) {
            return (b.value - a.value);
        })
        second_infulence_nodes = second_infulence_nodes.splice(0,second_level_num);
        second_infulence_nodes.forEach(function(item) {
            second_layer_nodes.push(item);
            second_layer_links.push({
                source: name2id_map[second_artist].toString(),
                target: name2id_map[item.name].toString(),
                lineStyle: {
                    color: color_map[node_data[i].category]
                }
            });
        });

        second_infulence_by_nodes.sort(function(a, b) {
            return (b.value - a.value);
        })
        second_infulence_by_nodes = second_infulence_by_nodes.splice(0, second_level_num);
        second_infulence_by_nodes.forEach(function(item) {
            second_layer_nodes.push(item);
            second_layer_links.push({
                source: name2id_map[item.name].toString(),
                target: name2id_map[second_artist].toString(),
                lineStyle: {
                    color: color_map[item.category]
                }
            });
        });
    }
    
    node_data = node_data.concat(second_layer_nodes);
    link_data = link_data.concat(second_layer_links);
    node_data.forEach(function(item) {
        using_cates.add(item.category);
    })
    using_cates = Array.from(using_cates);
    // console.log(link_data)
    // console.log(node_data)
    // console.log(using_cates)
    
    var graph_option = {
        tooltip: {},
        series: [{
            type: 'graph',
            layout: 'force',
            categories: cate_data,
            data: node_data,
            links:link_data,
            draggable:true,
            force: {
                repulsion: 300
            },
            draggable: false,
            emphasis: {
                focus: 'adjacency',
                blurScope: 'coordinateSystem'
            },
            label: {
                show: true,
                position: "top"
            },
            edgeSymbol: ['none', 'arrow']
        }],
        center: [],
        mode: 3    
    }
    // graph_chart.clear();

    graph_chart.setOption(graph_option);
    graph_chart.off("click");
    graph_chart.on("click", function(params) {
        artist_name = params.data.name;
        app.focus_musician(artist_name);
    })
    graph_chart.hideLoading();
    // fullscreen
    if (app.fullscreen == 2) {
        update_fs_graph()
    }
}

function update_graph() {
    set_out_graph_opt();
}

function update_fs_graph() {
    graph_fs_chart.dispose();
    graph_fs_dom = null

    graph_fs_dom = document.getElementById("fullscreen-graph");
    graph_fs_chart = echarts.init(graph_fs_dom);
    // graph_fs_chart.resize({
    //     width: graph_fs_dom.offsetWidth * 0.7,
    //     height: graph_fs_dom.offsetHeight * 0.85
    // })

    graph_option = graph_chart.getOption();
    graph_mode = graph_option["mode"]
    graph_option.series[0]["center"] = [graph_fs_dom.offsetWidth * 0.5, graph_fs_dom.offsetHeight * 0.5]
    if (graph_mode != 1) {
        graph_option.series[0]["zoom"] = 1.5
    }

    graph_fs_chart.setOption(graph_option);
    console.log(graph_option["mode"])
    
    
    if (graph_mode == 1) {
        graph_fs_chart.off("click");
        graph_fs_chart.on("click", function(params) {
            genre = params.data.name;
            app.inspecting_genre = genre;
            app.select_genre(genre);
        })
    } else if (graph_mode == 2 || graph_mode == 3) {
        graph_fs_chart.off("click");
        graph_fs_chart.on("click", function(params) {
            artist_name = params.data.name;
            app.focus_musician(artist_name);
        }) 
    }
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