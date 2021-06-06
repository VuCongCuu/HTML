var elUsernsme =document.getElementById('username');
var elMsg = document.getElementById('feedback');
function checUsername(minLength){
    if(elUsernsme.value.length <minLength){
        elMsg.innerHTML='Username must be'+ minLength + 'character or more';
    } else {
        elMsg.innerHTML='';
    }
}
if(elUsernsme.addEventListener){
    elUsernsme.addEventListener('blur',function (){
        checUsername(5);
    },false);
} else {
    elUsernsme.attachEvent('onblur',function (){
        checUsername(5);
    });
}