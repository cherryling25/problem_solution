// pages/slider/slider.js
Page({

  /**
   * Page initial data
   */
  data: {
    lockStatus : 'locked', // unlock

    temperature: {
      currentValue: 0,
      currentIndex: 0,
      values: [0, 30, 63, 99]
    },
  },

  isLocked: function() {
    if (this.data.lockStatus == 'locked') {
      wx.showModal({
        title: 'Locked',
        content: 'Please Unlock'
      })
      return true;
    }
    return false;
  },

  minusTemperature: function () {
    if (this.isLocked()) {
      return;
    }
    let temp = this.data.temperature;
    if (temp.currentIndex == 0) {
      return;
    }
    temp.currentIndex -= 1;
    temp.currentValue = temp.values[temp.currentIndex];
    this.setData({
      temperature: temp
    });
  },

  addTemperature: function () {
    if (this.isLocked()) {
      return;
    }
    let temp = this.data.temperature;
    if (temp.currentIndex == 3) {
      return;
    }
    temp.currentIndex += 1;
    temp.currentValue = temp.values[temp.currentIndex];
    this.setData({
      temperature: temp
    });
  },
  temperatureChange: function (e) {
    let temp = this.data.temperature;
    if (this.isLocked()) {
      this.setData({
        temperature: temp
      });
      return;
    }
    let value = e.detail.value;
    temp.currentIndex = 0;
    temp.currentValue = 0;
    if (value > 10 && value <= 40) {
      temp.currentIndex = 1;
      temp.currentValue = 30;
    } else if (value > 40 && value <= 74) {
      temp.currentIndex = 2;
      temp.currentValue = 63;
    } else if (value > 74 && value <= 99) {
      temp.currentIndex = 3;
      temp.currentValue = 99;
    }
    this.setData({
      temperature: temp
    });
  },
  

  changeLock: function () {
    let lockStatus = this.data.lockStatus;
    locked = (lockStatus == 'locked' ? 'unlock' : 'locked');
    this.setData({lockStatus});
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})