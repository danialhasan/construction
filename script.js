var x = document.getElementById("nav");
var body = document.querySelector('body');

function toggleMenu(){
    console.log("Detected");

    if (x.className === "nav") {
        x.className += " responsive";        //shows menu and adds locked class to body
        body.classList.add('locked');
        console.log("nav icon activated");


    } else {
        x.className = "nav";                 //hides menu 
        body.classList.remove('locked'); 
        console.log("nav icon deactivated"); 
    }
}

function mobileMenuNavExit(){
    //if nav-right is pressed AND screen width<=768px, hide the menu. Else, return.
    if (screen.width<=768){
        x.className = "nav";
        body.classList.remove('locked');     //removes locked class from body
        console.log("mobileMenuNavExit called");
    }else{
        return;
    }
}
function home(){
    
}

/*
[x] Lock page scroll when mobile menu is activated, activate page scroll when deactivated. 
*/