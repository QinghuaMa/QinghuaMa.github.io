figure
ax = axes;
arrow1 = [8,3,5,0];
arrow = annotation('doublearrow', ...
    'units', 'centimeters', ...
    'Position', arrow1, ...
    LineWidth=1.5, Color='k');
arrow.Parent = ax;