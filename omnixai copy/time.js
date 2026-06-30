async function measureEncryption() {
  // 1. Generate Key Pair
  const keyPair = await window.crypto.subtle.generateKey(
    {
      name: "RSA-OAEP",
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"]
  );

  // 2. Prepare Data
  const encoder = new TextEncoder();
  const data = encoder.encode("Message to encrypt");

  // 3. Start Timer
  const startTime = performance.now();

  // 4. Encrypt
  const ciphertext = await window.crypto.subtle.encrypt(
    { name: "RSA-OAEP" },
    keyPair.publicKey,
    data
  );

  // 5. End Timer
  const endTime = performance.now();
  console.log(startTime, endTime,`Encryption took ${(endTime - startTime)*1000} microseconds`);
}

measureEncryption();
