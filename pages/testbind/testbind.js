// testbind.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  /**
   * 每点击一次 +1
   */
  changeTextTap: function () {
    console.log("changeTextTap " + this.data.changeText);
    var value = this.data.changeText || 0;
    value = value * 1 + 1;
    this.setData({
      changeText: value
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