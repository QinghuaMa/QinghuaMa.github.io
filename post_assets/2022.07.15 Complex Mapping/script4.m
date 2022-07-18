clc, clear, close all

x = linspace(-2, 2, 10);
y = linspace(-2, 2, 10);
[x, y] = meshgrid(x, y);
scatter(x, y)
axis([-3, 3, -3, 3])

z = complex(x, y, 'gpuArray');
g = (4*z.^5+z.^2-1)/(5*z.^4+2*z-1);
xx = real(g);
yy = imag(g);
scatter(xx, yy)
