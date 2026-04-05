// https://stackoverflow.com/questions/77944100/how-to-sign-data-in-javascript-and-verify-the-signature-in-php

// Source - https://stackoverflow.com/a/77948153
// Posted by Topaco, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-01, License - CC BY-SA 4.0

// (async () => {
async function sign(pem, data) {
    const pemHeader = '-----BEGIN PRIVATE KEY-----';
    const pemFooter = '-----END PRIVATE KEY-----';
    const pemContents = pem.substring(pemHeader.length, pem.length - pemFooter.length);

    var pkcs8DerB64 = pemContents;
    var pkcs8Der = Uint8Array.from(window.atob(pkcs8DerB64), c => c.charCodeAt(0));

    // var data = "The quick brown fox jumps over the lazy dog";
    var privateKey = await window.crypto.subtle.importKey("pkcs8", pkcs8Der, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, true, ["sign"]);
    var signature = await signRequestData(data, privateKey);
    console.log(signature);
    return signature;
}
    // Function to sign the data
async function signRequestData(data, privateKey) {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const signatureBuffer = await window.crypto.subtle.sign(
        { name: "RSASSA-PKCS1-v1_5" },
        privateKey,
        dataBuffer  // Fix: apply the unhashed data
    );
    const signatureArray = new Uint8Array(signatureBuffer);
    const signatureBase64 = btoa(String.fromCharCode.apply(null, signatureArray));
    return signatureBase64;
}

// })();

// PHP
// /home/hongwu/devel/2026/amphp/auth/_/verjs.php

// js three.js wsc
qs0="phos "+ localStorage.getItem('SP') +" dmeta/"+ localStorage.getItem('HPBK') +" swap: rgrep: 0 i: c1c: explode: 0 i: fmt: ddts: 2dts: s:"
wsm[0].send(JSON.stringify(qs0.split(" ")))

// search SP secret phrase get file mod time
php phos.php 0186db60 dmeta/Doh9EB_bFw\=\=/ swap: rgrep: 0 i: c1c: explode: 0 i: fmt: ddts: 2dts: s:

// js get HPBK
f("btoa(S0.K.s_pbk) ev: h53: b64: path:")

S0.$CDW.F_O.push("over:")
f_over=function(){f("1 pick:")}
JSON.stringify( S0.$CDW.F_O )
'["dup:","dup:","to:","clog:","body","getn:","0","i:","div","ce:","2","pick:","ih:","ac:","over:"]' 

// ajax write hash file, get AUTH
SESSION: AUTH i: je: dup: dup: hbp 3 pick: swap: 2 msss: w: ON ECHO bv: enl: x:


// MUST have ";" at end of colon definition!!
JSON.stringify( S0.$CDW.B_AUTH_U )
// '["SESSION:","AUTH","i:","je:","dup:","dup:","hbp","3","pick:","swap:","2","msss:","w:","ON","ECHO","bv:","enl:",";"]' 
// new CDW need HBPK at bottom of stack
'["SESSION:","AUTH","i:","PBK","i:","o_hash.json","l_cdwjs","h_pwd","SESSION:","AUTH","i:","je:","dup:","dup:","hbp","3","pick:","swap:","2","msss:","w:","ON","ECHO","bv:","enl:",";"]' 


JSON.stringify( S0.$CDW.A_AUTH_U )
'["B:","B_AUTH_U","F_O"]' 

// last over: copy AUTH json to TOS
JSON.stringify( S0.$CDW.F_O )
'["dup:","dup:","to:","clog:","body","getn:","0","i:","div","ce:","2","pick:","ih:","ac:","over:"]' 

// save SP to localStorage
localStorage.setItem('SP', JSON.parse( s[s.length-1].split("\n")[0] ).SP ) 

// WSC (websocket client) in three.js get AUTH token file mod time
qs0="phos "+ localStorage.getItem('SP') +" dmeta/"+ localStorage.getItem('HPBK') +" swap: rgrep: 0 i: c1c: explode: 0 i: fmt: ddts: 2dts: s:"
"phos a9801bf1 dmeta/Doh9EB_bFw== swap: rgrep: 0 i: c1c: explode: 0 i: fmt: ddts: 2dts: s:"
wsm[0].send(JSON.stringify(qs0.split(" "))) 

// get miliseconds elapsed since file mod time
s.push(JSON.parse(wsm[wsm.length-1]).split("_").join("") ); f("2date: nowr: -"); t()

// ajax /o
f_sp_ls=function(){localStorage.setItem('SP', JSON.parse( s[s.length-1].split("\n")[0] ).SP )} 

// three.js
f_tauth=function(){qs0="phos "+ localStorage.getItem('SP') +" dmeta/"+ localStorage.getItem('HPBK') +" swap: rgrep: 0 i: c1c: explode: 0 i: fmt: ddts: 2dts: s:"; wsm[0].send(JSON.stringify(qs0.split(" "))); }
function f_tauth()

f_tdiff=function(){s.push(JSON.parse(wsm[wsm.length-1]).split("_").join("") ); f("2date: nowr: -");} 

f("tauth: tdiff:")