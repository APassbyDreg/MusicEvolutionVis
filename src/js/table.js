var dom = document.getElementById("table-main");
var myChart = echarts.init(dom);

var option;

// 生成纵列degree
var arr = new Array(10);
for (var i = 0; i < arr.length; i++) {
    arr[i]=i-5+"";
};
var degree = arr;
// 生成横列（属性）
var attrs = ["dance","energy","valence","tempo","loud","mode","key","acoustic","instrument","live","speech","explicit","time","popular"];

// 读取表格数据, 目前的是三元组[横坐标，纵坐标，值]，后续还要处理一下文件。
// 目前我统计在了"attr_by_year.json"中，里面统计了每年的各个attr，其形式为[最小值，最大值，平均值]
var data = [[0,0,5],[1,0,1],[2,0,5],[3,0,8],[4,0,2],[5,0,4],[6,0,9],[7,0,10],[8,0,2],[9,0,1],[5,5,5]]

data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

option = {
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
            margin: 3
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
        max: 10,
        calculable: true,
        left: 'right',
        bottom: 'center'
    },
    series: [{
        // name: 'Punch Card',
        type: 'heatmap',
        data: data,
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

if (option && typeof option === 'object') {
    myChart.setOption(option);
}