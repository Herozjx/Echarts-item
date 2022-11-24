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
        radius: ["10%", "65%"],
        center: ["50%", "50%"],
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
