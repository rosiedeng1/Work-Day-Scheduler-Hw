
// Set variable to display the current day with dayjs and jQuery
var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'));
console.log(today)

var time = dayjs().format('hh:mm:ss');
$('#currentTime').text(time);

var hour = dayjs().hour()
console.log(hour)
// var hourName = "hour-" + hour 
// console.log("hi" + hourName)
// var hour2= document.getElementById(hourName)
// console.log(hour2)
// hour2.className="row time-block present"

// Created a forloop for the hours between 9am-5pm
for (i = 9; i <= 17; i++) {
  var hourName = "hour-" + i;
  var hourElement= document.getElementById(hourName)

  if(hour > i) {
    document.getElementById(hourName).className="row time-block past"
  } else if(hour < i) {
    document.getElementById(hourName).className="row time-block future"
  } else {
    document.getElementById(hourName).className="row time-block present"
  }
}

function saveActivity () {
const saveButtons = document.querySelectorAll(".saveBtn");
console.log(saveButtons)
for (const btn of saveButtons) {
  btn.addEventListener("click", function() {
    // console.log("click")
    var content = btn.previousElementSibling.value
    var key = btn.parentElement.id
    console.log(content, key)
    // var activities = JSON.parse(localStorage.getItem('activities')) || {}
    // activities[key]=content
    // localStorage.setItem('activities', JSON.stringify(activities))


  localStorage.setItem(key,content)
  }) 
} 
}
function renderActivity() {
  const textAreas = document.querySelectorAll('.description')
  for (const textArea of textAreas) {
    var key = textArea.parentElement.id
    textArea.textContent = localStorage.getItem(key)
  }
}

renderActivity()


// Calls function
saveActivity ()

// var save = document.getElementById("save");
// console.log("hi " + save)
// save.addEventListener("click",);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

// var rootEl = $('#root');
// var time2 = rootEl.children()
// // Starting from the root element, `<main id="root">`, select all the boxes and change the background color to white.
// rootEl.children('ul').children().css('background-color', 'white');

// // Select the last `<ul>` or the third row.
// // Long traverals can be segmented to provide better readability.
// var rowThree = rootEl.children('ul').eq(2);

// // Select the children of the `<ul>`, then select the first box and add the 'O'.
// rowThree.children().eq(0).text('O');

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?
    //
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });
  
  // var event = JSON.parse(localstorage.getItem("event"))