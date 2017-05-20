//logs.js
var util = require('../../utils/util.js');
//获取应用实例
var app = getApp()
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    console.log('logs onLoad');
    app.globalData.logsLoadNum++;
    console.log('logsLoadNum ' + app.globalData.logsLoadNum);
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    });
    var page = getCurrentPages();
    console.dir(page);
  },
  onUnload: function () {
    //生命周期函数--监听页面卸载 
    console.log('logs onUnload');
  }
})
