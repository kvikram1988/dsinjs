(function () {
	let Queue = function () {
		this.storage = [];
	}

	Queue.prototype.enqueue = function (item) {
		this.storage.push(item);
		return this.storage;
	}

	Queue.prototype.dequeue = function (item) {
		this.storage.shift();
		return this.storage;
	}

	Queue.prototype.isEmpty = function () {
		return (this.storage.length === 0);
	}

	Queue.prototype.size = function () {
		return this.storage.length;
	}

	Queue.prototype.peek = function () {
		return this.storage[0];
	}

	let que = new Queue();
	/*--- Queue implementation ---*/
	console.log("Is Queue empty: " + que.isEmpty());
	console.log("Enqueue a: " + que.enqueue('a'));
	console.log("Enqueue b: " + que.enqueue('b'));
	console.log("Enqueue c: " + que.enqueue('c'));
	console.log("Dequeue: " + que.dequeue());
	console.log("Queue size: " + que.size());
	console.log("Queue Peek: " + que.peek())
})();