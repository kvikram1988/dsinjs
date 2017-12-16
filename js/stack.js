(function () {
	let Stack = function () {
		this.storage = [];
		this.count = 0;
	}

	Stack.prototype.push = function (item) {
		this.storage.push(item);
		this.count++;
		return this.storage;
	}

	Stack.prototype.pop = function () {
		this.storage.pop();
		//this.storage.splice(this.count-1, 1);
		this.count--;
		return this.storage;
	}

	Stack.prototype.size = function () {
		return this.count;
	}

	Stack.prototype.peek = function () {
		return this.storage[this.count - 1];
	}

	let stack = new Stack();
	console.log("/*------Stack implementation -------*/");
	console.log("Empty stack with size: " + stack.size())
	console.log("Pushed 1 into stack: " + stack.push(1));
	console.log("Pushed 2 into stack: " + stack.push(2));
	console.log("Pushed 3 into stack: " + stack.push(3));
	console.log("Stack peek: " + stack.peek());
	console.log("Pop from stack: " + stack.pop());
	console.log("Pop from stack: " + stack.pop());
	console.log("Size: " + stack.size());
})();