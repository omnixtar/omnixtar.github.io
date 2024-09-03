console.log("test ngrok.js 20240903")
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}
var v1=httpGet("https://github.com/omnixtar/omnixtar.github.io/issues/1")
var htmlDom = new DOMParser().parseFromString(v1, 'text/html');