% MATLAB script
% Compute the PMF of the Poisson distribution with various parameters.
x = 0:15;
p1 = poisspdf(x,1);
p2 = poisspdf(x,4);
p3 = poisspdf(x, 10);

% Plot the PMF with bars of width 1.
figure
bar(x, p1, 1), hold on
bar(x, p2, 1), hold on
bar(x, p3, 1), hold off
alpha(0.5)
legend("\lambda=1", "\lambda=4", "\lambda=10");
xlabel('Occurences')
ylabel('P(X=k)')
title('Poisson distribution PMF')