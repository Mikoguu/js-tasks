const text = 'availability';
const vowels = ['a' , 'e', 'i' , 'o' , 'u'];

function getVowels(string) {
  
  
  const textLetters = string.split('');
  const textVowels = [];

 for (let i=0; i < textLetters.length; i++) {
      if (vowels.includes(textLetters[i]) == true) {
        	textVowels.push(textLetters[i]);
      }

 	}
   return textVowels.toString();
  
}

console.log(getVowels(text));
