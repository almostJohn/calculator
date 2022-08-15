# calculator

Calculates 2 numbers by operator.

## Parameters

| PARAMETERS | TYPE | DESCRIPTION |
| ---------- | ---- | ----------- |
| `prop`     | object | The operator that calculates the two number |
| `options`  | NumberOptions | Options for the calculator |

## Returns

[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

## Example Usage

```js
console.log(calculator(Operators.Multiply, { int1: 5, int2: 5 })); // 25
```

# NumberOptions

Number options to use.

## Types

• [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## Properties

| PARAMETERS | TYPE | DESCRIPTION |
| ---------- | ---- | ----------- |
| `int1`     | number | No description |
| `int2`     | number | No description |

# Operators

The enumeration for Operators

## Types

• [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## Properties

| PARAMETERS | TYPE | DESCRIPTION |
| ---------- | ---- | ----------- |
| `Add`      | number | The object property of add |
| `Subtract` | number | The object property of subtract |
| `Multiply` | number | The object property of multiply |
| `Divide`   | number | The object property of divide   |

