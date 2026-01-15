
// iframe message event
function msgf(event) {
  a_msg.push(event.data);
  console.log("message from parent 20260110", event.data);
  f_t()
}
a_msg = []
window.addEventListener("message", msgf);

// in Parent
iframe.contentWindow.postMessage("hello 1318","*")

// Like button
temp1.onclick=function(){s.push(this);s.push(t().parentElement.previousElementSibling.outerHTML );f("now:");var t0=s.pop();S[1][2].querySelectorAll('iframe')[0].contentWindow.postMessage(JSON.stringify({t:t0, m:'from parent 20260110 button', c:utf8_to_b64(t()), x:"like", u: window.location}),"*") // remember last "*" parameter!!
}

