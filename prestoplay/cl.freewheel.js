(function(){var g={}; var _ = _ || {}
var f=function(window){var fP="clpp-freewheel",gP="clpp.freewheel.AdsManagerFactory",hP="freewheel",iP=function(){this.f=this.a=null},jP=function(){},kP=function(a){switch(a){case 0:return tv.freewheel.SDK.ADUNIT_PREROLL;case 1:return tv.freewheel.SDK.ADUNIT_MIDROLL;case 2:return tv.freewheel.SDK.ADUNIT_POSTROLL;default:return""}},lP=function(a,b,c){this.h=a;this.f=b;this.a=c},mP=function(a){this.a=a},nP=function(a){this.g=new _.K("clpp.freewheel.AdsManager");this.m=a;this.h=new _.Eh;this.w=new tv.freewheel.SDK.AdManager;
this.f=this.a=null;this.B=[];this.o=[];this.A=[];this.l=new _.wj;this.j=null},oP=function(a){var b=[];typeof a.networkId!==_.k&&b.push("networkId");typeof a.serverUrl!==_.Wf&&b.push("serverUrl");typeof a.profileId!==_.Wf&&b.push("profileId");typeof a.videoAssetId!==_.Wf&&typeof a.videoAssetId!==_.k&&b.push("videoAssetId");if(b.length)throw new _.P(1,9,12001,{missingKeys:b.join(", ")});},pP=function(){var a,b,c,d;return _.E(function(e){if(1==e.a)return a=new _.As,b=tv.freewheel.SDK.VIDEO_ASSET_AUTO_PLAY_TYPE_NONE,
_.x(e,a.canPlay(!1),2);if(3!=e.a)return c=e.f,_.x(e,a.canPlay(!0),3);d=e.f;c?b=tv.freewheel.SDK.VIDEO_ASSET_AUTO_PLAY_TYPE_ATTENDED:d&&(b=tv.freewheel.SDK.VIDEO_ASSET_AUTO_PLAY_TYPE_UNATTENDED);return e["return"](b)})},sP=function(a){return _.E(function(b){if(a.B.length)return qP(a),a.f=a.B.shift(),a.f.play(),b.F(0);rP(a);return _.x(b,a.m.a.play(),0)})},tP=function(a){a.A.length?(qP(a),a.f=a.A.shift(),a.f.play()):rP(a)},qP=function(a){var b=a.m.nc(hP).Rc();b&&(a.m.getSurface().show(b),a.m.getSurface().hideMediaElement(),
a.a.registerVideoDisplayBase(fP),a.m.isMuted()?a.setVolume(0):a.setVolume(a.m.getVolume()||1))},rP=function(a){var b=a.m.nc(hP).Rc();b&&a.m.getSurface().hide(b);a.m.getSurface().showMediaElement()},uP=function(a,b,c){var d=null;a.a&&c&&(c.adInstance||c.slot)&&(c=(d=c.adInstance||null)?d.getSlot():c.slot,d={ad:new lP(a.a,c,d)});a.m.trigger(new _.L(b,d))},vP=function(){this.Xc=new _.K(gP)};_.w(iP,_.rt);_.r=iP.prototype;
_.r.onPlayerCreated=function(a){if(window.tv&&tv.freewheel&&tv.freewheel.SDK)this.a=_.qp(_.Yd,{id:fP}),this.f=_.qp(_.sg,{"class":_.wd}),this.a.appendChild(this.f),a.getSurface().addElementToContainer(this.a,!0),a.getSurface().hide(this.a);else a.onError(new _.P(1,9,12E3))};_.r.onPlayerWillDestroy=function(a){this.a&&(a.getSurface().removeElementFromContainer(this.a),this.f=this.a=null)};_.r.id=function(){return hP};_.r.Rc=function(){return this.a};_.r.Yj=function(){return this.f};
_.H("clpp.freewheel.FreeWheelPlugin",iP);iP.prototype.getAdVideo=iP.prototype.Yj;iP.prototype.getAdContainer=iP.prototype.Rc;iP.Id=hP;iP.AD_CONTAINER_ID=fP;jP.prototype.create=function(){return new iP};_.nq(new jP);_.r=lP.prototype;_.r.xb=function(){return"FreeWheel AdManager SDK"};_.r.yb=function(){return tv.freewheel.SDK.version};_.r.Eb=function(){return 0};_.r.getId=function(){return this.a?this.a.getAdId():""};_.r.getCreativeId=function(){var a=(this.a||{})._creativeId;return typeof a===_.Wf?a:""};_.r.getApiFramework=function(){return this.a?this.a.getActiveCreativeRendition().getCreativeApi():""};_.r.getAdSystem=function(){return""};_.r.getAdvertiserName=function(){return""};_.r.getTitle=function(){return""};
_.r.getDuration=function(){return this.a?this.a.getActiveCreativeRendition().getDuration():0};_.r.getSkipTimeOffset=function(){return 0};_.r.rc=function(){return!1};_.r.Rb=function(){return this.a&&this.a.getEventCallbackUrls(tv.freewheel.SDK.EVENT_AD_CLICK,tv.freewheel.SDK.EVENT_TYPE_CLICK)[0]||""};_.r.getMediaUrl=function(){return this.a?this.a.getActiveCreativeRendition().getPrimaryCreativeRenditionAsset().getUrl():""};
_.r.Bb=function(){return this.a?this.a.getActiveCreativeRendition().getWidth():0};_.r.Ab=function(){return this.a?this.a.getActiveCreativeRendition().getHeight():0};_.r.ob=function(){return 0};_.r.cb=function(){switch(this.f.getTimePositionClass()){case tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:return 0;case tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:return 2;default:return 1}};
_.r.getPodIndex=function(){switch(this.cb()){case 0:return 0;case 2:return-1}return this.h.getSlotsByTimePositionClass(tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL).indexOf(this.f)+1};_.r.Sb=function(){switch(this.cb()){case 0:return 0;case 2:return-1;default:return this.f.getTimePosition()}};_.r.Tb=function(){return this.a?this.f.getAdInstances().indexOf(this.a)+1:1};_.r.Db=function(){return this.f.getAdCount()};_.r.getWrapperAdIds=function(){return[]};_.r.getWrapperAdSystems=function(){return[]};
_.r.getWrapperCreativeIds=function(){return[]};lP.prototype.getWrapperCreativeIds=lP.prototype.getWrapperCreativeIds;lP.prototype.getWrapperAdSystems=lP.prototype.getWrapperAdSystems;lP.prototype.getWrapperAdIds=lP.prototype.getWrapperAdIds;lP.prototype.getSequenceLength=lP.prototype.Db;lP.prototype.getPositionInSequence=lP.prototype.Tb;lP.prototype.getPodTimeOffset=lP.prototype.Sb;lP.prototype.getPodIndex=lP.prototype.getPodIndex;lP.prototype.getPodType=lP.prototype.cb;
lP.prototype.getMediaBitrate=lP.prototype.ob;lP.prototype.getMediaHeight=lP.prototype.Ab;lP.prototype.getMediaWidth=lP.prototype.Bb;lP.prototype.getMediaUrl=lP.prototype.getMediaUrl;lP.prototype.getClickThroughUrl=lP.prototype.Rb;lP.prototype.isBumper=lP.prototype.rc;lP.prototype.getSkipTimeOffset=lP.prototype.getSkipTimeOffset;lP.prototype.getDuration=lP.prototype.getDuration;lP.prototype.getTitle=lP.prototype.getTitle;lP.prototype.getAdvertiserName=lP.prototype.getAdvertiserName;
lP.prototype.getAdSystem=lP.prototype.getAdSystem;lP.prototype.getApiFramework=lP.prototype.getApiFramework;lP.prototype.getCreativeId=lP.prototype.getCreativeId;lP.prototype.getId=lP.prototype.getId;lP.prototype.getTechnology=lP.prototype.Eb;lP.prototype.getAdManagerVersion=lP.prototype.yb;lP.prototype.getAdManagerName=lP.prototype.xb;mP.prototype.getCuePoints=function(){return this.a.getTemporalSlots().map(function(a){switch(a.getTimePositionClass()){case tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:return 0;case tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:return-1;default:return a.getTimePosition()}})};mP.prototype.Vb=function(){return 0<this.a.getSlotsByTimePositionClass(tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL).length};mP.prototype.pb=function(){return 0<this.a.getSlotsByTimePositionClass(tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL).length};
mP.prototype.hasPostroll=mP.prototype.pb;mP.prototype.hasPreroll=mP.prototype.Vb;mP.prototype.getCuePoints=mP.prototype.getCuePoints;_.r=nP.prototype;
_.r.load=function(){var a=this,b,c,d,e,f,g,h,l;return _.E(function(m){if(1==m.a){b=a.m.getConfiguration().freewheel||{};try{oP(b)}catch(n){return a.m.onError(n),a.l.resolve(),m["return"](a.l)}a.w.setNetwork(b.networkId);a.w.setServer(b.serverUrl);a.a=a.w.newContext();a.a.setProfile(b.profileId);typeof b.siteSectionId!==_.Wf&&typeof b.siteSectionId!==_.k||a.a.setSiteSection(b.siteSectionId);return _.x(m,pP(),2)}c=m.f;a.a.setVideoAsset(b.videoAssetId,a.m.getDuration(),void 0,void 0,c);if(Array.isArray(b.pods))for(d=
_.u(b.pods),e=d.next();!e.done;e=d.next())f=e.value,a.a.addTemporalSlot(f.id,kP(f.type),f.position,f.slotProfile,f.cuepointSequence,f.maxDuration,f.minDuration,f.acceptContentType);b.keyValues&&typeof b.keyValues===_.Te&&Object.keys(b.keyValues).forEach(function(n){return a.a.addKeyValue(n,b.keyValues[n])});a.a.setParameter(tv.freewheel.SDK.PARAMETER_EXTENSION_CONTENT_VIDEO_ENABLED,!1,tv.freewheel.SDK.PARAMETER_LEVEL_GLOBAL);if(Array.isArray(b.parameters))for(g=_.u(b.parameters),h=g.next();!h.done;h=
g.next())l=h.value,a.a.setParameter(l.name,l.value,l.level);a.h.on(a.a,tv.freewheel.SDK.EVENT_REQUEST_COMPLETE,a.xl.bind(a));a.h.on(a.a,tv.freewheel.SDK.EVENT_SLOT_STARTED,a.Bl.bind(a));a.h.on(a.a,tv.freewheel.SDK.EVENT_SLOT_ENDED,a.Al.bind(a));a.h.on(a.a,tv.freewheel.SDK.EVENT_AD,a.Tk.bind(a));a.h.on(a.m,_.eg,a.Ui.bind(a));a.h.on(a.m,_.Tf,a.Ti.bind(a));a.a.submitRequest();return m["return"](a.l)})};_.r.start=function(){var a=this;return _.E(function(b){return _.x(b,sP(a),0)})};
_.r.resume=function(){this.f&&this.f.resume()};_.r.pause=function(){this.f&&this.f.pause()};_.r.skip=function(){this.f&&this.f.skipCurrentAd()};_.r.getVolume=function(){return this.a?this.a.getAdVolume():1};_.r.setVolume=function(a){this.a&&this.a.setAdVolume(a)};_.r.getPosition=function(){return this.f?this.f.getPlayheadTime():-1};_.r.dispose=function(){var a=this;return _.E(function(b){a.h.release();a.j&&(a.j.stop(),a.j=null);rP(a);a.a&&(a.a.dispose(),a.a=null);_.y(b)})};
_.r.xl=function(a){var b=this;if(a.success)this.B=this.a.getSlotsByTimePositionClass(tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL),this.o=this.a.getSlotsByTimePositionClass(tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL),this.A=this.a.getSlotsByTimePositionClass(tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL),this.m.trigger(new _.L(_.Nc,{adsTimeline:new mP(this.a)})),this.j=new _.ys(this.m.getSurface(),function(c,d){return b.a.resize(c,d)},this.m.nc(hP).f);else this.m.onError(new _.P(1,9,10003,{errorType:0},
void 0));this.l.resolve()};_.r.Bl=function(a){uP(this,_.uc,a);this.j.start()};_.r.Al=function(a){this.f=null;a=a.slot;uP(this,_.vc);this.j.stop();if(a)switch(a.getTimePositionClass()){case tv.freewheel.SDK.TIME_POSITION_CLASS_PREROLL:sP(this);break;case tv.freewheel.SDK.TIME_POSITION_CLASS_MIDROLL:rP(this);this.m.play();break;case tv.freewheel.SDK.TIME_POSITION_CLASS_POSTROLL:tP(this)}};
_.r.Tk=function(a){var b=a.subType;this.g.debug("ad event",b);switch(b){case tv.freewheel.SDK.EVENT_AD_IMPRESSION:uP(this,_.Hc,a);uP(this,_.Ac,a);break;case tv.freewheel.SDK.EVENT_AD_IMPRESSION_END:uP(this,_.Ic,a);break;case tv.freewheel.SDK.EVENT_AD_FIRST_QUARTILE:uP(this,_.zc,a);break;case tv.freewheel.SDK.EVENT_AD_MIDPOINT:uP(this,_.Cc,a);break;case tv.freewheel.SDK.EVENT_AD_THIRD_QUARTILE:uP(this,_.Jc,a);break;case tv.freewheel.SDK.EVENT_AD_COMPLETE:uP(this,_.yc,a);break;case tv.freewheel.SDK.EVENT_AD_CLICK:uP(this,
_.xc,a);break;case tv.freewheel.SDK.EVENT_AD_PAUSE:uP(this,_.Dc,a);break;case tv.freewheel.SDK.EVENT_AD_RESUME:uP(this,_.Fc,a);break;case tv.freewheel.SDK.EVENT_AD_SKIPPED:uP(this,_.Gc,a);break;case tv.freewheel.SDK.EVENT_AD_BUFFERING_START:uP(this,_.wc,a);break;case tv.freewheel.SDK.EVENT_AD_BUFFERING_END:uP(this,_.Ec,a);break;case tv.freewheel.SDK.EVENT_ERROR:this.m.onError(new _.P(1,9,10003,{errorType:1},{fwCode:a[tv.freewheel.SDK.INFO_KEY_ERROR_CODE],fwInfo:a[tv.freewheel.SDK.INFO_KEY_ERROR_INFO],
fwModule:a[tv.freewheel.SDK.INFO_KEY_ERROR_MODULE]}))}};_.r.Ui=function(){var a=this;if(!this.f){var b=this.m.getPosition();if(this.f=this.o.find(function(d){return.5>Math.abs(b-d.getTimePosition())})||null){var c=this.o.findIndex(function(d){return d===a.f});this.o.splice(c,1);this.m.pause();qP(this);this.f.play()}}};
_.r.Ti=function(a){if((a=a.detail)&&this.a)switch(a.currentState){case _.Vo:this.a.setVideoState(tv.freewheel.SDK.VIDEO_STATE_PLAYING);break;case _.Uo:this.a.setVideoState(tv.freewheel.SDK.VIDEO_STATE_PAUSED);break;case _.Oo:this.a.setVideoState(tv.freewheel.SDK.VIDEO_STATE_COMPLETED);tP(this);break;case _.Ho:case _.So:this.a.setVideoState(tv.freewheel.SDK.VIDEO_STATE_STOPPED)}};nP.prototype.getPosition=nP.prototype.getPosition;nP.prototype.setVolume=nP.prototype.setVolume;
nP.prototype.getVolume=nP.prototype.getVolume;nP.prototype.skip=nP.prototype.skip;nP.prototype.pause=nP.prototype.pause;nP.prototype.resume=nP.prototype.resume;nP.prototype.start=nP.prototype.start;vP.prototype.name=function(){return gP};vP.prototype.ba=function(a,b){return a.namespace()===_.Cd?!1:window.tv&&tv.freewheel&&tv.freewheel.SDK?!(!b||!b.freewheel):(this.Xc.warn("FreeWheel SDK is not loaded."),!1)};vP.prototype.create=function(a){return new nP(a)};vP.prototype.create=vP.prototype.create;vP.prototype.isSupported=vP.prototype.ba;vP.prototype.name=vP.prototype.name;_.np(new vP);};
if(typeof(module)!="undefined"&&module.exports){var x=require("./cl.core.js");_ = x._;(f.call(g,this));module.exports=g;}
else if (typeof(define)!="undefined"&&define.amd) {define(["./cl.core"], function(c){_=c._;(f.call(g,this));return g;});}
else{_=this.clpp._;(f.call(g,this));}
})();