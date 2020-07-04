import { bubbleSort, selectionSort, insertionSort } from './index';
describe('test Sort ', () => {
	test('sort', () => {
		let arr = [9, 2, 5, 6, 61, 88, 98, 12, 14, 18, 26, 77, 1];

		// console.log(`Sort.bubbleSort ... `, bubbleSort.base([...arr]));

		// console.log(`Sort.bubbleSort1 ... `, bubbleSort.bubbleSort1([...arr]));
		// console.log(`Sort.bubbleSort2 ... `, bubbleSort.bubbleSort2([...arr]));
		// console.log(`Sort.bubbleSort3 ... `, bubbleSort.bubbleSort3([...arr]));

		// console.log(`Sort.selectionSort ... `, selectionSort.base([...arr]));

		console.log(`Sort.insertionSort ... `, insertionSort.base([...arr]));

		debugger;
	});
});
