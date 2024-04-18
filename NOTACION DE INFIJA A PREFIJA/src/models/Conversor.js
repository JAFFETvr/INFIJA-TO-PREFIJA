import { prefixStack, operatorsStack } from "../controllers/dependencias.js";

export class Conversor {
    isOperator(x) {
        switch (x) {
            case '+':
            case '-':
            case '/':
            case '*':
                return true;
        }
        return false;
    }

    convertInfixToPrefix(infix) {
        const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };
        let result = '';

        for (let i = infix.length - 1; i >= 0; i--) {
            const char = infix[i];

            if (this.isOperator(char)) {
                while (!operatorsStack.isEmpty() && precedence[operatorsStack.peek()] >= precedence[char] && operatorsStack.peek() !== '(') {
                    prefixStack.push(operatorsStack.pop());
                }
                operatorsStack.push(char);
            } else if (char === ')') {
                operatorsStack.push(char);
            } else if (char === '(') {
                while (!operatorsStack.isEmpty() && operatorsStack.peek() !== ')') {
                    prefixStack.push(operatorsStack.pop());
                }
                operatorsStack.pop();
            } else {
                prefixStack.push(char);
            }
        }
        while (!operatorsStack.isEmpty()) {
            prefixStack.push(operatorsStack.pop());
        }

        while (!prefixStack.isEmpty()) {
            result += prefixStack.pop();
        }

        return result;
    }
}
