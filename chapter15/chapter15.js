//let dayOfWeek = prompt("Enter day of the week: ").toLowerCase();
//let theResponse;
/*
switch (dayOfWeek) {
    case "monday":
        theResponse = "Ask";
        break;
    case "tuesday":
        theResponse = "Taco day";
        break;
    case "wednesday":
        theResponse = "Halfway there";
        break;
    case "thursday":
        theResponse = "Its almost friday";
        break;
    case "friday":
        theResponse = "tgiff yeah";
        break;
    default:
        theResponse = "weekend! no";
        break;
}
alert(theResponse);
*/
let todayDate = document.getElementById("todaysdate");
let todoButton = document.getElementById("whattodo");

// add a listener to the whattodo button
todoButton.addEventListener("click", displayActivity);

// create a new Date object
let d = new Date();
//d.setDate(8);
// call the displayDate() function
displayDate();

function displayDate() {
    todayDate.innerHTML = d.toDateString();
}

function displayActivity() {
    // find out the day of the week.
    let dayOfWeek = d.getDay();

    /* set a variable, called youShould, with a different
       string based on what day of the week it is. */
    let youShould;

    switch(dayOfWeek) {
        case 0:
            youShould = "Take it easy. You've earned it.";
            break;
        case 1:
            youShould = "Gotta do what ya gotta do!";
            break;
        case 2:
            youShould = "Take time to smell the roses!";
            break;
        case 3:
            youShould = "Don't forget to eat breakfast!";
            break;
        case 4:
            youShould = "";
            break;
        case 5:
            youShould = "Make a list of things you like to do.";
            break;
        case 6:
            youShould = "Do one thing from your list of things you like to do.";
            break;
        default:
            youShould = "Error Code 456667355e2-Could Not find Day. g35";
            break;
    }

    // output the value of youShould into the thingToDo div    
    document.getElementById("thingToDo").innerHTML = youShould;
}
