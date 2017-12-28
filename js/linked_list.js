(function () {
	let LinkedList = function () {
		this.length = 0;
		this.head = null;
	}

	let Node = function (element) {
		this.element = element;
		this.next = null;
	}

	LinkedList.prototype.size = function () {
		return this.length;
	}

	LinkedList.prototype.head = function () {
		return this.head;
	}

	LinkedList.prototype.add = function (element) {
		let currentNode;
		if (this.length === 0) {
			this.head = new Node(element);
		} else {
			currentNode = this.head;
			while (currentNode.next) {
				currentNode = currentNode.next;
			}
			currentNode.next = element;
		}
		this.length++;
	}

	LinkedList.prototype.remove = function (element) {
		if (this.size() === 0) {
			console.log("Empty bro!!!");
			return;
		}
		let currentNode = this.head,
			previousNode;

		if (currentNode.element === element) {
			this.head = currentNode.next;
		} else {
			while (currentNode.next) {
				previousNode = currentNode;
				currentNode = currentNode.next;
				if (currentNode.element === element) {
					previousNode.next = currentNode.next;
				}
			}
		}
		this.length--;
	}
	let ll = new LinkedList();
	ll.add(1);
	ll.add(2);
})();