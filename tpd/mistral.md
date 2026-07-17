To estimate the total capacity in trillion tokens per day for Microsoft's **BitNet** large language model, we need to break down the problem into manageable steps. Here's how we can approach it:

---

### **1. Estimate the Number of Personal Computers and Mobile Phones**
- **Global Personal Computers (PCs):**
  As of 2024, there are approximately **1.5 billion PCs** worldwide.
  Assuming a 5% annual growth rate, by mid-2026, the number of PCs could be roughly **1.65 billion**.

- **Global Mobile Phones:**
  As of 2024, there are approximately **8.5 billion mobile phones** (including smartphones and feature phones).
  Assuming a 3% annual growth rate, by mid-2026, the number of mobile phones could be roughly **9 billion**.

- **Total Devices:**
  **1.65 billion PCs + 9 billion mobile phones = 10.65 billion devices**

---

### **2. Calculate the Number of Active Devices**
- **50% of all devices:**
  **10.65 billion * 0.5 = 5.325 billion devices**

- **Active for 12 hours/day:**
  Each device runs the model for **12 hours/day**.

---

### **3. Estimate Tokens Generated per Device per Hour**
- **BitNet Model Throughput:**
  Microsoft's **BitNet** is optimized for efficiency, but exact token generation rates per device are not publicly available.
  For estimation, let's assume:
  - A **modern consumer-grade GPU** (e.g., NVIDIA RTX 4090) can generate **~10,000 tokens/second** for a large language model.
  - A **mobile phone** (e.g., with a Snapdragon 8 Gen 3) might generate **~1,000 tokens/second** due to lower compute power.

- **Average Tokens per Device per Hour:**
  Let's assume a **weighted average** of **5,000 tokens/second** (accounting for both PCs and mobile phones).
  - **Tokens per hour:** 5,000 tokens/second * 3,600 seconds = **18 million tokens/hour/device**

---

### **4. Calculate Total Tokens per Day**
- **Tokens per device per day:**
  **18 million tokens/hour * 12 hours = 216 million tokens/day/device**

- **Total tokens for all active devices:**
  **216 million tokens/day/device * 5.325 billion devices = 1.1514e+18 tokens/day**

- **Convert to trillion tokens:**
  **1.1514e+18 tokens = 1.1514 million trillion tokens/day**

---

### **5. Compare to NVIDIA HBM Systems in June 2026**
- **NVIDIA HBM Systems:**
  As of 2024, NVIDIA's **H100 GPUs** (with HBM3) are widely used for AI workloads.
  - A single **H100 GPU** can process **~300 trillion tokens/day** (assuming optimal conditions and continuous operation).
  - In June 2026, let's assume NVIDIA has **1 million H100 GPUs** deployed globally (a rough estimate based on market demand and production capacity).

- **Total tokens for NVIDIA HBM systems:**
  **300 trillion tokens/day/GPU * 1 million GPUs = 300,000 trillion tokens/day**

---

### **6. Comparison**
| Source                          | Tokens per Day (Trillion) |
|---------------------------------|---------------------------|
| Microsoft BitNet (PCs + Mobile) | **1,151,400**             |
| NVIDIA HBM Systems              | **300,000**               |

---
### **Key Observations**
- Microsoft BitNet, if deployed on **50% of all PCs and mobile phones for 12 hours/day**, could theoretically generate **~1.15 million trillion tokens/day**.
- NVIDIA HBM systems, with **1 million H100 GPUs**, would generate **~300,000 trillion tokens/day**.
- **BitNet's distributed capacity is ~3.8x higher** than NVIDIA's centralized HBM systems in this scenario.

---
### **Assumptions and Caveats**
1. **Token Generation Rates:**
   The assumed token generation rates for PCs and mobile phones are **highly speculative**. Real-world performance depends on hardware, model size, and optimization.

2. **Device Utilization:**
   Not all devices will run the model continuously or at full capacity. Latency, power constraints, and user behavior will reduce actual output.

3. **NVIDIA GPU Count:**
   The estimate of **1 million H100 GPUs** is speculative. Actual deployment could vary significantly.

4. **BitNet Efficiency:**
   BitNet's actual performance on consumer devices is unconfirmed. Microsoft may optimize it further for edge devices.

---
Would you like to refine any assumptions or explore a specific aspect further?