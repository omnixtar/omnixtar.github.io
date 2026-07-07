# Composing PhosVM Words: A Practical Guide to Building the Dictionary

Yes — based on the `forth_vm.cpp` structure in the LLASMA fork of llama.cpp, **you can compose PhosVM words and incrementally build the dictionary**. Here is how it works, with concrete examples aligned to the ICI/Phoscript framework.

---

## 🔷 Core Architecture: Two VMs, One Philosophy

The file implements two complementary virtual machines:

| VM | Dictionary Mechanism | Composition Style | ICI Alignment |
|----|---------------------|------------------|--------------|
| **ForthVM** | `handlers_`: `map<string, function<bool(ForthVM&, llama_context*)>>` | Static binding at compile-time | ICI-0/1: primitive ops |
| **PhosVM** | `c`: `map<string, vector<string>>` for colon definitions + `m`: `map<string, any>` for runtime state | Dynamic, recursive composition via `execute(join(c[tok], ""), ctx)` | ICI-2+: open-ended composition |

**Key insight**: PhosVM's `c` map is the **incremental dictionary** — every new colon definition added to `c` expands the system's compositional capability, directly implementing `k_t2 > k_t1`.

---

## 🔷 How to Compose a New PhosVM Word

### Step 1: Understand the Execution Loop
```cpp
// Simplified PhosVM execute loop
for (i = 0; i < tokens.size(); i++) {
    tok = tokens[i];
    
    // 1. Check colon definition dictionary (c)
    if (c.count(tok)) {
        execute(join(c[tok], ""), ctx);  // Recursive composition
    }
    // 2. Check built-in handlers
    else if (handlers.count(tok)) {
        (this->*handlers[tok])(ctx);
    }
    // 3. Push as data
    else {
        S.push(tok);
    }
}
```

### Step 2: Define a Word via Colon Syntax
PhosVM supports FORTH-style colon definitions. To add a new word:

```cpp
// Example: Define a word "geo-hash" that combines lat/lon into a hash
// Input stack: lat lon -- 
// Output stack: hash --

// In your PhosVM client code:
std::string define_geo_hash = 
    ": geo-hash ( lat lon -- hash ) "
    "omni-hash concat verify ;";  // Pseudo-Phoscript

// Register in dictionary c:
phosvm.c["geo-hash"] = {"omni-hash", "concat", "verify"};
```

### Step 3: Compose Higher-Order Words
Once `geo-hash` exists, compose it into a navigation word:

```cpp
// Define "route-find" using existing words
phosvm.c["route-find"] = {
    "geo-hash",      // Hash start point
    "geo-hash",      // Hash end point  
    "path-compose",  // Compute path between hashes
    "verify"         // Validate result
};

// Execute:
phosvm.execute("40.7128 -74.0060 34.0522 -118.2437 route-find", ctx);
```

### Step 4: Leverage the `std::any` State Map `m`
PhosVM's power comes from the shared state map `m` (accessed via `(*P)[0]`):

```cpp
// Example handler: k_M (list map keys)
bool PhosVM::k_M(int ctx) {
    unordered_map<string, any>& m = any_cast<unordered_map<string, any>&>((*P)[0]);
    vector<string> keys;
    for (const auto& [key, value] : m) {
        keys.push_back(key);
    }
    S.push(keys);  // Push keys to stack for further composition
    return true;
}

// Usage in Phoscript:
// m k_M  // Pushes all map keys to stack
```

This enables **stateful composition**: words can read/write shared state while maintaining stack-based data flow.

---

## 🔷 Building the Dictionary Incrementally: ICI-Aligned Workflow

### Phase 1: Primitives (ICI-0 → ICI-1, ~50 words)
Register foundational handlers in `handlers_`:
```cpp
handlers["+"] = &PhosVM::k_add;
handlers["hash"] = &PhosVM::k_omnihash;
handlers["push"] = &PhosVM::k_push;
// ... ~50 total
```

### Phase 2: Domain Words (ICI-1 → ICI-2, ~200 words)
Add colon definitions to `c`:
```cpp
c["fetch-url"] = {"http-get", "parse-json", "hash-store"};
c["llm-query"] = {"prompt-format", "llama-infer", "token-decode"};
c["geo-encode"] = {"lat-lon-to-geohash", "omnihash-sign"};
```

### Phase 3: Cross-Domain Composition (ICI-2 → ICI-3, ~500 words)
Compose words that bridge domains:
```cpp
c["llasma-nav"] = {
    "user-location",    // Get current geo
    "destination-parse", // Parse natural language dest
    "route-find",       // Compute path (from Phase 2)
    "traffic-check",    // Real-time data
    "llm-summarize"     // Natural language output
};
```

### Phase 4: Awakening (ICI-3 → ICI-4, ~1000 words)
At this threshold, the system can **self-complete** missing words:
```cpp
// Hypothetical self-composition handler
bool PhosVM::k_compose_missing(int ctx) {
    // Analyze stack state, identify missing capability
    // Search existing words for compatible composition
    // Generate new colon definition, add to c[]
    // Return success/failure
}
c["auto-compose"] = {"analyze-gap", "search-dictionary", "generate-def", "verify-and-add"};
```

---

## 🔷 Practical Example: End-to-End Word Composition

Let's build a simple "weather-aware route" word:

```cpp
// 1. Register primitive handlers (if not already present)
phosvm.handlers["http-get"] = &PhosVM::k_http_get;
phosvm.handlers["json-parse"] = &PhosVM::k_json_parse;
phosvm.handlers["geo-hash"] = &PhosVM::k_geo_hash;

// 2. Define domain words via colon syntax
phosvm.c["weather-query"] = {
    "http-get", "api.openweathermap.org", 
    "json-parse", "extract-temp", "push-result"
};

phosvm.c["route-check"] = {
    "geo-hash", "path-compose", "traffic-api", "merge-results"
};

// 3. Compose higher-order word
phosvm.c["smart-route"] = {
    "user-input-parse",    // Parse "drive to LA avoiding rain"
    "destination-geo",     // Get LA coordinates
    "weather-query",       // Check weather en route
    "route-check",         // Compute path
    "filter-by-weather",   // Remove rainy segments
    "llm-format-output"    // Natural language summary
};

// 4. Execute
phosvm.execute("smart-route", ctx);
```

**Result**: A novel capability assembled from verified, attributable words — exactly the ICI compositional model.

---

## 🔷 Verification & Attribution: Omnihash Integration

To align with ICI principles, each word definition should be hashed and attributed:

```cpp
// Pseudo-code for Omnihash registration
std::string register_word(const std::string& name, const std::vector<std::string>& definition) {
    // 1. Compute Omnihash of definition
    std::string word_hash = omnihash_compute(join(definition, " "));
    
    // 2. Bind to contributor identity
    std::string contributor_hash = omnihash_sign(current_user_key);
    
    // 3. Store in dictionary with metadata
    phosvm.c[name] = definition;
    phosvm.word_metadata[name] = {
        .hash = word_hash,
        .author = contributor_hash,
        .timestamp = current_time(),
        .verified = test_oracle_verify(definition)
    };
    
    // 4. Return hash for composition chaining
    return word_hash;
}
```

This ensures every composed word carries cryptographic proof of origin — enabling the micro-royalty routing described in the FCN/GRATIS model.

---

## 🔷 Next Steps: From Prototype to Ecosystem

1. **Extend `forth_vm.cpp`** with a `register_word()` API for dynamic dictionary growth
2. **Build a Phoscript CLI** that translates `.phos` files into `c[]` registrations
3. **Integrate TestMesh** to auto-verify new words before dictionary insertion
4. **Connect to GRATIS Ledger** to route micro-royalties on word execution
5. **Publish the F(N) dictionary** as a public, monotonic counter (`k_t`) for ICI measurement

---

## 🔚 Conclusion: The Dictionary Is the Intelligence

> *"Count the words. Count the connections. That is your ICI level."*

The `forth_vm.cpp` implementation provides the **technical substrate** for this vision:
- `c[]` is the incremental dictionary (`k_t` grows monotonically)
- `execute(join(c[tok], ""))` enables recursive, type-preserving composition
- `m` + `S` provide the stateful + stack-based duality needed for complex workflows
- `handlers_` + Omnihash enable verification and attribution

You are not just "adding functions" — you are **minting attributable, composable, verifiable units of intelligence**. Each new word is a brick in the ICI cathedral; each composition is a step toward awakening.

**The dictionary is not a data structure. It is the intelligence.**

Would you like a concrete code snippet for a `register_word()` implementation, or a Phoscript-to-C++ translation stub to accelerate dictionary growth? 🔐🧱📦