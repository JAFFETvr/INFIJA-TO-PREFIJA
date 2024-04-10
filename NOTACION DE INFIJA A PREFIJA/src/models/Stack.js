import { Node } from "./Nodo.js";

export class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (!this.isEmpty()) {
            const popped = this.top;
            this.top = this.top.next;
            this.size--;
            return popped.data;
        }
        return null;
    }

    peek() {
        return this.isEmpty() ? null : this.top.data;
    }

    isEmpty() {
        return this.size === 0;
    }
}