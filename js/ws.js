/*
  Phoscript WebSocket Library

  how() -- to retrieve man page (manual) from back end
*/
wsphos=function(sp){socket.send(JSON.stringify(["phos",sp]))}
how=function(){wsphos("man g_js")}
f(": w_post wsm: jd: log:")
f_wsm=function(){s.push(wsm[wsm.length-1])}
f_jd=function(){s.push(JSON.parse(s.pop()))}
f_log=function(){console.log(s.pop())}