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
