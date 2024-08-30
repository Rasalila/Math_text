const textP = document.querySelector(".html-text");
console.log(textP);
const text = textP.innerHTML;
const length = text.length;
console.log(`1. Количество символов в тексте: ${text.length}`);
console.log(length);

const result = text.replace(/;/g, ";\n");
console.log(`2. Текст c переносами строк: ${result}`);

const substring = result.trim();
console.log(`3. Текст c удалёнными пробелами: ${substring}`);

const newText = result.slice(33, 48);
console.log(`4. Извлечение подстроки: ${newText}`);

const replacedText = newText.replace("клён", "дуб");
console.log(`5. Замена "клён" на "дубе": ${replacedText}`);

const replacedText2 = result.toUpperCase();
console.log(`6. Строка result в верхнем регистре: ${replacedText2}`);

const replacedText3 = result.replace(/клён/g, "дуб");
console.log(
  `7. Замена "клён" на "дуб" (все вхождения) в переменной result: ${replacedText3}`
);

const word = "моря";
const index = word[0];
console.log(`8. Индекс первого вхождения "моря": ${index}`);

// не совсем поняла 9 задание:
// Измените только первую букву в переменной replacedText на заглавную без использования регулярных выражений и сохраните результат в переменную modifiedText.//
const firstLetter = replacedText[0];
const modifiedText = firstLetter.toUpperCase();
console.log(`9. Строка c измененной первой буквой: ${modifiedText}`);

textP.innerText = `Значения всех полученных переменных на экране: 
1. количество символов в тексте: ${length} 
8. Индекс первого вхождения "моря": ${index}
9. Строка c измененной первой буквой: ${modifiedText}
${replacedText3}`;
