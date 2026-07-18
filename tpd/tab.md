Extract tabulate Microsoft BitNet vs. NVDIA HBM systems tokens per day figures from the following links：

1. [Mistral](https://omnixtar.github.io/tpd/mistral)
1. [Gemini](https://omnixtar.github.io/tpd/gemini)
1. [Grok](https://omnixtar.github.io/tpd/grok)
1. [ChatGPT](https://omnixtar.github.io/tpd/chatgpt)
1. [Claude](https://omnixtar.github.io/tpd/claude)
1. [Kimi](https://omnixtar.github.io/tpd/kimi)
1. [DeepSeek](https://omnixtar.github.io/tpd/deepseek)
1. [QWen](https://omnixtar.github.io/tpd/qwen)
1. [Z.ai](https://omnixtar.github.io/tpd/zai)

Based on the extracted content from the provided links, the pages contain multiple **Fermi estimate scenarios** with varying assumptions regarding device counts, tokens-per-second throughput, and GPU installed bases. 

Below is a consolidated tabulation of the **Microsoft BitNet (Edge)** vs. **NVIDIA HBM Systems (Datacenter)** daily token capacity figures extracted from those sources.

---

### 📊 Consolidated Tabulation: Tokens Per Day (Trillions)

| Scenario / Estimate Variation | Microsoft BitNet (Edge Fleet) | NVIDIA HBM Systems (Datacenter) | Capacity Ratio (BitNet : NVIDIA) |
| :--- | :--- | :--- | :--- |
| **Conservative Edge / High Datacenter** | **~940 – 3,760** Trillion | **~4,320 – 6,480** Trillion | 1 : 1.1 to 6.9 |
| **Moderate / Balanced Baseline** | **~1,840 – 3,888** Trillion | **~1,300 – 3,500** Trillion | ~1.4 : 1 to 1.1 : 1 |
| **Aggressive Edge / Conservative Datacenter** | **~7,776 – 10,260** Trillion | **~168 – 4,320** Trillion | ~1.8 : 1 to 61 : 1 |
| **Theoretical Maximum (Upper Bound)** | **~1,151,400** Trillion *(1.15 Quintillion)* | **~300,000** Trillion | ~3.8 : 1 |

---

### ⚙️ Key Assumptions Driving the Variance

The wide range in estimates stems from different baseline assumptions used across the extracted analyses:

#### 1. Microsoft BitNet (Edge) Variables
* **Active Device Pool:** Estimates range from **2.75 billion** (conservative, accounting for older hardware) to **5.325 billion** (50% of ~10.6 billion global PCs + smartphones).
* **Runtime:** Uniformly assumed at **12 hours/day** (43,200 seconds).
* **Throughput per Device:** 
  * *Low:* 5–6 tokens/sec (running larger 100B-class models on standard CPUs).
  * *Mid:* 10–20 tokens/sec (optimized NPU/CPU execution for 3B–8B models).
  * *High:* 40–50+ tokens/sec (highly optimized, smaller models on modern mobile SoCs).

#### 2. NVIDIA HBM Systems (Datacenter) Variables
* **Installed GPU Base (Mid-2026):** Estimates vary wildly from **300,000** (next-gen Rubin/Blackwell only) to **1 million** (H100 focused) up to **10–15 million** (cumulative Hopper + Blackwell global fleet).
* **Runtime:** Assumed at **12 to 24 hours/day** (86,400 seconds), accounting for maintenance, training vs. inference splits, and utilization rates.
* **Throughput per GPU:** 
  * *Low:* 150–300 tokens/sec (single-stream, large frontier models, low batching).
  * *Mid:* 5,000 tokens/sec (optimized batched inference for mid-sized models).
  * *High:* 10,000+ tokens/sec (maximum theoretical batched throughput on H200/GB200 with FP4/FP8 quantization).

---

### 💡 Core Takeaway from the Extraction

The extracted analyses converge on a fascinating architectural insight: **A single NVIDIA HBM-equipped GPU is roughly 500x to 2,000x more powerful in raw inference throughput than a typical consumer edge device.** 

However, because the global pool of consumer devices is roughly **1,000x larger** than the global pool of datacenter GPUs, the *aggregate theoretical capacity* of a decentralized BitNet edge network can rival or even exceed the centralized NVIDIA HBM fleet—**provided** that a massive percentage of consumer devices are actively opted-in, running optimized 1-bit models, and sustained for half the day. 

*Note: All figures represent **theoretical maximum capacity**, not actual realized global token consumption, which remains constrained by user demand, software deployment, and power/thermal limits on edge devices.*