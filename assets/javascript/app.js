var firstQuestions = ["Q1 P1","Q1 P2", "Q1 P3", "Q1 P4"];
var secondQuestions = ["Q2 P1","Q2 P2", "Q2 P3", "Q2 P4"]
var thirdQuestions = ["Q3 P1","Q3 P2", "Q3 P3", "Q3 P4"]


var firstQuestionChoice = Math.floor(Math.random()*4);
var secondQuestionChoice = Math.floor(Math.random()*4);
var thirdQuestionChoice = Math.floor(Math.random()*4);



$("#q1").text(firstQuestions[firstQuestionChoice]);
$("#q2").text(secondQuestions[secondQuestionChoice]);
$("#q3").text(thirdQuestions[thirdQuestionChoice]);