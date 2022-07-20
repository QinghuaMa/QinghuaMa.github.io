syms y t
fanimator(@fplot, 1, y, [0 t])
writeAnimation('gif1.gif')

fanimator(@fplot,1,y,[0 2],'LineWidth',t+1)
axis([0, 2, -1, 20])
writeAnimation('gif2.gif')

