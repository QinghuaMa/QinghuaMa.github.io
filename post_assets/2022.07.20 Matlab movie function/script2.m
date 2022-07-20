f = @(t) plot(t,1,'r*');
fanimator(f)

hold on
syms t x
fanimator(@fplot, cos(x)+t, sin(x)+1, [-pi pi])
axis equal
hold off

playAnimation