This is a Fermi estimate — there's no published figure for either number, so I'll build both from grounded benchmarks and state assumptions explicitly.

## 1. BitNet capacity across personal devices

**Throughput per device.** Microsoft's own benchmarks for bitnet.cpp (the reference 1-bit inference engine) are the best anchor: bitnet.cpp can run a 100-billion parameter model on a single CPU at 5-7 tokens per second, roughly human reading speed. Independent benchmarking on real hardware puts this more precisely: TL2_0 reaches 7.45 tokens/s on the Apple M2 Ultra and 1.69 tokens/s on the Intel i7-13700H for 100B ternary LLM inference on edge devices. Phones can't hold a 100B model in RAM, so they'd run something like the 2B BitNet model, which decodes much faster per token (Microsoft cites ~29ms/token latency on reference hardware, i.e. ~30+ tok/s, though real phone SoCs are weaker).

Given that spread, I'll use a blended average across all devices (mix of capable PCs running larger models slowly and phones running small models quickly):
- Low case: 5 tok/s average
- Mid case: 10 tok/s average
- High case: 20 tok/s average

**Device count.** Roughly ~1.6–2 billion active PCs/laptops + ~6.8–7 billion active smartphones globally ≈ **8.5 billion devices**. 50% running 12 hrs/day → **4.25 billion device-hours/day** worth of active devices, each active for 12h = 43,200 seconds.

**Math:**

| Case | Tokens/sec/device | Tokens/day |
|---|---|---|
| Low | 5 | ~920 trillion |
| Mid | 10 | ~1,840 trillion (1.84 quadrillion) |
| High | 20 | ~3,670 trillion (3.7 quadrillion) |

(4.25×10⁹ devices × 43,200 s × tok/s)

**BitNet fleet estimate: roughly 1–4 quadrillion tokens/day, midpoint ~1.8 quadrillion/day.**

## 2. NVIDIA HBM datacenter capacity, June 2026

**Per-GPU throughput.** This is where "capacity" diverges hugely from single-user speed — datacenter GPUs batch across thousands of concurrent requests. Current-gen systems like GB300 NVL72 are benchmarked around 116 TPS/user interactivity, delivering inference at $0.123 per million tokens according to SemiAnalysis InferenceX benchmarks as of April 2026, and NVIDIA's software stack has been pushing aggregate per-GPU throughput up sharply — stacking optimizations like disaggregated serving, large expert parallelism, and NVFP4 have increased Blackwell token throughput per GPU up to 20x over baseline. Aggregate (batched) throughput per HBM-class datacenter GPU realistically lands somewhere in the **2,000–8,000 tokens/sec** range depending on model size and how aggressively it's batched. I'll use **5,000 tok/s/GPU** as a midpoint.

**Installed base.** NVIDIA's cumulative shipments of HBM-equipped datacenter GPUs (Hopper + Blackwell generations still in service) by mid-2026 are plausibly in the **8–12 million unit** range fleet-wide. Not all of that runs inference 24/7 — a large chunk is doing training, fine-tuning, or sits idle/reserved. Assume roughly **half is inference-serving at any time** → ~5 million GPUs.

**Math:** 5×10⁶ GPUs × 86,400 s/day × 5,000 tok/s ≈ **2,160 trillion tokens/day (~2.2 quadrillion/day)**

Sensitivity range (3,000–8,000 tok/s/GPU, 4–6M inference GPUs): roughly **1,300–3,500 trillion tokens/day**.

## Comparison

| | Estimated capacity |
|---|---|
| BitNet on 50% of world's PCs+phones, 12h/day | ~1,000–4,000 trillion tokens/day |
| NVIDIA HBM datacenter fleet, June 2026 | ~1,300–3,500 trillion tokens/day |

These land in the **same order of magnitude** — both roughly 1–4 quadrillion tokens/day of theoretical capacity. That's a genuinely interesting result: it suggests that the sheer numeric abundance of consumer CPUs, even running a much slower per-chip workload, can rival the aggregate output of the entire specialized NVIDIA datacenter fleet, purely because there are ~1,000x more consumer devices than datacenter GPUs.

**Important caveats:**
- This is *theoretical capacity*, not actual usage. Real-world daily token consumption across all AI providers combined today is estimated in the tens-of-trillions/day range — far below either capacity figure — because demand, not hardware, is the binding constraint.
- BitNet's real-world deployment at consumer scale doesn't exist yet; 100B-scale BitNet models aren't publicly released, and phones/low-end PCs would run much smaller models than assumed here.
- NVIDIA's installed base and per-GPU batched throughput are not publicly disclosed figures — I'm inferring them from revenue/pricing data and benchmark spec sheets, not a source that states them directly.
- Quality of output differs enormously: a 2B BitNet model on a phone is not equivalent capability to a frontier MoE model on a GB300 rack, so "tokens" aren't apples-to-apples across the two systems.

So: order-of-magnitude comparable, but both numbers are best treated as rough capacity ceilings, not measured or even currently realistic throughput.