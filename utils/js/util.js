
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/**
 * n的长度为1补零
 */
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * 显示某个页面
 */
function navigateTo(url) {
  wx.navigateTo({
    url: url
  });
}

module.exports = {
  formatTime: formatTime,
  navigateTo: navigateTo
}
