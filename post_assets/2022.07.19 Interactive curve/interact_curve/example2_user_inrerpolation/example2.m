clear classes

hf=figure;
ha=axes;
axis(ha,'manual');
ic=interactive_curve(hf,ha);
% % uncoment to test markers positions specify:
% xm=1:1:6;
% ic=interactive_curve(hf,ha,xm,sin(xm));

% test user defined interoplation:
ic.userFunctionHandle=@(x,y,xi) (0.8*interp1(x,y,xi,'nearest')+0.2*interp1(x,y,xi,'spline')); % some mixed interpolation
ic.setMethod('userdefined');

% test delete marker No.4
ic.deleteMarkerByNumber(4);
%ic.deleteMarkerByHandle(ic.markersHandles(5));

% add marker
ic.addMarker(0.5,0.2,'auto');
% ic.addMarker(1.5,0.2);