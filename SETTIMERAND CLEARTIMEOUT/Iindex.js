let timeoutid;
function starttimer(){
    timeoutid = setTimeout(()=> {window.alert("say Hello")},3000);
    console.log("staerted");
}
function cleartimer(){
    clearTimeout(timeoutid);
    console.log("CLEARED");
}

