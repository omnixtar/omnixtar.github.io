---
title: DJSON Decentralised JSON
---

{% include logo.html %}

### Omni*Contract: Ownership & Rights of Use of Digital Asset (Source Code)

 <!-- <button type="button" onclick="window.open('https://yo6sgmfq7pfvvp2e4kcuhjtfg7wfltt63igwcukhbmuqm6lu3a3a.b32.i2p/oxm/oxm.php?nn=adam', '_blank').focus();">Like</button> -->

<button type="button" onclick="f(C_LIKE);">Like</button> 

- On the **Separation of Disclosure and Royalties** of the Source Code (July 21, 2024)
	
1. You, a human agent of a company or government agency, may read the source code without 
	making payments to the author or authors, but if you  execute this program on behalf of 
	your company or agency for commercial purposes, we reserve the rights to claim royalties 
	from you or your company or agency. 

2. Your copy of source code shall be attached with at least one Omni* Hash Contract bearing the Omnihash
	of a Omni* Agent and your own Omnihash, to authorise you the permissions to use or modify said source code, 
	otherwise you shall pay maximum penalties allowed by a legal court of your jurisdiction,
	for the damages you have incurred for deploying the source code pertaining to clause (1).

---

### Omnihash & DJSON Decentralised JSON

Omnihash is a base64 encoded string of a hash of a user's public key (HPBK) for representing the user's identity (base form), as well as the base64 encoded string of a hash of a DJSON, comprising at least one user's HPBK (HPBK-A for user A), representing the ownership or association of said DJSON, representing a piece of digital asset, to said user (composite form).

DJSON Decentralised JSON is a JSON object or its encoded string where at least one of the fields is an Omnihash, representing the owner of this JSON object.


- ```["2025-10-24T14:25:28.207+0000","like","CXAGcRKevA==","CXAGcRKevA==","HymWBzfj9A==",{"repo":"https://github.com/omnixtar/omnixtar.github.io/","contract":"https://omnixtar.github.io/contract/","ghh":"https://github.com/omnixtar/omnixtar.github.io/commit/19bb258190d57d6246840bf8ccc8957ae880e341","datetime":"2025-10-24T04:41:21.000Z"}]```

- Omnihash: DgV6_qnujw==

Try this yourself:

1. Press F12 to bring up browser console.
2. Run the following code:
```
omnistart()
j0=["2025-10-24T14:25:28.207+0000","like","CXAGcRKevA==","CXAGcRKevA==","HymWBzfj9A==",{"repo":"https://github.com/omnixtar/omnixtar.github.io/","contract":"https://omnixtar.github.io/contract/","ghh":"https://github.com/omnixtar/omnixtar.github.io/commit/19bb258190d57d6246840bf8ccc8957ae880e341","datetime":"2025-10-24T04:41:21.000Z"}]
s.push(JSON.stringify(j0))
f('h53: b64: path:')
s[s.length-1] 
```

---
1. The existence of (Omni)hash implies the input string concerned has been fed into a hash function to obtain the (Omni)hash, presumably by the first party (or User A). 

2. A second party (anyone other than the first party, by defauly YOU, User B) may feed the same input to the same hash function to obtain the same (Omni)hash, to verify the hash is correct, and therefore the first party has indeed performed step (1).

3. Step (2) implies *the input string is* **as intended** by the first party.

4. Step (3) is the default inference, as agreed by all parties concerned.

*We omit "Omni" for convenience where it is implied.*

*Key-value format of DJSON can be included as a string in Array-String of DJSON.*

- *Refer to "contract" for terms and conditions for "repo".*

In the DJSON above, the fields are:

- timestamp, action, current_user_ID, prev_msg_owner, doc_hash, messages

doc_hash means hash of URL of document.

DJSON or Decesntralised JSON is a critical breakthrough by Omni*Web where base 64 hash codes representing any kind of digital assets and entities, from user identifiers to social media actions such as like, comment and share, are embedded in the unassuming ubiquitous JSON strings.

Underlying decentralised JSON is an extension of the Bitcoin address, which is derived from the hash of a public key, to be used as a user identifier. The generalisation of the hash of public key as user identifier is a breakthrough in decentralised computing, as previous frameworks based on blockchains or cryptocurrencies are heavily monopolised by miners.

What makes DJSON so special and powerful is what we call "type preservation property" of hash numbers and integers, which is derived from Ring theory properties of integers, where the operations of additon and multiplication on integers invariably result in integers as output. 

The previous paragraph may sound like your typical high school mathematics nightmare, but it is the biggest secret underlying Bitcoin and other cryptocurrencies as well as novel decentralised social media platforms as we shall see in the following example:

- how to add a like function to **this** GitHub markdown article

We will reveal the answer first and explain later as we assume there are readers who are impatient: 

- ```["2025-02-11T14:25:28.207+0000","like","CXAGcRKevA==","CXAGcRKevA==","HymWBzfj9A==","HymWBzfj9A== s: x:"]```

In the DJSON above, the fields are:

- timestamp, action, current_user_ID, prev_msg_owner, doc_hash, messages

doc_hash means hash of URL of document.

The following are the steps for generating the "like" DJSON of this article, accompanied by a video:

1. Save a copy of this web page as a local file on Omni*Web server.
2. Generate doc_hash for this document.
3. Make a subdirectory for this document with doc_hash.
4. Copy neccessary files and soft links.
5. Open the local copy on [Omni*Web server](https://yo6sgmfq7pfvvp2e4kcuhjtfg7wfltt63igwcukhbmuqm6lu3a3a.b32.i2p/h/E5bnwoBdvg==/?nn=z) using I2P (Invisible Internet Project) and doc_hash.
6. Start Omni*Shell from browser console.
7. Refresh authentication token with user's public key.
8. Send "like" DJSON from browser console using Omni*Shell Phoscript commands.

If the steps above look daunting to you then you will be pleased to know that those are exactly what happen millions of times per seconds around the world when "like" buttons are clicked on social media platforms -- except that YOU, the users and free software programmers, ***do not OWN and OPERATE any part of that, and therefore CANNOT make any money out of it***.

... which brings us to Omni\*Web aim -- to create a truly decentralised web ecosystem, **OWNED and OPERATED by free individual users and free software programmers, capable of providing free alternatives to ALL existing services** provided by the biggest trillion dollar corporations such as MMAGA -- a funny abbreviation for Microsoft, Meta, Amazon, Google and Apple.

