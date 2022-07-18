clc, clear, close all
warning off
delete('Mapping1.gif')
warning on

% Plot settings
LineWidth = 1.5;
Interpreter = 'latex';
numPoints = 100;

fig = figure('unit', 'centimeters', 'position', [15, 7, 29, 15]);
sgtitle('Complex Mapping: $w=z^2$', Interpreter=Interpreter)
ax1 = subplot(1, 2, 1);
ax1.Parent = fig;
axis([-7, 7, -7, 7])
xlabel('x', Interpreter=Interpreter);
ylabel('y', Interpreter=Interpreter);
title('Complex')

ax2 = subplot(1, 2, 2);
ax2.Parent = fig;
axis([-7, 7, -60, 60])
xlabel('u', Interpreter=Interpreter);
ylabel('v', Interpreter=Interpreter);
title('Mapping')

% Various constants c and k
cs = [0, 1, 3, 5];
ks = [3, 7, 11, 15];

% Plot complex variable, subject to x^2 - y^2 = c, and its mapping
for i=1:numel(cs)
    textFlag = false;
    fig = MappingPlot1(cs(i), numPoints, fig, textFlag, LineWidth, Interpreter);
end

% Plot complex variable, subject to 2xy=k, and its mapping
for i=1:numel(ks)
    if i ~= numel(ks)
        textFlag = false;
    else
        textFlag = true;
    end
    fig = MappingPlot2(ks(i), numPoints, fig, textFlag, LineWidth, Interpreter);
end


% Plot complex variable, subject to x^2 - y^2 = c, and its mapping function----------------------------
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

h1_1 = animatedline(LineWidth=LineWidth); h1_1.Parent = fig.Children(2);
h1_2 = animatedline(LineWidth=LineWidth, Color='r'); h1_2.Parent = fig.Children(2);
text1 = text(-3, 6, ['$x^2 - y^2 = c$, $c= $', num2str(c)], ...
    fontsize=13, FontWeight="bold", Interpreter=Interpreter);
text1.Parent = fig.Children(2);

h2_1 = animatedline(LineWidth=LineWidth); h2_1.Parent = fig.Children(1);
h2_2 = animatedline(LineWidth=LineWidth, Color='r'); h2_2.Parent = fig.Children(1);

% Plot the right branch
for k = 1:numPoints
    addpoints(h1_1, x1(k), y(k))
    addpoints(h2_1, u1(k), v1(k))
    drawnow
    exportgraphics(gcf,'Mapping1.gif','Append',true);
end

% Plot the left branch
for k = 1:numPoints
    addpoints(h1_2, x2(k), y(k))
    addpoints(h2_2, u2(k), v2(k))
    drawnow
    exportgraphics(gcf,'Mapping1.gif','Append',true);
end

text1.Visible = textFlag;
end

% Plot complex variable, subject to 2xy = k, and its mapping function----------------------------
function fig = MappingPlot2(k, numPoints, fig, textFlag, LineWidth, Interpreter)
% Prepare data
% Complex variable
x1 = linspace(-10, -0.1, numPoints);
x2 = linspace(0.1, 10, numPoints);
y1 = k./(2*x1);
y2 = k./(2*x2);

% Mapping of complex variable
u1 = x1.^2-y1.^2;
v1 = 2*x1.*y1;

u2= x2.^2-y2.^2;
v2 = 2*x2.*y2;

% Plot complex variable
h1_1 = animatedline(LineWidth=LineWidth);  h1_1.Parent = fig.Children(2);
h1_2 = animatedline(LineWidth=LineWidth, Color='r');  h1_2.Parent = fig.Children(2);
text1 = text(-3, 6, ['$2xy = k, k= $', num2str(k)], ...
    fontsize=13, Interpreter=Interpreter);
text1.Parent = fig.Children(2);

% Plot variable's mapping
h2_1 = animatedline(LineWidth=LineWidth); h2_1.Parent = fig.Children(1);
h2_2 = animatedline(LineWidth=LineWidth, Color='r');  h2_2.Parent = fig.Children(1);


for k = 1:numPoints
    addpoints(h1_1, x1(k), y1(k))
    addpoints(h2_1, u1(k), v1(k))
    drawnow
    exportgraphics(gcf,'Mapping1.gif','Append',true);
end


for k = 1:numPoints
    addpoints(h1_2, x2(k), y2(k))
    addpoints(h2_2, u2(k), v2(k))
    drawnow
    exportgraphics(gcf, 'Mapping1.gif', 'Append',true);
end

text1.Visible = textFlag;
end
