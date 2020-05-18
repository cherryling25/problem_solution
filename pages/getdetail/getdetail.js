// pages/getdetail/getdetail.js
Page({

  /**
   * Page initial data
   */
  data: {
    detail:{
     name:'',
     price:''
   }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    //this.getDetail();
  },

  getDetail:function(e){
    let requestUrl = '/app/product/getDetail'
    // let id = e.currentTarget.data.id;
    let requestData = {
      productId: id,  // 后端的名字:我的值
    };
    wx.request({
      url: getApp().globalData.dataUrl + requestUrl,
      method: "post",
      header: {
        "TOKENA": getApp().globalData.token,
      },
      data: requestData,
      success: (responseData) => {
        console.log(responseData);
        if (responseData.data) {
          this.parseDetail(responseData.data);
        } else { 
          //
        }
      }
    });
  },

  parseDetail: function (data){
    let detail = {
      "name":data.name, // 我的名字:后端的值
      "price":data.price
    };

    this.setData({
      detail: detail
    });
  },
  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function() {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function() {

  }
})