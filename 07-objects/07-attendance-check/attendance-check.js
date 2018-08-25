// ### Attendance Check

// Define a function, `attendanceCheck`, that accepts a day of the week as a string.

// Using the globally-defined classRoom array, `attendanceCheck` should return a
// new array with only the names of the students present on the inputted day of
// the week.

// classCheck('Monday'); // => ['Marnie', 'Shoshanna']
// classCheck('Wednesday'); // => ['Marnie', 'Lena']

let classRoom = [
    {
        'Marnie' : [
                {'Monday' : true},
                {'Tuesday' : true},
                {'Wednesday' : true},
                {'Thursday' : true},
                {'Friday' : true}
            ]
    },
    {
        'Lena' : [
                {'Monday' : false},
                {'Tuesday' : false},
                {'Wednesday' : true},
                {'Thursday' : false},
                {'Friday' : true}
            ]
    },
    {
        'Shoshanna' : [
                {'Monday' : true},
                {'Tuesday' : true},
                {'Wednesday' : false},
                {'Thursday' : true},
                {'Friday' : false}
            ]
    },
    {
        'Jessa' : [
                {'Monday' : false},
                {'Tuesday' : false},
                {'Wednesday' : false},
                {'Thursday' : false},
                {'Friday' : true}
            ]
    }
];

// YOUR CODE BELOW
const attendanceCheckALT = (weekdayString) => {

    const attendanceArr = [] ;

    // loop thru classRoom ARRAY
    for ( let i = 0 ; i < classRoom.length; i++) {  // get objects

        let studentObj = classRoom[i];
        let studentName = Object.keys(studentObj)[0];
        let studentDaysArr = studentObj[studentName];

        // loop thru StudentDays ARRAY
        for (let j = 0; j < studentDaysArr.length; j++) {

            // search StudentDay Object for key that matches weekdayString
            let weekdayObj = studentDaysArr[j];

        //  let dayName = Object.keys(weekdayObj)[0];

            if(weekdayObj[weekdayString]) attendanceArr.push(studentName);
        }
    }

    return attendanceArr;
}



























// ALTERNATIVE
// using Object.entries: returns an array of arrays
// converts {k1: 'v1', k2: 'v2'} into [['k1', 'v1'], ['k2', 'v2']]
 
const attendanceCheck = (weekdayString) => {

    const attendanceArr = [] ;

    // loop thru classRoom ARRAY
    for ( let i = 0 ; i < classRoom.length; i++) {  // get objects

        let studentObj = classRoom[i];

        let [studentName, studentDaysArr] = Object.entries(studentObj)[0];  // ******

      //  let studentName = Object.keys(studentObj)[0];
      //  let studentDaysArr = studentObj[studentName];

        // loop thru StudentDays ARRAY
        for (let j = 0; j < studentDaysArr.length; j++) {

            // search StudentDay Object for key that matches weekdayString
            let weekdayObj = studentDaysArr[j];

            let [dayName, presentOnDay] = Object.entries(weekdayObj)[0];

            if(dayName === weekdayString && presentOnDay) attendanceArr.push(studentName);
        }
    }

    return attendanceArr;
}