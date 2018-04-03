/*
Inspiré de https://openclassrooms.com/courses/creez-des-pages-web-interactives-avec-javascript/interrogez-un-serveur-web

Fonctionne également avec en fichier source le fichier généré par le script python du test2

*/


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
}


function jsonDivs(response){
    var jsonResponse = JSON.parse(response);

    for (var i=0;i<3;i++){    
        var jsonDivElt = document.createElement("div");
        var jsonEntry = jsonResponse[i];
        jsonDivElt.innerHTML = "<h3 class='jsonTitle'>" + jsonEntry.title + "</h3> ";
        jsonDivElt.innerHTML +="<p class='jsonInfos'> text-Id = " + jsonEntry.id + ", utilisateur = " + jsonEntry.userId + "</p>";
        jsonDivElt.innerHTML +="<p class='jsonContent'>" + jsonEntry.body + "</p>";
        document.body.appendChild(jsonDivElt);
    };
};

//ajaxGet("/../../test-python/output/liste_100_posts.json", jsonDivs);
ajaxGet("https://jsonplaceholder.typicode.com/posts?userId=1", jsonDivs);
