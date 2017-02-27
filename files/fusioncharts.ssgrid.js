/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @version 3.12.0-rc.2
*/
(function(v){"object"===typeof module&&"undefined"!==typeof module.exports?module.exports=v:v(FusionCharts)})(function(v){v.register("module",["private","modules.renderer.js-ssgrid",function(){var E=this,m=E.hcLib,q=m.BLANKSTRING,g=m.pluck,d=m.pluckNumber,K=m.chartAPI,x=m.graphics.convertColor,y=m.getFirstColor,O=m.setLineHeight,w=Math,P=w.min,H=w.max,Q=w.ceil,R=w.round,S=m.toRaphaelColor,L=m.POSITION_START,M=m.HUNDREDSTRING,N=m.COLOR_TRANSPARENT,w=!m.CREDIT_REGEX.test(E.window.location.hostname);
K("ssgrid",{standaloneInit:!0,creditLabel:w,friendlyName:"ssgrid Chart",defaultDatasetType:"ssgrid",canvasBorderThickness:1,singleseries:!0,bgColor:"#FFFFFF",bgAlpha:100,_drawCaption:function(){},_drawCanvas:function(){},_createAxes:function(){},_feedAxesRawData:function(){},_setCategories:function(){},_setAxisLimits:function(){},_spaceManager:function(){var e=this.components.dataset[0];e._manageSpace&&this._allocateSpace(e._manageSpace())}},K.sscartesian);v.register("component",["dataset","ssgrid",
{init:function(e){var a=this.chart;if(!e)return!1;this.JSONData=e;this.chartGraphics=a.chartGraphics;this.components={};this.config={};this.graphics={};this.visible=1===d(this.JSONData.visible,!Number(this.JSONData.initiallyhidden),1);this.configure()},configure:function(){var e=this.chart,a=this.config,b=e.jsonData.chart||{},l=e.components.colorManager;a.plotFillAngle=d(360-b.plotfillangle,e.isBar?180:90);a.plotFillAlpha=g(b.plotfillalpha,M);a.plotBorderAlpha=g(b.plotborderalpha,M);a.plotBorderColor=
g(b.plotbordercolor,l.getColor("plotBorderColor"));a.plotDashLen=d(b.plotborderdashlen,5);a.plotDashGap=d(b.plotborderdashgap,4);a.showPercentValues=d(b.showpercentvalues,0);a.numberItemsPerPage=d(b.numberitemsperpage)||void 0;a.showShadow=d(b.showshadow,0);a.baseFont=g(b.basefont,"Verdana,sans");a.baseFontSize=g(b.basefontsize,10)+"px";a.baseFontColor=y(g(b.basefontcolor,l.getColor("baseFontColor")));a.alternateRowBgColor=y(g(b.alternaterowbgcolor,l.getColor("altHGridColor")));a.alternateRowBgAlpha=
g(b.alternaterowbgalpha,l.getColor("altHGridAlpha"))+q;a.listRowDividerThickness=d(b.listrowdividerthickness,1);a.listRowDividerColor=y(g(b.listrowdividercolor,l.getColor("borderColor")));a.listRowDividerAlpha=d(d(b.listrowdivideralpha,l.getColor("altHGridAlpha")+15))+q;a.colorBoxWidth=d(b.colorboxwidth,8);a.colorBoxHeight=d(b.colorboxheight,8);a.navButtonRadius=d(b.navbuttonradius,7);a.navButtonColor=y(g(b.navbuttoncolor,l.getColor("canvasBorderColor")));a.navButtonHoverColor=y(g(b.navbuttonhovercolor,
l.getColor("altHGridColor")));a.textVerticalPadding=d(b.textverticalpadding,3);a.navButtonPadding=d(b.navbuttonpadding,5);a.colorBoxPadding=d(b.colorboxpadding,10);a.valueColumnPadding=d(b.valuecolumnpadding,10);a.nameColumnPadding=d(b.namecolumnpadding,5);a.shadow=d(b.showshadow,0)?{enabled:!0,opacity:a.plotFillAlpha/100}:!1;this.currentPage=0;this._setConfigure()},_setConfigure:function(){var e=this.chart,a=this.config,b=this.JSONData,l=e.jsonData&&e.jsonData.data,b=H(l&&l.length||0,b&&b.data&&
b.data.length||0),n=e.components,e=n.colorManager,p=n.numberFormatter,k=a.plotColor=e.getPlotColor(this.index||this.positionIndex),F=m.parseUnsafeString,c=a.plotBorderThickness,J=a.plotBorderDashStyle,h,f,T=m.getDashStyle,t=this.components.data,r,A,z,B,G=n=0,I;t||(t=this.components.data=[]);for(B=0;B<b&&l;B++)if(h=l[B])if(k=p.getCleanValue(h.value),f=F(g(h.label,h.name)),null!=k||f!=q)f=t[n]||(t[n]={config:{}}),f=f.config,f.tooltext=h.tooltext,f.showValue=d(h.showvalue,a.showValues),f.setValue=k=
p.getCleanValue(h.value),f.setLink=g(h.link),f.toolTipValue=p.dataLabels(k),f.setDisplayValue=F(h.displayvalue),f.displayValue=p.dataLabels(k)||q,f.dataLabel=F(g(h.label,h.name))||q,r=d(h.dashed),A=d(h.dashlen,void 0),z=d(h.dashgap,a.plotDashGap),G+=k,n+=1,f.plotBorderDashStyle=1===r?T(A,z,c):0===r?"none":J,k=g(h.color,e.getPlotColor(d(I-b,B))),g(h.ratio,a.plotFillRatio),r=g(h.alpha,a.plotFillAlpha),f.color=x(k,r),f.borderColor=x(a.plotBorderColor,g(h.alpha,a.plotBorderAlpha).toString()),I++;l={fontFamily:a.baseFont,
fontSize:a.baseFontSize,color:a.baseFontColor};O(l);a.textStyle=l;a.actualDataLen=n;a.sumOfValues=G},_manageSpace:function(){var e=this.chart,a=this.config,b=e.linkedItems.smartLabel,l=this.components.data,n=e.config,p=e.jsonData.chart||{},p=n.borderThickness=d(p.showborder,1)?d(p.borderthickness,1):0,k=n.height-2*p,p=n.width-2*p,F=a.textStyle,c=a.actualDataLen,J=a.sumOfValues,h=e.components.numberFormatter,e=0,f,g;b.useEllipsesOnOverflow(n.useEllipsesWhenOverflow);b.setStyle(F);g=l.length;for(n=
0;n<g;n++)if(f=l[n])f=f&&f.config,a.showPercentValues&&(f.displayValue=h.percentValue(f.setValue/J*100)),f=b.getOriSize(f.displayValue),e=H(e,f.width+a.valueColumnPadding);b=parseInt(F.lineHeight,10);b+=2*a.textVerticalPadding;b=H(b,a.colorBoxHeight+a.listRowDividerThickness);l=k/b;a.numberItemsPerPage&&l>=a.numberItemsPerPage?a.numberItemsPerPage>=c?(a.numberItemsPerPage=c,k/=a.numberItemsPerPage):(k-=2*(a.navButtonPadding+a.navButtonRadius),c=a.numberItemsPerPage,k/=c):(l>=c||(k-=2*(a.navButtonPadding+
a.navButtonRadius),c=Math.floor(k/b)),k/=c);p=p-a.colorBoxPadding-a.colorBoxWidth-a.nameColumnPadding-e-a.valueColumnPadding;a.labelX=a.colorBoxPadding+a.colorBoxWidth+a.nameColumnPadding;a.valueX=a.colorBoxPadding+a.colorBoxWidth+a.nameColumnPadding+p+a.valueColumnPadding;a.valueColumnPadding=a.valueColumnPadding;a.rowHeight=k;a.itemsPerPage=c;a.listRowDividerAttr={"stroke-width":a.listRowDividerThickness,stroke:x(a.listRowDividerColor,a.listRowDividerAlpha)};a.alternateRowColor=x(a.alternateRowBgColor,
a.alternateRowBgAlpha);return{top:0,bottom:0}},draw:function(){var e=this.config,a=this.chart,b=a.linkedItems.smartLabel,l=a.components.paper,n=a.graphics.datasetGroup,p=this.components.data,k=a.jsonData&&a.jsonData.data,k=k&&k.length||0,d=H(k,p.length),c=this.graphics,g,c=a.config,h=c.borderThickness,f=h,a=a.config.width-c.borderThickness,m=S(e.alternateRowColor),t=e.rowHeight,r=e.listRowDividerAttr,A=r["stroke-width"]%2/2,z=e.colorBoxPadding+h,B=e.colorBoxHeight,G=e.colorBoxWidth,I=e.labelX+h,w=
e.valueX+h,v=e.textStyle,q=e.itemsPerPage,C=0,y=this.currentPage||(this.currentPage=0),x={},E,D,u;this.graphics.container||(this.graphics.container=[]);this.currentPage=y=P(Q(d/q)-1,y);for(D=0;D<d;D++)if(1!=(D+1)%q&&1!=q&&g||(f=h,(g=this.graphics.container[C])||(g=this.graphics.container[C]=l.group("grid-"+C,n)),C!==y?g.hide():g.show(),C+=1,x={pageId:C,data:[]},g.data("eventArgs",x)),c=p[D])u=c&&c.config,c=c&&(c.graphics||(c.graphics={})),D>=k?(c.alternateRow&&c.alternateRow.remove(),c.alternateRow=
void 0,c.listRowDivideElem&&c.listRowDivideElem.remove(),c.listRowDivideElem=void 0,c.element&&c.element.remove(),c.element=void 0,c.label&&c.label.remove(),c.label=void 0,c.displayValue&&c.displayValue.remove(),c.displayValue=void 0,c.listRowDivideElem&&c.listRowDivideElem.remove(),c.listRowDivideElem=void 0):(0===D%2&&(c.alternateRow||(c.alternateRow=l.rect()),g.appendChild(c.alternateRow),c.alternateRow.attr({x:h,y:f+.5*e.listRowDividerThickness,width:a-h,height:t,fill:m,"stroke-width":0})),c.element||
(c.element=l.rect()),g.appendChild(c.element),c.element.attr({x:z,y:f+t/2-B/2,width:G,height:B,fill:u.color,"stroke-width":0,stroke:"#000000"}).shadow(e.shadow),E=b.getSmartText(u.displayValue).width||0,c.displayValue||(c.displayValue=l.text()),g.appendChild(c.displayValue),c.displayValue.attr({text:u.displayValue,x:w,y:f+t/2,fill:v.color,direction:e.textDirection,"text-anchor":L}).css(v),c.label||(c.label=l.text()),u.label=b.getSmartText(u.dataLabel,a-(E+G+z),t),g.appendChild(c.label),c.label.attr({text:u.label.text,
x:I,y:f+t/2,fill:v.color,direction:e.textDirection,"text-anchor":L}).css(v),x.data.push({color:u.color,displayValue:u.displayValue,label:u.dataLabel,originalText:u.label.text,y:f+t/2}),f+=t,u=R(f)+A,c.listRowDivideElem||(c.listRowDivideElem=l.path()),g.appendChild(c.listRowDivideElem),c.listRowDivideElem.attr("path",["M",h,u,"L",a,u]).attr(r));for(d=this.graphics.container.length-1;d>=C;--d)g=this.graphics.container,g[d].remove(),g.splice(d,1);this._drawSSGridNavButton()},_drawSSGridNavButton:function(){var e=
this,a=e.chart,b=e.config,l=b.actualDataLen,g=b.itemsPerPage,d=e.graphics,k=a.components.paper,m=a.config.borderThickness,c=b.navButtonColor,v=b.navButtonHoverColor,h=b.navButtonRadius,f=.67*h,b=m+b.navButtonPadding+f+b.itemsPerPage*b.rowHeight+.5*h,m=20+m,q=a.config.width-m,a=a.graphics,t=a.trackerGroup,r=a.pageNavigationLayer,A=a.pagePreNavigationLayer,z=a.pageNextNavigationLayer,B=d.container.length,y=e.currentPage,x,w;r||(r=a.pageNavigationLayer=k.group("page-nav",t));A||(A=a.pagePreNavigationLayer=
k.group("page-prev-nav",r));z||(z=a.pageNextNavigationLayer=k.group("page-next-nav",r));l>g?(r.show(),d.navElePrv||(d.navElePrv=k.path(A)),x=d.navElePrv.attr({path:["M",m,b,"L",m+h+f,b-f,m+h,b,m+h+f,b+f,"Z"],fill:c,"stroke-width":0,cursor:"pointer"}),d.navTrackerPrv||(d.navTrackerPrv=k.circle(A).mouseover(function(){x.attr({fill:v,cursor:"pointer"})}).mouseout(function(){x.attr({fill:c})}).click(function(){e._nenagitePage(-1)})),d.navTrackerPrv.attr({cx:m+h,cy:b,r:h,fill:N,"stroke-width":0,cursor:"pointer"}),
d.navEleNxt||(w=d.navEleNxt=k.path(z)),w=d.navEleNxt.attr({path:["M",q,b,"L",q-h-f,b-f,q-h,b,q-h-f,b+f,"Z"],fill:c,"stroke-width":0,cursor:"pointer"}),d.navTrackerNxt||(d.navTrackerNxt=k.circle(z).mouseover(function(){w.attr({fill:v})}).mouseout(function(){w.attr({fill:c})}).click(function(){e._nenagitePage(1)})),d.navTrackerNxt.attr({cx:q-h,cy:b,r:h,fill:N,"stroke-width":0,cursor:"pointer"}),0===y?A.hide():A.show(),y===B-1?z.hide():z.show()):r.hide()},_nenagitePage:function(e){var a=this.chart,b=
this.graphics.container,d=this.currentPage,g=a.graphics,m=g.pagePreNavigationLayer,g=g.pageNextNavigationLayer,k=b.length;b[d+e]&&(b[d].hide(),b[d+e].show(),d=this.currentPage+=e);e=b[d].data("eventArgs");E.raiseEvent("pageNavigated",{pageId:d,data:e.data},a.chartInstance);0===d?m.hide():m.show();d===k-1?g.hide():g.show()}}])},[3,2,0,"sr2"]])});