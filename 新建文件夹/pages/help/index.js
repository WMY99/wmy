// pages/help/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    price:0,
    time:"",
    title:"",
    tel:"",
    index:0,
    array: ['请选择','拼车', '取快递', '带文件', '租房', '健身指导', '其他'],
    
  },
  text:function(e){
      this.setData({
        title:e.detail.value
      })
  },
  btn:function(){
    const obj={}
        obj.price=this.data.price
    obj.time = this.data.time
    obj.title = this.data.title
    obj.tel = this.data.tel
    obj.price = this.data.price
   
    wx.setStorage({
      key: 'obj',
      data: obj,
    })
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  tel:function(e){
    this.setData({
      tel:e.detail.value
      })
  },
  bindPickerChange:function(e){
      this.setData({
        index: e.detail.value
      })
  },
  bindTimeChange:function(e){
    this.setData({
      time:e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      const d=new Date()
    const youWant = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() 
  this.setData({
    time:youWant
  })
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