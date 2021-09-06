/**
 * TODO Реализуйте функцию wrapInParagraph, которая принимает на вход текст, разделененный переносами строк и возвращает новый текст, в котором каждая строка обернута в тег

.

Пример:

const text = `Some
simple multiline
text`;

console.log(wrapInParagraph(text)); // <p>Some</p>
// <p>simple multiline</p>
// <p>text</p>

const text2 = 'some\ntext';

console.log(wrapInParagraph(text2)); // <p>some</p>
// <p>text</p>
 */

// function wrapInParagraph(str){
// 	let splitString = str.split('\n');
// 	let paragraph = '';
// 	let newString = '';
// 	for (let i = 0; i < splitString.length; i++) {
// 		paragraph = `<p>${splitString[i]}</p>\n`;
// 		newString += paragraph;
// 	}
// 	return newString.trim();
// }

const wrapInParagraph = str =>
   str
      .split('\n')
      .reduce(
         (newString, paragraph) => (newString += `<p>${paragraph}</p>\n`),
         ''
      )
      .trim();

const text = `Some
simple multiline
text`;
const text2 = 'some\ntext';

console.log(wrapInParagraph(text));
console.log(wrapInParagraph(text2));
