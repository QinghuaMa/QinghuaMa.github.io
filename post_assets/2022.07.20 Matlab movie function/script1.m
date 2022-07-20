% Record Frames and Play Movie Once
clc, clear, close all

h = figure;
Z = peaks;
surf(Z)
axis tight manual
ax = gca;
ax.NextPlot = 'replaceChildren';

loops = 40;
% Preallocate a 40-element array M to store the movie frames.
M(loops) = struct('cdata',[],'colormap',[]);

% Set the 'Visible' property of the figure object to 'off' to hide the surface plots while calculating X.
h.Visible = 'off';
for j = 1:loops
    X = sin(j*pi/10)*Z;
    surf(X,Z)
    drawnow
    M(j) = getframe;
end

% Play the movie in M
h.Visible = 'on';
movie(M, 5); %  Number of times to play movie is 10