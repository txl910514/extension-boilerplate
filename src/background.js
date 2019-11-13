global.browser = require('webextension-polyfill');
import store from './store';

chrome.browserAction.setTitle({
  title: '20191113',
});
chrome.browserAction.setBadgeText({
  text: '哈哈',
});
chrome.browserAction.setBadgeBackgroundColor({ color: [255, 0, 0, 255] });

let node = document.createElement('script');
node.setAttribute('id', 'expand');
node.setAttribute('src', 'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/jquery/jquery-1.10.2.min_65682a2.js');
document.body.appendChild(node);

chrome.management.onDisabled.addListener(function(info) {
  console.log(info);
});
chrome.management.onEnabled.addListener(function(info) {
  console.log(info);
  // chrome.tabs.sendMessage(tabId, '', function(response)
  // {
  //     if(callback) callback(response);
  // });
});
chrome.tabs.onSelectionChanged.addListener(function(tabId, selectInfo) {
  console.log(tabId);
  chrome.tabs.get(tabId, function(Tab, tab) {});
});

function sendMessageToContentScript(message, callback) {
  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    console.log(tabs);
    // chrome.tabs.sendMessage(tabs[0].id, message, function(response)
    // {
    //     if(callback) callback(response);
    // });
  });
}
sendMessageToContentScript({ cmd: 'test', value: '你好，我是popup！' }, function(response) {
  console.log('来自content的回复：' + response);
});
