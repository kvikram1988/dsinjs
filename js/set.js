(function () {
	let MySet = function () {
		this.storage = [];
	}

	MySet.prototype.values = function () {
		return this.storage;
	}
	MySet.prototype.has = function (item) {
		if (this.storage.indexOf(item) >= 0) {
			return true;
		}
		return false;
	}

	MySet.prototype.add = function (item) {
		if (!this.has(item)) {
			this.storage.push(item);
		}
		return this.storage;
	}

	MySet.prototype.remove = function (item) {
		if (this.has(item)) {
			let index = this.storage.indexOf(item);
			this.storage.splice(index, 1);
		}
		return this.storage;
	}

	MySet.prototype.union = function (otherSet) {
		otherSet.storage.forEach((otherSetItem) => {
			if (!this.has(otherSetItem)) {
				this.add(otherSetItem);
			}
		})
		return this.storage;
	}

	MySet.prototype.intersection = function (otherSet) {
		let intersectSet = otherSet.storage.filter((otherSetItem) => {
			if (this.has(otherSetItem)) {
				return true;
			}
			return false;
		});
		return intersectSet;
	}

	MySet.prototype.subset = function (otherSet) {
		otherSet.storage.forEach((otherSetItem)=>{
			if(!this.has(otherSetItem)){
				return false;
			}
		});
		return true;
	}

	let set1 = new MySet(),
			set2 = new MySet();

	console.log("/*--- Set implementation ---*/")
	console.log("Push 1 into set1: " + set1.add(1));
	console.log("Push 2 into set1: " + set1.add(2));
	console.log("Push 1 into set2: " + set2.add(1));
	console.log("Push 3 into set2: " + set2.add(3));
	console.log("Push 5 into set2: " + set2.add(5));
	console.log("Push 5 again into set2: " + set2.add(5));
	console.log("Remove 5 from set2: " + set2.remove(5));
	console.log("Union of set1 and set2: " + set1.union(set2));
	console.log("Intersection of set1 and set2: " + set1.intersection(set2));
	console.log("Is set2 subset of set1: " + set1.subset(set2));
})();