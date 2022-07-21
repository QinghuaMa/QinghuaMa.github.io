format long
significant = [1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 0 1 1 0 1 0];
bin2dec_coefficient = zeros(1, numel(significant));

for k = 1:numel(significant)
    bin2dec_coefficient(1, k) = (1/2)^k;
end
result = 0;
for i = 1:numel(significant)
    result = result + bin2dec_coefficient(numel(significant)-i+1)*significant(numel(significant)-i+1);
end
result = (result+1)*2^(-4);
num2hex(result) % 3fb999999999999a'

