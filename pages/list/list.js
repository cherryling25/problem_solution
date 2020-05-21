// pages/list/list.js
Page({

  /**
   * Page initial data
   */
  data: {
    currentSelected: 0, // 
    list: [], //
  },

  chooseTap(e) {
    var that = this
    that.setData({
      currentSelected: e.currentTarget.dataset.index,
      money: e.currentTarget.dataset.money,
      type: e.currentTarget.dataset.type,
    })
    console.log()
  },
 
  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function(options) {
    this.list();
  },

  list: function() {
    let requestUrl = '/wxpay/pay';
    let requestData = {
      //"type": that.data.type,
    }
    /*wx.request({
      url: getApp().globalData.dataUrl + requestUrl,
      method: "post",
      header: {
        "TOKENA": getApp().globalData.token,
      },
      data: requestData,
      success: (responseData) => {
        console.log(responseData); // 看后端返回的数据结构
        if (responseData.data) { // 判断是否有数据
          this.parseList(responseData.data); // 调parselist方法 解析。。。
        } else {

        }
      }
    })；*/
    this.parseList(this.mockedData());
  },
  parseList: function(data) {
    let list = new Array();

    for (let i = 0, length = data.length; i < length; i++) {
      let sourceItem = data[i];
      let item = {
        id: sourceItem.id,
        number: sourceItem.number,
        money: sourceItem.money,
        text: sourceItem.text,
        cash: sourceItem.cash
      };
      list.push(item);
    };

    this.setData({
      list: list
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

  },
  mockedData: function() {
    let list = [{
        id: 0,
        money: '1',
        type: '1',
        number: 50,
        text: "一两",
        cash: 12.8,
      },
      {
        id: 1,
        money: '1',
        type: '1',
        number: 50,
        text: "一两",
        cash: 12.8,
      },
      {
        id: 2,
        money: '1',
        type: '1',
        number: 50,
        text: "一两",
        cash: 12.8,
      },
      {
        id: 3,
        money: '1',
        type: '1',
        number: 50,
        text: "一两",
        cash: 12.8,
      },
      {
        id: 4,
        money: '1',
        type: '1',
        number: 50,
        text: "一两",
        cash: 12.8,
      }
    ];
    return list;
  },
})