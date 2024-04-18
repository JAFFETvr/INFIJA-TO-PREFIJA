import { Conversor } from "../models/Conversor.js";

document.getElementById('convertButton').addEventListener('click', convert);

function convert() {
    const infixExpression = document.getElementById('infixExpression').value;
    const conversor = new Conversor();
    const prefixedExpression = conversor.convertInfixToPrefix(infixExpression); 
    document.getElementById('prefixedExpression').innerText = prefixedExpression;
}
