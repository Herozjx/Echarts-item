// 销售额统计统计图
(function () {
  var myChart = echarts.init(document.getElementsByClassName("chartLine")[0]);
  //准备的销售数据
  var data = [
    [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
    ],
    [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34],
    ],
    [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98],
    ],
    [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24],
    ],
  ];
  var option = {
    title: {
      text: "单位:万",
      padding: [7, 50],
      textStyle: {
        color: "#7393ff",
        fontWeight: 400,
        fontSize: 14,
      },
    },
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["预期销售额", "实际销售额"],
      padding: [5, 80],
      textStyle: {
        color: "#7393ff",
        fontSize: 11,
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "15%",
      containLabel: true,
      show: true,
      borderWidth: 1,
      borderColor: "#0f2f49",
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["1月", "", "3月", "", "5月", "", "7月", "", "9月", "", "11月", ""],
      axisTick: {
        alignWithLabel: true,
        show: false,
      },
      axisLabel: {
        color: "#7393ff",
        fontSize: 13,
      },
      axisLine: {
        lineStyle: {
          color: "#626b78",
        },
      },
    },
    yAxis: {
      type: "value",
      axisLabel: {
        color: "#7393ff",
        fontWeight: 400,
        fontSize: 13,
      },
      splitLine: {
        lineStyle: {
          color: "#0f2c49",
        },
      },
    },
    series: [
      {
        name: "预期销售额",
        type: "line",
        smooth: true,
        stack: "data",
        lineStyle: {
          color: "#6dedf2",
        },
        itemStyle: {
          color: "#6dedf2",
        },
        data: [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      },
      {
        name: "实际销售额",
        type: "line",
        smooth: true,
        stack: "data",
        lineStyle: {
          color: "#db4d45",
        },
        itemStyle: {
          color: "#db4d45",
        },
        data: [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24],
      },
    ],
  };

  // 获取销售额统计tab栏
  var stat = document.getElementsByClassName("stat");
  var ind = 0;
  var timers_ = null;
  for (let i = 0; i < stat.length; i++) {
    stat[i].setAttribute("index", i);
    stat[i].onclick = function () {
      var index_ = this.getAttribute("index");
      for (let j = 0; j < stat.length; j++) {
        stat[j].classList.remove("active");
        stat[index_].classList.add("active");
      }
      // 获取自定义类名data-time
      // var dataTime = this.getAttribute("data-time");

      // 一步一步找到series下面的数据 让数据等于设置数据下的
      option.series[0].data = data[i][0];
      option.series[1].data = data[i][1];

      // 这时得重新调用
      myChart.setOption(option);
    };
  }
  // 封装成一个函数  方便下方使用
  function timerData() {
    timers_ = setInterval(function () {
      // ind++
      ind++;
      // 当index_数值大于等于filterData.length时也就是 >=4时
      if (ind >= stat.length) {
        // 让index_重新等于0 重新开始
        ind = 0;
      }
      // 这时候模拟点击事件  自动点击
      stat[ind].click();
    }, 2000);
  }
  // 调用函数
  timerData();

  // 获取整个订单框
  var sales_ = document.getElementsByClassName("sales")[0];
  // 当鼠标放到整个框上时
  sales_.onmouseenter = function () {
    // 清除定时器  不让动
    clearInterval(timers_);
  };
  // 当鼠标移走时
  sales_.onmouseleave = function () {
    // 重新调用上面封装好的函数自动模拟点击
    timerData();
  };

  myChart.setOption(option);
  window.addEventListener("load", function () {
    myChart.resize();
  });
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();
