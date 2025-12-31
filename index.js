
setTimeout(function() {
    document.querySelector("h1").innerHTML="2";
},2000);
setTimeout(function() {
    document.querySelector("h1").innerHTML="1";
},3000);
setTimeout(function() {
    document.querySelector("h1").innerHTML="";
    document.querySelector("body").classList.add("bgd");
},4000);