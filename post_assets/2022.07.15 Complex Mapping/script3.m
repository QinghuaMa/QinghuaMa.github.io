clc, clear, close all

syms f(x,y)
f(x,y) = (x+y*i)^5 + (x+y*i)^2-(x+y*i)+1;
fe = expand(f);

syms u(x,y) v(x,y)
u(x, y) = x^5  - 10*x^3*y^2  + x^2 + 5*x*y^4 - x - y^2 + 1;
v(x, y) = 5*x^4*y - 10*x^2*y^3  + 2*x*y + y^5  - y;
[x, y] = solve(u(x,y), v(x,y));