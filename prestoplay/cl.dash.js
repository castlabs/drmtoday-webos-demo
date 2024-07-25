(function(){var g={}; var _ = _ || {}
var f=function(window){var DH="Channel parsing failure! Ignoring scheme and value",EH="ContentProtection",FH="EssentialProperty",GH="Failed to parse UTCTiming tags.",HH="Missing \x3cms:pro/\x3e node in ContentProtection element",IH="No UTCTiming elements found.",JH="SegmentBase does not contain sufficient segment information:",KH="SegmentList does not contain sufficient segment information:",LH="SegmentTemplate does not contain sufficient segment information:",MH="SegmentTimeline",NH='The last "S" element cannot have a negative repeat',
OH="duration",PH="http://dashif.org/guidelines/trickmode",QH="http://www.w3.org/1999/xlink",RH='ignoring the last "S" element.',SH='ignoring the remaining "S" elements.',TH="presentationTimeOffset",UH="schemeIdUri",VH="static",WH="timescale",XH="urn:microsoft:playready",YH="urn:mpeg:cenc:2013",ZH="urn:mpeg:dash:utc:http-head:2014",$H="urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95",aI="urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed",bI=function(a,b){a.B=Math.max(a.B,b);a.g.debug("notifyAvailabilityTimeOffset: maxAvailabilityTimeOffset\x3d"+
a.B)},cI=function(a,b){return a.reduce(function(c,d,e){return d["catch"](c.bind(null,e))}.bind(null,b),Promise.reject())},dI=function(a){return new _.xj(Promise.reject(a),function(){return Promise.resolve()})},eI=function(a){return new _.xj(Promise.all(a.map(function(b){return b.O})),function(){return Promise.all(a.map(function(b){return b.abort()}))})},fI=function(a,b,c){return Array.prototype.filter.call(a.childNodes,function(d){return d instanceof Element&&d.localName==c&&d.namespaceURI==b})},
gI=function(a,b,c){a=fI(a,b,c);return 1!=a.length?null:a[0]},hI=function(a,b,c){return a.hasAttributeNS(b,c)?a.getAttributeNS(b,c):null},iI=function(a,b,c,d){d=void 0===d?null:d;var e=null;a=a.getAttribute(b);null!=a&&(e=c(a));return null==e?d:e},jI=function(a){if(!a)return null;/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(a)&&(a+="Z");a=Date.parse(a);return isNaN(a)?null:Math.floor(a/1E3)},kI=function(a){if(!a)return null;var b=/^P(?:([0-9]*)Y)?(?:([0-9]*)M)?(?:([0-9]*)D)?(?:T(?:([0-9]*)H)?(?:([0-9]*)M)?(?:([0-9.]*)S)?)?$/.exec(a);
if(!b)return _.J("Invalid duration string:",a),null;a=31536E3*Number(b[1]||null)+2592E3*Number(b[2]||null)+86400*Number(b[3]||null)+3600*Number(b[4]||null)+60*Number(b[5]||null)+Number(b[6]||null);return isFinite(a)?a:null},lI=function(a){var b=/([0-9]+)-([0-9]+)/.exec(a);if(!b)return null;a=Number(b[1]);if(!isFinite(a))return null;b=Number(b[2]);return isFinite(b)?{start:a,end:b}:null},mI=function(a){a=Number(a);return 0===a%1?a:null},nI=function(a){a=Number(a);return 0===a%1&&0<a?a:null},oI=function(a){a=
Number(a);return 0===a%1&&0<=a?a:null},pI=function(a){var b;a=(b=a.match(/^(\d+)\/(\d+)$/))?Number(b[1])/Number(b[2]):Number(a);return isNaN(a)?null:a},qI=function(a,b){try{var c=_.R.Z(a);return _.dn(c,b)}catch(d){return null}},rI=function(a){var b=void 0===b?1024:b;if(!(a instanceof Uint8Array))return"";if(typeof b!==_.k||0>=b)b=1024;return(a.byteLength>b?a.subarray(0,b):a).toString()},sI=function(a,b,c,d,e){var f={RepresentationID:b,Number:c,Bandwidth:d,Time:e};return a.replace(/\$(RepresentationID|Number|Bandwidth|Time)?(?:%0([0-9]+)([diouxX]))?\$/g,
function(g,h,l,m){if("$$"==g)return"$";var n=f[h];if(null==n)return _.J("URL template does not have an available substitution ","for identifier",'"'+h+'":',a),g;"RepresentationID"==h&&l&&(_.J("URL template should not contain a width specifier for identifier",'"RepresentationID":',a),l=void 0);"Time"==h&&(n=Math.round(n));switch(m){case void 0:case "d":case "i":case "u":g=n.toString();break;case "o":g=n.toString(8);break;case "x":g=n.toString(16);break;case "X":g=n.toString(16).toUpperCase();break;
default:g=n.toString()}l=window.parseInt(l,10)||1;return Array(Math.max(0,l-g.length)+1).join("0")+g})},vI=function(a,b){var c=tI(a,b,WH),d=1;c&&(d=nI(c)||1);c=tI(a,b,OH);(c=nI(c||""))&&(c/=d);var e=Number(tI(a,b,TH))||0,f=e/d||0;a.Ck&&null!=a.Hd&&a.Hd!==f&&(_.J("The stream is non-compliant with the DASH spec. The value of `presentationTimeOffset` has changed during the transition from dynamic to static manifest, which is not allowed. The last value will be ignored. (Period ID: "+(a.xa.id+", Representation ID: ")+
(a.N.id+")")),e=a.Hd*d,f=a.Hd);var g=tI(a,b,"startNumber"),h=oI(g||"");if(null==g||null==h)h=1;g=tI(a,b,"endNumber");g=null!==g?oI(g||""):null;var l=uI(a,b,MH),m=null;if(l){m=d;var n=e,p=a.ga.duration||Infinity;l=_.an(l,"S");for(var q=[],t=0,v=0;v<l.length;++v){var z=l[v],D=iI(z,"t",oI),G=iI(z,"d",oI),F=iI(z,"r",mI);null!=D&&(D-=n);if(!G){_.J('"S" element must have a duration:',SH,z);break}D=null!=D?D:t;F=F||0;if(0>F)if(v+1<l.length){F=iI(l[v+1],"t",oI);if(null==F){_.J('An "S" element cannot have a negative repeat',
'if the next "S" element does not have a valid start time:',SH,z);break}else if(D>=F){_.J('An "S" element cannot have a negative repeat if its start ','time exceeds the next "S" element\'s start time:',SH,z);break}F=Math.ceil((F-D)/G)-1}else{if(Infinity==p){_.J(NH,"if the Period has an infinite duration:",RH,z);break}else if(D/m>=p){_.J(NH,"if its start time exceeds the Period's duration:",RH,z);break}F=Math.ceil((p*m-D)/G)-1}0<q.length&&D!=t&&(Math.abs((D-t)/m)>=_.Tt&&_.J("SegmentTimeline contains a large gap/overlap:",
"the content may have errors in it.",z),q[q.length-1].end=D/m);for(z=0;z<=F;++z)t=D+G,q.push({start:D/m,end:t/m,ym:D}),D=t}m=q}n=tI(a,b,"availabilityTimeOffset");p=Number(n||"");p=isNaN(p)?null:p;if(null==n||null==p)p=0;return{timescale:d,Ca:c,xc:h,bf:g,sb:f,Uf:e,timeline:m,Qe:p}},tI=function(a,b,c){return[b(a.N),b(a.ra),b(a.xa)].filter(_.ni).map(function(d){return d.getAttribute(c)}).reduce(function(d,e){return d||e})},uI=function(a,b,c){return[b(a.N),b(a.ra),b(a.xa)].filter(_.ni).map(function(d){return _.bn(d,
c)}).reduce(function(d,e){return d||e})},xI=function(a,b,c,d,e,f){for(var g=hI(a,QH,"href"),h=hI(a,QH,"actuate")||"onRequest",l=0;l<a.attributes.length;l++){var m=a.attributes[l];m.namespaceURI==QH&&(a.removeAttributeNS(m.namespaceURI,m.localName),--l)}if(5<=f)return dI(new _.P(_.Q,4,4028));if("onLoad"!=h)return dI(new _.P(_.Q,4,4027));var n=_.Bi([d],[g]);d=_.rj(n,b);d.type=1;return e.fetch(d).$d(function(p){p=qI(p.data,a.tagName);if(!p)return dI(new _.P(_.Q,4,4001,{uri:g}));for(;a.childNodes.length;)a.removeChild(a.childNodes[0]);
for(;p.childNodes.length;){var q=p.childNodes[0];p.removeChild(q);a.appendChild(q)}for(q=0;q<p.attributes.length;q++){var t=p.attributes[q].nodeName,v=p.getAttribute(t);a.setAttribute(t,v)}return wI(a,b,c,n[0],e,f+1)})},wI=function(a,b,c,d,e,f){f=void 0===f?0:f;if(hI(a,QH,"href")){var g=xI(a,b,c,d,e,f);c&&(g=g.$d(void 0,function(){return wI(a,b,c,d,e,f)}));return g}g=[];for(var h=0;h<a.childNodes.length;h++){var l=a.childNodes[h];l instanceof Element&&("urn:mpeg:dash:resolve-to-zero:2013"==hI(l,QH,
"href")?(a.removeChild(l),--h):l.tagName!=MH&&g.push(wI(l,b,c,d,e,f)))}return eI(g).$d(function(){return a})},zI=function(a,b,c,d){var e,f=(new _.mm).Y("sidx",function(h){e=yI(b,d,c,h)});a&&f.parse(a);if(e)return e;f=b+"-"+(b+a.byteLength-1);var g=c[0];a=_.Ui(a);_.uh('Invalid box type. Expected "sidx", but received:',a,"from:",g,"byte range:",f);throw new _.P(_.Q,3,3004,{url:g,Wm:f,size:a.byteLength,pn:rI(a)});},yI=function(a,b,c,d){var e=[];d.reader.skip(4);var f=_.W(d.reader);if(0==f)throw _.uh("Invalid timescale."),
new _.P(_.Q,3,3005);if(0==d.version){var g=_.W(d.reader);var h=_.W(d.reader)}else g=_.jm(d.reader),h=_.jm(d.reader);d.reader.skip(2);var l=_.hm(d.reader);a=a+d.size+h;for(h=0;h<l;h++){var m=_.W(d.reader),n=(m&2147483648)>>>31;m&=2147483647;var p=_.W(d.reader);d.reader.skip(4);if(1==n)throw _.uh("Hierarchical SIDXs are not supported."),new _.P(_.Q,3,3006);e.push(new _.Li(e.length,g/f-b,(g+p)/f-b,function(){return c},a,a+m-1,b));g+=p;a+=m}d.parser.stop();return e},AI=function(a){this.f=a;this.a=new _.dm(a,
!1)},EI=function(a){var b=BI(a);if(7<b.length)throw new _.P(_.Q,3,3002);for(var c=0,d=0;d<b.length;d++)c=256*c+b[d];b=c;c=BI(a);a:{d=_.u(CI);for(var e=d.next();!e.done;e=d.next())if(_.ij(c,new Uint8Array(e.value))){d=!0;break a}d=!1}if(d)c=a.f.byteLength-a.a.getPosition();else{if(8==c.length&&c[1]&224)throw new _.P(_.Q,3,3001);d=c[0]&(1<<8-c.length)-1;for(e=1;e<c.length;e++)d=256*d+c[e];c=d}c=a.a.getPosition()+c<=a.f.byteLength?c:a.f.byteLength-a.a.getPosition();d=new DataView(a.f.buffer,a.f.byteOffset+
a.a.getPosition(),c);a.a.skip(c);return new DI(b,d)},BI=function(a){var b=_.gm(a.a),c;for(c=1;8>=c&&!(b&1<<8-c);c++);if(8<c)throw new _.P(_.Q,3,3002);var d=new Uint8Array(c);d[0]=b;for(b=1;b<c;b++)d[b]=_.gm(a.a);return d},DI=function(a,b){this.id=a;this.a=b},FI=function(a){if(8<a.a.byteLength)throw new _.P(_.Q,3,3002);if(8==a.a.byteLength&&a.a.getUint8(0)&224)throw new _.P(_.Q,3,3001);for(var b=0,c=0;c<a.a.byteLength;c++){var d=a.a.getUint8(c);b=256*b+d}return b},GI=function(){},II=function(a,b,c,
d,e,f){function g(){return e}var h=[];a=new AI(a.a);for(var l=null,m=null;_.em(a.a);){var n=EI(a);if(187==n.id){var p=HI(n);p&&(n=c*p.zm,p=b+p.$l,null!=l&&h.push(new _.Li(h.length,l-f,n-f,g,m,p-1,f)),l=n,m=p)}}null!=l&&h.push(new _.Li(h.length,l-f,d-f,g,m,null,f));return h},HI=function(a){var b=new AI(a.a);a=EI(b);if(179!=a.id)throw _.J("Not a CueTime element."),new _.P(_.Q,3,3013);a=FI(a);b=EI(b);if(183!=b.id)throw _.J("Not a CueTrackPositions element."),new _.P(_.Q,3,3012);b=new AI(b.a);for(var c=
0;_.em(b.a);){var d=EI(b);if(241==d.id){c=FI(d);break}}return{zm:a,$l:c}},JI=function(a,b){var c=uI(a,b,"Initialization");if(!c)return null;var d=a.N.ab,e=c.getAttribute("sourceURL");e&&(d=_.Bi(a.N.ab,[e]));e=0;var f=null;if(c=iI(c,"range",lI))e=c.start,f=c.end;return new _.Dz(function(){return d},e,f)},MI=function(a,b){var c=Number(tI(a,KI,TH))||0,d=tI(a,KI,WH),e=1;d&&(e=nI(d)||1);c=c/e||0;d=JI(a,KI);e=a.N.mimeType.split("/")[1];if(a.N.contentType!=_.bg&&e!=_.Pe&&"webm"!=e)throw _.uh("SegmentBase specifies an unsupported container type.",
a.N),new _.P(_.Q,4,4006);if("webm"==e&&!d)throw _.uh(JH,"the SegmentBase uses a WebM container,","but does not contain an Initialization element.",a.N),new _.P(_.Q,4,4005);var f=uI(a,KI,"RepresentationIndex"),g=tI(a,KI,"indexRange"),h=a.N.ab;g=lI(g||"");if(f){var l=f.getAttribute("sourceURL");l&&(h=_.Bi(a.N.ab,[l]));g=iI(f,"range",lI,g)}if(!g)throw _.uh(JH,"the SegmentBase does not contain @indexRange","or a RepresentationIndex element.",a.N),new _.P(_.Q,4,4002);e=LI(a,b,d,h,g.start,g.end,e,c);return{createSegmentIndex:e.createSegmentIndex,
findSegmentPosition:e.findSegmentPosition,getSegmentReference:e.getSegmentReference,adjustSegmentDurations:e.adjustSegmentDurations,getDuration:e.getDuration,initSegmentReference:d,getLastSegmentEndTime:e.getLastSegmentEndTime,ya:c}},LI=function(a,b,c,d,e,f,g,h){var l=a.presentationTimeline,m=!a.Qc||!a.ga.lf,n=a.ga.start,p=a.ga.duration,q=b,t=null;return{createSegmentIndex:function(){var v,z,D,G,F,B;return _.E(function(I){if(1==I.a)return v=[q(d,e,f),"webm"==g?q(c.Sa(),c.wa,c.ia):null],q=null,_.x(I,
Promise.all(v),2);z=I.f;D=z[0];G=z[1]||null;F=null;g==_.Pe?F=zI(D,e,d,h):(B=new GI,F=B.parse(D,G,d,h));_.jA(l,F,n);t=new _.uA(F);m&&_.$z(t,p);return I["return"](z)})},findSegmentPosition:function(v){return t.Mc(v)},getSegmentReference:function(v){return t.get(v)},adjustSegmentDurations:function(v,z){return t.jd(v,z)},getDuration:function(){return t.getDuration()},getLastSegmentEndTime:function(){return p}}},KI=function(a){return a.Od},TI=function(a,b,c,d){var e=NI(a),f=OI(a);PI(a,f);var g=null;if(f.Ed)g=
QI(a,b,e,f);else if(f.Ca)d||(bI(a.presentationTimeline,f.Qe),_.kA(a.presentationTimeline,f.Ca),_.hA(a.presentationTimeline,a.ga.start)),g=RI(a,f);else{var h=null;b=null;a.xa.id&&a.N.id&&(b=a.xa.id+","+a.N.id,h=c[b]);d=SI(a,f);g=!a.Qc||!a.ga.lf;h?(g&&_.$z(new _.uA(d),a.ga.duration),h.oa(d),_.wA(h,_.mA(a.presentationTimeline)-a.ga.start)):(_.jA(a.presentationTimeline,d,a.ga.start),h=new _.uA(d),b&&a.Qc&&(c[b]=h));g&&_.$z(h,a.ga.duration);g={createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:h.Mc.bind(h),
getSegmentReference:h.get.bind(h),adjustSegmentDurations:h.jd.bind(h),getDuration:h.getDuration.bind(h),getLastSegmentEndTime:function(){return _.vA(h)}}}return{createSegmentIndex:g.createSegmentIndex,findSegmentPosition:g.findSegmentPosition,getSegmentReference:g.getSegmentReference,adjustSegmentDurations:g.adjustSegmentDurations,getDuration:g.getDuration,initSegmentReference:e,getLastSegmentEndTime:g.getLastSegmentEndTime,ya:f.sb}},UI=function(a){return a.cc},OI=function(a){var b=vI(a,UI),c=tI(a,
UI,"media");a=tI(a,UI,"index");return{Ca:b.Ca,timescale:b.timescale,xc:b.xc,bf:b.bf,sb:b.sb,Uf:b.Uf,timeline:b.timeline,qf:c,Ed:a,Qe:b.Qe}},PI=function(a,b){var c=b.Ed?1:0;c+=b.timeline?1:0;c+=b.Ca?1:0;if(0==c)throw _.uh("SegmentTemplate does not contain any segment information:","the SegmentTemplate must contain either an index URL template","a SegmentTimeline, or a segment duration.",a.N),new _.P(_.Q,4,4002);1!=c&&(_.J("SegmentTemplate contains multiple segment information sources:","the SegmentTemplate should only contain an index URL template,",
"a SegmentTimeline or a segment duration.",a.N),b.Ed?(_.sh("Using the index URL template by default."),b.timeline=null):_.sh("Using the SegmentTimeline by default."),b.Ca=null);if(!b.Ed&&!b.qf)throw _.uh(LH,"the SegmentTemplate's media URL template is missing.",a.N),new _.P(_.Q,4,4002);},QI=function(a,b,c,d){var e=a.N.mimeType.split("/")[1];if(e!=_.Pe&&"webm"!=e)throw _.uh("SegmentTemplate specifies an unsupported container type.",a.N),new _.P(_.Q,4,4006);if("webm"==e&&!c)throw _.uh(LH,"the SegmentTemplate uses a WebM container,",
"but does not contain an initialization URL template.",a.N),new _.P(_.Q,4,4005);var f=sI(d.Ed,a.N.id,null,a.bandwidth||null,null);f=_.Bi(a.N.ab,[f]);return LI(a,b,c,f,0,null,e,d.sb)},RI=function(a,b){var c=a.ga.duration,d=b.Ca,e=b.xc,f=b.bf,g=b.timescale,h=b.qf,l=a.bandwidth||null,m=a.N.id,n=a.N.ab;return{createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:function(p){return 0>p||c&&p>=c?null:Math.floor(p/d)},getSegmentReference:function(p){var q=p+e;if(null!==f&&q>f)return null;
var t=p*d,v=t+d;c&&(v=Math.min(v,c));return 0>v||c&&t>=c?null:new _.Li(p,t,v,function(){var z=sI(h,m,q,l,t*g);return _.Bi(n,[z])},0,null,b.sb)},adjustSegmentDurations:function(){},getDuration:function(){return c},getLastSegmentEndTime:function(){return c}}},SI=function(a,b){for(var c=[],d=0;d<b.timeline.length;d++){var e=d+b.xc;c.push(new _.Li(e,b.timeline[d].start,b.timeline[d].end,function(f,g,h,l,m,n){f=sI(f,g,m,h,n);return _.Bi(l,[f]).map(function(p){return p.toString()})}.bind(null,b.qf,a.N.id,
a.bandwidth||null,a.N.ab,e,b.timeline[d].ym+b.Uf),0,null,b.sb))}return c},NI=function(a){var b=tI(a,UI,"initialization");if(!b)return null;var c=a.N.id,d=a.bandwidth||null,e=a.N.ab;return new _.Dz(function(){var f=sI(b,c,null,d,null);return _.Bi(e,[f])},0,null)},ZI=function(a,b){var c=JI(a,VI),d=WI(a);XI(a,d);var e=null,f=null;a.xa.id&&a.N.id&&(f=a.xa.id+","+a.N.id,e=b[f]);var g=YI(a.ga.duration,d.xc,a.N.ab,d);e?(e.oa(g),_.wA(e,_.mA(a.presentationTimeline)-a.ga.start)):(_.jA(a.presentationTimeline,
g,a.ga.start),e=new _.uA(g),f&&a.Qc&&(b[f]=e));a.Qc&&a.ga.lf||_.$z(e,a.ga.duration);return{createSegmentIndex:Promise.resolve.bind(Promise),findSegmentPosition:e.Mc.bind(e),getSegmentReference:e.get.bind(e),adjustSegmentDurations:e.jd.bind(e),getDuration:e.getDuration.bind(e),initSegmentReference:c,getLastSegmentEndTime:function(){return _.vA(e)},ya:d.sb}},VI=function(a){return a.bc},WI=function(a){var b=$I(a);a=vI(a,VI);var c=a.xc;0==c&&(_.J("SegmentList@startNumber must be \x3e 0"),c=1);var d=0;
a.Ca?d=a.Ca*(c-1):a.timeline&&0<a.timeline.length&&(d=a.timeline[0].start);return{Ca:a.Ca,startTime:d,xc:c,sb:a.sb,timeline:a.timeline,sc:b}},XI=function(a,b){if(!b.Ca&&!b.timeline&&1<b.sc.length)throw _.J(KH,"the SegmentList specifies multiple segments,","but does not specify a segment duration or timeline.",a.N),new _.P(_.Q,4,4002);if(!b.Ca&&!a.ga.duration&&!b.timeline&&1==b.sc.length)throw _.J(KH,"the SegmentList specifies one segment,","but does not specify a segment duration, period duration,",
"or timeline.",a.N),new _.P(_.Q,4,4002);if(b.timeline&&0==b.timeline.length)throw _.J(KH,"the SegmentList has an empty timeline.",a.N),new _.P(_.Q,4,4002);},YI=function(a,b,c,d){var e=d.sc.length;d.timeline&&d.timeline.length!=d.sc.length&&(e=Math.min(d.timeline.length,d.sc.length),_.J("The number of items in the segment timeline and the number of","segment URLs do not match, truncating",d.sc.length,"to",e));for(var f=[],g=d.startTime,h={},l=0;l<e;h={Ke:h.Ke},l++){var m=d.sc[l];h.Ke=_.Bi(c,[m.Nk]);
var n=void 0;n=null!=d.Ca?g+d.Ca:d.timeline?d.timeline[l].end:g+a;f.push(new _.Li(l+b,g,n,function(p){return function(){return p.Ke}}(h),m.start,m.end,d.sb));g=n}return f},$I=function(a){return[a.N.bc,a.ra.bc,a.xa.bc].filter(_.ni).map(function(b){return _.an(b,"SegmentURL")}).reduce(function(b,c){return 0<b.length?b:c}).map(function(b){b.getAttribute("indexRange")&&!a.kf&&(a.kf=!0,_.J("We do not support the SegmentURL@indexRange attribute on SegmentList.  We only use the SegmentList@duration attribute or SegmentTimeline, which must be accurate."));
var c=b.getAttribute("media");b=iI(b,"mediaRange",lI,{start:0,end:null});return{Nk:c,start:b.start,end:b.end}})},aJ=function(a,b){this.g=a;this.f=b;this.a={clockSyncUri:void 0}},cJ=function(a,b,c,d){var e,f;return _.E(function(g){switch(g.a){case 1:return e=_.an(b,"UTCTiming"),_.A(g,2),_.x(g,bJ(a,c,e),4);case 4:f=g.f;d.C=f;a.g.info("Clock synchronized. The difference between server and client clock was "+(f+" ms."));_.ah(g,3);break;case 2:_.C(g),a.g.warn("Failed to synchronize clocks. This content may not play on clients with bad clocks!");
case 3:return g["return"](d)}})},bJ=function(a,b,c){c=c.map(function(e){return{scheme:e.getAttribute(UH),value:e.getAttribute(_.pg)}});var d=a.a.clockSyncUri;!c.length&&d&&(a.g.info("No UTCTiming elements found, falling back on clockSyncUri from config to synchronize clocks."),c.push({scheme:ZH,value:d}));return 0===c.length?(a.g.warn(IH),Promise.reject(Error(IH))):cI(c,function(e){var f=e.scheme;e=e.value;switch(f){case ZH:case "urn:mpeg:dash:utc:http-head:2012":return dJ(a,b,e,"HEAD");case "urn:mpeg:dash:utc:http-xsdate:2014":case "urn:mpeg:dash:utc:http-iso:2014":case "urn:mpeg:dash:utc:http-xsdate:2012":case "urn:mpeg:dash:utc:http-iso:2012":return dJ(a,
b,e,"GET");case "urn:mpeg:dash:utc:direct:2014":case "urn:mpeg:dash:utc:direct:2012":var g=Date.parse(e);return isNaN(g)?(a.g.warn("Invalid date for scheme "+f+", value: "+e),Promise.reject()):Promise.resolve(g-Date.now());case "urn:mpeg:dash:utc:http-ntp:2014":case "urn:mpeg:dash:utc:ntp:2014":case "urn:mpeg:dash:utc:sntp:2014":return a.g.warn("NTP UTCTiming scheme is not supported"),Promise.reject();default:return a.g.warn("Unrecognized scheme in UTCTiming element",f),Promise.reject()}})["catch"](function(){a.g.warn(GH);
return Promise.reject(Error(GH))})},dJ=function(a,b,c,d){var e,f,g,h;return _.E(function(l){if(1==l.a)return e=_.Bi(b,[c]),_.x(l,a.f(e,d),2);f=l.f;if("HEAD"==d){if(!f.headers||!f.headers.date)throw a.g.warn("UTC timing response is missing","expected date header"),Error("Date HTTP header missing.");g=f.headers.date}else g=_.R.Z(f.data);h=Date.parse(g);if(isNaN(h))throw a.g.warn("Unable to parse date from UTC timing response"),Error("Date value invalid.");return l["return"](h-Date.now())})},fJ=function(a,
b){return a.find(function(c){return eJ.get(c.Jb)===b})},hJ=function(a){var b=gI(a.node,XH,"pro");if(!b)return gJ.warn(HH,a),null;a=_.fj(b.textContent);a=_.pn(a);a=_.hn(a.a);return{keyId:null,Jb:aI,node:document.createElement("null"),init:[{initData:_.tz(a),initDataType:_.rd,keyId:null}]}},iJ=function(a,b){b=void 0===b?"4.0.0.0":b;var c=gI(a.node,YH,"pssh");if(!c)return _.J("Missing \x3ccenc:pssh/\x3e node in ContentProtection element",a),null;c=_.fj(c.textContent);c=_.jn(c);return c?(c=_.uz(b,c.a))?
{keyId:null,Jb:$H,node:document.createElement("null"),init:[{initData:_.tz(c),initDataType:_.rd,keyId:null}]}:null:(_.J("Unable to parse WV PSSH data. Can not create PR data!"),null)},jJ=function(a,b){var c=gI(a.node,XH,"pro");if(!c)return _.J(HH,a),null;c=_.fj(c.textContent);c=_.pn(c);return c.version!==b&&(_.th("Parsing from "+c.version+" to "+b+"."),c=_.vz(c,b))?{keyId:null,Jb:$H,node:document.createElement("null"),init:[{initData:_.tz(c),initDataType:_.rd,keyId:null}]}:null},mJ=function(a,b,c,
d){var e=kJ(a),f=null;a=[];var g=[],h=fJ(e,_.Rd),l=fJ(e,_.Pd);if(l&&d){var m=jJ(l,d);m&&(e[e.indexOf(l)]=m)}l&&!h&&(m=hJ(l))&&e.push(m);h&&!l&&(d=iJ(h,d||void 0))&&e.push(d);d=new Set(e.map(function(n){return n.keyId}));d["delete"](null);if(1<d.size)throw new _.P(_.Q,4,4010);b||(g=e.filter(function(n){return"urn:mpeg:dash:mp4protection:2011"==n.Jb?(f=n.init||f,!1):!0}),g.length&&(a=lJ(f,g,c),0==a.length&&(a=[_.Cz(_.Se,f,c)])));if(e.length&&(b||!g.length))for(a=[],b=_.u(eJ.values()),e=b.next();!e.done;e=
b.next())e=e.value,e!=_.af&&a.push(_.Cz(e,f,c));if(c=Array.from(d)[0]||null)for(b=_.u(a),e=b.next();!e.done;e=b.next())for(e=_.u(e.value.initData),g=e.next();!g.done;g=e.next())g.value.keyId=c;return{td:c,an:f,drmInfos:a,Hg:!0}},nJ=function(a,b,c,d,e){var f=mJ(a,c,d,e);if(b.Hg){a=1==b.drmInfos.length&&!b.drmInfos[0].keySystem;c=0==f.drmInfos.length;if(0==b.drmInfos.length||a&&!c)b.drmInfos=f.drmInfos;b.td=f.td||b.td;b.Hg=!1}else if(0<f.drmInfos.length&&(b.drmInfos=b.drmInfos.filter(function(g){return f.drmInfos.some(function(h){return h.keySystem==
g.keySystem})}),0==b.drmInfos.length))throw new _.P(_.Q,4,4008);return f.td||b.td},lJ=function(a,b,c){var d=[];b=_.u(b);for(var e=b.next();!e.done;e=b.next()){e=e.value;var f=eJ.get(e.Jb);if(f){var g=_.Cz(f,e.init||a,c);if(f=oJ.get(f))g.licenseServerUri=f(e);d.push(g)}}return d},kJ=function(a){var b=[];a=_.u(a);for(var c=a.next();!c.done;c=a.next())(c=pJ(c.value))&&b.push(c);return b},pJ=function(a){var b=a.getAttribute(UH),c=hI(a,YH,"default_KID"),d=fI(a,YH,"pssh").map(_.cn),e=gI(a,XH,"pro");if(!b)return _.uh("Missing required schemeIdUri attribute on",
"ContentProtection element",a),null;b=b.toLowerCase();if(c&&(c=c.replace(/-/g,"").toLowerCase(),c.includes(" ")))throw new _.P(_.Q,4,4009);var f=[];try{if(f=d.map(function(l){return{initDataType:_.rd,initData:_.fj(l),keyId:null}}),0===f.length&&e)try{var g=_.fj(e.textContent),h=_.pn(g);f.push({initDataType:_.rd,initData:_.tz(h),keyId:null})}catch(l){_.J("Unable to parse ms:pro payload",l),f=[]}}catch(l){throw new _.P(_.Q,4,4007);}return{node:a,Jb:b,keyId:c,init:0<f.length?f:null}},qJ=function(){var a=
this;this.D=this.a=null;this.j=[];this.f=null;this.C=[];this.o=1;this.G={};this.h=0;this.H=new _.bA(5);this.w=new _.uk(function(){a.Hb()});this.l=new _.Aj;this.g=new _.K("clpp.dash.DashParser");this.A=null;this.I=new aJ(this.g,function(b,c){var d=_.rj(b,a.a.attemptParameters);d.type=5;d.method=c;d=a.D.networkingEngine.fetch(d);_.Bj(a.l,d);return d.O});this.B=new Map},sJ=function(a){var b,c,d,e,f,g,h;return _.E(function(l){if(1==l.a)return b=_.rj(a.j,a.a.attemptParameters),b.type=1,c=a.D.networkingEngine,
d=Date.now(),e=c.fetch(b),_.Bj(a.l,e),_.x(l,e.O,2);if(3!=l.a){f=l.f;if(!a.D)return l["return"](0);f.uri&&!a.j.includes(f.uri)&&a.j.unshift(f.uri);return _.x(l,rJ(a,f.data,f.uri),3)}g=Date.now();h=(g-d)/1E3;_.cA(a.H,1,h);return l["return"](h)})},rJ=function(a,b,c){var d,e,f,g;return _.E(function(h){if(1==h.a){d=qI(b,"MPD");if(!d)throw new _.P(_.Q,4,4001,c);e=a.a.xlinkFailGracefully;f=wI(d,a.a.attemptParameters,e,c,a.D.networkingEngine);_.Bj(a.l,f);return _.x(h,f.O,2)}g=h.f;return h["return"](tJ(a,
g,c))})},tJ=function(a,b,c){var d,e,f,g,h,l,m,n,p,q,t,v,z,D,G,F,B,I,O,M,ba;return _.E(function(ha){if(1==ha.a){d=[c];e=_.an(b,"Location").map(_.cn).filter(_.ni);0<e.length&&(f=_.Bi(d,e),d=a.j=f);g=_.an(b,"BaseURL").map(_.cn);h=_.Bi(d,g);l=iI(b,"minBufferTime",kI,0);m=b.getAttribute("type")||VH;a.h=iI(b,"minimumUpdatePeriod",kI,-1);m===VH&&0<=a.h&&(a.g.warn("Invalid manifest - a static manifest should not contain the `minimumUpdatePeriod` attribute. The attribute will be ignored."),a.h=-1,a.w.stop());
n=iI(b,"availabilityStartTime",jI);p=iI(b,"timeShiftBufferDepth",kI);q=iI(b,"suggestedPresentationDelay",kI);t=iI(b,"maxSegmentDuration",kI);if(v=m===VH&&"dynamic"===a.A)a.g.info("MPD dynamic to static transition."),m="dynamic";z=m===VH;D="dynamic"===m;if(a.f)return G=a.f.presentationTimeline,ha.F(2);F=null!=a.a.suggestedPresentationDelay?a.a.suggestedPresentationDelay:a.a.lowLatencyMode?0:null!=q?q:3*l;G=new _.fA(n,F,m===VH,!!a.a.autoCorrectDrift,!!a.a.lowLatencyMode);return D?_.x(ha,cJ(a.I,b,h,
G),4):ha.F(2)}if(2!=ha.a&&(G=ha.f,!a.D))return ha["return"]();B={Qc:D,presentationTimeline:G,xa:null,ga:null,ra:null,N:null,bandwidth:0,kf:!1,Ck:v,Of:null,Hd:null};var qa=iI(b,"mediaPresentationDuration",kI);for(var Ta=[],Fa=0,Ca=_.an(b,"Period"),na=0;na<Ca.length;na++){var Ia=Ca[na];Fa=iI(Ia,_.Sf,kI,Fa);var tb=iI(Ia,OH,kI),Jb=null;if(na!=Ca.length-1){var Lc=iI(Ca[na+1],_.Sf,kI);null!=Lc&&(Jb=Lc-Fa)}else null!=qa&&(Jb=qa-Fa);Lc=_.Tt;Jb&&tb&&Math.abs(Jb-tb)>Lc&&a.g.warn("There is a gap/overlap between Periods",
Ia);null==Jb&&(Jb=tb);Ia=uJ(a,B,h,{start:Fa,duration:Jb,node:Ia,lf:null==Jb||na==Ca.length-1});Ta.push(Ia);tb=B.xa.id;a.C.includes(tb)||(a.C.push(tb),a.f&&(a.D.filterNewPeriod(Ia),a.f.periods.push(Ia)));if(null==Jb){na!=Ca.length-1&&a.g.warn("Skipping Period",na+1,"and any subsequent Periods:","Period",na+1,"does not have a valid start time.",Ta[na+1]);Fa=null;break}Fa+=Jb}null==a.f&&a.D.filterAllPeriods(Ta);null!=qa?(Fa!=qa&&a.g.warn("@mediaPresentationDuration does not match the total duration of ",
"all Periods."),qa={periods:Ta,duration:qa,Ag:!1}):qa={periods:Ta,duration:Fa,Ag:!0};I=qa;O=I.duration;M=I.periods;v&&(vJ(M,B),G.l=!0,a.D.onEvent(new _.L(_.Qe)));if(z||!v&&!I.Ag)G.f=O||Infinity;(ba=G.isLive())&&a.a.availabilityWindowOverride&&!isNaN(a.a.availabilityWindowOverride)&&(p=a.a.availabilityWindowOverride);null==p&&(p=Infinity);G.w=p;_.kA(G,t||1);G.isLive();a.f||(a.f={presentationTimeline:G,periods:M,offlineSessionIds:[],minBufferTime:0});a.A=m;_.y(ha)})},uJ=function(a,b,c,d){b.xa=wJ(a,
d.node,null,c);b.ga=d;b.xa.id||(a.g.info("No Period ID given for Period with start time "+d.start+",  Assigning a default"),b.xa.id="__clpp_period_"+d.start);c=_.an(d.node,"EventStream");c=_.u(c);for(var e=c.next();!e.done;e=c.next())xJ(a,d.start,d.duration,e.value);e=_.an(d.node,_.ka).map(function(p){return yJ(a,b,p)}).filter(_.ni);if(b.Qc){c=[];for(var f=_.u(e),g=f.next();!g.done;g=f.next()){g=_.u(g.value.cm);for(var h=g.next();!h.done;h=g.next())c.push(h.value)}if(c.length!=(new Set(c)).size)throw new _.P(_.Q,
4,4018);}c=e.filter(function(p){return!p.Tf});f=e.filter(function(p){return p.Tf});f=_.u(f);for(g=f.next();!g.done;g=f.next()){h=g.value;h.streams.forEach(function(p){p.trickPlay=!0});g=h.streams[0];h=h.Tf;for(var l=_.u(c),m=l.next();!m.done;m=l.next())if(m=m.value,h.includes(m.id)){m=_.u(m.streams);for(var n=m.next();!n.done;n=m.next())n.value.trickModeVideo=g}}f=zJ(e,_.sg);g=zJ(c,_.$c);if(!f.length&&!g.length)throw new _.P(_.Q,4,4004);g.length||(g=[null]);f.length||(f=[null]);e=[];g=_.u(g);for(h=
g.next();!h.done;h=g.next())for(h=h.value,l=_.u(f),m=l.next();!m.done;m=l.next())AJ(a,h,m.value,e);g=_.Og(zJ(c,_.bg)).concat(_.Og(zJ(c,_.Zf)));f=[];g=_.u(g);for(h=g.next();!h.done;h=g.next())f.push.apply(f,h.value.streams);g=zJ(c,_.ue);c=[];g=_.u(g);for(h=g.next();!h.done;h=g.next())c.push.apply(c,h.value.streams);return{startTime:d.start,textStreams:f,thumbStreams:c,variants:e}},zJ=function(a,b){return a.filter(function(c){return c.contentType==b})},AJ=function(a,b,c,d){var e;if(b||c)if(b&&c){if(_.qo(b.drmInfos,
c.drmInfos)){var f=_.po(b.drmInfos,c.drmInfos),g=_.u(b.streams);for(e=g.next();!e.done;e=g.next()){var h=e.value,l=_.u(c.streams);for(e=l.next();!e.done;e=l.next()){var m=e.value;e=(m.bandwidth||0)+(h.bandwidth||0);e={id:a.o++,language:b.language,primary:b.pf||c.pf,audio:h,video:m,bandwidth:e,drmInfos:f,allowedByApplication:!0,allowedByKeySystem:!0};d.push(e)}}}}else for(f=b||c,g=_.u(f.streams),e=g.next();!e.done;e=g.next())h=e.value,e=h.bandwidth||0,e={id:a.o++,language:f.language||_.hg,primary:f.pf,
audio:b?h:null,video:c?h:null,bandwidth:e,drmInfos:f.drmInfos,allowedByApplication:!0,allowedByKeySystem:!0},d.push(e)},yJ=function(a,b,c){b.ra=wJ(a,c,b.xa,null);var d=!1,e=_.an(c,"Role"),f=e.map(function(B){return B.getAttribute(_.pg)}).filter(_.ni),g=null,h=_.an(c,"Label").map(function(B){return B.textContent}).filter(_.ni);h&&0<h.length&&(g=h[h.length-1]);var l=void 0;(h=b.ra.contentType==_.bg)&&(l=_.Zf);e=_.u(e);for(var m=e.next();!m.done;m=e.next()){m=m.value;var n=m.getAttribute(UH);if(null==
n||"urn:mpeg:dash:role:2011"===n||"urn:mpeg:dash:role"===n)switch(m=m.getAttribute(_.pg),m){case _.He:d=!0;break;case _.md:case _.Zf:l=m;break;case "forced-subtitle":case "forced_subtitle":case _.oe:l=_.oe}}m=_.an(c,FH);e=null;m=_.u(m);for(var p=m.next();!p.done;p=m.next()){p=p.value;n=p.getAttribute(UH);p=p.getAttribute(_.pg);if(n!==PH&&!BJ.includes(n)||void 0===p)return null;n===PH&&(0===p.length&&(e=null),e=p.split(" "))}m=_.an(c,"Accessibility");var q=new Map;n=_.u(m);for(p=n.next();!p.done;p=
n.next()){var t=p.value;p=t.getAttribute(UH);if("urn:scte:dash:cc:cea-608:2015"==p||"urn:scte:dash:cc:cea-708:2015"==p)if(p=1,t=t.getAttribute(_.pg),null!=t){t=_.u(t.split(";"));for(var v=t.next();!v.done;v=t.next()){var z=v.value,D=v=void 0;z.includes("\x3d")?(z=z.split("\x3d"),v=z[0].startsWith("CC")?z[0]:"CC"+z[0],D=z[1].split(",")[0].split(":").pop()):(v="CC"+p,p+=2,D=z);q.set(v,_.Ni(D))}}else q.set("CC1",_.hg)}n=_.an(c,EH);var G=mJ(n,a.a.ignoreDrmInfo,b.xa.id,a.a.playreadyVersion||null),F=c.getAttribute("lang")||
_.hg;n=_.Ni(F);null==g&&(g=c.getAttribute("label"));p=_.an(c,_.Rb);c=p.map(function(B){return CJ(a,b,G,l,F,g,d,f,q,B)}).filter(function(B){return!!B});if(0==c.length){if(h)return null;throw new _.P(_.Q,4,4003);}if(!b.ra.contentType||b.ra.contentType==_.Rc)for(b.ra.contentType=DJ(c[0].mimeType,c[0].codecs),h=_.u(c),t=h.next();!t.done;t=h.next())t.value.type=b.ra.contentType;h=_.u(c);for(t=h.next();!t.done;t=h.next())for(t=t.value,v=_.u(G.drmInfos),z=v.next();!z.done;z=v.next())z=z.value,t.keyId&&!z.keyIds.includes(t.keyId)&&
z.keyIds.push(t.keyId);c=EJ(c,b.ra.contentType,m);h=p.map(function(B){return B.getAttribute("id")}).filter(_.ni);return{id:b.ra.id||"__fake__"+a.o++,contentType:b.ra.contentType,language:n,originalLanguage:F,pf:d,streams:c,drmInfos:G.drmInfos,Tf:e,cm:h}},EJ=function(a,b,c){var d=b===_.Zf?_.bg:b;b=c.map(function(f){return{scheme:f.getAttribute(UH)||"",id:f.getAttribute("id")||void 0,value:f.getAttribute(_.pg)||"",protocol:"DASH",type:d}});c=_.u(a);for(var e=c.next();!e.done;e=c.next())e.value.accessibility=
b;return a},CJ=function(a,b,c,d,e,f,g,h,l,m){var n=_.Ni(e);b.N=wJ(a,m,b.ra,null);if(!FJ(a,b.N))return a.g.warn("Skipping Representation",b.N),null;b.Of=b.xa.id+" "+b.N.id;b.Hd=a.B.get(b.Of);b.bandwidth=iI(m,"bandwidth",nI)||0;var p=b.N.contentType,q=p==_.bg||p==_.Rc,t=p==_.ue;try{if(p=function(F,B,I){return GJ(a,F,B,I)},b.N.Od)var v=MI(b,p);else if(b.N.bc)v=ZI(b,a.G);else if(b.N.cc)v=TI(b,p,a.G,!!a.f);else{var z=b.N.ab,D=b.ga.duration||0;v={createSegmentIndex:function(){return Promise.resolve()},
findSegmentPosition:function(F){return 0<=F&&F<D?1:null},getSegmentReference:function(F){return 1!=F?null:new _.Li(1,0,D,function(){return z},0,null,0)},adjustSegmentDurations:function(){},getLastSegmentEndTime:function(){return D},getDuration:function(){return D},initSegmentReference:null,ya:0}}}catch(F){if(q&&4002==F.code)return null;throw F;}a.B.set(b.Of,v.ya);q=_.an(m,EH);q=nJ(q,c,a.a.ignoreDrmInfo,b.xa.id,a.a.playreadyVersion||null);p=!1;_.an(m,"SupplementalProperty").some(function(F){return"tag:dolby.com,2018:dash:EC3_ExtensionType:2018"==
F.getAttribute(UH)&&"JOC"==F.getAttribute(_.pg)})&&(b.N.mimeType="audio/eac3-joc",p=!0);var G=void 0;t&&(t=(m=_.bn(m,FH))&&m.getAttribute(UH),HJ.includes(t||"")&&(m=(m=m.getAttribute(_.pg))&&m.split("x").map(function(F){return parseInt(F,10)}))&&2==m.length&&(v.horizontalTiles=m[0],v.verticalTiles=m[1],b.ra.cc&&(m=v.horizontalTiles*v.verticalTiles,G=iI(b.ra.cc,OH,oI)||0,t=iI(b.ra.cc,WH,oI)||1,G=(G/=t)?G/m:void 0)));return{id:a.o++,originalId:b.N.id,createSegmentIndex:v.createSegmentIndex,findSegmentPosition:v.findSegmentPosition,
getSegmentReference:v.getSegmentReference,initSegmentReference:v.initSegmentReference,adjustSegmentDurations:v.adjustSegmentDurations,getLastSegmentEndTime:v.getLastSegmentEndTime,getDuration:v.getDuration,segmentLookupStrategy:_.ez,mimeType:b.N.mimeType,codecs:b.N.codecs,frameRate:b.N.frameRate,bandwidth:b.bandwidth,width:b.N.width,height:b.N.height,kind:d,encrypted:0<c.drmInfos.length,keyId:q,language:n,originalLanguage:e,label:f,type:b.ra.contentType,primary:g,trickModeVideo:null,emsgSchemeIdUris:b.N.emsgSchemeIdUris,
roles:h,channelsCount:b.N.sf,spatialAudio:p,closedCaptions:l,horizontalTiles:v.horizontalTiles,verticalTiles:v.verticalTiles,durationPerTile:G}},IJ=function(a,b){0>a.h||a.w.aa(Math.max(3,a.h-b,_.dA(a.H)))},wJ=function(a,b,c,d){c=c||{contentType:"",mimeType:"",codecs:"",emsgSchemeIdUris:[],frameRate:void 0,sf:null};d=d||c.ab;var e=_.an(b,"BaseURL").map(_.cn),f=b.getAttribute("contentType")||c.contentType,g=b.getAttribute(_.Me)||c.mimeType,h=b.getAttribute(_.Jd)||c.codecs,l=iI(b,"frameRate",pI)||c.frameRate,
m=_.an(b,"InbandEventStream"),n=c.emsgSchemeIdUris.slice();m=_.u(m);for(var p=m.next();!p.done;p=m.next())p=p.value.getAttribute(UH),n.includes(p)||n.push(p);m=_.an(b,"AudioChannelConfiguration");a=JJ(a,m)||c.sf;f||(f=DJ(g,h));return{ab:_.Bi(d,e),Od:_.bn(b,"SegmentBase")||c.Od,bc:_.bn(b,"SegmentList")||c.bc,cc:_.bn(b,"SegmentTemplate")||c.cc,width:iI(b,_.Hg,oI)||c.width,height:iI(b,_.re,oI)||c.height,contentType:f,mimeType:g,codecs:h,frameRate:l,emsgSchemeIdUris:n,id:b.getAttribute("id"),sf:a}},JJ=
function(a,b){for(var c=_.u(b),d=c.next();!d.done;d=c.next()){var e=d.value;if(d=e.getAttribute(UH))if(e=e.getAttribute(_.pg))switch(d){case "urn:mpeg:dash:outputChannelPositionList:2012":return e.trim().split(/ +/).length;case "urn:mpeg:dash:23003:3:audio_channel_configuration:2011":case "urn:dts:dash:audio_channel_configuration:2012":var f=parseInt(e,10);if(!f){a.g.warn(DH,d,e);continue}return f;case "tag:dolby.com,2014:dash:audio_channel_configuration:2011":case "urn:dolby:dash:audio_channel_configuration:2011":f=
parseInt(e,16);if(!f){a.g.warn(DH,d,e);continue}for(c=0;f;)f&1&&++c,f>>=1;return c;default:a.g.warn("Unrecognized audio channel scheme:",d,e)}}return null},FJ=function(a,b){var c=b.Od?1:0;c+=b.bc?1:0;c+=b.cc?1:0;if(0==c){if(b.contentType==_.bg||b.contentType==_.Rc)return!0;a.g.warn("Representation does not contain a segment information source:","the Representation must contain one of SegmentBase, SegmentList,",'SegmentTemplate, or explicitly indicate that it is "text".',b);return!1}1!=c&&(a.g.warn("Representation contains multiple segment information sources:",
"the Representation should only contain one of SegmentBase,","SegmentList, or SegmentTemplate.",b),b.Od?(a.g.info("Using SegmentBase by default."),b.bc=null):a.g.info("Using SegmentList by default."),b.cc=null);return!0},xJ=function(a,b,c,d){var e=d.getAttribute(UH)||"",f=d.getAttribute(_.pg)||"",g=iI(d,WH,oI)||1,h={};d=_.u(_.an(d,"Event"));for(var l=d.next();!l.done;h={Dc:h.Dc},l=d.next()){l=l.value;var m=iI(l,"presentationTime",oI)||0,n=iI(l,OH,oI)||0;m=m/g+b;n=m+n/g;null!=c&&(m=Math.min(m,b+c),
n=Math.min(n,b+c));var p=_.Mh;e.startsWith(_.kg)?p=_.Oh:"urn:mpeg:dash:event:callback:2015"===e&&(p=_.Re);h.Dc={schemeIdUri:e,value:f,startTime:m,endTime:n,id:l.getAttribute("id")||"",type:p,eventElement:l};h.Dc.type===_.Re&&(h.Dc.we=function(q){return function(){var t=q.Dc;t.eventElement&&(t=t.eventElement.getAttribute("messageData")||"")&&t.startsWith("http")&&(t=_.rj(t),t.type=_.qj,a.D.networkingEngine.fetch(t))}}(h));a.D.onTimelineCueAdded(h.Dc)}},GJ=function(a,b,c,d){var e,f,g,h;return _.E(function(l){if(1==
l.a)return e=_.eA(b,c,d,a.a.attemptParameters),e.type=2,f=a.D.networkingEngine,g=f.fetch(e),_.Bj(a.l,g),_.x(l,g.O,2);h=l.f;return l["return"](h.data)})},DJ=function(a,b){return _.IA(_.rk(a,b))?_.bg:a.split("/")[0]},KJ=function(a){var b=new Set;a.forEach(function(c){c.variants.forEach(function(d){d.audio&&b.add(d.audio);d.video&&b.add(d.video)})});return Array.from(b)},vJ=function(a,b){var c=KJ(a).filter(function(d){return d.getLastSegmentEndTime}).map(function(d){return d.getLastSegmentEndTime()});
0<c.length&&(c=Math.min.apply(Math,_.Og(c)),_.iA(b.presentationTimeline,c+b.ga.start))},LJ=function(){},HJ=["http://dashif.org/thumbnail_tile","http://dashif.org/guidelines/thumbnail_tile"],BJ=["urn:mpeg:mpegB:cicp:ColourPrimaries","urn:mpeg:mpegB:cicp:MatrixCoefficients","urn:mpeg:mpegB:cicp:TransferCharacteristics"];var CI=[[255],[127,255],[63,255,255],[31,255,255,255],[15,255,255,255,255],[7,255,255,255,255,255],[3,255,255,255,255,255,255],[1,255,255,255,255,255,255,255]];GI.prototype.parse=function(a,b,c,d){b=new AI(new DataView(b));if(440786851!=EI(b).id)throw _.uh("Not an EBML element."),new _.P(_.Q,3,3008);var e=EI(b);if(408125543!=e.id)throw _.uh("Not a Segment element."),new _.P(_.Q,3,3009);b=e.a.byteOffset;e=new AI(e.a);for(var f=null;_.em(e.a);){var g=EI(e);if(357149030==g.id){f=g;break}}if(!f)throw _.uh("Not an Info element."),new _.P(_.Q,3,3010);f=new AI(f.a);g=1E6;for(e=null;_.em(f.a);){var h=EI(f);if(2807729==h.id)g=FI(h);else if(17545==h.id)if(4==h.a.byteLength)e=
h.a.getFloat32(0);else if(8==h.a.byteLength)e=h.a.getFloat64(0);else throw new _.P(_.Q,3,3003);}if(null==e)throw new _.P(_.Q,3,3011);f=g/1E9;e*=f;a=EI(new AI(new DataView(a)));if(475249515!=a.id)throw _.uh("Not a Cues element."),new _.P(_.Q,3,3007);return II(a,b,f,e,c,d)};var eJ=(new Map).set("urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b",_.af).set(aI,_.Rd).set($H,_.Pd).set("urn:uuid:79f0049a-4098-8642-ab92-e65be0885f95",_.Pd).set("urn:uuid:94ce86fb-07ff-4f43-adb8-93d2fa968ca2",_.Md).set("urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb",_.Ld),oJ=(new Map).set(_.Rd,function(a){return(a=gI(a.node,"urn:microsoft","laurl"))?a.getAttribute("licenseUrl")||"":""}).set(_.Pd,function(a){a=gI(a.node,XH,"pro");if(!a)return"";a=_.fj(a.textContent);return _.pn(a).h||""}),gJ=new _.K("clpp.dash.ContentProtection");_.r=qJ.prototype;_.r.configure=function(a){this.a=a;this.I.a={clockSyncUri:a.clockSyncUri}};_.r.start=function(a,b){var c=this,d;return _.E(function(e){if(1==e.a)return c.j=[a],c.D=b,_.x(e,sJ(c),2);d=e.f;c.D&&IJ(c,d);if(!c.D)throw new _.P(_.Q,7,7001);return e["return"](c.f)})};_.r.stop=function(){this.a=this.D=null;this.j=[];this.f=null;this.C=[];this.G={};this.A=null;this.h=-1;this.w.stop();this.B.clear();return this.l.destroy()};
_.r.update=function(){var a=this;sJ(this)["catch"](function(b){if(a.D&&b)a.D.onError(b)})};_.r.onExpirationUpdated=function(){};_.r.setCurrentVariant=function(){};_.r.Hb=function(){var a=this,b,c,d;return _.E(function(e){switch(e.a){case 1:return a.g.debug(_.Yy),b=0,_.A(e,2),_.x(e,sJ(a),4);case 4:b=e.f;_.ah(e,3);break;case 2:if(c=_.C(e),a.D&&c.a&&(a.D.onError(c),d=c,d.severity===_.Q))return e["return"]();case 3:if(!a.D)return e["return"]();IJ(a,b);_.y(e)}})};_.w(LJ,_.Ir);LJ.prototype.f=function(){_.Fs.mpd=qJ;_.Ds[_.Tc]=qJ};LJ.prototype.a=function(){_.CA("mpd");_.DA(_.Tc)};LJ.prototype.id=function(){return"dash"};_.H("clpp.dash.DashComponent",LJ);};
if(typeof(module)!="undefined"&&module.exports){var x=require("./cl.core.js");_ = x._;(f.call(g,this));module.exports=g;}
else if (typeof(define)!="undefined"&&define.amd) {define(["./cl.core"], function(c){_=c._;(f.call(g,this));return g;});}
else{_=this.clpp._;(f.call(g,this));}
})();