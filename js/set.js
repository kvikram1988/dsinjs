let Set = function () {
	this.storage = [];
}

Set.prototype.values = function () {
	return this.storage;
}
Set.storage.has = function (item) {
	if(this.storage.indexOf(item) >= 0) {
		return true;
	}
	return false;
}

Set.prototype.add = function (item) {
	if(!this.has(item)) {
		this.storage.push(item);
	}
	return this.storage;
}

Set.prototype.remove = function (item) {
	if(this.has(item)) {
		let index = this.storage.indexOf(item);
		this.storage.splice(index, 1);
	}
	return this.storage;
}

Set.prototype.union = function (otherSet) {
	otherSet.forEach((otherSetItem)=>{
		this.storage.add(otherSetItem);
	})
	return this.storage;
}