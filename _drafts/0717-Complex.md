> 迄今为止，虚数这个引发许多纠缠不清的问题，在很大程度上可以认为是不恰当的记法系统导致的。比如，如果把 $+1$、$-1$、$\sqrt{-1}$ 称为正、逆和侧的单位，而不是正、负、虚（甚至不可能）的单位，就不有这样的麻烦了。
>
> ——高斯

根据欧拉对于函数的定义，我们可以很容易 *从形式上* 将函数的定义直接拓展到复变量的领域，我们无须改变什么，只需要允许变量和常数为复数即可。但是从几何学的角度看，这样的一种函数无法在二维直角坐标系中画出它们对应的图形，因为每个复变量都需要对应一个二维坐标系，即一个平面。因此，**如果要从几何角度来解释这样一个函数，我们必须将其看作从一个平面到另一个平面的 *映射* 或转换**。

以函数 $w=z^2$ 为例，其中 $z$ 和 $w$ 都是复变量。要从几何角度描述这个函数，我们需要两个直角坐标系统，其中一个是独立变量 $z$，另一个是独立变量 $w$。如果分别将它们分别写作
$$
\begin{align*}
z&=x+\mathrm{i}y\\
w&=u+\mathrm{i}v
\end{align*}
$$

则有
$$
w=z^2=(x+\mathrm{i}y)^2=(x^2-y^2)+\mathrm{i}(2xy)=u+\mathrm{i}v
$$
即
$$
\begin{align*}
u&=x^2-y^2\\
v&=2xy
\end{align*}
$$
假设自变量 $x$ 和 $y$ 在 $z$ 平面（即 $xy$ 平面）中符合某条曲线，这将导致变量 $u$ 和 $v$ 在 $w$ 平面（即 $uv$ 平面）中遵循某一条**象曲线**。例如，如果点 $P(x,y)$ 沿着双曲线 $x^2-y^2=c$ （其中 $c$ 是一个常数）移动，那么**象点** $Q(u,v)$ 将沿着曲线 $u=c$ （即 $w$ 平面中的一条垂线）移动；如果点 $P$ 沿着双曲线 $2xy=k$ （其中 $k$ 是一个常数）移动，那么点 $Q$ 将沿着水平线 $v=k$ 移动。最终，双曲线 $x^2-y^2=c$ 和 $2xy=k$ 在 $z$ 平面内形成了两组相似的曲线，其中每条曲线都对应着一个给定的常数，它们的象曲线在 $w$ 平面内形成了由水平线及垂线构成的矩形网格。

![Mapping](https://blogimages-1309804558.cos.ap-nanjing.myqcloud.com/imgpersonal/Mapping.gif)

```matlab
clc, clear, close all

% Plot settings
LineWidth = 1.5;
Interpreter = 'latex';
numPoints = 100;
fig = figure('unit', 'centimeters', 'position', [15, 7, 21, 10]);

% Various constants c and k
cs = [0, 1, 3, 5];
ks = [3, 7, 11, 15];

% Plot complex variable, subject to x^2 - y^2 = c, and its mapping
for i=1:numel(cs)
    textFlag = false;
    fig = MappingPlot1(cs(i), numPoints, fig, textFlag, LineWidth, Interpreter);
end

% Plot complex variable, subject to x^2 - y^2 = c, and its mapping
for i=1:numel(ks)
    if i ~= numel(ks)
        textFlag = false;
    else
        textFlag = true;
    end
    fig = MappingPlot2(ks(i), numPoints, fig, textFlag, LineWidth, Interpreter);
end


% Plot complex variable, subject to x^2 - y^2 = c, and its mapping function
function fig = MappingPlot1(c, numPoints, fig, textFlag, LineWidth, Interpreter)

% Prepare data
% Complex variable
y = linspace(-5, 5, numPoints);
x1 = sqrt(c+y.^2); % right branch
x2 = -x1;          % left branch

% Mapping of complex variable
u1 = x1.^2 - y.^2;
v1 = 2.*x1.*y;

u2 = x2.^2 - y.^2;
v2 = 2.*x2.*y;

% Plot complex variable
ax1 = subplot(1, 2, 1);
ax1.Parent = fig;
text1 = text(-3, 6, ['$x^2 - y^2 = c$, $c= $', num2str(c)], ...
    fontsize=13, FontWeight="bold", Interpreter=Interpreter);
h1_1 = animatedline(LineWidth=LineWidth);
h1_1.Parent = ax1;
h1_2 = animatedline(LineWidth=LineWidth, Color='r');
h1_2.Parent = ax1;
axis([-7, 7, -7, 7])
xlabel('x', Interpreter=Interpreter);
ylabel('y', Interpreter=Interpreter);
title('Complex')

% Plot variable's mapping
ax2 = subplot(1, 2, 2);
ax2.Parent = fig;
h2_1 = animatedline(LineWidth=LineWidth);
h2_1.Parent = ax2;
h2_2 = animatedline(LineWidth=LineWidth, Color='r');
h2_2.Parent = ax2;
axis([-7, 7, -60, 60])
xlabel('u', Interpreter=Interpreter);
ylabel('v', Interpreter=Interpreter);
title('Mapping')

% Plot the right branch
for k = 1:numPoints
    addpoints(h1_1, x1(k), y(k))
    addpoints(h2_1, u1(k), v1(k))
    drawnow
    exportgraphics(gcf,'Mapping.gif','Append',true);
end

% Plot the left branch
for k = 1:numPoints
    addpoints(h1_2, x2(k), y(k))
    addpoints(h2_2, u2(k), v2(k))
    drawnow
    exportgraphics(gcf,'Mapping.gif','Append',true);
end

text1.Visible = textFlag;
end

% Plot complex variable, subject to 2xy = k, and its mapping function
function fig = MappingPlot2(k, numPoints, fig, textFlag, LineWidth, Interpreter)
% Prepare data
% Complex variable
x1 = linspace(-10, -0.1, numPoints);
x2 = linspace(0.1, 10, numPoints);
y1 = k./(2*x1);
y2 = k./(2*x2);

u1 = x1.^2-y1.^2;
v1 = 2*x1.*y1;

u2= x2.^2-y2.^2;
v2 = 2*x2.*y2;

% Plot complex variable
ax1 = subplot(1, 2, 1);
ax1.Parent = fig;
text1 = text(-3, 6, ['$2xy = k, k= $', num2str(k)], ...
    fontsize=13, FontWeight="bold", Interpreter=Interpreter);
h1_1 = animatedline(LineWidth=LineWidth);  h1_1.Parent = ax1;
h1_2 = animatedline(LineWidth=LineWidth, Color='r');  h1_2.Parent = ax1;
axis([-7, 7, -7, 7])
xlabel('x', Interpreter=Interpreter);
ylabel('y', Interpreter=Interpreter);
title('Complex')

% Plot variable's mapping
ax2 = subplot(1, 2, 2);
ax2.Parent = fig;
h2_1 = animatedline(LineWidth=LineWidth); h2_1.Parent = ax2;
h2_2 = animatedline(LineWidth=LineWidth, Color='r');  h2_2.Parent = ax2;
axis([-7, 7, -60, 60])
xlabel('u', Interpreter=Interpreter);
ylabel('v', Interpreter=Interpreter);
title('Mapping')


for k = 1:numPoints
    addpoints(h1_1, x1(k), y1(k))
    addpoints(h2_1, u1(k), v1(k))
    drawnow
    exportgraphics(gcf,'Mapping.gif','Append',true);
end


for k = 1:numPoints
    addpoints(h1_2, x2(k), y2(k))
    addpoints(h2_2, u2(k), v2(k))
    drawnow
    exportgraphics(gcf, 'Mapping.gif', 'Append',true);
end

text1.Visible = textFlag;
end
```
















> 
>
> 
>
> 欧拉对于函数的定义：关于某变量的函数，就是任何由变量、数字或常量所构成的解析表达式。









# 虚数的演化过程

正如负数的提出是为了求出 $a$ 为正数时线性方程 $x+a=0$ 的解一样，虚数的提出是为求 $a$ 为正数时二次方程 $x^2+a=0$ 的解。特别的，就像负数单位 $-1$ 被定义为方程 $x+1=0$ 的解，虚数单位 $\sqrt{-1}$ 被定义为方程 $x^2+1=0$ 的一个解（另一个为$\sqrt{-1}$）。另一方面，要解方程 $x^2+1=0$，就意味着要找一个平方值为 $-1$ 的数，显然没有任何一个实数满足要求。因此，正如 $x+1=0$ 在正数范围内没有解一样，$x^2+1=0$ 在实数范围内没有解。

| 方程      | 解的存在域       | 解                    |
| --------- | ---------------- | --------------------- |
| $x+1=0$   | 在正数范围内无解 | $-1$，负数单位        |
| $x^2+1=0$ | 在实数范围内无解 | $\sqrt{-1}$，虚数单位 |



古希腊人并没有正确认识到负数，因为他们的主要兴趣主要是几何，以及诸如长度、面积、体积的量，完全没有使用负数的必要。印度数学家罗摩笈多（约公元前628年）使用过负数，只不过中世纪的欧洲几乎完全忽略了它们，认为它们是“虚构的”、“荒谬的”。甚至在文艺复兴时期，还有很多数学家对负数的存在感到不自在。确实，如果将减法看作是“拿走的”的动作，负数就是荒谬的。例如，人们不能从3个苹果中拿走5个。使负数最终被接受的关键一步是由拉斐尔·邦贝利（约1530年出生）完成的，拉斐尔**将数解释为线段的长度**，而**4种基本运算则表示线段的运动**，从而给出了实数的几何解释。但只有当人们意识到**减法可以解释为加法的逆运算**的时候，才有可能完全将负数融入到我们的数字体系当中。

虚数也有类似的历史演化过程。一开始，