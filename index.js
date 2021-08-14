const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (tuts) => {
  return tutorials.map(titleCaser);


}

const titleCaser = (sentence) => { 
  let capitalized = [];
  let phrase = sentence.split(' ');
  let newPhrase = [];
  capitalized = phrase.map(function(word) {
     let newWord = word[0].toUpperCase() + word.slice(1);
     newPhrase.push(newWord);
});
 //console.log(capitalized);
 return newPhrase.join(' ');

}


console.log(titleCased(tutorials));