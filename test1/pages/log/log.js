// pages/log/log.js
const LarkCloud = require('./libs/larkcloud-mp-alpha.min.js');
const serviceId = 'af8581'; // 替换成你的 serviceId，可在后台「设置」页面获取
// 初始化
const larkcloud = new LarkCloud({ serviceId });

Page({
  data: { 

  },
  listenerid: function(e) {
      this.data.id = e.detail.value;
  },
  listenername: function(e) {
      this.data.name = e.detail.value;
  },

  onfocus: function (e) {
    console.log(e)
    this.setData({focusDetail: JSON.stringify(e.detail)})
  },

  onconfirm: function (e) {
    tt.showToast({title: 'confirm'})
  },
  
  onLoad: function (options) {
    var student = tt.getStorageSync('student');
    console.log('身份认证:',student)
  },


   ke:function(){
    tt.reLaunch({
  url: '/pages/subject/subject', // 指定页面的url
})
    console.log('学号: ', this.data.id);
    console.log('姓名: ', this.data.name);
    larkcloud.run('identity', {
num:this.data.id,
name:this.data.name,
identity:'student',
}).then(data => {
console.log('调用成功',data);
       }); 

  }

})
