/**
 * TODO Напишите функцию findAllIdx(arr, value), которая возвращает массив индексов элементов, у которые значение равно value.
 */

function findAllIdx(arr, value) {
	let indexes = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === value) {
			console.log(i);
			indexes.push(i)
		}
	}

	return indexes;
}
console.log(findAllIdx([1, 1, 2, 1, 3], 5));