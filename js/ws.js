/*
  Phoscript WebSocket Library

  copy/paste the following in browser console
  f("cws:") -- init/refresh WebSocket connection
  how() -- to retrieve man page (manual) from back end
*/
wsphos=function(sp){socket.send(JSON.stringify(["phos",sp]))}
how=function(){wsphos("man g_js")}
f(": w_post wsm: jd: log:")
f_wsm=function(){s.push(wsm[wsm.length-1])}
f_jd=function(){s.push(JSON.parse(s.pop()))}
f_log=function(){console.log(s.pop())}
f_cws=function(){
    socket = new WebSocket("wss://yo6sgmfq7pfvvp2e4kcuhjtfg7wfltt63igwcukhbmuqm6lu3a3a.b32.i2p/ws/");
    socket.addEventListener('message', (event) => {
        console.log('Echoed back: ' + event.data);
        wsm.push(event.data);
        f("w_post");
        // Optionally close the connection after receiving the echo
        // socket.close();
    });
}