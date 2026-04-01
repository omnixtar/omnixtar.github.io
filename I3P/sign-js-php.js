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