console.log("test ngrok.js 20240903")
async function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    // xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    // await xmlHttp.open( "GET", theUrl, true ); // true for asynchronous request
    xmlHttp.open( "GET", theUrl, true ); // true for asynchronous request
    xmlHttp.send( null );
    // return await xmlHttp.responseText;
    return xmlHttp.responseText;
}

var v1
// var f1 = async function(){
async function f1(){

// var v1=httpGet("https://github.com/omnixtar/omnixtar.github.io/issues/1")
// Chrome has strict policy, BOTH first and second server needs to have ACAO, so use corsproxy
v1=await httpGet("https://corsproxy.io/?https://github.com/omnixtar/omnixtar.github.io/issues/1")

console.log(v1)

var htmlDom = new DOMParser().parseFromString(v1, 'text/html');
var vl1=htmlDom.querySelectorAll('.js-timeline-item')[1].getElementsByTagName('a').length 
// var ngrok_addr=htmlDom.querySelectorAll('.js-timeline-item')[1].getElementsByTagName('a')[vl1-1].getAttribute('href') 
var ngrok_addr="https://8a75-2001-d08-da-5986-f093-ef4e-d34-4828.ngrok-free.app/"

}

// await f1()
// f1()

function getHTML(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open('get', url, true);
        xhr.responseType = 'document';
        xhr.onload = function () {
            var status = xhr.status;
            if (status == 200) {
                resolve(xhr.response.documentElement.innerHTML);
            } else {
                reject(status);
            }
        };
        xhr.send();
    });
}

async function schemaPageHandler(){
    try {
        var parser = new window.DOMParser();
        // var remoteCode = await getHTML('https://schema.org/docs/full.html');
        var remoteCode = await getHTML("https://corsproxy.io/?https://github.com/omnixtar/omnixtar.github.io/issues/1")

console.log("  remoteCode", remoteCode)

var htmlDom = new DOMParser().parseFromString(remoteCode, 'text/html');
var vl1=htmlDom.querySelectorAll('.js-timeline-item')[1].getElementsByTagName('a').length 
var ngrok_addr=htmlDom.querySelectorAll('.js-timeline-item')[1].getElementsByTagName('a')[vl1-1].getAttribute('href') 

return ngrok_addr

/*
        var sourceDoc = parser.parseFromString(remoteCode, 'text/html');
        var thingList = sourceDoc.getElementById("C.Thing");
*/
        // document.getElementById("structured-data-types").appendChild(thingList);
    } catch(error) {
        console.log("Error fetching remote HTML: ", error);
    }              
}

// await schemaPageHandler()
var ngrok_addr=await schemaPageHandler()