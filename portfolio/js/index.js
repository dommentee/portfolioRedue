//inner hero varoables
var cursor = document.getElementById('cursor');
//cursuer flicker
var flicker = function () {
    cursor.classList.toggle('flicker-out');
};
var curserFlicker = setInterval(flicker, 560);
//textnode
var newLineCharacter = '|';
var text = document.createTextNode('');
document.getElementById('greeting-wrap').appendChild(text);
var printGreeting = function (str) {
    var i = 0;
    (function getLetters() {
        var char = str[i++];
        text.nodeValue += char == newLineCharacter ? '\n' : char;
        if (i < str.length) {
            setTimeout(getLetters, 200);
        }
    })();
};
printGreeting("Hello world, I'm Domacor Mentee. ");
// printGreeting
//   ("Hello world, I'm Domacor Mentee. | I'm a Front-end front end Developer. ")
// ;