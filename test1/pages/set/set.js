var dian
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dian:0,
    kcmc: "",
    didian:"",
    startzhou:"",
    endzhou:"",
    kcxx:""
  },

  bindKeyInput: function (e) {
    this.setData({
      kcmc: e.detail.value
    })

  },
  bindKeyInput2: function (e) {
    this.setData({
      didian: e.detail.value
    })
  },
  bindKeyInput3: function (e) {
    this.setData({
      skcd: e.detail.value
    })
  },
  bindKeyInput4: function (e) {
    this.setData({
      startzhou: e.detail.value
    })
  },
  bindKeyInput5: function (e) {
    this.setData({
      endzhou: e.detail.value
    })
  },

  //用于保存修改的数据
  save:function(){
    tt.setStorageSync('kcxx', this.data.kcmc + "  "+ this.data.didian + "  " + this.data.startzhou + "~" + this.data.endzhou + "周");
    tt.setStorageSync('skcd', this.data.skcd);
    console.log( this.data.kcmc + "  " + this.data.didian + "  " + this.data.startzhou +"~"+this.data.endzhou+"周");
    tt.navigateTo({
      url: '/pages/index/index?dian=dian'
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     dian = options.idx;
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