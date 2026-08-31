# Sea Power Mesh

Exactly. A **phased build** is much more plausible financially than raising S$30–40 billion upfront. The key is to make each completed module generate enough cash flow to finance the next module.

I'll use the previous central assumptions, but make the financing logic stricter.

### Core assumptions

For every **100,000 m² of ocean footprint**:

* 3 floors above + 3 below → **600,000 m² GFA**
* Wave generation: ~0.6 MW average
* Desalination: ~2,200 m³/day if half the power is allocated to water
* ~300 RTX-5090-class complete GPU systems
* Construction cost: initially **~S$3.7B per 0.1 km²**
* Mature stabilized property NOI: approximately **S$160M/year**

The first modules are more expensive because you don't yet have economies of scale.

---

# A self-financing 1 km² build

I'd divide the project into **ten 100,000-m² hexagonal districts**.

```text
          ┌───────┐
       ┌──┘       └──┐
       │     1       │
    ┌──┘             └──┐
    │  2     3     4    │
    └──┐             ┌──┘
       │  5     6     │
    ┌──┘             └──┐
    │     7     8       │
    └──┐             ┌──┘
       │    9   10    │
       └──────────────┘
```

But I wouldn't actually build them as isolated islands. Each new module would attach to the existing lattice.

## Phase 0 — Prototype

**Footprint: 10,000 m²**

Cost: ~S$100M

Build:

* ~10,000 m² ocean mesh
* small desalination plant
* perhaps 30–50 GPU systems
* one experimental residential/commercial block

The purpose isn't profit.

It's proving:

* wave survivability
* joint fatigue
* plastic lifetime
* mooring
* generator efficiency
* construction method
* building attachment
* desalination
* storm evacuation

---

# Phase 1 — First commercial district

**Footprint: 50,000 m²**

600? Wait—the six-floor multiplier means:

$$
50,000\times6=300,000m²
$$

of GFA.

Cost:

**~S$1.8B**

Target:

* ~300,000 m² GFA
* ~0.3 MW average wave power
* ~1,100 m³/day desalination
* ~250 GPUs
* perhaps **5,000–6,000 residents**

If average stabilized NOI is ~S$800/m²/year:

$$
300,000\times800
=\boxed{S\$240M/year}
$$

But that is too optimistic for a new offshore district, so let's use **S$500/m²/year**:

$$
=\boxed{S\$150M/year}
$$

That gives an eventual ~8% operating return.

---

# Phase 2

Use Phase 1 income to fund Phase 2.

Suppose Phase 1 generates:

**S$150M/year NOI**

Retain 100% of it for construction.

A new 50,000 m² module costs ~S$1.5B after learning/economies of scale.

So:

$$
1.5B/150M=10\ years
$$

That's still slow.

But we can improve the financing model.

Instead of waiting for accumulated cash, **Phase 1's completed property becomes collateral for debt**.

Suppose the project can borrow at 50% LTV:

$$
S\$1.5B\times50\%=S\$750M
$$

Then retained income provides the other S$750M over five years.

So the next phase can be built in roughly **5 years rather than 10**.

---

# Phase 3 onward

Now you have two income-producing districts.

If each produces ~S$150M:

$$
2\times150=S\$300M/year
$$

This accelerates construction.

Three districts:

$$
450M/year
$$

Four:

$$
600M/year
$$

etc.

The project effectively becomes a **flywheel**:

```text
       BUILD MODULE
            ↓
       RENT / NOI
            ↓
     PROPERTY VALUE
            ↓
       BORROW MONEY
            ↓
       BUILD MODULE
            ↓
       RENT / NOI
            ↓
       BUILD MORE
            ↺
```

---

# A possible 20-year trajectory

Using deliberately conservative assumptions:

| Year | Ocean footprint |          GFA | Cumulative CAPEX |  Annual NOI |
| ---: | --------------: | -----------: | ---------------: | ----------: |
|    0 |        0.01 km² |     0.06m m² |           S$0.1B |           — |
|    3 |        0.05 km² |     0.30m m² |           S$1.8B |     S$0.15B |
|    7 |        0.10 km² |     0.60m m² |           S$3.3B |     S$0.30B |
|   10 |        0.20 km² |     1.20m m² |           S$6.0B |     S$0.60B |
|   13 |        0.35 km² |     2.10m m² |            S$10B |     S$1.05B |
|   16 |        0.55 km² |     3.30m m² |            S$15B |     S$1.65B |
|   20 |    **1.00 km²** | **6.00m m²** |       **~S$25B** | **~S$3.0B** |

This assumes the construction cost falls substantially through standardization and factory production.

The crucial feature is that **you don't need S$25B on day one**.

You need perhaps:

> **S$100–300M to prove the technology and create the first bankable asset.**

After that, the completed real estate becomes collateral for the next stage.

---

# Even better: don't initially build six floors

I think there's an important optimization missing from the previous model.

The first modules could be:

### Stage A

**Mesh + power + desalination**

↓

### Stage B

**One level above water**

↓

### Stage C

**Two levels**

↓

### Stage D

**Three levels**

↓

### Stage E

**Underwater levels**

This reduces initial CAPEX enormously.

For example, your first commercial module could have:

**100,000 m² footprint × 1 floor = 100,000 m² GFA**

rather than immediately building:

**600,000 m² GFA.**

The rental income from Level 1 finances Level 2.

Then Level 2 finances Level 3.

Then the underwater construction begins.

That's much closer to **natural growth of a city** than conventional megaproject financing.

---

# The strongest version of the business model

I'd actually separate the project into **three companies/assets**:

### 1. Ocean Infrastructure

Owns:

* hexagonal mesh
* generators
* moorings
* desalination
* power network

### 2. Real Estate

Leases the physical space from Ocean Infrastructure.

Its income pays infrastructure rent.

### 3. AI Compute

Leases electricity/cooling/data-centre space from the infrastructure company.

That means the infrastructure company receives:

**property lease + electricity + water + data-centre revenue.**

The real estate company gets:

**residential + hotel + commercial + industrial rents.**

And the AI company gets:

**GPU compute revenue.**

This makes financing much easier because each layer has a recognizable asset and revenue stream.

---

# The most important number

If you can get the **mature construction cost down to ~S$2,500–3,000/m² of total GFA**, the project becomes self-expanding much more easily.

For example:

$$
6m\,m²\times S\$3,000
=\boxed{S\$18B}
$$

rather than S$37B.

At ~S$3B annual NOI:

$$
3/18=\boxed{16.7\%}
$$

simple operating return before financing/tax.

That is a completely different investment proposition.

### And the first 100,000 m² is the critical experiment.

If a **10-hectare module** can demonstrate:

* ~600,000 m² eventual GFA,
* storm survivability,
* acceptable insurance,
* bankable construction cost,
* Singapore-like rents,
* positive cash flow,

then you don't need to convince investors to fund a **1 km² floating city**.

You only need investors to fund **the next 10 hectares**, because the previous 10 hectares are already generating the money and collateral to build it.

That's the fundamental advantage of your modular hexagonal architecture: **the city can potentially finance its own physical expansion.**
