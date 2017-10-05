# DOM Manipulation with JavaScript

**DOM** stands for Document Object Model. The DOM contains a set of different nodes that can be accessed using JavaScript. The HTML document is called a document node, HTML elements are called element nodes, HTML attributes are called attribute nodes, HTML text or inner HTML are called text nodes, and comments are called comment nodes. The DOM contains all nodes displayed to a user. The DOM is the document referenced when we call a method like `document.getElementById()`.

Having this document as a container means that almost anything we can do with HTML can be done with JavaScript at run time.

Some useful method that can be preformed on the DOM:

|Property / Method|	Description|
|---|---|
|document.createElement()|	Creates an Element node|
|document.documentElement|	Returns the Document Element of the document (the `<html>` element)|
|document.getElementById()	|Returns the element that has the ID attribute with the specified value|
|document.getElementsByClassName()	|Returns a NodeList containing all elements with the specified class name|
|document.getElementsByName()	|Returns a NodeList containing all elements with a specified name|
|document.getElementsByTagName()	|Returns a NodeList containing all elements with the specified tag name|

Some useful methods that can be preformed on an element:

|Property / Method | Description |
|---|---|
|element.appendChild()	|Adds a new child node, to an element, as the last child node|
| element.innerHTML  |  Sets or returns the content of an element |
|element.insertBefore()   |  Inserts a new child node before a specified, existing, child node |
|element.removeChild()   |  Removes a child node from an element |
