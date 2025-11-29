---
title:  C#的核心思想——面向对象
published: 2025-11-29
draft: false
description: 这篇博客为编程新手提供C#的基础教程，帮助你理解核心思想———面向对象。
tags: [编程, C#, 面向对象 ,计算机科学]
image: /assets/images/cpp.png
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

    // 
