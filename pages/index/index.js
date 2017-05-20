//index.js
//获取应用实例
var app = getApp()
Page({
  //页面的初始数据
  data: {
    motto: 'Hello World',
    userInfo: {},
    logsLoadNum: '0'
  },
  onLoad: function (options) {
    //生命周期函数--监听页面加载
    console.log('index onLoad ' + options);
    // console.dir(options);
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  },
  onReady: function () {
    //生命周期函数--监听页面初次渲染完成
    console.log('index onReady');
  },
  onShow: function () {
    //生命周期函数--监听页面显示
    console.log('index onShow');
  },
  onHide: function () {
    //生命周期函数--监听页面隐藏
    console.log('index onHide');
  },
  onUnload: function () {
    //生命周期函数--监听页面卸载
    console.log('index onUnload');
  },
  onPullDownRefresh: function (options) {
    //页面相关事件处理函数--监听用户下拉动作
    console.log('index onPullDownRefresh ' + options);
    console.dir(options);
  },
  onReachBottom: function (options) {
    //页面上拉触底事件的处理函数
    console.log('index onReachBottom ' + options);
    console.dir(options);
  },
  onShareAppMessage: function () {
    //用户点击右上角分享
    console.log('index onShareAppMessage');
    return {
      title: 'firstTitle',
      path: '/page/'
    }
  },
  /**
  * 打开测试样式页面
  */
  testStyleTap: function () {
    wx.navigateTo({
      url: '../teststyle/teststyle'
    })
  },
  /**
   * 打开logs信息页面
   */
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  /**
   * 每点击一次 +1
   */
  changeTextTap: function () {
    console.log("changeTextTap " + this.data.changeText2);
    var value = this.data.changeText2 || 0;
    value = value * 1 + 1;
    this.setData({
      changeText2: value
    });
  },
  /**
   * 显示app的globalData的logsLoadNum
   */
  logLoadNumTap: function () {
    console.log('showlogLoadNumTap ' + app.globalData.logsLoadNum);
    this.setData({
      logsLoadNum: app.globalData.logsLoadNum
    });
  },
  tapName: function (event) {
    console.log("tapName" + event);
    console.dir(event);
  },
  dataSetTap: function (event) {
    console.log("dataSetTap" + event);
    console.dir(event);
  }
})
