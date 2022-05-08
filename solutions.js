
/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} value
 * @return {string}
 */
 function rle(value) {
	const arr=[];
	let count = 1;
	for (let i = 0; i<value.length;i++){
		 if (value[i] !== value[i+1]){
			  count > 1 ? arr.push(value[i] + count) :
			  arr.push(value[i])
			  count = 1;
		 } else {
			  count++;
		 }

	}
	return arr.join('');
}

console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'));

/**
 * Является ли строка палиндромом
 * @param  {string}  value
 * @return {boolean}
 */
 function isPalindrome(value) {
	value = value.toUpperCase().split(' ').map(item=>item.split('')).flat();
	return value.join('') === value.reverse().join('');
}

console.log(isPalindrome('abcd')); // false
console.log(isPalindrome('A man a plan a canal Panama'));// true

/**
 * Получения двумерный массив анаграмм из произвольного массива слов
 * @param   {string[]} list
 * @returns {Array<[string, string]>}
 */
 function getAnagrams(list) {
	const obj={};
	for (let i = 0; i<list.length-1; i++){
		 for (let j = i + 1; j<list.length;j++){
			  if (list[i].split('').sort().join('') ===
			  list[j].split('').sort().join('')){
					obj[list[i]] = list[j];
			  }
		 }
	}
	return Object.entries(obj);
}

const inputList = [
  'кот', 'пила', 'барокко',
  'стоп', 'ток', 'кошка',
  'липа', 'коробка', 'пост',
];

// Проверка (лучше смотреть в консоль)
console.log(getAnagrams(inputList));
// [
//   ['кот', 'ток'],
//   ['пила', 'липа'],
//   ['барокко', 'коробка'],
//   ['стоп', 'пост'],
// ]

/**
 * Получения массива уникальных значений
 * @param  {number[]} values
 * @return {*}
 */
 function uniq(values) {
	values = [...new Set(values)]
  return values;
}

console.log(uniq([2, 3, 1, 2, 1, 5, 6, 3, 1, 8, 5]));

/**
 * Реализовать функция для чисел фибоначчи
 * @param {*} n номер элемента фибоначчи
 * @returns
 */
function fib(n) {
	switch(n){
		case 0: return 0;
		case 1: return 1;
		case 2: return 1;
		default:
		let i = 3;
		let result = 0;
		while(i<=n){
			result = fib(i-1) + fib(i-2)
			i++;
		}
		return result;
	}
}
console.log(fib(7))

/**
 * Найти пересечение двух массивов
 * @param  {number[]} left
 * @param  {number[]} right
 * @return {number[]}
 */
 function intersection(left, right) {
	return left.filter(item=>right.includes(item))
}

console.log(intersection(
  [1, 2, 3, 4, 5],
  [2, 8, 3]
));

/**
 * Проверка на сбалансированность фигурных скобкок
 * @param  {string}  input
 * @return {boolean}
 */
 function isBalanced(input) {
	const arr = [];
	const obj = {
		 '{':'}',
	}
	for (let i = 0; i < input.length; i++){
		 if(input[i] === '{'){
			  arr.push(input[i]);
		 }
		 else if(arr.length === 0 && input[i] === "}"){
			  return false;
		 }
		 else {
			  arr.pop()
		 }
	}
	return arr.length === 0 ? true : false;
}

console.log('balanced:', isBalanced('{{}{}}{}')); // true
console.log('not balanced:', isBalanced('{}{{}')); // false
console.log('test:', isBalanced('}{}')); // false

/** Сжатие целочисленного массива */
function zip(...values) {
	values = values.sort((prev,next)=>prev-next);
	const obj = {
		 from:values[0],
		 to:null
	}
	const arr=[];
	for (let i = 0; i < values.length; i++){
		 if(values[i+1] !== values[i]+1){
			  obj.to = values[i];
			  if (obj.from === obj.to) arr.push(obj.from)
			  else arr.push(Object.values(obj).join('-'))
			  obj.from = values[i+1];
		 }
	}
	return arr.join()

}

console.log(zip(3, 2, 1, 5, 6, -1, 10)); // "-1,1-3,5-6,10"

/** Проверка массива на монотонность */
function isMono(...values) {
	let seqGrow = 0;
	for (let i = 1; i < values.length; i++) {
		const pairGrow = Math.sign(values[i] - values[i - 1]);

		if (pairGrow === 0) {
			continue;
		}

		seqGrow = seqGrow || pairGrow;

		if (pairGrow !== seqGrow) {
			return false;
		}
	}
	return true;
	// return new Set(values.map((n, i) => !i ? 0 : Math.sign(n - values[i - 1]))).size < 3;
}

console.log(isMono(0, 1, 5, 9, 15)); // true



/**
 * Получение свойства объекта
 * @param {object} src
 * @param {string} path
 */
 function get(src, path) {
	path = path.split('.');
	if(!src) return src;
	if(path.length === 1 ) return src[path[0]];
	return get(src[path[0]], path.slice(1).join('.')) ;
}

var fixture = {
  foo: {
	  bar: [
		  {qux: 'bingo'},
	  ],
  },
};

// Проверка
console.log(get(fixture, 'foo.bar.0.qux') === 'bingo');


/**
 * Найти пропущеное значение в неотсортированном массиве.
 * @param  {number[]} values
 * @return {boolean}
 */
 function missing(values) {
	if (values.length === 0) return
	values = values.sort((a,b)=>a-b)
	let missingValue;
	if(values[0] !== 1 ) return 1;
	for (let i = 0; i < values.length-1; i++){
		 if (values[i]+1 !== values[i+1]) missingValue = values[i]+1
	}
	return missingValue;
}

console.log(missing([1, 4, 3])); // 2
console.log(missing([5, 1, 4, 2])); // 3
console.log(missing([1, 2, 3, 4])); // undefined


// Реализовать метод `now`:
//  - now() — вернет текущий timestamp
//  - now('+min'); — `сейчас + 1 минута`
//  - now('-3.5h'); — или `сейчас - 3.5 часа`

// Поддерживаемые форматы:
//   `ms`, `s`, `sec`, `m`, `min`, `h`, `hours` & etc.

function now(v) {
	if (!v) return Date.now();
	let [duration] = v.match(/\d+/gi);
	const [znak, time] = v.match(/[^\d\s]+/gi)
	switch(time){
		 case 'sec': duration *= 1000;
		 break;
		 case 's': duration *= 1000;
		 break;
		 case 'min': duration *= 60*1000;
		 break;
		 case 'm': duration *= 60*1000;
		 break;
		 case 'hours': duration *= 60*60*1000;
		 break;
		 case 'h': duration *= 60*60*1000;
		 break;
	}
	return znak === '+' ? Date.now()+duration : Date.now()-duration
}

console.log(now('+30min')); // Date.now() + 30 * 60 * 1000
