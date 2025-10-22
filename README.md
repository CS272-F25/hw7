# CS272 HW7: Badger Galactic

In this homework, you will write a program that will take a galactic code and look up its galactic address! The focus of this homework is less on the visual elements and more on your understanding of conditionals, loops, lists, and objects.

## About

In this HW, you will be deciphering "galactic codes" using loop(s) and lookup(s) to the `GALACTIC_MAP`! A galactic code has the following format...

```
SECTOR_CODE.DWELLING_UNIT@DIVISION_NUMBER
```

The `SECTOR_CODE` is a case-insensitive letter, A-Z. It has a name and a list of divisions that can be looked up via the `GALACTIC_MAP`. It is similar to a state or country! For example, sector code "A" is the "Alpha" sector.

The `DWELLING_UNIT` is a number made up of *1 or more* digits. It is similar to a house number!

The `DIVISION_NUMBER` is exactly a 1-digit number, 0-9, used to lookup the division name from a sector's list of the `GALACTIC_MAP`. It is similar to a street name! For example, Alpha's Division 3 is "Extraterrestrial Velocium Way".

Putting this altogether, a galactic code of `b.980@0` has an address of `980 Nebular Zerium Ave of Bravo` because...

 - The *sector* is `b`, which maps to `Bravo`.
 - The *dwelling unit* is `980`, a number used as-is.
 - The *division* is `0`, which maps to `Nebular Zerium Ave` found within the Bravo sector.

The full `GALACTIC_MAP` can be read by performing a `console.log` or viewing the `galactic_map.js` file. See the bottom of this `README.md` for additional scenarios to aid in your understanding.

## Hint

Need to change the case of a string? You can use `.toLowerCase()` or `.toUpperCase()`. These do not modify the original string, rather, they return a *new* string in the specified casing.

```js
let myName = "Cole";
let myUpperName = myName.toUpperCase();
let myLowerName = myName.toLowerCase();
console.log(myName, myUpperName, myLowerName); // Cole COLE cole
```

This may be helpful for looking up sectors.

## Instructions

### 1. `setErrorText`

Implement `setErrorText` such that, whenever it is called, it checks if the given `msg` is truthy.
 - If it is truthy, set the `galactic-code-error-text` to be the given `msg` and add `is-invalid` to the class name of the `galactic-code` form control.
 - Otherwise, if `msg` lacks a truthy value, remove any error text from `galactic-code-error-text` and set the form control to its normal state.

### 2. `lookupSectorName`

Implement `lookupSectorName` such that, whenever it is called, it will return the name of the sector from the given galactic code using `GALACTIC_MAP`. This should be done in a *case-insensitive* manner. The hint above may be helpful!

e.g. A `galacticCode` of `C.360@2` should return `"Charlie"`

You may assume that anytime this function is called the given `galacticCode` is valid.

### 3. `lookupDwellingUnit`

Implement `lookupDwellingUnit` such that, whenever it is called, it will return the dwelling unit from the given galactic code.

**PLEASE NOTE:** You MUST use a loop to accomplish this. You may NOT use the string `split` function NOR may you use regex functions like `matches`, `matchAll`, `exec`, etc.

e.g. A `galacticCode` of `C.360@2` should return `"360"`

You may assume that anytime this function is called the given `galacticCode` is valid.

### 4. `lookupDivisionName`

Implement `lookupDivisionName` such that, whenever it is called, it will return the division name from the given galactic code according to the specified sector using `GALACTIC_MAP`.

e.g. A `galacticCode` of `C.360@2` should return `"Solar Pulsarium Ln"`

You may assume that anytime this function is called the given `galacticCode` is valid.

## Scenarios

These scenarios should help you test your code! Please test your code thoroughly; these are just examples to help you in your testing.

| Code | Address |
| --- | --- |
| a.1@0 | 1 Astral Velocium Way of Alpha |
| a.4000@0 | 4000 Astral Velocium Way of Alpha |
| C.360@2 | 360 Solar Pulsarium Ln of Charlie |
| C.360@4 | 360 Planetary Ignisium Pkwy of Charlie |
| Z.50@9 | 50 Sidereal Aquatium Ter of Zulu |
| z.0050@9 | 0050 Sidereal Aquatium Ter of Zulu |
