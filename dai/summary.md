## Summary of *Bootstrapping Delta AGI using Delta AI*

The paper proposes a **bottom-up route toward AGI** that does not depend on frontier-scale language models. Its central idea is that relatively inexpensive or free AI systems can incrementally construct a general computational system by composing **FORTH stack-machine words**.

### 1. Core thesis: “Delta AI”

The paper defines **Delta artificial intelligence** as AI's ability to make **incremental improvements using FORTH stack-machine words or equivalent primitives**. The claim is that entry-level AI, including `llama.cpp`, may already be sufficient for this kind of incremental intelligence. 

So instead of asking:

> How do we build one enormous model that already knows everything?

the proposed approach is:

> How can relatively weak AI repeatedly create, test and compose small executable improvements until the resulting system becomes general?

---

### 2. FORTHification makes software enumerable

The key technical abstraction is **cardinality**.

A FORTH/stack-machine word's cardinality is defined as the **number of primitive words in its colon definition**. This turns source code translated through Phoscript into something that can be:

* enumerated
* searched
* modularised
* composed



The paper then defines:

**F(N) = the set of FSM words of cardinality N**

and proposes that as N increases, F(N) progressively encompasses increasingly complex programs:

> F(N) increases over time, with the limiting idea being all programs as N → ∞. 

This is the mathematical foundation of the proposed **FORTH-Hilbert Hotel** concept.

---

### 3. Inverse Turing Test

Instead of evaluating AI primarily by whether it can **talk like a human**, the paper proposes an **Inverse Turing Test (ITT)**:

> Can an AI that can converse also **write computer programs**?

For LLASMA, this becomes the ability to compose executable:

1. classic FORTH programs; or
2. FORTH stack-machine programs such as Phoscript/PhosVM. 

The important shift is from **linguistic imitation → executable composition**.

---

### 4. Spatial grounding: “Super Google Earth”

The paper argues that AGI cannot emerge merely from text-scraping chatbots and proposes a physical/spatial simulation as the grounding layer.

The proposed system is essentially a decentralized, open-source **Google Earth/Maps-like world built with Cesium.js**.

Users modify the simulated world → AI modifies code → code modifies the simulated world.

That produces a recursive:

**world → human → AI → code → world**

loop. 

This is intended to provide LLASMA with an environment in which generated programs have **verifiable consequences**, rather than merely producing plausible text.

---

### 5. LLASMA

**LLASMA = Large Language & Stack Machine Architecture.**

The paper positions LLASMA as the architecture that combines:

* language models / entry-level AI
* FORTH stack-machine programming
* Phoscript
* executable verification
* spatial simulation
* decentralized collaboration

The intended AGI test therefore becomes:

**Can the AI generate executable, verifiable logic in an increasingly general simulated world?**

---

### 6. Omnihash provides ownership

A second major pillar is **Omnihash**.

The paper extends the idea of Bitcoin's public-key hash as an identity/address into a generalized hash-based representation of **digital assets and their ownership**. 

The analogy is:

**FORTH words = labels for files/cabinets**
**Omnihash = room number**

This produces the proposed **FORTH-Hilbert Hotel**: an effectively unbounded address space in which programs/assets can be indexed, identified and associated with ownership. 

---

### 7. Economic objective: solve the “Dead Programmer Crisis”

The paper argues that free/open-source software generates enormous economic value but programmers are poorly compensated.

It calls this the **“Dead Programmers Crisis”**: if original programmers die without modifying their licenses to preserve some ownership/reward mechanism, their software can remain permanently free for large corporations. 

The proposed solution is:

**FORTHification + Omnihash**

which would separate:

* **disclosure** — keeping source code open
* **royalties** — tracking and rewarding contributors

The paper therefore envisages an **open-source tax/reward mechanism** for programmers and even families of deceased programmers. 

---

### 8. The proposed ecosystem

The paper eventually expands this into a fairly large decentralized ecosystem:

| Component                       | Proposed function                                         |
| ------------------------------- | --------------------------------------------------------- |
| **Phoscript**                   | FORTH-derived programming/composition layer               |
| **FORTHification**              | Convert arbitrary source code into FSM words              |
| **Omnihash**                    | Identity, ownership and asset addressing                  |
| **Omnimesg**                    | Omnihash-based messaging                                  |
| **Omniscientia**                | Sharing/merging AI conversations and knowledge            |
| **GRATIS**                      | Pool/trade CPU, GPU and AI resources                      |
| **I2P**                         | Decentralized networking/resource infrastructure          |
| **Cesium.js / simulated Earth** | Spatial grounding                                         |
| **LLASMA**                      | AI + stack-machine architecture                           |
| **F(N)**                        | Growing enumerable universe of executable programs        |
| **TMX**                         | Trispecies monetary transactions: fiat + crypto + bullion |
| **IGX**                         | In-game transactions                                      |
| **Omni*Web**                    | Overall ecosystem                                         |

The paper explicitly presents Omniscientia and GRATIS as complementary software/hardware infrastructure for collectively generating and testing LLASMA words. 

---

### 9. Definition of AGI

The paper deliberately treats AGI as a **definition that becomes progressively narrower and more measurable**.

Its proposed ingredients include:

* ability to generate new knowledge;
* mathematical constraints;
* simulation of the real world;
* potentially whole-brain/emulated intelligence;
* an unbounded but enumerable space of programs through F(N);
* sufficient hardware resources to execute them. 

The memorable formulation is:

> **Grounded but unbounded**

where integers/program structures are enumerable while the computational universe can continually expand. 

---

## The paper's overall architecture

I would reduce the entire 74-page presentation to this chain:

**Entry-level AI**
↓
**generate small FSM/FORTH programs**
↓
**FORTHification makes programs enumerable and composable**
↓
**Phoscript/PhosVM executes them**
↓
**Inverse Turing Test verifies programming ability**
↓
**Cesium spatial world provides grounding**
↓
**Omnihash provides identity + ownership**
↓
**Omniscientia shares knowledge/programs**
↓
**GRATIS pools distributed computation**
↓
**F(N) continually expands**
↓
**LLASMA emerges through incremental composition**
↓
**Delta AGI**

### In one sentence

**The paper's central proposition is that AGI might be bootstrapped not by making one frontier LLM vastly larger, but by using many relatively weak AIs to incrementally generate, verify, compose and own an ever-growing enumerable universe of executable FORTH-like programs, grounded in a shared spatial simulation.** 

The strongest conceptual novelty is therefore **not “FORTH” alone**, but the combination of **Delta AI + cardinality/F(N) + FORTHification + executable ITT + spatial grounding + Omnihash ownership** into one proposed AGI architecture.
