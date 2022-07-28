import { Operator } from './types/Operator';

export function calculator(digit1: number, digit2: number, prop: Operator) {
	let result: number;

	switch (prop) {
		case Operator.Add:
			result = digit1 + digit2;
			break;
		case Operator.Subtract:
			result = digit1 - digit2;
			break;
		case Operator.Multiply:
			result = digit1 * digit2;
			break
		case Operator.Divide:
			result = digit1 / digit2;
			break;
	}

	return result;
}
