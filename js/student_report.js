////My Way of doing it******

var message = '';
var searchInput = '';
var arrayOfNames = [];

function print() {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}


function makeMessage(i) {
  message += '<h2>Student: ' + students[i].name + '</h2>';
  message += '<p>Track: ' + students[i].track + '</p>';
  message += '<p>Points: ' + students[i].points + '</p>';
  message += '<p>Achievements: ' + students[i].achievements + '</p>';
  return message;
}

function theBiggerFunction() {
  function theFunction(theName) {
    return theName.toLowerCase() == searchInput.toLowerCase();
  }
  return arrayOfNames.some(theFunction);
}

for (i=0; i<students.length; i++) {
  arrayOfNames.push(students[i].name);
} console.log(arrayOfNames);

while (true) {
  searchInput = prompt("Enter the name of a student in our highschool:");
  if (searchInput === null) {break;} else if (theBiggerFunction() == false){message = "This student is not in our Highschool"; print(message);}
    for (i=0; i<students.length; i++) {
      if (searchInput.toLowerCase() == students[i].name.toLowerCase()) {makeMessage(i); print(message);}
    }
  }






////Threehouse way*******/
//
// var message = '';
// var student;
// var search;
//
// function print(message) {
//  var outputDiv = document.getElementById('output');
//  outputDiv.innerHTML = message;
// }
//
// function getStudentReport( student ) {
//  var report = '<h2>Student: ' + student.name + '</h2>';
//  report += '<p>Track: ' + student.track + '</p>';
//  report += '<p>Points: ' + student.points + '</p>';
//  report += '<p>Achievements: ' + student.achievements + '</p>';
//  return report;
// }
//
// while (true) {
//  search = prompt('Search student records: type a name [Jody] (or type "quit" to end)');
//  if (search === null || search.toLowerCase() === 'quit') {
//    break;
//  }
//  for (var i = 0; i < students.length; i += 1) {
//    student = students[i];
//    if ( student.name === search ) {
//      message = getStudentReport( student );
//      print(message);
//    }
//  }
// }
