var graph_dom = document.getElementById("graph-main");
var graph_chart = echarts.init(graph_dom);
var graph_mode = "Outgoing";

// 按艺术家划分图
function set_in_graph_opt() {
    var graph_option;
    return graph_option;
};

// 按流派划分图
function set_out_graph_opt(start, end, using_genres) {
    var graph_option;
    var ori_cate_data = ["Electronic", "R&B;", "Vocal", "Pop/Rock", "Religious", "Blues", "Country", "Jazz", "Latin", "New Age", "Folk", "International", "Reggae", "Comedy/Spoken", "Easy Listening", "Classical", "Avant-Garde", "Stage & Screen", "Children's"];
    cate_data = ori_cate_data.map(function(cate) {
        return {name: cate};
    });
    start = (start / 10 - 1) * 10;
    end = (end / 10 + 1) * 10
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
            label: {
                show: false
            }
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
        var size =40 * (1.0 * (node_data[i]["value"] - min_value)) / (max_value - min_value)
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
            curve = (i < j)? 0.2 : 0.5;
            link_data.push({source: String(i),
                            target: String(j),
                            value: value,
                            lineStyle: {
                                width: size,
                                curveness: curve
                            }});
        }
    }
    // console.log(link_data);

    var graph = {nodes: node_data, links: link_data, categories: cate_data}
    graph_option = {
        tooltip: {},
        series: [
            {
                type: 'graph',
                layout: 'circular',
                data: graph.nodes,
                links: graph.links,
                categories: graph.categories,
                circular: {
                    rotateLabel: true
                },label: {
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
            }
        ]
    };
    return graph_option;
};

function update_graph(start, end, using_genres) {
    opt = set_out_graph_opt(start, end, using_genres)
    graph_chart.setOption(opt)
}

async function init_graph() {
    await readJson("./assets/data/portion_influence_node.json");
    portion_influence_data = window.__loaded_json;
    // await readJson("./assets/data/artist_influence_data.json");
    // artist_influence_data = window.__loaded_json
    opt = set_out_graph_opt(1941, 1961, Array(19).fill(true));
    graph_chart.setOption(opt);
}
  