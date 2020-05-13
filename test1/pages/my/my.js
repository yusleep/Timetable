// pages/my/my.js
Page({
  data: {focus: false,

  },
  bindButtonTap: function (e) {
    this.setData({
      focus: true,
    })
  },
  onfocus: function (e) {
    console.log(e)
    this.setData({focusDetail: JSON.stringify(e.detail)})
  },
  onblur: function (e) {
    tt.showToast({title: 'blur'})
  },
  onconfirm: function (e) {
    tt.showToast({title: 'confirm'})
  },
  onLoad: function (options) {

  },
  goToSubject:function(){
    tt.navigateTo({
  url: '/pages/subject/subject', // 指定页面的url
})
  },
})