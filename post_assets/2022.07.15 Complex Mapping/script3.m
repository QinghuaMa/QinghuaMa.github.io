clc, clear, close all

LineWidth = 1.5;
Interpreter = 'latex';
numPoints = 300;

fig = figure('unit', 'centimeters', 'position', [15, 7, 29, 15]);
sgtitle('Complex Mapping: $w=z^2+1$', Interpreter=Interpreter)

ax1 = subplot(1, 2, 1); ax1.Parent = fig;
x = 0:.01:1;
y1 = sqrt(0.5^2-(x-0.5).^2);
y2 = -y1;
plot(x, y1, LineWidth=LineWidth, Color='k', LineStyle='--'), hold on
plot(x, y2, LineWidth=LineWidth, Color='k', LineStyle='--'), hold on
scatter(0.5, 0, 'filled')
axis([-0.5, 1.5, -1, 1])
xlabel('x', Interpreter=Interpreter);
ylabel('y', Interpreter=Interpreter);
title('Complex')
set(gca, 'DataAspectRatio', [1 1 1])

ax2 = subplot(1, 2, 2); ax2.Parent = fig;
scatter(0, 0, 'filled');
axis([0.5, 2, -1, 1])
xlabel('u', Interpreter=Interpreter);
ylabel('v', Interpreter=Interpreter);
title('Mapping')
set(gca, 'DataAspectRatio', [1.5 2 1])

x1_1 = linspace(0, 0.5 , numPoints); y1_1 = zeros(1, numel(x1_1)) ;
fig = MappingPlot(numPoints, x1_1, y1_1, fig, LineWidth);

x1_2 = linspace(0.5-0.5/sqrt(2), 0.5 , numPoints); y1_2 = -x1_2+0.5;
fig = MappingPlot(numPoints, x1_2, y1_2, fig, LineWidth);

y1_3 = linspace(0.5, 0, numPoints); x1_3 = 0.5*ones(1, numel(y1_3));
fig = MappingPlot(numPoints, x1_3, y1_3, fig, LineWidth);

x1_4 = linspace(0.5+0.5/sqrt(2), 0.5 , numPoints); y1_4 = x1_4 - 0.5;
fig = MappingPlot(numPoints, x1_4, y1_4, fig, LineWidth);

x1_5 = linspace(1, 0.5 , numPoints); y1_5 = zeros(1, numel(x1_5));
fig = MappingPlot(numPoints, x1_5, y1_5, fig, LineWidth);

x1_6 = x1_4; y1_6 = -x1_6 + 0.5;
fig = MappingPlot(numPoints, x1_6, y1_6, fig, LineWidth);





function fig = MappingPlot(numPoints, x, y, fig, LineWidth)
if(~exist('c','var'))
    c = 'r';  
end
u = x.^2 - y.^2 + 1;
v = 2*x.*y;

h1 = animatedline(LineWidth=LineWidth); h1.Parent = fig.Children(2);
h2 = animatedline(LineWidth=LineWidth, Color=[0.85, 0.33, 0.1]); h2.Parent = fig.Children(1);

for k = 1:numPoints
    addpoints(h1, x(k), y(k))
    addpoints(h2, u(k), v(k))
    drawnow
%     exportgraphics(gcf,'Mapping3.gif','Append',true);
end

end