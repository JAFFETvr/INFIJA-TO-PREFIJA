import { prefixStack, operatorsStack } from "../controllers/dependencias.js";

export class Conversor {
    static infixToPrefix(infix) {
        const precedence = { '+': 1, '-': 1, '*': 2, '/': 2, '^': 3 };

        function getPrecedence(operator) {
            return precedence[operator] || 0;
        }

        function isOperator(char) {
            return precedence[char] !== undefined;
        }

        for (let i = infix.length - 1; i >= 0; i--) {
            const char = infix[i];

            if (char === ' ') {
                continue;
            }

            if (isOperator(char)) {
                while (!operatorsStack.isEmpty() && getPrecedence(operatorsStack.peek()) > getPrecedence(char)) {
                    prefixStack.push(operatorsStack.pop());
                }
                operatorsStack.push(char);
            } else if (char === '(') {
                while (operatorsStack.peek() !== ')') {
                    prefixStack.push(operatorsStack.pop());
                }
                operatorsStack.pop();
            } else if (char === ')') {
                operatorsStack.push(char);
            } else {
                prefixStack.push(char);
            }
        }

        while (!operatorsStack.isEmpty()) {
            prefixStack.push(operatorsStack.pop());
        }

        let prefixedExpression = '';
        while (!prefixStack.isEmpty()) {
            prefixedExpression += prefixStack.pop();
        }

        return prefixedExpression;
    }
}
