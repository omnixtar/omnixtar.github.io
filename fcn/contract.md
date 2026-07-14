> 原文出处：https://omnixtar.github.io/contract/

### Omni*Contract：数字资产（源代码）的所有权与使用权
- **兼论源代码的披露与版税分离 ("察用分家")**
- 2024年7月21日

本文演示一个基于哈希数(杂凑数、Omnihash 全杂数), 让两方用户 (或三方以上) 签订 **去中心化数字合约** 的算法。 

A. 以下是一个 "察用分家" (数字资产的所有权与使用权分离) 的合约文字样板:

1. 你，作为公司或政府机构的人类代理人，可以阅读源代码而无需向作者支付费用；但如果你代表你的公司或机构将本程序用于商业目的，我们保留向你或你的公司/机构收取版税的权利。

2. 你的源代码副本应附带至少一份 Omnihash 合约，其中包含Omni*Agent 的 Omnihash 和您自己的 Omnihash，以授权您使用或修改所述源代码，否则您将因部署与第（1）条相关的源代码所造成的损害，承担您所在司法管辖区法律允许的最高处罚。

B. (A)部分的合约文字, 将被转化为哈希数(杂凑数、Omnihash 全杂数), 细节如以下 Omnihash 全杂数及 DJSON (去中心化JSON) 所述。

---

- Omnihash 中文定义

### Omnihash 与 DJSON Decentralised JSON (去中心化JSON)

1\. **DJSON Decentralise JSON（去中心化JSON）** 是一个 JSON 物件 (Object) 或其编码字符串，其中至少有一个字段是 Omnihash，即用户公钥的哈希值，代表该 JSON 对象的所有者。

- ```["2025-10-24T14:25:28.207+0000","like","CXAGcRKevA==","CXAGcRKevA==","HymWBzfj9A==",{"repo":"https://github.com/omnixtar/omnixtar.github.io/","contract":"https://omnixtar.github.io/contract/","ghh":"https://github.com/omnixtar/omnixtar.github.io/commit/19bb258190d57d6246840bf8ccc8957ae880e341","datetime":"2025-10-24T04:41:21.000Z"}]```


2\. DJSON 本身也可以被转化为哈希数，从而成为另一个 Omnihash。以上的 DJSON 将转化为以下的 Omnihash:

- **Omnihash: `DgV6_qnujw==`**

---

### Omnihash & DJSON 实操示范
- 按 F12 打开浏览器控制台。
- 运行以下代码：

- `omnistart()`\
`j0=["2025-10-24T14:25:28.207+0000","like","CXAGcRKevA==","CXAGcRKevA==","HymWBzfj9A==",{"repo":"https://github.com/omnixtar/omnixtar.github.io/","contract":"https://omnixtar.github.io/contract/","ghh":"https://github.com/omnixtar/omnixtar.github.io/commit/19bb258190d57d6246840bf8ccc8957ae880e341","datetime":"2025-10-24T04:41:21.000Z"}]`\
`s.push(JSON.stringify(j0))`\
`f('h53: b64: path:')`\
`s[s.length-1]`

- 浏览器控制台将输出 Omnihash:
  - **Omnihash: `DgV6_qnujw==`**

---

### 哈希数与合约文字的数学原理

1. 哈希数的存在意味着相关的输入文字已被输入哈希函数算式, 以得到该哈希数，此操作大概率是由第一方（或用户A）完成。

2. 第二方（除第一方之外的任何人，默认为您，用户B）可将输入原文输入相同的哈希函数算式，得到相同的哈希数，以验证 A方提供的哈希数的正确性，从而证明第一方确实执行了步骤（1）。

3. 步骤（2）意味着输入字符串与第一方的意图一致。

4. 步骤（3）是各方约定的默认推断。

---

- **如何为这篇 GitHub Markdown 文章添加点赞功能**

- ```["2025-02-11T14:25:28.207+0000","like","CXAGcRKevA==","CXAGcRKevA==","HymWBzfj9A==","HymWBzfj9A== s: x:"]```

在上述 DJSON 中，字段包括：
- 时间戳（timestamp）
- 动作（action）
- 当前用户 ID（current_user_ID）
- 上一条消息所有者（prev_msg_owner）
- 文档哈希（doc_hash）
- 消息（messages）

`doc_hash` 指文档 URL 的哈希值。

生成本文“点赞”DJSON 的步骤如下（附视频演示）：
- 将此网页副本保存为 Omni*Web 服务器上的本地文件。
- 为此文档生成 `doc_hash`。
- 以 `doc_hash` 为名创建该文档的子目录。
- 复制必要的文件和软链接。
- 在 [Omni*Web 服务器](https://yo6sgmfq7pfvvp2e4kcuhjtfg7wfltt63igwcukhbmuqm6lu3a3a.b32.i2p/h/E5bnwoBdvg==/?nn=z) 上使用 I2P（隐形互联网项目）和 `doc_hash` 打开本地副本。
- 从浏览器控制台启动 Omni*Shell。
- 使用用户的公钥刷新身份验证令牌。
- 使用 Omni*Shell Phoscript 命令从浏览器控制台发送“点赞”DJSON。

如果上述步骤看起来令人生畏，那么你应当知道——这正是全球社交媒体上点赞按钮被点击时，每秒发生数百万次的事情——**只不过，你——用户和自由软件程序员——并不拥有和运营其中的任何部分，因此也无法从中赚到任何钱。** 

……这引出了 Omni*Web 的目标——**创建一个真正去中心化的 Web 生态系统，由自由的个人用户和自由软件程序员拥有和运营**，能够为万亿美元级巨头企业（如 MMAGA——微软、Meta、亚马逊、谷歌和苹果的搞笑缩写）提供的所有现有服务提供自由替代方案。
