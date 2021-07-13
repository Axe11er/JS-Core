const defaultTo = (value, defaultValue) => {
	if (value === null || value === undefined || isNaN(value) /*|| typeof value === 'string'*/) {
		return defaultValue;
	}
	return value;
};

console.log(defaultTo('6', 1));