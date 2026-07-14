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

**Omnihash 与 DJSON (去中心化JSON)**

**DJSON（去中心化JSON）** 是一个 JSON 对象或其编码字符串，其中至少有一个字段是 Omnihash，即用户公钥的哈希值，代表该 JSON 对象的所有者。


- ```["2025-10-24T14:25:28.207+0000","like","CXAGcRKevA==","CXAGcRKevA==","HymWBzfj9A==",{"repo":"https://github.com/omnixtar/omnixtar.github.io/","contract":"https://omnixtar.github.io/contract/","ghh":"https://github.com/omnixtar/omnixtar.github.io/commit/19bb258190d57d6246840bf8ccc8957ae880e341","datetime":"2025-10-24T04:41:21.000Z"}]```


**Omnihash: `DgV6_qnujw==`**

2. DJSON 本身也可以被哈希，从而成为另一个 Omnihash。

---

**Omnihash & DJSON 实操示范**
- 按 F12 打开浏览器控制台。
- 运行以下代码：

- `omnistart()`\
`j0=["2025-10-24T14:25:28.207+0000","like","CXAGcRKevA==","CXAGcRKevA==","HymWBzfj9A==",{"repo":"https://github.com/omnixtar/omnixtar.github.io/","contract":"https://omnixtar.github.io/contract/","ghh":"https://github.com/omnixtar/omnixtar.github.io/commit/19bb258190d57d6246840bf8ccc8957ae880e341","datetime":"2025-10-24T04:41:21.000Z"}]`\
`s.push(JSON.stringify(j0))`\
`f('h53: b64: path:')`\
`s[s.length-1]`\

---

### 哈系数与合约的数学原理

1. 哈希数的存在意味着相关的输入文字已被输入哈希函数算式, 以得到该哈希数，此操作大概率是由第一方（或用户A）完成。

2. 第二方（除第一方之外的任何人，默认为您，用户B）可将输入原文输入相同的哈希函数算式，得到相同的哈希数，以验证 A方提供的哈希数的正确性，从而证明第一方确实执行了步骤（1）。

3. 步骤（2）意味着输入字符串与第一方的意图一致。

4. 步骤（3）是各方约定的默认推断。

为方便起见，在含义明确时我们省略“Omni”前缀。

DJSON 的键值对格式可作为字符串包含在 DJSON 的数组-字符串中。

在上述 DJSON 中，字段包括：
- 时间戳（timestamp）
- 动作（action）
- 当前用户 ID（current_user_ID）
- 上一条消息所有者（prev_msg_owner）
- 文档哈希（doc_hash）
- 消息（messages）

`doc_hash` 指文档 URL 的哈希值。

DJSON 或称去中心化 JSON，是 Omni*Web 的一项关键突破，其中代表各类数字资产和实体的 base64 哈希码——从用户标识符到社交媒体动作（如点赞、评论和分享）——被嵌入到看似普通的 JSON 字符串中。

去中心化 JSON 的底层是比特币地址的扩展——比特币地址本身源于公钥的哈希——将其用作用户标识符。将公钥哈希泛化为用户标识符，是去中心化计算领域的一项突破，因为此前基于区块链或加密货币的框架严重受制于矿工的垄断。

DJSON 之所以如此特别和强大，在于我们称之为哈希数和整数的“**类型保持性**”（type preservation property），这源于整数的环论性质——整数上的加法和乘法运算 invariably 产生整数结果。

上一段听起来可能像是典型的高中数学噩梦，但它正是比特币和其他加密货币以及新型去中心化社交媒体平台背后最大的秘密，如下例所示：

**如何为这篇 GitHub Markdown 文章添加点赞功能**

我们先给出答案，再作解释——我们假设有些读者已经等不及了：

```json
["2025-02-11T14:25:28.207+0000","like","CXAGcRKevA==","CXAGcRKevA==","HymWBzfj9A==","HymWBzfj9A== s: x:"]
```

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

Omni*Web 将尝试改进 Jekyll 的文档，正如我们也将为其他自由软件项目所做的那样。本文本身将展示 Omni*Web 旨在改进和推广 Jekyll 文档的若干功能，并介绍可用于扩展 Jekyll 功能的元编程特性。

Omni*Web 最重要的创新之一是**去中心化全栈编程（DFSP）**。

### 基于哈希的去中心化全栈编程

全栈编程源于协调 Web 浏览器前端和服务器后端功能的需求。多年来，众多框架被开发出来，前端模块现已涵盖移动设备环境。其复杂性呈指数级增长，我们现在提出一种基于哈希的去中心化编程范式，大幅简化整体全栈操作。

在深入细节之前，先概括整体思路：我们给出一个示例——用户对 GitHub 页面上的帖子进行评论回复，其中原始帖子的 URL、用户的评论以及用户的标识符均由哈希表示，这些哈希可通过哈希函数进一步哈希，生成一个代表整体交易的根哈希。用户可将交易 JSON 及其哈希提交给一个独立于 GitHub 页面服务器运行的服务器——只要该服务器理解并遵守由哈希确定的协议即可。用户可以用不同的哈希标识符声明同一身份，只要他们能通过使用每个身份对应的私钥验证密码来证明身份链即可。

#### Jekyll

简而言之，Jekyll 就像一个纯前端 MVC 框架，因此 GitHub 这样的巨型网站可以放心地向用户（主要是程序员）提供伪 MVC 功能。Jekyll 是 GitHub 上默认的 Markdown 文档解析器，非常强大，但遗憾的是其文档有些令人困惑，且不太容易调试。

- `cdw: ak: x:` —— 在昵称（adam）聊天框中输入以上内容。点击昵称（adam）按钮执行。
- `cdw:` —— 读取 SESSION() 中的所有冒号定义词。
- `ak:` —— `array_keys()` 从关联数组（类 JSON）中提取数组键。
- `x:` —— 通过 AJAX 将聊天框表达式发送到后端。

POST AJAX：
```json
[{"a_cmd": ["cdw:", "ak:", ","], "c_f0", "2025-02-03T22:17:03.2322", "h_f0", "EagWM1Y OQ=="}, {"r":["chtag","chn","atag","aot","add","chk_sp","auth_pass","auth_csv","w_cdw","r_cdw","u_cdw","req_auth","i_shm","shm_inc","chat","nick","req_auth_sc","b_cdw","ss_cdw","s_ss","uu_is","uu_mk","a_cache","a_comment","a_keyword","a_html","pbk_file","to_uuid","uid_chain","uu_chain","uuid_auth","a_A","a_AB","last_pbk","has_uu","uu_node","uu_1","key_u","f_is","fea_is","echo_on","a_vkn","id_url","p_o","p_i","common_t_add","r_v","price_dcnt","ls_url","parent_0","uu_l2","nn_sv","nn_r","u_u_nn","nn_u2","g_rg","g_rg_0","uu_l3","nn_uu","grhg","ctmp","hgnc","hf","hgie","xhash","cmdh","xhje","xh","hje","echo","wh","hg_,"Lcdwjs","m_para","h_mkdir","a_fw","a_w","h_b64","last","1ex","newest","old_record","mk_hash","fwnn1","fwnn2","wnn1","wnn2","htmp","mkhf","fkmod","rhf","hgp","chkhd","hbp","g_ohc","h_pwd","u_g","u_ff","u_spx","u_2fr","u_xfr","m_hcdw","rm_th","m_cdw","l_hcdw","r_hcdw","var_bv","search_user","g_x","B_AUTH","B_AUTH1","a_cmd","j_asset","l_var","a_key","nn_hash","x_jt","文","g_tt","x_r","g_tx","test_HCDW","g_last","t": "2025-02-04T06:17:03.295+0000", "h": "EykKGDq5KQ=="}]
```
OK。

### 去中心化货币化协作（Demon's Con）

有趣的是，英语和拉丁语的文字游戏如何发挥作用。“collaborate”（协作）的拉丁语词根是“con”+“laboro”，其中“con”是“cum”的变体，意为“with”（与……一起）。因此，**去中心化货币化协作（Decentralised Monetised Collaboration）** 缩写为 **“Demon's Con”** 。我们暂时将 Demon's Con 作为去中心化货币化协作的昵称，因为我们收到的反馈是，加密货币行业的名声已经很差，我们不妨用拉丁语文字游戏来吸引用户。

我们知道一些自称基督徒的人长期将密码学与恶魔（Demons）的工作联系在一起，比如民间传说中的 666。我们有兴趣与基督徒或任何自称信仰一神教的人进行对话，因为我们知道许多国家至今仍在施行可能单方面起诉任何人实施亵渎罪的法律，有些甚至可处以死刑——在公元 2025 年。

然而，提起基督教恶魔和 666 也吸引了大量批评基督教传统的人，以及受加密货币和去中心化技术负面宣传影响的人——请记住，华盛顿华尔街精英们更倾向于对美国民众进行洗脑，以维持他们在政治和金融领域的权力垄断。

**去中心化货币化协作（Demon Collab / Demon's Con）**

顾名思义，去中心化货币化协作由 3 个部分组成：
1. **去中心化基础设施**（Decentralised infrastructure）
2. **货币化法律框架**（Monetisation Legal Framework）
3. **协作交易**（Collaborative Transactions）

协作交易是最常见的，涵盖从 Google 文档到 TikTok 帖子的一切。去中心化基础设施包括从 I2P（隐形互联网项目）——它使每个人都能在不使用域名系统（DNS）的情况下设置连接到互联网的服务器主机——到 Omnihash（一种用于表示任何类型数字资产所有权的新型哈希算法）。货币化法律框架意味着采用去中心化哈希算法来建立数字法律合约，包括贷款、支付和投资。

将去中心化、货币化和协作这三个组成部分结合起来，我们能实现什么？

**去中心化 + 协作** 将产生一个**统一的协作交易接口**。通俗地说，它将使你能够将**所有**社交媒体平台的帖子和评论整合到一个统一的平台中。

例如，与人工智能系统聊天最大的瓶颈之一是：对话结果无法自动发布、共享并与其他用户或 AI 系统进行协作。而有了 Omni*DOC（其中 D 代表去中心化 Decentralisation，O 代表西班牙语中的黄金 Oro，C 代表协作 Collaboration），用户与任何 AI 系统的对话都可以像现有的社交媒体帖子一样被重新发布、共享、评论等。

Omni*DOC 的行为将与传统社交媒体平台截然不同——传统平台由运营方任命或雇佣版主来过滤不当言论。而在 Omni*DOC 上，用户自己可以决定选择自定义过滤器，过滤掉他们自己认为不当的帖子或评论。

Omni*DOC 的工作原理：
1. 首先，将任何 URL 转换为哈希码（可从 53 位到 512 位或更长）。
2. 其次，URL 的哈希（HURL）将在运行 Omni*Web 模块的服务器之间共享。
3. 第三，任何 Omni*Web 服务器都可以决定为给定的 URL 创建缓存副本以供进一步处理。
4. 到此阶段为止，Omni*Web 的行为类似于一个去中心化的缓存和搜索网络——即，不是由谷歌或微软这样的单一公司运营的巨型中心化搜索引擎，Omni*Web 的力量取决于参与的服务节点数量。它基本上像 Wayback Machine 一样工作，但其功能可以由任何用户或程序员扩展——只要他们遵守 Omni*Contract 的条件和协议。
5. 社交媒体功能从第 4 步开始存在。尽管不同社交媒体平台之间存在差异，但不同的用户界面元素本质上都是图论中可以表示为路径的函数。

进一步地，不同的路径被表示为哈希——因为整数的环论性质确保哈希可以作为输入连接，产生一个也是另一个整数的输出哈希。我们可以称此为**类型保持性**（type preservation），即输入和输出的类型得以保持。哈希的类型保持性使得管理社交媒体应用上的各类函数变得方便。

**前三阶段：** 多服务器扩展——在服务器地址中应用哈希。
**第四阶段：** 多功能扩展——在数据地址中应用哈希。

在传统的 MVC 编程中，函数调用和数据类型与数据的类型及其处理方式紧密耦合。而在哈希元编程中，一切都是哈希，且由于类型保持性，哈希之间相互兼容。由于类型保持性，哈希可应用于服务器地址和数据地址。

### Omni*DOC 示例

本文档本身就是 Omni*DOC 的一个示例——任何人都可以评论、分享、跟进等，或添加他们想要的功能。

例如：与 AI 的聊天结果、转发、评论、后续跟进。

Demon Collab / Demon's Con 链接到后端，后端使用 I2P 地址：
- 分享（share）
- 评论（comment）
- 点赞（like）
- 点踩（dislike）
- 等等。

**克隆（clone）！** —— 其他社交媒体平台不存在的全新功能。

`site.data.people[page.author]`

[Hello World!][1]
[1]:javascript:alert('Hello World')

[Omni*Web][1]
[1]:javascript:m_oxmobile()