const myButton = document.getElementById("mybutton");
const myImage = document.getElementById("myimg");

myButton.addEventListener("click",(event)=>{
    if(myImage.style.visibility === "hidden"){
        myImage.style.visibility = "visible";
        myButton.textContent = "Hide";
    }
    else{
        myImage.style.visibility ="hidden";
        myButton.textContent = "Show";
    }
    
    

});