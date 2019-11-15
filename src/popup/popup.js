import Vue from 'vue';
import App from './App';
import store from '../store';
import router from './router';

global.browser = require('webextension-polyfill');
Vue.prototype.$browser = global.browser;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
});

//页面加载完毕后，进行执行该事件
// document.addEventListener('DOMContentLoaded', function () {
// 	//获取后台js执行的数据
//   var data = chrome.extension.getBackgroundPage().resdata;
//   console.log(data);
// 	// var url=data.url;
// 	// jQuery('#qrcode').qrcode(url);
// 	// jQuery('#msgtip').text("手机扫码即可访问对应的URL");
// });
