// testcomponents.js
var util = require('../../../../utils/js/util.js');
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
   * 打开新页面
   */
  navigateTo: function (event) {
    console.log("index navigateTo" + event);
    console.dir(event);
    console.log("data-value" + event.currentTarget.dataset.value);
    switch (event.currentTarget.dataset.value) {
      case "0":
        //打开logs信息页面
        util.navigateTo("../testcom_viewcontainer/testcom_viewcontainer");
        break;
      default:
        break;
    }
  }
})