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
        M.S.push(S0.K.s_pbk); // 20230616 need s_pbk somehow!! for back end!!
        M.S.push(S0.K.pair);
        M.F(get_param.nn + ' AUTH_CSV:');
    }
}

// AUTH_CSV:
// https://github.com/omnixtar/omnixtar.github.io/blob/main/h/Phos/libphos.js

// rsa_oaep: savekp:
// https://github.com/omnixtar/omnixtar.github.io/blob/main/h/Phos/librsa.js