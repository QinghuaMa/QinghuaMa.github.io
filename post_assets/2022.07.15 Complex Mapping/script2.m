clc, clear, close all

LineWidth = 1.5;
Interpreter = 'latex';
numPoints = 30;

fig = figure('unit', 'centimeters', 'position', [15, 7, 29, 15]);
sgtitle('Complex Mapping: $w=z^2+1$', Interpreter=Interpreter)
ax1 = subplot(1, 2, 1); ax1.Parent = fig;
scatter([0, 0], [-1, 1], 'filled')
axis([-4, 4, -5, 5])
xlabel('x', Interpreter=Interpreter);
ylabel('y', Interpreter=Interpreter);
title('Complex')

ax2 = subplot(1, 2, 2); ax2.Parent = fig;
scatter(0, 0, 'filled');
axis([-18, 10, -15, 15])
xlabel('u', Interpreter=Interpreter);
ylabel('v', Interpreter=Interpreter);
title('Mapping')

% Trajectory at x-y plain, x=y^2-1
y = linspace(-2, 2, numPoints);
x = y.^2 - 1;
fig = MappingPlot(numPoints, x, y, fig, '$x=y^2-1$', false, LineWidth, Interpreter);
% Trajectory at x-y plain, x=0
y = linspace(-4, 4, numPoints);
x = zeros(1, numel(y));
fig = MappingPlot(numPoints, x, y, fig, '$x=0$', false, LineWidth, Interpreter);
% Trajectory at x-y plain, x=1-y^2
y = linspace(-2, 2, numPoints);
x = -(y.^2 - 1);
fig = MappingPlot(numPoints, x, y, fig, '$x=1-y^2$', false , LineWidth, Interpreter, 'b');
% Trajectory at x-y plain, x^2+y^2=1
y = linspace(-1, 1, numPoints);
x = sqrt(1 - y.^2) ;
fig = MappingPlot(numPoints, x, y, fig, '$x^2+y^2=1$', false , LineWidth, Interpreter);
y = -linspace(-1, 1, numPoints);
x = -sqrt(1 - y.^2) ;
fig = MappingPlot(numPoints, x, y, fig, '$x^2+y^2=1$', true , LineWidth, Interpreter, 'g');

function fig = MappingPlot(numPoints, x, y, fig, TEXT, textFlag, LineWidth, Interpreter, c)
if(~exist('c','var'))
    c = 'r';  
end
u = x.^2 - y.^2 + 1;
v = 2*x.*y;

h1 = animatedline(LineWidth=LineWidth); h1.Parent = fig.Children(2);
h2 = animatedline(LineWidth=LineWidth, Color=c); h2.Parent = fig.Children(1);
text1 = text(-1, 4.5, TEXT , fontsize=13, Interpreter=Interpreter); text1.Parent = fig.Children(2);

for k = 1:numPoints
    addpoints(h1, x(k), y(k))
    addpoints(h2, u(k), v(k))
    drawnow
    exportgraphics(gcf,'Mapping2.gif','Append',true);
end
text1.Visible = textFlag;
end
