20220708

<h1>Content</h1>

* TOC
{:toc}


## 统计量

### 统计量的意义

为了研究一个问题而收集数据，数据就是样本。通过确定样本分布而建立统计模型。但要具体实施统计推断，则要依靠依据具体数值的样本。样本本身是一堆杂乱无章的数字，要对这些数字进行加工整理，计算出一些量，用于统计推断。这种由样本计算出来的量，把样本中与所要解决的问题有关的信息集中起来了。

在统计上，把凡是由样本算出来的量称为**统计量**，或者说，统计量就是样本的函数。并且，统计量只依赖于样本，而不能与任何未知的量相关，特别是不能依赖于未知参数。因为统计量的作用就在于对未知参数进行推断。

有用的统计量都是”有的放矢“的，是针对某种需要而构造的。笼统地讲，所提出的统计量应该最好集中了与问题有关的信息。这其实并不容易做到，因为在实践中，往往最初是从直观或某些一般性原则考虑提出统计量，再考察它是否在某种意义下较好地集中了样本中与问题有关的信息量。



### 重要的统计量

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



## 参数的点估计问题

设有一个统计总体，其概率密度函数或者概率函数（分别针对连续型和离散型总体分布）$f(x;\theta_1, \cdots, \theta_k)$ 为 $f(x;\theta_1, \cdots, \theta_k)$ 。参数估计问题的一般提法是：假设从总体中抽出的样本 $X_1, \cdots, X_n$（样本为独立随机样本，即 $X_1, \cdots, X_n$ 独立同分布，且公共分布就是总体分布），要依据这些样本去对参数 $f(x;\theta_1, \cdots, \theta_k)$ 的未知值做出估计。



XXXX

### 矩估计法

#### 随机变量的矩

设 $X$ 为随机变量，$c$ 为常数，$k$ 为正整数，则量 $E[(X-c)^k]$ 称为 $X$ 关于 $c$ 点的 $k$ 阶矩。

比较重要的有两种情况：

（1）$c=0$，这时 $\alpha_k=E(X^k)$ 称为 $X$ 的 **$k$ 阶原点矩**；

（2）$c=E(X)$，这时 $\mu_k=E[(X-EX)^k]$ 称为 $X$ 的 **$k$ 阶中心矩**；

一阶原点矩就是期望。

一阶中心矩 $\mu_1=0$，二阶中心矩 $\mu_2=E[(X-EX)^2]$ 就是 $X$ 的方差 $\mathrm{Var}(X)$。

#### 理论矩和经验矩

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

#### 矩估计法的思想

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



### 极大似然估计法

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



### 贝叶斯估计

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



## 点估计实例

### 正态分布

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
$\tilde{\theta}$ 的表达式 $\eqref{eq3}$ 传达出这样的信息：

（1）假如我们只有样本信息而毫无先验信息，则 $\sigma^2\rightarrow \infty$ ，此时 $\tilde{\theta}=\overline{X}$ ，这和 $\theta$ 矩估计和极大似然估计法的结果是一致的；

（2）加入我们只有先验信息，而毫无样本信息，则 $n\rightarrow 0$ ，则 $\tilde{\theta}=\mu$，即用先研分布的均值 $\mu$ 去作为 $\theta$ 的估计；








---

矩估计法，MLE都是建立方程组。

