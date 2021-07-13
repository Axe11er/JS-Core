function wrapInParagraph(str){
	let splitString = str.split('\n');
	let paragraph = '';
	let newString = '';
	for (let i = 0; i < splitString.length; i++) {
		paragraph = `<p>${splitString[i]}</p>\n`;
		newString += paragraph; 
	}
	return newString.trim();
}

const text = `Some
simple multiline
text`;
const text2 = 'some\ntext';

console.log(wrapInParagraph(text2));