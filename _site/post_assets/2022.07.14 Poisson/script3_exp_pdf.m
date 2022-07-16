% MATLAB script
% Compute the pdf of an Exponential distribution with various parameters lambda
x = 0:0.1:10;
f1 = exppdf(x, 0.5);
f2 = exppdf(x, 1);
f3 = exppdf(x, 1.5);

% Plot the pdf
figure;
LineWidth = 1.7;
Interpreter = 'latex';
plot(x, f1, LineWidth=LineWidth), hold on
plot(x, f2, LineWidth=LineWidth), hold on
plot(x, f3, LineWidth=LineWidth), hold on
legend("\lambda=0.5", "\lambda=1", "\lambda=1.5");
xlabel('$x$', Interpreter=Interpreter)
ylabel('$P(x)$', Interpreter=Interpreter)
title('Exponential distribution PDF')
