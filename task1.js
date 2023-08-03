const text = 'availability';
const vowels = ['a' , 'e', 'i' , 'o' , 'u'];

function getVowels(string) {
  
  const textVowels = [];

 for (let i=0; i < text.length; i++) {
      if (vowels.includes(text[i])) {
        	textVowels.push(text[i]);
      }

 	}
   return textVowels.toString();
  
}

console.log(getVowels(text));
