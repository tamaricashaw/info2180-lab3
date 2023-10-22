window.onload=function(){
    //getting square class
    let parent_board= document.getElementById("board");
    let sqr= parent_board.querySelectorAll("div");
    
    //getting reset button and status element
    let rbutton= document.querySelector('.controls .btn');
    let stat = document.getElementById("status");

    //reset button event listenener and function
    rbutton.addEventListener("click", function(){
        resetGame();
        });

    function resetGame() {
        for (let i = 0; i < sqr.length; i++) {
            sqr[i].textContent = "";
            state_of_game[i] = "";
            sqr[i].classList.remove("X", "O");
            }
        stat.innerHTML = "Move your mouse over a square and click to play an X or an O.";
        currentPlayer = "X";
        };



    // array that keeps track of what the players input
    let state_of_game = [
        "", "", "",
        "", "", "",
        "", "", ""
    
    ];


    //initializing  current player to x. 
    let currentPlayer= "X";
    for (let i=0; i < sqr.length;i++){
        sqr[i].classList.add("square");

        sqr[i].addEventListener('mouseover',function(){          //hover functionalility
            sqr[i].classList.add('hover') 
        });

        sqr[i].addEventListener('mouseout', function(){         //no_hover functionality
            sqr[i].classList.remove('hover');
        });

        
        
        // loop for adding each element on the board by each player and checking to see if they win
        sqr[i].addEventListener('click', function(){

            if (sqr[i].textContent !== "") {
                return;
              }

            if (currentPlayer == "X") {
                sqr[i].classList.add('square', 'X');
                sqr[i].innerText= "X";
                
                state_of_game[i] = "X";
                
                if (sqr_check(currentPlayer)){
                    stat.innerHTML= "Congratulations! X is the Winner!";
                    console.log(stat);

                    
                }
                
                currentPlayer= "O";      //setting currentplaer to  O after first player
            }else{
                sqr[i].classList.add('square', 'O');
                sqr[i].innerText= "O";
                state_of_game[i] = "O";
               
               
                if (sqr_check (currentPlayer)){
                    stat.innerHTML= "Congratulations! O is the Winner!";
                    console.log(stat);
                }

                currentPlayer = "X";    //setting currentplaer to  X  for next player
            }
        })
         
        
    }

    //checking to see wining squares
    function sqr_check(p){
       
        if ((state_of_game[0]== p && state_of_game[1] == p && state_of_game[2]== p ) || (state_of_game[3]== p && state_of_game[4] == p && state_of_game[5]== p ) ||
            (state_of_game[6]== p && state_of_game[7] == p && state_of_game[8]== p ) || (state_of_game[0]== p  && state_of_game[3] == p && state_of_game[6]== p ) ||
            (state_of_game[1]== p && state_of_game[4] == p && state_of_game[7]== p ) || (state_of_game[2]== p && state_of_game[5] == p && state_of_game[8]== p )||
            (state_of_game[1]== p && state_of_game[3] == p && state_of_game[9]== p ) || (state_of_game[2]== p  && state_of_game[4] == p && state_of_game[6]== p )){
        
                return true;  
        }
        return false;
        }

        
    
 }
