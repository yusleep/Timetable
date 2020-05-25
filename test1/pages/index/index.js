// pages/index/index.js
Page({
  data: {
 },
  onLoad: function (options) {

  },
  goToStudent:function(){
    tt.navigateTo({
  url: '/pages/log/log', // 指定页面的url
})
    tt.setStorageSync('student','student');
  },
  goToTeacher:function(){
    tt.navigateTo({
      url:'/pages/my/my',
    })
    tt.setStorageSync('teacher','teacher' );
  }
})

