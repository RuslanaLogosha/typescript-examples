type ObjectWithNameArray = Array<{ name: string }>;
const arr: ObjectWithNameArray = [{ name: 'dfd' }, { name: 'dfdf' }];
//console.log(arr);

type StringArray = Array<string>;
type NumberArray = Array<number>;

interface Backpack<Type> {
	add: (obj: Type) => void;
	get: () => Type;
}

declare const backpack: Backpack<string>;

export {};
