!function(){jQuery.fn.springy=function(t){function e(t,e,a,i){var n=(i.y-a.y)*(e.x-t.x)-(i.x-a.x)*(e.y-t.y);if(0===n)return!1;var o=((i.x-a.x)*(t.y-a.y)-(i.y-a.y)*(t.x-a.x))/n,r=((e.x-t.x)*(t.y-a.y)-(e.y-t.y)*(t.x-a.x))/n;return 0>o||o>1||0>r||r>1?!1:new Springy.Vector(t.x+o*(e.x-t.x),t.y+o*(e.y-t.y))}function a(t,a,i,n,o){var r,d={x:i.x,y:i.y},l={x:i.x+n,y:i.y},g={x:i.x,y:i.y+o},s={x:i.x+n,y:i.y+o};return(r=e(t,a,d,l))?r:(r=e(t,a,l,s))?r:(r=e(t,a,s,g))?r:(r=e(t,a,g,d))?r:!1}var i=this.graph=t.graph||new Springy.Graph,n="16px Verdana, sans-serif",o="8px Verdana, sans-serif",r=t.stiffness||400,d=t.repulsion||400,l=t.damping||.5,g=t.minEnergyThreshold||1e-5,s=t.nodeSelected||null,y={},u=!0,h=this[0],f=h.getContext("2d"),c=this.layout=new Springy.Layout.ForceDirected(i,r,d,l,g),x=c.getBoundingBox(),v={bottomleft:new Springy.Vector(-2,-2),topright:new Springy.Vector(2,2)};Springy.requestAnimationFrame(function V(){v=c.getBoundingBox(),x={bottomleft:x.bottomleft.add(v.bottomleft.subtract(x.bottomleft).divide(10)),topright:x.topright.add(v.topright.subtract(x.topright).divide(10))},Springy.requestAnimationFrame(V)});var p=function(t){var e=x.topright.subtract(x.bottomleft),a=t.subtract(x.bottomleft).divide(e.x).x*h.width,i=t.subtract(x.bottomleft).divide(e.y).y*h.height;return new Springy.Vector(a,i)},m=function(t){var e=x.topright.subtract(x.bottomleft),a=t.x/h.width*e.x+x.bottomleft.x,i=t.y/h.height*e.y+x.bottomleft.y;return new Springy.Vector(a,i)},b=null,w=null,S=null;jQuery(h).mousedown(function(t){var e=jQuery(this).offset(),a=m({x:t.pageX-e.left,y:t.pageY-e.top});b=w=S=c.nearest(a),null!==b.node&&(S.point.m=1e4,s&&s(b.node)),Q.start()}),jQuery(h).dblclick(function(t){var e=jQuery(this).offset(),a=m({x:t.pageX-e.left,y:t.pageY-e.top});b=c.nearest(a),node=b.node,node&&node.data&&node.data.ondoubleclick&&node.data.ondoubleclick()}),jQuery(h).mousemove(function(t){var e=jQuery(this).offset(),a=m({x:t.pageX-e.left,y:t.pageY-e.top});w=c.nearest(a),null!==S&&null!==S.node&&(S.point.p.x=a.x,S.point.p.y=a.y),Q.start()}),jQuery(window).bind("mouseup",function(){S=null});var F=function(t){var e=void 0!==t.data.label?t.data.label:t.id;if(t._width&&t._width[e])return t._width[e];f.save(),f.font=void 0!==t.data.font?t.data.font:n;var a=f.measureText(e).width;return f.restore(),t._width||(t._width={}),t._width[e]=a,a},j=function(){return 16},E=function(t){var e=void 0!==t.data.image.width?t.data.image.width:y[t.data.image.src].object.width;return e},T=function(t){var e=void 0!==t.data.image.height?t.data.image.height:y[t.data.image.src].object.height;return e};Springy.Node.prototype.getHeight=function(){var t;return t=void 0==this.data.image?j(this):this.data.image.src in y&&y[this.data.image.src].loaded?T(this):10},Springy.Node.prototype.getWidth=function(){var t;return t=void 0==this.data.image?F(this):this.data.image.src in y&&y[this.data.image.src].loaded?E(this):10};var Q=this.renderer=new Springy.Renderer(c,function(){f.clearRect(0,0,h.width,h.height)},function(t,e,n){for(var r=p(e).x,d=p(e).y,l=p(n).x,g=p(n).y,s=new Springy.Vector(l-r,g-d),y=s.normal().normalise(),h=i.getEdges(t.source,t.target),c=i.getEdges(t.target,t.source),x=h.length+c.length,v=0,m=0;m<h.length;m++)h[m].id===t.id&&(v=m);var b=12,w=y.multiply(-((x-1)*b)/2+v*b),S=6,F=6,j=p(e).add(w),E=p(n).add(w),T=t.target.getWidth()+S,Q=t.target.getHeight()+F,V=a(j,E,{x:l-T/2,y:g-Q/2},T,Q);V||(V=E);var B,M,P=void 0!==t.data.color?t.data.color:"#000000",_=void 0!==t.data.weight?t.data.weight:1;f.lineWidth=Math.max(2*_,.1),B=1+f.lineWidth,M=8;var k,I=void 0!==t.data.directional?t.data.directional:!0;if(k=I?V.subtract(s.normalise().multiply(.5*M)):E,f.strokeStyle=P,f.beginPath(),f.moveTo(j.x,j.y),f.lineTo(k.x,k.y),f.stroke(),I&&(f.save(),f.fillStyle=P,f.translate(V.x,V.y),f.rotate(Math.atan2(g-d,l-r)),f.beginPath(),f.moveTo(-M,B),f.lineTo(0,0),f.lineTo(-M,-B),f.lineTo(.8*-M,-0),f.closePath(),f.fill(),f.restore()),void 0!==t.data.label){text=t.data.label,f.save(),f.textAlign="center",f.textBaseline="top",f.font=void 0!==t.data.font?t.data.font:o,f.fillStyle=P;var W=Math.atan2(E.y-j.y,E.x-j.x),A=-8;u&&(W>Math.PI/2||W<-Math.PI/2)&&(A=8,W+=Math.PI);var R=j.add(E).divide(2).add(y.multiply(A));f.translate(R.x,R.y),f.rotate(W),f.fillText(text,0,-2),f.restore()}},function(t,e){var a=p(e);f.save();var i=6,o=6,r=t.getWidth(),d=t.getHeight(),l=r+i,g=d+o;if(f.clearRect(a.x-l/2,a.y-g/2,l,g),f.fillStyle=null!==b&&null!==b.node&&b.node.id===t.id?"#FFFFE0":null!==w&&null!==w.node&&w.node.id===t.id?"#EEEEEE":"#FFFFFF",f.fillRect(a.x-l/2,a.y-g/2,l,g),void 0==t.data.image){f.textAlign="left",f.textBaseline="top",f.font=void 0!==t.data.font?t.data.font:n,f.fillStyle="#000000";var s=void 0!==t.data.label?t.data.label:t.id;f.fillText(s,a.x-r/2,a.y-d/2)}else{var u=t.data.image.src;if(u in y)y[u].loaded&&f.drawImage(y[u].object,a.x-r/2,a.y-d/2,r,d);else{y[u]={};var h=new Image;y[u].object=h,h.addEventListener("load",function(){y[u].loaded=!0}),h.src=u}}f.restore()});return Q.start(),this}}();