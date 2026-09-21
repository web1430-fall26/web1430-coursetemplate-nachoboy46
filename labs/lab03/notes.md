# Notes for Lab 3

## Console Experiments

### Excercise 1
'5' + 3
I got ‘53’ because javascript concatenates strings and numbers by converting the number to a string and then combing the two strings.

'5' - 3
I got 2, because javascript uses the overloads the minus operator to convert the string a number when it detects a string trying to subtract a number. 

'5' == 5
I got true, because in javascript == is actually an assignment operator, not a conditional operator, so it assigned it to be 5, and then printed true because it was indeed 5.

'5' === 5
This printed false because ‘5’ is a string, and 5 is a number, which is different.

0 == false
It got true even though 0 and false are different, for the same reason that ‘5’ == 5 is true.

0 === false
This is false because 0 and false are different in javascript, although it is worth noting that in some languages this would evaluate to true.

null == undefined
This is true, for the same reason as 0 == false and ‘5’ == true.

null === undefined
This is false because null is an intentionally absent value and different from undefined, which isn’t directly set like null.

### Exercise 2
typeof ‘hello’
This outputs ‘string’.

typeof 42
This outputs ‘number’

typeof true
This outputs ‘boolean’

typeof ‘undefined’
This outputs ‘undefined’

typeof null
This outputs ‘object’, I was kind of confused at first but then I saw the note at the bottom of the canvas example, and it makes more sense now.

typeof []
This outputs ‘object’, which makes sense because brackets are usually an array or list of some type.

Typeof {}
This outputs ‘object’, which makes sense because it’s likely another type of list-like structure, maybe a set like in 2110.

'  hello world  '.trim()
It printed 'hello world', because the .trim() function removes whitespace from the start and end of strings.

'hello world'.includes('world')
This outputs true, because .includes() returns a boolean, and the function checks whether or not a string includes another string.

'hello world'.toUpperCase()
This outputs ‘HELLO WORLD’, because .toUpperCase() returns and all upper-case version of the original string.

'hello world'.replace('world', 'JavaScript')
This outputs ‘hello JavaScript’, I imagine this functions similarly to the .includes() function, but once finding its target value, instead of returning true or false it returns a string with the first parameter replaced by the second parameter. If the target can’t be found it just returns the original string, as I tested.

‘hello’.length
This returns the number 5. Notably, this doesn’t have parenthesis, meaning it’s an attribute and not a function.

## Debugging
I found a four bugs in this section.
The first one I saw was a typo in how year was spelled in the return statement, so I changed it from ${nextYeer} to ${nextYear}.
The next one I saw was a missing semicolon after the const message = line, so I added that.
The next one I saw was the in the if statement at the end. I remembered from earlier there were supposed to be 3 '=' in a comparison in javascript, so I fixed that.
At this point I ran the code, thinking it was good, but then I got an error. It said 'Mesage' didn't exist, which is when I realized I must have missed a typo, so I went back and fixed that, and now it works good.
