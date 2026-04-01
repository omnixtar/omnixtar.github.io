// https://stackoverflow.com/questions/77944100/how-to-sign-data-in-javascript-and-verify-the-signature-in-php

// Source - https://stackoverflow.com/a/77948153
// Posted by Topaco, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-01, License - CC BY-SA 4.0

// (async () => {
async function sign(pem, data) {
    const pemHeader = '-----BEGIN PRIVATE KEY-----';
    const pemFooter = '-----END PRIVATE KEY-----';
    const pemContents = pem.substring(pemHeader.length, pem.length - pemFooter.length);

    // var pkcs8DerB64 = "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDw4Ees4C+vsTUQodgWKIsj3Ni67RG3ny9xY1KjCaatu2o/ev5hS4yrxxWLZAFU9mt/rfNmzzby3mqlWPWm8Df91Mue6wNTsN2yMnHw+XvcvovCngSTH4H2zY+uAhEiG+u+vzGqbzxm0JB3ybX5kYEMK2iKoALq1ASJ781gyy7AsCf/Ck+OvIE4in1kNm4a5NUgbyuflWerMIB7FUQ7h/+XlLn3F2bvC1SWWxKsmQ/dF5fYpZaAV2KvVw2LMnkWdU536an9vxj5LZIJyzfNQv/foNGcUh8iT1tLe8jV4eYrAcqiLnG+iZFFc3X5F33WUILmRvCg11bec6ic1NwuY8eDAgMBAAECggEAQq7kSNCbgvj85sjXSHMa6ee2vDDrKblQ6gQEGYyPbyMmK8LB72951wg7R6Z80+eQJP2kF38gCCZYwcOZ5gg0h/nEEQ+gkSeyiCV886gtiRPbHxqdy5j6YrfPoe2Cjr3KCrllZ3h58UCl7fOShC+q2RKfU1ku1ZGyW/leEwDMxZy1PISHFHtmd43LdrkWgyNk4TIpNRzizx+gxNeyQUEZDfkUu4mFP/weWM26lLyaE+RkPqvFnLjXckvgno1bY8Hq2yywVkyvfBo0tQvVBtNP5WTEyOvNGylc46pnVBODrSUn5q4ZNdi56fd7WFPBFySAVQiA0uLgaWYOuBUGMyc5CQKBgQD+wcyYL2IgA5O2c6Jp9cJV9xQVvWEQ/sVUDJgRVhOxAqw9r2LmUe7tRnWYEI4Sz9g/ejFq8fkL+h2lQbGB+ZKlu5EVHrmfuYf3zo80QKMWC1XKbYnw0HKkMlOqxiMYyu6PqFX59icmcZ58k1m9h2br5f7GGGWAFY8yFgRUIUR6FwKBgQDyDSSbH7WoqUUhYNvY9wKUUYM8uZSAC1TPfuR/ZvAec3cZxMJyOnY88MPOh63vUMzTUt6AAyps2EFPa0UGuysevMaXSL+MAQQzDfnEC2KfeRqkVOKYPrjjjxIl5mQJCacpB7rdzLszmtJJ9G99lTqeGuVa3mhlJupqckYbbdO9dQKBgQD9zf4TMEHGO0oSX6nTfvCZzIrKDd6CnA/j6JgnzWXY2BzZZ75UUBSFd8j4MqYYv9FljEtnjKLd99VJKuW54/bh/rhQHkg4hRKdI8EwAaV49NoHzpG6xTExvKH2ZWfZ73M01DSzzzS57EBFRFgHpro3EvB8UxnsPY5oC99MIcijCQKBgBn16OguVXh6dyymS84QaBlqSK4ZpWC6VmVO0ckMTFKnxa1g2g4QUSAmHoonKTOSsfU0XSLTtBgqdY7EDYo0RuKsEoylQ84LSd0D8bbiFbjO71mStR7pE0Fs1eB0vmPtwhz3dEZXr/hP8Z/29II+oCPW9KRzWDUJIHk8OmK0u9IFAoGAEOWhm/zaXMNJ+oBcvBbCKTZ0XInzvV4SqhC6Bj9aC8wqCe5QKyKl9HglG9J+o3D+hIEcMXGvIv1KB3xDStCQQKcDOrD/8tGZtstSONaNzeGg0hUY9SKd7R2wMPEWufzccFE+zVG5hHUg+eQrnzXdXkG8hW1QxQxgoDkC3DNVsnE=";
    var pkcs8DerB64 = pemContents;
    var pkcs8Der = Uint8Array.from(window.atob(pkcs8DerB64), c => c.charCodeAt(0));

    var data = "The quick brown fox jumps over the lazy dog";
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