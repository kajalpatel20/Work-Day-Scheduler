// Variable to set to current date and time

var DateTime = luxon.DateTime;

var currentDate = DateTime.local();
$("currentDay").text(currentDate);
var currentHour = (currentHour);
var now = (dailyHour);
var dailyHour = ["9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm"];

console.log(currentHour)
console.log(now)


$(document).ready(function () {
    //Set the current date and day of the week in the header
$("#currentDay").text(currentDate);
 $("#Container").addClass("time-block");

 var saved = JSON.parse(localStorage.getItem("allstoredItems"));
 console.log(saved)

 
});


for (var i = 0; i < 10; i++) {
    var timeRanges = $("<div>");
    timeRanges.addClass("time-ranges");
    timeRanges.addClass("row");

    var  currentTime= $("<p>");
    currentTime.addClass("todayHours");
    currentTime.addClass("col-1 pt-4");
    currentTime.text(dailyHour[i]);

    var textDescription = $("<textarea>");
    textDescription.addClass("description");
    textDescription.addClass("col-9");

    if (i < currentHour) {
        textDescription.addClass("past");
    } else if (i === currentHour) {
        textDescription.addClass("present");
    } else {
        textDescription.addClass("future");
    }
//Add click event to save buttons

    var saveButton = $("<button>");
    saveButton.addClass("saveBtn");
    saveButton.addClass("col-1");
    saveButton.append('<i class="fas fa-save"></i>');

    timeRanges.append(currentTime);
    timeRanges.append(textDescription);
    timeRanges.append(saveButton);
    $(".container").append(timeRanges);
}
//create array to hold all stored data
var allstoredItems = [];

   
  var storedItems = {}
  
  storedItems.thetime =timeRanges
  storedItems.thevalue =textDescription

  allstoredItems.push(storedItems);
  
  //save to local storage
localStorage.setItem("allstoredItems", JSON.stringify(allstoredItems));

