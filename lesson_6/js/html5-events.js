function setup(){
    var textInput;
    textInput=document.getElementById('message');
    textInput.focus();
}
window.addEventListener('DOMContentLoaded',function (event){
    var message='You have changers that have not been saved';
    (event || window.event).returnValue=message;
    return message;
});