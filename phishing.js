'use strict';

let url = document.getElementById('url');
chrome.storage.sync.get('url', function(data) {
  url.textContent = data.url;
});