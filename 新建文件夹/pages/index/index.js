// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[
        {
          name:"张三",
          price:500,
          address:"帮忙拿快递",
          ju:"2m",
          title:"翻斗乐园103室"
        }, {
          name: "李四",
          price: 300,
          address: "帮拿外卖",
          ju: "4m",
          title: "沈阳中街"

        }, {
          name: "王五",
          price: 1500,
          address: "代驾",
          ju: "200m",
          title: "海淀区上地七街"

        }, {
          name: "张三",
          price: 500,
          address: "帮忙拿快递",
          title: "翻斗乐园103室",
          ju: "2m",
        }
      ],
     
  },
  
    click:function(e){
      const ind=e.currentTarget.dataset.item
      const obj = JSON.stringify(this.data.list[ind])
      wx.navigateTo({
        url: '/pages/helping/index?obj='+obj,
      })
 
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
    const arr=[]
    wx.getStorage({
      key: 'obj',
      success: (res) => {
       arr.push(res.data)
      },
    })
    console.log(arr)
    
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