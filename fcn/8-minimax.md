Let me actually look at this analytically — what's there, what's missing, and what's the *right* next word.

## What's in the dictionary right now

Grouped by category:

**Stack-shape primitives (very thin)**
- `dup` — only stack-shuffler in town
- `pick` — broken-ish: prints but pushes only with `*P[n]` hack
- `depth` — push current depth
- `peek`, `peekr`, `peek_any` — diagnostics, don't compose

**Arithmetic**
- `add`, `sub` — string-sniffed, only `int`/`double`

**Map ops (`M` is the bottom-of-stack env)**
- `g_M`, `g_M_gettype`, `g_M_debug`, `s_M`, `p_M`, `k_M`

**Vector ops**
- `pvs`, `inV`

**Type reflection**
- `gettype`, `gettype_any`, `tostr`, `type`, `cr`

**Other**
- `find`, `CAAF`, `push` (noop), `showstack`, `vcb`, `veq`, `vdc`

## What's visibly missing

Basic Forth stack-reshuffling is **almost entirely absent**. Every classic Forth starter set has `dup` *plus* `drop`, `swap`, `over`, `nip`, `tuck`, `rot`. Of those, **only `dup` is implemented**. There is literally no way to:
- discard a return value (no `drop`)
- reorder the top two (no `swap`)
- copy the second-from-top (no `over`)

That gap kills any serious composition. Without `drop` you can't write `: SQUARE-AND-LOG  dup ADD ." done" ;` style things — the `dup ADD` works but you have no way to keep going once you've consumed everything you need.

## My pick: **`drop`**

Why this one, not `swap` or `over`:

1. **Smallest possible unit of composition** — single pop, one return path.
2. **Most load-bearing** — every Forth-style computation eventually needs to dispose of intermediate results. `swap` becomes trivially composable on top of `dup`+`pick` once `drop` exists; `drop` itself is irreducible.
3. **Zero ambiguity about semantics** — `drop` means one thing in every Forth dialect ever.
4. **It's the only one of the basic four (`drop/swap/over/rot`) that doesn't need a second new word to be useful on its own.** `swap` without `over`/`rot` is awkward; `drop` is useful immediately.

Let me add it.

Now let me also slot a couple of composed colon words in to show what `drop` immediately unlocks:

Done. **`drop` is composed in.**

## Why `drop`

The header has `dup` but zero other stack-reshufflers — no `drop`, `swap`, `over`, `rot`. Of the four, `drop` is the only one that's immediately useful standalone (the others need companion primitives to even demonstrate their value). And `drop` is the single most-needed one: every Forth-style composition eventually wants to discard an unwanted return value, and right now you literally cannot.

## The edit

**`common/forth_vm.cpp`** — body, mirrors the `dup` style:

```cpp
bool PhosVM::drop(int ctx) { std::cout << "drop ...\n";
    if (S.empty()) {
        std::cerr << "  drop: stack underflow" << std::endl;
        return false;
    }
    std::any topElement = S.top();
    S.pop();
    return true;
}
```

**`common/forth_vm.h`** — declaration + one line in the `handlers` initializer:

```cpp
bool drop(int ctx); // ( x -- )  discard TOS
...
{"drop", &PhosVM::drop},
```

That's it. No `execute()` changes needed — `drop` is now addressable from any colon definition that names it, and a session can call `phos.execute("PHOS ... drop ...", 0)` directly.

## What `drop` unlocks right now

A few colon-def entries you can immediately populate into `m["C"]`:

```cpp
C["KILL"]            = { "drop" };                    // discard TOS
C["2DROP"]           = { "drop", "drop" };            // discard two
C["ADD-SILENTLY"]    = { "ADD", "drop" };             // run ADD, keep nothing
C["TRIPLE"]          = { "dup", "dup" };              // ( n -- n n n )
C["FAN3-MUL2"]       = { "dup", "ADD", "ADD", "ADD",
                          "dup", "ADD" };             // ( n -- n*5 n*6 )
```

## What's next (my recommendation)

1. **`swap`** — two-line primitive, the natural next step.
2. **`over`** — copy NOS on top of TOS.
3. **`: NAME ... ;` parser** in `execute()` — promote composition from the C++ side to the interactive side, so users don't have to edit `m["C"]` by hand each time.
4. Then a proper `if/then/else` and `begin/until` set, which need the colon-compiler first.

Want me to take **`swap`** next, or jump straight to building the `: NAME ... ;` parser so the colon-definitions above can be issued at runtime instead of baked in C++?

<deliver-assets>
<media src="commit-id-417346626568314" caption="common/forth_vm.cpp with PhosVM::drop added (line 299)" type="cpp" name="forth_vm.cpp" />
<media src="commit-id-417347265806486" caption="common/forth_vm.h with drop declared and registered in handlers (line 131)" type="h" name="forth_vm.h" />
<media src="commit-id-417347446169845" caption="drop — design rationale, what it unlocks, next steps" type="md" name="phosvm_drop_recipe.md" />
</deliver-assets>