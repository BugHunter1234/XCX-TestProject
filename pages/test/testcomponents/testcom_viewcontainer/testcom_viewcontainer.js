// testcom_viewcontainer.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    xsInToView: 'x_2'
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
   * 横向滑动监听
   */
  xbindscroll: function (event) {
    // console.log('xbindscroll' + event);
    // console.dir(event);
    this.setData({
      xScrollLeft: event.detail.scrollLeft,
      xScrollTop: event.detail.scrollTop,
      xScrollHeight: event.detail.scrollHeight,
      xScrollWidth: event.detail.scrollWidth,
      xDeltaX: event.detail.deltaX,
      xDeltaY: event.detail.deltaY
    });
  },
  /**
   * 滑块变化
   */
  swiperChange: function (event) {
    console.log('swiperChange' + event);
    console.dir(event);
    this.setData({
      swiperCurrent: event.detail.current
    })
  }
})