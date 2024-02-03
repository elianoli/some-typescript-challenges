var daysOfWeek;
(function (daysOfWeek) {
    daysOfWeek[daysOfWeek["Sunday"] = 0] = "Sunday";
    daysOfWeek[daysOfWeek["Monday"] = 1] = "Monday";
    daysOfWeek[daysOfWeek["Tuesday"] = 2] = "Tuesday";
    daysOfWeek[daysOfWeek["Wednesday"] = 3] = "Wednesday";
    daysOfWeek[daysOfWeek["Thursday"] = 4] = "Thursday";
    daysOfWeek[daysOfWeek["Friday"] = 5] = "Friday";
    daysOfWeek[daysOfWeek["Saturday"] = 6] = "Saturday";
})(daysOfWeek || (daysOfWeek = {}));
;
var printDayMessage = function (day) {
    switch (day) {
        case (daysOfWeek.Sunday):
            console.log("It\'s a relaxing day!");
            break;
        case daysOfWeek.Monday:
            console.log("The start of the workweek!");
            break;
        case daysOfWeek.Friday:
            console.log("'Weekend is almost here!'");
            break;
        default:
            console.log("Enjoy your day!");
    }
    ;
};
printDayMessage(daysOfWeek.Sunday);
printDayMessage(daysOfWeek.Monday);
printDayMessage(3);
