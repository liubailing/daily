/**
 * 选择排序（Selection Sort）
 * 工作原理：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕
 */

class SelectionSrot {
	static base(arr: Array<number>) {
		let len = arr.length;
		let preIdx, curr;
		// 取出下一个元素，在已经排序的元素序列中从后向前扫描；
		for (let i = 1; i < len; i++) {
			preIdx = i - 1;
			curr = arr[i];
			while (preIdx >= 0 && arr[preIdx] > curr) {
				// 如果该元素（已排序）大于新元素，将该元素移到下一位置；
				arr[preIdx + 1] = arr[preIdx];
				preIdx--;
			}
			arr[preIdx + 1] = curr;
		}

		return arr;
	}
}

export default SelectionSrot;
