% MATLAB script
% Compute the Exponential distribution CDF with various parameters lambda
x = 0:0.1:10;
F1 = expcdf(x,0.5);
F2 = expcdf(x,1);
F3 = expcdf(x,1.5);

% Plot the cdf
figure;
LineWidth = 1.7;
Interpreter = 'latex';
plot(x, F1, LineWidth=LineWidth), hold on
plot(x, F2, LineWidth=LineWidth), hold on
plot(x, F3, LineWidth=LineWidth), hold on
legend("\lambda=0.5", "\lambda=1", "\lambda=1.5");
xlabel('$x$', Interpreter=Interpreter)
ylabel('$P(X\le x)$', Interpreter=Interpreter)
title('Exponential distribution CDF')