function compareWithPrecision(a, b, precision) {
	if (Math.max(a, b) - Math.min(a, b) <= precision) {
			return true;
	}
	return false;
}

console.log(compareWithPrecision(-1, -2, 2));