f("OMNI dlb:")
pointerDrag( S[1][2] ) 
S[1][2].querySelectorAll('textarea')[0].remove() 
S[1][2].querySelectorAll('iframe')[0].src="https://yo6sgmfq7pfvvp2e4kcuhjtfg7wfltt63igwcukhbmuqm6lu3a3a.b32.i2p/oxm/oxm.php?nn=adam"

// ====

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
else s.push(": a_cmd "+ a_msg[a_msg.length-1] +" "+ t().substring(0,p_cdw)+" ;");// a_msg top for iframe parent postMessage
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
