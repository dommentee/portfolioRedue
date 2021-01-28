//infninite rotation of carousel

//inner hero varoables
const cursor: HTMLElement = document.getElementById('cursor');
//cursuer flicker
const flicker = () => {
  cursor.classList.toggle('flicker-out');
}
const curserFlicker = setInterval(flicker, 560);
//textnode
const newLineCharacter = '|';
const text = document.createTextNode('');
document.getElementById('greeting-wrap').appendChild(text);

const introWrap: any = document.getElementById('intro-wrap');
const showIntro = () => {
  introWrap.classList.add('show')
} 
const hideCursor = () => {
  cursor.classList.add('hide')
}

const printGreeting = (str) => {
  let i: any = 0;
  (function getLetters() {
    const char = str[i++];
    text.nodeValue += char == newLineCharacter ? '\n' : char;
    if (i < str.length) {
      setTimeout(getLetters, 0);
      introWrap.classList.add('hide')
    } else {
      setTimeout(hideCursor, 600)
      setTimeout(showIntro, 900)
    }
  })();
  
};
printGreeting
  ("Hello world, I'm Domacor Mentee.")
;

// printGreeting
//   ("Hello world, I'm Domacor Mentee. | I'm a Front-end front end Developer. ")
// ;





