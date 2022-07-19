20220708



# 统计量

## 统计量的意义

为了研究一个问题而收集数据，数据就是样本。通过确定样本分布而建立统计模型。但要具体实施统计推断，则要依靠依据具体数值的样本。样本本身是一堆杂乱无章的数字，要对这些数字进行加工整理，计算出一些量，用于统计推断。这种由样本计算出来的量，把样本中与所要解决的问题有关的信息集中起来了。

在统计上，把凡是由样本算出来的量称为**统计量**，或者说，统计量就是样本的函数。并且，统计量只依赖于样本，而不能与任何未知的量相关，特别是不能依赖于未知参数。因为统计量的作用就在于对未知参数进行推断。

有用的统计量都是”有的放矢“的，是针对某种需要而构造的。笼统地讲，所提出的统计量应该最好集中了与问题有关的信息。这其实并不容易做到，因为在实践中，往往最初是从直观或某些一般性原则考虑提出统计量，再考察它是否在某种意义下较好地集中了样本中与问题有关的信息量。



## 重要的统计量

**（一）样本均值**

设样本为 $X_1, \cdots, X_n$ ，则 
$$
\overline{X}=\dfrac1n\sum_{i=1}^nX_i
$$
称为样本均值。在样本 $X_1, \cdots, X_n$ 独立同分布的情况下，样本均值常用于估计总体分布的均值，或者检验有关总体分布均值的假设。



**（二）样本方差**

设样本为 $X_1, \cdots, X_n$ ，则
$$
S^2=\dfrac1{n-1}\sum_{i=1}^n(\overline{X}-X_i)^2 \label{samplevariance}
$$
称为样本方差。在样本 $X_1, \cdots, X_n$ 独立同分布的情况下，样本方差可用于估计总体分布的方差。

式XX中的 $n-1$ 称为 $S^2$ 的自由度。

> 自由度的解释有3种：
>
> 1. 一共有 $n$ 个数值 $X_1, \cdots, X_n$，应该有 $n$ 个自由度（因为每个样本都是相互独立的，可自由变化，不受其他样本的影响），但有1个自由度已用于估计总体分布均值（用 $\overline{X}$ ），故还剩下 $n-1$ 个自由度；
> 2. $S^2$ 是 $n$ 个数 $X_1-\overline{X},\cdots, X_n-\overline{X}$ 的平方和，但这 $n$ 个数受到一个（也只有一个）约束，即$\sum_{i=1}^n(X_i-\overline{X})=0$ ，故只有 $n-1$ 个自由度；
> 3. 若以 $\overline{X}=\dfrac1n\sum_{i=1}^nX_i$ 代入 $\sum_{i=1}^n(\overline{X}-X_i)^2$ 中，而将其整理为二次型 $\sum_{i,j=1}^na_{ij}X_iX_j(a_{ij}=a_{ji})$，则可以验证：方阵 $A=(a_{ij})$ 的秩为 $n-1$，自由度就定义为这个秩。





**（三）各种次序统计量**

如样本中位数、样本$p$分位数($0<p<1$)、极值、极差等等。



**（四）样本矩**

有一类重要的统计量叫做样本矩，分为**样本原点矩**和**样本中心矩**。

- **$k$ 阶样本原点矩**：设样本为 $X_1, \cdots, X_n$，$k$ 为正整数，则
$$
a_k=\dfrac1n\sum_{i=1}^nX_i^k
$$
称为$k$ 阶样本原点矩。$a_1=\overline{X}$ 是最重要的样本原点矩，也就是上文所述的样本均值。


- **$k$ 阶样本中心矩**：设样本为 $X_1, \cdots, X_n$，$k$ 为正整数，则
$$
m_k=\dfrac1n\sum_{i=1}^n(X_i-\overline{X})
$$
称为$k$ 阶样本中心矩。二阶中心矩 $m_2$，它与样本方差只相差一个常数因子：$m_2=\dfrac{n-1}nS^2$。

最有用的样本矩是一、二阶的，三、四阶的也有一些应用，四阶以上则很少使用。有用的统计量有很多，它们都是在解决种种统计推断问题时产生的。

---

# 参数的点估计问题

设有一个统计总体，其概率密度函数或者概率函数（分别针对连续型和离散型总体分布）$f(x;\theta_1, \cdots, \theta_k)$ 为 $f(x;\theta_1, \cdots, \theta_k)$ 。参数估计问题的一般提法是：假设从总体中抽出的样本 $X_1, \cdots, X_n$（样本为独立随机样本，即 $X_1, \cdots, X_n$ 独立同分布，且公共分布就是总体分布），要依据这些样本去对参数 $f(x;\theta_1, \cdots, \theta_k)$ 的未知值做出估计。



==XXXX==

## 矩估计法

### 随机变量的矩

设 $X$ 为随机变量，$c$ 为常数，$k$ 为正整数，则量 $E[(X-c)^k]$ 称为 $X$ 关于 $c$ 点的 $k$ 阶矩。

比较重要的有两种情况：

（1）$c=0$，这时 $\alpha_k=E(X^k)$ 称为 $X$ 的 **$k$ 阶原点矩**；

（2）$c=E(X)$，这时 $\mu_k=E[(X-EX)^k]$ 称为 $X$ 的 **$k$ 阶中心矩**；

一阶原点矩就是期望。

一阶中心矩 $\mu_1=0$，二阶中心矩 $\mu_2=E[(X-EX)^2]$ 就是 $X$ 的方差 $\mathrm{Var}(X)$。

### 理论矩和经验矩

对于随机变量 $X$，我们定义了 $k$ 阶原点矩 $\alpha_k$ 和  $k$ 阶中心矩 $\mu_k$，有时称它们为**理论矩**；另一方面，对于选取的样本，我们定义了 $k$ 阶样本原点矩 $a_k$ 和  $k$ 阶样本中心矩 $m_k$，有时称它们为**经验矩**。

> 对于理论矩和经验矩的理解
>
> 设总体分布 $F$ 有理论矩 $\alpha_k$ 和 $\mu_k$，由于我们不知道  $F$ ，因此也就不知道 $\alpha_k$ 和 $\mu_k$ 的取值。现在从该总体中抽出的样本  $X_1, \cdots, X_n$ 的地位是平等的，一个合理的选择是把 $F_n$ 取成一个**离散分布**，它在每个值 $X_i$ 处各有概率 $1/n\ (i=1,\cdots,n)$ ，于是分布函数 $F_n$ 的形式可以定义为
> $$
> F_n(x)=\{X_1,\cdots,X_n中不大于x的个数\}/n
> $$
> 它称为样本  $X_1, \cdots, X_n$ 的**经验分布函数**。如果按照理论矩的定义计算分布 $F_n$ 的 $k$ 阶原点矩和中心矩，就可以得到 $a_k$ 和 $m_k$ 。
>
> 所以，可以说，**样本矩就是经验分布的矩**。

### 矩估计法的思想

矩估计法是 K·皮尔逊在十九世纪末到二十世纪初的一系列文章中引进的。这种方法的思想很简单，即：**用样本矩估计总体分布的理论矩**。

以原点矩估计为例：假设总体分布为 $f(x;\theta_1, \cdots, \theta_k)$ ，则它的原点矩（理论矩）为
$$
\alpha_m=\int_{-\infty}^{+\infty}x^mf(x;\theta_1, \cdots, \theta_k)\mathrm{d}x\quad \Big(或\ \sum_ix_i^m f(x_i;\theta_i, \cdots, \theta_k)\Big)
$$
依赖于 $\theta_1, \cdots, \theta_k$ ；另一方面，当样本大小 $n$ 较大时，$\alpha_m$ 又接近于样本的原点矩（样本矩） $a_m$，于是：
$$
\alpha_m=\alpha_m(\theta_1, \cdots, \theta_k)\approx a_m=\dfrac1n\sum_{i=1}^nX_i^m
$$
取 $m=1,\cdots, k$，并将上式的近似式改成等式，就得到了一个方程组：
$$
\alpha_m(\theta_1, \cdots, \theta_k)= a_m\quad (m=1, \cdots,k)
$$
解该方程组，得到根 $\hat{\theta}_i=\hat{\theta}_i(X_1, \cdots, X_n)\ (i=1,\cdots,k)$，就以 $\hat{\theta}_i$ 作为 $\theta_i$ 的估计 $(i=1,\cdots,k)$。如果要估计的是 $\theta_1, \cdots, \theta_k$ 的某函数 $g(\theta_1, \cdots, \theta_k)$，则用 $\hat{g}=\hat{g}(X_1,\cdots,X_n)=g(\hat{\theta}_1, \cdots, \hat{\theta}_k)$ 去估计它，这样定出的估计量就叫做**矩估计**。



## 极大似然估计法

设有总体分布 $f(x;\theta_1, \cdots, \theta_k)$ ，$X_1, \cdots, X_n$ 为自这个总体中抽出的样本，则样本 $(X_1, \cdots, X_n)$ 的分布，即其概率密度函数或概率函数）为

$$
L(x_1, \cdots, x_n;\theta_1, \cdots, \theta_k) = f(x_1;\theta_1, \cdots, \theta_k) f(x_2;\theta_1, \cdots, \theta_k) \cdots  f(x_n;\theta_1, \cdots, \theta_k)
$$

对于函数 $L(x_1, \cdots, x_n;\theta_1, \cdots, \theta_k)$：

1. 若将函数 $L$ 看作 $x_1, \cdots, x_n$ 的函数时，$L$ 是一个概率密度或概率函数。如果 $L(Y_1, \cdots, Y_n; \theta_1, \cdots, \theta_k) \gt L(X_1, \cdots, X_n;\theta_1, \cdots, \theta_k)$，则表明在观察时出现 $(Y_1, \cdots, Y_n)$ 这个点的可能性比出现 $X_1, \cdots, X_n$ 这个点的可能性大
2. 反过来看，固定  $X_1, \cdots, X_n$ 而把函数 $L$ 看作 $\theta_1, \cdots, \theta_k$ 的函数时，$L$ 被称为**似然函数（Likelihood function）**，它的大小反映了在观察结果 $(X_1, \cdots, X_n) $ 已知的条件下，$(\theta_1, \cdots, \theta_k)$的各种取值的“似然程度”。在这里，参数  $\theta_1, \cdots, \theta_k$ 有一定的值（虽然未知），并非事件或者随机变量，无概率可言，故改用“似然”这个词。

因此，**极大似然估计法(Maximum likelihood function)**就是用似然程度最大的那个点 $(\theta_1^*,\cdots,\theta_k^*)$，即满足条件 

$$
L(X_1,\cdots,X_n;\theta_1^*,\cdots,\theta_k^*)=\max \limits_{\theta_1,\cdots,\theta_k} L(X_1,\cdots,X_n;\theta_1,\cdots,\theta_k)
$$


的 $(\theta_1^*,\cdots,\theta_k^*)$ 作为 $(\theta_1,\cdots,\theta_k)$ 的估计值，因为再已得样本 $X_1,\cdots,X_n$ 的条件下，这个“看起来最像”是真参数值。这个估计 $(\theta_1^*,\cdots,\theta_k^*)$ 就叫做 $(\theta_1,\cdots,\theta_k)$ 的极大似然估计。

令

$$
\ln L=\sum_{i=1}^n\ln(X_i;\theta_1,\cdots,\theta_l)\label{lnlikelihood}
$$

为了使 $L$ 达到最大，只需要 $\ln L$ 达到最大，故在 $f$ 对 $\theta_1,\cdots,\theta_k$ 存在连续的偏导数时，可建立方程组（称为似然方程组）

$$
\dfrac{\partial \ln L}{\theta_i}=0,\quad (i=1,\cdots,k)
$$

如果（1）这个方程组有唯一解，（2）又能验证它是一个极大值点，则它必是使 $L$ 达到最大的点，即极大似然估计。

> 在几个常见的重要例子中，这一点不难验证，但是在比较复杂的场合，方程组XX可能：
>
> （1）不止有一组解，求出这些解很费计算，且不容易判定哪一个使 $L$ 达到最大；
>
> （2）有时，函数 $f$ 并不对 $\theta_1,\cdots,\theta_k$ 可导，甚至 $f$ 本身也不连续，这时方程组XX就无法应用，必须回到原始的定义XX，来用数值解法尝试求解函数的全局最大值点（或者找出局部最大值点，进行比较）。



## 贝叶斯估计

对于矩估计、极大似然估计而言，未知参数（待估计参数） $\theta$ 就是一个简单的未知数，在抽样之前，我们对 $\theta$ 没有任何了解，所有的信息都来自于样本。而贝叶斯派则不然，他们的出发点是：**在进行抽样之前，我们已经对 $\theta$ 有了一定的知识，叫做先验知识**。并且，贝叶斯学派进一步要求：这种先验知识必须用 $\theta$ 的某种概率分布表达出来。

贝叶斯派的观点是：在估计未知参数时，应当对该参数的先验知识加以使用，而不是视而不见。这种思想与我们日常处理事物的习惯符合：当我们面临一个问题时，除了考虑当前的情况外，往往还需要注意以前的先例和经验。

那么，当我们没有关于未知参数的先验知识，即先验密度 $h(\theta)$ 怎么办呢？怎样去获得先验密度 $h(\theta)$ 呢？

贝叶斯统计的一个基本要求是：**你必须设法去确定这样一个 $h(\theta)$ ，甚至出于你自己的主观认识也可以（也就是说，可以使用主观概率），这要成为问题中一个必备的要素**。

当确定了先验密度之后，接下来就是得出参数 $\theta$ 的估计。

> 设二维随机变量 $X=(X_1,X_2)$ 有概率密度函数 $f(x_1,x_2)$，$X_2$ 的边缘分布的密度函数 $f_2$ 
> 
> $$
> f_2(x_2)=\int^{+\infty}_{-\infty}f(x_1,x_2)\ \mathrm{d}x_1\notag
> $$
> 
> 则可以证明
> 
> $$
> f(x_1, x_2)=f_2(x_2)f_1(x_1\vert x_2)\label{eq1}
> $$
> 
> 即，表明：两个随机变量 $X_1$ 和 $X_2$ 的联合概率密度，等于其中一个变量的概率密度乘以在给定这一变量之下另一个变量的条件概率密度。

假设总体有概率密度 $f(X,\theta)$ ，从这个总体中抽取 $X_1, \cdots, X_n$，则这组样本的密度为 $f(X_1,\theta)\cdots f(X_n,\theta)$，该密度可以视为在给定 $\theta$ 时 $(X_1, \cdots, X_n)$ 的密度，即

$$
f(X_1,\cdots,X_n\vert \theta)=f(X_1,\theta)\cdots f(X_n,\theta)
$$

 则根据式 $\eqref{eq1}$ ，可以得到 $(\theta,X_1, \cdots, X_n)$ 的联合密度为

$$
f(\theta,X_1, \cdots, X_n)=h(\theta)f(X_1,\theta)\cdots f(X_n,\theta)
$$

由此，可以算出 $(X_1, \cdots, X_n)$ 的边缘密度为

$$
p(X_1,\cdots,X_n)=\int h(\theta)f(X_1,\theta)\cdots f(X_n,\theta)\ \mathrm{d}\theta
$$

积分的范围，要看参数 $\theta$ 的范围而定。之后，在给定 $(X_1, \cdots, X_n)$ 分布的条件下，$\theta$ 的条件密度为

$$
h(\theta\vert X_1,\cdots,X_n)=\dfrac{h(\theta)f(X_1,\theta)\cdots f(X_n,\theta)}{\int h(\theta)f(X_1,\theta)\cdots f(X_n,\theta)\ \mathrm{d}\theta}\label{MAP}
$$

按照贝叶斯学派的观点，这个条件密度代表了我们在取得样本 $X_1, \cdots, X_n$ 后对 $\theta$ 的知识，它综合了 $\theta$ 的先验知识（以 $h(\theta)$ 反映）与由样本带来的信息。
通常把式XX称为 $\theta$ 的后验密度，因为它是在做了试验后取得的。

在得出后验分布式XX后，对参数 $\theta$ 的任何统计推断都只能基于这个后验分布。至于具体如何使用它，可以结合某种准则一起去进行，统计学家也有一定的自由度。对于此处的点估计问题，一个常用的方法是：取后验分布式XX的均值作为 $\theta$ 的估计。

> 注：
> 按照上文所述，$h(\theta)$ 必须是一个密度函数，即必须满足 $h(\theta)\ge 0$，$\int h(\theta)\mathrm{d}\theta = 1$ 两个条件。但在某些情况下，$h(\theta)\ge 0$，但$\int h(\theta)\ \mathrm{d}\theta$ 不为1，甚至为 $\infty$ ，不过积分式XX仍然有限，这时，由XX定义的 $h(\theta\vert X_1,\cdots,X_n)$ 作为 $\theta$ 的函数，仍满足密度函数的条件。也就是说，即使是这样的 $h(\theta)$ 取为先验函数也无妨。当然，由于 $\int h(\theta)\ \mathrm{d}\theta$ 不为1，它也失去了密度函数的通常的概率意义。这样的 $h(\theta)$ 通常称为**广义先验密度**。

---

# 点估计实例

## 正态分布

设 $X_1,\cdots,X_n$ 是从正态总体 $N(\mu,\sigma^2)$ 中抽出的样本，估计 $\mu$ 和 $\sigma^2$ 。

**（1）矩估计**

$\mu$ 是总体的一阶原点矩，可用一阶样本原点矩$a_1$，即样本均值 $\overline{X}$ 估计；$\sigma^2$ 总体方差 ，即总体的二阶中心矩，可用样本的二阶中心矩 $m_2$ 去估计。但是一般在估计方差的时候，经常用样本方差 $S^2$（即式$\eqref{samplevariance}$），而不用 $m_2$ ，即**对矩估计做了一定的修正，这是因为样本方差具有无偏性**。（==后面会有所提及==）

因此可以得到 $\mu$ 和 $\sigma^2$ 的估计量分别为：
$$
\begin{align*}
&\hat{\mu}=\overline{X}=\dfrac1n\sum_{i=1}^n X_i\\
&\hat{\sigma^2}=S^2=\dfrac1{n-1}\sum_{i=1}^n(\overline{X}-X_i)^2
\end{align*}
$$
**解上述方程组**，写成 $\hat{\theta}_i=\hat{\theta}_i(X_1,\cdots,X_n)$ 的形式 ，可以得到：
$$
\begin{align*}
&\hat{\mu}=\overline{X}=\dfrac1n\sum_{i=1}^n X_i\\
&\hat{\sigma^2}=S^2=\dfrac1{n-1}\sum_{i=1}^n\big[(\dfrac1n\sum_{j=1}^n X_j)-X_i\big]^2
\end{align*}
$$

> 假如要估计的是总体的标准差 $\sigma$ （即要估计一个总体参数的函数），则由 $\sigma=\sqrt{\sigma^2}$ ，按照矩估计法，可以用 $\sqrt{m_2}$ 来估计，但是和上面一样，我们一般用  $\sqrt{S^2}=S$ 去估计，或者**还做点修正**。
>
> 假如要估计总体的变异系数 $\sigma/\mu$（变异系数是以均值为单位去衡量总体的标准差），则使用矩估计法可用 $\sqrt{m_2}/\overline{X}$ ，一般用 $S/\overline{X}$ 。



**（2）极大似然估计**

根据公式 $\eqref{lnlikelihood}$ ，可以得到 $\log$ 似然函数为：
$$
\begin{align}
\ln\ L&=\ln \prod_{i=1}^n\Big[(\sqrt{2\pi\sigma^2})^{-1}\exp \big( -\dfrac{(X_i-\mu)^2}{2\sigma^2}\big)\Big]\notag \\
&=-\dfrac{n}{2}\ln(2\pi\sigma^2)-\dfrac1{2\sigma^2}\sum_{i=1}^n(X_i-\mu)^2 \label{normlnlikelihood}
\end{align}
$$
于是可以得到方程组
$$
\left\{  
\begin{align} &\dfrac{\partial \ln L}{\partial \mu}=\dfrac{1}{\sigma^2}\sum_{i=1}^n(X_i-\mu)=0\notag \\ 
&\dfrac{\partial \ln L}{\partial \sigma^2}=-\dfrac{n}{2\sigma^2}+\dfrac1{2\sigma^4}\sum_{i=1}^n(X_i-\mu)^2=0 \label{MLEsystem1}
\end{align} 
\right.
$$
解上述方程组，写成 $\hat{\theta}_i=\hat{\theta}_i(X_1,\cdots,X_n)$ 的形式，可以得到：
$$
\begin{align*}
&\hat{\mu}=\dfrac1n\sum_{i=1}^n X_i\\
&\hat{\sigma^2}=\dfrac1n\sum_{i=1}^n\Big[X_i-\big(\dfrac1n\sum^{n}_{j=1}X_j \big) \Big]^2
\end{align*}
$$
接下来，还需要证明，我们找到的 $(\hat{\mu},\hat{\sigma^2})$ <font color='red'>就是</font> $\log$ 似然函数 $\eqref{normlnlikelihood}$ 的最大值。

首先，方程组 $\eqref{MLEsystem1}$ 中的两个方程并不具备线性关系，因此该方程组只有唯一的根 $(\mu^*, {\sigma^*}^2)$。又由表达式 $\eqref{normlnlikelihood}$ 可知，当 $\vert \mu \vert \rightarrow \infty$ 或 $\sigma^2 \rightarrow 0$ 时， $\ln L\rightarrow -\infty$，$L\rightarrow 0$ ，而作为似然度函数 $L>0$ 总成立，因此，$(\mu^*, {\sigma^*}^2)$ 不可能是极小值点，必然是极大值点。作为唯一的一个极大值点，必然是最大值点。QED。

**（3）最大后验估计**

假设样本来自正态总体 $N(\theta, 1)$ ，且 $\theta$ 的先验分布为 $N(\mu, \sigma^2)$ ，求 $\theta$ 的贝叶斯估计。

根据已知条件可以知道，总体的分布为
$$
f(x,\theta)=(\sqrt{2\pi})^{-1}\exp \Big[-\dfrac12(x-\theta)^2\Big]
$$
$\theta$ 的先验分布为
$$
h(\theta)=(\sqrt{2\pi}\sigma)^{-1}\exp \Big[-\dfrac1{2\sigma^2}(x-\mu)^2\Big]
$$
则根据公式 $\eqref{MAP}$ ，有
$$
\begin{align}
h(\theta\vert X_1,\cdots,X_n)&=\dfrac{h(\theta)f(X_1,\theta)\cdots f(X_n,\theta)}{\int h(\theta)f(X_1,\theta)\cdots f(X_n,\theta)\ \mathrm{d}\theta}\notag \\
&=\exp\Big[-\dfrac1{2\sigma^2}(\theta-\mu)^2-\dfrac12\sum_{i=1}^n(X_i-\theta)^2 \Big]/I\label{eq2}
\end{align}
$$
$I$ 作为一个整体，与 $\theta$ 无关。

在公式 $\eqref{eq2}$ 中，可以计算出
$$
-\dfrac1{2\sigma^2}(\theta-\mu)^2-\dfrac12\sum_{i=1}^n(X_i-\theta)^2=-\dfrac1{2\eta^2}(\theta-t)^2+J
$$
其中
$$
\begin{align*}
t&=\Big(n\overline{X}+\mu/\sigma^2\Big)/(n+1/\sigma^2)\\
\eta^2&=1/(n+1/\sigma^2)
\end{align*}
$$
而 $J$ 与 $\theta$ 无关。

于是，公式 $\eqref{eq2}$ 可以进一步简化为
$$
h(\theta\vert X_1,\cdots,X_n)=I_1\exp\Big[-\dfrac1{2\eta^2}(\theta-t)^2 \Big]
$$
由于 $h(\theta\vert X_1,\cdots,X_n)$ 是一个概率密度函数，则它一定满足
$$
\int_{-\infty}^{+\infty}h(\theta\vert X_1,\cdots,X_n)\mathrm{d}\theta = 1
$$
因此一定有 $I_1=(\sqrt{2\pi}\eta)^{-1}$ ，$\theta$ 的后验分布同样是一个后验分布 $\tilde{\theta} \sim N(t,\eta^2)$ ，其均值 $t$ 就是 $\theta$ 的贝叶斯估计 $\tilde{\theta}$ 
$$
\tilde{\theta}=t=\dfrac{n}{n+1/\sigma^2}\overline{X}+\dfrac{1/\sigma^2}{n+1/\sigma^2}\mu\label{eq3} 
$$
$\tilde{\theta}$ 的表达式 $\eqref{eq3}$ 传达出这样的信息：考虑两种极端情况

（1）假如我们只有样本信息而毫无先验信息，则 $\sigma^2\rightarrow \infty$ ，此时 $\tilde{\theta}=\overline{X}$ ，这和 $\theta$ 矩估计和极大似然估计法的结果是一致的；

（2）加入我们只有先验信息，而毫无样本信息，则 $n\rightarrow 0$ ，则 $\tilde{\theta}=\mu$，即用先验分布的均值 $\mu$ 去作为 $\theta$ 的估计；

因此，从式 $\eqref{eq3}$ 可以看出，当先验信息和样本信息都存在时， $\theta$ 的估计为二者的折衷。从形式上看，式 $\eqref{eq3}$ 上述两种极端情况的下估计 $\overline{X}$ 和 $\mu$ 的加权平均，权重之比为 $n:(1/\sigma^2)$ 。这个比值很合理：样本数目 $n$ 越大，表示样本信息越多，$\overline{X}$ 的权就越大；另一方面，$\sigma^2$ 越大，表示先验信息越不确定，$\sigma^2$ 越小，表示根据已有的先验信息，已经有很大的把握肯定 $\theta$ 就在 $\mu$ 附近不远处，因此，$\mu$ 的权重与 $\sigma^2$ 成反比。

---



# 点估计的优良性准则


## 引子
从上面点估计的实例可以看出，同一个参数往往有不止一种看起来都合理的估计法，因此，自然会提出优劣比较的问题。

乍一看觉得这个问题很容易回答，设$\hat{\theta}_1$和$\hat{\theta}_2$都用于估计$\theta$，则哪一个误差更小，则哪一种方法是最优的。但在实践中会遇到一些问题：
1. 由于 $\theta$ 本身未知，就不知道估计误差有多大；
2. 最主要的是问题在于：$\hat{\theta}_1$和$\hat{\theta}_2$的值都是根据样本计算出来的。一般情况是，对某些样本，$\hat{\theta}_1$的误差小于$\hat{\theta}_2$，而对另一些样本则反之。<font color='red'>一个从整体上看不好的估计，在个别场合下表现得很好</font>。反之，<font color='red'>一个很不错的估计，由于抽到了不易出现的样本，其表现也可能很差</font>。

因此，在考虑估计量的优劣时，必须<font color='red'>从某种整体性能</font>去衡量它，而不能看它<font color='red'>在个别样本下的表现</font>如何。这里所谓的“整体”性能，有两种意义：

1. 一是指估计量的某种特性，具有这种特性就是好的，否则就是不好的，比如估计量的“无偏性”；
2. 二是指某种具体的数量性指标。两个估计量，指标小的估计量就是较优的，比如“均方误差”

应当注意的是：<font color='red'>这种比较，归根到底，也还是相对性的</font>。具体某种特性的估计是否一定就好？这在一定程度上要看问题的具体情况，不是绝对的。作为比较准则的数量性指标，也有很多种，很有可能，在甲指标之下 $\hat{\theta}_1$ 优于 $\hat{\theta}_2$，而在乙指标下则反之。

> “我们这样说，当然不是认为优良性准则和估计量的优劣比较毫无意义。相反，这些很有意义，且是**参数估计**这个分支科学的**中心问题**。我们是想提醒读者，<font color='red'>不要把这些准则绝对化了，每种准则在某种情况下都有其局限性</font>。”


## 估计量的无偏性
### 无偏性的定义
设某统计总体的分布包含位置参数 $\theta_1,  \cdots, \theta_k$，$X_1, \cdots, X_n$是从该总体中抽出的样本，要估计$g(\theta_1, \cdots, \theta_k)$。$g$为一已知函数，设 $\hat{g}(X_1, \cdots, X_n)$是一个估计量。如果对任何可能的$(\theta_1, \cdots, \theta_k)$，都有

$$
E_{\theta_1, \cdots, \theta_k}[\hat{g}(X_1, \cdots, X_n)]=g(\theta_1, \cdots, \theta_k) \tag{1-1}
$$

则称$\hat{g}$是$g(\theta_1, \cdots, \theta_k)$的一个**无偏估计量**。

### 无偏性的含义

估计量的无偏性有两个含义：

（一） 第一个含义是没有系统性偏差。不论你用什么样的估计量$\hat{g}$去估计$g$，总是时而偏低（对于某些样本），时而偏高（对另一些样本）。无偏性表示，把这些正、负偏差在概率上平均起来，其值为0。比如用传感器去测量信号，误差来源有二：一是传感器本身仪器制造上的问题，使它在称东西时，倾向于给出偏高或者偏低的值，这属于**系统误差**；另一种是操作上和其他随机性原因，使称出的结果有误差，这属于**随机误差**。<font color='red'>无偏性的要求相应于传感器没有系统误差，但随机误差总是存在</font>。因此，无偏估计不等于在任何时候都能给出正确无误的估计；

（二）另一个含义是由定义式(1)结合大数定律引申出的。假设每天把统计量 $\hat{g}(X_1, \cdots, X_n)$ 用一次，第 $i$ 天的样本记为 $\hat{g}(X_1^{(i)}, \cdots, X_n^{(i)})$。则按照大数定律，当$N \rightarrow \infty$时，各次估计的平均值，即$\dfrac1N \sum_{i=1}^N \hat{g}(X_1^{(i)}, \cdots, X_n^{(i)})$，依概率收敛到估计的值 $g(\theta_1, \cdots, \theta_k)$。所以，<font color='red'>如果统计量具有无偏性，则在大量次数使用取平均时，能以接近100%的把握无限逼近被估计的量。如果没有无偏性，那么无论使用多少次，其平均也会与真值保持一定的距离，这个距离就是系统误差</font>。

### 无偏性的使用价值

估计量的无偏性是一个优良的性质，但是，在一个具体的问题中，无偏性的使用价值如何，还必须结合这个问题的具体情况考察。

实例1：如果你经常去一家水果店买水果，而店用的称是无系统误差的，这等于说，店里在称上现实的重量是你所买的东西的真是重量的无偏估计。尽管在具体某一次购买中店里可能少给或者多给了你一些，从长期的平均看，无偏性保证了双方都不吃亏。在这个例子中，考察无偏性就有很现实的意义。

实例2：假设工厂每周进一批原料，在投入使用前，实验室会对原料中的某些成分含量的百分率 $p$ 做一个估计，根据估计值 $\hat{p}$ 采取相应的工艺调整措施。无论 $\hat{p}$ 比真正的 $p$ 偏高还是偏低，都会有损产品质量。在这个例子中，即使 $\hat{p}$ 是 $p$ 的无偏估计，在长期使用中，估计的正、负偏差的效应不能抵消。因此，在这个例子中，估计量 $\hat{p}$ 的无偏性实际上并不具备实用意义。


## 最小方差无偏估计

一个参数往往不只有一个无偏估计，从这些众多的无偏估计中，我们想要挑出最优的。这涉及到两个问题：

1. 为优良性指定一个<font color='red'>准则</font>；
2. 在已定的准则下，<font color='red'>如何</font>去找到最优者；

### 均方误差
设 $X_1, \cdots, X_n$ 是从某一带参数 $\theta$ 的总体中抽出的样本，要估计$\theta$ 。如果我们估计量 $\hat{\theta}(X_1, \cdots, X_n)$，则其误差为 $\hat{\theta}(X_1, \cdots, X_n)-\theta$。这个误差随样本 $X_1, \cdots, X_n$ 的具体值而定，也是随机的，因而其本身无法取为优良指标。我们把它平方以消除符号，得 $(\hat{\theta}(X_1, \cdots, X_n)-\theta)^2$，然后取它得均值，即取

$$
M_{\hat{\theta}}(\theta)=E_{\theta}\bigl[\hat{\theta}(X_1, \cdots, X_n)-\theta\bigr] ^2  \tag{2-1}
$$
作为 $\hat{\theta}$ 的误差大小从整体角度的一个衡量。这个量越小，就表示 $\hat{\theta}$ 的误差平均来讲比较小，因而也越优秀。$M_{\hat{\theta}}(\theta)$ 就称为估计量 $\theta$ 的“均方误差”（误差平方的平均）。均方误差小并不能保证 $\hat{\theta}$ 在每次使用时一定给出小的误差，它有时可以有较大的误差，但这种情况出现的机会比较少。

根据方差的一种计算形式：$Var(X)=E(X^2)-(EX)^2$，可以将式(2-1)写作

$$
\begin{aligned}
M_{\hat{\theta}}(\theta)
=& Var_{\theta}(\hat{\theta}-\theta) +\bigl[E_{\theta}(\hat{\theta}-\theta)\bigr]^2\\
=& Var_{\theta}(\hat{\theta}) +\bigl[E_{\theta}(\hat{\theta})-\theta\bigr]^2
\end{aligned}
$$

式(2-2)表明均方误差由两部分构成：
-  $Var_{\theta}(\hat{\theta})$ ，即 $\hat{\theta}$ 的方差，表示 $\hat{\theta}$ 自身变异的程度；
-  $E_{\theta}(\hat{\theta})-\theta$，表示估计量 $\hat{\theta}$ 的系统偏差。如果 $\hat{\theta}$ 为 $\theta$ 的<font color='red'>无偏估计</font>，则该项为0，这时有：$$M_{\hat{\theta}}(\theta)=Var_{\theta}(\hat{\theta})$$



均方误差并不是唯一可供选择的准则。比如，平均绝对误差 $E_{\theta}|\hat{\theta}(X_1,\cdots,X_n)-\theta|$，以及许多别的准则，看来都很合理，且在某些场合下有独特的优势，但是由于平方这个函数在数学上最容易处理，使得均方误差是这些准则中应用和研究得最多的。

### 最小方差无偏估计
从前面的讨论可以看到，如果<font color='red'>（1）局限于无偏估计的范围</font>，且<font color='red'>（2）采用均方误差的准则</font>，则两个无偏估计 $\hat{\theta}_1$ 和 $\hat{\theta}_2$ 的比较总结为其方差的比较：方差小的估计量较优。


如果 $\hat{\theta}$ 为 $g(\theta)$ 的一个无偏估计，且它的方差对 $\theta$ 的任何可能取的值，都比任何其他的无偏估计的方差小，或至多等于它，则在“方差越小越好”的准则下， $\hat{\theta}$ 就是最好的，它称为 $\theta$ 的“最小方差无偏估计”，简记为**MVU估计**(Minimum Variance Unbiased)。

> **定义**
> 设 $\hat{\theta}$ 为 $g(\theta)$ 的一个无偏估计。若对 $g(\theta)$  的任何一个无偏估计 $\hat{\theta}_1$，都有$$Var_{\theta}(\hat{\theta}) \le Var_{\theta}(\hat{\theta}_1)$$对 $\theta$ 的任何可能取的值都成立，则称 $\hat{\theta}$ 为 $g(\theta)$ 的一个最小方差无偏估计（MVU估计）。

那么<font color='blue'>如何去寻找MVU估计呢？</font> 数理统计学给出了一些方法，这里介绍其中一个，该方法的思想如下：先研究一下在 $g(\theta)$ 的<font color='red'>一切无偏估计</font>中，方差最小能达到多少？如果我们求出了这样一个方差的下界，那么如果某个估计 $\hat{\theta}$ 的方差达到这个下界，那它必定就是MVU估计。

### 求MVU估计的一种方法：克拉美·劳不等式
#### 克拉美·劳不等式
我们只考虑<font color='red'>单参数</font>的情况。假设总体的概率密度函数 $f(x,\theta)$ 只包含一个参数 $\theta$，$X_1,\cdots, X_n$ 为从该总体中抽出的样本，要估计 $g(\theta)$。记
$$
I(\theta)=\int\biggr[\Bigr(\dfrac{\partial f(x,\theta)}{\partial \theta}\Bigl)^2/f(x,\theta)\biggl]dx
$$

其中，积分的范围为 $x$ 可取的范围。例如，对指数分布总体，为 $0\lt x\lt \infty$；对正态总体，则 $-\infty \lt x\lt \infty$。

> 如果总体分布是离散的，那么式(2-3)改写为
> $$
> I(\theta)=\sum_i \Bigr(\dfrac{\partial f(a_i,\theta)}{\partial \theta}\Bigl)^2/f(a_i,\theta)
> $$
> 这里，求和符号 $\sum_i$ 遍及总体的全部可能值 $a_1, a_2, \cdots$。下面基于<font color='red'>连续的情况</font>进行讨论，对离散的情况，只需要进行相应的修改。

**克拉美-劳不等式**
在一定条件下，对 $g(\theta)$ 的任一无偏估计 $\hat{g}=\hat{g}(X_1, \cdots, X_n)$，有
$$
\mathrm{Var}_{\theta}(\hat{g})\ge\bigr(g^{\prime}(\theta)\bigl)^2/(nI\bigr(\theta)\bigr)
$$
其中 $n$ 为样本大小。

不等式(2-5)的右边$\textcolor{red} {\bigr(g^{\prime}(\theta)\bigl)^2/(nI\bigr(\theta)\bigr)}$给出了 $g(\theta)$ 的无偏估计的方差的一个下界。如果 $g(\theta)$ 的某个无偏估计的方差正好达到了不等式(2-5)的有段，那它就是 $g(\theta)$ 的MVU估计。


> 记
> 
> $$
> \begin{aligned}S&=S(X_1, \cdots, X_n, \theta)\\
> &=\sum_{i=1}^n\dfrac{\partial \ln f(X_i,\theta)}{\partial \theta}\\
> &=\sum_{i=1}^n\dfrac{\partial f(X_i,\theta)}{\partial \theta}/f(X_i,\theta)
> \end{aligned}
> $$
> 
> 因为 $f(x,\theta)$ 为概率密度，有$$\int f(x,\theta)\mathrm{d}x=1\tag{2-7}$$两边对 $\theta$ 求导，并<font color='red'>假定左边求导可搬到积分号内</font>（条件之一），有$$\int\dfrac{\partial f(x,\theta)}{\partial \theta}\mathrm{d}x=0\tag{2-8}$$因此，
> 
> $$
> \begin{aligned}E_{\theta}\Bigr[\dfrac{\partial f(X_i,\theta)}{\partial \theta}/f(X_i,\theta)\Bigl]
> &=\int\Bigr(\dfrac{\partial f(x,\theta)}{\partial \theta}/f(x,\theta) \Bigl)f(x,\theta)\mathrm{d}x\\
> &=\int\Bigr(\dfrac{\partial f(x_i,\theta)}{\partial \theta}\Bigl)\mathrm{d}x\\
> &=0
> \end{aligned}
> $$
> 
> 于是，由于<font color='red'>$X_1,\cdots, X_n$的独立性</font>，有
> 
> $$
> \begin{aligned}
> \mathrm{Var}_{\theta}(S)&=\sum_{i=1}^n \mathrm{Var}_{\theta}\Bigr(\dfrac{\partial f(X_i,\theta)}{\partial \theta}/f(X_i,\theta) \Bigl)\\
> &=\sum_{i=1}^n E_{\theta}\Bigr(\dfrac{\partial f(X_i,\theta)}{\partial \theta}/f(X_i,\theta) \Bigl)^2\\
> &=n\int\Bigr[\dfrac{\partial f(x,\theta)}{\partial \theta}/f(x_i,\theta) \Bigl]^2f(x,\theta)\mathrm{d}x\\
> &=nI(\theta)
> \end{aligned}
> $$
> 
> 根据协方差的重要性质：<font color='blue'>$\Bigr[ \mathrm{Cov}(X,Y)\Bigl]^2\le\mathrm{Var}(X)^2\mathrm{Var}(Y)^2$</font>，则有
> 
> $$
> \Bigr[ \mathrm{Cov}_{\theta}(\hat{g},Y)\Bigl]^2\le\mathrm{Var}_{\theta}(\hat{g})\cdot \mathrm{Var}_{\theta}(S)=nI(\theta)\cdot \mathrm{Var}_{\theta}(\hat{g})
> $$
> 
> 有根据协方差的另一条性质，<font color='blue'>$\mathrm{COV}(X,Y)=E(XY)-E(X)E(Y)$</font>，则有：
> 
> $$
> \begin{aligned}
> \mathrm{Cov}_{\theta}(\hat{g},S)&=E(\hat{g}\cdot S)-E(\hat{g})E(S)
> \end{aligned}
> $$
> 
> 又根据式(2-9)，有$E(S)=0$，于是可以得到
> 
> $$
> \begin{aligned}
> \mathrm{Cov}_{\theta}(\hat{g},S)
> &=E(\hat{g}\cdot S)\\
> &=\int\cdots\int \hat{g}(x_1,\cdots,x_n)\sum_{i=1}^n\biggr[\dfrac{\partial f(x_i,\theta)}{\partial \theta}/f(x_i,\theta)\biggl]\cdot\prod_{i=1}^n f(x_i,\theta)\mathrm{d}x_1\cdots\mathrm{d}x_n
> \end{aligned}
> $$
> 
> 由<font color='blue'>乘积的导数公式</font>可知
> 
> $$
> \sum_{i=1}^n\biggr[\dfrac{\partial f(x_i,\theta)}{\partial \theta}/f(x_i,\theta)\biggl]\cdot\prod_{i=1}^n f(x_i,\theta)=\dfrac{\partial f(x_1,\theta)\cdots f(x_n, \theta)}{\partial \theta}
> $$
> 
> 代入式(2-12)，并<font color='red'>假定对 $\theta$ 求偏导数可以移到积分号外面</font>（这又是一个条件），则有
> 
> $$
> \mathrm{Cov}_{\theta}(\hat{g},S)=\dfrac{\partial}{\partial \theta}\int\cdots\int \hat{g}(x_1,\cdots,x_n)f(x_1,\theta)\cdots f(x_n,\theta)\mathrm{d}x_1\cdots\mathrm{x}_n
> $$
> 
> 式(2-13)右边的积分就是 $E_\theta(\hat{g})$，又因 $\hat{g}$为 $g(\theta)$ 的无偏估计，因此这个积分就是 $g(\theta)$，所以式(2-13)可以写作：
> 
> $$
> \mathrm{Cov}_{\theta}(\hat{g},S)=g^{\prime}(\theta)
> $$
> 
> 将式(2-14)带入式(2-11)，于是就可以得到克拉美·劳不等式(2-5)。
> Q.E.D.

不等式(2-5)是瑞典统计学家H·克拉美([Harald Cramé](https://en.wikipedia.org/wiki/Harald_Cram%C3%A9r))和印度统计学家C·R·劳([C. R. Rao](https://en.wikipedia.org/wiki/C._R._Rao))在1945~1946年各自独立得出的，故文献中一般称为克拉美·劳不等式。<font color='red'>克拉美·劳不等式在数理统计学中有多方面的应用，这里的MVU估计就是其中之一</font>。

克拉美·劳不等式<font color='red'>并不直接给出找MVU估计的方法</font>，它使用的方式是：先由直观或其他途径找出一个可能是最好的无偏估计，然后计算其方差，看是否达到克拉美·劳不等式右端的界限，如果达到了，就是MVU估计。并且**在推导的同时，还得仔细验证不等式的推导过程中的所有条件是否全满足，这有时是不太容易的**。

#### 费歇尔信息量
式(2-5)中 $I(\theta)$ 这个量，即式 (2-3)，最初是由英国统计学家R·A·费歇尔（[Ronald Aylmer Fisher](https://en.wikipedia.org/wiki/Ronald_Fisher)）在20世纪20年代提出的（早于克拉美·劳不等式），后人称之为“费歇尔信息量”（Fisher information）。费歇尔信息量 $I(\theta)$ 出现在克拉美·劳不等式中并非偶然的巧合，我们再观察一下克拉美·劳不等式

$$
\mathrm{Var}_{\theta}(\hat{g})\ge\bigr(g^{\prime}(\theta)\bigl)^2/(n\textcolor{red}{I\bigr(\theta)}\bigr)
$$

从这个式子我们可以对“信息量”有一个更直观的理解： $I(\theta)$ 越大，则不等式右边的下界就越低，表示 $g(\theta)$ 的无偏估计更有可能达到较小的方差，即有可能被估计得更准确一些；另一方面，$g(\theta)$ 是通过样本去估计的，$g(\theta)$ 能估计得更准，表示样本所含有得信息量越大。一共有 $n$ 个样本，如果把总信息量说成是不等式右边的分母 $nI(\theta)$，则一个样本正好占有信息量 $I(\theta)$。

$I(\theta)$这个量在数理统计学中很重要，有很多方面的应用。

#### 例题
*注：以下的推导过程均<font color='red'>**不**</font>验证克拉美·劳不等式的推导过程中的所有条件是否满足，但其实这是一个相当重要且并不容易的工作。*

>例1：设 $X_1, X_2, \cdots, X_n$ 为抽自正态总体 $N(\theta, \sigma^2)$的 $n$ 个样本，$\sigma^2$ 已知（因而只有一个参数 $\theta$），说明样本均值 $\bar{X}$ 是 $\theta$ 的MVU估计。

解：正态分布函数的概率密度函数形式

$$
f(x, \theta)=(\sqrt{2\pi}\sigma)^{-1}\exp\Big( -\dfrac{(x-\theta)^2}{2\sigma^2}\Big)
进一步
$$

$$
\dfrac{\partial f(x,\theta)}{\partial \theta}=(\sqrt{2\pi}\sigma)^{-1}\exp\Big( -\dfrac{(x-\theta)^2}{2\sigma^2}\Big)\dfrac1{\sigma^2}(x-\theta)
$$

根据公式(2-3)，可以得到

$$
\begin{aligned}
I(\theta)&=\int^{+\infty}_{-\infty}\biggr[\Bigr(\dfrac{\partial f(x,\theta)}{\partial \theta}\Bigl)^2/f(x,\theta)\biggl]\mathrm{d}x\\
&=\int^{+\infty}_{-\infty}\biggr[\dfrac{(x-\theta)^2}{\sqrt{2\pi}\sigma^5}\exp
\Big( -\dfrac{(x-\theta)^2}{2\sigma^2}\Big)\biggl]\mathrm{d}x\\
&=2(\sqrt{\pi}\sigma^2)^{-1}\int^{+\infty}_{-\infty}\biggr[(\dfrac{x-\theta}{\sqrt{2}\sigma})^2
\exp\Big( -(\dfrac{x-\theta}{\sqrt{2}\sigma})^2\Big)\biggl]
\mathrm{d}\Big[\dfrac{(x-\theta)}{\sqrt{2}\sigma}\Big]\\
&=2(\sqrt{\pi}\sigma^2)^{-1}\int^{+\infty}_{-\infty}t^2\exp(-t^2)\mathrm{d}t\\
&=2(\sqrt{\pi}\sigma^2)^{-1}\int^{+\infty}_{0}t\exp(-t^2)\mathrm{d}t^2\\
&=2(\sqrt{\pi}\sigma^2)^{-1}\int^{+\infty}_{0}z^{1/2}\exp(-z)\mathrm{d}tz\\
\end{aligned}
$$

根据 [$\Gamma$ 函数的定义及递推关系式](https://blog.csdn.net/weixin_44983951/article/details/125573046?csdn_share_tail=%7B%22type%22:%22blog%22,%22rType%22:%22article%22,%22rId%22:%22125573046%22,%22source%22:%22weixin_44983951%22%7D&ctrtid=vb3K9)，上式可以写作：

$$
\begin{aligned}
I(\theta)&=2(\sqrt{\pi}\sigma^2)^{-1}\Gamma(3/2)\\
&=2(\sqrt{\pi}\sigma^2)^{-1}\times\dfrac12\sqrt{\pi}\\
&=\dfrac1{\sigma^2}
\end{aligned}
$$

样本均值 $\bar{X}$ 是估计正态分布均值的无偏估计量，故 $g(\theta)=\theta$。于是代入到克拉美·劳不等式的右边，得到

$$
右端=\bigr(g^{\prime}(\theta)\bigl)^2/(nI\bigr(\theta)\bigr)=\dfrac1{n\cdot\dfrac1{\sigma^2}}=\dfrac{\sigma^2}{n}
$$

而样本均值 $\bar{X}$ 作为一种<font color='blue'>无偏</font>估计量，它的<font color='blue'>均方误差</font>，也即克拉美·劳不等式的左端项为
$$
左端=\mathrm{Var}(\bar{X})=\dfrac1n\mathrm{Var}(X_1)=\dfrac1n\sigma^2
$$

于是，可以得出结论：样本均值 $\overline{X}$ 是 $\theta$ 的MVU估计。


> **使用克拉美·劳不等式求解单参数的MVU估计的步骤**
>
> 1. 检验克拉美·劳不等式推导过程中的所有条件是否满足（上述解题没有说明，但重要且困难）
> 2. 根据待估计函数的概率密度函数形式 $f(x,\theta)$ 计算$\dfrac{\partial f(x,\theta)}{\partial \theta}$，进而计算**费歇尔信息**$\bm{I(\theta)}$
> 3. 由直观或其他途径找出一个可能是最好的<font color='red'>无偏</font>估计 $g(\theta)$（必须保证是无偏估计），并计算 $\bm{g^{\prime}(\theta)}$
> 4. 根据步骤2和步骤3计算出的**费歇尔信息**$\bm{I(\theta)}$和 $\bm{g^{\prime}(\theta)}$ 计算克拉美·劳不等式的右端项，即**克拉美·劳下界**
> 5. 计算<font color='red'>无偏</font>估计的<font color='red'>均方误差</font>
> 5. 观察计算出的均方误差是否到达不等式右端的**克拉美·劳下界**，若达到，则该估计就是MVU估计，否则不是。


#### 使用克拉美·劳不等式的条件
克拉美·劳不等式在表述和推导的过程中，需要满足一系列的条件。
在表述中，就包含了要求 <font color='red'> $\dfrac{\partial f(x,\theta)}{\partial \theta}$ 存在</font> 和 <font color='red'>  $g^{\prime}(\theta)$ 存在</font> 的条件。

## 估计量的相合性与渐近正态性
### 相合性
> **定义3.1：大数定理**
> 若 $X_1, X_2, \cdots, X_n, \cdots$ 独立同分布，其公共均值为 $\theta$。记 $\bar{X_n}=\frac1n
> \sum_{i=1}^nX_i$，则对 $\forall \varepsilon\gt 0$，有
> 
> $$
> \lim \limits_{n\rightarrow \infty} P(\bigl| \bar{X_n} -\theta\bigr|\ge \varepsilon)=0. \tag{3-1}
> $$

如果从估计的观点对式 (3-1) 做一个解释。如果我们把 $X_1, X_2, \cdots, X_n$ 看作从某一总体中抽出的样本，抽样的目的是估计该总体的均值 $\theta$。概率 $P(\bigl| \bar{X_n} -\theta\bigr|\ge \varepsilon)$ 表示“当样本大小为 $n$ 时，样本均值 $\bar{X_n}$ 这个估计与真值 $\theta$ 的偏离大于等于 $\varepsilon$ ”的可能性。而式 (3-1) 表明，随着 $n$ 的增加，这种可能性越来越小，最终趋近于0。也就是说，只要样本大小 $n$ 足够大，用样本均值去估计总体均值，其误差可以任意小。在数理统计学上，就把 $\bar{X_n}$ 称为 $\theta$ 的相合估计，也就是说，随着样本大小的增加，被估计的量与估计量逐渐“合”在一起了。

> **定义3.2：相合估计**
> 假设总体分布依赖于参数 $\theta_1, \cdots, \theta_k$, $g(\theta_1, \cdots, \theta_k)$ 是 $\theta_1, \cdots, \theta_k$ 的一个给定函数。设 $X_1, \cdots, X_n$ 是从该总体中抽出的样本，$T(X_1, \cdots, X_n)$ 是函数 $g(\theta_1, \cdots, \theta_k)$ 的一个估计量，如果对 $\forall \varepsilon\gt 0$，有
> 
> $$
> \lim \limits_{n\rightarrow \infty}
> P_{\theta_1, \cdots, \theta_k}\Bigr(\big|
> T(X_1, \cdots, X_n)-g(\theta_1, \cdots, \theta_k)
> \big|\ge \varepsilon\Big)=0
> $$
> 
> 而且对于 $(\theta_1, \cdots, \theta_k)$ 一切可能取的值都成立，则称$T(X_1, \cdots, X_n)$ 是函数 $g(\theta_1, \cdots, \theta_k)$ 的一个**相合估计**。


记号 $P_{\theta_1, \cdots, \theta_k}$ 的意义，表示概率实在参数值为 $(\theta_1, \cdots, \theta_k)$ 时去计算的。

相合性是对一个估计量<font color='red'>**最**基本</font>的要求。如果一个估计量没有相合性，那么，无论样本数量多么大，我们也不可能把未知参数估计到任意预定的精度。这种估计量显然是不可取的。

###  渐近正态性
估计量是样本 $X_1, X_2, \cdots, X_n$ 的函数，其<font color='red'>确切的</font>分布需要用到概率轮的相关方法去求。除了若干简单的情况以外，这通常是难以实现的。比如，样本均值算是最简单的统计量，它的分布也不容易求得。

可是，正如中心极限定理中所阐述的，当 $n$ 很大时，**和**的分布渐近于正态分布。理论上可以证明，这个性质不是**和**所独有的，<font color='red'>许多形状复杂的统计量，当样本大小 $n\rightarrow \infty$ 时，其分布都渐近于正态分布</font>。这称为统计量的**渐近正态性**。至于哪些统计量具有渐近正态性，其确切形式是什么，这些都是很高深的理论问题。

### 估计量的大样本性质 vs. 小样本性质
估计量的相合性和渐近正态性称为估计量的**大样本性质**，指的是：这种性质都是对样本 $n\rightarrow \infty$ 来谈的。<font color='red'>对一个固定的  $n$，相合性和渐近正态性都无意义。</font>

与此相对，估计量的无偏性概念是对固定的样本大小来谈的，不需要样本大小区域无穷，这种性质称为**小样本性质**。

总之，大样本性质、小样本性质之分并不在于样本的具体大小如何，而在于样本大小是否趋于无穷。


---

矩估计法，MLE都是建立方程组。

