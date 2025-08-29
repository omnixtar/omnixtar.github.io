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
            s.push(btoa(ss.substr(0,ss.indexOf(" hkvm: "))))
            // console.log(sb.indexOf("//m"),s1.substr(ms+4,mz-ms-5)+"END")
            // s.push("no-mm")
            s.push("mk_hash UDIR rbv: swap: 2 msss: w:")
            f_hkvm();
        }
    }
}
