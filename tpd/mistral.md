Based on the most relevant and up-to-date information from June 2026, here’s a detailed estimate of the **total daily token capacity for NVIDIA HBM systems**:

---

---

### **Key Data Points from NVIDIA in June 2026**
1. **NVIDIA Vera Rubin Platform (HBM4):**
   - **Production Status:** Entered full production on **June 1, 2026**.
   - **Memory Bandwidth:** HBM4 triples per-GPU memory bandwidth to **22 TB/s** (vs. 8 TB/s for HBM3e in Blackwell).
   - **GPU Count:** NVIDIA estimated **200,000–300,000 Rubin GPUs** to be produced in 2026, with **60–70% allocated to hyperscalers** (e.g., AWS, Google Cloud, Microsoft Azure).
   - **HBM4 per GPU:** Each Rubin GPU uses **288 GB of HBM4**, which is **6x more memory per device** than consumer GPUs.

2. **Token Throughput:**
   - **MLPerf Inference v6.0 (April 2026):**
     - **DeepSeek-R1 (Server):** **1,555,110 tokens/sec** across **288 Blackwell Ultra GPUs** (4x GB300 NVL72 systems).
     - **Per-GPU Throughput:** ~**5,400 tokens/sec/GPU** (1,555,110 / 288).
     - **Vera Rubin (HBM4):** Expected to deliver **10x higher throughput per watt** and **10x lower cost per million tokens** compared to Blackwell.
     - **Estimated Vera Rubin Throughput:** **~54,000 tokens/sec/GPU** (10x improvement over Blackwell).

3. **Deployment Scale:**
   - **AWS Commitment:** Deploying **>1 million NVIDIA GPUs** (including Blackwell and Rubin) within 12 months of June 2026.
   - **Total Rubin GPUs in 2026:** Assuming **250,000 Rubin GPUs** (midpoint of NVIDIA’s estimate), with **70% to hyperscalers = 175,000 GPUs** deployed by mid-2026.

---

---

### **Total Daily Token Capacity for NVIDIA HBM Systems (June 2026)**
#### **Assumptions:**
- **Throughput per Rubin GPU:** **54,000 tokens/sec** (10x Blackwell).
- **Utilization:** Assume **80% utilization** (accounting for downtime, maintenance, and non-peak hours).
- **Operational Hours:** **24 hours/day**.

#### **Calculations:**
1. **Tokens per GPU per Day:**
   - **54,000 tokens/sec * 0.8 utilization * 86,400 sec/day = 3.73 billion tokens/day/GPU**.

2. **Total Tokens for 175,000 GPUs:**
   - **3.73 billion tokens/day/GPU * 175,000 GPUs = 653.25 trillion tokens/day**.

3. **Including Non-Rubin GPUs (Blackwell, etc.):**
   - **Blackwell GPUs:** Assume **500,000 Blackwell GPUs** (from AWS’s 1M GPU commitment, with the rest being Rubin).
   - **Throughput per Blackwell GPU:** **5,400 tokens/sec** (from MLPerf).
   - **Tokens per Blackwell GPU/day:** **5,400 * 0.8 * 86,400 = 373.25 million tokens/day/GPU**.
   - **Total for Blackwell:** **373.25 million * 500,000 = 186.625 trillion tokens/day**.

4. **Combined Total:**
   - **653.25 (Rubin) + 186.625 (Blackwell) = ~840 trillion tokens/day**.

---

---

### **Comparison to Microsoft BitNet Estimate**
| Source                          | Tokens per Day (Trillion) |
|---------------------------------|---------------------------|
| Microsoft BitNet (PCs + Mobile) | **~1,151,400**           |
| NVIDIA HBM Systems (June 2026)  | **~840**                 |

---
### **Key Observations**
- **NVIDIA’s HBM systems** (Rubin + Blackwell) in June 2026 are estimated to generate **~840 trillion tokens/day**.
- **Microsoft BitNet**, if deployed on **50% of all PCs and mobile phones for 12 hours/day**, could theoretically generate **~1.15 million trillion tokens/day**—**~1,370x higher** than NVIDIA’s centralized systems.
- **Centralized vs. Distributed:** NVIDIA’s capacity is **highly optimized for data centers**, while BitNet’s potential leverages **ubiquitous edge devices** (PCs/mobile), assuming near-perfect utilization and hardware efficiency.

---
### **Caveats**
1. **BitNet Assumptions:**
   - Token generation rates for PCs/mobile are **highly speculative** (real-world performance depends on hardware, model size, and optimization).
   - **50% device utilization** is optimistic; actual usage may be lower due to power/thermal constraints and user behavior.

2. **NVIDIA Assumptions:**
   - **10x throughput improvement** for Rubin over Blackwell is based on NVIDIA’s claims of **10x lower cost per token** and **10x higher throughput per watt**.
   - **GPU count** (250K Rubin + 500K Blackwell) is an estimate; actual deployments may vary.

3. **Real-World Constraints:**
   - **Memory bandwidth** and **interconnect bottlenecks** (e.g., NVLink, HBM4 supply) could limit actual throughput.
   - **Model size matters:** Larger models (e.g., >200B parameters) may not achieve the same throughput as smaller ones.

---
Would you like to refine any assumptions or explore a specific aspect (e.g., cost, power consumption) further?