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

const printGreeting = (str) => {
  let i: any = 0;
  (function getLetters() {
    const char = str[i++];
    text.nodeValue += char == newLineCharacter ? '\n' : char;
    if (i < str.length) {
      setTimeout(getLetters, 200);
      introWrap.classList.add('hide')
    } else {
      cursor.classList.add('display-none')
      setTimeout(showIntro, 800)
      // introWrap.classList.add('show')
    }
  })();
  
};
printGreeting
  ("Hello world, I'm Domacor Mentee.")
;

// printGreeting
//   ("Hello world, I'm Domacor Mentee. | I'm a Front-end front end Developer. ")
// ;





