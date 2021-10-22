import { pipe, compose } from "lodash/fp";

let input = "   JavaScript   ";
let output = "<div>" + input + "</div>";

const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();

// const wrapInDiv = (str) => `<div>${str}</div>`;
// const wrapInSpan = (str) => `<span>${str}</span>`;

const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

//compose reads right to left
const transform = compose(wrap("div"), toLowerCase, trim);
console.log(transform(input));

//pipe reads left to right
const pipeTransform = pipe(trim, toLowerCase, wrap("div"));
console.log(pipeTransform(input));

// const result = wrapInDiv(toLowerCase(trim(input)));
