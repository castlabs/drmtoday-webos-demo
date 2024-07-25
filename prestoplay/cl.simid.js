(function(){var g={}; var _ = _ || {}
var f=function(window){var Hx="No surface found. Can not attach frame!",Ix="SIMID:Media:timeupdate",Jx="Starting creative",Ox=function(a){var b=this;this.f=a;this.h="";this.l=0;this.j=new Map;this.a=document.createElement("iframe");this.a.style.opacity="0";this.a.style.border=_.Se;this.a.style.backgroundColor="transparent";this.a.style.transition="opacity .5s";this.a.style.transitionDelay=".5s";this.a.style.pointerEvents=_.Se;this.a.style.overflow=_.se;this.a.classList.add(_.wd);this.o=function(c){if(c.source===b.a.contentWindow&&
(c=(c=c.data)?typeof c===_.Wf?JSON.parse(c):c:null))if(c.type)switch(b.g.info("Received message ["+c.messageId+"] '"+c.type+"':",c.args),c.type){case "createSession":Kx(b,c);break;case "resolve":c=c.args;var d=b.j.get(c.messageId);d&&d.resolve(c);break;case "reject":c=c.args;(d=b.j.get(c.messageId))&&d.reject(c);break;case "SIMID:Creative:requestResize":d=b.f;var e=c.args;d.g.info("Creative requested resize",e);if(d.m&&d.m.getSurface()&&d.m.getSurface().getMedia()&&e.mediaDimensions){d.h?d.m.getSurface().getMedia().style.transition=
"":(d.m.getSurface().getMedia().style.transition="left .5s, top .5s,width .5s, height .5s",d.h=!0);var f=Lx(d,e.mediaDimensions);d.m.getSurface().getMedia().style.left=f.left;d.m.getSurface().getMedia().style.top=f.top;d.m.getSurface().getMedia().style.width=f.width;d.m.getSurface().getMedia().style.height=f.height}e.creativeDimensions&&(e=Lx(d,e.creativeDimensions),d.a.a.style.left=e.left,d.a.a.style.top=e.top,d.a.a.style.width=e.width,d.a.a.style.height=e.height);Mx(b,c)}else b.g.warn("WARNING: received message without 'type' property")};
this.g=new _.K("clpp.simid.SimidPlayer");Nx(this.f,this)},Rx=function(a){var b=Px(a,"SIMID:Player:startCreative",void 0);Qx(a,b).then(function(){var c=a.f;c.g.info(Jx);c.m.trigger(new _.L(_.Of));a.a.style.opacity="1"})["catch"](function(c){a.unload();a.f.g.error("Error while starting creative",c)})},Kx=function(a,b){var c;_.E(function(d){if(1==d.a){a.h=b.sessionId;Mx(a,b);_.A(d,2);var e=a.f;var f=e.getSurface(),g=e.getContainer();e={environmentData:{videoDimensions:{x:0,y:0,height:g.clientHeight,
width:g.clientWidth},creativeDimensions:{x:0,y:0,height:g.clientHeight,width:g.clientWidth},fullscreen:f.isFullscreen(),fullscreenAllowed:!0,variableDurationAllowed:!1,skippableState:"notSkippable",version:"1.1",skipoffset:"",siteUrl:window.location.toString(),appId:"",useragent:"",deviceId:"",muted:e.m.isMuted()||!1,volume:e.m.getVolume()||0,navigationSupport:"adHandles",closeButtonSupport:"adHandles",nonlinearDuration:e.f.duration},creativeData:{adParameters:e.f.adParameters||"",clickThruUri:"",
clickThruUrl:""}};e=Px(a,"SIMID:Player:init",e);e=Qx(a,e);return _.x(d,e,4)}if(2!=d.a)return a.g.info("Player Init acknowledged"),a.f.g.info("SIMID Player initialized"),_.ah(d,0);c=_.C(d);a.g.error("Error while initializing",c);a.f.g.error("Error while initializing SIMID player: ",c);a.unload();_.y(d)})},Px=function(a,b,c){return{type:b,sessionId:a.h,messageId:a.l++,timestamp:Date.now(),args:c}},Sx=function(a,b){a.h?(b.type!==Ix&&a.g.info("Posting message ["+b.messageId+"] '"+b.type+"':",b.args),
a.a.contentWindow&&a.a.contentWindow.postMessage(JSON.stringify(b),"*")):a.g.warn("WARNING: no session available to send message '"+b.type+"'")},Mx=function(a,b){Sx(a,Px(a,"resolve",{messageId:b.messageId,value:void 0}))},Qx=function(a,b){return new Promise(function(c,d){new Tx(a.j,c,d,b);Sx(a,b)})},Tx=function(a,b,c,d){var e=this;var f=void 0===f?-1:f;this.f=a;this.l=b;this.j=c;this.h=d;this.a=null;this.f.set(d.messageId,this);0<=f&&(this.a=setTimeout(function(){e.resolve()},f))},Ux=function(){this.g=
new _.K("clpp.simid.Plugin");this.h=this.a=this.m=null;this.l=[];this.j=null;this.w=this.kj.bind(this);this.f=null;this.o=!1},Vx=function(a,b,c){return new ResizeObserver(function(){if(a.a.h){var d=a.a,e={videoDimensions:{x:0,y:0,height:b.clientHeight,width:b.clientWidth},creativeDimensions:{x:0,y:0,height:b.clientHeight,width:b.clientWidth},fullscreen:c.isFullscreen()};e=Px(d,"SIMID:Player:resize",e);Sx(d,e)}})},Wx=function(a){this.m=a;this.a=null;this.g=new _.K("clpp.simid.Loader");this.h=!1;this.f=
null},Lx=function(a,b){var c=a.getContainer(),d=c.clientWidth;c=c.clientHeight;return{top:b.y/c*100+"%",left:b.x/d*100+"%",width:b.width/d*100+"%",height:b.height/c*100+"%"}},Nx=function(a,b){a.g.info("SIMID Session created");a.a=b},Xx=function(a){a.g.info("Stopping creative");a.m.getSurface().getMedia().style.transition=".5s";setTimeout(function(){a.m.getSurface().getMedia().style.transition=""},500);a.m.getSurface().getMedia().style.left="";a.m.getSurface().getMedia().style.top="";a.m.getSurface().getMedia().style.width=
"";a.m.getSurface().getMedia().style.height="";a.a.a.style.left="";a.a.a.style.top="";a.a.a.style.width="";a.a.a.style.height="";a.h=!1;a.m.trigger(new _.L(_.Pf))},Yx=function(){};Ox.prototype.load=function(a){window.addEventListener(_.Ke,this.o);this.h="";this.l=0;var b=this.f.url();this.g.info('Loading "'+b+'" as src of iFrame');this.a.src=b;this.g.info("Attaching iFrame");a.appendChild(this.a)};
Ox.prototype.unload=function(){Xx(this.f);this.h=this.a.src="";this.l=0;this.a.style.opacity="0";window.removeEventListener(_.Ke,this.o);this.a.parentElement&&this.a.parentElement.removeChild(this.a)};Tx.prototype.resolve=function(a){null!==this.a&&(clearTimeout(this.a),this.a=null);this.f["delete"](this.h.messageId);this.l(a)};Tx.prototype.reject=function(a){null!==this.a&&(clearTimeout(this.a),this.a=null);this.f["delete"](this.h.messageId);this.j(a)};_.w(Ux,_.rt);_.r=Ux.prototype;_.r.id=function(){return"simid"};_.r.onPlayerCreated=function(a){this.g.info("New player created");this.a&&(this.a.unload(),this.a=null);this.m=a;this.h&&this.h.release();this.h=new Wx(a)};
_.r.onContentWillLoad=function(a){var b=a.getConfiguration();if(b.simid&&b.simid.creatives&&0!==b.simid.creatives.length)if(this.l=b.simid.creatives,this.g.info("Setting up SIMID plugin for "+this.l.length+" creatives"),b=this.m.getSurface()){this.g.info("Creating new session");this.a=new Ox(this.h);var c=b.getContainer();this.j=Vx(this,c,b);this.j.observe(c);a.on(_.eg,this.w)}else this.g.warn(Hx)};
_.r.kj=function(){var a=this.m.getPosition();a:if(this.f&&a<this.f.startTime+this.f.duration)var b=this.f;else{for(b=0;b<this.l.length;b++){var c=this.l[b],d=c.startTime+c.duration;if(a>=c.startTime-(c.preload||5)&&a<d){b=c;break a}}b=null}b?b===this.f?(b=b.startTime,this.a&&(c=a>=b,!this.o&&c&&(Rx(this.a),this.o=!0,this.g.info(Jx)),c&&(c=this.a,Sx(c,Px(c,Ix,{currentTime:a-b}))))):((a=this.m.getSurface())||this.g.warn(Hx),a=a.getContainer(),this.f=b,this.o=!1,this.g.info("Loading session"),this.h.f=
b,this.a.load(a)):this.f&&(this.a.unload(),this.f=null,this.o=!1)};_.r.onPlayerWillRelease=function(a){_.rt.prototype.onPlayerWillRelease.call(this,a);this.m.getSurface()&&(this.j&&(this.j.disconnect(),this.j=null),a.off(_.eg,this.w),this.f&&(this.a.unload(),this.f=this.h.f=null))};Wx.prototype.release=function(){this.g.info("Releasing loader")};
Wx.prototype.getContainer=function(){var a=this.getSurface().getContainer();if(!a)throw this.g.error("No player container found. Can not create SIMID init data"),new _.P(1,10,10100,"No player container found");return a};Wx.prototype.getSurface=function(){var a=this.m.getSurface();if(!a)throw this.g.error("No player surface found. Can not create SIMID init data"),new _.P(1,10,10100,"No surface");return a};Wx.prototype.url=function(){return this.f?this.f.url:""};Yx.prototype.create=function(){return new Ux};
_.nq(new Yx);};
if(typeof(module)!="undefined"&&module.exports){var x=require("./cl.core.js");_ = x._;(f.call(g,this));module.exports=g;}
else if (typeof(define)!="undefined"&&define.amd) {define(["./cl.core"], function(c){_=c._;(f.call(g,this));return g;});}
else{_=this.clpp._;(f.call(g,this));}
})();