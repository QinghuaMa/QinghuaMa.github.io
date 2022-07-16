var store = [{
        "title": "Hello, world!",
        "excerpt":"Welcome Hello world, this is my first Jekyll blog post. I hope you like it! $e^{i\\pi}+1=0$ f = lambda x: x[0] ** 2 + x[1] ** 2 + x[2] ** 2 - 1.0 g = lambda x: 2 * x[0] ** 2 + x[1] ** 2 - 4 * x[2]...","categories": [],
        "tags": ["Hello world"],
        "url": "/Hello-world/",
        "teaser": null
      },{
        "title": "使用PyTorch自动求导机制编写多元牛顿迭代法（PyTorch向量对向量求导）",
        "excerpt":"对于非线性方程组： \\[\\left\\{ \\begin{align*} &amp;x_1^2 + x_2^2 + x_3^2-1.0 = 0 \\\\ &amp;2x_1^2+x_2^2-4x_3=0\\\\ &amp;3x_1^2-4x_2^2+x_3^2 = 0\\\\ \\end{align*} \\right.\\] 初始值给定：$x^{(0)}=(1.0, 1.0, 1.0)^T$。 多元牛顿法的一般迭代形式为： \\[\\begin{align*} \\boldsymbol{x}_0 &amp;= \\boldsymbol{k} \\\\ \\boldsymbol{x}_{k+1} &amp;=\\boldsymbol{x}_{k} - DF(\\boldsymbol{x}_k)^{-1}F(\\boldsymbol{x}_k),\\ k= 0,1,2,\\cdots \\end{align*}\\] 求解的关键是求出雅各比矩阵$DF(\\boldsymbol{x}_k)$。 \\[DF(x) = \\begin{bmatrix} \\dfrac{\\partial f_1}{\\partial x_1} &amp; \\dfrac{\\partial f_1}{\\partial x_2} &amp; \\cdots &amp; \\dfrac{\\partial f_1}{\\partial x_n}\\\\...","categories": ["blog"],
        "tags": ["PyTorch","python"],
        "url": "/blog/PytorchAutoDiff/",
        "teaser": null
      },{
        "title": "周期矩形脉冲（周期门函数）的三角型傅里叶级数和指数型傅里叶级数",
        "excerpt":"周期矩形脉冲 有一个幅度为1，脉冲宽度为$\\tau$的周期矩形脉冲，其周期为$T$，如图所示。 现分别求其三角型傅里叶级数和指数型傅里叶级数。 三角函数形式的傅里叶级数(余弦形式的傅里叶级数) 根据周期信号的三角型傅里叶级数，周期信号$f(t)$可以分解为一系列正弦信号和余弦信号和的形式： \\[f(t)=\\dfrac{a_0}{2}+\\sum^{\\infty}_{n=1}[a_ncos(n\\Omega t)+b_nsin(n\\Omega t)]\\label{equa1}\\] 公式中的系数计算公式分别为： \\[\\begin{align*}直流分量：&amp;\\dfrac{a_0}{2}=\\dfrac{1}{T}\\int^{\\frac{T}{2}}_{-\\frac{T}{2}}f(t)dt\\\\ 余弦系数分量：&amp;a_n=\\dfrac{2}{T}\\int^{\\frac{T}{2}}_{-\\frac{T}{2}}f(t)cos(n\\Omega t)dt\\\\ 正弦系数分量：&amp;b_n=\\dfrac{2}{T}\\int^{\\frac{T}{2}}_{-\\frac{T}{2}}f(t)sin(n\\Omega t)dt\\\\ \\end{align*}\\] 进一步，可将式 $\\eqref{equa1}$ 转换为余弦形式的傅里叶级数： \\[f(t)=\\dfrac{A_0}{2}+\\sum^{\\infty}_{n=1}A_ncos(n\\Omega t+\\phi_n) \\label{equa2}\\] 可以根据式 $\\eqref{equa2}$ 得到周期信号的单边频谱，包括单边幅度谱和单边相位谱。 给定的周期矩形脉冲$g_\\tau(t)$为偶函数，因此正弦系数分量$b_n=0$，余弦系数分量$a_n$为： \\[\\begin{align*} a_n&amp;=\\dfrac{2}{T}\\int^{\\frac{\\tau}{2}}_{-\\frac{\\tau}{2}}cos(n\\Omega t)dt\\\\ &amp;=\\dfrac{2}{n\\Omega T}\\int^{\\frac{\\tau}{2}}_{-\\frac{\\tau}{2}}cos(n\\Omega t)d(n\\Omega t)\\\\&amp;=\\dfrac{2}{n\\pi}sin(n\\Omega\\dfrac{\\tau}{2})\\\\ &amp;=\\dfrac{2}{n\\pi}sin(n\\pi \\dfrac{\\tau}{T})\\\\ &amp;=\\dfrac{2\\tau}{T}Sa(n\\pi \\dfrac{\\tau}{T})\\quad n=0,1 ,2, \\cdots \\end{align*}\\] 式中，$Sa(x)=\\dfrac{sinx}{x}$为抽样函数。于是周期矩形脉冲 $g_\\tau(t)$ 可以分解为： \\[g_T(t)=\\dfrac{\\tau}{T}+\\sum^{\\infty}_{n=1}\\dfrac{2\\tau}{T}Sa(n\\pi \\dfrac{\\tau}{T})cos(n\\Omega t)\\notag\\] 该公式也是余弦形式的傅里叶级数，因此可以直接根据它来绘制周期信号$g_T(t)$的单边频谱。 虚指数形式的傅里叶级数 根据周期信号的指数型傅里叶级数，周期函数$f(t)$可以分解为： \\[f(t)=\\sum^{\\infty}_{n=-\\infty}F_ne^{jn\\Omega...","categories": ["blog"],
        "tags": ["信号与系统"],
        "url": "/blog/Fourier-series-of-Rectangular-periodic-signal/",
        "teaser": null
      },{
        "title": "线性时不变(LTI)系统的零状态响应等于输入信号与单位脉冲响应的卷积",
        "excerpt":"以离散系统为例。在离散的线性时不变(linear time invariant, LTI)系统中，输入为单位脉冲函数$\\delta(k)$时产生单位脉冲响应$h(k)$，则有：     根据卷积和的定义，对于任意输入信号$f(k)$：   \\[\\begin{aligned} 输入&amp;=\\sum^{\\infty}_{i=-\\infty}f(i)\\delta(k-i)=f(k)*\\delta(k)=f(k)\\\\响应&amp;=\\sum^{\\infty}_{i=-\\infty}f(i)h(k-i)=f(k)*h(k)\\end{aligned}\\]  即：     ","categories": ["blog"],
        "tags": ["信号与系统"],
        "url": "/blog/Zero-state-response-of-LTI-system/",
        "teaser": null
      },{
        "title": "切比雪夫多项式及切比雪夫插值",
        "excerpt":"切比雪夫多项式 定义$n$阶切比雪夫多项式$T_n(x)=\\cos(n\\arccos x)$。$n$取不同的值对应着不同的关于$x$的多项式。例如： 当$n=0$时，$T_0(x)=\\cos(0)=1$; 当$n=1$时，$T_1(x)=\\cos(\\arccos x)=x$; 当$n=2$时，$T_2(x)=\\cos(2\\arccos x)$，令$y=\\arccos x$，则有： \\[T_2(x)=\\cos(2y)=2\\cos^2(y)-1=2x^2-1\\] 同理，一般地有： \\[\\begin{aligned} T_{n+1}(x)&amp;=\\cos[(n+1)\\arccos x]=\\cos[(n+1)y]=\\cos(ny)\\cos(y)-\\sin(ny)\\sin(y)\\\\ T_{n-1}(x)&amp;=\\cos[(n-1)\\arccos x]=\\cos[(n-1)y]=\\cos(ny)\\cos(y)+\\sin(ny)\\sin(y) \\end{aligned}\\] 进一步可以得到： \\[\\begin{aligned} T_{n+1}(x)+ T_{n-1}(x)=2\\cos(ny)\\cos(y)=2xT_n(x) \\end{aligned}\\] 即： \\[T_{n+1}(x)=2xT_n(x)-T_{n-1}(x)\\tag{1}\\] 式(1)即为切比雪夫的三项递推关系式。在已知 $T_0(x)=1$，$T_1(x)=x$的条件下，通过式(1)可以计算出任意第$n$个切比雪夫多项式。如： \\[\\begin{aligned}T_2(x)&amp;=2xT_1(x)-T_0(x)=2x^2-1\\\\ T_3(x)&amp;=2xT_2(x)-T_1(x)=4x^3-3x \\end{aligned}\\] 切比雪夫多项式的性质 在 $x\\in [-1,1]$区间观察切比雪夫多项式，可以得到以下几个性质： 性质1： $T_n(x)$是最高此项为$2^{(n-1)}x^n$的$n$次多项式，并且$T_{2n}$只含$x$的偶次幂，$T_{2n+1}$只含$x$的奇次幂 性质2： $T_n(x)$在区间$[-1, 1]$上有$n$个零点 \\[x_i=\\cos(\\dfrac{2i+1}{2n}\\pi),\\quad i=0,1,\\cdots,n-1\\] 证明： \\[\\begin{aligned} &amp;T_n(x)=\\cos(n\\arccos x)=0\\\\ \\Rightarrow&amp;n\\arccos x=\\dfrac{\\pi}{2}+i\\pi,,\\quad i=0,1,\\cdots,n-1\\\\ \\Rightarrow&amp;x_i=\\cos(\\dfrac{2i+1}{2n}\\pi),\\quad i=0,1,\\cdots,n-1 \\end{aligned}\\]...","categories": ["blog"],
        "tags": ["数值分析"],
        "url": "/blog/Chebyshev-polynomials/",
        "teaser": null
      },{
        "title": "n次插值多项式的截断误差估计式（拉格朗日插值余项）",
        "excerpt":"   定理（$n$次插值多项式的截断误差估计式）     设$f^{(n)}(x)$在区间$[a,b]$上连续，$f^{(n+1)}(x)$在$(a,b)$内存在，插值节点$a\\le x_0&lt;x_1&lt;\\cdots&lt;x_n\\le b$，$p_n(x)$是满足插值条件$p_n(x_i)=y_i(i=0,1,\\cdots ,n)$的$n$次插值多项式，则对于任意$x\\in[a,b]$，存在$\\xi=\\xi(x)\\in(a,b)$，使得截断误差（或插值余项）$R_n(x)$：   \\[\\begin{aligned}R_n(x)&amp;=f(x)-p_n(x)\\\\&amp;=\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod \\limits_{i=0}^n(x-x_i)\\end{aligned}\\]   证明： 设截断误差$R_n(x)=f(x)-p_n(x)$，则$R_n(x)$至少有$n+1$个零点：$x_0, x_1, \\cdots, x_n$；于是设:   \\[R_n(x)=K(x)\\prod \\limits_{i=0}^n(x-x_i) \\tag{1}\\]  其中$K(x)$是与$x$有关的待定函数。下面确定$K(x)$。   由于我们要考察非插值节点的误差（插值节点的误差均为0），因此固定任意的$x\\in[a,b]$且$x\\ne x_i(i=0,1,\\cdots ,n)$，构造辅助函数$\\varphi(t)$：   \\[\\varphi(t)=R_n(t)-K(x)\\prod \\limits_{i=0}^n(t-x_i)\\tag{2}\\]  于是有$\\varphi(x_i)=0(i=0,1,\\cdots ,n)$，$\\varphi(x)=0$【因为对于固定的$x$，有式(1)成立，即式(2)的右端项为0】，即$\\varphi(t)$至少具有$n+2$零点：$x_0, x_1, \\cdots, x_n,x$   根据定理条件定理可知，$\\varphi^{(n)}(t)$在区间$[a,b]$连续，$\\varphi^{(n+1)}(t)$在区间$(a,b)$存在；根据罗尔定理，$\\varphi’(t)$在两个零点之间至少存在$1$个零点，即$\\varphi’(t)$在区间$[a,b]$内至少有$n+1$个零点，同理$\\varphi’‘(t)$在区间$[a,b]$内至少有$n$个零点。反复使用罗尔定理可以得到$\\varphi^{(n+1)}(t)$在区间$(a,b)$内至少存在一个零点，即至少存在一点$\\xi$，使得$\\varphi^{(n+1)}(\\xi)=0$。   将式(2)两边同求$n+1$阶导数，再代入$\\xi$可以得到：   \\[\\begin{aligned} \\varphi^{(n+1)}(\\xi)&amp;=R_n^{(n+1)}(\\xi)-K(x)(n+1)!\\\\&amp;=f^{(n+1)}(\\xi)-p_n^{(n+1)}(\\xi)-K(x)(n+1)!=0 \\end{aligned}\\]  于是可以求得：   \\[K(x)=\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!},\\quad \\xi\\in(a,b)且与x有关\\]  将 $K(x)$ 代入式(1)得到： \\(R_n(x)=\\dfrac{f^{(n+1)}(\\xi)}{(n+1)!}\\prod \\limits_{i=0}^n(x-x_i),\\quad \\xi\\in(a,b)\\tag{3}\\)   证毕。   式(3)即为 $n$ 次插值多项式的截断误差估计式，也称为拉格朗日插值余项。  ","categories": ["blog"],
        "tags": ["数值分析"],
        "url": "/blog/Lagrange-Form-Remainder/",
        "teaser": null
      },{
        "title": "MATLAB error, Deep Learning Toolbox, Invalid input data. Invalid number of spatial dimensions. Layer expects 0 but received 1.",
        "excerpt":"报错记录：MATLAB Deep Learning Toolbox，报错: Invalid input data. Invalid number of spatial dimensions. Layer expects 0 but received 1. 在使用MATLAB Deep Learning Toolbox在构建神经网络时，想要使用featureInputLayer函数构建神经网络的特征输入层，用于接收数值特征，但是在进行custom training loop过程中使用forward函数时报错。 精简后的测试代码： clc, clear % define network net = featureInputLayer(4, 'Name', 'inputLayer'); % convert layer graph to dlnetwork object net = dlnetwork(net); % specify formatted batch input...","categories": ["blog"],
        "tags": ["MATLAB"],
        "url": "/blog/MATLAB-Deep-Learning-Toolbox-error/",
        "teaser": null
      },{
        "title": "向量点积的代数定义和几何定义",
        "excerpt":"向量点积的代数定义和几何定义 向量点积(dot product)可以从代数角度和几何角度两个角度来定义。这两种定义在欧几里得空间的笛卡尔坐标系中是等效的。 向量点积的代数定义 长度相等的两个向量$\\boldsymbol{a}=[a_1,a_2,\\cdots, a_n]$和$\\boldsymbol{b}=[b_1,b_2,\\cdots, b_n]$的内积可以定义为： \\[\\boldsymbol{a} \\cdot \\boldsymbol{b}=\\sum^{n}_{i=1}a_ib_i=a_1b_1+a_2b_2+\\cdots+a_nb_n\\] 并且，向量内积与顺序无关： \\[\\boldsymbol{a}\\cdot \\boldsymbol{b}=\\boldsymbol{b}\\cdot \\boldsymbol{a}\\] 若向量$\\boldsymbol{a}$和$\\boldsymbol{b}$均为行向量，则向量内积可以用矩阵乘积(matrix product)来表示： \\[\\boldsymbol{a}\\cdot \\boldsymbol{b}=\\boldsymbol{a}\\boldsymbol{b}^T\\] 以二维向量为例，若向量 \\[\\boldsymbol{a}=[0,2]^T\\\\ \\boldsymbol{b} = [2,2]^T\\] 则 \\[\\boldsymbol{a}\\cdot \\boldsymbol{b}=\\begin{bmatrix}0\\\\2\\end{bmatrix} \\cdot \\begin{bmatrix}2\\\\2 \\end{bmatrix}=0\\times2+2\\times2=4\\] 向量点积的几何定义 在欧几里得空间，欧几里得向量(Euclidean vector)是一个既有大小又有方向的几何量。两个欧几里得向量$\\boldsymbol{a}$和$\\boldsymbol{b}$的点积(亦称为内积，inner product)定义为 \\[\\boldsymbol{a}\\cdot \\boldsymbol{b}=||\\boldsymbol{a}||\\ ||\\boldsymbol{b}||\\cos \\theta\\tag{1}\\] 其中$\\theta$是向量$\\boldsymbol{a}$和$\\boldsymbol{b}$的夹角，$\\vert\\vert\\boldsymbol{a}\\vert\\vert$表示向量$\\boldsymbol{a}$的大小。 若定义向量$\\boldsymbol{a}$在向量$\\boldsymbol{b}$上的标量投影(scalar projection) \\[a_b =\\boldsymbol{a}\\cdot \\hat{\\boldsymbol{b}}= ||\\boldsymbol{a}||\\cos \\theta \\tag{2}\\] 则根据式(1)，向量$\\boldsymbol{a}$和$\\boldsymbol{b}$内积可写作 \\[\\begin{aligned}\\boldsymbol{a}\\cdot \\boldsymbol{b}&amp;=||\\boldsymbol{a}||\\ ||\\boldsymbol{b}||\\cos...","categories": ["blog"],
        "tags": ["线性代数"],
        "url": "/blog/Dot-product/",
        "teaser": null
      },{
        "title": "线性变换的概念及其与矩阵之间的关系",
        "excerpt":"变换(transformation)实际上可以看作是一种函数(function)，它接收一个向量，对其进行运算后输出一个向量。 但是，“变换(transformation)”这个词隐含着“运动(movement)”的含义。可以想象在空间中的一个向量经过线性变换后移动到了另一个位置。 而线性变换(linear transformation)则是一种特殊类型的变换，这种变换具有以下两条性质： Lines remain lines: 直线在变换后仍然是直线，不能有所弯曲； Origin remains fixed: 原点必须保持固定；【比如：仿射变换(Affine Transformation)不满足这个要求】 即，线性变换就是“保持网格线平行且等距分布(Grid lines remain parallel and evenly spaced)”的变换，并且在变换过程中原点的位置保持不动。 实际上，线性变换具有的“网格线在变换前后保持平行且等距分布”的特性有一个重要的推论： 向量$\\vec{v}$可以由空间中的一组基的线性组合来表示；线性变换改变了基向量的位置，但是并不改变基的线性组合。 以二维向量为例，设在标准正交基$\\hat{i}=(1,0)$和$\\hat{j}=(0,1)$下，向量$\\vec{v}$的坐标为$(2,3)$，即 \\[\\vec{v}=2\\times(1,0)+3\\times(0,1)=(2,3)\\] 假设有一个线性变换使得基底$\\hat{i}$和$\\hat{j}$变换为$\\hat{i}{transformed}=(1,0)$和$\\hat{j}{transformed}=(-1,1)$，则变换后的向量 \\[\\vec{v}_{transformed}=2\\times(1,0)+3\\times(-1,1)=(-1,3)\\] 也就是说，我们只需要根据变换后的$\\hat{i}{transformed}$和$\\hat{j}{transformed}$，就能推断出变换后$\\vec{v}_{transformed}$的位置。 因此，一个二维线性变换仅由四个数字完全确定，即变换后的$\\hat{i}$的两个坐标和变换后的$\\hat{j}$的两个坐标。我们将这些基向量的坐标以列的形式放入到一个2 $\\times$ 2的格子中，就得到了一个2 $\\times$ 2矩阵。 \\[A =\\begin{bmatrix} 1&amp;-1\\\\ 0&amp;1\\\\ \\end{bmatrix}\\] 而矩阵A与原向量$\\vec{v}$相乘，按照矩阵乘法的定义 \\[A \\vec{v}=\\begin{bmatrix} 1&amp;-1\\\\ 0&amp;1\\\\ \\end{bmatrix} \\begin{bmatrix} 2\\\\ 3 \\end{bmatrix}= 2\\times\\begin{bmatrix} 1\\\\ 0...","categories": ["blog"],
        "tags": ["线性代数"],
        "url": "/blog/Linear-transformation-and-matrix/",
        "teaser": null
      },{
        "title": "行列式的定义",
        "excerpt":"行列式的定义   有的线性变换会将空间向外拉伸，有的则将空间内挤压，那么如何测量某特定线性变换对一块给定区域的缩放比例呢？   由“线性变换使网格线保持平行分布且等距”这一事实可以推断出，在二维空间内，我们只需要知道单位正方形面积变化的比例，就可以知道其他任何区域的面积变化比例，这个比例是相同的，因为无论单位方格如何变化，其他大小的方格也会有相同变化。    而对于不是方格的不规则形状，可以用很多方格进行近似，只要使用的方格足够小，近似就能足够好。由于所有小方格都进行了一个比例的缩放，所以整个形状也进行了同样比例的缩放。   线性变换所改变面积的缩放比例被称为这个线性变换的行列式(determinant)，记作$\\det(A)$ 。   在二维空间中，如果一个线性变换的行列式是3，表明它将一个区域的面积增加为原来的3倍；如果一个线性变换的行列式是0.5，则它将一个区域的面积减小一半。而一个(二维)线性变换的行列式为0，说明它将整个平面压缩到一条直线上，甚至是一个点上。   而当线性变换的行列式为负值时，则说明这样的变换改变(reverse)了空间的定向(orientation)，从直观上看，这个线性变换像是将空间翻转了；从基向量的相对位置上来看，线性变换的行列式为负值表明基向量的相对位置发生了变化。比如在初始状态时，$\\hat{j}$在$\\hat{i}$的左边，而在线性变换之后，$\\hat{j}$在$\\hat{i}$的右边      但是行列式的绝对值依然表示区域面积的缩放比例。   而在三维空间，行列式的值表示变换前后的体积缩放比例，行列式为0则意味着整个空间被压缩为零体积的东西，也就是一个平面或一条直线，或者一个点。而行列式为负数，同样也说明线性变换改变了三维空间的定向。有一种方法来描述三维空间的定向，就是“右手定则”。   比如，在进行线性变换前，用右手食指指向$\\hat{i}$的方向，中指指向$\\hat{j}$的方向，大拇指指向$\\hat{k}$的方向，如果在变换后仍然可以这么做，那么三维空间的定向就没有发生变化，行列式为正数；否则，如果在变换后只能用左手这么做，则说明定向发生了变化，行列式为负数。     计算行列式  以二维空间中的线性变换为例，设矩阵   \\[A= \\begin{bmatrix} a&amp;b\\\\ c&amp;d\\\\ \\end{bmatrix}\\]  则根据矩阵和线性变换的关系，可以得到下图      进而根据平行四边形的性质可以得到    因此   \\[\\det (A)=\\dfrac{S}{S^\\prime} =(a+b)(c+d)-ac-bd-2bc =ad-bc\\]  即   \\[\\det (A)=ad-bc\\]   参考资料   [1] 3Blue1Brown线性代数系列视频  ","categories": ["blog"],
        "tags": ["线性代数"],
        "url": "/blog/Determinant/",
        "teaser": null
      },{
        "title": "线性方程组求解的几何意义",
        "excerpt":"线性方程组(一致方程组)求解的几何意义 线性方程组(Linear system of equations)和矩阵向量乘法(matrix-vector multiplication)非常相似。 其中，$A$被称为系数矩阵(coefficients)，$\\boldsymbol{x}$被称为变量(variables)，$\\boldsymbol{v}$称为常数向量(constants)。从几何上看，求解这个方程组意味着我们去寻找一个向量$\\boldsymbol{x}$，使得它在经过线性变换$A$后与向量$\\boldsymbol{v}$重合。设有二维线性方程组 这个方程解的形式依赖于矩阵A所代表的变换是将空间挤压到一条直线或点等低维空间，还是像初始状态一样的完整的二维空间。根据行列式所代表的含义，上述两种情况分别对应：$A$ 的行列式为零和 $A$ 的行列式不为零。 矩阵的行列式不等于零(矩阵的逆存在) 当 $\\det (A)\\neq0$ 时，此时空间并未被挤压为零面积面积的区域，在这种情况下，有且仅有一个向量在变换后与v重合，并且可以通过逆向进行变换找到这个向量。 当进行逆向变换时，它实际上对应了另一个线性变换，通常称为A的逆(the inverse of A)，记作$A^{-1}$。 $A^{-1}$是满足以下性质的唯一变换：对某一向量首先应用$A$代表的线性变换，再应用$A^{-1}$代表的线性变换，就会回到原始状态。 两个变换相继作用的效果在代数上体现为矩阵乘法，因此A逆的核心性质在于，$A^{-1}A$表示一个“什么都不做”的矩阵，这个变换被称为恒等变换(identity transformation)。$A^{-1}A$所对应的线性变换“什么都不做”，代表矩阵$A^{-1}A$的$\\hat{i}$和$\\hat{j}$不变，即$A^{-1}A$ 的两列就是(1, 0)和(0,1)： \\[A^{-1}A= \\begin{bmatrix} 1&amp;0\\\\ 0&amp;1\\\\ \\end{bmatrix}\\] 线性方程组的两端同乘$A^{-1}$，可以得到 \\[\\begin{align} A^{-1}A\\boldsymbol{x}&amp;=A^{-1}\\boldsymbol{v}\\\\ \\boldsymbol{x}&amp;=A^{-1}\\boldsymbol{v}\\\\ \\tag{1} \\end{align}\\] 求解式(1)就可以得到向量$\\boldsymbol{v}$在经过矩阵$A$线性变换前的位置$\\boldsymbol{x}$。 矩阵的行列式等于零(矩阵的逆不存在) 当$\\det (A) = 0$时，表明与这个方程组相关的线性变换将空间压缩到更低的维度上，此时就无法找到线性变换$A$所对应的逆变换$A^{-1}$使得$A^{-1}A$为恒等变换，因为我们不可能将一个低维的信息精确地解压缩为高维信息。 仍以二维空间为例。我们之前提到过，高维空间投影到数轴上操作实际上是一种线性变换。假设线性变换$A$使得某一向量投影在一维空间的数轴$x_3$，变换后的向量记作$\\boldsymbol{v}$。 由上图所示，我们想要找到精确的变换前的向量$\\boldsymbol{v}$是不可能的，因为在直线$L$上有无数个向量经过不同的线性变换后得到向量$\\boldsymbol{x}$。甚至没有一个函数(function)能够做到将$\\boldsymbol{x}$精确还原(因为函数只能将输入变换为一个输出)，因此就不存在$A^{-1}$使得$A^{-1}A$为恒等变换，也就意味着矩阵$A$不存在逆矩阵。 事实上，矩阵可逆和矩阵的行列式不为零是充要条件 \\[A^{-1} exist \\Leftrightarrow \\det(A)\\neq 0\\]...","categories": ["blog"],
        "tags": ["线性代数"],
        "url": "/blog/Linear-system-of-equations/",
        "teaser": null
      },{
        "title": "MATLAB中UI figure和Axes的位置和大小设定",
        "excerpt":"UI figure的位置和大小设定 clc, clear, close all left = 29; bottom = 7; width = 15; height = 15; fig = figure( ... 'unit','centimeters', ... % sepcify units 'position',[left, bottom, width, height], ... % specify UI figure position 'Color', 'White', ... % speycify background color 'Resize', false ... % can not...","categories": ["blog"],
        "tags": ["MATLAB"],
        "url": "/blog/Matlab-UI-figure-and-Axes/",
        "teaser": null
      },{
        "title": "Gamma函数和Beta函数的定义及性质",
        "excerpt":"Gamma函数 $\\Gamma$ 函数（读作Gamma函数）$\\Gamma(x)$，通过积分 \\(\\Gamma(x)=\\int^{\\infty}_0e^{-t}t^{x-1}\\mathrm{d}t\\qquad (x\\gt0)\\tag{1-1}\\) 来定义。该积分在 $x\\gt0$ 时有意义。 （Ⅰ）根据定义式(1-1)，有 $\\Gamma(1)=\\int^{\\infty}_0e^{-t}t^{0}\\mathrm{d}t=1$； （Ⅱ）令 $t=u^2$，则 \\[\\begin{aligned} \\Gamma(\\dfrac12) &amp;=\\int^{\\infty}_0e^{-u^2}(u^2)^{-1/2}(2u\\mathrm{d}u)\\\\ &amp;=\\int^{\\infty}_02e^{-u^2}\\mathrm{d}u\\\\ &amp;=\\int^{\\infty}_{-\\infty}e^{-u^2}\\mathrm{d}u \\end{aligned}\\] 再令 $u=v/\\sqrt{2}$，可以得到 \\[\\begin{aligned} \\Gamma(\\dfrac12) &amp;=\\dfrac1{\\sqrt{2}}\\int^{\\infty}_{-\\infty}e^{-(v^2/2)}\\mathrm{d}v\\\\ &amp;=\\sqrt{\\pi}\\dfrac{1}{\\sqrt{2\\pi}}\\int^{\\infty}_{-\\infty}e^{-(v^2/2)}\\mathrm{d}v\\\\ \\label{gamma12} \\end{aligned}\\] 上式中 $(1/\\sqrt{2\\pi})\\int^{\\infty}_{-\\infty}e^{-(v^2/2)}\\mathrm{d}v$ 是 $v\\sim N(0,1)$ 密度函数在整个实数域的积分，其值为1，故可以得到 $\\Gamma(1/2)=\\sqrt{\\pi}$。 （Ⅲ）根据定义式(1-1)，以及函数分部积分公式，有 \\[\\begin{aligned} \\Gamma(x+1)&amp;=\\int^{\\infty}_0e^{-t}t^{x}\\mathrm{d}t=-\\int^{\\infty}_0t^{x}\\mathrm{d}e^{-t}\\\\ &amp;=t^{x}e^{-t}\\Big|_0^{\\infty}+x\\int^{\\infty}_0e^{-t}t^{x-1}\\mathrm{d}t=0+x\\Gamma(x)\\\\ &amp;=x\\Gamma(x) \\end{aligned}\\] 于是，可以得到 $\\Gamma$ 函数重要的递推公式：$\\Gamma(x+1)=x\\Gamma(x).$ 根据计算出的 $\\Gamma(1)$ 和 $\\Gamma(1/2)$ 的值，可以得出当 $n$ 为正整数时 $\\Gamma(n)$...","categories": ["blog"],
        "tags": ["概率论与数理统计"],
        "url": "/blog/GammaAndBetaFunction/",
        "teaser": null
      },{
        "title": "带正则化项的最小二乘法与最大后验估计",
        "excerpt":"Content 带正则化项的最小二乘法 最大后验估计与 Regularized LSE 的关系 带正则化项的最小二乘法 在介绍最小二乘法的文章中提到，对于具有 $N$ 个样本点的最小二乘拟合问题，最小二乘损失函数的形式为： \\[L(w)=\\sum_{i=1}^N|w^Tx_i-y_i|^2\\label{1-1}\\] 并具有解析解， \\[\\hat{w}=(X^TX)^{-1}X^TY\\label{1-2}\\] 其中，数据点 $D={(x_1,y_1), (x_2, y_2), \\cdots, (x_N, y_N)}$，且 $x_i\\in\\mathbb{R}^p$，$y_i\\in\\mathbb{R}$，$i=1,2,\\cdots, N$，拟合函数为 $f(w)=w^Tx$。 但在实践中，当（1）样本点的数量 $N$ 没有那么大，或者（2）$N$ 小于 $x$ 的维度 $p$ 时，式 $\\eqref{1-2}$ 就可能没有解析解。从数学的角度看，是因为式 $\\eqref{1-2}$ 中的矩阵 $X^TX$ 不可逆；从机器学习实践的角度看，这种情况易造成过拟合现象。 为了解决最小二乘法的这个问题，我们通常会引入“正则化”的框架。 在式 $\\eqref{1-1}$ 表示的损失函数中添加惩罚项（Penalty） $\\lambda P(w)$，得到带正则化项的最小二乘法（Regularized LSE）： \\[\\arg\\max \\limits_w \\big[L(w)+ {\\lambda P(w)}\\big]\\] 我们最常使用的是...","categories": ["blog"],
        "tags": ["概率论与数理统计"],
        "url": "/blog/MAP/",
        "teaser": null
      },{
        "title": "从曲线拟合、参数估计角度、超定方程求解的几何角度看最小二乘法",
        "excerpt":"注：本文章仅仅关注线性系统，对于更广泛存在的非线性系统未做讨论。 Content 从曲线拟合的角度看最小二乘法 从参数估计角度（极大似然估计）看最小二乘法 从几何角度（超定方程求解的几何意义）看最小二乘法 从曲线拟合的角度看最小二乘法 假设有 $N$ 个样本点：$D={(x_1,y_1), (x_2, y_2), \\cdots, (x_N, y_N)}$，且 $x_i\\in\\mathbb{R}^p$，$y_i\\in\\mathbb{R}$，$i=1,2,\\cdots, N$。设 \\[\\begin{equation} X=[x_1,x_2,\\cdots, x_N]^T=\\begin{bmatrix}x_1^T\\\\x_2^T\\\\\\vdots\\\\x_N^T\\end{bmatrix}_{N\\times p}, \\quad Y=\\begin{bmatrix}y_1\\\\y_2\\\\\\vdots\\\\y_N\\end{bmatrix}_{N\\times 1} \\end{equation}\\] 假设有拟合曲线 $f(w)=w^Tx$，则最小二乘估计（Least square estimation, LSE）损失函数可以表示为： \\[L(w)=\\sum_{i=1}^N|w^Tx_i-y_i|^2\\] 进一步展开可以得到： \\[\\begin{align*}L(w)&amp;=\\sum_{i=1}^N|w^Tx_i-y_i|^2\\\\&amp;=(w^Tx_1-y_1,w^Tx_2-y_2,\\cdots,w^Tx_N-y_N) \\begin{bmatrix}w^Tx_1-y_1\\\\w^Tx_2-y_2\\\\\\vdots\\\\w^Tx_N-y_N\\end{bmatrix}\\\\ &amp;=(w^TX^T-Y^T)(Xw-Y)\\\\ &amp;=w^TX^TXw-w^TX^TY-Y^TXw-Y^TY\\\\ &amp;=w^TX^TXw-2w^TX^TY+Y^TY \\end{align*}\\] 最小二乘法估计估计出的参数 $\\hat{w}$ 应当使该损失函数的值最小，因此有 \\[\\begin{aligned} \\hat{w}&amp;=\\arg \\min \\limits_{w} L(w)\\notag \\\\ &amp;=\\arg \\min \\limits_{w} \\sum_{i=1}^N|w^Tx_i-y_i|^2\\notag...","categories": ["Mathematics"],
        "tags": ["概率论与数理统计","线性代数"],
        "url": "/mathematics/MLE/",
        "teaser": null
      },{
        "title": "超定方程的定义和求解",
        "excerpt":"超定方程组的定义 根据维基百科对于超定方程组的定义： Overdetermined system In mathematics, a system of equations is considered overdetermined if there are more equations than unknowns. An overdetermined system is almost always inconsistent (it has no solution) when constructed with random coefficients. However, an overdetermined system will have solutions in some cases, for example if some...","categories": ["blog"],
        "tags": ["定义"],
        "url": "/blog/Overdetermined-system/",
        "teaser": null
      },{
        "title": "线性方程组解的判定",
        "excerpt":"Content      线性方程组解的判定   齐次线性方程组解的判定   非线性方程组不存在类似解的判定   线性方程组解的判定   假设 $A$ 是一个 $m\\times n$ 矩阵，则对于线性方程组(systems of linear equations)   \\[A\\boldsymbol{x}=\\boldsymbol{b}\\label{systemsoflinear equations}\\]  设增广矩阵为$B=[A,\\boldsymbol{b}]$，则有解的判定                  条件       解的判定                       $\\mathrm{rank}(A)=\\mathrm{rank}(B)$       有解                 $\\mathrm{rank}(A)=\\mathrm{rank}(B)=n$       有唯一解                 $\\mathrm{rank}(A)=\\mathrm{rank}(B)&lt;n$       有无穷多解                 $\\mathrm{rank}(A)&lt;\\mathrm{rank}(B)$       无解            齐次线性方程组解的判定   特别地，对于齐次线性方程组(homogeneous linear equations)   \\[A\\boldsymbol{x}=\\boldsymbol{0}\\label{homogeneous}\\]  方程组一定有解（至少存在零解）。   进一步地，齐次线性方程组存在非零解的充要条件是：   \\[齐次线性方程组\\eqref{homogeneous}有非零解\\Leftrightarrow r(A)&lt;n\\notag\\]   非线性方程组不存在类似解的判定   秩(rank)是基于线性方程组定义的，因此对于非线性方程组，并不存在类似通用的判定解的条件。实际上，非线性的概念非常宽泛和复杂，只要输入输出不满足线性性质（齐次性和可加性）的函数都被称为非线性函数，比如多项式函数、带有微分项、偏微分项的函数等等。因此，判定由它们所构成构成的方程组的解的情况当然不存在类似的通用方法。     参考   [1] Matrix Cookbook.   [2] Nonlinear system.   ","categories": ["blog"],
        "tags": ["线性代数"],
        "url": "/blog/The-solutions-of-linear-equations/",
        "teaser": null
      },{
        "title": "借我变如不曾改变",
        "excerpt":"   “借我变如不曾改变”        借我   借我一个暮年，   借我碎片，   借我瞻前与顾后，   借我执拗如少年，   借我后天长成的先天，   借我变如不曾改变，   借我素淡的世故与明白的愚，   借我可预知的脸，   借我悲怆的磊落，   借我温软的鲁莽和玩笑的庄严，   借我最初与最终的不敢，借我不言而喻的不见，   借我一场秋啊，可你说这已是冬天。   ——樊小纯  ","categories": ["Life"],
        "tags": ["A word"],
        "url": "/life/Never-Change/",
        "teaser": null
      },{
        "title": "迭代法求解非线性方程(组)",
        "excerpt":"迭代法原理 迭代法求解非线性方程 二分法 求解方程的第一步是确定根是否存在。 介值定理(Intermediate value theorem) 令$f$是区间$[a,b]$上的连续函数，若满足$f(a)f(b)&lt;0$，则 $a$ 和 $b$ 之间存在一个根 $r$, 即存在 $a&lt;r&lt;b$ 满足 $f(r) = 0$。 根据介值定理，可以得到求解方程数值根最简单的方法——二分法(Bisection method)：通过不断把函数$f(x)$的零点所在的区间一分为二，使区间的两个端点逐步逼近零点，每进行一次二分法都把区间中点作为根的估计值。 假设 $[a,b]$ 为初始区间，在 $n$ 次二分后，得到的最终区间 $[a_n,b_n]$ 的长度为$(b-a)/2^n$，选择中点 $x_r = (a_n + b_n)/2$ 作为解的最有估计，与真实值之间的误差不会超过区间长度的一半，即： \\[\\vert x_r-r\\vert &lt;\\dfrac{b-a}{2^{n+1}}\\label{errorthreshold}\\] 式 $\\eqref{errorthreshold}$ 表明二分法迭代次数和精度之间的关系，并且表明二分法可以保证线性收敛。但是由于收敛速度较慢，运算量较大。因此，二分法常用于求根的大体范围，即进行根的隔离。 不动点迭代 方程 $f(r)=0$ 根的求解问题，都可以转换为求解不动点方程的问题 \\[g(r)=f(r)+r=r\\] 不动点(fixed point) 当$f(r)=r$时，称实数$r$为函数$f$的不动点。 $g(r)=r$ 就是不动点方程。对于这样的方程，我们可以从一个初始值...","categories": ["Mathematics"],
        "tags": ["Numerical Analysis"],
        "url": "/mathematics/Solve-nonliear-system-using-iterative-method/",
        "teaser": null
      },{
        "title": "这世界那么多人",
        "excerpt":"    这世界有那么个人   活在我 飞扬的青春   在泪水里浸湿过的长吻   常让我 想啊 想出神  ","categories": ["Life"],
        "tags": ["A word"],
        "url": "/life/Crowded-World/",
        "teaser": null
      },{
        "title": "向量求导公式",
        "excerpt":"标量对向量求导 标量对向量求导 设 $f(x_1, \\cdots, x_n)$ 是包含 $n$ 个变量 $(x_1,\\cdots,x_n)$ 的标量函数，则函数 $f$ 的梯度是向量函数： \\[\\nabla f(x_1,\\cdots, x_n)=\\begin{bmatrix}f_{x_1},\\cdots,f_{x_n}\\end{bmatrix}\\] 其中，$f_{x_i}$ 表示标量函数 $f$ 对变量 $x_i$ 的偏导数。 向量点积法则 设有 $u(x_1,\\cdots, x_n)$，$v(x_1,\\cdots,x_n)$ 均为包含 $n$ 个变量 $(x_1,\\cdots,x_n)$ 的标量函数，并且都具有 $m$ 个分量，分别为$u_1,\\cdots,u_n$ 和 $v_1,\\cdots,v_n$ 。则有向量点积法则 \\[\\nabla(u^Tv)=v^TDu+u^TDv\\label{eq1}\\] 其中，$ D(\\cdot)$ 表示向量函数 $(\\cdot)$ 的雅可比矩阵，见公式 $\\eqref{jacobianmatrix}$。 证明 假设向量函数 $u$ 和 $v$ 都是具有3个分量的向量函数，均包含2个自变量 \\[\\begin{align*}...","categories": ["Mathematics"],
        "tags": ["Matrix"],
        "url": "/mathematics/Vector-derivative/",
        "teaser": null
      },{
        "title": "Connect the dots",
        "excerpt":"    You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something — your gut, destiny, life, karma, whatever.   —- Steve Jobs  ","categories": ["Life"],
        "tags": ["A word"],
        "url": "/life/Connect-the-dots/",
        "teaser": null
      },{
        "title": "【增量学习】Implement Incremental Learning for Classification Using Flexible Workflow",
        "excerpt":"示例介绍 本博客中的实例来自 MATLAB 官方案例：Implement Incremental Learning for Classification Using Flexible Workflow This example shows how to use the flexible workflow to implement incremental learning for binary classification with prequential evaluation. A traditionally trained model initializes the incremental model. MATLAB 中 Incremental Learning 的工作流 MATLAB 的 Incremental Learning 主要分为两种工作流：Flexible workflow 和...","categories": ["Machine Learning"],
        "tags": ["MATLAB"],
        "url": "/machine%20learning/Incremental-Learning/",
        "teaser": null
      },{
        "title": "The Man Who Knew Infinity",
        "excerpt":"So, now we see the work on partitions and the enormous breakthrough that has been achieved. All this, mind you, by a man whose limitations of knowledge when I met him were as startling as was its profundity. Opinions may differ as to the importance of Ramanujan’s work and the...","categories": ["Life"],
        "tags": ["A word"],
        "url": "/life/The-Man-Who-Knew-Infinity/",
        "teaser": null
      },{
        "title": "I hadn't spent a day without thinking about you.",
        "excerpt":"    我甚至现在就能清楚地看见，一旦有一天我不得不长久地离开它，我会怎样想念它，我会怎样想念它并且梦见它，我会怎样因为不敢想念它而梦也梦不见它。   ——史铁生《我与地坛》  ","categories": ["Life"],
        "tags": ["A word"],
        "url": "/life/Ihadn'tspent-adaywithoutthingkingaboutyou/",
        "teaser": null
      }]
