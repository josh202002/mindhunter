function pg1(){
    let i=document.getElementById("key").value;
    let paa;
    if(i=="test"){
        window.location.assign("acideg2.html")
    }
    else {
        paa="Sorry! Wrong Answer"
    }
    document.getElementById("demo").innerHTML=paa;
}