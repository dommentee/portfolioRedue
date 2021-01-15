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

const printGreeting = (str) => {
  let i: number = 0;
  (function getLetters() {
    const char = str[i++];
    text.nodeValue += char == newLineCharacter ? '\n' : char;
    if (i < str.length) {
      setTimeout(getLetters, 200)
    }

  })();

}

printGreeting
  ("Hello world, I'm Domacor Mentee. ")
;

// printGreeting
//   ("Hello world, I'm Domacor Mentee. | I'm a Front-end front end Developer. ")
// ;




