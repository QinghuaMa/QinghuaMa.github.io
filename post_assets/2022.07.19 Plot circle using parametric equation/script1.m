% Plot circle function (x-3)^2+(y-4)^2 = 5^2
clc, clear, close all

Interpreter = 'latex';
gifFile = 'Circle1.gif';
if exist(gifFile, 'file')
    delete(gifFile)
end

numPoints = 100;

r = 5;
theta = linspace(0, 2*pi, numPoints);
x = r*cos(theta)+3;
y = r*sin(theta) +4;

fig = figure();
ax = axes(); ax.Parent = fig;
scatter(3, 4, 'filled')
text(3, 4, '(3,4)', FontSize=11)
axis([-3, 9, -2, 10])
xlabel('x', Interpreter=Interpreter), ylabel('y', Interpreter=Interpreter)
title('$(x-3)^2+(y-4)^2=5^2$', Interpreter=Interpreter)
set(gca, 'PlotBoxAspectRatio', [1 1 1])

h = animatedline(LineWidth=1.5, Color='r');  h.Parent = ax;

for i = 1: numPoints
    addpoints(h, x(i), y(i))
    drawnow
    exportgraphics(gcf, gifFile, 'Append',true);
end
