clc, clear, close all

Interpreter = 'latex';
LineWidth = 1.5;
FontSize = 13;
numPoints = 100;

fig = figure();
ax = axes;
f = @(x) x.^2;
tangent = @(x) 2*(x-1) + 1;
x = linspace(-2, 2, numPoints);
deltax = linspace(0, 2, numPoints);
deltay = tangent(deltax);
dx = linspace(1, 1.05, numPoints);
dy = linspace(f(1), tangent(1.05), numPoints);

scatter(1, f(1), 'filled'), hold on
plot(x, f(x), LineWidth=LineWidth, Color='b'), hold on
plot(deltax, deltay, LineWidth=LineWidth, Color='r'), hold on
plot(dx, ones(1, numel(dx)), LineWidth=LineWidth, LineStyle = '--', Color='k'), hold on
plot(1.05*ones(1, numel(dx)), dy, LineWidth=LineWidth, LineStyle='--', Color='k')
text(0.97, 1.05, '$f^{\prime}(1)=2$', Interpreter=Interpreter, FontSize=FontSize)
text(1.02, 0.99, '$\mathrm{d}x$', Interpreter=Interpreter, FontSize=FontSize)
text(1.053, 1.047, '$\mathrm{d}y$', Interpreter=Interpreter, FontSize=FontSize)
legend('', '$y=x^2$','tangent at (1, y(1))', Interpreter=Interpreter, Location='northwest')


axis([0.92, 1.18, 0.94, 1.20])
title('$y=x^2$', Interpreter=Interpreter)
xlabel('x', Interpreter=Interpreter)
ylabel('y', Interpreter=Interpreter)
