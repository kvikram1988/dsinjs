(function () {
	let PriorityQueue = function () {
		this.storage = [];
	}

	PriorityQueue.prototype.isEmpty = function () {
		return (this.storage.length === 0);
	}

	PriorityQueue.prototype.enqueue = function (item) {
		if (this.isEmpty()) {
			this.storage.push(item);
		} else {
			let added = false;
			this.storage.forEach((queueItem, i) => {
				if (queueItem[1] > item[1]) {
					this.storage.splice(i, 0, item);
					added = true;
					return;
				}
			});
			if (added === false) {
				this.storage.push(item);
			}
		}
		return this.storage;
	}

	PriorityQueue.prototype.dequeue = function () {
		this.storage.shift();
		return this.storage;
	}

	let pq = new PriorityQueue();
	console.log("/*--- Priority Queue Implementation ---*/")
	console.log("Enqueue a(p-1) in the queue: " + pq.enqueue(["a", 1]));
	console.log("Enqueue b(p-2) in the queue: " + pq.enqueue(["b", 2]));
	console.log("Enqueue c(p-3) in the queue: " + pq.enqueue(["c", 3]));
	console.log("Enqueue d(p-2) in the queue: " + pq.enqueue(["d", 2]));
})();