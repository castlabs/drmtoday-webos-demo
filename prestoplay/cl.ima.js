(function(){var g={}; var _ = _ || {}
var f=function(window){var sN="clpp.ima.AdsManagerFactory",tN=function(a,b,c){this.a=a;this.f=a.getAdPodInfo();this.j=b;this.h=c},uN=function(){},vN=function(a){this.a=a},wN=function(a){this.m=a;this.A=a.getSurface().getMedia();a=this.m.getConfiguration();a=_.N.Oa(a.ima||{});this.J=_.N.oa({disableCustomPlayback:!1},a);this.o=this.m.nc("ima").Rc();this.T=this.m.nc("ima").h;this.l=this.m.nc("ima").a;this.M=new _.As;this.g=new _.K("clpp.ima");this.h=this.a=null;this.f=new _.wj;this.I=!1;this.w=new _.Eh;this.V=new uN;this.B=
null;this.P=this.H=this.C=this.G=!1;this.K=this.j=null;a=this.w;var b=google.ima.AdErrorEvent.Type.AD_ERROR;a.one(this.l,google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,this.al.bind(this));a.on(this.l,b,this.$k.bind(this));a.on(this.m,_.me,this.hl.bind(this))},xN=function(a){var b=a.a,c=a.w,d=google.ima.AdEvent.Type;c.on(b,d.AD_BREAK_READY,a.Qk.bind(a));c.on(b,d.LOADED,a.Zi.bind(a));c.on(b,d.CONTENT_PAUSE_REQUESTED,a.il.bind(a));c.on(b,d.STARTED,a.aj.bind(a));c.on(b,d.LOG,a.Uk.bind(a));c.on(b,
d.AD_PROGRESS,a.Yk.bind(a));c.on(b,d.AD_BUFFERING,a.Rk.bind(a));c.on(b,d.FIRST_QUARTILE,a.Xi.bind(a));c.on(b,d.MIDPOINT,a.Vk.bind(a));c.on(b,d.THIRD_QUARTILE,a.bj.bind(a));c.on(b,d.PAUSED,a.Xk.bind(a));c.on(b,d.RESUMED,a.Zk.bind(a));c.on(b,d.CLICK,a.Wi.bind(a));c.on(b,d.SKIPPED,a.$i.bind(a));c.on(b,d.IMPRESSION,a.Yi.bind(a));c.on(b,d.COMPLETE,a.Sk.bind(a));c.on(b,d.CONTENT_RESUME_REQUESTED,a.jl.bind(a));c.on(b,d.ALL_ADS_COMPLETED,a.cl.bind(a))},yN=function(a){a=a.J;var b=new google.ima.AdsRenderingSettings;
b.restoreCustomPlaybackStateOnAdBreakComplete=!1;typeof a.bitrate===_.k&&(b.bitrate=a.bitrate);b.enablePreloading=typeof a.enablePreloading===_.hd?a.enablePreloading:!0;typeof a.loadVideoTimeout===_.k&&(b.loadVideoTimeout=a.loadVideoTimeout);Array.isArray(a.mimeTypes)&&(b.mimeTypes=a.mimeTypes);typeof a.playAdsAfterTime===_.k&&(b.playAdsAfterTime=a.playAdsAfterTime);typeof a.useStyledLinearAds===_.hd&&(b.useStyledLinearAds=a.useStyledLinearAds);b.uiElements=Array.isArray(a.uiElements)?a.uiElements:
[];return b},AN=function(a){a.B=null;zN(a,_.Ic);a.o&&a.m.getSurface().hide(a.o)},BN=function(a){_.sp(a.A,{visibility:"visible"})},zN=function(a,b,c){c=c&&c.getAd();var d=null;c&&(d={ad:new tN(c,a.G,a.C)});a.m.trigger(new _.L(b,d))},CN=function(a,b){var c=b?a.V.create(b.getErrorCode()):null;a.m.onError(new _.P(1,9,10003,{errorType:c},b))},DN=function(a){return!1===a.J.disableCustomPlayback&&a.a.isCustomPlaybackUsed()&&_.Dj()},FN=function(a){var b,c;return _.E(function(d){if(1==d.a)return a.T.initialize(),
b=!!a.m.getConfiguration().muted,_.x(d,a.M.canPlay(b),2);c=d.f;if(!c&&!DN(a))return zN(a,_.fd),a.g.warn(_.oa),d["return"]();EN(a);_.y(d)})},GN=function(a,b){return _.E(function(c){if(1==c.a)return a.T.initialize(),_.x(c,b.play(),2);EN(a);_.y(c)})},EN=function(a){a.a.init(a.A.offsetWidth,a.A.offsetHeight,google.ima.ViewMode.NORMAL);a.I=!0},HN=function(){this.a=this.h=this.f=null},IN=function(){return!window.google||!google.ima||!google.ima.AdsLoader},JN=function(){},KN=function(){this.Xc=new _.K(sN)};
_.r=tN.prototype;_.r.xb=function(){return"Google IMA SDK"};_.r.yb=function(){return google.ima.VERSION};_.r.Eb=function(){return 0};_.r.getId=function(){return this.a.getAdId()};_.r.getCreativeId=function(){return this.a.getCreativeId()};_.r.getApiFramework=function(){return this.a.getApiFramework()};_.r.getAdSystem=function(){return this.a.getAdSystem()};_.r.getAdvertiserName=function(){return this.a.getAdvertiserName()};_.r.getTitle=function(){return this.a.getTitle()};_.r.getDuration=function(){return this.a.getDuration()};
_.r.getSkipTimeOffset=function(){return this.a.getSkipTimeOffset()};_.r.rc=function(){return this.f?this.f.getIsBumper():!1};_.r.Rb=function(){var a=null,b=this.a,c=Object.keys(b).find(function(d){return typeof b[d]===_.Te&&typeof b[d].clickThroughUrl===_.Wf});c&&(a=b[c].clickThroughUrl);return a};_.r.getMediaUrl=function(){return this.a.getMediaUrl()};_.r.Bb=function(){return this.a.getVastMediaWidth()};_.r.Ab=function(){return this.a.getVastMediaHeight()};_.r.ob=function(){return this.a.getVastMediaBitrate()};
_.r.cb=function(){return this.h?2:this.j?1:0};_.r.getPodIndex=function(){return this.f?this.f.getPodIndex():0};_.r.Sb=function(){return this.f?this.f.getTimeOffset():0};_.r.Tb=function(){return this.f?this.f.getAdPosition():1};_.r.Db=function(){return this.f?this.f.getTotalAds():1};_.r.getWrapperAdIds=function(){return this.a.getWrapperAdIds()};_.r.getWrapperAdSystems=function(){return this.a.getWrapperAdSystems()};_.r.getWrapperCreativeIds=function(){return this.a.getWrapperCreativeIds()};
tN.prototype.getWrapperCreativeIds=tN.prototype.getWrapperCreativeIds;tN.prototype.getWrapperAdSystems=tN.prototype.getWrapperAdSystems;tN.prototype.getWrapperAdIds=tN.prototype.getWrapperAdIds;tN.prototype.getSequenceLength=tN.prototype.Db;tN.prototype.getPositionInSequence=tN.prototype.Tb;tN.prototype.getPodTimeOffset=tN.prototype.Sb;tN.prototype.getPodIndex=tN.prototype.getPodIndex;tN.prototype.getPodType=tN.prototype.cb;tN.prototype.getMediaBitrate=tN.prototype.ob;
tN.prototype.getMediaHeight=tN.prototype.Ab;tN.prototype.getMediaWidth=tN.prototype.Bb;tN.prototype.getMediaUrl=tN.prototype.getMediaUrl;tN.prototype.getClickThroughUrl=tN.prototype.Rb;tN.prototype.isBumper=tN.prototype.rc;tN.prototype.getSkipTimeOffset=tN.prototype.getSkipTimeOffset;tN.prototype.getDuration=tN.prototype.getDuration;tN.prototype.getTitle=tN.prototype.getTitle;tN.prototype.getAdvertiserName=tN.prototype.getAdvertiserName;tN.prototype.getAdSystem=tN.prototype.getAdSystem;
tN.prototype.getApiFramework=tN.prototype.getApiFramework;tN.prototype.getCreativeId=tN.prototype.getCreativeId;tN.prototype.getId=tN.prototype.getId;tN.prototype.getTechnology=tN.prototype.Eb;tN.prototype.getAdManagerVersion=tN.prototype.yb;tN.prototype.getAdManagerName=tN.prototype.xb;uN.prototype.create=function(a){var b=google.ima.AdError.ErrorCode;switch(a){case b.VAST_LOAD_TIMEOUT:case b.VAST_MEDIA_LOAD_TIMEOUT:case b.FAILED_TO_REQUEST_ADS:return 0;case b.VIDEO_PLAY_ERROR:return 1;default:return 2}};vN.prototype.getCuePoints=function(){return this.a};vN.prototype.Vb=function(){return 0<=this.a.indexOf(0)||0===this.a.length};vN.prototype.pb=function(){return 0<=this.a.indexOf(-1)};vN.prototype.hasPostroll=vN.prototype.pb;vN.prototype.hasPreroll=vN.prototype.Vb;vN.prototype.getCuePoints=vN.prototype.getCuePoints;_.r=wN.prototype;
_.r.al=function(a){var b=this;this.a=a.getAdsManager(this.A,yN(this));this.a.isCustomPlaybackUsed()&&!DN(this)?(this.g.warn("IMA plugin is disabled for this platform with single video element. Disposing."),this.m.onError(new _.P(1,9,10002)),this.dispose()):(this.h=new _.ys(this.m.getSurface(),function(c,d,e){b.a.resize(c,d,e?google.ima.ViewMode.FULLSCREEN:google.ima.ViewMode.NORMAL)}),a=this.a.getCuePoints(),this.j=new vN(a),this.m.trigger(new _.L(_.Nc,{adsTimeline:this.j})),xN(this));this.f.resolve()};
_.r.$k=function(a){CN(this,a.getError());this.f.resolve()};_.r.il=function(a){var b=this;return _.E(function(c){if(1==c.a)return b.H=!0,DN(b)?c.F(2):_.x(c,b.m.pause(),3);2!=c.a&&_.sp(b.A,{visibility:_.se});zN(b,_.uc,a);b.h.start();_.y(c)})};_.r.Qk=function(){var a=this;return _.E(function(b){if(1==b.a){if(!DN(a))return b.F(2);a.K=a.m.getPosition();return _.x(b,a.m.detach(),3)}if(2!=b.a){var c=a.m;c.a&&c.a.removeDelegate(c)}a.a.start();_.y(b)})};
_.r.Zi=function(a){a.getAd().isLinear()?zN(this,_.Bc,a):(this.a.discardAdBreak(),this.G||(this.G=!0,this.m.play()))};_.r.aj=function(a){this.B=a.getAd().getDuration();zN(this,_.Hc,a);this.m.getSurface().show(this.o)};_.r.Uk=function(a){a=a.getAdData();CN(this,a?a.adError:null);AN(this)};_.r.Yk=function(a){zN(this,_.Ec,a)};_.r.Rk=function(a){zN(this,_.wc,a)};_.r.Xi=function(a){zN(this,_.zc,a)};_.r.Vk=function(a){zN(this,_.Cc,a)};_.r.bj=function(a){zN(this,_.Jc,a)};_.r.Xk=function(a){zN(this,_.Dc,a)};
_.r.Zk=function(a){zN(this,_.Fc,a)};_.r.Wi=function(a){this.pause();zN(this,_.xc,a)};_.r.$i=function(a){zN(this,_.Gc,a);AN(this)};_.r.Yi=function(a){zN(this,_.Ac,a)};_.r.Sk=function(a){zN(this,_.yc,a);AN(this)};
_.r.jl=function(){var a=this;return _.E(function(b){switch(b.a){case 1:a.G=!0;if(!DN(a)||null===a.K){if(!a.H)return b["return"](a.m.play());BN(a);b.F(2);break}var c=a.m;c.a&&c.a.addDelegate(c);return _.x(b,_.lq(a.m),3);case 3:if(a.C){b.F(2);break}return _.x(b,a.m.seek(a.K),2);case 2:a.H=!1;a.h&&a.h.stop();if(a.C){b.F(6);break}return _.x(b,a.m.play(),6);case 6:zN(a,_.vc),_.y(b)}})};_.r.cl=function(){this.P=!0};_.r.hl=function(){this.C=!0;this.l.contentComplete()};
_.r.load=function(){var a=this,b,c,d,e,f;return _.E(function(g){if(1==g.a){b=a.m;c=a.J;try{if(typeof c.adTagUrl!==_.Wf)throw new _.P(1,9,10001,{missingKeys:"adTagUrl"});}catch(h){return b.onError(h),a.f.resolve(),g["return"](a.f)}return c.adTagUrl?_.x(g,a.M.canPlay(!1),2):(a.f.resolve(),g["return"](a.f))}if(3!=g.a)return d=g.f,_.x(g,a.M.canPlay(!0),3);e=g.f;f=new google.ima.AdsRequest;f.adTagUrl=c.adTagUrl;f.setAdWillAutoPlay(d);f.setAdWillPlayMuted(e);a.l.getSettings().setAutoPlayAdBreaks(!1);a.l.requestAds(f);
return g["return"](a.f)})};_.r.start=function(a){var b=this;return _.E(function(c){return b.a&&b.j&&!b.I?b.j.Vb()?_.x(c,FN(b),0):_.x(c,GN(b,a),0):_.x(c,a.play(),0)})};_.r.resume=function(){this.a&&this.a.resume()};_.r.pause=function(){this.a&&this.a.pause()};_.r.skip=function(){this.a&&this.a.skip()};_.r.getVolume=function(){return this.a?this.a.getVolume():1};_.r.setVolume=function(a){this.a&&this.a.setVolume(a)};
_.r.getPosition=function(){if(!this.a||null===this.B)return-1;var a=this.a.getRemainingTime();return 0>a?0:this.B-a};
_.r.dispose=function(){var a=this;return(new Promise(function(b){a.I&&a.j&&a.j.pb()&&!a.P?(a.w.one(a.a,google.ima.AdEvent.Type.ALL_ADS_COMPLETED,function(){b();a.o&&a.m.getSurface().hide(a.o)}),_.Fh(a.w,a.a,[google.ima.AdEvent.Type.LOADED,google.ima.AdEvent.Type.STARTED],function(){a.a&&a.a.discardAdBreak()})):b();a.a.discardAdBreak();a.l.contentComplete()})).then(function(){BN(a);a.w.release();a.h&&(a.h.stop(),a.h=null);a.a&&(a.a.destroy(),a.a=null)})};wN.prototype.getPosition=wN.prototype.getPosition;
wN.prototype.setVolume=wN.prototype.setVolume;wN.prototype.getVolume=wN.prototype.getVolume;wN.prototype.skip=wN.prototype.skip;wN.prototype.pause=wN.prototype.pause;wN.prototype.resume=wN.prototype.resume;_.w(HN,_.rt);_.r=HN.prototype;_.r.onPlayerCreated=function(a){if(IN())return a.onError(new _.P(1,9,1E4));this.f=_.qp(_.Yd,{"class":"clpp-ima clpp-hidden"});a.getSurface().addElementToContainer(this.f);this.h=new google.ima.AdDisplayContainer(this.f,a.getSurface().getMedia());this.a=new google.ima.AdsLoader(this.h);this.a.getSettings().setPlayerType(_.wa);this.a.getSettings().setPlayerVersion(_.ja);this.a.getSettings().setAutoPlayAdBreaks(!0)};
_.r.onPlayerWillDestroy=function(a){this.a&&(this.a.destroy(),this.a=null);this.h&&(this.h.destroy(),this.h=null);this.f&&(a.getSurface().removeElementFromContainer(this.f),this.f=null)};_.r.Zj=function(){return this.a};_.r.Xj=function(){return this.h};_.r.Rc=function(){return this.f};_.r.id=function(){return"ima"};_.H("clpp.ima.ImaPlugin",HN);HN.prototype.getAdContainer=HN.prototype.Rc;HN.prototype.getAdDisplayContainer=HN.prototype.Xj;HN.prototype.getAdsLoader=HN.prototype.Zj;HN.Id="ima";
HN.isSdkMissing=IN;JN.prototype.create=function(){return new HN};_.nq(new JN);KN.prototype.name=function(){return sN};KN.prototype.ba=function(a,b){return a.namespace()===_.Cd?!1:IN()?(this.Xc.warn("IMA SDK is not loaded."),!1):!(!b||!b.ima)};KN.prototype.create=function(a){return new wN(a)};KN.prototype.create=KN.prototype.create;KN.prototype.isSupported=KN.prototype.ba;KN.prototype.name=KN.prototype.name;_.np(new KN);};
if(typeof(module)!="undefined"&&module.exports){var x=require("./cl.core.js");_ = x._;(f.call(g,this));module.exports=g;}
else if (typeof(define)!="undefined"&&define.amd) {define(["./cl.core"], function(c){_=c._;(f.call(g,this));return g;});}
else{_=this.clpp._;(f.call(g,this));}
})();