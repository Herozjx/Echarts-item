// 故障设备监控 异常设备监控tab切换
// 获取两个a
var choseTab = document.getElementsByClassName("choseTab");
// 获取内容
var content = document.getElementsByClassName("content");
// 循环遍历
for (let i = 0; i < choseTab.length; i++) {
  // 给他们两个添加一个类名
  choseTab[i].setAttribute("index", i);
  //   当点击每一个时
  choseTab[i].addEventListener("click", function () {
    // 获取设置的类名
    var index_ = this.getAttribute("index");
    for (let j = 0; j < choseTab.length; j++) {
      // 进入先让都删除类名
      choseTab[j].classList.remove("active");
      //在给点击谁给谁加上类名
      choseTab[index_].classList.add("active");
    }
    for (let k = 0; k < content.length; k++) {
      content[k].style.display = "none";
      content[index_].style.display = "block";
    }
  });
}

// 饼图
(function () {
  var myChart = echarts.init(document.getElementsByClassName("pie")[0]);
  var option = {
    color: [
      "#2d6af6",
      "#80caa5",
      "#de8e87",
      "#f2a385",
      "#3f95fc",
      "#ade4bc",
      "#64c2e6",
      "#4b9cf8",
      "#2f6cfa",
    ],
    textStyle: {
      fontSize: 12,
      textBorderColor: "blue",
      textBorderType: "solid",
      textBorderWidth: 2,
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    series: [
      {
        name: "点位分布统计",
        type: "pie",
        radius: ["15%", "70%"],
        center: ["50%", "55%", "50%", "50%"],
        roseType: "radius",
        itemStyle: {
          borderRadius: 5,
        },
        data: [
          { value: 22, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "四川" },
          { value: 42, name: "河南" },
        ],
      },
    ],
  };
  myChart.setOption(option);

  window.addEventListener("load", function () {
    myChart.resize();
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 地图
(function () {
  var myChart = echarts.init(document.getElementsByClassName("geo")[0]);
  var geoCoordMap = {
    上海: [121.4648, 31.2891],
    东莞: [113.8953, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4229, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028],
  };

  var XAData = [
    [{ name: "西安" }, { name: "北京", value: 100 }],
    [{ name: "西安" }, { name: "上海", value: 100 }],
    [{ name: "西安" }, { name: "广州", value: 100 }],
    [{ name: "西安" }, { name: "西宁", value: 100 }],
    [{ name: "西安" }, { name: "银川", value: 100 }],
  ];

  var XNData = [
    [{ name: "西宁" }, { name: "北京", value: 100 }],
    [{ name: "西宁" }, { name: "上海", value: 100 }],
    [{ name: "西宁" }, { name: "广州", value: 100 }],
    [{ name: "西宁" }, { name: "西安", value: 100 }],
    [{ name: "西宁" }, { name: "郑州", value: 100 }],
    [{ name: "西宁" }, { name: "银川", value: 100 }],
  ];

  var YCData = [
    [{ name: "银川" }, { name: "北京", value: 100 }],
    [{ name: "银川" }, { name: "广州", value: 100 }],
    [{ name: "银川" }, { name: "上海", value: 100 }],
    [{ name: "银川" }, { name: "西安", value: 100 }],
    [{ name: "银川" }, { name: "西宁", value: 100 }],
    [{ name: "银川" }, { name: "郑州", value: 100 }],
  ];
  var ZZData = [
    [{ name: "郑州" }, { name: "上海", value: 100 }],
    [{ name: "郑州" }, { name: "广州", value: 100 }],
    [{ name: "郑州" }, { name: "乌鲁木齐", value: 100 }],
    [{ name: "郑州" }, { name: "拉萨", value: 100 }],
    [{ name: "郑州" }, { name: "成都", value: 100 }],
    [{ name: "郑州" }, { name: "哈尔滨", value: 100 }],
    [{ name: "郑州" }, { name: "昆明", value: 100 }],
    [{ name: "郑州" }, { name: "海口", value: 100 }],
    [{ name: "郑州" }, { name: "长沙", value: 100 }],
    [{ name: "郑州" }, { name: "西宁", value: 100 }],
  ];

  var planePath =
    "path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z";
  //var planePath = 'arrow';
  var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i];

      var fromCoord = geoCoordMap[dataItem[0].name];
      var toCoord = geoCoordMap[dataItem[1].name];
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value,
        });
      }
    }
    return res;
  };

  var color = ["#a6c84c", "#ffa022", "#46bee9"]; //航线的颜色
  var series = [];
  [
    ["西安", XAData],
    ["西宁", XNData],
    ["银川", YCData],
    ["郑州", ZZData],
  ].forEach(function (item, i) {
    series.push(
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: "red", //arrow箭头的颜色
          symbolSize: 3,
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        name: item[0] + " Top3",
        type: "lines",
        zlevel: 2,
        symbol: ["none", "arrow"],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15,
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 2,
            opacity: 0.6,
            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        name: item[0] + " Top3",
        type: "effectScatter",
        coordinateSystem: "geo",
        zlevel: 2,
        rippleEffect: {
          brushType: "stroke",
        },
        label: {
          normal: {
            show: true,
            position: "right",
            formatter: "{b}",
          },
        },
        symbolSize: function (val) {
          return val[2] / 8;
        },
        itemStyle: {
          normal: {
            color: color[i],
          },
          emphasis: {
            areaColor: "#2B91B7",
          },
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
          };
        }),
      }
    );
  });
  var option = {
    tooltip: {
      trigger: "item",
      formatter: function (params, ticket, callback) {
        if (params.seriesType == "effectScatter") {
          return "线路：" + params.data.name + "" + params.data.value[2];
        } else if (params.seriesType == "lines") {
          return (
            params.data.fromName +
            ">" +
            params.data.toName +
            "<br />" +
            params.data.value
          );
        } else {
          return params.name;
        }
      },
    },
    geo: {
      zoom: 1.2,
      map: "china",
      label: {
        emphasis: {
          show: true,
          color: "#fff",
        },
      },
      roam: true,
      itemStyle: {
        normal: {
          areaColor: "#142957",
          borderColor: "#195BB9",
          borderWidth: 1,
        },
        emphasis: {
          areaColor: "#2B91B7",
        },
      },
    },
    series: series,
  };
  myChart.setOption(option);
  window.addEventListener("load", function () {
    myChart.resize();
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 全国用户总量统计图
(function () {
  var item = {
    name: "",
    value: 1200,
    itemStyle: {
      color: "#254065",
    },
    tooltip: {
      extraCssText: "opacity:0",
    },
  };
  var myChart = echarts.init(document.getElementsByClassName("pie1")[0]);
  var option = {
    tooltip: {
      trigger: "item",
      axisPointer: {
        type: "shadow",
      },
      // extraCssText: "opacity:0",
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "5%",
      containLabel: true,
      show: true,
      borderWidth: 1,
      borderColor: "#0ea0c1",
    },
    xAxis: [
      {
        type: "category",
        data: [
          "郑州",
          "",
          "北京",
          "",
          "合肥",
          "",
          "......",
          "",
          "杭州",
          "",
          "济南",
          "",
          "重庆",
        ],

        axisTick: {
          alignWithLabel: true,
          show: false,
        },
        axisLabel: {
          color: "#a5edff",
          fontSize: 12,
        },
        axisLine: {
          lineStyle: {
            color: "#0ea0c1",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisLabel: {
          color: "#a5edff",
          fontSize: 12,
        },
        splitLine: {
          lineStyle: {
            color: "#0ea0c1",
          },
        },
      },
    ],

    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "60%",
        itemStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: "#74f8fa", // 0% 处的颜色
              },
              {
                offset: 1,
                color: "#2c68c8", // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
        },

        data: [
          2100,
          1900,
          1700,
          1560,
          1400,
          item,
          item,
          item,
          900,
          750,
          600,
          480,
          240,
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("load", function () {
    myChart.resize();
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 订单模块
// 获取天数tab栏
var filterData = document.getElementsByClassName("filter")[0].children;
// 获取天数数据
var orderData = document.getElementsByClassName("orderData");
// 循环遍历
var timer = null; //定时器
var index_ = 0;
for (let i = 0; i < filterData.length; i++) {
  // 给他们两个添加一个类名
  filterData[i].setAttribute("index", i);
  //   当点击每一个时
  filterData[i].addEventListener("click", function () {
    // 获取设置的类名
    index_ = this.getAttribute("index");
    for (let j = 0; j < filterData.length; j++) {
      filterData[j].classList.remove("active");
      filterData[index_].classList.add("active");
    }
    for (let k = 0; k < orderData.length; k++) {
      orderData[k].classList.add("orderDataHidden");
      orderData[index_].classList.remove("orderDataHidden");
    }
  });
}
// 封装成一个函数  方便下方使用
function timerData() {
  timer = setInterval(function () {
    // index_++
    index_++;
    // 当index_数值大于等于filterData.length时也就是 >=4时
    if (index_ >= filterData.length) {
      // 让index_重新等于0 重新开始
      index_ = 0;
    }
    // 这时候模拟点击事件  自动点击
    filterData[index_].click();
  }, 3000);
}
// 调用函数
timerData();

// 获取整个订单框
var order = document.getElementsByClassName("order")[0];
// 当鼠标放到整个框上时
order.onmouseenter = function () {
  // 清除定时器  不让动
  clearInterval(timer);
};
// 当鼠标移走时
order.onmouseleave = function () {
  // 重新调用上面封装好的函数自动模拟点击
  timerData();
};

//完成进度统计   水滴图
(function () {
  var myChart = echarts.init(document.getElementsByClassName("blob")[0]);
  let compositeScore = 0.78;
  option = {
    graphic: [
      {
        type: "group",
        left: "center",
        top: "63%",
        children: [
          {
            type: "text",
            z: 100,
            left: "10",
            top: "middle",
            style: {
              fill: "#fff",
              text: "综合评分",
              font: "14px PingFangSC-Regular",
            },
          },
        ],
      },
    ],
    series: [
      {
        type: "liquidFill", //水位图
        radius: "98%", //显示比例
        center: ["50%", "51%"], //中心点
        data: [compositeScore], // data个数代表波浪数
        color: ["#85daeb"], //波浪颜色
        backgroundStyle: {
          color: {
            type: "linearGradient",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 1,
                color: "rgba(17,65,86,0.64)",
              },
              {
                offset: 0.51,
                color: "rgba(32,70,84,0)",
              },
              {
                offset: 0,
                color: "rgba(99,254,254,0.35)",
              },
            ],
            globalCoord: false,
          },
        },
        label: {
          //标签设置
          position: ["50%", "50%"],
          formatter: compositeScore * 100 + "%", //显示文本
          fontSize: "30px",
          fontFamily: "DINAlternate-Bold",
          fontWeight: "600",
          color: "#fff",
        },
        outline: {
          show: true,
          borderDistance: 5,
          itemStyle: {
            borderColor: "#1B5151",
            borderWidth: 1,
          },
        },
      },
    ],
  };

  myChart.setOption(option);
  window.addEventListener("load", function () {
    myChart.resize();
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
