player1_name= localStorage.getItem("player1_name");
player1_score = "";
player2_name= localStorage.getItem("player2_name");
player2_score = "";

function send() {

Number1 =document.getElementById("number1").value;
Number2 =document.getElementById("number2").value;


act_ans = parseInt(number1) * parseInt(number2);


question_num = "<h4>" + Number1 + "X" + Number2 + "</h4>";
input_box = "<br>Answer : <input type='number' id = 'input_check_box'>";
check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
row = question_num + input_box + check_button;

document.getElementById("output").innerHTML = row;

document.getElementById(number1).innerHTML = "";
document.getElementById(number2).innerHTML = "";
}

question_turn = "player1"
answer_turn = "player2"

function check() {

get_answer = document.getElementById("input_check_box").value;

if (answer_turn == "player1") {

player1_score = player1_score + "1"
document.getElementById("player1_score").innerHTML = player1_score;

}
else {

    player2_score = player2_score + 1
    document.getElementById("player2_score").innerHTML = player2_score;

}

if (question_turn == "player1"){

question_turn = "player2";
document.getElementById("player_question").innerHTML = "Question turn - " + player2_name;

}
else {

question_turn = "player1";
document.getElementById("player_question").innerHTML = "Question turn - " + player1_name;
}

}