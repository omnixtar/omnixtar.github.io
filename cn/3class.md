## Aritificial Intelligence Services: 3 Class Comparisons

Here is a **concise summary table** comparing the key scenarios discussed, based on 2025 shipment data and early 2026 benchmarks/estimates. All figures are **theoretical prospective daily output tokens** (generation-focused) under realistic mixed workloads, assuming **12 hours/day effective runtime** where applicable for local setups. Earnings use **Amazon Nova Lite baseline** ($0.24 per 1M output tokens) as a market proxy for monetization value.

### Additional Insights
- **Commercial (A) vs. Local (B+C)**: Cloud services currently lead in realized high-quality, always-available throughput. However, widespread BitNet adoption on non-GPU PCs could rival or exceed commercial aggregate output thanks to sheer scale (~270M+ PCs shipped in 2025 alone).
- **GPU vs. CPU Economics**: One RTX 5090 delivers **10–100×** the tokens/day of a typical non-GPU BitNet setup in batched scenarios, translating to far higher per-machine earnings. But fleets of cheap BitNet CPUs win on total capacity, accessibility, and energy cost.
- **Earnings Context** (12h/day, Nova Lite $0.24/M output tokens):
  - BitNet non-GPU: Supplemental side income; scales with many machines.
  - RTX 5090: Meaningful small-business potential, but subtract electricity (~RM 30–80+/month in Malaysia) and hardware cost.
- **Caveats**: Real utilization << 100% (demand, power, concurrency limits). Token quality varies; higher Nova tiers (Pro $3.20/M or Premier $12.50/M) multiply earnings 10–50× for premium workloads. Figures are directional based on 2025 shipments (~270M PCs, ~44M discrete GPUs) and benchmarks.

This highlights two complementary futures: **concentrated commercial/GPU power** vs. **ubiquitous, democratized BitNet on everyday hardware**. Non-GPU volume could quietly match cloud scale in aggregate tokens while running at far lower societal energy cost.

If you'd like the table expanded with net profit (after electricity in Malaysia), different Nova tiers, or specific assumptions adjusted, let me know!

### Summary Comparison Table (Early/Mid-2026 Context)

| Category | Scale (Units) | Avg. TPS per Unit (Realistic) | Est. Daily Tokens (Aggregate) | Monthly Earnings Potential (per unit, Nova Lite) | Yearly Earnings Potential (per unit, Nova Lite) | Key Notes |
|----------|---------------|-------------------------------|-------------------------------|--------------------------------------------------|------------------------------------------------|-----------|
| **(A) Commercial AI Services** (Cloud APIs: OpenAI, Google, Anthropic, Amazon Nova, etc.) | Millions of high-end data center GPUs (H100/H200/Blackwell clusters) | Thousands to tens of thousands TPS per GPU (heavy batching) | **50–150+ trillion tokens/day** (total market) | N/A (hyperscaler revenue in billions) | N/A | Dominates today with optimized, low-latency, high-concurrency serving. Rapid growth from agentic/enterprise use. |
| **(B) Home Gamers / RTX 5090-class Discrete GPUs** | ~40–42 million NVIDIA discrete GPUs shipped in 2025 (~94% market share) | 100–600 TPS (mixed single/batched serving; e.g., 83 tok/s single, 630+ batched for 9B models; up to 3,500–65,000+ for small models at high concurrency) | **0.5–5+ trillion tokens/day** (prospective if significant utilization) | **~$90–190** (at 300–600 TPS) | **~$1,100–2,300** | Concentrated power for concurrent/low-latency services. Limited by utilization, heat, power (~300–500W), and gaming-primary use. |
| **(C) Non-GPU PCs with Microsoft BitNet** (50% deployment scenario) | ~135–140 million machines (from ~270 million 2025 PC shipments; vast majority non-discrete) | 10–20 TPS (fleet average; 5–7 TPS for 100B-class ternary; 15–50+ for smaller models) | **60–120+ trillion tokens/day** (at 50% adoption) | **~$3–6** (at 10–20 TPS) | **~$40–76** | Massive volume advantage. Extreme efficiency (low power ~10–50W, huge models run locally). Best for distributed/privacy-focused inference. |

