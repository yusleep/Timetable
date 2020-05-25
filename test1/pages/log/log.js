// pages/log/log.js
const LarkCloud = require('./libs/larkcloud-mp-alpha.min.js');
const serviceId = 'af8581'; // 替换成你的 serviceId，可在后台「设置」页面获取
// 初始化
const larkcloud = new LarkCloud({ serviceId });

Page({
  data: { 
    array:[],
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
var student= tt.getStorageSync('student');
    console.log('身份认证:',student)
  },

   ke:function(){
    
    console.log('学号: ', this.data.id);
    console.log('姓名: ', this.data.name);
 if(this.data.id&&this.data.name){
    larkcloud.run('identity', {
num:this.data.id,
name:this.data.name,
identity:tt.getStorageSync('student'),
}).then(data => {
if(data==1){
  tt.reLaunch({
  url: '/pages/subject/subject', // 指定页面的url
})
}else{
 tt.showToast({
    title: '信息错误',
    duration: 1000,
    success (res) {
        console.log(`${res}`);
    },
    fail (res) {
        console.log(`showToast 调用失败`);
    }
});


}

 }); 
       
}
  else{
       tt.showToast({
    title: '请输入姓名学号！',
    duration: 2000,
    success (res) {
        console.log(`${res}`);
    },
    fail (res) {
        console.log(`showToast 调用失败`);
    }
       })
     }

}
})