document.querySelector('button').addEventListener("click",function(){
    var a=Math.floor(Math.random()*6)+1;
    document.querySelector("#id1").setAttribute("src",a+".png");
    var c=Math.floor(Math.random()*6)+1;
    document.querySelector("#id2").setAttribute("src",c+".png");
    if(a>c)
    document.getElementById("ip3").innerHTML="PLAYER 1 WON";
    else if(c>a)
    document.getElementById("ip3").innerHTML="PLAYER 2 WON";
    else
    document.getElementById("ip3").innerHTML="TIE";
})


