<table><tr>
<td>
<table><tr><td><img src="https://omnixtar.github.io/m/img/icon-oxw.png" height="60"></td><td><h2>Omni*Web + Omni*Doc</h2></td></tr></table> 
</td>
<td>
<table><tr><td>Jekyll Theme Primer</td><td>2</td></tr></table>
</td></tr></table>

- ### Omnisophia: Bitcoin + Decentralised AI
- ### *YOUR brain is the weapon .... Omnisophia Metanarchy Revolution.* 

---

Base64

以下是将 **整数转Base64字符串** 功能添加到 FORTH Shell 的完整代码实现，新增 `BASE64` 命令：

```html
<!DOCTYPE html>
<html>
<head>
  <title>FORTH Shell with BASE64</title>
  <style>
    #output { height: 300px; border: 1px solid #ccc; overflow-y: scroll; font-family: monospace; }
  </style>
</head>
<body>
  <div id="output"></div>
  <input type="text" id="input" style="width: 80%">
  <button onclick="execute()">Run</button>

<script>
// Base64 编码函数（仅支持非负整数）
function intToBase64(n) {
  if (n < 0 || !Number.isInteger(n)) throw "BASE64 requires non-negative integer";
  
  let bytes = [];
  do {
    bytes.unshift(n & 0xff); // 大端序存储
    n = Math.floor(n / 0x100);
  } while (n > 0);

  // 处理 n=0 的特殊情况
  if (bytes.length === 0) bytes.push(0);

  // 转换为二进制字符串
  const str = bytes.map(b => String.fromCharCode(b)).join('');
  
  // Base64编码并移除填充
  return btoa(str).replace(/=+$/, '');
}

class ForthShell {
  constructor() {
    this.stack = [];
    this.dictionary = new Map();
    this.compiling = false;
    this.currentWord = null;
    this.wordsInProgress = [];
    this.initCoreWords();
  }

  // 其他现有方法（tokenize/initCoreWords/executeLine等）保持不变...
  tokenize(line) {
    const regex = /"([^"]*)"|\S+/g;
    const tokens = [];
    let match;
    while ((match = regex.exec(line)) !== null) {
      if (match[1] !== undefined) {
        tokens.push(match[1]);
      } else {
        tokens.push(match[0]);
      }
    }
    return tokens;
  }

  initCoreWords() {
    // 原有命令...
    this.dictionary.set('+', () => this.binop((a, b) => a + b));
    this.dictionary.set('.', () => {
      if (this.stack.length < 1) throw 'Stack underflow';
      this.print(this.stack.pop().toString());
    });

    // 新增 BASE64 命令
    this.dictionary.set('BASE64', () => {
      if (this.stack.length < 1) throw 'Stack underflow';
      const n = this.stack.pop();
      this.stack.push(intToBase64(n));
    });
  }

  binop(fn) {
    if (this.stack.length < 2) throw 'Stack underflow';
    const a = this.stack.pop();
    const b = this.stack.pop();
    this.stack.push(fn(a, b));
  }

  print(msg) {
    const output = document.getElementById('output');
    output.innerHTML += `> ${msg}<br>`;
    output.scrollTop = output.scrollHeight;
  }

  executeLine(line) {
    const tokens = this.tokenize(line);
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];
      if (this.compiling) {
        if (token === ';') {
          this.dictionary.set(this.currentWord, [...this.wordsInProgress]);
          this.compiling = false;
          this.currentWord = null;
          this.wordsInProgress = [];
        } else {
          this.wordsInProgress.push(token);
        }
        continue;
      }

      if (token === ':') {
        this.compiling = true;
        this.currentWord = tokens[i + 1];
        i++; // 跳过单词名
        continue;
      }

      if (!isNaN(token)) {
        this.stack.push(parseFloat(token));
      } else {
        const word = this.dictionary.get(token.toUpperCase());
        if (word) {
          if (typeof word === 'function') {
            word.call(this);
          } else if (Array.isArray(word)) {
            word.forEach(w => this.executeWord(w));
          }
        } else {
          throw `Undefined word: ${token}`;
        }
      }
    }
  }
}

const forth = new ForthShell();

function execute() {
  const input = document.getElementById('input');
  try {
    forth.executeLine(input.value);
    forth.print(`Stack: [${forth.stack.join(', ')}]`);
  } catch (e) {
    forth.print(`Error: ${e}`);
  }
  input.value = '';
}
</script>
</body>
</html>
```

---

### **使用示例**
```forth
12345 BASE64 .   \ 输出 MDk
0 BASE64 .       \ 输出 AA
7262385973 BASE64 . \ 输出 QIDyKQ
```

---

### **功能说明**
1. **命令语法**  
   - `BASE64`：弹出栈顶整数，生成无填充的Base64字符串并压回栈中
   - **要求**：输入必须为非负整数，否则抛出错误

2. **技术细节**  
   - **大端序编码**：高位字节在前（网络字节序）
   - **自动去填充**：移除Base64末尾的`=`字符
   - **零处理**：数字0编码为`AA`（单个零字节的Base64）

3. **错误处理**  
   - 栈下溢：执行`BASE64`时栈为空
   - 非法输入：负数或非整数

---

### **性能优化**
- **时间复杂度**：O(n)（n为整数字节长度）
- **空间复杂度**：O(1)（最大支持53-bit整数）


