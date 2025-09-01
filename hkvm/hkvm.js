f_t=function(){
    var s1=S[2][1].value; var sa=tok(s1," ");
    s.push(sa[0])
    sa=tok(sa[1]," "); s.push(sa[0]);
    sa=tok(sa[1]," "); s.push(sa[0]);
    // s.push(sa[1]);
    var sb=s1.split(" ");
    s.push(btoa(sa[1])); // escape space delimiter
    // s.push(sb);
    if (sb[sb.length-2]=="hhkv:") f_hhkv();
    else if (sb[sb.length-2]=="hkvm:") {
        var mm=sb.indexOf("//m"); // delimiter includes spaces; in value field use "//m" or brackets etc.
        console.log("hkvm", mm) // search "hkvm" in console
        if (mm>=0) {
            var ms=s1.indexOf(" //m ");
            var mz=s1.indexOf(" hkvm: ");
            var ss=atob(s.pop())
            s.push(btoa(ss.substr(0,ss.indexOf(" //m "))))
            console.log("hkvm",sb.indexOf("//m"),s1.substr(ms+4,mz-ms-4)+"=END")
            // s.push(sb);
            s.push(s1.substr(ms+4,mz-ms-4));
            f_hkvm();
        }
        else {
            var ss=atob(s.pop())
            s.push(btoa(ss.substr(0,ss.indexOf("hkvm:")-1)))
            // console.log(sb.indexOf("//m"),s1.substr(ms+4,mz-ms-5)+"END")
            // s.push("no-mm")
            s.push("mk_hash UDIR rbv: swap: 2 msss: w:")
            f_hkvm();
        }
    }
}

// Ev3JhSBR-A== H-xchGCVBg== a hello world //m array: HKVM ap: 1 2 3 hkvm: t:

// Ev3JhSBR-A== H-xchGCVBg== a hello world //m test-mm hkvm: t:

// Ev3JhSBR-A== H-xchGCVBg== a hello world hkvm: t:

f_hkvm=function(){
    var mm=s.pop()
    var v=s.pop()
    var k=s.pop()
    var h2=s.pop()
    var h1=s.pop()
    s.push(h1 + ' ' + h2 + ' 2 pick: UDIR bv: 1 pick: r_hf jd: isodt: 0 ri: array: '+ v + ' b64d: ' + k + ' apk: 5 ri: swap: 4 ri: X_COMMENT 3 ri: '+ mm +' s: x:') // remove je:
    f_a_cdw_p()
}

// 4 ri: put start hash in DJSON
// X_COMMENT 3 ri: replaces Recipient

// drag elements
const pointerDrag = (el) => {

  const move = (ev) => {
    el.style.left = `${el.offsetLeft + ev.movementX}px`
    el.style.top = `${el.offsetTop + ev.movementY}px`
  };
  
  const dragStart = (ev) => el.setPointerCapture(ev.pointerId);
  const drag      = (ev) => el.hasPointerCapture(ev.pointerId) && move(ev);
  const noDefault = (ev) => ev.preventDefault();
  
  el.addEventListener("pointerdown", dragStart);
  el.addEventListener("pointermove", drag);
  el.addEventListener("touchstart", noDefault); // Instead of CSS touch-action: none;
};
document.querySelectorAll("div").forEach(pointerDrag);

f("OMNI dlb:") // dialogue box with button OMNI
S[12][1].value="yes" // textarea

// load iframe
var iframe = document.createElement('iframe');
iframe.onload = function() { alert('myframe is loaded'); };
iframe.src="reddit.html"
document.body.appendChild(iframe); // add it to wherever you need it in the document

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
