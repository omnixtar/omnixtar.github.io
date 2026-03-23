## Metaprogramming with Phoscript

Here are beginner-friendly, entry-level examples of **Phoscript** (a lightweight, Forth-inspired postfix metascript from the MI4 Metaprogramming in Forth project) applied to **Three.js** (for simple 3D scenes) and **backend JSON handling** (e.g., API responses or data transformation).

These are designed as your **first lesson in metaprogramming**: the core idea is that you extend the language itself by defining new "words" (like mini-functions) in a stack-based way. Instead of writing long, nested JavaScript, you compose short sequences that push/pop values on a stack. This makes code concise, reusable, and easy to extend—even for newcomers.

Phoscript runs embedded in JavaScript (via Omni*Shell or a Phoscript interpreter/bridge in JS). Syntax basics for beginners:
- Postfix: arguments first, then the operation (e.g., `3 4 +` → 7)
- Define words: `: my-word ... ;` (colon starts definition, semicolon ends)
- Stack operations: `dup` (duplicate top), `swap` (swap top two), `.` (print/drop top), etc.
- Words are reusable and can call each other.

### Lesson Goal
Learn metaprogramming by creating your own vocabulary for 3D and JSON tasks—start simple, then build up.

### 1. Phoscript over Three.js – Entry-Level Example: "Hello Cube" Scene Builder

**Goal**: Create a basic Three.js scene with a rotating colored cube, but using Phoscript words instead of verbose JS setup.

**Phoscript Lesson Code** (imagine this in Omni*Shell or a JS-hosted Phoscript REPL):

```
\ 1. Basic setup words (define once, reuse forever)
: init-three
  scene new
  camera PerspectiveCamera 75 window.innerWidth window.innerHeight 0.1 1000
  renderer WebGLRenderer {antialias: true}
  renderer.setSize window.innerWidth window.innerHeight
  document.body appendChild renderer.domElement
;

: add-cube ( color -- )
  BoxGeometry 1 1 1 new
  MeshBasicMaterial {color: swap} new   \ swap pulls color from stack
  Mesh swap new
  scene add
;

: rotate-cube ( speed -- )
  dup cube.rotation.y +!   \ assume 'cube' is last added mesh on stack or global
;

: animate-loop
  requestAnimationFrame animate-loop
  0.01 rotate-cube
  renderer render scene camera
;

\ Now use your new words – this is the "program"
init-three
0xff0000 add-cube   \ red cube
0.02 rotate-cube    \ set rotation speed
animate-loop
```

**What you learned (metaprogramming insight)**:
- You defined your own "words" (`init-three`, `add-cube`) like adding verbs to the language.
- Stack makes it flow naturally: color → geometry → material → mesh → add to scene.
- Reuse: Tomorrow you can just `: add-sphere SphereGeometry 1 new ... ;` and call it the same way—no repeating Three.js boilerplate.

For beginners: Run this in a JS file with Three.js imported, and a Phoscript bridge (from MI4 repos or simple evaluator). The result: a red rotating cube with far less typing than standard Three.js tutorials.

### 2. Phoscript over Backend JSON – Entry-Level Example: "Signed User List API Response"

**Goal**: Take database-like data, filter active users, add ownership hash (Omnihash style), and output clean JSON—all in Phoscript words.

**Phoscript Lesson Code**:

```
\ Assume we have a stack word 'users' that pushes sample array of objects
: users
  [
    { "id": 1  "name": "Alice"  "active": true   "email": "alice@example.com" }
    { "id": 2  "name": "Bob"    "active": false  "email": "bob@example.com"   }
    { "id": 3  "name": "Charlie" "active": true  "email": "charlie@example.com" }
  ]
;

: active? ( user -- flag ) "active" @ ;   \ get "active" property

: filter-active ( users -- active-users )
  [] swap                       \ start empty result array
  users foreach                 \ loop over each user
    dup active? if
      swap over array-push      \ add to result if active
    else drop then
  ;

: add-hash-signature ( obj -- obj-signed )
  dup Omnihash compute          \ pretend Omnihash function computes base64 hash
  "ownerHash" rot object-set    \ add as new property
;

: to-json-response
  filter-active
  map add-hash-signature        \ add hash to each
  JSON.stringify
;

\ Run it – your new "API endpoint" in one line
users to-json-response .      \ prints JSON string ready for res.send()
```

**Sample Output (simplified)**:
```json
[
  {"id":1,"name":"Alice","active":true,"email":"alice@example.com","ownerHash":"CXAGcRKevA=="},
  {"id":3,"name":"Charlie","active":true,"email":"charlie@example.com","ownerHash":"HymWBzfj9A=="}
]
```

**What you learned (metaprogramming insight)**:
- You extended the language with domain words (`active?`, `filter-active`, `add-hash-signature`).
- Stack + higher-order words (foreach, map) handle arrays/JSON naturally—no messy loops.
- Reuse: Next time, add `: add-timestamp now "timestamp" rot object-set ;` and chain it before `to-json-response`.
- Ties into DJSON/Omnihash: hashes prove ownership, royalties possible on execution.

### Your First Metaprogramming Exercise
1. Copy the words above.
2. Add your own: `: add-blue-cube 0x0000ff add-cube ;` or `: only-admins "role" @ "admin" = ;` for JSON filter.
3. Run/compose them in different orders—see how the language grows with you.

This is the power of metaprogramming in Phoscript: you don't fight the host language (JS)—you teach it your vocabulary. Start small, define words for what you repeat, and soon complex 3D + JSON tasks feel like simple sentences.

Want to expand this lesson (e.g., animation loop with JSON-driven colors, or full Omni*Shell setup)? Or see variations for your next step? 😊