function capitalize(str) {
	let splitStr = str.split(' ');
	let newString = '';
	let word;
	for (let i = 0; i < splitStr.length; i++) {
		word = splitStr[i];
		newString += word.slice(0, 1).toUpperCase() + word.slice(1).toLowerCase() + ' ';
	}
	return newString.trim();
}

console.log(capitalize('идет медведь по лЕСУ'));