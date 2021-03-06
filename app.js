//app.js
App({
  onLaunch: function (options) {
    //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
    console.info("app onLaunch " + options);
    //console.dir(options);
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  onShow: function (options) {
    //当小程序启动，或从后台进入前台显示，会触发 onShow
    console.log("app onShow " + options);
    console.dir(options);
  }, onHide: function () {
    //当小程序从前台进入后台，会触发 onHide
    console.log("app onHide");
  }, onError: function (msg) {
    //当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
    console.error("app onError" + msg);
  },
  getUserInfo: function (cb) {
    console.log("app getUserInfo");
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  globalData: {
    userInfo: null,
    logsLoadNum: 0
  }
})