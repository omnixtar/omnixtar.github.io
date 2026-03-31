function include(url) {
  var s = document.createElement("script");
  s.setAttribute("type", "text/javascript");
  s.setAttribute("src", url);
  document.body.appendChild(s);
}

include('js/omni.js')
s=[]
phosinit()

wsm[0].send(JSON.stringify(["phos",0,2,3])) 

// GenKeys
f_genkeys=function () {
    alert('GenKeys');
    S0 = M.S[0];
    
    // 20230602
    // After GenKeys button is clicked, check dialogue box for text – must have filename for pem file, and optional password, or Phoscript expression, else execute default generate keys.
    
    // if S0.K is already loaded, just run AUTH_CSV: no need savekp:
    if (typeof S0.K !== 'object') {
        M.F(': save_auth savekp: ' + get_param.nn + ' AUTH_CSV: ; awt: rsa_oaep: save_auth ');
        console.log('after rsa_oaep:', M.S);
    } else {
        // to simulate, use this branch, S0.K loaded: 
        // 3 items on stack before AUTH_CSV: 
        // previous case just genkeys with rsa_oaep: (OXW-20260330)
        M.S.push(S0.K.s_pbk); // 20230616 need s_pbk somehow!! for back end!!
        M.S.push(S0.K.pair);
        M.F(get_param.nn + ' AUTH_CSV:');
    }
}

// AUTH_CSV:
// https://github.com/omnixtar/omnixtar.github.io/blob/main/h/Phos/libphos.js

// rsa_oaep: savekp:
// https://github.com/omnixtar/omnixtar.github.io/blob/main/h/Phos/librsa.js

17:"req_auth_sc":["b64d:","4","orpb:","hex:","dup2:","rsa:","2","pick:","lkey:","swap:","recr:","b64e:","ON","ECHO","bv:","ec:","2","pick:","SP","ka:","AUTH","uss:",";"]

// j_n named json
socket.send(JSON.stringify(["phos",btoa(S0.K.s_pbk),"req_auth_r","rsa","j_n"]))
