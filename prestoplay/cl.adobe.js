(function(){var g={}; var _ = _ || {}
var f=function(window){var $R=function(){this.m=this.f=null;this.a="";this.g=new _.K("clpp.adobe.AdobePlugin")},cS=function(a){a.f=new _.Eh;a.f.on(a.m,_.og,function(){return aS(a)});a.f.on(a.m,_.mg,function(){s.Media.play(a.a,a.m.getPosition())});a.f.on(a.m,_.Fe,function(){return bS(a)});a.f.on(a.m,_.Tf,function(b){b=b.detail;switch(b.currentState){case _.Vo:a.a.length||bS(a);s.Media.play(a.a,a.m.getPosition());break;case _.Uo:case _.Mo:aS(a);break;case _.Oo:case _.Ho:case _.So:a.g.info("Close session for "+a.a+" in player state "+
(b.currentState+".")),aS(a),s.Media.close(a.a),a.a=""}})},bS=function(a){var b=a.m.getLoadedSource();a.a=b?b.name||b.url:"";a.g.info("Open session for "+a.a+" with duration "+a.m.getDuration());s.Media.open(a.a,a.m.getDuration(),_.wa)},aS=function(a){s.Media.stop(a.a,a.m.getPosition())},dS=function(){};_.w($R,_.rt);$R.prototype.onPlayerCreated=function(a){window.s&&s.Media?(this.m=a,cS(this)):this.g.warn("Adobe API not available.")};
$R.prototype.onPlayerWillDestroy=function(){this.f&&(this.f.release(),this.f=null);this.m=null;this.a=""};$R.prototype.id=function(){return"adobe"};_.H("clpp.adobe.AdobeAnalyticsPlugin",$R);$R.Id="adobe";dS.prototype.create=function(){return new $R};_.nq(new dS);};
if(typeof(module)!="undefined"&&module.exports){var x=require("./cl.core.js");_ = x._;(f.call(g,this));module.exports=g;}
else if (typeof(define)!="undefined"&&define.amd) {define(["./cl.core"], function(c){_=c._;(f.call(g,this));return g;});}
else{_=this.clpp._;(f.call(g,this));}
})();