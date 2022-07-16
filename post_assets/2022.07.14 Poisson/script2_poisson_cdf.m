% MATLAB script
% Compute Poisson Distribution CDF
x = 0:15;
F1 = poisscdf(x,1);
F2 = poisscdf(x,4);
F3 = poisscdf(x,10);

% Plot the CDF
figure
LineWidth = 1.7;
stairs(x, F1, LineWidth=LineWidth), hold on
stairs(x, F2, LineWidth=LineWidth), hold on
stairs(x, F3, LineWidth=LineWidth), hold off
legend("\lambda=1", "\lambda=4", "\lambda=10", "Location", "southeast");
xlabel('Occurences')
ylabel('$P(X\le k)$', Interpreter='latex')
title('Poisson distribution CDF')