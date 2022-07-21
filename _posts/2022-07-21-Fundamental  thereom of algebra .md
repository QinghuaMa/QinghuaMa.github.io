---
layout: single
title: 代数基本定理(fundamental theorem of algebra)
date: 2022-07-21 11:17:55 +0800
categories: 
 - Mathematics
tags: 
 - Algebra
toc: false
---

The **fundamental theorem of algebra**, also known as d'Alembert's theorem, or the d'Alembert–Gauss theorem, states that <u>every non-constant single-variablepolynomial with complex coefficients has at least one complex root</u>. This includes polynomials with real coefficients, since every real number is a complex number with its imaginary part equal to zero.

The theorem is also stated as follows: <u>every non-zero, single-variable, degree n polynomial with complex coefficients has, counted with multiplicity, exactly n complex roots</u>. The equivalence of the two statements can be proven through the use of successive polynomial division.

> 最高次项系数不为0的 $n$ 次复系数单变量多项式有且仅有 $n$ 个复数根，其中重根按重数算。

There are several equivalent formulations of the theorem:

- Every univariate polynomial(一元多项式) of positive degree with real coefficients has at least one complex root.
- Every univariate polynomial of positive degree with complex coefficients has at least one complex root.

---

<br>

简单地讲，**在复数域内**，任意一个 $n$ 次一元多项式都有 $n$ 个根。

需要注意的是：

1. 在实数域内，并不保证结论成立，很简单地，方程 $x^2+1=0$ 在实数域内就没有根；

2. 对于多变量的情形，比如对于四次多项式 $x^2y^2-1=0$，该定理并不给出根的存在情况；

3. 这个定理是个**存在性定理**，并不给出根的精确位置。实际上，Abel–Ruffini theorem 证明了五次以上的多项式不存在代数解

   > **Abel–Ruffini theorem** $^{[2]}$
   >
   > In mathematics, the Abel–Ruffini theorem (also known as Abel's impossibility theorem) states that there is no solution in radicals to general polynomial equations of degree five or higher with arbitrary coefficients. Here, general means that the coefficients of the equation are viewed and manipulated as indeterminates(variable).
   >
   > The theorem is named after Paolo Ruffini, who made an incomplete proof in 1799, (which was refined and completed in 1813 and accepted by Cauchy) and Niels Henrik Abel, who provided a proof in 1824.
   >
   > <br>
   >
   > BTW，3Blue1Brown 频道在介绍群论的时候提到过该定理的一个证明方式。群论(Group theory)是一门研究对称性的一门学科，从群论的观点看，假设五次方程真的有求根公式，而这个求根公式只用到了四则运算和根号，那么5个元素的置换群$S_5$能够分解成一类特殊的单群，即素数阶循环群(cyclic groups of prime order)，但是如果讲 $S_5$  **真正地** 分解， 则用到了另一类单群，而带根号的求根公式中绝不会出现这种单群，根据这个矛盾推出了假设——五次方程有求根公式——是错误的。当然，其中略去的细节需要相当长的时间才能讲完😂

有趣的是，虽然这个定理叫做代数学基本定理，但是没有一种纯代数的方式能够证明它，都需要数学分析([Mathematical Analysis](https://en.wikipedia.org/wiki/Mathematical_analysis))的概念；并且它也不是现代代数的基本定理：

> Despite its name, there is no purely algebraic proof of the theorem, since any proof must use some form of the analytic **completeness of the real numbers**, which is not an algebraic concept. Additionally, it is not fundamental for <u>modern algebra</u>; its name was given at a time when algebra was synonymous with theory of equations.

---

**参考**

[1] [Fundamental theorem of algebra-Wikipedia](https://en.wikipedia.org/wiki/Fundamental_theorem_of_algebra)

[2] [Abel–Ruffini theorem-Wikipedia](https://en.wikipedia.org/wiki/Abel%E2%80%93Ruffini_theorem)

[3] 3Blue1Brown. [【官方双语】群论与808017424794512875886459904961710757005754368000000000](https://www.bilibili.com/video/BV1Rh411R7KL?spm_id_from=333.999.0.0&vd_source=8aeddead7f39b0189fff9b14fa090a75)