function ajaxGet(url, callback) {
    var req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            callback(req.responseText);
        } else {
            console.error(req.status + " " + req.statusText + " " + url);
        }
    });
    req.addEventListener("error", function () {
        console.error("Erreur réseau avec l'URL " + url);
    });
    req.send(null);
    return req.status;
}

function printInHTML(XMLResponse){
  var json_content=JSON.parse(XMLResponse);  
  var fetch1Elt = document.createElement("li"); 
   //fetch1Elt.textContent = json_content.body ;
   //fetch1Elt.textContent = JSON.stringify(json_content, null, 4);
  fetch1Elt.textContent = XMLResponse
  document.getElementById("titre").appendChild(fetch1Elt);  
}

function inTable(table,i) {}


var json = [];
for (var i=1;i<4; i++){
ajaxGet("https://jsonplaceholder.typicode.com/posts/"+String(i), printInHTML);
        }
