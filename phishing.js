'use strict';

let result = document.getElementById('result');
chrome.storage.sync.get('result', function(data) {
  result.textContent = data.result;
  if (data.result == "Phishing") {
  	result.className = "button gray";
  }
});