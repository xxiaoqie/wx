// pages/login/login.js
let app=getApp()
Page({
  data: {
    name:"",
    password:""
  },
  setUser:function(e) {
    this.setData({name:e.detail.value})
  },
  setPass:function(e) {
    this.setData({password:e.detail.value})
  },
  login:function() {
    let userData = {
      'user':this.data.name,
      'password':this.data.password
    }
    app.getUser.user=userData
    wx.switchTab({
      url: '../index/index',
    })
  }

})