console.log("test ngrok.js 20240903")
async function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    // xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    await xmlHttp.open( "GET", theUrl, true ); // true for asynchronous request
    xmlHttp.send( null );
    // return await xmlHttp.responseText;
    return xmlHttp.responseText;
}
// var v1=httpGet("https://github.com/omnixtar/omnixtar.github.io/issues/1")
// Chrome has strict policy, BOTH first and second server needs to have ACAO, so use corsproxy
var v1=await httpGet("https://corsproxy.io/?https://github.com/omnixtar/omnixtar.github.io/issues/1")

var htmlDom = new DOMParser().parseFromString(v1, 'text/html');
var vl1=htmlDom.querySelectorAll('.js-timeline-item')[1].getElementsByTagName('a').length 
// var ngrok_addr=htmlDom.querySelectorAll('.js-timeline-item')[1].getElementsByTagName('a')[vl1-1].getAttribute('href') 
var ngrok_addr="https://8a75-2001-d08-da-5986-f093-ef4e-d34-4828.ngrok-free.app/"