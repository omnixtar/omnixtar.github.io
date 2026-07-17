**NVIDIA HBM-based systems (primarily H100/H200 Hopper and B200/GB200 Blackwell GPUs with HBM3/HBM3e) in mid-2026 have a theoretical/practical daily token capacity in the low-to-mid hundreds of trillions of tokens per day at high utilization — roughly comparable in order of magnitude to the 50–300T tokens/day BitNet edge scenario, but with key differences in deployment, efficiency, and realized usage.**

### Fleet Size (Mid-2026 / June–July Estimates)
- **Hopper (H100/H200/GH200)**: ~460,000+ deployed (tracked public data as of early July 2026; actual global higher, likely 1M+ cumulative effective with untracked/private clouds).
- **Blackwell (B200/GB200/GB300)**: Only ~100,000+ deployed (as of July 1), with another ~300k installing. Announced pipeline ~1.66M, but ramp is ongoing; shipments strong but deployment lags due to infrastructure.
- **Total active NVIDIA HBM GPUs**: Roughly 0.6–2M+ equivalent in mid-2026 (conservative; broader Epoch AI-style estimates suggest multi-million H100-equivalents globally when including sales-to-deployment lag). NVIDIA dominates AI accelerators (~70–85%+ share).

Blackwell is still early-ramp (mostly pipeline), so the fleet is Hopper-heavy with growing Blackwell contribution.

### Per-GPU / System Throughput (Inference, Tokens/Second)
Inference is heavily **memory-bandwidth bound** (HBM is the key enabler). Real-world batched serving (vLLM/SGLang/TRT-LLM, FP8/FP4, mixed workloads):

- **H100**: ~100–300+ tok/s (single-stream/small batch) to 500–2,000+ tok/s saturated batch (70B-class models). E.g., ~236–335 tok/s on some 70B benchmarks; higher with optimizations.
- **H200**: 1.4–1.9x H100 uplift due to more/faster HBM3e (~140GB / 4.8 TB/s). Often 1,000–2,000+ tok/s batched.
- **B200/GB200**: 2–4x+ H100 (up to ~300–360 tok/s single, thousands batched; NVL72 racks excel at scale with NVLink). Bandwidth ~8 TB/s + FP4 advantages drive big gains for large models/contexts. Software optimizations (Dynamo, etc.) add further 2–5x effective gains over time.

**Blended fleet average**: Conservatively 500–2,000+ output tokens/second per GPU at production utilization (varies wildly by model size, batching, prefill/decode split, quantization).

### Daily Capacity Calculation
- Seconds/day: 86,400.
- Per GPU (at 50–70% sustained utilization, realistic for inference fleets): Hundreds of millions to low billions of tokens/day per GPU.
- **Fleet total**: Low hundreds of trillions of tokens/day (e.g., 1M GPUs × ~500M–1B tokens/day effective = 0.5–1 quadrillion? No—scaled realistically to observed global volumes). This aligns with broader market: global LLM tokens in tens-to-hundreds of trillions/day (Western + China ~180T/day reported earlier), with NVIDIA powering the majority of high-end/commercial inference.

**Theoretical max** (near-100% utilization, optimized Blackwell-heavy): Potentially higher (hundreds of trillions to low quadrillions), but real-world is constrained by power, networking, workload mix, and demand.

### Comparison to BitNet Edge Scenario (50–300T tokens/day)
- **Scale**: Similar order of magnitude. Edge (4B+ devices @ 10–20 tok/s, 12h/day) is massively parallel/distributed but low per-device. Cloud HBM is concentrated, high-utilization on premium hardware.
- **Efficiency & Practicality**:
  - **BitNet**: Extremely power-efficient on CPUs (low energy, battery-friendly, ubiquitous). Enables privacy/offline/local agents. Capacity is *theoretical* — limited by actual opt-in, thermal/battery constraints, and smaller models.
  - **NVIDIA HBM**: Much higher per-unit performance/bandwidth for frontier models (long context, high batch, complex reasoning). Datacenter-optimized but power-hungry (hundreds of watts/GPU, GW-scale clusters). Higher cost/token but better for quality/latency at scale. Software stack (CUDA ecosystem) accelerates gains.
- **Realized Usage**: Cloud sees heavy but not 24/7 max utilization (often 40–70%). Edge would be bursty/idle. Global inference demand (tens of trillions/day) is met by a mix, but NVIDIA HBM handles the premium/high-volume share.
- **Growth Trajectory**: Both scale rapidly. Edge unlocks decentralized explosion; HBM/cloud drives current revenue/quality frontier. Combined, they could push total capacity into quadrillions+ as adoption grows.

**Bottom line**: Mid-2026 NVIDIA HBM capacity is in the **same ballpark (low-to-mid hundreds of trillions tokens/day)** as the hypothetical BitNet scenario — impressive for centralized datacenters vs. distributed edge. HBM excels in performance-per-GPU and ecosystem maturity; BitNet in accessibility and efficiency at the edge. Real totals depend heavily on utilization, which remains the biggest variable for both.

These are approximations based on public deployment data, benchmarks, and market reports as of mid-2026; exacts are opaque due to private fleets and rapid change.