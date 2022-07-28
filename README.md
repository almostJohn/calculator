## Calculator

A basic calculator that can do basic arithmetic: `add`, `subtract`, `multiply`, `divide`

#### Functionality

If you pass any number of your choice in the paramater of `digit1` and `digit2` it'll return a total number base on the mathematics operator.

#### Example Usage

```js
enum Operator {
    Add,
    Subtract,
    Multiply,
    Divide,
}

function calculator(digit1: number, digit2: number, prop: Operator) {
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
            break;
        case Operator.Divide:
            result = digit1 / digit2;
            break;
    }

    return result;
}

console.log(calculator(100, 50, Operator.Divide)); // 2
```

#### Resulting Code

As you can see here, we pass in the parameter that divides `100` and `50` and completely log `2`. Also you can try this yourself to see if it work for you.

#### Try It Yourself
> **[Typescript Playground](https://www.typescriptlang.org/play)**
