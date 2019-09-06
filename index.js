var objBar = null

function init(){
    
    //*************** */Bottom Bar*********************
    objbottomBar = document.getElementById("bottomBar")
    objbottomBar.style.position = 'relative';
    objbottomBar.style.left = '960px';


    //**************** */Top Bar******************
    objtopBar = document.getElementById("topBar")
    objtopBar.style.position = 'relative';
    objtopBar.style.left = '960px';



    //************* */Right bar Bar***************
    objrightBar = document.getElementById("rightBar")
    objrightBar.style.position = 'relative';
    objrightBar.style.top = '440px';



    //*********** */left Bar******************
    objleftBar = document.getElementById("leftBar")
    objleftBar.style.position = 'relative';
    objleftBar.style.left = '440px';



    // *************Ball*****************
    objBall = document.getElementById("ball");
    objBall.style.top = '750px';    
    objBall.style.left = '1700px';

    x = 1;
    y = 1;
}



function moveBall(){


    objBall.style.left = parseInt(objBall.style.left) + 1 *x + 'px';
    objBall.style.top = parseInt(objBall.style.top) +1* y+ 'px';
    

    if( objBall.style.top > '800px' ) {
        y =-1;
    }
    else if (objBall.style.top == '0px'){
        y =-1;
    }
    
    
    if (objBall.style.left < '1200px'){
        x =-1;
        
    }
    else if (objBall.style.left > '0px'){
        x =-1;
    }
    
    
}



function moveBottomBar(event){
    if(event.keyCode == 39){
        moveLeft(objbottomBar)
    }
    else if(event.keyCode == 37){
        moveRight(objbottomBar)
    }
}

function moveTopBar(){
    if(event.keyCode == 104){
        moveLeft(objtopBar)
    }
    else if (event.keyCode == 105){
        moveRight(objtopBar)        
    }
}

function moveLeft(bar){

    bar.style.left = parseInt(bar.style.left) + 10 + 'px' ;
    console.log(bar.style.left);
    if(bar.style.left > '1600px'){
        bar.style.left = '1600px';
    }
}

function moveRight(bar){
    bar.style.left = parseInt(bar.style.left ) - 10 + 'px';
    if (bar.style.left <= '0px'){
        bar.style.left ='0px';
    } 
}


//*******************************************************************
 

// function moveRightBar(event){
//     if(event.keyCode == 102){
//         moveUp()
//     }
//     else if(event.keyCode == 99){
//         moveDown()
//     }
// }

// function moveLeftBar(){
//     if(event.keyCode == 100){
//         moveUp()
//     }
//     else if (event.keyCode == 103){
//         moveDown()        
//     }
// }

// function moveLeft(){

//     objleftBar.style.top = parseInt(objBar.style.top) + 10 + 'px' ;
//     console.log(objBar.style.top);
//     if(objleftBar.style.top >= '800px'){
//         objBar.style.top = '800px';
//     }
// }

// function moveRight(){
//     objBar.style.top = parseInt(objBar.style.top ) - 10 + 'px';
//     if (objBar.style.top <= '0px'){
//         objBar.style.top ='0px';
//     } 
//     document.getElementById('bar').style.top = objBar.style.top;
// }



































window.onload =init, moveBall;

setInterval(moveBall, 1);