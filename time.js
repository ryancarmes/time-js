
var HOUR = 7;
var MINUTE = 29;
var PERIOD = "ii";

if (PERIOD == "PM") {
    PERIOD = "evening";
} else if (PERIOD == "AM"){
    PERIOD = "morning"
} else {
    PERIOD = "Invalid PERIOD entry";
}

if (MINUTE >= 30) {
    console.log("It's almost " + (HOUR + 1) + " in the " + PERIOD);
}
else if (MINUTE > 0 && MINUTE <= 30) {
    console.log("It's just after " + HOUR + " in the " + PERIOD);
}


