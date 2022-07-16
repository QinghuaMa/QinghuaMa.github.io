clc, clear, close all
% Plot loss function
range = -10:.1:10;
[x_1, x_2] = meshgrid(range, range);
L = (x_1+x_2-2).^2 + (x_1+x_2-3).^2 + (x_1+x_2-4).^2;
mesh(x_1, x_2, L)
xlabel("x_1"), ylabel("x_2"), zlabel("L")
xlim([-10, 10]), ylim([-10, 10]), zlim([-1, 1e3]) % necessary, if use view function after

% Plot solutions
x_1 = range;
x_2 = 3-x_1;
hold on
plot(x_1, x_2, LineWidth=4.0, Color='r')
view(64,30.34)
saveas(gca, 'pic1.svg')
view(47,1)
saveas(gca, 'pic2.svg')

