//mobile nav
//nav in header for toggle and display nav
var burgerMenue = document.querySelector('.uinav');
var nav = document.getElementsByClassName('mobile-nav');
function openNav() {
    if (nav[0].classList) {
        nav[0].classList.toggle('closeNav');
    }
    else {
        //IE9
        var classes = nav[0].className.split(" ");
        var i = classes.indexOf('closeNav');
        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push('closeNav');
        nav[0].className = classes.join(" ");
    }
    //nav[0].classList.toggle('closeNav')
    document.getElementById('barone').classList.toggle('disapear');
    document.getElementById('bartwo').classList.toggle('reverse');
    document.getElementById('barthree').classList.toggle('reversetwo');
}
;
burgerMenue.addEventListener('click', openNav);
//infninite rotation of carousel
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
var introWrap = document.getElementById('intro-wrap');
var showIntro = function () {
    introWrap.classList.add('show');
};
var hideCursor = function () {
    cursor.classList.add('hide');
};
var printGreeting = function (str) {
    var i = 0;
    (function getLetters() {
        var char = str[i++];
        text.nodeValue += char == newLineCharacter ? '\n' : char;
        if (i < str.length) {
            setTimeout(getLetters, 68);
            introWrap.classList.add('hide');
        }
        else {
            setTimeout(hideCursor, 600);
            setTimeout(showIntro, 900);
        }
    })();
};
printGreeting("Hello world, I'm Domacor Mentee.");
// printGreeting
//   ("Hello world, I'm Domacor Mentee. | I'm a Front-end front end Developer. ")
// ;
