class BubbleSort {
	/**
	 * 冒泡排序（Bubble Sort）
	 *
	 * 1、比较相邻的元素。如果第一个比第二个大，就交换它们两个
	 * 2、对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；
	 * 3、针对所有的元素重复以上的步骤，除了最后一个；
	 */
	static base(arr: Array<number>): Array<number> {
		let len = arr.length;
		// 边界
		if (len < 2) return arr;
		// 比较起始、边界
		for (let i = 0; i < arr.length - 1; i++) {
			let temp = 0;
			for (let j = 0; j < arr.length - 1 - i; j++) {
				if (arr[j] > arr[j + 1]) {
					temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
		}

		return arr;
	}

	static bubbleSort1(arr: Array<number>): Array<number> {
		let len = arr.length;
		if (len < 2) return arr;
		// 界限
		arr.sort();

		return arr;
	}

	static bubbleSort2(arr: Array<number>): Array<number> {
		let len = arr.length;
		if (len < 2) return arr;
		// 界限
		arr.sort((x, y) => {
			return x > y ? 1 : -1;
		});

		return arr;
	}

	static bubbleSort3(arr: Array<number>): Array<number> {
		let len = arr.length;
		if (len < 2) return arr;
		// 界限
		arr.reduce((x, y) => {
			console.log(x, y);
			return y;
		});

		return arr;
	}
}

export default BubbleSort;
