clc, clear, close all

x = [5 5 5 8]; 
y = [3 4 7]; 
C = [0 2 4 6 8 9;
    8 10 12 14 16 17;
    16 18 20 22 24 25;
    0 18 20 22 24 25];
imagesc(x, y, C), hold on
scatter([x(1), x(end)], [y(1), y(end)], 50, "filled"), hold on
text(x(1), y(1), ['(', num2str(x(1)), ',', num2str(y(1)), ')'], fontsize=13, Color='w')
text(x(end), y(end), ['(', num2str(x(end)), ',', num2str(y(end)), ')'], fontsize=13, Color='k')
colorbar