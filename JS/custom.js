//Checks if the user has put a name in input box if not sets it to User.
var name;
name = localStorage.getItem("savedName");
if(name == 0){
name = "User";
}
//This is for the greeting, checks the hour on the computer and if it's above or below a certain number it changes to Morning, Afternoon and Night.
var today = new Date();
var hourNow = today.getHours();
var greeting;
var icon;

if (hourNow < 12) {
  greeting = "Good Morning, ";
  icon = "coffee";
} else if (hourNow < 20) {
  greeting = "Good Afternoon, ";
  icon = "sun-o";
} else if (hourNow < 24) {
  greeting = "Good Evening, ";
  icon = "moon-o";
} else {
  greeting = "Welcome, ";
}
//Displays the greeting on the page by finding the div id.
document.getElementById('greet').innerHTML = "<h3>" + greeting + " " + name + " " + '<i class="fa fa-' + icon + '" aria-hidden="true"></i>' + "</h3>";

//This is for the time in the footer
(function () {
    function checkTime(i) {
        return (i < 10) ? "0" + i : i;
    }

    function startTime() {
        var today = new Date(),
            h = checkTime(today.getHours()),
            m = checkTime(today.getMinutes())
        document.getElementById('time').innerHTML = h + ":" + m ;
        t = setTimeout(function () {
            startTime()
        }, 500);
    }
    startTime();
})();




