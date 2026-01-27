// Button
temp0.onclick=function(){s.push(this);s.push(t().parentElement.previousElementSibling.outerHTML )} 

// ====

f("OMNI dlb:")
pointerDrag( S[1][2] ) 
S[1][2].querySelectorAll('textarea')[0].remove() 
S[1][2].querySelectorAll('iframe')[0].src="https://yo6sgmfq7pfvvp2e4kcuhjtfg7wfltt63igwcukhbmuqm6lu3a3a.b32.i2p/oxm/oxm.php?nn=adam"
S[1][2].querySelectorAll('iframe')[0].height="400px"
S[1][2].querySelectorAll('iframe')[0].width="600px"

// ====

f("OMNI dlb:")
D0=S[1][2] 
pointerDrag( D0 ) 
D0.querySelectorAll('textarea')[0].remove() 
D0.append(document.createElement('iframe')) 
D0.querySelectorAll('iframe')[0].src="https://yo6sgmfq7pfvvp2e4kcuhjtfg7wfltt63igwcukhbmuqm6lu3a3a.b32.i2p/oxm/oxm.php?nn=adam"
D0.querySelectorAll('iframe')[0].height="400px"
D0.querySelectorAll('iframe')[0].width="600px"

// parent window
a_msg=[]
function msgf(event) {
    a_msg.push(event.data);
    console.log("message from child 20260110", event.data);
    f_pm() // pm: post (after) message f_t()
}
window.addEventListener("message", msgf);

// 20260127 a_cmd
s.forEach(e=>{if (typeof e=="string") if (e.substr(0,10)=='[{"a_cmd":') a_cmd.push(e) })

for(i in s){n=s.length-1-i;console.log(n,s[n]);if(i>5)break;} 

// pa: post ajax
f_pa=function(){for(i in s){n=s.length-1-i;e=s[n];if(typeof e=="string")if(e.substr(0,10)=='[{"a_cmd":'){a_cmd.push(e);break};console.log(n,s[n]);if(i>5)break;}}

// postMessage
f_pa=function(){for(i in s){n=s.length-1-i;e=s[n];if(typeof e=="string")if(e.substr(0,10)=='[{"a_cmd":'){a_cmd.push(e);window.parent.postMessage(e,"*");break};console.log(n,s[n]);if(i>5)break;}}



// post message from parent console
S[1][2].querySelectorAll('iframe')[0].contentWindow.postMessage('from parent 20260110 0006',"*") // remember last "*" parameter!!

// include outerHTML utf8_to_b64()
temp0.onclick=function(){s.push(this);s.push(t().parentElement.previousElementSibling.outerHTML );S[1][2].querySelectorAll('iframe')[0].contentWindow.postMessage('from parent 20260110 button '+utf8_to_b64(t()),"*") // remember last "*" parameter!!
}

// ====
// iframe child
a_msg=[]
function msgf(event) {
    a_msg.push(event.data);
    console.log("message from parent 20260110", event.data);
    f_t()
}
window.addEventListener("message", msgf);

f_t=function(){ // x:
  f('dlb_nn pfr: ') // add e: e: after n_cdw definition, no need to call dlb_n
  // s0 = preg_replace('/s+/', ' ', $a);
  s.push(preg_replace('/s+/', ' ', t().trim()));
  
  var n_cdw;
  if (t().substring(0,1)==":") n_cdw=t().split(' ')[1];
  else n_cdw="a_cmd";	
  // dlb_nn load nickname box contents to stack but not execute
  // var p_cdw=t().indexOf("a_cdw:")
  
  var p_cdw=t().length-3 // what if it is not last x?
  if (p_cdw>0) console.log(t().substring(p_cdw)); // return;
  if (t().substring(0,1)==":") s.push(t().substring(0,p_cdw)) // assume : CDW .... ; 
  // else s.push(": a_cmd "+t().substring(0,p_cdw)+" ;");// if initial string is not : then add : a_cmd ... ; to make CDW
  // else s.push(": a_cmd "+ a_msg[a_msg.length-1] +" "+ t().substring(0,p_cdw)+" ;");// a_msg top for iframe parent postMessage
  else s.push(": a_cmd "+ btoa(a_msg[a_msg.length-1]) +" b64d: "+ t().substring(0,p_cdw)+" ;"); // a_msg top for iframe parent postMessage; btoa escape spaces
  f(t()) // must execute t() top of stack
  if (typeof a_cdw==="undefined") a_cdw={} // create first time
  var otmp={}
  otmp[n_cdw]=S0.$CDW[n_cdw]
  f('now:')
  otmp.t_f0=s.pop()
  s.push(JSON.stringify(otmp))
  f('h53: b64: path:')
  otmp.h_f0=s.pop()
  // a_cdw[n_cdw]=': B_AUTH1 SESSION: AUTH i: PBK i: o_hash.json l_cdwjs h_pwd '+ btoa(JSON.stringify(otmp)) +' b64d: jd: array: swap: ap: acdwa: '+ n_cdw + ' s: ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1'
  var D_OLD=false
  if (D_OLD) a_cdw[n_cdw]=': B_AUTH1 SESSION: AUTH i: PBK i: o_hash.json l_cdwjs h_pwd '+ btoa(JSON.stringify(otmp)) +' b64d: jd: array: swap: ap: 2dup: acdwa: '+ n_cdw + ' 2 pick: 0 i: h_f0 usa: je: dup: hbp 2 pick: array: swap: r apk: isodt: t apk: dup: je: dup: hbp 2 pick: swap: h apk: 7 pick: swap: ap: je: ON ECHO bv: dup: dup: ec: hbp 9 pick: swap: 2 msss: w: ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1'
  else { a_cdw[n_cdw]=': B_AUTH1 SESSION: AUTH i: PBK i: o_hash.json l_cdwjs h_pwd '+ btoa(JSON.stringify(otmp)) +' b64d: jd: array: swap: ap: 2dup: acdwa: over: HF0 bv: '+ n_cdw + ' gbv: HF0 i: 0 i: h_f0 usa: je: dup: hbp 2 pick: array: swap: r apk: isodt: t apk: dup: je: dup: hbp 2 pick: swap: h apk: gbv: HF0 i: swap: ap: je: ON ECHO bv: dup: dup: ec: hbp 9 pick: swap: 2 msss: w: ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1'  // s:' // debug separator
  // a_cdw[n_cdw]+=' ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1' 
  }
  f(a_cdw[n_cdw])
}

// ====

pointerDrag = (el) => {

  const move = (ev) => {
    el.style.left = `${el.offsetLeft + ev.movementX}px`
    el.style.top = `${el.offsetTop + ev.movementY}px`
  };
  
  const dragStart = (ev) => {
    if (ev.target.closest("button, input, textarea, [contenteditable]")) return;
    el.setPointerCapture(ev.pointerId);
  };
  const drag      = (ev) => el.hasPointerCapture(ev.pointerId) && move(ev);
  const dragEnd   = (ev) => el.releasePointerCapture(ev.pointerId);
  
  el.addEventListener("pointerdown", dragStart);
  el.addEventListener("pointermove", drag);
  el.addEventListener("pointerup", dragEnd);
};

// ====
// button makes JSON
temp0.onclick=function(){s.push(this);s.push(t().parentElement.previousElementSibling.outerHTML );S[1][2].querySelectorAll('iframe')[0].contentWindow.postMessage(JSON.stringify({m:'from parent 20260110 button', c:utf8_to_b64(t())}),"*") // remember last "*" parameter!!
}

// add time to JSON
temp0.onclick=function(){s.push(this);s.push(t().parentElement.previousElementSibling.outerHTML );f("now:");var t0=s.pop();S[1][2].querySelectorAll('iframe')[0].contentWindow.postMessage(JSON.stringify({t:t0, m:'from parent 20260110 button', c:utf8_to_b64(t())}),"*") // remember last "*" parameter!!
}

// x: "like" action
temp0.onclick=function(){s.push(this);s.push(t().parentElement.previousElementSibling.outerHTML );f("now:");var t0=s.pop();S[1][2].querySelectorAll('iframe')[0].contentWindow.postMessage(JSON.stringify({t:t0, m:'from parent 20260110 button', c:utf8_to_b64(t()), x:"like"}),"*") // remember last "*" parameter!!
}

// u: window.location
temp0.onclick=function(){s.push(this);s.push(t().parentElement.previousElementSibling.outerHTML );f("now:");var t0=s.pop();S[1][2].querySelectorAll('iframe')[0].contentWindow.postMessage(JSON.stringify({t:t0, m:'from parent 20260110 button', c:utf8_to_b64(t()), x:"like", u: window.location}),"*") // remember last "*" parameter!!
}

// write to hash file

f_t=function(){ // x:
  f('dlb_nn pfr: ') // add e: e: after n_cdw definition, no need to call dlb_n
  // s0 = preg_replace('/s+/', ' ', $a);
  s.push(preg_replace('/s+/', ' ', t().trim()));
  
  var n_cdw;
  if (t().substring(0,1)==":") n_cdw=t().split(' ')[1];
  else n_cdw="a_cmd";	
  // dlb_nn load nickname box contents to stack but not execute
  // var p_cdw=t().indexOf("a_cdw:")
  
  var p_cdw=t().length-3 // what if it is not last x?
  if (p_cdw>0) console.log(t().substring(p_cdw)); // return;
  if (t().substring(0,1)==":") s.push(t().substring(0,p_cdw)) // assume : CDW .... ; 
  // else s.push(": a_cmd "+t().substring(0,p_cdw)+" ;");// if initial string is not : then add : a_cmd ... ; to make CDW
  // else s.push(": a_cmd "+ a_msg[a_msg.length-1] +" "+ t().substring(0,p_cdw)+" ;");// a_msg top for iframe parent postMessage
  else s.push(": a_cmd "+ btoa(a_msg[a_msg.length-1]) +" b64d: jd: dup: c i: b64d: c apk: je: dup: hbp 2 pick: swap: 2 msss: w: "+ t().substring(0,p_cdw)+" ;"); // write to hash file
  f(t()) // must execute t() top of stack
  if (typeof a_cdw==="undefined") a_cdw={} // create first time
  var otmp={}
  otmp[n_cdw]=S0.$CDW[n_cdw]
  f('now:')
  otmp.t_f0=s.pop()
  s.push(JSON.stringify(otmp))
  f('h53: b64: path:')
  otmp.h_f0=s.pop()
  // a_cdw[n_cdw]=': B_AUTH1 SESSION: AUTH i: PBK i: o_hash.json l_cdwjs h_pwd '+ btoa(JSON.stringify(otmp)) +' b64d: jd: array: swap: ap: acdwa: '+ n_cdw + ' s: ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1'
  var D_OLD=false
  if (D_OLD) a_cdw[n_cdw]=': B_AUTH1 SESSION: AUTH i: PBK i: o_hash.json l_cdwjs h_pwd '+ btoa(JSON.stringify(otmp)) +' b64d: jd: array: swap: ap: 2dup: acdwa: '+ n_cdw + ' 2 pick: 0 i: h_f0 usa: je: dup: hbp 2 pick: array: swap: r apk: isodt: t apk: dup: je: dup: hbp 2 pick: swap: h apk: 7 pick: swap: ap: je: ON ECHO bv: dup: dup: ec: hbp 9 pick: swap: 2 msss: w: ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1'
  else { a_cdw[n_cdw]=': B_AUTH1 SESSION: AUTH i: PBK i: o_hash.json l_cdwjs h_pwd '+ btoa(JSON.stringify(otmp)) +' b64d: jd: array: swap: ap: 2dup: acdwa: over: HF0 bv: '+ n_cdw + ' gbv: HF0 i: 0 i: h_f0 usa: je: dup: hbp 2 pick: array: swap: r apk: isodt: t apk: dup: je: dup: hbp 2 pick: swap: h apk: gbv: HF0 i: swap: ap: je: ON ECHO bv: dup: dup: ec: hbp 9 pick: swap: 2 msss: w: ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1'  // s:' // debug separator
  // a_cdw[n_cdw]+=' ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1' 
  }
  f(a_cdw[n_cdw])
}


// decode JSON
f_t=function(){ // x:
  f('dlb_nn pfr: ') // add e: e: after n_cdw definition, no need to call dlb_n
  // s0 = preg_replace('/s+/', ' ', $a);
  s.push(preg_replace('/s+/', ' ', t().trim()));
  
  var n_cdw;
  if (t().substring(0,1)==":") n_cdw=t().split(' ')[1];
  else n_cdw="a_cmd";	
  // dlb_nn load nickname box contents to stack but not execute
  // var p_cdw=t().indexOf("a_cdw:")
  
  var p_cdw=t().length-3 // what if it is not last x?
  if (p_cdw>0) console.log(t().substring(p_cdw)); // return;
  if (t().substring(0,1)==":") s.push(t().substring(0,p_cdw)) // assume : CDW .... ; 
  // else s.push(": a_cmd "+t().substring(0,p_cdw)+" ;");// if initial string is not : then add : a_cmd ... ; to make CDW
  // else s.push(": a_cmd "+ a_msg[a_msg.length-1] +" "+ t().substring(0,p_cdw)+" ;");// a_msg top for iframe parent postMessage
  else s.push(": a_cmd "+ btoa(a_msg[a_msg.length-1]) +" b64d: jd: dup: c  i: b64d: "+ t().substring(0,p_cdw)+" ;"); // a_msg top for iframe parent postMessage; btoa escape spaces
  f(t()) // must execute t() top of stack
  if (typeof a_cdw==="undefined") a_cdw={} // create first time
  var otmp={}
  otmp[n_cdw]=S0.$CDW[n_cdw]
  f('now:')
  otmp.t_f0=s.pop()
  s.push(JSON.stringify(otmp))
  f('h53: b64: path:')
  otmp.h_f0=s.pop()
  // a_cdw[n_cdw]=': B_AUTH1 SESSION: AUTH i: PBK i: o_hash.json l_cdwjs h_pwd '+ btoa(JSON.stringify(otmp)) +' b64d: jd: array: swap: ap: acdwa: '+ n_cdw + ' s: ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1'
  var D_OLD=false
  if (D_OLD) a_cdw[n_cdw]=': B_AUTH1 SESSION: AUTH i: PBK i: o_hash.json l_cdwjs h_pwd '+ btoa(JSON.stringify(otmp)) +' b64d: jd: array: swap: ap: 2dup: acdwa: '+ n_cdw + ' 2 pick: 0 i: h_f0 usa: je: dup: hbp 2 pick: array: swap: r apk: isodt: t apk: dup: je: dup: hbp 2 pick: swap: h apk: 7 pick: swap: ap: je: ON ECHO bv: dup: dup: ec: hbp 9 pick: swap: 2 msss: w: ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1'
  else { a_cdw[n_cdw]=': B_AUTH1 SESSION: AUTH i: PBK i: o_hash.json l_cdwjs h_pwd '+ btoa(JSON.stringify(otmp)) +' b64d: jd: array: swap: ap: 2dup: acdwa: over: HF0 bv: '+ n_cdw + ' gbv: HF0 i: 0 i: h_f0 usa: je: dup: hbp 2 pick: array: swap: r apk: isodt: t apk: dup: je: dup: hbp 2 pick: swap: h apk: gbv: HF0 i: swap: ap: je: ON ECHO bv: dup: dup: ec: hbp 9 pick: swap: 2 msss: w: ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1'  // s:' // debug separator
  // a_cdw[n_cdw]+=' ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1' 
  }
  f(a_cdw[n_cdw])
}

// insertAdjacentElement + createElement
f_iace=function(){var e=s.pop();s.pop().insertAdjacentElement("afterend",document.createElement(e))}

// insertAdjacentElement + createElement textarea
f_iate=function(){s.pop().insertAdjacentElement("afterend",document.createElement('textarea'))}

// insertAdjacentElement; after omnistart(), right click pushes clicked element on stack
f_iae=function(){var e=s.pop();s.pop().insertAdjacentElement("afterend",(e))} 

// innerHTML
f_ih=function(){var ti=s.pop();s.pop().innerHTML=ti} 

// top of stack = last alphabet f_t() is reserved for testing
f_z=function(){alert(t())}

// outerHTML
f_oh=function(){s.push(s.pop().outerHTML)} 

// innerHTML
f_ih=function(){s.push(s.pop().innerHTML)} 

// JSON.stringify
f_je=function(){s.push(JSON.stringify(s.pop()))}

// s.slice( n )
f_ss=function(){s.push(s.slice(s.pop()))}

// splice
f_sp=function(){var n=s.pop();t().splice(n)}

// splice stack
f_ssp=function(){s.splice(s.pop())} 

// duplicate top of stack
f_dup=function(){s.push(t())} 

// swap
f_swap=function(){var a=s.pop();var b=s.pop();s.push(a);s.push(b)}

// substr
f_sst=function(){var q=s.pop();var p=s.pop();s.push(s.pop().substr(p,q))}

// getElementById; x id: to set id
f_g=function(){s.push(document.getElementById(s.pop()))}

// value
f_v=function(){s.push(s.pop().value)}

// append
f_app=function(){f_swap();s.pop().append(s.pop())}

// querySelectorAll
f_qsa=function(){s.push(document.querySelectorAll(s.pop()))}

// to array 
f_ta=function(){s.push([...s.pop()])}

// A[i]
f_i=function(){var a = s.pop();var b = s.pop();s.push(b[a]);}

// nextElementSibling
f_nes=function(){s.push(s.pop().nextElementSibling)}