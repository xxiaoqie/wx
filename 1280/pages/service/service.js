// pages/service/service.js
let app=getApp()
Page({
  data: {
    cardsnow:null,
    cardsbefore:null,
    cntbefore:null
  },
  hideItem:function(isNow, index) {
    if(isNow == 1) {
      var cover = "cardsnow[" + index + "].cover"
      console.log(cover);
      this.setData({
        [cover]:1
      })
    } else {
      var cover = "cardsbefore[" + index + "].cover"
      this.setData({
        [cover]:1,
        cntbefore: this.data.cntbefore-1
      })
    }
  },
  handleLongPress:function(e) {
    wx.showActionSheet({
      itemList: ['隐藏','屏蔽此类消息'],
      success:(res) => {
        if(res.tapIndex == 0) {       //点击删除
          this.hideItem(e.currentTarget.dataset.now,e.currentTarget.dataset.index)
        } else {                      //点击屏蔽
          for(let i=0; i<this.data.cardsnow.length; i++) {
            if(this.data.cardsnow[i].name == e.currentTarget.dataset.name) {
              this.hideItem(1,i)
            }
          }
          for(let i=0; i<this.data.cardsbefore.length; i++) {
            if(this.data.cardsbefore[i].name == e.currentTarget.dataset.name) {
              this.hideItem(0,i)
            }
          }
        }
      }
    })
  },
  init:function() {
    this.setData({
      myitems:app.globalData.myitems
    })
    app.itemsInfoReadyCallback = res => {
      this.setData({
        myitems: res
      })
    }
    wx.request({
      url: 'https://www.fastmock.site/mock/7e101384ae2c53aef756e50747c51e97/test/api/service',
      success:(res) => {
        this.setData({
          cardsnow:res.data.cards.now,
          cardsbefore:res.data.cards.before,
          cntbefore:res.data.cards.before.length
        })
      }
    })
  },
  onLoad: function (options) {
    this.init()
  },
})