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
		let intersectSet = otherSet.storage.map((otherSetItem) => {
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
})();