window.onload=function(){
    let parent_board= document.getElementById("board");
    let sqr= parent_board.querySelectorAll("div");

    let state_of_game = [
        "", "", "",
        "", "", "",
        "", "", ""
    
    ];

    let currentPlayer= "X";
    for (let i=0; i < sqr.length;i++){
        sqr[i].classList.add("square");

        sqr[i].addEventListener('mouseover',function(){
            sqr[i].classList.add('hover') 
        });

        sqr[i].addEventListener('mouseout', function(){
            sqr[i].classList.remove('hover');
        });

        
        let stat = document.getElementById("status")

        sqr[i].addEventListener('click', function(){
            if (currentPlayer == "X") {
                sqr[i].classList.add('square', 'X');
                sqr[i].classList.remove('O');
                
                sqr[i].innerText= "X";
                state_of_game[i] = "X";
                

                if (sqr_check(currentPlayer)){
                    stat.innerHTML= "Congratulations! X is the Winner!";
                    console.log(stat);
                }
                console.log(state_of_game);
                
                currentPlayer= "O";
            }else{
                sqr[i].classList.add('square', 'O');
                sqr[i].classList.remove('X');
                
                sqr[i].innerText= "O";
                state_of_game[i] = "O";
               
               
                if (sqr_check (currentPlayer)){
                    stat.innerHTML= "Congratulations! O is the Winner!";
                    console.log(stat);
                }
                console.log(state_of_game);

                currentPlayer = "X";
            }
        })
         
        
    }

    function sqr_check(p){
       
        if ((state_of_game[0]== p && state_of_game[1] == p && state_of_game[2]== p ) || (state_of_game[3]== p && state_of_game[4] == p && state_of_game[5]== p ) ||
            (state_of_game[6]== p && state_of_game[7] == p && state_of_game[8]== p ) || (state_of_game[0]== p  && state_of_game[3] == p && state_of_game[6]== p ) ||
            (state_of_game[1]== p && state_of_game[4] == p && state_of_game[7]== p ) || (state_of_game[2]== p && state_of_game[5] == p && state_of_game[8]== p )||
            (state_of_game[1]== p && state_of_game[3] == p && state_of_game[9]== p ) || (state_of_game[2]== p  && state_of_game[4] == p && state_of_game[6]== p )){
        
                return true;  
        }
        
        }
    
 }
 //stat.innerHTML= "Congratulations! O is the Winner!";