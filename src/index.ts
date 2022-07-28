enum Operator {
	Addition,
	Subtraction,
	Multiplication,
	Division,
}

export function calculator(digit1: number, digit2: number, prop: Operator) {
	let result: number;

	switch (prop) {
		case Operator.Addition:
			result = digit1 + digit2;
			break;
		case Operator.Subtraction:
			result = digit1 - digit2;
			break;
		case Operator.Multiplication:
			result = digit1 * digit2;
			break
		case Operator.Division:
			result = digit1 / digit2;
			break;
	}

	return result;
}
