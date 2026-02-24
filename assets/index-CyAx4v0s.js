(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function ET(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Qd={exports:{}},Cl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vv;function n1(){if(vv)return Cl;vv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var g in l)g!=="key"&&(u[g]=l[g])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:u}}return Cl.Fragment=t,Cl.jsx=n,Cl.jsxs=n,Cl}var Ev;function i1(){return Ev||(Ev=1,Qd.exports=n1()),Qd.exports}var H=i1(),Xd={exports:{}},yt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tv;function r1(){if(Tv)return yt;Tv=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),w=Symbol.iterator;function j(V){return V===null||typeof V!="object"?null:(V=w&&V[w]||V["@@iterator"],typeof V=="function"?V:null)}var J={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Z=Object.assign,W={};function mt(V,X,nt){this.props=V,this.context=X,this.refs=W,this.updater=nt||J}mt.prototype.isReactComponent={},mt.prototype.setState=function(V,X){if(typeof V!="object"&&typeof V!="function"&&V!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,V,X,"setState")},mt.prototype.forceUpdate=function(V){this.updater.enqueueForceUpdate(this,V,"forceUpdate")};function vt(){}vt.prototype=mt.prototype;function Et(V,X,nt){this.props=V,this.context=X,this.refs=W,this.updater=nt||J}var Jt=Et.prototype=new vt;Jt.constructor=Et,Z(Jt,mt.prototype),Jt.isPureReactComponent=!0;var Zt=Array.isArray;function zt(){}var N={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function C(V,X,nt){var st=nt.ref;return{$$typeof:r,type:V,key:X,ref:st!==void 0?st:null,props:nt}}function M(V,X){return C(V.type,X,V.props)}function O(V){return typeof V=="object"&&V!==null&&V.$$typeof===r}function k(V){var X={"=":"=0",":":"=2"};return"$"+V.replace(/[=:]/g,function(nt){return X[nt]})}var R=/\/+/g;function re(V,X){return typeof V=="object"&&V!==null&&V.key!=null?k(""+V.key):X.toString(36)}function De(V){switch(V.status){case"fulfilled":return V.value;case"rejected":throw V.reason;default:switch(typeof V.status=="string"?V.then(zt,zt):(V.status="pending",V.then(function(X){V.status==="pending"&&(V.status="fulfilled",V.value=X)},function(X){V.status==="pending"&&(V.status="rejected",V.reason=X)})),V.status){case"fulfilled":return V.value;case"rejected":throw V.reason}}throw V}function G(V,X,nt,st,gt){var St=typeof V;(St==="undefined"||St==="boolean")&&(V=null);var Mt=!1;if(V===null)Mt=!0;else switch(St){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(V.$$typeof){case r:case t:Mt=!0;break;case T:return Mt=V._init,G(Mt(V._payload),X,nt,st,gt)}}if(Mt)return gt=gt(V),Mt=st===""?"."+re(V,0):st,Zt(gt)?(nt="",Mt!=null&&(nt=Mt.replace(R,"$&/")+"/"),G(gt,X,nt,"",function(ms){return ms})):gt!=null&&(O(gt)&&(gt=M(gt,nt+(gt.key==null||V&&V.key===gt.key?"":(""+gt.key).replace(R,"$&/")+"/")+Mt)),X.push(gt)),1;Mt=0;var Oe=st===""?".":st+":";if(Zt(V))for(var se=0;se<V.length;se++)st=V[se],St=Oe+re(st,se),Mt+=G(st,X,nt,St,gt);else if(se=j(V),typeof se=="function")for(V=se.call(V),se=0;!(st=V.next()).done;)st=st.value,St=Oe+re(st,se++),Mt+=G(st,X,nt,St,gt);else if(St==="object"){if(typeof V.then=="function")return G(De(V),X,nt,st,gt);throw X=String(V),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(V).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function et(V,X,nt){if(V==null)return V;var st=[],gt=0;return G(V,st,"","",function(St){return X.call(nt,St,gt++)}),st}function ct(V){if(V._status===-1){var X=V._result;X=X(),X.then(function(nt){(V._status===0||V._status===-1)&&(V._status=1,V._result=nt)},function(nt){(V._status===0||V._status===-1)&&(V._status=2,V._result=nt)}),V._status===-1&&(V._status=0,V._result=X)}if(V._status===1)return V._result.default;throw V._result}var kt=typeof reportError=="function"?reportError:function(V){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof V=="object"&&V!==null&&typeof V.message=="string"?String(V.message):String(V),error:V});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",V);return}console.error(V)},Ht={map:et,forEach:function(V,X,nt){et(V,function(){X.apply(this,arguments)},nt)},count:function(V){var X=0;return et(V,function(){X++}),X},toArray:function(V){return et(V,function(X){return X})||[]},only:function(V){if(!O(V))throw Error("React.Children.only expected to receive a single React element child.");return V}};return yt.Activity=S,yt.Children=Ht,yt.Component=mt,yt.Fragment=n,yt.Profiler=l,yt.PureComponent=Et,yt.StrictMode=s,yt.Suspense=y,yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,yt.__COMPILER_RUNTIME={__proto__:null,c:function(V){return N.H.useMemoCache(V)}},yt.cache=function(V){return function(){return V.apply(null,arguments)}},yt.cacheSignal=function(){return null},yt.cloneElement=function(V,X,nt){if(V==null)throw Error("The argument must be a React element, but you passed "+V+".");var st=Z({},V.props),gt=V.key;if(X!=null)for(St in X.key!==void 0&&(gt=""+X.key),X)!b.call(X,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&X.ref===void 0||(st[St]=X[St]);var St=arguments.length-2;if(St===1)st.children=nt;else if(1<St){for(var Mt=Array(St),Oe=0;Oe<St;Oe++)Mt[Oe]=arguments[Oe+2];st.children=Mt}return C(V.type,gt,st)},yt.createContext=function(V){return V={$$typeof:f,_currentValue:V,_currentValue2:V,_threadCount:0,Provider:null,Consumer:null},V.Provider=V,V.Consumer={$$typeof:u,_context:V},V},yt.createElement=function(V,X,nt){var st,gt={},St=null;if(X!=null)for(st in X.key!==void 0&&(St=""+X.key),X)b.call(X,st)&&st!=="key"&&st!=="__self"&&st!=="__source"&&(gt[st]=X[st]);var Mt=arguments.length-2;if(Mt===1)gt.children=nt;else if(1<Mt){for(var Oe=Array(Mt),se=0;se<Mt;se++)Oe[se]=arguments[se+2];gt.children=Oe}if(V&&V.defaultProps)for(st in Mt=V.defaultProps,Mt)gt[st]===void 0&&(gt[st]=Mt[st]);return C(V,St,gt)},yt.createRef=function(){return{current:null}},yt.forwardRef=function(V){return{$$typeof:g,render:V}},yt.isValidElement=O,yt.lazy=function(V){return{$$typeof:T,_payload:{_status:-1,_result:V},_init:ct}},yt.memo=function(V,X){return{$$typeof:p,type:V,compare:X===void 0?null:X}},yt.startTransition=function(V){var X=N.T,nt={};N.T=nt;try{var st=V(),gt=N.S;gt!==null&&gt(nt,st),typeof st=="object"&&st!==null&&typeof st.then=="function"&&st.then(zt,kt)}catch(St){kt(St)}finally{X!==null&&nt.types!==null&&(X.types=nt.types),N.T=X}},yt.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},yt.use=function(V){return N.H.use(V)},yt.useActionState=function(V,X,nt){return N.H.useActionState(V,X,nt)},yt.useCallback=function(V,X){return N.H.useCallback(V,X)},yt.useContext=function(V){return N.H.useContext(V)},yt.useDebugValue=function(){},yt.useDeferredValue=function(V,X){return N.H.useDeferredValue(V,X)},yt.useEffect=function(V,X){return N.H.useEffect(V,X)},yt.useEffectEvent=function(V){return N.H.useEffectEvent(V)},yt.useId=function(){return N.H.useId()},yt.useImperativeHandle=function(V,X,nt){return N.H.useImperativeHandle(V,X,nt)},yt.useInsertionEffect=function(V,X){return N.H.useInsertionEffect(V,X)},yt.useLayoutEffect=function(V,X){return N.H.useLayoutEffect(V,X)},yt.useMemo=function(V,X){return N.H.useMemo(V,X)},yt.useOptimistic=function(V,X){return N.H.useOptimistic(V,X)},yt.useReducer=function(V,X,nt){return N.H.useReducer(V,X,nt)},yt.useRef=function(V){return N.H.useRef(V)},yt.useState=function(V){return N.H.useState(V)},yt.useSyncExternalStore=function(V,X,nt){return N.H.useSyncExternalStore(V,X,nt)},yt.useTransition=function(){return N.H.useTransition()},yt.version="19.2.4",yt}var Av;function $m(){return Av||(Av=1,Xd.exports=r1()),Xd.exports}var Ut=$m();const s1=ET(Ut);var $d={exports:{}},Nl={},Jd={exports:{}},Zd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sv;function a1(){return Sv||(Sv=1,(function(r){function t(G,et){var ct=G.length;G.push(et);t:for(;0<ct;){var kt=ct-1>>>1,Ht=G[kt];if(0<l(Ht,et))G[kt]=et,G[ct]=Ht,ct=kt;else break t}}function n(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var et=G[0],ct=G.pop();if(ct!==et){G[0]=ct;t:for(var kt=0,Ht=G.length,V=Ht>>>1;kt<V;){var X=2*(kt+1)-1,nt=G[X],st=X+1,gt=G[st];if(0>l(nt,ct))st<Ht&&0>l(gt,nt)?(G[kt]=gt,G[st]=ct,kt=st):(G[kt]=nt,G[X]=ct,kt=X);else if(st<Ht&&0>l(gt,ct))G[kt]=gt,G[st]=ct,kt=st;else break t}}return et}function l(G,et){var ct=G.sortIndex-et.sortIndex;return ct!==0?ct:G.id-et.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,g=f.now();r.unstable_now=function(){return f.now()-g}}var y=[],p=[],T=1,S=null,w=3,j=!1,J=!1,Z=!1,W=!1,mt=typeof setTimeout=="function"?setTimeout:null,vt=typeof clearTimeout=="function"?clearTimeout:null,Et=typeof setImmediate<"u"?setImmediate:null;function Jt(G){for(var et=n(p);et!==null;){if(et.callback===null)s(p);else if(et.startTime<=G)s(p),et.sortIndex=et.expirationTime,t(y,et);else break;et=n(p)}}function Zt(G){if(Z=!1,Jt(G),!J)if(n(y)!==null)J=!0,zt||(zt=!0,k());else{var et=n(p);et!==null&&De(Zt,et.startTime-G)}}var zt=!1,N=-1,b=5,C=-1;function M(){return W?!0:!(r.unstable_now()-C<b)}function O(){if(W=!1,zt){var G=r.unstable_now();C=G;var et=!0;try{t:{J=!1,Z&&(Z=!1,vt(N),N=-1),j=!0;var ct=w;try{e:{for(Jt(G),S=n(y);S!==null&&!(S.expirationTime>G&&M());){var kt=S.callback;if(typeof kt=="function"){S.callback=null,w=S.priorityLevel;var Ht=kt(S.expirationTime<=G);if(G=r.unstable_now(),typeof Ht=="function"){S.callback=Ht,Jt(G),et=!0;break e}S===n(y)&&s(y),Jt(G)}else s(y);S=n(y)}if(S!==null)et=!0;else{var V=n(p);V!==null&&De(Zt,V.startTime-G),et=!1}}break t}finally{S=null,w=ct,j=!1}et=void 0}}finally{et?k():zt=!1}}}var k;if(typeof Et=="function")k=function(){Et(O)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,re=R.port2;R.port1.onmessage=O,k=function(){re.postMessage(null)}}else k=function(){mt(O,0)};function De(G,et){N=mt(function(){G(r.unstable_now())},et)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return w},r.unstable_next=function(G){switch(w){case 1:case 2:case 3:var et=3;break;default:et=w}var ct=w;w=et;try{return G()}finally{w=ct}},r.unstable_requestPaint=function(){W=!0},r.unstable_runWithPriority=function(G,et){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ct=w;w=G;try{return et()}finally{w=ct}},r.unstable_scheduleCallback=function(G,et,ct){var kt=r.unstable_now();switch(typeof ct=="object"&&ct!==null?(ct=ct.delay,ct=typeof ct=="number"&&0<ct?kt+ct:kt):ct=kt,G){case 1:var Ht=-1;break;case 2:Ht=250;break;case 5:Ht=1073741823;break;case 4:Ht=1e4;break;default:Ht=5e3}return Ht=ct+Ht,G={id:T++,callback:et,priorityLevel:G,startTime:ct,expirationTime:Ht,sortIndex:-1},ct>kt?(G.sortIndex=ct,t(p,G),n(y)===null&&G===n(p)&&(Z?(vt(N),N=-1):Z=!0,De(Zt,ct-kt))):(G.sortIndex=Ht,t(y,G),J||j||(J=!0,zt||(zt=!0,k()))),G},r.unstable_shouldYield=M,r.unstable_wrapCallback=function(G){var et=w;return function(){var ct=w;w=et;try{return G.apply(this,arguments)}finally{w=ct}}}})(Zd)),Zd}var bv;function o1(){return bv||(bv=1,Jd.exports=a1()),Jd.exports}var Wd={exports:{}},Qe={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv;function l1(){if(wv)return Qe;wv=1;var r=$m();function t(y){var p="https://react.dev/errors/"+y;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)p+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+y+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(y,p,T){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:y,containerInfo:p,implementation:T}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,p){if(y==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Qe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Qe.createPortal=function(y,p){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(y,p,null,T)},Qe.flushSync=function(y){var p=f.T,T=s.p;try{if(f.T=null,s.p=2,y)return y()}finally{f.T=p,s.p=T,s.d.f()}},Qe.preconnect=function(y,p){typeof y=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(y,p))},Qe.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},Qe.preinit=function(y,p){if(typeof y=="string"&&p&&typeof p.as=="string"){var T=p.as,S=g(T,p.crossOrigin),w=typeof p.integrity=="string"?p.integrity:void 0,j=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;T==="style"?s.d.S(y,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:w,fetchPriority:j}):T==="script"&&s.d.X(y,{crossOrigin:S,integrity:w,fetchPriority:j,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Qe.preinitModule=function(y,p){if(typeof y=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var T=g(p.as,p.crossOrigin);s.d.M(y,{crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(y)},Qe.preload=function(y,p){if(typeof y=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var T=p.as,S=g(T,p.crossOrigin);s.d.L(y,T,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Qe.preloadModule=function(y,p){if(typeof y=="string")if(p){var T=g(p.as,p.crossOrigin);s.d.m(y,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:T,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(y)},Qe.requestFormReset=function(y){s.d.r(y)},Qe.unstable_batchedUpdates=function(y,p){return y(p)},Qe.useFormState=function(y,p,T){return f.H.useFormState(y,p,T)},Qe.useFormStatus=function(){return f.H.useHostTransitionStatus()},Qe.version="19.2.4",Qe}var Rv;function u1(){if(Rv)return Wd.exports;Rv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Wd.exports=l1(),Wd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function c1(){if(Iv)return Nl;Iv=1;var r=o1(),t=$m(),n=u1();function s(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function g(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function y(e){if(u(e)!==e)throw Error(s(188))}function p(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(s(188));return i!==e?null:e}for(var a=e,o=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(o=h.return,o!==null){a=o;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return y(h),e;if(d===o)return y(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=h,o=d;else{for(var _=!1,E=h.child;E;){if(E===a){_=!0,a=h,o=d;break}if(E===o){_=!0,o=h,a=d;break}E=E.sibling}if(!_){for(E=d.child;E;){if(E===a){_=!0,a=d,o=h;break}if(E===o){_=!0,o=d,a=h;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:i}function T(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=T(e),i!==null)return i;e=e.sibling}return null}var S=Object.assign,w=Symbol.for("react.element"),j=Symbol.for("react.transitional.element"),J=Symbol.for("react.portal"),Z=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),mt=Symbol.for("react.profiler"),vt=Symbol.for("react.consumer"),Et=Symbol.for("react.context"),Jt=Symbol.for("react.forward_ref"),Zt=Symbol.for("react.suspense"),zt=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),M=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=O&&e[O]||e["@@iterator"],typeof e=="function"?e:null)}var R=Symbol.for("react.client.reference");function re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===R?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Z:return"Fragment";case mt:return"Profiler";case W:return"StrictMode";case Zt:return"Suspense";case zt:return"SuspenseList";case C:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case J:return"Portal";case Et:return e.displayName||"Context";case vt:return(e._context.displayName||"Context")+".Consumer";case Jt:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case N:return i=e.displayName||null,i!==null?i:re(e.type)||"Memo";case b:i=e._payload,e=e._init;try{return re(e(i))}catch{}}return null}var De=Array.isArray,G=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},kt=[],Ht=-1;function V(e){return{current:e}}function X(e){0>Ht||(e.current=kt[Ht],kt[Ht]=null,Ht--)}function nt(e,i){Ht++,kt[Ht]=e.current,e.current=i}var st=V(null),gt=V(null),St=V(null),Mt=V(null);function Oe(e,i){switch(nt(St,i),nt(gt,e),nt(st,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?q_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=q_(i),e=H_(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}X(st),nt(st,e)}function se(){X(st),X(gt),X(St)}function ms(e){e.memoizedState!==null&&nt(Mt,e);var i=st.current,a=H_(i,e.type);i!==a&&(nt(gt,e),nt(st,a))}function ua(e){gt.current===e&&(X(st),X(gt)),Mt.current===e&&(X(Mt),bl._currentValue=ct)}var ca,ha;function ai(e){if(ca===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);ca=i&&i[1]||"",ha=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ca+e+ha}var bo=!1;function gs(e,i){if(!e||bo)return"";bo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(q){var z=q}Reflect.construct(e,[],Q)}else{try{Q.call()}catch(q){z=q}e.call(Q.prototype)}}else{try{throw Error()}catch(q){z=q}(Q=e())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(q){if(q&&z&&typeof q.stack=="string")return[q.stack,z.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),_=d[0],E=d[1];if(_&&E){var I=_.split(`
`),U=E.split(`
`);for(h=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;h<U.length&&!U[h].includes("DetermineComponentFrameRoot");)h++;if(o===I.length||h===U.length)for(o=I.length-1,h=U.length-1;1<=o&&0<=h&&I[o]!==U[h];)h--;for(;1<=o&&0<=h;o--,h--)if(I[o]!==U[h]){if(o!==1||h!==1)do if(o--,h--,0>h||I[o]!==U[h]){var F=`
`+I[o].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=o&&0<=h);break}}}finally{bo=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ai(a):""}function wo(e,i){switch(e.tag){case 26:case 27:case 5:return ai(e.type);case 16:return ai("Lazy");case 13:return e.child!==i&&i!==null?ai("Suspense Fallback"):ai("Suspense");case 19:return ai("SuspenseList");case 0:case 15:return gs(e.type,!1);case 11:return gs(e.type.render,!1);case 1:return gs(e.type,!0);case 31:return ai("Activity");default:return""}}function Ro(e){try{var i="",a=null;do i+=wo(e,a),a=e,e=e.return;while(e);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var _e=Object.prototype.hasOwnProperty,Ve=r.unstable_scheduleCallback,dr=r.unstable_cancelCallback,Xh=r.unstable_shouldYield,du=r.unstable_requestPaint,We=r.unstable_now,ps=r.unstable_getCurrentPriorityLevel,Io=r.unstable_ImmediatePriority,Co=r.unstable_UserBlockingPriority,mr=r.unstable_NormalPriority,$h=r.unstable_LowPriority,mu=r.unstable_IdlePriority,gu=r.log,pu=r.unstable_setDisableYieldValue,Bn=null,ze=null;function wn(e){if(typeof gu=="function"&&pu(e),ze&&typeof ze.setStrictMode=="function")try{ze.setStrictMode(Bn,e)}catch{}}var fe=Math.clz32?Math.clz32:_u,yu=Math.log,fa=Math.LN2;function _u(e){return e>>>=0,e===0?32:31-(yu(e)/fa|0)|0}var oi=256,ys=262144,ve=4194304;function li(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ui(e,i,a){var o=e.pendingLanes;if(o===0)return 0;var h=0,d=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var E=o&134217727;return E!==0?(o=E&~d,o!==0?h=li(o):(_&=E,_!==0?h=li(_):a||(a=E&~e,a!==0&&(h=li(a))))):(E=o&~d,E!==0?h=li(E):_!==0?h=li(_):a||(a=o&~e,a!==0&&(h=li(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function qn(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Jh(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vu(){var e=ve;return ve<<=1,(ve&62914560)===0&&(ve=4194304),e}function ci(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function _s(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Zh(e,i,a,o,h,d){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,I=e.expirationTimes,U=e.hiddenUpdates;for(a=_&~a;0<a;){var F=31-fe(a),Q=1<<F;E[F]=0,I[F]=-1;var z=U[F];if(z!==null)for(U[F]=null,F=0;F<z.length;F++){var q=z[F];q!==null&&(q.lane&=-536870913)}a&=~Q}o!==0&&vs(e,o,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(_&~i))}function vs(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var o=31-fe(i);e.entangledLanes|=i,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function No(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var o=31-fe(a),h=1<<o;h&i|e[o]&i&&(e[o]|=i),a&=~h}}function Do(e,i){var a=i&-i;return a=(a&42)!==0?1:Es(a),(a&(e.suspendedLanes|i))!==0?0:a}function Es(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ui(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Eu(){var e=et.p;return e!==0?e:(e=window.event,e===void 0?32:fv(e.type))}function Hn(e,i){var a=et.p;try{return et.p=e,i()}finally{et.p=a}}var Fn=Math.random().toString(36).slice(2),Ee="__reactFiber$"+Fn,ke="__reactProps$"+Fn,hi="__reactContainer$"+Fn,da="__reactEvents$"+Fn,Wh="__reactListeners$"+Fn,Tu="__reactHandles$"+Fn,Au="__reactResources$"+Fn,fi="__reactMarker$"+Fn;function ma(e){delete e[Ee],delete e[ke],delete e[da],delete e[Wh],delete e[Tu]}function di(e){var i=e[Ee];if(i)return i;for(var a=e.parentNode;a;){if(i=a[hi]||a[Ee]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=$_(e);e!==null;){if(a=e[Ee])return a;e=$_(e)}return i}e=a,a=e.parentNode}return null}function Rn(e){if(e=e[Ee]||e[hi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function dn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(s(33))}function mi(e){var i=e[Au];return i||(i=e[Au]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Te(e){e[fi]=!0}var Oo=new Set,Vo={};function gi(e,i){pi(e,i),pi(e+"Capture",i)}function pi(e,i){for(Vo[e]=i,e=0;e<i.length;e++)Oo.add(i[e])}var Mo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xo={},ko={};function Su(e){return _e.call(ko,e)?!0:_e.call(xo,e)?!1:Mo.test(e)?ko[e]=!0:(xo[e]=!0,!1)}function ga(e,i,a){if(Su(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function mn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function Ae(e,i,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+o)}}function Pe(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function gr(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Po(e,i,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,d=o.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(_){a=""+_,d.call(this,_)}}),Object.defineProperty(e,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ft(e){if(!e._valueTracker){var i=gr(e)?"checked":"value";e._valueTracker=Po(e,i,""+e[i])}}function Ts(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return e&&(o=gr(e)?e.checked?"true":"false":e.value),e=o,e!==a?(i.setValue(e),!0):!1}function yi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var As=/[\n"\\]/g;function rn(e){return e.replace(As,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function pa(e,i,a,o,h,d,_,E){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),i!=null?_==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Pe(i)):e.value!==""+Pe(i)&&(e.value=""+Pe(i)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),i!=null?Lo(e,_,Pe(i)):a!=null?Lo(e,_,Pe(a)):o!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Pe(E):e.removeAttribute("name")}function bu(e,i,a,o,h,d,_,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Ft(e);return}a=a!=null?""+Pe(a):"",i=i!=null?""+Pe(i):a,E||i===e.value||(e.value=i),e.defaultValue=i}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=E?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Ft(e)}function Lo(e,i,a){i==="number"&&yi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function pr(e,i,a,o){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&o&&(e[a].defaultSelected=!0)}else{for(a=""+Pe(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,o&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function wu(e,i,a){if(i!=null&&(i=""+Pe(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Pe(a):""}function yr(e,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(De(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=Pe(i),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Ft(e)}function sn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var Ru=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uo(e,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":o?e.setProperty(i,a):typeof a!="number"||a===0||Ru.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function zo(e,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var h in i)o=i[h],i.hasOwnProperty(h)&&a[h]!==o&&Uo(e,h,o)}else for(var d in i)i.hasOwnProperty(d)&&Uo(e,d,i[d])}function ya(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_r=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _a(e){return _r.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Gn(){}var jo=null;function In(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vr=null,_i=null;function Ss(e){var i=Rn(e);if(i&&(e=i.stateNode)){var a=e[ke]||null;t:switch(e=i.stateNode,i.type){case"input":if(pa(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+rn(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==e&&o.form===e.form){var h=o[ke]||null;if(!h)throw Error(s(90));pa(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===e.form&&Ts(o)}break t;case"textarea":wu(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&pr(e,!!a.multiple,i,!1)}}}var va=!1;function Er(e,i,a){if(va)return e(i,a);va=!0;try{var o=e(i);return o}finally{if(va=!1,(vr!==null||_i!==null)&&(Ec(),vr&&(i=vr,e=_i,_i=vr=null,Ss(i),e)))for(i=0;i<e.length;i++)Ss(e[i])}}function Kn(e,i){var a=e.stateNode;if(a===null)return null;var o=a[ke]||null;if(o===null)return null;a=o[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Cn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bs=!1;if(Cn)try{var Yt={};Object.defineProperty(Yt,"passive",{get:function(){bs=!0}}),window.addEventListener("test",Yt,Yt),window.removeEventListener("test",Yt,Yt)}catch{bs=!1}var vi=null,Bo=null,ws=null;function qo(){if(ws)return ws;var e,i=Bo,a=i.length,o,h="value"in vi?vi.value:vi.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var _=a-e;for(o=1;o<=_&&i[a-o]===h[d-o];o++);return ws=h.slice(e,1<o?1-o:void 0)}function Rs(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function zi(){return!0}function Yn(){return!1}function je(e){function i(a,o,h,d,_){this._reactName=a,this._targetInst=h,this.type=o,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?zi:Yn,this.isPropagationStopped=Yn,this}return S(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zi)},persist:function(){},isPersistent:zi}),i}var ji={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ei=je(ji),Tr=S({},ji,{view:0,detail:0}),Ho=je(Tr),Ar,Ea,Ti,Ta=S({},Tr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ti&&(Ti&&e.type==="mousemove"?(Ar=e.screenX-Ti.screenX,Ea=e.screenY-Ti.screenY):Ea=Ar=0,Ti=e),Ar)},movementY:function(e){return"movementY"in e?e.movementY:Ea}}),Fo=je(Ta),Is=S({},Ta,{dataTransfer:0}),Cu=je(Is),Nu=S({},Tr,{relatedTarget:0}),Cs=je(Nu),Go=S({},ji,{animationName:0,elapsedTime:0,pseudoElement:0}),Du=je(Go),Aa=S({},ji,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ou=je(Aa),Vu=S({},ji,{data:0}),Ai=je(Vu),Mu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ku={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pu(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=ku[e])?!!i[e]:!1}function Sr(){return Pu}var tn=S({},Tr,{key:function(e){if(e.key){var i=Mu[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Rs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?xu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sr,charCode:function(e){return e.type==="keypress"?Rs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Rs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Lu=je(tn),Uu=S({},Ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bi=je(Uu),c=S({},Tr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sr}),m=je(c),v=S({},ji,{propertyName:0,elapsedTime:0,pseudoElement:0}),A=je(v),P=S({},Ta,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),B=je(P),tt=S({},ji,{newState:0,oldState:0}),Tt=je(tt),de=[9,13,27,32],jt=Cn&&"CompositionEvent"in window,ae=null;Cn&&"documentMode"in document&&(ae=document.documentMode);var Nn=Cn&&"TextEvent"in window&&!ae,Si=Cn&&(!jt||ae&&8<ae&&11>=ae),Qn=" ",Xn=!1;function Ns(e,i){switch(e){case"keyup":return de.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sa(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ba=!1;function RS(e,i){switch(e){case"compositionend":return Sa(i);case"keypress":return i.which!==32?null:(Xn=!0,Qn);case"textInput":return e=i.data,e===Qn&&Xn?null:e;default:return null}}function IS(e,i){if(ba)return e==="compositionend"||!jt&&Ns(e,i)?(e=qo(),ws=Bo=vi=null,ba=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Si&&i.locale!=="ko"?null:i.data;default:return null}}var CS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wg(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!CS[e.type]:i==="textarea"}function tp(e,i,a,o){vr?_i?_i.push(o):_i=[o]:vr=o,i=Ic(i,"onChange"),0<i.length&&(a=new Ei("onChange","change",null,a,o),e.push({event:a,listeners:i}))}var Ko=null,Yo=null;function NS(e){P_(e,0)}function zu(e){var i=dn(e);if(Ts(i))return e}function ep(e,i){if(e==="change")return i}var np=!1;if(Cn){var tf;if(Cn){var ef="oninput"in document;if(!ef){var ip=document.createElement("div");ip.setAttribute("oninput","return;"),ef=typeof ip.oninput=="function"}tf=ef}else tf=!1;np=tf&&(!document.documentMode||9<document.documentMode)}function rp(){Ko&&(Ko.detachEvent("onpropertychange",sp),Yo=Ko=null)}function sp(e){if(e.propertyName==="value"&&zu(Yo)){var i=[];tp(i,Yo,e,In(e)),Er(NS,i)}}function DS(e,i,a){e==="focusin"?(rp(),Ko=i,Yo=a,Ko.attachEvent("onpropertychange",sp)):e==="focusout"&&rp()}function OS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zu(Yo)}function VS(e,i){if(e==="click")return zu(i)}function MS(e,i){if(e==="input"||e==="change")return zu(i)}function xS(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var gn=typeof Object.is=="function"?Object.is:xS;function Qo(e,i){if(gn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var h=a[o];if(!_e.call(i,h)||!gn(e[h],i[h]))return!1}return!0}function ap(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function op(e,i){var a=ap(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=i&&o>=i)return{node:a,offset:i-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=ap(a)}}function lp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?lp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function up(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=yi(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=yi(e.document)}return i}function nf(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var kS=Cn&&"documentMode"in document&&11>=document.documentMode,wa=null,rf=null,Xo=null,sf=!1;function cp(e,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sf||wa==null||wa!==yi(o)||(o=wa,"selectionStart"in o&&nf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Xo&&Qo(Xo,o)||(Xo=o,o=Ic(rf,"onSelect"),0<o.length&&(i=new Ei("onSelect","select",null,i,a),e.push({event:i,listeners:o}),i.target=wa)))}function Ds(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var Ra={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionrun:Ds("Transition","TransitionRun"),transitionstart:Ds("Transition","TransitionStart"),transitioncancel:Ds("Transition","TransitionCancel"),transitionend:Ds("Transition","TransitionEnd")},af={},hp={};Cn&&(hp=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function Os(e){if(af[e])return af[e];if(!Ra[e])return e;var i=Ra[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in hp)return af[e]=i[a];return e}var fp=Os("animationend"),dp=Os("animationiteration"),mp=Os("animationstart"),PS=Os("transitionrun"),LS=Os("transitionstart"),US=Os("transitioncancel"),gp=Os("transitionend"),pp=new Map,of="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");of.push("scrollEnd");function $n(e,i){pp.set(e,i),gi(i,[e])}var ju=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Dn=[],Ia=0,lf=0;function Bu(){for(var e=Ia,i=lf=Ia=0;i<e;){var a=Dn[i];Dn[i++]=null;var o=Dn[i];Dn[i++]=null;var h=Dn[i];Dn[i++]=null;var d=Dn[i];if(Dn[i++]=null,o!==null&&h!==null){var _=o.pending;_===null?h.next=h:(h.next=_.next,_.next=h),o.pending=h}d!==0&&yp(a,h,d)}}function qu(e,i,a,o){Dn[Ia++]=e,Dn[Ia++]=i,Dn[Ia++]=a,Dn[Ia++]=o,lf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function uf(e,i,a,o){return qu(e,i,a,o),Hu(e)}function Vs(e,i){return qu(e,null,null,i),Hu(e)}function yp(e,i,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-fe(a),e=d.hiddenUpdates,o=e[h],o===null?e[h]=[i]:o.push(i),i.lane=a|536870912),d):null}function Hu(e){if(50<yl)throw yl=0,_d=null,Error(s(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ca={};function zS(e,i,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pn(e,i,a,o){return new zS(e,i,a,o)}function cf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function qi(e,i){var a=e.alternate;return a===null?(a=pn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function _p(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Fu(e,i,a,o,h,d){var _=0;if(o=e,typeof e=="function")cf(e)&&(_=1);else if(typeof e=="string")_=Fb(e,a,st.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case C:return e=pn(31,a,i,h),e.elementType=C,e.lanes=d,e;case Z:return Ms(a.children,h,d,i);case W:_=8,h|=24;break;case mt:return e=pn(12,a,i,h|2),e.elementType=mt,e.lanes=d,e;case Zt:return e=pn(13,a,i,h),e.elementType=Zt,e.lanes=d,e;case zt:return e=pn(19,a,i,h),e.elementType=zt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Et:_=10;break t;case vt:_=9;break t;case Jt:_=11;break t;case N:_=14;break t;case b:_=16,o=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return i=pn(_,a,i,h),i.elementType=e,i.type=o,i.lanes=d,i}function Ms(e,i,a,o){return e=pn(7,e,o,i),e.lanes=a,e}function hf(e,i,a){return e=pn(6,e,null,i),e.lanes=a,e}function vp(e){var i=pn(18,null,null,0);return i.stateNode=e,i}function ff(e,i,a){return i=pn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Ep=new WeakMap;function On(e,i){if(typeof e=="object"&&e!==null){var a=Ep.get(e);return a!==void 0?a:(i={value:e,source:i,stack:Ro(i)},Ep.set(e,i),i)}return{value:e,source:i,stack:Ro(i)}}var Na=[],Da=0,Gu=null,$o=0,Vn=[],Mn=0,br=null,bi=1,wi="";function Hi(e,i){Na[Da++]=$o,Na[Da++]=Gu,Gu=e,$o=i}function Tp(e,i,a){Vn[Mn++]=bi,Vn[Mn++]=wi,Vn[Mn++]=br,br=e;var o=bi;e=wi;var h=32-fe(o)-1;o&=~(1<<h),a+=1;var d=32-fe(i)+h;if(30<d){var _=h-h%5;d=(o&(1<<_)-1).toString(32),o>>=_,h-=_,bi=1<<32-fe(i)+h|a<<h|o,wi=d+e}else bi=1<<d|a<<h|o,wi=e}function df(e){e.return!==null&&(Hi(e,1),Tp(e,1,0))}function mf(e){for(;e===Gu;)Gu=Na[--Da],Na[Da]=null,$o=Na[--Da],Na[Da]=null;for(;e===br;)br=Vn[--Mn],Vn[Mn]=null,wi=Vn[--Mn],Vn[Mn]=null,bi=Vn[--Mn],Vn[Mn]=null}function Ap(e,i){Vn[Mn++]=bi,Vn[Mn++]=wi,Vn[Mn++]=br,bi=i.id,wi=i.overflow,br=e}var Be=null,ee=null,Vt=!1,wr=null,xn=!1,gf=Error(s(519));function Rr(e){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jo(On(i,e)),gf}function Sp(e){var i=e.stateNode,a=e.type,o=e.memoizedProps;switch(i[Ee]=e,i[ke]=o,a){case"dialog":Rt("cancel",i),Rt("close",i);break;case"iframe":case"object":case"embed":Rt("load",i);break;case"video":case"audio":for(a=0;a<vl.length;a++)Rt(vl[a],i);break;case"source":Rt("error",i);break;case"img":case"image":case"link":Rt("error",i),Rt("load",i);break;case"details":Rt("toggle",i);break;case"input":Rt("invalid",i),bu(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Rt("invalid",i);break;case"textarea":Rt("invalid",i),yr(i,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||j_(i.textContent,a)?(o.popover!=null&&(Rt("beforetoggle",i),Rt("toggle",i)),o.onScroll!=null&&Rt("scroll",i),o.onScrollEnd!=null&&Rt("scrollend",i),o.onClick!=null&&(i.onclick=Gn),i=!0):i=!1,i||Rr(e,!0)}function bp(e){for(Be=e.return;Be;)switch(Be.tag){case 5:case 31:case 13:xn=!1;return;case 27:case 3:xn=!0;return;default:Be=Be.return}}function Oa(e){if(e!==Be)return!1;if(!Vt)return bp(e),Vt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Md(e.type,e.memoizedProps)),a=!a),a&&ee&&Rr(e),bp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ee=X_(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));ee=X_(e)}else i===27?(i=ee,jr(e.type)?(e=Ud,Ud=null,ee=e):ee=i):ee=Be?Pn(e.stateNode.nextSibling):null;return!0}function xs(){ee=Be=null,Vt=!1}function pf(){var e=wr;return e!==null&&(un===null?un=e:un.push.apply(un,e),wr=null),e}function Jo(e){wr===null?wr=[e]:wr.push(e)}var yf=V(null),ks=null,Fi=null;function Ir(e,i,a){nt(yf,i._currentValue),i._currentValue=a}function Gi(e){e._currentValue=yf.current,X(yf)}function _f(e,i,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),e===a)break;e=e.return}}function vf(e,i,a,o){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;t:for(;d!==null;){var E=d;d=h;for(var I=0;I<i.length;I++)if(E.context===i[I]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),_f(d.return,a,e),o||(_=null);break t}d=E.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),_f(_,a,e),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===e){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function Va(e,i,a,o){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=h.type;gn(h.pendingProps.value,_.value)||(e!==null?e.push(E):e=[E])}}else if(h===Mt.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(bl):e=[bl])}h=h.return}e!==null&&vf(i,e,a,o),i.flags|=262144}function Ku(e){for(e=e.firstContext;e!==null;){if(!gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ps(e){ks=e,Fi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function qe(e){return wp(ks,e)}function Yu(e,i){return ks===null&&Ps(e),wp(e,i)}function wp(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Fi===null){if(e===null)throw Error(s(308));Fi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Fi=Fi.next=i;return a}var jS=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},BS=r.unstable_scheduleCallback,qS=r.unstable_NormalPriority,Se={$$typeof:Et,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ef(){return{controller:new jS,data:new Map,refCount:0}}function Zo(e){e.refCount--,e.refCount===0&&BS(qS,function(){e.controller.abort()})}var Wo=null,Tf=0,Ma=0,xa=null;function HS(e,i){if(Wo===null){var a=Wo=[];Tf=0,Ma=bd(),xa={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Tf++,i.then(Rp,Rp),i}function Rp(){if(--Tf===0&&Wo!==null){xa!==null&&(xa.status="fulfilled");var e=Wo;Wo=null,Ma=0,xa=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function FS(e,i){var a=[],o={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){o.status="fulfilled",o.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(o.status="rejected",o.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),o}var Ip=G.S;G.S=function(e,i){c_=We(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&HS(e,i),Ip!==null&&Ip(e,i)};var Ls=V(null);function Af(){var e=Ls.current;return e!==null?e:Wt.pooledCache}function Qu(e,i){i===null?nt(Ls,Ls.current):nt(Ls,i.pool)}function Cp(){var e=Af();return e===null?null:{parent:Se._currentValue,pool:e}}var ka=Error(s(460)),Sf=Error(s(474)),Xu=Error(s(542)),$u={then:function(){}};function Np(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Dp(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Gn,Gn),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Vp(e),e;default:if(typeof i.status=="string")i.then(Gn,Gn);else{if(e=Wt,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=i,e.status="pending",e.then(function(o){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=o}},function(o){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,Vp(e),e}throw zs=i,ka}}function Us(e){try{var i=e._init;return i(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(zs=a,ka):a}}var zs=null;function Op(){if(zs===null)throw Error(s(459));var e=zs;return zs=null,e}function Vp(e){if(e===ka||e===Xu)throw Error(s(483))}var Pa=null,tl=0;function Ju(e){var i=tl;return tl+=1,Pa===null&&(Pa=[]),Dp(Pa,e,i)}function el(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Zu(e,i){throw i.$$typeof===w?Error(s(525)):(e=Object.prototype.toString.call(i),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function Mp(e){function i(x,D){if(e){var L=x.deletions;L===null?(x.deletions=[D],x.flags|=16):L.push(D)}}function a(x,D){if(!e)return null;for(;D!==null;)i(x,D),D=D.sibling;return null}function o(x){for(var D=new Map;x!==null;)x.key!==null?D.set(x.key,x):D.set(x.index,x),x=x.sibling;return D}function h(x,D){return x=qi(x,D),x.index=0,x.sibling=null,x}function d(x,D,L){return x.index=L,e?(L=x.alternate,L!==null?(L=L.index,L<D?(x.flags|=67108866,D):L):(x.flags|=67108866,D)):(x.flags|=1048576,D)}function _(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function E(x,D,L,K){return D===null||D.tag!==6?(D=hf(L,x.mode,K),D.return=x,D):(D=h(D,L),D.return=x,D)}function I(x,D,L,K){var lt=L.type;return lt===Z?F(x,D,L.props.children,K,L.key):D!==null&&(D.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===b&&Us(lt)===D.type)?(D=h(D,L.props),el(D,L),D.return=x,D):(D=Fu(L.type,L.key,L.props,null,x.mode,K),el(D,L),D.return=x,D)}function U(x,D,L,K){return D===null||D.tag!==4||D.stateNode.containerInfo!==L.containerInfo||D.stateNode.implementation!==L.implementation?(D=ff(L,x.mode,K),D.return=x,D):(D=h(D,L.children||[]),D.return=x,D)}function F(x,D,L,K,lt){return D===null||D.tag!==7?(D=Ms(L,x.mode,K,lt),D.return=x,D):(D=h(D,L),D.return=x,D)}function Q(x,D,L){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=hf(""+D,x.mode,L),D.return=x,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case j:return L=Fu(D.type,D.key,D.props,null,x.mode,L),el(L,D),L.return=x,L;case J:return D=ff(D,x.mode,L),D.return=x,D;case b:return D=Us(D),Q(x,D,L)}if(De(D)||k(D))return D=Ms(D,x.mode,L,null),D.return=x,D;if(typeof D.then=="function")return Q(x,Ju(D),L);if(D.$$typeof===Et)return Q(x,Yu(x,D),L);Zu(x,D)}return null}function z(x,D,L,K){var lt=D!==null?D.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return lt!==null?null:E(x,D,""+L,K);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case j:return L.key===lt?I(x,D,L,K):null;case J:return L.key===lt?U(x,D,L,K):null;case b:return L=Us(L),z(x,D,L,K)}if(De(L)||k(L))return lt!==null?null:F(x,D,L,K,null);if(typeof L.then=="function")return z(x,D,Ju(L),K);if(L.$$typeof===Et)return z(x,D,Yu(x,L),K);Zu(x,L)}return null}function q(x,D,L,K,lt){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return x=x.get(L)||null,E(D,x,""+K,lt);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case j:return x=x.get(K.key===null?L:K.key)||null,I(D,x,K,lt);case J:return x=x.get(K.key===null?L:K.key)||null,U(D,x,K,lt);case b:return K=Us(K),q(x,D,L,K,lt)}if(De(K)||k(K))return x=x.get(L)||null,F(D,x,K,lt,null);if(typeof K.then=="function")return q(x,D,L,Ju(K),lt);if(K.$$typeof===Et)return q(x,D,L,Yu(D,K),lt);Zu(D,K)}return null}function at(x,D,L,K){for(var lt=null,Pt=null,ot=D,bt=D=0,Ct=null;ot!==null&&bt<L.length;bt++){ot.index>bt?(Ct=ot,ot=null):Ct=ot.sibling;var Lt=z(x,ot,L[bt],K);if(Lt===null){ot===null&&(ot=Ct);break}e&&ot&&Lt.alternate===null&&i(x,ot),D=d(Lt,D,bt),Pt===null?lt=Lt:Pt.sibling=Lt,Pt=Lt,ot=Ct}if(bt===L.length)return a(x,ot),Vt&&Hi(x,bt),lt;if(ot===null){for(;bt<L.length;bt++)ot=Q(x,L[bt],K),ot!==null&&(D=d(ot,D,bt),Pt===null?lt=ot:Pt.sibling=ot,Pt=ot);return Vt&&Hi(x,bt),lt}for(ot=o(ot);bt<L.length;bt++)Ct=q(ot,x,bt,L[bt],K),Ct!==null&&(e&&Ct.alternate!==null&&ot.delete(Ct.key===null?bt:Ct.key),D=d(Ct,D,bt),Pt===null?lt=Ct:Pt.sibling=Ct,Pt=Ct);return e&&ot.forEach(function(Gr){return i(x,Gr)}),Vt&&Hi(x,bt),lt}function ht(x,D,L,K){if(L==null)throw Error(s(151));for(var lt=null,Pt=null,ot=D,bt=D=0,Ct=null,Lt=L.next();ot!==null&&!Lt.done;bt++,Lt=L.next()){ot.index>bt?(Ct=ot,ot=null):Ct=ot.sibling;var Gr=z(x,ot,Lt.value,K);if(Gr===null){ot===null&&(ot=Ct);break}e&&ot&&Gr.alternate===null&&i(x,ot),D=d(Gr,D,bt),Pt===null?lt=Gr:Pt.sibling=Gr,Pt=Gr,ot=Ct}if(Lt.done)return a(x,ot),Vt&&Hi(x,bt),lt;if(ot===null){for(;!Lt.done;bt++,Lt=L.next())Lt=Q(x,Lt.value,K),Lt!==null&&(D=d(Lt,D,bt),Pt===null?lt=Lt:Pt.sibling=Lt,Pt=Lt);return Vt&&Hi(x,bt),lt}for(ot=o(ot);!Lt.done;bt++,Lt=L.next())Lt=q(ot,x,bt,Lt.value,K),Lt!==null&&(e&&Lt.alternate!==null&&ot.delete(Lt.key===null?bt:Lt.key),D=d(Lt,D,bt),Pt===null?lt=Lt:Pt.sibling=Lt,Pt=Lt);return e&&ot.forEach(function(e1){return i(x,e1)}),Vt&&Hi(x,bt),lt}function $t(x,D,L,K){if(typeof L=="object"&&L!==null&&L.type===Z&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case j:t:{for(var lt=L.key;D!==null;){if(D.key===lt){if(lt=L.type,lt===Z){if(D.tag===7){a(x,D.sibling),K=h(D,L.props.children),K.return=x,x=K;break t}}else if(D.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===b&&Us(lt)===D.type){a(x,D.sibling),K=h(D,L.props),el(K,L),K.return=x,x=K;break t}a(x,D);break}else i(x,D);D=D.sibling}L.type===Z?(K=Ms(L.props.children,x.mode,K,L.key),K.return=x,x=K):(K=Fu(L.type,L.key,L.props,null,x.mode,K),el(K,L),K.return=x,x=K)}return _(x);case J:t:{for(lt=L.key;D!==null;){if(D.key===lt)if(D.tag===4&&D.stateNode.containerInfo===L.containerInfo&&D.stateNode.implementation===L.implementation){a(x,D.sibling),K=h(D,L.children||[]),K.return=x,x=K;break t}else{a(x,D);break}else i(x,D);D=D.sibling}K=ff(L,x.mode,K),K.return=x,x=K}return _(x);case b:return L=Us(L),$t(x,D,L,K)}if(De(L))return at(x,D,L,K);if(k(L)){if(lt=k(L),typeof lt!="function")throw Error(s(150));return L=lt.call(L),ht(x,D,L,K)}if(typeof L.then=="function")return $t(x,D,Ju(L),K);if(L.$$typeof===Et)return $t(x,D,Yu(x,L),K);Zu(x,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,D!==null&&D.tag===6?(a(x,D.sibling),K=h(D,L),K.return=x,x=K):(a(x,D),K=hf(L,x.mode,K),K.return=x,x=K),_(x)):a(x,D)}return function(x,D,L,K){try{tl=0;var lt=$t(x,D,L,K);return Pa=null,lt}catch(ot){if(ot===ka||ot===Xu)throw ot;var Pt=pn(29,ot,null,x.mode);return Pt.lanes=K,Pt.return=x,Pt}finally{}}}var js=Mp(!0),xp=Mp(!1),Cr=!1;function bf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function wf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Nr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Dr(e,i,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Bt&2)!==0){var h=o.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),o.pending=i,i=Hu(e),yp(e,null,a),i}return qu(e,o,i,a),Hu(e)}function nl(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,No(e,a)}}function Rf(e,i){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var If=!1;function il(){if(If){var e=xa;if(e!==null)throw e}}function rl(e,i,a,o){If=!1;var h=e.updateQueue;Cr=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var I=E,U=I.next;I.next=null,_===null?d=U:_.next=U,_=I;var F=e.alternate;F!==null&&(F=F.updateQueue,E=F.lastBaseUpdate,E!==_&&(E===null?F.firstBaseUpdate=U:E.next=U,F.lastBaseUpdate=I))}if(d!==null){var Q=h.baseState;_=0,F=U=I=null,E=d;do{var z=E.lane&-536870913,q=z!==E.lane;if(q?(It&z)===z:(o&z)===z){z!==0&&z===Ma&&(If=!0),F!==null&&(F=F.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var at=e,ht=E;z=i;var $t=a;switch(ht.tag){case 1:if(at=ht.payload,typeof at=="function"){Q=at.call($t,Q,z);break t}Q=at;break t;case 3:at.flags=at.flags&-65537|128;case 0:if(at=ht.payload,z=typeof at=="function"?at.call($t,Q,z):at,z==null)break t;Q=S({},Q,z);break t;case 2:Cr=!0}}z=E.callback,z!==null&&(e.flags|=64,q&&(e.flags|=8192),q=h.callbacks,q===null?h.callbacks=[z]:q.push(z))}else q={lane:z,tag:E.tag,payload:E.payload,callback:E.callback,next:null},F===null?(U=F=q,I=Q):F=F.next=q,_|=z;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;q=E,E=q.next,q.next=null,h.lastBaseUpdate=q,h.shared.pending=null}}while(!0);F===null&&(I=Q),h.baseState=I,h.firstBaseUpdate=U,h.lastBaseUpdate=F,d===null&&(h.shared.lanes=0),kr|=_,e.lanes=_,e.memoizedState=Q}}function kp(e,i){if(typeof e!="function")throw Error(s(191,e));e.call(i)}function Pp(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)kp(a[e],i)}var La=V(null),Wu=V(0);function Lp(e,i){e=tr,nt(Wu,e),nt(La,i),tr=e|i.baseLanes}function Cf(){nt(Wu,tr),nt(La,La.current)}function Nf(){tr=Wu.current,X(La),X(Wu)}var yn=V(null),kn=null;function Or(e){var i=e.alternate;nt(me,me.current&1),nt(yn,e),kn===null&&(i===null||La.current!==null||i.memoizedState!==null)&&(kn=e)}function Df(e){nt(me,me.current),nt(yn,e),kn===null&&(kn=e)}function Up(e){e.tag===22?(nt(me,me.current),nt(yn,e),kn===null&&(kn=e)):Vr()}function Vr(){nt(me,me.current),nt(yn,yn.current)}function _n(e){X(yn),kn===e&&(kn=null),X(me)}var me=V(0);function tc(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Pd(a)||Ld(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ki=0,At=null,Qt=null,be=null,ec=!1,Ua=!1,Bs=!1,nc=0,sl=0,za=null,GS=0;function ue(){throw Error(s(321))}function Of(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!gn(e[a],i[a]))return!1;return!0}function Vf(e,i,a,o,h,d){return Ki=d,At=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,G.H=e===null||e.memoizedState===null?Ty:Yf,Bs=!1,d=a(o,h),Bs=!1,Ua&&(d=jp(i,a,o,h)),zp(e),d}function zp(e){G.H=ll;var i=Qt!==null&&Qt.next!==null;if(Ki=0,be=Qt=At=null,ec=!1,sl=0,za=null,i)throw Error(s(300));e===null||we||(e=e.dependencies,e!==null&&Ku(e)&&(we=!0))}function jp(e,i,a,o){At=e;var h=0;do{if(Ua&&(za=null),sl=0,Ua=!1,25<=h)throw Error(s(301));if(h+=1,be=Qt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}G.H=Ay,d=i(a,o)}while(Ua);return d}function KS(){var e=G.H,i=e.useState()[0];return i=typeof i.then=="function"?al(i):i,e=e.useState()[0],(Qt!==null?Qt.memoizedState:null)!==e&&(At.flags|=1024),i}function Mf(){var e=nc!==0;return nc=0,e}function xf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function kf(e){if(ec){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}ec=!1}Ki=0,be=Qt=At=null,Ua=!1,sl=nc=0,za=null}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?At.memoizedState=be=e:be=be.next=e,be}function ge(){if(Qt===null){var e=At.alternate;e=e!==null?e.memoizedState:null}else e=Qt.next;var i=be===null?At.memoizedState:be.next;if(i!==null)be=i,Qt=e;else{if(e===null)throw At.alternate===null?Error(s(467)):Error(s(310));Qt=e,e={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},be===null?At.memoizedState=be=e:be=be.next=e}return be}function ic(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function al(e){var i=sl;return sl+=1,za===null&&(za=[]),e=Dp(za,e,i),i=At,(be===null?i.memoizedState:be.next)===null&&(i=i.alternate,G.H=i===null||i.memoizedState===null?Ty:Yf),e}function rc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return al(e);if(e.$$typeof===Et)return qe(e)}throw Error(s(438,String(e)))}function Pf(e){var i=null,a=At.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=At.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=ic(),At.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),o=0;o<e;o++)a[o]=M;return i.index++,a}function Yi(e,i){return typeof i=="function"?i(e):i}function sc(e){var i=ge();return Lf(i,Qt,e)}function Lf(e,i,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var h=e.baseQueue,d=o.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}i.baseQueue=h=d,o.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var E=_=null,I=null,U=i,F=!1;do{var Q=U.lane&-536870913;if(Q!==U.lane?(It&Q)===Q:(Ki&Q)===Q){var z=U.revertLane;if(z===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),Q===Ma&&(F=!0);else if((Ki&z)===z){U=U.next,z===Ma&&(F=!0);continue}else Q={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},I===null?(E=I=Q,_=d):I=I.next=Q,At.lanes|=z,kr|=z;Q=U.action,Bs&&a(d,Q),d=U.hasEagerState?U.eagerState:a(d,Q)}else z={lane:Q,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},I===null?(E=I=z,_=d):I=I.next=z,At.lanes|=Q,kr|=Q;U=U.next}while(U!==null&&U!==i);if(I===null?_=d:I.next=E,!gn(d,e.memoizedState)&&(we=!0,F&&(a=xa,a!==null)))throw a;e.memoizedState=d,e.baseState=_,e.baseQueue=I,o.lastRenderedState=d}return h===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Uf(e){var i=ge(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=e(d,_.action),_=_.next;while(_!==h);gn(d,i.memoizedState)||(we=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,o]}function Bp(e,i,a){var o=At,h=ge(),d=Vt;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var _=!gn((Qt||h).memoizedState,a);if(_&&(h.memoizedState=a,we=!0),h=h.queue,Bf(Fp.bind(null,o,h,e),[e]),h.getSnapshot!==i||_||be!==null&&be.memoizedState.tag&1){if(o.flags|=2048,ja(9,{destroy:void 0},Hp.bind(null,o,h,a,i),null),Wt===null)throw Error(s(349));d||(Ki&127)!==0||qp(o,i,a)}return a}function qp(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=At.updateQueue,i===null?(i=ic(),At.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function Hp(e,i,a,o){i.value=a,i.getSnapshot=o,Gp(i)&&Kp(e)}function Fp(e,i,a){return a(function(){Gp(i)&&Kp(e)})}function Gp(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!gn(e,a)}catch{return!0}}function Kp(e){var i=Vs(e,2);i!==null&&cn(i,e,2)}function zf(e){var i=en();if(typeof e=="function"){var a=e;if(e=a(),Bs){wn(!0);try{a()}finally{wn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:e},i}function Yp(e,i,a,o){return e.baseState=a,Lf(e,Qt,typeof o=="function"?o:Yi)}function YS(e,i,a,o,h){if(lc(e))throw Error(s(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};G.T!==null?a(!0):d.isTransition=!1,o(d),a=i.pending,a===null?(d.next=i.pending=d,Qp(i,d)):(d.next=a.next,i.pending=a.next=d)}}function Qp(e,i){var a=i.action,o=i.payload,h=e.state;if(i.isTransition){var d=G.T,_={};G.T=_;try{var E=a(h,o),I=G.S;I!==null&&I(_,E),Xp(e,i,E)}catch(U){jf(e,i,U)}finally{d!==null&&_.types!==null&&(d.types=_.types),G.T=d}}else try{d=a(h,o),Xp(e,i,d)}catch(U){jf(e,i,U)}}function Xp(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){$p(e,i,o)},function(o){return jf(e,i,o)}):$p(e,i,a)}function $p(e,i,a){i.status="fulfilled",i.value=a,Jp(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,Qp(e,a)))}function jf(e,i,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,Jp(i),i=i.next;while(i!==o)}e.action=null}function Jp(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Zp(e,i){return i}function Wp(e,i){if(Vt){var a=Wt.formState;if(a!==null){t:{var o=At;if(Vt){if(ee){e:{for(var h=ee,d=xn;h.nodeType!==8;){if(!d){h=null;break e}if(h=Pn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){ee=Pn(h.nextSibling),o=h.data==="F!";break t}}Rr(o)}o=!1}o&&(i=a[0])}}return a=en(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zp,lastRenderedState:i},a.queue=o,a=_y.bind(null,At,o),o.dispatch=a,o=zf(!1),d=Kf.bind(null,At,!1,o.queue),o=en(),h={state:i,dispatch:null,action:e,pending:null},o.queue=h,a=YS.bind(null,At,h,d,a),h.dispatch=a,o.memoizedState=e,[i,a,!1]}function ty(e){var i=ge();return ey(i,Qt,e)}function ey(e,i,a){if(i=Lf(e,i,Zp)[0],e=sc(Yi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=al(i)}catch(_){throw _===ka?Xu:_}else o=i;i=ge();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(At.flags|=2048,ja(9,{destroy:void 0},QS.bind(null,h,a),null)),[o,d,e]}function QS(e,i){e.action=i}function ny(e){var i=ge(),a=Qt;if(a!==null)return ey(i,a,e);ge(),i=i.memoizedState,a=ge();var o=a.queue.dispatch;return a.memoizedState=e,[i,o,!1]}function ja(e,i,a,o){return e={tag:e,create:a,deps:o,inst:i,next:null},i=At.updateQueue,i===null&&(i=ic(),At.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,i.lastEffect=e),e}function iy(){return ge().memoizedState}function ac(e,i,a,o){var h=en();At.flags|=e,h.memoizedState=ja(1|i,{destroy:void 0},a,o===void 0?null:o)}function oc(e,i,a,o){var h=ge();o=o===void 0?null:o;var d=h.memoizedState.inst;Qt!==null&&o!==null&&Of(o,Qt.memoizedState.deps)?h.memoizedState=ja(i,d,a,o):(At.flags|=e,h.memoizedState=ja(1|i,d,a,o))}function ry(e,i){ac(8390656,8,e,i)}function Bf(e,i){oc(2048,8,e,i)}function XS(e){At.flags|=4;var i=At.updateQueue;if(i===null)i=ic(),At.updateQueue=i,i.events=[e];else{var a=i.events;a===null?i.events=[e]:a.push(e)}}function sy(e){var i=ge().memoizedState;return XS({ref:i,nextImpl:e}),function(){if((Bt&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function ay(e,i){return oc(4,2,e,i)}function oy(e,i){return oc(4,4,e,i)}function ly(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function uy(e,i,a){a=a!=null?a.concat([e]):null,oc(4,4,ly.bind(null,i,e),a)}function qf(){}function cy(e,i){var a=ge();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&Of(i,o[1])?o[0]:(a.memoizedState=[e,i],e)}function hy(e,i){var a=ge();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&Of(i,o[1]))return o[0];if(o=e(),Bs){wn(!0);try{e()}finally{wn(!1)}}return a.memoizedState=[o,i],o}function Hf(e,i,a){return a===void 0||(Ki&1073741824)!==0&&(It&261930)===0?e.memoizedState=i:(e.memoizedState=a,e=f_(),At.lanes|=e,kr|=e,a)}function fy(e,i,a,o){return gn(a,i)?a:La.current!==null?(e=Hf(e,a,o),gn(e,i)||(we=!0),e):(Ki&42)===0||(Ki&1073741824)!==0&&(It&261930)===0?(we=!0,e.memoizedState=a):(e=f_(),At.lanes|=e,kr|=e,i)}function dy(e,i,a,o,h){var d=et.p;et.p=d!==0&&8>d?d:8;var _=G.T,E={};G.T=E,Kf(e,!1,i,a);try{var I=h(),U=G.S;if(U!==null&&U(E,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var F=FS(I,o);ol(e,i,F,Tn(e))}else ol(e,i,o,Tn(e))}catch(Q){ol(e,i,{then:function(){},status:"rejected",reason:Q},Tn())}finally{et.p=d,_!==null&&E.types!==null&&(_.types=E.types),G.T=_}}function $S(){}function Ff(e,i,a,o){if(e.tag!==5)throw Error(s(476));var h=my(e).queue;dy(e,h,i,ct,a===null?$S:function(){return gy(e),a(o)})}function my(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:ct},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Yi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function gy(e){var i=my(e);i.next===null&&(i=e.alternate.memoizedState),ol(e,i.next.queue,{},Tn())}function Gf(){return qe(bl)}function py(){return ge().memoizedState}function yy(){return ge().memoizedState}function JS(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=Tn();e=Nr(a);var o=Dr(i,e,a);o!==null&&(cn(o,i,a),nl(o,i,a)),i={cache:Ef()},e.payload=i;return}i=i.return}}function ZS(e,i,a){var o=Tn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},lc(e)?vy(i,a):(a=uf(e,i,a,o),a!==null&&(cn(a,e,o),Ey(a,i,o)))}function _y(e,i,a){var o=Tn();ol(e,i,a,o)}function ol(e,i,a,o){var h={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(lc(e))vy(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var _=i.lastRenderedState,E=d(_,a);if(h.hasEagerState=!0,h.eagerState=E,gn(E,_))return qu(e,i,h,0),Wt===null&&Bu(),!1}catch{}finally{}if(a=uf(e,i,h,o),a!==null)return cn(a,e,o),Ey(a,i,o),!0}return!1}function Kf(e,i,a,o){if(o={lane:2,revertLane:bd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},lc(e)){if(i)throw Error(s(479))}else i=uf(e,a,o,2),i!==null&&cn(i,e,2)}function lc(e){var i=e.alternate;return e===At||i!==null&&i===At}function vy(e,i){Ua=ec=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Ey(e,i,a){if((a&4194048)!==0){var o=i.lanes;o&=e.pendingLanes,a|=o,i.lanes=a,No(e,a)}}var ll={readContext:qe,use:rc,useCallback:ue,useContext:ue,useEffect:ue,useImperativeHandle:ue,useLayoutEffect:ue,useInsertionEffect:ue,useMemo:ue,useReducer:ue,useRef:ue,useState:ue,useDebugValue:ue,useDeferredValue:ue,useTransition:ue,useSyncExternalStore:ue,useId:ue,useHostTransitionStatus:ue,useFormState:ue,useActionState:ue,useOptimistic:ue,useMemoCache:ue,useCacheRefresh:ue};ll.useEffectEvent=ue;var Ty={readContext:qe,use:rc,useCallback:function(e,i){return en().memoizedState=[e,i===void 0?null:i],e},useContext:qe,useEffect:ry,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,ac(4194308,4,ly.bind(null,i,e),a)},useLayoutEffect:function(e,i){return ac(4194308,4,e,i)},useInsertionEffect:function(e,i){ac(4,2,e,i)},useMemo:function(e,i){var a=en();i=i===void 0?null:i;var o=e();if(Bs){wn(!0);try{e()}finally{wn(!1)}}return a.memoizedState=[o,i],o},useReducer:function(e,i,a){var o=en();if(a!==void 0){var h=a(i);if(Bs){wn(!0);try{a(i)}finally{wn(!1)}}}else h=i;return o.memoizedState=o.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},o.queue=e,e=e.dispatch=ZS.bind(null,At,e),[o.memoizedState,e]},useRef:function(e){var i=en();return e={current:e},i.memoizedState=e},useState:function(e){e=zf(e);var i=e.queue,a=_y.bind(null,At,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:qf,useDeferredValue:function(e,i){var a=en();return Hf(a,e,i)},useTransition:function(){var e=zf(!1);return e=dy.bind(null,At,e.queue,!0,!1),en().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var o=At,h=en();if(Vt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),Wt===null)throw Error(s(349));(It&127)!==0||qp(o,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,ry(Fp.bind(null,o,d,e),[e]),o.flags|=2048,ja(9,{destroy:void 0},Hp.bind(null,o,d,a,i),null),a},useId:function(){var e=en(),i=Wt.identifierPrefix;if(Vt){var a=wi,o=bi;a=(o&~(1<<32-fe(o)-1)).toString(32)+a,i="_"+i+"R_"+a,a=nc++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=GS++,i="_"+i+"r_"+a.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Gf,useFormState:Wp,useActionState:Wp,useOptimistic:function(e){var i=en();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Kf.bind(null,At,!0,a),a.dispatch=i,[e,i]},useMemoCache:Pf,useCacheRefresh:function(){return en().memoizedState=JS.bind(null,At)},useEffectEvent:function(e){var i=en(),a={impl:e};return i.memoizedState=a,function(){if((Bt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Yf={readContext:qe,use:rc,useCallback:cy,useContext:qe,useEffect:Bf,useImperativeHandle:uy,useInsertionEffect:ay,useLayoutEffect:oy,useMemo:hy,useReducer:sc,useRef:iy,useState:function(){return sc(Yi)},useDebugValue:qf,useDeferredValue:function(e,i){var a=ge();return fy(a,Qt.memoizedState,e,i)},useTransition:function(){var e=sc(Yi)[0],i=ge().memoizedState;return[typeof e=="boolean"?e:al(e),i]},useSyncExternalStore:Bp,useId:py,useHostTransitionStatus:Gf,useFormState:ty,useActionState:ty,useOptimistic:function(e,i){var a=ge();return Yp(a,Qt,e,i)},useMemoCache:Pf,useCacheRefresh:yy};Yf.useEffectEvent=sy;var Ay={readContext:qe,use:rc,useCallback:cy,useContext:qe,useEffect:Bf,useImperativeHandle:uy,useInsertionEffect:ay,useLayoutEffect:oy,useMemo:hy,useReducer:Uf,useRef:iy,useState:function(){return Uf(Yi)},useDebugValue:qf,useDeferredValue:function(e,i){var a=ge();return Qt===null?Hf(a,e,i):fy(a,Qt.memoizedState,e,i)},useTransition:function(){var e=Uf(Yi)[0],i=ge().memoizedState;return[typeof e=="boolean"?e:al(e),i]},useSyncExternalStore:Bp,useId:py,useHostTransitionStatus:Gf,useFormState:ny,useActionState:ny,useOptimistic:function(e,i){var a=ge();return Qt!==null?Yp(a,Qt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Pf,useCacheRefresh:yy};Ay.useEffectEvent=sy;function Qf(e,i,a,o){i=e.memoizedState,a=a(o,i),a=a==null?i:S({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Xf={enqueueSetState:function(e,i,a){e=e._reactInternals;var o=Tn(),h=Nr(o);h.payload=i,a!=null&&(h.callback=a),i=Dr(e,h,o),i!==null&&(cn(i,e,o),nl(i,e,o))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var o=Tn(),h=Nr(o);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Dr(e,h,o),i!==null&&(cn(i,e,o),nl(i,e,o))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=Tn(),o=Nr(a);o.tag=2,i!=null&&(o.callback=i),i=Dr(e,o,a),i!==null&&(cn(i,e,a),nl(i,e,a))}};function Sy(e,i,a,o,h,d,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,_):i.prototype&&i.prototype.isPureReactComponent?!Qo(a,o)||!Qo(h,d):!0}function by(e,i,a,o){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==e&&Xf.enqueueReplaceState(i,i.state,null)}function qs(e,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(e=e.defaultProps){a===i&&(a=S({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}function wy(e){ju(e)}function Ry(e){console.error(e)}function Iy(e){ju(e)}function uc(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function Cy(e,i,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function $f(e,i,a){return a=Nr(a),a.tag=3,a.payload={element:null},a.callback=function(){uc(e,i)},a}function Ny(e){return e=Nr(e),e.tag=3,e}function Dy(e,i,a,o){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=o.value;e.payload=function(){return h(d)},e.callback=function(){Cy(i,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Cy(i,a,o),typeof h!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function WS(e,i,a,o,h){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&Va(i,a,h,!0),a=yn.current,a!==null){switch(a.tag){case 31:case 13:return kn===null?Tc():a.alternate===null&&ce===0&&(ce=3),a.flags&=-257,a.flags|=65536,a.lanes=h,o===$u?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),Td(e,o,h)),!1;case 22:return a.flags|=65536,o===$u?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),Td(e,o,h)),!1}throw Error(s(435,a.tag))}return Td(e,o,h),Tc(),!1}if(Vt)return i=yn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,o!==gf&&(e=Error(s(422),{cause:o}),Jo(On(e,a)))):(o!==gf&&(i=Error(s(423),{cause:o}),Jo(On(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,o=On(o,a),h=$f(e.stateNode,o,h),Rf(e,h),ce!==4&&(ce=2)),!1;var d=Error(s(520),{cause:o});if(d=On(d,a),pl===null?pl=[d]:pl.push(d),ce!==4&&(ce=2),i===null)return!0;o=On(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=$f(a.stateNode,o,e),Rf(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Pr===null||!Pr.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=Ny(h),Dy(h,e,a,o),Rf(a,h),!1}a=a.return}while(a!==null);return!1}var Jf=Error(s(461)),we=!1;function He(e,i,a,o){i.child=e===null?xp(i,null,a,o):js(i,e.child,a,o)}function Oy(e,i,a,o,h){a=a.render;var d=i.ref;if("ref"in o){var _={};for(var E in o)E!=="ref"&&(_[E]=o[E])}else _=o;return Ps(i),o=Vf(e,i,a,_,d,h),E=Mf(),e!==null&&!we?(xf(e,i,h),Qi(e,i,h)):(Vt&&E&&df(i),i.flags|=1,He(e,i,o,h),i.child)}function Vy(e,i,a,o,h){if(e===null){var d=a.type;return typeof d=="function"&&!cf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,My(e,i,d,o,h)):(e=Fu(a.type,null,o,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!sd(e,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:Qo,a(_,o)&&e.ref===i.ref)return Qi(e,i,h)}return i.flags|=1,e=qi(d,o),e.ref=i.ref,e.return=i,i.child=e}function My(e,i,a,o,h){if(e!==null){var d=e.memoizedProps;if(Qo(d,o)&&e.ref===i.ref)if(we=!1,i.pendingProps=o=d,sd(e,h))(e.flags&131072)!==0&&(we=!0);else return i.lanes=e.lanes,Qi(e,i,h)}return Zf(e,i,a,o,h)}function xy(e,i,a,o){var h=o.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(o=i.child=e.child,h=0;o!==null;)h=h|o.lanes|o.childLanes,o=o.sibling;o=h&~d}else o=0,i.child=null;return ky(e,i,d,a,o)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qu(i,d!==null?d.cachePool:null),d!==null?Lp(i,d):Cf(),Up(i);else return o=i.lanes=536870912,ky(e,i,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Qu(i,d.cachePool),Lp(i,d),Vr(),i.memoizedState=null):(e!==null&&Qu(i,null),Cf(),Vr());return He(e,i,h,a),i.child}function ul(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function ky(e,i,a,o,h){var d=Af();return d=d===null?null:{parent:Se._currentValue,pool:d},i.memoizedState={baseLanes:a,cachePool:d},e!==null&&Qu(i,null),Cf(),Up(i),e!==null&&Va(e,i,o,!0),i.childLanes=h,null}function cc(e,i){return i=fc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function Py(e,i,a){return js(i,e.child,null,a),e=cc(i,i.pendingProps),e.flags|=2,_n(i),i.memoizedState=null,e}function tb(e,i,a){var o=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Vt){if(o.mode==="hidden")return e=cc(i,o),i.lanes=536870912,ul(null,e);if(Df(i),(e=ee)?(e=Q_(e,xn),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:br!==null?{id:bi,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=vp(e),a.return=i,i.child=a,Be=i,ee=null)):e=null,e===null)throw Rr(i);return i.lanes=536870912,null}return cc(i,o)}var d=e.memoizedState;if(d!==null){var _=d.dehydrated;if(Df(i),h)if(i.flags&256)i.flags&=-257,i=Py(e,i,a);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(s(558));else if(we||Va(e,i,a,!1),h=(a&e.childLanes)!==0,we||h){if(o=Wt,o!==null&&(_=Do(o,a),_!==0&&_!==d.retryLane))throw d.retryLane=_,Vs(e,_),cn(o,e,_),Jf;Tc(),i=Py(e,i,a)}else e=d.treeContext,ee=Pn(_.nextSibling),Be=i,Vt=!0,wr=null,xn=!1,e!==null&&Ap(i,e),i=cc(i,o),i.flags|=4096;return i}return e=qi(e.child,{mode:o.mode,children:o.children}),e.ref=i.ref,i.child=e,e.return=i,e}function hc(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Zf(e,i,a,o,h){return Ps(i),a=Vf(e,i,a,o,void 0,h),o=Mf(),e!==null&&!we?(xf(e,i,h),Qi(e,i,h)):(Vt&&o&&df(i),i.flags|=1,He(e,i,a,h),i.child)}function Ly(e,i,a,o,h,d){return Ps(i),i.updateQueue=null,a=jp(i,o,a,h),zp(e),o=Mf(),e!==null&&!we?(xf(e,i,d),Qi(e,i,d)):(Vt&&o&&df(i),i.flags|=1,He(e,i,a,d),i.child)}function Uy(e,i,a,o,h){if(Ps(i),i.stateNode===null){var d=Ca,_=a.contextType;typeof _=="object"&&_!==null&&(d=qe(_)),d=new a(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=Xf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},bf(i),_=a.contextType,d.context=typeof _=="object"&&_!==null?qe(_):Ca,d.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Qf(i,a,_,o),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&Xf.enqueueReplaceState(d,d.state,null),rl(i,o,d,h),il(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(e===null){d=i.stateNode;var E=i.memoizedProps,I=qs(a,E);d.props=I;var U=d.context,F=a.contextType;_=Ca,typeof F=="object"&&F!==null&&(_=qe(F));var Q=a.getDerivedStateFromProps;F=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||U!==_)&&by(i,d,o,_),Cr=!1;var z=i.memoizedState;d.state=z,rl(i,o,d,h),il(),U=i.memoizedState,E||z!==U||Cr?(typeof Q=="function"&&(Qf(i,a,Q,o),U=i.memoizedState),(I=Cr||Sy(i,a,I,o,z,U,_))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=U),d.props=o,d.state=U,d.context=_,o=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,wf(e,i),_=i.memoizedProps,F=qs(a,_),d.props=F,Q=i.pendingProps,z=d.context,U=a.contextType,I=Ca,typeof U=="object"&&U!==null&&(I=qe(U)),E=a.getDerivedStateFromProps,(U=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==Q||z!==I)&&by(i,d,o,I),Cr=!1,z=i.memoizedState,d.state=z,rl(i,o,d,h),il();var q=i.memoizedState;_!==Q||z!==q||Cr||e!==null&&e.dependencies!==null&&Ku(e.dependencies)?(typeof E=="function"&&(Qf(i,a,E,o),q=i.memoizedState),(F=Cr||Sy(i,a,F,o,z,q,I)||e!==null&&e.dependencies!==null&&Ku(e.dependencies))?(U||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,q,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,q,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=q),d.props=o,d.state=q,d.context=I,o=F):(typeof d.componentDidUpdate!="function"||_===e.memoizedProps&&z===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&z===e.memoizedState||(i.flags|=1024),o=!1)}return d=o,hc(e,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&o?(i.child=js(i,e.child,null,h),i.child=js(i,null,a,h)):He(e,i,a,h),i.memoizedState=d.state,e=i.child):e=Qi(e,i,h),e}function zy(e,i,a,o){return xs(),i.flags|=256,He(e,i,a,o),i.child}var Wf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function td(e){return{baseLanes:e,cachePool:Cp()}}function ed(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=En),e}function jy(e,i,a){var o=i.pendingProps,h=!1,d=(i.flags&128)!==0,_;if((_=d)||(_=e!==null&&e.memoizedState===null?!1:(me.current&2)!==0),_&&(h=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,e===null){if(Vt){if(h?Or(i):Vr(),(e=ee)?(e=Q_(e,xn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:br!==null?{id:bi,overflow:wi}:null,retryLane:536870912,hydrationErrors:null},a=vp(e),a.return=i,i.child=a,Be=i,ee=null)):e=null,e===null)throw Rr(i);return Ld(e)?i.lanes=32:i.lanes=536870912,null}var E=o.children;return o=o.fallback,h?(Vr(),h=i.mode,E=fc({mode:"hidden",children:E},h),o=Ms(o,h,a,null),E.return=i,o.return=i,E.sibling=o,i.child=E,o=i.child,o.memoizedState=td(a),o.childLanes=ed(e,_,a),i.memoizedState=Wf,ul(null,o)):(Or(i),nd(i,E))}var I=e.memoizedState;if(I!==null&&(E=I.dehydrated,E!==null)){if(d)i.flags&256?(Or(i),i.flags&=-257,i=id(e,i,a)):i.memoizedState!==null?(Vr(),i.child=e.child,i.flags|=128,i=null):(Vr(),E=o.fallback,h=i.mode,o=fc({mode:"visible",children:o.children},h),E=Ms(E,h,a,null),E.flags|=2,o.return=i,E.return=i,o.sibling=E,i.child=o,js(i,e.child,null,a),o=i.child,o.memoizedState=td(a),o.childLanes=ed(e,_,a),i.memoizedState=Wf,i=ul(null,o));else if(Or(i),Ld(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var U=_.dgst;_=U,o=Error(s(419)),o.stack="",o.digest=_,Jo({value:o,source:null,stack:null}),i=id(e,i,a)}else if(we||Va(e,i,a,!1),_=(a&e.childLanes)!==0,we||_){if(_=Wt,_!==null&&(o=Do(_,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,Vs(e,o),cn(_,e,o),Jf;Pd(E)||Tc(),i=id(e,i,a)}else Pd(E)?(i.flags|=192,i.child=e.child,i=null):(e=I.treeContext,ee=Pn(E.nextSibling),Be=i,Vt=!0,wr=null,xn=!1,e!==null&&Ap(i,e),i=nd(i,o.children),i.flags|=4096);return i}return h?(Vr(),E=o.fallback,h=i.mode,I=e.child,U=I.sibling,o=qi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,U!==null?E=qi(U,E):(E=Ms(E,h,a,null),E.flags|=2),E.return=i,o.return=i,o.sibling=E,i.child=o,ul(null,o),o=i.child,E=e.child.memoizedState,E===null?E=td(a):(h=E.cachePool,h!==null?(I=Se._currentValue,h=h.parent!==I?{parent:I,pool:I}:h):h=Cp(),E={baseLanes:E.baseLanes|a,cachePool:h}),o.memoizedState=E,o.childLanes=ed(e,_,a),i.memoizedState=Wf,ul(e.child,o)):(Or(i),a=e.child,e=a.sibling,a=qi(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,e!==null&&(_=i.deletions,_===null?(i.deletions=[e],i.flags|=16):_.push(e)),i.child=a,i.memoizedState=null,a)}function nd(e,i){return i=fc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function fc(e,i){return e=pn(22,e,null,i),e.lanes=0,e}function id(e,i,a){return js(i,e.child,null,a),e=nd(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function By(e,i,a){e.lanes|=i;var o=e.alternate;o!==null&&(o.lanes|=i),_f(e.return,i,a)}function rd(e,i,a,o,h,d){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:h,treeForkCount:d}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=h,_.treeForkCount=d)}function qy(e,i,a){var o=i.pendingProps,h=o.revealOrder,d=o.tail;o=o.children;var _=me.current,E=(_&2)!==0;if(E?(_=_&1|2,i.flags|=128):_&=1,nt(me,_),He(e,i,o,a),o=Vt?$o:0,!E&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&By(e,a,i);else if(e.tag===19)By(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&tc(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),rd(i,!1,h,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&tc(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}rd(i,!0,a,null,d,o);break;case"together":rd(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function Qi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),kr|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(Va(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(s(153));if(i.child!==null){for(e=i.child,a=qi(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=qi(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function sd(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Ku(e)))}function eb(e,i,a){switch(i.tag){case 3:Oe(i,i.stateNode.containerInfo),Ir(i,Se,e.memoizedState.cache),xs();break;case 27:case 5:ms(i);break;case 4:Oe(i,i.stateNode.containerInfo);break;case 10:Ir(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,Df(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Or(i),i.flags|=128,null):(a&i.child.childLanes)!==0?jy(e,i,a):(Or(i),e=Qi(e,i,a),e!==null?e.sibling:null);Or(i);break;case 19:var h=(e.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(Va(e,i,a,!1),o=(a&i.childLanes)!==0),h){if(o)return qy(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),nt(me,me.current),o)break;return null;case 22:return i.lanes=0,xy(e,i,a,i.pendingProps);case 24:Ir(i,Se,e.memoizedState.cache)}return Qi(e,i,a)}function Hy(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)we=!0;else{if(!sd(e,a)&&(i.flags&128)===0)return we=!1,eb(e,i,a);we=(e.flags&131072)!==0}else we=!1,Vt&&(i.flags&1048576)!==0&&Tp(i,$o,i.index);switch(i.lanes=0,i.tag){case 16:t:{var o=i.pendingProps;if(e=Us(i.elementType),i.type=e,typeof e=="function")cf(e)?(o=qs(e,o),i.tag=1,i=Uy(null,i,e,o,a)):(i.tag=0,i=Zf(null,i,e,o,a));else{if(e!=null){var h=e.$$typeof;if(h===Jt){i.tag=11,i=Oy(null,i,e,o,a);break t}else if(h===N){i.tag=14,i=Vy(null,i,e,o,a);break t}}throw i=re(e)||e,Error(s(306,i,""))}}return i;case 0:return Zf(e,i,i.type,i.pendingProps,a);case 1:return o=i.type,h=qs(o,i.pendingProps),Uy(e,i,o,h,a);case 3:t:{if(Oe(i,i.stateNode.containerInfo),e===null)throw Error(s(387));o=i.pendingProps;var d=i.memoizedState;h=d.element,wf(e,i),rl(i,o,null,a);var _=i.memoizedState;if(o=_.cache,Ir(i,Se,o),o!==d.cache&&vf(i,[Se],a,!0),il(),o=_.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=zy(e,i,o,a);break t}else if(o!==h){h=On(Error(s(424)),i),Jo(h),i=zy(e,i,o,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(ee=Pn(e.firstChild),Be=i,Vt=!0,wr=null,xn=!0,a=xp(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xs(),o===h){i=Qi(e,i,a);break t}He(e,i,o,a)}i=i.child}return i;case 26:return hc(e,i),e===null?(a=tv(i.type,null,i.pendingProps,null))?i.memoizedState=a:Vt||(a=i.type,e=i.pendingProps,o=Cc(St.current).createElement(a),o[Ee]=i,o[ke]=e,Fe(o,a,e),Te(o),i.stateNode=o):i.memoizedState=tv(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ms(i),e===null&&Vt&&(o=i.stateNode=J_(i.type,i.pendingProps,St.current),Be=i,xn=!0,h=ee,jr(i.type)?(Ud=h,ee=Pn(o.firstChild)):ee=h),He(e,i,i.pendingProps.children,a),hc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Vt&&((h=o=ee)&&(o=Ob(o,i.type,i.pendingProps,xn),o!==null?(i.stateNode=o,Be=i,ee=Pn(o.firstChild),xn=!1,h=!0):h=!1),h||Rr(i)),ms(i),h=i.type,d=i.pendingProps,_=e!==null?e.memoizedProps:null,o=d.children,Md(h,d)?o=null:_!==null&&Md(h,_)&&(i.flags|=32),i.memoizedState!==null&&(h=Vf(e,i,KS,null,null,a),bl._currentValue=h),hc(e,i),He(e,i,o,a),i.child;case 6:return e===null&&Vt&&((e=a=ee)&&(a=Vb(a,i.pendingProps,xn),a!==null?(i.stateNode=a,Be=i,ee=null,e=!0):e=!1),e||Rr(i)),null;case 13:return jy(e,i,a);case 4:return Oe(i,i.stateNode.containerInfo),o=i.pendingProps,e===null?i.child=js(i,null,o,a):He(e,i,o,a),i.child;case 11:return Oy(e,i,i.type,i.pendingProps,a);case 7:return He(e,i,i.pendingProps,a),i.child;case 8:return He(e,i,i.pendingProps.children,a),i.child;case 12:return He(e,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,Ir(i,i.type,o.value),He(e,i,o.children,a),i.child;case 9:return h=i.type._context,o=i.pendingProps.children,Ps(i),h=qe(h),o=o(h),i.flags|=1,He(e,i,o,a),i.child;case 14:return Vy(e,i,i.type,i.pendingProps,a);case 15:return My(e,i,i.type,i.pendingProps,a);case 19:return qy(e,i,a);case 31:return tb(e,i,a);case 22:return xy(e,i,a,i.pendingProps);case 24:return Ps(i),o=qe(Se),e===null?(h=Af(),h===null&&(h=Wt,d=Ef(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:o,cache:h},bf(i),Ir(i,Se,h)):((e.lanes&a)!==0&&(wf(e,i),rl(i,null,null,a),il()),h=e.memoizedState,d=i.memoizedState,h.parent!==o?(h={parent:o,cache:o},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Ir(i,Se,o)):(o=d.cache,Ir(i,Se,o),o!==h.cache&&vf(i,[Se],a,!0))),He(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function Xi(e){e.flags|=4}function ad(e,i,a,o,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(p_())e.flags|=8192;else throw zs=$u,Sf}else e.flags&=-16777217}function Fy(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sv(i))if(p_())e.flags|=8192;else throw zs=$u,Sf}function dc(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?vu():536870912,e.lanes|=i,Fa|=i)}function cl(e,i){if(!Vt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function ne(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=o,e.childLanes=a,i}function nb(e,i,a){var o=i.pendingProps;switch(mf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ne(i),null;case 1:return ne(i),null;case 3:return a=i.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Gi(Se),se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Oa(i)?Xi(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,pf())),ne(i),null;case 26:var h=i.type,d=i.memoizedState;return e===null?(Xi(i),d!==null?(ne(i),Fy(i,d)):(ne(i),ad(i,h,null,o,a))):d?d!==e.memoizedState?(Xi(i),ne(i),Fy(i,d)):(ne(i),i.flags&=-16777217):(e=e.memoizedProps,e!==o&&Xi(i),ne(i),ad(i,h,e,o,a)),null;case 27:if(ua(i),a=St.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Xi(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return ne(i),null}e=st.current,Oa(i)?Sp(i):(e=J_(h,o,a),i.stateNode=e,Xi(i))}return ne(i),null;case 5:if(ua(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==o&&Xi(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return ne(i),null}if(d=st.current,Oa(i))Sp(i);else{var _=Cc(St.current);switch(d){case 1:d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":d=_.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?_.createElement(h,{is:o.is}):_.createElement(h)}}d[Ee]=i,d[ke]=o;t:for(_=i.child;_!==null;){if(_.tag===5||_.tag===6)d.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===i)break t;for(;_.sibling===null;){if(_.return===null||_.return===i)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}i.stateNode=d;t:switch(Fe(d,h,o),h){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Xi(i)}}return ne(i),ad(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,a),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==o&&Xi(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(e=St.current,Oa(i)){if(e=i.stateNode,a=i.memoizedProps,o=null,h=Be,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}e[Ee]=i,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||j_(e.nodeValue,a)),e||Rr(i,!0)}else e=Cc(e).createTextNode(o),e[Ee]=i,i.stateNode=e}return ne(i),null;case 31:if(a=i.memoizedState,e===null||e.memoizedState!==null){if(o=Oa(i),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Ee]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ne(i),e=!1}else a=pf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return i.flags&256?(_n(i),i):(_n(i),null);if((i.flags&128)!==0)throw Error(s(558))}return ne(i),null;case 13:if(o=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Oa(i),o!==null&&o.dehydrated!==null){if(e===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Ee]=i}else xs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ne(i),h=!1}else h=pf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(_n(i),i):(_n(i),null)}return _n(i),(i.flags&128)!==0?(i.lanes=a,i):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=i.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==h&&(o.flags|=2048)),a!==e&&a&&(i.child.flags|=8192),dc(i,i.updateQueue),ne(i),null);case 4:return se(),e===null&&Cd(i.stateNode.containerInfo),ne(i),null;case 10:return Gi(i.type),ne(i),null;case 19:if(X(me),o=i.memoizedState,o===null)return ne(i),null;if(h=(i.flags&128)!==0,d=o.rendering,d===null)if(h)cl(o,!1);else{if(ce!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=tc(e),d!==null){for(i.flags|=128,cl(o,!1),e=d.updateQueue,i.updateQueue=e,dc(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)_p(a,e),a=a.sibling;return nt(me,me.current&1|2),Vt&&Hi(i,o.treeForkCount),i.child}e=e.sibling}o.tail!==null&&We()>_c&&(i.flags|=128,h=!0,cl(o,!1),i.lanes=4194304)}else{if(!h)if(e=tc(d),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,dc(i,e),cl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Vt)return ne(i),null}else 2*We()-o.renderingStartTime>_c&&a!==536870912&&(i.flags|=128,h=!0,cl(o,!1),i.lanes=4194304);o.isBackwards?(d.sibling=i.child,i.child=d):(e=o.last,e!==null?e.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=We(),e.sibling=null,a=me.current,nt(me,h?a&1|2:a&1),Vt&&Hi(i,o.treeForkCount),e):(ne(i),null);case 22:case 23:return _n(i),Nf(),o=i.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(ne(i),i.subtreeFlags&6&&(i.flags|=8192)):ne(i),a=i.updateQueue,a!==null&&dc(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),e!==null&&X(Ls),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Gi(Se),ne(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function ib(e,i){switch(mf(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Gi(Se),se(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return ua(i),null;case 31:if(i.memoizedState!==null){if(_n(i),i.alternate===null)throw Error(s(340));xs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(_n(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(s(340));xs()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return X(me),null;case 4:return se(),null;case 10:return Gi(i.type),null;case 22:case 23:return _n(i),Nf(),e!==null&&X(Ls),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Gi(Se),null;case 25:return null;default:return null}}function Gy(e,i){switch(mf(i),i.tag){case 3:Gi(Se),se();break;case 26:case 27:case 5:ua(i);break;case 4:se();break;case 31:i.memoizedState!==null&&_n(i);break;case 13:_n(i);break;case 19:X(me);break;case 10:Gi(i.type);break;case 22:case 23:_n(i),Nf(),e!==null&&X(Ls);break;case 24:Gi(Se)}}function hl(e,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var h=o.next;a=h;do{if((a.tag&e)===e){o=void 0;var d=a.create,_=a.inst;o=d(),_.destroy=o}a=a.next}while(a!==h)}}catch(E){Kt(i,i.return,E)}}function Mr(e,i,a){try{var o=i.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var d=h.next;o=d;do{if((o.tag&e)===e){var _=o.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,h=i;var I=a,U=E;try{U()}catch(F){Kt(h,I,F)}}}o=o.next}while(o!==d)}}catch(F){Kt(i,i.return,F)}}function Ky(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{Pp(i,a)}catch(o){Kt(e,e.return,o)}}}function Yy(e,i,a){a.props=qs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Kt(e,i,o)}}function fl(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(h){Kt(e,i,h)}}function Ri(e,i){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(h){Kt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Kt(e,i,h)}else a.current=null}function Qy(e){var i=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(h){Kt(e,e.return,h)}}function od(e,i,a){try{var o=e.stateNode;wb(o,e.type,a,i),o[ke]=i}catch(h){Kt(e,e.return,h)}}function Xy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&jr(e.type)||e.tag===4}function ld(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Xy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&jr(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ud(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Gn));else if(o!==4&&(o===27&&jr(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(ud(e,i,a),e=e.sibling;e!==null;)ud(e,i,a),e=e.sibling}function mc(e,i,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(o!==4&&(o===27&&jr(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(mc(e,i,a),e=e.sibling;e!==null;)mc(e,i,a),e=e.sibling}function $y(e){var i=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Fe(i,o,a),i[Ee]=e,i[ke]=a}catch(d){Kt(e,e.return,d)}}var $i=!1,Re=!1,cd=!1,Jy=typeof WeakSet=="function"?WeakSet:Set,Le=null;function rb(e,i){if(e=e.containerInfo,Od=kc,e=up(e),nf(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var h=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var _=0,E=-1,I=-1,U=0,F=0,Q=e,z=null;e:for(;;){for(var q;Q!==a||h!==0&&Q.nodeType!==3||(E=_+h),Q!==d||o!==0&&Q.nodeType!==3||(I=_+o),Q.nodeType===3&&(_+=Q.nodeValue.length),(q=Q.firstChild)!==null;)z=Q,Q=q;for(;;){if(Q===e)break e;if(z===a&&++U===h&&(E=_),z===d&&++F===o&&(I=_),(q=Q.nextSibling)!==null)break;Q=z,z=Q.parentNode}Q=q}a=E===-1||I===-1?null:{start:E,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vd={focusedElem:e,selectionRange:a},kc=!1,Le=i;Le!==null;)if(i=Le,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Le=e;else for(;Le!==null;){switch(i=Le,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)h=e[a],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var at=qs(a.type,h);e=o.getSnapshotBeforeUpdate(at,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ht){Kt(a,a.return,ht)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)kd(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":kd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=i.sibling,e!==null){e.return=i.return,Le=e;break}Le=i.return}}function Zy(e,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(e,a),o&4&&hl(5,a);break;case 1:if(Zi(e,a),o&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(_){Kt(a,a.return,_)}else{var h=qs(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Kt(a,a.return,_)}}o&64&&Ky(a),o&512&&fl(a,a.return);break;case 3:if(Zi(e,a),o&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{Pp(e,i)}catch(_){Kt(a,a.return,_)}}break;case 27:i===null&&o&4&&$y(a);case 26:case 5:Zi(e,a),i===null&&o&4&&Qy(a),o&512&&fl(a,a.return);break;case 12:Zi(e,a);break;case 31:Zi(e,a),o&4&&e_(e,a);break;case 13:Zi(e,a),o&4&&n_(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=db.bind(null,a),Mb(e,a))));break;case 22:if(o=a.memoizedState!==null||$i,!o){i=i!==null&&i.memoizedState!==null||Re,h=$i;var d=Re;$i=o,(Re=i)&&!d?Wi(e,a,(a.subtreeFlags&8772)!==0):Zi(e,a),$i=h,Re=d}break;case 30:break;default:Zi(e,a)}}function Wy(e){var i=e.alternate;i!==null&&(e.alternate=null,Wy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ma(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var oe=null,an=!1;function Ji(e,i,a){for(a=a.child;a!==null;)t_(e,i,a),a=a.sibling}function t_(e,i,a){if(ze&&typeof ze.onCommitFiberUnmount=="function")try{ze.onCommitFiberUnmount(Bn,a)}catch{}switch(a.tag){case 26:Re||Ri(a,i),Ji(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Re||Ri(a,i);var o=oe,h=an;jr(a.type)&&(oe=a.stateNode,an=!1),Ji(e,i,a),Tl(a.stateNode),oe=o,an=h;break;case 5:Re||Ri(a,i);case 6:if(o=oe,h=an,oe=null,Ji(e,i,a),oe=o,an=h,oe!==null)if(an)try{(oe.nodeType===9?oe.body:oe.nodeName==="HTML"?oe.ownerDocument.body:oe).removeChild(a.stateNode)}catch(d){Kt(a,i,d)}else try{oe.removeChild(a.stateNode)}catch(d){Kt(a,i,d)}break;case 18:oe!==null&&(an?(e=oe,K_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Za(e)):K_(oe,a.stateNode));break;case 4:o=oe,h=an,oe=a.stateNode.containerInfo,an=!0,Ji(e,i,a),oe=o,an=h;break;case 0:case 11:case 14:case 15:Mr(2,a,i),Re||Mr(4,a,i),Ji(e,i,a);break;case 1:Re||(Ri(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Yy(a,i,o)),Ji(e,i,a);break;case 21:Ji(e,i,a);break;case 22:Re=(o=Re)||a.memoizedState!==null,Ji(e,i,a),Re=o;break;default:Ji(e,i,a)}}function e_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Za(e)}catch(a){Kt(i,i.return,a)}}}function n_(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Za(e)}catch(a){Kt(i,i.return,a)}}function sb(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Jy),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Jy),i;default:throw Error(s(435,e.tag))}}function gc(e,i){var a=sb(e);i.forEach(function(o){if(!a.has(o)){a.add(o);var h=mb.bind(null,e,o);o.then(h,h)}})}function on(e,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var h=a[o],d=e,_=i,E=_;t:for(;E!==null;){switch(E.tag){case 27:if(jr(E.type)){oe=E.stateNode,an=!1;break t}break;case 5:oe=E.stateNode,an=!1;break t;case 3:case 4:oe=E.stateNode.containerInfo,an=!0;break t}E=E.return}if(oe===null)throw Error(s(160));t_(d,_,h),oe=null,an=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)i_(i,e),i=i.sibling}var Jn=null;function i_(e,i){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:on(i,e),ln(e),o&4&&(Mr(3,e,e.return),hl(3,e),Mr(5,e,e.return));break;case 1:on(i,e),ln(e),o&512&&(Re||a===null||Ri(a,a.return)),o&64&&$i&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var h=Jn;if(on(i,e),ln(e),o&512&&(Re||a===null||Ri(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(o){case"title":d=h.getElementsByTagName("title")[0],(!d||d[fi]||d[Ee]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(o),h.head.insertBefore(d,h.querySelector("head > title"))),Fe(d,o,a),d[Ee]=e,Te(d),o=d;break t;case"link":var _=iv("link","href",h).get(o+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(d=_[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break e}}d=h.createElement(o),Fe(d,o,a),h.head.appendChild(d);break;case"meta":if(_=iv("meta","content",h).get(o+(a.content||""))){for(E=0;E<_.length;E++)if(d=_[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break e}}d=h.createElement(o),Fe(d,o,a),h.head.appendChild(d);break;default:throw Error(s(468,o))}d[Ee]=e,Te(d),o=d}e.stateNode=o}else rv(h,e.type,e.stateNode);else e.stateNode=nv(h,o,e.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?rv(h,e.type,e.stateNode):nv(h,o,e.memoizedProps)):o===null&&e.stateNode!==null&&od(e,e.memoizedProps,a.memoizedProps)}break;case 27:on(i,e),ln(e),o&512&&(Re||a===null||Ri(a,a.return)),a!==null&&o&4&&od(e,e.memoizedProps,a.memoizedProps);break;case 5:if(on(i,e),ln(e),o&512&&(Re||a===null||Ri(a,a.return)),e.flags&32){h=e.stateNode;try{sn(h,"")}catch(at){Kt(e,e.return,at)}}o&4&&e.stateNode!=null&&(h=e.memoizedProps,od(e,h,a!==null?a.memoizedProps:h)),o&1024&&(cd=!0);break;case 6:if(on(i,e),ln(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(at){Kt(e,e.return,at)}}break;case 3:if(Oc=null,h=Jn,Jn=Nc(i.containerInfo),on(i,e),Jn=h,ln(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Za(i.containerInfo)}catch(at){Kt(e,e.return,at)}cd&&(cd=!1,r_(e));break;case 4:o=Jn,Jn=Nc(e.stateNode.containerInfo),on(i,e),ln(e),Jn=o;break;case 12:on(i,e),ln(e);break;case 31:on(i,e),ln(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,gc(e,o)));break;case 13:on(i,e),ln(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yc=We()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,gc(e,o)));break;case 22:h=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,U=$i,F=Re;if($i=U||h,Re=F||I,on(i,e),Re=F,$i=U,ln(e),o&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||I||$i||Re||Hs(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){I=a=i;try{if(d=I.stateNode,h)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=I.stateNode;var Q=I.memoizedProps.style,z=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;E.style.display=z==null||typeof z=="boolean"?"":(""+z).trim()}}catch(at){Kt(I,I.return,at)}}}else if(i.tag===6){if(a===null){I=i;try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(at){Kt(I,I.return,at)}}}else if(i.tag===18){if(a===null){I=i;try{var q=I.stateNode;h?Y_(q,!0):Y_(I.stateNode,!1)}catch(at){Kt(I,I.return,at)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,gc(e,a))));break;case 19:on(i,e),ln(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,gc(e,o)));break;case 30:break;case 21:break;default:on(i,e),ln(e)}}function ln(e){var i=e.flags;if(i&2){try{for(var a,o=e.return;o!==null;){if(Xy(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=ld(e);mc(e,d,h);break;case 5:var _=a.stateNode;a.flags&32&&(sn(_,""),a.flags&=-33);var E=ld(e);mc(e,E,_);break;case 3:case 4:var I=a.stateNode.containerInfo,U=ld(e);ud(e,U,I);break;default:throw Error(s(161))}}catch(F){Kt(e,e.return,F)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function r_(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;r_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Zi(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Zy(e,i.alternate,i),i=i.sibling}function Hs(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Mr(4,i,i.return),Hs(i);break;case 1:Ri(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Yy(i,i.return,a),Hs(i);break;case 27:Tl(i.stateNode);case 26:case 5:Ri(i,i.return),Hs(i);break;case 22:i.memoizedState===null&&Hs(i);break;case 30:Hs(i);break;default:Hs(i)}e=e.sibling}}function Wi(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,h=e,d=i,_=d.flags;switch(d.tag){case 0:case 11:case 15:Wi(h,d,a),hl(4,d);break;case 1:if(Wi(h,d,a),o=d,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(U){Kt(o,o.return,U)}if(o=d,h=o.updateQueue,h!==null){var E=o.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)kp(I[h],E)}catch(U){Kt(o,o.return,U)}}a&&_&64&&Ky(d),fl(d,d.return);break;case 27:$y(d);case 26:case 5:Wi(h,d,a),a&&o===null&&_&4&&Qy(d),fl(d,d.return);break;case 12:Wi(h,d,a);break;case 31:Wi(h,d,a),a&&_&4&&e_(h,d);break;case 13:Wi(h,d,a),a&&_&4&&n_(h,d);break;case 22:d.memoizedState===null&&Wi(h,d,a),fl(d,d.return);break;case 30:break;default:Wi(h,d,a)}i=i.sibling}}function hd(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Zo(a))}function fd(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Zo(e))}function Zn(e,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)s_(e,i,a,o),i=i.sibling}function s_(e,i,a,o){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Zn(e,i,a,o),h&2048&&hl(9,i);break;case 1:Zn(e,i,a,o);break;case 3:Zn(e,i,a,o),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Zo(e)));break;case 12:if(h&2048){Zn(e,i,a,o),e=i.stateNode;try{var d=i.memoizedProps,_=d.id,E=d.onPostCommit;typeof E=="function"&&E(_,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Kt(i,i.return,I)}}else Zn(e,i,a,o);break;case 31:Zn(e,i,a,o);break;case 13:Zn(e,i,a,o);break;case 23:break;case 22:d=i.stateNode,_=i.alternate,i.memoizedState!==null?d._visibility&2?Zn(e,i,a,o):dl(e,i):d._visibility&2?Zn(e,i,a,o):(d._visibility|=2,Ba(e,i,a,o,(i.subtreeFlags&10256)!==0||!1)),h&2048&&hd(_,i);break;case 24:Zn(e,i,a,o),h&2048&&fd(i.alternate,i);break;default:Zn(e,i,a,o)}}function Ba(e,i,a,o,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,_=i,E=a,I=o,U=_.flags;switch(_.tag){case 0:case 11:case 15:Ba(d,_,E,I,h),hl(8,_);break;case 23:break;case 22:var F=_.stateNode;_.memoizedState!==null?F._visibility&2?Ba(d,_,E,I,h):dl(d,_):(F._visibility|=2,Ba(d,_,E,I,h)),h&&U&2048&&hd(_.alternate,_);break;case 24:Ba(d,_,E,I,h),h&&U&2048&&fd(_.alternate,_);break;default:Ba(d,_,E,I,h)}i=i.sibling}}function dl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,o=i,h=o.flags;switch(o.tag){case 22:dl(a,o),h&2048&&hd(o.alternate,o);break;case 24:dl(a,o),h&2048&&fd(o.alternate,o);break;default:dl(a,o)}i=i.sibling}}var ml=8192;function qa(e,i,a){if(e.subtreeFlags&ml)for(e=e.child;e!==null;)a_(e,i,a),e=e.sibling}function a_(e,i,a){switch(e.tag){case 26:qa(e,i,a),e.flags&ml&&e.memoizedState!==null&&Gb(a,Jn,e.memoizedState,e.memoizedProps);break;case 5:qa(e,i,a);break;case 3:case 4:var o=Jn;Jn=Nc(e.stateNode.containerInfo),qa(e,i,a),Jn=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=ml,ml=16777216,qa(e,i,a),ml=o):qa(e,i,a));break;default:qa(e,i,a)}}function o_(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function gl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Le=o,u_(o,e)}o_(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)l_(e),e=e.sibling}function l_(e){switch(e.tag){case 0:case 11:case 15:gl(e),e.flags&2048&&Mr(9,e,e.return);break;case 3:gl(e);break;case 12:gl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,pc(e)):gl(e);break;default:gl(e)}}function pc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Le=o,u_(o,e)}o_(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Mr(8,i,i.return),pc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,pc(i));break;default:pc(i)}e=e.sibling}}function u_(e,i){for(;Le!==null;){var a=Le;switch(a.tag){case 0:case 11:case 15:Mr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Zo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Le=o;else t:for(a=e;Le!==null;){o=Le;var h=o.sibling,d=o.return;if(Wy(o),o===a){Le=null;break t}if(h!==null){h.return=d,Le=h;break t}Le=d}}}var ab={getCacheForType:function(e){var i=qe(Se),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a},cacheSignal:function(){return qe(Se).controller.signal}},ob=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Wt=null,wt=null,It=0,Gt=0,vn=null,xr=!1,Ha=!1,dd=!1,tr=0,ce=0,kr=0,Fs=0,md=0,En=0,Fa=0,pl=null,un=null,gd=!1,yc=0,c_=0,_c=1/0,vc=null,Pr=null,Me=0,Lr=null,Ga=null,er=0,pd=0,yd=null,h_=null,yl=0,_d=null;function Tn(){return(Bt&2)!==0&&It!==0?It&-It:G.T!==null?bd():Eu()}function f_(){if(En===0)if((It&536870912)===0||Vt){var e=ys;ys<<=1,(ys&3932160)===0&&(ys=262144),En=e}else En=536870912;return e=yn.current,e!==null&&(e.flags|=32),En}function cn(e,i,a){(e===Wt&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)&&(Ka(e,0),Ur(e,It,En,!1)),_s(e,a),((Bt&2)===0||e!==Wt)&&(e===Wt&&((Bt&2)===0&&(Fs|=a),ce===4&&Ur(e,It,En,!1)),Ii(e))}function d_(e,i,a){if((Bt&6)!==0)throw Error(s(327));var o=!a&&(i&127)===0&&(i&e.expiredLanes)===0||qn(e,i),h=o?cb(e,i):Ed(e,i,!0),d=o;do{if(h===0){Ha&&!o&&Ur(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!lb(a)){h=Ed(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;t:{var E=e;h=pl;var I=E.current.memoizedState.isDehydrated;if(I&&(Ka(E,_).flags|=256),_=Ed(E,_,!1),_!==2){if(dd&&!I){E.errorRecoveryDisabledLanes|=d,Fs|=d,h=4;break t}d=un,un=h,d!==null&&(un===null?un=d:un.push.apply(un,d))}h=_}if(d=!1,h!==2)continue}}if(h===1){Ka(e,0),Ur(e,i,0,!0);break}t:{switch(o=e,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:Ur(o,i,En,!xr);break t;case 2:un=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=yc+300-We(),10<h)){if(Ur(o,i,En,!xr),ui(o,0,!0)!==0)break t;er=i,o.timeoutHandle=F_(m_.bind(null,o,a,un,vc,gd,i,En,Fs,Fa,xr,d,"Throttled",-0,0),h);break t}m_(o,a,un,vc,gd,i,En,Fs,Fa,xr,d,null,-0,0)}}break}while(!0);Ii(e)}function m_(e,i,a,o,h,d,_,E,I,U,F,Q,z,q){if(e.timeoutHandle=-1,Q=i.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Gn},a_(i,d,Q);var at=(d&62914560)===d?yc-We():(d&4194048)===d?c_-We():0;if(at=Kb(Q,at),at!==null){er=d,e.cancelPendingCommit=at(A_.bind(null,e,i,d,a,o,h,_,E,I,F,Q,null,z,q)),Ur(e,d,_,!U);return}}A_(e,i,d,a,o,h,_,E,I)}function lb(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var h=a[o],d=h.getSnapshot;h=h.value;try{if(!gn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ur(e,i,a,o){i&=~md,i&=~Fs,e.suspendedLanes|=i,e.pingedLanes&=~i,o&&(e.warmLanes|=i),o=e.expirationTimes;for(var h=i;0<h;){var d=31-fe(h),_=1<<d;o[d]=-1,h&=~_}a!==0&&vs(e,a,i)}function Ec(){return(Bt&6)===0?(_l(0),!1):!0}function vd(){if(wt!==null){if(Gt===0)var e=wt.return;else e=wt,Fi=ks=null,kf(e),Pa=null,tl=0,e=wt;for(;e!==null;)Gy(e.alternate,e),e=e.return;wt=null}}function Ka(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Cb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),er=0,vd(),Wt=e,wt=a=qi(e.current,null),It=i,Gt=0,vn=null,xr=!1,Ha=qn(e,i),dd=!1,Fa=En=md=Fs=kr=ce=0,un=pl=null,gd=!1,(i&8)!==0&&(i|=i&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=i;0<o;){var h=31-fe(o),d=1<<h;i|=e[h],o&=~d}return tr=i,Bu(),a}function g_(e,i){At=null,G.H=ll,i===ka||i===Xu?(i=Op(),Gt=3):i===Sf?(i=Op(),Gt=4):Gt=i===Jf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,vn=i,wt===null&&(ce=1,uc(e,On(i,e.current)))}function p_(){var e=yn.current;return e===null?!0:(It&4194048)===It?kn===null:(It&62914560)===It||(It&536870912)!==0?e===kn:!1}function y_(){var e=G.H;return G.H=ll,e===null?ll:e}function __(){var e=G.A;return G.A=ab,e}function Tc(){ce=4,xr||(It&4194048)!==It&&yn.current!==null||(Ha=!0),(kr&134217727)===0&&(Fs&134217727)===0||Wt===null||Ur(Wt,It,En,!1)}function Ed(e,i,a){var o=Bt;Bt|=2;var h=y_(),d=__();(Wt!==e||It!==i)&&(vc=null,Ka(e,i)),i=!1;var _=ce;t:do try{if(Gt!==0&&wt!==null){var E=wt,I=vn;switch(Gt){case 8:vd(),_=6;break t;case 3:case 2:case 9:case 6:yn.current===null&&(i=!0);var U=Gt;if(Gt=0,vn=null,Ya(e,E,I,U),a&&Ha){_=0;break t}break;default:U=Gt,Gt=0,vn=null,Ya(e,E,I,U)}}ub(),_=ce;break}catch(F){g_(e,F)}while(!0);return i&&e.shellSuspendCounter++,Fi=ks=null,Bt=o,G.H=h,G.A=d,wt===null&&(Wt=null,It=0,Bu()),_}function ub(){for(;wt!==null;)v_(wt)}function cb(e,i){var a=Bt;Bt|=2;var o=y_(),h=__();Wt!==e||It!==i?(vc=null,_c=We()+500,Ka(e,i)):Ha=qn(e,i);t:do try{if(Gt!==0&&wt!==null){i=wt;var d=vn;e:switch(Gt){case 1:Gt=0,vn=null,Ya(e,i,d,1);break;case 2:case 9:if(Np(d)){Gt=0,vn=null,E_(i);break}i=function(){Gt!==2&&Gt!==9||Wt!==e||(Gt=7),Ii(e)},d.then(i,i);break t;case 3:Gt=7;break t;case 4:Gt=5;break t;case 7:Np(d)?(Gt=0,vn=null,E_(i)):(Gt=0,vn=null,Ya(e,i,d,7));break;case 5:var _=null;switch(wt.tag){case 26:_=wt.memoizedState;case 5:case 27:var E=wt;if(_?sv(_):E.stateNode.complete){Gt=0,vn=null;var I=E.sibling;if(I!==null)wt=I;else{var U=E.return;U!==null?(wt=U,Ac(U)):wt=null}break e}}Gt=0,vn=null,Ya(e,i,d,5);break;case 6:Gt=0,vn=null,Ya(e,i,d,6);break;case 8:vd(),ce=6;break t;default:throw Error(s(462))}}hb();break}catch(F){g_(e,F)}while(!0);return Fi=ks=null,G.H=o,G.A=h,Bt=a,wt!==null?0:(Wt=null,It=0,Bu(),ce)}function hb(){for(;wt!==null&&!Xh();)v_(wt)}function v_(e){var i=Hy(e.alternate,e,tr);e.memoizedProps=e.pendingProps,i===null?Ac(e):wt=i}function E_(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=Ly(a,i,i.pendingProps,i.type,void 0,It);break;case 11:i=Ly(a,i,i.pendingProps,i.type.render,i.ref,It);break;case 5:kf(i);default:Gy(a,i),i=wt=_p(i,tr),i=Hy(a,i,tr)}e.memoizedProps=e.pendingProps,i===null?Ac(e):wt=i}function Ya(e,i,a,o){Fi=ks=null,kf(i),Pa=null,tl=0;var h=i.return;try{if(WS(e,h,i,a,It)){ce=1,uc(e,On(a,e.current)),wt=null;return}}catch(d){if(h!==null)throw wt=h,d;ce=1,uc(e,On(a,e.current)),wt=null;return}i.flags&32768?(Vt||o===1?e=!0:Ha||(It&536870912)!==0?e=!1:(xr=e=!0,(o===2||o===9||o===3||o===6)&&(o=yn.current,o!==null&&o.tag===13&&(o.flags|=16384))),T_(i,e)):Ac(i)}function Ac(e){var i=e;do{if((i.flags&32768)!==0){T_(i,xr);return}e=i.return;var a=nb(i.alternate,i,tr);if(a!==null){wt=a;return}if(i=i.sibling,i!==null){wt=i;return}wt=i=e}while(i!==null);ce===0&&(ce=5)}function T_(e,i){do{var a=ib(e.alternate,e);if(a!==null){a.flags&=32767,wt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){wt=e;return}wt=e=a}while(e!==null);ce=6,wt=null}function A_(e,i,a,o,h,d,_,E,I){e.cancelPendingCommit=null;do Sc();while(Me!==0);if((Bt&6)!==0)throw Error(s(327));if(i!==null){if(i===e.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=lf,Zh(e,a,d,_,E,I),e===Wt&&(wt=Wt=null,It=0),Ga=i,Lr=e,er=a,pd=d,yd=h,h_=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,gb(mr,function(){return I_(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=G.T,G.T=null,h=et.p,et.p=2,_=Bt,Bt|=4;try{rb(e,i,a)}finally{Bt=_,et.p=h,G.T=o}}Me=1,S_(),b_(),w_()}}function S_(){if(Me===1){Me=0;var e=Lr,i=Ga,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=G.T,G.T=null;var o=et.p;et.p=2;var h=Bt;Bt|=4;try{i_(i,e);var d=Vd,_=up(e.containerInfo),E=d.focusedElem,I=d.selectionRange;if(_!==E&&E&&E.ownerDocument&&lp(E.ownerDocument.documentElement,E)){if(I!==null&&nf(E)){var U=I.start,F=I.end;if(F===void 0&&(F=U),"selectionStart"in E)E.selectionStart=U,E.selectionEnd=Math.min(F,E.value.length);else{var Q=E.ownerDocument||document,z=Q&&Q.defaultView||window;if(z.getSelection){var q=z.getSelection(),at=E.textContent.length,ht=Math.min(I.start,at),$t=I.end===void 0?ht:Math.min(I.end,at);!q.extend&&ht>$t&&(_=$t,$t=ht,ht=_);var x=op(E,ht),D=op(E,$t);if(x&&D&&(q.rangeCount!==1||q.anchorNode!==x.node||q.anchorOffset!==x.offset||q.focusNode!==D.node||q.focusOffset!==D.offset)){var L=Q.createRange();L.setStart(x.node,x.offset),q.removeAllRanges(),ht>$t?(q.addRange(L),q.extend(D.node,D.offset)):(L.setEnd(D.node,D.offset),q.addRange(L))}}}}for(Q=[],q=E;q=q.parentNode;)q.nodeType===1&&Q.push({element:q,left:q.scrollLeft,top:q.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Q.length;E++){var K=Q[E];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}kc=!!Od,Vd=Od=null}finally{Bt=h,et.p=o,G.T=a}}e.current=i,Me=2}}function b_(){if(Me===2){Me=0;var e=Lr,i=Ga,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=G.T,G.T=null;var o=et.p;et.p=2;var h=Bt;Bt|=4;try{Zy(e,i.alternate,i)}finally{Bt=h,et.p=o,G.T=a}}Me=3}}function w_(){if(Me===4||Me===3){Me=0,du();var e=Lr,i=Ga,a=er,o=h_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Me=5:(Me=0,Ga=Lr=null,R_(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Pr=null),Ui(a),i=i.stateNode,ze&&typeof ze.onCommitFiberRoot=="function")try{ze.onCommitFiberRoot(Bn,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=G.T,h=et.p,et.p=2,G.T=null;try{for(var d=e.onRecoverableError,_=0;_<o.length;_++){var E=o[_];d(E.value,{componentStack:E.stack})}}finally{G.T=i,et.p=h}}(er&3)!==0&&Sc(),Ii(e),h=e.pendingLanes,(a&261930)!==0&&(h&42)!==0?e===_d?yl++:(yl=0,_d=e):yl=0,_l(0)}}function R_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Zo(i)))}function Sc(){return S_(),b_(),w_(),I_()}function I_(){if(Me!==5)return!1;var e=Lr,i=pd;pd=0;var a=Ui(er),o=G.T,h=et.p;try{et.p=32>a?32:a,G.T=null,a=yd,yd=null;var d=Lr,_=er;if(Me=0,Ga=Lr=null,er=0,(Bt&6)!==0)throw Error(s(331));var E=Bt;if(Bt|=4,l_(d.current),s_(d,d.current,_,a),Bt=E,_l(0,!1),ze&&typeof ze.onPostCommitFiberRoot=="function")try{ze.onPostCommitFiberRoot(Bn,d)}catch{}return!0}finally{et.p=h,G.T=o,R_(e,i)}}function C_(e,i,a){i=On(a,i),i=$f(e.stateNode,i,2),e=Dr(e,i,2),e!==null&&(_s(e,2),Ii(e))}function Kt(e,i,a){if(e.tag===3)C_(e,e,a);else for(;i!==null;){if(i.tag===3){C_(i,e,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Pr===null||!Pr.has(o))){e=On(a,e),a=Ny(2),o=Dr(i,a,2),o!==null&&(Dy(a,o,i,e),_s(o,2),Ii(o));break}}i=i.return}}function Td(e,i,a){var o=e.pingCache;if(o===null){o=e.pingCache=new ob;var h=new Set;o.set(i,h)}else h=o.get(i),h===void 0&&(h=new Set,o.set(i,h));h.has(a)||(dd=!0,h.add(a),e=fb.bind(null,e,i,a),i.then(e,e))}function fb(e,i,a){var o=e.pingCache;o!==null&&o.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Wt===e&&(It&a)===a&&(ce===4||ce===3&&(It&62914560)===It&&300>We()-yc?(Bt&2)===0&&Ka(e,0):md|=a,Fa===It&&(Fa=0)),Ii(e)}function N_(e,i){i===0&&(i=vu()),e=Vs(e,i),e!==null&&(_s(e,i),Ii(e))}function db(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),N_(e,a)}function mb(e,i){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),N_(e,a)}function gb(e,i){return Ve(e,i)}var bc=null,Qa=null,Ad=!1,wc=!1,Sd=!1,zr=0;function Ii(e){e!==Qa&&e.next===null&&(Qa===null?bc=Qa=e:Qa=Qa.next=e),wc=!0,Ad||(Ad=!0,yb())}function _l(e,i){if(!Sd&&wc){Sd=!0;do for(var a=!1,o=bc;o!==null;){if(e!==0){var h=o.pendingLanes;if(h===0)var d=0;else{var _=o.suspendedLanes,E=o.pingedLanes;d=(1<<31-fe(42|e)+1)-1,d&=h&~(_&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,M_(o,d))}else d=It,d=ui(o,o===Wt?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||qn(o,d)||(a=!0,M_(o,d));o=o.next}while(a);Sd=!1}}function pb(){D_()}function D_(){wc=Ad=!1;var e=0;zr!==0&&Ib()&&(e=zr);for(var i=We(),a=null,o=bc;o!==null;){var h=o.next,d=O_(o,i);d===0?(o.next=null,a===null?bc=h:a.next=h,h===null&&(Qa=a)):(a=o,(e!==0||(d&3)!==0)&&(wc=!0)),o=h}Me!==0&&Me!==5||_l(e),zr!==0&&(zr=0)}function O_(e,i){for(var a=e.suspendedLanes,o=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var _=31-fe(d),E=1<<_,I=h[_];I===-1?((E&a)===0||(E&o)!==0)&&(h[_]=Jh(E,i)):I<=i&&(e.expiredLanes|=E),d&=~E}if(i=Wt,a=It,a=ui(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===i&&(Gt===2||Gt===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&dr(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||qn(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(o!==null&&dr(o),Ui(a)){case 2:case 8:a=Co;break;case 32:a=mr;break;case 268435456:a=mu;break;default:a=mr}return o=V_.bind(null,e),a=Ve(a,o),e.callbackPriority=i,e.callbackNode=a,i}return o!==null&&o!==null&&dr(o),e.callbackPriority=2,e.callbackNode=null,2}function V_(e,i){if(Me!==0&&Me!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Sc()&&e.callbackNode!==a)return null;var o=It;return o=ui(e,e===Wt?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(d_(e,o,i),O_(e,We()),e.callbackNode!=null&&e.callbackNode===a?V_.bind(null,e):null)}function M_(e,i){if(Sc())return null;d_(e,i,!0)}function yb(){Nb(function(){(Bt&6)!==0?Ve(Io,pb):D_()})}function bd(){if(zr===0){var e=Ma;e===0&&(e=oi,oi<<=1,(oi&261888)===0&&(oi=256)),zr=e}return zr}function x_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_a(""+e)}function k_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function _b(e,i,a,o,h){if(i==="submit"&&a&&a.stateNode===h){var d=x_((h[ke]||null).action),_=o.submitter;_&&(i=(i=_[ke]||null)?x_(i.formAction):_.getAttribute("formAction"),i!==null&&(d=i,_=null));var E=new Ei("action","action",null,o,h);e.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(zr!==0){var I=_?k_(h,_):new FormData(h);Ff(a,{pending:!0,data:I,method:h.method,action:d},null,I)}}else typeof d=="function"&&(E.preventDefault(),I=_?k_(h,_):new FormData(h),Ff(a,{pending:!0,data:I,method:h.method,action:d},d,I))},currentTarget:h}]})}}for(var wd=0;wd<of.length;wd++){var Rd=of[wd],vb=Rd.toLowerCase(),Eb=Rd[0].toUpperCase()+Rd.slice(1);$n(vb,"on"+Eb)}$n(fp,"onAnimationEnd"),$n(dp,"onAnimationIteration"),$n(mp,"onAnimationStart"),$n("dblclick","onDoubleClick"),$n("focusin","onFocus"),$n("focusout","onBlur"),$n(PS,"onTransitionRun"),$n(LS,"onTransitionStart"),$n(US,"onTransitionCancel"),$n(gp,"onTransitionEnd"),pi("onMouseEnter",["mouseout","mouseover"]),pi("onMouseLeave",["mouseout","mouseover"]),pi("onPointerEnter",["pointerout","pointerover"]),pi("onPointerLeave",["pointerout","pointerover"]),gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gi("onBeforeInput",["compositionend","keypress","textInput","paste"]),gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Tb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vl));function P_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],h=o.event;o=o.listeners;t:{var d=void 0;if(i)for(var _=o.length-1;0<=_;_--){var E=o[_],I=E.instance,U=E.currentTarget;if(E=E.listener,I!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=U;try{d(h)}catch(F){ju(F)}h.currentTarget=null,d=I}else for(_=0;_<o.length;_++){if(E=o[_],I=E.instance,U=E.currentTarget,E=E.listener,I!==d&&h.isPropagationStopped())break t;d=E,h.currentTarget=U;try{d(h)}catch(F){ju(F)}h.currentTarget=null,d=I}}}}function Rt(e,i){var a=i[da];a===void 0&&(a=i[da]=new Set);var o=e+"__bubble";a.has(o)||(L_(i,e,2,!1),a.add(o))}function Id(e,i,a){var o=0;i&&(o|=4),L_(a,e,o,i)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function Cd(e){if(!e[Rc]){e[Rc]=!0,Oo.forEach(function(a){a!=="selectionchange"&&(Tb.has(a)||Id(a,!1,e),Id(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[Rc]||(i[Rc]=!0,Id("selectionchange",!1,i))}}function L_(e,i,a,o){switch(fv(i)){case 2:var h=Xb;break;case 8:h=$b;break;default:h=Hd}a=h.bind(null,i,a,e),h=void 0,!bs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),o?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function Nd(e,i,a,o,h){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var E=o.stateNode.containerInfo;if(E===h)break;if(_===4)for(_=o.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;E!==null;){if(_=di(E),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){o=d=_;continue t}E=E.parentNode}}o=o.return}Er(function(){var U=d,F=In(a),Q=[];t:{var z=pp.get(e);if(z!==void 0){var q=Ei,at=e;switch(e){case"keypress":if(Rs(a)===0)break t;case"keydown":case"keyup":q=Lu;break;case"focusin":at="focus",q=Cs;break;case"focusout":at="blur",q=Cs;break;case"beforeblur":case"afterblur":q=Cs;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":q=Fo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":q=Cu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":q=m;break;case fp:case dp:case mp:q=Du;break;case gp:q=A;break;case"scroll":case"scrollend":q=Ho;break;case"wheel":q=B;break;case"copy":case"cut":case"paste":q=Ou;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":q=Bi;break;case"toggle":case"beforetoggle":q=Tt}var ht=(i&4)!==0,$t=!ht&&(e==="scroll"||e==="scrollend"),x=ht?z!==null?z+"Capture":null:z;ht=[];for(var D=U,L;D!==null;){var K=D;if(L=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||L===null||x===null||(K=Kn(D,x),K!=null&&ht.push(El(D,K,L))),$t)break;D=D.return}0<ht.length&&(z=new q(z,at,null,a,F),Q.push({event:z,listeners:ht}))}}if((i&7)===0){t:{if(z=e==="mouseover"||e==="pointerover",q=e==="mouseout"||e==="pointerout",z&&a!==jo&&(at=a.relatedTarget||a.fromElement)&&(di(at)||at[hi]))break t;if((q||z)&&(z=F.window===F?F:(z=F.ownerDocument)?z.defaultView||z.parentWindow:window,q?(at=a.relatedTarget||a.toElement,q=U,at=at?di(at):null,at!==null&&($t=u(at),ht=at.tag,at!==$t||ht!==5&&ht!==27&&ht!==6)&&(at=null)):(q=null,at=U),q!==at)){if(ht=Fo,K="onMouseLeave",x="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(ht=Bi,K="onPointerLeave",x="onPointerEnter",D="pointer"),$t=q==null?z:dn(q),L=at==null?z:dn(at),z=new ht(K,D+"leave",q,a,F),z.target=$t,z.relatedTarget=L,K=null,di(F)===U&&(ht=new ht(x,D+"enter",at,a,F),ht.target=L,ht.relatedTarget=$t,K=ht),$t=K,q&&at)e:{for(ht=Ab,x=q,D=at,L=0,K=x;K;K=ht(K))L++;K=0;for(var lt=D;lt;lt=ht(lt))K++;for(;0<L-K;)x=ht(x),L--;for(;0<K-L;)D=ht(D),K--;for(;L--;){if(x===D||D!==null&&x===D.alternate){ht=x;break e}x=ht(x),D=ht(D)}ht=null}else ht=null;q!==null&&U_(Q,z,q,ht,!1),at!==null&&$t!==null&&U_(Q,$t,at,ht,!0)}}t:{if(z=U?dn(U):window,q=z.nodeName&&z.nodeName.toLowerCase(),q==="select"||q==="input"&&z.type==="file")var Pt=ep;else if(Wg(z))if(np)Pt=MS;else{Pt=OS;var ot=DS}else q=z.nodeName,!q||q.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?U&&ya(U.elementType)&&(Pt=ep):Pt=VS;if(Pt&&(Pt=Pt(e,U))){tp(Q,Pt,a,F);break t}ot&&ot(e,z,U),e==="focusout"&&U&&z.type==="number"&&U.memoizedProps.value!=null&&Lo(z,"number",z.value)}switch(ot=U?dn(U):window,e){case"focusin":(Wg(ot)||ot.contentEditable==="true")&&(wa=ot,rf=U,Xo=null);break;case"focusout":Xo=rf=wa=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,cp(Q,a,F);break;case"selectionchange":if(kS)break;case"keydown":case"keyup":cp(Q,a,F)}var bt;if(jt)t:{switch(e){case"compositionstart":var Ct="onCompositionStart";break t;case"compositionend":Ct="onCompositionEnd";break t;case"compositionupdate":Ct="onCompositionUpdate";break t}Ct=void 0}else ba?Ns(e,a)&&(Ct="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Ct="onCompositionStart");Ct&&(Si&&a.locale!=="ko"&&(ba||Ct!=="onCompositionStart"?Ct==="onCompositionEnd"&&ba&&(bt=qo()):(vi=F,Bo="value"in vi?vi.value:vi.textContent,ba=!0)),ot=Ic(U,Ct),0<ot.length&&(Ct=new Ai(Ct,e,null,a,F),Q.push({event:Ct,listeners:ot}),bt?Ct.data=bt:(bt=Sa(a),bt!==null&&(Ct.data=bt)))),(bt=Nn?RS(e,a):IS(e,a))&&(Ct=Ic(U,"onBeforeInput"),0<Ct.length&&(ot=new Ai("onBeforeInput","beforeinput",null,a,F),Q.push({event:ot,listeners:Ct}),ot.data=bt)),_b(Q,e,U,a,F)}P_(Q,i)})}function El(e,i,a){return{instance:e,listener:i,currentTarget:a}}function Ic(e,i){for(var a=i+"Capture",o=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Kn(e,a),h!=null&&o.unshift(El(e,h,d)),h=Kn(e,i),h!=null&&o.push(El(e,h,d))),e.tag===3)return o;e=e.return}return[]}function Ab(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function U_(e,i,a,o,h){for(var d=i._reactName,_=[];a!==null&&a!==o;){var E=a,I=E.alternate,U=E.stateNode;if(E=E.tag,I!==null&&I===o)break;E!==5&&E!==26&&E!==27||U===null||(I=U,h?(U=Kn(a,d),U!=null&&_.unshift(El(a,U,I))):h||(U=Kn(a,d),U!=null&&_.push(El(a,U,I)))),a=a.return}_.length!==0&&e.push({event:i,listeners:_})}var Sb=/\r\n?/g,bb=/\u0000|\uFFFD/g;function z_(e){return(typeof e=="string"?e:""+e).replace(Sb,`
`).replace(bb,"")}function j_(e,i){return i=z_(i),z_(e)===i}function Xt(e,i,a,o,h,d){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||sn(e,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&sn(e,""+o);break;case"className":mn(e,"class",o);break;case"tabIndex":mn(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":mn(e,a,o);break;case"style":zo(e,o,d);break;case"data":if(i!=="object"){mn(e,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=_a(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Xt(e,i,"name",h.name,h,null),Xt(e,i,"formEncType",h.formEncType,h,null),Xt(e,i,"formMethod",h.formMethod,h,null),Xt(e,i,"formTarget",h.formTarget,h,null)):(Xt(e,i,"encType",h.encType,h,null),Xt(e,i,"method",h.method,h,null),Xt(e,i,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=_a(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Gn);break;case"onScroll":o!=null&&Rt("scroll",e);break;case"onScrollEnd":o!=null&&Rt("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=_a(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Rt("beforetoggle",e),Rt("toggle",e),ga(e,"popover",o);break;case"xlinkActuate":Ae(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ae(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ae(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ae(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ae(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ae(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ae(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ga(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Iu.get(a)||a,ga(e,a,o))}}function Dd(e,i,a,o,h,d){switch(a){case"style":zo(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?sn(e,o):(typeof o=="number"||typeof o=="bigint")&&sn(e,""+o);break;case"onScroll":o!=null&&Rt("scroll",e);break;case"onScrollEnd":o!=null&&Rt("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Gn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[ke]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof o=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,o,h);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):ga(e,a,o)}}}function Fe(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Rt("error",e),Rt("load",e);var o=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(e,i,d,_,a,null)}}h&&Xt(e,i,"srcSet",a.srcSet,a,null),o&&Xt(e,i,"src",a.src,a,null);return;case"input":Rt("invalid",e);var E=d=_=h=null,I=null,U=null;for(o in a)if(a.hasOwnProperty(o)){var F=a[o];if(F!=null)switch(o){case"name":h=F;break;case"type":_=F;break;case"checked":I=F;break;case"defaultChecked":U=F;break;case"value":d=F;break;case"defaultValue":E=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:Xt(e,i,o,F,a,null)}}bu(e,d,E,I,U,_,h,!1);return;case"select":Rt("invalid",e),o=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":_=E;break;case"multiple":o=E;default:Xt(e,i,h,E,a,null)}i=d,a=_,e.multiple=!!o,i!=null?pr(e,!!o,i,!1):a!=null&&pr(e,!!o,a,!0);return;case"textarea":Rt("invalid",e),d=h=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":o=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Xt(e,i,_,E,a,null)}yr(e,o,h,d);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xt(e,i,I,o,a,null)}return;case"dialog":Rt("beforetoggle",e),Rt("toggle",e),Rt("cancel",e),Rt("close",e);break;case"iframe":case"object":Rt("load",e);break;case"video":case"audio":for(o=0;o<vl.length;o++)Rt(vl[o],e);break;case"image":Rt("error",e),Rt("load",e);break;case"details":Rt("toggle",e);break;case"embed":case"source":case"link":Rt("error",e),Rt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in a)if(a.hasOwnProperty(U)&&(o=a[U],o!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xt(e,i,U,o,a,null)}return;default:if(ya(i)){for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!==void 0&&Dd(e,i,F,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&Xt(e,i,E,o,a,null))}function wb(e,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,E=null,I=null,U=null,F=null;for(q in a){var Q=a[q];if(a.hasOwnProperty(q)&&Q!=null)switch(q){case"checked":break;case"value":break;case"defaultValue":I=Q;default:o.hasOwnProperty(q)||Xt(e,i,q,null,o,Q)}}for(var z in o){var q=o[z];if(Q=a[z],o.hasOwnProperty(z)&&(q!=null||Q!=null))switch(z){case"type":d=q;break;case"name":h=q;break;case"checked":U=q;break;case"defaultChecked":F=q;break;case"value":_=q;break;case"defaultValue":E=q;break;case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,i));break;default:q!==Q&&Xt(e,i,z,q,o,Q)}}pa(e,_,E,I,U,F,d,h);return;case"select":q=_=E=z=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":q=I;default:o.hasOwnProperty(d)||Xt(e,i,d,null,o,I)}for(h in o)if(d=o[h],I=a[h],o.hasOwnProperty(h)&&(d!=null||I!=null))switch(h){case"value":z=d;break;case"defaultValue":E=d;break;case"multiple":_=d;default:d!==I&&Xt(e,i,h,d,o,I)}i=E,a=_,o=q,z!=null?pr(e,!!a,z,!1):!!o!=!!a&&(i!=null?pr(e,!!a,i,!0):pr(e,!!a,a?[]:"",!1));return;case"textarea":q=z=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Xt(e,i,E,null,o,h)}for(_ in o)if(h=o[_],d=a[_],o.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":z=h;break;case"defaultValue":q=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Xt(e,i,_,h,o,d)}wu(e,z,q);return;case"option":for(var at in a)if(z=a[at],a.hasOwnProperty(at)&&z!=null&&!o.hasOwnProperty(at))switch(at){case"selected":e.selected=!1;break;default:Xt(e,i,at,null,o,z)}for(I in o)if(z=o[I],q=a[I],o.hasOwnProperty(I)&&z!==q&&(z!=null||q!=null))switch(I){case"selected":e.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:Xt(e,i,I,z,o,q)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ht in a)z=a[ht],a.hasOwnProperty(ht)&&z!=null&&!o.hasOwnProperty(ht)&&Xt(e,i,ht,null,o,z);for(U in o)if(z=o[U],q=a[U],o.hasOwnProperty(U)&&z!==q&&(z!=null||q!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(s(137,i));break;default:Xt(e,i,U,z,o,q)}return;default:if(ya(i)){for(var $t in a)z=a[$t],a.hasOwnProperty($t)&&z!==void 0&&!o.hasOwnProperty($t)&&Dd(e,i,$t,void 0,o,z);for(F in o)z=o[F],q=a[F],!o.hasOwnProperty(F)||z===q||z===void 0&&q===void 0||Dd(e,i,F,z,o,q);return}}for(var x in a)z=a[x],a.hasOwnProperty(x)&&z!=null&&!o.hasOwnProperty(x)&&Xt(e,i,x,null,o,z);for(Q in o)z=o[Q],q=a[Q],!o.hasOwnProperty(Q)||z===q||z==null&&q==null||Xt(e,i,Q,z,o,q)}function B_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Rb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var h=a[o],d=h.transferSize,_=h.initiatorType,E=h.duration;if(d&&E&&B_(_)){for(_=0,E=h.responseEnd,o+=1;o<a.length;o++){var I=a[o],U=I.startTime;if(U>E)break;var F=I.transferSize,Q=I.initiatorType;F&&B_(Q)&&(I=I.responseEnd,_+=F*(I<E?1:(E-U)/(I-U)))}if(--o,i+=8*(d+_)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Od=null,Vd=null;function Cc(e){return e.nodeType===9?e:e.ownerDocument}function q_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function H_(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Md(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var xd=null;function Ib(){var e=window.event;return e&&e.type==="popstate"?e===xd?!1:(xd=e,!0):(xd=null,!1)}var F_=typeof setTimeout=="function"?setTimeout:void 0,Cb=typeof clearTimeout=="function"?clearTimeout:void 0,G_=typeof Promise=="function"?Promise:void 0,Nb=typeof queueMicrotask=="function"?queueMicrotask:typeof G_<"u"?function(e){return G_.resolve(null).then(e).catch(Db)}:F_;function Db(e){setTimeout(function(){throw e})}function jr(e){return e==="head"}function K_(e,i){var a=i,o=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(h),Za(i);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Tl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Tl(a);for(var d=a.firstChild;d;){var _=d.nextSibling,E=d.nodeName;d[fi]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=_}}else a==="body"&&Tl(e.ownerDocument.body);a=h}while(a);Za(i)}function Y_(e,i){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function kd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":kd(a),ma(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ob(e,i,a,o){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[fi])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Pn(e.nextSibling),e===null)break}return null}function Vb(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Pn(e.nextSibling),e===null))return null;return e}function Q_(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Pn(e.nextSibling),e===null))return null;return e}function Pd(e){return e.data==="$?"||e.data==="$~"}function Ld(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Mb(e,i){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||a.readyState!=="loading")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Pn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Ud=null;function X_(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(i===0)return Pn(e.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}e=e.nextSibling}return null}function $_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return e;i--}else a!=="/$"&&a!=="/&"||i++}e=e.previousSibling}return null}function J_(e,i,a){switch(i=Cc(a),e){case"html":if(e=i.documentElement,!e)throw Error(s(452));return e;case"head":if(e=i.head,!e)throw Error(s(453));return e;case"body":if(e=i.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Tl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ma(e)}var Ln=new Map,Z_=new Set;function Nc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var nr=et.d;et.d={f:xb,r:kb,D:Pb,C:Lb,L:Ub,m:zb,X:Bb,S:jb,M:qb};function xb(){var e=nr.f(),i=Ec();return e||i}function kb(e){var i=Rn(e);i!==null&&i.tag===5&&i.type==="form"?gy(i):nr.r(e)}var Xa=typeof document>"u"?null:document;function W_(e,i,a){var o=Xa;if(o&&typeof i=="string"&&i){var h=rn(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),Z_.has(h)||(Z_.add(h),e={rel:e,crossOrigin:a,href:i},o.querySelector(h)===null&&(i=o.createElement("link"),Fe(i,"link",e),Te(i),o.head.appendChild(i)))}}function Pb(e){nr.D(e),W_("dns-prefetch",e,null)}function Lb(e,i){nr.C(e,i),W_("preconnect",e,i)}function Ub(e,i,a){nr.L(e,i,a);var o=Xa;if(o&&e&&i){var h='link[rel="preload"][as="'+rn(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+rn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+rn(a.imageSizes)+'"]')):h+='[href="'+rn(e)+'"]';var d=h;switch(i){case"style":d=$a(e);break;case"script":d=Ja(e)}Ln.has(d)||(e=S({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),Ln.set(d,e),o.querySelector(h)!==null||i==="style"&&o.querySelector(Al(d))||i==="script"&&o.querySelector(Sl(d))||(i=o.createElement("link"),Fe(i,"link",e),Te(i),o.head.appendChild(i)))}}function zb(e,i){nr.m(e,i);var a=Xa;if(a&&e){var o=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+rn(o)+'"][href="'+rn(e)+'"]',d=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ja(e)}if(!Ln.has(d)&&(e=S({rel:"modulepreload",href:e},i),Ln.set(d,e),a.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sl(d)))return}o=a.createElement("link"),Fe(o,"link",e),Te(o),a.head.appendChild(o)}}}function jb(e,i,a){nr.S(e,i,a);var o=Xa;if(o&&e){var h=mi(o).hoistableStyles,d=$a(e);i=i||"default";var _=h.get(d);if(!_){var E={loading:0,preload:null};if(_=o.querySelector(Al(d)))E.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":i},a),(a=Ln.get(d))&&zd(e,a);var I=_=o.createElement("link");Te(I),Fe(I,"link",e),I._p=new Promise(function(U,F){I.onload=U,I.onerror=F}),I.addEventListener("load",function(){E.loading|=1}),I.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Dc(_,i,o)}_={type:"stylesheet",instance:_,count:1,state:E},h.set(d,_)}}}function Bb(e,i){nr.X(e,i);var a=Xa;if(a&&e){var o=mi(a).hoistableScripts,h=Ja(e),d=o.get(h);d||(d=a.querySelector(Sl(h)),d||(e=S({src:e,async:!0},i),(i=Ln.get(h))&&jd(e,i),d=a.createElement("script"),Te(d),Fe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function qb(e,i){nr.M(e,i);var a=Xa;if(a&&e){var o=mi(a).hoistableScripts,h=Ja(e),d=o.get(h);d||(d=a.querySelector(Sl(h)),d||(e=S({src:e,async:!0,type:"module"},i),(i=Ln.get(h))&&jd(e,i),d=a.createElement("script"),Te(d),Fe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function tv(e,i,a,o){var h=(h=St.current)?Nc(h):null;if(!h)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=$a(a.href),a=mi(h).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=$a(a.href);var d=mi(h).hoistableStyles,_=d.get(e);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,_),(d=h.querySelector(Al(e)))&&!d._p&&(_.instance=d,_.state.loading=5),Ln.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ln.set(e,a),d||Hb(h,e,a,_.state))),i&&o===null)throw Error(s(528,""));return _}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ja(a),a=mi(h).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function $a(e){return'href="'+rn(e)+'"'}function Al(e){return'link[rel="stylesheet"]['+e+"]"}function ev(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Hb(e,i,a,o){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=e.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Fe(i,"link",a),Te(i),e.head.appendChild(i))}function Ja(e){return'[src="'+rn(e)+'"]'}function Sl(e){return"script[async]"+e}function nv(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=e.querySelector('style[data-href~="'+rn(a.href)+'"]');if(o)return i.instance=o,Te(o),o;var h=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Te(o),Fe(o,"style",h),Dc(o,a.precedence,e),i.instance=o;case"stylesheet":h=$a(a.href);var d=e.querySelector(Al(h));if(d)return i.state.loading|=4,i.instance=d,Te(d),d;o=ev(a),(h=Ln.get(h))&&zd(o,h),d=(e.ownerDocument||e).createElement("link"),Te(d);var _=d;return _._p=new Promise(function(E,I){_.onload=E,_.onerror=I}),Fe(d,"link",o),i.state.loading|=4,Dc(d,a.precedence,e),i.instance=d;case"script":return d=Ja(a.src),(h=e.querySelector(Sl(d)))?(i.instance=h,Te(h),h):(o=a,(h=Ln.get(d))&&(o=S({},a),jd(o,h)),e=e.ownerDocument||e,h=e.createElement("script"),Te(h),Fe(h,"link",o),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Dc(o,a.precedence,e));return i.instance}function Dc(e,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,d=h,_=0;_<o.length;_++){var E=o[_];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function zd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function jd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Oc=null;function iv(e,i,a){if(Oc===null){var o=new Map,h=Oc=new Map;h.set(a,o)}else h=Oc,o=h.get(a),o||(o=new Map,h.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[fi]||d[Ee]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(i)||"";_=e+_;var E=o.get(_);E?E.push(d):o.set(_,[d])}}return o}function rv(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function Fb(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function sv(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Gb(e,i,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=$a(o.href),d=i.querySelector(Al(h));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Vc.bind(e),i.then(e,e)),a.state.loading|=4,a.instance=d,Te(d);return}d=i.ownerDocument||i,o=ev(o),(h=Ln.get(h))&&zd(o,h),d=d.createElement("link"),Te(d);var _=d;_._p=new Promise(function(E,I){_.onload=E,_.onerror=I}),Fe(d,"link",o),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Vc.bind(e),i.addEventListener("load",a),i.addEventListener("error",a))}}var Bd=0;function Kb(e,i){return e.stylesheets&&e.count===0&&xc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&xc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&Bd===0&&(Bd=62500*Rb());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&xc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Bd?50:800)+i);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(h)}}:null}function Vc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)xc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Mc=null;function xc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Mc=new Map,i.forEach(Yb,e),Mc=null,Vc.call(e))}function Yb(e,i){if(!(i.state.loading&4)){var a=Mc.get(e);if(a)var o=a.get(null);else{a=new Map,Mc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}h=i.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||o,d===o&&a.set(null,h),a.set(_,h),this.count++,o=Vc.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var bl={$$typeof:Et,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function Qb(e,i,a,o,h,d,_,E,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ci(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ci(0),this.hiddenUpdates=ci(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function av(e,i,a,o,h,d,_,E,I,U,F,Q){return e=new Qb(e,i,a,_,I,U,F,Q,E),i=1,d===!0&&(i|=24),d=pn(3,null,null,i),e.current=d,d.stateNode=e,i=Ef(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:i},bf(d),e}function ov(e){return e?(e=Ca,e):Ca}function lv(e,i,a,o,h,d){h=ov(h),o.context===null?o.context=h:o.pendingContext=h,o=Nr(i),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=Dr(e,o,i),a!==null&&(cn(a,e,i),nl(a,e,i))}function uv(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function qd(e,i){uv(e,i),(e=e.alternate)&&uv(e,i)}function cv(e){if(e.tag===13||e.tag===31){var i=Vs(e,67108864);i!==null&&cn(i,e,67108864),qd(e,67108864)}}function hv(e){if(e.tag===13||e.tag===31){var i=Tn();i=Es(i);var a=Vs(e,i);a!==null&&cn(a,e,i),qd(e,i)}}var kc=!0;function Xb(e,i,a,o){var h=G.T;G.T=null;var d=et.p;try{et.p=2,Hd(e,i,a,o)}finally{et.p=d,G.T=h}}function $b(e,i,a,o){var h=G.T;G.T=null;var d=et.p;try{et.p=8,Hd(e,i,a,o)}finally{et.p=d,G.T=h}}function Hd(e,i,a,o){if(kc){var h=Fd(o);if(h===null)Nd(e,i,o,Pc,a),dv(e,o);else if(Zb(h,e,i,a,o))o.stopPropagation();else if(dv(e,o),i&4&&-1<Jb.indexOf(e)){for(;h!==null;){var d=Rn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=li(d.pendingLanes);if(_!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var I=1<<31-fe(_);E.entanglements[1]|=I,_&=~I}Ii(d),(Bt&6)===0&&(_c=We()+500,_l(0))}}break;case 31:case 13:E=Vs(d,2),E!==null&&cn(E,d,2),Ec(),qd(d,2)}if(d=Fd(o),d===null&&Nd(e,i,o,Pc,a),d===h)break;h=d}h!==null&&o.stopPropagation()}else Nd(e,i,o,null,a)}}function Fd(e){return e=In(e),Gd(e)}var Pc=null;function Gd(e){if(Pc=null,e=di(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===31){if(e=g(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Pc=e,null}function fv(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ps()){case Io:return 2;case Co:return 8;case mr:case $h:return 32;case mu:return 268435456;default:return 32}default:return 32}}var Kd=!1,Br=null,qr=null,Hr=null,wl=new Map,Rl=new Map,Fr=[],Jb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dv(e,i){switch(e){case"focusin":case"focusout":Br=null;break;case"dragenter":case"dragleave":qr=null;break;case"mouseover":case"mouseout":Hr=null;break;case"pointerover":case"pointerout":wl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(i.pointerId)}}function Il(e,i,a,o,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Rn(i),i!==null&&cv(i)),e):(e.eventSystemFlags|=o,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function Zb(e,i,a,o,h){switch(i){case"focusin":return Br=Il(Br,e,i,a,o,h),!0;case"dragenter":return qr=Il(qr,e,i,a,o,h),!0;case"mouseover":return Hr=Il(Hr,e,i,a,o,h),!0;case"pointerover":var d=h.pointerId;return wl.set(d,Il(wl.get(d)||null,e,i,a,o,h)),!0;case"gotpointercapture":return d=h.pointerId,Rl.set(d,Il(Rl.get(d)||null,e,i,a,o,h)),!0}return!1}function mv(e){var i=di(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,Hn(e.priority,function(){hv(a)});return}}else if(i===31){if(i=g(a),i!==null){e.blockedOn=i,Hn(e.priority,function(){hv(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Lc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Fd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);jo=o,a.target.dispatchEvent(o),jo=null}else return i=Rn(a),i!==null&&cv(i),e.blockedOn=a,!1;i.shift()}return!0}function gv(e,i,a){Lc(e)&&a.delete(i)}function Wb(){Kd=!1,Br!==null&&Lc(Br)&&(Br=null),qr!==null&&Lc(qr)&&(qr=null),Hr!==null&&Lc(Hr)&&(Hr=null),wl.forEach(gv),Rl.forEach(gv)}function Uc(e,i){e.blockedOn===i&&(e.blockedOn=null,Kd||(Kd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Wb)))}var zc=null;function pv(e){zc!==e&&(zc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){zc===e&&(zc=null);for(var i=0;i<e.length;i+=3){var a=e[i],o=e[i+1],h=e[i+2];if(typeof o!="function"){if(Gd(o||a)===null)continue;break}var d=Rn(a);d!==null&&(e.splice(i,3),i-=3,Ff(d,{pending:!0,data:h,method:a.method,action:o},o,h))}}))}function Za(e){function i(I){return Uc(I,e)}Br!==null&&Uc(Br,e),qr!==null&&Uc(qr,e),Hr!==null&&Uc(Hr,e),wl.forEach(i),Rl.forEach(i);for(var a=0;a<Fr.length;a++){var o=Fr[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Fr.length&&(a=Fr[0],a.blockedOn===null);)mv(a),a.blockedOn===null&&Fr.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var h=a[o],d=a[o+1],_=h[ke]||null;if(typeof d=="function")_||pv(a);else if(_){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[ke]||null)E=_.formAction;else if(Gd(h)!==null)continue}else E=_.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),pv(a)}}}function yv(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(_){return h=_})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Yd(e){this._internalRoot=e}jc.prototype.render=Yd.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=Tn();lv(a,o,e,i,null,null)},jc.prototype.unmount=Yd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;lv(e.current,2,null,e,null,null),Ec(),i[hi]=null}};function jc(e){this._internalRoot=e}jc.prototype.unstable_scheduleHydration=function(e){if(e){var i=Eu();e={blockedOn:null,target:e,priority:i};for(var a=0;a<Fr.length&&i!==0&&i<Fr[a].priority;a++);Fr.splice(a,0,e),a===0&&mv(e)}};var _v=t.version;if(_v!=="19.2.4")throw Error(s(527,_v,"19.2.4"));et.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(i),e=e!==null?T(e):null,e=e===null?null:e.stateNode,e};var t1={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bc.isDisabled&&Bc.supportsFiber)try{Bn=Bc.inject(t1),ze=Bc}catch{}}return Nl.createRoot=function(e,i){if(!l(e))throw Error(s(299));var a=!1,o="",h=wy,d=Ry,_=Iy;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError)),i=av(e,1,!1,null,null,a,o,null,h,d,_,yv),e[hi]=i.current,Cd(e),new Yd(i)},Nl.hydrateRoot=function(e,i,a){if(!l(e))throw Error(s(299));var o=!1,h="",d=wy,_=Ry,E=Iy,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),i=av(e,1,!0,i,a??null,o,h,I,d,_,E,yv),i.context=ov(null),a=i.current,o=Tn(),o=Es(o),h=Nr(o),h.callback=null,Dr(a,h,o),a=o,i.current.lanes=a,_s(i,a),Ii(i),e[hi]=i.current,Cd(e),new jc(i)},Nl.version="19.2.4",Nl}var Cv;function h1(){if(Cv)return $d.exports;Cv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),$d.exports=c1(),$d.exports}var f1=h1();const d1=ET(f1),m1=()=>{};var Nv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=function(r){const t=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?t[n++]=l:l<2048?(t[n++]=l>>6|192,t[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),t[n++]=l>>18|240,t[n++]=l>>12&63|128,t[n++]=l>>6&63|128,t[n++]=l&63|128):(t[n++]=l>>12|224,t[n++]=l>>6&63|128,t[n++]=l&63|128)}return t},g1=function(r){const t=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)t[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[n++];t[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[n++],f=r[n++],g=r[n++],y=((l&7)<<18|(u&63)<<12|(f&63)<<6|g&63)-65536;t[s++]=String.fromCharCode(55296+(y>>10)),t[s++]=String.fromCharCode(56320+(y&1023))}else{const u=r[n++],f=r[n++];t[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|f&63)}}return t.join("")},AT={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,t){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],f=l+1<r.length,g=f?r[l+1]:0,y=l+2<r.length,p=y?r[l+2]:0,T=u>>2,S=(u&3)<<4|g>>4;let w=(g&15)<<2|p>>6,j=p&63;y||(j=64,f||(w=64)),s.push(n[T],n[S],n[w],n[j])}return s.join("")},encodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(r):this.encodeByteArray(TT(r),t)},decodeString(r,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(r):g1(this.decodeStringToByteArray(r,t))},decodeStringToByteArray(r,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=n[r.charAt(l++)],g=l<r.length?n[r.charAt(l)]:0;++l;const p=l<r.length?n[r.charAt(l)]:64;++l;const S=l<r.length?n[r.charAt(l)]:64;if(++l,u==null||g==null||p==null||S==null)throw new p1;const w=u<<2|g>>4;if(s.push(w),p!==64){const j=g<<4&240|p>>2;if(s.push(j),S!==64){const J=p<<6&192|S;s.push(J)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class p1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const y1=function(r){const t=TT(r);return AT.encodeByteArray(t,!0)},rh=function(r){return y1(r).replace(/\./g,"")},ST=function(r){try{return AT.decodeString(r,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1=()=>_1().__FIREBASE_DEFAULTS__,E1=()=>{if(typeof process>"u"||typeof Nv>"u")return;const r=Nv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},T1=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=r&&ST(r[1]);return t&&JSON.parse(t)},Sh=()=>{try{return m1()||v1()||E1()||T1()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},bT=r=>{var t,n;return(n=(t=Sh())==null?void 0:t.emulatorHosts)==null?void 0:n[r]},A1=r=>{const t=bT(r);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},wT=()=>{var r;return(r=Sh())==null?void 0:r.config},RT=r=>{var t;return(t=Sh())==null?void 0:t[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function go(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function IT(r){return(await fetch(r,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b1(r,t){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[rh(JSON.stringify(n)),rh(JSON.stringify(f)),""].join(".")}const Ll={};function w1(){const r={prod:[],emulator:[]};for(const t of Object.keys(Ll))Ll[t]?r.emulator.push(t):r.prod.push(t);return r}function R1(r){let t=document.getElementById(r),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",r),n=!0),{created:n,element:t}}let Dv=!1;function CT(r,t){if(typeof window>"u"||typeof document>"u"||!go(window.location.host)||Ll[r]===t||Ll[r]||Dv)return;Ll[r]=t;function n(w){return`__firebase__banner__${w}`}const s="__firebase__banner",u=w1().prod.length>0;function f(){const w=document.getElementById(s);w&&w.remove()}function g(w){w.style.display="flex",w.style.background="#7faaf0",w.style.position="fixed",w.style.bottom="5px",w.style.left="5px",w.style.padding=".5em",w.style.borderRadius="5px",w.style.alignItems="center"}function y(w,j){w.setAttribute("width","24"),w.setAttribute("id",j),w.setAttribute("height","24"),w.setAttribute("viewBox","0 0 24 24"),w.setAttribute("fill","none"),w.style.marginLeft="-6px"}function p(){const w=document.createElement("span");return w.style.cursor="pointer",w.style.marginLeft="16px",w.style.fontSize="24px",w.innerHTML=" &times;",w.onclick=()=>{Dv=!0,f()},w}function T(w,j){w.setAttribute("id",j),w.innerText="Learn more",w.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",w.setAttribute("target","__blank"),w.style.paddingLeft="5px",w.style.textDecoration="underline"}function S(){const w=R1(s),j=n("text"),J=document.getElementById(j)||document.createElement("span"),Z=n("learnmore"),W=document.getElementById(Z)||document.createElement("a"),mt=n("preprendIcon"),vt=document.getElementById(mt)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(w.created){const Et=w.element;g(Et),T(W,Z);const Jt=p();y(vt,mt),Et.append(vt,J,W,Jt),document.body.appendChild(Et)}u?(J.innerText="Preview backend disconnected.",vt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(vt.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,J.innerText="Preview backend running in this workspace."),J.setAttribute("id",j)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function I1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function C1(){var t;const r=(t=Sh())==null?void 0:t.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function N1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function D1(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function O1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function V1(){const r=Ze();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function M1(){return!C1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function NT(){try{return typeof indexedDB=="object"}catch{return!1}}function DT(){return new Promise((r,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;t(((u=l.error)==null?void 0:u.message)||"")}}catch(n){t(n)}})}function x1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="FirebaseError";class Li extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=k1,Object.setPrototypeOf(this,Li.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sa.prototype.create)}}class sa{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},l=`${this.service}/${t}`,u=this.errors[t],f=u?P1(u,s):"Error",g=`${this.serviceName}: ${f} (${l}).`;return new Li(l,g,s)}}function P1(r,t){return r.replace(L1,(n,s)=>{const l=t[s];return l!=null?String(l):`<${s}?>`})}const L1=/\{\$([^}]+)}/g;function U1(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}function $s(r,t){if(r===t)return!0;const n=Object.keys(r),s=Object.keys(t);for(const l of n){if(!s.includes(l))return!1;const u=r[l],f=t[l];if(Ov(u)&&Ov(f)){if(!$s(u,f))return!1}else if(u!==f)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Ov(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nu(r){const t=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function Ol(r){const t={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,u]=s.split("=");t[decodeURIComponent(l)]=decodeURIComponent(u)}}),t}function Vl(r){const t=r.indexOf("?");if(!t)return"";const n=r.indexOf("#",t);return r.substring(t,n>0?n:void 0)}function z1(r,t){const n=new j1(r,t);return n.subscribe.bind(n)}class j1{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let l;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");B1(t,["next","error","complete"])?l=t:l={next:t,error:n,complete:s},l.next===void 0&&(l.next=tm),l.error===void 0&&(l.error=tm),l.complete===void 0&&(l.complete=tm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function B1(r,t){if(typeof r!="object"||r===null)return!1;for(const n of t)if(n in r&&typeof r[n]=="function")return!0;return!1}function tm(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(r){return r&&r._delegate?r._delegate:r}class ii{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q1{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new S1;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(F1(t))try{this.getOrInitializeService({instanceIdentifier:Gs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(t=Gs){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Gs){return this.instances.has(t)}getOptions(t=Gs){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const g=this.normalizeInstanceIdentifier(u);s===g&&f.resolve(l)}return l}onInit(t,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(t),this.onInitCallbacks.set(s,l);const u=this.instances.get(s);return u&&t(u,s),()=>{l.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:H1(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=Gs){return this.component?this.component.multipleInstances?t:Gs:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function H1(r){return r===Gs?void 0:r}function F1(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new q1(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Nt||(Nt={}));const K1={debug:Nt.DEBUG,verbose:Nt.VERBOSE,info:Nt.INFO,warn:Nt.WARN,error:Nt.ERROR,silent:Nt.SILENT},Y1=Nt.INFO,Q1={[Nt.DEBUG]:"log",[Nt.VERBOSE]:"log",[Nt.INFO]:"info",[Nt.WARN]:"warn",[Nt.ERROR]:"error"},X1=(r,t,...n)=>{if(t<r.logLevel)return;const s=new Date().toISOString(),l=Q1[t];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Jm{constructor(t){this.name=t,this._logLevel=Y1,this._logHandler=X1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in Nt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?K1[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,Nt.DEBUG,...t),this._logHandler(this,Nt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,Nt.VERBOSE,...t),this._logHandler(this,Nt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,Nt.INFO,...t),this._logHandler(this,Nt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,Nt.WARN,...t),this._logHandler(this,Nt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,Nt.ERROR,...t),this._logHandler(this,Nt.ERROR,...t)}}const $1=(r,t)=>t.some(n=>r instanceof n);let Vv,Mv;function J1(){return Vv||(Vv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Z1(){return Mv||(Mv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const OT=new WeakMap,_m=new WeakMap,VT=new WeakMap,em=new WeakMap,Zm=new WeakMap;function W1(r){const t=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(ar(r.result)),l()},f=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&OT.set(n,r)}).catch(()=>{}),Zm.set(t,r),t}function tw(r){if(_m.has(r))return;const t=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),l()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});_m.set(r,t)}let vm={get(r,t,n){if(r instanceof IDBTransaction){if(t==="done")return _m.get(r);if(t==="objectStoreNames")return r.objectStoreNames||VT.get(r);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ar(r[t])},set(r,t,n){return r[t]=n,!0},has(r,t){return r instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in r}};function ew(r){vm=r(vm)}function nw(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=r.call(nm(this),t,...n);return VT.set(s,t.sort?t.sort():[t]),ar(s)}:Z1().includes(r)?function(...t){return r.apply(nm(this),t),ar(OT.get(this))}:function(...t){return ar(r.apply(nm(this),t))}}function iw(r){return typeof r=="function"?nw(r):(r instanceof IDBTransaction&&tw(r),$1(r,J1())?new Proxy(r,vm):r)}function ar(r){if(r instanceof IDBRequest)return W1(r);if(em.has(r))return em.get(r);const t=iw(r);return t!==r&&(em.set(r,t),Zm.set(t,r)),t}const nm=r=>Zm.get(r);function bh(r,t,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const f=indexedDB.open(r,t),g=ar(f);return s&&f.addEventListener("upgradeneeded",y=>{s(ar(f.result),y.oldVersion,y.newVersion,ar(f.transaction),y)}),n&&f.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),g.then(y=>{u&&y.addEventListener("close",()=>u()),l&&y.addEventListener("versionchange",p=>l(p.oldVersion,p.newVersion,p))}).catch(()=>{}),g}function im(r,{blocked:t}={}){const n=indexedDB.deleteDatabase(r);return t&&n.addEventListener("blocked",s=>t(s.oldVersion,s)),ar(n).then(()=>{})}const rw=["get","getKey","getAll","getAllKeys","count"],sw=["put","add","delete","clear"],rm=new Map;function xv(r,t){if(!(r instanceof IDBDatabase&&!(t in r)&&typeof t=="string"))return;if(rm.get(t))return rm.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,l=sw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||rw.includes(n)))return;const u=async function(f,...g){const y=this.transaction(f,l?"readwrite":"readonly");let p=y.store;return s&&(p=p.index(g.shift())),(await Promise.all([p[n](...g),l&&y.done]))[0]};return rm.set(t,u),u}ew(r=>({...r,get:(t,n,s)=>xv(t,n)||r.get(t,n,s),has:(t,n)=>!!xv(t,n)||r.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ow(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function ow(r){const t=r.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Em="@firebase/app",kv="0.14.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ur=new Jm("@firebase/app"),lw="@firebase/app-compat",uw="@firebase/analytics-compat",cw="@firebase/analytics",hw="@firebase/app-check-compat",fw="@firebase/app-check",dw="@firebase/auth",mw="@firebase/auth-compat",gw="@firebase/database",pw="@firebase/data-connect",yw="@firebase/database-compat",_w="@firebase/functions",vw="@firebase/functions-compat",Ew="@firebase/installations",Tw="@firebase/installations-compat",Aw="@firebase/messaging",Sw="@firebase/messaging-compat",bw="@firebase/performance",ww="@firebase/performance-compat",Rw="@firebase/remote-config",Iw="@firebase/remote-config-compat",Cw="@firebase/storage",Nw="@firebase/storage-compat",Dw="@firebase/firestore",Ow="@firebase/ai",Vw="@firebase/firestore-compat",Mw="firebase",xw="12.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tm="[DEFAULT]",kw={[Em]:"fire-core",[lw]:"fire-core-compat",[cw]:"fire-analytics",[uw]:"fire-analytics-compat",[fw]:"fire-app-check",[hw]:"fire-app-check-compat",[dw]:"fire-auth",[mw]:"fire-auth-compat",[gw]:"fire-rtdb",[pw]:"fire-data-connect",[yw]:"fire-rtdb-compat",[_w]:"fire-fn",[vw]:"fire-fn-compat",[Ew]:"fire-iid",[Tw]:"fire-iid-compat",[Aw]:"fire-fcm",[Sw]:"fire-fcm-compat",[bw]:"fire-perf",[ww]:"fire-perf-compat",[Rw]:"fire-rc",[Iw]:"fire-rc-compat",[Cw]:"fire-gcs",[Nw]:"fire-gcs-compat",[Dw]:"fire-fst",[Vw]:"fire-fst-compat",[Ow]:"fire-vertex","fire-js":"fire-js",[Mw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sh=new Map,Pw=new Map,Am=new Map;function Pv(r,t){try{r.container.addComponent(t)}catch(n){ur.debug(`Component ${t.name} failed to register with FirebaseApp ${r.name}`,n)}}function ki(r){const t=r.name;if(Am.has(t))return ur.debug(`There were multiple attempts to register component ${t}.`),!1;Am.set(t,r);for(const n of sh.values())Pv(n,r);for(const n of Pw.values())Pv(n,r);return!0}function po(r,t){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(t)}function Un(r){return r==null?!1:r.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Zr=new sa("app","Firebase",Lw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{constructor(t,n,s){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ii("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Zr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=xw;function MT(r,t={}){let n=r;typeof t!="object"&&(t={name:t});const s={name:Tm,automaticDataCollectionEnabled:!0,...t},l=s.name;if(typeof l!="string"||!l)throw Zr.create("bad-app-name",{appName:String(l)});if(n||(n=wT()),!n)throw Zr.create("no-options");const u=sh.get(l);if(u){if($s(n,u.options)&&$s(s,u.config))return u;throw Zr.create("duplicate-app",{appName:l})}const f=new G1(l);for(const y of Am.values())f.addComponent(y);const g=new Uw(n,s,f);return sh.set(l,g),g}function Wm(r=Tm){const t=sh.get(r);if(!t&&r===Tm&&wT())return MT();if(!t)throw Zr.create("no-app",{appName:r});return t}function jn(r,t,n){let s=kw[r]??r;n&&(s+=`-${n}`);const l=s.match(/\s|\//),u=t.match(/\s|\//);if(l||u){const f=[`Unable to register library "${s}" with version "${t}":`];l&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ur.warn(f.join(" "));return}ki(new ii(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zw="firebase-heartbeat-database",jw=1,Hl="firebase-heartbeat-store";let sm=null;function xT(){return sm||(sm=bh(zw,jw,{upgrade:(r,t)=>{switch(t){case 0:try{r.createObjectStore(Hl)}catch(n){console.warn(n)}}}}).catch(r=>{throw Zr.create("idb-open",{originalErrorMessage:r.message})})),sm}async function Bw(r){try{const n=(await xT()).transaction(Hl),s=await n.objectStore(Hl).get(kT(r));return await n.done,s}catch(t){if(t instanceof Li)ur.warn(t.message);else{const n=Zr.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ur.warn(n.message)}}}async function Lv(r,t){try{const s=(await xT()).transaction(Hl,"readwrite");await s.objectStore(Hl).put(t,kT(r)),await s.done}catch(n){if(n instanceof Li)ur.warn(n.message);else{const s=Zr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ur.warn(s.message)}}}function kT(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=1024,Hw=30;class Fw{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Kw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Uv();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>Hw){const f=Yw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ur.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Uv(),{heartbeatsToSend:s,unsentEntries:l}=Gw(this._heartbeatsCache.heartbeats),u=rh(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return ur.warn(n),""}}}function Uv(){return new Date().toISOString().substring(0,10)}function Gw(r,t=qw){const n=[];let s=r.slice();for(const l of r){const u=n.find(f=>f.agent===l.agent);if(u){if(u.dates.push(l.date),zv(n)>t){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),zv(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Kw{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return NT()?DT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Bw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return Lv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return Lv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function zv(r){return rh(JSON.stringify({version:2,heartbeats:r})).length}function Yw(r){if(r.length===0)return-1;let t=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qw(r){ki(new ii("platform-logger",t=>new aw(t),"PRIVATE")),ki(new ii("heartbeat",t=>new Fw(t),"PRIVATE")),jn(Em,kv,r),jn(Em,kv,"esm2020"),jn("fire-js","")}Qw("");function PT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xw=PT,LT=new sa("auth","Firebase",PT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ah=new Jm("@firebase/auth");function $w(r,...t){ah.logLevel<=Nt.WARN&&ah.warn(`Auth (${yo}): ${r}`,...t)}function Qc(r,...t){ah.logLevel<=Nt.ERROR&&ah.error(`Auth (${yo}): ${r}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(r,...t){throw tg(r,...t)}function Di(r,...t){return tg(r,...t)}function UT(r,t,n){const s={...Xw(),[t]:n};return new sa("auth","Firebase",s).create(t,{appName:r.name})}function or(r){return UT(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function tg(r,...t){if(typeof r!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return LT.create(r,...t)}function ft(r,t,...n){if(!r)throw tg(t,...n)}function rr(r){const t="INTERNAL ASSERTION FAILED: "+r;throw Qc(t),new Error(t)}function cr(r,t){r||rr(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function Jw(){return jv()==="http:"||jv()==="https:"}function jv(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Jw()||D1()||"connection"in navigator)?navigator.onLine:!0}function Ww(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(t,n){this.shortDelay=t,this.longDelay=n,cr(n>t,"Short delay should be less than long delay!"),this.isMobile=I1()||O1()}get(){return Zw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(r,t){cr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zT{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;rr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;rr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;rr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],nR=new iu(3e4,6e4);function us(r,t){return r.tenantId&&!t.tenantId?{...t,tenantId:r.tenantId}:t}async function cs(r,t,n,s,l={}){return jT(r,l,async()=>{let u={},f={};s&&(t==="GET"?f=s:u={body:JSON.stringify(s)});const g=nu({key:r.config.apiKey,...f}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const p={method:t,headers:y,...u};return N1()||(p.referrerPolicy="no-referrer"),r.emulatorConfig&&go(r.emulatorConfig.host)&&(p.credentials="include"),zT.fetch()(await BT(r,r.config.apiHost,n,g),p)})}async function jT(r,t,n){r._canInitEmulator=!1;const s={...tR,...t};try{const l=new rR(r),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw qc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const g=u.ok?f.errorMessage:f.error.message,[y,p]=g.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw qc(r,"credential-already-in-use",f);if(y==="EMAIL_EXISTS")throw qc(r,"email-already-in-use",f);if(y==="USER_DISABLED")throw qc(r,"user-disabled",f);const T=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw UT(r,T,p);ri(r,T)}}catch(l){if(l instanceof Li)throw l;ri(r,"network-request-failed",{message:String(l)})}}async function ru(r,t,n,s,l={}){const u=await cs(r,t,n,s,l);return"mfaPendingCredential"in u&&ri(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function BT(r,t,n,s){const l=`${t}${n}?${s}`,u=r,f=u.config.emulator?eg(r.config,l):`${r.config.apiScheme}://${l}`;return eR.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function iR(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class rR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Di(this.auth,"network-request-failed")),nR.get())})}}function qc(r,t,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=Di(r,t,s);return l.customData._tokenResponse=n,l}function Bv(r){return r!==void 0&&r.enterprise!==void 0}class sR{constructor(t){if(this.siteKey="",this.recaptchaEnforcementState=[],t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=t.recaptchaEnforcementState}getProviderEnforcementState(t){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===t)return iR(n.enforcementState);return null}isProviderEnabled(t){return this.getProviderEnforcementState(t)==="ENFORCE"||this.getProviderEnforcementState(t)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function aR(r,t){return cs(r,"GET","/v2/recaptchaConfig",us(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oR(r,t){return cs(r,"POST","/v1/accounts:delete",t)}async function oh(r,t){return cs(r,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ul(r){if(r)try{const t=new Date(Number(r));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function lR(r,t=!1){const n=ye(r),s=await n.getIdToken(t),l=ng(s);ft(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:Ul(am(l.auth_time)),issuedAtTime:Ul(am(l.iat)),expirationTime:Ul(am(l.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function am(r){return Number(r)*1e3}function ng(r){const[t,n,s]=r.split(".");if(t===void 0||n===void 0||s===void 0)return Qc("JWT malformed, contained fewer than 3 sections"),null;try{const l=ST(n);return l?JSON.parse(l):(Qc("Failed to decode base64 JWT payload"),null)}catch(l){return Qc("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function qv(r){const t=ng(r);return ft(t,"internal-error"),ft(typeof t.exp<"u","internal-error"),ft(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fl(r,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof Li&&uR(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function uR({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ul(this.lastLoginAt),this.creationTime=Ul(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lh(r){var S;const t=r.auth,n=await r.getIdToken(),s=await Fl(r,oh(t,{idToken:n}));ft(s==null?void 0:s.users.length,t,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const u=(S=l.providerUserInfo)!=null&&S.length?qT(l.providerUserInfo):[],f=fR(r.providerData,u),g=r.isAnonymous,y=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),p=g?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new bm(l.createdAt,l.lastLoginAt),isAnonymous:p};Object.assign(r,T)}async function hR(r){const t=ye(r);await lh(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function fR(r,t){return[...r.filter(s=>!t.some(l=>l.providerId===s.providerId)),...t]}function qT(r){return r.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dR(r,t){const n=await jT(r,{},async()=>{const s=nu({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,f=await BT(r,l,"/v1/token",`key=${u}`),g=await r._getAdditionalHeaders();g["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:g,body:s};return r.emulatorConfig&&go(r.emulatorConfig.host)&&(y.credentials="include"),zT.fetch()(f,y)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function mR(r,t){return cs(r,"POST","/v2/accounts:revokeToken",us(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){ft(t.idToken,"internal-error"),ft(typeof t.idToken<"u","internal-error"),ft(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):qv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){ft(t.length!==0,"internal-error");const n=qv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ft(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await dR(t,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,f=new ro;return s&&(ft(typeof s=="string","internal-error",{appName:t}),f.refreshToken=s),l&&(ft(typeof l=="string","internal-error",{appName:t}),f.accessToken=l),u&&(ft(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return rr("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kr(r,t){ft(typeof r=="string"||typeof r>"u","internal-error",{appName:t})}class Wn{constructor({uid:t,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new cR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new bm(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(t){const n=await Fl(this,this.stsTokenManager.getToken(this.auth,t));return ft(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return lR(this,t)}reload(){return hR(this)}_assign(t){this!==t&&(ft(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Wn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){ft(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await lh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Un(this.auth.app))return Promise.reject(or(this.auth));const t=await this.getIdToken();return await Fl(this,oR(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const s=n.displayName??void 0,l=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,g=n.tenantId??void 0,y=n._redirectEventId??void 0,p=n.createdAt??void 0,T=n.lastLoginAt??void 0,{uid:S,emailVerified:w,isAnonymous:j,providerData:J,stsTokenManager:Z}=n;ft(S&&Z,t,"internal-error");const W=ro.fromJSON(this.name,Z);ft(typeof S=="string",t,"internal-error"),Kr(s,t.name),Kr(l,t.name),ft(typeof w=="boolean",t,"internal-error"),ft(typeof j=="boolean",t,"internal-error"),Kr(u,t.name),Kr(f,t.name),Kr(g,t.name),Kr(y,t.name),Kr(p,t.name),Kr(T,t.name);const mt=new Wn({uid:S,auth:t,email:l,emailVerified:w,displayName:s,isAnonymous:j,photoURL:f,phoneNumber:u,tenantId:g,stsTokenManager:W,createdAt:p,lastLoginAt:T});return J&&Array.isArray(J)&&(mt.providerData=J.map(vt=>({...vt}))),y&&(mt._redirectEventId=y),mt}static async _fromIdTokenResponse(t,n,s=!1){const l=new ro;l.updateFromServerResponse(n);const u=new Wn({uid:n.localId,auth:t,stsTokenManager:l,isAnonymous:s});return await lh(u),u}static async _fromGetAccountInfoResponse(t,n,s){const l=n.users[0];ft(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?qT(l.providerUserInfo):[],f=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),g=new ro;g.updateFromIdToken(s);const y=new Wn({uid:l.localId,auth:t,stsTokenManager:g,isAnonymous:f}),p={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new bm(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,p),y}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hv=new Map;function sr(r){cr(r instanceof Function,"Expected a class definition");let t=Hv.get(r);return t?(cr(t instanceof r,"Instance stored in cache mismatched with class"),t):(t=new r,Hv.set(r,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HT{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}HT.type="NONE";const Fv=HT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xc(r,t,n){return`firebase:${r}:${t}:${n}`}class so{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=Xc(this.userKey,l.apiKey,u),this.fullPersistenceKey=Xc("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await oh(this.auth,{idToken:t}).catch(()=>{});return n?Wn._fromGetAccountInfoResponse(this.auth,n,t):null}return Wn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new so(sr(Fv),t,s);const l=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let u=l[0]||sr(Fv);const f=Xc(s,t.config.apiKey,t.name);let g=null;for(const p of n)try{const T=await p._get(f);if(T){let S;if(typeof T=="string"){const w=await oh(t,{idToken:T}).catch(()=>{});if(!w)break;S=await Wn._fromGetAccountInfoResponse(t,w,T)}else S=Wn._fromJSON(t,T);p!==u&&(g=S),u=p;break}}catch{}const y=l.filter(p=>p._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new so(u,t,s):(u=y[0],g&&await u._set(f,g.toJSON()),await Promise.all(n.map(async p=>{if(p!==u)try{await p._remove(f)}catch{}})),new so(u,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gv(r){const t=r.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(YT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(FT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(XT(t))return"Blackberry";if($T(t))return"Webos";if(GT(t))return"Safari";if((t.includes("chrome/")||KT(t))&&!t.includes("edge/"))return"Chrome";if(QT(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function FT(r=Ze()){return/firefox\//i.test(r)}function GT(r=Ze()){const t=r.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function KT(r=Ze()){return/crios\//i.test(r)}function YT(r=Ze()){return/iemobile/i.test(r)}function QT(r=Ze()){return/android/i.test(r)}function XT(r=Ze()){return/blackberry/i.test(r)}function $T(r=Ze()){return/webos/i.test(r)}function ig(r=Ze()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function gR(r=Ze()){var t;return ig(r)&&!!((t=window.navigator)!=null&&t.standalone)}function pR(){return V1()&&document.documentMode===10}function JT(r=Ze()){return ig(r)||QT(r)||$T(r)||XT(r)||/windows phone/i.test(r)||YT(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(r,t=[]){let n;switch(r){case"Browser":n=Gv(Ze());break;case"Worker":n=`${Gv(Ze())}-${r}`;break;default:n=r}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${yo}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=u=>new Promise((f,g)=>{try{const y=t(u);f(y)}catch(y){g(y)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _R(r,t={}){return cs(r,"GET","/v2/passwordPolicy",us(r,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vR=6;class ER{constructor(t){var s;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??vR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=t.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),l&&(n.meetsMaxPasswordLength=t.length<=l)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<t.length;l++)s=t.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TR{constructor(t,n,s,l){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Kv(this),this.idTokenSubscription=new Kv(this),this.beforeStateQueue=new yR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=LT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=sr(n)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await so.create(this,t),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((l=this._popupRedirectResolver)!=null&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await oh(this,{idToken:t}),s=await Wn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var u;if(Un(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(g=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(g,g))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,g=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(t);(!f||f===g)&&(y!=null&&y.user)&&(s=y.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(f){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ft(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await lh(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=Ww()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Un(this.app))return Promise.reject(or(this));const n=t?ye(t):null;return n&&ft(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&ft(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Un(this.app)?Promise.reject(or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Un(this.app)?Promise.reject(or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(sr(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await _R(this),n=new ER(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new sa("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await mR(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&sr(t)||this._popupRedirectResolver;ft(n,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[sr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const g=this._isInitialized?Promise.resolve():this._initializationPromise;if(ft(g,this,"internal-error"),g.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const y=t.addObserver(n,s,l);return()=>{f=!0,y()}}else{const y=t.addObserver(n);return()=>{f=!0,y()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return ft(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ZT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var l;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((l=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:l.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var n;if(Un(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&$w(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function aa(r){return ye(r)}class Kv{constructor(t){this.auth=t,this.observer=null,this.addObserver=z1(n=>this.observer=n)}get next(){return ft(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function AR(r){wh=r}function WT(r){return wh.loadJS(r)}function SR(){return wh.recaptchaEnterpriseScript}function bR(){return wh.gapiScript}function wR(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class RR{constructor(){this.enterprise=new IR}ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}class IR{ready(t){t()}execute(t,n){return Promise.resolve("token")}render(t,n){return""}}const CR="recaptcha-enterprise",t0="NO_RECAPTCHA";class NR{constructor(t){this.type=CR,this.auth=aa(t)}async verify(t="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,g)=>{aR(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)g(new Error("recaptcha Enterprise site key undefined"));else{const p=new sR(y);return u.tenantId==null?u._agentRecaptchaConfig=p:u._tenantRecaptchaConfigs[u.tenantId]=p,f(p.siteKey)}}).catch(y=>{g(y)})})}function l(u,f,g){const y=window.grecaptcha;Bv(y)?y.enterprise.ready(()=>{y.enterprise.execute(u,{action:t}).then(p=>{f(p)}).catch(()=>{f(t0)})}):g(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new RR().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(g=>{if(!n&&Bv(window.grecaptcha))l(g,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let y=SR();y.length!==0&&(y+=g),WT(y).then(()=>{l(g,u,f)}).catch(p=>{f(p)})}}).catch(g=>{f(g)})})}}async function Yv(r,t,n,s=!1,l=!1){const u=new NR(r);let f;if(l)f=t0;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const g={...t};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in g){const y=g.phoneEnrollmentInfo.phoneNumber,p=g.phoneEnrollmentInfo.recaptchaToken;Object.assign(g,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:p,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in g){const y=g.phoneSignInInfo.recaptchaToken;Object.assign(g,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return g}return s?Object.assign(g,{captchaResp:f}):Object.assign(g,{captchaResponse:f}),Object.assign(g,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(g,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),g}async function wm(r,t,n,s,l){var u;if((u=r._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Yv(r,t,n,n==="getOobCode");return s(r,f)}else return s(r,t).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const g=await Yv(r,t,n,n==="getOobCode");return s(r,g)}else return Promise.reject(f)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DR(r,t){const n=po(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if($s(u,t??{}))return l;ri(l,"already-initialized")}return n.initialize({options:t})}function OR(r,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(sr);t!=null&&t.errorMap&&r._updateErrorMap(t.errorMap),r._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function VR(r,t,n){const s=aa(r);ft(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const l=!1,u=e0(t),{host:f,port:g}=MR(t),y=g===null?"":`:${g}`,p={url:`${u}//${f}${y}/`},T=Object.freeze({host:f,port:g,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){ft(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),ft($s(p,s.config.emulator)&&$s(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=p,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,go(f)?(IT(`${u}//${f}${y}`),CT("Auth",!0)):xR()}function e0(r){const t=r.indexOf(":");return t<0?"":r.substr(0,t+1)}function MR(r){const t=e0(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:Qv(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:Qv(f)}}}function Qv(r){if(!r)return null;const t=Number(r);return isNaN(t)?null:t}function xR(){function r(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rg{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return rr("not implemented")}_getIdTokenResponse(t){return rr("not implemented")}_linkToIdToken(t,n){return rr("not implemented")}_getReauthenticationResolver(t){return rr("not implemented")}}async function kR(r,t){return cs(r,"POST","/v1/accounts:signUp",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(r,t){return ru(r,"POST","/v1/accounts:signInWithPassword",us(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(r,t){return ru(r,"POST","/v1/accounts:signInWithEmailLink",us(r,t))}async function UR(r,t){return ru(r,"POST","/v1/accounts:signInWithEmailLink",us(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl extends rg{constructor(t,n,s,l=null){super("password",s),this._email=t,this._password=n,this._tenantId=l}static _fromEmailAndPassword(t,n){return new Gl(t,n,"password")}static _fromEmailAndCode(t,n,s=null){return new Gl(t,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wm(t,n,"signInWithPassword",PR);case"emailLink":return LR(t,{email:this._email,oobCode:this._password});default:ri(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return wm(t,s,"signUpPassword",kR);case"emailLink":return UR(t,{idToken:n,email:this._email,oobCode:this._password});default:ri(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ao(r,t){return ru(r,"POST","/v1/accounts:signInWithIdp",us(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zR="http://localhost";class Js extends rg{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Js(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ri("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:l,...u}=n;if(!s||!l)return null;const f=new Js(s,l);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return ao(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,ao(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,ao(t,n)}buildRequest(){const t={requestUri:zR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=nu(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BR(r){const t=Ol(Vl(r)).link,n=t?Ol(Vl(t)).deep_link_id:null,s=Ol(Vl(r)).deep_link_id;return(s?Ol(Vl(s)).link:null)||s||n||t||r}class sg{constructor(t){const n=Ol(Vl(t)),s=n.apiKey??null,l=n.oobCode??null,u=jR(n.mode??null);ft(s&&l&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=l,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(t){const n=BR(t);try{return new sg(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(){this.providerId=_o.PROVIDER_ID}static credential(t,n){return Gl._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const s=sg.parseLink(n);return ft(s,"argument-error"),Gl._fromEmailAndCode(t,s.code,s.tenantId)}}_o.PROVIDER_ID="password";_o.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_o.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su extends n0{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr extends su{constructor(){super("facebook.com")}static credential(t){return Js._fromParams({providerId:Yr.PROVIDER_ID,signInMethod:Yr.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Yr.credentialFromTaggedObject(t)}static credentialFromError(t){return Yr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Yr.credential(t.oauthAccessToken)}catch{return null}}}Yr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Yr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends su{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Js._fromParams({providerId:Qr.PROVIDER_ID,signInMethod:Qr.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Qr.credentialFromTaggedObject(t)}static credentialFromError(t){return Qr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Qr.credential(n,s)}catch{return null}}}Qr.GOOGLE_SIGN_IN_METHOD="google.com";Qr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr extends su{constructor(){super("github.com")}static credential(t){return Js._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Xr.credentialFromTaggedObject(t)}static credentialFromError(t){return Xr.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Xr.credential(t.oauthAccessToken)}catch{return null}}}Xr.GITHUB_SIGN_IN_METHOD="github.com";Xr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r extends su{constructor(){super("twitter.com")}static credential(t,n){return Js._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return $r.credentialFromTaggedObject(t)}static credentialFromError(t){return $r.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return $r.credential(n,s)}catch{return null}}}$r.TWITTER_SIGN_IN_METHOD="twitter.com";$r.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qR(r,t){return ru(r,"POST","/v1/accounts:signUp",us(r,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,l=!1){const u=await Wn._fromIdTokenResponse(t,s,l),f=Xv(s);return new Zs({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const l=Xv(s);return new Zs({user:t,providerId:l,_tokenResponse:s,operationType:n})}}function Xv(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh extends Li{constructor(t,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,uh.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,l){return new uh(t,n,s,l)}}function i0(r,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?uh._fromErrorAndOperation(r,u,t,s):u})}async function HR(r,t,n=!1){const s=await Fl(r,t._linkToIdToken(r.auth,await r.getIdToken()),n);return Zs._forOperation(r,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FR(r,t,n=!1){const{auth:s}=r;if(Un(s.app))return Promise.reject(or(s));const l="reauthenticate";try{const u=await Fl(r,i0(s,l,t,r),n);ft(u.idToken,s,"internal-error");const f=ng(u.idToken);ft(f,s,"internal-error");const{sub:g}=f;return ft(r.uid===g,s,"user-mismatch"),Zs._forOperation(r,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&ri(s,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0(r,t,n=!1){if(Un(r.app))return Promise.reject(or(r));const s="signIn",l=await i0(r,s,t),u=await Zs._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(u.user),u}async function GR(r,t){return r0(aa(r),t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(r){const t=aa(r);t._getPasswordPolicyInternal()&&await t._updatePasswordPolicy()}async function KR(r,t,n){if(Un(r.app))return Promise.reject(or(r));const s=aa(r),f=await wm(s,{returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",qR).catch(y=>{throw y.code==="auth/password-does-not-meet-requirements"&&s0(r),y}),g=await Zs._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(g.user),g}function YR(r,t,n){return Un(r.app)?Promise.reject(or(r)):GR(ye(r),_o.credential(t,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&s0(r),s})}function QR(r,t,n,s){return ye(r).onIdTokenChanged(t,n,s)}function XR(r,t,n){return ye(r).beforeAuthStateChanged(t,n)}function $R(r,t,n,s){return ye(r).onAuthStateChanged(t,n,s)}function a0(r){return ye(r).signOut()}const ch="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ch,"1"),this.storage.removeItem(ch),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JR=1e3,ZR=10;class l0 extends o0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=JT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&t(n,l,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,g,y)=>{this.notifyListeners(f,y)});return}const s=t.key;n?this.detachListener():this.stopPolling();const l=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);pR()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(l,ZR):l()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},JR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}l0.type="LOCAL";const WR=l0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0 extends o0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}u0.type="SESSION";const c0=u0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tI(r){return Promise.all(r.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(l=>l.isListeningto(t));if(n)return n;const s=new Rh(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:l,data:u}=n.data,f=this.handlersMap[l];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const g=Array.from(f).map(async p=>p(n.origin,u)),y=await tI(g);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:y})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Rh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(r="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return r+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eI{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,f;return new Promise((g,y)=>{const p=ag("",20);l.port1.start();const T=setTimeout(()=>{y(new Error("unsupported_event"))},s);f={messageChannel:l,onMessage(S){const w=S;if(w.data.eventId===p)switch(w.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),g(w.data.response);break;default:clearTimeout(T),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(f),l.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:p,data:n},[l.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(){return window}function nI(r){Oi().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(){return typeof Oi().WorkerGlobalScope<"u"&&typeof Oi().importScripts=="function"}async function iI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function sI(){return h0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f0="firebaseLocalStorageDb",aI=1,hh="firebaseLocalStorage",d0="fbase_key";class au{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ih(r,t){return r.transaction([hh],t?"readwrite":"readonly").objectStore(hh)}function oI(){const r=indexedDB.deleteDatabase(f0);return new au(r).toPromise()}function Rm(){const r=indexedDB.open(f0,aI);return new Promise((t,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(hh,{keyPath:d0})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(hh)?t(s):(s.close(),await oI(),t(await Rm()))})})}async function $v(r,t,n){const s=Ih(r,!0).put({[d0]:t,value:n});return new au(s).toPromise()}async function lI(r,t){const n=Ih(r,!1).get(t),s=await new au(n).toPromise();return s===void 0?null:s.value}function Jv(r,t){const n=Ih(r,!0).delete(t);return new au(n).toPromise()}const uI=800,cI=3;class m0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Rm(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>cI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return h0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Rh._getInstance(sI()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await iI(),!this.activeServiceWorker)return;this.sender=new eI(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(s=t[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||rI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Rm();return await $v(t,ch,"1"),await Jv(t,ch),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>$v(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>lI(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Jv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(l=>{const u=Ih(l,!1).getAll();return new au(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:l,value:u}of t)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}m0.type="LOCAL";const hI=m0;new iu(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(r,t){return t?sr(t):(ft(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class og extends rg{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return ao(t,this._buildIdpRequest())}_linkToIdToken(t,n){return ao(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return ao(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function dI(r){return r0(r.auth,new og(r),r.bypassAuthState)}function mI(r){const{auth:t,user:n}=r;return ft(n,t,"internal-error"),FR(n,new og(r),r.bypassAuthState)}async function gI(r){const{auth:t,user:n}=r;return ft(n,t,"internal-error"),HR(n,new og(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g0{constructor(t,n,s,l,u=!1){this.auth=t,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:f,type:g}=t;if(f){this.reject(f);return}const y={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(g)(y))}catch(p){this.reject(p)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return dI;case"linkViaPopup":case"linkViaRedirect":return gI;case"reauthViaPopup":case"reauthViaRedirect":return mI;default:ri(this.auth,"internal-error")}}resolve(t){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=new iu(2e3,1e4);class io extends g0{constructor(t,n,s,l,u){super(t,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,io.currentPopupAction&&io.currentPopupAction.cancel(),io.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return ft(t,this.auth,"internal-error"),t}async onExecution(){cr(this.filter.length===1,"Popup operations only handle one event");const t=ag();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Di(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(Di(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,io.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Di(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,pI.get())};t()}}io.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI="pendingRedirect",$c=new Map;class _I extends g0{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=$c.get(this.auth._key());if(!t){try{const s=await vI(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}$c.set(this.auth._key(),t)}return this.bypassAuthState||$c.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function vI(r,t){const n=AI(t),s=TI(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function EI(r,t){$c.set(r._key(),t)}function TI(r){return sr(r._redirectPersistence)}function AI(r){return Xc(yI,r.config.apiKey,r.name)}async function SI(r,t,n=!1){if(Un(r.app))return Promise.reject(or(r));const s=aa(r),l=fI(s,t),f=await new _I(s,l,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI=600*1e3;class wI{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!RI(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!p0(t)){const l=((s=t.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(Di(this.auth,l))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=bI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Zv(t))}saveEventToCache(t){this.cachedEventUids.add(Zv(t)),this.lastProcessedEventTime=Date.now()}}function Zv(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(t=>t).join("-")}function p0({type:r,error:t}){return r==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function RI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return p0(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function II(r,t={}){return cs(r,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NI=/^https?/;async function DI(r){if(r.config.emulator)return;const{authorizedDomains:t}=await II(r);for(const n of t)try{if(OI(n))return}catch{}ri(r,"unauthorized-domain")}function OI(r){const t=Sm(),{protocol:n,hostname:s}=new URL(t);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!NI.test(n))return!1;if(CI.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VI=new iu(3e4,6e4);function Wv(){const r=Oi().___jsl;if(r!=null&&r.H){for(const t of Object.keys(r.H))if(r.H[t].r=r.H[t].r||[],r.H[t].L=r.H[t].L||[],r.H[t].r=[...r.H[t].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function MI(r){return new Promise((t,n)=>{var l,u,f;function s(){Wv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Wv(),n(Di(r,"network-request-failed"))},timeout:VI.get()})}if((u=(l=Oi().gapi)==null?void 0:l.iframes)!=null&&u.Iframe)t(gapi.iframes.getContext());else if((f=Oi().gapi)!=null&&f.load)s();else{const g=wR("iframefcb");return Oi()[g]=()=>{gapi.load?s():n(Di(r,"network-request-failed"))},WT(`${bR()}?onload=${g}`).catch(y=>n(y))}}).catch(t=>{throw Jc=null,t})}let Jc=null;function xI(r){return Jc=Jc||MI(r),Jc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=new iu(5e3,15e3),PI="__/auth/iframe",LI="emulator/auth/iframe",UI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function jI(r){const t=r.config;ft(t.authDomain,r,"auth-domain-config-required");const n=t.emulator?eg(t,LI):`https://${r.config.authDomain}/${PI}`,s={apiKey:t.apiKey,appName:r.name,v:yo},l=zI.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${nu(s).slice(1)}`}async function BI(r){const t=await xI(r),n=Oi().gapi;return ft(n,r,"internal-error"),t.open({where:document.body,url:jI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UI,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const f=Di(r,"network-request-failed"),g=Oi().setTimeout(()=>{u(f)},kI.get());function y(){Oi().clearTimeout(g),l(s)}s.ping(y).then(y,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},HI=500,FI=600,GI="_blank",KI="http://localhost";class tE{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function YI(r,t,n,s=HI,l=FI){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let g="";const y={...qI,width:s.toString(),height:l.toString(),top:u,left:f},p=Ze().toLowerCase();n&&(g=KT(p)?GI:n),FT(p)&&(t=t||KI,y.scrollbars="yes");const T=Object.entries(y).reduce((w,[j,J])=>`${w}${j}=${J},`,"");if(gR(p)&&g!=="_self")return QI(t||"",g),new tE(null);const S=window.open(t||"",g,T);ft(S,r,"popup-blocked");try{S.focus()}catch{}return new tE(S)}function QI(r,t){const n=document.createElement("a");n.href=r,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XI="__/auth/handler",$I="emulator/auth/handler",JI=encodeURIComponent("fac");async function eE(r,t,n,s,l,u){ft(r.config.authDomain,r,"auth-domain-config-required"),ft(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:yo,eventId:l};if(t instanceof n0){t.setDefaultLanguage(r.languageCode),f.providerId=t.providerId||"",U1(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[T,S]of Object.entries({}))f[T]=S}if(t instanceof su){const T=t.getScopes().filter(S=>S!=="");T.length>0&&(f.scopes=T.join(","))}r.tenantId&&(f.tid=r.tenantId);const g=f;for(const T of Object.keys(g))g[T]===void 0&&delete g[T];const y=await r._getAppCheckToken(),p=y?`#${JI}=${encodeURIComponent(y)}`:"";return`${ZI(r)}?${nu(g).slice(1)}${p}`}function ZI({config:r}){return r.emulator?eg(r,$I):`https://${r.authDomain}/${XI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const om="webStorageSupport";class WI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=c0,this._completeRedirectFn=SI,this._overrideRedirectResult=EI}async _openPopup(t,n,s,l){var f;cr((f=this.eventManagers[t._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await eE(t,n,s,Sm(),l);return YI(t,u,ag())}async _openRedirect(t,n,s,l){await this._originValidation(t);const u=await eE(t,n,s,Sm(),l);return nI(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(cr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await BI(t),s=new wI(t);return n.register("authEvent",l=>(ft(l==null?void 0:l.authEvent,t,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(om,{type:om},l=>{var f;const u=(f=l==null?void 0:l[0])==null?void 0:f[om];u!==void 0&&n(!!u),ri(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=DI(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return JT()||GT()||ig()}}const tC=WI;var nE="@firebase/auth",iE="1.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ft(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nC(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iC(r){ki(new ii("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),l=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:g}=s.options;ft(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:f,authDomain:g,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ZT(r)},p=new TR(s,l,u,y);return OR(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),ki(new ii("auth-internal",t=>{const n=aa(t.getProvider("auth").getImmediate());return(s=>new eC(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(nE,iE,nC(r)),jn(nE,iE,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=300,sC=RT("authIdTokenMaxAge")||rC;let rE=null;const aC=r=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>sC)return;const l=n==null?void 0:n.token;rE!==l&&(rE=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function oC(r=Wm()){const t=po(r,"auth");if(t.isInitialized())return t.getImmediate();const n=DR(r,{popupRedirectResolver:tC,persistence:[hI,WR,c0]}),s=RT("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=aC(u.toString());XR(n,f,()=>f(n.currentUser)),QR(n,g=>f(g))}}const l=bT("auth");return l&&VR(n,`http://${l}`),n}function lC(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}AR({loadJS(r){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=t,s.onerror=l=>{const u=Di("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",lC().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iC("Browser");var sE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wr,y0;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(N,b){function C(){}C.prototype=b.prototype,N.F=b.prototype,N.prototype=new C,N.prototype.constructor=N,N.D=function(M,O,k){for(var R=Array(arguments.length-2),re=2;re<arguments.length;re++)R[re-2]=arguments[re];return b.prototype[O].apply(M,R)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(N,b,C){C||(C=0);const M=Array(16);if(typeof b=="string")for(var O=0;O<16;++O)M[O]=b.charCodeAt(C++)|b.charCodeAt(C++)<<8|b.charCodeAt(C++)<<16|b.charCodeAt(C++)<<24;else for(O=0;O<16;++O)M[O]=b[C++]|b[C++]<<8|b[C++]<<16|b[C++]<<24;b=N.g[0],C=N.g[1],O=N.g[2];let k=N.g[3],R;R=b+(k^C&(O^k))+M[0]+3614090360&4294967295,b=C+(R<<7&4294967295|R>>>25),R=k+(O^b&(C^O))+M[1]+3905402710&4294967295,k=b+(R<<12&4294967295|R>>>20),R=O+(C^k&(b^C))+M[2]+606105819&4294967295,O=k+(R<<17&4294967295|R>>>15),R=C+(b^O&(k^b))+M[3]+3250441966&4294967295,C=O+(R<<22&4294967295|R>>>10),R=b+(k^C&(O^k))+M[4]+4118548399&4294967295,b=C+(R<<7&4294967295|R>>>25),R=k+(O^b&(C^O))+M[5]+1200080426&4294967295,k=b+(R<<12&4294967295|R>>>20),R=O+(C^k&(b^C))+M[6]+2821735955&4294967295,O=k+(R<<17&4294967295|R>>>15),R=C+(b^O&(k^b))+M[7]+4249261313&4294967295,C=O+(R<<22&4294967295|R>>>10),R=b+(k^C&(O^k))+M[8]+1770035416&4294967295,b=C+(R<<7&4294967295|R>>>25),R=k+(O^b&(C^O))+M[9]+2336552879&4294967295,k=b+(R<<12&4294967295|R>>>20),R=O+(C^k&(b^C))+M[10]+4294925233&4294967295,O=k+(R<<17&4294967295|R>>>15),R=C+(b^O&(k^b))+M[11]+2304563134&4294967295,C=O+(R<<22&4294967295|R>>>10),R=b+(k^C&(O^k))+M[12]+1804603682&4294967295,b=C+(R<<7&4294967295|R>>>25),R=k+(O^b&(C^O))+M[13]+4254626195&4294967295,k=b+(R<<12&4294967295|R>>>20),R=O+(C^k&(b^C))+M[14]+2792965006&4294967295,O=k+(R<<17&4294967295|R>>>15),R=C+(b^O&(k^b))+M[15]+1236535329&4294967295,C=O+(R<<22&4294967295|R>>>10),R=b+(O^k&(C^O))+M[1]+4129170786&4294967295,b=C+(R<<5&4294967295|R>>>27),R=k+(C^O&(b^C))+M[6]+3225465664&4294967295,k=b+(R<<9&4294967295|R>>>23),R=O+(b^C&(k^b))+M[11]+643717713&4294967295,O=k+(R<<14&4294967295|R>>>18),R=C+(k^b&(O^k))+M[0]+3921069994&4294967295,C=O+(R<<20&4294967295|R>>>12),R=b+(O^k&(C^O))+M[5]+3593408605&4294967295,b=C+(R<<5&4294967295|R>>>27),R=k+(C^O&(b^C))+M[10]+38016083&4294967295,k=b+(R<<9&4294967295|R>>>23),R=O+(b^C&(k^b))+M[15]+3634488961&4294967295,O=k+(R<<14&4294967295|R>>>18),R=C+(k^b&(O^k))+M[4]+3889429448&4294967295,C=O+(R<<20&4294967295|R>>>12),R=b+(O^k&(C^O))+M[9]+568446438&4294967295,b=C+(R<<5&4294967295|R>>>27),R=k+(C^O&(b^C))+M[14]+3275163606&4294967295,k=b+(R<<9&4294967295|R>>>23),R=O+(b^C&(k^b))+M[3]+4107603335&4294967295,O=k+(R<<14&4294967295|R>>>18),R=C+(k^b&(O^k))+M[8]+1163531501&4294967295,C=O+(R<<20&4294967295|R>>>12),R=b+(O^k&(C^O))+M[13]+2850285829&4294967295,b=C+(R<<5&4294967295|R>>>27),R=k+(C^O&(b^C))+M[2]+4243563512&4294967295,k=b+(R<<9&4294967295|R>>>23),R=O+(b^C&(k^b))+M[7]+1735328473&4294967295,O=k+(R<<14&4294967295|R>>>18),R=C+(k^b&(O^k))+M[12]+2368359562&4294967295,C=O+(R<<20&4294967295|R>>>12),R=b+(C^O^k)+M[5]+4294588738&4294967295,b=C+(R<<4&4294967295|R>>>28),R=k+(b^C^O)+M[8]+2272392833&4294967295,k=b+(R<<11&4294967295|R>>>21),R=O+(k^b^C)+M[11]+1839030562&4294967295,O=k+(R<<16&4294967295|R>>>16),R=C+(O^k^b)+M[14]+4259657740&4294967295,C=O+(R<<23&4294967295|R>>>9),R=b+(C^O^k)+M[1]+2763975236&4294967295,b=C+(R<<4&4294967295|R>>>28),R=k+(b^C^O)+M[4]+1272893353&4294967295,k=b+(R<<11&4294967295|R>>>21),R=O+(k^b^C)+M[7]+4139469664&4294967295,O=k+(R<<16&4294967295|R>>>16),R=C+(O^k^b)+M[10]+3200236656&4294967295,C=O+(R<<23&4294967295|R>>>9),R=b+(C^O^k)+M[13]+681279174&4294967295,b=C+(R<<4&4294967295|R>>>28),R=k+(b^C^O)+M[0]+3936430074&4294967295,k=b+(R<<11&4294967295|R>>>21),R=O+(k^b^C)+M[3]+3572445317&4294967295,O=k+(R<<16&4294967295|R>>>16),R=C+(O^k^b)+M[6]+76029189&4294967295,C=O+(R<<23&4294967295|R>>>9),R=b+(C^O^k)+M[9]+3654602809&4294967295,b=C+(R<<4&4294967295|R>>>28),R=k+(b^C^O)+M[12]+3873151461&4294967295,k=b+(R<<11&4294967295|R>>>21),R=O+(k^b^C)+M[15]+530742520&4294967295,O=k+(R<<16&4294967295|R>>>16),R=C+(O^k^b)+M[2]+3299628645&4294967295,C=O+(R<<23&4294967295|R>>>9),R=b+(O^(C|~k))+M[0]+4096336452&4294967295,b=C+(R<<6&4294967295|R>>>26),R=k+(C^(b|~O))+M[7]+1126891415&4294967295,k=b+(R<<10&4294967295|R>>>22),R=O+(b^(k|~C))+M[14]+2878612391&4294967295,O=k+(R<<15&4294967295|R>>>17),R=C+(k^(O|~b))+M[5]+4237533241&4294967295,C=O+(R<<21&4294967295|R>>>11),R=b+(O^(C|~k))+M[12]+1700485571&4294967295,b=C+(R<<6&4294967295|R>>>26),R=k+(C^(b|~O))+M[3]+2399980690&4294967295,k=b+(R<<10&4294967295|R>>>22),R=O+(b^(k|~C))+M[10]+4293915773&4294967295,O=k+(R<<15&4294967295|R>>>17),R=C+(k^(O|~b))+M[1]+2240044497&4294967295,C=O+(R<<21&4294967295|R>>>11),R=b+(O^(C|~k))+M[8]+1873313359&4294967295,b=C+(R<<6&4294967295|R>>>26),R=k+(C^(b|~O))+M[15]+4264355552&4294967295,k=b+(R<<10&4294967295|R>>>22),R=O+(b^(k|~C))+M[6]+2734768916&4294967295,O=k+(R<<15&4294967295|R>>>17),R=C+(k^(O|~b))+M[13]+1309151649&4294967295,C=O+(R<<21&4294967295|R>>>11),R=b+(O^(C|~k))+M[4]+4149444226&4294967295,b=C+(R<<6&4294967295|R>>>26),R=k+(C^(b|~O))+M[11]+3174756917&4294967295,k=b+(R<<10&4294967295|R>>>22),R=O+(b^(k|~C))+M[2]+718787259&4294967295,O=k+(R<<15&4294967295|R>>>17),R=C+(k^(O|~b))+M[9]+3951481745&4294967295,N.g[0]=N.g[0]+b&4294967295,N.g[1]=N.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,N.g[2]=N.g[2]+O&4294967295,N.g[3]=N.g[3]+k&4294967295}s.prototype.v=function(N,b){b===void 0&&(b=N.length);const C=b-this.blockSize,M=this.C;let O=this.h,k=0;for(;k<b;){if(O==0)for(;k<=C;)l(this,N,k),k+=this.blockSize;if(typeof N=="string"){for(;k<b;)if(M[O++]=N.charCodeAt(k++),O==this.blockSize){l(this,M),O=0;break}}else for(;k<b;)if(M[O++]=N[k++],O==this.blockSize){l(this,M),O=0;break}}this.h=O,this.o+=b},s.prototype.A=function(){var N=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);N[0]=128;for(var b=1;b<N.length-8;++b)N[b]=0;b=this.o*8;for(var C=N.length-8;C<N.length;++C)N[C]=b&255,b/=256;for(this.v(N),N=Array(16),b=0,C=0;C<4;++C)for(let M=0;M<32;M+=8)N[b++]=this.g[C]>>>M&255;return N};function u(N,b){var C=g;return Object.prototype.hasOwnProperty.call(C,N)?C[N]:C[N]=b(N)}function f(N,b){this.h=b;const C=[];let M=!0;for(let O=N.length-1;O>=0;O--){const k=N[O]|0;M&&k==b||(C[O]=k,M=!1)}this.g=C}var g={};function y(N){return-128<=N&&N<128?u(N,function(b){return new f([b|0],b<0?-1:0)}):new f([N|0],N<0?-1:0)}function p(N){if(isNaN(N)||!isFinite(N))return S;if(N<0)return W(p(-N));const b=[];let C=1;for(let M=0;N>=C;M++)b[M]=N/C|0,C*=4294967296;return new f(b,0)}function T(N,b){if(N.length==0)throw Error("number format error: empty string");if(b=b||10,b<2||36<b)throw Error("radix out of range: "+b);if(N.charAt(0)=="-")return W(T(N.substring(1),b));if(N.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=p(Math.pow(b,8));let M=S;for(let k=0;k<N.length;k+=8){var O=Math.min(8,N.length-k);const R=parseInt(N.substring(k,k+O),b);O<8?(O=p(Math.pow(b,O)),M=M.j(O).add(p(R))):(M=M.j(C),M=M.add(p(R)))}return M}var S=y(0),w=y(1),j=y(16777216);r=f.prototype,r.m=function(){if(Z(this))return-W(this).m();let N=0,b=1;for(let C=0;C<this.g.length;C++){const M=this.i(C);N+=(M>=0?M:4294967296+M)*b,b*=4294967296}return N},r.toString=function(N){if(N=N||10,N<2||36<N)throw Error("radix out of range: "+N);if(J(this))return"0";if(Z(this))return"-"+W(this).toString(N);const b=p(Math.pow(N,6));var C=this;let M="";for(;;){const O=Jt(C,b).g;C=mt(C,O.j(b));let k=((C.g.length>0?C.g[0]:C.h)>>>0).toString(N);if(C=O,J(C))return k+M;for(;k.length<6;)k="0"+k;M=k+M}},r.i=function(N){return N<0?0:N<this.g.length?this.g[N]:this.h};function J(N){if(N.h!=0)return!1;for(let b=0;b<N.g.length;b++)if(N.g[b]!=0)return!1;return!0}function Z(N){return N.h==-1}r.l=function(N){return N=mt(this,N),Z(N)?-1:J(N)?0:1};function W(N){const b=N.g.length,C=[];for(let M=0;M<b;M++)C[M]=~N.g[M];return new f(C,~N.h).add(w)}r.abs=function(){return Z(this)?W(this):this},r.add=function(N){const b=Math.max(this.g.length,N.g.length),C=[];let M=0;for(let O=0;O<=b;O++){let k=M+(this.i(O)&65535)+(N.i(O)&65535),R=(k>>>16)+(this.i(O)>>>16)+(N.i(O)>>>16);M=R>>>16,k&=65535,R&=65535,C[O]=R<<16|k}return new f(C,C[C.length-1]&-2147483648?-1:0)};function mt(N,b){return N.add(W(b))}r.j=function(N){if(J(this)||J(N))return S;if(Z(this))return Z(N)?W(this).j(W(N)):W(W(this).j(N));if(Z(N))return W(this.j(W(N)));if(this.l(j)<0&&N.l(j)<0)return p(this.m()*N.m());const b=this.g.length+N.g.length,C=[];for(var M=0;M<2*b;M++)C[M]=0;for(M=0;M<this.g.length;M++)for(let O=0;O<N.g.length;O++){const k=this.i(M)>>>16,R=this.i(M)&65535,re=N.i(O)>>>16,De=N.i(O)&65535;C[2*M+2*O]+=R*De,vt(C,2*M+2*O),C[2*M+2*O+1]+=k*De,vt(C,2*M+2*O+1),C[2*M+2*O+1]+=R*re,vt(C,2*M+2*O+1),C[2*M+2*O+2]+=k*re,vt(C,2*M+2*O+2)}for(N=0;N<b;N++)C[N]=C[2*N+1]<<16|C[2*N];for(N=b;N<2*b;N++)C[N]=0;return new f(C,0)};function vt(N,b){for(;(N[b]&65535)!=N[b];)N[b+1]+=N[b]>>>16,N[b]&=65535,b++}function Et(N,b){this.g=N,this.h=b}function Jt(N,b){if(J(b))throw Error("division by zero");if(J(N))return new Et(S,S);if(Z(N))return b=Jt(W(N),b),new Et(W(b.g),W(b.h));if(Z(b))return b=Jt(N,W(b)),new Et(W(b.g),b.h);if(N.g.length>30){if(Z(N)||Z(b))throw Error("slowDivide_ only works with positive integers.");for(var C=w,M=b;M.l(N)<=0;)C=Zt(C),M=Zt(M);var O=zt(C,1),k=zt(M,1);for(M=zt(M,2),C=zt(C,2);!J(M);){var R=k.add(M);R.l(N)<=0&&(O=O.add(C),k=R),M=zt(M,1),C=zt(C,1)}return b=mt(N,O.j(b)),new Et(O,b)}for(O=S;N.l(b)>=0;){for(C=Math.max(1,Math.floor(N.m()/b.m())),M=Math.ceil(Math.log(C)/Math.LN2),M=M<=48?1:Math.pow(2,M-48),k=p(C),R=k.j(b);Z(R)||R.l(N)>0;)C-=M,k=p(C),R=k.j(b);J(k)&&(k=w),O=O.add(k),N=mt(N,R)}return new Et(O,N)}r.B=function(N){return Jt(this,N).h},r.and=function(N){const b=Math.max(this.g.length,N.g.length),C=[];for(let M=0;M<b;M++)C[M]=this.i(M)&N.i(M);return new f(C,this.h&N.h)},r.or=function(N){const b=Math.max(this.g.length,N.g.length),C=[];for(let M=0;M<b;M++)C[M]=this.i(M)|N.i(M);return new f(C,this.h|N.h)},r.xor=function(N){const b=Math.max(this.g.length,N.g.length),C=[];for(let M=0;M<b;M++)C[M]=this.i(M)^N.i(M);return new f(C,this.h^N.h)};function Zt(N){const b=N.g.length+1,C=[];for(let M=0;M<b;M++)C[M]=N.i(M)<<1|N.i(M-1)>>>31;return new f(C,N.h)}function zt(N,b){const C=b>>5;b%=32;const M=N.g.length-C,O=[];for(let k=0;k<M;k++)O[k]=b>0?N.i(k+C)>>>b|N.i(k+C+1)<<32-b:N.i(k+C);return new f(O,N.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,y0=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=p,f.fromString=T,Wr=f}).apply(typeof sE<"u"?sE:typeof self<"u"?self:typeof window<"u"?window:{});var Hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var _0,Ml,v0,Zc,Im,E0,T0,A0;(function(){var r,t=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hc=="object"&&Hc];for(var m=0;m<c.length;++m){var v=c[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=n(this);function l(c,m){if(m)t:{var v=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var P=c[A];if(!(P in v))break t;v=v[P]}c=c[c.length-1],A=v[c],m=m(A),m!=A&&m!=null&&t(v,c,{configurable:!0,writable:!0,value:m})}}l("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),l("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),l("Object.entries",function(c){return c||function(m){var v=[],A;for(A in m)Object.prototype.hasOwnProperty.call(m,A)&&v.push([A,m[A]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function g(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function y(c,m,v){return c.call.apply(c.bind,arguments)}function p(c,m,v){return p=y,p.apply(null,arguments)}function T(c,m){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function S(c,m){function v(){}v.prototype=m.prototype,c.Z=m.prototype,c.prototype=new v,c.prototype.constructor=c,c.Ob=function(A,P,B){for(var tt=Array(arguments.length-2),Tt=2;Tt<arguments.length;Tt++)tt[Tt-2]=arguments[Tt];return m.prototype[P].apply(A,tt)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function j(c){const m=c.length;if(m>0){const v=Array(m);for(let A=0;A<m;A++)v[A]=c[A];return v}return[]}function J(c,m){for(let A=1;A<arguments.length;A++){const P=arguments[A];var v=typeof P;if(v=v!="object"?v:P?Array.isArray(P)?"array":v:"null",v=="array"||v=="object"&&typeof P.length=="number"){v=c.length||0;const B=P.length||0;c.length=v+B;for(let tt=0;tt<B;tt++)c[v+tt]=P[tt]}else c.push(P)}}class Z{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function W(c){f.setTimeout(()=>{throw c},0)}function mt(){var c=N;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class vt{constructor(){this.h=this.g=null}add(m,v){const A=Et.get();A.set(m,v),this.h?this.h.next=A:this.g=A,this.h=A}}var Et=new Z(()=>new Jt,c=>c.reset());class Jt{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Zt,zt=!1,N=new vt,b=()=>{const c=Promise.resolve(void 0);Zt=()=>{c.then(C)}};function C(){for(var c;c=mt();){try{c.h.call(c.g)}catch(v){W(v)}var m=Et;m.j(c),m.h<100&&(m.h++,c.next=m.g,m.g=c)}zt=!1}function M(){this.u=this.u,this.C=this.C}M.prototype.u=!1,M.prototype.dispose=function(){this.u||(this.u=!0,this.N())},M.prototype[Symbol.dispose]=function(){this.dispose()},M.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var k=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};f.addEventListener("test",v,m),f.removeEventListener("test",v,m)}catch{}return c})();function R(c){return/^[\s\xa0]*$/.test(c)}function re(c,m){O.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,m)}S(re,O),re.prototype.init=function(c,m){const v=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget,m||(v=="mouseover"?m=c.fromElement:v=="mouseout"&&(m=c.toElement)),this.relatedTarget=m,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&re.Z.h.call(this)},re.prototype.h=function(){re.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var De="closure_listenable_"+(Math.random()*1e6|0),G=0;function et(c,m,v,A,P){this.listener=c,this.proxy=null,this.src=m,this.type=v,this.capture=!!A,this.ha=P,this.key=++G,this.da=this.fa=!1}function ct(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function kt(c,m,v){for(const A in c)m.call(v,c[A],A,c)}function Ht(c,m){for(const v in c)m.call(void 0,c[v],v,c)}function V(c){const m={};for(const v in c)m[v]=c[v];return m}const X="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nt(c,m){let v,A;for(let P=1;P<arguments.length;P++){A=arguments[P];for(v in A)c[v]=A[v];for(let B=0;B<X.length;B++)v=X[B],Object.prototype.hasOwnProperty.call(A,v)&&(c[v]=A[v])}}function st(c){this.src=c,this.g={},this.h=0}st.prototype.add=function(c,m,v,A,P){const B=c.toString();c=this.g[B],c||(c=this.g[B]=[],this.h++);const tt=St(c,m,A,P);return tt>-1?(m=c[tt],v||(m.fa=!1)):(m=new et(m,this.src,B,!!A,P),m.fa=v,c.push(m)),m};function gt(c,m){const v=m.type;if(v in c.g){var A=c.g[v],P=Array.prototype.indexOf.call(A,m,void 0),B;(B=P>=0)&&Array.prototype.splice.call(A,P,1),B&&(ct(m),c.g[v].length==0&&(delete c.g[v],c.h--))}}function St(c,m,v,A){for(let P=0;P<c.length;++P){const B=c[P];if(!B.da&&B.listener==m&&B.capture==!!v&&B.ha==A)return P}return-1}var Mt="closure_lm_"+(Math.random()*1e6|0),Oe={};function se(c,m,v,A,P){if(Array.isArray(m)){for(let B=0;B<m.length;B++)se(c,m[B],v,A,P);return null}return v=Ro(v),c&&c[De]?c.J(m,v,g(A)?!!A.capture:!1,P):ms(c,m,v,!1,A,P)}function ms(c,m,v,A,P,B){if(!m)throw Error("Invalid event type");const tt=g(P)?!!P.capture:!!P;let Tt=gs(c);if(Tt||(c[Mt]=Tt=new st(c)),v=Tt.add(m,v,A,tt,B),v.proxy)return v;if(A=ua(),v.proxy=A,A.src=c,A.listener=v,c.addEventListener)k||(P=tt),P===void 0&&(P=!1),c.addEventListener(m.toString(),A,P);else if(c.attachEvent)c.attachEvent(ai(m.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function ua(){function c(v){return m.call(c.src,c.listener,v)}const m=bo;return c}function ca(c,m,v,A,P){if(Array.isArray(m))for(var B=0;B<m.length;B++)ca(c,m[B],v,A,P);else A=g(A)?!!A.capture:!!A,v=Ro(v),c&&c[De]?(c=c.i,B=String(m).toString(),B in c.g&&(m=c.g[B],v=St(m,v,A,P),v>-1&&(ct(m[v]),Array.prototype.splice.call(m,v,1),m.length==0&&(delete c.g[B],c.h--)))):c&&(c=gs(c))&&(m=c.g[m.toString()],c=-1,m&&(c=St(m,v,A,P)),(v=c>-1?m[c]:null)&&ha(v))}function ha(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[De])gt(m.i,c);else{var v=c.type,A=c.proxy;m.removeEventListener?m.removeEventListener(v,A,c.capture):m.detachEvent?m.detachEvent(ai(v),A):m.addListener&&m.removeListener&&m.removeListener(A),(v=gs(m))?(gt(v,c),v.h==0&&(v.src=null,m[Mt]=null)):ct(c)}}}function ai(c){return c in Oe?Oe[c]:Oe[c]="on"+c}function bo(c,m){if(c.da)c=!0;else{m=new re(m,this);const v=c.listener,A=c.ha||c.src;c.fa&&ha(c),c=v.call(A,m)}return c}function gs(c){return c=c[Mt],c instanceof st?c:null}var wo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ro(c){return typeof c=="function"?c:(c[wo]||(c[wo]=function(m){return c.handleEvent(m)}),c[wo])}function _e(){M.call(this),this.i=new st(this),this.M=this,this.G=null}S(_e,M),_e.prototype[De]=!0,_e.prototype.removeEventListener=function(c,m,v,A){ca(this,c,m,v,A)};function Ve(c,m){var v,A=c.G;if(A)for(v=[];A;A=A.G)v.push(A);if(c=c.M,A=m.type||m,typeof m=="string")m=new O(m,c);else if(m instanceof O)m.target=m.target||c;else{var P=m;m=new O(A,c),nt(m,P)}P=!0;let B,tt;if(v)for(tt=v.length-1;tt>=0;tt--)B=m.g=v[tt],P=dr(B,A,!0,m)&&P;if(B=m.g=c,P=dr(B,A,!0,m)&&P,P=dr(B,A,!1,m)&&P,v)for(tt=0;tt<v.length;tt++)B=m.g=v[tt],P=dr(B,A,!1,m)&&P}_e.prototype.N=function(){if(_e.Z.N.call(this),this.i){var c=this.i;for(const m in c.g){const v=c.g[m];for(let A=0;A<v.length;A++)ct(v[A]);delete c.g[m],c.h--}}this.G=null},_e.prototype.J=function(c,m,v,A){return this.i.add(String(c),m,!1,v,A)},_e.prototype.K=function(c,m,v,A){return this.i.add(String(c),m,!0,v,A)};function dr(c,m,v,A){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();let P=!0;for(let B=0;B<m.length;++B){const tt=m[B];if(tt&&!tt.da&&tt.capture==v){const Tt=tt.listener,de=tt.ha||tt.src;tt.fa&&gt(c.i,tt),P=Tt.call(de,A)!==!1&&P}}return P&&!A.defaultPrevented}function Xh(c,m){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:f.setTimeout(c,m||0)}function du(c){c.g=Xh(()=>{c.g=null,c.i&&(c.i=!1,du(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class We extends M{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:du(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ps(c){M.call(this),this.h=c,this.g={}}S(ps,M);var Io=[];function Co(c){kt(c.g,function(m,v){this.g.hasOwnProperty(v)&&ha(m)},c),c.g={}}ps.prototype.N=function(){ps.Z.N.call(this),Co(this)},ps.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var mr=f.JSON.stringify,$h=f.JSON.parse,mu=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function gu(){}function pu(){}var Bn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function ze(){O.call(this,"d")}S(ze,O);function wn(){O.call(this,"c")}S(wn,O);var fe={},yu=null;function fa(){return yu=yu||new _e}fe.Ia="serverreachability";function _u(c){O.call(this,fe.Ia,c)}S(_u,O);function oi(c){const m=fa();Ve(m,new _u(m))}fe.STAT_EVENT="statevent";function ys(c,m){O.call(this,fe.STAT_EVENT,c),this.stat=m}S(ys,O);function ve(c){const m=fa();Ve(m,new ys(m,c))}fe.Ja="timingevent";function li(c,m){O.call(this,fe.Ja,c),this.size=m}S(li,O);function ui(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},m)}function qn(){this.g=!0}qn.prototype.ua=function(){this.g=!1};function Jh(c,m,v,A,P,B){c.info(function(){if(c.g)if(B){var tt="",Tt=B.split("&");for(let jt=0;jt<Tt.length;jt++){var de=Tt[jt].split("=");if(de.length>1){const ae=de[0];de=de[1];const Nn=ae.split("_");tt=Nn.length>=2&&Nn[1]=="type"?tt+(ae+"="+de+"&"):tt+(ae+"=redacted&")}}}else tt=null;else tt=B;return"XMLHTTP REQ ("+A+") [attempt "+P+"]: "+m+`
`+v+`
`+tt})}function vu(c,m,v,A,P,B,tt){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+P+"]: "+m+`
`+v+`
`+B+" "+tt})}function ci(c,m,v,A){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+Zh(c,v)+(A?" "+A:"")})}function _s(c,m){c.info(function(){return"TIMEOUT: "+m})}qn.prototype.info=function(){};function Zh(c,m){if(!c.g)return m;if(!m)return null;try{const B=JSON.parse(m);if(B){for(c=0;c<B.length;c++)if(Array.isArray(B[c])){var v=B[c];if(!(v.length<2)){var A=v[1];if(Array.isArray(A)&&!(A.length<1)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(let tt=1;tt<A.length;tt++)A[tt]=""}}}}return mr(B)}catch{return m}}var vs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},No={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Do;function Es(){}S(Es,gu),Es.prototype.g=function(){return new XMLHttpRequest},Do=new Es;function Ui(c){return encodeURIComponent(String(c))}function Eu(c){var m=1;c=c.split(":");const v=[];for(;m>0&&c.length;)v.push(c.shift()),m--;return c.length&&v.push(c.join(":")),v}function Hn(c,m,v,A){this.j=c,this.i=m,this.l=v,this.S=A||1,this.V=new ps(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Fn}function Fn(){this.i=null,this.g="",this.h=!1}var Ee={},ke={};function hi(c,m,v){c.M=1,c.A=Ts(Ae(m)),c.u=v,c.R=!0,da(c,null)}function da(c,m){c.F=Date.now(),fi(c),c.B=Ae(c.A);var v=c.B,A=c.S;Array.isArray(A)||(A=[String(A)]),ya(v.i,"t",A),c.C=0,v=c.j.L,c.h=new Fn,c.g=ku(c.j,v?m:null,!c.u),c.P>0&&(c.O=new We(p(c.Y,c,c.g),c.P)),m=c.V,v=c.g,A=c.ba;var P="readystatechange";Array.isArray(P)||(P&&(Io[0]=P.toString()),P=Io);for(let B=0;B<P.length;B++){const tt=se(v,P[B],A||m.handleEvent,!1,m.h||m);if(!tt)break;m.g[tt.key]=tt}m=c.J?V(c.J):{},c.u?(c.v||(c.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,m)):(c.v="GET",c.g.ea(c.B,c.v,null,m)),oi(),Jh(c.i,c.v,c.B,c.l,c.S,c.u)}Hn.prototype.ba=function(c){c=c.target;const m=this.O;m&&Yn(c)==3?m.j():this.Y(c)},Hn.prototype.Y=function(c){try{if(c==this.g)t:{const Tt=Yn(this.g),de=this.g.ya(),jt=this.g.ca();if(!(Tt<3)&&(Tt!=3||this.g&&(this.h.h||this.g.la()||je(this.g)))){this.K||Tt!=4||de==7||(de==8||jt<=0?oi(3):oi(2)),di(this);var m=this.g.ca();this.X=m;var v=Wh(this);if(this.o=m==200,vu(this.i,this.v,this.B,this.l,this.S,Tt,m),this.o){if(this.U&&!this.L){e:{if(this.g){var A,P=this.g;if((A=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(A)){var B=A;break e}}B=null}if(c=B)ci(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,mi(this,c);else{this.o=!1,this.m=3,ve(12),dn(this),Rn(this);break t}}if(this.R){c=!0;let ae;for(;!this.K&&this.C<v.length;)if(ae=Au(this,v),ae==ke){Tt==4&&(this.m=4,ve(14),c=!1),ci(this.i,this.l,null,"[Incomplete Response]");break}else if(ae==Ee){this.m=4,ve(15),ci(this.i,this.l,v,"[Invalid Chunk]"),c=!1;break}else ci(this.i,this.l,ae,null),mi(this,ae);if(Tu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Tt!=4||v.length!=0||this.h.h||(this.m=1,ve(16),c=!1),this.o=this.o&&c,!c)ci(this.i,this.l,v,"[Invalid Chunked Response]"),dn(this),Rn(this);else if(v.length>0&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.aa&&!tt.P&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),Go(tt),tt.P=!0,ve(11))}}else ci(this.i,this.l,v,null),mi(this,v);Tt==4&&dn(this),this.o&&!this.K&&(Tt==4?Ou(this.j,this):(this.o=!1,fi(this)))}else ji(this.g),m==400&&v.indexOf("Unknown SID")>0?(this.m=3,ve(12)):(this.m=0,ve(13)),dn(this),Rn(this)}}}catch{}finally{}};function Wh(c){if(!Tu(c))return c.g.la();const m=je(c.g);if(m==="")return"";let v="";const A=m.length,P=Yn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return dn(c),Rn(c),"";c.h.i=new f.TextDecoder}for(let B=0;B<A;B++)c.h.h=!0,v+=c.h.i.decode(m[B],{stream:!(P&&B==A-1)});return m.length=0,c.h.g+=v,c.C=0,c.h.g}function Tu(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Au(c,m){var v=c.C,A=m.indexOf(`
`,v);return A==-1?ke:(v=Number(m.substring(v,A)),isNaN(v)?Ee:(A+=1,A+v>m.length?ke:(m=m.slice(A,A+v),c.C=A+v,m)))}Hn.prototype.cancel=function(){this.K=!0,dn(this)};function fi(c){c.T=Date.now()+c.H,ma(c,c.H)}function ma(c,m){if(c.D!=null)throw Error("WatchDog timer not null");c.D=ui(p(c.aa,c),m)}function di(c){c.D&&(f.clearTimeout(c.D),c.D=null)}Hn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(_s(this.i,this.B),this.M!=2&&(oi(),ve(17)),dn(this),this.m=2,Rn(this)):ma(this,this.T-c)};function Rn(c){c.j.I==0||c.K||Ou(c.j,c)}function dn(c){di(c);var m=c.O;m&&typeof m.dispose=="function"&&m.dispose(),c.O=null,Co(c.V),c.g&&(m=c.g,c.g=null,m.abort(),m.dispose())}function mi(c,m){try{var v=c.j;if(v.I!=0&&(v.g==c||pi(v.h,c))){if(!c.L&&pi(v.h,c)&&v.I==3){try{var A=v.Ba.g.parse(m)}catch{A=null}if(Array.isArray(A)&&A.length==3){var P=A;if(P[0]==0){t:if(!v.v){if(v.g)if(v.g.F+3e3<c.F)Aa(v),Ar(v);else break t;Cs(v),ve(18)}}else v.xa=P[1],0<v.xa-v.K&&P[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=ui(p(v.Va,v),6e3));gi(v.h)<=1&&v.ta&&(v.ta=void 0)}else Ai(v,11)}else if((c.L||v.g==c)&&Aa(v),!R(m))for(P=v.Ba.g.parse(m),m=0;m<P.length;m++){let jt=P[m];const ae=jt[0];if(!(ae<=v.K))if(v.K=ae,jt=jt[1],v.I==2)if(jt[0]=="c"){v.M=jt[1],v.ba=jt[2];const Nn=jt[3];Nn!=null&&(v.ka=Nn,v.j.info("VER="+v.ka));const Si=jt[4];Si!=null&&(v.za=Si,v.j.info("SVER="+v.za));const Qn=jt[5];Qn!=null&&typeof Qn=="number"&&Qn>0&&(A=1.5*Qn,v.O=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const Xn=c.g;if(Xn){const Ns=Xn.g?Xn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ns){var B=A.h;B.g||Ns.indexOf("spdy")==-1&&Ns.indexOf("quic")==-1&&Ns.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Mo(B,B.h),B.h=null))}if(A.G){const Sa=Xn.g?Xn.g.getResponseHeader("X-HTTP-Session-Id"):null;Sa&&(A.wa=Sa,Ft(A.J,A.G,Sa))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-c.F,v.j.info("Handshake RTT: "+v.T+"ms")),A=v;var tt=c;if(A.na=xu(A,A.L?A.ba:null,A.W),tt.L){xo(A.h,tt);var Tt=tt,de=A.O;de&&(Tt.H=de),Tt.D&&(di(Tt),fi(Tt)),A.g=tt}else Nu(A);v.i.length>0&&Ti(v)}else jt[0]!="stop"&&jt[0]!="close"||Ai(v,7);else v.I==3&&(jt[0]=="stop"||jt[0]=="close"?jt[0]=="stop"?Ai(v,7):Ho(v):jt[0]!="noop"&&v.l&&v.l.qa(jt),v.A=0)}}oi(4)}catch{}}var Te=class{constructor(c,m){this.g=c,this.map=m}};function Oo(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Vo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function gi(c){return c.h?1:c.g?c.g.size:0}function pi(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Mo(c,m){c.g?c.g.add(m):c.h=m}function xo(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}Oo.prototype.cancel=function(){if(this.i=ko(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function ko(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const v of c.g.values())m=m.concat(v.G);return m}return j(c.i)}var Su=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ga(c,m){if(c){c=c.split("&");for(let v=0;v<c.length;v++){const A=c[v].indexOf("=");let P,B=null;A>=0?(P=c[v].substring(0,A),B=c[v].substring(A+1)):P=c[v],m(P,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function mn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;c instanceof mn?(this.l=c.l,Pe(this,c.j),this.o=c.o,this.g=c.g,gr(this,c.u),this.h=c.h,Po(this,Iu(c.i)),this.m=c.m):c&&(m=String(c).match(Su))?(this.l=!1,Pe(this,m[1]||"",!0),this.o=yi(m[2]||""),this.g=yi(m[3]||"",!0),gr(this,m[4]),this.h=yi(m[5]||"",!0),Po(this,m[6]||"",!0),this.m=yi(m[7]||"")):(this.l=!1,this.i=new yr(null,this.l))}mn.prototype.toString=function(){const c=[];var m=this.j;m&&c.push(As(m,pa,!0),":");var v=this.g;return(v||m=="file")&&(c.push("//"),(m=this.o)&&c.push(As(m,pa,!0),"@"),c.push(Ui(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&c.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(As(v,v.charAt(0)=="/"?Lo:bu,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",As(v,wu)),c.join("")},mn.prototype.resolve=function(c){const m=Ae(this);let v=!!c.j;v?Pe(m,c.j):v=!!c.o,v?m.o=c.o:v=!!c.g,v?m.g=c.g:v=c.u!=null;var A=c.h;if(v)gr(m,c.u);else if(v=!!c.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var P=m.h.lastIndexOf("/");P!=-1&&(A=m.h.slice(0,P+1)+A)}if(P=A,P==".."||P==".")A="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){A=P.lastIndexOf("/",0)==0,P=P.split("/");const B=[];for(let tt=0;tt<P.length;){const Tt=P[tt++];Tt=="."?A&&tt==P.length&&B.push(""):Tt==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),A&&tt==P.length&&B.push("")):(B.push(Tt),A=!0)}A=B.join("/")}else A=P}return v?m.h=A:v=c.i.toString()!=="",v?Po(m,Iu(c.i)):v=!!c.m,v&&(m.m=c.m),m};function Ae(c){return new mn(c)}function Pe(c,m,v){c.j=v?yi(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function gr(c,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);c.u=m}else c.u=null}function Po(c,m,v){m instanceof yr?(c.i=m,_a(c.i,c.l)):(v||(m=As(m,pr)),c.i=new yr(m,c.l))}function Ft(c,m,v){c.i.set(m,v)}function Ts(c){return Ft(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function yi(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function As(c,m,v){return typeof c=="string"?(c=encodeURI(c).replace(m,rn),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function rn(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var pa=/[#\/\?@]/g,bu=/[#\?:]/g,Lo=/[#\?]/g,pr=/[#\?@]/g,wu=/#/g;function yr(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function sn(c){c.g||(c.g=new Map,c.h=0,c.i&&ga(c.i,function(m,v){c.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}r=yr.prototype,r.add=function(c,m){sn(this),this.i=null,c=_r(this,c);let v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(m),this.h+=1,this};function Ru(c,m){sn(c),m=_r(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function Uo(c,m){return sn(c),m=_r(c,m),c.g.has(m)}r.forEach=function(c,m){sn(this),this.g.forEach(function(v,A){v.forEach(function(P){c.call(m,P,A,this)},this)},this)};function zo(c,m){sn(c);let v=[];if(typeof m=="string")Uo(c,m)&&(v=v.concat(c.g.get(_r(c,m))));else for(c=Array.from(c.g.values()),m=0;m<c.length;m++)v=v.concat(c[m]);return v}r.set=function(c,m){return sn(this),this.i=null,c=_r(this,c),Uo(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},r.get=function(c,m){return c?(c=zo(this,c),c.length>0?String(c[0]):m):m};function ya(c,m,v){Ru(c,m),v.length>0&&(c.i=null,c.g.set(_r(c,m),j(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(let A=0;A<m.length;A++){var v=m[A];const P=Ui(v);v=zo(this,v);for(let B=0;B<v.length;B++){let tt=P;v[B]!==""&&(tt+="="+Ui(v[B])),c.push(tt)}}return this.i=c.join("&")};function Iu(c){const m=new yr;return m.i=c.i,c.g&&(m.g=new Map(c.g),m.h=c.h),m}function _r(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function _a(c,m){m&&!c.j&&(sn(c),c.i=null,c.g.forEach(function(v,A){const P=A.toLowerCase();A!=P&&(Ru(this,A),ya(this,P,v))},c)),c.j=m}function Gn(c,m){const v=new qn;if(f.Image){const A=new Image;A.onload=T(In,v,"TestLoadImage: loaded",!0,m,A),A.onerror=T(In,v,"TestLoadImage: error",!1,m,A),A.onabort=T(In,v,"TestLoadImage: abort",!1,m,A),A.ontimeout=T(In,v,"TestLoadImage: timeout",!1,m,A),f.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else m(!1)}function jo(c,m){const v=new qn,A=new AbortController,P=setTimeout(()=>{A.abort(),In(v,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:A.signal}).then(B=>{clearTimeout(P),B.ok?In(v,"TestPingServer: ok",!0,m):In(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(P),In(v,"TestPingServer: error",!1,m)})}function In(c,m,v,A,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),A(v)}catch{}}function vr(){this.g=new mu}function _i(c){this.i=c.Sb||null,this.h=c.ab||!1}S(_i,gu),_i.prototype.g=function(){return new Ss(this.i,this.h)};function Ss(c,m){_e.call(this),this.H=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(Ss,_e),r=Ss.prototype,r.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=m,this.readyState=1,Kn(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(m.body=c),(this.H||f).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Er(this)),this.readyState=0},r.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Kn(this)),this.g&&(this.readyState=3,Kn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;va(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function va(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}r.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?Er(this):Kn(this),this.readyState==3&&va(this)}},r.Oa=function(c){this.g&&(this.response=this.responseText=c,Er(this))},r.Na=function(c){this.g&&(this.response=c,Er(this))},r.ga=function(){this.g&&Er(this)};function Er(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Kn(c)}r.setRequestHeader=function(c,m){this.A.append(c,m)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=m.next();return c.join(`\r
`)};function Kn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Cn(c){let m="";return kt(c,function(v,A){m+=A,m+=":",m+=v,m+=`\r
`}),m}function bs(c,m,v){t:{for(A in v){var A=!1;break t}A=!0}A||(v=Cn(v),typeof c=="string"?v!=null&&Ui(v):Ft(c,m,v))}function Yt(c){_e.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(Yt,_e);var vi=/^https?$/i,Bo=["POST","PUT"];r=Yt.prototype,r.Fa=function(c){this.H=c},r.ea=function(c,m,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Do.g(),this.g.onreadystatechange=w(p(this.Ca,this));try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(B){ws(this,B);return}if(c=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var P in A)v.set(P,A[P]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const B of A.keys())v.set(B,A.get(B));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(B=>B.toLowerCase()=="content-type"),P=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(Bo,m,void 0)>=0)||A||P||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,tt]of v)this.g.setRequestHeader(B,tt);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(B){ws(this,B)}};function ws(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.o=5,qo(c),zi(c)}function qo(c){c.A||(c.A=!0,Ve(c,"complete"),Ve(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Ve(this,"complete"),Ve(this,"abort"),zi(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zi(this,!0)),Yt.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Rs(this):this.Xa())},r.Xa=function(){Rs(this)};function Rs(c){if(c.h&&typeof u<"u"){if(c.v&&Yn(c)==4)setTimeout(c.Ca.bind(c),0);else if(Ve(c,"readystatechange"),Yn(c)==4){c.h=!1;try{const B=c.ca();t:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var v;if(!(v=m)){var A;if(A=B===0){let tt=String(c.D).match(Su)[1]||null;!tt&&f.self&&f.self.location&&(tt=f.self.location.protocol.slice(0,-1)),A=!vi.test(tt?tt.toLowerCase():"")}v=A}if(v)Ve(c,"complete"),Ve(c,"success");else{c.o=6;try{var P=Yn(c)>2?c.g.statusText:""}catch{P=""}c.l=P+" ["+c.ca()+"]",qo(c)}}finally{zi(c)}}}}function zi(c,m){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const v=c.g;c.g=null,m||Ve(c,"ready");try{v.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function Yn(c){return c.g?c.g.readyState:0}r.ca=function(){try{return Yn(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),$h(m)}};function je(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function ji(c){const m={};c=(c.g&&Yn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(R(c[A]))continue;var v=Eu(c[A]);const P=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const B=m[P]||[];m[P]=B,B.push(v)}Ht(m,function(A){return A.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ei(c,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||m}function Tr(c){this.za=0,this.i=[],this.j=new qn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ei("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ei("baseRetryDelayMs",5e3,c),this.Za=Ei("retryDelaySeedMs",1e4,c),this.Ta=Ei("forwardChannelMaxRetries",2,c),this.va=Ei("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Oo(c&&c.concurrentRequestLimit),this.Ba=new vr,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Tr.prototype,r.ka=8,r.I=1,r.connect=function(c,m,v,A){ve(0),this.W=c,this.H=m||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.J=xu(this,null,this.W),Ti(this)};function Ho(c){if(Ea(c),c.I==3){var m=c.V++,v=Ae(c.J);if(Ft(v,"SID",c.M),Ft(v,"RID",m),Ft(v,"TYPE","terminate"),Is(c,v),m=new Hn(c,c.j,m),m.M=2,m.A=Ts(Ae(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(m.A.toString(),"")}catch{}!v&&f.Image&&(new Image().src=m.A,v=!0),v||(m.g=ku(m.j,null),m.g.ea(m.A)),m.F=Date.now(),fi(m)}Mu(c)}function Ar(c){c.g&&(Go(c),c.g.cancel(),c.g=null)}function Ea(c){Ar(c),c.v&&(f.clearTimeout(c.v),c.v=null),Aa(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function Ti(c){if(!Vo(c.h)&&!c.m){c.m=!0;var m=c.Ea;Zt||b(),zt||(Zt(),zt=!0),N.add(m,c),c.D=0}}function Ta(c,m){return gi(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=m.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=ui(p(c.Ea,c,m),Vu(c,c.D)),c.D++,!0)}r.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const P=new Hn(this,this.j,c);let B=this.o;if(this.U&&(B?(B=V(B),nt(B,this.U)):B=this.U),this.u!==null||this.R||(P.J=B,B=null),this.S)t:{for(var m=0,v=0;v<this.i.length;v++){e:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(m+=A,m>4096){m=v;break t}if(m===4096||v===this.i.length-1){m=v+1;break t}}m=1e3}else m=1e3;m=Cu(this,P,m),v=Ae(this.J),Ft(v,"RID",c),Ft(v,"CVER",22),this.G&&Ft(v,"X-HTTP-Session-Id",this.G),Is(this,v),B&&(this.R?m="headers="+Ui(Cn(B))+"&"+m:this.u&&bs(v,this.u,B)),Mo(this.h,P),this.Ra&&Ft(v,"TYPE","init"),this.S?(Ft(v,"$req",m),Ft(v,"SID","null"),P.U=!0,hi(P,v,null)):hi(P,v,m),this.I=2}}else this.I==3&&(c?Fo(this,c):this.i.length==0||Vo(this.h)||Fo(this))};function Fo(c,m){var v;m?v=m.l:v=c.V++;const A=Ae(c.J);Ft(A,"SID",c.M),Ft(A,"RID",v),Ft(A,"AID",c.K),Is(c,A),c.u&&c.o&&bs(A,c.u,c.o),v=new Hn(c,c.j,v,c.D+1),c.u===null&&(v.J=c.o),m&&(c.i=m.G.concat(c.i)),m=Cu(c,v,1e3),v.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Mo(c.h,v),hi(v,A,m)}function Is(c,m){c.H&&kt(c.H,function(v,A){Ft(m,A,v)}),c.l&&kt({},function(v,A){Ft(m,A,v)})}function Cu(c,m,v){v=Math.min(c.i.length,v);const A=c.l?p(c.l.Ka,c.l,c):null;t:{var P=c.i;let Tt=-1;for(;;){const de=["count="+v];Tt==-1?v>0?(Tt=P[0].g,de.push("ofs="+Tt)):Tt=0:de.push("ofs="+Tt);let jt=!0;for(let ae=0;ae<v;ae++){var B=P[ae].g;const Nn=P[ae].map;if(B-=Tt,B<0)Tt=Math.max(0,P[ae].g-100),jt=!1;else try{B="req"+B+"_"||"";try{var tt=Nn instanceof Map?Nn:Object.entries(Nn);for(const[Si,Qn]of tt){let Xn=Qn;g(Qn)&&(Xn=mr(Qn)),de.push(B+Si+"="+encodeURIComponent(Xn))}}catch(Si){throw de.push(B+"type="+encodeURIComponent("_badmap")),Si}}catch{A&&A(Nn)}}if(jt){tt=de.join("&");break t}}tt=void 0}return c=c.i.splice(0,v),m.G=c,tt}function Nu(c){if(!c.g&&!c.v){c.Y=1;var m=c.Da;Zt||b(),zt||(Zt(),zt=!0),N.add(m,c),c.A=0}}function Cs(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=ui(p(c.Da,c),Vu(c,c.A)),c.A++,!0)}r.Da=function(){if(this.v=null,Du(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=ui(p(this.Wa,this),c)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ve(10),Ar(this),Du(this))};function Go(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function Du(c){c.g=new Hn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var m=Ae(c.na);Ft(m,"RID","rpc"),Ft(m,"SID",c.M),Ft(m,"AID",c.K),Ft(m,"CI",c.F?"0":"1"),!c.F&&c.ia&&Ft(m,"TO",c.ia),Ft(m,"TYPE","xmlhttp"),Is(c,m),c.u&&c.o&&bs(m,c.u,c.o),c.O&&(c.g.H=c.O);var v=c.g;c=c.ba,v.M=1,v.A=Ts(Ae(m)),v.u=null,v.R=!0,da(v,c)}r.Va=function(){this.C!=null&&(this.C=null,Ar(this),Cs(this),ve(19))};function Aa(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Ou(c,m){var v=null;if(c.g==m){Aa(c),Go(c),c.g=null;var A=2}else if(pi(c.h,m))v=m.G,xo(c.h,m),A=1;else return;if(c.I!=0){if(m.o)if(A==1){v=m.u?m.u.length:0,m=Date.now()-m.F;var P=c.D;A=fa(),Ve(A,new li(A,v)),Ti(c)}else Nu(c);else if(P=m.m,P==3||P==0&&m.X>0||!(A==1&&Ta(c,m)||A==2&&Cs(c)))switch(v&&v.length>0&&(m=c.h,m.i=m.i.concat(v)),P){case 1:Ai(c,5);break;case 4:Ai(c,10);break;case 3:Ai(c,6);break;default:Ai(c,2)}}}function Vu(c,m){let v=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(v*=2),v*m}function Ai(c,m){if(c.j.info("Error code "+m),m==2){var v=p(c.bb,c),A=c.Ua;const P=!A;A=new mn(A||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Pe(A,"https"),Ts(A),P?Gn(A.toString(),v):jo(A.toString(),v)}else ve(2);c.I=0,c.l&&c.l.pa(m),Mu(c),Ea(c)}r.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ve(2)):(this.j.info("Failed to ping google.com"),ve(1))};function Mu(c){if(c.I=0,c.ja=[],c.l){const m=ko(c.h);(m.length!=0||c.i.length!=0)&&(J(c.ja,m),J(c.ja,c.i),c.h.i.length=0,j(c.i),c.i.length=0),c.l.oa()}}function xu(c,m,v){var A=v instanceof mn?Ae(v):new mn(v);if(A.g!="")m&&(A.g=m+"."+A.g),gr(A,A.u);else{var P=f.location;A=P.protocol,m=m?m+"."+P.hostname:P.hostname,P=+P.port;const B=new mn(null);A&&Pe(B,A),m&&(B.g=m),P&&gr(B,P),v&&(B.h=v),A=B}return v=c.G,m=c.wa,v&&m&&Ft(A,v,m),Ft(A,"VER",c.ka),Is(c,A),A}function ku(c,m,v){if(m&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Aa&&!c.ma?new Yt(new _i({ab:v})):new Yt(c.ma),m.Fa(c.L),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pu(){}r=Pu.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function Sr(){}Sr.prototype.g=function(c,m){return new tn(c,m)};function tn(c,m){_e.call(this),this.g=new Tr(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(c?c["X-WebChannel-Client-Profile"]=m.sa:c={"X-WebChannel-Client-Profile":m.sa}),this.g.U=c,(c=m&&m.Qb)&&!R(c)&&(this.g.u=c),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!R(m)&&(this.g.G=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new Bi(this)}S(tn,_e),tn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Ho(this.g)},tn.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.v&&(v={},v.__data__=mr(c),c=v);m.i.push(new Te(m.Ya++,c)),m.I==3&&Ti(m)},tn.prototype.N=function(){this.g.l=null,delete this.j,Ho(this.g),delete this.g,tn.Z.N.call(this)};function Lu(c){ze.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){t:{for(const v in m){c=v;break t}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}S(Lu,ze);function Uu(){wn.call(this),this.status=1}S(Uu,wn);function Bi(c){this.g=c}S(Bi,Pu),Bi.prototype.ra=function(){Ve(this.g,"a")},Bi.prototype.qa=function(c){Ve(this.g,new Lu(c))},Bi.prototype.pa=function(c){Ve(this.g,new Uu)},Bi.prototype.oa=function(){Ve(this.g,"b")},Sr.prototype.createWebChannel=Sr.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,A0=function(){return new Sr},T0=function(){return fa()},E0=fe,Im={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},vs.NO_ERROR=0,vs.TIMEOUT=8,vs.HTTP_ERROR=6,Zc=vs,No.COMPLETE="complete",v0=No,pu.EventType=Bn,Bn.OPEN="a",Bn.CLOSE="b",Bn.ERROR="c",Bn.MESSAGE="d",_e.prototype.listen=_e.prototype.J,Ml=pu,Yt.prototype.listenOnce=Yt.prototype.K,Yt.prototype.getLastError=Yt.prototype.Ha,Yt.prototype.getLastErrorCode=Yt.prototype.ya,Yt.prototype.getStatus=Yt.prototype.ca,Yt.prototype.getResponseJson=Yt.prototype.La,Yt.prototype.getResponseText=Yt.prototype.la,Yt.prototype.send=Yt.prototype.ea,Yt.prototype.setWithCredentials=Yt.prototype.Fa,_0=Yt}).apply(typeof Hc<"u"?Hc:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $e=class{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}};$e.UNAUTHENTICATED=new $e(null),$e.GOOGLE_CREDENTIALS=new $e("google-credentials-uid"),$e.FIRST_PARTY=new $e("first-party-uid"),$e.MOCK_USER=new $e("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo="12.9.0";function uC(r){vo=r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ws=new Jm("@firebase/firestore");function Wa(){return Ws.logLevel}function rt(r,...t){if(Ws.logLevel<=Nt.DEBUG){const n=t.map(lg);Ws.debug(`Firestore (${vo}): ${r}`,...n)}}function hr(r,...t){if(Ws.logLevel<=Nt.ERROR){const n=t.map(lg);Ws.error(`Firestore (${vo}): ${r}`,...n)}}function ta(r,...t){if(Ws.logLevel<=Nt.WARN){const n=t.map(lg);Ws.warn(`Firestore (${vo}): ${r}`,...n)}}function lg(r){if(typeof r=="string")return r;try{return(function(n){return JSON.stringify(n)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(r,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,S0(r,s,n)}function S0(r,t,n){let s=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw hr(s),new Error(s)}function qt(r,t,n,s){let l="Unexpected state";typeof n=="string"?l=n:s=n,r||S0(t,l,s)}function _t(r,t){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class it extends Li{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class cC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n($e.UNAUTHENTICATED)))}shutdown(){}}class hC{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class fC{constructor(t){this.t=t,this.currentUser=$e.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){qt(this.o===void 0,42304);let s=this.i;const l=y=>this.i!==s?(s=this.i,n(y)):Promise.resolve();let u=new lr;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new lr,t.enqueueRetryable((()=>l(this.currentUser)))};const f=()=>{const y=u;t.enqueueRetryable((async()=>{await y.promise,await l(this.currentUser)}))},g=y=>{rt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((y=>g(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?g(y):(rt("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new lr)}}),0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==t?(rt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(qt(typeof s.accessToken=="string",31837,{l:s}),new b0(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return qt(t===null||typeof t=="string",2055,{h:t}),new $e(t)}}class dC{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=$e.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class mC{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new dC(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n($e.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class aE{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gC{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Un(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){qt(this.o===void 0,3512);const s=u=>{u.error!=null&&rt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,rt("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>s(u)))};const l=u=>{rt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>l(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?l(u):rt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new aE(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(qt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new aE(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pC(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const l=pC(40);for(let u=0;u<l.length;++u)s.length<20&&l[u]<n&&(s+=t.charAt(l[u]%62))}return s}}function Dt(r,t){return r<t?-1:r>t?1:0}function Cm(r,t){const n=Math.min(r.length,t.length);for(let s=0;s<n;s++){const l=r.charAt(s),u=t.charAt(s);if(l!==u)return lm(l)===lm(u)?Dt(l,u):lm(l)?1:-1}return Dt(r.length,t.length)}const yC=55296,_C=57343;function lm(r){const t=r.charCodeAt(0);return t>=yC&&t<=_C}function uo(r,t,n){return r.length===t.length&&r.every(((s,l)=>n(s,t[l])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oE="__name__";class Ci{constructor(t,n,s){n===void 0?n=0:n>t.length&&dt(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&dt(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return Ci.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ci?t.forEach((s=>{n.push(s)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let l=0;l<s;l++){const u=Ci.compareSegments(t.get(l),n.get(l));if(u!==0)return u}return Dt(t.length,n.length)}static compareSegments(t,n){const s=Ci.isNumericId(t),l=Ci.isNumericId(n);return s&&!l?-1:!s&&l?1:s&&l?Ci.extractNumericId(t).compare(Ci.extractNumericId(n)):Cm(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Wr.fromString(t.substring(4,t.length-2))}}class te extends Ci{construct(t,n,s){return new te(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new it(Y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((l=>l.length>0)))}return new te(n)}static emptyPath(){return new te([])}}const vC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends Ci{construct(t,n,s){return new Ke(t,n,s)}static isValidIdentifier(t){return vC.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===oE}static keyField(){return new Ke([oE])}static fromServerFormat(t){const n=[];let s="",l=0;const u=()=>{if(s.length===0)throw new it(Y.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;l<t.length;){const g=t[l];if(g==="\\"){if(l+1===t.length)throw new it(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const y=t[l+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new it(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=y,l+=2}else g==="`"?(f=!f,l++):g!=="."||f?(s+=g,l++):(u(),l++)}if(u(),f)throw new it(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(t){this.path=t}static fromPath(t){return new ut(te.fromString(t))}static fromName(t){return new ut(te.fromString(t).popFirst(5))}static empty(){return new ut(te.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&te.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return te.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ut(new te(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(r,t,n){if(!n)throw new it(Y.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function EC(r,t,n,s){if(t===!0&&s===!0)throw new it(Y.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function lE(r){if(!ut.isDocumentKey(r))throw new it(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function uE(r){if(ut.isDocumentKey(r))throw new it(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function R0(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function Ch(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(s){return s.constructor?s.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":dt(12329,{type:typeof r})}function Sn(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new it(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ch(r);throw new it(Y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return r}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(r,t){const n={typeString:r};return t&&(n.value=t),n}function ou(r,t){if(!R0(r))throw new it(Y.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const l=t[s].typeString,u="value"in t[s]?{value:t[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(l&&typeof f!==l){n=`JSON field '${s}' must be a ${l}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new it(Y.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cE=-62135596800,hE=1e6;class ie{static now(){return ie.fromMillis(Date.now())}static fromDate(t){return ie.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*hE);return new ie(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new it(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new it(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<cE)throw new it(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new it(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/hE}_compareTo(t){return this.seconds===t.seconds?Dt(this.nanoseconds,t.nanoseconds):Dt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ie._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(ou(t,ie._jsonSchema))return new ie(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-cE;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ie._jsonSchemaVersion="firestore/timestamp/1.0",ie._jsonSchema={type:Ne("string",ie._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{static fromTimestamp(t){return new pt(t)}static min(){return new pt(new ie(0,0))}static max(){return new pt(new ie(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kl=-1;function TC(r,t){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,l=pt.fromTimestamp(s===1e9?new ie(n+1,0):new ie(n,s));return new ns(l,ut.empty(),t)}function AC(r){return new ns(r.readTime,r.key,Kl)}class ns{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new ns(pt.min(),ut.empty(),Kl)}static max(){return new ns(pt.max(),ut.empty(),Kl)}}function SC(r,t){let n=r.readTime.compareTo(t.readTime);return n!==0?n:(n=ut.comparator(r.documentKey,t.documentKey),n!==0?n:Dt(r.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class wC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(r){if(r.code!==Y.FAILED_PRECONDITION||r.message!==bC)throw r;rt("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&dt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new $(((s,l)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(s,l)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,l)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):$.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):$.reject(n)}static resolve(t){return new $(((n,s)=>{n(t)}))}static reject(t){return new $(((n,s)=>{s(t)}))}static waitFor(t){return new $(((n,s)=>{let l=0,u=0,f=!1;t.forEach((g=>{++l,g.next((()=>{++u,f&&u===l&&n()}),(y=>s(y)))})),f=!0,u===l&&n()}))}static or(t){let n=$.resolve(!1);for(const s of t)n=n.next((l=>l?$.resolve(l):s()));return n}static forEach(t,n){const s=[];return t.forEach(((l,u)=>{s.push(n.call(this,l,u))})),this.waitFor(s)}static mapArray(t,n){return new $(((s,l)=>{const u=t.length,f=new Array(u);let g=0;for(let y=0;y<u;y++){const p=y;n(t[p]).next((T=>{f[p]=T,++g,g===u&&s(f)}),(T=>l(T)))}}))}static doWhile(t,n){return new $(((s,l)=>{const u=()=>{t()===!0?n().next((()=>{u()}),l):s()};u()}))}}function RC(r){const t=r.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function To(r){return r.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Nh.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=-1;function Dh(r){return r==null}function fh(r){return r===0&&1/r==-1/0}function IC(r){return typeof r=="number"&&Number.isInteger(r)&&!fh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0="";function CC(r){let t="";for(let n=0;n<r.length;n++)t.length>0&&(t=fE(t)),t=NC(r.get(n),t);return fE(t)}function NC(r,t){let n=t;const s=r.length;for(let l=0;l<s;l++){const u=r.charAt(l);switch(u){case"\0":n+="";break;case I0:n+="";break;default:n+=u}}return n}function fE(r){return r+I0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dE(r){let t=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t++;return t}function hs(r,t){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&t(n,r[n])}function C0(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,n){this.comparator=t,this.root=n||Ge.EMPTY}insert(t,n){return new le(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,Ge.BLACK,null,null))}remove(t){return new le(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Ge.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const l=this.comparator(t,s.key);if(l===0)return n+s.left.size;l<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,s)=>(t(n,s),!1)))}toString(){const t=[];return this.inorderTraversal(((n,s)=>(t.push(`${n}:${s}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Fc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Fc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Fc(this.root,t,this.comparator,!0)}}class Fc{constructor(t,n,s,l){this.isReverse=l,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?s(t.key,n):1,n&&l&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Ge{constructor(t,n,s,l,u){this.key=t,this.value=n,this.color=s??Ge.RED,this.left=l??Ge.EMPTY,this.right=u??Ge.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,l,u){return new Ge(t??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let l=this;const u=s(t,l.key);return l=u<0?l.copy(null,null,null,l.left.insert(t,n,s),null):u===0?l.copy(null,n,null,null,null):l.copy(null,null,null,null,l.right.insert(t,n,s)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Ge.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,l=this;if(n(t,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(t,n),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),n(t,l.key)===0){if(l.right.isEmpty())return Ge.EMPTY;s=l.right.min(),l=l.copy(s.key,s.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(t,n))}return l.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Ge.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Ge.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw dt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw dt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw dt(27949);return t+(this.isRed()?0:1)}}Ge.EMPTY=null,Ge.RED=!0,Ge.BLACK=!1;Ge.EMPTY=new class{constructor(){this.size=0}get key(){throw dt(57766)}get value(){throw dt(16141)}get color(){throw dt(16727)}get left(){throw dt(29726)}get right(){throw dt(36894)}copy(t,n,s,l,u){return this}insert(t,n,s){return new Ge(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(t){this.comparator=t,this.data=new le(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,s)=>(t(n),!1)))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const l=s.getNext();if(this.comparator(l.key,t[1])>=0)return;n(l.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new mE(this.data.getIterator())}getIteratorFrom(t){return new mE(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((s=>{n=n.add(s)})),n}isEqual(t){if(!(t instanceof xe)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const l=n.getNext().key,u=s.getNext().key;if(this.comparator(l,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new xe(this.comparator);return n.data=t,n}}class mE{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(t){this.fields=t,t.sort(Ke.comparator)}static empty(){return new An([])}unionWith(t){let n=new xe(Ke.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new An(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return uo(this.fields,t.fields,((n,s)=>n.isEqual(s)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(l){try{return atob(l)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new N0("Invalid base64 string: "+u):u}})(t);return new Ye(n)}static fromUint8Array(t){const n=(function(l){let u="";for(let f=0;f<l.length;++f)u+=String.fromCharCode(l[f]);return u})(t);return new Ye(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let l=0;l<n.length;l++)s[l]=n.charCodeAt(l);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Dt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const DC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function is(r){if(qt(!!r,39018),typeof r=="string"){let t=0;const n=DC.exec(r);if(qt(!!n,46558,{timestamp:r}),n[1]){let l=n[1];l=(l+"000000000").substr(0,9),t=Number(l)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:pe(r.seconds),nanos:pe(r.nanos)}}function pe(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function rs(r){return typeof r=="string"?Ye.fromBase64String(r):Ye.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0="server_timestamp",O0="__type__",V0="__previous_value__",M0="__local_write_time__";function hg(r){var n,s;return((s=(((n=r==null?void 0:r.mapValue)==null?void 0:n.fields)||{})[O0])==null?void 0:s.stringValue)===D0}function Oh(r){const t=r.mapValue.fields[V0];return hg(t)?Oh(t):t}function Yl(r){const t=is(r.mapValue.fields[M0].timestampValue);return new ie(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OC{constructor(t,n,s,l,u,f,g,y,p,T,S){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=l,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=g,this.longPollingOptions=y,this.useFetchStreams=p,this.isUsingEmulator=T,this.apiKey=S}}const Nm="(default)";class Ql{constructor(t,n){this.projectId=t,this.database=n||Nm}static empty(){return new Ql("","")}get isDefaultDatabase(){return this.database===Nm}isEqual(t){return t instanceof Ql&&t.projectId===this.projectId&&t.database===this.database}}function VC(r,t){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new it(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ql(r.options.projectId,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x0="__type__",MC="__max__",Gc={mapValue:{}},k0="__vector__",dh="value";function ss(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?hg(r)?4:kC(r)?9007199254740991:xC(r)?10:11:dt(28295,{value:r})}function Pi(r,t){if(r===t)return!0;const n=ss(r);if(n!==ss(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return Yl(r).isEqual(Yl(t));case 3:return(function(l,u){if(typeof l.timestampValue=="string"&&typeof u.timestampValue=="string"&&l.timestampValue.length===u.timestampValue.length)return l.timestampValue===u.timestampValue;const f=is(l.timestampValue),g=is(u.timestampValue);return f.seconds===g.seconds&&f.nanos===g.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(l,u){return rs(l.bytesValue).isEqual(rs(u.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(l,u){return pe(l.geoPointValue.latitude)===pe(u.geoPointValue.latitude)&&pe(l.geoPointValue.longitude)===pe(u.geoPointValue.longitude)})(r,t);case 2:return(function(l,u){if("integerValue"in l&&"integerValue"in u)return pe(l.integerValue)===pe(u.integerValue);if("doubleValue"in l&&"doubleValue"in u){const f=pe(l.doubleValue),g=pe(u.doubleValue);return f===g?fh(f)===fh(g):isNaN(f)&&isNaN(g)}return!1})(r,t);case 9:return uo(r.arrayValue.values||[],t.arrayValue.values||[],Pi);case 10:case 11:return(function(l,u){const f=l.mapValue.fields||{},g=u.mapValue.fields||{};if(dE(f)!==dE(g))return!1;for(const y in f)if(f.hasOwnProperty(y)&&(g[y]===void 0||!Pi(f[y],g[y])))return!1;return!0})(r,t);default:return dt(52216,{left:r})}}function Xl(r,t){return(r.values||[]).find((n=>Pi(n,t)))!==void 0}function co(r,t){if(r===t)return 0;const n=ss(r),s=ss(t);if(n!==s)return Dt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Dt(r.booleanValue,t.booleanValue);case 2:return(function(u,f){const g=pe(u.integerValue||u.doubleValue),y=pe(f.integerValue||f.doubleValue);return g<y?-1:g>y?1:g===y?0:isNaN(g)?isNaN(y)?0:-1:1})(r,t);case 3:return gE(r.timestampValue,t.timestampValue);case 4:return gE(Yl(r),Yl(t));case 5:return Cm(r.stringValue,t.stringValue);case 6:return(function(u,f){const g=rs(u),y=rs(f);return g.compareTo(y)})(r.bytesValue,t.bytesValue);case 7:return(function(u,f){const g=u.split("/"),y=f.split("/");for(let p=0;p<g.length&&p<y.length;p++){const T=Dt(g[p],y[p]);if(T!==0)return T}return Dt(g.length,y.length)})(r.referenceValue,t.referenceValue);case 8:return(function(u,f){const g=Dt(pe(u.latitude),pe(f.latitude));return g!==0?g:Dt(pe(u.longitude),pe(f.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return pE(r.arrayValue,t.arrayValue);case 10:return(function(u,f){var w,j,J,Z;const g=u.fields||{},y=f.fields||{},p=(w=g[dh])==null?void 0:w.arrayValue,T=(j=y[dh])==null?void 0:j.arrayValue,S=Dt(((J=p==null?void 0:p.values)==null?void 0:J.length)||0,((Z=T==null?void 0:T.values)==null?void 0:Z.length)||0);return S!==0?S:pE(p,T)})(r.mapValue,t.mapValue);case 11:return(function(u,f){if(u===Gc.mapValue&&f===Gc.mapValue)return 0;if(u===Gc.mapValue)return 1;if(f===Gc.mapValue)return-1;const g=u.fields||{},y=Object.keys(g),p=f.fields||{},T=Object.keys(p);y.sort(),T.sort();for(let S=0;S<y.length&&S<T.length;++S){const w=Cm(y[S],T[S]);if(w!==0)return w;const j=co(g[y[S]],p[T[S]]);if(j!==0)return j}return Dt(y.length,T.length)})(r.mapValue,t.mapValue);default:throw dt(23264,{he:n})}}function gE(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return Dt(r,t);const n=is(r),s=is(t),l=Dt(n.seconds,s.seconds);return l!==0?l:Dt(n.nanos,s.nanos)}function pE(r,t){const n=r.values||[],s=t.values||[];for(let l=0;l<n.length&&l<s.length;++l){const u=co(n[l],s[l]);if(u)return u}return Dt(n.length,s.length)}function ho(r){return Dm(r)}function Dm(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=is(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return rs(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return ut.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",l=!0;for(const u of n.values||[])l?l=!1:s+=",",s+=Dm(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let l="{",u=!0;for(const f of s)u?u=!1:l+=",",l+=`${f}:${Dm(n.fields[f])}`;return l+"}"})(r.mapValue):dt(61005,{value:r})}function Wc(r){switch(ss(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Oh(r);return t?16+Wc(t):16;case 5:return 2*r.stringValue.length;case 6:return rs(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((l,u)=>l+Wc(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let l=0;return hs(s.fields,((u,f)=>{l+=u.length+Wc(f)})),l})(r.mapValue);default:throw dt(13486,{value:r})}}function yE(r,t){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${t.path.canonicalString()}`}}function Om(r){return!!r&&"integerValue"in r}function fg(r){return!!r&&"arrayValue"in r}function _E(r){return!!r&&"nullValue"in r}function vE(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function th(r){return!!r&&"mapValue"in r}function xC(r){var n,s;return((s=(((n=r==null?void 0:r.mapValue)==null?void 0:n.fields)||{})[x0])==null?void 0:s.stringValue)===k0}function zl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const t={mapValue:{fields:{}}};return hs(r.mapValue.fields,((n,s)=>t.mapValue.fields[n]=zl(s))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=zl(r.arrayValue.values[n]);return t}return{...r}}function kC(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===MC}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(t){this.value=t}static empty(){return new fn({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!th(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=zl(n)}setAll(t){let n=Ke.emptyPath(),s={},l=[];t.forEach(((f,g)=>{if(!n.isImmediateParentOf(g)){const y=this.getFieldsMap(n);this.applyChanges(y,s,l),s={},l=[],n=g.popLast()}f?s[g.lastSegment()]=zl(f):l.push(g.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,l)}delete(t){const n=this.field(t.popLast());th(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Pi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let l=n.mapValue.fields[t.get(s)];th(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=l),n=l}return n.mapValue.fields}applyChanges(t,n,s){hs(n,((l,u)=>t[l]=u));for(const l of s)delete t[l]}clone(){return new fn(zl(this.value))}}function P0(r){const t=[];return hs(r.fields,((n,s)=>{const l=new Ke([n]);if(th(s)){const u=P0(s.mapValue).fields;if(u.length===0)t.push(l);else for(const f of u)t.push(l.child(f))}else t.push(l)})),new An(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t,n,s,l,u,f,g){this.key=t,this.documentType=n,this.version=s,this.readTime=l,this.createTime=u,this.data=f,this.documentState=g}static newInvalidDocument(t){return new Je(t,0,pt.min(),pt.min(),pt.min(),fn.empty(),0)}static newFoundDocument(t,n,s,l){return new Je(t,1,n,pt.min(),s,l,0)}static newNoDocument(t,n){return new Je(t,2,n,pt.min(),pt.min(),fn.empty(),0)}static newUnknownDocument(t,n){return new Je(t,3,n,pt.min(),pt.min(),fn.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(pt.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pt.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Je&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Je(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(t,n){this.position=t,this.inclusive=n}}function EE(r,t,n){let s=0;for(let l=0;l<r.position.length;l++){const u=t[l],f=r.position[l];if(u.field.isKeyField()?s=ut.comparator(ut.fromName(f.referenceValue),n.key):s=co(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function TE(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Pi(r.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $l{constructor(t,n="asc"){this.field=t,this.dir=n}}function PC(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L0{}class Ce extends L0{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new UC(t,n,s):n==="array-contains"?new BC(t,s):n==="in"?new qC(t,s):n==="not-in"?new HC(t,s):n==="array-contains-any"?new FC(t,s):new Ce(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new zC(t,s):new jC(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(co(n,this.value)):n!==null&&ss(this.value)===ss(n)&&this.matchesComparison(co(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return dt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class si extends L0{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new si(t,n)}matches(t){return U0(this)?this.filters.find((n=>!n.matches(t)))===void 0:this.filters.find((n=>n.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function U0(r){return r.op==="and"}function z0(r){return LC(r)&&U0(r)}function LC(r){for(const t of r.filters)if(t instanceof si)return!1;return!0}function Vm(r){if(r instanceof Ce)return r.field.canonicalString()+r.op.toString()+ho(r.value);if(z0(r))return r.filters.map((t=>Vm(t))).join(",");{const t=r.filters.map((n=>Vm(n))).join(",");return`${r.op}(${t})`}}function j0(r,t){return r instanceof Ce?(function(s,l){return l instanceof Ce&&s.op===l.op&&s.field.isEqual(l.field)&&Pi(s.value,l.value)})(r,t):r instanceof si?(function(s,l){return l instanceof si&&s.op===l.op&&s.filters.length===l.filters.length?s.filters.reduce(((u,f,g)=>u&&j0(f,l.filters[g])),!0):!1})(r,t):void dt(19439)}function B0(r){return r instanceof Ce?(function(n){return`${n.field.canonicalString()} ${n.op} ${ho(n.value)}`})(r):r instanceof si?(function(n){return n.op.toString()+" {"+n.getFilters().map(B0).join(" ,")+"}"})(r):"Filter"}class UC extends Ce{constructor(t,n,s){super(t,n,s),this.key=ut.fromName(s.referenceValue)}matches(t){const n=ut.comparator(t.key,this.key);return this.matchesComparison(n)}}class zC extends Ce{constructor(t,n){super(t,"in",n),this.keys=q0("in",n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class jC extends Ce{constructor(t,n){super(t,"not-in",n),this.keys=q0("not-in",n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function q0(r,t){var n;return(((n=t.arrayValue)==null?void 0:n.values)||[]).map((s=>ut.fromName(s.referenceValue)))}class BC extends Ce{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return fg(n)&&Xl(n.arrayValue,this.value)}}class qC extends Ce{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Xl(this.value.arrayValue,n)}}class HC extends Ce{constructor(t,n){super(t,"not-in",n)}matches(t){if(Xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Xl(this.value.arrayValue,n)}}class FC extends Ce{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!fg(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Xl(this.value.arrayValue,s)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(t,n=null,s=[],l=[],u=null,f=null,g=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=l,this.limit=u,this.startAt=f,this.endAt=g,this.Te=null}}function AE(r,t=null,n=[],s=[],l=null,u=null,f=null){return new GC(r,t,n,s,l,u,f)}function dg(r){const t=_t(r);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((s=>Vm(s))).join(","),n+="|ob:",n+=t.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Dh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((s=>ho(s))).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((s=>ho(s))).join(",")),t.Te=n}return t.Te}function mg(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!PC(r.orderBy[n],t.orderBy[n]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!j0(r.filters[n],t.filters[n]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!TE(r.startAt,t.startAt)&&TE(r.endAt,t.endAt)}function Mm(r){return ut.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(t,n=null,s=[],l=[],u=null,f="F",g=null,y=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=l,this.limit=u,this.limitType=f,this.startAt=g,this.endAt=y,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function KC(r,t,n,s,l,u,f,g){return new Ao(r,t,n,s,l,u,f,g)}function Vh(r){return new Ao(r)}function SE(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function YC(r){return ut.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function H0(r){return r.collectionGroup!==null}function jl(r){const t=_t(r);if(t.Ie===null){t.Ie=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),n.add(u.field.canonicalString());const s=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let g=new xe(Ke.comparator);return f.filters.forEach((y=>{y.getFlattenedFilters().forEach((p=>{p.isInequality()&&(g=g.add(p.field))}))})),g})(t).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new $l(u,s))})),n.has(Ke.keyField().canonicalString())||t.Ie.push(new $l(Ke.keyField(),s))}return t.Ie}function Vi(r){const t=_t(r);return t.Ee||(t.Ee=QC(t,jl(r))),t.Ee}function QC(r,t){if(r.limitType==="F")return AE(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((l=>{const u=l.dir==="desc"?"asc":"desc";return new $l(l.field,u)}));const n=r.endAt?new mh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new mh(r.startAt.position,r.startAt.inclusive):null;return AE(r.path,r.collectionGroup,t,r.filters,r.limit,n,s)}}function xm(r,t){const n=r.filters.concat([t]);return new Ao(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function XC(r,t){const n=r.explicitOrderBy.concat([t]);return new Ao(r.path,r.collectionGroup,n,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function km(r,t,n){return new Ao(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,n,r.startAt,r.endAt)}function Mh(r,t){return mg(Vi(r),Vi(t))&&r.limitType===t.limitType}function F0(r){return`${dg(Vi(r))}|lt:${r.limitType}`}function to(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((l=>B0(l))).join(", ")}]`),Dh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((l=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(l))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((l=>ho(l))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((l=>ho(l))).join(",")),`Target(${s})`})(Vi(r))}; limitType=${r.limitType})`}function xh(r,t){return t.isFoundDocument()&&(function(s,l){const u=l.key.path;return s.collectionGroup!==null?l.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ut.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,t)&&(function(s,l){for(const u of jl(s))if(!u.field.isKeyField()&&l.data.field(u.field)===null)return!1;return!0})(r,t)&&(function(s,l){for(const u of s.filters)if(!u.matches(l))return!1;return!0})(r,t)&&(function(s,l){return!(s.startAt&&!(function(f,g,y){const p=EE(f,g,y);return f.inclusive?p<=0:p<0})(s.startAt,jl(s),l)||s.endAt&&!(function(f,g,y){const p=EE(f,g,y);return f.inclusive?p>=0:p>0})(s.endAt,jl(s),l))})(r,t)}function $C(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function G0(r){return(t,n)=>{let s=!1;for(const l of jl(r)){const u=JC(l,t,n);if(u!==0)return u;s=s||l.field.isKeyField()}return 0}}function JC(r,t,n){const s=r.field.isKeyField()?ut.comparator(t.key,n.key):(function(u,f,g){const y=f.data.field(u),p=g.data.field(u);return y!==null&&p!==null?co(y,p):dt(42886)})(r.field,t,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return dt(19790,{direction:r.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[l,u]of s)if(this.equalsFn(l,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),l=this.inner[s];if(l===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let u=0;u<l.length;u++)if(this.equalsFn(l[u][0],t))return void(l[u]=[t,n]);l.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],t))return s.length===1?delete this.inner[n]:s.splice(l,1),this.innerSize--,!0;return!1}forEach(t){hs(this.inner,((n,s)=>{for(const[l,u]of s)t(l,u)}))}isEmpty(){return C0(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZC=new le(ut.comparator);function fr(){return ZC}const K0=new le(ut.comparator);function xl(...r){let t=K0;for(const n of r)t=t.insert(n.key,n);return t}function Y0(r){let t=K0;return r.forEach(((n,s)=>t=t.insert(n,s.overlayedDocument))),t}function Ks(){return Bl()}function Q0(){return Bl()}function Bl(){return new oa((r=>r.toString()),((r,t)=>r.isEqual(t)))}const WC=new le(ut.comparator),t2=new xe(ut.comparator);function Ot(...r){let t=t2;for(const n of r)t=t.add(n);return t}const e2=new xe(Dt);function n2(){return e2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gg(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fh(t)?"-0":t}}function X0(r){return{integerValue:""+r}}function i2(r,t){return IC(t)?X0(t):gg(r,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(){this._=void 0}}function r2(r,t,n){return r instanceof Jl?(function(l,u){const f={fields:{[O0]:{stringValue:D0},[M0]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return u&&hg(u)&&(u=Oh(u)),u&&(f.fields[V0]=u),{mapValue:f}})(n,t):r instanceof Zl?J0(r,t):r instanceof Wl?Z0(r,t):(function(l,u){const f=$0(l,u),g=bE(f)+bE(l.Ae);return Om(f)&&Om(l.Ae)?X0(g):gg(l.serializer,g)})(r,t)}function s2(r,t,n){return r instanceof Zl?J0(r,t):r instanceof Wl?Z0(r,t):n}function $0(r,t){return r instanceof gh?(function(s){return Om(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(t)?t:{integerValue:0}:null}class Jl extends kh{}class Zl extends kh{constructor(t){super(),this.elements=t}}function J0(r,t){const n=W0(t);for(const s of r.elements)n.some((l=>Pi(l,s)))||n.push(s);return{arrayValue:{values:n}}}class Wl extends kh{constructor(t){super(),this.elements=t}}function Z0(r,t){let n=W0(t);for(const s of r.elements)n=n.filter((l=>!Pi(l,s)));return{arrayValue:{values:n}}}class gh extends kh{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function bE(r){return pe(r.integerValue||r.doubleValue)}function W0(r){return fg(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(t,n){this.field=t,this.transform=n}}function o2(r,t){return r.field.isEqual(t.field)&&(function(s,l){return s instanceof Zl&&l instanceof Zl||s instanceof Wl&&l instanceof Wl?uo(s.elements,l.elements,Pi):s instanceof gh&&l instanceof gh?Pi(s.Ae,l.Ae):s instanceof Jl&&l instanceof Jl})(r.transform,t.transform)}class l2{constructor(t,n){this.version=t,this.transformResults=n}}class ei{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new ei}static exists(t){return new ei(void 0,t)}static updateTime(t){return new ei(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function eh(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class Ph{}function tA(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new nA(r.key,ei.none()):new lu(r.key,r.data,ei.none());{const n=r.data,s=fn.empty();let l=new xe(Ke.comparator);for(let u of t.fields)if(!l.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),l=l.add(u)}return new fs(r.key,s,new An(l.toArray()),ei.none())}}function u2(r,t,n){r instanceof lu?(function(l,u,f){const g=l.value.clone(),y=RE(l.fieldTransforms,u,f.transformResults);g.setAll(y),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()})(r,t,n):r instanceof fs?(function(l,u,f){if(!eh(l.precondition,u))return void u.convertToUnknownDocument(f.version);const g=RE(l.fieldTransforms,u,f.transformResults),y=u.data;y.setAll(eA(l)),y.setAll(g),u.convertToFoundDocument(f.version,y).setHasCommittedMutations()})(r,t,n):(function(l,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,t,n)}function ql(r,t,n,s){return r instanceof lu?(function(u,f,g,y){if(!eh(u.precondition,f))return g;const p=u.value.clone(),T=IE(u.fieldTransforms,y,f);return p.setAll(T),f.convertToFoundDocument(f.version,p).setHasLocalMutations(),null})(r,t,n,s):r instanceof fs?(function(u,f,g,y){if(!eh(u.precondition,f))return g;const p=IE(u.fieldTransforms,y,f),T=f.data;return T.setAll(eA(u)),T.setAll(p),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),g===null?null:g.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((S=>S.field)))})(r,t,n,s):(function(u,f,g){return eh(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):g})(r,t,n)}function c2(r,t){let n=null;for(const s of r.fieldTransforms){const l=t.data.field(s.field),u=$0(s.transform,l||null);u!=null&&(n===null&&(n=fn.empty()),n.set(s.field,u))}return n||null}function wE(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(s,l){return s===void 0&&l===void 0||!(!s||!l)&&uo(s,l,((u,f)=>o2(u,f)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class lu extends Ph{constructor(t,n,s,l=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class fs extends Ph{constructor(t,n,s,l,u=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=l,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function eA(r){const t=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);t.set(n,s)}})),t}function RE(r,t,n){const s=new Map;qt(r.length===n.length,32656,{Ve:n.length,de:r.length});for(let l=0;l<n.length;l++){const u=r[l],f=u.transform,g=t.data.field(u.field);s.set(u.field,s2(f,g,n[l]))}return s}function IE(r,t,n){const s=new Map;for(const l of r){const u=l.transform,f=n.data.field(l.field);s.set(l.field,r2(u,f,t))}return s}class nA extends Ph{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class h2 extends Ph{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f2{constructor(t,n,s,l){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=l}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let l=0;l<this.mutations.length;l++){const u=this.mutations[l];u.key.isEqual(t.key)&&u2(u,t,s[l])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=ql(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=ql(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Q0();return this.mutations.forEach((l=>{const u=t.get(l.key),f=u.overlayedDocument;let g=this.applyToLocalView(f,u.mutatedFields);g=n.has(l.key)?null:g;const y=tA(f,g);y!==null&&s.set(l.key,y),f.isValidDocument()||f.convertToNoDocument(pt.min())})),s}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),Ot())}isEqual(t){return this.batchId===t.batchId&&uo(this.mutations,t.mutations,((n,s)=>wE(n,s)))&&uo(this.baseMutations,t.baseMutations,((n,s)=>wE(n,s)))}}class pg{constructor(t,n,s,l){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=l}static from(t,n,s){qt(t.mutations.length===s.length,58842,{me:t.mutations.length,fe:s.length});let l=(function(){return WC})();const u=t.mutations;for(let f=0;f<u.length;f++)l=l.insert(u[f].key,s[f].version);return new pg(t,n,s,l)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d2{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m2{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ie,xt;function g2(r){switch(r){case Y.OK:return dt(64938);case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return dt(15467,{code:r})}}function iA(r){if(r===void 0)return hr("GRPC error has no .code"),Y.UNKNOWN;switch(r){case Ie.OK:return Y.OK;case Ie.CANCELLED:return Y.CANCELLED;case Ie.UNKNOWN:return Y.UNKNOWN;case Ie.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case Ie.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case Ie.INTERNAL:return Y.INTERNAL;case Ie.UNAVAILABLE:return Y.UNAVAILABLE;case Ie.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case Ie.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case Ie.NOT_FOUND:return Y.NOT_FOUND;case Ie.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case Ie.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case Ie.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case Ie.ABORTED:return Y.ABORTED;case Ie.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case Ie.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case Ie.DATA_LOSS:return Y.DATA_LOSS;default:return dt(39323,{code:r})}}(xt=Ie||(Ie={}))[xt.OK=0]="OK",xt[xt.CANCELLED=1]="CANCELLED",xt[xt.UNKNOWN=2]="UNKNOWN",xt[xt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",xt[xt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",xt[xt.NOT_FOUND=5]="NOT_FOUND",xt[xt.ALREADY_EXISTS=6]="ALREADY_EXISTS",xt[xt.PERMISSION_DENIED=7]="PERMISSION_DENIED",xt[xt.UNAUTHENTICATED=16]="UNAUTHENTICATED",xt[xt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",xt[xt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",xt[xt.ABORTED=10]="ABORTED",xt[xt.OUT_OF_RANGE=11]="OUT_OF_RANGE",xt[xt.UNIMPLEMENTED=12]="UNIMPLEMENTED",xt[xt.INTERNAL=13]="INTERNAL",xt[xt.UNAVAILABLE=14]="UNAVAILABLE",xt[xt.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p2(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y2=new Wr([4294967295,4294967295],0);function CE(r){const t=p2().encode(r),n=new y0;return n.update(t),new Uint8Array(n.digest())}function NE(r){const t=new DataView(r.buffer),n=t.getUint32(0,!0),s=t.getUint32(4,!0),l=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new Wr([n,s],0),new Wr([l,u],0)]}class yg{constructor(t,n,s){if(this.bitmap=t,this.padding=n,this.hashCount=s,n<0||n>=8)throw new kl(`Invalid padding: ${n}`);if(s<0)throw new kl(`Invalid hash count: ${s}`);if(t.length>0&&this.hashCount===0)throw new kl(`Invalid hash count: ${s}`);if(t.length===0&&n!==0)throw new kl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=Wr.fromNumber(this.ge)}ye(t,n,s){let l=t.add(n.multiply(Wr.fromNumber(s)));return l.compare(y2)===1&&(l=new Wr([l.getBits(0),l.getBits(1)],0)),l.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=CE(t),[s,l]=NE(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,l,u);if(!this.we(f))return!1}return!0}static create(t,n,s){const l=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new yg(u,l,n);return s.forEach((g=>f.insert(g))),f}insert(t){if(this.ge===0)return;const n=CE(t),[s,l]=NE(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,l,u);this.be(f)}}be(t){const n=Math.floor(t/8),s=t%8;this.bitmap[n]|=1<<s}}class kl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(t,n,s,l,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=l,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const l=new Map;return l.set(t,uu.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new Lh(pt.min(),l,new le(Dt),fr(),Ot())}}class uu{constructor(t,n,s,l,u){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=l,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new uu(s,n,Ot(),Ot(),Ot())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,n,s,l){this.Se=t,this.removedTargetIds=n,this.key=s,this.De=l}}class rA{constructor(t,n){this.targetId=t,this.Ce=n}}class sA{constructor(t,n,s=Ye.EMPTY_BYTE_STRING,l=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=l}}class DE{constructor(){this.ve=0,this.Fe=OE(),this.Me=Ye.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Ot(),n=Ot(),s=Ot();return this.Fe.forEach(((l,u)=>{switch(u){case 0:t=t.add(l);break;case 2:n=n.add(l);break;case 1:s=s.add(l);break;default:dt(38017,{changeType:u})}})),new uu(this.Me,this.xe,t,n,s)}Ke(){this.Oe=!1,this.Fe=OE()}qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}Ue(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}$e(){this.ve+=1}We(){this.ve-=1,qt(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class _2{constructor(t){this.Ge=t,this.ze=new Map,this.je=fr(),this.He=Kc(),this.Je=Kc(),this.Ze=new le(Dt)}Xe(t){for(const n of t.Se)t.De&&t.De.isFoundDocument()?this.Ye(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,(n=>{const s=this.nt(n);switch(t.state){case 0:this.rt(n)&&s.Le(t.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(t.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.Qe(),s.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(t.resumeToken));break;default:dt(56790,{state:t.state})}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach(((s,l)=>{this.rt(l)&&n(l)}))}st(t){const n=t.targetId,s=t.Ce.count,l=this.ot(n);if(l){const u=l.target;if(Mm(u))if(s===0){const f=new ut(u.path);this.et(n,f,Je.newNoDocument(f,pt.min()))}else qt(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const g=this.ut(t),y=g?this.ct(g,t,f):1;if(y!==0){this.it(n);const p=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,p)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:l=0},hashCount:u=0}=n;let f,g;try{f=rs(s).toUint8Array()}catch(y){if(y instanceof N0)return ta("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{g=new yg(f,l,u)}catch(y){return ta(y instanceof kl?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return g.ge===0?null:g}ct(t,n,s){return n.Ce.count===s-this.Pt(t,n.targetId)?0:2}Pt(t,n){const s=this.Ge.getRemoteKeysForTarget(n);let l=0;return s.forEach((u=>{const f=this.Ge.ht(),g=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(g)||(this.et(n,u,null),l++)})),l}Tt(t){const n=new Map;this.ze.forEach(((u,f)=>{const g=this.ot(f);if(g){if(u.current&&Mm(g.target)){const y=new ut(g.target.path);this.It(y).has(f)||this.Et(f,y)||this.et(f,y,Je.newNoDocument(y,t))}u.Be&&(n.set(f,u.ke()),u.Ke())}}));let s=Ot();this.Je.forEach(((u,f)=>{let g=!0;f.forEachWhile((y=>{const p=this.ot(y);return!p||p.purpose==="TargetPurposeLimboResolution"||(g=!1,!1)})),g&&(s=s.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(t)));const l=new Lh(t,n,this.Ze,this.je,s);return this.je=fr(),this.He=Kc(),this.Je=Kc(),this.Ze=new le(Dt),l}Ye(t,n){if(!this.rt(t))return;const s=this.Et(t,n.key)?2:0;this.nt(t).qe(n.key,s),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(t)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(t))}et(t,n,s){if(!this.rt(t))return;const l=this.nt(t);this.Et(t,n)?l.qe(n,1):l.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(t)),this.Je=this.Je.insert(n,this.Rt(n).add(t)),s&&(this.je=this.je.insert(n,s))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}$e(t){this.nt(t).$e()}nt(t){let n=this.ze.get(t);return n||(n=new DE,this.ze.set(t,n)),n}Rt(t){let n=this.Je.get(t);return n||(n=new xe(Dt),this.Je=this.Je.insert(t,n)),n}It(t){let n=this.He.get(t);return n||(n=new xe(Dt),this.He=this.He.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||rt("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new DE),this.Ge.getRemoteKeysForTarget(t).forEach((n=>{this.et(t,n,null)}))}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Kc(){return new le(ut.comparator)}function OE(){return new le(ut.comparator)}const v2={asc:"ASCENDING",desc:"DESCENDING"},E2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},T2={and:"AND",or:"OR"};class A2{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function Pm(r,t){return r.useProto3Json||Dh(t)?t:{value:t}}function ph(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function aA(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function S2(r,t){return ph(r,t.toTimestamp())}function Mi(r){return qt(!!r,49232),pt.fromTimestamp((function(n){const s=is(n);return new ie(s.seconds,s.nanos)})(r))}function _g(r,t){return Lm(r,t).canonicalString()}function Lm(r,t){const n=(function(l){return new te(["projects",l.projectId,"databases",l.database])})(r).child("documents");return t===void 0?n:n.child(t)}function oA(r){const t=te.fromString(r);return qt(fA(t),10190,{key:t.toString()}),t}function Um(r,t){return _g(r.databaseId,t.path)}function um(r,t){const n=oA(t);if(n.get(1)!==r.databaseId.projectId)throw new it(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new it(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ut(uA(n))}function lA(r,t){return _g(r.databaseId,t)}function b2(r){const t=oA(r);return t.length===4?te.emptyPath():uA(t)}function zm(r){return new te(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function uA(r){return qt(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function VE(r,t,n){return{name:Um(r,t),fields:n.value.mapValue.fields}}function w2(r,t){let n;if("targetChange"in t){t.targetChange;const s=(function(p){return p==="NO_CHANGE"?0:p==="ADD"?1:p==="REMOVE"?2:p==="CURRENT"?3:p==="RESET"?4:dt(39313,{state:p})})(t.targetChange.targetChangeType||"NO_CHANGE"),l=t.targetChange.targetIds||[],u=(function(p,T){return p.useProto3Json?(qt(T===void 0||typeof T=="string",58123),Ye.fromBase64String(T||"")):(qt(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Ye.fromUint8Array(T||new Uint8Array))})(r,t.targetChange.resumeToken),f=t.targetChange.cause,g=f&&(function(p){const T=p.code===void 0?Y.UNKNOWN:iA(p.code);return new it(T,p.message||"")})(f);n=new sA(s,l,u,g||null)}else if("documentChange"in t){t.documentChange;const s=t.documentChange;s.document,s.document.name,s.document.updateTime;const l=um(r,s.document.name),u=Mi(s.document.updateTime),f=s.document.createTime?Mi(s.document.createTime):pt.min(),g=new fn({mapValue:{fields:s.document.fields}}),y=Je.newFoundDocument(l,u,f,g),p=s.targetIds||[],T=s.removedTargetIds||[];n=new nh(p,T,y.key,y)}else if("documentDelete"in t){t.documentDelete;const s=t.documentDelete;s.document;const l=um(r,s.document),u=s.readTime?Mi(s.readTime):pt.min(),f=Je.newNoDocument(l,u),g=s.removedTargetIds||[];n=new nh([],g,f.key,f)}else if("documentRemove"in t){t.documentRemove;const s=t.documentRemove;s.document;const l=um(r,s.document),u=s.removedTargetIds||[];n=new nh([],u,l,null)}else{if(!("filter"in t))return dt(11601,{Vt:t});{t.filter;const s=t.filter;s.targetId;const{count:l=0,unchangedNames:u}=s,f=new m2(l,u),g=s.targetId;n=new rA(g,f)}}return n}function R2(r,t){let n;if(t instanceof lu)n={update:VE(r,t.key,t.value)};else if(t instanceof nA)n={delete:Um(r,t.key)};else if(t instanceof fs)n={update:VE(r,t.key,t.data),updateMask:k2(t.fieldMask)};else{if(!(t instanceof h2))return dt(16599,{dt:t.type});n={verify:Um(r,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((s=>(function(u,f){const g=f.transform;if(g instanceof Jl)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(g instanceof Zl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:g.elements}};if(g instanceof Wl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:g.elements}};if(g instanceof gh)return{fieldPath:f.field.canonicalString(),increment:g.Ae};throw dt(20930,{transform:f.transform})})(0,s)))),t.precondition.isNone||(n.currentDocument=(function(l,u){return u.updateTime!==void 0?{updateTime:S2(l,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:dt(27497)})(r,t.precondition)),n}function I2(r,t){return r&&r.length>0?(qt(t!==void 0,14353),r.map((n=>(function(l,u){let f=l.updateTime?Mi(l.updateTime):Mi(u);return f.isEqual(pt.min())&&(f=Mi(u)),new l2(f,l.transformResults||[])})(n,t)))):[]}function C2(r,t){return{documents:[lA(r,t.path)]}}function N2(r,t){const n={structuredQuery:{}},s=t.path;let l;t.collectionGroup!==null?(l=s,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(l=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=lA(r,l);const u=(function(p){if(p.length!==0)return hA(si.create(p,"and"))})(t.filters);u&&(n.structuredQuery.where=u);const f=(function(p){if(p.length!==0)return p.map((T=>(function(w){return{field:eo(w.field),direction:V2(w.dir)}})(T)))})(t.orderBy);f&&(n.structuredQuery.orderBy=f);const g=Pm(r,t.limit);return g!==null&&(n.structuredQuery.limit=g),t.startAt&&(n.structuredQuery.startAt=(function(p){return{before:p.inclusive,values:p.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(p){return{before:!p.inclusive,values:p.position}})(t.endAt)),{ft:n,parent:l}}function D2(r){let t=b2(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let l=null;if(s>0){qt(s===1,65062);const T=n.from[0];T.allDescendants?l=T.collectionId:t=t.child(T.collectionId)}let u=[];n.where&&(u=(function(S){const w=cA(S);return w instanceof si&&z0(w)?w.getFilters():[w]})(n.where));let f=[];n.orderBy&&(f=(function(S){return S.map((w=>(function(J){return new $l(no(J.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(J.direction))})(w)))})(n.orderBy));let g=null;n.limit&&(g=(function(S){let w;return w=typeof S=="object"?S.value:S,Dh(w)?null:w})(n.limit));let y=null;n.startAt&&(y=(function(S){const w=!!S.before,j=S.values||[];return new mh(j,w)})(n.startAt));let p=null;return n.endAt&&(p=(function(S){const w=!S.before,j=S.values||[];return new mh(j,w)})(n.endAt)),KC(t,l,f,u,g,"F",y,p)}function O2(r,t){const n=(function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return dt(28987,{purpose:l})}})(t.purpose);return n==null?null:{"goog-listen-tags":n}}function cA(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=no(n.unaryFilter.field);return Ce.create(s,"==",{doubleValue:NaN});case"IS_NULL":const l=no(n.unaryFilter.field);return Ce.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=no(n.unaryFilter.field);return Ce.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=no(n.unaryFilter.field);return Ce.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return dt(61313);default:return dt(60726)}})(r):r.fieldFilter!==void 0?(function(n){return Ce.create(no(n.fieldFilter.field),(function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return dt(58110);default:return dt(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return si.create(n.compositeFilter.filters.map((s=>cA(s))),(function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return dt(1026)}})(n.compositeFilter.op))})(r):dt(30097,{filter:r})}function V2(r){return v2[r]}function M2(r){return E2[r]}function x2(r){return T2[r]}function eo(r){return{fieldPath:r.canonicalString()}}function no(r){return Ke.fromServerFormat(r.fieldPath)}function hA(r){return r instanceof Ce?(function(n){if(n.op==="=="){if(vE(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NAN"}};if(_E(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(vE(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NOT_NAN"}};if(_E(n.value))return{unaryFilter:{field:eo(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:eo(n.field),op:M2(n.op),value:n.value}}})(r):r instanceof si?(function(n){const s=n.getFilters().map((l=>hA(l)));return s.length===1?s[0]:{compositeFilter:{op:x2(n.op),filters:s}}})(r):dt(54877,{filter:r})}function k2(r){const t=[];return r.fields.forEach((n=>t.push(n.canonicalString()))),{fieldPaths:t}}function fA(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function dA(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(t,n,s,l,u=pt.min(),f=pt.min(),g=Ye.EMPTY_BYTE_STRING,y=null){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=l,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=g,this.expectedCount=y}withSequenceNumber(t){return new Jr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Jr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(t){this.yt=t}}function L2(r){const t=D2({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?km(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U2{constructor(){this.Sn=new z2}addToCollectionParentIndex(t,n){return this.Sn.add(n),$.resolve()}getCollectionParents(t,n){return $.resolve(this.Sn.getEntries(n))}addFieldIndex(t,n){return $.resolve()}deleteFieldIndex(t,n){return $.resolve()}deleteAllFieldIndexes(t){return $.resolve()}createTargetIndexes(t,n){return $.resolve()}getDocumentsMatchingTarget(t,n){return $.resolve(null)}getIndexType(t,n){return $.resolve(0)}getFieldIndexes(t,n){return $.resolve([])}getNextCollectionGroupToUpdate(t){return $.resolve(null)}getMinOffset(t,n){return $.resolve(ns.min())}getMinOffsetFromCollectionGroup(t,n){return $.resolve(ns.min())}updateCollectionGroup(t,n,s){return $.resolve()}updateIndexEntries(t,n){return $.resolve()}}class z2{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),l=this.index[n]||new xe(te.comparator),u=!l.has(s);return this.index[n]=l.add(s),u}has(t){const n=t.lastSegment(),s=t.popLast(),l=this.index[n];return l&&l.has(s)}getEntries(t){return(this.index[t]||new xe(te.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},mA=41943040;class hn{static withCacheSize(t){return new hn(t,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,s){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn.DEFAULT_COLLECTION_PERCENTILE=10,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hn.DEFAULT=new hn(mA,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hn.DISABLED=new hn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(t){this.sr=t}next(){return this.sr+=2,this.sr}static _r(){return new fo(0)}static ar(){return new fo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xE="LruGarbageCollector",j2=1048576;function kE([r,t],[n,s]){const l=Dt(r,n);return l===0?Dt(t,s):l}class B2{constructor(t){this.Pr=t,this.buffer=new xe(kE),this.Tr=0}Ir(){return++this.Tr}Er(t){const n=[t,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();kE(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class q2{constructor(t,n,s){this.garbageCollector=t,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(t){rt(xE,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){To(n)?rt(xE,"Ignoring IndexedDB error during garbage collection: ",n):await Eo(n)}await this.Ar(3e5)}))}}class H2{constructor(t,n){this.Vr=t,this.params=n}calculateTargetCount(t,n){return this.Vr.dr(t).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(t,n){if(n===0)return $.resolve(Nh.ce);const s=new B2(n);return this.Vr.forEachTarget(t,(l=>s.Er(l.sequenceNumber))).next((()=>this.Vr.mr(t,(l=>s.Er(l))))).next((()=>s.maxValue))}removeTargets(t,n,s){return this.Vr.removeTargets(t,n,s)}removeOrphanedDocuments(t,n){return this.Vr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(rt("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(ME)):this.getCacheSize(t).next((s=>s<this.params.cacheSizeCollectionThreshold?(rt("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ME):this.gr(t,n)))}getCacheSize(t){return this.Vr.getCacheSize(t)}gr(t,n){let s,l,u,f,g,y,p;const T=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(rt("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),l=this.params.maximumSequenceNumbersToCollect):l=S,f=Date.now(),this.nthSequenceNumber(t,l)))).next((S=>(s=S,g=Date.now(),this.removeTargets(t,s,n)))).next((S=>(u=S,y=Date.now(),this.removeOrphanedDocuments(t,s)))).next((S=>(p=Date.now(),Wa()<=Nt.DEBUG&&rt("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${l} in `+(g-f)+`ms
	Removed ${u} targets in `+(y-g)+`ms
	Removed ${S} documents in `+(p-y)+`ms
Total Duration: ${p-T}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:u,documentsRemoved:S}))))}}function F2(r,t){return new H2(r,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G2{constructor(){this.changes=new oa((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Je.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?$.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K2{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y2{constructor(t,n,s,l){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=l}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next((l=>(s=l,this.remoteDocumentCache.getEntry(t,n)))).next((l=>(s!==null&&ql(s.mutation,l,An.empty(),ie.now()),l)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.getLocalViewOfDocuments(t,s,Ot()).next((()=>s))))}getLocalViewOfDocuments(t,n,s=Ot()){const l=Ks();return this.populateOverlays(t,l,n).next((()=>this.computeViews(t,n,l,s).next((u=>{let f=xl();return u.forEach(((g,y)=>{f=f.insert(g,y.overlayedDocument)})),f}))))}getOverlayedDocuments(t,n){const s=Ks();return this.populateOverlays(t,s,n).next((()=>this.computeViews(t,n,s,Ot())))}populateOverlays(t,n,s){const l=[];return s.forEach((u=>{n.has(u)||l.push(u)})),this.documentOverlayCache.getOverlays(t,l).next((u=>{u.forEach(((f,g)=>{n.set(f,g)}))}))}computeViews(t,n,s,l){let u=fr();const f=Bl(),g=(function(){return Bl()})();return n.forEach(((y,p)=>{const T=s.get(p.key);l.has(p.key)&&(T===void 0||T.mutation instanceof fs)?u=u.insert(p.key,p):T!==void 0?(f.set(p.key,T.mutation.getFieldMask()),ql(T.mutation,p,T.mutation.getFieldMask(),ie.now())):f.set(p.key,An.empty())})),this.recalculateAndSaveOverlays(t,u).next((y=>(y.forEach(((p,T)=>f.set(p,T))),n.forEach(((p,T)=>g.set(p,new K2(T,f.get(p)??null)))),g)))}recalculateAndSaveOverlays(t,n){const s=Bl();let l=new le(((f,g)=>f-g)),u=Ot();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((f=>{for(const g of f)g.keys().forEach((y=>{const p=n.get(y);if(p===null)return;let T=s.get(y)||An.empty();T=g.applyToLocalView(p,T),s.set(y,T);const S=(l.get(g.batchId)||Ot()).add(y);l=l.insert(g.batchId,S)}))})).next((()=>{const f=[],g=l.getReverseIterator();for(;g.hasNext();){const y=g.getNext(),p=y.key,T=y.value,S=Q0();T.forEach((w=>{if(!u.has(w)){const j=tA(n.get(w),s.get(w));j!==null&&S.set(w,j),u=u.add(w)}})),f.push(this.documentOverlayCache.saveOverlays(t,p,S))}return $.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((s=>this.recalculateAndSaveOverlays(t,s)))}getDocumentsMatchingQuery(t,n,s,l){return YC(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):H0(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s,l):this.getDocumentsMatchingCollectionQuery(t,n,s,l)}getNextDocuments(t,n,s,l){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,l).next((u=>{const f=l-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,l-u.size):$.resolve(Ks());let g=Kl,y=u;return f.next((p=>$.forEach(p,((T,S)=>(g<S.largestBatchId&&(g=S.largestBatchId),u.get(T)?$.resolve():this.remoteDocumentCache.getEntry(t,T).next((w=>{y=y.insert(T,w)}))))).next((()=>this.populateOverlays(t,p,u))).next((()=>this.computeViews(t,y,p,Ot()))).next((T=>({batchId:g,changes:Y0(T)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ut(n)).next((s=>{let l=xl();return s.isFoundDocument()&&(l=l.insert(s.key,s)),l}))}getDocumentsMatchingCollectionGroupQuery(t,n,s,l){const u=n.collectionGroup;let f=xl();return this.indexManager.getCollectionParents(t,u).next((g=>$.forEach(g,(y=>{const p=(function(S,w){return new Ao(w,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(n,y.child(u));return this.getDocumentsMatchingCollectionQuery(t,p,s,l).next((T=>{T.forEach(((S,w)=>{f=f.insert(S,w)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(t,n,s,l){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,u,l)))).next((f=>{u.forEach(((y,p)=>{const T=p.getKey();f.get(T)===null&&(f=f.insert(T,Je.newInvalidDocument(T)))}));let g=xl();return f.forEach(((y,p)=>{const T=u.get(y);T!==void 0&&ql(T.mutation,p,An.empty(),ie.now()),xh(n,p)&&(g=g.insert(y,p))})),g}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{constructor(t){this.serializer=t,this.Nr=new Map,this.Br=new Map}getBundleMetadata(t,n){return $.resolve(this.Nr.get(n))}saveBundleMetadata(t,n){return this.Nr.set(n.id,(function(l){return{id:l.id,version:l.version,createTime:Mi(l.createTime)}})(n)),$.resolve()}getNamedQuery(t,n){return $.resolve(this.Br.get(n))}saveNamedQuery(t,n){return this.Br.set(n.name,(function(l){return{name:l.name,query:L2(l.bundledQuery),readTime:Mi(l.readTime)}})(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X2{constructor(){this.overlays=new le(ut.comparator),this.Lr=new Map}getOverlay(t,n){return $.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Ks();return $.forEach(n,(l=>this.getOverlay(t,l).next((u=>{u!==null&&s.set(l,u)})))).next((()=>s))}saveOverlays(t,n,s){return s.forEach(((l,u)=>{this.bt(t,n,u)})),$.resolve()}removeOverlaysForBatchId(t,n,s){const l=this.Lr.get(s);return l!==void 0&&(l.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),$.resolve()}getOverlaysForCollection(t,n,s){const l=Ks(),u=n.length+1,f=new ut(n.child("")),g=this.overlays.getIteratorFrom(f);for(;g.hasNext();){const y=g.getNext().value,p=y.getKey();if(!n.isPrefixOf(p.path))break;p.path.length===u&&y.largestBatchId>s&&l.set(y.getKey(),y)}return $.resolve(l)}getOverlaysForCollectionGroup(t,n,s,l){let u=new le(((p,T)=>p-T));const f=this.overlays.getIterator();for(;f.hasNext();){const p=f.getNext().value;if(p.getKey().getCollectionGroup()===n&&p.largestBatchId>s){let T=u.get(p.largestBatchId);T===null&&(T=Ks(),u=u.insert(p.largestBatchId,T)),T.set(p.getKey(),p)}}const g=Ks(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((p,T)=>g.set(p,T))),!(g.size()>=l)););return $.resolve(g)}bt(t,n,s){const l=this.overlays.get(s.key);if(l!==null){const f=this.Lr.get(l.largestBatchId).delete(s.key);this.Lr.set(l.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new d2(n,s));let u=this.Lr.get(n);u===void 0&&(u=Ot(),this.Lr.set(n,u)),this.Lr.set(n,u.add(s.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(t){return $.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vg{constructor(){this.kr=new xe(Ue.Kr),this.qr=new xe(Ue.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(t,n){const s=new Ue(t,n);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(t,n){t.forEach((s=>this.addReference(s,n)))}removeReference(t,n){this.Wr(new Ue(t,n))}Qr(t,n){t.forEach((s=>this.removeReference(s,n)))}Gr(t){const n=new ut(new te([])),s=new Ue(n,t),l=new Ue(n,t+1),u=[];return this.qr.forEachInRange([s,l],(f=>{this.Wr(f),u.push(f.key)})),u}zr(){this.kr.forEach((t=>this.Wr(t)))}Wr(t){this.kr=this.kr.delete(t),this.qr=this.qr.delete(t)}jr(t){const n=new ut(new te([])),s=new Ue(n,t),l=new Ue(n,t+1);let u=Ot();return this.qr.forEachInRange([s,l],(f=>{u=u.add(f.key)})),u}containsKey(t){const n=new Ue(t,0),s=this.kr.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Ue{constructor(t,n){this.key=t,this.Hr=n}static Kr(t,n){return ut.comparator(t.key,n.key)||Dt(t.Hr,n.Hr)}static Ur(t,n){return Dt(t.Hr,n.Hr)||ut.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new xe(Ue.Kr)}checkEmpty(t){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,l){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new f2(u,n,s,l);this.mutationQueue.push(f);for(const g of l)this.Jr=this.Jr.add(new Ue(g.key,u)),this.indexManager.addToCollectionParentIndex(t,g.key.path.popLast());return $.resolve(f)}lookupMutationBatch(t,n){return $.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,l=this.Xr(s),u=l<0?0:l;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?cg:this.Yn-1)}getAllMutationBatches(t){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Ue(n,0),l=new Ue(n,Number.POSITIVE_INFINITY),u=[];return this.Jr.forEachInRange([s,l],(f=>{const g=this.Zr(f.Hr);u.push(g)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new xe(Dt);return n.forEach((l=>{const u=new Ue(l,0),f=new Ue(l,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([u,f],(g=>{s=s.add(g.Hr)}))})),$.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,l=s.length+1;let u=s;ut.isDocumentKey(u)||(u=u.child(""));const f=new Ue(new ut(u),0);let g=new xe(Dt);return this.Jr.forEachWhile((y=>{const p=y.key.path;return!!s.isPrefixOf(p)&&(p.length===l&&(g=g.add(y.Hr)),!0)}),f),$.resolve(this.Yr(g))}Yr(t){const n=[];return t.forEach((s=>{const l=this.Zr(s);l!==null&&n.push(l)})),n}removeMutationBatch(t,n){qt(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return $.forEach(n.mutations,(l=>{const u=new Ue(l.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,l.key)})).next((()=>{this.Jr=s}))}nr(t){}containsKey(t,n){const s=new Ue(n,0),l=this.Jr.firstAfterOrEqual(s);return $.resolve(n.isEqual(l&&l.key))}performConsistencyCheck(t){return this.mutationQueue.length,$.resolve()}ei(t,n){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const n=this.Xr(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2{constructor(t){this.ti=t,this.docs=(function(){return new le(ut.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,l=this.docs.get(s),u=l?l.size:0,f=this.ti(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return $.resolve(s?s.document.mutableCopy():Je.newInvalidDocument(n))}getEntries(t,n){let s=fr();return n.forEach((l=>{const u=this.docs.get(l);s=s.insert(l,u?u.document.mutableCopy():Je.newInvalidDocument(l))})),$.resolve(s)}getDocumentsMatchingQuery(t,n,s,l){let u=fr();const f=n.path,g=new ut(f.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(g);for(;y.hasNext();){const{key:p,value:{document:T}}=y.getNext();if(!f.isPrefixOf(p.path))break;p.path.length>f.length+1||SC(AC(T),s)<=0||(l.has(T.key)||xh(n,T))&&(u=u.insert(T.key,T.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(t,n,s,l){dt(9500)}ni(t,n){return $.forEach(this.docs,(s=>n(s)))}newChangeBuffer(t){return new W2(this)}getSize(t){return $.resolve(this.size)}}class W2 extends G2{constructor(t){super(),this.Mr=t}applyChanges(t){const n=[];return this.changes.forEach(((s,l)=>{l.isValidDocument()?n.push(this.Mr.addEntry(t,l)):this.Mr.removeEntry(s)})),$.waitFor(n)}getFromCache(t,n){return this.Mr.getEntry(t,n)}getAllFromCache(t,n){return this.Mr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tN{constructor(t){this.persistence=t,this.ri=new oa((n=>dg(n)),mg),this.lastRemoteSnapshotVersion=pt.min(),this.highestTargetId=0,this.ii=0,this.si=new vg,this.targetCount=0,this.oi=fo._r()}forEachTarget(t,n){return this.ri.forEach(((s,l)=>n(l))),$.resolve()}getLastRemoteSnapshotVersion(t){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return $.resolve(this.ii)}allocateTargetId(t){return this.highestTargetId=this.oi.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.ii&&(this.ii=n),$.resolve()}lr(t){this.ri.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.oi=new fo(n),this.highestTargetId=n),t.sequenceNumber>this.ii&&(this.ii=t.sequenceNumber)}addTargetData(t,n){return this.lr(n),this.targetCount+=1,$.resolve()}updateTargetData(t,n){return this.lr(n),$.resolve()}removeTargetData(t,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(t,n,s){let l=0;const u=[];return this.ri.forEach(((f,g)=>{g.sequenceNumber<=n&&s.get(g.targetId)===null&&(this.ri.delete(f),u.push(this.removeMatchingKeysForTargetId(t,g.targetId)),l++)})),$.waitFor(u).next((()=>l))}getTargetCount(t){return $.resolve(this.targetCount)}getTargetData(t,n){const s=this.ri.get(n)||null;return $.resolve(s)}addMatchingKeys(t,n,s){return this.si.$r(n,s),$.resolve()}removeMatchingKeys(t,n,s){this.si.Qr(n,s);const l=this.persistence.referenceDelegate,u=[];return l&&n.forEach((f=>{u.push(l.markPotentiallyOrphaned(t,f))})),$.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this.si.Gr(n),$.resolve()}getMatchingKeysForTargetId(t,n){const s=this.si.jr(n);return $.resolve(s)}containsKey(t,n){return $.resolve(this.si.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gA{constructor(t,n){this._i={},this.overlays={},this.ai=new Nh(0),this.ui=!1,this.ui=!0,this.ci=new $2,this.referenceDelegate=t(this),this.li=new tN(this),this.indexManager=new U2,this.remoteDocumentCache=(function(l){return new Z2(l)})((s=>this.referenceDelegate.hi(s))),this.serializer=new P2(n),this.Pi=new Q2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new X2,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this._i[t.toKey()];return s||(s=new J2(n,this.referenceDelegate),this._i[t.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(t,n,s){rt("MemoryPersistence","Starting transaction:",t);const l=new eN(this.ai.next());return this.referenceDelegate.Ti(),s(l).next((u=>this.referenceDelegate.Ii(l).next((()=>u)))).toPromise().then((u=>(l.raiseOnCommittedEvent(),u)))}Ei(t,n){return $.or(Object.values(this._i).map((s=>()=>s.containsKey(t,n))))}}class eN extends wC{constructor(t){super(),this.currentSequenceNumber=t}}class Eg{constructor(t){this.persistence=t,this.Ri=new vg,this.Ai=null}static Vi(t){return new Eg(t)}get di(){if(this.Ai)return this.Ai;throw dt(60996)}addReference(t,n,s){return this.Ri.addReference(s,n),this.di.delete(s.toString()),$.resolve()}removeReference(t,n,s){return this.Ri.removeReference(s,n),this.di.add(s.toString()),$.resolve()}markPotentiallyOrphaned(t,n){return this.di.add(n.toString()),$.resolve()}removeTarget(t,n){this.Ri.Gr(n.targetId).forEach((l=>this.di.add(l.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next((l=>{l.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(t,n)))}Ti(){this.Ai=new Set}Ii(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.di,(s=>{const l=ut.fromPath(s);return this.mi(t,l).next((u=>{u||n.removeEntry(l,pt.min())}))})).next((()=>(this.Ai=null,n.apply(t))))}updateLimboDocument(t,n){return this.mi(t,n).next((s=>{s?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(t){return 0}mi(t,n){return $.or([()=>$.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ei(t,n)])}}class yh{constructor(t,n){this.persistence=t,this.fi=new oa((s=>CC(s.path)),((s,l)=>s.isEqual(l))),this.garbageCollector=F2(this,n)}static Vi(t,n){return new yh(t,n)}Ti(){}Ii(t){return $.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}dr(t){const n=this.pr(t);return this.persistence.getTargetCache().getTargetCount(t).next((s=>n.next((l=>s+l))))}pr(t){let n=0;return this.mr(t,(s=>{n++})).next((()=>n))}mr(t,n){return $.forEach(this.fi,((s,l)=>this.wr(t,s,l).next((u=>u?$.resolve():n(l)))))}removeTargets(t,n,s){return this.persistence.getTargetCache().removeTargets(t,n,s)}removeOrphanedDocuments(t,n){let s=0;const l=this.persistence.getRemoteDocumentCache(),u=l.newChangeBuffer();return l.ni(t,(f=>this.wr(t,f,n).next((g=>{g||(s++,u.removeEntry(f,pt.min()))})))).next((()=>u.apply(t))).next((()=>s))}markPotentiallyOrphaned(t,n){return this.fi.set(n,t.currentSequenceNumber),$.resolve()}removeTarget(t,n){const s=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,s)}addReference(t,n,s){return this.fi.set(s,t.currentSequenceNumber),$.resolve()}removeReference(t,n,s){return this.fi.set(s,t.currentSequenceNumber),$.resolve()}updateLimboDocument(t,n){return this.fi.set(n,t.currentSequenceNumber),$.resolve()}hi(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=Wc(t.data.value)),n}wr(t,n,s){return $.or([()=>this.persistence.Ei(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const l=this.fi.get(n);return $.resolve(l!==void 0&&l>s)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tg{constructor(t,n,s,l){this.targetId=t,this.fromCache=n,this.Ts=s,this.Is=l}static Es(t,n){let s=Ot(),l=Ot();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:l=l.add(u.doc.key)}return new Tg(t,n.fromCache,s,l)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iN{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return M1()?8:RC(Ze())>0?6:4})()}initialize(t,n){this.fs=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,s,l){const u={result:null};return this.gs(t,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ps(t,n,l,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new nN;return this.ys(t,n,f).next((g=>{if(u.result=g,this.As)return this.ws(t,n,f,g.size)}))})).next((()=>u.result))}ws(t,n,s,l){return s.documentReadCount<this.Vs?(Wa()<=Nt.DEBUG&&rt("QueryEngine","SDK will not create cache indexes for query:",to(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(Wa()<=Nt.DEBUG&&rt("QueryEngine","Query:",to(n),"scans",s.documentReadCount,"local documents and returns",l,"documents as results."),s.documentReadCount>this.ds*l?(Wa()<=Nt.DEBUG&&rt("QueryEngine","The SDK decides to create cache indexes for query:",to(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Vi(n))):$.resolve())}gs(t,n){if(SE(n))return $.resolve(null);let s=Vi(n);return this.indexManager.getIndexType(t,s).next((l=>l===0?null:(n.limit!==null&&l===1&&(n=km(n,null,"F"),s=Vi(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next((u=>{const f=Ot(...u);return this.fs.getDocuments(t,f).next((g=>this.indexManager.getMinOffset(t,s).next((y=>{const p=this.bs(n,g);return this.Ss(n,p,f,y.readTime)?this.gs(t,km(n,null,"F")):this.Ds(t,p,n,y)}))))})))))}ps(t,n,s,l){return SE(n)||l.isEqual(pt.min())?$.resolve(null):this.fs.getDocuments(t,s).next((u=>{const f=this.bs(n,u);return this.Ss(n,f,s,l)?$.resolve(null):(Wa()<=Nt.DEBUG&&rt("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),to(n)),this.Ds(t,f,n,TC(l,Kl)).next((g=>g)))}))}bs(t,n){let s=new xe(G0(t));return n.forEach(((l,u)=>{xh(t,u)&&(s=s.add(u))})),s}Ss(t,n,s,l){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(l)>0)}ys(t,n,s){return Wa()<=Nt.DEBUG&&rt("QueryEngine","Using full collection scan to execute query:",to(n)),this.fs.getDocumentsMatchingQuery(t,n,ns.min(),s)}Ds(t,n,s,l){return this.fs.getDocumentsMatchingQuery(t,s,l).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="LocalStore",rN=3e8;class sN{constructor(t,n,s,l){this.persistence=t,this.Cs=n,this.serializer=l,this.vs=new le(Dt),this.Fs=new oa((u=>dg(u)),mg),this.Ms=new Map,this.xs=t.getRemoteDocumentCache(),this.li=t.getTargetCache(),this.Pi=t.getBundleCache(),this.Os(s)}Os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new Y2(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.vs)))}}function aN(r,t,n,s){return new sN(r,t,n,s)}async function pA(r,t){const n=_t(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let l;return n.mutationQueue.getAllMutationBatches(s).next((u=>(l=u,n.Os(t),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],g=[];let y=Ot();for(const p of l){f.push(p.batchId);for(const T of p.mutations)y=y.add(T.key)}for(const p of u){g.push(p.batchId);for(const T of p.mutations)y=y.add(T.key)}return n.localDocuments.getDocuments(s,y).next((p=>({Ns:p,removedBatchIds:f,addedBatchIds:g})))}))}))}function oN(r,t){const n=_t(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const l=t.batch.keys(),u=n.xs.newChangeBuffer({trackRemovals:!0});return(function(g,y,p,T){const S=p.batch,w=S.keys();let j=$.resolve();return w.forEach((J=>{j=j.next((()=>T.getEntry(y,J))).next((Z=>{const W=p.docVersions.get(J);qt(W!==null,48541),Z.version.compareTo(W)<0&&(S.applyToRemoteDocument(Z,p),Z.isValidDocument()&&(Z.setReadTime(p.commitVersion),T.addEntry(Z)))}))})),j.next((()=>g.mutationQueue.removeMutationBatch(y,S)))})(n,s,t,u).next((()=>u.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,l,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(g){let y=Ot();for(let p=0;p<g.mutationResults.length;++p)g.mutationResults[p].transformResults.length>0&&(y=y.add(g.batch.mutations[p].key));return y})(t)))).next((()=>n.localDocuments.getDocuments(s,l)))}))}function yA(r){const t=_t(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>t.li.getLastRemoteSnapshotVersion(n)))}function lN(r,t){const n=_t(r),s=t.snapshotVersion;let l=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.xs.newChangeBuffer({trackRemovals:!0});l=n.vs;const g=[];t.targetChanges.forEach(((T,S)=>{const w=l.get(S);if(!w)return;g.push(n.li.removeMatchingKeys(u,T.removedDocuments,S).next((()=>n.li.addMatchingKeys(u,T.addedDocuments,S))));let j=w.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(S)!==null?j=j.withResumeToken(Ye.EMPTY_BYTE_STRING,pt.min()).withLastLimboFreeSnapshotVersion(pt.min()):T.resumeToken.approximateByteSize()>0&&(j=j.withResumeToken(T.resumeToken,s)),l=l.insert(S,j),(function(Z,W,mt){return Z.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-Z.snapshotVersion.toMicroseconds()>=rN?!0:mt.addedDocuments.size+mt.modifiedDocuments.size+mt.removedDocuments.size>0})(w,j,T)&&g.push(n.li.updateTargetData(u,j))}));let y=fr(),p=Ot();if(t.documentUpdates.forEach((T=>{t.resolvedLimboDocuments.has(T)&&g.push(n.persistence.referenceDelegate.updateLimboDocument(u,T))})),g.push(uN(u,f,t.documentUpdates).next((T=>{y=T.Bs,p=T.Ls}))),!s.isEqual(pt.min())){const T=n.li.getLastRemoteSnapshotVersion(u).next((S=>n.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));g.push(T)}return $.waitFor(g).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,y,p))).next((()=>y))})).then((u=>(n.vs=l,u)))}function uN(r,t,n){let s=Ot(),l=Ot();return n.forEach((u=>s=s.add(u))),t.getEntries(r,s).next((u=>{let f=fr();return n.forEach(((g,y)=>{const p=u.get(g);y.isFoundDocument()!==p.isFoundDocument()&&(l=l.add(g)),y.isNoDocument()&&y.version.isEqual(pt.min())?(t.removeEntry(g,y.readTime),f=f.insert(g,y)):!p.isValidDocument()||y.version.compareTo(p.version)>0||y.version.compareTo(p.version)===0&&p.hasPendingWrites?(t.addEntry(y),f=f.insert(g,y)):rt(Ag,"Ignoring outdated watch update for ",g,". Current version:",p.version," Watch version:",y.version)})),{Bs:f,Ls:l}}))}function cN(r,t){const n=_t(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(t===void 0&&(t=cg),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t))))}function hN(r,t){const n=_t(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let l;return n.li.getTargetData(s,t).next((u=>u?(l=u,$.resolve(l)):n.li.allocateTargetId(s).next((f=>(l=new Jr(t,f,"TargetPurposeListen",s.currentSequenceNumber),n.li.addTargetData(s,l).next((()=>l)))))))})).then((s=>{const l=n.vs.get(s.targetId);return(l===null||s.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(n.vs=n.vs.insert(s.targetId,s),n.Fs.set(t,s.targetId)),s}))}async function jm(r,t,n){const s=_t(r),l=s.vs.get(t),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,l)))}catch(f){if(!To(f))throw f;rt(Ag,`Failed to update sequence numbers for target ${t}: ${f}`)}s.vs=s.vs.remove(t),s.Fs.delete(l.target)}function PE(r,t,n){const s=_t(r);let l=pt.min(),u=Ot();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(y,p,T){const S=_t(y),w=S.Fs.get(T);return w!==void 0?$.resolve(S.vs.get(w)):S.li.getTargetData(p,T)})(s,f,Vi(t)).next((g=>{if(g)return l=g.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(f,g.targetId).next((y=>{u=y}))})).next((()=>s.Cs.getDocumentsMatchingQuery(f,t,n?l:pt.min(),n?u:Ot()))).next((g=>(fN(s,$C(t),g),{documents:g,ks:u})))))}function fN(r,t,n){let s=r.Ms.get(t)||pt.min();n.forEach(((l,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Ms.set(t,s)}class LE{constructor(){this.activeTargetIds=n2()}Qs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Gs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class dN{constructor(){this.vo=new LE,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t,n=!0){return n&&this.vo.Qs(t),this.Fo[t]||"not-current"}updateQueryState(t,n,s){this.Fo[t]=n}removeLocalQueryTarget(t){this.vo.Gs(t)}isLocalQueryTarget(t){return this.vo.activeTargetIds.has(t)}clearQueryState(t){delete this.Fo[t]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(t){return this.vo.activeTargetIds.has(t)}start(){return this.vo=new LE,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{Mo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UE="ConnectivityMonitor";class zE{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(t){this.Lo.push(t)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){rt(UE,"Network connectivity changed: AVAILABLE");for(const t of this.Lo)t(0)}Bo(){rt(UE,"Network connectivity changed: UNAVAILABLE");for(const t of this.Lo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yc=null;function Bm(){return Yc===null?Yc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Yc++,"0x"+Yc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm="RestConnection",gN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class pN{get Ko(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+t.host,this.Uo=`projects/${s}/databases/${l}`,this.$o=this.databaseId.database===Nm?`project_id=${s}`:`project_id=${s}&database_id=${l}`}Wo(t,n,s,l,u){const f=Bm(),g=this.Qo(t,n.toUriEncodedString());rt(cm,`Sending RPC '${t}' ${f}:`,g,s);const y={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(y,l,u);const{host:p}=new URL(g),T=go(p);return this.zo(t,g,y,s,T).then((S=>(rt(cm,`Received RPC '${t}' ${f}: `,S),S)),(S=>{throw ta(cm,`RPC '${t}' ${f} failed with error: `,S,"url: ",g,"request:",s),S}))}jo(t,n,s,l,u,f){return this.Wo(t,n,s,l,u)}Go(t,n,s){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+vo})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((l,u)=>t[u]=l)),s&&s.headers.forEach(((l,u)=>t[u]=l))}Qo(t,n){const s=gN[t];let l=`${this.qo}/v1/${n}:${s}`;return this.databaseInfo.apiKey&&(l=`${l}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),l}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(t){this.Ho=t.Ho,this.Jo=t.Jo}Zo(t){this.Xo=t}Yo(t){this.e_=t}t_(t){this.n_=t}onMessage(t){this.r_=t}close(){this.Jo()}send(t){this.Ho(t)}i_(){this.Xo()}s_(){this.e_()}o_(t){this.n_(t)}__(t){this.r_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe="WebChannelConnection",Dl=(r,t,n)=>{r.listen(t,(s=>{try{n(s)}catch(l){setTimeout((()=>{throw l}),0)}}))};class oo extends pN{constructor(t){super(t),this.a_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}static u_(){if(!oo.c_){const t=T0();Dl(t,E0.STAT_EVENT,(n=>{n.stat===Im.PROXY?rt(Xe,"STAT_EVENT: detected buffering proxy"):n.stat===Im.NOPROXY&&rt(Xe,"STAT_EVENT: detected no buffering proxy")})),oo.c_=!0}}zo(t,n,s,l,u){const f=Bm();return new Promise(((g,y)=>{const p=new _0;p.setWithCredentials(!0),p.listenOnce(v0.COMPLETE,(()=>{try{switch(p.getLastErrorCode()){case Zc.NO_ERROR:const S=p.getResponseJson();rt(Xe,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(S)),g(S);break;case Zc.TIMEOUT:rt(Xe,`RPC '${t}' ${f} timed out`),y(new it(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Zc.HTTP_ERROR:const w=p.getStatus();if(rt(Xe,`RPC '${t}' ${f} failed with status:`,w,"response text:",p.getResponseText()),w>0){let j=p.getResponseJson();Array.isArray(j)&&(j=j[0]);const J=j==null?void 0:j.error;if(J&&J.status&&J.message){const Z=(function(mt){const vt=mt.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(vt)>=0?vt:Y.UNKNOWN})(J.status);y(new it(Z,J.message))}else y(new it(Y.UNKNOWN,"Server responded with status "+p.getStatus()))}else y(new it(Y.UNAVAILABLE,"Connection failed."));break;default:dt(9055,{l_:t,streamId:f,h_:p.getLastErrorCode(),P_:p.getLastError()})}}finally{rt(Xe,`RPC '${t}' ${f} completed.`)}}));const T=JSON.stringify(l);rt(Xe,`RPC '${t}' ${f} sending request:`,l),p.send(n,"POST",T,s,15)}))}T_(t,n,s){const l=Bm(),u=[this.qo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=this.createWebChannelTransport(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(g.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(g.useFetchStreams=!0),this.Go(g.initMessageHeaders,n,s),g.encodeInitMessageHeaders=!0;const p=u.join("");rt(Xe,`Creating RPC '${t}' stream ${l}: ${p}`,g);const T=f.createWebChannel(p,g);this.I_(T);let S=!1,w=!1;const j=new yN({Ho:J=>{w?rt(Xe,`Not sending because RPC '${t}' stream ${l} is closed:`,J):(S||(rt(Xe,`Opening RPC '${t}' stream ${l} transport.`),T.open(),S=!0),rt(Xe,`RPC '${t}' stream ${l} sending:`,J),T.send(J))},Jo:()=>T.close()});return Dl(T,Ml.EventType.OPEN,(()=>{w||(rt(Xe,`RPC '${t}' stream ${l} transport opened.`),j.i_())})),Dl(T,Ml.EventType.CLOSE,(()=>{w||(w=!0,rt(Xe,`RPC '${t}' stream ${l} transport closed`),j.o_(),this.E_(T))})),Dl(T,Ml.EventType.ERROR,(J=>{w||(w=!0,ta(Xe,`RPC '${t}' stream ${l} transport errored. Name:`,J.name,"Message:",J.message),j.o_(new it(Y.UNAVAILABLE,"The operation could not be completed")))})),Dl(T,Ml.EventType.MESSAGE,(J=>{var Z;if(!w){const W=J.data[0];qt(!!W,16349);const mt=W,vt=(mt==null?void 0:mt.error)||((Z=mt[0])==null?void 0:Z.error);if(vt){rt(Xe,`RPC '${t}' stream ${l} received error:`,vt);const Et=vt.status;let Jt=(function(N){const b=Ie[N];if(b!==void 0)return iA(b)})(Et),Zt=vt.message;Et==="NOT_FOUND"&&Zt.includes("database")&&Zt.includes("does not exist")&&Zt.includes(this.databaseId.database)&&ta(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Jt===void 0&&(Jt=Y.INTERNAL,Zt="Unknown error status: "+Et+" with message "+vt.message),w=!0,j.o_(new it(Jt,Zt)),T.close()}else rt(Xe,`RPC '${t}' stream ${l} received:`,W),j.__(W)}})),oo.u_(),setTimeout((()=>{j.s_()}),0),j}terminate(){this.a_.forEach((t=>t.close())),this.a_=[]}I_(t){this.a_.push(t)}E_(t){this.a_=this.a_.filter((n=>n===t))}Go(t,n,s){super.Go(t,n,s),this.databaseInfo.apiKey&&(t["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return A0()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _N(r){return new oo(r)}function hm(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uh(r){return new A2(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */oo.c_=!1;class _A{constructor(t,n,s=1e3,l=1.5,u=6e4){this.Ci=t,this.timerId=n,this.R_=s,this.A_=l,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const n=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),l=Math.max(0,n-s);l>0&&rt("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,l,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jE="PersistentStream";class vA{constructor(t,n,s,l,u,f,g,y){this.Ci=t,this.b_=s,this.S_=l,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=g,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new _A(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(t){this.q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===Y.RESOURCE_EXHAUSTED?(hr(n.toString()),hr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.t_(n)}W_(){}auth(){this.state=1;const t=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,l])=>{this.D_===n&&this.G_(s,l)}),(s=>{t((()=>{const l=new it(Y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(l)}))}))}G_(t,n){const s=this.Q_(this.D_);this.stream=this.j_(t,n),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((l=>{s((()=>this.z_(l)))})),this.stream.onMessage((l=>{s((()=>++this.F_==1?this.H_(l):this.onNext(l)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return rt(jE,`close with error: ${t}`),this.stream=null,this.close(4,t)}Q_(t){return n=>{this.Ci.enqueueAndForget((()=>this.D_===t?n():(rt(jE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class vN extends vA{constructor(t,n,s,l,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,l,f),this.serializer=u}j_(t,n){return this.connection.T_("Listen",t,n)}H_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=w2(this.serializer,t),s=(function(u){if(!("targetChange"in u))return pt.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?pt.min():f.readTime?Mi(f.readTime):pt.min()})(t);return this.listener.J_(n,s)}Z_(t){const n={};n.database=zm(this.serializer),n.addTarget=(function(u,f){let g;const y=f.target;if(g=Mm(y)?{documents:C2(u,y)}:{query:N2(u,y).ft},g.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){g.resumeToken=aA(u,f.resumeToken);const p=Pm(u,f.expectedCount);p!==null&&(g.expectedCount=p)}else if(f.snapshotVersion.compareTo(pt.min())>0){g.readTime=ph(u,f.snapshotVersion.toTimestamp());const p=Pm(u,f.expectedCount);p!==null&&(g.expectedCount=p)}return g})(this.serializer,t);const s=O2(this.serializer,t);s&&(n.labels=s),this.K_(n)}X_(t){const n={};n.database=zm(this.serializer),n.removeTarget=t,this.K_(n)}}class EN extends vA{constructor(t,n,s,l,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,l,f),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}H_(t){return qt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,qt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){qt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=I2(t.writeResults,t.commitTime),s=Mi(t.commitTime);return this.listener.na(s,n)}ra(){const t={};t.database=zm(this.serializer),this.K_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map((s=>R2(this.serializer,s)))};this.K_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TN{}class AN extends TN{constructor(t,n,s,l){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new it(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,n,s,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Wo(t,Lm(n,s),l,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new it(Y.UNKNOWN,u.toString())}))}jo(t,n,s,l,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,g])=>this.connection.jo(t,Lm(n,s),l,f,g,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new it(Y.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function SN(r,t,n,s){return new AN(r,t,n,s)}class bN{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(hr(n),this.aa=!1):rt("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea="RemoteStore";class wN{constructor(t,n,s,l,u){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((f=>{s.enqueueAndForget((async()=>{la(this)&&(rt(ea,"Restarting streams for network reachability change."),await(async function(y){const p=_t(y);p.Ea.add(4),await cu(p),p.Va.set("Unknown"),p.Ea.delete(4),await zh(p)})(this))}))})),this.Va=new bN(s,l)}}async function zh(r){if(la(r))for(const t of r.Ra)await t(!0)}async function cu(r){for(const t of r.Ra)await t(!1)}function EA(r,t){const n=_t(r);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),Rg(n)?wg(n):So(n).O_()&&bg(n,t))}function Sg(r,t){const n=_t(r),s=So(n);n.Ia.delete(t),s.O_()&&TA(n,t),n.Ia.size===0&&(s.O_()?s.L_():la(n)&&n.Va.set("Unknown"))}function bg(r,t){if(r.da.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(pt.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}So(r).Z_(t)}function TA(r,t){r.da.$e(t),So(r).X_(t)}function wg(r){r.da=new _2({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),At:t=>r.Ia.get(t)||null,ht:()=>r.datastore.serializer.databaseId}),So(r).start(),r.Va.ua()}function Rg(r){return la(r)&&!So(r).x_()&&r.Ia.size>0}function la(r){return _t(r).Ea.size===0}function AA(r){r.da=void 0}async function RN(r){r.Va.set("Online")}async function IN(r){r.Ia.forEach(((t,n)=>{bg(r,t)}))}async function CN(r,t){AA(r),Rg(r)?(r.Va.ha(t),wg(r)):r.Va.set("Unknown")}async function NN(r,t,n){if(r.Va.set("Online"),t instanceof sA&&t.state===2&&t.cause)try{await(async function(l,u){const f=u.cause;for(const g of u.targetIds)l.Ia.has(g)&&(await l.remoteSyncer.rejectListen(g,f),l.Ia.delete(g),l.da.removeTarget(g))})(r,t)}catch(s){rt(ea,"Failed to remove targets %s: %s ",t.targetIds.join(","),s),await _h(r,s)}else if(t instanceof nh?r.da.Xe(t):t instanceof rA?r.da.st(t):r.da.tt(t),!n.isEqual(pt.min()))try{const s=await yA(r.localStore);n.compareTo(s)>=0&&await(function(u,f){const g=u.da.Tt(f);return g.targetChanges.forEach(((y,p)=>{if(y.resumeToken.approximateByteSize()>0){const T=u.Ia.get(p);T&&u.Ia.set(p,T.withResumeToken(y.resumeToken,f))}})),g.targetMismatches.forEach(((y,p)=>{const T=u.Ia.get(y);if(!T)return;u.Ia.set(y,T.withResumeToken(Ye.EMPTY_BYTE_STRING,T.snapshotVersion)),TA(u,y);const S=new Jr(T.target,y,p,T.sequenceNumber);bg(u,S)})),u.remoteSyncer.applyRemoteEvent(g)})(r,n)}catch(s){rt(ea,"Failed to raise snapshot:",s),await _h(r,s)}}async function _h(r,t,n){if(!To(t))throw t;r.Ea.add(1),await cu(r),r.Va.set("Offline"),n||(n=()=>yA(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{rt(ea,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await zh(r)}))}function SA(r,t){return t().catch((n=>_h(r,n,t)))}async function jh(r){const t=_t(r),n=as(t);let s=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:cg;for(;DN(t);)try{const l=await cN(t.localStore,s);if(l===null){t.Ta.length===0&&n.L_();break}s=l.batchId,ON(t,l)}catch(l){await _h(t,l)}bA(t)&&wA(t)}function DN(r){return la(r)&&r.Ta.length<10}function ON(r,t){r.Ta.push(t);const n=as(r);n.O_()&&n.Y_&&n.ea(t.mutations)}function bA(r){return la(r)&&!as(r).x_()&&r.Ta.length>0}function wA(r){as(r).start()}async function VN(r){as(r).ra()}async function MN(r){const t=as(r);for(const n of r.Ta)t.ea(n.mutations)}async function xN(r,t,n){const s=r.Ta.shift(),l=pg.from(s,t,n);await SA(r,(()=>r.remoteSyncer.applySuccessfulWrite(l))),await jh(r)}async function kN(r,t){t&&as(r).Y_&&await(async function(s,l){if((function(f){return g2(f)&&f!==Y.ABORTED})(l.code)){const u=s.Ta.shift();as(s).B_(),await SA(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,l))),await jh(s)}})(r,t),bA(r)&&wA(r)}async function BE(r,t){const n=_t(r);n.asyncQueue.verifyOperationInProgress(),rt(ea,"RemoteStore received new credentials");const s=la(n);n.Ea.add(3),await cu(n),s&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await zh(n)}async function PN(r,t){const n=_t(r);t?(n.Ea.delete(2),await zh(n)):t||(n.Ea.add(2),await cu(n),n.Va.set("Unknown"))}function So(r){return r.ma||(r.ma=(function(n,s,l){const u=_t(n);return u.sa(),new vN(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,l)})(r.datastore,r.asyncQueue,{Zo:RN.bind(null,r),Yo:IN.bind(null,r),t_:CN.bind(null,r),J_:NN.bind(null,r)}),r.Ra.push((async t=>{t?(r.ma.B_(),Rg(r)?wg(r):r.Va.set("Unknown")):(await r.ma.stop(),AA(r))}))),r.ma}function as(r){return r.fa||(r.fa=(function(n,s,l){const u=_t(n);return u.sa(),new EN(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,l)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:VN.bind(null,r),t_:kN.bind(null,r),ta:MN.bind(null,r),na:xN.bind(null,r)}),r.Ra.push((async t=>{t?(r.fa.B_(),await jh(r)):(await r.fa.stop(),r.Ta.length>0&&(rt(ea,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(t,n,s,l,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=l,this.removalCallback=u,this.deferred=new lr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,l,u){const f=Date.now()+s,g=new Ig(t,n,f,l,u);return g.start(s),g}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new it(Y.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Cg(r,t){if(hr("AsyncQueue",`${t}: ${r}`),To(r))return new it(Y.UNAVAILABLE,`${t}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{static emptySet(t){return new lo(t.comparator)}constructor(t){this.comparator=t?(n,s)=>t(n,s)||ut.comparator(n.key,s.key):(n,s)=>ut.comparator(n.key,s.key),this.keyedMap=xl(),this.sortedSet=new le(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,s)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof lo)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const l=n.getNext().key,u=s.getNext().key;if(!l.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new lo;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(){this.ga=new le(ut.comparator)}track(t){const n=t.doc.key,s=this.ga.get(n);s?t.type!==0&&s.type===3?this.ga=this.ga.insert(n,t):t.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.ga=this.ga.remove(n):t.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):dt(63341,{Vt:t,pa:s}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal(((n,s)=>{t.push(s)})),t}}class mo{constructor(t,n,s,l,u,f,g,y,p){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=l,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=g,this.excludesMetadataChanges=y,this.hasCachedResults=p}static fromInitialDocuments(t,n,s,l,u){const f=[];return n.forEach((g=>{f.push({type:0,doc:g})})),new mo(t,n,lo.emptySet(n),f,s,l,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Mh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let l=0;l<n.length;l++)if(n[l].type!==s[l].type||!n[l].doc.isEqual(s[l].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LN{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((t=>t.Da()))}}class UN{constructor(){this.queries=HE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const l=_t(n),u=l.queries;l.queries=HE(),u.forEach(((f,g)=>{for(const y of g.ba)y.onError(s)}))})(this,new it(Y.ABORTED,"Firestore shutting down"))}}function HE(){return new oa((r=>F0(r)),Mh)}async function Ng(r,t){const n=_t(r);let s=3;const l=t.query;let u=n.queries.get(l);u?!u.Sa()&&t.Da()&&(s=2):(u=new LN,s=t.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(l,!0);break;case 1:u.wa=await n.onListen(l,!1);break;case 2:await n.onFirstRemoteStoreListen(l)}}catch(f){const g=Cg(f,`Initialization of query '${to(t.query)}' failed`);return void t.onError(g)}n.queries.set(l,u),u.ba.push(t),t.va(n.onlineState),u.wa&&t.Fa(u.wa)&&Og(n)}async function Dg(r,t){const n=_t(r),s=t.query;let l=3;const u=n.queries.get(s);if(u){const f=u.ba.indexOf(t);f>=0&&(u.ba.splice(f,1),u.ba.length===0?l=t.Da()?0:1:!u.Sa()&&t.Da()&&(l=2))}switch(l){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function zN(r,t){const n=_t(r);let s=!1;for(const l of t){const u=l.query,f=n.queries.get(u);if(f){for(const g of f.ba)g.Fa(l)&&(s=!0);f.wa=l}}s&&Og(n)}function jN(r,t,n){const s=_t(r),l=s.queries.get(t);if(l)for(const u of l.ba)u.onError(n);s.queries.delete(t)}function Og(r){r.Ca.forEach((t=>{t.next()}))}var qm,FE;(FE=qm||(qm={})).Ma="default",FE.Cache="cache";class Vg{constructor(t,n,s){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(t){if(!this.options.includeMetadataChanges){const s=[];for(const l of t.docChanges)l.type!==3&&s.push(l);t=new mo(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.Ka||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=mo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==qm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RA{constructor(t){this.key=t}}class IA{constructor(t){this.key=t}}class BN{constructor(t,n){this.query=t,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=Ot(),this.mutatedKeys=Ot(),this.eu=G0(t),this.tu=new lo(this.eu)}get nu(){return this.Za}ru(t,n){const s=n?n.iu:new qE,l=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=l,g=!1;const y=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,p=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(t.inorderTraversal(((T,S)=>{const w=l.get(T),j=xh(this.query,S)?S:null,J=!!w&&this.mutatedKeys.has(w.key),Z=!!j&&(j.hasLocalMutations||this.mutatedKeys.has(j.key)&&j.hasCommittedMutations);let W=!1;w&&j?w.data.isEqual(j.data)?J!==Z&&(s.track({type:3,doc:j}),W=!0):this.su(w,j)||(s.track({type:2,doc:j}),W=!0,(y&&this.eu(j,y)>0||p&&this.eu(j,p)<0)&&(g=!0)):!w&&j?(s.track({type:0,doc:j}),W=!0):w&&!j&&(s.track({type:1,doc:w}),W=!0,(y||p)&&(g=!0)),W&&(j?(f=f.add(j),u=Z?u.add(T):u.delete(T)):(f=f.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{tu:f,iu:s,Ss:g,mutatedKeys:u}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s,l){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort(((T,S)=>(function(j,J){const Z=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return dt(20277,{Vt:W})}};return Z(j)-Z(J)})(T.type,S.type)||this.eu(T.doc,S.doc))),this.ou(s),l=l??!1;const g=n&&!l?this._u():[],y=this.Ya.size===0&&this.current&&!l?1:0,p=y!==this.Xa;return this.Xa=y,f.length!==0||p?{snapshot:new mo(this.query,t.tu,u,f,t.mutatedKeys,y===0,p,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:g}:{au:g}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new qE,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(t){return!this.Za.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),t.modifiedDocuments.forEach((n=>{})),t.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Ya;this.Ya=Ot(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const n=[];return t.forEach((s=>{this.Ya.has(s)||n.push(new IA(s))})),this.Ya.forEach((s=>{t.has(s)||n.push(new RA(s))})),n}cu(t){this.Za=t.ks,this.Ya=Ot();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return mo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const Mg="SyncEngine";class qN{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class HN{constructor(t){this.key=t,this.hu=!1}}class FN{constructor(t,n,s,l,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=l,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new oa((g=>F0(g)),Mh),this.Iu=new Map,this.Eu=new Set,this.Ru=new le(ut.comparator),this.Au=new Map,this.Vu=new vg,this.du={},this.mu=new Map,this.fu=fo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function GN(r,t,n=!0){const s=MA(r);let l;const u=s.Tu.get(t);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),l=u.view.lu()):l=await CA(s,t,n,!0),l}async function KN(r,t){const n=MA(r);await CA(n,t,!0,!1)}async function CA(r,t,n,s){const l=await hN(r.localStore,Vi(t)),u=l.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let g;return s&&(g=await YN(r,t,u,f==="current",l.resumeToken)),r.isPrimaryClient&&n&&EA(r.remoteStore,l),g}async function YN(r,t,n,s,l){r.pu=(S,w,j)=>(async function(Z,W,mt,vt){let Et=W.view.ru(mt);Et.Ss&&(Et=await PE(Z.localStore,W.query,!1).then((({documents:N})=>W.view.ru(N,Et))));const Jt=vt&&vt.targetChanges.get(W.targetId),Zt=vt&&vt.targetMismatches.get(W.targetId)!=null,zt=W.view.applyChanges(Et,Z.isPrimaryClient,Jt,Zt);return KE(Z,W.targetId,zt.au),zt.snapshot})(r,S,w,j);const u=await PE(r.localStore,t,!0),f=new BN(t,u.ks),g=f.ru(u.documents),y=uu.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",l),p=f.applyChanges(g,r.isPrimaryClient,y);KE(r,n,p.au);const T=new qN(t,n,f);return r.Tu.set(t,T),r.Iu.has(n)?r.Iu.get(n).push(t):r.Iu.set(n,[t]),p.snapshot}async function QN(r,t,n){const s=_t(r),l=s.Tu.get(t),u=s.Iu.get(l.targetId);if(u.length>1)return s.Iu.set(l.targetId,u.filter((f=>!Mh(f,t)))),void s.Tu.delete(t);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(l.targetId),s.sharedClientState.isActiveQueryTarget(l.targetId)||await jm(s.localStore,l.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(l.targetId),n&&Sg(s.remoteStore,l.targetId),Hm(s,l.targetId)})).catch(Eo)):(Hm(s,l.targetId),await jm(s.localStore,l.targetId,!0))}async function XN(r,t){const n=_t(r),s=n.Tu.get(t),l=n.Iu.get(s.targetId);n.isPrimaryClient&&l.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Sg(n.remoteStore,s.targetId))}async function $N(r,t,n){const s=iD(r);try{const l=await(function(f,g){const y=_t(f),p=ie.now(),T=g.reduce(((j,J)=>j.add(J.key)),Ot());let S,w;return y.persistence.runTransaction("Locally write mutations","readwrite",(j=>{let J=fr(),Z=Ot();return y.xs.getEntries(j,T).next((W=>{J=W,J.forEach(((mt,vt)=>{vt.isValidDocument()||(Z=Z.add(mt))}))})).next((()=>y.localDocuments.getOverlayedDocuments(j,J))).next((W=>{S=W;const mt=[];for(const vt of g){const Et=c2(vt,S.get(vt.key).overlayedDocument);Et!=null&&mt.push(new fs(vt.key,Et,P0(Et.value.mapValue),ei.exists(!0)))}return y.mutationQueue.addMutationBatch(j,p,mt,g)})).next((W=>{w=W;const mt=W.applyToLocalDocumentSet(S,Z);return y.documentOverlayCache.saveOverlays(j,W.batchId,mt)}))})).then((()=>({batchId:w.batchId,changes:Y0(S)})))})(s.localStore,t);s.sharedClientState.addPendingMutation(l.batchId),(function(f,g,y){let p=f.du[f.currentUser.toKey()];p||(p=new le(Dt)),p=p.insert(g,y),f.du[f.currentUser.toKey()]=p})(s,l.batchId,n),await hu(s,l.changes),await jh(s.remoteStore)}catch(l){const u=Cg(l,"Failed to persist write");n.reject(u)}}async function NA(r,t){const n=_t(r);try{const s=await lN(n.localStore,t);t.targetChanges.forEach(((l,u)=>{const f=n.Au.get(u);f&&(qt(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?f.hu=!0:l.modifiedDocuments.size>0?qt(f.hu,14607):l.removedDocuments.size>0&&(qt(f.hu,42227),f.hu=!1))})),await hu(n,s,t)}catch(s){await Eo(s)}}function GE(r,t,n){const s=_t(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const l=[];s.Tu.forEach(((u,f)=>{const g=f.view.va(t);g.snapshot&&l.push(g.snapshot)})),(function(f,g){const y=_t(f);y.onlineState=g;let p=!1;y.queries.forEach(((T,S)=>{for(const w of S.ba)w.va(g)&&(p=!0)})),p&&Og(y)})(s.eventManager,t),l.length&&s.Pu.J_(l),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function JN(r,t,n){const s=_t(r);s.sharedClientState.updateQueryState(t,"rejected",n);const l=s.Au.get(t),u=l&&l.key;if(u){let f=new le(ut.comparator);f=f.insert(u,Je.newNoDocument(u,pt.min()));const g=Ot().add(u),y=new Lh(pt.min(),new Map,new le(Dt),f,g);await NA(s,y),s.Ru=s.Ru.remove(u),s.Au.delete(t),xg(s)}else await jm(s.localStore,t,!1).then((()=>Hm(s,t,n))).catch(Eo)}async function ZN(r,t){const n=_t(r),s=t.batch.batchId;try{const l=await oN(n.localStore,t);OA(n,s,null),DA(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await hu(n,l)}catch(l){await Eo(l)}}async function WN(r,t,n){const s=_t(r);try{const l=await(function(f,g){const y=_t(f);return y.persistence.runTransaction("Reject batch","readwrite-primary",(p=>{let T;return y.mutationQueue.lookupMutationBatch(p,g).next((S=>(qt(S!==null,37113),T=S.keys(),y.mutationQueue.removeMutationBatch(p,S)))).next((()=>y.mutationQueue.performConsistencyCheck(p))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(p,T,g))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(p,T))).next((()=>y.localDocuments.getDocuments(p,T)))}))})(s.localStore,t);OA(s,t,n),DA(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await hu(s,l)}catch(l){await Eo(l)}}function DA(r,t){(r.mu.get(t)||[]).forEach((n=>{n.resolve()})),r.mu.delete(t)}function OA(r,t,n){const s=_t(r);let l=s.du[s.currentUser.toKey()];if(l){const u=l.get(t);u&&(n?u.reject(n):u.resolve(),l=l.remove(t)),s.du[s.currentUser.toKey()]=l}}function Hm(r,t,n=null){r.sharedClientState.removeLocalQueryTarget(t);for(const s of r.Iu.get(t))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(t),r.isPrimaryClient&&r.Vu.Gr(t).forEach((s=>{r.Vu.containsKey(s)||VA(r,s)}))}function VA(r,t){r.Eu.delete(t.path.canonicalString());const n=r.Ru.get(t);n!==null&&(Sg(r.remoteStore,n),r.Ru=r.Ru.remove(t),r.Au.delete(n),xg(r))}function KE(r,t,n){for(const s of n)s instanceof RA?(r.Vu.addReference(s.key,t),tD(r,s)):s instanceof IA?(rt(Mg,"Document no longer in limbo: "+s.key),r.Vu.removeReference(s.key,t),r.Vu.containsKey(s.key)||VA(r,s.key)):dt(19791,{wu:s})}function tD(r,t){const n=t.key,s=n.path.canonicalString();r.Ru.get(n)||r.Eu.has(s)||(rt(Mg,"New document in limbo: "+n),r.Eu.add(s),xg(r))}function xg(r){for(;r.Eu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const t=r.Eu.values().next().value;r.Eu.delete(t);const n=new ut(te.fromString(t)),s=r.fu.next();r.Au.set(s,new HN(n)),r.Ru=r.Ru.insert(n,s),EA(r.remoteStore,new Jr(Vi(Vh(n.path)),s,"TargetPurposeLimboResolution",Nh.ce))}}async function hu(r,t,n){const s=_t(r),l=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((g,y)=>{f.push(s.pu(y,t,n).then((p=>{var T;if((p||n)&&s.isPrimaryClient){const S=p?!p.fromCache:(T=n==null?void 0:n.targetChanges.get(y.targetId))==null?void 0:T.current;s.sharedClientState.updateQueryState(y.targetId,S?"current":"not-current")}if(p){l.push(p);const S=Tg.Es(y.targetId,p);u.push(S)}})))})),await Promise.all(f),s.Pu.J_(l),await(async function(y,p){const T=_t(y);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>$.forEach(p,(w=>$.forEach(w.Ts,(j=>T.persistence.referenceDelegate.addReference(S,w.targetId,j))).next((()=>$.forEach(w.Is,(j=>T.persistence.referenceDelegate.removeReference(S,w.targetId,j)))))))))}catch(S){if(!To(S))throw S;rt(Ag,"Failed to update sequence numbers: "+S)}for(const S of p){const w=S.targetId;if(!S.fromCache){const j=T.vs.get(w),J=j.snapshotVersion,Z=j.withLastLimboFreeSnapshotVersion(J);T.vs=T.vs.insert(w,Z)}}})(s.localStore,u))}async function eD(r,t){const n=_t(r);if(!n.currentUser.isEqual(t)){rt(Mg,"User change. New user:",t.toKey());const s=await pA(n.localStore,t);n.currentUser=t,(function(u,f){u.mu.forEach((g=>{g.forEach((y=>{y.reject(new it(Y.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await hu(n,s.Ns)}}function nD(r,t){const n=_t(r),s=n.Au.get(t);if(s&&s.hu)return Ot().add(s.key);{let l=Ot();const u=n.Iu.get(t);if(!u)return l;for(const f of u){const g=n.Tu.get(f);l=l.unionWith(g.view.nu)}return l}}function MA(r){const t=_t(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=NA.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=nD.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=JN.bind(null,t),t.Pu.J_=zN.bind(null,t.eventManager),t.Pu.yu=jN.bind(null,t.eventManager),t}function iD(r){const t=_t(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ZN.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=WN.bind(null,t),t}class vh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Uh(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return aN(this.persistence,new iN,t.initialUser,this.serializer)}Cu(t){return new gA(Eg.Vi,this.serializer)}Du(t){return new dN}async terminate(){var t,n;(t=this.gcScheduler)==null||t.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vh.provider={build:()=>new vh};class rD extends vh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){qt(this.persistence.referenceDelegate instanceof yh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new q2(s,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?hn.withCacheSize(this.cacheSizeBytes):hn.DEFAULT;return new gA((s=>yh.Vi(s,n)),this.serializer)}}class Fm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>GE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=eD.bind(null,this.syncEngine),await PN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new UN})()}createDatastore(t){const n=Uh(t.databaseInfo.databaseId),s=_N(t.databaseInfo);return SN(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return(function(s,l,u,f,g){return new wN(s,l,u,f,g)})(this.localStore,this.datastore,t.asyncQueue,(n=>GE(this.syncEngine,n,0)),(function(){return zE.v()?new zE:new mN})())}createSyncEngine(t,n){return(function(l,u,f,g,y,p,T){const S=new FN(l,u,f,g,y,p);return T&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await(async function(l){const u=_t(l);rt(ea,"RemoteStore shutting down."),u.Ea.add(5),await cu(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(n=this.eventManager)==null||n.terminate()}}Fm.provider={build:()=>new Fm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):hr("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const os="FirestoreClient";class sD{constructor(t,n,s,l,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this._databaseInfo=l,this.user=$e.UNAUTHENTICATED,this.clientId=ug.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{rt(os,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(rt(os,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new lr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Cg(n,"Failed to shutdown persistence");t.reject(s)}})),t.promise}}async function fm(r,t){r.asyncQueue.verifyOperationInProgress(),rt(os,"Initializing OfflineComponentProvider");const n=r.configuration;await t.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async l=>{s.isEqual(l)||(await pA(t.localStore,l),s=l)})),t.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=t}async function YE(r,t){r.asyncQueue.verifyOperationInProgress();const n=await aD(r);rt(os,"Initializing OnlineComponentProvider"),await t.initialize(n,r.configuration),r.setCredentialChangeListener((s=>BE(t.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,l)=>BE(t.remoteStore,l))),r._onlineComponents=t}async function aD(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){rt(os,"Using user provided OfflineComponentProvider");try{await fm(r,r._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(l){return l.name==="FirebaseError"?l.code===Y.FAILED_PRECONDITION||l.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11})(n))throw n;ta("Error using user provided cache. Falling back to memory cache: "+n),await fm(r,new vh)}}else rt(os,"Using default OfflineComponentProvider"),await fm(r,new rD(void 0));return r._offlineComponents}async function xA(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(rt(os,"Using user provided OnlineComponentProvider"),await YE(r,r._uninitializedComponentsProvider._online)):(rt(os,"Using default OnlineComponentProvider"),await YE(r,new Fm))),r._onlineComponents}function oD(r){return xA(r).then((t=>t.syncEngine))}async function Eh(r){const t=await xA(r),n=t.eventManager;return n.onListen=GN.bind(null,t.syncEngine),n.onUnlisten=QN.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=KN.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=XN.bind(null,t.syncEngine),n}function lD(r,t,n,s){const l=new kg(s),u=new Vg(t,l,n);return r.asyncQueue.enqueueAndForget((async()=>Ng(await Eh(r),u))),()=>{l.Nu(),r.asyncQueue.enqueueAndForget((async()=>Dg(await Eh(r),u)))}}function uD(r,t,n={}){const s=new lr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,g,y,p){const T=new kg({next:w=>{T.Nu(),f.enqueueAndForget((()=>Dg(u,S)));const j=w.docs.has(g);!j&&w.fromCache?p.reject(new it(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):j&&w.fromCache&&y&&y.source==="server"?p.reject(new it(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):p.resolve(w)},error:w=>p.reject(w)}),S=new Vg(Vh(g.path),T,{includeMetadataChanges:!0,Ka:!0});return Ng(u,S)})(await Eh(r),r.asyncQueue,t,n,s))),s.promise}function cD(r,t,n={}){const s=new lr;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,g,y,p){const T=new kg({next:w=>{T.Nu(),f.enqueueAndForget((()=>Dg(u,S))),w.fromCache&&y.source==="server"?p.reject(new it(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):p.resolve(w)},error:w=>p.reject(w)}),S=new Vg(g,T,{includeMetadataChanges:!0,Ka:!0});return Ng(u,S)})(await Eh(r),r.asyncQueue,t,n,s))),s.promise}function hD(r,t){const n=new lr;return r.asyncQueue.enqueueAndForget((async()=>$N(await oD(r),t,n))),n.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kA(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD="ComponentProvider",QE=new Map;function dD(r,t,n,s,l){return new OC(r,t,n,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,kA(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PA="firestore.googleapis.com",XE=!0;class $E{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new it(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=PA,this.ssl=XE}else this.host=t.host,this.ssl=t.ssl??XE;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=mA;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<j2)throw new it(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}EC("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=kA(t.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new it(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new it(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new it(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(s,l){return s.timeoutSeconds===l.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Bh{constructor(t,n,s,l){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new $E({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new it(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new it(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new $E(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new cC;switch(s.type){case"firstParty":return new mC(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new it(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=QE.get(n);s&&(rt(fD,"Removing Datastore"),QE.delete(n),s.terminate())})(this),Promise.resolve()}}function mD(r,t,n,s={}){var p;r=Sn(r,Bh);const l=go(t),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},g=`${t}:${n}`;l&&(IT(`https://${g}`),CT("Firestore",!0)),u.host!==PA&&u.host!==g&&ta("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:g,ssl:l,emulatorOptions:s};if(!$s(y,f)&&(r._setSettings(y),s.mockUserToken)){let T,S;if(typeof s.mockUserToken=="string")T=s.mockUserToken,S=$e.MOCK_USER;else{T=b1(s.mockUserToken,(p=r._app)==null?void 0:p.options.projectId);const w=s.mockUserToken.sub||s.mockUserToken.user_id;if(!w)throw new it(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new $e(w)}r._authCredentials=new hC(new b0(T,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new ds(this.firestore,t,this._query)}}class he{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ts(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new he(this.firestore,t,this._key)}toJSON(){return{type:he._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if(ou(n,he._jsonSchema))return new he(t,s||null,new ut(te.fromString(n.referencePath)))}}he._jsonSchemaVersion="firestore/documentReference/1.0",he._jsonSchema={type:Ne("string",he._jsonSchemaVersion),referencePath:Ne("string")};class ts extends ds{constructor(t,n,s){super(t,n,Vh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new he(this.firestore,null,new ut(t))}withConverter(t){return new ts(this.firestore,t,this._path)}}function Gm(r,t,...n){if(r=ye(r),w0("collection","path",t),r instanceof Bh){const s=te.fromString(t,...n);return uE(s),new ts(r,null,s)}{if(!(r instanceof he||r instanceof ts))throw new it(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(te.fromString(t,...n));return uE(s),new ts(r.firestore,null,s)}}function es(r,t,...n){if(r=ye(r),arguments.length===1&&(t=ug.newId()),w0("doc","path",t),r instanceof Bh){const s=te.fromString(t,...n);return lE(s),new he(r,null,new ut(s))}{if(!(r instanceof he||r instanceof ts))throw new it(Y.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(te.fromString(t,...n));return lE(s),new he(r.firestore,r instanceof ts?r.converter:null,new ut(s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="AsyncQueue";class ZE{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new _A(this,"async_queue_retry"),this._c=()=>{const s=hm();s&&rt(JE,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const n=hm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=hm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new lr;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Yu.push(t),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!To(t))throw t;rt(JE,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const n=this.ac.then((()=>(this.rc=!0,t().catch((s=>{throw this.nc=s,this.rc=!1,hr("INTERNAL UNHANDLED ERROR: ",WE(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(t,n,s){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const l=Ig.createAndSchedule(this,t,n,s,(u=>this.hc(u)));return this.tc.push(l),l}uc(){this.nc&&dt(47125,{Pc:WE(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()}))}Rc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function WE(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}class ls extends Bh{constructor(t,n,s,l){super(t,n,s,l),this.type="firestore",this._queue=new ZE,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new ZE(t),this._firestoreClient=void 0,await t}}}function gD(r,t){const n=typeof r=="object"?r:Wm(),s=typeof r=="string"?r:t,l=po(n,"firestore").getImmediate({identifier:s});if(!l._initialized){const u=A1("firestore");u&&mD(l,...u)}return l}function qh(r){if(r._terminated)throw new it(Y.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||pD(r),r._firestoreClient}function pD(r){var s,l,u,f;const t=r._freezeSettings(),n=dD(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,(l=r._app)==null?void 0:l.options.apiKey,t);r._componentsProvider||(u=t.localCache)!=null&&u._offlineComponentProvider&&((f=t.localCache)!=null&&f._onlineComponentProvider)&&(r._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),r._firestoreClient=new sD(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(y){const p=y==null?void 0:y._online.build();return{_offline:y==null?void 0:y._offline.build(p),_online:p}})(r._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new zn(Ye.fromBase64String(t))}catch(n){throw new it(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new zn(Ye.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:zn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(ou(t,zn._jsonSchema))return zn.fromBase64String(t.bytes)}}zn._jsonSchemaVersion="firestore/bytes/1.0",zn._jsonSchema={type:Ne("string",zn._jsonSchemaVersion),bytes:Ne("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new it(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new it(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new it(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Dt(this._lat,t._lat)||Dt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xi._jsonSchemaVersion}}static fromJSON(t){if(ou(t,xi._jsonSchema))return new xi(t.latitude,t.longitude)}}xi._jsonSchemaVersion="firestore/geoPoint/1.0",xi._jsonSchema={type:Ne("string",xi._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(s,l){if(s.length!==l.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==l[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:ni._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(ou(t,ni._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new ni(t.vectorValues);throw new it(Y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ni._jsonSchemaVersion="firestore/vectorValue/1.0",ni._jsonSchema={type:Ne("string",ni._jsonSchemaVersion),vectorValues:Ne("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yD=/^__.*__$/;class _D{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new fs(t,this.data,this.fieldMask,n,this.fieldTransforms):new lu(t,this.data,n,this.fieldTransforms)}}class LA{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return new fs(t,this.data,this.fieldMask,n,this.fieldTransforms)}}function UA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw dt(40011,{dataSource:r})}}class Lg{constructor(t,n,s,l,u,f){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=l,u===void 0&&this.validatePath(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(t){return new Lg({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(t){var l;const n=(l=this.path)==null?void 0:l.child(t),s=this.contextWith({path:n,arrayElement:!1});return s.validatePathSegment(t),s}childContextForFieldPath(t){var l;const n=(l=this.path)==null?void 0:l.child(t),s=this.contextWith({path:n,arrayElement:!1});return s.validatePath(),s}childContextForArray(t){return this.contextWith({path:void 0,arrayElement:!0})}createError(t){return Th(t,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(t){return this.fieldMask.find((n=>t.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))!==void 0}validatePath(){if(this.path)for(let t=0;t<this.path.length;t++)this.validatePathSegment(this.path.get(t))}validatePathSegment(t){if(t.length===0)throw this.createError("Document fields must not be empty");if(UA(this.dataSource)&&yD.test(t))throw this.createError('Document fields cannot begin and end with "__"')}}class vD{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||Uh(t)}createContext(t,n,s,l=!1){return new Lg({dataSource:t,methodName:n,targetDoc:s,path:Ke.emptyPath(),arrayElement:!1,hasConverter:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Fh(r){const t=r._freezeSettings(),n=Uh(r._databaseId);return new vD(r._databaseId,!!t.ignoreUndefinedProperties,n)}function zA(r,t,n,s,l,u={}){const f=r.createContext(u.merge||u.mergeFields?2:0,t,n,l);zg("Data must be an object, but it was:",f,s);const g=jA(s,f);let y,p;if(u.merge)y=new An(f.fieldMask),p=f.fieldTransforms;else if(u.mergeFields){const T=[];for(const S of u.mergeFields){const w=na(t,S,n);if(!f.contains(w))throw new it(Y.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);HA(T,w)||T.push(w)}y=new An(T),p=f.fieldTransforms.filter((S=>y.covers(S.field)))}else y=null,p=f.fieldTransforms;return new _D(new fn(g),y,p)}class Gh extends Hh{_toFieldTransform(t){if(t.dataSource!==2)throw t.dataSource===1?t.createError(`${this._methodName}() can only appear at the top level of your update data`):t.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Gh}}class Ug extends Hh{_toFieldTransform(t){return new a2(t.path,new Jl)}isEqual(t){return t instanceof Ug}}function ED(r,t,n,s){const l=r.createContext(1,t,n);zg("Data must be an object, but it was:",l,s);const u=[],f=fn.empty();hs(s,((y,p)=>{const T=qA(t,y,n);p=ye(p);const S=l.childContextForFieldPath(T);if(p instanceof Gh)u.push(T);else{const w=fu(p,S);w!=null&&(u.push(T),f.set(T,w))}}));const g=new An(u);return new LA(f,g,l.fieldTransforms)}function TD(r,t,n,s,l,u){const f=r.createContext(1,t,n),g=[na(t,s,n)],y=[l];if(u.length%2!=0)throw new it(Y.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<u.length;w+=2)g.push(na(t,u[w])),y.push(u[w+1]);const p=[],T=fn.empty();for(let w=g.length-1;w>=0;--w)if(!HA(p,g[w])){const j=g[w];let J=y[w];J=ye(J);const Z=f.childContextForFieldPath(j);if(J instanceof Gh)p.push(j);else{const W=fu(J,Z);W!=null&&(p.push(j),T.set(j,W))}}const S=new An(p);return new LA(T,S,f.fieldTransforms)}function AD(r,t,n,s=!1){return fu(n,r.createContext(s?4:3,t))}function fu(r,t){if(BA(r=ye(r)))return zg("Unsupported field value:",t,r),jA(r,t);if(r instanceof Hh)return(function(s,l){if(!UA(l.dataSource))throw l.createError(`${s._methodName}() can only be used with update() and set()`);if(!l.path)throw l.createError(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(l);u&&l.fieldTransforms.push(u)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.arrayElement&&t.dataSource!==4)throw t.createError("Nested arrays are not supported");return(function(s,l){const u=[];let f=0;for(const g of s){let y=fu(g,l.childContextForArray(f));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),f++}return{arrayValue:{values:u}}})(r,t)}return(function(s,l){if((s=ye(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return i2(l.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=ie.fromDate(s);return{timestampValue:ph(l.serializer,u)}}if(s instanceof ie){const u=new ie(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:ph(l.serializer,u)}}if(s instanceof xi)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof zn)return{bytesValue:aA(l.serializer,s._byteString)};if(s instanceof he){const u=l.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw l.createError(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:_g(s.firestore._databaseId||l.databaseId,s._key.path)}}if(s instanceof ni)return(function(f,g){const y=f instanceof ni?f.toArray():f;return{mapValue:{fields:{[x0]:{stringValue:k0},[dh]:{arrayValue:{values:y.map((T=>{if(typeof T!="number")throw g.createError("VectorValues must only contain numeric values.");return gg(g.serializer,T)}))}}}}}})(s,l);if(dA(s))return s._toProto(l.serializer);throw l.createError(`Unsupported field value: ${Ch(s)}`)})(r,t)}function jA(r,t){const n={};return C0(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):hs(r,((s,l)=>{const u=fu(l,t.childContextForField(s));u!=null&&(n[s]=u)})),{mapValue:{fields:n}}}function BA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof ie||r instanceof xi||r instanceof zn||r instanceof he||r instanceof Hh||r instanceof ni||dA(r))}function zg(r,t,n){if(!BA(n)||!R0(n)){const s=Ch(n);throw s==="an object"?t.createError(r+" a custom object"):t.createError(r+" "+s)}}function na(r,t,n){if((t=ye(t))instanceof Pg)return t._internalPath;if(typeof t=="string")return qA(r,t);throw Th("Field path arguments must be of type string or ",r,!1,void 0,n)}const SD=new RegExp("[~\\*/\\[\\]]");function qA(r,t,n){if(t.search(SD)>=0)throw Th(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new Pg(...t.split("."))._internalPath}catch{throw Th(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Th(r,t,n,s,l){const u=s&&!s.isEmpty(),f=l!==void 0;let g=`Function ${t}() called with invalid data`;n&&(g+=" (via `toFirestore()`)"),g+=". ";let y="";return(u||f)&&(y+=" (found",u&&(y+=` in field ${s}`),f&&(y+=` in document ${l}`),y+=")"),new it(Y.INVALID_ARGUMENT,g+r+y)}function HA(r,t){return r.some((n=>n.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{convertValue(t,n="none"){switch(ss(t)){case 0:return null;case 1:return t.booleanValue;case 2:return pe(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(rs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw dt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const s={};return hs(t,((l,u)=>{s[l]=this.convertValue(u,n)})),s}convertVectorValue(t){var s,l,u;const n=(u=(l=(s=t.fields)==null?void 0:s[dh].arrayValue)==null?void 0:l.values)==null?void 0:u.map((f=>pe(f.doubleValue)));return new ni(n)}convertGeoPoint(t){return new xi(pe(t.latitude),pe(t.longitude))}convertArray(t,n){return(t.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Oh(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Yl(t));default:return null}}convertTimestamp(t){const n=is(t);return new ie(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=te.fromString(t);qt(fA(s),9688,{name:t});const l=new Ql(s.get(1),s.get(3)),u=new ut(s.popFirst(5));return l.isEqual(n)||hr(`Document ${u} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg extends bD{constructor(t){super(),this.firestore=t}convertBytes(t){return new zn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new he(this.firestore,null,n)}}function tT(){return new Ug("serverTimestamp")}const eT="@firebase/firestore",nT="4.11.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(r){return(function(n,s){if(typeof n!="object"||n===null)return!1;const l=n;for(const u of s)if(u in l&&typeof l[u]=="function")return!0;return!1})(r,["next","error","complete"])}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(t,n,s,l,u){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=l,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new he(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new wD(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const n=this._document.data.field(na("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class wD extends FA{data(){return super.data()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GA(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new it(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bg{}class KA extends Bg{}function YA(r,t,...n){let s=[];t instanceof Bg&&s.push(t),s=s.concat(n),(function(u){const f=u.filter((y=>y instanceof qg)).length,g=u.filter((y=>y instanceof Kh)).length;if(f>1||f>0&&g>0)throw new it(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const l of s)r=l._apply(r);return r}class Kh extends KA{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new Kh(t,n,s)}_apply(t){const n=this._parse(t);return QA(t._query,n),new ds(t.firestore,t.converter,xm(t._query,n))}_parse(t){const n=Fh(t.firestore);return(function(u,f,g,y,p,T,S){let w;if(p.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new it(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){aT(S,T);const J=[];for(const Z of S)J.push(sT(y,u,Z));w={arrayValue:{values:J}}}else w=sT(y,u,S)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||aT(S,T),w=AD(g,f,S,T==="in"||T==="not-in");return Ce.create(p,T,w)})(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}function rT(r,t,n){const s=t,l=na("where",r);return Kh._create(l,s,n)}class qg extends Bg{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new qg(t,n)}_parse(t){const n=this._queryConstraints.map((s=>s._parse(t))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:si.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:((function(l,u){let f=l;const g=u.getFlattenedFilters();for(const y of g)QA(f,y),f=xm(f,y)})(t._query,n),new ds(t.firestore,t.converter,xm(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Hg extends KA{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Hg(t,n)}_apply(t){const n=(function(l,u,f){if(l.startAt!==null)throw new it(Y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(l.endAt!==null)throw new it(Y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $l(u,f)})(t._query,this._field,this._direction);return new ds(t.firestore,t.converter,XC(t._query,n))}}function RD(r,t="asc"){const n=t,s=na("orderBy",r);return Hg._create(s,n)}function sT(r,t,n){if(typeof(n=ye(n))=="string"){if(n==="")throw new it(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!H0(t)&&n.indexOf("/")!==-1)throw new it(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(te.fromString(n));if(!ut.isDocumentKey(s))throw new it(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return yE(r,new ut(s))}if(n instanceof he)return yE(r,n._key);throw new it(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ch(n)}.`)}function aT(r,t){if(!Array.isArray(r)||r.length===0)throw new it(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function QA(r,t){const n=(function(l,u){for(const f of l)for(const g of f.getFlattenedFilters())if(u.indexOf(g.op)>=0)return g.op;return null})(r.filters,(function(l){switch(l){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(n!==null)throw n===t.op?new it(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new it(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function XA(r,t,n){let s;return s=r?r.toFirestore(t):t,s}class Pl{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Qs extends FA{constructor(t,n,s,l,u,f){super(t,n,s,l,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new ih(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(na("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new it(Y.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=Qs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Qs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qs._jsonSchema={type:Ne("string",Qs._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class ih extends Qs{data(t={}){return super.data(t)}}class Xs{constructor(t,n,s,l){this._firestore=t,this._userDataWriter=n,this._snapshot=l,this.metadata=new Pl(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((s=>{t.call(n,new ih(this._firestore,this._userDataWriter,s.key,s,new Pl(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new it(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(l,u){if(l._snapshot.oldDocs.isEmpty()){let f=0;return l._snapshot.docChanges.map((g=>{const y=new ih(l._firestore,l._userDataWriter,g.doc.key,g.doc,new Pl(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);return g.doc,{type:"added",doc:y,oldIndex:-1,newIndex:f++}}))}{let f=l._snapshot.oldDocs;return l._snapshot.docChanges.filter((g=>u||g.type!==3)).map((g=>{const y=new ih(l._firestore,l._userDataWriter,g.doc.key,g.doc,new Pl(l._snapshot.mutatedKeys.has(g.doc.key),l._snapshot.fromCache),l.query.converter);let p=-1,T=-1;return g.type!==0&&(p=f.indexOf(g.doc.key),f=f.delete(g.doc.key)),g.type!==1&&(f=f.add(g.doc),T=f.indexOf(g.doc.key)),{type:ID(g.type),doc:y,oldIndex:p,newIndex:T}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new it(Y.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Xs._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=ug.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],l=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),l.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function ID(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return dt(61501,{type:r})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Xs._jsonSchemaVersion="firestore/querySnapshot/1.0",Xs._jsonSchema={type:Ne("string",Xs._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(r){r=Sn(r,he);const t=Sn(r.firestore,ls),n=qh(t);return uD(n,r._key).then((s=>JA(t,r,s)))}function CD(r){r=Sn(r,ds);const t=Sn(r.firestore,ls),n=qh(t),s=new jg(t);return GA(r._query),cD(n,r._query).then((l=>new Xs(t,s,r,l)))}function ND(r,t,n){r=Sn(r,he);const s=Sn(r.firestore,ls),l=XA(r.converter,t),u=Fh(s);return Fg(s,[zA(u,"setDoc",r._key,l,r.converter!==null,n).toMutation(r._key,ei.none())])}function Km(r,t,n,...s){r=Sn(r,he);const l=Sn(r.firestore,ls),u=Fh(l);let f;return f=typeof(t=ye(t))=="string"||t instanceof Pg?TD(u,"updateDoc",r._key,t,n,s):ED(u,"updateDoc",r._key,t),Fg(l,[f.toMutation(r._key,ei.exists(!0))])}function DD(r,t){const n=Sn(r.firestore,ls),s=es(r),l=XA(r.converter,t),u=Fh(r.firestore);return Fg(n,[zA(u,"addDoc",s._key,l,r.converter!==null,{}).toMutation(s._key,ei.exists(!1))]).then((()=>s))}function oT(r,...t){var p,T,S;r=ye(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof t[s]!="object"||iT(t[s])||(n=t[s++]);const l={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(iT(t[s])){const w=t[s];t[s]=(p=w.next)==null?void 0:p.bind(w),t[s+1]=(T=w.error)==null?void 0:T.bind(w),t[s+2]=(S=w.complete)==null?void 0:S.bind(w)}let u,f,g;if(r instanceof he)f=Sn(r.firestore,ls),g=Vh(r._key.path),u={next:w=>{t[s]&&t[s](JA(f,r,w))},error:t[s+1],complete:t[s+2]};else{const w=Sn(r,ds);f=Sn(w.firestore,ls),g=w._query;const j=new jg(f);u={next:J=>{t[s]&&t[s](new Xs(f,j,w,J))},error:t[s+1],complete:t[s+2]},GA(r._query)}const y=qh(f);return lD(y,g,l,u)}function Fg(r,t){const n=qh(r);return hD(n,t)}function JA(r,t,n){const s=n.docs.get(t._key),l=new jg(r);return new Qs(r,l,t._key,s,new Pl(n.hasPendingWrites,n.fromCache),t.converter)}(function(t,n=!0){uC(yo),ki(new ii("firestore",((s,{instanceIdentifier:l,options:u})=>{const f=s.getProvider("app").getImmediate(),g=new ls(new fC(s.getProvider("auth-internal")),new gC(f,s.getProvider("app-check-internal")),VC(f,l),f);return u={useFetchStreams:n,...u},g._setSettings(u),g}),"PUBLIC").setMultipleInstances(!0)),jn(eT,nT,t),jn(eT,nT,"esm2020")})();const ZA="@firebase/installations",Gg="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WA=1e4,tS=`w:${Gg}`,eS="FIS_v2",OD="https://firebaseinstallations.googleapis.com/v1",VD=3600*1e3,MD="installations",xD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ia=new sa(MD,xD,kD);function nS(r){return r instanceof Li&&r.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iS({projectId:r}){return`${OD}/projects/${r}/installations`}function rS(r){return{token:r.token,requestStatus:2,expiresIn:LD(r.expiresIn),creationTime:Date.now()}}async function sS(r,t){const s=(await t.json()).error;return ia.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function aS({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function PD(r,{refreshToken:t}){const n=aS(r);return n.append("Authorization",UD(t)),n}async function oS(r){const t=await r();return t.status>=500&&t.status<600?r():t}function LD(r){return Number(r.replace("s","000"))}function UD(r){return`${eS} ${r}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zD({appConfig:r,heartbeatServiceProvider:t},{fid:n}){const s=iS(r),l=aS(r),u=t.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&l.append("x-firebase-client",p)}const f={fid:n,authVersion:eS,appId:r.appId,sdkVersion:tS},g={method:"POST",headers:l,body:JSON.stringify(f)},y=await oS(()=>fetch(s,g));if(y.ok){const p=await y.json();return{fid:p.fid||n,registrationStatus:2,refreshToken:p.refreshToken,authToken:rS(p.authToken)}}else throw await sS("Create Installation",y)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(r){return new Promise(t=>{setTimeout(t,r)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jD(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BD=/^[cdef][\w-]{21}$/,Ym="";function qD(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=HD(r);return BD.test(n)?n:Ym}catch{return Ym}}function HD(r){return jD(r).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yh(r){return`${r.appName}!${r.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uS=new Map;function cS(r,t){const n=Yh(r);hS(n,t),FD(n,t)}function hS(r,t){const n=uS.get(r);if(n)for(const s of n)s(t)}function FD(r,t){const n=GD();n&&n.postMessage({key:r,fid:t}),KD()}let Ys=null;function GD(){return!Ys&&"BroadcastChannel"in self&&(Ys=new BroadcastChannel("[Firebase] FID Change"),Ys.onmessage=r=>{hS(r.data.key,r.data.fid)}),Ys}function KD(){uS.size===0&&Ys&&(Ys.close(),Ys=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YD="firebase-installations-database",QD=1,ra="firebase-installations-store";let dm=null;function Kg(){return dm||(dm=bh(YD,QD,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(ra)}}})),dm}async function Ah(r,t){const n=Yh(r),l=(await Kg()).transaction(ra,"readwrite"),u=l.objectStore(ra),f=await u.get(n);return await u.put(t,n),await l.done,(!f||f.fid!==t.fid)&&cS(r,t.fid),t}async function fS(r){const t=Yh(r),s=(await Kg()).transaction(ra,"readwrite");await s.objectStore(ra).delete(t),await s.done}async function Qh(r,t){const n=Yh(r),l=(await Kg()).transaction(ra,"readwrite"),u=l.objectStore(ra),f=await u.get(n),g=t(f);return g===void 0?await u.delete(n):await u.put(g,n),await l.done,g&&(!f||f.fid!==g.fid)&&cS(r,g.fid),g}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(r){let t;const n=await Qh(r.appConfig,s=>{const l=XD(s),u=$D(r,l);return t=u.registrationPromise,u.installationEntry});return n.fid===Ym?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function XD(r){const t=r||{fid:qD(),registrationStatus:0};return dS(t)}function $D(r,t){if(t.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(ia.create("app-offline"));return{installationEntry:t,registrationPromise:l}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},s=JD(r,n);return{installationEntry:n,registrationPromise:s}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:ZD(r)}:{installationEntry:t}}async function JD(r,t){try{const n=await zD(r,t);return Ah(r.appConfig,n)}catch(n){throw nS(n)&&n.customData.serverCode===409?await fS(r.appConfig):await Ah(r.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function ZD(r){let t=await lT(r.appConfig);for(;t.registrationStatus===1;)await lS(100),t=await lT(r.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Yg(r);return s||n}return t}function lT(r){return Qh(r,t=>{if(!t)throw ia.create("installation-not-found");return dS(t)})}function dS(r){return WD(r)?{fid:r.fid,registrationStatus:0}:r}function WD(r){return r.registrationStatus===1&&r.registrationTime+WA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tO({appConfig:r,heartbeatServiceProvider:t},n){const s=eO(r,n),l=PD(r,n),u=t.getImmediate({optional:!0});if(u){const p=await u.getHeartbeatsHeader();p&&l.append("x-firebase-client",p)}const f={installation:{sdkVersion:tS,appId:r.appId}},g={method:"POST",headers:l,body:JSON.stringify(f)},y=await oS(()=>fetch(s,g));if(y.ok){const p=await y.json();return rS(p)}else throw await sS("Generate Auth Token",y)}function eO(r,{fid:t}){return`${iS(r)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qg(r,t=!1){let n;const s=await Qh(r.appConfig,u=>{if(!mS(u))throw ia.create("not-registered");const f=u.authToken;if(!t&&rO(f))return u;if(f.requestStatus===1)return n=nO(r,t),u;{if(!navigator.onLine)throw ia.create("app-offline");const g=aO(u);return n=iO(r,g),g}});return n?await n:s.authToken}async function nO(r,t){let n=await uT(r.appConfig);for(;n.authToken.requestStatus===1;)await lS(100),n=await uT(r.appConfig);const s=n.authToken;return s.requestStatus===0?Qg(r,t):s}function uT(r){return Qh(r,t=>{if(!mS(t))throw ia.create("not-registered");const n=t.authToken;return oO(n)?{...t,authToken:{requestStatus:0}}:t})}async function iO(r,t){try{const n=await tO(r,t),s={...t,authToken:n};return await Ah(r.appConfig,s),n}catch(n){if(nS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await fS(r.appConfig);else{const s={...t,authToken:{requestStatus:0}};await Ah(r.appConfig,s)}throw n}}function mS(r){return r!==void 0&&r.registrationStatus===2}function rO(r){return r.requestStatus===2&&!sO(r)}function sO(r){const t=Date.now();return t<r.creationTime||r.creationTime+r.expiresIn<t+VD}function aO(r){const t={requestStatus:1,requestTime:Date.now()};return{...r,authToken:t}}function oO(r){return r.requestStatus===1&&r.requestTime+WA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lO(r){const t=r,{installationEntry:n,registrationPromise:s}=await Yg(t);return s?s.catch(console.error):Qg(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uO(r,t=!1){const n=r;return await cO(n),(await Qg(n,t)).token}async function cO(r){const{registrationPromise:t}=await Yg(r);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hO(r){if(!r||!r.options)throw mm("App Configuration");if(!r.name)throw mm("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!r.options[n])throw mm(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function mm(r){return ia.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gS="installations",fO="installations-internal",dO=r=>{const t=r.getProvider("app").getImmediate(),n=hO(t),s=po(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},mO=r=>{const t=r.getProvider("app").getImmediate(),n=po(t,gS).getImmediate();return{getId:()=>lO(n),getToken:l=>uO(n,l)}};function gO(){ki(new ii(gS,dO,"PUBLIC")),ki(new ii(fO,mO,"PRIVATE"))}gO();jn(ZA,Gg);jn(ZA,Gg,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO="/firebase-messaging-sw.js",yO="/firebase-cloud-messaging-push-scope",pS="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",_O="https://fcmregistrations.googleapis.com/v1",yS="google.c.a.c_id",vO="google.c.a.c_l",EO="google.c.a.ts",TO="google.c.a.e",cT=1e4;var hT;(function(r){r[r.DATA_MESSAGE=1]="DATA_MESSAGE",r[r.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(hT||(hT={}));/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */var tu;(function(r){r.PUSH_RECEIVED="push-received",r.NOTIFICATION_CLICKED="notification-clicked"})(tu||(tu={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(r){const t=new Uint8Array(r);return btoa(String.fromCharCode(...t)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function AO(r){const t="=".repeat((4-r.length%4)%4),n=(r+t).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(n),l=new Uint8Array(s.length);for(let u=0;u<s.length;++u)l[u]=s.charCodeAt(u);return l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm="fcm_token_details_db",SO=5,fT="fcm_token_object_Store";async function bO(r){if("databases"in indexedDB&&!(await indexedDB.databases()).map(u=>u.name).includes(gm))return null;let t=null;return(await bh(gm,SO,{upgrade:async(s,l,u,f)=>{if(l<2||!s.objectStoreNames.contains(fT))return;const g=f.objectStore(fT),y=await g.index("fcmSenderId").get(r);if(await g.clear(),!!y){if(l===2){const p=y;if(!p.auth||!p.p256dh||!p.endpoint)return;t={token:p.fcmToken,createTime:p.createTime??Date.now(),subscriptionOptions:{auth:p.auth,p256dh:p.p256dh,endpoint:p.endpoint,swScope:p.swScope,vapidKey:typeof p.vapidKey=="string"?p.vapidKey:ir(p.vapidKey)}}}else if(l===3){const p=y;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:ir(p.auth),p256dh:ir(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:ir(p.vapidKey)}}}else if(l===4){const p=y;t={token:p.fcmToken,createTime:p.createTime,subscriptionOptions:{auth:ir(p.auth),p256dh:ir(p.p256dh),endpoint:p.endpoint,swScope:p.swScope,vapidKey:ir(p.vapidKey)}}}}}})).close(),await im(gm),await im("fcm_vapid_details_db"),await im("undefined"),wO(t)?t:null}function wO(r){if(!r||!r.subscriptionOptions)return!1;const{subscriptionOptions:t}=r;return typeof r.createTime=="number"&&r.createTime>0&&typeof r.token=="string"&&r.token.length>0&&typeof t.auth=="string"&&t.auth.length>0&&typeof t.p256dh=="string"&&t.p256dh.length>0&&typeof t.endpoint=="string"&&t.endpoint.length>0&&typeof t.swScope=="string"&&t.swScope.length>0&&typeof t.vapidKey=="string"&&t.vapidKey.length>0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RO="firebase-messaging-database",IO=1,eu="firebase-messaging-store";let pm=null;function _S(){return pm||(pm=bh(RO,IO,{upgrade:(r,t)=>{switch(t){case 0:r.createObjectStore(eu)}}})),pm}async function CO(r){const t=vS(r),s=await(await _S()).transaction(eu).objectStore(eu).get(t);if(s)return s;{const l=await bO(r.appConfig.senderId);if(l)return await Xg(r,l),l}}async function Xg(r,t){const n=vS(r),l=(await _S()).transaction(eu,"readwrite");return await l.objectStore(eu).put(t,n),await l.done,t}function vS({appConfig:r}){return r.appId}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},nn=new sa("messaging","Messaging",NO);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DO(r,t){const n=await Jg(r),s=ES(t),l={method:"POST",headers:n,body:JSON.stringify(s)};let u;try{u=await(await fetch($g(r.appConfig),l)).json()}catch(f){throw nn.create("token-subscribe-failed",{errorInfo:f==null?void 0:f.toString()})}if(u.error){const f=u.error.message;throw nn.create("token-subscribe-failed",{errorInfo:f})}if(!u.token)throw nn.create("token-subscribe-no-token");return u.token}async function OO(r,t){const n=await Jg(r),s=ES(t.subscriptionOptions),l={method:"PATCH",headers:n,body:JSON.stringify(s)};let u;try{u=await(await fetch(`${$g(r.appConfig)}/${t.token}`,l)).json()}catch(f){throw nn.create("token-update-failed",{errorInfo:f==null?void 0:f.toString()})}if(u.error){const f=u.error.message;throw nn.create("token-update-failed",{errorInfo:f})}if(!u.token)throw nn.create("token-update-no-token");return u.token}async function VO(r,t){const s={method:"DELETE",headers:await Jg(r)};try{const u=await(await fetch(`${$g(r.appConfig)}/${t}`,s)).json();if(u.error){const f=u.error.message;throw nn.create("token-unsubscribe-failed",{errorInfo:f})}}catch(l){throw nn.create("token-unsubscribe-failed",{errorInfo:l==null?void 0:l.toString()})}}function $g({projectId:r}){return`${_O}/projects/${r}/registrations`}async function Jg({appConfig:r,installations:t}){const n=await t.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function ES({p256dh:r,auth:t,endpoint:n,vapidKey:s}){const l={web:{endpoint:n,auth:t,p256dh:r}};return s!==pS&&(l.web.applicationPubKey=s),l}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MO=10080*60*1e3;async function xO(r){const t=await PO(r.swRegistration,r.vapidKey),n={vapidKey:r.vapidKey,swScope:r.swRegistration.scope,endpoint:t.endpoint,auth:ir(t.getKey("auth")),p256dh:ir(t.getKey("p256dh"))},s=await CO(r.firebaseDependencies);if(s){if(LO(s.subscriptionOptions,n))return Date.now()>=s.createTime+MO?kO(r,{token:s.token,createTime:Date.now(),subscriptionOptions:n}):s.token;try{await VO(r.firebaseDependencies,s.token)}catch(l){console.warn(l)}return dT(r.firebaseDependencies,n)}else return dT(r.firebaseDependencies,n)}async function kO(r,t){try{const n=await OO(r.firebaseDependencies,t),s={...t,token:n,createTime:Date.now()};return await Xg(r.firebaseDependencies,s),n}catch(n){throw n}}async function dT(r,t){const s={token:await DO(r,t),createTime:Date.now(),subscriptionOptions:t};return await Xg(r,s),s.token}async function PO(r,t){const n=await r.pushManager.getSubscription();return n||r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:AO(t)})}function LO(r,t){const n=t.vapidKey===r.vapidKey,s=t.endpoint===r.endpoint,l=t.auth===r.auth,u=t.p256dh===r.p256dh;return n&&s&&l&&u}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mT(r){const t={from:r.from,collapseKey:r.collapse_key,messageId:r.fcmMessageId};return UO(t,r),zO(t,r),jO(t,r),t}function UO(r,t){if(!t.notification)return;r.notification={};const n=t.notification.title;n&&(r.notification.title=n);const s=t.notification.body;s&&(r.notification.body=s);const l=t.notification.image;l&&(r.notification.image=l);const u=t.notification.icon;u&&(r.notification.icon=u)}function zO(r,t){t.data&&(r.data=t.data)}function jO(r,t){var l,u,f,g;if(!t.fcmOptions&&!((l=t.notification)!=null&&l.click_action))return;r.fcmOptions={};const n=((u=t.fcmOptions)==null?void 0:u.link)??((f=t.notification)==null?void 0:f.click_action);n&&(r.fcmOptions.link=n);const s=(g=t.fcmOptions)==null?void 0:g.analytics_label;s&&(r.fcmOptions.analyticsLabel=s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BO(r){return typeof r=="object"&&!!r&&yS in r}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qO(r){if(!r||!r.options)throw ym("App Configuration Object");if(!r.name)throw ym("App Name");const t=["projectId","apiKey","appId","messagingSenderId"],{options:n}=r;for(const s of t)if(!n[s])throw ym(s);return{appName:r.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function ym(r){return nn.create("missing-app-config-values",{valueName:r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HO{constructor(t,n,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const l=qO(t);this.firebaseDependencies={app:t,appConfig:l,installations:n,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function FO(r){try{r.swRegistration=await navigator.serviceWorker.register(pO,{scope:yO}),r.swRegistration.update().catch(()=>{}),await GO(r.swRegistration)}catch(t){throw nn.create("failed-service-worker-registration",{browserErrorMessage:t==null?void 0:t.message})}}async function GO(r){return new Promise((t,n)=>{const s=setTimeout(()=>n(new Error(`Service worker not registered after ${cT} ms`)),cT),l=r.installing||r.waiting;r.active?(clearTimeout(s),t()):l?l.onstatechange=u=>{var f;((f=u.target)==null?void 0:f.state)==="activated"&&(l.onstatechange=null,clearTimeout(s),t())}:(clearTimeout(s),n(new Error("No incoming service worker found.")))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KO(r,t){if(!t&&!r.swRegistration&&await FO(r),!(!t&&r.swRegistration)){if(!(t instanceof ServiceWorkerRegistration))throw nn.create("invalid-sw-registration");r.swRegistration=t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YO(r,t){t?r.vapidKey=t:r.vapidKey||(r.vapidKey=pS)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TS(r,t){if(!navigator)throw nn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw nn.create("permission-blocked");return await YO(r,t==null?void 0:t.vapidKey),await KO(r,t==null?void 0:t.serviceWorkerRegistration),xO(r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QO(r,t,n){const s=XO(t);(await r.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:n[yS],message_name:n[vO],message_time:n[EO],message_device_time:Math.floor(Date.now()/1e3)})}function XO(r){switch(r){case tu.NOTIFICATION_CLICKED:return"notification_open";case tu.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $O(r,t){const n=t.data;if(!n.isFirebaseMessaging)return;r.onMessageHandler&&n.messageType===tu.PUSH_RECEIVED&&(typeof r.onMessageHandler=="function"?r.onMessageHandler(mT(n)):r.onMessageHandler.next(mT(n)));const s=n.data;BO(s)&&s[TO]==="1"&&await QO(r,n.messageType,s)}const gT="@firebase/messaging",pT="0.12.23";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JO=r=>{const t=new HO(r.getProvider("app").getImmediate(),r.getProvider("installations-internal").getImmediate(),r.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>$O(t,n)),t},ZO=r=>{const t=r.getProvider("messaging").getImmediate();return{getToken:s=>TS(t,s)}};function WO(){ki(new ii("messaging",JO,"PUBLIC")),ki(new ii("messaging-internal",ZO,"PRIVATE")),jn(gT,pT),jn(gT,pT,"esm2020")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function t4(){try{await DT()}catch{return!1}return typeof window<"u"&&NT()&&x1()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function e4(r=Wm()){return t4().then(t=>{if(!t)throw nn.create("unsupported-browser")},t=>{throw nn.create("indexed-db-unsupported")}),po(ye(r),"messaging").getImmediate()}async function n4(r,t){return r=ye(r),TS(r,t)}WO();var i4="firebase",r4="12.9.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(i4,r4,"app");const s4={apiKey:"AIzaSyCNQaTYYDvt-ETlEZ7b8CiK1QG4vGynJDo",authDomain:"cabconnect-b75f6.firebaseapp.com",projectId:"cabconnect-b75f6",storageBucket:"cabconnect-b75f6.firebasestorage.app",messagingSenderId:"837263009325",appId:"1:837263009325:web:10336c1678738b6a593aa4",measurementId:"G-FPY7FZKFX4"},Zg=MT(s4),Ni=gD(Zg,"cabconnect"),ti=oC(Zg),a4=e4(Zg),o4="BNbalcEHKDYuy5PgNYsGCe7oEPxNg1RCe3QVfus4FfuRNGvw0RehK8T_YK7K-k8twZxwtR9VqTM0zpO5WWguXwE";async function l4(){try{if(typeof Notification<"u"&&await Notification.requestPermission()!=="granted"){console.warn("Notifications permission not granted");return}const r=await navigator.serviceWorker.register("/cabConnect/firebase-messaging-sw.js",{scope:"/cabConnect/"}),t=await n4(a4,{vapidKey:o4,serviceWorkerRegistration:r});t&&ti.currentUser&&await Km(es(Ni,"users",ti.currentUser.uid),{fcmToken:t})}catch(r){console.error("Failed to register FCM token:",r)}}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AS=(...r)=>r.filter((t,n,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,n,s)=>s?s.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yT=r=>{const t=c4(r);return t.charAt(0).toUpperCase()+t.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var h4={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=Ut.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:f,...g},y)=>Ut.createElement("svg",{ref:y,...h4,width:t,height:t,stroke:r,strokeWidth:s?Number(n)*24/Number(t):n,className:AS("lucide",l),...!u&&!f4(g)&&{"aria-hidden":"true"},...g},[...f.map(([p,T])=>Ut.createElement(p,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=(r,t)=>{const n=Ut.forwardRef(({className:s,...l},u)=>Ut.createElement(d4,{ref:u,iconNode:t,className:AS(`lucide-${u4(yT(r))}`,`lucide-${r}`,s),...l}));return n.displayName=yT(r),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],_T=bn("car",m4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],p4=bn("clock",g4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],SS=bn("key-round",y4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],vT=bn("loader-circle",_4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],bS=bn("lock",v4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],T4=bn("log-out",E4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Qm=bn("mail",A4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Xm=bn("map-pin",S4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],w4=bn("navigation",b4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],I4=bn("phone",R4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],N4=bn("power",C4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],O4=bn("send",D4);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],M4=bn("user",V4),x4=({onLogout:r})=>{const[t,n]=Ut.useState(!1),[s,l]=Ut.useState([]),[u,f]=Ut.useState(!0);Ut.useEffect(()=>{const p=ti.currentUser;if(!p)return;l4();const T=es(Ni,"users",p.uid),S=oT(T,w=>{if(w.exists()){const j=w.data();n(!!j.available)}else n(!1);f(!1)});return()=>S()},[]),Ut.useEffect(()=>{const p=ti.currentUser;if(!p)return;const T=YA(Gm(Ni,"requests"),RD("timestamp","desc")),S=oT(T,w=>{const j=w.docs.map(J=>({id:J.id,...J.data()})).filter(J=>J.status==="pending"||J.status==="accepted"&&J.driverId===p.uid);l(j)});return()=>S()},[]);const g=async()=>{try{const p=ti.currentUser;if(!p)throw new Error("Not authenticated");const T=es(Ni,"users",p.uid);await Km(T,{available:!t,lastAvailableUpdate:tT()})}catch(p){console.error("Error toggling availability:",p),alert("Failed to update availability. Check internet connection.")}},y=p=>p?(p.toDate?p.toDate():new Date(p)).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"";return u?H.jsx("div",{className:"min-h-screen flex items-center justify-center text-gray-500",children:"Connecting to HQ..."}):H.jsxs("div",{className:"min-h-screen bg-gray-100 flex flex-col",children:[H.jsxs("header",{className:"bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10",children:[H.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Driver Console"}),H.jsx("button",{onClick:r,className:"text-gray-500 hover:text-red-500 transition-colors",children:H.jsx(T4,{size:24})})]}),H.jsxs("main",{className:"flex-1 p-4 max-w-2xl mx-auto w-full",children:[H.jsx("div",{className:"mb-8",children:H.jsxs("button",{onClick:g,className:`w-full py-8 rounded-3xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 transform active:scale-95 ${t?"bg-green-500 text-white hover:bg-green-600 shadow-green-200":"bg-gray-800 text-gray-300 hover:bg-gray-900 shadow-gray-400"}`,children:[H.jsx(N4,{size:48,className:`mb-2 ${t?"text-white":"text-gray-500"}`}),H.jsx("span",{className:"text-2xl font-bold uppercase tracking-wider",children:t?"You are Available":"You are Unavailable"}),H.jsx("span",{className:"text-sm opacity-80 mt-1",children:t?"Receiving new requests":"Tap to start shift"})]})}),H.jsxs("div",{className:"space-y-4",children:[H.jsxs("h2",{className:"text-lg font-semibold text-gray-700 flex items-center gap-2",children:[H.jsx(p4,{size:20}),"Ride Requests"]}),s.length===0?H.jsx("div",{className:"bg-white rounded-xl p-8 text-center text-gray-400",children:"No requests."}):s.map(p=>H.jsxs("div",{className:`bg-white rounded-xl p-4 shadow-sm border-l-4 ${p.status==="pending"?"border-blue-500":"border-green-500"} animate-fade-in`,children:[H.jsxs("div",{className:"flex justify-between items-start mb-3",children:[H.jsx("h3",{className:"font-bold text-lg text-gray-800",children:p.customerName}),H.jsx("span",{className:"text-xs font-medium bg-gray-100 text-gray-500 px-2 py-1 rounded-full",children:y(p.timestamp)})]}),H.jsxs("div",{className:"space-y-2",children:[H.jsxs("div",{className:"flex items-start gap-3 text-gray-600",children:[H.jsx(Xm,{className:"w-5 h-5 text-green-500 mt-0.5 shrink-0"}),H.jsxs("div",{children:[H.jsx("span",{className:"text-xs text-gray-400 uppercase font-bold block",children:"Pickup"}),p.pickup]})]}),H.jsxs("div",{className:"flex items-start gap-3 text-gray-600",children:[H.jsx(Xm,{className:"w-5 h-5 text-red-500 mt-0.5 shrink-0"}),H.jsxs("div",{children:[H.jsx("span",{className:"text-xs text-gray-400 uppercase font-bold block",children:"Dropoff"}),p.dropoff]})]}),H.jsxs("div",{className:"flex items-center gap-3 text-gray-600 pt-2 border-t mt-2",children:[H.jsx(I4,{className:"w-4 h-4 text-gray-400"}),H.jsx("a",{href:`tel:${p.phone}`,className:"text-blue-600 hover:underline",children:p.phone})]})]}),p.status==="pending"?H.jsx("div",{className:"mt-4 flex justify-end",children:H.jsx("button",{className:"bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-700 transition",onClick:async()=>{const T=ti.currentUser;if(!T)return alert("Not authenticated");await Km(es(Ni,"requests",p.id),{status:"accepted",driverId:T.uid,acceptedAt:tT()}),alert("Ride accepted!")},children:"Accept Ride"})}):H.jsx("div",{className:"mt-4 text-green-700 font-semibold text-right",children:"Ride accepted by you"})]},p.id))]})]})]})},k4=({onDriverLoginClick:r})=>{const[t,n]=Ut.useState(null),[s,l]=Ut.useState(!0),[u,f]=Ut.useState(!1),[g,y]=Ut.useState({name:"",phone:"",pickup:"",dropoff:""});Ut.useEffect(()=>{(async()=>{const w=YA(Gm(Ni,"users"),rT("role","==","driver"),rT("available","==",!0)),j=await CD(w);n(!j.empty),l(!1)})()},[]);const p=async S=>{if(S.preventDefault(),!(!g.name||!g.pickup||!g.dropoff||!g.phone)){f(!0);try{await DD(Gm(Ni,"requests"),{customerName:g.name,pickup:g.pickup,dropoff:g.dropoff,phone:g.phone,status:"pending",timestamp:new Date}),alert("Your ride request has been submitted! You will be notified when a driver accepts."),y({name:"",phone:"",pickup:"",dropoff:""})}catch(w){console.error("Booking failed:",w),alert("Something went wrong. Please try again.")}finally{f(!1)}}},T=S=>{y({...g,[S.target.name]:S.target.value})};return s?H.jsx("div",{className:"min-h-screen bg-slate-50 flex items-center justify-center",children:H.jsx(vT,{className:"animate-spin text-emerald-600 w-10 h-10"})}):t?H.jsxs("div",{className:"min-h-screen bg-slate-50 flex flex-col",children:[H.jsx("header",{className:"bg-emerald-600 text-white p-6 shadow-lg rounded-b-[2.5rem] relative z-10",children:H.jsxs("div",{className:"max-w-md mx-auto",children:[H.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[H.jsx(_T,{className:"w-8 h-8"}),H.jsx("h1",{className:"text-2xl font-bold",children:"CabConnect"})]}),H.jsx("p",{className:"text-emerald-100 text-sm",children:"Safe, reliable rides at your fingertips."})]})}),H.jsx("main",{className:"flex-1 -mt-8 p-4",children:H.jsx("div",{className:"max-w-md mx-auto",children:H.jsxs("form",{onSubmit:p,className:"bg-white rounded-3xl shadow-xl p-6 space-y-5",children:[H.jsxs("div",{children:[H.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1 ml-1",children:"Your Name"}),H.jsx("input",{type:"text",name:"name",required:!0,className:"w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all",placeholder:"John Doe",value:g.name,onChange:T})]}),H.jsxs("div",{children:[H.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1 ml-1",children:"Phone Number"}),H.jsx("input",{type:"tel",name:"phone",required:!0,className:"w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all",placeholder:"0123456789",value:g.phone,onChange:T})]}),H.jsxs("div",{className:"relative",children:[H.jsx("div",{className:"absolute left-4 top-10 bottom-4 w-0.5 bg-gray-200"}),H.jsxs("div",{className:"relative mb-4",children:[H.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-1 ml-1",children:[H.jsx(w4,{className:"w-4 h-4 text-emerald-600"})," Pickup Location"]}),H.jsx("input",{type:"text",name:"pickup",required:!0,className:"w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all",placeholder:"Current Location / Address",value:g.pickup,onChange:T})]}),H.jsxs("div",{className:"relative",children:[H.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-1 ml-1",children:[H.jsx(Xm,{className:"w-4 h-4 text-red-500"})," Drop-off"]}),H.jsx("input",{type:"text",name:"dropoff",required:!0,className:"w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all",placeholder:"Where to?",value:g.dropoff,onChange:T})]})]}),H.jsx("button",{type:"submit",disabled:u,className:"w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-200 transform transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4",children:u?H.jsxs(H.Fragment,{children:[H.jsx(vT,{className:"animate-spin w-5 h-5"})," Processing..."]}):H.jsxs(H.Fragment,{children:[H.jsx(O4,{className:"w-5 h-5"})," Request Ride"]})}),H.jsx("p",{className:"text-xs text-center text-gray-400 mt-4",children:"By requesting a ride, you agree to share your details with the driver so they can contact you."})]})})}),H.jsx("footer",{className:"p-4 text-center",children:H.jsx("button",{onClick:r,className:"text-gray-300 text-xs hover:text-gray-500",children:"Partner Login"})})]}):H.jsxs("div",{className:"min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6 text-center",children:[H.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-xl max-w-md w-full",children:[H.jsx("div",{className:"bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",children:H.jsx(_T,{className:"w-10 h-10 text-gray-400"})}),H.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Service Unavailable"}),H.jsx("p",{className:"text-gray-500 mb-8",children:"Our drivers are currently unavailable. Please check back later or call us directly if it's urgent."}),H.jsx("div",{className:"h-1 w-24 bg-gray-200 mx-auto rounded-full"})]}),H.jsx("button",{onClick:r,className:"mt-8 text-gray-400 text-sm hover:text-gray-600 underline",children:"Driver Login"})]})},P4=({onSuccess:r,onCancel:t})=>{const[n,s]=Ut.useState(""),[l,u]=Ut.useState(""),[f,g]=Ut.useState(!1),[y,p]=Ut.useState(null),T=async S=>{var w,j;S.preventDefault(),p(null),g(!0);try{const J=await YR(ti,n.trim(),l),Z=await $A(es(Ni,"users",J.user.uid)),W=Z.exists()?Z.data():null;if(!W||W.role!=="driver")throw await a0(ti),new Error("This account is not a driver account.");r()}catch(J){const Z=(w=J==null?void 0:J.message)!=null&&w.includes("auth/invalid-credential")?"Incorrect email or password.":(j=J==null?void 0:J.message)!=null&&j.includes("auth/too-many-requests")?"Too many attempts. Try again later.":(J==null?void 0:J.message)||"Login failed.";p(Z)}finally{g(!1)}};return H.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 p-4",children:H.jsxs("div",{className:"w-full max-w-md bg-white rounded-2xl shadow p-6",children:[H.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[H.jsx(bS,{className:"w-5 h-5"}),H.jsx("h1",{className:"text-xl font-semibold",children:"Driver Login"})]}),H.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Sign in to access the Driver Dashboard."}),H.jsxs("form",{onSubmit:T,className:"space-y-4",children:[H.jsxs("label",{className:"block",children:[H.jsxs("span",{className:"text-sm text-gray-700 flex items-center gap-2",children:[H.jsx(Qm,{className:"w-4 h-4"})," Email"]}),H.jsx("input",{className:"mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring",type:"email",value:n,onChange:S=>s(S.target.value),placeholder:"driver@example.com",required:!0,autoComplete:"email"})]}),H.jsxs("label",{className:"block",children:[H.jsxs("span",{className:"text-sm text-gray-700 flex items-center gap-2",children:[H.jsx(SS,{className:"w-4 h-4"})," Password"]}),H.jsx("input",{className:"mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring",type:"password",value:l,onChange:S=>u(S.target.value),placeholder:"••••••••",required:!0,autoComplete:"current-password"})]}),y&&H.jsx("div",{className:"rounded-xl bg-red-50 border border-red-200 text-red-700 px-3 py-2 text-sm",children:y}),H.jsx("button",{type:"submit",disabled:f,className:"w-full rounded-xl bg-black text-white py-2 font-medium disabled:opacity-60",children:f?"Signing in…":"Sign in"}),H.jsx("button",{type:"button",onClick:t,className:"w-full rounded-xl border border-gray-200 py-2 font-medium",children:"Back"}),H.jsx("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("driver-register")),className:"w-full rounded-xl border border-blue-200 py-2 font-medium text-blue-700 mt-2",children:"Register as Driver"})]}),H.jsxs("div",{className:"mt-6 text-xs text-gray-500",children:[H.jsxs("p",{children:[H.jsx("strong",{children:"Tip:"})," Create your driver users in Firebase Auth, then add a Firestore profile doc:"]}),H.jsx("pre",{className:"mt-2 bg-gray-50 border border-gray-200 rounded-xl p-3 overflow-auto",children:`users/{uid}
{
  role: "driver",
  displayName: "Driver Name"
}`})]})]})})},L4=({onSuccess:r,onCancel:t})=>{const[n,s]=Ut.useState(""),[l,u]=Ut.useState(""),[f,g]=Ut.useState(""),[y,p]=Ut.useState(""),[T,S]=Ut.useState(!1),[w,j]=Ut.useState(null),J=async Z=>{Z.preventDefault(),j(null),S(!0);try{const W=await KR(ti,n.trim(),l);await ND(es(Ni,"users",W.user.uid),{role:"driver",displayName:f,phone:y}),r()}catch(W){j((W==null?void 0:W.message)||"Registration failed.")}finally{S(!1)}};return H.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 p-4",children:H.jsxs("div",{className:"w-full max-w-md bg-white rounded-2xl shadow p-6",children:[H.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[H.jsx(bS,{className:"w-5 h-5"}),H.jsx("h1",{className:"text-xl font-semibold",children:"Register as Driver"})]}),H.jsxs("form",{onSubmit:J,className:"space-y-4",children:[H.jsxs("label",{className:"block",children:[H.jsxs("span",{className:"text-sm text-gray-700 flex items-center gap-2",children:[H.jsx(M4,{className:"w-4 h-4"})," Name"]}),H.jsx("input",{className:"mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring",type:"text",value:f,onChange:Z=>g(Z.target.value),placeholder:"Driver Name",required:!0})]}),H.jsxs("label",{className:"block",children:[H.jsxs("span",{className:"text-sm text-gray-700 flex items-center gap-2",children:[H.jsx(Qm,{className:"w-4 h-4"})," Email"]}),H.jsx("input",{className:"mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring",type:"email",value:n,onChange:Z=>s(Z.target.value),placeholder:"driver@example.com",required:!0,autoComplete:"email"})]}),H.jsxs("label",{className:"block",children:[H.jsxs("span",{className:"text-sm text-gray-700 flex items-center gap-2",children:[H.jsx(SS,{className:"w-4 h-4"})," Password"]}),H.jsx("input",{className:"mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring",type:"password",value:l,onChange:Z=>u(Z.target.value),placeholder:"••••••••",required:!0,autoComplete:"new-password"})]}),H.jsxs("label",{className:"block",children:[H.jsxs("span",{className:"text-sm text-gray-700 flex items-center gap-2",children:[H.jsx(Qm,{className:"w-4 h-4"})," Phone"]}),H.jsx("input",{className:"mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring",type:"tel",value:y,onChange:Z=>p(Z.target.value),placeholder:"Phone Number",required:!0})]}),w&&H.jsx("div",{className:"rounded-xl bg-red-50 border border-red-200 text-red-700 px-3 py-2 text-sm",children:w}),H.jsx("button",{type:"submit",disabled:T,className:"w-full rounded-xl bg-black text-white py-2 font-medium disabled:opacity-60",children:T?"Registering…":"Register"}),H.jsx("button",{type:"button",onClick:t,className:"w-full rounded-xl border border-gray-200 py-2 font-medium",children:"Back"})]})]})})};function U4(){const[r,t]=Ut.useState("client"),[n,s]=Ut.useState(null),[l,u]=Ut.useState(null),[f,g]=Ut.useState(!0);Ut.useEffect(()=>{const T=()=>t("driverRegister");return window.addEventListener("driver-register",T),()=>window.removeEventListener("driver-register",T)},[]),Ut.useEffect(()=>{const T=$R(ti,async S=>{if(s(S),!S){u(null),g(!1);return}try{const w=await $A(es(Ni,"users",S.uid)),j=w.exists()?w.data():null;u((j==null?void 0:j.role)??null),(j==null?void 0:j.role)!=="driver"&&r==="driver"&&t("client")}catch{u(null)}finally{g(!1)}});return()=>T()},[]);const y=()=>{if(n&&l==="driver"){t("driver");return}t("driverLogin")},p=async()=>{await a0(ti),t("client")};return f?H.jsx("div",{className:"min-h-screen flex items-center justify-center text-gray-500",children:"Starting CabConnect…"}):H.jsxs("div",{className:"font-sans text-gray-900",children:[r==="client"&&H.jsx(k4,{onDriverLoginClick:y}),r==="driverLogin"&&H.jsx(P4,{onSuccess:()=>t("driver"),onCancel:()=>t("client")}),r==="driverRegister"&&H.jsx(L4,{onSuccess:()=>t("driverLogin"),onCancel:()=>t("driverLogin")}),r==="driver"&&H.jsx(x4,{onLogout:p})]})}const wS=document.getElementById("root");if(!wS)throw new Error("Could not find root element to mount to");const z4=d1.createRoot(wS);z4.render(H.jsx(s1.StrictMode,{children:H.jsx(U4,{})}));"serviceWorker"in navigator&&!window.location.host.includes("stackblitz")&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(r=>{console.log("ServiceWorker registration failed: ",r)})});
