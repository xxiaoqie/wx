// pages/playmusic/playmusic.js
Page({
  data: {
    "songs":[],
    "title":[],
    "nowindex":0,
    "count":0
  },
  init:function() {
    wx.request({
      url: 'https://www.fastmock.site/mock/8d68a0df197cb034cf160bf8f9e9c023/music/music',
      success:(res) => {
        console.log(res.data)
        this.setData({
          songs:res.data.data,
          count:res.data.data[this.data.nowindex].songname.length
        })
      }
    })
  },
  click:function(e) {
    console.log(e.target.dataset)
  },
  onLoad: function (options) {
    wx.getStorage({
      key: 'isshow',
      success:(res) => {
        //key 存在 初始化请求数据
        this.init()
      },
      fail:function() {
        //key 不存在 跳回到引导页
        wx.redirectTo({
          url: '../default/default',
        })
      }
    })
  }
})