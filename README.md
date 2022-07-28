# calculator

Calculates 2 numbers by operator.

### Parameters

| PARAMETERS | TYPE | DESCRIPTION |
| ---------- | ---- | ----------- |
| `digit1`   | number | The first digit |
| `digit2`   | number | The second digit |
| `prop`     | object | The operator that calculates the two number |

### Returns

[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)

### Example Usage

```js
console.log(calculator(100, 50, Operator.Divide)); // -> 2
```

# Operator

The enumeration for Operator

### Types

[• Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

### Properties

| PARAMETERS | TYPE | DESCRIPTION |
| ---------- | ---- | ----------- |
| `Add`      | number | The object property of add |
| `Subtract` | number | The object property of subtract |
| `Multiply` | number | The object property of multiply |
| `Divide`   | number | The object property of divide   |

