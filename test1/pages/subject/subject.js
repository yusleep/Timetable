const LarkCloud = require('./libs/larkcloud-mp-alpha.min.js');
const serviceId = 'af8581'; // 替换成你的 serviceId，可在后台「设置」页面获取
// 初始化
const larkcloud = new LarkCloud({ serviceId });
Page({
  data: {
    
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
     wlist: [

     //上课长度全部默认为两节课

      { "xqj": 1, "sksj": 1, "skcd":1, "kcxx": "高等数学 教学楼0218 1~16周"},
      { "xqj": 1, "sksj": 2, "skcd":1, "kcxx": "高等数学 教学楼0218 1~16周"},
      { "xqj": 1, "sksj": 3, "skcd": 1, "kcxx": ""},
      { "xqj": 1, "sksj": 4, "skcd": 1, "kcxx": ""},
      { "xqj": 1, "sksj": 5, "skcd": 1, "kcxx":"大学英语 教学楼0318 1~16周"},
      { "xqj": 1, "sksj": 6, "skcd": 1, "kcxx": "" },
      { "xqj": 1, "sksj": 7, "skcd": 1, "kcxx": "" },
      { "xqj": 1, "sksj": 8, "skcd": 1, "kcxx": ""},
      { "xqj": 1, "sksj": 9, "skcd": 1, "kcxx": ""},
      { "xqj": 1, "sksj": 10, "skcd": 1, "kcxx":"大学英语 教学楼0318 1~16周"},
      { "xqj": 1, "sksj": 11, "skcd": 1, "kcxx": "" },
      { "xqj": 1, "sksj": 12, "skcd": 1, "kcxx": "" },
      { "xqj": 1, "sksj": 13, "skcd": 1, "kcxx": "" },
      { "xqj": 2, "sksj": 1, "skcd":1, "kcxx": "高等数学 教学楼0218 1~16周"},
      { "xqj": 2, "sksj": 2, "skcd":1, "kcxx": "高等数学 教学楼0218 1~16周"},
      { "xqj": 2, "sksj": 3, "skcd": 1, "kcxx": ""},
      { "xqj": 2, "sksj": 4, "skcd": 1, "kcxx": ""},
      { "xqj": 2, "sksj": 5, "skcd": 1, "kcxx":"大学英语 教学楼0318 1~16周"},
      { "xqj": 2, "sksj": 6, "skcd": 1, "kcxx": "" },
      { "xqj": 2, "sksj": 7, "skcd": 1, "kcxx": "" },
      { "xqj": 2, "sksj": 8, "skcd": 1, "kcxx": ""},
      { "xqj": 2, "sksj": 9, "skcd": 1, "kcxx": ""},
      { "xqj": 2, "sksj": 10, "skcd": 1, "kcxx":"大学英语 教学楼0318 1~16周"},
      { "xqj": 2, "sksj": 11, "skcd": 1, "kcxx": "" },
      { "xqj": 2, "sksj": 12, "skcd": 1, "kcxx": "" },
      { "xqj": 2, "sksj": 13, "skcd": 1, "kcxx": "" },
      { "xqj": 3, "sksj": 1, "skcd":1, "kcxx": "高等数学 教学楼0218 1~16周"},
      { "xqj": 3, "sksj": 2, "skcd":1, "kcxx": "高等数学 教学楼0218 1~16周"},
      { "xqj": 3, "sksj": 3, "skcd": 1, "kcxx": ""},
      { "xqj": 3, "sksj": 4, "skcd": 1, "kcxx": ""},
      { "xqj": 3, "sksj": 5, "skcd": 1, "kcxx":"大学英语 教学楼0318 1~16周"},
      { "xqj": 3, "sksj": 6, "skcd": 1, "kcxx": "" },
      { "xqj": 3, "sksj": 7, "skcd": 1, "kcxx": "" },
      { "xqj": 3, "sksj": 8, "skcd": 1, "kcxx": ""},
      { "xqj": 3, "sksj": 9, "skcd": 1, "kcxx": ""},
      { "xqj": 3, "sksj": 10, "skcd": 1, "kcxx":"大学英语 教学楼0318 1~16周"},
      { "xqj": 3, "sksj": 11, "skcd": 1, "kcxx": "" },
      { "xqj": 3, "sksj": 12, "skcd": 1, "kcxx": "" },
      { "xqj": 3, "sksj": 13, "skcd": 1, "kcxx": "" },
      { "xqj": 4, "sksj": 1, "skcd":1, "kcxx": "高等数学 教学楼0218 1~16周"},
      { "xqj": 4, "sksj": 2, "skcd":1, "kcxx": "高等数学 教学楼0218 1~16周"},
      { "xqj": 4, "sksj": 3, "skcd": 1, "kcxx": ""},
      { "xqj": 4, "sksj": 4, "skcd": 1, "kcxx": ""},
      { "xqj": 4, "sksj": 5, "skcd": 1, "kcxx":"大学英语 教学楼0318 1~16周"},
      { "xqj": 4, "sksj": 6, "skcd": 1, "kcxx": "" },
      { "xqj": 4, "sksj": 7, "skcd": 1, "kcxx": "" },
      { "xqj": 4, "sksj": 8, "skcd": 1, "kcxx": ""},
      { "xqj": 4, "sksj": 9, "skcd": 1, "kcxx": ""},
      { "xqj": 4, "sksj": 10, "skcd": 1, "kcxx":"大学英语 教学楼0318 1~16周"},
      { "xqj": 4, "sksj": 11, "skcd": 1, "kcxx": "" },
      { "xqj": 4, "sksj": 12, "skcd": 1, "kcxx": "" },
      { "xqj": 4, "sksj": 13, "skcd": 1, "kcxx": "" },
      { "xqj": 5, "sksj": 1, "skcd":1, "kcxx": "高等数学 教学楼0218 1~16周"},
      { "xqj": 5, "sksj": 2, "skcd":1, "kcxx": "高等数学 教学楼0218 1~16周"},
      { "xqj": 5, "sksj": 3, "skcd": 1, "kcxx": ""},
      { "xqj": 5, "sksj": 4, "skcd": 1, "kcxx": ""},
      { "xqj": 5, "sksj": 5, "skcd": 1, "kcxx":"大学英语 教学楼0318 1~16周"},
      { "xqj": 5, "sksj": 6, "skcd": 1, "kcxx": "" },
      { "xqj": 5, "sksj": 7, "skcd": 1, "kcxx": "" },
      { "xqj": 5, "sksj": 8, "skcd": 1, "kcxx": ""},
      { "xqj": 5, "sksj": 9, "skcd": 1, "kcxx": ""},
      { "xqj": 5, "sksj": 10, "skcd": 1, "kcxx":"大学英语 教学楼0318 1~16周"},
      { "xqj": 5, "sksj": 11, "skcd": 1, "kcxx": "" },
      { "xqj": 5, "sksj": 12, "skcd": 1, "kcxx": "" },
      { "xqj": 5, "sksj": 13, "skcd": 1, "kcxx": "" },
      { "xqj": 6, "sksj": 1, "skcd":1, "kcxx": "高等数学 教学楼0218 1~16周"},
      { "xqj": 6, "sksj": 2, "skcd":1, "kcxx": "高等数学 教学楼0218 1~16周"},
      { "xqj": 6, "sksj": 3, "skcd": 1, "kcxx": ""},
      { "xqj": 6, "sksj": 4, "skcd": 1, "kcxx": ""},
      { "xqj": 6, "sksj": 5, "skcd": 1, "kcxx":"大学英语 教学楼0318 1~16周"},
      { "xqj": 6, "sksj": 6, "skcd": 1, "kcxx": "" },
      { "xqj": 6, "sksj": 7, "skcd": 1, "kcxx": "" },
      { "xqj": 6, "sksj": 8, "skcd": 1, "kcxx": ""},
      { "xqj": 6, "sksj": 9, "skcd": 1, "kcxx": ""},
      { "xqj": 6, "sksj": 10, "skcd": 1, "kcxx":"大学英语 教学楼0318 1~16周"},
      { "xqj": 6, "sksj": 11, "skcd": 1, "kcxx": "" },
      { "xqj": 6, "sksj": 12, "skcd": 1, "kcxx": "" },
      { "xqj": 6, "sksj": 13, "skcd": 1, "kcxx": "" },
      { "xqj": 7, "sksj": 1, "skcd":1, "kcxx": "高等数学 教学楼0218 1~16周"},
      { "xqj": 7, "sksj": 2, "skcd":1, "kcxx": "高等数学 教学楼0218 1~16周"},
      { "xqj": 7, "sksj": 3, "skcd": 1, "kcxx": ""},
      { "xqj": 7, "sksj": 4, "skcd": 1, "kcxx": ""},
      { "xqj": 7, "sksj": 5, "skcd": 1, "kcxx":"大学英语 教学楼0318 1~16周"},
      { "xqj": 7, "sksj": 6, "skcd": 1, "kcxx": "" },
      { "xqj": 7, "sksj": 7, "skcd": 1, "kcxx": "" },
      { "xqj": 7, "sksj": 8, "skcd": 1, "kcxx": ""},
      { "xqj": 7, "sksj": 9, "skcd": 1, "kcxx": ""},
      { "xqj": 7, "sksj": 10, "skcd": 1, "kcxx":"大学英语 教学楼0318 1~16周"},
      { "xqj": 7, "sksj": 11, "skcd": 1, "kcxx": "" },
      { "xqj": 7, "sksj": 12, "skcd": 1, "kcxx": "" },
      { "xqj": 7, "sksj": 13, "skcd": 1, "kcxx": "" },
    ]

  },




  /**
   * 页面的初始数据
   */

 

  /**
   * 生命周期函数--监听页面加载
   */


onLoad: function () {

 var kcxx_;
 larkcloud.run('class_xx').then(data => {
  for(var i=0;i<91;i++){
   kcxx_="wlist["+i+"].kcxx";
    if(data.result[i].kcxx!=" "){
    this.setData({    
    
     [kcxx_]:data.result[i].kcxx +'\n'+ data.result[i].didian +'\n'+ data.result[i].startzhou + "~" + data.result[i].endzhou + "周",
   })
    }
   

   }
  console.log('调用成功',data.result[0].kcxx +'\n'+ data.result[0].didian +'\n'+ data.result[0].startzhou + "~" + data.result[0].endzhou + "周");
     

 }); 

},

showCardView: function (e) {
var idx= e.currentTarget.dataset.index;
this.setData({
idx,
})
tt.setStorageSync('idxs', this.data.idx);
console.log(idx)
console.log(this.data.wlist[this.data.idx].kcxx)
console.log(e.currentTarget.dataset.idx)
tt.navigateTo({
url: '/pages/set/set?idx=idx'
});
},


})