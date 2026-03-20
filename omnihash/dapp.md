## Truly Decentralised Apps based on Omnihash

The centralized web has failed its users. For decades, individuals have poured time, creativity, and personal data into platforms controlled by a handful of trillion-dollar giants—Microsoft, Meta, Amazon, Google, and Apple (what some call the "MMAGA" cartel). These companies rake in billions (over $1.6 trillion in revenue in recent years alone) while the very people who generate the value—everyday users clicking "like," posting content, sharing ideas, and collaborating—receive nothing in return. We do not own the infrastructure. We do not operate it. And we certainly do not profit from it.

This is not decentralization. It is feudalism dressed in silicon.

Blockchain promised liberation through "decentralized apps" (dApps), but most implementations have fallen short. They remain heavily monopolized by miners (or validators in proof-of-stake systems), who capture disproportionate power and rewards. Public keys hashed into addresses were a brilliant innovation in Bitcoin, proving ownership without intermediaries. Yet the crypto world generalized this poorly, layering complexity, high fees, scalability nightmares, and new gatekeepers on top.

A better path exists—one that is simpler, more elegant, and truly user-sovereign. It begins with **Omnihash**: a compact, 53-bit cryptographic hash (encoded in base-64) that serves as a decentralized identifier for users, digital assets, documents, code, and even infrastructure. This is not another blockchain token or smart contract on a congested ledger. It is pure mathematics: feed any input string through a hash function, and the resulting Omnihash proves existence, integrity, and ownership intent. Anyone can verify it independently by re-hashing the same input—no miners, no consensus delays, no gas wars.

From this primitive comes **DJSON (Decentralised JSON)**, a straightforward extension of everyday JSON where at least one field is an Omnihash representing the owner. A "like" becomes a tiny DJSON object:

```json
["2025-10-24T14:25:28.207+0000", "like", "CXAGcRKevA==", "CXAGcRKevA==", "HymWBzfj9A==", {...}]
```

Timestamp, action type, user Omnihash, previous owner, document hash, metadata—all cryptographically bound. The same structure handles comments, shares, reposts, code ownership, loans, investments, and collaborative edits. No central server decides what counts as a valid interaction; the hash does.

Pair DJSON with **Phoscript** (a portable FORTH dialect runnable in browsers or any language) and you get **Omni*Web**: a full decentralized stack. Users run lightweight nodes (even just local mirrors or I2P-hosted pages), generate actions in the browser console, and propagate them peer-to-peer via BitTorrent-like mechanisms or hash-addressed caches. Jekyll-style static sites evolve into dynamic, monetizable social graphs. **Omni*DOC** turns AI conversations or documents into hash-addressed, clonable, commentable objects distributed across volunteer servers—no single point of moderation or censorship.

Monetization is built in, not bolted on. The **Omni*Contract** attaches royalty claims to code or assets via hashes. Read freely (as free software demands), but execute commercially only if you honor the hash-signed agreement. Violate it, and you face maximum legal penalties under applicable law. This enforces creator rights without relying on platform gatekeepers or expensive lawyers.

The overarching vision—**Demon’s Con** (Decentralised Monetised Collaboration)—reclaims the "demonic" stigma of cryptography as a badge of honor. It combines infrastructure (user-operated nodes), monetization (hash-based payments and contracts), and collaboration (social features rivaling Google Docs or TikTok) into a system owned and operated by free individuals and programmers. No shareholders extracting value. No venture capital distorting incentives. Just people earning from their contributions, whether through direct royalties, infrastructure rewards, or collaborative deals.

Critics will call this utopian or impractical. Yet the pieces already work in prototypes: browser-based Omni*Shell for hash generation and actions, I2P for anonymous hosting, Phoscript for metaprogramming across languages. It bypasses DNS, avoids blockchain bloat, and scales with user participation rather than miner hardware.

The alternative is grim: continue feeding the MMAGA machine, watch inequality widen, and pretend Web3's miner-dominated chains are the answer. Or build something new—something that finally gives power, ownership, and earnings back to the people who create the digital world.

The tools are here. The hashes are waiting. The decentralized web is not a dream; it is a choice.
