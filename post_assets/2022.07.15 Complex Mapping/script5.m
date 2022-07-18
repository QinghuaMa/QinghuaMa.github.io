maxIterations = 500;
gridSize = 5000;
xlim = [-0.748766713922161, -0.748766707771757];
ylim = [ 0.123640844894862,  0.123640851045266];

x = gpuArray.linspace(xlim(1),xlim(2),gridSize);
y = gpuArray.linspace(ylim(1),ylim(2),gridSize);
whos x y % List variables in workspace, with sizes and types

[xGrid,yGrid] = meshgrid(x,y);
z0 = complex(xGrid,yGrid);
count = ones(size(z0),'gpuArray');

z = z0;
for n = 0:maxIterations
    z = z.*z + z0;
    inside = abs(z) <= 3;
    count = count + inside;
end
count = log(count);

imagesc([x(1) x(end)], [y(1) y(end)], count) % Display image with scaled colors
colormap([jet(); flipud(jet()); 0 0 0]); % jet(), 513-by-3 double, Jet colormap array
                                                          % flipud, 1027-by-3 double, Flip array up to down
axis on
