(function(){var g={}; var _ = _ || {}
var f=function(window){var VO=function(a){this.startTime=a.startTime;this.endTime=a.endTime;this.a=this.f=null;a=a.value;if(!_.N.R(a)){a:{var b=a.info;if(_.N.$(b)&&(b=b.toLowerCase().match(/lang:(\w+)/))&&b[1]){b=b[1].toLowerCase();break a}b=null}this.f=b;a=a.data;this.a=_.N.$(a)?a:null}},XO=function(a,b,c){this.m=a;this.l=b;this.j=c;this.a=new _.Eh;this.h=(a=_.ft[_.Xc]||null)?new a(this.m.getConfiguration()):null;this.g=new _.K("clpp.hlssmpte.ImageCueHandler");this.f=null;WO(this)},WO=function(a){a.a.one(a.m,_.Ee,function(){return YO(a)})},
YO=function(a){var b=a.m.getSurface().getMedia();if(b)if(a.h){a.a.on(b.textTracks,_.Kc,function(d){return ZO(a,d)});var c=Array.from(b.textTracks);c.filter(function(d){return d.kind===_.Le}).forEach(function(d){ZO(a,{track:d})});!$O(c)&&a.l&&(a.g.warn("The metadata track is not present. Changing an audio track in order to enforce the creation of the metadata track."),aP(a,b))}else a.g.warn("The clpp.ttml.TextParser class is not available. Please register the ttml component first.");else a.g.warn("A video element is not available. Skipping.")},
$O=function(a){return a.some(function(b){return b.kind===_.Le})},aP=function(a,b){var c=a.m.getTrackManager(),d=c.ja(),e=c.getAudioTracks().find(function(g){return g!==d});if(e){var f=function(){return c.za(d)};a.a.on(b.textTracks,_.Kc,function(g){g.track.kind===_.Le&&(a.a.off(b.textTracks,_.Kc,f),f())});c.za(e)}else a.g.warn("Can't enforce the creation of the metadata track if single audio track. Skipping.")},ZO=function(a,b){var c=b.track;c.kind===_.Le&&(a.g.info("The metadata track has been added."),
c.mode=_.se,a.a.on(c,_.Ud,function(d){return bP(a,d)}))},bP=function(a,b){var c=cP(a);c&&Array.from(b.target.activeCues||[]).forEach(function(d){if(d!==a.f&&Number.isFinite(d.startTime)&&Number.isFinite(d.endTime)&&"org.id3"===d.type&&d.value&&"TXXX"===d.value.key){var e=new VO(d);if(e.f===c&&null!==e.a){a.f=d;d=a.h.parseMedia(_.R.Va(e.a),{periodStart:a.j,segmentStart:e.startTime,segmentEnd:e.endTime});var f=a.m.getTextDisplayer();f.remove(0,e.startTime);f.append(d.cues,d.styles)}}})},cP=function(a){return(a=
a.m.getTrackManager().ua())&&a.language&&a.language.toLowerCase()},dP=function(){this.a=null;this.f=!1},eP=function(){};XO.prototype.destroy=function(){this.a.release();this.f=null;return Promise.resolve()};_.w(dP,_.rt);dP.prototype.onPlayerCreated=function(){};dP.prototype.onContentWillLoad=function(a){if(this.f=_.Bk()){var b=a.getConfiguration();b=_.N.Oa(b.hlssmpte||{});_.N.Zg(b.patchMetadataTrack)||(b.patchMetadataTrack=!1);_.N.na(b.timestampOffset)||(b.timestampOffset=0);this.a=new XO(a,b.patchMetadataTrack,b.timestampOffset)}};dP.prototype.onPlayerWillDestroy=function(){var a=this;return _.E(function(b){if(1==b.a)return a.a?_.x(b,a.a.destroy(),3):b.F(0);a.a=null;_.y(b)})};dP.prototype.id=function(){return"hlssmpte"};
_.H("clpp.hlssmpte.HlsSmptePlugin",dP);dP.Id="hlssmpte";eP.prototype.create=function(){return new dP};_.nq(new eP);};
if(typeof(module)!="undefined"&&module.exports){var x=require("./cl.core.js");_ = x._;(f.call(g,this));module.exports=g;}
else if (typeof(define)!="undefined"&&define.amd) {define(["./cl.core"], function(c){_=c._;(f.call(g,this));return g;});}
else{_=this.clpp._;(f.call(g,this));}
})();