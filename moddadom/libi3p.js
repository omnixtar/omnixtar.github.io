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