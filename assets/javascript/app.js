var firstQuestions = ["Q1 P1 testing testing testing testing testing testing","Q1 P2", "Q1 P3", "Q1 P4"];
var secondQuestions = ["Q2 P1","Q2 P2", "Q2 P3", "Q2 P4"];
var thirdQuestions = ["Q3 P1","Q3 P2", "Q3 P3", "Q3 P4"];
var fourthQuestions = ["Q4 P1","Q4 P2", "Q4 P3", "Q4 P4"];
var fifthQuestions = ["Q5 P1","Q5 P2", "Q5 P3", "Q5 P4"];


var firstQuestionChoice = Math.floor(Math.random()*4);
var secondQuestionChoice = Math.floor(Math.random()*4);
var thirdQuestionChoice = Math.floor(Math.random()*4);
var fourthQuestionChoice = Math.floor(Math.random()*4);
var fifthQuestionChoice = Math.floor(Math.random()*4);



$("#q1").text(firstQuestions[firstQuestionChoice]);
$("#q2").text(secondQuestions[secondQuestionChoice]);
$("#q3").text(thirdQuestions[thirdQuestionChoice]);
$("#q4").text(fourthQuestions[fourthQuestionChoice]);
$("#q5").text(fifthQuestions[fifthQuestionChoice]);