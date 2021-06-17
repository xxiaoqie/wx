// pages/default/default.js
Page({
  onLoad:function(options) {
    wx.setStorage({
      key:"isshow",
      data:"true"
    })
  },
  goplaymusic:function() {
    wx.redirectTo({
      url: '../playmusic/playmusic',
    })
  }
})