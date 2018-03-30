function ajaxGet(url) {
    var req = new XMLHttpRequest();
    var jsonText = "";
    var codeRetour = 0;
    
    
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            jsonText=req.responseText;
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
            codeRetour = req.status;
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
    
//    return [jsonText,codeRetour];
    return jsonText;
}

function printInHTML(text){
  var json_content=JSON.parse(text);  
  var newElt = document.createElement("li"); 

  newElt.textContent = json_content.body
  document.getElementById("titre").appendChild(newElt);  
}


function printError(numError){
  var errorElt = document.createElement("li"); 
  errorElt.textContent = numError;
  document.getElementById("titre").appendChild(errorElt);  
}



var json = [];
var ret = [];
for (var i=1;i<4; i++){
   json[i] =ajaxGet("https://jsonplaceholder.typicode.com/posts/"+String(i));
}

for (var i=1;i<4; i++){
//    if (ret[i]===0) {
        printInHTML(json[i])
//    } else {
//        printError(ret[i]); 
//    }
    
}