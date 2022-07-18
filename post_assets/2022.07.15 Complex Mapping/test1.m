clc, clear, close all
x = [5 5 5 9]; % two-element vectors
y = [3 4 5 5]; % two-element vectors
C = [0 2 4 6 8 9; 8 10 12 14 16 17; 16 18 20 22 24 25; 0 18 20 22 24 25];
imagesc(x, y, C), hold on
scatter(x, y, 100, "filled", Color='k')
colorbar
% 
% imagesc(x,y,C) specifies the image location. 
% Use x and y to specify the locations of the corners corresponding to C(1,1) and C(m,n).
% To specify both corners, set x and y as two-element vectors. 
% To specify the first corner and let imagesc determine the other, set x and y as scalar values.
% The image is stretched and oriented as applicable.