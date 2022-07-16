clc, clear, close all

% Plot settings
LineWidth = 1.5;
Interpreter = 'latex';
numPoints = 100;
fig = figure('unit', 'centimeters', 'position', [15, 7, 21, 10]);

% Various constants c
cs = [0, 1, 3, 5];



% Plot complex variable, subject to x^2 - y^2 = c, and its mapping
for i=1:numel(cs)
    if i ~= numel(cs)
        textFlag = false;
    else
        textFlag = true;
    end
    [ax1, ax2, fig] = MappingPlot1(cs(i), numPoints, fig, textFlag, LineWidth, Interpreter);
end


[ax1, ax2, fig] = MappingPlot2(cs(i), numPoints, fig, textFlag, LineWidth, Interpreter);

writeAnimation(gcf, 'test.gif')


% Plot complex variable, subject to x^2 - y^2 = c, and its mapping function----------------------------
function [ax1, ax2, fig] = MappingPlot1(c, numPoints, fig, textFlag, LineWidth, Interpreter)

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
end

% Plot the left branch
for k = 1:numPoints
    addpoints(h1_2, x2(k), y(k))
    addpoints(h2_2, u2(k), v2(k))
    drawnow
end

text1.Visible = textFlag;
end


function [ax1, ax2, fig] = MappingPlot2(k, numPoints, fig, textFlag, LineWidth, Interpreter)
% Prepare data
% Complex variable
x1 = linspace(-10, -0.1, numPoints);
x2 = linspace(0.1, 10, numPoints);
y1 = k./(2*x1);
y2 = k./(2*x2);

v1 = x1.^2-y1.^2;
u1 = 2*x1.*y1;

v2 = x2.^2-y2.^2;
u2 = 2*x2.*y2;

% Plot complex variable
ax1 = subplot(1, 2, 1); 
ax1.Parent = fig;
text1 = text(-3, 6, ['$2xy = k$, $k= $', num2str(k)], ...
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


for k = 1:numPoints
    addpoints(h1_1, x1(k), y1(k))
    addpoints(h2_1, u1(k), v1(k))
    drawnow
end


for k = 1:numPoints
    addpoints(h1_2, x2(k), y2(k))
    addpoints(h2_2, u2(k), v2(k))
    drawnow
end

text1.Visible = textFlag;
end