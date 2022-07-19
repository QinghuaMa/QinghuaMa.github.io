% Plot circle function (x-3)^2+(y-4)^2 = 5^2, 
% and link between the center of the circle and the pionts equally spaced on a circle
clc, clear, close all

Interpreter = 'latex';
gifFile = 'Circle4.gif';
if exist(gifFile, 'file')
    delete(gifFile)
end

r = 5;
a = 3;
b = 4;
theta = linspace(0, 2*pi, 1000);
x = r*cos(theta)+a;
y = r*sin(theta) +b;

fig = figure();
ax = axes(); ax.Parent = fig;
scatter(3, 4, 'filled'), hold on
plot(x, y, LineWidth=1.5, Color='k', LineStyle='--'), hold on
text(3, 4, '(3,4)', FontSize=11)
axis([-3, 9, -2, 10])
xlabel('x', Interpreter=Interpreter), ylabel('y', Interpreter=Interpreter)
title('$(x-3)^2+(y-4)^2=5^2$', Interpreter=Interpreter)
set(gca, 'PlotBoxAspectRatio', [1 1 1])

interval = pi/6;
numPoints = 10;
epsilon = 1e-13;
for k = 0 : interval : 2*pi - interval
    xk = r*cos(k) + a;
    yk = r*sin(k) +b;
    if abs(xk - a) <= epsilon
        n = linspace(yk, b, numPoints);
        m = a*ones(1, numel(n));
    elseif abs(xk - a) > epsilon
        m = linspace(xk, a, numPoints);
        n = (yk-b)/(xk-a) * (m-a) + b;
    end
    fig = PlotLink(fig, m, n, numPoints, gifFile);
end

function fig = PlotLink(fig, m, n, numPoints, gifFile)
h = animatedline(LineWidth=1.5, Color='r');  h.Parent = fig.Children(1);
for i = 1: numPoints
    addpoints(h, m(i), n(i))
    drawnow
    exportgraphics(gcf, gifFile, 'Append', true);
end
end