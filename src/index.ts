import { Operators } from './types/Operators';

interface NumberOptions {
	int1: number;
	int2: number;
}

export function calculator(prop: Operators, options: NumberOptions) {
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
