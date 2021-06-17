// pages/api/api.js
Page({
  // 显示消息的提示框
  showToast:function() {
    wx.showToast({
      title: 'bll',
      icon: 'loading',
      duration: 2000,
      success: function() {
        console.log('aaa')
      }
    })
  },
  showModal:function() {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  showLoading:function() {
    wx.showLoading({
      title: '加载中',
    })
    
    setTimeout(function () {
      wx.hideLoading()
    }, 2000)
  },
  showActionSheet:function() {
    wx.showActionSheet({
      itemList: ['A', 'B(√)', 'C'],
      success (res) {
        console.log(res.tapIndex)
        console.log(res);
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  }
})