import { Operators } from './types/Operators';

export function calculator({
	digit1,
	digit2,
	prop,
}: {
	digit1: number,
	digit2: number,
	prop: Operators,
}) {
	let result: number;
	
	switch (prop) {
		case Operators.Add:
			result = digit1 + digit2;
			break;
		case Operators.Subtract:
			result = digit1 - digit2;
			break;
		case Operators.Multiply:
			result = digit1 * digit2;
			break;
		case Operators.Divide:
			result = digit1 / digit2;
			break;
	}
	
	return result;
}
