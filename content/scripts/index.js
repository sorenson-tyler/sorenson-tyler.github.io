var view;
var onHomePage = true;

window.onload = function () {
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
  if(onHomePage) {
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
function saveValue() {
  var inputElement = document.getElementById("localStorageInput");
  var value = inputElement.value;

  localStorage.setItem('demo', value);
}

function getValue() {
  var value = localStorage.getItem('demo');

  var displayElement = document.getElementById('localStorageResult');
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
