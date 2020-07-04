/**
 * 选择排序（Selection Sort）
 * 工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕
 */

class SelectionSrot {
	static base(arr: Array<number>) {
		let len = arr.length;

		for (let i = 0; i < len - 1; i++) {
			let minIndex = i,
				temp;
			// console.log(`>>>>>`, minIndex, i);
			for (let j = i + 1; j < len; j++) {
				console.log(`>>>>> `, minIndex, i);
				console.log(`>>>>> 奇怪`, arr[minIndex], arr[i]);
				if (arr[j] > arr[minIndex]) {
					minIndex = j;
				}
			}
			temp = arr[i];
			arr[i] = arr[minIndex];
			arr[minIndex] = temp;
		}

		return arr;
	}
}

export default SelectionSrot;
