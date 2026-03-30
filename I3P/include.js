function include(url) {
  var s = document.createElement("script");
  s.setAttribute("type", "text/javascript");
  s.setAttribute("src", url);
  document.body.appendChild(s);
}

wsm[0].send(JSON.stringify(["phos",0,2,3])) 