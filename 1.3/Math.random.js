const getRandom = (min, max) => {
	let result = Math.round(Math.random() * (max - min) + min);
	return console.log(result);
}
setInterval(getRandom, 1000, 9, 10);