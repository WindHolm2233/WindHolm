---
title: C#的核心思想——面向对象
published: 2025-11-29
draft: false
description: 这篇博客为编程新手提供C#的基础教程，帮助你理解核心思想———面向对象。
tags: [编程, C#, 计算机科学]
category: 计算机科学
author: Pars
pinned: false
---
# C#的核心思想——面向对象

本指南是对 C# 语言核心概念的深度扩展，重点聚焦类（Class）、继承（Inheritance）、接口（Interface）等面向对象编程（OOP）基础。相比基础版，本版添加了更多子主题、访问修饰符细节、构造函数重载、多态机制、显式接口实现、泛型支持、异常处理集成等高级用法。所有示例基于 C# 11+ 版本（兼容 .NET 8+），并包含完整可运行代码片段。建议使用 Visual Studio 或 Rider IDE 进行测试。本文适用于编程思想的入门，对于C#的使用特性会在后续更.

指南结构：
- **理论解释**：概念定义与原理。
- **语法与示例**：详细代码 + 输出解释。
- **注意事项**：常见陷阱与最佳实践。
- **扩展用法**：高级变体。

更多资源：参考 [Microsoft C# 官方文档](https://learn.microsoft.com/zh-cn/dotnet/csharp/)。

## 1. 类（Class）

类是 C# OOP 的基石，用于封装数据和行为。类定义对象的结构，包括字段（数据存储）、属性（访问控制）、方法（行为逻辑）、构造函数（初始化）和析构函数（清理）。C# 类支持访问修饰符（Access Modifiers）控制可见性：`public`（公开）、`private`（私有，默认）、`protected`（保护，仅派生类访问）、`internal`（程序集内可见）、`protected internal`（程序集内或派生类可见）、`private protected`（派生类且同一程序集）。

### 1.1 基本语法与访问修饰符
- 类默认是 `internal`。
- 成员默认是 `private`。

#### 示例：完整类定义（包含访问修饰符）
```csharp
using System;

// 公共类
public class Employee
{
    // 私有字段（封装数据）
    private string id;
    private decimal salary;  // protected internal 示例：程序集内或派生类可见

    // 公共属性（自动实现，C# 3.0+）
    public string Name { get; set; } = string.Empty;

    // 保护属性（仅派生类访问）
    protected int DepartmentId { get; set; }

    // 内部属性（仅当前程序集可见）
    internal DateTime HireDate { get; private set; }  // 私有 setter

    // 构造函数重载（多种初始化方式）
    public Employee()  // 默认构造函数
    {
        id = Guid.NewGuid().ToString();
        HireDate = DateTime.Now;
    }

    public Employee(string name, decimal salary) : this()  // 链式调用默认构造函数
    {
        Name = name;
        Salary = salary;  // 通过属性设置，触发验证
    }

    // 属性带验证的 setter
    public decimal Salary
    {
        get => salary;
        private set  // 私有 setter，仅类内部修改
        {
            if (value < 0)
                throw new ArgumentException("薪资不能为负数");
            salary = value;
        }
    }

    // 私有方法（辅助逻辑）
    private void ValidateEmployee()
    {
        if (string.IsNullOrEmpty(Name))
            throw new InvalidOperationException("姓名不能为空");
    }

    // 公共方法
    public void Promote(decimal raise)
    {
        ValidateEmployee();
        Salary += raise;  // 私有 setter 允许内部访问
        Console.WriteLine($"{Name} 晋升，薪资增加 {raise:C}。");
    }

    // 静态成员（类级）
    public static int TotalEmployees { get; private set; } = 0;

    // 静态构造函数（初始化静态成员）
    static Employee()
    {
        Console.WriteLine("Employee 类静态初始化。");
    }
}

// 使用类
class Program
{
    static void Main()
    {
        Employee emp = new Employee("李四", 5000m);
        emp.Promote(1000m);  // 输出: 李四 晋升，薪资增加 ￥1,000.00。

        Console.WriteLine(Employee.TotalEmployees);  // 输出: 0（静态计数需手动增）
        Employee.TotalEmployees++;  // 手动更新
    }
}
```

#### 输出解释
- 静态构造函数在首次访问类时运行。
- 属性 setter 验证确保数据完整性。

### 1.2 注意事项
- **不可变类**（C# 9.0+）：使用 `init` 仅允许初始化时设置，如 `public string Name { get; init; }`。
- **记录类型**（Record，C# 9.0+）：简洁不可变类，如 `public record Person(string Name, int Age);`（自动生成相等比较）。
- **嵌套类**：类内定义类，如 `public class Outer { private class Inner { } }`（仅 Outer 访问）。
- **部分类**（Partial Class）：跨文件定义，如 `partial class MyClass { }` 和另一个文件 `partial class MyClass { }`（用于代码生成）。
- 陷阱：忘记 `new` 关键字实例化会导致编译错误。

### 1.3 扩展用法：析构函数与 IDisposable
类可实现 `IDisposable` 接口进行资源管理（详见接口部分）。
```csharp
public class ResourceHolder : IDisposable
{
    private bool disposed = false;

    public void Dispose()
    {
        if (!disposed)
        {
            // 清理资源
            Console.WriteLine("资源已释放。");
            disposed = true;
        }
    }

    ~ResourceHolder()  // 析构函数（Finalizer，垃圾回收时调用）
    {
        Dispose();  // 确保清理
    }
}
```
使用 `using` 语句：`using var holder = new ResourceHolder();`（自动 Dispose）。

## 2. 继承（Inheritance）

继承实现“Is-A”关系（如 Dog 是 Animal），支持代码复用和多态。C# 只支持单继承（类继承一个基类），但接口多继承。关键：虚方法（virtual）允许重写（override），`new` 隐藏基类方法。

### 2.1 基本语法与多态
- 使用 `:` 继承。
- `virtual` / `override` 启用运行时多态。
- `base` 访问基类成员。

#### 示例：多态继承（包含隐藏方法）
```csharp
using System;

// 基类
public class Shape
{
    protected string Color { get; set; } = "黑色";

    public Shape(string color)
    {
        Color = color;
    }

    // 虚方法（多态基础）
    public virtual double CalculateArea() => 0;  // 默认实现

    // 普通方法（用 new 隐藏）
    public void DisplayInfo()
    {
        Console.WriteLine($"形状颜色: {Color}");
    }
}

// 派生类1
public class Circle : Shape
{
    public double Radius { get; set; }

    public Circle(double radius, string color) : base(color)
    {
        Radius = radius;
    }

    // 重写虚方法（多态）
    public override double CalculateArea()
    {
        return Math.PI * Radius * Radius;
    }

    // 隐藏基类方法（new 关键字，编译时绑定）
    public new void DisplayInfo()
    {
        Console.WriteLine($"圆形，半径: {Radius}，颜色: {Color}");
    }
}

// 派生类2（sealed 防止进一步继承）
public sealed class Square : Shape
{
    public double Side { get; set; }

    public Square(double side) : base("蓝色")
    {
        Side = side;
    }

    public override double CalculateArea() => Side * Side;

    // protected 方法示例（仅派生类访问，但 Square 已 sealed）
    protected void InternalMethod() { }
}

// 使用多态
class Program
{
    static void Main()
    {
        Shape[] shapes = {
            new Circle(5, "红色"),
            new Square(4)
        };

        foreach (var shape in shapes)
        {
            Console.WriteLine($"面积: {shape.CalculateArea():F2}");  // 多态调用
            shape.DisplayInfo();  // Circle 用 new，Square 用 base
        }
        // 输出:
        // 面积: 78.54
        // 圆形，半径: 5，颜色: 红色
        // 面积: 16.00
        // 形状颜色: 蓝色
    }
}
```

#### 输出解释
- 多态：`shape.CalculateArea()` 根据实际类型调用重写方法。
- `new` vs `override`：`new` 是隐藏（静态绑定），不影响基类引用。

### 2.2 注意事项
- **构造函数链**：派生类必须调用 `base()`，否则隐式调用基类无参构造函数。
- **sealed 方法**：防止重写，如 `public sealed override void Method() { }`。
- **基类访问**：`base.Property` 或 `base.Method()`。
- 陷阱：循环继承（A 继承 B，B 继承 A）编译错误。
- **抽象继承**：详见抽象类部分。

### 2.3 扩展用法：对象初始化器与工厂模式
- 对象初始化器（C# 3.0+）：`var circle = new Circle { Radius = 5, Color = "绿色" };`（需公共 setter）。
- 工厂方法：静态方法创建实例，如 `public static Shape CreateCircle(double r) => new Circle(r, "默认");`。

## 3. 接口（Interface）

接口定义契约（合同），强制实现类提供特定成员。接口是隐式抽象的，支持多重实现（一个类实现多个接口）。C# 8.0+ 支持默认实现和静态成员。

### 3.1 基本语法与多重实现
- 接口成员默认 `public abstract`。
- 类用 `:` 实现。

#### 示例：多接口实现与默认方法
```csharp
using System;

// 接口1：形状契约
public interface IShape
{
    double Area { get; }  // 属性

    void Draw();  // 抽象方法

    // 默认实现（C# 8.0+）
    void Validate() => Console.WriteLine("形状验证通过。");
}

// 接口2：可序列化
public interface ISerializable
{
    string Serialize();  // 抽象方法

    // 静态方法（C# 8.0+）
    static string GetTypeName(Type t) => t.Name;
}

// 接口继承（IAdvanced 继承 IShape）
public interface IAdvancedShape : IShape
{
    void Rotate(double angle);
}

// 类实现多接口（显式实现避免冲突）
public class Triangle : IShape, ISerializable, IAdvancedShape
{
    public double Base { get; set; }
    public double Height { get; set; }

    public Triangle(double b, double h)
    {
        Base = b; Height = h;
    }

    // 隐式实现（公共）
    public double Area => 0.5 * Base * Height;

    public void Draw() => Console.WriteLine("绘制三角形。");

    public void Rotate(double angle) => Console.WriteLine($"旋转 {angle} 度。");

    // 显式实现（仅通过接口访问，避免命名冲突）
    string ISerializable.Serialize() => $"Triangle(Base={Base}, Height={Height})";

    // 调用默认方法
    public void UseDefault() => Validate();  // 通过接口调用
}

// 使用
class Program
{
    static void Main()
    {
        Triangle tri = new Triangle(3, 4);
        Console.WriteLine($"面积: {tri.Area}");  // 6
        tri.Draw();  // 绘制三角形。
        tri.Rotate(90);  // 旋转 90 度。

        // 显式转换访问
        if (tri is ISerializable serial)
            Console.WriteLine(serial.Serialize());  // Triangle(Base=3, Height=4)

        // 静态接口成员
        Console.WriteLine(ISerializable.GetTypeName(typeof(Triangle)));  // Triangle

        tri.UseDefault();  // 形状验证通过。
    }
}
```

#### 输出解释
- 显式实现：`((ISerializable)tri).Serialize()` 访问私有实现。
- 默认方法：接口提供体，但类可重写。

### 3.2 注意事项
- **显式 vs 隐式**：显式用于冲突，如两个接口同名方法。
- **接口继承**：多接口继承，如 `interface IAll : IShape, IColor { }`。
- **泛型接口**：`interface IRepository<T> { T GetById(int id); }`（详见扩展）。
- 陷阱：接口不能有字段（仅属性/方法），不能实例化。
- **协变/逆变**（C# 4.0+）：`interface IOutput<out T>`（out 用于返回，in 用于参数）。

### 3.3 扩展用法：泛型接口
```csharp
public interface IRepository<T> where T : class  // 约束：T 必须是类
{
    T Get(int id);
    void Add(T item);
    IEnumerable<T> GetAll();
}

public class UserRepository : IRepository<User>
{
    private List<User> users = new();

    public User Get(int id) => users.FirstOrDefault(u => u.Id == id);
    public void Add(User item) => users.Add(item);
    public IEnumerable<User> GetAll() => users;
}

// User 类简例
public class User { public int Id { get; set; } public string Name { get; set; } }
```
使用：`var repo = new UserRepository(); var user = repo.Get(1);`。

## 4. 抽象类（Abstract Class）

抽象类提供部分实现，不能实例化，用于共享基类代码。结合虚/抽象方法使用，支持单继承。

### 4.1 基本语法
- `abstract class` 定义。
- 抽象成员无实现，必须派生类提供。

#### 示例：抽象类与异常集成
```csharp
using System;

public abstract class DatabaseConnection
{
    protected string ConnectionString { get; set; }

    protected DatabaseConnection(string connStr)
    {
        ConnectionString = connStr ?? throw new ArgumentNullException(nameof(connStr));
    }

    // 抽象方法
    public abstract void Connect();

    // 虚方法（可选重写）
    public virtual void Disconnect()
    {
        Console.WriteLine("断开连接。");
    }

    // 具体方法（带异常处理）
    public void ExecuteQuery(string query)
    {
        try
        {
            Connect();
            Console.WriteLine($"执行查询: {query}");
        }
        catch (Exception ex)
        {
            Console.WriteLine($"查询失败: {ex.Message}");
            throw;  // 重新抛出
        }
        finally
        {
            Disconnect();
        }
    }
}

public class SqlConnection : DatabaseConnection
{
    public SqlConnection(string connStr) : base(connStr) { }

    public override void Connect()
    {
        if (string.IsNullOrEmpty(ConnectionString))
            throw new InvalidOperationException("连接字符串无效");
        Console.WriteLine("SQL 连接建立。");
    }

    public override void Disconnect()  // 重写虚方法
    {
        base.Disconnect();
        Console.WriteLine("SQL 特定清理。");
    }
}

// 使用
class Program
{
    static void Main()
    {
        var sql = new SqlConnection("Server=localhost;");
        sql.ExecuteQuery("SELECT * FROM Users");  
        // 输出: SQL 连接建立。
        // 执行查询: SELECT * FROM Users
        // 断开连接。
        // SQL 特定清理。
    }
}
```

### 4.2 注意事项
- 抽象类可有构造函数，但不能直接 `new`。
- 至少一个抽象成员，否则用普通类。
- 陷阱：派生类未实现抽象方法 → 编译错误。

### 4.3 扩展用法：模板方法模式
抽象类定义算法骨架，子类实现步骤：
```csharp
public abstract class DataProcessor
{
    public void Process()  // 模板方法
    {
        ValidateData();
        var data = LoadData();
        ProcessData(data);
        SaveData(data);
    }

    protected abstract void ValidateData();
    protected abstract object LoadData();
    protected virtual void ProcessData(object data) { /* 默认 */ }
    protected abstract void SaveData(object data);
}
```

## 5. 其他高级用法

### 5.1 泛型（Generics）集成
- 类/接口/方法泛型：`public class Stack<T> { private List<T> items = new(); public void Push(T item) => items.Add(item); }`。
- 约束：`where T : new()`（需无参构造函数）、`where T : IComparable`。
- 示例：`Stack<int> intStack = new(); intStack.Push(42);`。

### 5.2 委托（Delegate）与事件（Event）
- 委托：类型安全的函数指针，如 `public delegate void Action(int x);`。
- 事件：基于委托的发布者，如类中 `public event Action<int> OnChanged;`。
```csharp
public class Publisher
{
    public event EventHandler<int> DataChanged;

    public void RaiseEvent(int value)
    {
        DataChanged?.Invoke(this, value);  // 安全调用
    }
}
```

### 5.3 LINQ 与 Lambda（简要）
- 查询语法：`var query = from e in employees where e.Salary > 5000 select e;`。
- Lambda：`employees.Where(e => e.Salary > 5000);`（用于方法/属性）。

### 5.4 异常处理扩展
- 自定义异常：`public class CustomException : Exception { public CustomException(string msg) : base(msg) { } }`。
- 全局处理：使用 `AppDomain.CurrentDomain.UnhandledException`。

## 总结
- **类**：封装与访问控制的核心。
- **继承**：多态与复用的强大工具（单继承 + 接口多态）。
- **接口**：松耦合契约，支持默认与泛型。
- **抽象类**：半实现基类，桥接具体与抽象。

本文适用于编程思想的入门，对于C#的使用特性会在后续更
