// pages/icon/icon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      {value: 'USA', name: '美国'},
      {value: 'CHN', name: '中国', checked: 'true'},
      {value: 'BRA', name: '巴西', disabled: 'true'},
      {value: 'JPN', name: '日本'},
      {value: 'ENG', name: '英国'},
      {value: 'FRA', name: '法国'}
    ],
    array: ['美国', '中国', '巴西', '日本'],
    region: ['广东省', '广州市', '珠海区'],
    time:['15:33'],
    date:['2020-12-14']
  },

  end:function() {
    console.log('progress','我结束了，你呢')
  },
  checkboxChange:function(e) {
    console.log(e.detail.value)
  },
  switch1Change:function(e) {
    console.log(e.detail.value)
  },
  bindPickerChange:function(e) {
    this.setData({index:e.detail.value})
  },
  bindRegionChange:function(e) {
    this.setData({region:e.detail.value})
  },
  bindTimeChange:function(e) {
    this.setData({time:e.detail.value})
  },
  bindDateChange:function(e) {
    this.setData({date:e.detail.value})
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

  }
})