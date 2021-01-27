// Variable to set to current date and time

var DateTime = luxon.DateTime;

var currentDate = DateTime.local();
var currentDate = DateTime.local().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Tuesday, January 26
$("currentDay").text(currentDate);
var currentHour = currentDate.hour; 

var now = (dailyHour);
var dailyHour = ["9-am", "10-am", "11-am", "12-pm", "1-pm", "2-pm", "3-pm", "4-pm", "5-pm", "6-pm"];
var miliTime =["9","10","11","12","13","14","15","16","17","18"]
$(document).ready(function () {
    //Set the current date and day of the week in the header
    $("#currentDay").text(currentDate);
    $("#Container").addClass("time-block");

for (var i = 0; i < 10; i++) {
    var timeRanges = $("<div>");
    timeRanges.addClass("time-ranges");
    timeRanges.addClass("row");

    var currentTime = $("<p>");
    currentTime.addClass("dailyHour");
    currentTime.addClass("col-1 pt-4");
    currentTime.text(dailyHour[i]);

    var textDescription = $("<textarea>");
    textDescription.addClass("description");
    textDescription.addClass(miliTime[i])
    textDescription.addClass(dailyHour[i])
    textDescription.addClass("col-10");

  
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

function updateRow(){
    console.log("yo")
    $(".time-ranges").each(function(){
        var row = $(this).children("textarea").attr("class").split(" ")[1];
      
        console.log(parseInt(row))
        if(row < DateTime){
            console.log("past")
            $(this).addClass("past");
        }
        if(row > DateTime){
            console.log("future")
            $(this).addClass("future");
        }
        if(row === DateTime){
            console.log("present")
            $(this).addClass("present");
        }
    })

}
updateRow();
//create array to hold all stored data
var allstoredItems = [];

var storedItems = {}

var saved = JSON.parse(localStorage.getItem("allstoredItems"));
console.log(saved)

storedItems.thetime = timeRanges
storedItems.thevalue = textDescription

allstoredItems.push(storedItems);

//save to local storage
localStorage.setItem("allstoredItems", JSON.stringify(allstoredItems));

$(".saveBtn").on("click", function(){
    //console.log("we works", $(this).siblings(".description").val())
    var key = $(this).siblings(".dailyHour").text();
    var value = $(this).siblings(".description").val();
    localStorage.setItem(key, value);
})

//get items from local storage
console.log($(".time-ranges", ".9am"), localStorage.getItem("9am"))
$(".time-ranges",".9am").val(localStorage.getItem("9am"));


});