phosinit=function(){var Phos=function(){var $=this
this.S=[]
var S=this.S
S[0]={}
var S0=S[0]
var $CDW={}
S[0].$CDW=$CDW;S0.skip=0;S0.CDW=[];S0.dlb={};var FGLA=function($WA){var c_cdw=!1;var i=0,ic,W=$WA;$WA.map(e=>{console.log(i,e);var $v=e,$vk=i;$l=$v.length;if(!c_cdw&&$v==':'){c_cdw=!0;console.log('  CDW start ',W[i+1])
ic=i+2;CDN=W[i+1]
$CDW[CDN]=[]}
if(c_cdw){if($v==';'){console.log('  end CDW',$v);c_cdw=!1}
console.log('  in  CDW',$v);if(i>=ic)$CDW[CDN].push($v)}else{if(a_sym.indexOf($v)>=0){f_sym[a_sym.indexOf($v)]()}else if(in_array($v,array_keys($CDW))){var $WA=$CDW[$v];if(end($WA)==';')array_pop($WA);S0.CDW.push([$v,$vk,{}]);FGLA($WA);S0.CDW.pop();S0.cda=end(S0.CDW)}else if($v[$l-1]==':'){var $fn=$v.substr(0,$l-1);if(typeof eval("f_"+$fn)!=="undefined")
eval("f_"+$fn+"()")}else s.push(e)}
i++})}
this.F=function(){var e;var $count=0;console.log(arguments[0])
var c_cdw=!1;var i=0,ic;var W=arguments[0].split(' ');var CDN;FGLA(W)};function in_array(e,a){return a.indexOf(e)!=-1}
function array_keys(a){return Object.keys(a)}
function end(a){return a[a.length-1]}
function array_pop(s){return s.pop()}}
var M=new Phos()
var f=M.F
window.f=M.F
window.M=M
window.S0=M.S[0]
console.log("  omni.js define S0 2026-01 text only")
console.log("  omni.js define S0 2026-01",S0)
var f_add=function(){s.push(parseInt(s.pop())+parseInt(s.pop()))}
var f_sym=[f_add]
var a_sym=["+"]
f('a b c : d e f ; g h i d')}