
//////////////////////////////////////////////////////////////////////////////////////////////////////                                           VARIABLES                                
//////////////////////////////////////////////////////////////////////////////////////////////////////

var random_number=0;
var random_dice_image; 
var player1_score = 0;
var player2_score = 0;
var turn_count = 0;
var player1_name;
var player2_name;

//////////////////////////////////////////////////////////////////////////////////////////////////////                                           FUNCTIONS                                
//////////////////////////////////////////////////////////////////////////////////////////////////////

function displayResult(){
    if(player1_score===100) alert("Player 1 won!");
    if(player2_score===100) alert("Player 2 won!");
}

function updateScore(){
    
    
    if(player1_score<100 && player2_score<100){
        if(player1_score+random_number<=100 && turn_count%2===1) {
            deleteImage1();
            player1_score+=random_number;
            //______________________________Ladders Code________________________________________
            //LADDER AT : 6
            if(player1_score===6) player1_score+=21;
            //LADDER AT : 22
            else if(player1_score===22) player1_score+=58;
            //LADDER AT : 31
            else if(player1_score===31) player1_score+=37;
            //LADDER AT : 63
            else if(player1_score===63) player1_score+=33;
            //______________________________Snakes Code________________________________________
            //SNAKE AT : 38
            if(player1_score===38) player1_score-=18;
            //SNAKE AT : 58
            else if(player1_score===58) player1_score-=46;
            //SNAKE AT : 88
            else if(player1_score===88) player1_score-=51;
            //SNAKE AT : 99
            else if(player1_score===99) player1_score-=21;
            document.getElementById("p1").innerHTML = player1_score;
            movePlayer1();
        }
        if(player2_score+random_number<=100 && turn_count%2===0) {
            deleteImage2();
            player2_score+=random_number;
            //______________________________Ladders Code________________________________________
            //LADDER AT : 6
            if(player2_score===6) player2_score+=21;
            //LADDER AT : 22
            else if(player2_score===22) player2_score+=58;
            //LADDER AT : 31
            else if(player2_score===31) player2_score+=37;
            //LADDER AT : 63
            else if(player2_score===63) player2_score+=33;
            //______________________________Snakes Code________________________________________
            //SNAKE AT : 38
            if(player2_score===38) player2_score-=18;
            //SNAKE AT : 58
            else if(player2_score===58) player2_score-=46;
            //SNAKE AT : 88
            else if(player2_score===88) player2_score-=51;
            //SNAKE AT : 99
            else if(player2_score===99) player2_score-=21;
            document.getElementById("p2").innerHTML = player2_score;
            movePlayer2();
        }
    }
    else displayResult();
}

function movePlayer1(){
    var img=document.createElement("img");
    img.src="images/trilo.png";
    img.width=35;
    img.height=35;
    img.id = "b1_"+player1_score+"_img";
    document.getElementById("b"+player1_score).appendChild(img);
}

function movePlayer2(){
    var img=document.createElement("img");
    img.src="images/aai.png";
    img.width=35;
    img.height=35;
    img.style.zIndex=2;
    img.id = "b2_"+player2_score+"_img";
    document.getElementById("b"+player2_score).appendChild(img);
}

function deleteImage1()
{
    var image_1 = document.getElementById("b1_"+player1_score+"_img");
    image_1.parentNode.removeChild(image_1);
}
function deleteImage2()
{
    var image_2 = document.getElementById("b2_"+player2_score+"_img");
    image_2.parentNode.removeChild(image_2);
}
function initiate_players(){
    var img=document.createElement("img");
    img.src="images/trilo.png";
    img.width=35;
    img.height=35;
    img.id = "b1_"+player1_score+"_img";
    document.getElementById("b"+player2_score).appendChild(img);
    var img=document.createElement("img");
    img.src="images/aai.png";
    img.width=35;
    img.height=35;
    img.id = "b2_"+player2_score+"_img";
    document.getElementById("b"+player2_score).appendChild(img);
}
function roll_dice(){
    // if random number != 6, increement turn count.
    if(random_number!=6) turn_count++;
    random_number = Math.ceil(Math.random()*6)
    random_dice_image = "images/dice" + random_number + ".png";
    document.querySelector(".dice-block > .dice_image > img").setAttribute("src",random_dice_image);
    updateScore();
    console.log(player1_score+ " " + player2_score);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////                                           Implementation                                
///////657646r7686'8665/5///////////////////////////////////////////////////////////////////////////////////////////////

// player1_name = prompt("Enter name Of Player 1:\n");
// player2_name = prompt("Enter name Of Player 2:\n");

if(turn_count===0) initiate_players();

document.getElementById("roll").addEventListener("click",roll_dice);