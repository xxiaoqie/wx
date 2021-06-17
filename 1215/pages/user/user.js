// pages/user/user.js
let app=getApp()
Page({
  data: {

  },
  onLoad: function (options) {
    if(app.getUser.user == null) {
      console.log('用户不存在')
      // wx.switchTab     跳转到tabBar页面
      // navigateTo       保留当前页，跳到指定页
      wx.redirectTo({ //  关闭当前页，跳到指定页
        url: '../login/login', 
      })
    } else {
      this.setData({username:app.getUser.user.user})
    }
  }
})