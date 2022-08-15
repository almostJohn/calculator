import { Operators } from './types/Operators';
import { numberOptions } from './types/numberOptions';






export function calculator(prop: Operators, options: numberOptions) {
	let result: number;
	
	switch (prop) {
		case Operators.Add:
			result = options.int1 + options.int2;
			break;
		case Operators.Subtract:
			result = options.int1 - options.int2;
			break;
		case Operators.Multiply:
			result = options.int1 * options.int2;
			break;
		case Operators.Divide:
			result = options.int1 / options.int2;
			break;
	}
	
	return result;
}
