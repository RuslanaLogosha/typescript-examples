//Primitives
let age: number = 5;
const name: string = 'mango';

let id: string | number | boolean = 5;
id = 'sqwwqe';

//Arrays
//string[] is an array of strings
//Array<number>

const temps: readonly number[] = [30, 31, 27, 28, 32];

//Arrays Tuple
const coords: [number, number] = [50.4501, 30.5234];
const rgb: [number, number, number] = [255, 0, 100];

const arrA = [1, 2, 3, 4, 5];

const arrB = [...arrA];

console.log(temps, coords, rgb);

//types composition
type ID = number | string;

//enum
enum PizzaSize {
	Small = 's',
	Medium = 'm',
	Large = 'l',
}

console.log(PizzaSize.Small);

export {};
