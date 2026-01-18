// assign element as S0.var
f_as=function(){S0[s.pop()]=s.pop()} 

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

// s.slice( n ) stack slice
f_sts=function(){s.push(s.slice(s.pop()))}

// splice
f_sp=function(){var n=s.pop();t().splice(n)}

// splice stack
f_ssp=function(){s.splice(s.pop())} 

// duplicate top of stack
f_dup=function(){s.push(t())} 

// swap
f_swap=function(){var a=s.pop();var b=s.pop();s.push(a);s.push(b)}

// substr rename sts stack slice
f_ss=function(){var q=s.pop();var p=s.pop();s.push(s.pop().substr(p,q))}

// getElementById; x id: to set id
f_g=function(){s.push(document.getElementById(s.pop()))}

// value
f_v=function(){s.push(s.pop().value)}

// append
f_app=function(){f_swap();s.pop().append(s.pop())}

// querySelectorAll
f_qsa=function(){s.push(document.querySelectorAll(s.pop()))}

// dom.querySelectorAll
f_dqsa=function(){var e=s.pop();s.push(s.pop().querySelectorAll(e))}

// to array 
f_ta=function(){s.push([...s.pop()])}

// A[i]
f_i=function(){var a = s.pop();var b = s.pop();s.push(b[a]);}

// nextElementSibling
f_nes=function(){s.push(s.pop().nextElementSibling)}

// utf8_to_b64
utf8_to_b64=function(str){return(window.btoa(unescape(encodeURIComponent(str))));}

// time now, use decode URI to avoid space
f_now=function(){S0.d=eval(decodeURI("new%20Date()"));s.push(S0.d.toISOString());}

// assign like action to element
f_like=function(){s.pop().onclick=function(){s.push(this);s.push(t().parentElement.previousElementSibling.outerHTML);f("now:");t0=s.pop();document.querySelectorAll('iframe')[0].contentWindow.postMessage(JSON.stringify({t:t0,m:'from_parent_20260110_button',c:utf8_to_b64(t()),x:"like",u:window.location}),"*")}}

// S0.B1 assign post action to element
f_post=function(){s.pop().onclick=function(){s.push(this);s.push(t().parentElement.previousElementSibling.outerHTML);f("now:");t0=s.pop();S0.V0.contentWindow.postMessage(JSON.stringify({t:t0,m:S0.T0.value,c:utf8_to_b64(t()),x:"post",u:window.location}),"*")}}

// dup: cln: Follow sih: iae: // click button, clone, rename, insert
f_sih=function(){S0.X0=s.pop();S0.X1=s.pop();S0.X1.innerHTML=S0.X0;s.push(S0.X1)}

f_cln=function(){s.push(s.pop().cloneNode())}

function f_pick() {
        var n = s.pop();
        s.push(s[s.length - 1 - n]);
    }

// clone button // must add 0 z: to force execute <-- last char must be : else right-click replaces innerHTML
delay(function(){
    // do stuff
    console.log("typeof f", typeof f)
    f(": _c 1 pick: cln: swap: sih: iae: ;")
}, 5000 ); // must wait for f to load

// new convention _x for colon definition words