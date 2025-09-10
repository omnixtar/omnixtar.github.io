pointerDrag = (el) => {

  const move = (ev) => {
    el.style.left = `${el.offsetLeft + ev.movementX}px`
    el.style.top = `${el.offsetTop + ev.movementY}px`
console.log(ev.pointerId, el.hasPointerCapture(ev.pointerId),el.offsetTop,ev.clientY,"t=0919")
  };
  
  const dragStart = (ev) => el.setPointerCapture(ev.pointerId);
  const drag      = (ev) => el.hasPointerCapture(ev.pointerId) && ((ev.clientY-el.offsetTop)<100) && move(ev);
  const noDefault = (ev) => ev.preventDefault();
  
  el.addEventListener("pointerdown", dragStart);
  el.addEventListener("pointermove", drag);
  el.addEventListener("pointerup", (el)=>{console.log("up",el,el.pointerId);document.elementFromPoint(el.clientX,el.clientY).onclick()});
  el.addEventListener("touchstart", noDefault); // Instead of CSS touch-action: none;
};
document.querySelectorAll("div").forEach(pointerDrag); // need this every time. so must reload page?

---
// conditional dragStart
const pointerDrag = (el) => {

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

// Use like:
document.querySelectorAll(".box").forEach(pointerDrag);

// TEST BUTTON CLICK
document.querySelector("#test").addEventListener("click", () => {
  console.log("Works!")
});

// capture iframe element on click
function iframeClickHandler(event) {
  event.preventDefault();
  alert("Iframe clicked");
      
  var el=event
  console.log(document.elementFromPoint(el.clientX,el.clientY))
  s.push(event)
}

f_ifre=function(){ifre(s.pop())}

function ifre(iframe){ // capture iframe element on click
  var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

  if (typeof iframeDoc.addEventListener != "undefined") {
      iframeDoc.addEventListener("click", iframeClickHandler, false);
  } else if (typeof iframeDoc.attachEvent != "undefined") {
      iframeDoc.attachEvent ("onclick", iframeClickHandler);
  }
}

f_href=function(){s.push(s.pop().target.getAttribute("href"))}

s[22].target.getAttribute("href") 

// var iframe = document.getElementById("myIframe");
var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

if (typeof iframeDoc.addEventListener != "undefined") {
    iframeDoc.addEventListener("click", iframeClickHandler, false);
} else if (typeof iframeDoc.attachEvent != "undefined") {
    iframeDoc.attachEvent ("onclick", iframeClickHandler);
}



---

Element.prototype.drag = function( $s ){

	var remove = document.removeEventListener;
	var add    = document.addEventListener;

	var docMouseMove = function(e){
		
		this.style.left = (e.clientX-this.offsetX)+'px';
		this.style.top  = (e.clientY-this.offsetY)+'px';

		if($s.onDrag) $s.onDrag.call(this,e);
		
    this.$h = null;
    
    var bc = this.getBoundingClientRect();
    var c = {x:bc.left+(bc.width/2),y:bc.top+(bc.height/2)};
    
    this.classList.add('draggable-hide');
    
    var el = document.elementFromPoint(c.x,c.y);
        
    if(el && el.isDroppable) this.$h = el;
    
    if(this.$h && this.$h.onHover) this.$h.onHover.call(this.$h,this,e);
    
    this.classList.remove('draggable-hide');
    
	}.bind(this);

	var docMouseUp = function(e){
    
		remove('mousemove',docMouseMove);
		remove('mouseup',docMouseUp);
    
		document.body.classList.remove('draggable-move');
    
		if(this.$h && this.$h.onDrop) this.$h.onDrop.call(this.$h,this,e);
		if($s.onStop) $s.onStop.call(this,e);
    
	}.bind(this);

	this.addEventListener('mousedown',function(e){
    
		this.offsetX = e.offsetX;
		this.offsetY = e.offsetY;
    
		this.classList.add('draggable');
    
		document.body.classList.add('draggable-move');
    
		add('mousemove',docMouseMove);
		add('mouseup',docMouseUp);
    
		if($s.onStart) $s.onStart.call(this,e);
    
	}.bind(this));

}

Element.prototype.drop = function($s){
  
  this.isDroppable = true;

	this.onHover = $s.onHover;
	this.onDrop  = $s.onDrop;

}

dragItem.drag({
  onStart : function(event){
    this.innerHTML = 'onStop Event...'
  },
  onDrag : function(event){
    this.innerHTML = 'onDrag Event...'
  },
  onStop : function(event){
    this.innerHTML = 'onStop Event...'
  }
});

dropItem.drop({
  onDrop : function( item, event ){
    this.innerHTML = 'onDrop Event...';
  },
  onHover : function( item, event ){
    this.innerHTML = 'being Hovered';
  }
});

// https://stackoverflow.com/questions/7790725/javascript-track-mouse-position
onclick = function(e){console.log("click:", e.clientX, e.clientY)}
onmouseup = function(e){console.log("mouse up:", e.clientX, e.clientY)}
onmousedown = function(e){console.log("mouse down:", e.clientX, e.clientY)}
onmousemove = function(e){console.log("mouse location:", e.clientX, e.clientY)}




// Duniix: Decentralized "Unix"

// Back end:  SP + PBK = ciphertext
// Front end: ciphertext -> (PVK) -> cleartext (SP) 
// Front End sends SP to Back End
// Back End verifies SP (Secret Phrase)

// Metaprogramming: to write a program (noun) that can program (verb) another program (noun).

// LOGO Turtle graphics
// Decentralized Cloud Computing

// MetaMVC (Model View Controller)

// Homoiconic = Data and code have the same format.

f('DSC dlb:') // FORTH (1968) words Phoscript 符式 黄大一 in chris dlb, create DSC dlb
f('textarea ce: DSC app:')
f('dsc_cmd cmd DSC 1 dom:')
f('dsc_sign 123 DSC 5 dom:')

f('textarea ce: DSC app:')
f('dsc_ecr Encrypted_Message DSC 6 dom:')
f('textarea ce: DSC app:')
f('dsc_aor Any_other_remarks DSC 7 dom:')
f('textarea ce: DSC app:')
f('dsc_misc Misc DSC 8 dom:')

S0.dlb.DSC[2].style.right='0px'
S0.dlb.DSC[2].style.bottom='150px'

// chris browser 2021-2-20 2255
f(': do_sign awa: im_pbk ss: mk_sign ;')
f(': im_pbk . dup: js: jd: msg ix: awa: impbk: ss: ;')
f(': mk_sign awa: sign_kp: rsa_sign ;')
f(': ecr_sig 5 pick: s2ab: 1 pick: 1 pick: catab: 4 pick: 1 pick: awa: ecr_t: ab_scj ;') // : ab_scj ab2s: btoa: scj: ;') // sig done
f(': rsa_sign saveks: privateKey ix: dsc_sign geid: value: awa: sign: do_scj ;')
f(': do_scj awa: ecr_sig ss: ;') 
f(': ab_scj ab2s: btoa: awa: scj_d: u_chat ;') // scj_d is async!!
f(': u_chat 10 pick: 1 pick: CHAT: ;')
f(': a_scj dsc_ecr geid: value: 3 pick: dup: awa: do_sign ss: ;') // dsc_ecr is DOM id!!
f(': x_dsc a_scj ;')

// DSC uuid
f(': u_do_sign awa: im_pbk ss: u_mk_sign ;')
f(': u_mk_sign awa: sign_kp: u_rsa_sign ;')
f(': u_rsa_sign saveks: privateKey ix: dsc_sign geid: value: awa: sign: u_do_scj ;')
f(': u_do_scj awa: u_ecr_sig ss: ;') 
f(': u_ecr_sig 5 pick: 1 pick: 1 pick: catab: 4 pick: 1 pick: awa: ecr_t: ab_scj ;') // : ab_scj ab2s: btoa: scj: ;') // sig done
f(': u_dsc a_uuid: 3 pick: dup: awa: u_do_sign ss: ;') // change this to test Ciphertext change

// DSC uuid load skp signing key pair
// f(': l_do_sign awa: im_pbk ss: l_mk_sign ;') 
f(': l_do_sign awa: im_pbk l_mk_sign ;') // execute l_mk_sign AFTER im_pbk, no ss: !!
// im_pbk ends AFTER l_sign_kp: because lskp is fast; wrong order on stack compared to u_dsc
f(': l_mk_sign awa: l_sign_kp: l_rsa_sign ;')

f(': l_do_scj awa: l_ecr_sig ss: ;') 
f(': l_ecr_sig 5 pick: 1 pick: 1 pick: catab: 3 pick: 1 pick: awa: ecr_t: ab_scj ;') // : ab_scj ab2s: btoa: scj: ;') // sig done
// catab: 3 pick: replaced with catab: l_sign_kp: privateKey i: but it will change stack order!!
// do it in future if necessary ...

// saveks: does not change stack ix: extract privateKey generated by sign_kp:
// can remove saveks:
// need to have function to load skp from S0.KS.pair to stack: l_sign_kp:
// then make function to import skp from json, then save to S0.KS.pair, load to stack when needed
f(': l_rsa_sign privateKey ix: dsc_sign geid: value: awa: sign: l_do_scj ;')
f(': l_dsc a_uuid: 3 pick: dup: awa: l_do_sign ss: ;') // change this to test Ciphertext change

// Get Hash of PBK
// M.F(': B_AUTH1 SESSION: AUTH i: PBK i: o_hash.json l_cdwjs h_b64 s: ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1');
hpbk = ': B_AUTH1 SESSION: AUTH i: PBK i: o_hash.json l_cdwjs h_b64 s: ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1'

// M.F(': B_AUTH1 HTTP SESSION: AUTH i: PBK i: o_hash.json l_cdwjs h_b64 dup: last rg: newest 2 4 sspl: s: ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1');
newest_msg = ': B_AUTH1 HTTP SESSION: AUTH i: PBK i: o_hash.json l_cdwjs h_b64 dup: last rg: newest 2 4 sspl: s: ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1';

// f('S0.K ev: je: blob: keypair-chris-b.json download:')
savekp = 'S0.K ev: je: blob: keypair-chris-b.json download:'

f(': AJE B: B_F F_E ;');
f(': F_E dup: jd: ev: ;');

// New browser 20230616
// insert dummy item to S so that S[2] is now nickname dialogue box
S.splice(1,0,S[1])

function f_ev(){ s.push(eval(s.pop())) }

function f_e(){ s.push(S[2][1].value.split(' ')[S[2][1].value.split(' ').length-2]); M.F(eval(s.pop())) }

// 20230628 define-variable
function f_d() { v_n=(S[2][1].value.split(' ')[0]); l_n=v_n.length; l_s=S[2][1].value.length; s_i=S[2][1].value; s_d=s_i.substr(l_n+1,l_s-l_n-4); console.log(v_n, l_n, l_s, "--"+s_d+"--", S[2][1].value ); window[v_n]=s_d; }


// 20230628 define-variable-eval-rhs
function f_de() { v_n=(S[2][1].value.split(' ')[0]); l_n=v_n.length; l_s=S[2][1].value.length; s_i=S[2][1].value; s_d=s_i.substr(l_n+1,l_s-l_n-4); console.log(v_n, l_n, l_s, "--"+s_d+"--", S[2][1].value ); eval('window.'+ v_n +'='+ s_d); }


// 20230628 dom.style.right
f_r=function(){r=s.pop(); s.pop().style.right=r+'pt'}


// 20230628 dom.style.bottom
f_b=function(){r=s.pop(); s.pop().style.bottom=r+'pt'}


// utoa for unicode string!!
// 20230619 works for hhm: !!
S[2][3].onclick = function() { console.log(S[2][1].value.substr(S[2][1].value.length-2)); if (S[2][1].value.substr(S[2][1].value.length-2)=="e:") f(S[2][1].value); else if (S[2][1].value=="") f(newest_msg); else f(': B_AUTH1 HTTP SESSION: AUTH i: PBK i: o_hash.json l_cdwjs h_b64 dup: last '+ utoa(S[2][1].value)  +' b64d: 2 pick: dup: last rg: newest 5 4 sspl: old_record swap: 0 i:  last 4 replace: isodt: 0 replace: dup: 2 i: 3 replace: 2 pick: 2 replace: 1 pick: 5 replace: mk_hash wm1 nl: . . wm2 s: ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1') }

function f_e(){ M.F(eval(s.pop())) }

newest_msg=': B_AUTH1 HTTP SESSION: AUTH i: PBK i: o_hash.json l_cdwjs h_b64 dup: last rg: newest 2 4 sspl: s: ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1'

myhash=': B_AUTH1 SESSION: AUTH i: PBK i: o_hash.json l_cdwjs h_b64 s: ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1' 

h_mkdir=': B_AUTH1 SESSION: AUTH i: PBK i: o_hash.json l_cdwjs h_mkdir s: ; : A_AUTH1 B: B_AUTH1 F_O ; A_AUTH1'

function utoa(data) { return btoa(unescape(encodeURIComponent(data))); }


// use ecr_t, too much work to debug VM in awa:
async function f_ecr_t() { //  2021-02-19 must return TOS for awa: to work!!
    // var S = _S(arguments[0]);
    var S = M.S;
    const encodedMessage = S.pop();
    const encryptedText = await window.crypto.subtle.encrypt({ name: 'RSA-OAEP' }, S.pop(), encodedMessage);
    S.push(encryptedText);
    return encryptedText;
}
