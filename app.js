

var btnTranslate = document.getElementById("btn-translate");
var inputtext=document.getElementById("input-text");
var outputtext=document.getElementById("output");
var serverurl="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getTranslationURL(input) {
    return serverurl + "?" + "text=" + input
}




function clickHandler() {
   
    var inputtxt=inputtext.value;
    fetch(getTranslationURL(inputtxt))
    .then(Response=>Response.json())
    .then(json=>{
       var translatedtxt=json.contents.translated;
       outputtext.innerText=translatedtxt;
    } )
};


btnTranslate.addEventListener("click", clickHandler);
