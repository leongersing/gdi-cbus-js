# Lesson 1: "Hello JavaScript"

## Core Concepts: 
  1. What is a programming language?
  2. Why JavaScript?
  3. History of JavaScript: The browser's language
  4. Document, Resource, the "living web"

## Tools: 
  1. Chrome/Webkit web browser
  2. A Text editor with Syntax Highlighting
  3. A simple HTML document
  4. A Web server

## Exercise 1: 
  1. Create the simple HTML document
  2. Open the console/ JS Inspector
  3. introduce the Window Object
  4. introduce the "document" object
  5. introduce the "tools" and the window introspection methods
    a. window.alert
    b. console.log
    c. document.write

## Browser Concepts: 
  1. DOM - Document Object Model
  2. What's in an element?
    a. HTMLElements
    b. Events
  3. Universal DOM manipulation: $ - jQuery

## Exercise 2: 
  1. Using the inspector, find the element with an "id" attribute of gdi
  2. Assign the result to a variable named "gdi"
  3. change the color of the text to red. gdi.color = "red"

## More JavaScript Concepts: 
  1. types - Number, String, Object, Function
  2. keywords - typeof, in, (etc)
  3. operators - ||, +, =, % (etc)
  4. BIFs - isNaN (etc)
  5. Objects and the JSON
  
## Exercise 3:  
  1. Create a small JSON object in the console like so: 
    { "name": "Leon", "age": 34, "favoriteColor": "blue" };
  2. Assign this JSON object to a variable named student:
    var student = { "name": "Leon", "age": 34, "favoriteColor": "blue" };
  3. Change the value of favoriteColor to something else: 
    student.favoriteColor = "red";
  4. console.log(student) to verify that the value was updated.
  5. Add a property to the student object instance that doesn't exist.
    student.favoriteDrink = "Sidecar";
  6. console.log(student) to verify that your new property was added successfully. 

## Introducing JavaScript Concepts to grow on: 
  1. "expando"
  2. Data, data, data
    a. functions as data
    b. all objects are "dictionaries" or unordered lists of key and value pairs
    c. Everything in JavaScript is an Object
    d. JavaScript is not a purely object oriented language
  3. What is Object Oriented?
  4. What is Prototypical?
  5. What is a "Prototype Based Language"

## Final Exercise: 
  1. use the Script tag to add jQuery to the document.
  2. experiment with the $ object
    a. instead of document.getElementById use $("#");
    b. change the text of the element from "Hello World" to "Hello JavaScript"
  3. explore the $ in the console
  4. introduce documentation and finding answers.

Purpose of previous section is to introduce some of the core concepts for JavaScript
and to introduce some of the concepts that we're going to explain over time. At this point
the student should have a fair introduction to the language, why it exists and what tasks
it's best suited to solve. Over the next few weeks we'll build on these concepts and 
write tiny programs that help us to deliver more compelling web-based expereinces using JavaScript.

