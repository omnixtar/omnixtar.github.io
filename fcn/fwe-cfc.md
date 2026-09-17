# FORTH Word Execution vs Conventional Function Calls

Most modern programming languages treat the **function call** as the fundamental unit of software composition:

```text
c = f(a, b)
```

The caller supplies arguments, the function executes, and a defined return value is produced. This model is powerful, but it also tightly couples **parameter passing, execution, return values, control flow and error handling**.

FORTH takes a different approach. Its fundamental unit is the **word** operating on a shared data stack:

```text
a b f
```

The word consumes whatever it needs from the stack and leaves its results there:

```text
... a b f ...  →  ... c ...
```

This seemingly small difference has much larger consequences when a FORTH-like language is used as a universal composition layer.

## 1. A Function Call Has a Fixed Interface

Consider a conventional function:

```cpp
c = f(a, b);
```

Its interface normally specifies:

* two input parameters;
* their types;
* one or more return values;
* how the caller receives those values;
* how errors are reported;
* what happens when the call succeeds or fails.

The function and its caller therefore have to agree on a relatively rigid contract.

A FORTH word can express the same computation:

```text
a b f
```

but the result is not necessarily a single conventional return value.

For example:

```text
a b f
        → c status metadata
```

The word can leave several objects on the stack.

The important conceptual change is that **execution does not have to terminate at a single return value**.

## 2. The Stack Separates Execution from Routing

In conventional programming, a function call often combines several jobs:

```text
caller
   ↓
parameter passing
   ↓
function
   ↓
return value
   ↓
error handling
   ↓
next function
```

A stack machine can separate these operations.

For example:

```text
a b
f
→ result status metadata
```

Another word can inspect the status:

```text
... result status metadata check ...
```

Another can transform the result:

```text
... result transform ...
```

Another can store it:

```text
... result save ...
```

Another can retry the operation.

Thus the programmer does not necessarily need to build one enormous function containing every possible condition.

The **stack becomes an intermediate computational space** through which independent words communicate.

## 3. A Word Is More Than a Function

A conventional function is usually understood as something like:

$$
f:A\times B\rightarrow C
$$

A FORTH word is more naturally represented as a stack transformation:

$$
w:S\rightarrow S
$$

where \(S\) is the current stack state.

For example:

$$
[a,b,\ldots]\xrightarrow{f}[c,\ldots]
$$

But there is nothing preventing:

$$
[a,b,\ldots]\xrightarrow{f}[c,s,m,\ldots]
$$

where \(c\) is a result, \(s\) is status, and \(m\) is metadata.

This makes the word a **composable state transformation**, rather than merely a function with a predetermined return signature.

## 4. Error Handling Can Become Another Word

This is one of the most interesting consequences.

In conventional code, programmers frequently embed error handling into the function composition itself:

```cpp
auto result = f(a, b);

if (!result.ok()) {
    ...
}
```

The error policy becomes intertwined with the application.

With a stack-oriented architecture, the execution word can instead expose the information:

```text
a b f
→ result status
```

and another word can decide what to do:

```text
check
retry
log
ignore
rollback
```

The same executable capability can therefore potentially be reused with different policies.

The distinction is:

> **The function performs the operation; another word can decide what the result means.**

This separation becomes especially important when thousands or millions of existing functions are exposed as a common vocabulary.

## 5. Parameter Passing Can Also Be Decoupled

Conventional APIs generally define parameter lists:

```text
f(a, b, c)
```

The caller must construct the call according to that interface.

A stack system instead allows data to accumulate before execution:

```text
a
b
c
...
f
```

Words can therefore prepare, transform, duplicate, remove, reorder or validate stack objects independently.

For example:

```text
a b
dup
swap
validate
f
```

The composition mechanism becomes independent of the implementation of `f`.

This is particularly attractive for dynamically generated programs because an AI system can manipulate the stack representation without necessarily generating a new host-language function every time.

## 6. Existing Object Code Becomes a Vocabulary

This is where the idea becomes much larger than traditional FORTH.

Traditional FORTH implementations historically concentrated heavily on making words close to the machine:

```text
FORTH word
   ↓
machine operation
   ↓
CPU
```

Phoscript can reverse the emphasis:

```text
existing software capability
   ↓
compiled object code
   ↓
Phoscript word
   ↓
stack composition
```

The objective is not to rewrite everything in FORTH.

Instead, existing C/C++/Qt/JavaScript/etc. capabilities can potentially become **words in a larger computational vocabulary**.

The compiler has already translated the implementation into executable code.

The new layer provides a mechanism for composing those capabilities.

This leads to a useful principle:

> **Compile once; compose many times.**

## 7. From Function Libraries to a Software Vocabulary

Suppose a system exposes:

```text
open-file
read-file
parse-json
query-database
create-window
send-message
compress
encrypt
render
search
```

as executable words.

A new application could then be assembled by composing these existing capabilities:

```text
open-file
read-file
parse-json
query-database
filter
render
```

The new program may contain very little newly implemented low-level code.

Its novelty lies primarily in **composition**.

This changes the unit of reuse.

Instead of asking:

> “What source code should I write?”

the system can increasingly ask:

> “Which existing executable words can be composed to produce the required behaviour?”

## 8. The Combinatorial Advantage

If a vocabulary contains \(N\) words, the number of possible sequences of length \(k\) is:

$$
N^k
$$

and the unrestricted finite composition space is:

$$
W^*=\bigcup_{k=0}^{\infty}W^k
$$

This is larger than the simple power set of the vocabulary because programs have:

* order;
* repetition;
* branching;
* loops;
* stack manipulation;
* conditional execution;
* recursion.

Consequently, a relatively modest vocabulary can generate an enormous program space.

The important point is that this space does **not** require an equivalent amount of newly written source code.

A large existing software ecosystem can therefore become a reservoir of executable capabilities.

## 9. Why This Matters for AI

This changes the potential role of an AI programmer.

Today an LLM commonly does this:

```text
Question
   ↓
generate source code
   ↓
compile
   ↓
run
   ↓
debug
```

A stack-oriented compositional system can move toward:

```text
Question
   ↓
discover words
   ↓
compose
   ↓
execute
   ↓
measure
   ↓
modify composition
```

This fits naturally with the LLASMA **Compose → Execute → Measure → Question (CEMQ)** loop.

The AI does not necessarily need to invent every implementation.

It can search a vocabulary of existing capabilities and construct a new executable composition.

This is particularly powerful when the words are accompanied by tests, documentation, provenance and execution measurements.

## 10. FORTHification Becomes More Interesting

This also gives a more scalable interpretation of **forthification (FCN)**.

Forthification does not necessarily have to mean translating every line of C++, JavaScript or PHP into literal FORTH source.

A more practical objective is:

$$
\text{Existing capability}
\rightarrow
\text{stable executable interface}
\rightarrow
\text{FORTH/Phoscript word}
$$

The implementation can remain in its original language.

The important transformation is that its **capability becomes composable by the stack machine**.

Thus:

```text
C++ source
    ↓
compiler
    ↓
object code
    ↓
Phoscript interface
    ↓
FORTH word
```

This could make the enormous historical body of software more important than the amount of new code generated by an AI.

## 11. From APIs to a Compositional Machine Language

Conventional APIs are already abstractions over functions.

Phoscript can be viewed as another layer above them:

```text
Machine instructions
        ↓
Assembly
        ↓
High-level languages
        ↓
Libraries
        ↓
APIs
        ↓
Phoscript words
        ↓
AI-driven composition
```

The distinction is that an API primarily tells a programmer **how to call a capability**.

A stack-oriented vocabulary can provide a uniform computational environment in which capabilities from otherwise unrelated libraries can be **composed, inspected, measured and rearranged**.

That is potentially a much more ambitious abstraction.

## 12. The Fundamental Difference

The difference can therefore be summarized as follows:

| Conventional function call                               | FORTH/Phoscript word                                      |
| -------------------------------------------------------- | --------------------------------------------------------- |
| Arguments belong to a call                               | Arguments exist on the stack                              |
| Return values are defined by the function interface      | Results can remain on the stack                           |
| Error handling often belongs to caller/function contract | Error information can be another stack object             |
| Parameter routing is strongly interface-dependent        | Stack words can manipulate routing independently          |
| Functions are usually composed through source code       | Words can be composed dynamically                         |
| Implementation and interface are often closely coupled   | Capability can be exposed independently of implementation |
| New behaviour often requires new source code             | New behaviour can emerge from composition                 |
| Compiler recompilation is common                         | Existing object code can potentially be reused directly   |

The distinction is not that FORTH words magically make all software problems disappear. ABI compatibility, object lifetime, type safety, security, side effects, versioning and semantic verification remain serious engineering problems.

The important architectural difference is elsewhere.

### A conventional function is primarily an implementation unit.

### A FORTH word can become a compositional unit.

That distinction becomes profound when the vocabulary contains not hundreds but millions of verified capabilities.

## 13. The Larger Vision

The historical development of programming can be viewed as a sequence of increasingly powerful abstractions:

$$
\text{instructions}
\rightarrow
\text{functions}
\rightarrow
\text{libraries}
\rightarrow
\text{frameworks}
\rightarrow
\text{composable capabilities}
$$

Phoscript's ambition is to make the last step explicit.

The objective is not to replace C++, Qt, JavaScript, Python or other languages.

It is to make their accumulated executable knowledge available through a common compositional substrate.

In that sense, the fundamental resource is no longer merely **source code**.

It is the accumulated universe of **verified executable words**.

And the central question for an AI programmer changes from:

> “What program should I write?”

to:

> **“What existing words can I compose, execute, measure and question to obtain the program I need?”**

That is the conceptual difference between **function calling** and **word execution**.

It is also the point at which FORTH stops being merely an old programming language and becomes a candidate architecture for a universal **software composition layer**.
