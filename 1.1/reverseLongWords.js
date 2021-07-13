const reverseLongWords = (str) => {
	let splitStr = str.split(' ');
	let word;
	let reversedWord = '';
	let newString = '';
	for (let i = 0; i < splitStr.length; i++) {
		word = splitStr[i];
		if (word.length >= 5) {
			reversedWord = word.split('').reverse().join('');
			newString += reversedWord + ' ';
		} else {
			newString += word + ' ';
		}
	}
	return newString.trim();
};

console.log(reverseLongWords('мышка норушка в лесу встретила кукушку'));