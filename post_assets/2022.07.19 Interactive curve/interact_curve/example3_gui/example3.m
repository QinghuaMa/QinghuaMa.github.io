function ic=example3 % main function


clear classes

hf=figure;
ha=axes;
axis(ha,'manual');
ic=interactive_curve(hf,ha);


uicontrol('Style', 'popup',...
           'String', 'move|add|delete',...
           'units', 'normalized',...
           'Position', [0.03 0.89 0.1 0.1],...
           'Callback', {@set_mode,ic});
       
       
       
uicontrol('Style', 'popup',...
           'String', 'o circle|x x-mark|+ plus|* star|s square|d diamond|v triangle (down)|^ triangle (up)|< triangle (left)|> triangle (right)|p pentagram|h hexagram|',...
           'units', 'normalized',...
           'Position', [0.15 0.89 0.18 0.1],...
           'Callback', {@set_symbol,ic});
       
uicontrol('Style', 'popup',...
           'String', 'nearest|linear|spline|pchip|cubic|v5cubic|delta',...
           'units', 'normalized',...
           'Position', [0.35 0.89 0.12 0.1],...
           'Callback', {@set_method,ic},...
           'value',2);


uicontrol('Style', 'text',...
           'String', 'x=',...
           'units', 'normalized',...
           'Position', [0.48 0.94 0.05 0.05]);

       
xe=uicontrol('Style', 'edit',...
           'String', '[1.5 3.5]',...
           'units', 'normalized',...
           'Position', [0.54 0.94 0.12 0.05]);
       
       
       
uicontrol('Style', 'text',...
           'String', 'y=',...
           'units', 'normalized',...
           'Position', [0.68 0.94 0.05 0.05]);

       
ye=uicontrol('Style', 'edit',...
           'String', ' ',...
           'units', 'normalized',...
           'Position', [0.73 0.94 0.26 0.05]);
       
inp=cell(1,3); % input for motionFunction
inp{1}=ic;
inp{2}=xe;
inp{3}=ye;
ic.motionFunctionHandle=@set_ye;
ic.motionFunctionArgument=inp;

ic.redraw();

       
function set_mode(hObj,event,ic) % subfunction
val = get(hObj,'Value');
ic.mouseMode=val;

function set_symbol(hObj,event,ic) % subfunction
val = get(hObj,'Value');
s=get(hObj,'String');
s1=s(val,:);
sb=s1(1);
ic.setMarkersSymbol(sb);

function set_method(hObj,event,ic) % subfunction
val = get(hObj,'Value');
s=get(hObj,'String');
s1=deblank(s(val,:));
ic.setMethod(s1);

function set_ye(inp) % subfunction
% calulate data and display to ye edit fild
ic=inp{1}; % interactive curve iobject
xe=inp{2}; % x edit field handle
ye=inp{3}; % y edit field handle
xi=str2num(get(xe,'string'));
yi=ic.interpData(xi,true);
set(ye,'string', num2str(yi));



       