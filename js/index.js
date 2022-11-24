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
