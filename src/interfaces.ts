interface PluginConfig {
	readonly selector: string;
	perPage?: number; //Необзательные поля key?
	startIndex?: number;
	draggable?: boolean;
}

const config: PluginConfig = {
	selector: '#plugin-1',
	perPage: 2,
	// startIndex: 0,
	// draggable: false,
};

// console.log(config);

//Index signatures: объект произвольных свойств со значениями `[key: тип]: тип`
interface Employees {
	[key: string]: number;
}
export {};
