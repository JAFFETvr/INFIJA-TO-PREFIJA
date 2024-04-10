import { Conversor } from "../models/Conversor.js";

document.getElementById('convertButton').addEventListener('click', convert);

function convert() {
    const infixExpression = document.getElementById('infixExpression').value;
    const prefixedExpression = Conversor.infixToPrefix(infixExpression);
    document.getElementById('prefixedExpression').innerText = prefixedExpression;
}
