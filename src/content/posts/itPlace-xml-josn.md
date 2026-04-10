---
title: XML 和 JSON 学习
published: 2025-11-12
draft: false
description: 用比较轻松的方式讲清 XML 和 JSON 的区别、用途和基本写法。
tags: [code, xml, json]
category: 计算机科学
author: Pars, gork
pinned: true
---
# XML 和 JSON 入门

## 引言

如果你第一次接触数据格式，XML 和 JSON 基本就是绕不开的两位老朋友。XML 更像“把结构写清楚”，JSON 更像“把数据写轻一点”。这篇文章不想讲得太学术，只想帮你快速知道它们各自适合干什么、长什么样、什么时候该用哪个。

**为什么先看它们？**
- XML 适合先理解层级和标签。
- JSON 适合再理解键值对和接口传输。
- 两者放在一起看，差异会更直观。

**准备**：一个文本编辑器就够了，VS Code、记事本、在线校验器都可以。

**建议**：边看边改示例，理解会比单纯背概念快很多。

---

## 第一部分：XML入门

XML是自描述的标记语言，用标签定义数据。核心规则：标签配对、嵌套、属性。

### 1.1 第一个XML：简单文档

基本结构：
- `<?xml version="1.0" encoding="UTF-8"?>`：声明。
- 根元素：唯一顶级标签。
- 关闭标签：`<tag>内容</tag>`。

示例（书籍目录）：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<library>
    <book id="1">
        <title>Hello World</title>
        <author>John Doe</author>
        <year>2023</year>
    </book>
    <book id="2">
        <title>XML Basics</title>
        <author>Jane Smith</author>
        <year>2024</year>
    </book>
</library>
```

**验证**：复制到[XML Validator](https://www.xmlvalidation.com/)检查语法。

**练习**：添加第三本书，包含`<price>29.99</price>`。

### 1.2 元素、属性与命名空间

- 元素：标签内容，如`<title>Text</title>`。
- 属性：标签内附加，如`id="1"`。
- 命名空间：避免冲突，用`xmlns`。

示例（带属性和命名空间）：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<library xmlns:dc="http://purl.org/dc/elements/1.1/">
    <book id="1" dc:creator="John Doe">
        <title>Hello World</title>
        <year>2023</year>
    </book>
</library>
```

**规则**：属性用引号；元素名区分大小写；无重叠标签。

**练习**：为书籍添加`genre="Fiction"`属性。

### 1.3 DTD与XML Schema（简单验证）

DTD（Document Type Definition）：定义结构。
```xml
<!DOCTYPE library [
    <!ELEMENT library (book+)>
    <!ELEMENT book (title, author, year)>
    <!ELEMENT title (#PCDATA)>
    <!ELEMENT author (#PCDATA)>
    <!ELEMENT year (#PCDATA)>
    <!ATTLIST book id ID #REQUIRED>
]>
```
置于XML前：`<!DOCTYPE library SYSTEM "library.dtd">`（需外部文件）。

XML Schema（XSD）：更强大，用XML写。
示例片段：
```xml
<xs:schema xmlns:xs="http://www.w3.org/2001/XMLSchema">
    <xs:element name="library">
        <xs:complexType>
            <xs:sequence>
                <xs:element name="book" maxOccurs="unbounded">
                    <xs:complexType>
                        <xs:sequence>
                            <xs:element name="title" type="xs:string"/>
                            <xs:element name="author" type="xs:string"/>
                            <xs:element name="year" type="xs:integer"/>
                        </xs:sequence>
                        <xs:attribute name="id" type="xs:string" use="required"/>
                    </xs:complexType>
                </xs:element>
            </xs:sequence>
        </xs:complexType>
    </xs:element>
</xs:schema>
```

**练习**：用在线工具验证你的书籍XML是否符合简单DTD。

### 1.4 XPath查询

XPath：XML的“查询语言”，选元素如CSS。
- `/library/book[1]/title`：第一个书标题。
- `//author`：所有作者。

示例（用浏览器DevTools或工具测试）：
在XML中，XPath `/library/book[@id='1']/title` 返回 "Hello World"。

**练习**：写XPath选所有2023年书籍。

### 1.5 实用项目：产品目录XML

整合知识：
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE catalog [
    <!ELEMENT catalog (product+)>
    <!ELEMENT product (name, price, description)>
    <!ELEMENT name (#PCDATA)>
    <!ELEMENT price (#PCDATA)>
    <!ELEMENT description (#PCDATA)>
]>
<catalog>
    <product id="p1">
        <name>Laptop</name>
        <price>999.99</price>
        <description>High-performance laptop.</description>
    </product>
    <product id="p2">
        <name>Mouse</name>
        <price>29.99</price>
        <description>Wireless mouse.</description>
    </product>
</catalog>
```

**扩展**：添加XSD验证价格为正数。用XPath查询总产品数。

**XML小结**：适合复杂文档，但冗长。常见错误：未闭合标签、非法字符。

---

## 第二部分：从XML过渡到JSON

XML和JSON都结构化数据，但JSON更简洁：
- **相似**：层次（XML元素 → JSON对象/数组）。
- **不同**：
  - XML标签 → JSON键（字符串）。
  - 无属性/命名空间；纯键值。
  - JSON用`{}`对象、`[]`数组。
  - 验证：XML用DTD/XSD，JSON用Schema（JSON Schema）。

**迁移提示**：
- XML `<book><title>Hi</title></book>` → JSON `{"book": {"title": "Hi"}}`。
- 工具：在线转换器如[XML to JSON](https://codebeautify.org/xmltojson)。

示例转换：
XML：
```xml
<book><title>Hello</title><author>John</author></book>
```
JSON：
```json
{
  "book": {
    "title": "Hello",
    "author": "John"
  }
}
```

**验证JSON**：用[JSONLint](https://jsonlint.com/)。

---

## 第三部分：JSON扩展（高级用法）

JSON轻便，易解析。核心：对象（键值对）、数组、基本类型（string, number, boolean, null）。

### 3.1 基本结构与嵌套

对象：
```json
{
  "name": "Alice",
  "age": 30,
  "hobbies": ["reading", "coding"]
}
```

嵌套：
```json
{
  "library": {
    "books": [
      {
        "id": 1,
        "title": "Hello World",
        "author": {
          "name": "John Doe",
          "email": "john@example.com"
        }
      }
    ]
  }
}
```

**练习**：创建用户配置文件JSON，含地址数组。

### 3.2 JSON Schema验证

类似XML Schema：
```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "name": {"type": "string"},
    "age": {"type": "integer", "minimum": 0}
  },
  "required": ["name", "age"]
}
```

用在线工具验证JSON。

**练习**：为书籍JSON写Schema，要求`year` > 1900。

### 3.3 JSONPath查询

JSON的XPath类似：
- `$.library.books[0].title`：第一本书标题。
- `$..author.name`：所有作者名。

示例：`$.library.books[?(@.id == 1)].title` 选ID=1的标题。

**练习**：用[JSONPath Online Evaluator](https://jsonpath.com/)查询嵌套JSON。

### 3.4 编程集成（JavaScript/Python示例）

JSON天生编程友好。

JavaScript（解析/生成）：
```javascript
// 解析
const jsonStr = '{"name": "Alice", "age": 30}';
const obj = JSON.parse(jsonStr);
console.log(obj.name);  // Alice

// 生成
const newObj = {name: "Bob", age: 25};
const jsonStr2 = JSON.stringify(newObj, null, 2);  // 美化
console.log(jsonStr2);
```

Python：
```python
import json

# 解析
json_str = '{"name": "Alice", "age": 30}'
obj = json.loads(json_str)
print(obj['name'])  # Alice

# 生成
new_obj = {'name': 'Bob', 'age': 25}
json_str2 = json.dumps(new_obj, indent=2)
print(json_str2)
```

**练习**：写JS脚本从JSON文件读数据，输出作者列表。

### 3.5 实用项目：API响应模拟

模拟Web API JSON：
```json
{
  "status": "success",
  "data": {
    "users": [
      {
        "id": 1,
        "name": "Alice",
        "posts": [
          {"title": "First Post", "likes": 10},
          {"title": "Second Post", "likes": 5}
        ]
      }
    ],
    "total": 1
  }
}
```


---
此文章由本人学习配置语言时的总结整理而来，由gork辅助优化格式。

