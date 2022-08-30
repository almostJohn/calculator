# calculator

Calculates 2 numbers by operator.

## Parameters

| PARAMETERS | TYPE | DESCRIPTION |
| ---------- | ---- | ----------- |
| `int1`     | number | the first integer |
| `int2`     | number | the second integer |
| `props`     | object | The operator that calculates the two integers |

## Returns

[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

## Example Usage

```js
console.log(calculator(25, 25, Operators.Multiply)); // 625
```

# Operators

The enumeration for Operators

## Types

• [Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

## Properties

| PARAMETERS | TYPE | DESCRIPTION |
| ---------- | ---- | ----------- |
| `Add`      | string | No description |
| `Subtract` | string | No description |
| `Multiply` | string | No description |
| `Divide`   | string | No description |

