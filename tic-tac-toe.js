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
        sqr[i].addEventListener('click', function(){
            if (currentPlayer == "X") {
                sqr[i].classList.add('square', 'X');
                sqr[i].innerText= "X";
                state_of_game[sqr[i]] = "X";
                currentPlayer= "O";
                sqr[i].classList.remove('O'); 
                
            }else{
                sqr[i].classList.add('square', 'O');
                sqr[i].innerText= "O";
                state_of_game[sqr[i]] = "O";
                currentPlayer = "X";
            }
        })
    }
    
}

//array to keeep track of state of game




// function squareClick(event){
//     const square = event.target;
//     const squareId = square.id

//     const rowIndex = Math.floor((parseInt(squareId.slice(-1)) - 1) / 3);
//     const colIndex = (parseInt(squareId.slice(-1)) - 1) % 3;

//     if (state_of_game[rowIndex][colIndex] === "") {
//         // Update the game state and UI
//         state_of_game[rowIndex][colIndex] = currentPlayer;
//         square.textContent = currentPlayer;
//         square.classList.add(currentPlayer);

//         currentPlayer = currentPlayer === "X" ? "O" : "X";
// }
// }

// const squares = document.querySelectorAll('.square');
// squares.forEach(function(square, index) {
//   square.addEventListener('click', handleSquareClick);
//   square.setAttribute("data-row", Math.floor(index / 3));
//   square.setAttribute("data-col", index % 3);
// });

// const squareX = document.querySelector('.square.X');

// // Get the computed color property
// const color = window.getComputedStyle(squareX).getPropertyValue('color');
