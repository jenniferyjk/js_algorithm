

//String 형 변환

console.log(String(123));
console.log(String(1 / 0));
console.log(String(-1 / 0));
console.log(String(NaN));
console.log(String(true));
console.log(String(false));
console.log(String(undefined));
console.log(String(null));
console.log(String("hahah"));

//Number 형 변환

console.log(Number(""));
console.log(Number("123"));
console.log(Number("hello"));
console.log(Number("123hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));

console.log(parseInt("123.123"));
console.log(parseFloat("123.123"));


//Boolean 형 변환

console.log(Boolean(""));
console.log(Boolean("123"));
console.log(Boolean("hello"));
console.log(Boolean("0"));
console.log(Boolean(0));
console.log(Boolean(123));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));