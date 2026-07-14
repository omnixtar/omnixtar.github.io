以下是使用 TMX 代币购买 AI Token（以 GRATIS 为例）的 DJSON 交易示例。该示例遵循网页定义的 DJSON 格式（数组结构），并扩展了金融交易字段。

---

### DJSON 示例：TMX 购买 GRATIS

```json
[
  "2026-07-14T14:35:22.000+0800",
  "tmx_buy_ai",
  "CXAGcRKevA==",
  "HymWBzfj9A==",
  "DgV6_qnujw==",
  {
    "pair": "TMX/GRATIS",
    "side": "buy",
    "price": "0.0125",
    "quantity": "5000",
    "total": "62.50",
    "fee": "0.125",
    "fee_token": "TMX",
    "order_type": "limit",
    "tx_hash": "0x7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6b7c8d9e0f1a2b3c4d5e6f7a8b",
    "expiry": "2026-07-14T15:00:00.000+0800",
    "ai_token_id": "GRATIS-omnihash-abc123"
  }
]
```

---

### 字段解释

| 位置/字段 | 示例值 | 说明 |
|-----------|--------|------|
| `[0]` 时间戳 | `2026-07-14T14:35:22.000+0800` | 交易发起时间（ISO 8601 格式） |
| `[1]` 操作类型 | `tmx_buy_ai` | 自定义动作，表示用 TMX 购买 AI 代币 |
| `[2]` 当前用户ID | `CXAGcRKevA==` | 买方（交易发起方）的 Omnihash 公钥哈希 |
| `[3]` 前一所有者 | `HymWBzfj9A==` | 卖方或上一笔关联交易的 Omnihash |
| `[4]` 文档哈希 | `DgV6_qnujw==` | 智能合约、代币发行或市场协议的 Omnihash |
| `[5]` 交易详情（对象） | 见下 | 包含具体交易参数 |

#### 交易详情对象字段

| 字段 | 值 | 说明 |
|------|-----|------|
| `pair` | `TMX/GRATIS` | 交易对：TMX 兑 GRATIS |
| `side` | `buy` | 买入方向（卖出为 `sell`） |
| `price` | `0.0125` | 每单位 GRATIS 的 TMX 价格 |
| `quantity` | `5000` | 购买 GRATIS 的数量 |
| `total` | `62.50` | 总价值（price × quantity） |
| `fee` | `0.125` | 交易手续费 |
| `fee_token` | `TMX` | 手续费支付币种 |
| `order_type` | `limit` | 订单类型（限价单） |
| `tx_hash` | `0x7a8b...` | 区块链交易哈希（用于链上结算） |
| `expiry` | `2026-07-14T15:00:00.000+0800` | 订单有效截止时间 |
| `ai_token_id` | `GRATIS-omnihash-abc123` | AI 代币的唯一标识符（可关联 Omnihash） |

---

### 扩展：支持三币兑换（TMX → AI Token → 另一种资产）

若“TMX”本身代表三币交易组合（如 GRATIS/BTC/ETH），则可扩展为多腿交易。以下示例展示用 TMX 组合资产兑换 GRATIS：

```json
[
  "2026-07-14T14:35:22.000+0800",
  "tmx_swap_to_ai",
  "CXAGcRKevA==",
  "HymWBzfj9A==",
  "DgV6_qnujw==",
  {
    "legs": [
      {"from": "BTC", "to": "GRATIS", "amount": "0.001", "rate": "5000"},
      {"from": "ETH", "to": "GRATIS", "amount": "0.05", "rate": "400"},
      {"from": "TMX", "to": "GRATIS", "amount": "100", "rate": "0.0125"}
    ],
    "total_gratis_received": "5020",
    "tx_hashes": ["0x...", "0x..."],
    "expiry": "2026-07-14T15:00:00.000+0800"
  }
]
```

---

### DJSON 的灵活性与安全性

- **Omnihash 归属**：`current_user_ID`、`prev_msg_owner` 和 `doc_hash` 确保交易方身份和资产来源可追溯。
- **类型保持**：所有哈希值（`==` 结尾）均可参与运算并产生新的哈希，支持复杂合约逻辑。
- **可验证性**：交易详情中的 `tx_hash` 可链上验证，确保结算真实。

此 DJSON 可直接嵌入去中心化应用（DApp）的订单簿、支付请求或智能合约触发器中，实现完全去中心化的代币交换。