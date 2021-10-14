var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new speechrecognition();
function start(){
document.getElementById("tetbox").innerHTML="";
recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("tetbox").innerHTML=content;
} 