clc, clear, close all

Interpreter = 'latex';
gifFile = 'Mapping5.gif';
if exist(gifFile, 'file')
    delete(gifFile)
end
LineWidth = 1.5;
numPoints = 50;
rng(42)

fig = figure('unit', 'centimeters', 'position', [15, 7, 29, 15]);
sgtitle('Complex Mapping: $w=z^2+1$', Interpreter=Interpreter)

ax1 = subplot(1, 2, 1); ax1.Parent = fig;
theta = linspace(-pi, pi, numPoints);
a = 0.5;
b = 0;
r = 0.5;
x = r*cos(theta) + a;
y = r*sin(theta);

plot(x, y, LineWidth=LineWidth, Color='k', LineStyle='--'), hold on
scatter(0.5, 0, 'filled')
axis([-0.5, 1.5, -1, 1])
xlabel('x', Interpreter=Interpreter);
ylabel('y', Interpreter=Interpreter);
title('Complex')
set(gca, 'DataAspectRatio', [1 1 1])

ax2 = subplot(1, 2, 2); ax2.Parent = fig;
scatter(0, 0, 'filled');
axis([0.5, 2, -1, 1])
box on
xlabel('u', Interpreter=Interpreter);
ylabel('v', Interpreter=Interpreter);
title('Mapping')
set(gca, 'DataAspectRatio', [1.5 2 1])

interval = pi/6;
epsilon = 1e-13;
for k = -pi : interval : pi - interval
    xk = r*cos(k) + a;
    yk = r*sin(k) +b;
    if abs(xk - a) <= epsilon
        n = linspace(yk, b, numPoints);
        m = a*ones(1, numel(n));
    elseif abs(xk - a) > epsilon
        m = linspace(xk, a, numPoints);
        n = (yk-b)/(xk-a) * (m-a) + b;
    end
    fig = MappingLink(fig, m, n, numPoints, gifFile, LineWidth);
end


function fig = MappingLink(fig, x, y, numPoints, gifFile, LineWidth)
% Base on incremental value dw
z0 = complex(x, y);
w0 = z0.^2 + 1;
dz = [diff(z0), 0];
dw = 2*z0.*dz;
w = w0+dw;
u = real(w);
v = imag(w);

Color = [rand(), rand(), rand()];
h1 = animatedline(LineWidth=LineWidth, Color=Color); h1.Parent = fig.Children(2);
h2 = animatedline(LineWidth=LineWidth, Color=Color); h2.Parent = fig.Children(1); 

for i = 1: numPoints
    addpoints(h1, x(i), y(i))
    addpoints(h2, u(i), v(i))
    drawnow
    exportgraphics(gcf, gifFile, 'Append', true);
end
end