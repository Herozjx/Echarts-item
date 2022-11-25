// 渠道分布
(function () {
  var myChart = echarts.init(document.getElementsByClassName("radarData")[0]);
  const lineStyle = {
    width: 1,
    opacity: 0.5,
  };
  option = {
    radar: {
      center: ["50%", "50%"],
      // 外半径占据容器大小
      radius: "60%",
      indicator: [
        { name: "机场", max: 100 },
        { name: "商城", max: 100 },
        { name: "火车站", max: 100 },
        { name: "汽车站", max: 100 },
        { name: "地铁", max: 100 },
      ],
      shape: "circle",
      splitNumber: 5,
      axisName: {
        color: "#4c9bfd",
      },
      splitLine: {
        lineStyle: {
          color: [
            "#73a3bd",
            "#73a3bd",
            "#73a3bd",
            "#73a3bd",
            "#73a3bd",
            "#73a3bd",
          ].reverse(),
        },
      },
      splitArea: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "#ffffff",
        },
      },
    },
    tooltip: {
      show: true,
      position: ["60%", "0%"],
      backgroundColor: "rgba(255, 255, 255, 0.3)",
    },

    series: [
      {
        name: "Beijing",
        type: "radar",
        lineStyle: lineStyle,
        symbol: "circle",
        symbolSize: 5,
        data: [[90, 100, 56, 11, 34]],
        itemStyle: {
          color: "#ffffff",
        },
        areaStyle: {
          color: "#6e8e7f",
        },
        label: {
          show: true,
          fontSize: 12,
          color: "#ffffff",
        },
        lineStyle: {
          normal: {
            color: "#ffffff",
            width: 3,
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
