window.onload=function(){
    let parent_board= document.getElementById("board");
    let sqr= parent_board.querySelectorAll("div");

    for (let i=0; sqr.length;i++){
        sqr[i].classList.add("square");
    }
}

