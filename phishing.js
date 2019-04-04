'use strict';

let result = document.getElementById('result');
chrome.storage.sync.get('result', function(data) {
  result.textContent = "This website is most likely " + data.result;
});