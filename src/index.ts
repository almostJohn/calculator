import { Operators } from './types/Operators';

export function calculator(
	int1: number,
	int2: number,
	prop: Operators
) {
	let result: number;
	
	switch (prop) {
		case Operators.Add:
			result = int1 + int2;
			break;
		case Operators.Subtract:
			result = int1 - int2;
			break;
		case Operators.Multiply:
			result = int1 * int2;
			break;
		case Operators.Divide:
			result = int1 / int2;
			break;
	}
	
	return result;
}
