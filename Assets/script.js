$(function () {
  // Set variable to display the current day with dayjs and jQuery
  var today = dayjs();
  $('#currentDay').text(today.format('MMM D, YYYY'));
  console.log(today)

  // Sets variable to display the current time 
  var time = dayjs().format('hh:mm:ss');
  $('#currentTime').text(time);

  var hour = dayjs().hour()
  console.log(hour)

  // Created a forloop for the hours between 9am-5pm
  for (i = 9; i <= 17; i++) {
    // Creates variable for the hour
    var hourName = "hour-" + i;
    var hourElement = document.getElementById(hourName)

    // If the hour is past 5pm then it is identified by the "past" class
    if (hour > i) {
      document.getElementById(hourName).className = "row time-block past"
    } else if (hour < i) {
      document.getElementById(hourName).className = "row time-block future"
    } else {
      document.getElementById(hourName).className = "row time-block present"
    }
  }


  
  function saveActivity() {
    // Grabs all the elements in the saveBtn class
    $(".saveBtn").each(function (index) {
      // Creates a click function for each element in the saveBtn class
      $(this).click(function(){
        // Inputs the value from the previous element sibling of the saveBtn class
        var content = $(this).prev().val()
        // Refers to the id of the parent elemenet, which in this case is the hour for each time block
        var key = $(this).parent().attr("id")
        // Saves the user input into local storage 
        localStorage.setItem(key, content)

      })
    
  function renderActivity() {
    // Selects all the elements for the class description
    // const textAreas = $(".description")
    // Creates a for loop for element in each description class  
    $(".description").each(function (index) {
      // $(this) refers to the elements in the description class, which in this case is the textarea. Then grabs the ID of that parent element, which is the hour. 
      var key = $(this).parent().attr("id")
      $(this).text(localStorage.getItem(key))
    })
    
  }
    })

  }
  renderActivity()


  // Calls function
  saveActivity()
})


  // function saveActivity() {
  //   // Sets a constant for everything in the saveBtn class 
  //   const saveButtons = document.querySelectorAll(".saveBtn");
  //   console.log(saveButtons)
  //   // const btn refers to each element (btn is a random variable)
  //   for (const btn of saveButtons) {
  //     btn.addEventListener("click", function () {
  //       console.log("click")
  //       var content = btn.previousElementSibling.value
  //       var key = btn.parentElement.id
  //       console.log(content, key)

  //       localStorage.setItem(key, content)
  //     })
  //   }
  // }
  // function renderActivity() {
  //   // Grabbing every element with the class name description
  //   const textAreas = document.querySelectorAll('.description')
  //   for (const textArea of textAreas) {
  //     var key = textArea.parentElement.id
  //     textArea.textContent = localStorage.getItem(key)
  //   }
  // }

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


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
 