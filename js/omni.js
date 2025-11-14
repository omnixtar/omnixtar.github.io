function include(url) {
  var s = document.createElement("script");
  s.setAttribute("type", "text/javascript");
  s.setAttribute("src", url);
  document.body.appendChild(s);
}

// 2025-10-24
function f_path() // path safe b64
{
  // $a = array_pop($S);
  var $a = s.pop()
  // echo '  in path: '.$a." ".strpos($a, '/')."\\n";
  // if (strpos($a, '/')>=0) { $a = str_replace('/', '_', $a); } // echo $a; }
  if ($a.indexOf('/')>=0) { $a = $a.replaceAll('/', '_'); } 
  // if (strpos($a, '+')>=0) $a = str_replace('+', '-', $a);
  if ($a.indexOf('+')>=0) { $a = $a.replaceAll('+', '-'); } 
  s.push($a)
}

// mkeval_l("omnihash")
// DmII2G1lww==
// var omnihash=function(){
var cyrb53=function(str, seed = 0){
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
    h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
    return 4294967296 * (2097151 & h2) + (h1>>>0);
}
var bnToB64=function bnToB64(bn){
  var hex = BigInt(bn).toString(16);
  if (hex.length % 2) { hex = '0' + hex; }
  var bin = [];
  var i = 0;
  var d;
  var b;
  while (i < hex.length) {
    d = parseInt(hex.slice(i, i + 2), 16);
    b = String.fromCharCode(d);
    bin.push(b);
    i += 2;
  }
  return btoa(bin.join(''));
}
var mkeval_l=function(FN){ // *_l means long form before minified
  var j1={n:FN}
  j1.s=eval(j1.n).toString()
  j1.t=(new Date()).toISOString()
  var j2={s:JSON.stringify(j1),h:bnToB64(cyrb53(JSON.stringify(j1)))  }
  console.log(bnToB64(cyrb53(FN+"="+j1.s)))
  return FN+"="+j1.s
}

// }


// bnToB64(cyrb53(s0))
// "GD8AiV9ndg==" 
// mkeval_l("gunzipinit")
// HXw/kMdxzg==
var gunzipinit=function(){gunzip=e=>{const r=Uint8Array.from(atob(e),(e=>e.charCodeAt(0))),n=new DecompressionStream("gzip"),t=n.writable.getWriter();return t.write(r),t.close(),new Response(n.readable).arrayBuffer().then((function(e){return(new TextDecoder).decode(e)}))},getgzfn_js=async function(s){var s1=await gunzip(s),j3=JSON.parse(s1),j4=JSON.parse(j3.s);return eval(j4.n+"="+j4.s),j3}}

// mkeval_l("setctxmenu")
// EbM8JXJgtQ== debugger eval code:33:11
var setctxmenu=function(){var e,n;void 0===window.s&&(window.s=[]);var t=window.s;document.addEventListener?document.addEventListener("contextmenu",(function(o){alert("You've tried to open context menu "+o.clientX+" "+o.clientY),e=document.elementFromPoint(o.clientX,o.clientY),s.push(e),n=prompt("tpe "+e.outerHTML),console.log("sp0",n),n.length>0&&(":"==n[n.length-1]?M.F(n):e.innerHTML=n),o.preventDefault()}),!1):document.attachEvent("oncontextmenu",(function(){alert("You've tried to open context menu"),window.event.returnValue=!1}))}

var phosinit=function(){
var Phos=function(){
    // var S=[] // this is local, not accessible outside
    var $ = this // macro; 20250804 use var to localise, $ is used by jquery
    this.S=[]
    var S=this.S // still need var S for local code access
    S[0]={}
    var S0=S[0]
    var $CDW = {}
    S[0].$CDW = $CDW;
    S0.skip = 0;
    S0.CDW = [];
    S0.dlb = {};
    var FGLA = function($WA) {
    // arguments[0].split(' ').map(e=>{
    var c_cdw=false; var i=0, ic, W=$WA;
    $WA.map(e=>{ // WORD ARRAY
          console.log(i, e);
          var $v=e, $vk=i; $l=$v.length; 
          if (!c_cdw && $v==':') { // COLON DEFINITION WORD
             c_cdw=true;
             console.log('  CDW start ', W[i+1])
             ic = i+2; // start index of CDW
             CDN=W[i+1]
             $CDW[CDN]=[]
          }
          if (c_cdw) {
            if ($v==';') {
              console.log('  end CDW', $v);
              c_cdw=false;
            }
            console.log('  in  CDW', $v);
            if (i>=ic) $CDW[CDN].push($v)
          } 
          else {
          // : cdw ... ; definition and execution need different conditions
          
            if (a_sym.indexOf($v)>=0) { // special tokens + - * / : 
              f_sym[a_sym.indexOf($v)]()
            } 
            else if (in_array($v, array_keys($CDW))) {
                var $WA = $CDW[$v];
                if (end($WA) == ';')
                    array_pop($WA); // remove ; in definition before execution
                S0.CDW.push([
                    $v,
                    $vk,
                    {}
                ]);
                console.log(1176, 'before FGLA', JSON.stringify(S0.CDW));
                // await FGLA($WA);
                FGLA($WA);
                S0.CDW.pop();
                console.log(1183, 'after FGLA', JSON.stringify(S0.CDW));
                S0.cda = end(S0.CDW);
            } 
            else if ($v[$l - 1] == ':') { // colon suffix word after symbol else : will fail
              var $fn = $v.substr(0, $l-1);
              if (typeof eval("f_"+$fn)!=="undefined")           
                // console.log('is func', $v, typeof eval("f_"+$fn))
                eval("f_"+$fn+"()")
            } else s.push(e)
          }
          i++
        }
        )
    }
    this.F = function () {
        // console.log('  2021  1138 ', VM);
        var e;
        var $count = 0;
        console.log(arguments[0])
        var c_cdw=false; var i=0, ic;
        var W=arguments[0].split(' '); var CDN; // colon definition name
        FGLA(W);
    };
    function in_array(e, a) {
        return a.indexOf(e) != -1;
    }
    function array_keys(a) {
        return Object.keys(a);
    }
    function end(a) {
        return a[a.length - 1];
    }
    function array_pop(s) {
        return s.pop();
    }
}
var M=new Phos()
var f=M.F

// Global variables
window.f=M.F
window.M=M
window.S0 = M.S[0]

var f_add=function(){s.push(parseInt(s.pop())+parseInt(s.pop()))}
var f_sym=[ f_add ]
var a_sym = [ "+" ]
f('a b c : d e f ; g h i d') 
}

var f_id=function(){var a=s.pop();s.pop().setAttribute('id',a)}

function idlist(){
	var nodes= document.body.getElementsByTagName('*'),
	L= nodes.length, A= [], temp;
	while(L){
    	temp= nodes[--L].id || '';
    	// if(temp.indexOf(str)== 0) A.push(temp);
if(temp.length>0) A.push([temp,nodes[L]]);
	}
	return A;
}

// done 2024-09-22 21:30 has innerHTML
function f_idfill(){
var ja = s.pop()  
var nodes = s.pop()
  var ka = Object.keys(ja)
	// var nodes= document.body.getElementsByTagName('*'),
	var L= nodes.length, A= [], t=-1;
  console.log(L, nodes,ja,ka)
	while(L){
    	// temp= nodes[--L].id || '';
			L--
    	t = ka.indexOf(nodes[L][0])
      // console.log(nodes[L][0],t)
    	if (t>=0) {
				console.log(ka[t],ja[ka[t]])
				nodes[L][1].innerHTML=ja[ka[t]]
      }
			t=-1 
    	// if(temp.indexOf(str)== 0) A.push(temp);
      //if(temp.length>0) A.push([temp,nodes[L]]);
	}
	// return A;
}

var omnistart=function(){setctxmenu();phosinit();}

console.log("Welcome to Omni*Shell -- the Crypto-Metaprogramming Shell that light up (fiat lux) the (dark) 'Centralised' Internet.");

alert("Welcome to Omni*Shell -- the Crypto-Metaprogramming Shell that light up (fiat lux) the (dark) 'Centralised' Internet.\n\n  Press F12 for Developer Tools. Choose Console.\n\n  Enter 'omnihelp()' for further instructions.");

function parse_query_string(query) {
    var vars = query.split('&');
    var query_string = {};
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        var key = decodeURIComponent(pair[0]);
        var value = decodeURIComponent(pair[1]);
        if (typeof query_string[key] === 'undefined') {
            query_string[key] = decodeURIComponent(value);
        } else if (typeof query_string[key] === 'string') {
            var arr = [
                query_string[key],
                decodeURIComponent(value)
            ];
            query_string[key] = arr;
        } else {
            query_string[key].push(decodeURIComponent(value));
        }
    }
    return query_string;
}

// var query = window.location.search.substring(1);

console.log("parse_query_string", typeof parse_query_string)

if (typeof get_param!=="undefined") console.log("get_param", get_param)

var omnihelp=function(){
  console.log(arguments)
  if (arguments.length==0) console.log("omnihash() to activate hash based code verification functions.\nmkeval_l('function_name') to get hash code of function. Scroll up if function body is too long.\nomnilist shows list of Omni*Shell initialisation functions.");
  else if (arguments[0]=="all") f_all()
  else console.log(arguments[0].toString())
}

var omnihash;

var omnilist=[ include, omnihash, cyrb53, bnToB64, mkeval_l, gunzipinit, setctxmenu, phosinit, omnistart, omnihelp ]


function getAllFunctions(){ 
        var allfunctions=[];
          for ( var i in window) {
        if((typeof window[i]).toString()=="function"){
            allfunctions.push(window[i].name);
          }
       }
       return allfunctions
}

var f_all=function(){s.push(getAllFunctions())} 

function f_e(){ M.F(eval(s.pop())) }
function f_ev(){ s.push(eval(s.pop())) }
var f_a=function(){alert(s.pop())} 

// must have var for function to make it a proper variable
// else the scope is local execution
var f_hide=function(){document.getElementById(s.pop()).style.display='none'}

var f_show=function(){document.getElementById(s.pop()).style.display='block'}
// must declare function in omni.js? why?