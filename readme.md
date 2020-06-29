[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

### Javascript Calculator

Build a JS Calculator

## Prerequisites

-   Javascript

## Instructions

1.  Fork and clone this repo.
1.  Go inside the folder you just cloned.
1.  Create a web file structure.
    * Create the file **`index.html`**.
    * Create the folder **`js`**.
    * Inside the folder **js** create the file **`script.js`**.
1.  Go back to the **js-calculator** folder and open VScode.
1.  In your `index.html` file, add a HTML boilerplate `HTML:5`.
1.  Add a script tag to import your `script.js` file.
1.  Go to your `script.js` file and add a console.log, i.e: `console.log("script file is linked")`.
1.  Open the file `index.html` in your brownser, and open your console (**command** + **option** + **j**)
1.  You should be able to see your message in the console.log, if you are not seeing your message go to step 5 and review your steps from there. 

Now you are all set to build your calculater.


Unless otherwise specified on the calendar or by an instructor, homework is due the next morning by 8:00am (central).

## Requirements

Your task is to create a Javascript object that represents a calculator. It should have methods that provide it with the following functionality...

- Addition
- Subtraction
- Multiplication
- Division
- Exponents (Hint: Look up Javascript's Math object)
- Square root (Hint: Look up Javascript's Math object)

Commit your progress every time you finish a calculater method. add a nice commit message, i.e "Finish Addition method" 
You should be able to run these methods like so from your browser's Javascript console...

```js
calculator.add(1,2);
// => 3
```

## Hungry for more???
## Bonus 1
Give your calculator memory and allow it to persist the result of multiple operations.
* Store this result in a `value` property.
* Give your calculator a `clear` method that resets `value`.

For example:

```js
calculator.add(1)
// value is 1
calculator.add(2)
// value is 3
calculator.add(2)
// value is 5
calculator.multiply(2)
// value is 10
```
## Bonus 2

Give your calculator a "master" method that can parse through a string of operations (e.g., `(2 - 1) * (5 ^ 2)`)
* Your calculator should still have memory.



## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
2.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
