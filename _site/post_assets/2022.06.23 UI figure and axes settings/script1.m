clc, clear, close all

left = 20;
bottom = 7;
width = 25;
height = 15;

fig = figure( ...
    'unit','centimeters', ... % sepcify units
    'position',[left, bottom, width, height], ... % specify UI figure position
    'Color', 'White', ... % speycify background color
    'Resize', false ...    % can not resize the UI figure
); 


set(gca,  'unit', 'centimeters',... % do not sepcify units, fault is 'points',
    'Position',[8, 3.8, 5, 5], ...% specify axes position
    'Color', [0.9,0.9,0.9], ... % sepcify background color
    'FontName', 'Times New Roman', ...
    'TitleFontWeight', 'normal');

set(gca, 'XLim', [0 10]) % 指定x轴的显示范围的最小值是0，最大值是10
set(gca, 'YLim', [0 5])  % 指定y轴的显示范围的最小值是0，最大值是5
% set(gca, 'DataAspectRatio', [1 2 1])  % 指定x轴上1个数据单位的长度与y轴上2个数据单元和z轴上1个数据单元的长度相同
% set(gca, 'PlotBoxAspectRatio', [1 3 1])