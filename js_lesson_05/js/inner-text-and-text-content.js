var firstItem=document.getElementById('one');
var showTextcontent = firstItem.textContent;
var showInnerText =firstItem.innerText;

var msg='<p>textcontent:'+ showTextcontent + '</p>';
msg += '<p>innerText:' +showInnerText +'</p>';
var el=document.getElementById('scriptResults');
el.innerHTML=msg;
firstItem.textContent='sourdough bread';