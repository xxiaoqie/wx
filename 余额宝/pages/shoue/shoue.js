// pages/shoue/shoue.js
var app=getApp();
Page({
  data: {
    remainmoney:null,
    newmoney:null,
    addmoney:null,
    cutmoney:null,
    hiddenmodalput:true,
    hiddenmodalput1:true,
  },
  in: function () {
    this.setData({ 
    hiddenmodalput: !this.data.hiddenmodalput
    })
    },
    out:function(){
      this.setData({
        hiddenmodalput1: !this.data.hiddenmodalput
      })
    },
    
  cancel: function (e) {
  this.setData({
  hiddenmodalput: true
  });
  },
  confirm: function (e) {
    var that=this;
    var n=this.data.remainmoney*1+this.data.addmoney*1
    this.setData({  
    hiddenmodalput: true,
    remainmoney:n,
    })
    wx.setStorage({
      data: this.data.remainmoney,
      key: 'key',
      success:function(res){
        that.setData({
          remainmoney:res.data
        }) 
        console.log("保存成功")
      }
    })
    } ,
    cancel2: function (e) {
      this.setData({
      hiddenmodalput1: true
      });
      },
    confirm2: function (e) {
        var n=this.data.remainmoney*1-this.data.cutmoney*1
        that.setData({  
        hiddenmodalput1: true ,
        remainmoney:n,
        })
        wx.setStorage({
          data: this.data.remainmoney,
          key: 'key',
          success:function(res){
            that.setData({
              remainmoney:res.data
            }) 
            console.log("保存成功")
          }
        })
        } ,
    putin:function(e){
          this.setData({
            addmoney:e.detail.value,
            cutmoney:e.detail.value
          })
        },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var remoney=wx.getStorageSync('key')
    var n=6894999898787687546.5
    console.log(n)
    if(remoney){
      console.log(remoney)
      that.setData({
        remainmoney:remoney
      })
    }else{
      console.log("no 6666")
      this.setData({
        remainmoney:n,
      })
    }
  },
  onUnLoad:function(){
  }
})