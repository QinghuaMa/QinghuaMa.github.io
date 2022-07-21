format long
bb = [1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 1 0];
dddd = zeros(1, numel(bb));

for ii = 1:numel(bb)
    dddd(1, ii) = (1/2)^ii;
end
sum = 0;
for i = 1:numel(bb)
    sum = sum + dddd(numel(bb)-i+1)*bb(numel(bb)-i+1);
end
sum = (sum+1)*2^(-4);
