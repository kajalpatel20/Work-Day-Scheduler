# 05 Third-Party APIs: Work-Day-Scheduler


A Work-Day-Scheduler for creating and maintaining a schedule

As an employee with a busy schedule, I want to create a daily work day planner that I can add and save important events to it, so I can manage my time more effectively. 
I have created this appliction using of Luxon's DateTime methods and jQuery, HTML and CSS for the creation of the actual planner.

The application works as follows:

When the user opens up the planner, the current day is displayed at the top.

There are time-blocks for standard business hours (9-am-6-pm) that are color-coded to indicate whether it is in the past, present, or future. If the time-block represents a time that is past, it will be colored Light Pink and input to that field will be disabled. If the time-block represents the present time, it will be colored Purlple and input can be still add to it. If the time-blocks represents future times, they will be colored dard Purple and input can be add it to it.

When the user clicks the save button for a time-block, the text for that event is saved in local storage.

When user refreshes the page, and it saved events data.

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

![Work-Day-Scheduler](Work-Day-Scheduler/assets/Screen Shot 2021-01-27 at 8.23.58 PM.png)


 Submitting BOTH of the following links for review:

* The URL of the functional, deployed application.

https://kajalpatel20.github.io/Work-Day-Scheduler/

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

https://github.com/kajalpatel20/Work-Day-Scheduler
