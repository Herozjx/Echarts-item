function setRem() {
  var cli_W = document.documentElement.clientWidth || document.body.clientWidth;
  cli_W = cli_W > 1920 ? 1920 : cli_W;
  cli_W = cli_W < 1024 ? 1024 : cli_W;
  var html = document.getElementsByTagName("html")[0];
  var rem = cli_W / 24;
  html.style.fontSize = rem + "px";
}
window.onload = setRem;
window.onresize = setRem;
