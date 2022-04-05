export function setScale() {
  let designWidth = 1536 //设计稿的宽度，根据实际项目调整
  let designHeight = 824 //设计稿的高度，根据实际项目调整
  var fontSize =
    document.documentElement.clientWidth / document.documentElement.clientHeight < designWidth / designHeight
      ? (document.documentElement.clientWidth / designWidth) * 12
      : (document.documentElement.clientHeight / designHeight) * 12
  console.log(fontSize)
  document.querySelector('html').style.fontSize = fontSize + 'px'
}
