var score =75;
var msg='';
function congratulate(){
    msg += 'Congrutulate!';
}
if(score>=50){
    congratulate();
    msg+= 'Proceed to the next roind.';
}
var el=document.getElementById('answer');
el.innerHTML=msg;