var view;
var onHomePage = true;
var inputValue;

window.onload = function() {
  view = document.getElementById("masterView");
  loadHeader();
};

function loadHome() {
  navigate("views/shared/home.html", true);
}

function loadHeader() {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var header = document.getElementById("header");
      header.innerHTML = xhr.responseText;
      loadHome();
    }
  }

  xhr.open("GET", "views/shared/header.html", true);
  xhr.setRequestHeader('Content-type', 'text/html');
  xhr.send();
}

function navigate(url, homePage) {
  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      onHomePage = homePage;
      view.innerHTML = xhr.responseText;
      showHomeButton();
    }
  }

  xhr.open("GET", url, true);
  xhr.setRequestHeader('Content-type', 'text/html');
  xhr.send();
}

function showHomeButton() {
  if (onHomePage) {
    var homeButton = document.getElementById("homeButton");
    homeButton.style.display = "none";
  } else {
    var homeButton = document.getElementById("homeButton");
    homeButton.style.display = "block";
  }
}

//Week 3
function circle() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();
}

//Week 5
function saveInputValue() {
  var inputElement = document.getElementById("input");
  inputValue = inputElement.value;
}

function getInputValue() {
  var displayElement = document.getElementById('inputResult');
  displayElement.innerHTML = inputValue;
}

function saveValue() {
  var inputElement = document.getElementById("localStorageInput");
  var value = inputElement.value;

  localStorage.setItem('demo', value);
}

function saveArrayValue() {
  var inputElement = document.getElementById("localStorageArrayInput");
  var values = inputElement.value;
  var array = [];
  var arrayNode = "";
  var arrayLength = 0;
  for (var i = 0; i < values.length; i++) {
    var currentCharacter = values[i];
    if (currentCharacter != ',' && currentCharacter != ' ') {
      arrayNode += currentCharacter;
      continue;
    } else if (arrayNode != "") {
      array[arrayLength] = arrayNode;
      arrayLength++;
      arrayNode = "";
    }
  }

  if (arrayNode != "") {
    array[arrayLength] = arrayNode;
  }

  localStorage.setItem('array', JSON.stringify(array));
}

function getValue() {
  var value = localStorage.getItem('demo');

  var displayElement = document.getElementById('localStorageResult');
  displayElement.innerHTML = JSON.parse(value);
}

function getArrayValue() {
  var value = localStorage.getItem('array');

  var displayElement = document.getElementById('arrayLocalStorage');

  displayElement.innerHTML = value;
}

//Week 7
function createElement1() {
  var newElement = document.createElement("div");
  newElement.setAttribute("id", "createdDiv");
  var textNode = document.createTextNode("Dynamic text has been created");
  newElement.appendChild(textNode);

  var listElement = document.getElementById("list1");
  listElement.parentNode.insertBefore(newElement, listElement);
}

function removeChild1() {
  var createdElement = document.getElementById("createdDiv");

  var listElement = document.getElementById("list1");
  listElement.parentNode.removeChild(createdElement);
}

//Week 9
function addClass(className, elementId) {
  if (elementId == null) {
    elementId = className;
  }

  var element = document.getElementById(elementId);

  element.className += " " + className;
}

function switchClass() {
  var element = document.getElementById('cssSwitch');

  if (element.className == 'cssSwitch') {
    element.className = '';
  } else {
    element.className = 'cssSwitch';
  }
}

function ajaxFile() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     document.getElementById("ajax").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "ajax_info.txt", true);
  xhttp.send();
}

function stringify() {
  var fruit = {
    name: 'apple',
    color: 'red'
  };

  var fruitString = JSON.stringify(fruit);

  var element = document.getElementById('stringify');

  element.innerHTML = fruitString;
}

function parse() {
  var fruitString = '{"name":"apple","color":"red"}';

  var fruit = JSON.parse(fruitString);

  var element = document.getElementById('parse');

  element.innerHTML = fruit;

  var element = document.getElementById('name');

  element.innerHTML = fruit.name;

  var element = document.getElementById('color');

  element.innerHTML = fruit.color;
}
