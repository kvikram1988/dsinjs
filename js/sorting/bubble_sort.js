(function () {
	let bubbleSort = function (srcArray) {
		let len = srcArray.length;
		for(var i=len; i>0; i--) {
			for(var j=1; j<i; j++) {
				if(srcArray[j-1] > srcArray[j]) {
					let temp = srcArray[j-1];
					srcArray[j-1] = srcArray[j];
					srcArray[j] = temp;
				}
			}
		}
		return srcArray;
	};

	console.log(bubbleSort([21,1,45,12,0]));
})();