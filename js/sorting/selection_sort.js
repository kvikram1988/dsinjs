(function () {
	let selectionSort = function (srcArray) {
		for(i=0; i<srcArray.length; i++) {
			let minIndex = i;
			for(j=i+1; j<srcArray.length; j++) {
				if(srcArray[minIndex] > srcArray[j]) {
					minIndex = j
				}
			}
			temp = srcArray[i];
			srcArray[i] = srcArray[minIndex];
			srcArray[minIndex] = temp;
		}
		return srcArray;
	};

	console.log(selectionSort([21,1,45,12,0]));
})();