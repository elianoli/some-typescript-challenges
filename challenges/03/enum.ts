// Enum for the days of the week
enum daysOfWeek {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
};

// Function based in the enum
const printDayMessage = (day: daysOfWeek): void => {
    switch(day) {
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
        
    };
};

// Some tests
printDayMessage(daysOfWeek.Sunday);
printDayMessage(daysOfWeek.Monday);
printDayMessage(3);