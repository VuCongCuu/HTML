var el;

function charCount(e){
    var textEntered, charDisplay, counter, lastkay;
    textEntered=document.getElementById('message').value;
    charDisplay=document.getElementById('charactersLeft');
    counter = (180-(textEntered.length));
    charDisplay.textContent=counter;
    lastkay=document.getElementById('lastKey');
    lastkay.textContent='Last kay in ASCII code:' + e.keyCode;
}
el=document.getElementById('message');
el.addEventListener('keyup',charCount,false);