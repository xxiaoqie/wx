// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btn2:"名称前是否带 loading 图标",
    isShow:true,
    list:[
      'aaaaa',
      'bbbbb',
      'ccccc',
      'ddddd'
    ]
  },

  edit:function() {
    this.setData({'btn2':'我好无聊啊'})
  },
  toggle:function() {
    this.setData({'isShow':!this.data.isShow})
  },
  view1:function(e) {
    console.log('view1',e)
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