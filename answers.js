// <!--
// createElement
// createTextNode
// appendChild
// insertBefore
// removechild -->

document.querySelector("h1")

var title = document.querySelector('h1')
title.innerText
title.innerText = "Kathleen"


var image = document.querySelector('img')
image.src

image.src = 'https://placebear.com/400/400'

// Select the heading that says "Employment" and change it to something else. (hint: use a descendant selector)

var e = document.querySelector('h3')
e.innerText = "HARVARD";

// Change the colour of the body.
var color = document.querySelector('body');
color.style.backgroundColor = "#009fd5";

// 5. Change the colour used by the highlight class.
document.querySelector('.highlight');
var q = document.querySelector('.highlight');
q.style.backgroundColor = "#ff0000";

//
// Change the font family of the h1 to 'monospace'.
var font = document.querySelector('h1');

font.style.fontFamily = "monospace";

// Find a way to select the round icons in the sidebar and then change their colour.
var G = document.querySelectorAll('a.action-icon-bg');
G.forEach(function(G){ G.style.backgroundColor = "#f442c2";});

// Scroll down to the contact form. Change the placeholder attribute of the name field to "identify yourself".

var YES = document.querySelector('input#name.contact-info')

<input type=​"text" name=​"name" class=​"contact-info" id=​"name" placeholder=​"Name">​Hello​</input>​
YES.placeholder

YES.placeholder = "YO YO";

//
// Change the placeholder attribute of the message field to "state your business".

var YES = document.querySelector('textarea#message')
<textarea name=​"message" id=​"message" placeholder=​"Message">​</textarea>​
YES.placeholder = "State your business....";

//
// Give the name field a "value" attribute of "your nemesis".
var YES = document.querySelector('input#name.contact-info')

YES.value = "Kathleen";

//
// Change the value attribute of the email field to "koalathebear@gmail.com".

var email = document.querySelector('input#email.contact-info')
email.value = "koalathebear@gmail.com";

//
// Change the value of the submit button on the contact form to "En garde!".
//
var submit = document.querySelector('Input#submit');

<input type=​"submit" name=​"submit" id=​"submit" value=​"Submit">​
submit.value = "En Garde"

// We should stop Koala from sending an email to Panda that they might regret! Find a way to disable the submit button (hint: familiarize yourself with the disabled attribute).
//
var submit = document.querySelector('Input#submit');

submit.disabled = true;

// We should help Panda protect their privacy by clearing their personal details from the sidebar. You can use reset() to do this.
var form = document.querySelector('form')
form.reset()



// LOOP THRU LIST
//
// // turn the list yellow on devons example
// var items = document.querySelector('.item')
// items
// // # gives you array of list items
// items.forEach(function(item){ item.style.color = "yellow";
// });


// CALL FUNCTION
//
// click on button with javascript
// first select the butoom
//
// var button = document.querySelector('input[type="submit"]')
// button
// // give you
// // <input type = "submit">
// buttom.click();
//
//
// // if you want to click a 1000 times - silly example
//
// for (var i=0; i < 1000; i++) { button.click(); }
