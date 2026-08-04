```js
s.push(S0.K.pair.publicKey)
25
s.push(ab2str(D3))
26
f("aecr:")
PHOS librsa.js line 11 > importedModule:75:13
  aecr: 
Uint8Array(8) [ 53, 101, 99, 97, 51, 97, 54, 97 ]
librsa.js line 11 > importedModule:79:13
undefined
  aecr: 1785809348741 25 
ArrayBuffer { byteLength: 512 }
librsa.js line 11 > importedModule:82:13
s[24]
ArrayBuffer { byteLength: 512 }

s.push(S0.K.pair.privateKey)
26
f("swap: dcr:")
libphosm1 r 
Array [ "dcr:", "swap:" ]
libphosm.js line 11 > srcScript:1171:21
undefined
s[24]
ArrayBuffer { byteLength: 8 }

ab2str(s[24])
"5eca3a6a" 
```

```js
s.push(S0.K.pair.publicKey)
s.push(ab2str(D3))
f("aecr:")

s.push(S0.K.pair.privateKey)
f("swap: dcr:")
ab2str(s[24])

"5eca3a6a" 
```

```js
cyrb53=function(str, seed = 0){
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

function f_hbp(){var data=bnToB64(cyrb53(s.pop()));  s.push(data.split("/").join("_").split("+").join("-"))}

s.push(S0.K.pair.publicKey); s.push(ab2str(D3)); f("aecr:")
btoa(ab2str(s[25]))

s.push(btoa(ab2str(s[25])))
"E/BTPf61YH+UXaWcr9UgZ/zluZWkHS6vVH9vC22jZwnn13uOJW9AdLgMGshoIgp2x1+7SbSNldt3MECyUVicErNNd1s4DqrmXKlStqF2RUGB7QnnA0RO1flbvwj1VaFn4RJIBl5473o2fUAGgW4pA/humGpppLEslFstPug8Fz9AN+vdJkZ/ks/bcba+GaGHrEVmeoi0Dj/7VBIpNO6BU/kAc1EeB+gRzOhRAzPVi+LX9WzAYYWhdsa7T9X9B3TiLC5y7yWXX/kpxehz3ynNtUOgC5LOg9yp/C9I7qrssfM0Mmzd+GkpCHJVY2JvBEbYkjfyXYyZ/9Jo217iftCqGo1gnJaSD0ypd+j//XCDEtDIPBXWkNsY2d/39giwO2+dSYfJiGzdYRXhFCNx3wQx94ENL+urtZIej9m7BxRvrg9qHhJlQTtiOIryj5yjebqz6i+omCojmrbrgGNOizpl4OUq42XL7wqbeGFydvvyDvPAJPbye1sO/k5uEP24m4+6ihWFVZzkT2f4nxvr6pBVcyhbiGHXc9sHpEcKlQCdNFhTDboCgS8b9S/ENolWgitA9zalD93ZMORtKRrCNqZhZyWpHS5zDqt+8ty6c8rz1E7uv09XPfJjrqeEqCjp69+bH1vRdnyb3XKJ/JJU5483ysblDi2IsYT6h2jTXx4ooi0="

f("hbp:")
"Gc8ln5yOxQ==" 

```