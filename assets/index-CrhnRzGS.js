(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function n(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=n(l);fetch(l.href,u)}})();function w0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Wd={exports:{}},Cl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wv;function o1(){if(wv)return Cl;wv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function n(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var p in l)p!=="key"&&(u[p]=l[p])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:u}}return Cl.Fragment=e,Cl.jsx=n,Cl.jsxs=n,Cl}var Rv;function l1(){return Rv||(Rv=1,Wd.exports=o1()),Wd.exports}var k=l1(),em={exports:{}},ye={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iv;function u1(){if(Iv)return ye;Iv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),T=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),b=Symbol.iterator;function q(x){return x===null||typeof x!="object"?null:(x=b&&x[b]||x["@@iterator"],typeof x=="function"?x:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,W={};function he(x,X,ne){this.props=x,this.context=X,this.refs=W,this.updater=ne||Z}he.prototype.isReactComponent={},he.prototype.setState=function(x,X){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,X,"setState")},he.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function ve(){}ve.prototype=he.prototype;function Ee(x,X,ne){this.props=x,this.context=X,this.refs=W,this.updater=ne||Z}var Je=Ee.prototype=new ve;Je.constructor=Ee,J(Je,he.prototype),Je.isPureReactComponent=!0;var Ze=Array.isArray;function ze(){}var N={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function C(x,X,ne){var se=ne.ref;return{$$typeof:r,type:x,key:X,ref:se!==void 0?se:null,props:ne}}function V(x,X){return C(x.type,X,x.props)}function O(x){return typeof x=="object"&&x!==null&&x.$$typeof===r}function L(x){var X={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ne){return X[ne]})}var R=/\/+/g;function rt(x,X){return typeof x=="object"&&x!==null&&x.key!=null?L(""+x.key):X.toString(36)}function Dt(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(ze,ze):(x.status="pending",x.then(function(X){x.status==="pending"&&(x.status="fulfilled",x.value=X)},function(X){x.status==="pending"&&(x.status="rejected",x.reason=X)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function G(x,X,ne,se,pe){var Se=typeof x;(Se==="undefined"||Se==="boolean")&&(x=null);var Me=!1;if(x===null)Me=!0;else switch(Se){case"bigint":case"string":case"number":Me=!0;break;case"object":switch(x.$$typeof){case r:case e:Me=!0;break;case T:return Me=x._init,G(Me(x._payload),X,ne,se,pe)}}if(Me)return pe=pe(x),Me=se===""?"."+rt(x,0):se,Ze(pe)?(ne="",Me!=null&&(ne=Me.replace(R,"$&/")+"/"),G(pe,X,ne,"",function(ms){return ms})):pe!=null&&(O(pe)&&(pe=V(pe,ne+(pe.key==null||x&&x.key===pe.key?"":(""+pe.key).replace(R,"$&/")+"/")+Me)),X.push(pe)),1;Me=0;var Ot=se===""?".":se+":";if(Ze(x))for(var st=0;st<x.length;st++)se=x[st],Se=Ot+rt(se,st),Me+=G(se,X,ne,Se,pe);else if(st=q(x),typeof st=="function")for(x=st.call(x),st=0;!(se=x.next()).done;)se=se.value,Se=Ot+rt(se,st++),Me+=G(se,X,ne,Se,pe);else if(Se==="object"){if(typeof x.then=="function")return G(Dt(x),X,ne,se,pe);throw X=String(x),Error("Objects are not valid as a React child (found: "+(X==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":X)+"). If you meant to render a collection of children, use an array instead.")}return Me}function te(x,X,ne){if(x==null)return x;var se=[],pe=0;return G(x,se,"","",function(Se){return X.call(ne,Se,pe++)}),se}function ce(x){if(x._status===-1){var X=x._result;X=X(),X.then(function(ne){(x._status===0||x._status===-1)&&(x._status=1,x._result=ne)},function(ne){(x._status===0||x._status===-1)&&(x._status=2,x._result=ne)}),x._status===-1&&(x._status=0,x._result=X)}if(x._status===1)return x._result.default;throw x._result}var Le=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var X=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(X))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},He={map:te,forEach:function(x,X,ne){te(x,function(){X.apply(this,arguments)},ne)},count:function(x){var X=0;return te(x,function(){X++}),X},toArray:function(x){return te(x,function(X){return X})||[]},only:function(x){if(!O(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return ye.Activity=S,ye.Children=He,ye.Component=he,ye.Fragment=n,ye.Profiler=l,ye.PureComponent=Ee,ye.StrictMode=s,ye.Suspense=y,ye.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ye.__COMPILER_RUNTIME={__proto__:null,c:function(x){return N.H.useMemoCache(x)}},ye.cache=function(x){return function(){return x.apply(null,arguments)}},ye.cacheSignal=function(){return null},ye.cloneElement=function(x,X,ne){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var se=J({},x.props),pe=x.key;if(X!=null)for(Se in X.key!==void 0&&(pe=""+X.key),X)!w.call(X,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&X.ref===void 0||(se[Se]=X[Se]);var Se=arguments.length-2;if(Se===1)se.children=ne;else if(1<Se){for(var Me=Array(Se),Ot=0;Ot<Se;Ot++)Me[Ot]=arguments[Ot+2];se.children=Me}return C(x.type,pe,se)},ye.createContext=function(x){return x={$$typeof:f,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:u,_context:x},x},ye.createElement=function(x,X,ne){var se,pe={},Se=null;if(X!=null)for(se in X.key!==void 0&&(Se=""+X.key),X)w.call(X,se)&&se!=="key"&&se!=="__self"&&se!=="__source"&&(pe[se]=X[se]);var Me=arguments.length-2;if(Me===1)pe.children=ne;else if(1<Me){for(var Ot=Array(Me),st=0;st<Me;st++)Ot[st]=arguments[st+2];pe.children=Ot}if(x&&x.defaultProps)for(se in Me=x.defaultProps,Me)pe[se]===void 0&&(pe[se]=Me[se]);return C(x,Se,pe)},ye.createRef=function(){return{current:null}},ye.forwardRef=function(x){return{$$typeof:p,render:x}},ye.isValidElement=O,ye.lazy=function(x){return{$$typeof:T,_payload:{_status:-1,_result:x},_init:ce}},ye.memo=function(x,X){return{$$typeof:g,type:x,compare:X===void 0?null:X}},ye.startTransition=function(x){var X=N.T,ne={};N.T=ne;try{var se=x(),pe=N.S;pe!==null&&pe(ne,se),typeof se=="object"&&se!==null&&typeof se.then=="function"&&se.then(ze,Le)}catch(Se){Le(Se)}finally{X!==null&&ne.types!==null&&(X.types=ne.types),N.T=X}},ye.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ye.use=function(x){return N.H.use(x)},ye.useActionState=function(x,X,ne){return N.H.useActionState(x,X,ne)},ye.useCallback=function(x,X){return N.H.useCallback(x,X)},ye.useContext=function(x){return N.H.useContext(x)},ye.useDebugValue=function(){},ye.useDeferredValue=function(x,X){return N.H.useDeferredValue(x,X)},ye.useEffect=function(x,X){return N.H.useEffect(x,X)},ye.useEffectEvent=function(x){return N.H.useEffectEvent(x)},ye.useId=function(){return N.H.useId()},ye.useImperativeHandle=function(x,X,ne){return N.H.useImperativeHandle(x,X,ne)},ye.useInsertionEffect=function(x,X){return N.H.useInsertionEffect(x,X)},ye.useLayoutEffect=function(x,X){return N.H.useLayoutEffect(x,X)},ye.useMemo=function(x,X){return N.H.useMemo(x,X)},ye.useOptimistic=function(x,X){return N.H.useOptimistic(x,X)},ye.useReducer=function(x,X,ne){return N.H.useReducer(x,X,ne)},ye.useRef=function(x){return N.H.useRef(x)},ye.useState=function(x){return N.H.useState(x)},ye.useSyncExternalStore=function(x,X,ne){return N.H.useSyncExternalStore(x,X,ne)},ye.useTransition=function(){return N.H.useTransition()},ye.version="19.2.4",ye}var Cv;function ep(){return Cv||(Cv=1,em.exports=u1()),em.exports}var we=ep();const c1=w0(we);var tm={exports:{}},Nl={},nm={exports:{}},im={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv;function h1(){return Nv||(Nv=1,(function(r){function e(G,te){var ce=G.length;G.push(te);e:for(;0<ce;){var Le=ce-1>>>1,He=G[Le];if(0<l(He,te))G[Le]=te,G[ce]=He,ce=Le;else break e}}function n(G){return G.length===0?null:G[0]}function s(G){if(G.length===0)return null;var te=G[0],ce=G.pop();if(ce!==te){G[0]=ce;e:for(var Le=0,He=G.length,x=He>>>1;Le<x;){var X=2*(Le+1)-1,ne=G[X],se=X+1,pe=G[se];if(0>l(ne,ce))se<He&&0>l(pe,ne)?(G[Le]=pe,G[se]=ce,Le=se):(G[Le]=ne,G[X]=ce,Le=X);else if(se<He&&0>l(pe,ce))G[Le]=pe,G[se]=ce,Le=se;else break e}}return te}function l(G,te){var ce=G.sortIndex-te.sortIndex;return ce!==0?ce:G.id-te.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var y=[],g=[],T=1,S=null,b=3,q=!1,Z=!1,J=!1,W=!1,he=typeof setTimeout=="function"?setTimeout:null,ve=typeof clearTimeout=="function"?clearTimeout:null,Ee=typeof setImmediate<"u"?setImmediate:null;function Je(G){for(var te=n(g);te!==null;){if(te.callback===null)s(g);else if(te.startTime<=G)s(g),te.sortIndex=te.expirationTime,e(y,te);else break;te=n(g)}}function Ze(G){if(J=!1,Je(G),!Z)if(n(y)!==null)Z=!0,ze||(ze=!0,L());else{var te=n(g);te!==null&&Dt(Ze,te.startTime-G)}}var ze=!1,N=-1,w=5,C=-1;function V(){return W?!0:!(r.unstable_now()-C<w)}function O(){if(W=!1,ze){var G=r.unstable_now();C=G;var te=!0;try{e:{Z=!1,J&&(J=!1,ve(N),N=-1),q=!0;var ce=b;try{t:{for(Je(G),S=n(y);S!==null&&!(S.expirationTime>G&&V());){var Le=S.callback;if(typeof Le=="function"){S.callback=null,b=S.priorityLevel;var He=Le(S.expirationTime<=G);if(G=r.unstable_now(),typeof He=="function"){S.callback=He,Je(G),te=!0;break t}S===n(y)&&s(y),Je(G)}else s(y);S=n(y)}if(S!==null)te=!0;else{var x=n(g);x!==null&&Dt(Ze,x.startTime-G),te=!1}}break e}finally{S=null,b=ce,q=!1}te=void 0}}finally{te?L():ze=!1}}}var L;if(typeof Ee=="function")L=function(){Ee(O)};else if(typeof MessageChannel<"u"){var R=new MessageChannel,rt=R.port2;R.port1.onmessage=O,L=function(){rt.postMessage(null)}}else L=function(){he(O,0)};function Dt(G,te){N=he(function(){G(r.unstable_now())},te)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(G){G.callback=null},r.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<G?Math.floor(1e3/G):5},r.unstable_getCurrentPriorityLevel=function(){return b},r.unstable_next=function(G){switch(b){case 1:case 2:case 3:var te=3;break;default:te=b}var ce=b;b=te;try{return G()}finally{b=ce}},r.unstable_requestPaint=function(){W=!0},r.unstable_runWithPriority=function(G,te){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ce=b;b=G;try{return te()}finally{b=ce}},r.unstable_scheduleCallback=function(G,te,ce){var Le=r.unstable_now();switch(typeof ce=="object"&&ce!==null?(ce=ce.delay,ce=typeof ce=="number"&&0<ce?Le+ce:Le):ce=Le,G){case 1:var He=-1;break;case 2:He=250;break;case 5:He=1073741823;break;case 4:He=1e4;break;default:He=5e3}return He=ce+He,G={id:T++,callback:te,priorityLevel:G,startTime:ce,expirationTime:He,sortIndex:-1},ce>Le?(G.sortIndex=ce,e(g,G),n(y)===null&&G===n(g)&&(J?(ve(N),N=-1):J=!0,Dt(Ze,ce-Le))):(G.sortIndex=He,e(y,G),Z||q||(Z=!0,ze||(ze=!0,L()))),G},r.unstable_shouldYield=V,r.unstable_wrapCallback=function(G){var te=b;return function(){var ce=b;b=te;try{return G.apply(this,arguments)}finally{b=ce}}}})(im)),im}var Dv;function f1(){return Dv||(Dv=1,nm.exports=h1()),nm.exports}var rm={exports:{}},Qt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ov;function d1(){if(Ov)return Qt;Ov=1;var r=ep();function e(y){var g="https://react.dev/errors/"+y;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var T=2;T<arguments.length;T++)g+="&args[]="+encodeURIComponent(arguments[T])}return"Minified React error #"+y+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var s={d:{f:n,r:function(){throw Error(e(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(y,g,T){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:y,containerInfo:g,implementation:T}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(y,g){if(y==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Qt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Qt.createPortal=function(y,g){var T=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return u(y,g,null,T)},Qt.flushSync=function(y){var g=f.T,T=s.p;try{if(f.T=null,s.p=2,y)return y()}finally{f.T=g,s.p=T,s.d.f()}},Qt.preconnect=function(y,g){typeof y=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(y,g))},Qt.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},Qt.preinit=function(y,g){if(typeof y=="string"&&g&&typeof g.as=="string"){var T=g.as,S=p(T,g.crossOrigin),b=typeof g.integrity=="string"?g.integrity:void 0,q=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;T==="style"?s.d.S(y,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:b,fetchPriority:q}):T==="script"&&s.d.X(y,{crossOrigin:S,integrity:b,fetchPriority:q,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Qt.preinitModule=function(y,g){if(typeof y=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var T=p(g.as,g.crossOrigin);s.d.M(y,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&s.d.M(y)},Qt.preload=function(y,g){if(typeof y=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var T=g.as,S=p(T,g.crossOrigin);s.d.L(y,T,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Qt.preloadModule=function(y,g){if(typeof y=="string")if(g){var T=p(g.as,g.crossOrigin);s.d.m(y,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else s.d.m(y)},Qt.requestFormReset=function(y){s.d.r(y)},Qt.unstable_batchedUpdates=function(y,g){return y(g)},Qt.useFormState=function(y,g,T){return f.H.useFormState(y,g,T)},Qt.useFormStatus=function(){return f.H.useHostTransitionStatus()},Qt.version="19.2.4",Qt}var xv;function m1(){if(xv)return rm.exports;xv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),rm.exports=d1(),rm.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vv;function p1(){if(Vv)return Nl;Vv=1;var r=f1(),e=ep(),n=m1();function s(t){var i="https://react.dev/errors/"+t;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function f(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function p(t){if(t.tag===31){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function y(t){if(u(t)!==t)throw Error(s(188))}function g(t){var i=t.alternate;if(!i){if(i=u(t),i===null)throw Error(s(188));return i!==t?null:t}for(var a=t,o=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(o=h.return,o!==null){a=o;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return y(h),t;if(d===o)return y(h),i;d=d.sibling}throw Error(s(188))}if(a.return!==o.return)a=h,o=d;else{for(var _=!1,E=h.child;E;){if(E===a){_=!0,a=h,o=d;break}if(E===o){_=!0,o=h,a=d;break}E=E.sibling}if(!_){for(E=d.child;E;){if(E===a){_=!0,a=d,o=h;break}if(E===o){_=!0,o=d,a=h;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:i}function T(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t;for(t=t.child;t!==null;){if(i=T(t),i!==null)return i;t=t.sibling}return null}var S=Object.assign,b=Symbol.for("react.element"),q=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),he=Symbol.for("react.profiler"),ve=Symbol.for("react.consumer"),Ee=Symbol.for("react.context"),Je=Symbol.for("react.forward_ref"),Ze=Symbol.for("react.suspense"),ze=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),O=Symbol.iterator;function L(t){return t===null||typeof t!="object"?null:(t=O&&t[O]||t["@@iterator"],typeof t=="function"?t:null)}var R=Symbol.for("react.client.reference");function rt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===R?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case J:return"Fragment";case he:return"Profiler";case W:return"StrictMode";case Ze:return"Suspense";case ze:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case Z:return"Portal";case Ee:return t.displayName||"Context";case ve:return(t._context.displayName||"Context")+".Consumer";case Je:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return i=t.displayName||null,i!==null?i:rt(t.type)||"Memo";case w:i=t._payload,t=t._init;try{return rt(t(i))}catch{}}return null}var Dt=Array.isArray,G=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,te=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ce={pending:!1,data:null,method:null,action:null},Le=[],He=-1;function x(t){return{current:t}}function X(t){0>He||(t.current=Le[He],Le[He]=null,He--)}function ne(t,i){He++,Le[He]=t.current,t.current=i}var se=x(null),pe=x(null),Se=x(null),Me=x(null);function Ot(t,i){switch(ne(Se,i),ne(pe,t),ne(se,null),i.nodeType){case 9:case 11:t=(t=i.documentElement)&&(t=t.namespaceURI)?Q_(t):0;break;default:if(t=i.tagName,i=i.namespaceURI)i=Q_(i),t=X_(i,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}X(se),ne(se,t)}function st(){X(se),X(pe),X(Se)}function ms(t){t.memoizedState!==null&&ne(Me,t);var i=se.current,a=X_(i,t.type);i!==a&&(ne(pe,t),ne(se,a))}function ua(t){pe.current===t&&(X(se),X(pe)),Me.current===t&&(X(Me),bl._currentValue=ce)}var ca,ha;function oi(t){if(ca===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);ca=i&&i[1]||"",ha=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ca+t+ha}var bo=!1;function ps(t,i){if(!t||bo)return"";bo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(i){var Q=function(){throw Error()};if(Object.defineProperty(Q.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Q,[])}catch(H){var j=H}Reflect.construct(t,[],Q)}else{try{Q.call()}catch(H){j=H}t.call(Q.prototype)}}else{try{throw Error()}catch(H){j=H}(Q=t())&&typeof Q.catch=="function"&&Q.catch(function(){})}}catch(H){if(H&&j&&typeof H.stack=="string")return[H.stack,j.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),_=d[0],E=d[1];if(_&&E){var I=_.split(`
`),z=E.split(`
`);for(h=o=0;o<I.length&&!I[o].includes("DetermineComponentFrameRoot");)o++;for(;h<z.length&&!z[h].includes("DetermineComponentFrameRoot");)h++;if(o===I.length||h===z.length)for(o=I.length-1,h=z.length-1;1<=o&&0<=h&&I[o]!==z[h];)h--;for(;1<=o&&0<=h;o--,h--)if(I[o]!==z[h]){if(o!==1||h!==1)do if(o--,h--,0>h||I[o]!==z[h]){var F=`
`+I[o].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=o&&0<=h);break}}}finally{bo=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?oi(a):""}function wo(t,i){switch(t.tag){case 26:case 27:case 5:return oi(t.type);case 16:return oi("Lazy");case 13:return t.child!==i&&i!==null?oi("Suspense Fallback"):oi("Suspense");case 19:return oi("SuspenseList");case 0:case 15:return ps(t.type,!1);case 11:return ps(t.type.render,!1);case 1:return ps(t.type,!0);case 31:return oi("Activity");default:return""}}function Ro(t){try{var i="",a=null;do i+=wo(t,a),a=t,t=t.return;while(t);return i}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var _t=Object.prototype.hasOwnProperty,xt=r.unstable_scheduleCallback,pr=r.unstable_cancelCallback,ef=r.unstable_shouldYield,du=r.unstable_requestPaint,en=r.unstable_now,gs=r.unstable_getCurrentPriorityLevel,Io=r.unstable_ImmediatePriority,Co=r.unstable_UserBlockingPriority,gr=r.unstable_NormalPriority,tf=r.unstable_LowPriority,mu=r.unstable_IdlePriority,pu=r.log,gu=r.unstable_setDisableYieldValue,Fn=null,zt=null;function In(t){if(typeof pu=="function"&&gu(t),zt&&typeof zt.setStrictMode=="function")try{zt.setStrictMode(Fn,t)}catch{}}var ft=Math.clz32?Math.clz32:_u,yu=Math.log,fa=Math.LN2;function _u(t){return t>>>=0,t===0?32:31-(yu(t)/fa|0)|0}var li=256,ys=262144,vt=4194304;function ui(t){var i=t&42;if(i!==0)return i;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ci(t,i,a){var o=t.pendingLanes;if(o===0)return 0;var h=0,d=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=o&134217727;return E!==0?(o=E&~d,o!==0?h=ui(o):(_&=E,_!==0?h=ui(_):a||(a=E&~t,a!==0&&(h=ui(a))))):(E=o&~d,E!==0?h=ui(E):_!==0?h=ui(_):a||(a=o&~t,a!==0&&(h=ui(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function Gn(t,i){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&i)===0}function nf(t,i){switch(t){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vu(){var t=vt;return vt<<=1,(vt&62914560)===0&&(vt=4194304),t}function hi(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function _s(t,i){t.pendingLanes|=i,i!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function rf(t,i,a,o,h,d){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,I=t.expirationTimes,z=t.hiddenUpdates;for(a=_&~a;0<a;){var F=31-ft(a),Q=1<<F;E[F]=0,I[F]=-1;var j=z[F];if(j!==null)for(z[F]=null,F=0;F<j.length;F++){var H=j[F];H!==null&&(H.lane&=-536870913)}a&=~Q}o!==0&&vs(t,o,0),d!==0&&h===0&&t.tag!==0&&(t.suspendedLanes|=d&~(_&~i))}function vs(t,i,a){t.pendingLanes|=i,t.suspendedLanes&=~i;var o=31-ft(i);t.entangledLanes|=i,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function No(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var o=31-ft(a),h=1<<o;h&i|t[o]&i&&(t[o]|=i),a&=~h}}function Do(t,i){var a=i&-i;return a=(a&42)!==0?1:Es(a),(a&(t.suspendedLanes|i))!==0?0:a}function Es(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function zi(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Eu(){var t=te.p;return t!==0?t:(t=window.event,t===void 0?32:_v(t.type))}function Kn(t,i){var a=te.p;try{return te.p=t,i()}finally{te.p=a}}var Yn=Math.random().toString(36).slice(2),Et="__reactFiber$"+Yn,kt="__reactProps$"+Yn,fi="__reactContainer$"+Yn,da="__reactEvents$"+Yn,sf="__reactListeners$"+Yn,Tu="__reactHandles$"+Yn,Au="__reactResources$"+Yn,di="__reactMarker$"+Yn;function ma(t){delete t[Et],delete t[kt],delete t[da],delete t[sf],delete t[Tu]}function mi(t){var i=t[Et];if(i)return i;for(var a=t.parentNode;a;){if(i=a[fi]||a[Et]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=nv(t);t!==null;){if(a=t[Et])return a;t=nv(t)}return i}t=a,a=t.parentNode}return null}function Cn(t){if(t=t[Et]||t[fi]){var i=t.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return t}return null}function pn(t){var i=t.tag;if(i===5||i===26||i===27||i===6)return t.stateNode;throw Error(s(33))}function pi(t){var i=t[Au];return i||(i=t[Au]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function Tt(t){t[di]=!0}var Oo=new Set,xo={};function gi(t,i){yi(t,i),yi(t+"Capture",i)}function yi(t,i){for(xo[t]=i,t=0;t<i.length;t++)Oo.add(i[t])}var Vo=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Mo={},ko={};function Su(t){return _t.call(ko,t)?!0:_t.call(Mo,t)?!1:Vo.test(t)?ko[t]=!0:(Mo[t]=!0,!1)}function pa(t,i,a){if(Su(i))if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(i);return;case"boolean":var o=i.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(i);return}}t.setAttribute(i,""+a)}}function gn(t,i,a){if(a===null)t.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttribute(i,""+a)}}function At(t,i,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(i,a,""+o)}}function Lt(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function yr(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Lo(t,i,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,i);if(!t.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,d=o.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(_){a=""+_,d.call(this,_)}}),Object.defineProperty(t,i,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function Fe(t){if(!t._valueTracker){var i=yr(t)?"checked":"value";t._valueTracker=Lo(t,i,""+t[i])}}function Ts(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),o="";return t&&(o=yr(t)?t.checked?"true":"false":t.value),t=o,t!==a?(i.setValue(t),!0):!1}function _i(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var As=/[\n"\\]/g;function sn(t){return t.replace(As,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ga(t,i,a,o,h,d,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),i!=null?_==="number"?(i===0&&t.value===""||t.value!=i)&&(t.value=""+Lt(i)):t.value!==""+Lt(i)&&(t.value=""+Lt(i)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),i!=null?Po(t,_,Lt(i)):a!=null?Po(t,_,Lt(a)):o!=null&&t.removeAttribute("value"),h==null&&d!=null&&(t.defaultChecked=!!d),h!=null&&(t.checked=h&&typeof h!="function"&&typeof h!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Lt(E):t.removeAttribute("name")}function bu(t,i,a,o,h,d,_,E){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(t.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Fe(t);return}a=a!=null?""+Lt(a):"",i=i!=null?""+Lt(i):a,E||i===t.value||(t.value=i),t.defaultValue=i}o=o??h,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=E?t.checked:!!o,t.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Fe(t)}function Po(t,i,a){i==="number"&&_i(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function _r(t,i,a,o){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&o&&(t[a].defaultSelected=!0)}else{for(a=""+Lt(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,o&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function wu(t,i,a){if(i!=null&&(i=""+Lt(i),i!==t.value&&(t.value=i),a==null)){t.defaultValue!==i&&(t.defaultValue=i);return}t.defaultValue=a!=null?""+Lt(a):""}function vr(t,i,a,o){if(i==null){if(o!=null){if(a!=null)throw Error(s(92));if(Dt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),i=a}a=Lt(i),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Fe(t)}function an(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Ru=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uo(t,i,a){var o=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="":o?t.setProperty(i,a):typeof a!="number"||a===0||Ru.has(i)?i==="float"?t.cssFloat=a:t[i]=(""+a).trim():t[i]=a+"px"}function zo(t,i,a){if(i!=null&&typeof i!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||i!=null&&i.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var h in i)o=i[h],i.hasOwnProperty(h)&&a[h]!==o&&Uo(t,h,o)}else for(var d in i)i.hasOwnProperty(d)&&Uo(t,d,i[d])}function ya(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Er=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _a(t){return Er.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Qn(){}var jo=null;function Nn(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Tr=null,vi=null;function Ss(t){var i=Cn(t);if(i&&(t=i.stateNode)){var a=t[kt]||null;e:switch(t=i.stateNode,i.type){case"input":if(ga(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+sn(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var o=a[i];if(o!==t&&o.form===t.form){var h=o[kt]||null;if(!h)throw Error(s(90));ga(o,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)o=a[i],o.form===t.form&&Ts(o)}break e;case"textarea":wu(t,a.value,a.defaultValue);break e;case"select":i=a.value,i!=null&&_r(t,!!a.multiple,i,!1)}}}var va=!1;function Ar(t,i,a){if(va)return t(i,a);va=!0;try{var o=t(i);return o}finally{if(va=!1,(Tr!==null||vi!==null)&&(Ec(),Tr&&(i=Tr,t=vi,vi=Tr=null,Ss(i),t)))for(i=0;i<t.length;i++)Ss(t[i])}}function Xn(t,i){var a=t.stateNode;if(a===null)return null;var o=a[kt]||null;if(o===null)return null;a=o[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,i,typeof a));return a}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bs=!1;if(Dn)try{var Ye={};Object.defineProperty(Ye,"passive",{get:function(){bs=!0}}),window.addEventListener("test",Ye,Ye),window.removeEventListener("test",Ye,Ye)}catch{bs=!1}var Ei=null,Bo=null,ws=null;function qo(){if(ws)return ws;var t,i=Bo,a=i.length,o,h="value"in Ei?Ei.value:Ei.textContent,d=h.length;for(t=0;t<a&&i[t]===h[t];t++);var _=a-t;for(o=1;o<=_&&i[a-o]===h[d-o];o++);return ws=h.slice(t,1<o?1-o:void 0)}function Rs(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function ji(){return!0}function $n(){return!1}function jt(t){function i(a,o,h,d,_){this._reactName=a,this._targetInst=h,this.type=o,this.nativeEvent=d,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(d):d[E]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?ji:$n,this.isPropagationStopped=$n,this}return S(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ji)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ji)},persist:function(){},isPersistent:ji}),i}var Bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ti=jt(Bi),Sr=S({},Bi,{view:0,detail:0}),Ho=jt(Sr),br,Ea,Ai,Ta=S({},Sr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ai&&(Ai&&t.type==="mousemove"?(br=t.screenX-Ai.screenX,Ea=t.screenY-Ai.screenY):Ea=br=0,Ai=t),br)},movementY:function(t){return"movementY"in t?t.movementY:Ea}}),Fo=jt(Ta),Is=S({},Ta,{dataTransfer:0}),Cu=jt(Is),Nu=S({},Sr,{relatedTarget:0}),Cs=jt(Nu),Go=S({},Bi,{animationName:0,elapsedTime:0,pseudoElement:0}),Du=jt(Go),Aa=S({},Bi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ou=jt(Aa),xu=S({},Bi,{data:0}),Si=jt(xu),Vu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Mu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ku={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Lu(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=ku[t])?!!i[t]:!1}function wr(){return Lu}var tn=S({},Sr,{key:function(t){if(t.key){var i=Vu[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=Rs(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Mu[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wr,charCode:function(t){return t.type==="keypress"?Rs(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Rs(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Pu=jt(tn),Uu=S({},Ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),qi=jt(Uu),c=S({},Sr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wr}),m=jt(c),v=S({},Bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),A=jt(v),P=S({},Ta,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),B=jt(P),ee=S({},Bi,{newState:0,oldState:0}),Te=jt(ee),dt=[9,13,27,32],je=Dn&&"CompositionEvent"in window,at=null;Dn&&"documentMode"in document&&(at=document.documentMode);var On=Dn&&"TextEvent"in window&&!at,bi=Dn&&(!je||at&&8<at&&11>=at),Jn=" ",Zn=!1;function Ns(t,i){switch(t){case"keyup":return dt.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sa(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ba=!1;function OS(t,i){switch(t){case"compositionend":return Sa(i);case"keypress":return i.which!==32?null:(Zn=!0,Jn);case"textInput":return t=i.data,t===Jn&&Zn?null:t;default:return null}}function xS(t,i){if(ba)return t==="compositionend"||!je&&Ns(t,i)?(t=qo(),ws=Bo=Ei=null,ba=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return bi&&i.locale!=="ko"?null:i.data;default:return null}}var VS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sg(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!VS[t.type]:i==="textarea"}function ag(t,i,a,o){Tr?vi?vi.push(o):vi=[o]:Tr=o,i=Ic(i,"onChange"),0<i.length&&(a=new Ti("onChange","change",null,a,o),t.push({event:a,listeners:i}))}var Ko=null,Yo=null;function MS(t){q_(t,0)}function zu(t){var i=pn(t);if(Ts(i))return t}function og(t,i){if(t==="change")return i}var lg=!1;if(Dn){var af;if(Dn){var of="oninput"in document;if(!of){var ug=document.createElement("div");ug.setAttribute("oninput","return;"),of=typeof ug.oninput=="function"}af=of}else af=!1;lg=af&&(!document.documentMode||9<document.documentMode)}function cg(){Ko&&(Ko.detachEvent("onpropertychange",hg),Yo=Ko=null)}function hg(t){if(t.propertyName==="value"&&zu(Yo)){var i=[];ag(i,Yo,t,Nn(t)),Ar(MS,i)}}function kS(t,i,a){t==="focusin"?(cg(),Ko=i,Yo=a,Ko.attachEvent("onpropertychange",hg)):t==="focusout"&&cg()}function LS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zu(Yo)}function PS(t,i){if(t==="click")return zu(i)}function US(t,i){if(t==="input"||t==="change")return zu(i)}function zS(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var yn=typeof Object.is=="function"?Object.is:zS;function Qo(t,i){if(yn(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),o=Object.keys(i);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var h=a[o];if(!_t.call(i,h)||!yn(t[h],i[h]))return!1}return!0}function fg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dg(t,i){var a=fg(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=i&&o>=i)return{node:a,offset:i-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fg(a)}}function mg(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?mg(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function pg(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var i=_i(t.document);i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=_i(t.document)}return i}function lf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}var jS=Dn&&"documentMode"in document&&11>=document.documentMode,wa=null,uf=null,Xo=null,cf=!1;function gg(t,i,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;cf||wa==null||wa!==_i(o)||(o=wa,"selectionStart"in o&&lf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Xo&&Qo(Xo,o)||(Xo=o,o=Ic(uf,"onSelect"),0<o.length&&(i=new Ti("onSelect","select",null,i,a),t.push({event:i,listeners:o}),i.target=wa)))}function Ds(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var Ra={animationend:Ds("Animation","AnimationEnd"),animationiteration:Ds("Animation","AnimationIteration"),animationstart:Ds("Animation","AnimationStart"),transitionrun:Ds("Transition","TransitionRun"),transitionstart:Ds("Transition","TransitionStart"),transitioncancel:Ds("Transition","TransitionCancel"),transitionend:Ds("Transition","TransitionEnd")},hf={},yg={};Dn&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),"TransitionEvent"in window||delete Ra.transitionend.transition);function Os(t){if(hf[t])return hf[t];if(!Ra[t])return t;var i=Ra[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in yg)return hf[t]=i[a];return t}var _g=Os("animationend"),vg=Os("animationiteration"),Eg=Os("animationstart"),BS=Os("transitionrun"),qS=Os("transitionstart"),HS=Os("transitioncancel"),Tg=Os("transitionend"),Ag=new Map,ff="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ff.push("scrollEnd");function Wn(t,i){Ag.set(t,i),gi(i,[t])}var ju=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},xn=[],Ia=0,df=0;function Bu(){for(var t=Ia,i=df=Ia=0;i<t;){var a=xn[i];xn[i++]=null;var o=xn[i];xn[i++]=null;var h=xn[i];xn[i++]=null;var d=xn[i];if(xn[i++]=null,o!==null&&h!==null){var _=o.pending;_===null?h.next=h:(h.next=_.next,_.next=h),o.pending=h}d!==0&&Sg(a,h,d)}}function qu(t,i,a,o){xn[Ia++]=t,xn[Ia++]=i,xn[Ia++]=a,xn[Ia++]=o,df|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function mf(t,i,a,o){return qu(t,i,a,o),Hu(t)}function xs(t,i){return qu(t,null,null,i),Hu(t)}function Sg(t,i,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var h=!1,d=t.return;d!==null;)d.childLanes|=a,o=d.alternate,o!==null&&(o.childLanes|=a),d.tag===22&&(t=d.stateNode,t===null||t._visibility&1||(h=!0)),t=d,d=d.return;return t.tag===3?(d=t.stateNode,h&&i!==null&&(h=31-ft(a),t=d.hiddenUpdates,o=t[h],o===null?t[h]=[i]:o.push(i),i.lane=a|536870912),d):null}function Hu(t){if(50<yl)throw yl=0,Sd=null,Error(s(185));for(var i=t.return;i!==null;)t=i,i=t.return;return t.tag===3?t.stateNode:null}var Ca={};function FS(t,i,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function _n(t,i,a,o){return new FS(t,i,a,o)}function pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hi(t,i){var a=t.alternate;return a===null?(a=_n(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function bg(t,i){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=i,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,i=a.dependencies,t.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),t}function Fu(t,i,a,o,h,d){var _=0;if(o=t,typeof t=="function")pf(t)&&(_=1);else if(typeof t=="string")_=Xb(t,a,se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=_n(31,a,i,h),t.elementType=C,t.lanes=d,t;case J:return Vs(a.children,h,d,i);case W:_=8,h|=24;break;case he:return t=_n(12,a,i,h|2),t.elementType=he,t.lanes=d,t;case Ze:return t=_n(13,a,i,h),t.elementType=Ze,t.lanes=d,t;case ze:return t=_n(19,a,i,h),t.elementType=ze,t.lanes=d,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Ee:_=10;break e;case ve:_=9;break e;case Je:_=11;break e;case N:_=14;break e;case w:_=16,o=null;break e}_=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return i=_n(_,a,i,h),i.elementType=t,i.type=o,i.lanes=d,i}function Vs(t,i,a,o){return t=_n(7,t,o,i),t.lanes=a,t}function gf(t,i,a){return t=_n(6,t,null,i),t.lanes=a,t}function wg(t){var i=_n(18,null,null,0);return i.stateNode=t,i}function yf(t,i,a){return i=_n(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}var Rg=new WeakMap;function Vn(t,i){if(typeof t=="object"&&t!==null){var a=Rg.get(t);return a!==void 0?a:(i={value:t,source:i,stack:Ro(i)},Rg.set(t,i),i)}return{value:t,source:i,stack:Ro(i)}}var Na=[],Da=0,Gu=null,$o=0,Mn=[],kn=0,Rr=null,wi=1,Ri="";function Fi(t,i){Na[Da++]=$o,Na[Da++]=Gu,Gu=t,$o=i}function Ig(t,i,a){Mn[kn++]=wi,Mn[kn++]=Ri,Mn[kn++]=Rr,Rr=t;var o=wi;t=Ri;var h=32-ft(o)-1;o&=~(1<<h),a+=1;var d=32-ft(i)+h;if(30<d){var _=h-h%5;d=(o&(1<<_)-1).toString(32),o>>=_,h-=_,wi=1<<32-ft(i)+h|a<<h|o,Ri=d+t}else wi=1<<d|a<<h|o,Ri=t}function _f(t){t.return!==null&&(Fi(t,1),Ig(t,1,0))}function vf(t){for(;t===Gu;)Gu=Na[--Da],Na[Da]=null,$o=Na[--Da],Na[Da]=null;for(;t===Rr;)Rr=Mn[--kn],Mn[kn]=null,Ri=Mn[--kn],Mn[kn]=null,wi=Mn[--kn],Mn[kn]=null}function Cg(t,i){Mn[kn++]=wi,Mn[kn++]=Ri,Mn[kn++]=Rr,wi=i.id,Ri=i.overflow,Rr=t}var Bt=null,tt=null,Ve=!1,Ir=null,Ln=!1,Ef=Error(s(519));function Cr(t){var i=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Jo(Vn(i,t)),Ef}function Ng(t){var i=t.stateNode,a=t.type,o=t.memoizedProps;switch(i[Et]=t,i[kt]=o,a){case"dialog":Ie("cancel",i),Ie("close",i);break;case"iframe":case"object":case"embed":Ie("load",i);break;case"video":case"audio":for(a=0;a<vl.length;a++)Ie(vl[a],i);break;case"source":Ie("error",i);break;case"img":case"image":case"link":Ie("error",i),Ie("load",i);break;case"details":Ie("toggle",i);break;case"input":Ie("invalid",i),bu(i,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ie("invalid",i);break;case"textarea":Ie("invalid",i),vr(i,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||o.suppressHydrationWarning===!0||K_(i.textContent,a)?(o.popover!=null&&(Ie("beforetoggle",i),Ie("toggle",i)),o.onScroll!=null&&Ie("scroll",i),o.onScrollEnd!=null&&Ie("scrollend",i),o.onClick!=null&&(i.onclick=Qn),i=!0):i=!1,i||Cr(t,!0)}function Dg(t){for(Bt=t.return;Bt;)switch(Bt.tag){case 5:case 31:case 13:Ln=!1;return;case 27:case 3:Ln=!0;return;default:Bt=Bt.return}}function Oa(t){if(t!==Bt)return!1;if(!Ve)return Dg(t),Ve=!0,!1;var i=t.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ud(t.type,t.memoizedProps)),a=!a),a&&tt&&Cr(t),Dg(t),i===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));tt=tv(t)}else if(i===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));tt=tv(t)}else i===27?(i=tt,qr(t.type)?(t=Hd,Hd=null,tt=t):tt=i):tt=Bt?Un(t.stateNode.nextSibling):null;return!0}function Ms(){tt=Bt=null,Ve=!1}function Tf(){var t=Ir;return t!==null&&(cn===null?cn=t:cn.push.apply(cn,t),Ir=null),t}function Jo(t){Ir===null?Ir=[t]:Ir.push(t)}var Af=x(null),ks=null,Gi=null;function Nr(t,i,a){ne(Af,i._currentValue),i._currentValue=a}function Ki(t){t._currentValue=Af.current,X(Af)}function Sf(t,i,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,o!==null&&(o.childLanes|=i)):o!==null&&(o.childLanes&i)!==i&&(o.childLanes|=i),t===a)break;t=t.return}}function bf(t,i,a,o){var h=t.child;for(h!==null&&(h.return=t);h!==null;){var d=h.dependencies;if(d!==null){var _=h.child;d=d.firstContext;e:for(;d!==null;){var E=d;d=h;for(var I=0;I<i.length;I++)if(E.context===i[I]){d.lanes|=a,E=d.alternate,E!==null&&(E.lanes|=a),Sf(d.return,a,t),o||(_=null);break e}d=E.next}}else if(h.tag===18){if(_=h.return,_===null)throw Error(s(341));_.lanes|=a,d=_.alternate,d!==null&&(d.lanes|=a),Sf(_,a,t),_=null}else _=h.child;if(_!==null)_.return=h;else for(_=h;_!==null;){if(_===t){_=null;break}if(h=_.sibling,h!==null){h.return=_.return,_=h;break}_=_.return}h=_}}function xa(t,i,a,o){t=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var _=h.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=h.type;yn(h.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(h===Me.current){if(_=h.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(t!==null?t.push(bl):t=[bl])}h=h.return}t!==null&&bf(i,t,a,o),i.flags|=262144}function Ku(t){for(t=t.firstContext;t!==null;){if(!yn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ls(t){ks=t,Gi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function qt(t){return Og(ks,t)}function Yu(t,i){return ks===null&&Ls(t),Og(t,i)}function Og(t,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},Gi===null){if(t===null)throw Error(s(308));Gi=i,t.dependencies={lanes:0,firstContext:i},t.flags|=524288}else Gi=Gi.next=i;return a}var GS=typeof AbortController<"u"?AbortController:function(){var t=[],i=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){i.aborted=!0,t.forEach(function(a){return a()})}},KS=r.unstable_scheduleCallback,YS=r.unstable_NormalPriority,St={$$typeof:Ee,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wf(){return{controller:new GS,data:new Map,refCount:0}}function Zo(t){t.refCount--,t.refCount===0&&KS(YS,function(){t.controller.abort()})}var Wo=null,Rf=0,Va=0,Ma=null;function QS(t,i){if(Wo===null){var a=Wo=[];Rf=0,Va=Nd(),Ma={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Rf++,i.then(xg,xg),i}function xg(){if(--Rf===0&&Wo!==null){Ma!==null&&(Ma.status="fulfilled");var t=Wo;Wo=null,Va=0,Ma=null;for(var i=0;i<t.length;i++)(0,t[i])()}}function XS(t,i){var a=[],o={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return t.then(function(){o.status="fulfilled",o.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(o.status="rejected",o.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),o}var Vg=G.S;G.S=function(t,i){g_=en(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&QS(t,i),Vg!==null&&Vg(t,i)};var Ps=x(null);function If(){var t=Ps.current;return t!==null?t:We.pooledCache}function Qu(t,i){i===null?ne(Ps,Ps.current):ne(Ps,i.pool)}function Mg(){var t=If();return t===null?null:{parent:St._currentValue,pool:t}}var ka=Error(s(460)),Cf=Error(s(474)),Xu=Error(s(542)),$u={then:function(){}};function kg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Lg(t,i,a){switch(a=t[a],a===void 0?t.push(i):a!==i&&(i.then(Qn,Qn),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Ug(t),t;default:if(typeof i.status=="string")i.then(Qn,Qn);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=i,t.status="pending",t.then(function(o){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=o}},function(o){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=o}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw t=i.reason,Ug(t),t}throw zs=i,ka}}function Us(t){try{var i=t._init;return i(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(zs=a,ka):a}}var zs=null;function Pg(){if(zs===null)throw Error(s(459));var t=zs;return zs=null,t}function Ug(t){if(t===ka||t===Xu)throw Error(s(483))}var La=null,el=0;function Ju(t){var i=el;return el+=1,La===null&&(La=[]),Lg(La,t,i)}function tl(t,i){i=i.props.ref,t.ref=i!==void 0?i:null}function Zu(t,i){throw i.$$typeof===b?Error(s(525)):(t=Object.prototype.toString.call(i),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t)))}function zg(t){function i(M,D){if(t){var U=M.deletions;U===null?(M.deletions=[D],M.flags|=16):U.push(D)}}function a(M,D){if(!t)return null;for(;D!==null;)i(M,D),D=D.sibling;return null}function o(M){for(var D=new Map;M!==null;)M.key!==null?D.set(M.key,M):D.set(M.index,M),M=M.sibling;return D}function h(M,D){return M=Hi(M,D),M.index=0,M.sibling=null,M}function d(M,D,U){return M.index=U,t?(U=M.alternate,U!==null?(U=U.index,U<D?(M.flags|=67108866,D):U):(M.flags|=67108866,D)):(M.flags|=1048576,D)}function _(M){return t&&M.alternate===null&&(M.flags|=67108866),M}function E(M,D,U,K){return D===null||D.tag!==6?(D=gf(U,M.mode,K),D.return=M,D):(D=h(D,U),D.return=M,D)}function I(M,D,U,K){var le=U.type;return le===J?F(M,D,U.props.children,K,U.key):D!==null&&(D.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===w&&Us(le)===D.type)?(D=h(D,U.props),tl(D,U),D.return=M,D):(D=Fu(U.type,U.key,U.props,null,M.mode,K),tl(D,U),D.return=M,D)}function z(M,D,U,K){return D===null||D.tag!==4||D.stateNode.containerInfo!==U.containerInfo||D.stateNode.implementation!==U.implementation?(D=yf(U,M.mode,K),D.return=M,D):(D=h(D,U.children||[]),D.return=M,D)}function F(M,D,U,K,le){return D===null||D.tag!==7?(D=Vs(U,M.mode,K,le),D.return=M,D):(D=h(D,U),D.return=M,D)}function Q(M,D,U){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=gf(""+D,M.mode,U),D.return=M,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case q:return U=Fu(D.type,D.key,D.props,null,M.mode,U),tl(U,D),U.return=M,U;case Z:return D=yf(D,M.mode,U),D.return=M,D;case w:return D=Us(D),Q(M,D,U)}if(Dt(D)||L(D))return D=Vs(D,M.mode,U,null),D.return=M,D;if(typeof D.then=="function")return Q(M,Ju(D),U);if(D.$$typeof===Ee)return Q(M,Yu(M,D),U);Zu(M,D)}return null}function j(M,D,U,K){var le=D!==null?D.key:null;if(typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint")return le!==null?null:E(M,D,""+U,K);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case q:return U.key===le?I(M,D,U,K):null;case Z:return U.key===le?z(M,D,U,K):null;case w:return U=Us(U),j(M,D,U,K)}if(Dt(U)||L(U))return le!==null?null:F(M,D,U,K,null);if(typeof U.then=="function")return j(M,D,Ju(U),K);if(U.$$typeof===Ee)return j(M,D,Yu(M,U),K);Zu(M,U)}return null}function H(M,D,U,K,le){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return M=M.get(U)||null,E(D,M,""+K,le);if(typeof K=="object"&&K!==null){switch(K.$$typeof){case q:return M=M.get(K.key===null?U:K.key)||null,I(D,M,K,le);case Z:return M=M.get(K.key===null?U:K.key)||null,z(D,M,K,le);case w:return K=Us(K),H(M,D,U,K,le)}if(Dt(K)||L(K))return M=M.get(U)||null,F(D,M,K,le,null);if(typeof K.then=="function")return H(M,D,U,Ju(K),le);if(K.$$typeof===Ee)return H(M,D,U,Yu(D,K),le);Zu(D,K)}return null}function ae(M,D,U,K){for(var le=null,Pe=null,oe=D,be=D=0,Ne=null;oe!==null&&be<U.length;be++){oe.index>be?(Ne=oe,oe=null):Ne=oe.sibling;var Ue=j(M,oe,U[be],K);if(Ue===null){oe===null&&(oe=Ne);break}t&&oe&&Ue.alternate===null&&i(M,oe),D=d(Ue,D,be),Pe===null?le=Ue:Pe.sibling=Ue,Pe=Ue,oe=Ne}if(be===U.length)return a(M,oe),Ve&&Fi(M,be),le;if(oe===null){for(;be<U.length;be++)oe=Q(M,U[be],K),oe!==null&&(D=d(oe,D,be),Pe===null?le=oe:Pe.sibling=oe,Pe=oe);return Ve&&Fi(M,be),le}for(oe=o(oe);be<U.length;be++)Ne=H(oe,M,be,U[be],K),Ne!==null&&(t&&Ne.alternate!==null&&oe.delete(Ne.key===null?be:Ne.key),D=d(Ne,D,be),Pe===null?le=Ne:Pe.sibling=Ne,Pe=Ne);return t&&oe.forEach(function(Yr){return i(M,Yr)}),Ve&&Fi(M,be),le}function fe(M,D,U,K){if(U==null)throw Error(s(151));for(var le=null,Pe=null,oe=D,be=D=0,Ne=null,Ue=U.next();oe!==null&&!Ue.done;be++,Ue=U.next()){oe.index>be?(Ne=oe,oe=null):Ne=oe.sibling;var Yr=j(M,oe,Ue.value,K);if(Yr===null){oe===null&&(oe=Ne);break}t&&oe&&Yr.alternate===null&&i(M,oe),D=d(Yr,D,be),Pe===null?le=Yr:Pe.sibling=Yr,Pe=Yr,oe=Ne}if(Ue.done)return a(M,oe),Ve&&Fi(M,be),le;if(oe===null){for(;!Ue.done;be++,Ue=U.next())Ue=Q(M,Ue.value,K),Ue!==null&&(D=d(Ue,D,be),Pe===null?le=Ue:Pe.sibling=Ue,Pe=Ue);return Ve&&Fi(M,be),le}for(oe=o(oe);!Ue.done;be++,Ue=U.next())Ue=H(oe,M,be,Ue.value,K),Ue!==null&&(t&&Ue.alternate!==null&&oe.delete(Ue.key===null?be:Ue.key),D=d(Ue,D,be),Pe===null?le=Ue:Pe.sibling=Ue,Pe=Ue);return t&&oe.forEach(function(a1){return i(M,a1)}),Ve&&Fi(M,be),le}function $e(M,D,U,K){if(typeof U=="object"&&U!==null&&U.type===J&&U.key===null&&(U=U.props.children),typeof U=="object"&&U!==null){switch(U.$$typeof){case q:e:{for(var le=U.key;D!==null;){if(D.key===le){if(le=U.type,le===J){if(D.tag===7){a(M,D.sibling),K=h(D,U.props.children),K.return=M,M=K;break e}}else if(D.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===w&&Us(le)===D.type){a(M,D.sibling),K=h(D,U.props),tl(K,U),K.return=M,M=K;break e}a(M,D);break}else i(M,D);D=D.sibling}U.type===J?(K=Vs(U.props.children,M.mode,K,U.key),K.return=M,M=K):(K=Fu(U.type,U.key,U.props,null,M.mode,K),tl(K,U),K.return=M,M=K)}return _(M);case Z:e:{for(le=U.key;D!==null;){if(D.key===le)if(D.tag===4&&D.stateNode.containerInfo===U.containerInfo&&D.stateNode.implementation===U.implementation){a(M,D.sibling),K=h(D,U.children||[]),K.return=M,M=K;break e}else{a(M,D);break}else i(M,D);D=D.sibling}K=yf(U,M.mode,K),K.return=M,M=K}return _(M);case w:return U=Us(U),$e(M,D,U,K)}if(Dt(U))return ae(M,D,U,K);if(L(U)){if(le=L(U),typeof le!="function")throw Error(s(150));return U=le.call(U),fe(M,D,U,K)}if(typeof U.then=="function")return $e(M,D,Ju(U),K);if(U.$$typeof===Ee)return $e(M,D,Yu(M,U),K);Zu(M,U)}return typeof U=="string"&&U!==""||typeof U=="number"||typeof U=="bigint"?(U=""+U,D!==null&&D.tag===6?(a(M,D.sibling),K=h(D,U),K.return=M,M=K):(a(M,D),K=gf(U,M.mode,K),K.return=M,M=K),_(M)):a(M,D)}return function(M,D,U,K){try{el=0;var le=$e(M,D,U,K);return La=null,le}catch(oe){if(oe===ka||oe===Xu)throw oe;var Pe=_n(29,oe,null,M.mode);return Pe.lanes=K,Pe.return=M,Pe}finally{}}}var js=zg(!0),jg=zg(!1),Dr=!1;function Nf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Df(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Or(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function xr(t,i,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Be&2)!==0){var h=o.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),o.pending=i,i=Hu(t),Sg(t,null,a),i}return qu(t,o,i,a),Hu(t)}function nl(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var o=i.lanes;o&=t.pendingLanes,a|=o,i.lanes=a,No(t,a)}}function Of(t,i){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=_:d=d.next=_,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:o.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}var xf=!1;function il(){if(xf){var t=Ma;if(t!==null)throw t}}function rl(t,i,a,o){xf=!1;var h=t.updateQueue;Dr=!1;var d=h.firstBaseUpdate,_=h.lastBaseUpdate,E=h.shared.pending;if(E!==null){h.shared.pending=null;var I=E,z=I.next;I.next=null,_===null?d=z:_.next=z,_=I;var F=t.alternate;F!==null&&(F=F.updateQueue,E=F.lastBaseUpdate,E!==_&&(E===null?F.firstBaseUpdate=z:E.next=z,F.lastBaseUpdate=I))}if(d!==null){var Q=h.baseState;_=0,F=z=I=null,E=d;do{var j=E.lane&-536870913,H=j!==E.lane;if(H?(Ce&j)===j:(o&j)===j){j!==0&&j===Va&&(xf=!0),F!==null&&(F=F.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var ae=t,fe=E;j=i;var $e=a;switch(fe.tag){case 1:if(ae=fe.payload,typeof ae=="function"){Q=ae.call($e,Q,j);break e}Q=ae;break e;case 3:ae.flags=ae.flags&-65537|128;case 0:if(ae=fe.payload,j=typeof ae=="function"?ae.call($e,Q,j):ae,j==null)break e;Q=S({},Q,j);break e;case 2:Dr=!0}}j=E.callback,j!==null&&(t.flags|=64,H&&(t.flags|=8192),H=h.callbacks,H===null?h.callbacks=[j]:H.push(j))}else H={lane:j,tag:E.tag,payload:E.payload,callback:E.callback,next:null},F===null?(z=F=H,I=Q):F=F.next=H,_|=j;if(E=E.next,E===null){if(E=h.shared.pending,E===null)break;H=E,E=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);F===null&&(I=Q),h.baseState=I,h.firstBaseUpdate=z,h.lastBaseUpdate=F,d===null&&(h.shared.lanes=0),Pr|=_,t.lanes=_,t.memoizedState=Q}}function Bg(t,i){if(typeof t!="function")throw Error(s(191,t));t.call(i)}function qg(t,i){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Bg(a[t],i)}var Pa=x(null),Wu=x(0);function Hg(t,i){t=tr,ne(Wu,t),ne(Pa,i),tr=t|i.baseLanes}function Vf(){ne(Wu,tr),ne(Pa,Pa.current)}function Mf(){tr=Wu.current,X(Pa),X(Wu)}var vn=x(null),Pn=null;function Vr(t){var i=t.alternate;ne(mt,mt.current&1),ne(vn,t),Pn===null&&(i===null||Pa.current!==null||i.memoizedState!==null)&&(Pn=t)}function kf(t){ne(mt,mt.current),ne(vn,t),Pn===null&&(Pn=t)}function Fg(t){t.tag===22?(ne(mt,mt.current),ne(vn,t),Pn===null&&(Pn=t)):Mr()}function Mr(){ne(mt,mt.current),ne(vn,vn.current)}function En(t){X(vn),Pn===t&&(Pn=null),X(mt)}var mt=x(0);function ec(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Bd(a)||qd(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Yi=0,Ae=null,Qe=null,bt=null,tc=!1,Ua=!1,Bs=!1,nc=0,sl=0,za=null,$S=0;function ut(){throw Error(s(321))}function Lf(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!yn(t[a],i[a]))return!1;return!0}function Pf(t,i,a,o,h,d){return Yi=d,Ae=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,G.H=t===null||t.memoizedState===null?Iy:Zf,Bs=!1,d=a(o,h),Bs=!1,Ua&&(d=Kg(i,a,o,h)),Gg(t),d}function Gg(t){G.H=ll;var i=Qe!==null&&Qe.next!==null;if(Yi=0,bt=Qe=Ae=null,tc=!1,sl=0,za=null,i)throw Error(s(300));t===null||wt||(t=t.dependencies,t!==null&&Ku(t)&&(wt=!0))}function Kg(t,i,a,o){Ae=t;var h=0;do{if(Ua&&(za=null),sl=0,Ua=!1,25<=h)throw Error(s(301));if(h+=1,bt=Qe=null,t.updateQueue!=null){var d=t.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}G.H=Cy,d=i(a,o)}while(Ua);return d}function JS(){var t=G.H,i=t.useState()[0];return i=typeof i.then=="function"?al(i):i,t=t.useState()[0],(Qe!==null?Qe.memoizedState:null)!==t&&(Ae.flags|=1024),i}function Uf(){var t=nc!==0;return nc=0,t}function zf(t,i,a){i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~a}function jf(t){if(tc){for(t=t.memoizedState;t!==null;){var i=t.queue;i!==null&&(i.pending=null),t=t.next}tc=!1}Yi=0,bt=Qe=Ae=null,Ua=!1,sl=nc=0,za=null}function nn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?Ae.memoizedState=bt=t:bt=bt.next=t,bt}function pt(){if(Qe===null){var t=Ae.alternate;t=t!==null?t.memoizedState:null}else t=Qe.next;var i=bt===null?Ae.memoizedState:bt.next;if(i!==null)bt=i,Qe=t;else{if(t===null)throw Ae.alternate===null?Error(s(467)):Error(s(310));Qe=t,t={memoizedState:Qe.memoizedState,baseState:Qe.baseState,baseQueue:Qe.baseQueue,queue:Qe.queue,next:null},bt===null?Ae.memoizedState=bt=t:bt=bt.next=t}return bt}function ic(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function al(t){var i=sl;return sl+=1,za===null&&(za=[]),t=Lg(za,t,i),i=Ae,(bt===null?i.memoizedState:bt.next)===null&&(i=i.alternate,G.H=i===null||i.memoizedState===null?Iy:Zf),t}function rc(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return al(t);if(t.$$typeof===Ee)return qt(t)}throw Error(s(438,String(t)))}function Bf(t){var i=null,a=Ae.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var o=Ae.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(i={data:o.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=ic(),Ae.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(t),o=0;o<t;o++)a[o]=V;return i.index++,a}function Qi(t,i){return typeof i=="function"?i(t):i}function sc(t){var i=pt();return qf(i,Qe,t)}function qf(t,i,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var h=t.baseQueue,d=o.pending;if(d!==null){if(h!==null){var _=h.next;h.next=d.next,d.next=_}i.baseQueue=h=d,o.pending=null}if(d=t.baseState,h===null)t.memoizedState=d;else{i=h.next;var E=_=null,I=null,z=i,F=!1;do{var Q=z.lane&-536870913;if(Q!==z.lane?(Ce&Q)===Q:(Yi&Q)===Q){var j=z.revertLane;if(j===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),Q===Va&&(F=!0);else if((Yi&j)===j){z=z.next,j===Va&&(F=!0);continue}else Q={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},I===null?(E=I=Q,_=d):I=I.next=Q,Ae.lanes|=j,Pr|=j;Q=z.action,Bs&&a(d,Q),d=z.hasEagerState?z.eagerState:a(d,Q)}else j={lane:Q,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},I===null?(E=I=j,_=d):I=I.next=j,Ae.lanes|=Q,Pr|=Q;z=z.next}while(z!==null&&z!==i);if(I===null?_=d:I.next=E,!yn(d,t.memoizedState)&&(wt=!0,F&&(a=Ma,a!==null)))throw a;t.memoizedState=d,t.baseState=_,t.baseQueue=I,o.lastRenderedState=d}return h===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Hf(t){var i=pt(),a=i.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var _=h=h.next;do d=t(d,_.action),_=_.next;while(_!==h);yn(d,i.memoizedState)||(wt=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,o]}function Yg(t,i,a){var o=Ae,h=pt(),d=Ve;if(d){if(a===void 0)throw Error(s(407));a=a()}else a=i();var _=!yn((Qe||h).memoizedState,a);if(_&&(h.memoizedState=a,wt=!0),h=h.queue,Kf($g.bind(null,o,h,t),[t]),h.getSnapshot!==i||_||bt!==null&&bt.memoizedState.tag&1){if(o.flags|=2048,ja(9,{destroy:void 0},Xg.bind(null,o,h,a,i),null),We===null)throw Error(s(349));d||(Yi&127)!==0||Qg(o,i,a)}return a}function Qg(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Ae.updateQueue,i===null?(i=ic(),Ae.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Xg(t,i,a,o){i.value=a,i.getSnapshot=o,Jg(i)&&Zg(t)}function $g(t,i,a){return a(function(){Jg(i)&&Zg(t)})}function Jg(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!yn(t,a)}catch{return!0}}function Zg(t){var i=xs(t,2);i!==null&&hn(i,t,2)}function Ff(t){var i=nn();if(typeof t=="function"){var a=t;if(t=a(),Bs){In(!0);try{a()}finally{In(!1)}}}return i.memoizedState=i.baseState=t,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:t},i}function Wg(t,i,a,o){return t.baseState=a,qf(t,Qe,typeof o=="function"?o:Qi)}function ZS(t,i,a,o,h){if(lc(t))throw Error(s(485));if(t=i.action,t!==null){var d={payload:h,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){d.listeners.push(_)}};G.T!==null?a(!0):d.isTransition=!1,o(d),a=i.pending,a===null?(d.next=i.pending=d,ey(i,d)):(d.next=a.next,i.pending=a.next=d)}}function ey(t,i){var a=i.action,o=i.payload,h=t.state;if(i.isTransition){var d=G.T,_={};G.T=_;try{var E=a(h,o),I=G.S;I!==null&&I(_,E),ty(t,i,E)}catch(z){Gf(t,i,z)}finally{d!==null&&_.types!==null&&(d.types=_.types),G.T=d}}else try{d=a(h,o),ty(t,i,d)}catch(z){Gf(t,i,z)}}function ty(t,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){ny(t,i,o)},function(o){return Gf(t,i,o)}):ny(t,i,a)}function ny(t,i,a){i.status="fulfilled",i.value=a,iy(i),t.state=a,i=t.pending,i!==null&&(a=i.next,a===i?t.pending=null:(a=a.next,i.next=a,ey(t,a)))}function Gf(t,i,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do i.status="rejected",i.reason=a,iy(i),i=i.next;while(i!==o)}t.action=null}function iy(t){t=t.listeners;for(var i=0;i<t.length;i++)(0,t[i])()}function ry(t,i){return i}function sy(t,i){if(Ve){var a=We.formState;if(a!==null){e:{var o=Ae;if(Ve){if(tt){t:{for(var h=tt,d=Ln;h.nodeType!==8;){if(!d){h=null;break t}if(h=Un(h.nextSibling),h===null){h=null;break t}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){tt=Un(h.nextSibling),o=h.data==="F!";break e}}Cr(o)}o=!1}o&&(i=a[0])}}return a=nn(),a.memoizedState=a.baseState=i,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ry,lastRenderedState:i},a.queue=o,a=by.bind(null,Ae,o),o.dispatch=a,o=Ff(!1),d=Jf.bind(null,Ae,!1,o.queue),o=nn(),h={state:i,dispatch:null,action:t,pending:null},o.queue=h,a=ZS.bind(null,Ae,h,d,a),h.dispatch=a,o.memoizedState=t,[i,a,!1]}function ay(t){var i=pt();return oy(i,Qe,t)}function oy(t,i,a){if(i=qf(t,i,ry)[0],t=sc(Qi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var o=al(i)}catch(_){throw _===ka?Xu:_}else o=i;i=pt();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(Ae.flags|=2048,ja(9,{destroy:void 0},WS.bind(null,h,a),null)),[o,d,t]}function WS(t,i){t.action=i}function ly(t){var i=pt(),a=Qe;if(a!==null)return oy(i,a,t);pt(),i=i.memoizedState,a=pt();var o=a.queue.dispatch;return a.memoizedState=t,[i,o,!1]}function ja(t,i,a,o){return t={tag:t,create:a,deps:o,inst:i,next:null},i=Ae.updateQueue,i===null&&(i=ic(),Ae.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,i.lastEffect=t),t}function uy(){return pt().memoizedState}function ac(t,i,a,o){var h=nn();Ae.flags|=t,h.memoizedState=ja(1|i,{destroy:void 0},a,o===void 0?null:o)}function oc(t,i,a,o){var h=pt();o=o===void 0?null:o;var d=h.memoizedState.inst;Qe!==null&&o!==null&&Lf(o,Qe.memoizedState.deps)?h.memoizedState=ja(i,d,a,o):(Ae.flags|=t,h.memoizedState=ja(1|i,d,a,o))}function cy(t,i){ac(8390656,8,t,i)}function Kf(t,i){oc(2048,8,t,i)}function eb(t){Ae.flags|=4;var i=Ae.updateQueue;if(i===null)i=ic(),Ae.updateQueue=i,i.events=[t];else{var a=i.events;a===null?i.events=[t]:a.push(t)}}function hy(t){var i=pt().memoizedState;return eb({ref:i,nextImpl:t}),function(){if((Be&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}function fy(t,i){return oc(4,2,t,i)}function dy(t,i){return oc(4,4,t,i)}function my(t,i){if(typeof i=="function"){t=t();var a=i(t);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function py(t,i,a){a=a!=null?a.concat([t]):null,oc(4,4,my.bind(null,i,t),a)}function Yf(){}function gy(t,i){var a=pt();i=i===void 0?null:i;var o=a.memoizedState;return i!==null&&Lf(i,o[1])?o[0]:(a.memoizedState=[t,i],t)}function yy(t,i){var a=pt();i=i===void 0?null:i;var o=a.memoizedState;if(i!==null&&Lf(i,o[1]))return o[0];if(o=t(),Bs){In(!0);try{t()}finally{In(!1)}}return a.memoizedState=[o,i],o}function Qf(t,i,a){return a===void 0||(Yi&1073741824)!==0&&(Ce&261930)===0?t.memoizedState=i:(t.memoizedState=a,t=__(),Ae.lanes|=t,Pr|=t,a)}function _y(t,i,a,o){return yn(a,i)?a:Pa.current!==null?(t=Qf(t,a,o),yn(t,i)||(wt=!0),t):(Yi&42)===0||(Yi&1073741824)!==0&&(Ce&261930)===0?(wt=!0,t.memoizedState=a):(t=__(),Ae.lanes|=t,Pr|=t,i)}function vy(t,i,a,o,h){var d=te.p;te.p=d!==0&&8>d?d:8;var _=G.T,E={};G.T=E,Jf(t,!1,i,a);try{var I=h(),z=G.S;if(z!==null&&z(E,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var F=XS(I,o);ol(t,i,F,Sn(t))}else ol(t,i,o,Sn(t))}catch(Q){ol(t,i,{then:function(){},status:"rejected",reason:Q},Sn())}finally{te.p=d,_!==null&&E.types!==null&&(_.types=E.types),G.T=_}}function tb(){}function Xf(t,i,a,o){if(t.tag!==5)throw Error(s(476));var h=Ey(t).queue;vy(t,h,i,ce,a===null?tb:function(){return Ty(t),a(o)})}function Ey(t){var i=t.memoizedState;if(i!==null)return i;i={memoizedState:ce,baseState:ce,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:ce},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:a},next:null},t.memoizedState=i,t=t.alternate,t!==null&&(t.memoizedState=i),i}function Ty(t){var i=Ey(t);i.next===null&&(i=t.alternate.memoizedState),ol(t,i.next.queue,{},Sn())}function $f(){return qt(bl)}function Ay(){return pt().memoizedState}function Sy(){return pt().memoizedState}function nb(t){for(var i=t.return;i!==null;){switch(i.tag){case 24:case 3:var a=Sn();t=Or(a);var o=xr(i,t,a);o!==null&&(hn(o,i,a),nl(o,i,a)),i={cache:wf()},t.payload=i;return}i=i.return}}function ib(t,i,a){var o=Sn();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},lc(t)?wy(i,a):(a=mf(t,i,a,o),a!==null&&(hn(a,t,o),Ry(a,i,o)))}function by(t,i,a){var o=Sn();ol(t,i,a,o)}function ol(t,i,a,o){var h={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(lc(t))wy(i,h);else{var d=t.alternate;if(t.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var _=i.lastRenderedState,E=d(_,a);if(h.hasEagerState=!0,h.eagerState=E,yn(E,_))return qu(t,i,h,0),We===null&&Bu(),!1}catch{}finally{}if(a=mf(t,i,h,o),a!==null)return hn(a,t,o),Ry(a,i,o),!0}return!1}function Jf(t,i,a,o){if(o={lane:2,revertLane:Nd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},lc(t)){if(i)throw Error(s(479))}else i=mf(t,a,o,2),i!==null&&hn(i,t,2)}function lc(t){var i=t.alternate;return t===Ae||i!==null&&i===Ae}function wy(t,i){Ua=tc=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Ry(t,i,a){if((a&4194048)!==0){var o=i.lanes;o&=t.pendingLanes,a|=o,i.lanes=a,No(t,a)}}var ll={readContext:qt,use:rc,useCallback:ut,useContext:ut,useEffect:ut,useImperativeHandle:ut,useLayoutEffect:ut,useInsertionEffect:ut,useMemo:ut,useReducer:ut,useRef:ut,useState:ut,useDebugValue:ut,useDeferredValue:ut,useTransition:ut,useSyncExternalStore:ut,useId:ut,useHostTransitionStatus:ut,useFormState:ut,useActionState:ut,useOptimistic:ut,useMemoCache:ut,useCacheRefresh:ut};ll.useEffectEvent=ut;var Iy={readContext:qt,use:rc,useCallback:function(t,i){return nn().memoizedState=[t,i===void 0?null:i],t},useContext:qt,useEffect:cy,useImperativeHandle:function(t,i,a){a=a!=null?a.concat([t]):null,ac(4194308,4,my.bind(null,i,t),a)},useLayoutEffect:function(t,i){return ac(4194308,4,t,i)},useInsertionEffect:function(t,i){ac(4,2,t,i)},useMemo:function(t,i){var a=nn();i=i===void 0?null:i;var o=t();if(Bs){In(!0);try{t()}finally{In(!1)}}return a.memoizedState=[o,i],o},useReducer:function(t,i,a){var o=nn();if(a!==void 0){var h=a(i);if(Bs){In(!0);try{a(i)}finally{In(!1)}}}else h=i;return o.memoizedState=o.baseState=h,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:h},o.queue=t,t=t.dispatch=ib.bind(null,Ae,t),[o.memoizedState,t]},useRef:function(t){var i=nn();return t={current:t},i.memoizedState=t},useState:function(t){t=Ff(t);var i=t.queue,a=by.bind(null,Ae,i);return i.dispatch=a,[t.memoizedState,a]},useDebugValue:Yf,useDeferredValue:function(t,i){var a=nn();return Qf(a,t,i)},useTransition:function(){var t=Ff(!1);return t=vy.bind(null,Ae,t.queue,!0,!1),nn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,i,a){var o=Ae,h=nn();if(Ve){if(a===void 0)throw Error(s(407));a=a()}else{if(a=i(),We===null)throw Error(s(349));(Ce&127)!==0||Qg(o,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,cy($g.bind(null,o,d,t),[t]),o.flags|=2048,ja(9,{destroy:void 0},Xg.bind(null,o,d,a,i),null),a},useId:function(){var t=nn(),i=We.identifierPrefix;if(Ve){var a=Ri,o=wi;a=(o&~(1<<32-ft(o)-1)).toString(32)+a,i="_"+i+"R_"+a,a=nc++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=$S++,i="_"+i+"r_"+a.toString(32)+"_";return t.memoizedState=i},useHostTransitionStatus:$f,useFormState:sy,useActionState:sy,useOptimistic:function(t){var i=nn();i.memoizedState=i.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Jf.bind(null,Ae,!0,a),a.dispatch=i,[t,i]},useMemoCache:Bf,useCacheRefresh:function(){return nn().memoizedState=nb.bind(null,Ae)},useEffectEvent:function(t){var i=nn(),a={impl:t};return i.memoizedState=a,function(){if((Be&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Zf={readContext:qt,use:rc,useCallback:gy,useContext:qt,useEffect:Kf,useImperativeHandle:py,useInsertionEffect:fy,useLayoutEffect:dy,useMemo:yy,useReducer:sc,useRef:uy,useState:function(){return sc(Qi)},useDebugValue:Yf,useDeferredValue:function(t,i){var a=pt();return _y(a,Qe.memoizedState,t,i)},useTransition:function(){var t=sc(Qi)[0],i=pt().memoizedState;return[typeof t=="boolean"?t:al(t),i]},useSyncExternalStore:Yg,useId:Ay,useHostTransitionStatus:$f,useFormState:ay,useActionState:ay,useOptimistic:function(t,i){var a=pt();return Wg(a,Qe,t,i)},useMemoCache:Bf,useCacheRefresh:Sy};Zf.useEffectEvent=hy;var Cy={readContext:qt,use:rc,useCallback:gy,useContext:qt,useEffect:Kf,useImperativeHandle:py,useInsertionEffect:fy,useLayoutEffect:dy,useMemo:yy,useReducer:Hf,useRef:uy,useState:function(){return Hf(Qi)},useDebugValue:Yf,useDeferredValue:function(t,i){var a=pt();return Qe===null?Qf(a,t,i):_y(a,Qe.memoizedState,t,i)},useTransition:function(){var t=Hf(Qi)[0],i=pt().memoizedState;return[typeof t=="boolean"?t:al(t),i]},useSyncExternalStore:Yg,useId:Ay,useHostTransitionStatus:$f,useFormState:ly,useActionState:ly,useOptimistic:function(t,i){var a=pt();return Qe!==null?Wg(a,Qe,t,i):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Bf,useCacheRefresh:Sy};Cy.useEffectEvent=hy;function Wf(t,i,a,o){i=t.memoizedState,a=a(o,i),a=a==null?i:S({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var ed={enqueueSetState:function(t,i,a){t=t._reactInternals;var o=Sn(),h=Or(o);h.payload=i,a!=null&&(h.callback=a),i=xr(t,h,o),i!==null&&(hn(i,t,o),nl(i,t,o))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var o=Sn(),h=Or(o);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=xr(t,h,o),i!==null&&(hn(i,t,o),nl(i,t,o))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Sn(),o=Or(a);o.tag=2,i!=null&&(o.callback=i),i=xr(t,o,a),i!==null&&(hn(i,t,a),nl(i,t,a))}};function Ny(t,i,a,o,h,d,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,d,_):i.prototype&&i.prototype.isPureReactComponent?!Qo(a,o)||!Qo(h,d):!0}function Dy(t,i,a,o){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,o),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,o),i.state!==t&&ed.enqueueReplaceState(i,i.state,null)}function qs(t,i){var a=i;if("ref"in i){a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}if(t=t.defaultProps){a===i&&(a=S({},a));for(var h in t)a[h]===void 0&&(a[h]=t[h])}return a}function Oy(t){ju(t)}function xy(t){console.error(t)}function Vy(t){ju(t)}function uc(t,i){try{var a=t.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(o){setTimeout(function(){throw o})}}function My(t,i,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function td(t,i,a){return a=Or(a),a.tag=3,a.payload={element:null},a.callback=function(){uc(t,i)},a}function ky(t){return t=Or(t),t.tag=3,t}function Ly(t,i,a,o){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=o.value;t.payload=function(){return h(d)},t.callback=function(){My(i,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){My(i,a,o),typeof h!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var E=o.stack;this.componentDidCatch(o.value,{componentStack:E!==null?E:""})})}function rb(t,i,a,o,h){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(i=a.alternate,i!==null&&xa(i,a,h,!0),a=vn.current,a!==null){switch(a.tag){case 31:case 13:return Pn===null?Tc():a.alternate===null&&ct===0&&(ct=3),a.flags&=-257,a.flags|=65536,a.lanes=h,o===$u?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([o]):i.add(o),Rd(t,o,h)),!1;case 22:return a.flags|=65536,o===$u?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([o]):a.add(o)),Rd(t,o,h)),!1}throw Error(s(435,a.tag))}return Rd(t,o,h),Tc(),!1}if(Ve)return i=vn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,o!==Ef&&(t=Error(s(422),{cause:o}),Jo(Vn(t,a)))):(o!==Ef&&(i=Error(s(423),{cause:o}),Jo(Vn(i,a))),t=t.current.alternate,t.flags|=65536,h&=-h,t.lanes|=h,o=Vn(o,a),h=td(t.stateNode,o,h),Of(t,h),ct!==4&&(ct=2)),!1;var d=Error(s(520),{cause:o});if(d=Vn(d,a),gl===null?gl=[d]:gl.push(d),ct!==4&&(ct=2),i===null)return!0;o=Vn(o,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,t=h&-h,a.lanes|=t,t=td(a.stateNode,o,t),Of(a,t),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Ur===null||!Ur.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=ky(h),Ly(h,t,a,o),Of(a,h),!1}a=a.return}while(a!==null);return!1}var nd=Error(s(461)),wt=!1;function Ht(t,i,a,o){i.child=t===null?jg(i,null,a,o):js(i,t.child,a,o)}function Py(t,i,a,o,h){a=a.render;var d=i.ref;if("ref"in o){var _={};for(var E in o)E!=="ref"&&(_[E]=o[E])}else _=o;return Ls(i),o=Pf(t,i,a,_,d,h),E=Uf(),t!==null&&!wt?(zf(t,i,h),Xi(t,i,h)):(Ve&&E&&_f(i),i.flags|=1,Ht(t,i,o,h),i.child)}function Uy(t,i,a,o,h){if(t===null){var d=a.type;return typeof d=="function"&&!pf(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,zy(t,i,d,o,h)):(t=Fu(a.type,null,o,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(d=t.child,!cd(t,h)){var _=d.memoizedProps;if(a=a.compare,a=a!==null?a:Qo,a(_,o)&&t.ref===i.ref)return Xi(t,i,h)}return i.flags|=1,t=Hi(d,o),t.ref=i.ref,t.return=i,i.child=t}function zy(t,i,a,o,h){if(t!==null){var d=t.memoizedProps;if(Qo(d,o)&&t.ref===i.ref)if(wt=!1,i.pendingProps=o=d,cd(t,h))(t.flags&131072)!==0&&(wt=!0);else return i.lanes=t.lanes,Xi(t,i,h)}return id(t,i,a,o,h)}function jy(t,i,a,o){var h=o.children,d=t!==null?t.memoizedState:null;if(t===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,t!==null){for(o=i.child=t.child,h=0;o!==null;)h=h|o.lanes|o.childLanes,o=o.sibling;o=h&~d}else o=0,i.child=null;return By(t,i,d,a,o)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},t!==null&&Qu(i,d!==null?d.cachePool:null),d!==null?Hg(i,d):Vf(),Fg(i);else return o=i.lanes=536870912,By(t,i,d!==null?d.baseLanes|a:a,a,o)}else d!==null?(Qu(i,d.cachePool),Hg(i,d),Mr(),i.memoizedState=null):(t!==null&&Qu(i,null),Vf(),Mr());return Ht(t,i,h,a),i.child}function ul(t,i){return t!==null&&t.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function By(t,i,a,o,h){var d=If();return d=d===null?null:{parent:St._currentValue,pool:d},i.memoizedState={baseLanes:a,cachePool:d},t!==null&&Qu(i,null),Vf(),Fg(i),t!==null&&xa(t,i,o,!0),i.childLanes=h,null}function cc(t,i){return i=fc({mode:i.mode,children:i.children},t.mode),i.ref=t.ref,t.child=i,i.return=t,i}function qy(t,i,a){return js(i,t.child,null,a),t=cc(i,i.pendingProps),t.flags|=2,En(i),i.memoizedState=null,t}function sb(t,i,a){var o=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,t===null){if(Ve){if(o.mode==="hidden")return t=cc(i,o),i.lanes=536870912,ul(null,t);if(kf(i),(t=tt)?(t=ev(t,Ln),t=t!==null&&t.data==="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Rr!==null?{id:wi,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=wg(t),a.return=i,i.child=a,Bt=i,tt=null)):t=null,t===null)throw Cr(i);return i.lanes=536870912,null}return cc(i,o)}var d=t.memoizedState;if(d!==null){var _=d.dehydrated;if(kf(i),h)if(i.flags&256)i.flags&=-257,i=qy(t,i,a);else if(i.memoizedState!==null)i.child=t.child,i.flags|=128,i=null;else throw Error(s(558));else if(wt||xa(t,i,a,!1),h=(a&t.childLanes)!==0,wt||h){if(o=We,o!==null&&(_=Do(o,a),_!==0&&_!==d.retryLane))throw d.retryLane=_,xs(t,_),hn(o,t,_),nd;Tc(),i=qy(t,i,a)}else t=d.treeContext,tt=Un(_.nextSibling),Bt=i,Ve=!0,Ir=null,Ln=!1,t!==null&&Cg(i,t),i=cc(i,o),i.flags|=4096;return i}return t=Hi(t.child,{mode:o.mode,children:o.children}),t.ref=i.ref,i.child=t,t.return=i,t}function hc(t,i){var a=i.ref;if(a===null)t!==null&&t.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(i.flags|=4194816)}}function id(t,i,a,o,h){return Ls(i),a=Pf(t,i,a,o,void 0,h),o=Uf(),t!==null&&!wt?(zf(t,i,h),Xi(t,i,h)):(Ve&&o&&_f(i),i.flags|=1,Ht(t,i,a,h),i.child)}function Hy(t,i,a,o,h,d){return Ls(i),i.updateQueue=null,a=Kg(i,o,a,h),Gg(t),o=Uf(),t!==null&&!wt?(zf(t,i,d),Xi(t,i,d)):(Ve&&o&&_f(i),i.flags|=1,Ht(t,i,a,d),i.child)}function Fy(t,i,a,o,h){if(Ls(i),i.stateNode===null){var d=Ca,_=a.contextType;typeof _=="object"&&_!==null&&(d=qt(_)),d=new a(o,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ed,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=o,d.state=i.memoizedState,d.refs={},Nf(i),_=a.contextType,d.context=typeof _=="object"&&_!==null?qt(_):Ca,d.state=i.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Wf(i,a,_,o),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(_=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),_!==d.state&&ed.enqueueReplaceState(d,d.state,null),rl(i,o,d,h),il(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!0}else if(t===null){d=i.stateNode;var E=i.memoizedProps,I=qs(a,E);d.props=I;var z=d.context,F=a.contextType;_=Ca,typeof F=="object"&&F!==null&&(_=qt(F));var Q=a.getDerivedStateFromProps;F=typeof Q=="function"||typeof d.getSnapshotBeforeUpdate=="function",E=i.pendingProps!==E,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(E||z!==_)&&Dy(i,d,o,_),Dr=!1;var j=i.memoizedState;d.state=j,rl(i,o,d,h),il(),z=i.memoizedState,E||j!==z||Dr?(typeof Q=="function"&&(Wf(i,a,Q,o),z=i.memoizedState),(I=Dr||Ny(i,a,I,o,j,z,_))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=o,i.memoizedState=z),d.props=o,d.state=z,d.context=_,o=I):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),o=!1)}else{d=i.stateNode,Df(t,i),_=i.memoizedProps,F=qs(a,_),d.props=F,Q=i.pendingProps,j=d.context,z=a.contextType,I=Ca,typeof z=="object"&&z!==null&&(I=qt(z)),E=a.getDerivedStateFromProps,(z=typeof E=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(_!==Q||j!==I)&&Dy(i,d,o,I),Dr=!1,j=i.memoizedState,d.state=j,rl(i,o,d,h),il();var H=i.memoizedState;_!==Q||j!==H||Dr||t!==null&&t.dependencies!==null&&Ku(t.dependencies)?(typeof E=="function"&&(Wf(i,a,E,o),H=i.memoizedState),(F=Dr||Ny(i,a,F,o,j,H,I)||t!==null&&t.dependencies!==null&&Ku(t.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,H,I),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,H,I)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(i.flags|=1024),i.memoizedProps=o,i.memoizedState=H),d.props=o,d.state=H,d.context=I,o=F):(typeof d.componentDidUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&j===t.memoizedState||(i.flags|=1024),o=!1)}return d=o,hc(t,i),o=(i.flags&128)!==0,d||o?(d=i.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,t!==null&&o?(i.child=js(i,t.child,null,h),i.child=js(i,null,a,h)):Ht(t,i,a,h),i.memoizedState=d.state,t=i.child):t=Xi(t,i,h),t}function Gy(t,i,a,o){return Ms(),i.flags|=256,Ht(t,i,a,o),i.child}var rd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function sd(t){return{baseLanes:t,cachePool:Mg()}}function ad(t,i,a){return t=t!==null?t.childLanes&~a:0,i&&(t|=An),t}function Ky(t,i,a){var o=i.pendingProps,h=!1,d=(i.flags&128)!==0,_;if((_=d)||(_=t!==null&&t.memoizedState===null?!1:(mt.current&2)!==0),_&&(h=!0,i.flags&=-129),_=(i.flags&32)!==0,i.flags&=-33,t===null){if(Ve){if(h?Vr(i):Mr(),(t=tt)?(t=ev(t,Ln),t=t!==null&&t.data!=="&"?t:null,t!==null&&(i.memoizedState={dehydrated:t,treeContext:Rr!==null?{id:wi,overflow:Ri}:null,retryLane:536870912,hydrationErrors:null},a=wg(t),a.return=i,i.child=a,Bt=i,tt=null)):t=null,t===null)throw Cr(i);return qd(t)?i.lanes=32:i.lanes=536870912,null}var E=o.children;return o=o.fallback,h?(Mr(),h=i.mode,E=fc({mode:"hidden",children:E},h),o=Vs(o,h,a,null),E.return=i,o.return=i,E.sibling=o,i.child=E,o=i.child,o.memoizedState=sd(a),o.childLanes=ad(t,_,a),i.memoizedState=rd,ul(null,o)):(Vr(i),od(i,E))}var I=t.memoizedState;if(I!==null&&(E=I.dehydrated,E!==null)){if(d)i.flags&256?(Vr(i),i.flags&=-257,i=ld(t,i,a)):i.memoizedState!==null?(Mr(),i.child=t.child,i.flags|=128,i=null):(Mr(),E=o.fallback,h=i.mode,o=fc({mode:"visible",children:o.children},h),E=Vs(E,h,a,null),E.flags|=2,o.return=i,E.return=i,o.sibling=E,i.child=o,js(i,t.child,null,a),o=i.child,o.memoizedState=sd(a),o.childLanes=ad(t,_,a),i.memoizedState=rd,i=ul(null,o));else if(Vr(i),qd(E)){if(_=E.nextSibling&&E.nextSibling.dataset,_)var z=_.dgst;_=z,o=Error(s(419)),o.stack="",o.digest=_,Jo({value:o,source:null,stack:null}),i=ld(t,i,a)}else if(wt||xa(t,i,a,!1),_=(a&t.childLanes)!==0,wt||_){if(_=We,_!==null&&(o=Do(_,a),o!==0&&o!==I.retryLane))throw I.retryLane=o,xs(t,o),hn(_,t,o),nd;Bd(E)||Tc(),i=ld(t,i,a)}else Bd(E)?(i.flags|=192,i.child=t.child,i=null):(t=I.treeContext,tt=Un(E.nextSibling),Bt=i,Ve=!0,Ir=null,Ln=!1,t!==null&&Cg(i,t),i=od(i,o.children),i.flags|=4096);return i}return h?(Mr(),E=o.fallback,h=i.mode,I=t.child,z=I.sibling,o=Hi(I,{mode:"hidden",children:o.children}),o.subtreeFlags=I.subtreeFlags&65011712,z!==null?E=Hi(z,E):(E=Vs(E,h,a,null),E.flags|=2),E.return=i,o.return=i,o.sibling=E,i.child=o,ul(null,o),o=i.child,E=t.child.memoizedState,E===null?E=sd(a):(h=E.cachePool,h!==null?(I=St._currentValue,h=h.parent!==I?{parent:I,pool:I}:h):h=Mg(),E={baseLanes:E.baseLanes|a,cachePool:h}),o.memoizedState=E,o.childLanes=ad(t,_,a),i.memoizedState=rd,ul(t.child,o)):(Vr(i),a=t.child,t=a.sibling,a=Hi(a,{mode:"visible",children:o.children}),a.return=i,a.sibling=null,t!==null&&(_=i.deletions,_===null?(i.deletions=[t],i.flags|=16):_.push(t)),i.child=a,i.memoizedState=null,a)}function od(t,i){return i=fc({mode:"visible",children:i},t.mode),i.return=t,t.child=i}function fc(t,i){return t=_n(22,t,null,i),t.lanes=0,t}function ld(t,i,a){return js(i,t.child,null,a),t=od(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function Yy(t,i,a){t.lanes|=i;var o=t.alternate;o!==null&&(o.lanes|=i),Sf(t.return,i,a)}function ud(t,i,a,o,h,d){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:h,treeForkCount:d}:(_.isBackwards=i,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=h,_.treeForkCount=d)}function Qy(t,i,a){var o=i.pendingProps,h=o.revealOrder,d=o.tail;o=o.children;var _=mt.current,E=(_&2)!==0;if(E?(_=_&1|2,i.flags|=128):_&=1,ne(mt,_),Ht(t,i,o,a),o=Ve?$o:0,!E&&t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yy(t,a,i);else if(t.tag===19)Yy(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&ec(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),ud(i,!1,h,a,d,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&ec(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}ud(i,!0,a,null,d,o);break;case"together":ud(i,!1,null,null,void 0,o);break;default:i.memoizedState=null}return i.child}function Xi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Pr|=i.lanes,(a&i.childLanes)===0)if(t!==null){if(xa(t,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(t!==null&&i.child!==t.child)throw Error(s(153));if(i.child!==null){for(t=i.child,a=Hi(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Hi(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function cd(t,i){return(t.lanes&i)!==0?!0:(t=t.dependencies,!!(t!==null&&Ku(t)))}function ab(t,i,a){switch(i.tag){case 3:Ot(i,i.stateNode.containerInfo),Nr(i,St,t.memoizedState.cache),Ms();break;case 27:case 5:ms(i);break;case 4:Ot(i,i.stateNode.containerInfo);break;case 10:Nr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,kf(i),null;break;case 13:var o=i.memoizedState;if(o!==null)return o.dehydrated!==null?(Vr(i),i.flags|=128,null):(a&i.child.childLanes)!==0?Ky(t,i,a):(Vr(i),t=Xi(t,i,a),t!==null?t.sibling:null);Vr(i);break;case 19:var h=(t.flags&128)!==0;if(o=(a&i.childLanes)!==0,o||(xa(t,i,a,!1),o=(a&i.childLanes)!==0),h){if(o)return Qy(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ne(mt,mt.current),o)break;return null;case 22:return i.lanes=0,jy(t,i,a,i.pendingProps);case 24:Nr(i,St,t.memoizedState.cache)}return Xi(t,i,a)}function Xy(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps)wt=!0;else{if(!cd(t,a)&&(i.flags&128)===0)return wt=!1,ab(t,i,a);wt=(t.flags&131072)!==0}else wt=!1,Ve&&(i.flags&1048576)!==0&&Ig(i,$o,i.index);switch(i.lanes=0,i.tag){case 16:e:{var o=i.pendingProps;if(t=Us(i.elementType),i.type=t,typeof t=="function")pf(t)?(o=qs(t,o),i.tag=1,i=Fy(null,i,t,o,a)):(i.tag=0,i=id(null,i,t,o,a));else{if(t!=null){var h=t.$$typeof;if(h===Je){i.tag=11,i=Py(null,i,t,o,a);break e}else if(h===N){i.tag=14,i=Uy(null,i,t,o,a);break e}}throw i=rt(t)||t,Error(s(306,i,""))}}return i;case 0:return id(t,i,i.type,i.pendingProps,a);case 1:return o=i.type,h=qs(o,i.pendingProps),Fy(t,i,o,h,a);case 3:e:{if(Ot(i,i.stateNode.containerInfo),t===null)throw Error(s(387));o=i.pendingProps;var d=i.memoizedState;h=d.element,Df(t,i),rl(i,o,null,a);var _=i.memoizedState;if(o=_.cache,Nr(i,St,o),o!==d.cache&&bf(i,[St],a,!0),il(),o=_.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:_.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=Gy(t,i,o,a);break e}else if(o!==h){h=Vn(Error(s(424)),i),Jo(h),i=Gy(t,i,o,a);break e}else{switch(t=i.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(tt=Un(t.firstChild),Bt=i,Ve=!0,Ir=null,Ln=!0,a=jg(i,null,o,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Ms(),o===h){i=Xi(t,i,a);break e}Ht(t,i,o,a)}i=i.child}return i;case 26:return hc(t,i),t===null?(a=av(i.type,null,i.pendingProps,null))?i.memoizedState=a:Ve||(a=i.type,t=i.pendingProps,o=Cc(Se.current).createElement(a),o[Et]=i,o[kt]=t,Ft(o,a,t),Tt(o),i.stateNode=o):i.memoizedState=av(i.type,t.memoizedProps,i.pendingProps,t.memoizedState),null;case 27:return ms(i),t===null&&Ve&&(o=i.stateNode=iv(i.type,i.pendingProps,Se.current),Bt=i,Ln=!0,h=tt,qr(i.type)?(Hd=h,tt=Un(o.firstChild)):tt=h),Ht(t,i,i.pendingProps.children,a),hc(t,i),t===null&&(i.flags|=4194304),i.child;case 5:return t===null&&Ve&&((h=o=tt)&&(o=Lb(o,i.type,i.pendingProps,Ln),o!==null?(i.stateNode=o,Bt=i,tt=Un(o.firstChild),Ln=!1,h=!0):h=!1),h||Cr(i)),ms(i),h=i.type,d=i.pendingProps,_=t!==null?t.memoizedProps:null,o=d.children,Ud(h,d)?o=null:_!==null&&Ud(h,_)&&(i.flags|=32),i.memoizedState!==null&&(h=Pf(t,i,JS,null,null,a),bl._currentValue=h),hc(t,i),Ht(t,i,o,a),i.child;case 6:return t===null&&Ve&&((t=a=tt)&&(a=Pb(a,i.pendingProps,Ln),a!==null?(i.stateNode=a,Bt=i,tt=null,t=!0):t=!1),t||Cr(i)),null;case 13:return Ky(t,i,a);case 4:return Ot(i,i.stateNode.containerInfo),o=i.pendingProps,t===null?i.child=js(i,null,o,a):Ht(t,i,o,a),i.child;case 11:return Py(t,i,i.type,i.pendingProps,a);case 7:return Ht(t,i,i.pendingProps,a),i.child;case 8:return Ht(t,i,i.pendingProps.children,a),i.child;case 12:return Ht(t,i,i.pendingProps.children,a),i.child;case 10:return o=i.pendingProps,Nr(i,i.type,o.value),Ht(t,i,o.children,a),i.child;case 9:return h=i.type._context,o=i.pendingProps.children,Ls(i),h=qt(h),o=o(h),i.flags|=1,Ht(t,i,o,a),i.child;case 14:return Uy(t,i,i.type,i.pendingProps,a);case 15:return zy(t,i,i.type,i.pendingProps,a);case 19:return Qy(t,i,a);case 31:return sb(t,i,a);case 22:return jy(t,i,a,i.pendingProps);case 24:return Ls(i),o=qt(St),t===null?(h=If(),h===null&&(h=We,d=wf(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:o,cache:h},Nf(i),Nr(i,St,h)):((t.lanes&a)!==0&&(Df(t,i),rl(i,null,null,a),il()),h=t.memoizedState,d=i.memoizedState,h.parent!==o?(h={parent:o,cache:o},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),Nr(i,St,o)):(o=d.cache,Nr(i,St,o),o!==h.cache&&bf(i,[St],a,!0))),Ht(t,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(s(156,i.tag))}function $i(t){t.flags|=4}function hd(t,i,a,o,h){if((i=(t.mode&32)!==0)&&(i=!1),i){if(t.flags|=16777216,(h&335544128)===h)if(t.stateNode.complete)t.flags|=8192;else if(A_())t.flags|=8192;else throw zs=$u,Cf}else t.flags&=-16777217}function $y(t,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!hv(i))if(A_())t.flags|=8192;else throw zs=$u,Cf}function dc(t,i){i!==null&&(t.flags|=4),t.flags&16384&&(i=t.tag!==22?vu():536870912,t.lanes|=i,Fa|=i)}function cl(t,i){if(!Ve)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function nt(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags&65011712,o|=h.flags&65011712,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,o|=h.subtreeFlags,o|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=o,t.childLanes=a,i}function ob(t,i,a){var o=i.pendingProps;switch(vf(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return nt(i),null;case 1:return nt(i),null;case 3:return a=i.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),i.memoizedState.cache!==o&&(i.flags|=2048),Ki(St),st(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Oa(i)?$i(i):t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Tf())),nt(i),null;case 26:var h=i.type,d=i.memoizedState;return t===null?($i(i),d!==null?(nt(i),$y(i,d)):(nt(i),hd(i,h,null,o,a))):d?d!==t.memoizedState?($i(i),nt(i),$y(i,d)):(nt(i),i.flags&=-16777217):(t=t.memoizedProps,t!==o&&$i(i),nt(i),hd(i,h,t,o,a)),null;case 27:if(ua(i),a=Se.current,h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&$i(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return nt(i),null}t=se.current,Oa(i)?Ng(i):(t=iv(h,o,a),i.stateNode=t,$i(i))}return nt(i),null;case 5:if(ua(i),h=i.type,t!==null&&i.stateNode!=null)t.memoizedProps!==o&&$i(i);else{if(!o){if(i.stateNode===null)throw Error(s(166));return nt(i),null}if(d=se.current,Oa(i))Ng(i);else{var _=Cc(Se.current);switch(d){case 1:d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":d=_.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":d=_.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":d=_.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?_.createElement(h,{is:o.is}):_.createElement(h)}}d[Et]=i,d[kt]=o;e:for(_=i.child;_!==null;){if(_.tag===5||_.tag===6)d.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===i)break e;for(;_.sibling===null;){if(_.return===null||_.return===i)break e;_=_.return}_.sibling.return=_.return,_=_.sibling}i.stateNode=d;e:switch(Ft(d,h,o),h){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&$i(i)}}return nt(i),hd(i,i.type,t===null?null:t.memoizedProps,i.pendingProps,a),null;case 6:if(t&&i.stateNode!=null)t.memoizedProps!==o&&$i(i);else{if(typeof o!="string"&&i.stateNode===null)throw Error(s(166));if(t=Se.current,Oa(i)){if(t=i.stateNode,a=i.memoizedProps,o=null,h=Bt,h!==null)switch(h.tag){case 27:case 5:o=h.memoizedProps}t[Et]=i,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||K_(t.nodeValue,a)),t||Cr(i,!0)}else t=Cc(t).createTextNode(o),t[Et]=i,i.stateNode=t}return nt(i),null;case 31:if(a=i.memoizedState,t===null||t.memoizedState!==null){if(o=Oa(i),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=i.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Et]=i}else Ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nt(i),t=!1}else a=Tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return i.flags&256?(En(i),i):(En(i),null);if((i.flags&128)!==0)throw Error(s(558))}return nt(i),null;case 13:if(o=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(h=Oa(i),o!==null&&o.dehydrated!==null){if(t===null){if(!h)throw Error(s(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(s(317));h[Et]=i}else Ms(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;nt(i),h=!1}else h=Tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(En(i),i):(En(i),null)}return En(i),(i.flags&128)!==0?(i.lanes=a,i):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=i.child,h=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(h=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==h&&(o.flags|=2048)),a!==t&&a&&(i.child.flags|=8192),dc(i,i.updateQueue),nt(i),null);case 4:return st(),t===null&&Vd(i.stateNode.containerInfo),nt(i),null;case 10:return Ki(i.type),nt(i),null;case 19:if(X(mt),o=i.memoizedState,o===null)return nt(i),null;if(h=(i.flags&128)!==0,d=o.rendering,d===null)if(h)cl(o,!1);else{if(ct!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(d=ec(t),d!==null){for(i.flags|=128,cl(o,!1),t=d.updateQueue,i.updateQueue=t,dc(i,t),i.subtreeFlags=0,t=a,a=i.child;a!==null;)bg(a,t),a=a.sibling;return ne(mt,mt.current&1|2),Ve&&Fi(i,o.treeForkCount),i.child}t=t.sibling}o.tail!==null&&en()>_c&&(i.flags|=128,h=!0,cl(o,!1),i.lanes=4194304)}else{if(!h)if(t=ec(d),t!==null){if(i.flags|=128,h=!0,t=t.updateQueue,i.updateQueue=t,dc(i,t),cl(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!Ve)return nt(i),null}else 2*en()-o.renderingStartTime>_c&&a!==536870912&&(i.flags|=128,h=!0,cl(o,!1),i.lanes=4194304);o.isBackwards?(d.sibling=i.child,i.child=d):(t=o.last,t!==null?t.sibling=d:i.child=d,o.last=d)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=en(),t.sibling=null,a=mt.current,ne(mt,h?a&1|2:a&1),Ve&&Fi(i,o.treeForkCount),t):(nt(i),null);case 22:case 23:return En(i),Mf(),o=i.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(i.flags|=8192):o&&(i.flags|=8192),o?(a&536870912)!==0&&(i.flags&128)===0&&(nt(i),i.subtreeFlags&6&&(i.flags|=8192)):nt(i),a=i.updateQueue,a!==null&&dc(i,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),o!==a&&(i.flags|=2048),t!==null&&X(Ps),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Ki(St),nt(i),null;case 25:return null;case 30:return null}throw Error(s(156,i.tag))}function lb(t,i){switch(vf(i),i.tag){case 1:return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Ki(St),st(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 26:case 27:case 5:return ua(i),null;case 31:if(i.memoizedState!==null){if(En(i),i.alternate===null)throw Error(s(340));Ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 13:if(En(i),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(s(340));Ms()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return X(mt),null;case 4:return st(),null;case 10:return Ki(i.type),null;case 22:case 23:return En(i),Mf(),t!==null&&X(Ps),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 24:return Ki(St),null;case 25:return null;default:return null}}function Jy(t,i){switch(vf(i),i.tag){case 3:Ki(St),st();break;case 26:case 27:case 5:ua(i);break;case 4:st();break;case 31:i.memoizedState!==null&&En(i);break;case 13:En(i);break;case 19:X(mt);break;case 10:Ki(i.type);break;case 22:case 23:En(i),Mf(),t!==null&&X(Ps);break;case 24:Ki(St)}}function hl(t,i){try{var a=i.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var h=o.next;a=h;do{if((a.tag&t)===t){o=void 0;var d=a.create,_=a.inst;o=d(),_.destroy=o}a=a.next}while(a!==h)}}catch(E){Ke(i,i.return,E)}}function kr(t,i,a){try{var o=i.updateQueue,h=o!==null?o.lastEffect:null;if(h!==null){var d=h.next;o=d;do{if((o.tag&t)===t){var _=o.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,h=i;var I=a,z=E;try{z()}catch(F){Ke(h,I,F)}}}o=o.next}while(o!==d)}}catch(F){Ke(i,i.return,F)}}function Zy(t){var i=t.updateQueue;if(i!==null){var a=t.stateNode;try{qg(i,a)}catch(o){Ke(t,t.return,o)}}}function Wy(t,i,a){a.props=qs(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){Ke(t,i,o)}}function fl(t,i){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(h){Ke(t,i,h)}}function Ii(t,i){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(h){Ke(t,i,h)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Ke(t,i,h)}else a.current=null}function e_(t){var i=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(h){Ke(t,t.return,h)}}function fd(t,i,a){try{var o=t.stateNode;Db(o,t.type,a,i),o[kt]=i}catch(h){Ke(t,t.return,h)}}function t_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qr(t.type)||t.tag===4}function dd(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||t_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function md(t,i,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(t),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Qn));else if(o!==4&&(o===27&&qr(t.type)&&(a=t.stateNode,i=null),t=t.child,t!==null))for(md(t,i,a),t=t.sibling;t!==null;)md(t,i,a),t=t.sibling}function mc(t,i,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(o!==4&&(o===27&&qr(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(mc(t,i,a),t=t.sibling;t!==null;)mc(t,i,a),t=t.sibling}function n_(t){var i=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Ft(i,o,a),i[Et]=t,i[kt]=a}catch(d){Ke(t,t.return,d)}}var Ji=!1,Rt=!1,pd=!1,i_=typeof WeakSet=="function"?WeakSet:Set,Pt=null;function ub(t,i){if(t=t.containerInfo,Ld=kc,t=pg(t),lf(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var h=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break e}var _=0,E=-1,I=-1,z=0,F=0,Q=t,j=null;t:for(;;){for(var H;Q!==a||h!==0&&Q.nodeType!==3||(E=_+h),Q!==d||o!==0&&Q.nodeType!==3||(I=_+o),Q.nodeType===3&&(_+=Q.nodeValue.length),(H=Q.firstChild)!==null;)j=Q,Q=H;for(;;){if(Q===t)break t;if(j===a&&++z===h&&(E=_),j===d&&++F===o&&(I=_),(H=Q.nextSibling)!==null)break;Q=j,j=Q.parentNode}Q=H}a=E===-1||I===-1?null:{start:E,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Pd={focusedElem:t,selectionRange:a},kc=!1,Pt=i;Pt!==null;)if(i=Pt,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Pt=t;else for(;Pt!==null;){switch(i=Pt,d=i.alternate,t=i.flags,i.tag){case 0:if((t&4)!==0&&(t=i.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)h=t[a],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&d!==null){t=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,o=a.stateNode;try{var ae=qs(a.type,h);t=o.getSnapshotBeforeUpdate(ae,d),o.__reactInternalSnapshotBeforeUpdate=t}catch(fe){Ke(a,a.return,fe)}}break;case 3:if((t&1024)!==0){if(t=i.stateNode.containerInfo,a=t.nodeType,a===9)jd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":jd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=i.sibling,t!==null){t.return=i.return,Pt=t;break}Pt=i.return}}function r_(t,i,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Wi(t,a),o&4&&hl(5,a);break;case 1:if(Wi(t,a),o&4)if(t=a.stateNode,i===null)try{t.componentDidMount()}catch(_){Ke(a,a.return,_)}else{var h=qs(a.type,i.memoizedProps);i=i.memoizedState;try{t.componentDidUpdate(h,i,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Ke(a,a.return,_)}}o&64&&Zy(a),o&512&&fl(a,a.return);break;case 3:if(Wi(t,a),o&64&&(t=a.updateQueue,t!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{qg(t,i)}catch(_){Ke(a,a.return,_)}}break;case 27:i===null&&o&4&&n_(a);case 26:case 5:Wi(t,a),i===null&&o&4&&e_(a),o&512&&fl(a,a.return);break;case 12:Wi(t,a);break;case 31:Wi(t,a),o&4&&o_(t,a);break;case 13:Wi(t,a),o&4&&l_(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=_b.bind(null,a),Ub(t,a))));break;case 22:if(o=a.memoizedState!==null||Ji,!o){i=i!==null&&i.memoizedState!==null||Rt,h=Ji;var d=Rt;Ji=o,(Rt=i)&&!d?er(t,a,(a.subtreeFlags&8772)!==0):Wi(t,a),Ji=h,Rt=d}break;case 30:break;default:Wi(t,a)}}function s_(t){var i=t.alternate;i!==null&&(t.alternate=null,s_(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&ma(i)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var ot=null,on=!1;function Zi(t,i,a){for(a=a.child;a!==null;)a_(t,i,a),a=a.sibling}function a_(t,i,a){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(Fn,a)}catch{}switch(a.tag){case 26:Rt||Ii(a,i),Zi(t,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Rt||Ii(a,i);var o=ot,h=on;qr(a.type)&&(ot=a.stateNode,on=!1),Zi(t,i,a),Tl(a.stateNode),ot=o,on=h;break;case 5:Rt||Ii(a,i);case 6:if(o=ot,h=on,ot=null,Zi(t,i,a),ot=o,on=h,ot!==null)if(on)try{(ot.nodeType===9?ot.body:ot.nodeName==="HTML"?ot.ownerDocument.body:ot).removeChild(a.stateNode)}catch(d){Ke(a,i,d)}else try{ot.removeChild(a.stateNode)}catch(d){Ke(a,i,d)}break;case 18:ot!==null&&(on?(t=ot,Z_(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Za(t)):Z_(ot,a.stateNode));break;case 4:o=ot,h=on,ot=a.stateNode.containerInfo,on=!0,Zi(t,i,a),ot=o,on=h;break;case 0:case 11:case 14:case 15:kr(2,a,i),Rt||kr(4,a,i),Zi(t,i,a);break;case 1:Rt||(Ii(a,i),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Wy(a,i,o)),Zi(t,i,a);break;case 21:Zi(t,i,a);break;case 22:Rt=(o=Rt)||a.memoizedState!==null,Zi(t,i,a),Rt=o;break;default:Zi(t,i,a)}}function o_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Za(t)}catch(a){Ke(i,i.return,a)}}}function l_(t,i){if(i.memoizedState===null&&(t=i.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Za(t)}catch(a){Ke(i,i.return,a)}}function cb(t){switch(t.tag){case 31:case 13:case 19:var i=t.stateNode;return i===null&&(i=t.stateNode=new i_),i;case 22:return t=t.stateNode,i=t._retryCache,i===null&&(i=t._retryCache=new i_),i;default:throw Error(s(435,t.tag))}}function pc(t,i){var a=cb(t);i.forEach(function(o){if(!a.has(o)){a.add(o);var h=vb.bind(null,t,o);o.then(h,h)}})}function ln(t,i){var a=i.deletions;if(a!==null)for(var o=0;o<a.length;o++){var h=a[o],d=t,_=i,E=_;e:for(;E!==null;){switch(E.tag){case 27:if(qr(E.type)){ot=E.stateNode,on=!1;break e}break;case 5:ot=E.stateNode,on=!1;break e;case 3:case 4:ot=E.stateNode.containerInfo,on=!0;break e}E=E.return}if(ot===null)throw Error(s(160));a_(d,_,h),ot=null,on=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)u_(i,t),i=i.sibling}var ei=null;function u_(t,i){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:ln(i,t),un(t),o&4&&(kr(3,t,t.return),hl(3,t),kr(5,t,t.return));break;case 1:ln(i,t),un(t),o&512&&(Rt||a===null||Ii(a,a.return)),o&64&&Ji&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var h=ei;if(ln(i,t),un(t),o&512&&(Rt||a===null||Ii(a,a.return)),o&4){var d=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,h=h.ownerDocument||h;t:switch(o){case"title":d=h.getElementsByTagName("title")[0],(!d||d[di]||d[Et]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(o),h.head.insertBefore(d,h.querySelector("head > title"))),Ft(d,o,a),d[Et]=t,Tt(d),o=d;break e;case"link":var _=uv("link","href",h).get(o+(a.href||""));if(_){for(var E=0;E<_.length;E++)if(d=_[E],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(E,1);break t}}d=h.createElement(o),Ft(d,o,a),h.head.appendChild(d);break;case"meta":if(_=uv("meta","content",h).get(o+(a.content||""))){for(E=0;E<_.length;E++)if(d=_[E],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(E,1);break t}}d=h.createElement(o),Ft(d,o,a),h.head.appendChild(d);break;default:throw Error(s(468,o))}d[Et]=t,Tt(d),o=d}t.stateNode=o}else cv(h,t.type,t.stateNode);else t.stateNode=lv(h,o,t.memoizedProps);else d!==o?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,o===null?cv(h,t.type,t.stateNode):lv(h,o,t.memoizedProps)):o===null&&t.stateNode!==null&&fd(t,t.memoizedProps,a.memoizedProps)}break;case 27:ln(i,t),un(t),o&512&&(Rt||a===null||Ii(a,a.return)),a!==null&&o&4&&fd(t,t.memoizedProps,a.memoizedProps);break;case 5:if(ln(i,t),un(t),o&512&&(Rt||a===null||Ii(a,a.return)),t.flags&32){h=t.stateNode;try{an(h,"")}catch(ae){Ke(t,t.return,ae)}}o&4&&t.stateNode!=null&&(h=t.memoizedProps,fd(t,h,a!==null?a.memoizedProps:h)),o&1024&&(pd=!0);break;case 6:if(ln(i,t),un(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ae){Ke(t,t.return,ae)}}break;case 3:if(Oc=null,h=ei,ei=Nc(i.containerInfo),ln(i,t),ei=h,un(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Za(i.containerInfo)}catch(ae){Ke(t,t.return,ae)}pd&&(pd=!1,c_(t));break;case 4:o=ei,ei=Nc(t.stateNode.containerInfo),ln(i,t),un(t),ei=o;break;case 12:ln(i,t),un(t);break;case 31:ln(i,t),un(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,pc(t,o)));break;case 13:ln(i,t),un(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(yc=en()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,pc(t,o)));break;case 22:h=t.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,z=Ji,F=Rt;if(Ji=z||h,Rt=F||I,ln(i,t),Rt=F,Ji=z,un(t),o&8192)e:for(i=t.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||I||Ji||Rt||Hs(t)),a=null,i=t;;){if(i.tag===5||i.tag===26){if(a===null){I=a=i;try{if(d=I.stateNode,h)_=d.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{E=I.stateNode;var Q=I.memoizedProps.style,j=Q!=null&&Q.hasOwnProperty("display")?Q.display:null;E.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(ae){Ke(I,I.return,ae)}}}else if(i.tag===6){if(a===null){I=i;try{I.stateNode.nodeValue=h?"":I.memoizedProps}catch(ae){Ke(I,I.return,ae)}}}else if(i.tag===18){if(a===null){I=i;try{var H=I.stateNode;h?W_(H,!0):W_(I.stateNode,!1)}catch(ae){Ke(I,I.return,ae)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===t)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;i.sibling===null;){if(i.return===null||i.return===t)break e;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,pc(t,a))));break;case 19:ln(i,t),un(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,pc(t,o)));break;case 30:break;case 21:break;default:ln(i,t),un(t)}}function un(t){var i=t.flags;if(i&2){try{for(var a,o=t.return;o!==null;){if(t_(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var h=a.stateNode,d=dd(t);mc(t,d,h);break;case 5:var _=a.stateNode;a.flags&32&&(an(_,""),a.flags&=-33);var E=dd(t);mc(t,E,_);break;case 3:case 4:var I=a.stateNode.containerInfo,z=dd(t);md(t,z,I);break;default:throw Error(s(161))}}catch(F){Ke(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function c_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var i=t;c_(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),t=t.sibling}}function Wi(t,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)r_(t,i.alternate,i),i=i.sibling}function Hs(t){for(t=t.child;t!==null;){var i=t;switch(i.tag){case 0:case 11:case 14:case 15:kr(4,i,i.return),Hs(i);break;case 1:Ii(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Wy(i,i.return,a),Hs(i);break;case 27:Tl(i.stateNode);case 26:case 5:Ii(i,i.return),Hs(i);break;case 22:i.memoizedState===null&&Hs(i);break;case 30:Hs(i);break;default:Hs(i)}t=t.sibling}}function er(t,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var o=i.alternate,h=t,d=i,_=d.flags;switch(d.tag){case 0:case 11:case 15:er(h,d,a),hl(4,d);break;case 1:if(er(h,d,a),o=d,h=o.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(z){Ke(o,o.return,z)}if(o=d,h=o.updateQueue,h!==null){var E=o.stateNode;try{var I=h.shared.hiddenCallbacks;if(I!==null)for(h.shared.hiddenCallbacks=null,h=0;h<I.length;h++)Bg(I[h],E)}catch(z){Ke(o,o.return,z)}}a&&_&64&&Zy(d),fl(d,d.return);break;case 27:n_(d);case 26:case 5:er(h,d,a),a&&o===null&&_&4&&e_(d),fl(d,d.return);break;case 12:er(h,d,a);break;case 31:er(h,d,a),a&&_&4&&o_(h,d);break;case 13:er(h,d,a),a&&_&4&&l_(h,d);break;case 22:d.memoizedState===null&&er(h,d,a),fl(d,d.return);break;case 30:break;default:er(h,d,a)}i=i.sibling}}function gd(t,i){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(t=i.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Zo(a))}function yd(t,i){t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Zo(t))}function ti(t,i,a,o){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)h_(t,i,a,o),i=i.sibling}function h_(t,i,a,o){var h=i.flags;switch(i.tag){case 0:case 11:case 15:ti(t,i,a,o),h&2048&&hl(9,i);break;case 1:ti(t,i,a,o);break;case 3:ti(t,i,a,o),h&2048&&(t=null,i.alternate!==null&&(t=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==t&&(i.refCount++,t!=null&&Zo(t)));break;case 12:if(h&2048){ti(t,i,a,o),t=i.stateNode;try{var d=i.memoizedProps,_=d.id,E=d.onPostCommit;typeof E=="function"&&E(_,i.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(I){Ke(i,i.return,I)}}else ti(t,i,a,o);break;case 31:ti(t,i,a,o);break;case 13:ti(t,i,a,o);break;case 23:break;case 22:d=i.stateNode,_=i.alternate,i.memoizedState!==null?d._visibility&2?ti(t,i,a,o):dl(t,i):d._visibility&2?ti(t,i,a,o):(d._visibility|=2,Ba(t,i,a,o,(i.subtreeFlags&10256)!==0||!1)),h&2048&&gd(_,i);break;case 24:ti(t,i,a,o),h&2048&&yd(i.alternate,i);break;default:ti(t,i,a,o)}}function Ba(t,i,a,o,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=t,_=i,E=a,I=o,z=_.flags;switch(_.tag){case 0:case 11:case 15:Ba(d,_,E,I,h),hl(8,_);break;case 23:break;case 22:var F=_.stateNode;_.memoizedState!==null?F._visibility&2?Ba(d,_,E,I,h):dl(d,_):(F._visibility|=2,Ba(d,_,E,I,h)),h&&z&2048&&gd(_.alternate,_);break;case 24:Ba(d,_,E,I,h),h&&z&2048&&yd(_.alternate,_);break;default:Ba(d,_,E,I,h)}i=i.sibling}}function dl(t,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=t,o=i,h=o.flags;switch(o.tag){case 22:dl(a,o),h&2048&&gd(o.alternate,o);break;case 24:dl(a,o),h&2048&&yd(o.alternate,o);break;default:dl(a,o)}i=i.sibling}}var ml=8192;function qa(t,i,a){if(t.subtreeFlags&ml)for(t=t.child;t!==null;)f_(t,i,a),t=t.sibling}function f_(t,i,a){switch(t.tag){case 26:qa(t,i,a),t.flags&ml&&t.memoizedState!==null&&$b(a,ei,t.memoizedState,t.memoizedProps);break;case 5:qa(t,i,a);break;case 3:case 4:var o=ei;ei=Nc(t.stateNode.containerInfo),qa(t,i,a),ei=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=ml,ml=16777216,qa(t,i,a),ml=o):qa(t,i,a));break;default:qa(t,i,a)}}function d_(t){var i=t.alternate;if(i!==null&&(t=i.child,t!==null)){i.child=null;do i=t.sibling,t.sibling=null,t=i;while(t!==null)}}function pl(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Pt=o,p_(o,t)}d_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)m_(t),t=t.sibling}function m_(t){switch(t.tag){case 0:case 11:case 15:pl(t),t.flags&2048&&kr(9,t,t.return);break;case 3:pl(t);break;case 12:pl(t);break;case 22:var i=t.stateNode;t.memoizedState!==null&&i._visibility&2&&(t.return===null||t.return.tag!==13)?(i._visibility&=-3,gc(t)):pl(t);break;default:pl(t)}}function gc(t){var i=t.deletions;if((t.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var o=i[a];Pt=o,p_(o,t)}d_(t)}for(t=t.child;t!==null;){switch(i=t,i.tag){case 0:case 11:case 15:kr(8,i,i.return),gc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,gc(i));break;default:gc(i)}t=t.sibling}}function p_(t,i){for(;Pt!==null;){var a=Pt;switch(a.tag){case 0:case 11:case 15:kr(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Zo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Pt=o;else e:for(a=t;Pt!==null;){o=Pt;var h=o.sibling,d=o.return;if(s_(o),o===a){Pt=null;break e}if(h!==null){h.return=d,Pt=h;break e}Pt=d}}}var hb={getCacheForType:function(t){var i=qt(St),a=i.data.get(t);return a===void 0&&(a=t(),i.data.set(t,a)),a},cacheSignal:function(){return qt(St).controller.signal}},fb=typeof WeakMap=="function"?WeakMap:Map,Be=0,We=null,Re=null,Ce=0,Ge=0,Tn=null,Lr=!1,Ha=!1,_d=!1,tr=0,ct=0,Pr=0,Fs=0,vd=0,An=0,Fa=0,gl=null,cn=null,Ed=!1,yc=0,g_=0,_c=1/0,vc=null,Ur=null,Vt=0,zr=null,Ga=null,nr=0,Td=0,Ad=null,y_=null,yl=0,Sd=null;function Sn(){return(Be&2)!==0&&Ce!==0?Ce&-Ce:G.T!==null?Nd():Eu()}function __(){if(An===0)if((Ce&536870912)===0||Ve){var t=ys;ys<<=1,(ys&3932160)===0&&(ys=262144),An=t}else An=536870912;return t=vn.current,t!==null&&(t.flags|=32),An}function hn(t,i,a){(t===We&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)&&(Ka(t,0),jr(t,Ce,An,!1)),_s(t,a),((Be&2)===0||t!==We)&&(t===We&&((Be&2)===0&&(Fs|=a),ct===4&&jr(t,Ce,An,!1)),Ci(t))}function v_(t,i,a){if((Be&6)!==0)throw Error(s(327));var o=!a&&(i&127)===0&&(i&t.expiredLanes)===0||Gn(t,i),h=o?pb(t,i):wd(t,i,!0),d=o;do{if(h===0){Ha&&!o&&jr(t,i,0,!1);break}else{if(a=t.current.alternate,d&&!db(a)){h=wd(t,i,!1),d=!1;continue}if(h===2){if(d=i,t.errorRecoveryDisabledLanes&d)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){i=_;e:{var E=t;h=gl;var I=E.current.memoizedState.isDehydrated;if(I&&(Ka(E,_).flags|=256),_=wd(E,_,!1),_!==2){if(_d&&!I){E.errorRecoveryDisabledLanes|=d,Fs|=d,h=4;break e}d=cn,cn=h,d!==null&&(cn===null?cn=d:cn.push.apply(cn,d))}h=_}if(d=!1,h!==2)continue}}if(h===1){Ka(t,0),jr(t,i,0,!0);break}e:{switch(o=t,d=h,d){case 0:case 1:throw Error(s(345));case 4:if((i&4194048)!==i)break;case 6:jr(o,i,An,!Lr);break e;case 2:cn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((i&62914560)===i&&(h=yc+300-en(),10<h)){if(jr(o,i,An,!Lr),ci(o,0,!0)!==0)break e;nr=i,o.timeoutHandle=$_(E_.bind(null,o,a,cn,vc,Ed,i,An,Fs,Fa,Lr,d,"Throttled",-0,0),h);break e}E_(o,a,cn,vc,Ed,i,An,Fs,Fa,Lr,d,null,-0,0)}}break}while(!0);Ci(t)}function E_(t,i,a,o,h,d,_,E,I,z,F,Q,j,H){if(t.timeoutHandle=-1,Q=i.subtreeFlags,Q&8192||(Q&16785408)===16785408){Q={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qn},f_(i,d,Q);var ae=(d&62914560)===d?yc-en():(d&4194048)===d?g_-en():0;if(ae=Jb(Q,ae),ae!==null){nr=d,t.cancelPendingCommit=ae(C_.bind(null,t,i,d,a,o,h,_,E,I,F,Q,null,j,H)),jr(t,d,_,!z);return}}C_(t,i,d,a,o,h,_,E,I)}function db(t){for(var i=t;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var h=a[o],d=h.getSnapshot;h=h.value;try{if(!yn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function jr(t,i,a,o){i&=~vd,i&=~Fs,t.suspendedLanes|=i,t.pingedLanes&=~i,o&&(t.warmLanes|=i),o=t.expirationTimes;for(var h=i;0<h;){var d=31-ft(h),_=1<<d;o[d]=-1,h&=~_}a!==0&&vs(t,a,i)}function Ec(){return(Be&6)===0?(_l(0),!1):!0}function bd(){if(Re!==null){if(Ge===0)var t=Re.return;else t=Re,Gi=ks=null,jf(t),La=null,el=0,t=Re;for(;t!==null;)Jy(t.alternate,t),t=t.return;Re=null}}function Ka(t,i){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Vb(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),nr=0,bd(),We=t,Re=a=Hi(t.current,null),Ce=i,Ge=0,Tn=null,Lr=!1,Ha=Gn(t,i),_d=!1,Fa=An=vd=Fs=Pr=ct=0,cn=gl=null,Ed=!1,(i&8)!==0&&(i|=i&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=i;0<o;){var h=31-ft(o),d=1<<h;i|=t[h],o&=~d}return tr=i,Bu(),a}function T_(t,i){Ae=null,G.H=ll,i===ka||i===Xu?(i=Pg(),Ge=3):i===Cf?(i=Pg(),Ge=4):Ge=i===nd?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,Tn=i,Re===null&&(ct=1,uc(t,Vn(i,t.current)))}function A_(){var t=vn.current;return t===null?!0:(Ce&4194048)===Ce?Pn===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?t===Pn:!1}function S_(){var t=G.H;return G.H=ll,t===null?ll:t}function b_(){var t=G.A;return G.A=hb,t}function Tc(){ct=4,Lr||(Ce&4194048)!==Ce&&vn.current!==null||(Ha=!0),(Pr&134217727)===0&&(Fs&134217727)===0||We===null||jr(We,Ce,An,!1)}function wd(t,i,a){var o=Be;Be|=2;var h=S_(),d=b_();(We!==t||Ce!==i)&&(vc=null,Ka(t,i)),i=!1;var _=ct;e:do try{if(Ge!==0&&Re!==null){var E=Re,I=Tn;switch(Ge){case 8:bd(),_=6;break e;case 3:case 2:case 9:case 6:vn.current===null&&(i=!0);var z=Ge;if(Ge=0,Tn=null,Ya(t,E,I,z),a&&Ha){_=0;break e}break;default:z=Ge,Ge=0,Tn=null,Ya(t,E,I,z)}}mb(),_=ct;break}catch(F){T_(t,F)}while(!0);return i&&t.shellSuspendCounter++,Gi=ks=null,Be=o,G.H=h,G.A=d,Re===null&&(We=null,Ce=0,Bu()),_}function mb(){for(;Re!==null;)w_(Re)}function pb(t,i){var a=Be;Be|=2;var o=S_(),h=b_();We!==t||Ce!==i?(vc=null,_c=en()+500,Ka(t,i)):Ha=Gn(t,i);e:do try{if(Ge!==0&&Re!==null){i=Re;var d=Tn;t:switch(Ge){case 1:Ge=0,Tn=null,Ya(t,i,d,1);break;case 2:case 9:if(kg(d)){Ge=0,Tn=null,R_(i);break}i=function(){Ge!==2&&Ge!==9||We!==t||(Ge=7),Ci(t)},d.then(i,i);break e;case 3:Ge=7;break e;case 4:Ge=5;break e;case 7:kg(d)?(Ge=0,Tn=null,R_(i)):(Ge=0,Tn=null,Ya(t,i,d,7));break;case 5:var _=null;switch(Re.tag){case 26:_=Re.memoizedState;case 5:case 27:var E=Re;if(_?hv(_):E.stateNode.complete){Ge=0,Tn=null;var I=E.sibling;if(I!==null)Re=I;else{var z=E.return;z!==null?(Re=z,Ac(z)):Re=null}break t}}Ge=0,Tn=null,Ya(t,i,d,5);break;case 6:Ge=0,Tn=null,Ya(t,i,d,6);break;case 8:bd(),ct=6;break e;default:throw Error(s(462))}}gb();break}catch(F){T_(t,F)}while(!0);return Gi=ks=null,G.H=o,G.A=h,Be=a,Re!==null?0:(We=null,Ce=0,Bu(),ct)}function gb(){for(;Re!==null&&!ef();)w_(Re)}function w_(t){var i=Xy(t.alternate,t,tr);t.memoizedProps=t.pendingProps,i===null?Ac(t):Re=i}function R_(t){var i=t,a=i.alternate;switch(i.tag){case 15:case 0:i=Hy(a,i,i.pendingProps,i.type,void 0,Ce);break;case 11:i=Hy(a,i,i.pendingProps,i.type.render,i.ref,Ce);break;case 5:jf(i);default:Jy(a,i),i=Re=bg(i,tr),i=Xy(a,i,tr)}t.memoizedProps=t.pendingProps,i===null?Ac(t):Re=i}function Ya(t,i,a,o){Gi=ks=null,jf(i),La=null,el=0;var h=i.return;try{if(rb(t,h,i,a,Ce)){ct=1,uc(t,Vn(a,t.current)),Re=null;return}}catch(d){if(h!==null)throw Re=h,d;ct=1,uc(t,Vn(a,t.current)),Re=null;return}i.flags&32768?(Ve||o===1?t=!0:Ha||(Ce&536870912)!==0?t=!1:(Lr=t=!0,(o===2||o===9||o===3||o===6)&&(o=vn.current,o!==null&&o.tag===13&&(o.flags|=16384))),I_(i,t)):Ac(i)}function Ac(t){var i=t;do{if((i.flags&32768)!==0){I_(i,Lr);return}t=i.return;var a=ob(i.alternate,i,tr);if(a!==null){Re=a;return}if(i=i.sibling,i!==null){Re=i;return}Re=i=t}while(i!==null);ct===0&&(ct=5)}function I_(t,i){do{var a=lb(t.alternate,t);if(a!==null){a.flags&=32767,Re=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(t=t.sibling,t!==null)){Re=t;return}Re=t=a}while(t!==null);ct=6,Re=null}function C_(t,i,a,o,h,d,_,E,I){t.cancelPendingCommit=null;do Sc();while(Vt!==0);if((Be&6)!==0)throw Error(s(327));if(i!==null){if(i===t.current)throw Error(s(177));if(d=i.lanes|i.childLanes,d|=df,rf(t,a,d,_,E,I),t===We&&(Re=We=null,Ce=0),Ga=i,zr=t,nr=a,Td=d,Ad=h,y_=o,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Eb(gr,function(){return V_(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||o){o=G.T,G.T=null,h=te.p,te.p=2,_=Be,Be|=4;try{ub(t,i,a)}finally{Be=_,te.p=h,G.T=o}}Vt=1,N_(),D_(),O_()}}function N_(){if(Vt===1){Vt=0;var t=zr,i=Ga,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=G.T,G.T=null;var o=te.p;te.p=2;var h=Be;Be|=4;try{u_(i,t);var d=Pd,_=pg(t.containerInfo),E=d.focusedElem,I=d.selectionRange;if(_!==E&&E&&E.ownerDocument&&mg(E.ownerDocument.documentElement,E)){if(I!==null&&lf(E)){var z=I.start,F=I.end;if(F===void 0&&(F=z),"selectionStart"in E)E.selectionStart=z,E.selectionEnd=Math.min(F,E.value.length);else{var Q=E.ownerDocument||document,j=Q&&Q.defaultView||window;if(j.getSelection){var H=j.getSelection(),ae=E.textContent.length,fe=Math.min(I.start,ae),$e=I.end===void 0?fe:Math.min(I.end,ae);!H.extend&&fe>$e&&(_=$e,$e=fe,fe=_);var M=dg(E,fe),D=dg(E,$e);if(M&&D&&(H.rangeCount!==1||H.anchorNode!==M.node||H.anchorOffset!==M.offset||H.focusNode!==D.node||H.focusOffset!==D.offset)){var U=Q.createRange();U.setStart(M.node,M.offset),H.removeAllRanges(),fe>$e?(H.addRange(U),H.extend(D.node,D.offset)):(U.setEnd(D.node,D.offset),H.addRange(U))}}}}for(Q=[],H=E;H=H.parentNode;)H.nodeType===1&&Q.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<Q.length;E++){var K=Q[E];K.element.scrollLeft=K.left,K.element.scrollTop=K.top}}kc=!!Ld,Pd=Ld=null}finally{Be=h,te.p=o,G.T=a}}t.current=i,Vt=2}}function D_(){if(Vt===2){Vt=0;var t=zr,i=Ga,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=G.T,G.T=null;var o=te.p;te.p=2;var h=Be;Be|=4;try{r_(t,i.alternate,i)}finally{Be=h,te.p=o,G.T=a}}Vt=3}}function O_(){if(Vt===4||Vt===3){Vt=0,du();var t=zr,i=Ga,a=nr,o=y_;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Vt=5:(Vt=0,Ga=zr=null,x_(t,t.pendingLanes));var h=t.pendingLanes;if(h===0&&(Ur=null),zi(a),i=i.stateNode,zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(Fn,i,void 0,(i.current.flags&128)===128)}catch{}if(o!==null){i=G.T,h=te.p,te.p=2,G.T=null;try{for(var d=t.onRecoverableError,_=0;_<o.length;_++){var E=o[_];d(E.value,{componentStack:E.stack})}}finally{G.T=i,te.p=h}}(nr&3)!==0&&Sc(),Ci(t),h=t.pendingLanes,(a&261930)!==0&&(h&42)!==0?t===Sd?yl++:(yl=0,Sd=t):yl=0,_l(0)}}function x_(t,i){(t.pooledCacheLanes&=i)===0&&(i=t.pooledCache,i!=null&&(t.pooledCache=null,Zo(i)))}function Sc(){return N_(),D_(),O_(),V_()}function V_(){if(Vt!==5)return!1;var t=zr,i=Td;Td=0;var a=zi(nr),o=G.T,h=te.p;try{te.p=32>a?32:a,G.T=null,a=Ad,Ad=null;var d=zr,_=nr;if(Vt=0,Ga=zr=null,nr=0,(Be&6)!==0)throw Error(s(331));var E=Be;if(Be|=4,m_(d.current),h_(d,d.current,_,a),Be=E,_l(0,!1),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(Fn,d)}catch{}return!0}finally{te.p=h,G.T=o,x_(t,i)}}function M_(t,i,a){i=Vn(a,i),i=td(t.stateNode,i,2),t=xr(t,i,2),t!==null&&(_s(t,2),Ci(t))}function Ke(t,i,a){if(t.tag===3)M_(t,t,a);else for(;i!==null;){if(i.tag===3){M_(i,t,a);break}else if(i.tag===1){var o=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ur===null||!Ur.has(o))){t=Vn(a,t),a=ky(2),o=xr(i,a,2),o!==null&&(Ly(a,o,i,t),_s(o,2),Ci(o));break}}i=i.return}}function Rd(t,i,a){var o=t.pingCache;if(o===null){o=t.pingCache=new fb;var h=new Set;o.set(i,h)}else h=o.get(i),h===void 0&&(h=new Set,o.set(i,h));h.has(a)||(_d=!0,h.add(a),t=yb.bind(null,t,i,a),i.then(t,t))}function yb(t,i,a){var o=t.pingCache;o!==null&&o.delete(i),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(Ce&a)===a&&(ct===4||ct===3&&(Ce&62914560)===Ce&&300>en()-yc?(Be&2)===0&&Ka(t,0):vd|=a,Fa===Ce&&(Fa=0)),Ci(t)}function k_(t,i){i===0&&(i=vu()),t=xs(t,i),t!==null&&(_s(t,i),Ci(t))}function _b(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),k_(t,a)}function vb(t,i){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(i),k_(t,a)}function Eb(t,i){return xt(t,i)}var bc=null,Qa=null,Id=!1,wc=!1,Cd=!1,Br=0;function Ci(t){t!==Qa&&t.next===null&&(Qa===null?bc=Qa=t:Qa=Qa.next=t),wc=!0,Id||(Id=!0,Ab())}function _l(t,i){if(!Cd&&wc){Cd=!0;do for(var a=!1,o=bc;o!==null;){if(t!==0){var h=o.pendingLanes;if(h===0)var d=0;else{var _=o.suspendedLanes,E=o.pingedLanes;d=(1<<31-ft(42|t)+1)-1,d&=h&~(_&~E),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,z_(o,d))}else d=Ce,d=ci(o,o===We?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||Gn(o,d)||(a=!0,z_(o,d));o=o.next}while(a);Cd=!1}}function Tb(){L_()}function L_(){wc=Id=!1;var t=0;Br!==0&&xb()&&(t=Br);for(var i=en(),a=null,o=bc;o!==null;){var h=o.next,d=P_(o,i);d===0?(o.next=null,a===null?bc=h:a.next=h,h===null&&(Qa=a)):(a=o,(t!==0||(d&3)!==0)&&(wc=!0)),o=h}Vt!==0&&Vt!==5||_l(t),Br!==0&&(Br=0)}function P_(t,i){for(var a=t.suspendedLanes,o=t.pingedLanes,h=t.expirationTimes,d=t.pendingLanes&-62914561;0<d;){var _=31-ft(d),E=1<<_,I=h[_];I===-1?((E&a)===0||(E&o)!==0)&&(h[_]=nf(E,i)):I<=i&&(t.expiredLanes|=E),d&=~E}if(i=We,a=Ce,a=ci(t,t===i?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===i&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&pr(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Gn(t,a)){if(i=a&-a,i===t.callbackPriority)return i;switch(o!==null&&pr(o),zi(a)){case 2:case 8:a=Co;break;case 32:a=gr;break;case 268435456:a=mu;break;default:a=gr}return o=U_.bind(null,t),a=xt(a,o),t.callbackPriority=i,t.callbackNode=a,i}return o!==null&&o!==null&&pr(o),t.callbackPriority=2,t.callbackNode=null,2}function U_(t,i){if(Vt!==0&&Vt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Sc()&&t.callbackNode!==a)return null;var o=Ce;return o=ci(t,t===We?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(v_(t,o,i),P_(t,en()),t.callbackNode!=null&&t.callbackNode===a?U_.bind(null,t):null)}function z_(t,i){if(Sc())return null;v_(t,i,!0)}function Ab(){Mb(function(){(Be&6)!==0?xt(Io,Tb):L_()})}function Nd(){if(Br===0){var t=Va;t===0&&(t=li,li<<=1,(li&261888)===0&&(li=256)),Br=t}return Br}function j_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:_a(""+t)}function B_(t,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,t.id&&a.setAttribute("form",t.id),i.parentNode.insertBefore(a,i),t=new FormData(t),a.parentNode.removeChild(a),t}function Sb(t,i,a,o,h){if(i==="submit"&&a&&a.stateNode===h){var d=j_((h[kt]||null).action),_=o.submitter;_&&(i=(i=_[kt]||null)?j_(i.formAction):_.getAttribute("formAction"),i!==null&&(d=i,_=null));var E=new Ti("action","action",null,o,h);t.push({event:E,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Br!==0){var I=_?B_(h,_):new FormData(h);Xf(a,{pending:!0,data:I,method:h.method,action:d},null,I)}}else typeof d=="function"&&(E.preventDefault(),I=_?B_(h,_):new FormData(h),Xf(a,{pending:!0,data:I,method:h.method,action:d},d,I))},currentTarget:h}]})}}for(var Dd=0;Dd<ff.length;Dd++){var Od=ff[Dd],bb=Od.toLowerCase(),wb=Od[0].toUpperCase()+Od.slice(1);Wn(bb,"on"+wb)}Wn(_g,"onAnimationEnd"),Wn(vg,"onAnimationIteration"),Wn(Eg,"onAnimationStart"),Wn("dblclick","onDoubleClick"),Wn("focusin","onFocus"),Wn("focusout","onBlur"),Wn(BS,"onTransitionRun"),Wn(qS,"onTransitionStart"),Wn(HS,"onTransitionCancel"),Wn(Tg,"onTransitionEnd"),yi("onMouseEnter",["mouseout","mouseover"]),yi("onMouseLeave",["mouseout","mouseover"]),yi("onPointerEnter",["pointerout","pointerover"]),yi("onPointerLeave",["pointerout","pointerover"]),gi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),gi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),gi("onBeforeInput",["compositionend","keypress","textInput","paste"]),gi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),gi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(vl));function q_(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],h=o.event;o=o.listeners;e:{var d=void 0;if(i)for(var _=o.length-1;0<=_;_--){var E=o[_],I=E.instance,z=E.currentTarget;if(E=E.listener,I!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=z;try{d(h)}catch(F){ju(F)}h.currentTarget=null,d=I}else for(_=0;_<o.length;_++){if(E=o[_],I=E.instance,z=E.currentTarget,E=E.listener,I!==d&&h.isPropagationStopped())break e;d=E,h.currentTarget=z;try{d(h)}catch(F){ju(F)}h.currentTarget=null,d=I}}}}function Ie(t,i){var a=i[da];a===void 0&&(a=i[da]=new Set);var o=t+"__bubble";a.has(o)||(H_(i,t,2,!1),a.add(o))}function xd(t,i,a){var o=0;i&&(o|=4),H_(a,t,o,i)}var Rc="_reactListening"+Math.random().toString(36).slice(2);function Vd(t){if(!t[Rc]){t[Rc]=!0,Oo.forEach(function(a){a!=="selectionchange"&&(Rb.has(a)||xd(a,!1,t),xd(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Rc]||(i[Rc]=!0,xd("selectionchange",!1,i))}}function H_(t,i,a,o){switch(_v(i)){case 2:var h=e1;break;case 8:h=t1;break;default:h=Qd}a=h.bind(null,i,a,t),h=void 0,!bs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),o?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function Md(t,i,a,o,h){var d=o;if((i&1)===0&&(i&2)===0&&o!==null)e:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var E=o.stateNode.containerInfo;if(E===h)break;if(_===4)for(_=o.return;_!==null;){var I=_.tag;if((I===3||I===4)&&_.stateNode.containerInfo===h)return;_=_.return}for(;E!==null;){if(_=mi(E),_===null)return;if(I=_.tag,I===5||I===6||I===26||I===27){o=d=_;continue e}E=E.parentNode}}o=o.return}Ar(function(){var z=d,F=Nn(a),Q=[];e:{var j=Ag.get(t);if(j!==void 0){var H=Ti,ae=t;switch(t){case"keypress":if(Rs(a)===0)break e;case"keydown":case"keyup":H=Pu;break;case"focusin":ae="focus",H=Cs;break;case"focusout":ae="blur",H=Cs;break;case"beforeblur":case"afterblur":H=Cs;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Fo;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=Cu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=m;break;case _g:case vg:case Eg:H=Du;break;case Tg:H=A;break;case"scroll":case"scrollend":H=Ho;break;case"wheel":H=B;break;case"copy":case"cut":case"paste":H=Ou;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=qi;break;case"toggle":case"beforetoggle":H=Te}var fe=(i&4)!==0,$e=!fe&&(t==="scroll"||t==="scrollend"),M=fe?j!==null?j+"Capture":null:j;fe=[];for(var D=z,U;D!==null;){var K=D;if(U=K.stateNode,K=K.tag,K!==5&&K!==26&&K!==27||U===null||M===null||(K=Xn(D,M),K!=null&&fe.push(El(D,K,U))),$e)break;D=D.return}0<fe.length&&(j=new H(j,ae,null,a,F),Q.push({event:j,listeners:fe}))}}if((i&7)===0){e:{if(j=t==="mouseover"||t==="pointerover",H=t==="mouseout"||t==="pointerout",j&&a!==jo&&(ae=a.relatedTarget||a.fromElement)&&(mi(ae)||ae[fi]))break e;if((H||j)&&(j=F.window===F?F:(j=F.ownerDocument)?j.defaultView||j.parentWindow:window,H?(ae=a.relatedTarget||a.toElement,H=z,ae=ae?mi(ae):null,ae!==null&&($e=u(ae),fe=ae.tag,ae!==$e||fe!==5&&fe!==27&&fe!==6)&&(ae=null)):(H=null,ae=z),H!==ae)){if(fe=Fo,K="onMouseLeave",M="onMouseEnter",D="mouse",(t==="pointerout"||t==="pointerover")&&(fe=qi,K="onPointerLeave",M="onPointerEnter",D="pointer"),$e=H==null?j:pn(H),U=ae==null?j:pn(ae),j=new fe(K,D+"leave",H,a,F),j.target=$e,j.relatedTarget=U,K=null,mi(F)===z&&(fe=new fe(M,D+"enter",ae,a,F),fe.target=U,fe.relatedTarget=$e,K=fe),$e=K,H&&ae)t:{for(fe=Ib,M=H,D=ae,U=0,K=M;K;K=fe(K))U++;K=0;for(var le=D;le;le=fe(le))K++;for(;0<U-K;)M=fe(M),U--;for(;0<K-U;)D=fe(D),K--;for(;U--;){if(M===D||D!==null&&M===D.alternate){fe=M;break t}M=fe(M),D=fe(D)}fe=null}else fe=null;H!==null&&F_(Q,j,H,fe,!1),ae!==null&&$e!==null&&F_(Q,$e,ae,fe,!0)}}e:{if(j=z?pn(z):window,H=j.nodeName&&j.nodeName.toLowerCase(),H==="select"||H==="input"&&j.type==="file")var Pe=og;else if(sg(j))if(lg)Pe=US;else{Pe=LS;var oe=kS}else H=j.nodeName,!H||H.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?z&&ya(z.elementType)&&(Pe=og):Pe=PS;if(Pe&&(Pe=Pe(t,z))){ag(Q,Pe,a,F);break e}oe&&oe(t,j,z),t==="focusout"&&z&&j.type==="number"&&z.memoizedProps.value!=null&&Po(j,"number",j.value)}switch(oe=z?pn(z):window,t){case"focusin":(sg(oe)||oe.contentEditable==="true")&&(wa=oe,uf=z,Xo=null);break;case"focusout":Xo=uf=wa=null;break;case"mousedown":cf=!0;break;case"contextmenu":case"mouseup":case"dragend":cf=!1,gg(Q,a,F);break;case"selectionchange":if(jS)break;case"keydown":case"keyup":gg(Q,a,F)}var be;if(je)e:{switch(t){case"compositionstart":var Ne="onCompositionStart";break e;case"compositionend":Ne="onCompositionEnd";break e;case"compositionupdate":Ne="onCompositionUpdate";break e}Ne=void 0}else ba?Ns(t,a)&&(Ne="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(Ne="onCompositionStart");Ne&&(bi&&a.locale!=="ko"&&(ba||Ne!=="onCompositionStart"?Ne==="onCompositionEnd"&&ba&&(be=qo()):(Ei=F,Bo="value"in Ei?Ei.value:Ei.textContent,ba=!0)),oe=Ic(z,Ne),0<oe.length&&(Ne=new Si(Ne,t,null,a,F),Q.push({event:Ne,listeners:oe}),be?Ne.data=be:(be=Sa(a),be!==null&&(Ne.data=be)))),(be=On?OS(t,a):xS(t,a))&&(Ne=Ic(z,"onBeforeInput"),0<Ne.length&&(oe=new Si("onBeforeInput","beforeinput",null,a,F),Q.push({event:oe,listeners:Ne}),oe.data=be)),Sb(Q,t,z,a,F)}q_(Q,i)})}function El(t,i,a){return{instance:t,listener:i,currentTarget:a}}function Ic(t,i){for(var a=i+"Capture",o=[];t!==null;){var h=t,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Xn(t,a),h!=null&&o.unshift(El(t,h,d)),h=Xn(t,i),h!=null&&o.push(El(t,h,d))),t.tag===3)return o;t=t.return}return[]}function Ib(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function F_(t,i,a,o,h){for(var d=i._reactName,_=[];a!==null&&a!==o;){var E=a,I=E.alternate,z=E.stateNode;if(E=E.tag,I!==null&&I===o)break;E!==5&&E!==26&&E!==27||z===null||(I=z,h?(z=Xn(a,d),z!=null&&_.unshift(El(a,z,I))):h||(z=Xn(a,d),z!=null&&_.push(El(a,z,I)))),a=a.return}_.length!==0&&t.push({event:i,listeners:_})}var Cb=/\r\n?/g,Nb=/\u0000|\uFFFD/g;function G_(t){return(typeof t=="string"?t:""+t).replace(Cb,`
`).replace(Nb,"")}function K_(t,i){return i=G_(i),G_(t)===i}function Xe(t,i,a,o,h,d){switch(a){case"children":typeof o=="string"?i==="body"||i==="textarea"&&o===""||an(t,o):(typeof o=="number"||typeof o=="bigint")&&i!=="body"&&an(t,""+o);break;case"className":gn(t,"class",o);break;case"tabIndex":gn(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":gn(t,a,o);break;case"style":zo(t,o,d);break;case"data":if(i!=="object"){gn(t,"data",o);break}case"src":case"href":if(o===""&&(i!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=_a(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&Xe(t,i,"name",h.name,h,null),Xe(t,i,"formEncType",h.formEncType,h,null),Xe(t,i,"formMethod",h.formMethod,h,null),Xe(t,i,"formTarget",h.formTarget,h,null)):(Xe(t,i,"encType",h.encType,h,null),Xe(t,i,"method",h.method,h,null),Xe(t,i,"target",h.target,h,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=_a(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Qn);break;case"onScroll":o!=null&&Ie("scroll",t);break;case"onScrollEnd":o!=null&&Ie("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=_a(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":Ie("beforetoggle",t),Ie("toggle",t),pa(t,"popover",o);break;case"xlinkActuate":At(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":At(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":At(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":At(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":At(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":At(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":At(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":At(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":At(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":pa(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Iu.get(a)||a,pa(t,a,o))}}function kd(t,i,a,o,h,d){switch(a){case"style":zo(t,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(h.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?an(t,o):(typeof o=="number"||typeof o=="bigint")&&an(t,""+o);break;case"onScroll":o!=null&&Ie("scroll",t);break;case"onScrollEnd":o!=null&&Ie("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Qn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!xo.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=t[kt]||null,d=d!=null?d[a]:null,typeof d=="function"&&t.removeEventListener(i,d,h),typeof o=="function")){typeof d!="function"&&d!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(i,o,h);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):pa(t,a,o)}}}function Ft(t,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ie("error",t),Ie("load",t);var o=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var _=a[d];if(_!=null)switch(d){case"src":o=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(t,i,d,_,a,null)}}h&&Xe(t,i,"srcSet",a.srcSet,a,null),o&&Xe(t,i,"src",a.src,a,null);return;case"input":Ie("invalid",t);var E=d=_=h=null,I=null,z=null;for(o in a)if(a.hasOwnProperty(o)){var F=a[o];if(F!=null)switch(o){case"name":h=F;break;case"type":_=F;break;case"checked":I=F;break;case"defaultChecked":z=F;break;case"value":d=F;break;case"defaultValue":E=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(s(137,i));break;default:Xe(t,i,o,F,a,null)}}bu(t,d,E,I,z,_,h,!1);return;case"select":Ie("invalid",t),o=_=d=null;for(h in a)if(a.hasOwnProperty(h)&&(E=a[h],E!=null))switch(h){case"value":d=E;break;case"defaultValue":_=E;break;case"multiple":o=E;default:Xe(t,i,h,E,a,null)}i=d,a=_,t.multiple=!!o,i!=null?_r(t,!!o,i,!1):a!=null&&_r(t,!!o,a,!0);return;case"textarea":Ie("invalid",t),d=h=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":o=E;break;case"defaultValue":h=E;break;case"children":d=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Xe(t,i,_,E,a,null)}vr(t,o,h,d);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(o=a[I],o!=null))switch(I){case"selected":t.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Xe(t,i,I,o,a,null)}return;case"dialog":Ie("beforetoggle",t),Ie("toggle",t),Ie("cancel",t),Ie("close",t);break;case"iframe":case"object":Ie("load",t);break;case"video":case"audio":for(o=0;o<vl.length;o++)Ie(vl[o],t);break;case"image":Ie("error",t),Ie("load",t);break;case"details":Ie("toggle",t);break;case"embed":case"source":case"link":Ie("error",t),Ie("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(o=a[z],o!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,i));default:Xe(t,i,z,o,a,null)}return;default:if(ya(i)){for(F in a)a.hasOwnProperty(F)&&(o=a[F],o!==void 0&&kd(t,i,F,o,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(o=a[E],o!=null&&Xe(t,i,E,o,a,null))}function Db(t,i,a,o){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,_=null,E=null,I=null,z=null,F=null;for(H in a){var Q=a[H];if(a.hasOwnProperty(H)&&Q!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":I=Q;default:o.hasOwnProperty(H)||Xe(t,i,H,null,o,Q)}}for(var j in o){var H=o[j];if(Q=a[j],o.hasOwnProperty(j)&&(H!=null||Q!=null))switch(j){case"type":d=H;break;case"name":h=H;break;case"checked":z=H;break;case"defaultChecked":F=H;break;case"value":_=H;break;case"defaultValue":E=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(s(137,i));break;default:H!==Q&&Xe(t,i,j,H,o,Q)}}ga(t,_,E,I,z,F,d,h);return;case"select":H=_=E=j=null;for(d in a)if(I=a[d],a.hasOwnProperty(d)&&I!=null)switch(d){case"value":break;case"multiple":H=I;default:o.hasOwnProperty(d)||Xe(t,i,d,null,o,I)}for(h in o)if(d=o[h],I=a[h],o.hasOwnProperty(h)&&(d!=null||I!=null))switch(h){case"value":j=d;break;case"defaultValue":E=d;break;case"multiple":_=d;default:d!==I&&Xe(t,i,h,d,o,I)}i=E,a=_,o=H,j!=null?_r(t,!!a,j,!1):!!o!=!!a&&(i!=null?_r(t,!!a,i,!0):_r(t,!!a,a?[]:"",!1));return;case"textarea":H=j=null;for(E in a)if(h=a[E],a.hasOwnProperty(E)&&h!=null&&!o.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Xe(t,i,E,null,o,h)}for(_ in o)if(h=o[_],d=a[_],o.hasOwnProperty(_)&&(h!=null||d!=null))switch(_){case"value":j=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(s(91));break;default:h!==d&&Xe(t,i,_,h,o,d)}wu(t,j,H);return;case"option":for(var ae in a)if(j=a[ae],a.hasOwnProperty(ae)&&j!=null&&!o.hasOwnProperty(ae))switch(ae){case"selected":t.selected=!1;break;default:Xe(t,i,ae,null,o,j)}for(I in o)if(j=o[I],H=a[I],o.hasOwnProperty(I)&&j!==H&&(j!=null||H!=null))switch(I){case"selected":t.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:Xe(t,i,I,j,o,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var fe in a)j=a[fe],a.hasOwnProperty(fe)&&j!=null&&!o.hasOwnProperty(fe)&&Xe(t,i,fe,null,o,j);for(z in o)if(j=o[z],H=a[z],o.hasOwnProperty(z)&&j!==H&&(j!=null||H!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(s(137,i));break;default:Xe(t,i,z,j,o,H)}return;default:if(ya(i)){for(var $e in a)j=a[$e],a.hasOwnProperty($e)&&j!==void 0&&!o.hasOwnProperty($e)&&kd(t,i,$e,void 0,o,j);for(F in o)j=o[F],H=a[F],!o.hasOwnProperty(F)||j===H||j===void 0&&H===void 0||kd(t,i,F,j,o,H);return}}for(var M in a)j=a[M],a.hasOwnProperty(M)&&j!=null&&!o.hasOwnProperty(M)&&Xe(t,i,M,null,o,j);for(Q in o)j=o[Q],H=a[Q],!o.hasOwnProperty(Q)||j===H||j==null&&H==null||Xe(t,i,Q,j,o,H)}function Y_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ob(){if(typeof performance.getEntriesByType=="function"){for(var t=0,i=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var h=a[o],d=h.transferSize,_=h.initiatorType,E=h.duration;if(d&&E&&Y_(_)){for(_=0,E=h.responseEnd,o+=1;o<a.length;o++){var I=a[o],z=I.startTime;if(z>E)break;var F=I.transferSize,Q=I.initiatorType;F&&Y_(Q)&&(I=I.responseEnd,_+=F*(I<E?1:(E-z)/(I-z)))}if(--o,i+=8*(d+_)/(h.duration/1e3),t++,10<t)break}}if(0<t)return i/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Ld=null,Pd=null;function Cc(t){return t.nodeType===9?t:t.ownerDocument}function Q_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function X_(t,i){if(t===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&i==="foreignObject"?0:t}function Ud(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var zd=null;function xb(){var t=window.event;return t&&t.type==="popstate"?t===zd?!1:(zd=t,!0):(zd=null,!1)}var $_=typeof setTimeout=="function"?setTimeout:void 0,Vb=typeof clearTimeout=="function"?clearTimeout:void 0,J_=typeof Promise=="function"?Promise:void 0,Mb=typeof queueMicrotask=="function"?queueMicrotask:typeof J_<"u"?function(t){return J_.resolve(null).then(t).catch(kb)}:$_;function kb(t){setTimeout(function(){throw t})}function qr(t){return t==="head"}function Z_(t,i){var a=i,o=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(h),Za(i);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Tl(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Tl(a);for(var d=a.firstChild;d;){var _=d.nextSibling,E=d.nodeName;d[di]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=_}}else a==="body"&&Tl(t.ownerDocument.body);a=h}while(a);Za(i)}function W_(t,i){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function jd(t){var i=t.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":jd(a),ma(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Lb(t,i,a,o){for(;t.nodeType===1;){var h=a;if(t.nodeName.toLowerCase()!==i.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[di])switch(i){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(d=t.getAttribute("rel"),d==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(d!==h.rel||t.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||t.getAttribute("title")!==(h.title==null?null:h.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(d=t.getAttribute("src"),(d!==(h.src==null?null:h.src)||t.getAttribute("type")!==(h.type==null?null:h.type)||t.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(i==="input"&&t.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&t.getAttribute("name")===d)return t}else return t;if(t=Un(t.nextSibling),t===null)break}return null}function Pb(t,i,a){if(i==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Un(t.nextSibling),t===null))return null;return t}function ev(t,i){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=Un(t.nextSibling),t===null))return null;return t}function Bd(t){return t.data==="$?"||t.data==="$~"}function qd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Ub(t,i){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=i;else if(t.data!=="$?"||a.readyState!=="loading")i();else{var o=function(){i(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function Un(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return t}var Hd=null;function tv(t){t=t.nextSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(i===0)return Un(t.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}t=t.nextSibling}return null}function nv(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return t;i--}else a!=="/$"&&a!=="/&"||i++}t=t.previousSibling}return null}function iv(t,i,a){switch(i=Cc(a),t){case"html":if(t=i.documentElement,!t)throw Error(s(452));return t;case"head":if(t=i.head,!t)throw Error(s(453));return t;case"body":if(t=i.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Tl(t){for(var i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ma(t)}var zn=new Map,rv=new Set;function Nc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ir=te.d;te.d={f:zb,r:jb,D:Bb,C:qb,L:Hb,m:Fb,X:Kb,S:Gb,M:Yb};function zb(){var t=ir.f(),i=Ec();return t||i}function jb(t){var i=Cn(t);i!==null&&i.tag===5&&i.type==="form"?Ty(i):ir.r(t)}var Xa=typeof document>"u"?null:document;function sv(t,i,a){var o=Xa;if(o&&typeof i=="string"&&i){var h=sn(i);h='link[rel="'+t+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),rv.has(h)||(rv.add(h),t={rel:t,crossOrigin:a,href:i},o.querySelector(h)===null&&(i=o.createElement("link"),Ft(i,"link",t),Tt(i),o.head.appendChild(i)))}}function Bb(t){ir.D(t),sv("dns-prefetch",t,null)}function qb(t,i){ir.C(t,i),sv("preconnect",t,i)}function Hb(t,i,a){ir.L(t,i,a);var o=Xa;if(o&&t&&i){var h='link[rel="preload"][as="'+sn(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+sn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+sn(a.imageSizes)+'"]')):h+='[href="'+sn(t)+'"]';var d=h;switch(i){case"style":d=$a(t);break;case"script":d=Ja(t)}zn.has(d)||(t=S({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:t,as:i},a),zn.set(d,t),o.querySelector(h)!==null||i==="style"&&o.querySelector(Al(d))||i==="script"&&o.querySelector(Sl(d))||(i=o.createElement("link"),Ft(i,"link",t),Tt(i),o.head.appendChild(i)))}}function Fb(t,i){ir.m(t,i);var a=Xa;if(a&&t){var o=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+sn(o)+'"][href="'+sn(t)+'"]',d=h;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Ja(t)}if(!zn.has(d)&&(t=S({rel:"modulepreload",href:t},i),zn.set(d,t),a.querySelector(h)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Sl(d)))return}o=a.createElement("link"),Ft(o,"link",t),Tt(o),a.head.appendChild(o)}}}function Gb(t,i,a){ir.S(t,i,a);var o=Xa;if(o&&t){var h=pi(o).hoistableStyles,d=$a(t);i=i||"default";var _=h.get(d);if(!_){var E={loading:0,preload:null};if(_=o.querySelector(Al(d)))E.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":i},a),(a=zn.get(d))&&Fd(t,a);var I=_=o.createElement("link");Tt(I),Ft(I,"link",t),I._p=new Promise(function(z,F){I.onload=z,I.onerror=F}),I.addEventListener("load",function(){E.loading|=1}),I.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Dc(_,i,o)}_={type:"stylesheet",instance:_,count:1,state:E},h.set(d,_)}}}function Kb(t,i){ir.X(t,i);var a=Xa;if(a&&t){var o=pi(a).hoistableScripts,h=Ja(t),d=o.get(h);d||(d=a.querySelector(Sl(h)),d||(t=S({src:t,async:!0},i),(i=zn.get(h))&&Gd(t,i),d=a.createElement("script"),Tt(d),Ft(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function Yb(t,i){ir.M(t,i);var a=Xa;if(a&&t){var o=pi(a).hoistableScripts,h=Ja(t),d=o.get(h);d||(d=a.querySelector(Sl(h)),d||(t=S({src:t,async:!0,type:"module"},i),(i=zn.get(h))&&Gd(t,i),d=a.createElement("script"),Tt(d),Ft(d,"link",t),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(h,d))}}function av(t,i,a,o){var h=(h=Se.current)?Nc(h):null;if(!h)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=$a(a.href),a=pi(h).hoistableStyles,o=a.get(i),o||(o={type:"style",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=$a(a.href);var d=pi(h).hoistableStyles,_=d.get(t);if(_||(h=h.ownerDocument||h,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(t,_),(d=h.querySelector(Al(t)))&&!d._p&&(_.instance=d,_.state.loading=5),zn.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},zn.set(t,a),d||Qb(h,t,a,_.state))),i&&o===null)throw Error(s(528,""));return _}if(i&&o!==null)throw Error(s(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Ja(a),a=pi(h).hoistableScripts,o=a.get(i),o||(o={type:"script",instance:null,count:0,state:null},a.set(i,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function $a(t){return'href="'+sn(t)+'"'}function Al(t){return'link[rel="stylesheet"]['+t+"]"}function ov(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function Qb(t,i,a,o){t.querySelector('link[rel="preload"][as="style"]['+i+"]")?o.loading=1:(i=t.createElement("link"),o.preload=i,i.addEventListener("load",function(){return o.loading|=1}),i.addEventListener("error",function(){return o.loading|=2}),Ft(i,"link",a),Tt(i),t.head.appendChild(i))}function Ja(t){return'[src="'+sn(t)+'"]'}function Sl(t){return"script[async]"+t}function lv(t,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var o=t.querySelector('style[data-href~="'+sn(a.href)+'"]');if(o)return i.instance=o,Tt(o),o;var h=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),Tt(o),Ft(o,"style",h),Dc(o,a.precedence,t),i.instance=o;case"stylesheet":h=$a(a.href);var d=t.querySelector(Al(h));if(d)return i.state.loading|=4,i.instance=d,Tt(d),d;o=ov(a),(h=zn.get(h))&&Fd(o,h),d=(t.ownerDocument||t).createElement("link"),Tt(d);var _=d;return _._p=new Promise(function(E,I){_.onload=E,_.onerror=I}),Ft(d,"link",o),i.state.loading|=4,Dc(d,a.precedence,t),i.instance=d;case"script":return d=Ja(a.src),(h=t.querySelector(Sl(d)))?(i.instance=h,Tt(h),h):(o=a,(h=zn.get(d))&&(o=S({},a),Gd(o,h)),t=t.ownerDocument||t,h=t.createElement("script"),Tt(h),Ft(h,"link",o),t.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(s(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(o=i.instance,i.state.loading|=4,Dc(o,a.precedence,t));return i.instance}function Dc(t,i,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=o.length?o[o.length-1]:null,d=h,_=0;_<o.length;_++){var E=o[_];if(E.dataset.precedence===i)d=E;else if(d!==h)break}d?d.parentNode.insertBefore(t,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(t,i.firstChild))}function Fd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.title==null&&(t.title=i.title)}function Gd(t,i){t.crossOrigin==null&&(t.crossOrigin=i.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=i.referrerPolicy),t.integrity==null&&(t.integrity=i.integrity)}var Oc=null;function uv(t,i,a){if(Oc===null){var o=new Map,h=Oc=new Map;h.set(a,o)}else h=Oc,o=h.get(a),o||(o=new Map,h.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),h=0;h<a.length;h++){var d=a[h];if(!(d[di]||d[Et]||t==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var _=d.getAttribute(i)||"";_=t+_;var E=o.get(_);E?E.push(d):o.set(_,[d])}}return o}function cv(t,i,a){t=t.ownerDocument||t,t.head.insertBefore(a,i==="title"?t.querySelector("head > title"):null)}function Xb(t,i,a){if(a===1||i.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return t=i.disabled,typeof i.precedence=="string"&&t==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function hv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function $b(t,i,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=$a(o.href),d=i.querySelector(Al(h));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(t.count++,t=xc.bind(t),i.then(t,t)),a.state.loading|=4,a.instance=d,Tt(d);return}d=i.ownerDocument||i,o=ov(o),(h=zn.get(h))&&Fd(o,h),d=d.createElement("link"),Tt(d);var _=d;_._p=new Promise(function(E,I){_.onload=E,_.onerror=I}),Ft(d,"link",o),a.instance=d}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=xc.bind(t),i.addEventListener("load",a),i.addEventListener("error",a))}}var Kd=0;function Jb(t,i){return t.stylesheets&&t.count===0&&Mc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Mc(t,t.stylesheets),t.unsuspend){var d=t.unsuspend;t.unsuspend=null,d()}},6e4+i);0<t.imgBytes&&Kd===0&&(Kd=62500*Ob());var h=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Mc(t,t.stylesheets),t.unsuspend)){var d=t.unsuspend;t.unsuspend=null,d()}},(t.imgBytes>Kd?50:800)+i);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(h)}}:null}function xc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Mc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Vc=null;function Mc(t,i){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Vc=new Map,i.forEach(Zb,t),Vc=null,xc.call(t))}function Zb(t,i){if(!(i.state.loading&4)){var a=Vc.get(t);if(a)var o=a.get(null);else{a=new Map,Vc.set(t,a);for(var h=t.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var _=h[d];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}h=i.instance,_=h.getAttribute("data-precedence"),d=a.get(_)||o,d===o&&a.set(null,h),a.set(_,h),this.count++,o=xc.bind(this),h.addEventListener("load",o),h.addEventListener("error",o),d?d.parentNode.insertBefore(h,d.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(h,t.firstChild)),i.state.loading|=4}}var bl={$$typeof:Ee,Provider:null,Consumer:null,_currentValue:ce,_currentValue2:ce,_threadCount:0};function Wb(t,i,a,o,h,d,_,E,I){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=hi(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hi(0),this.hiddenUpdates=hi(null),this.identifierPrefix=o,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function fv(t,i,a,o,h,d,_,E,I,z,F,Q){return t=new Wb(t,i,a,_,I,z,F,Q,E),i=1,d===!0&&(i|=24),d=_n(3,null,null,i),t.current=d,d.stateNode=t,i=wf(),i.refCount++,t.pooledCache=i,i.refCount++,d.memoizedState={element:o,isDehydrated:a,cache:i},Nf(d),t}function dv(t){return t?(t=Ca,t):Ca}function mv(t,i,a,o,h,d){h=dv(h),o.context===null?o.context=h:o.pendingContext=h,o=Or(i),o.payload={element:a},d=d===void 0?null:d,d!==null&&(o.callback=d),a=xr(t,o,i),a!==null&&(hn(a,t,i),nl(a,t,i))}function pv(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Yd(t,i){pv(t,i),(t=t.alternate)&&pv(t,i)}function gv(t){if(t.tag===13||t.tag===31){var i=xs(t,67108864);i!==null&&hn(i,t,67108864),Yd(t,67108864)}}function yv(t){if(t.tag===13||t.tag===31){var i=Sn();i=Es(i);var a=xs(t,i);a!==null&&hn(a,t,i),Yd(t,i)}}var kc=!0;function e1(t,i,a,o){var h=G.T;G.T=null;var d=te.p;try{te.p=2,Qd(t,i,a,o)}finally{te.p=d,G.T=h}}function t1(t,i,a,o){var h=G.T;G.T=null;var d=te.p;try{te.p=8,Qd(t,i,a,o)}finally{te.p=d,G.T=h}}function Qd(t,i,a,o){if(kc){var h=Xd(o);if(h===null)Md(t,i,o,Lc,a),vv(t,o);else if(i1(h,t,i,a,o))o.stopPropagation();else if(vv(t,o),i&4&&-1<n1.indexOf(t)){for(;h!==null;){var d=Cn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var _=ui(d.pendingLanes);if(_!==0){var E=d;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var I=1<<31-ft(_);E.entanglements[1]|=I,_&=~I}Ci(d),(Be&6)===0&&(_c=en()+500,_l(0))}}break;case 31:case 13:E=xs(d,2),E!==null&&hn(E,d,2),Ec(),Yd(d,2)}if(d=Xd(o),d===null&&Md(t,i,o,Lc,a),d===h)break;h=d}h!==null&&o.stopPropagation()}else Md(t,i,o,null,a)}}function Xd(t){return t=Nn(t),$d(t)}var Lc=null;function $d(t){if(Lc=null,t=mi(t),t!==null){var i=u(t);if(i===null)t=null;else{var a=i.tag;if(a===13){if(t=f(i),t!==null)return t;t=null}else if(a===31){if(t=p(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null)}}return Lc=t,null}function _v(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(gs()){case Io:return 2;case Co:return 8;case gr:case tf:return 32;case mu:return 268435456;default:return 32}default:return 32}}var Jd=!1,Hr=null,Fr=null,Gr=null,wl=new Map,Rl=new Map,Kr=[],n1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function vv(t,i){switch(t){case"focusin":case"focusout":Hr=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Gr=null;break;case"pointerover":case"pointerout":wl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rl.delete(i.pointerId)}}function Il(t,i,a,o,h,d){return t===null||t.nativeEvent!==d?(t={blockedOn:i,domEventName:a,eventSystemFlags:o,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Cn(i),i!==null&&gv(i)),t):(t.eventSystemFlags|=o,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function i1(t,i,a,o,h){switch(i){case"focusin":return Hr=Il(Hr,t,i,a,o,h),!0;case"dragenter":return Fr=Il(Fr,t,i,a,o,h),!0;case"mouseover":return Gr=Il(Gr,t,i,a,o,h),!0;case"pointerover":var d=h.pointerId;return wl.set(d,Il(wl.get(d)||null,t,i,a,o,h)),!0;case"gotpointercapture":return d=h.pointerId,Rl.set(d,Il(Rl.get(d)||null,t,i,a,o,h)),!0}return!1}function Ev(t){var i=mi(t.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){t.blockedOn=i,Kn(t.priority,function(){yv(a)});return}}else if(i===31){if(i=p(a),i!==null){t.blockedOn=i,Kn(t.priority,function(){yv(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Pc(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=Xd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);jo=o,a.target.dispatchEvent(o),jo=null}else return i=Cn(a),i!==null&&gv(i),t.blockedOn=a,!1;i.shift()}return!0}function Tv(t,i,a){Pc(t)&&a.delete(i)}function r1(){Jd=!1,Hr!==null&&Pc(Hr)&&(Hr=null),Fr!==null&&Pc(Fr)&&(Fr=null),Gr!==null&&Pc(Gr)&&(Gr=null),wl.forEach(Tv),Rl.forEach(Tv)}function Uc(t,i){t.blockedOn===i&&(t.blockedOn=null,Jd||(Jd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,r1)))}var zc=null;function Av(t){zc!==t&&(zc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){zc===t&&(zc=null);for(var i=0;i<t.length;i+=3){var a=t[i],o=t[i+1],h=t[i+2];if(typeof o!="function"){if($d(o||a)===null)continue;break}var d=Cn(a);d!==null&&(t.splice(i,3),i-=3,Xf(d,{pending:!0,data:h,method:a.method,action:o},o,h))}}))}function Za(t){function i(I){return Uc(I,t)}Hr!==null&&Uc(Hr,t),Fr!==null&&Uc(Fr,t),Gr!==null&&Uc(Gr,t),wl.forEach(i),Rl.forEach(i);for(var a=0;a<Kr.length;a++){var o=Kr[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Kr.length&&(a=Kr[0],a.blockedOn===null);)Ev(a),a.blockedOn===null&&Kr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var h=a[o],d=a[o+1],_=h[kt]||null;if(typeof d=="function")_||Av(a);else if(_){var E=null;if(d&&d.hasAttribute("formAction")){if(h=d,_=d[kt]||null)E=_.formAction;else if($d(h)!==null)continue}else E=_.action;typeof E=="function"?a[o+1]=E:(a.splice(o,3),o-=3),Av(a)}}}function Sv(){function t(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(_){return h=_})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,h=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Zd(t){this._internalRoot=t}jc.prototype.render=Zd.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(s(409));var a=i.current,o=Sn();mv(a,o,t,i,null,null)},jc.prototype.unmount=Zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;mv(t.current,2,null,t,null,null),Ec(),i[fi]=null}};function jc(t){this._internalRoot=t}jc.prototype.unstable_scheduleHydration=function(t){if(t){var i=Eu();t={blockedOn:null,target:t,priority:i};for(var a=0;a<Kr.length&&i!==0&&i<Kr[a].priority;a++);Kr.splice(a,0,t),a===0&&Ev(t)}};var bv=e.version;if(bv!=="19.2.4")throw Error(s(527,bv,"19.2.4"));te.findDOMNode=function(t){var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(i),t=t!==null?T(t):null,t=t===null?null:t.stateNode,t};var s1={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bc.isDisabled&&Bc.supportsFiber)try{Fn=Bc.inject(s1),zt=Bc}catch{}}return Nl.createRoot=function(t,i){if(!l(t))throw Error(s(299));var a=!1,o="",h=Oy,d=xy,_=Vy;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(o=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(_=i.onRecoverableError)),i=fv(t,1,!1,null,null,a,o,null,h,d,_,Sv),t[fi]=i.current,Vd(t),new Zd(i)},Nl.hydrateRoot=function(t,i,a){if(!l(t))throw Error(s(299));var o=!1,h="",d=Oy,_=xy,E=Vy,I=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),i=fv(t,1,!0,i,a??null,o,h,I,d,_,E,Sv),i.context=dv(null),a=i.current,o=Sn(),o=Es(o),h=Or(o),h.callback=null,xr(a,h,o),a=o,i.current.lanes=a,_s(i,a),Ci(i),t[fi]=i.current,Vd(t),new jc(i)},Nl.version="19.2.4",Nl}var Mv;function g1(){if(Mv)return tm.exports;Mv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),tm.exports=p1(),tm.exports}var y1=g1();const _1=w0(y1),v1=()=>{};var kv={};/**
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
 */const R0=function(r){const e=[];let n=0;for(let s=0;s<r.length;s++){let l=r.charCodeAt(s);l<128?e[n++]=l:l<2048?(e[n++]=l>>6|192,e[n++]=l&63|128):(l&64512)===55296&&s+1<r.length&&(r.charCodeAt(s+1)&64512)===56320?(l=65536+((l&1023)<<10)+(r.charCodeAt(++s)&1023),e[n++]=l>>18|240,e[n++]=l>>12&63|128,e[n++]=l>>6&63|128,e[n++]=l&63|128):(e[n++]=l>>12|224,e[n++]=l>>6&63|128,e[n++]=l&63|128)}return e},E1=function(r){const e=[];let n=0,s=0;for(;n<r.length;){const l=r[n++];if(l<128)e[s++]=String.fromCharCode(l);else if(l>191&&l<224){const u=r[n++];e[s++]=String.fromCharCode((l&31)<<6|u&63)}else if(l>239&&l<365){const u=r[n++],f=r[n++],p=r[n++],y=((l&7)<<18|(u&63)<<12|(f&63)<<6|p&63)-65536;e[s++]=String.fromCharCode(55296+(y>>10)),e[s++]=String.fromCharCode(56320+(y&1023))}else{const u=r[n++],f=r[n++];e[s++]=String.fromCharCode((l&15)<<12|(u&63)<<6|f&63)}}return e.join("")},I0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let l=0;l<r.length;l+=3){const u=r[l],f=l+1<r.length,p=f?r[l+1]:0,y=l+2<r.length,g=y?r[l+2]:0,T=u>>2,S=(u&3)<<4|p>>4;let b=(p&15)<<2|g>>6,q=g&63;y||(q=64,f||(b=64)),s.push(n[T],n[S],n[b],n[q])}return s.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(R0(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):E1(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let l=0;l<r.length;){const u=n[r.charAt(l++)],p=l<r.length?n[r.charAt(l)]:0;++l;const g=l<r.length?n[r.charAt(l)]:64;++l;const S=l<r.length?n[r.charAt(l)]:64;if(++l,u==null||p==null||g==null||S==null)throw new T1;const b=u<<2|p>>4;if(s.push(b),g!==64){const q=p<<4&240|g>>2;if(s.push(q),S!==64){const Z=g<<6&192|S;s.push(Z)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class T1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const A1=function(r){const e=R0(r);return I0.encodeByteArray(e,!0)},rh=function(r){return A1(r).replace(/\./g,"")},C0=function(r){try{return I0.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function S1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const b1=()=>S1().__FIREBASE_DEFAULTS__,w1=()=>{if(typeof process>"u"||typeof kv>"u")return;const r=kv.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},R1=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&C0(r[1]);return e&&JSON.parse(e)},Ih=()=>{try{return v1()||b1()||w1()||R1()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},N0=r=>{var e,n;return(n=(e=Ih())==null?void 0:e.emulatorHosts)==null?void 0:n[r]},I1=r=>{const e=N0(r);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},D0=()=>{var r;return(r=Ih())==null?void 0:r.config},O0=r=>{var e;return(e=Ih())==null?void 0:e[`_${r}`]};/**
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
 */class C1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function po(r){try{return(r.startsWith("http://")||r.startsWith("https://")?new URL(r).hostname:r).endsWith(".cloudworkstations.dev")}catch{return!1}}async function x0(r){return(await fetch(r,{credentials:"include"})).ok}/**
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
 */function N1(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",l=r.iat||0,u=r.sub||r.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${s}`,aud:s,iat:l,exp:l+3600,auth_time:l,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...r};return[rh(JSON.stringify(n)),rh(JSON.stringify(f)),""].join(".")}const Pl={};function D1(){const r={prod:[],emulator:[]};for(const e of Object.keys(Pl))Pl[e]?r.emulator.push(e):r.prod.push(e);return r}function O1(r){let e=document.getElementById(r),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",r),n=!0),{created:n,element:e}}let Lv=!1;function V0(r,e){if(typeof window>"u"||typeof document>"u"||!po(window.location.host)||Pl[r]===e||Pl[r]||Lv)return;Pl[r]=e;function n(b){return`__firebase__banner__${b}`}const s="__firebase__banner",u=D1().prod.length>0;function f(){const b=document.getElementById(s);b&&b.remove()}function p(b){b.style.display="flex",b.style.background="#7faaf0",b.style.position="fixed",b.style.bottom="5px",b.style.left="5px",b.style.padding=".5em",b.style.borderRadius="5px",b.style.alignItems="center"}function y(b,q){b.setAttribute("width","24"),b.setAttribute("id",q),b.setAttribute("height","24"),b.setAttribute("viewBox","0 0 24 24"),b.setAttribute("fill","none"),b.style.marginLeft="-6px"}function g(){const b=document.createElement("span");return b.style.cursor="pointer",b.style.marginLeft="16px",b.style.fontSize="24px",b.innerHTML=" &times;",b.onclick=()=>{Lv=!0,f()},b}function T(b,q){b.setAttribute("id",q),b.innerText="Learn more",b.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",b.setAttribute("target","__blank"),b.style.paddingLeft="5px",b.style.textDecoration="underline"}function S(){const b=O1(s),q=n("text"),Z=document.getElementById(q)||document.createElement("span"),J=n("learnmore"),W=document.getElementById(J)||document.createElement("a"),he=n("preprendIcon"),ve=document.getElementById(he)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(b.created){const Ee=b.element;p(Ee),T(W,J);const Je=g();y(ve,he),Ee.append(ve,Z,W,Je),document.body.appendChild(Ee)}u?(Z.innerText="Preview backend disconnected.",ve.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(ve.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Z.innerText="Preview backend running in this workspace."),Z.setAttribute("id",q)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",S):S()}/**
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
 */function Zt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function x1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Zt())}function V1(){var e;const r=(e=Ih())==null?void 0:e.forceEnvironment;if(r==="node")return!0;if(r==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function M1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function k1(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function L1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function P1(){const r=Zt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function U1(){return!V1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function M0(){try{return typeof indexedDB=="object"}catch{return!1}}function k0(){return new Promise((r,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",l=self.indexedDB.open(s);l.onsuccess=()=>{l.result.close(),n||self.indexedDB.deleteDatabase(s),r(!0)},l.onupgradeneeded=()=>{n=!1},l.onerror=()=>{var u;e(((u=l.error)==null?void 0:u.message)||"")}}catch(n){e(n)}})}function z1(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const j1="FirebaseError";class Ui extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=j1,Object.setPrototypeOf(this,Ui.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sa.prototype.create)}}class sa{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},l=`${this.service}/${e}`,u=this.errors[e],f=u?B1(u,s):"Error",p=`${this.serviceName}: ${f} (${l}).`;return new Ui(l,p,s)}}function B1(r,e){return r.replace(q1,(n,s)=>{const l=e[s];return l!=null?String(l):`<${s}?>`})}const q1=/\{\$([^}]+)}/g;function H1(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function $s(r,e){if(r===e)return!0;const n=Object.keys(r),s=Object.keys(e);for(const l of n){if(!s.includes(l))return!1;const u=r[l],f=e[l];if(Pv(u)&&Pv(f)){if(!$s(u,f))return!1}else if(u!==f)return!1}for(const l of s)if(!n.includes(l))return!1;return!0}function Pv(r){return r!==null&&typeof r=="object"}/**
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
 */function nu(r){const e=[];for(const[n,s]of Object.entries(r))Array.isArray(s)?s.forEach(l=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(l))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function Ol(r){const e={};return r.replace(/^\?/,"").split("&").forEach(s=>{if(s){const[l,u]=s.split("=");e[decodeURIComponent(l)]=decodeURIComponent(u)}}),e}function xl(r){const e=r.indexOf("?");if(!e)return"";const n=r.indexOf("#",e);return r.substring(e,n>0?n:void 0)}function F1(r,e){const n=new G1(r,e);return n.subscribe.bind(n)}class G1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let l;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");K1(e,["next","error","complete"])?l=e:l={next:e,error:n,complete:s},l.next===void 0&&(l.next=sm),l.error===void 0&&(l.error=sm),l.complete===void 0&&(l.complete=sm);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?l.error(this.finalError):l.complete()}catch{}}),this.observers.push(l),u}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function K1(r,e){if(typeof r!="object"||r===null)return!1;for(const n of e)if(n in r&&typeof r[n]=="function")return!0;return!1}function sm(){}/**
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
 */function yt(r){return r&&r._delegate?r._delegate:r}class ri{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */class Y1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new C1;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const l=this.getOrInitializeService({instanceIdentifier:n});l&&s.resolve(l)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(X1(e))try{this.getOrInitializeService({instanceIdentifier:Gs})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:l});s.resolve(u)}catch{}}}}clearInstance(e=Gs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gs){return this.instances.has(e)}getOptions(e=Gs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const l=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[u,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);s===p&&f.resolve(l)}return l}onInit(e,n){const s=this.normalizeInstanceIdentifier(n),l=this.onInitCallbacks.get(s)??new Set;l.add(e),this.onInitCallbacks.set(s,l);const u=this.instances.get(s);return u&&e(u,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const l of s)try{l(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Q1(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Gs){return this.component?this.component.multipleInstances?e:Gs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Q1(r){return r===Gs?void 0:r}function X1(r){return r.instantiationMode==="EAGER"}/**
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
 */class $1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Y1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var De;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(De||(De={}));const J1={debug:De.DEBUG,verbose:De.VERBOSE,info:De.INFO,warn:De.WARN,error:De.ERROR,silent:De.SILENT},Z1=De.INFO,W1={[De.DEBUG]:"log",[De.VERBOSE]:"log",[De.INFO]:"info",[De.WARN]:"warn",[De.ERROR]:"error"},ew=(r,e,...n)=>{if(e<r.logLevel)return;const s=new Date().toISOString(),l=W1[e];if(l)console[l](`[${s}]  ${r.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tp{constructor(e){this.name=e,this._logLevel=Z1,this._logHandler=ew,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in De))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?J1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,De.DEBUG,...e),this._logHandler(this,De.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,De.VERBOSE,...e),this._logHandler(this,De.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,De.INFO,...e),this._logHandler(this,De.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,De.WARN,...e),this._logHandler(this,De.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,De.ERROR,...e),this._logHandler(this,De.ERROR,...e)}}const tw=(r,e)=>e.some(n=>r instanceof n);let Uv,zv;function nw(){return Uv||(Uv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function iw(){return zv||(zv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const L0=new WeakMap,Sm=new WeakMap,P0=new WeakMap,am=new WeakMap,np=new WeakMap;function rw(r){const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("success",u),r.removeEventListener("error",f)},u=()=>{n(or(r.result)),l()},f=()=>{s(r.error),l()};r.addEventListener("success",u),r.addEventListener("error",f)});return e.then(n=>{n instanceof IDBCursor&&L0.set(n,r)}).catch(()=>{}),np.set(e,r),e}function sw(r){if(Sm.has(r))return;const e=new Promise((n,s)=>{const l=()=>{r.removeEventListener("complete",u),r.removeEventListener("error",f),r.removeEventListener("abort",f)},u=()=>{n(),l()},f=()=>{s(r.error||new DOMException("AbortError","AbortError")),l()};r.addEventListener("complete",u),r.addEventListener("error",f),r.addEventListener("abort",f)});Sm.set(r,e)}let bm={get(r,e,n){if(r instanceof IDBTransaction){if(e==="done")return Sm.get(r);if(e==="objectStoreNames")return r.objectStoreNames||P0.get(r);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return or(r[e])},set(r,e,n){return r[e]=n,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function aw(r){bm=r(bm)}function ow(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=r.call(om(this),e,...n);return P0.set(s,e.sort?e.sort():[e]),or(s)}:iw().includes(r)?function(...e){return r.apply(om(this),e),or(L0.get(this))}:function(...e){return or(r.apply(om(this),e))}}function lw(r){return typeof r=="function"?ow(r):(r instanceof IDBTransaction&&sw(r),tw(r,nw())?new Proxy(r,bm):r)}function or(r){if(r instanceof IDBRequest)return rw(r);if(am.has(r))return am.get(r);const e=lw(r);return e!==r&&(am.set(r,e),np.set(e,r)),e}const om=r=>np.get(r);function Ch(r,e,{blocked:n,upgrade:s,blocking:l,terminated:u}={}){const f=indexedDB.open(r,e),p=or(f);return s&&f.addEventListener("upgradeneeded",y=>{s(or(f.result),y.oldVersion,y.newVersion,or(f.transaction),y)}),n&&f.addEventListener("blocked",y=>n(y.oldVersion,y.newVersion,y)),p.then(y=>{u&&y.addEventListener("close",()=>u()),l&&y.addEventListener("versionchange",g=>l(g.oldVersion,g.newVersion,g))}).catch(()=>{}),p}function lm(r,{blocked:e}={}){const n=indexedDB.deleteDatabase(r);return e&&n.addEventListener("blocked",s=>e(s.oldVersion,s)),or(n).then(()=>{})}const uw=["get","getKey","getAll","getAllKeys","count"],cw=["put","add","delete","clear"],um=new Map;function jv(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(um.get(e))return um.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,l=cw.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(l||uw.includes(n)))return;const u=async function(f,...p){const y=this.transaction(f,l?"readwrite":"readonly");let g=y.store;return s&&(g=g.index(p.shift())),(await Promise.all([g[n](...p),l&&y.done]))[0]};return um.set(e,u),u}aw(r=>({...r,get:(e,n,s)=>jv(e,n)||r.get(e,n,s),has:(e,n)=>!!jv(e,n)||r.has(e,n)}));/**
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
 */class hw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(fw(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function fw(r){const e=r.getComponent();return(e==null?void 0:e.type)==="VERSION"}const wm="@firebase/app",Bv="0.14.8";/**
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
 */const cr=new tp("@firebase/app"),dw="@firebase/app-compat",mw="@firebase/analytics-compat",pw="@firebase/analytics",gw="@firebase/app-check-compat",yw="@firebase/app-check",_w="@firebase/auth",vw="@firebase/auth-compat",Ew="@firebase/database",Tw="@firebase/data-connect",Aw="@firebase/database-compat",Sw="@firebase/functions",bw="@firebase/functions-compat",ww="@firebase/installations",Rw="@firebase/installations-compat",Iw="@firebase/messaging",Cw="@firebase/messaging-compat",Nw="@firebase/performance",Dw="@firebase/performance-compat",Ow="@firebase/remote-config",xw="@firebase/remote-config-compat",Vw="@firebase/storage",Mw="@firebase/storage-compat",kw="@firebase/firestore",Lw="@firebase/ai",Pw="@firebase/firestore-compat",Uw="firebase",zw="12.9.0";/**
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
 */const Rm="[DEFAULT]",jw={[wm]:"fire-core",[dw]:"fire-core-compat",[pw]:"fire-analytics",[mw]:"fire-analytics-compat",[yw]:"fire-app-check",[gw]:"fire-app-check-compat",[_w]:"fire-auth",[vw]:"fire-auth-compat",[Ew]:"fire-rtdb",[Tw]:"fire-data-connect",[Aw]:"fire-rtdb-compat",[Sw]:"fire-fn",[bw]:"fire-fn-compat",[ww]:"fire-iid",[Rw]:"fire-iid-compat",[Iw]:"fire-fcm",[Cw]:"fire-fcm-compat",[Nw]:"fire-perf",[Dw]:"fire-perf-compat",[Ow]:"fire-rc",[xw]:"fire-rc-compat",[Vw]:"fire-gcs",[Mw]:"fire-gcs-compat",[kw]:"fire-fst",[Pw]:"fire-fst-compat",[Lw]:"fire-vertex","fire-js":"fire-js",[Uw]:"fire-js-all"};/**
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
 */const sh=new Map,Bw=new Map,Im=new Map;function qv(r,e){try{r.container.addComponent(e)}catch(n){cr.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,n)}}function Li(r){const e=r.name;if(Im.has(e))return cr.debug(`There were multiple attempts to register component ${e}.`),!1;Im.set(e,r);for(const n of sh.values())qv(n,r);for(const n of Bw.values())qv(n,r);return!0}function go(r,e){const n=r.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),r.container.getProvider(e)}function jn(r){return r==null?!1:r.settings!==void 0}/**
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
 */const qw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},es=new sa("app","Firebase",qw);/**
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
 */class Hw{constructor(e,n,s){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ri("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw es.create("app-deleted",{appName:this._name})}}/**
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
 */const yo=zw;function U0(r,e={}){let n=r;typeof e!="object"&&(e={name:e});const s={name:Rm,automaticDataCollectionEnabled:!0,...e},l=s.name;if(typeof l!="string"||!l)throw es.create("bad-app-name",{appName:String(l)});if(n||(n=D0()),!n)throw es.create("no-options");const u=sh.get(l);if(u){if($s(n,u.options)&&$s(s,u.config))return u;throw es.create("duplicate-app",{appName:l})}const f=new $1(l);for(const y of Im.values())f.addComponent(y);const p=new Hw(n,s,f);return sh.set(l,p),p}function ip(r=Rm){const e=sh.get(r);if(!e&&r===Rm&&D0())return U0();if(!e)throw es.create("no-app",{appName:r});return e}function qn(r,e,n){let s=jw[r]??r;n&&(s+=`-${n}`);const l=s.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const f=[`Unable to register library "${s}" with version "${e}":`];l&&f.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&u&&f.push("and"),u&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cr.warn(f.join(" "));return}Li(new ri(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const Fw="firebase-heartbeat-database",Gw=1,Hl="firebase-heartbeat-store";let cm=null;function z0(){return cm||(cm=Ch(Fw,Gw,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Hl)}catch(n){console.warn(n)}}}}).catch(r=>{throw es.create("idb-open",{originalErrorMessage:r.message})})),cm}async function Kw(r){try{const n=(await z0()).transaction(Hl),s=await n.objectStore(Hl).get(j0(r));return await n.done,s}catch(e){if(e instanceof Ui)cr.warn(e.message);else{const n=es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cr.warn(n.message)}}}async function Hv(r,e){try{const s=(await z0()).transaction(Hl,"readwrite");await s.objectStore(Hl).put(e,j0(r)),await s.done}catch(n){if(n instanceof Ui)cr.warn(n.message);else{const s=es.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cr.warn(s.message)}}}function j0(r){return`${r.name}!${r.options.appId}`}/**
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
 */const Yw=1024,Qw=30;class Xw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Jw(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const l=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=Fv();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:l}),this._heartbeatsCache.heartbeats.length>Qw){const f=Zw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){cr.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fv(),{heartbeatsToSend:s,unsentEntries:l}=$w(this._heartbeatsCache.heartbeats),u=rh(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,l.length>0?(this._heartbeatsCache.heartbeats=l,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return cr.warn(n),""}}}function Fv(){return new Date().toISOString().substring(0,10)}function $w(r,e=Yw){const n=[];let s=r.slice();for(const l of r){const u=n.find(f=>f.agent===l.agent);if(u){if(u.dates.push(l.date),Gv(n)>e){u.dates.pop();break}}else if(n.push({agent:l.agent,dates:[l.date]}),Gv(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Jw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return M0()?k0().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Kw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Hv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return Hv(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Gv(r){return rh(JSON.stringify({version:2,heartbeats:r})).length}function Zw(r){if(r.length===0)return-1;let e=0,n=r[0].date;for(let s=1;s<r.length;s++)r[s].date<n&&(n=r[s].date,e=s);return e}/**
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
 */function Ww(r){Li(new ri("platform-logger",e=>new hw(e),"PRIVATE")),Li(new ri("heartbeat",e=>new Xw(e),"PRIVATE")),qn(wm,Bv,r),qn(wm,Bv,"esm2020"),qn("fire-js","")}Ww("");function B0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eR=B0,q0=new sa("auth","Firebase",B0());/**
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
 */const ah=new tp("@firebase/auth");function tR(r,...e){ah.logLevel<=De.WARN&&ah.warn(`Auth (${yo}): ${r}`,...e)}function Qc(r,...e){ah.logLevel<=De.ERROR&&ah.error(`Auth (${yo}): ${r}`,...e)}/**
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
 */function si(r,...e){throw rp(r,...e)}function Di(r,...e){return rp(r,...e)}function H0(r,e,n){const s={...eR(),[e]:n};return new sa("auth","Firebase",s).create(e,{appName:r.name})}function lr(r){return H0(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function rp(r,...e){if(typeof r!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=r.name),r._errorFactory.create(n,...s)}return q0.create(r,...e)}function de(r,e,...n){if(!r)throw rp(e,...n)}function sr(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Qc(e),new Error(e)}function hr(r,e){r||sr(e)}/**
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
 */function Cm(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.href)||""}function nR(){return Kv()==="http:"||Kv()==="https:"}function Kv(){var r;return typeof self<"u"&&((r=self.location)==null?void 0:r.protocol)||null}/**
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
 */function iR(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(nR()||k1()||"connection"in navigator)?navigator.onLine:!0}function rR(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
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
 */class iu{constructor(e,n){this.shortDelay=e,this.longDelay=n,hr(n>e,"Short delay should be less than long delay!"),this.isMobile=x1()||L1()}get(){return iR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function sp(r,e){hr(r.emulator,"Emulator should always be set here");const{url:n}=r.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class F0{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const sR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const aR=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],oR=new iu(3e4,6e4);function us(r,e){return r.tenantId&&!e.tenantId?{...e,tenantId:r.tenantId}:e}async function cs(r,e,n,s,l={}){return G0(r,l,async()=>{let u={},f={};s&&(e==="GET"?f=s:u={body:JSON.stringify(s)});const p=nu({key:r.config.apiKey,...f}).slice(1),y=await r._getAdditionalHeaders();y["Content-Type"]="application/json",r.languageCode&&(y["X-Firebase-Locale"]=r.languageCode);const g={method:e,headers:y,...u};return M1()||(g.referrerPolicy="no-referrer"),r.emulatorConfig&&po(r.emulatorConfig.host)&&(g.credentials="include"),F0.fetch()(await K0(r,r.config.apiHost,n,p),g)})}async function G0(r,e,n){r._canInitEmulator=!1;const s={...sR,...e};try{const l=new uR(r),u=await Promise.race([n(),l.promise]);l.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw qc(r,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const p=u.ok?f.errorMessage:f.error.message,[y,g]=p.split(" : ");if(y==="FEDERATED_USER_ID_ALREADY_LINKED")throw qc(r,"credential-already-in-use",f);if(y==="EMAIL_EXISTS")throw qc(r,"email-already-in-use",f);if(y==="USER_DISABLED")throw qc(r,"user-disabled",f);const T=s[y]||y.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw H0(r,T,g);si(r,T)}}catch(l){if(l instanceof Ui)throw l;si(r,"network-request-failed",{message:String(l)})}}async function ru(r,e,n,s,l={}){const u=await cs(r,e,n,s,l);return"mfaPendingCredential"in u&&si(r,"multi-factor-auth-required",{_serverResponse:u}),u}async function K0(r,e,n,s){const l=`${e}${n}?${s}`,u=r,f=u.config.emulator?sp(r.config,l):`${r.config.apiScheme}://${l}`;return aR.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}function lR(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class uR{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Di(this.auth,"network-request-failed")),oR.get())})}}function qc(r,e,n){const s={appName:r.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const l=Di(r,e,s);return l.customData._tokenResponse=n,l}function Yv(r){return r!==void 0&&r.enterprise!==void 0}class cR{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return lR(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function hR(r,e){return cs(r,"GET","/v2/recaptchaConfig",us(r,e))}/**
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
 */async function fR(r,e){return cs(r,"POST","/v1/accounts:delete",e)}async function oh(r,e){return cs(r,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ul(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function dR(r,e=!1){const n=yt(r),s=await n.getIdToken(e),l=ap(s);de(l&&l.exp&&l.auth_time&&l.iat,n.auth,"internal-error");const u=typeof l.firebase=="object"?l.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:l,token:s,authTime:Ul(hm(l.auth_time)),issuedAtTime:Ul(hm(l.iat)),expirationTime:Ul(hm(l.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function hm(r){return Number(r)*1e3}function ap(r){const[e,n,s]=r.split(".");if(e===void 0||n===void 0||s===void 0)return Qc("JWT malformed, contained fewer than 3 sections"),null;try{const l=C0(n);return l?JSON.parse(l):(Qc("Failed to decode base64 JWT payload"),null)}catch(l){return Qc("Caught error parsing JWT payload as JSON",l==null?void 0:l.toString()),null}}function Qv(r){const e=ap(r);return de(e,"internal-error"),de(typeof e.exp<"u","internal-error"),de(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fl(r,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ui&&mR(s)&&r.auth.currentUser===r&&await r.auth.signOut(),s}}function mR({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
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
 */class pR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Nm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ul(this.lastLoginAt),this.creationTime=Ul(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function lh(r){var S;const e=r.auth,n=await r.getIdToken(),s=await Fl(r,oh(e,{idToken:n}));de(s==null?void 0:s.users.length,e,"internal-error");const l=s.users[0];r._notifyReloadListener(l);const u=(S=l.providerUserInfo)!=null&&S.length?Y0(l.providerUserInfo):[],f=yR(r.providerData,u),p=r.isAnonymous,y=!(r.email&&l.passwordHash)&&!(f!=null&&f.length),g=p?y:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new Nm(l.createdAt,l.lastLoginAt),isAnonymous:g};Object.assign(r,T)}async function gR(r){const e=yt(r);await lh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function yR(r,e){return[...r.filter(s=>!e.some(l=>l.providerId===s.providerId)),...e]}function Y0(r){return r.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function _R(r,e){const n=await G0(r,{},async()=>{const s=nu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:l,apiKey:u}=r.config,f=await K0(r,l,"/v1/token",`key=${u}`),p=await r._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const y={method:"POST",headers:p,body:s};return r.emulatorConfig&&po(r.emulatorConfig.host)&&(y.credentials="include"),F0.fetch()(f,y)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vR(r,e){return cs(r,"POST","/v2/accounts:revokeToken",us(r,e))}/**
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
 */class ro{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){de(e.idToken,"internal-error"),de(typeof e.idToken<"u","internal-error"),de(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qv(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){de(e.length!==0,"internal-error");const n=Qv(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(de(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:l,expiresIn:u}=await _R(e,n);this.updateTokensAndExpiration(s,l,Number(u))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:l,expirationTime:u}=n,f=new ro;return s&&(de(typeof s=="string","internal-error",{appName:e}),f.refreshToken=s),l&&(de(typeof l=="string","internal-error",{appName:e}),f.accessToken=l),u&&(de(typeof u=="number","internal-error",{appName:e}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ro,this.toJSON())}_performRefresh(){return sr("not implemented")}}/**
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
 */function Qr(r,e){de(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class ni{constructor({uid:e,auth:n,stsTokenManager:s,...l}){this.providerId="firebase",this.proactiveRefresh=new pR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Nm(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await Fl(this,this.stsTokenManager.getToken(this.auth,e));return de(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return dR(this,e)}reload(){return gR(this)}_assign(e){this!==e&&(de(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ni({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){de(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await lh(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jn(this.auth.app))return Promise.reject(lr(this.auth));const e=await this.getIdToken();return await Fl(this,fR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const s=n.displayName??void 0,l=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,p=n.tenantId??void 0,y=n._redirectEventId??void 0,g=n.createdAt??void 0,T=n.lastLoginAt??void 0,{uid:S,emailVerified:b,isAnonymous:q,providerData:Z,stsTokenManager:J}=n;de(S&&J,e,"internal-error");const W=ro.fromJSON(this.name,J);de(typeof S=="string",e,"internal-error"),Qr(s,e.name),Qr(l,e.name),de(typeof b=="boolean",e,"internal-error"),de(typeof q=="boolean",e,"internal-error"),Qr(u,e.name),Qr(f,e.name),Qr(p,e.name),Qr(y,e.name),Qr(g,e.name),Qr(T,e.name);const he=new ni({uid:S,auth:e,email:l,emailVerified:b,displayName:s,isAnonymous:q,photoURL:f,phoneNumber:u,tenantId:p,stsTokenManager:W,createdAt:g,lastLoginAt:T});return Z&&Array.isArray(Z)&&(he.providerData=Z.map(ve=>({...ve}))),y&&(he._redirectEventId=y),he}static async _fromIdTokenResponse(e,n,s=!1){const l=new ro;l.updateFromServerResponse(n);const u=new ni({uid:n.localId,auth:e,stsTokenManager:l,isAnonymous:s});return await lh(u),u}static async _fromGetAccountInfoResponse(e,n,s){const l=n.users[0];de(l.localId!==void 0,"internal-error");const u=l.providerUserInfo!==void 0?Y0(l.providerUserInfo):[],f=!(l.email&&l.passwordHash)&&!(u!=null&&u.length),p=new ro;p.updateFromIdToken(s);const y=new ni({uid:l.localId,auth:e,stsTokenManager:p,isAnonymous:f}),g={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:u,metadata:new Nm(l.createdAt,l.lastLoginAt),isAnonymous:!(l.email&&l.passwordHash)&&!(u!=null&&u.length)};return Object.assign(y,g),y}}/**
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
 */const Xv=new Map;function ar(r){hr(r instanceof Function,"Expected a class definition");let e=Xv.get(r);return e?(hr(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,Xv.set(r,e),e)}/**
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
 */class Q0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Q0.type="NONE";const $v=Q0;/**
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
 */function Xc(r,e,n){return`firebase:${r}:${e}:${n}`}class so{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:l,name:u}=this.auth;this.fullUserKey=Xc(this.userKey,l.apiKey,u),this.fullPersistenceKey=Xc("persistence",l.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await oh(this.auth,{idToken:e}).catch(()=>{});return n?ni._fromGetAccountInfoResponse(this.auth,n,e):null}return ni._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new so(ar($v),e,s);const l=(await Promise.all(n.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let u=l[0]||ar($v);const f=Xc(s,e.config.apiKey,e.name);let p=null;for(const g of n)try{const T=await g._get(f);if(T){let S;if(typeof T=="string"){const b=await oh(e,{idToken:T}).catch(()=>{});if(!b)break;S=await ni._fromGetAccountInfoResponse(e,b,T)}else S=ni._fromJSON(e,T);g!==u&&(p=S),u=g;break}}catch{}const y=l.filter(g=>g._shouldAllowMigration);return!u._shouldAllowMigration||!y.length?new so(u,e,s):(u=y[0],p&&await u._set(f,p.toJSON()),await Promise.all(n.map(async g=>{if(g!==u)try{await g._remove(f)}catch{}})),new so(u,e,s))}}/**
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
 */function Jv(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Z0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(X0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eT(e))return"Blackberry";if(tT(e))return"Webos";if($0(e))return"Safari";if((e.includes("chrome/")||J0(e))&&!e.includes("edge/"))return"Chrome";if(W0(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=r.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function X0(r=Zt()){return/firefox\//i.test(r)}function $0(r=Zt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function J0(r=Zt()){return/crios\//i.test(r)}function Z0(r=Zt()){return/iemobile/i.test(r)}function W0(r=Zt()){return/android/i.test(r)}function eT(r=Zt()){return/blackberry/i.test(r)}function tT(r=Zt()){return/webos/i.test(r)}function op(r=Zt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function ER(r=Zt()){var e;return op(r)&&!!((e=window.navigator)!=null&&e.standalone)}function TR(){return P1()&&document.documentMode===10}function nT(r=Zt()){return op(r)||W0(r)||tT(r)||eT(r)||/windows phone/i.test(r)||Z0(r)}/**
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
 */function iT(r,e=[]){let n;switch(r){case"Browser":n=Jv(Zt());break;case"Worker":n=`${Jv(Zt())}-${r}`;break;default:n=r}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${yo}/${s}`}/**
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
 */class AR{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=u=>new Promise((f,p)=>{try{const y=e(u);f(y)}catch(y){p(y)}});s.onAbort=n,this.queue.push(s);const l=this.queue.length-1;return()=>{this.queue[l]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const l of n)try{l()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function SR(r,e={}){return cs(r,"GET","/v2/passwordPolicy",us(r,e))}/**
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
 */const bR=6;class wR{constructor(e){var s;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??bR,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=e.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,l=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),l&&(n.meetsMaxPasswordLength=e.length<=l)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let l=0;l<e.length;l++)s=e.charAt(l),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,l,u){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=l)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=u))}}/**
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
 */class RR{constructor(e,n,s,l){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=l,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zv(this),this.idTokenSubscription=new Zv(this),this.beforeStateQueue=new AR(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=q0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=l.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=ar(n)),this._initializationPromise=this.queue(async()=>{var s,l,u;if(!this._deleted&&(this.persistenceManager=await so.create(this,e),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((l=this._popupRedirectResolver)!=null&&l._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await oh(this,{idToken:e}),s=await ni._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var u;if(jn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(p,p))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,p=s==null?void 0:s._redirectEventId,y=await this.tryRedirectSignIn(e);(!f||f===p)&&(y!=null&&y.user)&&(s=y.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(f){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return de(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await lh(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=rR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jn(this.app))return Promise.reject(lr(this));const n=e?yt(e):null;return n&&de(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&de(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jn(this.app)?Promise.reject(lr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jn(this.app)?Promise.reject(lr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ar(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await SR(this),n=new wR(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new sa("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await vR(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&ar(e)||this._popupRedirectResolver;de(n,this,"argument-error"),this.redirectPersistenceManager=await so.create(this,[ar(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,l){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(de(p,this,"internal-error"),p.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const y=e.addObserver(n,s,l);return()=>{f=!0,y()}}else{const y=e.addObserver(n);return()=>{f=!0,y()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return de(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=iT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var l;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((l=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:l.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(e["X-Firebase-AppCheck"]=s),e}async _getAppCheckToken(){var n;if(jn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&tR(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function aa(r){return yt(r)}class Zv{constructor(e){this.auth=e,this.observer=null,this.addObserver=F1(n=>this.observer=n)}get next(){return de(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Nh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function IR(r){Nh=r}function rT(r){return Nh.loadJS(r)}function CR(){return Nh.recaptchaEnterpriseScript}function NR(){return Nh.gapiScript}function DR(r){return`__${r}${Math.floor(Math.random()*1e6)}`}class OR{constructor(){this.enterprise=new xR}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class xR{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const VR="recaptcha-enterprise",sT="NO_RECAPTCHA";class MR{constructor(e){this.type=VR,this.auth=aa(e)}async verify(e="verify",n=!1){async function s(u){if(!n){if(u.tenantId==null&&u._agentRecaptchaConfig!=null)return u._agentRecaptchaConfig.siteKey;if(u.tenantId!=null&&u._tenantRecaptchaConfigs[u.tenantId]!==void 0)return u._tenantRecaptchaConfigs[u.tenantId].siteKey}return new Promise(async(f,p)=>{hR(u,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(y=>{if(y.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const g=new cR(y);return u.tenantId==null?u._agentRecaptchaConfig=g:u._tenantRecaptchaConfigs[u.tenantId]=g,f(g.siteKey)}}).catch(y=>{p(y)})})}function l(u,f,p){const y=window.grecaptcha;Yv(y)?y.enterprise.ready(()=>{y.enterprise.execute(u,{action:e}).then(g=>{f(g)}).catch(()=>{f(sT)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new OR().execute("siteKey",{action:"verify"}):new Promise((u,f)=>{s(this.auth).then(p=>{if(!n&&Yv(window.grecaptcha))l(p,u,f);else{if(typeof window>"u"){f(new Error("RecaptchaVerifier is only supported in browser"));return}let y=CR();y.length!==0&&(y+=p),rT(y).then(()=>{l(p,u,f)}).catch(g=>{f(g)})}}).catch(p=>{f(p)})})}}async function Wv(r,e,n,s=!1,l=!1){const u=new MR(r);let f;if(l)f=sT;else try{f=await u.verify(n)}catch{f=await u.verify(n,!0)}const p={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const y=p.phoneEnrollmentInfo.phoneNumber,g=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:y,recaptchaToken:g,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const y=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:y,captchaResponse:f,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return s?Object.assign(p,{captchaResp:f}):Object.assign(p,{captchaResponse:f}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Dm(r,e,n,s,l){var u;if((u=r._getRecaptchaConfig())!=null&&u.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const f=await Wv(r,e,n,n==="getOobCode");return s(r,f)}else return s(r,e).catch(async f=>{if(f.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const p=await Wv(r,e,n,n==="getOobCode");return s(r,p)}else return Promise.reject(f)})}/**
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
 */function kR(r,e){const n=go(r,"auth");if(n.isInitialized()){const l=n.getImmediate(),u=n.getOptions();if($s(u,e??{}))return l;si(l,"already-initialized")}return n.initialize({options:e})}function LR(r,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(ar);e!=null&&e.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function PR(r,e,n){const s=aa(r);de(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const l=!1,u=aT(e),{host:f,port:p}=UR(e),y=p===null?"":`:${p}`,g={url:`${u}//${f}${y}/`},T=Object.freeze({host:f,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:l})});if(!s._canInitEmulator){de(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),de($s(g,s.config.emulator)&&$s(T,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=g,s.emulatorConfig=T,s.settings.appVerificationDisabledForTesting=!0,po(f)?(x0(`${u}//${f}${y}`),V0("Auth",!0)):zR()}function aT(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function UR(r){const e=aT(r),n=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",l=/^(\[[^\]]+\])(:|$)/.exec(s);if(l){const u=l[1];return{host:u,port:eE(s.substr(u.length+1))}}else{const[u,f]=s.split(":");return{host:u,port:eE(f)}}}function eE(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function zR(){function r(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
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
 */class lp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sr("not implemented")}_getIdTokenResponse(e){return sr("not implemented")}_linkToIdToken(e,n){return sr("not implemented")}_getReauthenticationResolver(e){return sr("not implemented")}}async function jR(r,e){return cs(r,"POST","/v1/accounts:signUp",e)}/**
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
 */async function BR(r,e){return ru(r,"POST","/v1/accounts:signInWithPassword",us(r,e))}/**
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
 */async function qR(r,e){return ru(r,"POST","/v1/accounts:signInWithEmailLink",us(r,e))}async function HR(r,e){return ru(r,"POST","/v1/accounts:signInWithEmailLink",us(r,e))}/**
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
 */class Gl extends lp{constructor(e,n,s,l=null){super("password",s),this._email=e,this._password=n,this._tenantId=l}static _fromEmailAndPassword(e,n){return new Gl(e,n,"password")}static _fromEmailAndCode(e,n,s=null){return new Gl(e,n,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dm(e,n,"signInWithPassword",BR);case"emailLink":return qR(e,{email:this._email,oobCode:this._password});default:si(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const s={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Dm(e,s,"signUpPassword",jR);case"emailLink":return HR(e,{idToken:n,email:this._email,oobCode:this._password});default:si(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ao(r,e){return ru(r,"POST","/v1/accounts:signInWithIdp",us(r,e))}/**
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
 */const FR="http://localhost";class Js extends lp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Js(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):si("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:l,...u}=n;if(!s||!l)return null;const f=new Js(s,l);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(e){const n=this.buildRequest();return ao(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,ao(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ao(e,n)}buildRequest(){const e={requestUri:FR,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=nu(n)}return e}}/**
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
 */function GR(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function KR(r){const e=Ol(xl(r)).link,n=e?Ol(xl(e)).deep_link_id:null,s=Ol(xl(r)).deep_link_id;return(s?Ol(xl(s)).link:null)||s||n||e||r}class up{constructor(e){const n=Ol(xl(e)),s=n.apiKey??null,l=n.oobCode??null,u=GR(n.mode??null);de(s&&l&&u,"argument-error"),this.apiKey=s,this.operation=u,this.code=l,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=KR(e);try{return new up(n)}catch{return null}}}/**
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
 */class _o{constructor(){this.providerId=_o.PROVIDER_ID}static credential(e,n){return Gl._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const s=up.parseLink(n);return de(s,"argument-error"),Gl._fromEmailAndCode(e,s.code,s.tenantId)}}_o.PROVIDER_ID="password";_o.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_o.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class oT{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class su extends oT{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Xr extends su{constructor(){super("facebook.com")}static credential(e){return Js._fromParams({providerId:Xr.PROVIDER_ID,signInMethod:Xr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xr.credentialFromTaggedObject(e)}static credentialFromError(e){return Xr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xr.credential(e.oauthAccessToken)}catch{return null}}}Xr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xr.PROVIDER_ID="facebook.com";/**
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
 */class $r extends su{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Js._fromParams({providerId:$r.PROVIDER_ID,signInMethod:$r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return $r.credentialFromTaggedObject(e)}static credentialFromError(e){return $r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return $r.credential(n,s)}catch{return null}}}$r.GOOGLE_SIGN_IN_METHOD="google.com";$r.PROVIDER_ID="google.com";/**
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
 */class Jr extends su{constructor(){super("github.com")}static credential(e){return Js._fromParams({providerId:Jr.PROVIDER_ID,signInMethod:Jr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Jr.credentialFromTaggedObject(e)}static credentialFromError(e){return Jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Jr.credential(e.oauthAccessToken)}catch{return null}}}Jr.GITHUB_SIGN_IN_METHOD="github.com";Jr.PROVIDER_ID="github.com";/**
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
 */class Zr extends su{constructor(){super("twitter.com")}static credential(e,n){return Js._fromParams({providerId:Zr.PROVIDER_ID,signInMethod:Zr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Zr.credentialFromTaggedObject(e)}static credentialFromError(e){return Zr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Zr.credential(n,s)}catch{return null}}}Zr.TWITTER_SIGN_IN_METHOD="twitter.com";Zr.PROVIDER_ID="twitter.com";/**
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
 */async function YR(r,e){return ru(r,"POST","/v1/accounts:signUp",us(r,e))}/**
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
 */class Zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,l=!1){const u=await ni._fromIdTokenResponse(e,s,l),f=tE(s);return new Zs({user:u,providerId:f,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const l=tE(s);return new Zs({user:e,providerId:l,_tokenResponse:s,operationType:n})}}function tE(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
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
 */class uh extends Ui{constructor(e,n,s,l){super(n.code,n.message),this.operationType=s,this.user=l,Object.setPrototypeOf(this,uh.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,l){return new uh(e,n,s,l)}}function lT(r,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(r):n._getIdTokenResponse(r)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?uh._fromErrorAndOperation(r,u,e,s):u})}async function QR(r,e,n=!1){const s=await Fl(r,e._linkToIdToken(r.auth,await r.getIdToken()),n);return Zs._forOperation(r,"link",s)}/**
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
 */async function XR(r,e,n=!1){const{auth:s}=r;if(jn(s.app))return Promise.reject(lr(s));const l="reauthenticate";try{const u=await Fl(r,lT(s,l,e,r),n);de(u.idToken,s,"internal-error");const f=ap(u.idToken);de(f,s,"internal-error");const{sub:p}=f;return de(r.uid===p,s,"user-mismatch"),Zs._forOperation(r,l,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&si(s,"user-mismatch"),u}}/**
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
 */async function uT(r,e,n=!1){if(jn(r.app))return Promise.reject(lr(r));const s="signIn",l=await lT(r,s,e),u=await Zs._fromIdTokenResponse(r,s,l);return n||await r._updateCurrentUser(u.user),u}async function $R(r,e){return uT(aa(r),e)}/**
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
 */async function cT(r){const e=aa(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function JR(r,e,n){if(jn(r.app))return Promise.reject(lr(r));const s=aa(r),f=await Dm(s,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",YR).catch(y=>{throw y.code==="auth/password-does-not-meet-requirements"&&cT(r),y}),p=await Zs._fromIdTokenResponse(s,"signIn",f);return await s._updateCurrentUser(p.user),p}function ZR(r,e,n){return jn(r.app)?Promise.reject(lr(r)):$R(yt(r),_o.credential(e,n)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&cT(r),s})}function WR(r,e,n,s){return yt(r).onIdTokenChanged(e,n,s)}function eI(r,e,n){return yt(r).beforeAuthStateChanged(e,n)}function hT(r,e,n,s){return yt(r).onAuthStateChanged(e,n,s)}function cp(r){return yt(r).signOut()}const ch="__sak";/**
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
 */class fT{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ch,"1"),this.storage.removeItem(ch),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tI=1e3,nI=10;class dT extends fT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=nT(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),l=this.localCache[n];s!==l&&e(n,l,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((f,p,y)=>{this.notifyListeners(f,y)});return}const s=e.key;n?this.detachListener():this.stopPolling();const l=()=>{const f=this.storage.getItem(s);!n&&this.localCache[s]===f||this.notifyListeners(s,f)},u=this.storage.getItem(s);TR()&&u!==e.newValue&&e.newValue!==e.oldValue?setTimeout(l,nI):l()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},tI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}dT.type="LOCAL";const iI=dT;/**
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
 */class mT extends fT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}mT.type="SESSION";const pT=mT;/**
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
 */function rI(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Dh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(l=>l.isListeningto(e));if(n)return n;const s=new Dh(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:l,data:u}=n.data,f=this.handlersMap[l];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:l});const p=Array.from(f).map(async g=>g(n.origin,u)),y=await rI(p);n.ports[0].postMessage({status:"done",eventId:s,eventType:l,response:y})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Dh.receivers=[];/**
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
 */function hp(r="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return r+n}/**
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
 */class sI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const l=typeof MessageChannel<"u"?new MessageChannel:null;if(!l)throw new Error("connection_unavailable");let u,f;return new Promise((p,y)=>{const g=hp("",20);l.port1.start();const T=setTimeout(()=>{y(new Error("unsupported_event"))},s);f={messageChannel:l,onMessage(S){const b=S;if(b.data.eventId===g)switch(b.data.status){case"ack":clearTimeout(T),u=setTimeout(()=>{y(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(b.data.response);break;default:clearTimeout(T),clearTimeout(u),y(new Error("invalid_response"));break}}},this.handlers.add(f),l.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:e,eventId:g,data:n},[l.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
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
 */function Oi(){return window}function aI(r){Oi().location.href=r}/**
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
 */function gT(){return typeof Oi().WorkerGlobalScope<"u"&&typeof Oi().importScripts=="function"}async function oI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function lI(){var r;return((r=navigator==null?void 0:navigator.serviceWorker)==null?void 0:r.controller)||null}function uI(){return gT()?self:null}/**
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
 */const yT="firebaseLocalStorageDb",cI=1,hh="firebaseLocalStorage",_T="fbase_key";class au{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oh(r,e){return r.transaction([hh],e?"readwrite":"readonly").objectStore(hh)}function hI(){const r=indexedDB.deleteDatabase(yT);return new au(r).toPromise()}function Om(){const r=indexedDB.open(yT,cI);return new Promise((e,n)=>{r.addEventListener("error",()=>{n(r.error)}),r.addEventListener("upgradeneeded",()=>{const s=r.result;try{s.createObjectStore(hh,{keyPath:_T})}catch(l){n(l)}}),r.addEventListener("success",async()=>{const s=r.result;s.objectStoreNames.contains(hh)?e(s):(s.close(),await hI(),e(await Om()))})})}async function nE(r,e,n){const s=Oh(r,!0).put({[_T]:e,value:n});return new au(s).toPromise()}async function fI(r,e){const n=Oh(r,!1).get(e),s=await new au(n).toPromise();return s===void 0?null:s.value}function iE(r,e){const n=Oh(r,!0).delete(e);return new au(n).toPromise()}const dI=800,mI=3;class vT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Om(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>mI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return gT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Dh._getInstance(uI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await oI(),!this.activeServiceWorker)return;this.sender=new sI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(s=e[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||lI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Om();return await nE(e,ch,"1"),await iE(e,ch),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>nE(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>fI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>iE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(l=>{const u=Oh(l,!1).getAll();return new au(u).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:l,value:u}of e)s.add(l),JSON.stringify(this.localCache[l])!==JSON.stringify(u)&&(this.notifyListeners(l,u),n.push(l));for(const l of Object.keys(this.localCache))this.localCache[l]&&!s.has(l)&&(this.notifyListeners(l,null),n.push(l));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const l of Array.from(s))l(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vT.type="LOCAL";const pI=vT;new iu(3e4,6e4);/**
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
 */function gI(r,e){return e?ar(e):(de(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
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
 */class fp extends lp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ao(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ao(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ao(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yI(r){return uT(r.auth,new fp(r),r.bypassAuthState)}function _I(r){const{auth:e,user:n}=r;return de(n,e,"internal-error"),XR(n,new fp(r),r.bypassAuthState)}async function vI(r){const{auth:e,user:n}=r;return de(n,e,"internal-error"),QR(n,new fp(r),r.bypassAuthState)}/**
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
 */class ET{constructor(e,n,s,l,u=!1){this.auth=e,this.resolver=s,this.user=l,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:l,tenantId:u,error:f,type:p}=e;if(f){this.reject(f);return}const y={auth:this.auth,requestUri:n,sessionId:s,tenantId:u||void 0,postBody:l||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(y))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yI;case"linkViaPopup":case"linkViaRedirect":return vI;case"reauthViaPopup":case"reauthViaRedirect":return _I;default:si(this.auth,"internal-error")}}resolve(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const EI=new iu(2e3,1e4);class io extends ET{constructor(e,n,s,l,u){super(e,n,l,u),this.provider=s,this.authWindow=null,this.pollId=null,io.currentPopupAction&&io.currentPopupAction.cancel(),io.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return de(e,this.auth,"internal-error"),e}async onExecution(){hr(this.filter.length===1,"Popup operations only handle one event");const e=hp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Di(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Di(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,io.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Di(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,EI.get())};e()}}io.currentPopupAction=null;/**
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
 */const TI="pendingRedirect",$c=new Map;class AI extends ET{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=$c.get(this.auth._key());if(!e){try{const s=await SI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}$c.set(this.auth._key(),e)}return this.bypassAuthState||$c.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function SI(r,e){const n=RI(e),s=wI(r);if(!await s._isAvailable())return!1;const l=await s._get(n)==="true";return await s._remove(n),l}function bI(r,e){$c.set(r._key(),e)}function wI(r){return ar(r._redirectPersistence)}function RI(r){return Xc(TI,r.config.apiKey,r.name)}async function II(r,e,n=!1){if(jn(r.app))return Promise.reject(lr(r));const s=aa(r),l=gI(s,e),f=await new AI(s,l,n).execute();return f&&!n&&(delete f.user._redirectEventId,await s._persistUserIfCurrent(f.user),await s._setRedirectUser(null,e)),f}/**
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
 */const CI=600*1e3;class NI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!DI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!TT(e)){const l=((s=e.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(Di(this.auth,l))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=CI&&this.cachedEventUids.clear(),this.cachedEventUids.has(rE(e))}saveEventToCache(e){this.cachedEventUids.add(rE(e)),this.lastProcessedEventTime=Date.now()}}function rE(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function TT({type:r,error:e}){return r==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function DI(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return TT(r);default:return!1}}/**
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
 */async function OI(r,e={}){return cs(r,"GET","/v1/projects",e)}/**
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
 */const xI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VI=/^https?/;async function MI(r){if(r.config.emulator)return;const{authorizedDomains:e}=await OI(r);for(const n of e)try{if(kI(n))return}catch{}si(r,"unauthorized-domain")}function kI(r){const e=Cm(),{protocol:n,hostname:s}=new URL(e);if(r.startsWith("chrome-extension://")){const f=new URL(r);return f.hostname===""&&s===""?n==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===s}if(!VI.test(n))return!1;if(xI.test(r))return s===r;const l=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+l+"|"+l+")$","i").test(s)}/**
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
 */const LI=new iu(3e4,6e4);function sE(){const r=Oi().___jsl;if(r!=null&&r.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let n=0;n<r.CP.length;n++)r.CP[n]=null}}function PI(r){return new Promise((e,n)=>{var l,u,f;function s(){sE(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sE(),n(Di(r,"network-request-failed"))},timeout:LI.get()})}if((u=(l=Oi().gapi)==null?void 0:l.iframes)!=null&&u.Iframe)e(gapi.iframes.getContext());else if((f=Oi().gapi)!=null&&f.load)s();else{const p=DR("iframefcb");return Oi()[p]=()=>{gapi.load?s():n(Di(r,"network-request-failed"))},rT(`${NR()}?onload=${p}`).catch(y=>n(y))}}).catch(e=>{throw Jc=null,e})}let Jc=null;function UI(r){return Jc=Jc||PI(r),Jc}/**
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
 */const zI=new iu(5e3,15e3),jI="__/auth/iframe",BI="emulator/auth/iframe",qI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},HI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FI(r){const e=r.config;de(e.authDomain,r,"auth-domain-config-required");const n=e.emulator?sp(e,BI):`https://${r.config.authDomain}/${jI}`,s={apiKey:e.apiKey,appName:r.name,v:yo},l=HI.get(r.config.apiHost);l&&(s.eid=l);const u=r._getFrameworks();return u.length&&(s.fw=u.join(",")),`${n}?${nu(s).slice(1)}`}async function GI(r){const e=await UI(r),n=Oi().gapi;return de(n,r,"internal-error"),e.open({where:document.body,url:FI(r),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qI,dontclear:!0},s=>new Promise(async(l,u)=>{await s.restyle({setHideOnLeave:!1});const f=Di(r,"network-request-failed"),p=Oi().setTimeout(()=>{u(f)},zI.get());function y(){Oi().clearTimeout(p),l(s)}s.ping(y).then(y,()=>{u(f)})}))}/**
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
 */const KI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},YI=500,QI=600,XI="_blank",$I="http://localhost";class aE{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JI(r,e,n,s=YI,l=QI){const u=Math.max((window.screen.availHeight-l)/2,0).toString(),f=Math.max((window.screen.availWidth-s)/2,0).toString();let p="";const y={...KI,width:s.toString(),height:l.toString(),top:u,left:f},g=Zt().toLowerCase();n&&(p=J0(g)?XI:n),X0(g)&&(e=e||$I,y.scrollbars="yes");const T=Object.entries(y).reduce((b,[q,Z])=>`${b}${q}=${Z},`,"");if(ER(g)&&p!=="_self")return ZI(e||"",p),new aE(null);const S=window.open(e||"",p,T);de(S,r,"popup-blocked");try{S.focus()}catch{}return new aE(S)}function ZI(r,e){const n=document.createElement("a");n.href=r,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const WI="__/auth/handler",e2="emulator/auth/handler",t2=encodeURIComponent("fac");async function oE(r,e,n,s,l,u){de(r.config.authDomain,r,"auth-domain-config-required"),de(r.config.apiKey,r,"invalid-api-key");const f={apiKey:r.config.apiKey,appName:r.name,authType:n,redirectUrl:s,v:yo,eventId:l};if(e instanceof oT){e.setDefaultLanguage(r.languageCode),f.providerId=e.providerId||"",H1(e.getCustomParameters())||(f.customParameters=JSON.stringify(e.getCustomParameters()));for(const[T,S]of Object.entries({}))f[T]=S}if(e instanceof su){const T=e.getScopes().filter(S=>S!=="");T.length>0&&(f.scopes=T.join(","))}r.tenantId&&(f.tid=r.tenantId);const p=f;for(const T of Object.keys(p))p[T]===void 0&&delete p[T];const y=await r._getAppCheckToken(),g=y?`#${t2}=${encodeURIComponent(y)}`:"";return`${n2(r)}?${nu(p).slice(1)}${g}`}function n2({config:r}){return r.emulator?sp(r,e2):`https://${r.authDomain}/${WI}`}/**
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
 */const fm="webStorageSupport";class i2{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=pT,this._completeRedirectFn=II,this._overrideRedirectResult=bI}async _openPopup(e,n,s,l){var f;hr((f=this.eventManagers[e._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await oE(e,n,s,Cm(),l);return JI(e,u,hp())}async _openRedirect(e,n,s,l){await this._originValidation(e);const u=await oE(e,n,s,Cm(),l);return aI(u),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:l,promise:u}=this.eventManagers[n];return l?Promise.resolve(l):(hr(u,"If manager is not set, promise should be"),u)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await GI(e),s=new NI(e);return n.register("authEvent",l=>(de(l==null?void 0:l.authEvent,e,"invalid-auth-event"),{status:s.onEvent(l.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fm,{type:fm},l=>{var f;const u=(f=l==null?void 0:l[0])==null?void 0:f[fm];u!==void 0&&n(!!u),si(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=MI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nT()||$0()||op()}}const r2=i2;var lE="@firebase/auth",uE="1.12.0";/**
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
 */class s2{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){de(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function a2(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function o2(r){Li(new ri("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),l=e.getProvider("heartbeat"),u=e.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=s.options;de(f&&!f.includes(":"),"invalid-api-key",{appName:s.name});const y={apiKey:f,authDomain:p,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:iT(r)},g=new RR(s,l,u,y);return LR(g,n),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Li(new ri("auth-internal",e=>{const n=aa(e.getProvider("auth").getImmediate());return(s=>new s2(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(lE,uE,a2(r)),qn(lE,uE,"esm2020")}/**
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
 */const l2=300,u2=O0("authIdTokenMaxAge")||l2;let cE=null;const c2=r=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>u2)return;const l=n==null?void 0:n.token;cE!==l&&(cE=l,await fetch(r,{method:l?"POST":"DELETE",headers:l?{Authorization:`Bearer ${l}`}:{}}))};function h2(r=ip()){const e=go(r,"auth");if(e.isInitialized())return e.getImmediate();const n=kR(r,{popupRedirectResolver:r2,persistence:[pI,iI,pT]}),s=O0("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(s,location.origin);if(location.origin===u.origin){const f=c2(u.toString());eI(n,f,()=>f(n.currentUser)),WR(n,p=>f(p))}}const l=N0("auth");return l&&PR(n,`http://${l}`),n}function f2(){var r;return((r=document.getElementsByTagName("head"))==null?void 0:r[0])??document}IR({loadJS(r){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",r),s.onload=e,s.onerror=l=>{const u=Di("internal-error");u.customData=l,n(u)},s.type="text/javascript",s.charset="UTF-8",f2().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});o2("Browser");var hE=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ts,AT;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(N,w){function C(){}C.prototype=w.prototype,N.F=w.prototype,N.prototype=new C,N.prototype.constructor=N,N.D=function(V,O,L){for(var R=Array(arguments.length-2),rt=2;rt<arguments.length;rt++)R[rt-2]=arguments[rt];return w.prototype[O].apply(V,R)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function l(N,w,C){C||(C=0);const V=Array(16);if(typeof w=="string")for(var O=0;O<16;++O)V[O]=w.charCodeAt(C++)|w.charCodeAt(C++)<<8|w.charCodeAt(C++)<<16|w.charCodeAt(C++)<<24;else for(O=0;O<16;++O)V[O]=w[C++]|w[C++]<<8|w[C++]<<16|w[C++]<<24;w=N.g[0],C=N.g[1],O=N.g[2];let L=N.g[3],R;R=w+(L^C&(O^L))+V[0]+3614090360&4294967295,w=C+(R<<7&4294967295|R>>>25),R=L+(O^w&(C^O))+V[1]+3905402710&4294967295,L=w+(R<<12&4294967295|R>>>20),R=O+(C^L&(w^C))+V[2]+606105819&4294967295,O=L+(R<<17&4294967295|R>>>15),R=C+(w^O&(L^w))+V[3]+3250441966&4294967295,C=O+(R<<22&4294967295|R>>>10),R=w+(L^C&(O^L))+V[4]+4118548399&4294967295,w=C+(R<<7&4294967295|R>>>25),R=L+(O^w&(C^O))+V[5]+1200080426&4294967295,L=w+(R<<12&4294967295|R>>>20),R=O+(C^L&(w^C))+V[6]+2821735955&4294967295,O=L+(R<<17&4294967295|R>>>15),R=C+(w^O&(L^w))+V[7]+4249261313&4294967295,C=O+(R<<22&4294967295|R>>>10),R=w+(L^C&(O^L))+V[8]+1770035416&4294967295,w=C+(R<<7&4294967295|R>>>25),R=L+(O^w&(C^O))+V[9]+2336552879&4294967295,L=w+(R<<12&4294967295|R>>>20),R=O+(C^L&(w^C))+V[10]+4294925233&4294967295,O=L+(R<<17&4294967295|R>>>15),R=C+(w^O&(L^w))+V[11]+2304563134&4294967295,C=O+(R<<22&4294967295|R>>>10),R=w+(L^C&(O^L))+V[12]+1804603682&4294967295,w=C+(R<<7&4294967295|R>>>25),R=L+(O^w&(C^O))+V[13]+4254626195&4294967295,L=w+(R<<12&4294967295|R>>>20),R=O+(C^L&(w^C))+V[14]+2792965006&4294967295,O=L+(R<<17&4294967295|R>>>15),R=C+(w^O&(L^w))+V[15]+1236535329&4294967295,C=O+(R<<22&4294967295|R>>>10),R=w+(O^L&(C^O))+V[1]+4129170786&4294967295,w=C+(R<<5&4294967295|R>>>27),R=L+(C^O&(w^C))+V[6]+3225465664&4294967295,L=w+(R<<9&4294967295|R>>>23),R=O+(w^C&(L^w))+V[11]+643717713&4294967295,O=L+(R<<14&4294967295|R>>>18),R=C+(L^w&(O^L))+V[0]+3921069994&4294967295,C=O+(R<<20&4294967295|R>>>12),R=w+(O^L&(C^O))+V[5]+3593408605&4294967295,w=C+(R<<5&4294967295|R>>>27),R=L+(C^O&(w^C))+V[10]+38016083&4294967295,L=w+(R<<9&4294967295|R>>>23),R=O+(w^C&(L^w))+V[15]+3634488961&4294967295,O=L+(R<<14&4294967295|R>>>18),R=C+(L^w&(O^L))+V[4]+3889429448&4294967295,C=O+(R<<20&4294967295|R>>>12),R=w+(O^L&(C^O))+V[9]+568446438&4294967295,w=C+(R<<5&4294967295|R>>>27),R=L+(C^O&(w^C))+V[14]+3275163606&4294967295,L=w+(R<<9&4294967295|R>>>23),R=O+(w^C&(L^w))+V[3]+4107603335&4294967295,O=L+(R<<14&4294967295|R>>>18),R=C+(L^w&(O^L))+V[8]+1163531501&4294967295,C=O+(R<<20&4294967295|R>>>12),R=w+(O^L&(C^O))+V[13]+2850285829&4294967295,w=C+(R<<5&4294967295|R>>>27),R=L+(C^O&(w^C))+V[2]+4243563512&4294967295,L=w+(R<<9&4294967295|R>>>23),R=O+(w^C&(L^w))+V[7]+1735328473&4294967295,O=L+(R<<14&4294967295|R>>>18),R=C+(L^w&(O^L))+V[12]+2368359562&4294967295,C=O+(R<<20&4294967295|R>>>12),R=w+(C^O^L)+V[5]+4294588738&4294967295,w=C+(R<<4&4294967295|R>>>28),R=L+(w^C^O)+V[8]+2272392833&4294967295,L=w+(R<<11&4294967295|R>>>21),R=O+(L^w^C)+V[11]+1839030562&4294967295,O=L+(R<<16&4294967295|R>>>16),R=C+(O^L^w)+V[14]+4259657740&4294967295,C=O+(R<<23&4294967295|R>>>9),R=w+(C^O^L)+V[1]+2763975236&4294967295,w=C+(R<<4&4294967295|R>>>28),R=L+(w^C^O)+V[4]+1272893353&4294967295,L=w+(R<<11&4294967295|R>>>21),R=O+(L^w^C)+V[7]+4139469664&4294967295,O=L+(R<<16&4294967295|R>>>16),R=C+(O^L^w)+V[10]+3200236656&4294967295,C=O+(R<<23&4294967295|R>>>9),R=w+(C^O^L)+V[13]+681279174&4294967295,w=C+(R<<4&4294967295|R>>>28),R=L+(w^C^O)+V[0]+3936430074&4294967295,L=w+(R<<11&4294967295|R>>>21),R=O+(L^w^C)+V[3]+3572445317&4294967295,O=L+(R<<16&4294967295|R>>>16),R=C+(O^L^w)+V[6]+76029189&4294967295,C=O+(R<<23&4294967295|R>>>9),R=w+(C^O^L)+V[9]+3654602809&4294967295,w=C+(R<<4&4294967295|R>>>28),R=L+(w^C^O)+V[12]+3873151461&4294967295,L=w+(R<<11&4294967295|R>>>21),R=O+(L^w^C)+V[15]+530742520&4294967295,O=L+(R<<16&4294967295|R>>>16),R=C+(O^L^w)+V[2]+3299628645&4294967295,C=O+(R<<23&4294967295|R>>>9),R=w+(O^(C|~L))+V[0]+4096336452&4294967295,w=C+(R<<6&4294967295|R>>>26),R=L+(C^(w|~O))+V[7]+1126891415&4294967295,L=w+(R<<10&4294967295|R>>>22),R=O+(w^(L|~C))+V[14]+2878612391&4294967295,O=L+(R<<15&4294967295|R>>>17),R=C+(L^(O|~w))+V[5]+4237533241&4294967295,C=O+(R<<21&4294967295|R>>>11),R=w+(O^(C|~L))+V[12]+1700485571&4294967295,w=C+(R<<6&4294967295|R>>>26),R=L+(C^(w|~O))+V[3]+2399980690&4294967295,L=w+(R<<10&4294967295|R>>>22),R=O+(w^(L|~C))+V[10]+4293915773&4294967295,O=L+(R<<15&4294967295|R>>>17),R=C+(L^(O|~w))+V[1]+2240044497&4294967295,C=O+(R<<21&4294967295|R>>>11),R=w+(O^(C|~L))+V[8]+1873313359&4294967295,w=C+(R<<6&4294967295|R>>>26),R=L+(C^(w|~O))+V[15]+4264355552&4294967295,L=w+(R<<10&4294967295|R>>>22),R=O+(w^(L|~C))+V[6]+2734768916&4294967295,O=L+(R<<15&4294967295|R>>>17),R=C+(L^(O|~w))+V[13]+1309151649&4294967295,C=O+(R<<21&4294967295|R>>>11),R=w+(O^(C|~L))+V[4]+4149444226&4294967295,w=C+(R<<6&4294967295|R>>>26),R=L+(C^(w|~O))+V[11]+3174756917&4294967295,L=w+(R<<10&4294967295|R>>>22),R=O+(w^(L|~C))+V[2]+718787259&4294967295,O=L+(R<<15&4294967295|R>>>17),R=C+(L^(O|~w))+V[9]+3951481745&4294967295,N.g[0]=N.g[0]+w&4294967295,N.g[1]=N.g[1]+(O+(R<<21&4294967295|R>>>11))&4294967295,N.g[2]=N.g[2]+O&4294967295,N.g[3]=N.g[3]+L&4294967295}s.prototype.v=function(N,w){w===void 0&&(w=N.length);const C=w-this.blockSize,V=this.C;let O=this.h,L=0;for(;L<w;){if(O==0)for(;L<=C;)l(this,N,L),L+=this.blockSize;if(typeof N=="string"){for(;L<w;)if(V[O++]=N.charCodeAt(L++),O==this.blockSize){l(this,V),O=0;break}}else for(;L<w;)if(V[O++]=N[L++],O==this.blockSize){l(this,V),O=0;break}}this.h=O,this.o+=w},s.prototype.A=function(){var N=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);N[0]=128;for(var w=1;w<N.length-8;++w)N[w]=0;w=this.o*8;for(var C=N.length-8;C<N.length;++C)N[C]=w&255,w/=256;for(this.v(N),N=Array(16),w=0,C=0;C<4;++C)for(let V=0;V<32;V+=8)N[w++]=this.g[C]>>>V&255;return N};function u(N,w){var C=p;return Object.prototype.hasOwnProperty.call(C,N)?C[N]:C[N]=w(N)}function f(N,w){this.h=w;const C=[];let V=!0;for(let O=N.length-1;O>=0;O--){const L=N[O]|0;V&&L==w||(C[O]=L,V=!1)}this.g=C}var p={};function y(N){return-128<=N&&N<128?u(N,function(w){return new f([w|0],w<0?-1:0)}):new f([N|0],N<0?-1:0)}function g(N){if(isNaN(N)||!isFinite(N))return S;if(N<0)return W(g(-N));const w=[];let C=1;for(let V=0;N>=C;V++)w[V]=N/C|0,C*=4294967296;return new f(w,0)}function T(N,w){if(N.length==0)throw Error("number format error: empty string");if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(N.charAt(0)=="-")return W(T(N.substring(1),w));if(N.indexOf("-")>=0)throw Error('number format error: interior "-" character');const C=g(Math.pow(w,8));let V=S;for(let L=0;L<N.length;L+=8){var O=Math.min(8,N.length-L);const R=parseInt(N.substring(L,L+O),w);O<8?(O=g(Math.pow(w,O)),V=V.j(O).add(g(R))):(V=V.j(C),V=V.add(g(R)))}return V}var S=y(0),b=y(1),q=y(16777216);r=f.prototype,r.m=function(){if(J(this))return-W(this).m();let N=0,w=1;for(let C=0;C<this.g.length;C++){const V=this.i(C);N+=(V>=0?V:4294967296+V)*w,w*=4294967296}return N},r.toString=function(N){if(N=N||10,N<2||36<N)throw Error("radix out of range: "+N);if(Z(this))return"0";if(J(this))return"-"+W(this).toString(N);const w=g(Math.pow(N,6));var C=this;let V="";for(;;){const O=Je(C,w).g;C=he(C,O.j(w));let L=((C.g.length>0?C.g[0]:C.h)>>>0).toString(N);if(C=O,Z(C))return L+V;for(;L.length<6;)L="0"+L;V=L+V}},r.i=function(N){return N<0?0:N<this.g.length?this.g[N]:this.h};function Z(N){if(N.h!=0)return!1;for(let w=0;w<N.g.length;w++)if(N.g[w]!=0)return!1;return!0}function J(N){return N.h==-1}r.l=function(N){return N=he(this,N),J(N)?-1:Z(N)?0:1};function W(N){const w=N.g.length,C=[];for(let V=0;V<w;V++)C[V]=~N.g[V];return new f(C,~N.h).add(b)}r.abs=function(){return J(this)?W(this):this},r.add=function(N){const w=Math.max(this.g.length,N.g.length),C=[];let V=0;for(let O=0;O<=w;O++){let L=V+(this.i(O)&65535)+(N.i(O)&65535),R=(L>>>16)+(this.i(O)>>>16)+(N.i(O)>>>16);V=R>>>16,L&=65535,R&=65535,C[O]=R<<16|L}return new f(C,C[C.length-1]&-2147483648?-1:0)};function he(N,w){return N.add(W(w))}r.j=function(N){if(Z(this)||Z(N))return S;if(J(this))return J(N)?W(this).j(W(N)):W(W(this).j(N));if(J(N))return W(this.j(W(N)));if(this.l(q)<0&&N.l(q)<0)return g(this.m()*N.m());const w=this.g.length+N.g.length,C=[];for(var V=0;V<2*w;V++)C[V]=0;for(V=0;V<this.g.length;V++)for(let O=0;O<N.g.length;O++){const L=this.i(V)>>>16,R=this.i(V)&65535,rt=N.i(O)>>>16,Dt=N.i(O)&65535;C[2*V+2*O]+=R*Dt,ve(C,2*V+2*O),C[2*V+2*O+1]+=L*Dt,ve(C,2*V+2*O+1),C[2*V+2*O+1]+=R*rt,ve(C,2*V+2*O+1),C[2*V+2*O+2]+=L*rt,ve(C,2*V+2*O+2)}for(N=0;N<w;N++)C[N]=C[2*N+1]<<16|C[2*N];for(N=w;N<2*w;N++)C[N]=0;return new f(C,0)};function ve(N,w){for(;(N[w]&65535)!=N[w];)N[w+1]+=N[w]>>>16,N[w]&=65535,w++}function Ee(N,w){this.g=N,this.h=w}function Je(N,w){if(Z(w))throw Error("division by zero");if(Z(N))return new Ee(S,S);if(J(N))return w=Je(W(N),w),new Ee(W(w.g),W(w.h));if(J(w))return w=Je(N,W(w)),new Ee(W(w.g),w.h);if(N.g.length>30){if(J(N)||J(w))throw Error("slowDivide_ only works with positive integers.");for(var C=b,V=w;V.l(N)<=0;)C=Ze(C),V=Ze(V);var O=ze(C,1),L=ze(V,1);for(V=ze(V,2),C=ze(C,2);!Z(V);){var R=L.add(V);R.l(N)<=0&&(O=O.add(C),L=R),V=ze(V,1),C=ze(C,1)}return w=he(N,O.j(w)),new Ee(O,w)}for(O=S;N.l(w)>=0;){for(C=Math.max(1,Math.floor(N.m()/w.m())),V=Math.ceil(Math.log(C)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),L=g(C),R=L.j(w);J(R)||R.l(N)>0;)C-=V,L=g(C),R=L.j(w);Z(L)&&(L=b),O=O.add(L),N=he(N,R)}return new Ee(O,N)}r.B=function(N){return Je(this,N).h},r.and=function(N){const w=Math.max(this.g.length,N.g.length),C=[];for(let V=0;V<w;V++)C[V]=this.i(V)&N.i(V);return new f(C,this.h&N.h)},r.or=function(N){const w=Math.max(this.g.length,N.g.length),C=[];for(let V=0;V<w;V++)C[V]=this.i(V)|N.i(V);return new f(C,this.h|N.h)},r.xor=function(N){const w=Math.max(this.g.length,N.g.length),C=[];for(let V=0;V<w;V++)C[V]=this.i(V)^N.i(V);return new f(C,this.h^N.h)};function Ze(N){const w=N.g.length+1,C=[];for(let V=0;V<w;V++)C[V]=N.i(V)<<1|N.i(V-1)>>>31;return new f(C,N.h)}function ze(N,w){const C=w>>5;w%=32;const V=N.g.length-C,O=[];for(let L=0;L<V;L++)O[L]=w>0?N.i(L+C)>>>w|N.i(L+C+1)<<32-w:N.i(L+C);return new f(O,N.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,AT=s,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=g,f.fromString=T,ts=f}).apply(typeof hE<"u"?hE:typeof self<"u"?self:typeof window<"u"?window:{});var Hc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ST,Vl,bT,Zc,xm,wT,RT,IT;(function(){var r,e=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hc=="object"&&Hc];for(var m=0;m<c.length;++m){var v=c[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var s=n(this);function l(c,m){if(m)e:{var v=s;c=c.split(".");for(var A=0;A<c.length-1;A++){var P=c[A];if(!(P in v))break e;v=v[P]}c=c[c.length-1],A=v[c],m=m(A),m!=A&&m!=null&&e(v,c,{configurable:!0,writable:!0,value:m})}}l("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),l("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),l("Object.entries",function(c){return c||function(m){var v=[],A;for(A in m)Object.prototype.hasOwnProperty.call(m,A)&&v.push([A,m[A]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function p(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function y(c,m,v){return c.call.apply(c.bind,arguments)}function g(c,m,v){return g=y,g.apply(null,arguments)}function T(c,m){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function S(c,m){function v(){}v.prototype=m.prototype,c.Z=m.prototype,c.prototype=new v,c.prototype.constructor=c,c.Ob=function(A,P,B){for(var ee=Array(arguments.length-2),Te=2;Te<arguments.length;Te++)ee[Te-2]=arguments[Te];return m.prototype[P].apply(A,ee)}}var b=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function q(c){const m=c.length;if(m>0){const v=Array(m);for(let A=0;A<m;A++)v[A]=c[A];return v}return[]}function Z(c,m){for(let A=1;A<arguments.length;A++){const P=arguments[A];var v=typeof P;if(v=v!="object"?v:P?Array.isArray(P)?"array":v:"null",v=="array"||v=="object"&&typeof P.length=="number"){v=c.length||0;const B=P.length||0;c.length=v+B;for(let ee=0;ee<B;ee++)c[v+ee]=P[ee]}else c.push(P)}}class J{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function W(c){f.setTimeout(()=>{throw c},0)}function he(){var c=N;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class ve{constructor(){this.h=this.g=null}add(m,v){const A=Ee.get();A.set(m,v),this.h?this.h.next=A:this.g=A,this.h=A}}var Ee=new J(()=>new Je,c=>c.reset());class Je{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Ze,ze=!1,N=new ve,w=()=>{const c=Promise.resolve(void 0);Ze=()=>{c.then(C)}};function C(){for(var c;c=he();){try{c.h.call(c.g)}catch(v){W(v)}var m=Ee;m.j(c),m.h<100&&(m.h++,c.next=m.g,m.g=c)}ze=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function O(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}O.prototype.h=function(){this.defaultPrevented=!0};var L=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};f.addEventListener("test",v,m),f.removeEventListener("test",v,m)}catch{}return c})();function R(c){return/^[\s\xa0]*$/.test(c)}function rt(c,m){O.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,m)}S(rt,O),rt.prototype.init=function(c,m){const v=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget,m||(v=="mouseover"?m=c.fromElement:v=="mouseout"&&(m=c.toElement)),this.relatedTarget=m,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&rt.Z.h.call(this)},rt.prototype.h=function(){rt.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Dt="closure_listenable_"+(Math.random()*1e6|0),G=0;function te(c,m,v,A,P){this.listener=c,this.proxy=null,this.src=m,this.type=v,this.capture=!!A,this.ha=P,this.key=++G,this.da=this.fa=!1}function ce(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Le(c,m,v){for(const A in c)m.call(v,c[A],A,c)}function He(c,m){for(const v in c)m.call(void 0,c[v],v,c)}function x(c){const m={};for(const v in c)m[v]=c[v];return m}const X="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ne(c,m){let v,A;for(let P=1;P<arguments.length;P++){A=arguments[P];for(v in A)c[v]=A[v];for(let B=0;B<X.length;B++)v=X[B],Object.prototype.hasOwnProperty.call(A,v)&&(c[v]=A[v])}}function se(c){this.src=c,this.g={},this.h=0}se.prototype.add=function(c,m,v,A,P){const B=c.toString();c=this.g[B],c||(c=this.g[B]=[],this.h++);const ee=Se(c,m,A,P);return ee>-1?(m=c[ee],v||(m.fa=!1)):(m=new te(m,this.src,B,!!A,P),m.fa=v,c.push(m)),m};function pe(c,m){const v=m.type;if(v in c.g){var A=c.g[v],P=Array.prototype.indexOf.call(A,m,void 0),B;(B=P>=0)&&Array.prototype.splice.call(A,P,1),B&&(ce(m),c.g[v].length==0&&(delete c.g[v],c.h--))}}function Se(c,m,v,A){for(let P=0;P<c.length;++P){const B=c[P];if(!B.da&&B.listener==m&&B.capture==!!v&&B.ha==A)return P}return-1}var Me="closure_lm_"+(Math.random()*1e6|0),Ot={};function st(c,m,v,A,P){if(Array.isArray(m)){for(let B=0;B<m.length;B++)st(c,m[B],v,A,P);return null}return v=Ro(v),c&&c[Dt]?c.J(m,v,p(A)?!!A.capture:!1,P):ms(c,m,v,!1,A,P)}function ms(c,m,v,A,P,B){if(!m)throw Error("Invalid event type");const ee=p(P)?!!P.capture:!!P;let Te=ps(c);if(Te||(c[Me]=Te=new se(c)),v=Te.add(m,v,A,ee,B),v.proxy)return v;if(A=ua(),v.proxy=A,A.src=c,A.listener=v,c.addEventListener)L||(P=ee),P===void 0&&(P=!1),c.addEventListener(m.toString(),A,P);else if(c.attachEvent)c.attachEvent(oi(m.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function ua(){function c(v){return m.call(c.src,c.listener,v)}const m=bo;return c}function ca(c,m,v,A,P){if(Array.isArray(m))for(var B=0;B<m.length;B++)ca(c,m[B],v,A,P);else A=p(A)?!!A.capture:!!A,v=Ro(v),c&&c[Dt]?(c=c.i,B=String(m).toString(),B in c.g&&(m=c.g[B],v=Se(m,v,A,P),v>-1&&(ce(m[v]),Array.prototype.splice.call(m,v,1),m.length==0&&(delete c.g[B],c.h--)))):c&&(c=ps(c))&&(m=c.g[m.toString()],c=-1,m&&(c=Se(m,v,A,P)),(v=c>-1?m[c]:null)&&ha(v))}function ha(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[Dt])pe(m.i,c);else{var v=c.type,A=c.proxy;m.removeEventListener?m.removeEventListener(v,A,c.capture):m.detachEvent?m.detachEvent(oi(v),A):m.addListener&&m.removeListener&&m.removeListener(A),(v=ps(m))?(pe(v,c),v.h==0&&(v.src=null,m[Me]=null)):ce(c)}}}function oi(c){return c in Ot?Ot[c]:Ot[c]="on"+c}function bo(c,m){if(c.da)c=!0;else{m=new rt(m,this);const v=c.listener,A=c.ha||c.src;c.fa&&ha(c),c=v.call(A,m)}return c}function ps(c){return c=c[Me],c instanceof se?c:null}var wo="__closure_events_fn_"+(Math.random()*1e9>>>0);function Ro(c){return typeof c=="function"?c:(c[wo]||(c[wo]=function(m){return c.handleEvent(m)}),c[wo])}function _t(){V.call(this),this.i=new se(this),this.M=this,this.G=null}S(_t,V),_t.prototype[Dt]=!0,_t.prototype.removeEventListener=function(c,m,v,A){ca(this,c,m,v,A)};function xt(c,m){var v,A=c.G;if(A)for(v=[];A;A=A.G)v.push(A);if(c=c.M,A=m.type||m,typeof m=="string")m=new O(m,c);else if(m instanceof O)m.target=m.target||c;else{var P=m;m=new O(A,c),ne(m,P)}P=!0;let B,ee;if(v)for(ee=v.length-1;ee>=0;ee--)B=m.g=v[ee],P=pr(B,A,!0,m)&&P;if(B=m.g=c,P=pr(B,A,!0,m)&&P,P=pr(B,A,!1,m)&&P,v)for(ee=0;ee<v.length;ee++)B=m.g=v[ee],P=pr(B,A,!1,m)&&P}_t.prototype.N=function(){if(_t.Z.N.call(this),this.i){var c=this.i;for(const m in c.g){const v=c.g[m];for(let A=0;A<v.length;A++)ce(v[A]);delete c.g[m],c.h--}}this.G=null},_t.prototype.J=function(c,m,v,A){return this.i.add(String(c),m,!1,v,A)},_t.prototype.K=function(c,m,v,A){return this.i.add(String(c),m,!0,v,A)};function pr(c,m,v,A){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();let P=!0;for(let B=0;B<m.length;++B){const ee=m[B];if(ee&&!ee.da&&ee.capture==v){const Te=ee.listener,dt=ee.ha||ee.src;ee.fa&&pe(c.i,ee),P=Te.call(dt,A)!==!1&&P}}return P&&!A.defaultPrevented}function ef(c,m){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=g(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:f.setTimeout(c,m||0)}function du(c){c.g=ef(()=>{c.g=null,c.i&&(c.i=!1,du(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class en extends V{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:du(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gs(c){V.call(this),this.h=c,this.g={}}S(gs,V);var Io=[];function Co(c){Le(c.g,function(m,v){this.g.hasOwnProperty(v)&&ha(m)},c),c.g={}}gs.prototype.N=function(){gs.Z.N.call(this),Co(this)},gs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var gr=f.JSON.stringify,tf=f.JSON.parse,mu=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function pu(){}function gu(){}var Fn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function zt(){O.call(this,"d")}S(zt,O);function In(){O.call(this,"c")}S(In,O);var ft={},yu=null;function fa(){return yu=yu||new _t}ft.Ia="serverreachability";function _u(c){O.call(this,ft.Ia,c)}S(_u,O);function li(c){const m=fa();xt(m,new _u(m))}ft.STAT_EVENT="statevent";function ys(c,m){O.call(this,ft.STAT_EVENT,c),this.stat=m}S(ys,O);function vt(c){const m=fa();xt(m,new ys(m,c))}ft.Ja="timingevent";function ui(c,m){O.call(this,ft.Ja,c),this.size=m}S(ui,O);function ci(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},m)}function Gn(){this.g=!0}Gn.prototype.ua=function(){this.g=!1};function nf(c,m,v,A,P,B){c.info(function(){if(c.g)if(B){var ee="",Te=B.split("&");for(let je=0;je<Te.length;je++){var dt=Te[je].split("=");if(dt.length>1){const at=dt[0];dt=dt[1];const On=at.split("_");ee=On.length>=2&&On[1]=="type"?ee+(at+"="+dt+"&"):ee+(at+"=redacted&")}}}else ee=null;else ee=B;return"XMLHTTP REQ ("+A+") [attempt "+P+"]: "+m+`
`+v+`
`+ee})}function vu(c,m,v,A,P,B,ee){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+P+"]: "+m+`
`+v+`
`+B+" "+ee})}function hi(c,m,v,A){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+rf(c,v)+(A?" "+A:"")})}function _s(c,m){c.info(function(){return"TIMEOUT: "+m})}Gn.prototype.info=function(){};function rf(c,m){if(!c.g)return m;if(!m)return null;try{const B=JSON.parse(m);if(B){for(c=0;c<B.length;c++)if(Array.isArray(B[c])){var v=B[c];if(!(v.length<2)){var A=v[1];if(Array.isArray(A)&&!(A.length<1)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(let ee=1;ee<A.length;ee++)A[ee]=""}}}}return gr(B)}catch{return m}}var vs={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},No={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Do;function Es(){}S(Es,pu),Es.prototype.g=function(){return new XMLHttpRequest},Do=new Es;function zi(c){return encodeURIComponent(String(c))}function Eu(c){var m=1;c=c.split(":");const v=[];for(;m>0&&c.length;)v.push(c.shift()),m--;return c.length&&v.push(c.join(":")),v}function Kn(c,m,v,A){this.j=c,this.i=m,this.l=v,this.S=A||1,this.V=new gs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Yn}function Yn(){this.i=null,this.g="",this.h=!1}var Et={},kt={};function fi(c,m,v){c.M=1,c.A=Ts(At(m)),c.u=v,c.R=!0,da(c,null)}function da(c,m){c.F=Date.now(),di(c),c.B=At(c.A);var v=c.B,A=c.S;Array.isArray(A)||(A=[String(A)]),ya(v.i,"t",A),c.C=0,v=c.j.L,c.h=new Yn,c.g=ku(c.j,v?m:null,!c.u),c.P>0&&(c.O=new en(g(c.Y,c,c.g),c.P)),m=c.V,v=c.g,A=c.ba;var P="readystatechange";Array.isArray(P)||(P&&(Io[0]=P.toString()),P=Io);for(let B=0;B<P.length;B++){const ee=st(v,P[B],A||m.handleEvent,!1,m.h||m);if(!ee)break;m.g[ee.key]=ee}m=c.J?x(c.J):{},c.u?(c.v||(c.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,m)):(c.v="GET",c.g.ea(c.B,c.v,null,m)),li(),nf(c.i,c.v,c.B,c.l,c.S,c.u)}Kn.prototype.ba=function(c){c=c.target;const m=this.O;m&&$n(c)==3?m.j():this.Y(c)},Kn.prototype.Y=function(c){try{if(c==this.g)e:{const Te=$n(this.g),dt=this.g.ya(),je=this.g.ca();if(!(Te<3)&&(Te!=3||this.g&&(this.h.h||this.g.la()||jt(this.g)))){this.K||Te!=4||dt==7||(dt==8||je<=0?li(3):li(2)),mi(this);var m=this.g.ca();this.X=m;var v=sf(this);if(this.o=m==200,vu(this.i,this.v,this.B,this.l,this.S,Te,m),this.o){if(this.U&&!this.L){t:{if(this.g){var A,P=this.g;if((A=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!R(A)){var B=A;break t}}B=null}if(c=B)hi(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,pi(this,c);else{this.o=!1,this.m=3,vt(12),pn(this),Cn(this);break e}}if(this.R){c=!0;let at;for(;!this.K&&this.C<v.length;)if(at=Au(this,v),at==kt){Te==4&&(this.m=4,vt(14),c=!1),hi(this.i,this.l,null,"[Incomplete Response]");break}else if(at==Et){this.m=4,vt(15),hi(this.i,this.l,v,"[Invalid Chunk]"),c=!1;break}else hi(this.i,this.l,at,null),pi(this,at);if(Tu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Te!=4||v.length!=0||this.h.h||(this.m=1,vt(16),c=!1),this.o=this.o&&c,!c)hi(this.i,this.l,v,"[Invalid Chunked Response]"),pn(this),Cn(this);else if(v.length>0&&!this.W){this.W=!0;var ee=this.j;ee.g==this&&ee.aa&&!ee.P&&(ee.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),Go(ee),ee.P=!0,vt(11))}}else hi(this.i,this.l,v,null),pi(this,v);Te==4&&pn(this),this.o&&!this.K&&(Te==4?Ou(this.j,this):(this.o=!1,di(this)))}else Bi(this.g),m==400&&v.indexOf("Unknown SID")>0?(this.m=3,vt(12)):(this.m=0,vt(13)),pn(this),Cn(this)}}}catch{}finally{}};function sf(c){if(!Tu(c))return c.g.la();const m=jt(c.g);if(m==="")return"";let v="";const A=m.length,P=$n(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return pn(c),Cn(c),"";c.h.i=new f.TextDecoder}for(let B=0;B<A;B++)c.h.h=!0,v+=c.h.i.decode(m[B],{stream:!(P&&B==A-1)});return m.length=0,c.h.g+=v,c.C=0,c.h.g}function Tu(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function Au(c,m){var v=c.C,A=m.indexOf(`
`,v);return A==-1?kt:(v=Number(m.substring(v,A)),isNaN(v)?Et:(A+=1,A+v>m.length?kt:(m=m.slice(A,A+v),c.C=A+v,m)))}Kn.prototype.cancel=function(){this.K=!0,pn(this)};function di(c){c.T=Date.now()+c.H,ma(c,c.H)}function ma(c,m){if(c.D!=null)throw Error("WatchDog timer not null");c.D=ci(g(c.aa,c),m)}function mi(c){c.D&&(f.clearTimeout(c.D),c.D=null)}Kn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(_s(this.i,this.B),this.M!=2&&(li(),vt(17)),pn(this),this.m=2,Cn(this)):ma(this,this.T-c)};function Cn(c){c.j.I==0||c.K||Ou(c.j,c)}function pn(c){mi(c);var m=c.O;m&&typeof m.dispose=="function"&&m.dispose(),c.O=null,Co(c.V),c.g&&(m=c.g,c.g=null,m.abort(),m.dispose())}function pi(c,m){try{var v=c.j;if(v.I!=0&&(v.g==c||yi(v.h,c))){if(!c.L&&yi(v.h,c)&&v.I==3){try{var A=v.Ba.g.parse(m)}catch{A=null}if(Array.isArray(A)&&A.length==3){var P=A;if(P[0]==0){e:if(!v.v){if(v.g)if(v.g.F+3e3<c.F)Aa(v),br(v);else break e;Cs(v),vt(18)}}else v.xa=P[1],0<v.xa-v.K&&P[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=ci(g(v.Va,v),6e3));gi(v.h)<=1&&v.ta&&(v.ta=void 0)}else Si(v,11)}else if((c.L||v.g==c)&&Aa(v),!R(m))for(P=v.Ba.g.parse(m),m=0;m<P.length;m++){let je=P[m];const at=je[0];if(!(at<=v.K))if(v.K=at,je=je[1],v.I==2)if(je[0]=="c"){v.M=je[1],v.ba=je[2];const On=je[3];On!=null&&(v.ka=On,v.j.info("VER="+v.ka));const bi=je[4];bi!=null&&(v.za=bi,v.j.info("SVER="+v.za));const Jn=je[5];Jn!=null&&typeof Jn=="number"&&Jn>0&&(A=1.5*Jn,v.O=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const Zn=c.g;if(Zn){const Ns=Zn.g?Zn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ns){var B=A.h;B.g||Ns.indexOf("spdy")==-1&&Ns.indexOf("quic")==-1&&Ns.indexOf("h2")==-1||(B.j=B.l,B.g=new Set,B.h&&(Vo(B,B.h),B.h=null))}if(A.G){const Sa=Zn.g?Zn.g.getResponseHeader("X-HTTP-Session-Id"):null;Sa&&(A.wa=Sa,Fe(A.J,A.G,Sa))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-c.F,v.j.info("Handshake RTT: "+v.T+"ms")),A=v;var ee=c;if(A.na=Mu(A,A.L?A.ba:null,A.W),ee.L){Mo(A.h,ee);var Te=ee,dt=A.O;dt&&(Te.H=dt),Te.D&&(mi(Te),di(Te)),A.g=ee}else Nu(A);v.i.length>0&&Ai(v)}else je[0]!="stop"&&je[0]!="close"||Si(v,7);else v.I==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?Si(v,7):Ho(v):je[0]!="noop"&&v.l&&v.l.qa(je),v.A=0)}}li(4)}catch{}}var Tt=class{constructor(c,m){this.g=c,this.map=m}};function Oo(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function xo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function gi(c){return c.h?1:c.g?c.g.size:0}function yi(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Vo(c,m){c.g?c.g.add(m):c.h=m}function Mo(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}Oo.prototype.cancel=function(){if(this.i=ko(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function ko(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const v of c.g.values())m=m.concat(v.G);return m}return q(c.i)}var Su=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pa(c,m){if(c){c=c.split("&");for(let v=0;v<c.length;v++){const A=c[v].indexOf("=");let P,B=null;A>=0?(P=c[v].substring(0,A),B=c[v].substring(A+1)):P=c[v],m(P,B?decodeURIComponent(B.replace(/\+/g," ")):"")}}}function gn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;c instanceof gn?(this.l=c.l,Lt(this,c.j),this.o=c.o,this.g=c.g,yr(this,c.u),this.h=c.h,Lo(this,Iu(c.i)),this.m=c.m):c&&(m=String(c).match(Su))?(this.l=!1,Lt(this,m[1]||"",!0),this.o=_i(m[2]||""),this.g=_i(m[3]||"",!0),yr(this,m[4]),this.h=_i(m[5]||"",!0),Lo(this,m[6]||"",!0),this.m=_i(m[7]||"")):(this.l=!1,this.i=new vr(null,this.l))}gn.prototype.toString=function(){const c=[];var m=this.j;m&&c.push(As(m,ga,!0),":");var v=this.g;return(v||m=="file")&&(c.push("//"),(m=this.o)&&c.push(As(m,ga,!0),"@"),c.push(zi(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&c.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(As(v,v.charAt(0)=="/"?Po:bu,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",As(v,wu)),c.join("")},gn.prototype.resolve=function(c){const m=At(this);let v=!!c.j;v?Lt(m,c.j):v=!!c.o,v?m.o=c.o:v=!!c.g,v?m.g=c.g:v=c.u!=null;var A=c.h;if(v)yr(m,c.u);else if(v=!!c.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var P=m.h.lastIndexOf("/");P!=-1&&(A=m.h.slice(0,P+1)+A)}if(P=A,P==".."||P==".")A="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){A=P.lastIndexOf("/",0)==0,P=P.split("/");const B=[];for(let ee=0;ee<P.length;){const Te=P[ee++];Te=="."?A&&ee==P.length&&B.push(""):Te==".."?((B.length>1||B.length==1&&B[0]!="")&&B.pop(),A&&ee==P.length&&B.push("")):(B.push(Te),A=!0)}A=B.join("/")}else A=P}return v?m.h=A:v=c.i.toString()!=="",v?Lo(m,Iu(c.i)):v=!!c.m,v&&(m.m=c.m),m};function At(c){return new gn(c)}function Lt(c,m,v){c.j=v?_i(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function yr(c,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);c.u=m}else c.u=null}function Lo(c,m,v){m instanceof vr?(c.i=m,_a(c.i,c.l)):(v||(m=As(m,_r)),c.i=new vr(m,c.l))}function Fe(c,m,v){c.i.set(m,v)}function Ts(c){return Fe(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function _i(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function As(c,m,v){return typeof c=="string"?(c=encodeURI(c).replace(m,sn),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function sn(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ga=/[#\/\?@]/g,bu=/[#\?:]/g,Po=/[#\?]/g,_r=/[#\?@]/g,wu=/#/g;function vr(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function an(c){c.g||(c.g=new Map,c.h=0,c.i&&pa(c.i,function(m,v){c.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}r=vr.prototype,r.add=function(c,m){an(this),this.i=null,c=Er(this,c);let v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(m),this.h+=1,this};function Ru(c,m){an(c),m=Er(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function Uo(c,m){return an(c),m=Er(c,m),c.g.has(m)}r.forEach=function(c,m){an(this),this.g.forEach(function(v,A){v.forEach(function(P){c.call(m,P,A,this)},this)},this)};function zo(c,m){an(c);let v=[];if(typeof m=="string")Uo(c,m)&&(v=v.concat(c.g.get(Er(c,m))));else for(c=Array.from(c.g.values()),m=0;m<c.length;m++)v=v.concat(c[m]);return v}r.set=function(c,m){return an(this),this.i=null,c=Er(this,c),Uo(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},r.get=function(c,m){return c?(c=zo(this,c),c.length>0?String(c[0]):m):m};function ya(c,m,v){Ru(c,m),v.length>0&&(c.i=null,c.g.set(Er(c,m),q(v)),c.h+=v.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(let A=0;A<m.length;A++){var v=m[A];const P=zi(v);v=zo(this,v);for(let B=0;B<v.length;B++){let ee=P;v[B]!==""&&(ee+="="+zi(v[B])),c.push(ee)}}return this.i=c.join("&")};function Iu(c){const m=new vr;return m.i=c.i,c.g&&(m.g=new Map(c.g),m.h=c.h),m}function Er(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function _a(c,m){m&&!c.j&&(an(c),c.i=null,c.g.forEach(function(v,A){const P=A.toLowerCase();A!=P&&(Ru(this,A),ya(this,P,v))},c)),c.j=m}function Qn(c,m){const v=new Gn;if(f.Image){const A=new Image;A.onload=T(Nn,v,"TestLoadImage: loaded",!0,m,A),A.onerror=T(Nn,v,"TestLoadImage: error",!1,m,A),A.onabort=T(Nn,v,"TestLoadImage: abort",!1,m,A),A.ontimeout=T(Nn,v,"TestLoadImage: timeout",!1,m,A),f.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else m(!1)}function jo(c,m){const v=new Gn,A=new AbortController,P=setTimeout(()=>{A.abort(),Nn(v,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:A.signal}).then(B=>{clearTimeout(P),B.ok?Nn(v,"TestPingServer: ok",!0,m):Nn(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(P),Nn(v,"TestPingServer: error",!1,m)})}function Nn(c,m,v,A,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),A(v)}catch{}}function Tr(){this.g=new mu}function vi(c){this.i=c.Sb||null,this.h=c.ab||!1}S(vi,pu),vi.prototype.g=function(){return new Ss(this.i,this.h)};function Ss(c,m){_t.call(this),this.H=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(Ss,_t),r=Ss.prototype,r.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=m,this.readyState=1,Xn(this)},r.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(m.body=c),(this.H||f).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Ar(this)),this.readyState=0},r.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Xn(this)),this.g&&(this.readyState=3,Xn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;va(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function va(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}r.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?Ar(this):Xn(this),this.readyState==3&&va(this)}},r.Oa=function(c){this.g&&(this.response=this.responseText=c,Ar(this))},r.Na=function(c){this.g&&(this.response=c,Ar(this))},r.ga=function(){this.g&&Ar(this)};function Ar(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Xn(c)}r.setRequestHeader=function(c,m){this.A.append(c,m)},r.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=m.next();return c.join(`\r
`)};function Xn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ss.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Dn(c){let m="";return Le(c,function(v,A){m+=A,m+=":",m+=v,m+=`\r
`}),m}function bs(c,m,v){e:{for(A in v){var A=!1;break e}A=!0}A||(v=Dn(v),typeof c=="string"?v!=null&&zi(v):Fe(c,m,v))}function Ye(c){_t.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(Ye,_t);var Ei=/^https?$/i,Bo=["POST","PUT"];r=Ye.prototype,r.Fa=function(c){this.H=c},r.ea=function(c,m,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Do.g(),this.g.onreadystatechange=b(g(this.Ca,this));try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(B){ws(this,B);return}if(c=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var P in A)v.set(P,A[P]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const B of A.keys())v.set(B,A.get(B));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(B=>B.toLowerCase()=="content-type"),P=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(Bo,m,void 0)>=0)||A||P||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[B,ee]of v)this.g.setRequestHeader(B,ee);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(B){ws(this,B)}};function ws(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.o=5,qo(c),ji(c)}function qo(c){c.A||(c.A=!0,xt(c,"complete"),xt(c,"error"))}r.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,xt(this,"complete"),xt(this,"abort"),ji(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ji(this,!0)),Ye.Z.N.call(this)},r.Ca=function(){this.u||(this.B||this.v||this.j?Rs(this):this.Xa())},r.Xa=function(){Rs(this)};function Rs(c){if(c.h&&typeof u<"u"){if(c.v&&$n(c)==4)setTimeout(c.Ca.bind(c),0);else if(xt(c,"readystatechange"),$n(c)==4){c.h=!1;try{const B=c.ca();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break e;default:m=!1}var v;if(!(v=m)){var A;if(A=B===0){let ee=String(c.D).match(Su)[1]||null;!ee&&f.self&&f.self.location&&(ee=f.self.location.protocol.slice(0,-1)),A=!Ei.test(ee?ee.toLowerCase():"")}v=A}if(v)xt(c,"complete"),xt(c,"success");else{c.o=6;try{var P=$n(c)>2?c.g.statusText:""}catch{P=""}c.l=P+" ["+c.ca()+"]",qo(c)}}finally{ji(c)}}}}function ji(c,m){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const v=c.g;c.g=null,m||xt(c,"ready");try{v.onreadystatechange=null}catch{}}}r.isActive=function(){return!!this.g};function $n(c){return c.g?c.g.readyState:0}r.ca=function(){try{return $n(this)>2?this.g.status:-1}catch{return-1}},r.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.La=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),tf(m)}};function jt(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Bi(c){const m={};c=(c.g&&$n(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(R(c[A]))continue;var v=Eu(c[A]);const P=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const B=m[P]||[];m[P]=B,B.push(v)}He(m,function(A){return A.join(", ")})}r.ya=function(){return this.o},r.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ti(c,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||m}function Sr(c){this.za=0,this.i=[],this.j=new Gn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ti("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ti("baseRetryDelayMs",5e3,c),this.Za=Ti("retryDelaySeedMs",1e4,c),this.Ta=Ti("forwardChannelMaxRetries",2,c),this.va=Ti("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new Oo(c&&c.concurrentRequestLimit),this.Ba=new Tr,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}r=Sr.prototype,r.ka=8,r.I=1,r.connect=function(c,m,v,A){vt(0),this.W=c,this.H=m||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.J=Mu(this,null,this.W),Ai(this)};function Ho(c){if(Ea(c),c.I==3){var m=c.V++,v=At(c.J);if(Fe(v,"SID",c.M),Fe(v,"RID",m),Fe(v,"TYPE","terminate"),Is(c,v),m=new Kn(c,c.j,m),m.M=2,m.A=Ts(At(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(m.A.toString(),"")}catch{}!v&&f.Image&&(new Image().src=m.A,v=!0),v||(m.g=ku(m.j,null),m.g.ea(m.A)),m.F=Date.now(),di(m)}Vu(c)}function br(c){c.g&&(Go(c),c.g.cancel(),c.g=null)}function Ea(c){br(c),c.v&&(f.clearTimeout(c.v),c.v=null),Aa(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function Ai(c){if(!xo(c.h)&&!c.m){c.m=!0;var m=c.Ea;Ze||w(),ze||(Ze(),ze=!0),N.add(m,c),c.D=0}}function Ta(c,m){return gi(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=m.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=ci(g(c.Ea,c,m),xu(c,c.D)),c.D++,!0)}r.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const P=new Kn(this,this.j,c);let B=this.o;if(this.U&&(B?(B=x(B),ne(B,this.U)):B=this.U),this.u!==null||this.R||(P.J=B,B=null),this.S)e:{for(var m=0,v=0;v<this.i.length;v++){t:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break t}A=void 0}if(A===void 0)break;if(m+=A,m>4096){m=v;break e}if(m===4096||v===this.i.length-1){m=v+1;break e}}m=1e3}else m=1e3;m=Cu(this,P,m),v=At(this.J),Fe(v,"RID",c),Fe(v,"CVER",22),this.G&&Fe(v,"X-HTTP-Session-Id",this.G),Is(this,v),B&&(this.R?m="headers="+zi(Dn(B))+"&"+m:this.u&&bs(v,this.u,B)),Vo(this.h,P),this.Ra&&Fe(v,"TYPE","init"),this.S?(Fe(v,"$req",m),Fe(v,"SID","null"),P.U=!0,fi(P,v,null)):fi(P,v,m),this.I=2}}else this.I==3&&(c?Fo(this,c):this.i.length==0||xo(this.h)||Fo(this))};function Fo(c,m){var v;m?v=m.l:v=c.V++;const A=At(c.J);Fe(A,"SID",c.M),Fe(A,"RID",v),Fe(A,"AID",c.K),Is(c,A),c.u&&c.o&&bs(A,c.u,c.o),v=new Kn(c,c.j,v,c.D+1),c.u===null&&(v.J=c.o),m&&(c.i=m.G.concat(c.i)),m=Cu(c,v,1e3),v.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Vo(c.h,v),fi(v,A,m)}function Is(c,m){c.H&&Le(c.H,function(v,A){Fe(m,A,v)}),c.l&&Le({},function(v,A){Fe(m,A,v)})}function Cu(c,m,v){v=Math.min(c.i.length,v);const A=c.l?g(c.l.Ka,c.l,c):null;e:{var P=c.i;let Te=-1;for(;;){const dt=["count="+v];Te==-1?v>0?(Te=P[0].g,dt.push("ofs="+Te)):Te=0:dt.push("ofs="+Te);let je=!0;for(let at=0;at<v;at++){var B=P[at].g;const On=P[at].map;if(B-=Te,B<0)Te=Math.max(0,P[at].g-100),je=!1;else try{B="req"+B+"_"||"";try{var ee=On instanceof Map?On:Object.entries(On);for(const[bi,Jn]of ee){let Zn=Jn;p(Jn)&&(Zn=gr(Jn)),dt.push(B+bi+"="+encodeURIComponent(Zn))}}catch(bi){throw dt.push(B+"type="+encodeURIComponent("_badmap")),bi}}catch{A&&A(On)}}if(je){ee=dt.join("&");break e}}ee=void 0}return c=c.i.splice(0,v),m.G=c,ee}function Nu(c){if(!c.g&&!c.v){c.Y=1;var m=c.Da;Ze||w(),ze||(Ze(),ze=!0),N.add(m,c),c.A=0}}function Cs(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=ci(g(c.Da,c),xu(c,c.A)),c.A++,!0)}r.Da=function(){if(this.v=null,Du(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=ci(g(this.Wa,this),c)}},r.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,vt(10),br(this),Du(this))};function Go(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function Du(c){c.g=new Kn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var m=At(c.na);Fe(m,"RID","rpc"),Fe(m,"SID",c.M),Fe(m,"AID",c.K),Fe(m,"CI",c.F?"0":"1"),!c.F&&c.ia&&Fe(m,"TO",c.ia),Fe(m,"TYPE","xmlhttp"),Is(c,m),c.u&&c.o&&bs(m,c.u,c.o),c.O&&(c.g.H=c.O);var v=c.g;c=c.ba,v.M=1,v.A=Ts(At(m)),v.u=null,v.R=!0,da(v,c)}r.Va=function(){this.C!=null&&(this.C=null,br(this),Cs(this),vt(19))};function Aa(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function Ou(c,m){var v=null;if(c.g==m){Aa(c),Go(c),c.g=null;var A=2}else if(yi(c.h,m))v=m.G,Mo(c.h,m),A=1;else return;if(c.I!=0){if(m.o)if(A==1){v=m.u?m.u.length:0,m=Date.now()-m.F;var P=c.D;A=fa(),xt(A,new ui(A,v)),Ai(c)}else Nu(c);else if(P=m.m,P==3||P==0&&m.X>0||!(A==1&&Ta(c,m)||A==2&&Cs(c)))switch(v&&v.length>0&&(m=c.h,m.i=m.i.concat(v)),P){case 1:Si(c,5);break;case 4:Si(c,10);break;case 3:Si(c,6);break;default:Si(c,2)}}}function xu(c,m){let v=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(v*=2),v*m}function Si(c,m){if(c.j.info("Error code "+m),m==2){var v=g(c.bb,c),A=c.Ua;const P=!A;A=new gn(A||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Lt(A,"https"),Ts(A),P?Qn(A.toString(),v):jo(A.toString(),v)}else vt(2);c.I=0,c.l&&c.l.pa(m),Vu(c),Ea(c)}r.bb=function(c){c?(this.j.info("Successfully pinged google.com"),vt(2)):(this.j.info("Failed to ping google.com"),vt(1))};function Vu(c){if(c.I=0,c.ja=[],c.l){const m=ko(c.h);(m.length!=0||c.i.length!=0)&&(Z(c.ja,m),Z(c.ja,c.i),c.h.i.length=0,q(c.i),c.i.length=0),c.l.oa()}}function Mu(c,m,v){var A=v instanceof gn?At(v):new gn(v);if(A.g!="")m&&(A.g=m+"."+A.g),yr(A,A.u);else{var P=f.location;A=P.protocol,m=m?m+"."+P.hostname:P.hostname,P=+P.port;const B=new gn(null);A&&Lt(B,A),m&&(B.g=m),P&&yr(B,P),v&&(B.h=v),A=B}return v=c.G,m=c.wa,v&&m&&Fe(A,v,m),Fe(A,"VER",c.ka),Is(c,A),A}function ku(c,m,v){if(m&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Aa&&!c.ma?new Ye(new vi({ab:v})):new Ye(c.ma),m.Fa(c.L),m}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Lu(){}r=Lu.prototype,r.ra=function(){},r.qa=function(){},r.pa=function(){},r.oa=function(){},r.isActive=function(){return!0},r.Ka=function(){};function wr(){}wr.prototype.g=function(c,m){return new tn(c,m)};function tn(c,m){_t.call(this),this.g=new Sr(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(c?c["X-WebChannel-Client-Profile"]=m.sa:c={"X-WebChannel-Client-Profile":m.sa}),this.g.U=c,(c=m&&m.Qb)&&!R(c)&&(this.g.u=c),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!R(m)&&(this.g.G=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new qi(this)}S(tn,_t),tn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},tn.prototype.close=function(){Ho(this.g)},tn.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.v&&(v={},v.__data__=gr(c),c=v);m.i.push(new Tt(m.Ya++,c)),m.I==3&&Ai(m)},tn.prototype.N=function(){this.g.l=null,delete this.j,Ho(this.g),delete this.g,tn.Z.N.call(this)};function Pu(c){zt.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){e:{for(const v in m){c=v;break e}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}S(Pu,zt);function Uu(){In.call(this),this.status=1}S(Uu,In);function qi(c){this.g=c}S(qi,Lu),qi.prototype.ra=function(){xt(this.g,"a")},qi.prototype.qa=function(c){xt(this.g,new Pu(c))},qi.prototype.pa=function(c){xt(this.g,new Uu)},qi.prototype.oa=function(){xt(this.g,"b")},wr.prototype.createWebChannel=wr.prototype.g,tn.prototype.send=tn.prototype.o,tn.prototype.open=tn.prototype.m,tn.prototype.close=tn.prototype.close,IT=function(){return new wr},RT=function(){return fa()},wT=ft,xm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},vs.NO_ERROR=0,vs.TIMEOUT=8,vs.HTTP_ERROR=6,Zc=vs,No.COMPLETE="complete",bT=No,gu.EventType=Fn,Fn.OPEN="a",Fn.CLOSE="b",Fn.ERROR="c",Fn.MESSAGE="d",_t.prototype.listen=_t.prototype.J,Vl=gu,Ye.prototype.listenOnce=Ye.prototype.K,Ye.prototype.getLastError=Ye.prototype.Ha,Ye.prototype.getLastErrorCode=Ye.prototype.ya,Ye.prototype.getStatus=Ye.prototype.ca,Ye.prototype.getResponseJson=Ye.prototype.La,Ye.prototype.getResponseText=Ye.prototype.la,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Fa,ST=Ye}).apply(typeof Hc<"u"?Hc:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */let $t=class{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};$t.UNAUTHENTICATED=new $t(null),$t.GOOGLE_CREDENTIALS=new $t("google-credentials-uid"),$t.FIRST_PARTY=new $t("first-party-uid"),$t.MOCK_USER=new $t("mock-user");/**
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
 */let vo="12.9.0";function d2(r){vo=r}/**
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
 */const Ws=new tp("@firebase/firestore");function Wa(){return Ws.logLevel}function re(r,...e){if(Ws.logLevel<=De.DEBUG){const n=e.map(dp);Ws.debug(`Firestore (${vo}): ${r}`,...n)}}function fr(r,...e){if(Ws.logLevel<=De.ERROR){const n=e.map(dp);Ws.error(`Firestore (${vo}): ${r}`,...n)}}function ea(r,...e){if(Ws.logLevel<=De.WARN){const n=e.map(dp);Ws.warn(`Firestore (${vo}): ${r}`,...n)}}function dp(r){if(typeof r=="string")return r;try{return(function(n){return JSON.stringify(n)})(r)}catch{return r}}/**
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
 */function me(r,e,n){let s="Unexpected state";typeof e=="string"?s=e:n=e,CT(r,s,n)}function CT(r,e,n){let s=`FIRESTORE (${vo}) INTERNAL ASSERTION FAILED: ${e} (ID: ${r.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw fr(s),new Error(s)}function qe(r,e,n,s){let l="Unexpected state";typeof n=="string"?l=n:s=n,r||CT(e,l,s)}function _e(r,e){return r}/**
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
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ie extends Ui{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ur{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class NT{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class m2{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n($t.UNAUTHENTICATED)))}shutdown(){}}class p2{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class g2{constructor(e){this.t=e,this.currentUser=$t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){qe(this.o===void 0,42304);let s=this.i;const l=y=>this.i!==s?(s=this.i,n(y)):Promise.resolve();let u=new ur;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new ur,e.enqueueRetryable((()=>l(this.currentUser)))};const f=()=>{const y=u;e.enqueueRetryable((async()=>{await y.promise,await l(this.currentUser)}))},p=y=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=y,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((y=>p(y))),setTimeout((()=>{if(!this.auth){const y=this.t.getImmediate({optional:!0});y?p(y):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new ur)}}),0),f()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(qe(typeof s.accessToken=="string",31837,{l:s}),new NT(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return qe(e===null||typeof e=="string",2055,{h:e}),new $t(e)}}class y2{constructor(e,n,s){this.P=e,this.T=n,this.I=s,this.type="FirstParty",this.user=$t.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class _2{constructor(e,n,s){this.P=e,this.T=n,this.I=s}getToken(){return Promise.resolve(new y2(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n($t.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class fE{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class v2{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,jn(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){qe(this.o===void 0,3512);const s=u=>{u.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,re("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{e.enqueueRetryable((()=>s(u)))};const l=u=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>l(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?l(u):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new fE(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(qe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new fE(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function E2(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<r;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class mp{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const l=E2(40);for(let u=0;u<l.length;++u)s.length<20&&l[u]<n&&(s+=e.charAt(l[u]%62))}return s}}function Oe(r,e){return r<e?-1:r>e?1:0}function Vm(r,e){const n=Math.min(r.length,e.length);for(let s=0;s<n;s++){const l=r.charAt(s),u=e.charAt(s);if(l!==u)return dm(l)===dm(u)?Oe(l,u):dm(l)?1:-1}return Oe(r.length,e.length)}const T2=55296,A2=57343;function dm(r){const e=r.charCodeAt(0);return e>=T2&&e<=A2}function uo(r,e,n){return r.length===e.length&&r.every(((s,l)=>n(s,e[l])))}/**
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
 */const dE="__name__";class Ni{constructor(e,n,s){n===void 0?n=0:n>e.length&&me(637,{offset:n,range:e.length}),s===void 0?s=e.length-n:s>e.length-n&&me(1746,{length:s,range:e.length-n}),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Ni.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ni?e.forEach((s=>{n.push(s)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let l=0;l<s;l++){const u=Ni.compareSegments(e.get(l),n.get(l));if(u!==0)return u}return Oe(e.length,n.length)}static compareSegments(e,n){const s=Ni.isNumericId(e),l=Ni.isNumericId(n);return s&&!l?-1:!s&&l?1:s&&l?Ni.extractNumericId(e).compare(Ni.extractNumericId(n)):Vm(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ts.fromString(e.substring(4,e.length-2))}}class et extends Ni{construct(e,n,s){return new et(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new ie(Y.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((l=>l.length>0)))}return new et(n)}static emptyPath(){return new et([])}}const S2=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Kt extends Ni{construct(e,n,s){return new Kt(e,n,s)}static isValidIdentifier(e){return S2.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Kt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===dE}static keyField(){return new Kt([dE])}static fromServerFormat(e){const n=[];let s="",l=0;const u=()=>{if(s.length===0)throw new ie(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let f=!1;for(;l<e.length;){const p=e[l];if(p==="\\"){if(l+1===e.length)throw new ie(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const y=e[l+1];if(y!=="\\"&&y!=="."&&y!=="`")throw new ie(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=y,l+=2}else p==="`"?(f=!f,l++):p!=="."||f?(s+=p,l++):(u(),l++)}if(u(),f)throw new ie(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Kt(n)}static emptyPath(){return new Kt([])}}/**
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
 */class ue{constructor(e){this.path=e}static fromPath(e){return new ue(et.fromString(e))}static fromName(e){return new ue(et.fromString(e).popFirst(5))}static empty(){return new ue(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return et.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ue(new et(e.slice()))}}/**
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
 */function DT(r,e,n){if(!n)throw new ie(Y.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function b2(r,e,n,s){if(e===!0&&s===!0)throw new ie(Y.INVALID_ARGUMENT,`${r} and ${n} cannot be used together.`)}function mE(r){if(!ue.isDocumentKey(r))throw new ie(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function pE(r){if(ue.isDocumentKey(r))throw new ie(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function OT(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function xh(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(s){return s.constructor?s.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":me(12329,{type:typeof r})}function mn(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ie(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=xh(r);throw new ie(Y.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return r}/**
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
 */function Nt(r,e){const n={typeString:r};return e&&(n.value=e),n}function ou(r,e){if(!OT(r))throw new ie(Y.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in e)if(e[s]){const l=e[s].typeString,u="value"in e[s]?{value:e[s].value}:void 0;if(!(s in r)){n=`JSON missing required field: '${s}'`;break}const f=r[s];if(l&&typeof f!==l){n=`JSON field '${s}' must be a ${l}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${s}' field to equal '${u.value}'`;break}}if(n)throw new ie(Y.INVALID_ARGUMENT,n);return!0}/**
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
 */const gE=-62135596800,yE=1e6;class it{static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*yE);return new it(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new ie(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new ie(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<gE)throw new ie(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ie(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yE}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:it._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ou(e,it._jsonSchema))return new it(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-gE;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}it._jsonSchemaVersion="firestore/timestamp/1.0",it._jsonSchema={type:Nt("string",it._jsonSchemaVersion),seconds:Nt("number"),nanoseconds:Nt("number")};/**
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
 */class ge{static fromTimestamp(e){return new ge(e)}static min(){return new ge(new it(0,0))}static max(){return new ge(new it(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Kl=-1;function w2(r,e){const n=r.toTimestamp().seconds,s=r.toTimestamp().nanoseconds+1,l=ge.fromTimestamp(s===1e9?new it(n+1,0):new it(n,s));return new is(l,ue.empty(),e)}function R2(r){return new is(r.readTime,r.key,Kl)}class is{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new is(ge.min(),ue.empty(),Kl)}static max(){return new is(ge.max(),ue.empty(),Kl)}}function I2(r,e){let n=r.readTime.compareTo(e.readTime);return n!==0?n:(n=ue.comparator(r.documentKey,e.documentKey),n!==0?n:Oe(r.largestBatchId,e.largestBatchId))}/**
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
 */const C2="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class N2{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Eo(r){if(r.code!==Y.FAILED_PRECONDITION||r.message!==C2)throw r;re("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class ${constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&me(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new $(((s,l)=>{this.nextCallback=u=>{this.wrapSuccess(e,u).next(s,l)},this.catchCallback=u=>{this.wrapFailure(n,u).next(s,l)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):$.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):$.reject(n)}static resolve(e){return new $(((n,s)=>{n(e)}))}static reject(e){return new $(((n,s)=>{s(e)}))}static waitFor(e){return new $(((n,s)=>{let l=0,u=0,f=!1;e.forEach((p=>{++l,p.next((()=>{++u,f&&u===l&&n()}),(y=>s(y)))})),f=!0,u===l&&n()}))}static or(e){let n=$.resolve(!1);for(const s of e)n=n.next((l=>l?$.resolve(l):s()));return n}static forEach(e,n){const s=[];return e.forEach(((l,u)=>{s.push(n.call(this,l,u))})),this.waitFor(s)}static mapArray(e,n){return new $(((s,l)=>{const u=e.length,f=new Array(u);let p=0;for(let y=0;y<u;y++){const g=y;n(e[g]).next((T=>{f[g]=T,++p,p===u&&s(f)}),(T=>l(T)))}}))}static doWhile(e,n){return new $(((s,l)=>{const u=()=>{e()===!0?n().next((()=>{u()}),l):s()};u()}))}}function D2(r){const e=r.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function To(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class Vh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ae(s),this.ue=s=>n.writeSequenceNumber(s))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Vh.ce=-1;/**
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
 */const pp=-1;function Mh(r){return r==null}function fh(r){return r===0&&1/r==-1/0}function O2(r){return typeof r=="number"&&Number.isInteger(r)&&!fh(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const xT="";function x2(r){let e="";for(let n=0;n<r.length;n++)e.length>0&&(e=_E(e)),e=V2(r.get(n),e);return _E(e)}function V2(r,e){let n=e;const s=r.length;for(let l=0;l<s;l++){const u=r.charAt(l);switch(u){case"\0":n+="";break;case xT:n+="";break;default:n+=u}}return n}function _E(r){return r+xT+""}/**
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
 */function vE(r){let e=0;for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e++;return e}function hs(r,e){for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&e(n,r[n])}function VT(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
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
 */class lt{constructor(e,n){this.comparator=e,this.root=n||Gt.EMPTY}insert(e,n){return new lt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Gt.BLACK,null,null))}remove(e){return new lt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Gt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const l=this.comparator(e,s.key);if(l===0)return n+s.left.size;l<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,s)=>(e(n,s),!1)))}toString(){const e=[];return this.inorderTraversal(((n,s)=>(e.push(`${n}:${s}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Fc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Fc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Fc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Fc(this.root,e,this.comparator,!0)}}class Fc{constructor(e,n,s,l){this.isReverse=l,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=n?s(e.key,n):1,n&&l&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(u===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Gt{constructor(e,n,s,l,u){this.key=e,this.value=n,this.color=s??Gt.RED,this.left=l??Gt.EMPTY,this.right=u??Gt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,l,u){return new Gt(e??this.key,n??this.value,s??this.color,l??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let l=this;const u=s(e,l.key);return l=u<0?l.copy(null,null,null,l.left.insert(e,n,s),null):u===0?l.copy(null,n,null,null,null):l.copy(null,null,null,null,l.right.insert(e,n,s)),l.fixUp()}removeMin(){if(this.left.isEmpty())return Gt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,l=this;if(n(e,l.key)<0)l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(e,n),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),n(e,l.key)===0){if(l.right.isEmpty())return Gt.EMPTY;s=l.right.min(),l=l.copy(s.key,s.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(e,n))}return l.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Gt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Gt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw me(43730,{key:this.key,value:this.value});if(this.right.isRed())throw me(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw me(27949);return e+(this.isRed()?0:1)}}Gt.EMPTY=null,Gt.RED=!0,Gt.BLACK=!1;Gt.EMPTY=new class{constructor(){this.size=0}get key(){throw me(57766)}get value(){throw me(16141)}get color(){throw me(16727)}get left(){throw me(29726)}get right(){throw me(36894)}copy(e,n,s,l,u){return this}insert(e,n,s){return new Gt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Mt{constructor(e){this.comparator=e,this.data=new lt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,s)=>(e(n),!1)))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const l=s.getNext();if(this.comparator(l.key,e[1])>=0)return;n(l.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new EE(this.data.getIterator())}getIteratorFrom(e){return new EE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((s=>{n=n.add(s)})),n}isEqual(e){if(!(e instanceof Mt)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const l=n.getNext().key,u=s.getNext().key;if(this.comparator(l,u)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Mt(this.comparator);return n.data=e,n}}class EE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class bn{constructor(e){this.fields=e,e.sort(Kt.comparator)}static empty(){return new bn([])}unionWith(e){let n=new Mt(Kt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new bn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return uo(this.fields,e.fields,((n,s)=>n.isEqual(s)))}}/**
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
 */class MT extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Yt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(l){try{return atob(l)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new MT("Invalid base64 string: "+u):u}})(e);return new Yt(n)}static fromUint8Array(e){const n=(function(l){let u="";for(let f=0;f<l.length;++f)u+=String.fromCharCode(l[f]);return u})(e);return new Yt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let l=0;l<n.length;l++)s[l]=n.charCodeAt(l);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yt.EMPTY_BYTE_STRING=new Yt("");const M2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rs(r){if(qe(!!r,39018),typeof r=="string"){let e=0;const n=M2.exec(r);if(qe(!!n,46558,{timestamp:r}),n[1]){let l=n[1];l=(l+"000000000").substr(0,9),e=Number(l)}const s=new Date(r);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:gt(r.seconds),nanos:gt(r.nanos)}}function gt(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function ss(r){return typeof r=="string"?Yt.fromBase64String(r):Yt.fromUint8Array(r)}/**
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
 */const kT="server_timestamp",LT="__type__",PT="__previous_value__",UT="__local_write_time__";function gp(r){var n,s;return((s=(((n=r==null?void 0:r.mapValue)==null?void 0:n.fields)||{})[LT])==null?void 0:s.stringValue)===kT}function kh(r){const e=r.mapValue.fields[PT];return gp(e)?kh(e):e}function Yl(r){const e=rs(r.mapValue.fields[UT].timestampValue);return new it(e.seconds,e.nanos)}/**
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
 */class k2{constructor(e,n,s,l,u,f,p,y,g,T,S){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=l,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=y,this.useFetchStreams=g,this.isUsingEmulator=T,this.apiKey=S}}const Mm="(default)";class Ql{constructor(e,n){this.projectId=e,this.database=n||Mm}static empty(){return new Ql("","")}get isDefaultDatabase(){return this.database===Mm}isEqual(e){return e instanceof Ql&&e.projectId===this.projectId&&e.database===this.database}}function L2(r,e){if(!Object.prototype.hasOwnProperty.apply(r.options,["projectId"]))throw new ie(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ql(r.options.projectId,e)}/**
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
 */const zT="__type__",P2="__max__",Gc={mapValue:{}},jT="__vector__",dh="value";function as(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?gp(r)?4:z2(r)?9007199254740991:U2(r)?10:11:me(28295,{value:r})}function Pi(r,e){if(r===e)return!0;const n=as(r);if(n!==as(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Yl(r).isEqual(Yl(e));case 3:return(function(l,u){if(typeof l.timestampValue=="string"&&typeof u.timestampValue=="string"&&l.timestampValue.length===u.timestampValue.length)return l.timestampValue===u.timestampValue;const f=rs(l.timestampValue),p=rs(u.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(l,u){return ss(l.bytesValue).isEqual(ss(u.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(l,u){return gt(l.geoPointValue.latitude)===gt(u.geoPointValue.latitude)&&gt(l.geoPointValue.longitude)===gt(u.geoPointValue.longitude)})(r,e);case 2:return(function(l,u){if("integerValue"in l&&"integerValue"in u)return gt(l.integerValue)===gt(u.integerValue);if("doubleValue"in l&&"doubleValue"in u){const f=gt(l.doubleValue),p=gt(u.doubleValue);return f===p?fh(f)===fh(p):isNaN(f)&&isNaN(p)}return!1})(r,e);case 9:return uo(r.arrayValue.values||[],e.arrayValue.values||[],Pi);case 10:case 11:return(function(l,u){const f=l.mapValue.fields||{},p=u.mapValue.fields||{};if(vE(f)!==vE(p))return!1;for(const y in f)if(f.hasOwnProperty(y)&&(p[y]===void 0||!Pi(f[y],p[y])))return!1;return!0})(r,e);default:return me(52216,{left:r})}}function Xl(r,e){return(r.values||[]).find((n=>Pi(n,e)))!==void 0}function co(r,e){if(r===e)return 0;const n=as(r),s=as(e);if(n!==s)return Oe(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return Oe(r.booleanValue,e.booleanValue);case 2:return(function(u,f){const p=gt(u.integerValue||u.doubleValue),y=gt(f.integerValue||f.doubleValue);return p<y?-1:p>y?1:p===y?0:isNaN(p)?isNaN(y)?0:-1:1})(r,e);case 3:return TE(r.timestampValue,e.timestampValue);case 4:return TE(Yl(r),Yl(e));case 5:return Vm(r.stringValue,e.stringValue);case 6:return(function(u,f){const p=ss(u),y=ss(f);return p.compareTo(y)})(r.bytesValue,e.bytesValue);case 7:return(function(u,f){const p=u.split("/"),y=f.split("/");for(let g=0;g<p.length&&g<y.length;g++){const T=Oe(p[g],y[g]);if(T!==0)return T}return Oe(p.length,y.length)})(r.referenceValue,e.referenceValue);case 8:return(function(u,f){const p=Oe(gt(u.latitude),gt(f.latitude));return p!==0?p:Oe(gt(u.longitude),gt(f.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return AE(r.arrayValue,e.arrayValue);case 10:return(function(u,f){var b,q,Z,J;const p=u.fields||{},y=f.fields||{},g=(b=p[dh])==null?void 0:b.arrayValue,T=(q=y[dh])==null?void 0:q.arrayValue,S=Oe(((Z=g==null?void 0:g.values)==null?void 0:Z.length)||0,((J=T==null?void 0:T.values)==null?void 0:J.length)||0);return S!==0?S:AE(g,T)})(r.mapValue,e.mapValue);case 11:return(function(u,f){if(u===Gc.mapValue&&f===Gc.mapValue)return 0;if(u===Gc.mapValue)return 1;if(f===Gc.mapValue)return-1;const p=u.fields||{},y=Object.keys(p),g=f.fields||{},T=Object.keys(g);y.sort(),T.sort();for(let S=0;S<y.length&&S<T.length;++S){const b=Vm(y[S],T[S]);if(b!==0)return b;const q=co(p[y[S]],g[T[S]]);if(q!==0)return q}return Oe(y.length,T.length)})(r.mapValue,e.mapValue);default:throw me(23264,{he:n})}}function TE(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Oe(r,e);const n=rs(r),s=rs(e),l=Oe(n.seconds,s.seconds);return l!==0?l:Oe(n.nanos,s.nanos)}function AE(r,e){const n=r.values||[],s=e.values||[];for(let l=0;l<n.length&&l<s.length;++l){const u=co(n[l],s[l]);if(u)return u}return Oe(n.length,s.length)}function ho(r){return km(r)}function km(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(n){const s=rs(n);return`time(${s.seconds},${s.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(n){return ss(n).toBase64()})(r.bytesValue):"referenceValue"in r?(function(n){return ue.fromName(n).toString()})(r.referenceValue):"geoPointValue"in r?(function(n){return`geo(${n.latitude},${n.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(n){let s="[",l=!0;for(const u of n.values||[])l?l=!1:s+=",",s+=km(u);return s+"]"})(r.arrayValue):"mapValue"in r?(function(n){const s=Object.keys(n.fields||{}).sort();let l="{",u=!0;for(const f of s)u?u=!1:l+=",",l+=`${f}:${km(n.fields[f])}`;return l+"}"})(r.mapValue):me(61005,{value:r})}function Wc(r){switch(as(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=kh(r);return e?16+Wc(e):16;case 5:return 2*r.stringValue.length;case 6:return ss(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(s){return(s.values||[]).reduce(((l,u)=>l+Wc(u)),0)})(r.arrayValue);case 10:case 11:return(function(s){let l=0;return hs(s.fields,((u,f)=>{l+=u.length+Wc(f)})),l})(r.mapValue);default:throw me(13486,{value:r})}}function SE(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Lm(r){return!!r&&"integerValue"in r}function yp(r){return!!r&&"arrayValue"in r}function bE(r){return!!r&&"nullValue"in r}function wE(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function eh(r){return!!r&&"mapValue"in r}function U2(r){var n,s;return((s=(((n=r==null?void 0:r.mapValue)==null?void 0:n.fields)||{})[zT])==null?void 0:s.stringValue)===jT}function zl(r){if(r.geoPointValue)return{geoPointValue:{...r.geoPointValue}};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:{...r.timestampValue}};if(r.mapValue){const e={mapValue:{fields:{}}};return hs(r.mapValue.fields,((n,s)=>e.mapValue.fields[n]=zl(s))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(r.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=zl(r.arrayValue.values[n]);return e}return{...r}}function z2(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===P2}/**
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
 */class dn{constructor(e){this.value=e}static empty(){return new dn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!eh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=zl(n)}setAll(e){let n=Kt.emptyPath(),s={},l=[];e.forEach(((f,p)=>{if(!n.isImmediateParentOf(p)){const y=this.getFieldsMap(n);this.applyChanges(y,s,l),s={},l=[],n=p.popLast()}f?s[p.lastSegment()]=zl(f):l.push(p.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,s,l)}delete(e){const n=this.field(e.popLast());eh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Pi(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let l=n.mapValue.fields[e.get(s)];eh(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=l),n=l}return n.mapValue.fields}applyChanges(e,n,s){hs(n,((l,u)=>e[l]=u));for(const l of s)delete e[l]}clone(){return new dn(zl(this.value))}}function BT(r){const e=[];return hs(r.fields,((n,s)=>{const l=new Kt([n]);if(eh(s)){const u=BT(s.mapValue).fields;if(u.length===0)e.push(l);else for(const f of u)e.push(l.child(f))}else e.push(l)})),new bn(e)}/**
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
 */class Jt{constructor(e,n,s,l,u,f,p){this.key=e,this.documentType=n,this.version=s,this.readTime=l,this.createTime=u,this.data=f,this.documentState=p}static newInvalidDocument(e){return new Jt(e,0,ge.min(),ge.min(),ge.min(),dn.empty(),0)}static newFoundDocument(e,n,s,l){return new Jt(e,1,n,ge.min(),s,l,0)}static newNoDocument(e,n){return new Jt(e,2,n,ge.min(),ge.min(),dn.empty(),0)}static newUnknownDocument(e,n){return new Jt(e,3,n,ge.min(),ge.min(),dn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ge.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ge.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Jt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mh{constructor(e,n){this.position=e,this.inclusive=n}}function RE(r,e,n){let s=0;for(let l=0;l<r.position.length;l++){const u=e[l],f=r.position[l];if(u.field.isKeyField()?s=ue.comparator(ue.fromName(f.referenceValue),n.key):s=co(f,n.data.field(u.field)),u.dir==="desc"&&(s*=-1),s!==0)break}return s}function IE(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let n=0;n<r.position.length;n++)if(!Pi(r.position[n],e.position[n]))return!1;return!0}/**
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
 */class $l{constructor(e,n="asc"){this.field=e,this.dir=n}}function j2(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
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
 */class qT{}class Ct extends qT{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new q2(e,n,s):n==="array-contains"?new G2(e,s):n==="in"?new K2(e,s):n==="not-in"?new Y2(e,s):n==="array-contains-any"?new Q2(e,s):new Ct(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new H2(e,s):new F2(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(co(n,this.value)):n!==null&&as(this.value)===as(n)&&this.matchesComparison(co(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return me(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ai extends qT{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new ai(e,n)}matches(e){return HT(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function HT(r){return r.op==="and"}function FT(r){return B2(r)&&HT(r)}function B2(r){for(const e of r.filters)if(e instanceof ai)return!1;return!0}function Pm(r){if(r instanceof Ct)return r.field.canonicalString()+r.op.toString()+ho(r.value);if(FT(r))return r.filters.map((e=>Pm(e))).join(",");{const e=r.filters.map((n=>Pm(n))).join(",");return`${r.op}(${e})`}}function GT(r,e){return r instanceof Ct?(function(s,l){return l instanceof Ct&&s.op===l.op&&s.field.isEqual(l.field)&&Pi(s.value,l.value)})(r,e):r instanceof ai?(function(s,l){return l instanceof ai&&s.op===l.op&&s.filters.length===l.filters.length?s.filters.reduce(((u,f,p)=>u&&GT(f,l.filters[p])),!0):!1})(r,e):void me(19439)}function KT(r){return r instanceof Ct?(function(n){return`${n.field.canonicalString()} ${n.op} ${ho(n.value)}`})(r):r instanceof ai?(function(n){return n.op.toString()+" {"+n.getFilters().map(KT).join(" ,")+"}"})(r):"Filter"}class q2 extends Ct{constructor(e,n,s){super(e,n,s),this.key=ue.fromName(s.referenceValue)}matches(e){const n=ue.comparator(e.key,this.key);return this.matchesComparison(n)}}class H2 extends Ct{constructor(e,n){super(e,"in",n),this.keys=YT("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class F2 extends Ct{constructor(e,n){super(e,"not-in",n),this.keys=YT("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function YT(r,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map((s=>ue.fromName(s.referenceValue)))}class G2 extends Ct{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yp(n)&&Xl(n.arrayValue,this.value)}}class K2 extends Ct{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Xl(this.value.arrayValue,n)}}class Y2 extends Ct{constructor(e,n){super(e,"not-in",n)}matches(e){if(Xl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Xl(this.value.arrayValue,n)}}class Q2 extends Ct{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yp(n)||!n.arrayValue.values)&&n.arrayValue.values.some((s=>Xl(this.value.arrayValue,s)))}}/**
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
 */class X2{constructor(e,n=null,s=[],l=[],u=null,f=null,p=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=l,this.limit=u,this.startAt=f,this.endAt=p,this.Te=null}}function CE(r,e=null,n=[],s=[],l=null,u=null,f=null){return new X2(r,e,n,s,l,u,f)}function _p(r){const e=_e(r);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((s=>Pm(s))).join(","),n+="|ob:",n+=e.orderBy.map((s=>(function(u){return u.field.canonicalString()+u.dir})(s))).join(","),Mh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((s=>ho(s))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((s=>ho(s))).join(",")),e.Te=n}return e.Te}function vp(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<r.orderBy.length;n++)if(!j2(r.orderBy[n],e.orderBy[n]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let n=0;n<r.filters.length;n++)if(!GT(r.filters[n],e.filters[n]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!IE(r.startAt,e.startAt)&&IE(r.endAt,e.endAt)}function Um(r){return ue.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class Ao{constructor(e,n=null,s=[],l=[],u=null,f="F",p=null,y=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=l,this.limit=u,this.limitType=f,this.startAt=p,this.endAt=y,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function $2(r,e,n,s,l,u,f,p){return new Ao(r,e,n,s,l,u,f,p)}function Lh(r){return new Ao(r)}function NE(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function J2(r){return ue.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function QT(r){return r.collectionGroup!==null}function jl(r){const e=_e(r);if(e.Ie===null){e.Ie=[];const n=new Set;for(const u of e.explicitOrderBy)e.Ie.push(u),n.add(u.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new Mt(Kt.comparator);return f.filters.forEach((y=>{y.getFlattenedFilters().forEach((g=>{g.isInequality()&&(p=p.add(g.field))}))})),p})(e).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||e.Ie.push(new $l(u,s))})),n.has(Kt.keyField().canonicalString())||e.Ie.push(new $l(Kt.keyField(),s))}return e.Ie}function xi(r){const e=_e(r);return e.Ee||(e.Ee=Z2(e,jl(r))),e.Ee}function Z2(r,e){if(r.limitType==="F")return CE(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((l=>{const u=l.dir==="desc"?"asc":"desc";return new $l(l.field,u)}));const n=r.endAt?new mh(r.endAt.position,r.endAt.inclusive):null,s=r.startAt?new mh(r.startAt.position,r.startAt.inclusive):null;return CE(r.path,r.collectionGroup,e,r.filters,r.limit,n,s)}}function zm(r,e){const n=r.filters.concat([e]);return new Ao(r.path,r.collectionGroup,r.explicitOrderBy.slice(),n,r.limit,r.limitType,r.startAt,r.endAt)}function W2(r,e){const n=r.explicitOrderBy.concat([e]);return new Ao(r.path,r.collectionGroup,n,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}function jm(r,e,n){return new Ao(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,n,r.startAt,r.endAt)}function Ph(r,e){return vp(xi(r),xi(e))&&r.limitType===e.limitType}function XT(r){return`${_p(xi(r))}|lt:${r.limitType}`}function eo(r){return`Query(target=${(function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map((l=>KT(l))).join(", ")}]`),Mh(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map((l=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(l))).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map((l=>ho(l))).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map((l=>ho(l))).join(",")),`Target(${s})`})(xi(r))}; limitType=${r.limitType})`}function Uh(r,e){return e.isFoundDocument()&&(function(s,l){const u=l.key.path;return s.collectionGroup!==null?l.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(u):ue.isDocumentKey(s.path)?s.path.isEqual(u):s.path.isImmediateParentOf(u)})(r,e)&&(function(s,l){for(const u of jl(s))if(!u.field.isKeyField()&&l.data.field(u.field)===null)return!1;return!0})(r,e)&&(function(s,l){for(const u of s.filters)if(!u.matches(l))return!1;return!0})(r,e)&&(function(s,l){return!(s.startAt&&!(function(f,p,y){const g=RE(f,p,y);return f.inclusive?g<=0:g<0})(s.startAt,jl(s),l)||s.endAt&&!(function(f,p,y){const g=RE(f,p,y);return f.inclusive?g>=0:g>0})(s.endAt,jl(s),l))})(r,e)}function eC(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function $T(r){return(e,n)=>{let s=!1;for(const l of jl(r)){const u=tC(l,e,n);if(u!==0)return u;s=s||l.field.isKeyField()}return 0}}function tC(r,e,n){const s=r.field.isKeyField()?ue.comparator(e.key,n.key):(function(u,f,p){const y=f.data.field(u),g=p.data.field(u);return y!==null&&g!==null?co(y,g):me(42886)})(r.field,e,n);switch(r.dir){case"asc":return s;case"desc":return-1*s;default:return me(19790,{direction:r.dir})}}/**
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
 */class oa{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[l,u]of s)if(this.equalsFn(l,e))return u}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),l=this.inner[s];if(l===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let u=0;u<l.length;u++)if(this.equalsFn(l[u][0],e))return void(l[u]=[e,n]);l.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],e))return s.length===1?delete this.inner[n]:s.splice(l,1),this.innerSize--,!0;return!1}forEach(e){hs(this.inner,((n,s)=>{for(const[l,u]of s)e(l,u)}))}isEmpty(){return VT(this.inner)}size(){return this.innerSize}}/**
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
 */const nC=new lt(ue.comparator);function dr(){return nC}const JT=new lt(ue.comparator);function Ml(...r){let e=JT;for(const n of r)e=e.insert(n.key,n);return e}function ZT(r){let e=JT;return r.forEach(((n,s)=>e=e.insert(n,s.overlayedDocument))),e}function Ks(){return Bl()}function WT(){return Bl()}function Bl(){return new oa((r=>r.toString()),((r,e)=>r.isEqual(e)))}const iC=new lt(ue.comparator),rC=new Mt(ue.comparator);function xe(...r){let e=rC;for(const n of r)e=e.add(n);return e}const sC=new Mt(Oe);function aC(){return sC}/**
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
 */function Ep(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:fh(e)?"-0":e}}function eA(r){return{integerValue:""+r}}function oC(r,e){return O2(e)?eA(e):Ep(r,e)}/**
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
 */class zh{constructor(){this._=void 0}}function lC(r,e,n){return r instanceof Jl?(function(l,u){const f={fields:{[LT]:{stringValue:kT},[UT]:{timestampValue:{seconds:l.seconds,nanos:l.nanoseconds}}}};return u&&gp(u)&&(u=kh(u)),u&&(f.fields[PT]=u),{mapValue:f}})(n,e):r instanceof Zl?nA(r,e):r instanceof Wl?iA(r,e):(function(l,u){const f=tA(l,u),p=DE(f)+DE(l.Ae);return Lm(f)&&Lm(l.Ae)?eA(p):Ep(l.serializer,p)})(r,e)}function uC(r,e,n){return r instanceof Zl?nA(r,e):r instanceof Wl?iA(r,e):n}function tA(r,e){return r instanceof ph?(function(s){return Lm(s)||(function(u){return!!u&&"doubleValue"in u})(s)})(e)?e:{integerValue:0}:null}class Jl extends zh{}class Zl extends zh{constructor(e){super(),this.elements=e}}function nA(r,e){const n=rA(e);for(const s of r.elements)n.some((l=>Pi(l,s)))||n.push(s);return{arrayValue:{values:n}}}class Wl extends zh{constructor(e){super(),this.elements=e}}function iA(r,e){let n=rA(e);for(const s of r.elements)n=n.filter((l=>!Pi(l,s)));return{arrayValue:{values:n}}}class ph extends zh{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function DE(r){return gt(r.integerValue||r.doubleValue)}function rA(r){return yp(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class cC{constructor(e,n){this.field=e,this.transform=n}}function hC(r,e){return r.field.isEqual(e.field)&&(function(s,l){return s instanceof Zl&&l instanceof Zl||s instanceof Wl&&l instanceof Wl?uo(s.elements,l.elements,Pi):s instanceof ph&&l instanceof ph?Pi(s.Ae,l.Ae):s instanceof Jl&&l instanceof Jl})(r.transform,e.transform)}class fC{constructor(e,n){this.version=e,this.transformResults=n}}class Hn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Hn}static exists(e){return new Hn(void 0,e)}static updateTime(e){return new Hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function th(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class jh{}function sA(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Tp(r.key,Hn.none()):new lu(r.key,r.data,Hn.none());{const n=r.data,s=dn.empty();let l=new Mt(Kt.comparator);for(let u of e.fields)if(!l.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?s.delete(u):s.set(u,f),l=l.add(u)}return new fs(r.key,s,new bn(l.toArray()),Hn.none())}}function dC(r,e,n){r instanceof lu?(function(l,u,f){const p=l.value.clone(),y=xE(l.fieldTransforms,u,f.transformResults);p.setAll(y),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(r,e,n):r instanceof fs?(function(l,u,f){if(!th(l.precondition,u))return void u.convertToUnknownDocument(f.version);const p=xE(l.fieldTransforms,u,f.transformResults),y=u.data;y.setAll(aA(l)),y.setAll(p),u.convertToFoundDocument(f.version,y).setHasCommittedMutations()})(r,e,n):(function(l,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,e,n)}function ql(r,e,n,s){return r instanceof lu?(function(u,f,p,y){if(!th(u.precondition,f))return p;const g=u.value.clone(),T=VE(u.fieldTransforms,y,f);return g.setAll(T),f.convertToFoundDocument(f.version,g).setHasLocalMutations(),null})(r,e,n,s):r instanceof fs?(function(u,f,p,y){if(!th(u.precondition,f))return p;const g=VE(u.fieldTransforms,y,f),T=f.data;return T.setAll(aA(u)),T.setAll(g),f.convertToFoundDocument(f.version,T).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((S=>S.field)))})(r,e,n,s):(function(u,f,p){return th(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p})(r,e,n)}function mC(r,e){let n=null;for(const s of r.fieldTransforms){const l=e.data.field(s.field),u=tA(s.transform,l||null);u!=null&&(n===null&&(n=dn.empty()),n.set(s.field,u))}return n||null}function OE(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(s,l){return s===void 0&&l===void 0||!(!s||!l)&&uo(s,l,((u,f)=>hC(u,f)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class lu extends jh{constructor(e,n,s,l=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}}class fs extends jh{constructor(e,n,s,l,u=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=l,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function aA(r){const e=new Map;return r.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const s=r.data.field(n);e.set(n,s)}})),e}function xE(r,e,n){const s=new Map;qe(r.length===n.length,32656,{Ve:n.length,de:r.length});for(let l=0;l<n.length;l++){const u=r[l],f=u.transform,p=e.data.field(u.field);s.set(u.field,uC(f,p,n[l]))}return s}function VE(r,e,n){const s=new Map;for(const l of r){const u=l.transform,f=n.data.field(l.field);s.set(l.field,lC(u,f,e))}return s}class Tp extends jh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class pC extends jh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class gC{constructor(e,n,s,l){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=l}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let l=0;l<this.mutations.length;l++){const u=this.mutations[l];u.key.isEqual(e.key)&&dC(u,e,s[l])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=ql(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=ql(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=WT();return this.mutations.forEach((l=>{const u=e.get(l.key),f=u.overlayedDocument;let p=this.applyToLocalView(f,u.mutatedFields);p=n.has(l.key)?null:p;const y=sA(f,p);y!==null&&s.set(l.key,y),f.isValidDocument()||f.convertToNoDocument(ge.min())})),s}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),xe())}isEqual(e){return this.batchId===e.batchId&&uo(this.mutations,e.mutations,((n,s)=>OE(n,s)))&&uo(this.baseMutations,e.baseMutations,((n,s)=>OE(n,s)))}}class Ap{constructor(e,n,s,l){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=l}static from(e,n,s){qe(e.mutations.length===s.length,58842,{me:e.mutations.length,fe:s.length});let l=(function(){return iC})();const u=e.mutations;for(let f=0;f<u.length;f++)l=l.insert(u[f].key,s[f].version);return new Ap(e,n,s,l)}}/**
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
 */class yC{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class _C{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var It,ke;function vC(r){switch(r){case Y.OK:return me(64938);case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return me(15467,{code:r})}}function oA(r){if(r===void 0)return fr("GRPC error has no .code"),Y.UNKNOWN;switch(r){case It.OK:return Y.OK;case It.CANCELLED:return Y.CANCELLED;case It.UNKNOWN:return Y.UNKNOWN;case It.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case It.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case It.INTERNAL:return Y.INTERNAL;case It.UNAVAILABLE:return Y.UNAVAILABLE;case It.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case It.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case It.NOT_FOUND:return Y.NOT_FOUND;case It.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case It.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case It.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case It.ABORTED:return Y.ABORTED;case It.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case It.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case It.DATA_LOSS:return Y.DATA_LOSS;default:return me(39323,{code:r})}}(ke=It||(It={}))[ke.OK=0]="OK",ke[ke.CANCELLED=1]="CANCELLED",ke[ke.UNKNOWN=2]="UNKNOWN",ke[ke.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ke[ke.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ke[ke.NOT_FOUND=5]="NOT_FOUND",ke[ke.ALREADY_EXISTS=6]="ALREADY_EXISTS",ke[ke.PERMISSION_DENIED=7]="PERMISSION_DENIED",ke[ke.UNAUTHENTICATED=16]="UNAUTHENTICATED",ke[ke.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ke[ke.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ke[ke.ABORTED=10]="ABORTED",ke[ke.OUT_OF_RANGE=11]="OUT_OF_RANGE",ke[ke.UNIMPLEMENTED=12]="UNIMPLEMENTED",ke[ke.INTERNAL=13]="INTERNAL",ke[ke.UNAVAILABLE=14]="UNAVAILABLE",ke[ke.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function EC(){return new TextEncoder}/**
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
 */const TC=new ts([4294967295,4294967295],0);function ME(r){const e=EC().encode(r),n=new AT;return n.update(e),new Uint8Array(n.digest())}function kE(r){const e=new DataView(r.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),l=e.getUint32(8,!0),u=e.getUint32(12,!0);return[new ts([n,s],0),new ts([l,u],0)]}class Sp{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new kl(`Invalid padding: ${n}`);if(s<0)throw new kl(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new kl(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new kl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=ts.fromNumber(this.ge)}ye(e,n,s){let l=e.add(n.multiply(ts.fromNumber(s)));return l.compare(TC)===1&&(l=new ts([l.getBits(0),l.getBits(1)],0)),l.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=ME(e),[s,l]=kE(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,l,u);if(!this.we(f))return!1}return!0}static create(e,n,s){const l=e%8==0?0:8-e%8,u=new Uint8Array(Math.ceil(e/8)),f=new Sp(u,l,n);return s.forEach((p=>f.insert(p))),f}insert(e){if(this.ge===0)return;const n=ME(e),[s,l]=kE(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(s,l,u);this.be(f)}}be(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class kl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Bh{constructor(e,n,s,l,u){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=l,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const l=new Map;return l.set(e,uu.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Bh(ge.min(),l,new lt(Oe),dr(),xe())}}class uu{constructor(e,n,s,l,u){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=l,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new uu(s,n,xe(),xe(),xe())}}/**
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
 */class nh{constructor(e,n,s,l){this.Se=e,this.removedTargetIds=n,this.key=s,this.De=l}}class lA{constructor(e,n){this.targetId=e,this.Ce=n}}class uA{constructor(e,n,s=Yt.EMPTY_BYTE_STRING,l=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=l}}class LE{constructor(){this.ve=0,this.Fe=PE(),this.Me=Yt.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=xe(),n=xe(),s=xe();return this.Fe.forEach(((l,u)=>{switch(u){case 0:e=e.add(l);break;case 2:n=n.add(l);break;case 1:s=s.add(l);break;default:me(38017,{changeType:u})}})),new uu(this.Me,this.xe,e,n,s)}Ke(){this.Oe=!1,this.Fe=PE()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,qe(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class AC{constructor(e){this.Ge=e,this.ze=new Map,this.je=dr(),this.He=Kc(),this.Je=Kc(),this.Ze=new lt(Oe)}Xe(e){for(const n of e.Se)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,(n=>{const s=this.nt(n);switch(e.state){case 0:this.rt(n)&&s.Le(e.resumeToken);break;case 1:s.We(),s.Ne||s.Ke(),s.Le(e.resumeToken);break;case 2:s.We(),s.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(s.Qe(),s.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),s.Le(e.resumeToken));break;default:me(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach(((s,l)=>{this.rt(l)&&n(l)}))}st(e){const n=e.targetId,s=e.Ce.count,l=this.ot(n);if(l){const u=l.target;if(Um(u))if(s===0){const f=new ue(u.path);this.et(n,f,Jt.newNoDocument(f,ge.min()))}else qe(s===1,20013,{expectedCount:s});else{const f=this._t(n);if(f!==s){const p=this.ut(e),y=p?this.ct(p,e,f):1;if(y!==0){this.it(n);const g=y===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,g)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:l=0},hashCount:u=0}=n;let f,p;try{f=ss(s).toUint8Array()}catch(y){if(y instanceof MT)return ea("Decoding the base64 bloom filter in existence filter failed ("+y.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw y}try{p=new Sp(f,l,u)}catch(y){return ea(y instanceof kl?"BloomFilter error: ":"Applying bloom filter failed: ",y),null}return p.ge===0?null:p}ct(e,n,s){return n.Ce.count===s-this.Pt(e,n.targetId)?0:2}Pt(e,n){const s=this.Ge.getRemoteKeysForTarget(n);let l=0;return s.forEach((u=>{const f=this.Ge.ht(),p=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;e.mightContain(p)||(this.et(n,u,null),l++)})),l}Tt(e){const n=new Map;this.ze.forEach(((u,f)=>{const p=this.ot(f);if(p){if(u.current&&Um(p.target)){const y=new ue(p.target.path);this.It(y).has(f)||this.Et(f,y)||this.et(f,y,Jt.newNoDocument(y,e))}u.Be&&(n.set(f,u.ke()),u.Ke())}}));let s=xe();this.Je.forEach(((u,f)=>{let p=!0;f.forEachWhile((y=>{const g=this.ot(y);return!g||g.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(s=s.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(e)));const l=new Bh(e,n,this.Ze,this.je,s);return this.je=dr(),this.He=Kc(),this.Je=Kc(),this.Ze=new lt(Oe),l}Ye(e,n){if(!this.rt(e))return;const s=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,s),this.je=this.je.insert(n.key,n),this.He=this.He.insert(n.key,this.It(n.key).add(e)),this.Je=this.Je.insert(n.key,this.Rt(n.key).add(e))}et(e,n,s){if(!this.rt(e))return;const l=this.nt(e);this.Et(e,n)?l.qe(n,1):l.Ue(n),this.Je=this.Je.insert(n,this.Rt(n).delete(e)),this.Je=this.Je.insert(n,this.Rt(n).add(e)),s&&(this.je=this.je.insert(n,s))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new LE,this.ze.set(e,n)),n}Rt(e){let n=this.Je.get(e);return n||(n=new Mt(Oe),this.Je=this.Je.insert(e,n)),n}It(e){let n=this.He.get(e);return n||(n=new Mt(Oe),this.He=this.He.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||re("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new LE),this.Ge.getRemoteKeysForTarget(e).forEach((n=>{this.et(e,n,null)}))}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function Kc(){return new lt(ue.comparator)}function PE(){return new lt(ue.comparator)}const SC={asc:"ASCENDING",desc:"DESCENDING"},bC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},wC={and:"AND",or:"OR"};class RC{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Bm(r,e){return r.useProto3Json||Mh(e)?e:{value:e}}function gh(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cA(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function IC(r,e){return gh(r,e.toTimestamp())}function Vi(r){return qe(!!r,49232),ge.fromTimestamp((function(n){const s=rs(n);return new it(s.seconds,s.nanos)})(r))}function bp(r,e){return qm(r,e).canonicalString()}function qm(r,e){const n=(function(l){return new et(["projects",l.projectId,"databases",l.database])})(r).child("documents");return e===void 0?n:n.child(e)}function hA(r){const e=et.fromString(r);return qe(gA(e),10190,{key:e.toString()}),e}function Hm(r,e){return bp(r.databaseId,e.path)}function mm(r,e){const n=hA(e);if(n.get(1)!==r.databaseId.projectId)throw new ie(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+r.databaseId.projectId);if(n.get(3)!==r.databaseId.database)throw new ie(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+r.databaseId.database);return new ue(dA(n))}function fA(r,e){return bp(r.databaseId,e)}function CC(r){const e=hA(r);return e.length===4?et.emptyPath():dA(e)}function Fm(r){return new et(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function dA(r){return qe(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function UE(r,e,n){return{name:Hm(r,e),fields:n.value.mapValue.fields}}function NC(r,e){let n;if("targetChange"in e){e.targetChange;const s=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:me(39313,{state:g})})(e.targetChange.targetChangeType||"NO_CHANGE"),l=e.targetChange.targetIds||[],u=(function(g,T){return g.useProto3Json?(qe(T===void 0||typeof T=="string",58123),Yt.fromBase64String(T||"")):(qe(T===void 0||T instanceof Buffer||T instanceof Uint8Array,16193),Yt.fromUint8Array(T||new Uint8Array))})(r,e.targetChange.resumeToken),f=e.targetChange.cause,p=f&&(function(g){const T=g.code===void 0?Y.UNKNOWN:oA(g.code);return new ie(T,g.message||"")})(f);n=new uA(s,l,u,p||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const l=mm(r,s.document.name),u=Vi(s.document.updateTime),f=s.document.createTime?Vi(s.document.createTime):ge.min(),p=new dn({mapValue:{fields:s.document.fields}}),y=Jt.newFoundDocument(l,u,f,p),g=s.targetIds||[],T=s.removedTargetIds||[];n=new nh(g,T,y.key,y)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const l=mm(r,s.document),u=s.readTime?Vi(s.readTime):ge.min(),f=Jt.newNoDocument(l,u),p=s.removedTargetIds||[];n=new nh([],p,f.key,f)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const l=mm(r,s.document),u=s.removedTargetIds||[];n=new nh([],u,l,null)}else{if(!("filter"in e))return me(11601,{Vt:e});{e.filter;const s=e.filter;s.targetId;const{count:l=0,unchangedNames:u}=s,f=new _C(l,u),p=s.targetId;n=new lA(p,f)}}return n}function DC(r,e){let n;if(e instanceof lu)n={update:UE(r,e.key,e.value)};else if(e instanceof Tp)n={delete:Hm(r,e.key)};else if(e instanceof fs)n={update:UE(r,e.key,e.data),updateMask:zC(e.fieldMask)};else{if(!(e instanceof pC))return me(16599,{dt:e.type});n={verify:Hm(r,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((s=>(function(u,f){const p=f.transform;if(p instanceof Jl)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof Zl)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Wl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof ph)return{fieldPath:f.field.canonicalString(),increment:p.Ae};throw me(20930,{transform:f.transform})})(0,s)))),e.precondition.isNone||(n.currentDocument=(function(l,u){return u.updateTime!==void 0?{updateTime:IC(l,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:me(27497)})(r,e.precondition)),n}function OC(r,e){return r&&r.length>0?(qe(e!==void 0,14353),r.map((n=>(function(l,u){let f=l.updateTime?Vi(l.updateTime):Vi(u);return f.isEqual(ge.min())&&(f=Vi(u)),new fC(f,l.transformResults||[])})(n,e)))):[]}function xC(r,e){return{documents:[fA(r,e.path)]}}function VC(r,e){const n={structuredQuery:{}},s=e.path;let l;e.collectionGroup!==null?(l=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(l=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=fA(r,l);const u=(function(g){if(g.length!==0)return pA(ai.create(g,"and"))})(e.filters);u&&(n.structuredQuery.where=u);const f=(function(g){if(g.length!==0)return g.map((T=>(function(b){return{field:to(b.field),direction:LC(b.dir)}})(T)))})(e.orderBy);f&&(n.structuredQuery.orderBy=f);const p=Bm(r,e.limit);return p!==null&&(n.structuredQuery.limit=p),e.startAt&&(n.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{ft:n,parent:l}}function MC(r){let e=CC(r.parent);const n=r.structuredQuery,s=n.from?n.from.length:0;let l=null;if(s>0){qe(s===1,65062);const T=n.from[0];T.allDescendants?l=T.collectionId:e=e.child(T.collectionId)}let u=[];n.where&&(u=(function(S){const b=mA(S);return b instanceof ai&&FT(b)?b.getFilters():[b]})(n.where));let f=[];n.orderBy&&(f=(function(S){return S.map((b=>(function(Z){return new $l(no(Z.field),(function(W){switch(W){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Z.direction))})(b)))})(n.orderBy));let p=null;n.limit&&(p=(function(S){let b;return b=typeof S=="object"?S.value:S,Mh(b)?null:b})(n.limit));let y=null;n.startAt&&(y=(function(S){const b=!!S.before,q=S.values||[];return new mh(q,b)})(n.startAt));let g=null;return n.endAt&&(g=(function(S){const b=!S.before,q=S.values||[];return new mh(q,b)})(n.endAt)),$2(e,l,f,u,p,"F",y,g)}function kC(r,e){const n=(function(l){switch(l){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return me(28987,{purpose:l})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function mA(r){return r.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=no(n.unaryFilter.field);return Ct.create(s,"==",{doubleValue:NaN});case"IS_NULL":const l=no(n.unaryFilter.field);return Ct.create(l,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=no(n.unaryFilter.field);return Ct.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=no(n.unaryFilter.field);return Ct.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return me(61313);default:return me(60726)}})(r):r.fieldFilter!==void 0?(function(n){return Ct.create(no(n.fieldFilter.field),(function(l){switch(l){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return me(58110);default:return me(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(n){return ai.create(n.compositeFilter.filters.map((s=>mA(s))),(function(l){switch(l){case"AND":return"and";case"OR":return"or";default:return me(1026)}})(n.compositeFilter.op))})(r):me(30097,{filter:r})}function LC(r){return SC[r]}function PC(r){return bC[r]}function UC(r){return wC[r]}function to(r){return{fieldPath:r.canonicalString()}}function no(r){return Kt.fromServerFormat(r.fieldPath)}function pA(r){return r instanceof Ct?(function(n){if(n.op==="=="){if(wE(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NAN"}};if(bE(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(wE(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NOT_NAN"}};if(bE(n.value))return{unaryFilter:{field:to(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:to(n.field),op:PC(n.op),value:n.value}}})(r):r instanceof ai?(function(n){const s=n.getFilters().map((l=>pA(l)));return s.length===1?s[0]:{compositeFilter:{op:UC(n.op),filters:s}}})(r):me(54877,{filter:r})}function zC(r){const e=[];return r.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function gA(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}function yA(r){return!!r&&typeof r._toProto=="function"&&r._protoValueType==="ProtoValue"}/**
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
 */class Wr{constructor(e,n,s,l,u=ge.min(),f=ge.min(),p=Yt.EMPTY_BYTE_STRING,y=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=l,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=y}withSequenceNumber(e){return new Wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class jC{constructor(e){this.yt=e}}function BC(r){const e=MC({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?jm(e,e.limit,"L"):e}/**
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
 */class qC{constructor(){this.Sn=new HC}addToCollectionParentIndex(e,n){return this.Sn.add(n),$.resolve()}getCollectionParents(e,n){return $.resolve(this.Sn.getEntries(n))}addFieldIndex(e,n){return $.resolve()}deleteFieldIndex(e,n){return $.resolve()}deleteAllFieldIndexes(e){return $.resolve()}createTargetIndexes(e,n){return $.resolve()}getDocumentsMatchingTarget(e,n){return $.resolve(null)}getIndexType(e,n){return $.resolve(0)}getFieldIndexes(e,n){return $.resolve([])}getNextCollectionGroupToUpdate(e){return $.resolve(null)}getMinOffset(e,n){return $.resolve(is.min())}getMinOffsetFromCollectionGroup(e,n){return $.resolve(is.min())}updateCollectionGroup(e,n,s){return $.resolve()}updateIndexEntries(e,n){return $.resolve()}}class HC{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),l=this.index[n]||new Mt(et.comparator),u=!l.has(s);return this.index[n]=l.add(s),u}has(e){const n=e.lastSegment(),s=e.popLast(),l=this.index[n];return l&&l.has(s)}getEntries(e){return(this.index[e]||new Mt(et.comparator)).toArray()}}/**
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
 */const zE={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},_A=41943040;class fn{static withCacheSize(e){return new fn(e,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */fn.DEFAULT_COLLECTION_PERCENTILE=10,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,fn.DEFAULT=new fn(_A,fn.DEFAULT_COLLECTION_PERCENTILE,fn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),fn.DISABLED=new fn(-1,0,0);/**
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
 */class fo{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new fo(0)}static ar(){return new fo(-1)}}/**
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
 */const jE="LruGarbageCollector",FC=1048576;function BE([r,e],[n,s]){const l=Oe(r,n);return l===0?Oe(e,s):l}class GC{constructor(e){this.Pr=e,this.buffer=new Mt(BE),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();BE(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class KC{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){re(jE,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){To(n)?re(jE,"Ignoring IndexedDB error during garbage collection: ",n):await Eo(n)}await this.Ar(3e5)}))}}class YC{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next((s=>Math.floor(n/100*s)))}nthSequenceNumber(e,n){if(n===0)return $.resolve(Vh.ce);const s=new GC(n);return this.Vr.forEachTarget(e,(l=>s.Er(l.sequenceNumber))).next((()=>this.Vr.mr(e,(l=>s.Er(l))))).next((()=>s.maxValue))}removeTargets(e,n,s){return this.Vr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(zE)):this.getCacheSize(e).next((s=>s<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zE):this.gr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let s,l,u,f,p,y,g;const T=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((S=>(S>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${S}`),l=this.params.maximumSequenceNumbersToCollect):l=S,f=Date.now(),this.nthSequenceNumber(e,l)))).next((S=>(s=S,p=Date.now(),this.removeTargets(e,s,n)))).next((S=>(u=S,y=Date.now(),this.removeOrphanedDocuments(e,s)))).next((S=>(g=Date.now(),Wa()<=De.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-T}ms
	Determined least recently used ${l} in `+(p-f)+`ms
	Removed ${u} targets in `+(y-p)+`ms
	Removed ${S} documents in `+(g-y)+`ms
Total Duration: ${g-T}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:l,targetsRemoved:u,documentsRemoved:S}))))}}function QC(r,e){return new YC(r,e)}/**
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
 */class XC{constructor(){this.changes=new oa((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Jt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?$.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $C{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class JC{constructor(e,n,s,l){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=l}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next((l=>(s=l,this.remoteDocumentCache.getEntry(e,n)))).next((l=>(s!==null&&ql(s.mutation,l,bn.empty(),it.now()),l)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.getLocalViewOfDocuments(e,s,xe()).next((()=>s))))}getLocalViewOfDocuments(e,n,s=xe()){const l=Ks();return this.populateOverlays(e,l,n).next((()=>this.computeViews(e,n,l,s).next((u=>{let f=Ml();return u.forEach(((p,y)=>{f=f.insert(p,y.overlayedDocument)})),f}))))}getOverlayedDocuments(e,n){const s=Ks();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,xe())))}populateOverlays(e,n,s){const l=[];return s.forEach((u=>{n.has(u)||l.push(u)})),this.documentOverlayCache.getOverlays(e,l).next((u=>{u.forEach(((f,p)=>{n.set(f,p)}))}))}computeViews(e,n,s,l){let u=dr();const f=Bl(),p=(function(){return Bl()})();return n.forEach(((y,g)=>{const T=s.get(g.key);l.has(g.key)&&(T===void 0||T.mutation instanceof fs)?u=u.insert(g.key,g):T!==void 0?(f.set(g.key,T.mutation.getFieldMask()),ql(T.mutation,g,T.mutation.getFieldMask(),it.now())):f.set(g.key,bn.empty())})),this.recalculateAndSaveOverlays(e,u).next((y=>(y.forEach(((g,T)=>f.set(g,T))),n.forEach(((g,T)=>p.set(g,new $C(T,f.get(g)??null)))),p)))}recalculateAndSaveOverlays(e,n){const s=Bl();let l=new lt(((f,p)=>f-p)),u=xe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((f=>{for(const p of f)p.keys().forEach((y=>{const g=n.get(y);if(g===null)return;let T=s.get(y)||bn.empty();T=p.applyToLocalView(g,T),s.set(y,T);const S=(l.get(p.batchId)||xe()).add(y);l=l.insert(p.batchId,S)}))})).next((()=>{const f=[],p=l.getReverseIterator();for(;p.hasNext();){const y=p.getNext(),g=y.key,T=y.value,S=WT();T.forEach((b=>{if(!u.has(b)){const q=sA(n.get(b),s.get(b));q!==null&&S.set(b,q),u=u.add(b)}})),f.push(this.documentOverlayCache.saveOverlays(e,g,S))}return $.waitFor(f)})).next((()=>s))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((s=>this.recalculateAndSaveOverlays(e,s)))}getDocumentsMatchingQuery(e,n,s,l){return J2(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):QT(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,l):this.getDocumentsMatchingCollectionQuery(e,n,s,l)}getNextDocuments(e,n,s,l){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,l).next((u=>{const f=l-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,l-u.size):$.resolve(Ks());let p=Kl,y=u;return f.next((g=>$.forEach(g,((T,S)=>(p<S.largestBatchId&&(p=S.largestBatchId),u.get(T)?$.resolve():this.remoteDocumentCache.getEntry(e,T).next((b=>{y=y.insert(T,b)}))))).next((()=>this.populateOverlays(e,g,u))).next((()=>this.computeViews(e,y,g,xe()))).next((T=>({batchId:p,changes:ZT(T)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new ue(n)).next((s=>{let l=Ml();return s.isFoundDocument()&&(l=l.insert(s.key,s)),l}))}getDocumentsMatchingCollectionGroupQuery(e,n,s,l){const u=n.collectionGroup;let f=Ml();return this.indexManager.getCollectionParents(e,u).next((p=>$.forEach(p,(y=>{const g=(function(S,b){return new Ao(b,null,S.explicitOrderBy.slice(),S.filters.slice(),S.limit,S.limitType,S.startAt,S.endAt)})(n,y.child(u));return this.getDocumentsMatchingCollectionQuery(e,g,s,l).next((T=>{T.forEach(((S,b)=>{f=f.insert(S,b)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(e,n,s,l){let u;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,u,l)))).next((f=>{u.forEach(((y,g)=>{const T=g.getKey();f.get(T)===null&&(f=f.insert(T,Jt.newInvalidDocument(T)))}));let p=Ml();return f.forEach(((y,g)=>{const T=u.get(y);T!==void 0&&ql(T.mutation,g,bn.empty(),it.now()),Uh(n,g)&&(p=p.insert(y,g))})),p}))}}/**
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
 */class ZC{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return $.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,(function(l){return{id:l.id,version:l.version,createTime:Vi(l.createTime)}})(n)),$.resolve()}getNamedQuery(e,n){return $.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,(function(l){return{name:l.name,query:BC(l.bundledQuery),readTime:Vi(l.readTime)}})(n)),$.resolve()}}/**
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
 */class WC{constructor(){this.overlays=new lt(ue.comparator),this.Lr=new Map}getOverlay(e,n){return $.resolve(this.overlays.get(n))}getOverlays(e,n){const s=Ks();return $.forEach(n,(l=>this.getOverlay(e,l).next((u=>{u!==null&&s.set(l,u)})))).next((()=>s))}saveOverlays(e,n,s){return s.forEach(((l,u)=>{this.bt(e,n,u)})),$.resolve()}removeOverlaysForBatchId(e,n,s){const l=this.Lr.get(s);return l!==void 0&&(l.forEach((u=>this.overlays=this.overlays.remove(u))),this.Lr.delete(s)),$.resolve()}getOverlaysForCollection(e,n,s){const l=Ks(),u=n.length+1,f=new ue(n.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const y=p.getNext().value,g=y.getKey();if(!n.isPrefixOf(g.path))break;g.path.length===u&&y.largestBatchId>s&&l.set(y.getKey(),y)}return $.resolve(l)}getOverlaysForCollectionGroup(e,n,s,l){let u=new lt(((g,T)=>g-T));const f=this.overlays.getIterator();for(;f.hasNext();){const g=f.getNext().value;if(g.getKey().getCollectionGroup()===n&&g.largestBatchId>s){let T=u.get(g.largestBatchId);T===null&&(T=Ks(),u=u.insert(g.largestBatchId,T)),T.set(g.getKey(),g)}}const p=Ks(),y=u.getIterator();for(;y.hasNext()&&(y.getNext().value.forEach(((g,T)=>p.set(g,T))),!(p.size()>=l)););return $.resolve(p)}bt(e,n,s){const l=this.overlays.get(s.key);if(l!==null){const f=this.Lr.get(l.largestBatchId).delete(s.key);this.Lr.set(l.largestBatchId,f)}this.overlays=this.overlays.insert(s.key,new yC(n,s));let u=this.Lr.get(n);u===void 0&&(u=xe(),this.Lr.set(n,u)),this.Lr.set(n,u.add(s.key))}}/**
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
 */class eN{constructor(){this.sessionToken=Yt.EMPTY_BYTE_STRING}getSessionToken(e){return $.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,$.resolve()}}/**
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
 */class wp{constructor(){this.kr=new Mt(Ut.Kr),this.qr=new Mt(Ut.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const s=new Ut(e,n);this.kr=this.kr.add(s),this.qr=this.qr.add(s)}$r(e,n){e.forEach((s=>this.addReference(s,n)))}removeReference(e,n){this.Wr(new Ut(e,n))}Qr(e,n){e.forEach((s=>this.removeReference(s,n)))}Gr(e){const n=new ue(new et([])),s=new Ut(n,e),l=new Ut(n,e+1),u=[];return this.qr.forEachInRange([s,l],(f=>{this.Wr(f),u.push(f.key)})),u}zr(){this.kr.forEach((e=>this.Wr(e)))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new ue(new et([])),s=new Ut(n,e),l=new Ut(n,e+1);let u=xe();return this.qr.forEachInRange([s,l],(f=>{u=u.add(f.key)})),u}containsKey(e){const n=new Ut(e,0),s=this.kr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Ut{constructor(e,n){this.key=e,this.Hr=n}static Kr(e,n){return ue.comparator(e.key,n.key)||Oe(e.Hr,n.Hr)}static Ur(e,n){return Oe(e.Hr,n.Hr)||ue.comparator(e.key,n.key)}}/**
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
 */class tN{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Jr=new Mt(Ut.Kr)}checkEmpty(e){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,l){const u=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new gC(u,n,s,l);this.mutationQueue.push(f);for(const p of l)this.Jr=this.Jr.add(new Ut(p.key,u)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return $.resolve(f)}lookupMutationBatch(e,n){return $.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,l=this.Xr(s),u=l<0?0:l;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?pp:this.Yn-1)}getAllMutationBatches(e){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Ut(n,0),l=new Ut(n,Number.POSITIVE_INFINITY),u=[];return this.Jr.forEachInRange([s,l],(f=>{const p=this.Zr(f.Hr);u.push(p)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Mt(Oe);return n.forEach((l=>{const u=new Ut(l,0),f=new Ut(l,Number.POSITIVE_INFINITY);this.Jr.forEachInRange([u,f],(p=>{s=s.add(p.Hr)}))})),$.resolve(this.Yr(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,l=s.length+1;let u=s;ue.isDocumentKey(u)||(u=u.child(""));const f=new Ut(new ue(u),0);let p=new Mt(Oe);return this.Jr.forEachWhile((y=>{const g=y.key.path;return!!s.isPrefixOf(g)&&(g.length===l&&(p=p.add(y.Hr)),!0)}),f),$.resolve(this.Yr(p))}Yr(e){const n=[];return e.forEach((s=>{const l=this.Zr(s);l!==null&&n.push(l)})),n}removeMutationBatch(e,n){qe(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let s=this.Jr;return $.forEach(n.mutations,(l=>{const u=new Ut(l.key,n.batchId);return s=s.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,l.key)})).next((()=>{this.Jr=s}))}nr(e){}containsKey(e,n){const s=new Ut(n,0),l=this.Jr.firstAfterOrEqual(s);return $.resolve(n.isEqual(l&&l.key))}performConsistencyCheck(e){return this.mutationQueue.length,$.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class nN{constructor(e){this.ti=e,this.docs=(function(){return new lt(ue.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,l=this.docs.get(s),u=l?l.size:0,f=this.ti(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return $.resolve(s?s.document.mutableCopy():Jt.newInvalidDocument(n))}getEntries(e,n){let s=dr();return n.forEach((l=>{const u=this.docs.get(l);s=s.insert(l,u?u.document.mutableCopy():Jt.newInvalidDocument(l))})),$.resolve(s)}getDocumentsMatchingQuery(e,n,s,l){let u=dr();const f=n.path,p=new ue(f.child("__id-9223372036854775808__")),y=this.docs.getIteratorFrom(p);for(;y.hasNext();){const{key:g,value:{document:T}}=y.getNext();if(!f.isPrefixOf(g.path))break;g.path.length>f.length+1||I2(R2(T),s)<=0||(l.has(T.key)||Uh(n,T))&&(u=u.insert(T.key,T.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(e,n,s,l){me(9500)}ni(e,n){return $.forEach(this.docs,(s=>n(s)))}newChangeBuffer(e){return new iN(this)}getSize(e){return $.resolve(this.size)}}class iN extends XC{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach(((s,l)=>{l.isValidDocument()?n.push(this.Mr.addEntry(e,l)):this.Mr.removeEntry(s)})),$.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class rN{constructor(e){this.persistence=e,this.ri=new oa((n=>_p(n)),vp),this.lastRemoteSnapshotVersion=ge.min(),this.highestTargetId=0,this.ii=0,this.si=new wp,this.targetCount=0,this.oi=fo._r()}forEachTarget(e,n){return this.ri.forEach(((s,l)=>n(l))),$.resolve()}getLastRemoteSnapshotVersion(e){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return $.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.ii&&(this.ii=n),$.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new fo(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,$.resolve()}updateTargetData(e,n){return this.lr(n),$.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(e,n,s){let l=0;const u=[];return this.ri.forEach(((f,p)=>{p.sequenceNumber<=n&&s.get(p.targetId)===null&&(this.ri.delete(f),u.push(this.removeMatchingKeysForTargetId(e,p.targetId)),l++)})),$.waitFor(u).next((()=>l))}getTargetCount(e){return $.resolve(this.targetCount)}getTargetData(e,n){const s=this.ri.get(n)||null;return $.resolve(s)}addMatchingKeys(e,n,s){return this.si.$r(n,s),$.resolve()}removeMatchingKeys(e,n,s){this.si.Qr(n,s);const l=this.persistence.referenceDelegate,u=[];return l&&n.forEach((f=>{u.push(l.markPotentiallyOrphaned(e,f))})),$.waitFor(u)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),$.resolve()}getMatchingKeysForTargetId(e,n){const s=this.si.jr(n);return $.resolve(s)}containsKey(e,n){return $.resolve(this.si.containsKey(n))}}/**
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
 */class vA{constructor(e,n){this._i={},this.overlays={},this.ai=new Vh(0),this.ui=!1,this.ui=!0,this.ci=new eN,this.referenceDelegate=e(this),this.li=new rN(this),this.indexManager=new qC,this.remoteDocumentCache=(function(l){return new nN(l)})((s=>this.referenceDelegate.hi(s))),this.serializer=new jC(n),this.Pi=new ZC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new WC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this._i[e.toKey()];return s||(s=new tN(n,this.referenceDelegate),this._i[e.toKey()]=s),s}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,s){re("MemoryPersistence","Starting transaction:",e);const l=new sN(this.ai.next());return this.referenceDelegate.Ti(),s(l).next((u=>this.referenceDelegate.Ii(l).next((()=>u)))).toPromise().then((u=>(l.raiseOnCommittedEvent(),u)))}Ei(e,n){return $.or(Object.values(this._i).map((s=>()=>s.containsKey(e,n))))}}class sN extends N2{constructor(e){super(),this.currentSequenceNumber=e}}class Rp{constructor(e){this.persistence=e,this.Ri=new wp,this.Ai=null}static Vi(e){return new Rp(e)}get di(){if(this.Ai)return this.Ai;throw me(60996)}addReference(e,n,s){return this.Ri.addReference(s,n),this.di.delete(s.toString()),$.resolve()}removeReference(e,n,s){return this.Ri.removeReference(s,n),this.di.add(s.toString()),$.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),$.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach((l=>this.di.add(l.toString())));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next((l=>{l.forEach((u=>this.di.add(u.toString())))})).next((()=>s.removeTargetData(e,n)))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.di,(s=>{const l=ue.fromPath(s);return this.mi(e,l).next((u=>{u||n.removeEntry(l,ge.min())}))})).next((()=>(this.Ai=null,n.apply(e))))}updateLimboDocument(e,n){return this.mi(e,n).next((s=>{s?this.di.delete(n.toString()):this.di.add(n.toString())}))}hi(e){return 0}mi(e,n){return $.or([()=>$.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class yh{constructor(e,n){this.persistence=e,this.fi=new oa((s=>x2(s.path)),((s,l)=>s.isEqual(l))),this.garbageCollector=QC(this,n)}static Vi(e,n){return new yh(e,n)}Ti(){}Ii(e){return $.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next((s=>n.next((l=>s+l))))}pr(e){let n=0;return this.mr(e,(s=>{n++})).next((()=>n))}mr(e,n){return $.forEach(this.fi,((s,l)=>this.wr(e,s,l).next((u=>u?$.resolve():n(l)))))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const l=this.persistence.getRemoteDocumentCache(),u=l.newChangeBuffer();return l.ni(e,(f=>this.wr(e,f,n).next((p=>{p||(s++,u.removeEntry(f,ge.min()))})))).next((()=>u.apply(e))).next((()=>s))}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),$.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.fi.set(s,e.currentSequenceNumber),$.resolve()}removeReference(e,n,s){return this.fi.set(s,e.currentSequenceNumber),$.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),$.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Wc(e.data.value)),n}wr(e,n,s){return $.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const l=this.fi.get(n);return $.resolve(l!==void 0&&l>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Ip{constructor(e,n,s,l){this.targetId=e,this.fromCache=n,this.Ts=s,this.Is=l}static Es(e,n){let s=xe(),l=xe();for(const u of n.docChanges)switch(u.type){case 0:s=s.add(u.doc.key);break;case 1:l=l.add(u.doc.key)}return new Ip(e,n.fromCache,s,l)}}/**
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
 */class aN{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class oN{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=(function(){return U1()?8:D2(Zt())>0?6:4})()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,s,l){const u={result:null};return this.gs(e,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ps(e,n,l,s).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new aN;return this.ys(e,n,f).next((p=>{if(u.result=p,this.As)return this.ws(e,n,f,p.size)}))})).next((()=>u.result))}ws(e,n,s,l){return s.documentReadCount<this.Vs?(Wa()<=De.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",eo(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),$.resolve()):(Wa()<=De.DEBUG&&re("QueryEngine","Query:",eo(n),"scans",s.documentReadCount,"local documents and returns",l,"documents as results."),s.documentReadCount>this.ds*l?(Wa()<=De.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",eo(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,xi(n))):$.resolve())}gs(e,n){if(NE(n))return $.resolve(null);let s=xi(n);return this.indexManager.getIndexType(e,s).next((l=>l===0?null:(n.limit!==null&&l===1&&(n=jm(n,null,"F"),s=xi(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next((u=>{const f=xe(...u);return this.fs.getDocuments(e,f).next((p=>this.indexManager.getMinOffset(e,s).next((y=>{const g=this.bs(n,p);return this.Ss(n,g,f,y.readTime)?this.gs(e,jm(n,null,"F")):this.Ds(e,g,n,y)}))))})))))}ps(e,n,s,l){return NE(n)||l.isEqual(ge.min())?$.resolve(null):this.fs.getDocuments(e,s).next((u=>{const f=this.bs(n,u);return this.Ss(n,f,s,l)?$.resolve(null):(Wa()<=De.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),eo(n)),this.Ds(e,f,n,w2(l,Kl)).next((p=>p)))}))}bs(e,n){let s=new Mt($T(e));return n.forEach(((l,u)=>{Uh(e,u)&&(s=s.add(u))})),s}Ss(e,n,s,l){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const u=e.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(l)>0)}ys(e,n,s){return Wa()<=De.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",eo(n)),this.fs.getDocumentsMatchingQuery(e,n,is.min(),s)}Ds(e,n,s,l){return this.fs.getDocumentsMatchingQuery(e,s,l).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
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
 */const Cp="LocalStore",lN=3e8;class uN{constructor(e,n,s,l){this.persistence=e,this.Cs=n,this.serializer=l,this.vs=new lt(Oe),this.Fs=new oa((u=>_p(u)),vp),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(s)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new JC(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.vs)))}}function cN(r,e,n,s){return new uN(r,e,n,s)}async function EA(r,e){const n=_e(r);return await n.persistence.runTransaction("Handle user change","readonly",(s=>{let l;return n.mutationQueue.getAllMutationBatches(s).next((u=>(l=u,n.Os(e),n.mutationQueue.getAllMutationBatches(s)))).next((u=>{const f=[],p=[];let y=xe();for(const g of l){f.push(g.batchId);for(const T of g.mutations)y=y.add(T.key)}for(const g of u){p.push(g.batchId);for(const T of g.mutations)y=y.add(T.key)}return n.localDocuments.getDocuments(s,y).next((g=>({Ns:g,removedBatchIds:f,addedBatchIds:p})))}))}))}function hN(r,e){const n=_e(r);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(s=>{const l=e.batch.keys(),u=n.xs.newChangeBuffer({trackRemovals:!0});return(function(p,y,g,T){const S=g.batch,b=S.keys();let q=$.resolve();return b.forEach((Z=>{q=q.next((()=>T.getEntry(y,Z))).next((J=>{const W=g.docVersions.get(Z);qe(W!==null,48541),J.version.compareTo(W)<0&&(S.applyToRemoteDocument(J,g),J.isValidDocument()&&(J.setReadTime(g.commitVersion),T.addEntry(J)))}))})),q.next((()=>p.mutationQueue.removeMutationBatch(y,S)))})(n,s,e,u).next((()=>u.apply(s))).next((()=>n.mutationQueue.performConsistencyCheck(s))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(s,l,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,(function(p){let y=xe();for(let g=0;g<p.mutationResults.length;++g)p.mutationResults[g].transformResults.length>0&&(y=y.add(p.batch.mutations[g].key));return y})(e)))).next((()=>n.localDocuments.getDocuments(s,l)))}))}function TA(r){const e=_e(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.li.getLastRemoteSnapshotVersion(n)))}function fN(r,e){const n=_e(r),s=e.snapshotVersion;let l=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.xs.newChangeBuffer({trackRemovals:!0});l=n.vs;const p=[];e.targetChanges.forEach(((T,S)=>{const b=l.get(S);if(!b)return;p.push(n.li.removeMatchingKeys(u,T.removedDocuments,S).next((()=>n.li.addMatchingKeys(u,T.addedDocuments,S))));let q=b.withSequenceNumber(u.currentSequenceNumber);e.targetMismatches.get(S)!==null?q=q.withResumeToken(Yt.EMPTY_BYTE_STRING,ge.min()).withLastLimboFreeSnapshotVersion(ge.min()):T.resumeToken.approximateByteSize()>0&&(q=q.withResumeToken(T.resumeToken,s)),l=l.insert(S,q),(function(J,W,he){return J.resumeToken.approximateByteSize()===0||W.snapshotVersion.toMicroseconds()-J.snapshotVersion.toMicroseconds()>=lN?!0:he.addedDocuments.size+he.modifiedDocuments.size+he.removedDocuments.size>0})(b,q,T)&&p.push(n.li.updateTargetData(u,q))}));let y=dr(),g=xe();if(e.documentUpdates.forEach((T=>{e.resolvedLimboDocuments.has(T)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(u,T))})),p.push(dN(u,f,e.documentUpdates).next((T=>{y=T.Bs,g=T.Ls}))),!s.isEqual(ge.min())){const T=n.li.getLastRemoteSnapshotVersion(u).next((S=>n.li.setTargetsMetadata(u,u.currentSequenceNumber,s)));p.push(T)}return $.waitFor(p).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,y,g))).next((()=>y))})).then((u=>(n.vs=l,u)))}function dN(r,e,n){let s=xe(),l=xe();return n.forEach((u=>s=s.add(u))),e.getEntries(r,s).next((u=>{let f=dr();return n.forEach(((p,y)=>{const g=u.get(p);y.isFoundDocument()!==g.isFoundDocument()&&(l=l.add(p)),y.isNoDocument()&&y.version.isEqual(ge.min())?(e.removeEntry(p,y.readTime),f=f.insert(p,y)):!g.isValidDocument()||y.version.compareTo(g.version)>0||y.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(y),f=f.insert(p,y)):re(Cp,"Ignoring outdated watch update for ",p,". Current version:",g.version," Watch version:",y.version)})),{Bs:f,Ls:l}}))}function mN(r,e){const n=_e(r);return n.persistence.runTransaction("Get next mutation batch","readonly",(s=>(e===void 0&&(e=pp),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e))))}function pN(r,e){const n=_e(r);return n.persistence.runTransaction("Allocate target","readwrite",(s=>{let l;return n.li.getTargetData(s,e).next((u=>u?(l=u,$.resolve(l)):n.li.allocateTargetId(s).next((f=>(l=new Wr(e,f,"TargetPurposeListen",s.currentSequenceNumber),n.li.addTargetData(s,l).next((()=>l)))))))})).then((s=>{const l=n.vs.get(s.targetId);return(l===null||s.snapshotVersion.compareTo(l.snapshotVersion)>0)&&(n.vs=n.vs.insert(s.targetId,s),n.Fs.set(e,s.targetId)),s}))}async function Gm(r,e,n){const s=_e(r),l=s.vs.get(e),u=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",u,(f=>s.persistence.referenceDelegate.removeTarget(f,l)))}catch(f){if(!To(f))throw f;re(Cp,`Failed to update sequence numbers for target ${e}: ${f}`)}s.vs=s.vs.remove(e),s.Fs.delete(l.target)}function qE(r,e,n){const s=_e(r);let l=ge.min(),u=xe();return s.persistence.runTransaction("Execute query","readwrite",(f=>(function(y,g,T){const S=_e(y),b=S.Fs.get(T);return b!==void 0?$.resolve(S.vs.get(b)):S.li.getTargetData(g,T)})(s,f,xi(e)).next((p=>{if(p)return l=p.lastLimboFreeSnapshotVersion,s.li.getMatchingKeysForTargetId(f,p.targetId).next((y=>{u=y}))})).next((()=>s.Cs.getDocumentsMatchingQuery(f,e,n?l:ge.min(),n?u:xe()))).next((p=>(gN(s,eC(e),p),{documents:p,ks:u})))))}function gN(r,e,n){let s=r.Ms.get(e)||ge.min();n.forEach(((l,u)=>{u.readTime.compareTo(s)>0&&(s=u.readTime)})),r.Ms.set(e,s)}class HE{constructor(){this.activeTargetIds=aC()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class yN{constructor(){this.vo=new HE,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,s){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new HE,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class _N{Mo(e){}shutdown(){}}/**
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
 */const FE="ConnectivityMonitor";class GE{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){re(FE,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){re(FE,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Yc=null;function Km(){return Yc===null?Yc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Yc++,"0x"+Yc.toString(16)}/**
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
 */const pm="RestConnection",vN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class EN{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${s}/databases/${l}`,this.$o=this.databaseId.database===Mm?`project_id=${s}`:`project_id=${s}&database_id=${l}`}Wo(e,n,s,l,u){const f=Km(),p=this.Qo(e,n.toUriEncodedString());re(pm,`Sending RPC '${e}' ${f}:`,p,s);const y={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(y,l,u);const{host:g}=new URL(p),T=po(g);return this.zo(e,p,y,s,T).then((S=>(re(pm,`Received RPC '${e}' ${f}: `,S),S)),(S=>{throw ea(pm,`RPC '${e}' ${f} failed with error: `,S,"url: ",p,"request:",s),S}))}jo(e,n,s,l,u,f){return this.Wo(e,n,s,l,u)}Go(e,n,s){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+vo})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((l,u)=>e[u]=l)),s&&s.headers.forEach(((l,u)=>e[u]=l))}Qo(e,n){const s=vN[e];let l=`${this.qo}/v1/${n}:${s}`;return this.databaseInfo.apiKey&&(l=`${l}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),l}terminate(){}}/**
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
 */class TN{constructor(e){this.Ho=e.Ho,this.Jo=e.Jo}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Jo()}send(e){this.Ho(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Xt="WebChannelConnection",Dl=(r,e,n)=>{r.listen(e,(s=>{try{n(s)}catch(l){setTimeout((()=>{throw l}),0)}}))};class oo extends EN{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!oo.c_){const e=RT();Dl(e,wT.STAT_EVENT,(n=>{n.stat===xm.PROXY?re(Xt,"STAT_EVENT: detected buffering proxy"):n.stat===xm.NOPROXY&&re(Xt,"STAT_EVENT: detected no buffering proxy")})),oo.c_=!0}}zo(e,n,s,l,u){const f=Km();return new Promise(((p,y)=>{const g=new ST;g.setWithCredentials(!0),g.listenOnce(bT.COMPLETE,(()=>{try{switch(g.getLastErrorCode()){case Zc.NO_ERROR:const S=g.getResponseJson();re(Xt,`XHR for RPC '${e}' ${f} received:`,JSON.stringify(S)),p(S);break;case Zc.TIMEOUT:re(Xt,`RPC '${e}' ${f} timed out`),y(new ie(Y.DEADLINE_EXCEEDED,"Request time out"));break;case Zc.HTTP_ERROR:const b=g.getStatus();if(re(Xt,`RPC '${e}' ${f} failed with status:`,b,"response text:",g.getResponseText()),b>0){let q=g.getResponseJson();Array.isArray(q)&&(q=q[0]);const Z=q==null?void 0:q.error;if(Z&&Z.status&&Z.message){const J=(function(he){const ve=he.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(ve)>=0?ve:Y.UNKNOWN})(Z.status);y(new ie(J,Z.message))}else y(new ie(Y.UNKNOWN,"Server responded with status "+g.getStatus()))}else y(new ie(Y.UNAVAILABLE,"Connection failed."));break;default:me(9055,{l_:e,streamId:f,h_:g.getLastErrorCode(),P_:g.getLastError()})}}finally{re(Xt,`RPC '${e}' ${f} completed.`)}}));const T=JSON.stringify(l);re(Xt,`RPC '${e}' ${f} sending request:`,l),g.send(n,"POST",T,s,15)}))}T_(e,n,s){const l=Km(),u=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],f=this.createWebChannelTransport(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},y=this.longPollingOptions.timeoutSeconds;y!==void 0&&(p.longPollingTimeout=Math.round(1e3*y)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Go(p.initMessageHeaders,n,s),p.encodeInitMessageHeaders=!0;const g=u.join("");re(Xt,`Creating RPC '${e}' stream ${l}: ${g}`,p);const T=f.createWebChannel(g,p);this.I_(T);let S=!1,b=!1;const q=new TN({Ho:Z=>{b?re(Xt,`Not sending because RPC '${e}' stream ${l} is closed:`,Z):(S||(re(Xt,`Opening RPC '${e}' stream ${l} transport.`),T.open(),S=!0),re(Xt,`RPC '${e}' stream ${l} sending:`,Z),T.send(Z))},Jo:()=>T.close()});return Dl(T,Vl.EventType.OPEN,(()=>{b||(re(Xt,`RPC '${e}' stream ${l} transport opened.`),q.i_())})),Dl(T,Vl.EventType.CLOSE,(()=>{b||(b=!0,re(Xt,`RPC '${e}' stream ${l} transport closed`),q.o_(),this.E_(T))})),Dl(T,Vl.EventType.ERROR,(Z=>{b||(b=!0,ea(Xt,`RPC '${e}' stream ${l} transport errored. Name:`,Z.name,"Message:",Z.message),q.o_(new ie(Y.UNAVAILABLE,"The operation could not be completed")))})),Dl(T,Vl.EventType.MESSAGE,(Z=>{var J;if(!b){const W=Z.data[0];qe(!!W,16349);const he=W,ve=(he==null?void 0:he.error)||((J=he[0])==null?void 0:J.error);if(ve){re(Xt,`RPC '${e}' stream ${l} received error:`,ve);const Ee=ve.status;let Je=(function(N){const w=It[N];if(w!==void 0)return oA(w)})(Ee),Ze=ve.message;Ee==="NOT_FOUND"&&Ze.includes("database")&&Ze.includes("does not exist")&&Ze.includes(this.databaseId.database)&&ea(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),Je===void 0&&(Je=Y.INTERNAL,Ze="Unknown error status: "+Ee+" with message "+ve.message),b=!0,q.o_(new ie(Je,Ze)),T.close()}else re(Xt,`RPC '${e}' stream ${l} received:`,W),q.__(W)}})),oo.u_(),setTimeout((()=>{q.s_()}),0),q}terminate(){this.a_.forEach((e=>e.close())),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter((n=>n===e))}Go(e,n,s){super.Go(e,n,s),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return IT()}}/**
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
 */function AN(r){return new oo(r)}function gm(){return typeof document<"u"?document:null}/**
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
 */function qh(r){return new RC(r,!0)}/**
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
 */oo.c_=!1;class AA{constructor(e,n,s=1e3,l=1.5,u=6e4){this.Ci=e,this.timerId=n,this.R_=s,this.A_=l,this.V_=u,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),l=Math.max(0,n-s);l>0&&re("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,l,(()=>(this.f_=Date.now(),e()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const KE="PersistentStream";class SA{constructor(e,n,s,l,u,f,p,y){this.Ci=e,this.b_=s,this.S_=l,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=y,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new AA(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.b_,6e4,(()=>this.k_())))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===Y.RESOURCE_EXHAUSTED?(fr(n.toString()),fr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===Y.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([s,l])=>{this.D_===n&&this.G_(s,l)}),(s=>{e((()=>{const l=new ie(Y.UNKNOWN,"Fetching auth token failed: "+s.message);return this.z_(l)}))}))}G_(e,n){const s=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo((()=>{s((()=>this.listener.Zo()))})),this.stream.Yo((()=>{s((()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.S_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.Yo())))})),this.stream.t_((l=>{s((()=>this.z_(l)))})),this.stream.onMessage((l=>{s((()=>++this.F_==1?this.H_(l):this.onNext(l)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(KE,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget((()=>this.D_===e?n():(re(KE,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class SN extends SA{constructor(e,n,s,l,u,f){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,l,f),this.serializer=u}j_(e,n){return this.connection.T_("Listen",e,n)}H_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=NC(this.serializer,e),s=(function(u){if(!("targetChange"in u))return ge.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?ge.min():f.readTime?Vi(f.readTime):ge.min()})(e);return this.listener.J_(n,s)}Z_(e){const n={};n.database=Fm(this.serializer),n.addTarget=(function(u,f){let p;const y=f.target;if(p=Um(y)?{documents:xC(u,y)}:{query:VC(u,y).ft},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=cA(u,f.resumeToken);const g=Bm(u,f.expectedCount);g!==null&&(p.expectedCount=g)}else if(f.snapshotVersion.compareTo(ge.min())>0){p.readTime=gh(u,f.snapshotVersion.toTimestamp());const g=Bm(u,f.expectedCount);g!==null&&(p.expectedCount=g)}return p})(this.serializer,e);const s=kC(this.serializer,e);s&&(n.labels=s),this.K_(n)}X_(e){const n={};n.database=Fm(this.serializer),n.removeTarget=e,this.K_(n)}}class bN extends SA{constructor(e,n,s,l,u,f){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,l,f),this.serializer=u}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}H_(e){return qe(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,qe(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){qe(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=OC(e.writeResults,e.commitTime),s=Vi(e.commitTime);return this.listener.na(s,n)}ra(){const e={};e.database=Fm(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map((s=>DC(this.serializer,s)))};this.K_(n)}}/**
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
 */class wN{}class RN extends wN{constructor(e,n,s,l){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=l,this.ia=!1}sa(){if(this.ia)throw new ie(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,s,l){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Wo(e,qm(n,s),l,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new ie(Y.UNKNOWN,u.toString())}))}jo(e,n,s,l,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,p])=>this.connection.jo(e,qm(n,s),l,f,p,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new ie(Y.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}function IN(r,e,n,s){return new RN(r,e,n,s)}class CN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(fr(n),this.aa=!1):re("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const ta="RemoteStore";class NN{constructor(e,n,s,l,u){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.Ra=[],this.Aa=u,this.Aa.Mo((f=>{s.enqueueAndForget((async()=>{la(this)&&(re(ta,"Restarting streams for network reachability change."),await(async function(y){const g=_e(y);g.Ea.add(4),await cu(g),g.Va.set("Unknown"),g.Ea.delete(4),await Hh(g)})(this))}))})),this.Va=new CN(s,l)}}async function Hh(r){if(la(r))for(const e of r.Ra)await e(!0)}async function cu(r){for(const e of r.Ra)await e(!1)}function bA(r,e){const n=_e(r);n.Ia.has(e.targetId)||(n.Ia.set(e.targetId,e),xp(n)?Op(n):So(n).O_()&&Dp(n,e))}function Np(r,e){const n=_e(r),s=So(n);n.Ia.delete(e),s.O_()&&wA(n,e),n.Ia.size===0&&(s.O_()?s.L_():la(n)&&n.Va.set("Unknown"))}function Dp(r,e){if(r.da.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ge.min())>0){const n=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}So(r).Z_(e)}function wA(r,e){r.da.$e(e),So(r).X_(e)}function Op(r){r.da=new AC({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),At:e=>r.Ia.get(e)||null,ht:()=>r.datastore.serializer.databaseId}),So(r).start(),r.Va.ua()}function xp(r){return la(r)&&!So(r).x_()&&r.Ia.size>0}function la(r){return _e(r).Ea.size===0}function RA(r){r.da=void 0}async function DN(r){r.Va.set("Online")}async function ON(r){r.Ia.forEach(((e,n)=>{Dp(r,e)}))}async function xN(r,e){RA(r),xp(r)?(r.Va.ha(e),Op(r)):r.Va.set("Unknown")}async function VN(r,e,n){if(r.Va.set("Online"),e instanceof uA&&e.state===2&&e.cause)try{await(async function(l,u){const f=u.cause;for(const p of u.targetIds)l.Ia.has(p)&&(await l.remoteSyncer.rejectListen(p,f),l.Ia.delete(p),l.da.removeTarget(p))})(r,e)}catch(s){re(ta,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await _h(r,s)}else if(e instanceof nh?r.da.Xe(e):e instanceof lA?r.da.st(e):r.da.tt(e),!n.isEqual(ge.min()))try{const s=await TA(r.localStore);n.compareTo(s)>=0&&await(function(u,f){const p=u.da.Tt(f);return p.targetChanges.forEach(((y,g)=>{if(y.resumeToken.approximateByteSize()>0){const T=u.Ia.get(g);T&&u.Ia.set(g,T.withResumeToken(y.resumeToken,f))}})),p.targetMismatches.forEach(((y,g)=>{const T=u.Ia.get(y);if(!T)return;u.Ia.set(y,T.withResumeToken(Yt.EMPTY_BYTE_STRING,T.snapshotVersion)),wA(u,y);const S=new Wr(T.target,y,g,T.sequenceNumber);Dp(u,S)})),u.remoteSyncer.applyRemoteEvent(p)})(r,n)}catch(s){re(ta,"Failed to raise snapshot:",s),await _h(r,s)}}async function _h(r,e,n){if(!To(e))throw e;r.Ea.add(1),await cu(r),r.Va.set("Offline"),n||(n=()=>TA(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{re(ta,"Retrying IndexedDB access"),await n(),r.Ea.delete(1),await Hh(r)}))}function IA(r,e){return e().catch((n=>_h(r,n,e)))}async function Fh(r){const e=_e(r),n=os(e);let s=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:pp;for(;MN(e);)try{const l=await mN(e.localStore,s);if(l===null){e.Ta.length===0&&n.L_();break}s=l.batchId,kN(e,l)}catch(l){await _h(e,l)}CA(e)&&NA(e)}function MN(r){return la(r)&&r.Ta.length<10}function kN(r,e){r.Ta.push(e);const n=os(r);n.O_()&&n.Y_&&n.ea(e.mutations)}function CA(r){return la(r)&&!os(r).x_()&&r.Ta.length>0}function NA(r){os(r).start()}async function LN(r){os(r).ra()}async function PN(r){const e=os(r);for(const n of r.Ta)e.ea(n.mutations)}async function UN(r,e,n){const s=r.Ta.shift(),l=Ap.from(s,e,n);await IA(r,(()=>r.remoteSyncer.applySuccessfulWrite(l))),await Fh(r)}async function zN(r,e){e&&os(r).Y_&&await(async function(s,l){if((function(f){return vC(f)&&f!==Y.ABORTED})(l.code)){const u=s.Ta.shift();os(s).B_(),await IA(s,(()=>s.remoteSyncer.rejectFailedWrite(u.batchId,l))),await Fh(s)}})(r,e),CA(r)&&NA(r)}async function YE(r,e){const n=_e(r);n.asyncQueue.verifyOperationInProgress(),re(ta,"RemoteStore received new credentials");const s=la(n);n.Ea.add(3),await cu(n),s&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ea.delete(3),await Hh(n)}async function jN(r,e){const n=_e(r);e?(n.Ea.delete(2),await Hh(n)):e||(n.Ea.add(2),await cu(n),n.Va.set("Unknown"))}function So(r){return r.ma||(r.ma=(function(n,s,l){const u=_e(n);return u.sa(),new SN(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,l)})(r.datastore,r.asyncQueue,{Zo:DN.bind(null,r),Yo:ON.bind(null,r),t_:xN.bind(null,r),J_:VN.bind(null,r)}),r.Ra.push((async e=>{e?(r.ma.B_(),xp(r)?Op(r):r.Va.set("Unknown")):(await r.ma.stop(),RA(r))}))),r.ma}function os(r){return r.fa||(r.fa=(function(n,s,l){const u=_e(n);return u.sa(),new bN(s,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,l)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),Yo:LN.bind(null,r),t_:zN.bind(null,r),ta:PN.bind(null,r),na:UN.bind(null,r)}),r.Ra.push((async e=>{e?(r.fa.B_(),await Fh(r)):(await r.fa.stop(),r.Ta.length>0&&(re(ta,`Stopping write stream with ${r.Ta.length} pending writes`),r.Ta=[]))}))),r.fa}/**
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
 */class Vp{constructor(e,n,s,l,u){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=l,this.removalCallback=u,this.deferred=new ur,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,l,u){const f=Date.now()+s,p=new Vp(e,n,f,l,u);return p.start(s),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ie(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mp(r,e){if(fr("AsyncQueue",`${e}: ${r}`),To(r))return new ie(Y.UNAVAILABLE,`${e}: ${r}`);throw r}/**
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
 */class lo{static emptySet(e){return new lo(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||ue.comparator(n.key,s.key):(n,s)=>ue.comparator(n.key,s.key),this.keyedMap=Ml(),this.sortedSet=new lt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,s)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof lo)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const l=n.getNext().key,u=s.getNext().key;if(!l.isEqual(u))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new lo;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class QE{constructor(){this.ga=new lt(ue.comparator)}track(e){const n=e.doc.key,s=this.ga.get(n);s?e.type!==0&&s.type===3?this.ga=this.ga.insert(n,e):e.type===3&&s.type!==1?this.ga=this.ga.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.ga=this.ga.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.ga=this.ga.remove(n):e.type===1&&s.type===2?this.ga=this.ga.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.ga=this.ga.insert(n,{type:2,doc:e.doc}):me(63341,{Vt:e,pa:s}):this.ga=this.ga.insert(n,e)}ya(){const e=[];return this.ga.inorderTraversal(((n,s)=>{e.push(s)})),e}}class mo{constructor(e,n,s,l,u,f,p,y,g){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=l,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=y,this.hasCachedResults=g}static fromInitialDocuments(e,n,s,l,u){const f=[];return n.forEach((p=>{f.push({type:0,doc:p})})),new mo(e,n,lo.emptySet(n),f,s,l,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ph(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let l=0;l<n.length;l++)if(n[l].type!==s[l].type||!n[l].doc.isEqual(s[l].doc))return!1;return!0}}/**
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
 */class BN{constructor(){this.wa=void 0,this.ba=[]}Sa(){return this.ba.some((e=>e.Da()))}}class qN{constructor(){this.queries=XE(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,s){const l=_e(n),u=l.queries;l.queries=XE(),u.forEach(((f,p)=>{for(const y of p.ba)y.onError(s)}))})(this,new ie(Y.ABORTED,"Firestore shutting down"))}}function XE(){return new oa((r=>XT(r)),Ph)}async function kp(r,e){const n=_e(r);let s=3;const l=e.query;let u=n.queries.get(l);u?!u.Sa()&&e.Da()&&(s=2):(u=new BN,s=e.Da()?0:1);try{switch(s){case 0:u.wa=await n.onListen(l,!0);break;case 1:u.wa=await n.onListen(l,!1);break;case 2:await n.onFirstRemoteStoreListen(l)}}catch(f){const p=Mp(f,`Initialization of query '${eo(e.query)}' failed`);return void e.onError(p)}n.queries.set(l,u),u.ba.push(e),e.va(n.onlineState),u.wa&&e.Fa(u.wa)&&Pp(n)}async function Lp(r,e){const n=_e(r),s=e.query;let l=3;const u=n.queries.get(s);if(u){const f=u.ba.indexOf(e);f>=0&&(u.ba.splice(f,1),u.ba.length===0?l=e.Da()?0:1:!u.Sa()&&e.Da()&&(l=2))}switch(l){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function HN(r,e){const n=_e(r);let s=!1;for(const l of e){const u=l.query,f=n.queries.get(u);if(f){for(const p of f.ba)p.Fa(l)&&(s=!0);f.wa=l}}s&&Pp(n)}function FN(r,e,n){const s=_e(r),l=s.queries.get(e);if(l)for(const u of l.ba)u.onError(n);s.queries.delete(e)}function Pp(r){r.Ca.forEach((e=>{e.next()}))}var Ym,$E;($E=Ym||(Ym={})).Ma="default",$E.Cache="cache";class Up{constructor(e,n,s){this.query=e,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=s||{}}Fa(e){if(!this.options.includeMetadataChanges){const s=[];for(const l of e.docChanges)l.type!==3&&s.push(l);e=new mo(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),n=!0):this.La(e,this.onlineState)&&(this.ka(e),n=!0),this.Na=e,n}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),n=!0),n}La(e,n){if(!e.fromCache||!this.Da())return!0;const s=n!=="Offline";return(!this.options.Ka||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(e){e=mo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==Ym.Cache}}/**
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
 */class DA{constructor(e){this.key=e}}class OA{constructor(e){this.key=e}}class GN{constructor(e,n){this.query=e,this.Za=n,this.Xa=null,this.hasCachedResults=!1,this.current=!1,this.Ya=xe(),this.mutatedKeys=xe(),this.eu=$T(e),this.tu=new lo(this.eu)}get nu(){return this.Za}ru(e,n){const s=n?n.iu:new QE,l=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=l,p=!1;const y=this.query.limitType==="F"&&l.size===this.query.limit?l.last():null,g=this.query.limitType==="L"&&l.size===this.query.limit?l.first():null;if(e.inorderTraversal(((T,S)=>{const b=l.get(T),q=Uh(this.query,S)?S:null,Z=!!b&&this.mutatedKeys.has(b.key),J=!!q&&(q.hasLocalMutations||this.mutatedKeys.has(q.key)&&q.hasCommittedMutations);let W=!1;b&&q?b.data.isEqual(q.data)?Z!==J&&(s.track({type:3,doc:q}),W=!0):this.su(b,q)||(s.track({type:2,doc:q}),W=!0,(y&&this.eu(q,y)>0||g&&this.eu(q,g)<0)&&(p=!0)):!b&&q?(s.track({type:0,doc:q}),W=!0):b&&!q&&(s.track({type:1,doc:b}),W=!0,(y||g)&&(p=!0)),W&&(q?(f=f.add(q),u=J?u.add(T):u.delete(T)):(f=f.delete(T),u=u.delete(T)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const T=this.query.limitType==="F"?f.last():f.first();f=f.delete(T.key),u=u.delete(T.key),s.track({type:1,doc:T})}return{tu:f,iu:s,Ss:p,mutatedKeys:u}}su(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,l){const u=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const f=e.iu.ya();f.sort(((T,S)=>(function(q,Z){const J=W=>{switch(W){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return me(20277,{Vt:W})}};return J(q)-J(Z)})(T.type,S.type)||this.eu(T.doc,S.doc))),this.ou(s),l=l??!1;const p=n&&!l?this._u():[],y=this.Ya.size===0&&this.current&&!l?1:0,g=y!==this.Xa;return this.Xa=y,f.length!==0||g?{snapshot:new mo(this.query,e.tu,u,f,e.mutatedKeys,y===0,g,!1,!!s&&s.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new QE,mutatedKeys:this.mutatedKeys,Ss:!1},!1)):{au:[]}}uu(e){return!this.Za.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((n=>this.Za=this.Za.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Za=this.Za.delete(n))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Ya;this.Ya=xe(),this.tu.forEach((s=>{this.uu(s.key)&&(this.Ya=this.Ya.add(s.key))}));const n=[];return e.forEach((s=>{this.Ya.has(s)||n.push(new OA(s))})),this.Ya.forEach((s=>{e.has(s)||n.push(new DA(s))})),n}cu(e){this.Za=e.ks,this.Ya=xe();const n=this.ru(e.documents);return this.applyChanges(n,!0)}lu(){return mo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Xa===0,this.hasCachedResults)}}const zp="SyncEngine";class KN{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class YN{constructor(e){this.key=e,this.hu=!1}}class QN{constructor(e,n,s,l,u,f){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=l,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new oa((p=>XT(p)),Ph),this.Iu=new Map,this.Eu=new Set,this.Ru=new lt(ue.comparator),this.Au=new Map,this.Vu=new wp,this.du={},this.mu=new Map,this.fu=fo.ar(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function XN(r,e,n=!0){const s=PA(r);let l;const u=s.Tu.get(e);return u?(s.sharedClientState.addLocalQueryTarget(u.targetId),l=u.view.lu()):l=await xA(s,e,n,!0),l}async function $N(r,e){const n=PA(r);await xA(n,e,!0,!1)}async function xA(r,e,n,s){const l=await pN(r.localStore,xi(e)),u=l.targetId,f=r.sharedClientState.addLocalQueryTarget(u,n);let p;return s&&(p=await JN(r,e,u,f==="current",l.resumeToken)),r.isPrimaryClient&&n&&bA(r.remoteStore,l),p}async function JN(r,e,n,s,l){r.pu=(S,b,q)=>(async function(J,W,he,ve){let Ee=W.view.ru(he);Ee.Ss&&(Ee=await qE(J.localStore,W.query,!1).then((({documents:N})=>W.view.ru(N,Ee))));const Je=ve&&ve.targetChanges.get(W.targetId),Ze=ve&&ve.targetMismatches.get(W.targetId)!=null,ze=W.view.applyChanges(Ee,J.isPrimaryClient,Je,Ze);return ZE(J,W.targetId,ze.au),ze.snapshot})(r,S,b,q);const u=await qE(r.localStore,e,!0),f=new GN(e,u.ks),p=f.ru(u.documents),y=uu.createSynthesizedTargetChangeForCurrentChange(n,s&&r.onlineState!=="Offline",l),g=f.applyChanges(p,r.isPrimaryClient,y);ZE(r,n,g.au);const T=new KN(e,n,f);return r.Tu.set(e,T),r.Iu.has(n)?r.Iu.get(n).push(e):r.Iu.set(n,[e]),g.snapshot}async function ZN(r,e,n){const s=_e(r),l=s.Tu.get(e),u=s.Iu.get(l.targetId);if(u.length>1)return s.Iu.set(l.targetId,u.filter((f=>!Ph(f,e)))),void s.Tu.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(l.targetId),s.sharedClientState.isActiveQueryTarget(l.targetId)||await Gm(s.localStore,l.targetId,!1).then((()=>{s.sharedClientState.clearQueryState(l.targetId),n&&Np(s.remoteStore,l.targetId),Qm(s,l.targetId)})).catch(Eo)):(Qm(s,l.targetId),await Gm(s.localStore,l.targetId,!0))}async function WN(r,e){const n=_e(r),s=n.Tu.get(e),l=n.Iu.get(s.targetId);n.isPrimaryClient&&l.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Np(n.remoteStore,s.targetId))}async function eD(r,e,n){const s=oD(r);try{const l=await(function(f,p){const y=_e(f),g=it.now(),T=p.reduce(((q,Z)=>q.add(Z.key)),xe());let S,b;return y.persistence.runTransaction("Locally write mutations","readwrite",(q=>{let Z=dr(),J=xe();return y.xs.getEntries(q,T).next((W=>{Z=W,Z.forEach(((he,ve)=>{ve.isValidDocument()||(J=J.add(he))}))})).next((()=>y.localDocuments.getOverlayedDocuments(q,Z))).next((W=>{S=W;const he=[];for(const ve of p){const Ee=mC(ve,S.get(ve.key).overlayedDocument);Ee!=null&&he.push(new fs(ve.key,Ee,BT(Ee.value.mapValue),Hn.exists(!0)))}return y.mutationQueue.addMutationBatch(q,g,he,p)})).next((W=>{b=W;const he=W.applyToLocalDocumentSet(S,J);return y.documentOverlayCache.saveOverlays(q,W.batchId,he)}))})).then((()=>({batchId:b.batchId,changes:ZT(S)})))})(s.localStore,e);s.sharedClientState.addPendingMutation(l.batchId),(function(f,p,y){let g=f.du[f.currentUser.toKey()];g||(g=new lt(Oe)),g=g.insert(p,y),f.du[f.currentUser.toKey()]=g})(s,l.batchId,n),await hu(s,l.changes),await Fh(s.remoteStore)}catch(l){const u=Mp(l,"Failed to persist write");n.reject(u)}}async function VA(r,e){const n=_e(r);try{const s=await fN(n.localStore,e);e.targetChanges.forEach(((l,u)=>{const f=n.Au.get(u);f&&(qe(l.addedDocuments.size+l.modifiedDocuments.size+l.removedDocuments.size<=1,22616),l.addedDocuments.size>0?f.hu=!0:l.modifiedDocuments.size>0?qe(f.hu,14607):l.removedDocuments.size>0&&(qe(f.hu,42227),f.hu=!1))})),await hu(n,s,e)}catch(s){await Eo(s)}}function JE(r,e,n){const s=_e(r);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const l=[];s.Tu.forEach(((u,f)=>{const p=f.view.va(e);p.snapshot&&l.push(p.snapshot)})),(function(f,p){const y=_e(f);y.onlineState=p;let g=!1;y.queries.forEach(((T,S)=>{for(const b of S.ba)b.va(p)&&(g=!0)})),g&&Pp(y)})(s.eventManager,e),l.length&&s.Pu.J_(l),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function tD(r,e,n){const s=_e(r);s.sharedClientState.updateQueryState(e,"rejected",n);const l=s.Au.get(e),u=l&&l.key;if(u){let f=new lt(ue.comparator);f=f.insert(u,Jt.newNoDocument(u,ge.min()));const p=xe().add(u),y=new Bh(ge.min(),new Map,new lt(Oe),f,p);await VA(s,y),s.Ru=s.Ru.remove(u),s.Au.delete(e),jp(s)}else await Gm(s.localStore,e,!1).then((()=>Qm(s,e,n))).catch(Eo)}async function nD(r,e){const n=_e(r),s=e.batch.batchId;try{const l=await hN(n.localStore,e);kA(n,s,null),MA(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await hu(n,l)}catch(l){await Eo(l)}}async function iD(r,e,n){const s=_e(r);try{const l=await(function(f,p){const y=_e(f);return y.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let T;return y.mutationQueue.lookupMutationBatch(g,p).next((S=>(qe(S!==null,37113),T=S.keys(),y.mutationQueue.removeMutationBatch(g,S)))).next((()=>y.mutationQueue.performConsistencyCheck(g))).next((()=>y.documentOverlayCache.removeOverlaysForBatchId(g,T,p))).next((()=>y.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,T))).next((()=>y.localDocuments.getDocuments(g,T)))}))})(s.localStore,e);kA(s,e,n),MA(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await hu(s,l)}catch(l){await Eo(l)}}function MA(r,e){(r.mu.get(e)||[]).forEach((n=>{n.resolve()})),r.mu.delete(e)}function kA(r,e,n){const s=_e(r);let l=s.du[s.currentUser.toKey()];if(l){const u=l.get(e);u&&(n?u.reject(n):u.resolve(),l=l.remove(e)),s.du[s.currentUser.toKey()]=l}}function Qm(r,e,n=null){r.sharedClientState.removeLocalQueryTarget(e);for(const s of r.Iu.get(e))r.Tu.delete(s),n&&r.Pu.yu(s,n);r.Iu.delete(e),r.isPrimaryClient&&r.Vu.Gr(e).forEach((s=>{r.Vu.containsKey(s)||LA(r,s)}))}function LA(r,e){r.Eu.delete(e.path.canonicalString());const n=r.Ru.get(e);n!==null&&(Np(r.remoteStore,n),r.Ru=r.Ru.remove(e),r.Au.delete(n),jp(r))}function ZE(r,e,n){for(const s of n)s instanceof DA?(r.Vu.addReference(s.key,e),rD(r,s)):s instanceof OA?(re(zp,"Document no longer in limbo: "+s.key),r.Vu.removeReference(s.key,e),r.Vu.containsKey(s.key)||LA(r,s.key)):me(19791,{wu:s})}function rD(r,e){const n=e.key,s=n.path.canonicalString();r.Ru.get(n)||r.Eu.has(s)||(re(zp,"New document in limbo: "+n),r.Eu.add(s),jp(r))}function jp(r){for(;r.Eu.size>0&&r.Ru.size<r.maxConcurrentLimboResolutions;){const e=r.Eu.values().next().value;r.Eu.delete(e);const n=new ue(et.fromString(e)),s=r.fu.next();r.Au.set(s,new YN(n)),r.Ru=r.Ru.insert(n,s),bA(r.remoteStore,new Wr(xi(Lh(n.path)),s,"TargetPurposeLimboResolution",Vh.ce))}}async function hu(r,e,n){const s=_e(r),l=[],u=[],f=[];s.Tu.isEmpty()||(s.Tu.forEach(((p,y)=>{f.push(s.pu(y,e,n).then((g=>{var T;if((g||n)&&s.isPrimaryClient){const S=g?!g.fromCache:(T=n==null?void 0:n.targetChanges.get(y.targetId))==null?void 0:T.current;s.sharedClientState.updateQueryState(y.targetId,S?"current":"not-current")}if(g){l.push(g);const S=Ip.Es(y.targetId,g);u.push(S)}})))})),await Promise.all(f),s.Pu.J_(l),await(async function(y,g){const T=_e(y);try{await T.persistence.runTransaction("notifyLocalViewChanges","readwrite",(S=>$.forEach(g,(b=>$.forEach(b.Ts,(q=>T.persistence.referenceDelegate.addReference(S,b.targetId,q))).next((()=>$.forEach(b.Is,(q=>T.persistence.referenceDelegate.removeReference(S,b.targetId,q)))))))))}catch(S){if(!To(S))throw S;re(Cp,"Failed to update sequence numbers: "+S)}for(const S of g){const b=S.targetId;if(!S.fromCache){const q=T.vs.get(b),Z=q.snapshotVersion,J=q.withLastLimboFreeSnapshotVersion(Z);T.vs=T.vs.insert(b,J)}}})(s.localStore,u))}async function sD(r,e){const n=_e(r);if(!n.currentUser.isEqual(e)){re(zp,"User change. New user:",e.toKey());const s=await EA(n.localStore,e);n.currentUser=e,(function(u,f){u.mu.forEach((p=>{p.forEach((y=>{y.reject(new ie(Y.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await hu(n,s.Ns)}}function aD(r,e){const n=_e(r),s=n.Au.get(e);if(s&&s.hu)return xe().add(s.key);{let l=xe();const u=n.Iu.get(e);if(!u)return l;for(const f of u){const p=n.Tu.get(f);l=l.unionWith(p.view.nu)}return l}}function PA(r){const e=_e(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=VA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=aD.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=tD.bind(null,e),e.Pu.J_=HN.bind(null,e.eventManager),e.Pu.yu=FN.bind(null,e.eventManager),e}function oD(r){const e=_e(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=nD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=iD.bind(null,e),e}class vh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=qh(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,n){return null}Mu(e,n){return null}vu(e){return cN(this.persistence,new oN,e.initialUser,this.serializer)}Cu(e){return new vA(Rp.Vi,this.serializer)}Du(e){return new yN}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}vh.provider={build:()=>new vh};class lD extends vh{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,n){qe(this.persistence.referenceDelegate instanceof yh,46915);const s=this.persistence.referenceDelegate.garbageCollector;return new KC(s,e.asyncQueue,n)}Cu(e){const n=this.cacheSizeBytes!==void 0?fn.withCacheSize(this.cacheSizeBytes):fn.DEFAULT;return new vA((s=>yh.Vi(s,n)),this.serializer)}}class Xm{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>JE(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=sD.bind(null,this.syncEngine),await jN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new qN})()}createDatastore(e){const n=qh(e.databaseInfo.databaseId),s=AN(e.databaseInfo);return IN(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return(function(s,l,u,f,p){return new NN(s,l,u,f,p)})(this.localStore,this.datastore,e.asyncQueue,(n=>JE(this.syncEngine,n,0)),(function(){return GE.v()?new GE:new _N})())}createSyncEngine(e,n){return(function(l,u,f,p,y,g,T){const S=new QN(l,u,f,p,y,g);return T&&(S.gu=!0),S})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(l){const u=_e(l);re(ta,"RemoteStore shutting down."),u.Ea.add(5),await cu(u),u.Aa.shutdown(),u.Va.set("Unknown")})(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Xm.provider={build:()=>new Xm};/**
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
 */class Bp{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):fr("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */const ls="FirestoreClient";class uD{constructor(e,n,s,l,u){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this._databaseInfo=l,this.user=$t.UNAUTHENTICATED,this.clientId=mp.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(s,(async f=>{re(ls,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(s,(f=>(re(ls,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ur;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Mp(n,"Failed to shutdown persistence");e.reject(s)}})),e.promise}}async function ym(r,e){r.asyncQueue.verifyOperationInProgress(),re(ls,"Initializing OfflineComponentProvider");const n=r.configuration;await e.initialize(n);let s=n.initialUser;r.setCredentialChangeListener((async l=>{s.isEqual(l)||(await EA(e.localStore,l),s=l)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function WE(r,e){r.asyncQueue.verifyOperationInProgress();const n=await cD(r);re(ls,"Initializing OnlineComponentProvider"),await e.initialize(n,r.configuration),r.setCredentialChangeListener((s=>YE(e.remoteStore,s))),r.setAppCheckTokenChangeListener(((s,l)=>YE(e.remoteStore,l))),r._onlineComponents=e}async function cD(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){re(ls,"Using user provided OfflineComponentProvider");try{await ym(r,r._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(l){return l.name==="FirebaseError"?l.code===Y.FAILED_PRECONDITION||l.code===Y.UNIMPLEMENTED:!(typeof DOMException<"u"&&l instanceof DOMException)||l.code===22||l.code===20||l.code===11})(n))throw n;ea("Error using user provided cache. Falling back to memory cache: "+n),await ym(r,new vh)}}else re(ls,"Using default OfflineComponentProvider"),await ym(r,new lD(void 0));return r._offlineComponents}async function UA(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(re(ls,"Using user provided OnlineComponentProvider"),await WE(r,r._uninitializedComponentsProvider._online)):(re(ls,"Using default OnlineComponentProvider"),await WE(r,new Xm))),r._onlineComponents}function hD(r){return UA(r).then((e=>e.syncEngine))}async function Eh(r){const e=await UA(r),n=e.eventManager;return n.onListen=XN.bind(null,e.syncEngine),n.onUnlisten=ZN.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=$N.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=WN.bind(null,e.syncEngine),n}function fD(r,e,n,s){const l=new Bp(s),u=new Up(e,l,n);return r.asyncQueue.enqueueAndForget((async()=>kp(await Eh(r),u))),()=>{l.Nu(),r.asyncQueue.enqueueAndForget((async()=>Lp(await Eh(r),u)))}}function dD(r,e,n={}){const s=new ur;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,p,y,g){const T=new Bp({next:b=>{T.Nu(),f.enqueueAndForget((()=>Lp(u,S)));const q=b.docs.has(p);!q&&b.fromCache?g.reject(new ie(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):q&&b.fromCache&&y&&y.source==="server"?g.reject(new ie(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(b)},error:b=>g.reject(b)}),S=new Up(Lh(p.path),T,{includeMetadataChanges:!0,Ka:!0});return kp(u,S)})(await Eh(r),r.asyncQueue,e,n,s))),s.promise}function mD(r,e,n={}){const s=new ur;return r.asyncQueue.enqueueAndForget((async()=>(function(u,f,p,y,g){const T=new Bp({next:b=>{T.Nu(),f.enqueueAndForget((()=>Lp(u,S))),b.fromCache&&y.source==="server"?g.reject(new ie(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(b)},error:b=>g.reject(b)}),S=new Up(p,T,{includeMetadataChanges:!0,Ka:!0});return kp(u,S)})(await Eh(r),r.asyncQueue,e,n,s))),s.promise}function pD(r,e){const n=new ur;return r.asyncQueue.enqueueAndForget((async()=>eD(await hD(r),e,n))),n.promise}/**
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
 */function zA(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
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
 */const gD="ComponentProvider",e0=new Map;function yD(r,e,n,s,l){return new k2(r,e,n,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,zA(l.experimentalLongPollingOptions),l.useFetchStreams,l.isUsingEmulator,s)}/**
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
 */const jA="firestore.googleapis.com",t0=!0;class n0{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ie(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jA,this.ssl=t0}else this.host=e.host,this.ssl=e.ssl??t0;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=_A;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<FC)throw new ie(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}b2("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=zA(e.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new ie(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new ie(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new ie(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(s,l){return s.timeoutSeconds===l.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Gh{constructor(e,n,s,l){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new n0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ie(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ie(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new n0(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new m2;switch(s.type){case"firstParty":return new _2(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new ie(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=e0.get(n);s&&(re(gD,"Removing Datastore"),e0.delete(n),s.terminate())})(this),Promise.resolve()}}function _D(r,e,n,s={}){var g;r=mn(r,Gh);const l=po(e),u=r._getSettings(),f={...u,emulatorOptions:r._getEmulatorOptions()},p=`${e}:${n}`;l&&(x0(`https://${p}`),V0("Firestore",!0)),u.host!==jA&&u.host!==p&&ea("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const y={...u,host:p,ssl:l,emulatorOptions:s};if(!$s(y,f)&&(r._setSettings(y),s.mockUserToken)){let T,S;if(typeof s.mockUserToken=="string")T=s.mockUserToken,S=$t.MOCK_USER;else{T=N1(s.mockUserToken,(g=r._app)==null?void 0:g.options.projectId);const b=s.mockUserToken.sub||s.mockUserToken.user_id;if(!b)throw new ie(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new $t(b)}r._authCredentials=new p2(new NT(T,S))}}/**
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
 */class ds{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ds(this.firestore,e,this._query)}}class ht{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ns(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ht(this.firestore,e,this._key)}toJSON(){return{type:ht._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,s){if(ou(n,ht._jsonSchema))return new ht(e,s||null,new ue(et.fromString(n.referencePath)))}}ht._jsonSchemaVersion="firestore/documentReference/1.0",ht._jsonSchema={type:Nt("string",ht._jsonSchemaVersion),referencePath:Nt("string")};class ns extends ds{constructor(e,n,s){super(e,n,Lh(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ht(this.firestore,null,new ue(e))}withConverter(e){return new ns(this.firestore,e,this._path)}}function Th(r,e,...n){if(r=yt(r),DT("collection","path",e),r instanceof Gh){const s=et.fromString(e,...n);return pE(s),new ns(r,null,s)}{if(!(r instanceof ht||r instanceof ns))throw new ie(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(et.fromString(e,...n));return pE(s),new ns(r.firestore,null,s)}}function Mi(r,e,...n){if(r=yt(r),arguments.length===1&&(e=mp.newId()),DT("doc","path",e),r instanceof Gh){const s=et.fromString(e,...n);return mE(s),new ht(r,null,new ue(s))}{if(!(r instanceof ht||r instanceof ns))throw new ie(Y.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=r._path.child(et.fromString(e,...n));return mE(s),new ht(r.firestore,r instanceof ns?r.converter:null,new ue(s))}}/**
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
 */const i0="AsyncQueue";class r0{constructor(e=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new AA(this,"async_queue_retry"),this._c=()=>{const s=gm();s&&re(i0,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=e;const n=gm();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const n=gm();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new ur;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Yu.push(e),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(e){if(!To(e))throw e;re(i0,"Operation failed with retryable error: "+e)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const n=this.ac.then((()=>(this.rc=!0,e().catch((s=>{throw this.nc=s,this.rc=!1,fr("INTERNAL UNHANDLED ERROR: ",s0(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(e,n,s){this.uc(),this.oc.indexOf(e)>-1&&(n=0);const l=Vp.createAndSchedule(this,e,n,s,(u=>this.hc(u)));return this.tc.push(l),l}uc(){this.nc&&me(47125,{Pc:s0(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const n of this.tc)if(n.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tc()}))}Rc(e){this.oc.push(e)}hc(e){const n=this.tc.indexOf(e);this.tc.splice(n,1)}}function s0(r){let e=r.message||"";return r.stack&&(e=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),e}class mr extends Gh{constructor(e,n,s,l){super(e,n,s,l),this.type="firestore",this._queue=new r0,this._persistenceKey=(l==null?void 0:l.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new r0(e),this._firestoreClient=void 0,await e}}}function vD(r,e){const n=typeof r=="object"?r:ip(),s=typeof r=="string"?r:e,l=go(n,"firestore").getImmediate({identifier:s});if(!l._initialized){const u=I1("firestore");u&&_D(l,...u)}return l}function Kh(r){if(r._terminated)throw new ie(Y.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||ED(r),r._firestoreClient}function ED(r){var s,l,u,f;const e=r._freezeSettings(),n=yD(r._databaseId,((s=r._app)==null?void 0:s.options.appId)||"",r._persistenceKey,(l=r._app)==null?void 0:l.options.apiKey,e);r._componentsProvider||(u=e.localCache)!=null&&u._offlineComponentProvider&&((f=e.localCache)!=null&&f._onlineComponentProvider)&&(r._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),r._firestoreClient=new uD(r._authCredentials,r._appCheckCredentials,r._queue,n,r._componentsProvider&&(function(y){const g=y==null?void 0:y._online.build();return{_offline:y==null?void 0:y._offline.build(g),_online:g}})(r._componentsProvider))}/**
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
 */class Bn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bn(Yt.fromBase64String(e))}catch(n){throw new ie(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bn(Yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Bn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ou(e,Bn._jsonSchema))return Bn.fromBase64String(e.bytes)}}Bn._jsonSchemaVersion="firestore/bytes/1.0",Bn._jsonSchema={type:Nt("string",Bn._jsonSchemaVersion),bytes:Nt("string")};/**
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
 */class qp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new ie(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Yh{constructor(e){this._methodName=e}}/**
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
 */class ki{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new ie(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new ie(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:ki._jsonSchemaVersion}}static fromJSON(e){if(ou(e,ki._jsonSchema))return new ki(e.latitude,e.longitude)}}ki._jsonSchemaVersion="firestore/geoPoint/1.0",ki._jsonSchema={type:Nt("string",ki._jsonSchemaVersion),latitude:Nt("number"),longitude:Nt("number")};/**
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
 */class ii{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(s,l){if(s.length!==l.length)return!1;for(let u=0;u<s.length;++u)if(s[u]!==l[u])return!1;return!0})(this._values,e._values)}toJSON(){return{type:ii._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ou(e,ii._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new ii(e.vectorValues);throw new ie(Y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ii._jsonSchemaVersion="firestore/vectorValue/1.0",ii._jsonSchema={type:Nt("string",ii._jsonSchemaVersion),vectorValues:Nt("object")};/**
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
 */const TD=/^__.*__$/;class AD{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new fs(e,this.data,this.fieldMask,n,this.fieldTransforms):new lu(e,this.data,n,this.fieldTransforms)}}class BA{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new fs(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function qA(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw me(40011,{dataSource:r})}}class Hp{constructor(e,n,s,l,u,f){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=l,u===void 0&&this.validatePath(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new Hp({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){var l;const n=(l=this.path)==null?void 0:l.child(e),s=this.contextWith({path:n,arrayElement:!1});return s.validatePathSegment(e),s}childContextForFieldPath(e){var l;const n=(l=this.path)==null?void 0:l.child(e),s=this.contextWith({path:n,arrayElement:!1});return s.validatePath(),s}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ah(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(qA(this.dataSource)&&TD.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class SD{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||qh(e)}createContext(e,n,s,l=!1){return new Hp({dataSource:e,methodName:n,targetDoc:s,path:Kt.emptyPath(),arrayElement:!1,hasConverter:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Qh(r){const e=r._freezeSettings(),n=qh(r._databaseId);return new SD(r._databaseId,!!e.ignoreUndefinedProperties,n)}function HA(r,e,n,s,l,u={}){const f=r.createContext(u.merge||u.mergeFields?2:0,e,n,l);Gp("Data must be an object, but it was:",f,s);const p=FA(s,f);let y,g;if(u.merge)y=new bn(f.fieldMask),g=f.fieldTransforms;else if(u.mergeFields){const T=[];for(const S of u.mergeFields){const b=na(e,S,n);if(!f.contains(b))throw new ie(Y.INVALID_ARGUMENT,`Field '${b}' is specified in your field mask but missing from your input data.`);YA(T,b)||T.push(b)}y=new bn(T),g=f.fieldTransforms.filter((S=>y.covers(S.field)))}else y=null,g=f.fieldTransforms;return new AD(new dn(p),y,g)}class Xh extends Yh{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.createError(`${this._methodName}() can only appear at the top level of your update data`):e.createError(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Xh}}class Fp extends Yh{_toFieldTransform(e){return new cC(e.path,new Jl)}isEqual(e){return e instanceof Fp}}function bD(r,e,n,s){const l=r.createContext(1,e,n);Gp("Data must be an object, but it was:",l,s);const u=[],f=dn.empty();hs(s,((y,g)=>{const T=KA(e,y,n);g=yt(g);const S=l.childContextForFieldPath(T);if(g instanceof Xh)u.push(T);else{const b=fu(g,S);b!=null&&(u.push(T),f.set(T,b))}}));const p=new bn(u);return new BA(f,p,l.fieldTransforms)}function wD(r,e,n,s,l,u){const f=r.createContext(1,e,n),p=[na(e,s,n)],y=[l];if(u.length%2!=0)throw new ie(Y.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let b=0;b<u.length;b+=2)p.push(na(e,u[b])),y.push(u[b+1]);const g=[],T=dn.empty();for(let b=p.length-1;b>=0;--b)if(!YA(g,p[b])){const q=p[b];let Z=y[b];Z=yt(Z);const J=f.childContextForFieldPath(q);if(Z instanceof Xh)g.push(q);else{const W=fu(Z,J);W!=null&&(g.push(q),T.set(q,W))}}const S=new bn(g);return new BA(T,S,f.fieldTransforms)}function RD(r,e,n,s=!1){return fu(n,r.createContext(s?4:3,e))}function fu(r,e){if(GA(r=yt(r)))return Gp("Unsupported field value:",e,r),FA(r,e);if(r instanceof Yh)return(function(s,l){if(!qA(l.dataSource))throw l.createError(`${s._methodName}() can only be used with update() and set()`);if(!l.path)throw l.createError(`${s._methodName}() is not currently supported inside arrays`);const u=s._toFieldTransform(l);u&&l.fieldTransforms.push(u)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(s,l){const u=[];let f=0;for(const p of s){let y=fu(p,l.childContextForArray(f));y==null&&(y={nullValue:"NULL_VALUE"}),u.push(y),f++}return{arrayValue:{values:u}}})(r,e)}return(function(s,l){if((s=yt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return oC(l.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const u=it.fromDate(s);return{timestampValue:gh(l.serializer,u)}}if(s instanceof it){const u=new it(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:gh(l.serializer,u)}}if(s instanceof ki)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Bn)return{bytesValue:cA(l.serializer,s._byteString)};if(s instanceof ht){const u=l.databaseId,f=s.firestore._databaseId;if(!f.isEqual(u))throw l.createError(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:bp(s.firestore._databaseId||l.databaseId,s._key.path)}}if(s instanceof ii)return(function(f,p){const y=f instanceof ii?f.toArray():f;return{mapValue:{fields:{[zT]:{stringValue:jT},[dh]:{arrayValue:{values:y.map((T=>{if(typeof T!="number")throw p.createError("VectorValues must only contain numeric values.");return Ep(p.serializer,T)}))}}}}}})(s,l);if(yA(s))return s._toProto(l.serializer);throw l.createError(`Unsupported field value: ${xh(s)}`)})(r,e)}function FA(r,e){const n={};return VT(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):hs(r,((s,l)=>{const u=fu(l,e.childContextForField(s));u!=null&&(n[s]=u)})),{mapValue:{fields:n}}}function GA(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof it||r instanceof ki||r instanceof Bn||r instanceof ht||r instanceof Yh||r instanceof ii||yA(r))}function Gp(r,e,n){if(!GA(n)||!OT(n)){const s=xh(n);throw s==="an object"?e.createError(r+" a custom object"):e.createError(r+" "+s)}}function na(r,e,n){if((e=yt(e))instanceof qp)return e._internalPath;if(typeof e=="string")return KA(r,e);throw Ah("Field path arguments must be of type string or ",r,!1,void 0,n)}const ID=new RegExp("[~\\*/\\[\\]]");function KA(r,e,n){if(e.search(ID)>=0)throw Ah(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,n);try{return new qp(...e.split("."))._internalPath}catch{throw Ah(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,n)}}function Ah(r,e,n,s,l){const u=s&&!s.isEmpty(),f=l!==void 0;let p=`Function ${e}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let y="";return(u||f)&&(y+=" (found",u&&(y+=` in field ${s}`),f&&(y+=` in document ${l}`),y+=")"),new ie(Y.INVALID_ARGUMENT,p+r+y)}function YA(r,e){return r.some((n=>n.isEqual(e)))}/**
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
 */class CD{convertValue(e,n="none"){switch(as(e)){case 0:return null;case 1:return e.booleanValue;case 2:return gt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ss(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw me(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return hs(e,((l,u)=>{s[l]=this.convertValue(u,n)})),s}convertVectorValue(e){var s,l,u;const n=(u=(l=(s=e.fields)==null?void 0:s[dh].arrayValue)==null?void 0:l.values)==null?void 0:u.map((f=>gt(f.doubleValue)));return new ii(n)}convertGeoPoint(e){return new ki(gt(e.latitude),gt(e.longitude))}convertArray(e,n){return(e.values||[]).map((s=>this.convertValue(s,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const s=kh(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Yl(e));default:return null}}convertTimestamp(e){const n=rs(e);return new it(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=et.fromString(e);qe(gA(s),9688,{name:e});const l=new Ql(s.get(1),s.get(3)),u=new ue(s.popFirst(5));return l.isEqual(n)||fr(`Document ${u} contains a document reference within a different database (${l.projectId}/${l.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
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
 */class Kp extends CD{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ht(this.firestore,null,n)}}function Sh(){return new Fp("serverTimestamp")}const a0="@firebase/firestore",o0="4.11.0";/**
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
 */function l0(r){return(function(n,s){if(typeof n!="object"||n===null)return!1;const l=n;for(const u of s)if(u in l&&typeof l[u]=="function")return!0;return!1})(r,["next","error","complete"])}/**
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
 */class QA{constructor(e,n,s,l,u){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=l,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ND(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(na("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ND extends QA{data(){return super.data()}}/**
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
 */function XA(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ie(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yp{}class $A extends Yp{}function Qp(r,e,...n){let s=[];e instanceof Yp&&s.push(e),s=s.concat(n),(function(u){const f=u.filter((y=>y instanceof Xp)).length,p=u.filter((y=>y instanceof $h)).length;if(f>1||f>0&&p>0)throw new ie(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(s);for(const l of s)r=l._apply(r);return r}class $h extends $A{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new $h(e,n,s)}_apply(e){const n=this._parse(e);return JA(e._query,n),new ds(e.firestore,e.converter,zm(e._query,n))}_parse(e){const n=Qh(e.firestore);return(function(u,f,p,y,g,T,S){let b;if(g.isKeyField()){if(T==="array-contains"||T==="array-contains-any")throw new ie(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${T}' queries on documentId().`);if(T==="in"||T==="not-in"){c0(S,T);const Z=[];for(const J of S)Z.push(u0(y,u,J));b={arrayValue:{values:Z}}}else b=u0(y,u,S)}else T!=="in"&&T!=="not-in"&&T!=="array-contains-any"||c0(S,T),b=RD(p,f,S,T==="in"||T==="not-in");return Ct.create(g,T,b)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function bh(r,e,n){const s=e,l=na("where",r);return $h._create(l,s,n)}class Xp extends Yp{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Xp(e,n)}_parse(e){const n=this._queryConstraints.map((s=>s._parse(e))).filter((s=>s.getFilters().length>0));return n.length===1?n[0]:ai.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(l,u){let f=l;const p=u.getFlattenedFilters();for(const y of p)JA(f,y),f=zm(f,y)})(e._query,n),new ds(e.firestore,e.converter,zm(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class $p extends $A{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new $p(e,n)}_apply(e){const n=(function(l,u,f){if(l.startAt!==null)throw new ie(Y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(l.endAt!==null)throw new ie(Y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new $l(u,f)})(e._query,this._field,this._direction);return new ds(e.firestore,e.converter,W2(e._query,n))}}function DD(r,e="asc"){const n=e,s=na("orderBy",r);return $p._create(s,n)}function u0(r,e,n){if(typeof(n=yt(n))=="string"){if(n==="")throw new ie(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!QT(e)&&n.indexOf("/")!==-1)throw new ie(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(et.fromString(n));if(!ue.isDocumentKey(s))throw new ie(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return SE(r,new ue(s))}if(n instanceof ht)return SE(r,n._key);throw new ie(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${xh(n)}.`)}function c0(r,e){if(!Array.isArray(r)||r.length===0)throw new ie(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function JA(r,e){const n=(function(l,u){for(const f of l)for(const p of f.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null})(r.filters,(function(l){switch(l){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new ie(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ie(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function ZA(r,e,n){let s;return s=r?r.toFirestore(e):e,s}class Ll{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qs extends QA{constructor(e,n,s,l,u,f){super(e,n,s,l,f),this._firestore=e,this._firestoreImpl=e,this.metadata=u}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new ih(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(na("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(Y.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Qs._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Qs._jsonSchemaVersion="firestore/documentSnapshot/1.0",Qs._jsonSchema={type:Nt("string",Qs._jsonSchemaVersion),bundleSource:Nt("string","DocumentSnapshot"),bundleName:Nt("string"),bundle:Nt("string")};class ih extends Qs{data(e={}){return super.data(e)}}class Xs{constructor(e,n,s,l){this._firestore=e,this._userDataWriter=n,this._snapshot=l,this.metadata=new Ll(l.hasPendingWrites,l.fromCache),this.query=s}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((s=>{e.call(n,new ih(this._firestore,this._userDataWriter,s.key,s,new Ll(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new ie(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(l,u){if(l._snapshot.oldDocs.isEmpty()){let f=0;return l._snapshot.docChanges.map((p=>{const y=new ih(l._firestore,l._userDataWriter,p.doc.key,p.doc,new Ll(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);return p.doc,{type:"added",doc:y,oldIndex:-1,newIndex:f++}}))}{let f=l._snapshot.oldDocs;return l._snapshot.docChanges.filter((p=>u||p.type!==3)).map((p=>{const y=new ih(l._firestore,l._userDataWriter,p.doc.key,p.doc,new Ll(l._snapshot.mutatedKeys.has(p.doc.key),l._snapshot.fromCache),l.query.converter);let g=-1,T=-1;return p.type!==0&&(g=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),T=f.indexOf(p.doc.key)),{type:OD(p.type),doc:y,oldIndex:g,newIndex:T}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ie(Y.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Xs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=mp.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],l=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),s.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),l.push(u.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function OD(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return me(61501,{type:r})}}/**
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
 */Xs._jsonSchemaVersion="firestore/querySnapshot/1.0",Xs._jsonSchema={type:Nt("string",Xs._jsonSchemaVersion),bundleSource:Nt("string","QuerySnapshot"),bundleName:Nt("string"),bundle:Nt("string")};/**
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
 */function WA(r){r=mn(r,ht);const e=mn(r.firestore,mr),n=Kh(e);return dD(n,r._key).then((s=>eS(e,r,s)))}function xD(r){r=mn(r,ds);const e=mn(r.firestore,mr),n=Kh(e),s=new Kp(e);return XA(r._query),mD(n,r._query).then((l=>new Xs(e,s,r,l)))}function VD(r,e,n){r=mn(r,ht);const s=mn(r.firestore,mr),l=ZA(r.converter,e),u=Qh(s);return Jh(s,[HA(u,"setDoc",r._key,l,r.converter!==null,n).toMutation(r._key,Hn.none())])}function wh(r,e,n,...s){r=mn(r,ht);const l=mn(r.firestore,mr),u=Qh(l);let f;return f=typeof(e=yt(e))=="string"||e instanceof qp?wD(u,"updateDoc",r._key,e,n,s):bD(u,"updateDoc",r._key,e),Jh(l,[f.toMutation(r._key,Hn.exists(!0))])}function MD(r){return Jh(mn(r.firestore,mr),[new Tp(r._key,Hn.none())])}function kD(r,e){const n=mn(r.firestore,mr),s=Mi(r),l=ZA(r.converter,e),u=Qh(r.firestore);return Jh(n,[HA(u,"addDoc",s._key,l,r.converter!==null,{}).toMutation(s._key,Hn.exists(!1))]).then((()=>s))}function $m(r,...e){var g,T,S;r=yt(r);let n={includeMetadataChanges:!1,source:"default"},s=0;typeof e[s]!="object"||l0(e[s])||(n=e[s++]);const l={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(l0(e[s])){const b=e[s];e[s]=(g=b.next)==null?void 0:g.bind(b),e[s+1]=(T=b.error)==null?void 0:T.bind(b),e[s+2]=(S=b.complete)==null?void 0:S.bind(b)}let u,f,p;if(r instanceof ht)f=mn(r.firestore,mr),p=Lh(r._key.path),u={next:b=>{e[s]&&e[s](eS(f,r,b))},error:e[s+1],complete:e[s+2]};else{const b=mn(r,ds);f=mn(b.firestore,mr),p=b._query;const q=new Kp(f);u={next:Z=>{e[s]&&e[s](new Xs(f,q,b,Z))},error:e[s+1],complete:e[s+2]},XA(r._query)}const y=Kh(f);return fD(y,p,l,u)}function Jh(r,e){const n=Kh(r);return pD(n,e)}function eS(r,e,n){const s=n.docs.get(e._key),l=new Kp(r);return new Qs(r,l,e._key,s,new Ll(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){d2(yo),Li(new ri("firestore",((s,{instanceIdentifier:l,options:u})=>{const f=s.getProvider("app").getImmediate(),p=new mr(new g2(s.getProvider("auth-internal")),new v2(f,s.getProvider("app-check-internal")),L2(f,l),f);return u={useFetchStreams:n,...u},p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),qn(a0,o0,e),qn(a0,o0,"esm2020")})();const tS="@firebase/installations",Jp="0.6.19";/**
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
 */const nS=1e4,iS=`w:${Jp}`,rS="FIS_v2",LD="https://firebaseinstallations.googleapis.com/v1",PD=3600*1e3,UD="installations",zD="Installations";/**
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
 */const jD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ia=new sa(UD,zD,jD);function sS(r){return r instanceof Ui&&r.code.includes("request-failed")}/**
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
 */function aS({projectId:r}){return`${LD}/projects/${r}/installations`}function oS(r){return{token:r.token,requestStatus:2,expiresIn:qD(r.expiresIn),creationTime:Date.now()}}async function lS(r,e){const s=(await e.json()).error;return ia.create("request-failed",{requestName:r,serverCode:s.code,serverMessage:s.message,serverStatus:s.status})}function uS({apiKey:r}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r})}function BD(r,{refreshToken:e}){const n=uS(r);return n.append("Authorization",HD(e)),n}async function cS(r){const e=await r();return e.status>=500&&e.status<600?r():e}function qD(r){return Number(r.replace("s","000"))}function HD(r){return`${rS} ${r}`}/**
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
 */async function FD({appConfig:r,heartbeatServiceProvider:e},{fid:n}){const s=aS(r),l=uS(r),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const f={fid:n,authVersion:rS,appId:r.appId,sdkVersion:iS},p={method:"POST",headers:l,body:JSON.stringify(f)},y=await cS(()=>fetch(s,p));if(y.ok){const g=await y.json();return{fid:g.fid||n,registrationStatus:2,refreshToken:g.refreshToken,authToken:oS(g.authToken)}}else throw await lS("Create Installation",y)}/**
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
 */function hS(r){return new Promise(e=>{setTimeout(e,r)})}/**
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
 */function GD(r){return btoa(String.fromCharCode(...r)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const KD=/^[cdef][\w-]{21}$/,Jm="";function YD(){try{const r=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(r),r[0]=112+r[0]%16;const n=QD(r);return KD.test(n)?n:Jm}catch{return Jm}}function QD(r){return GD(r).substr(0,22)}/**
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
 */function Zh(r){return`${r.appName}!${r.appId}`}/**
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
 */const fS=new Map;function dS(r,e){const n=Zh(r);mS(n,e),XD(n,e)}function mS(r,e){const n=fS.get(r);if(n)for(const s of n)s(e)}function XD(r,e){const n=$D();n&&n.postMessage({key:r,fid:e}),JD()}let Ys=null;function $D(){return!Ys&&"BroadcastChannel"in self&&(Ys=new BroadcastChannel("[Firebase] FID Change"),Ys.onmessage=r=>{mS(r.data.key,r.data.fid)}),Ys}function JD(){fS.size===0&&Ys&&(Ys.close(),Ys=null)}/**
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
 */const ZD="firebase-installations-database",WD=1,ra="firebase-installations-store";let _m=null;function Zp(){return _m||(_m=Ch(ZD,WD,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(ra)}}})),_m}async function Rh(r,e){const n=Zh(r),l=(await Zp()).transaction(ra,"readwrite"),u=l.objectStore(ra),f=await u.get(n);return await u.put(e,n),await l.done,(!f||f.fid!==e.fid)&&dS(r,e.fid),e}async function pS(r){const e=Zh(r),s=(await Zp()).transaction(ra,"readwrite");await s.objectStore(ra).delete(e),await s.done}async function Wh(r,e){const n=Zh(r),l=(await Zp()).transaction(ra,"readwrite"),u=l.objectStore(ra),f=await u.get(n),p=e(f);return p===void 0?await u.delete(n):await u.put(p,n),await l.done,p&&(!f||f.fid!==p.fid)&&dS(r,p.fid),p}/**
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
 */async function Wp(r){let e;const n=await Wh(r.appConfig,s=>{const l=eO(s),u=tO(r,l);return e=u.registrationPromise,u.installationEntry});return n.fid===Jm?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function eO(r){const e=r||{fid:YD(),registrationStatus:0};return gS(e)}function tO(r,e){if(e.registrationStatus===0){if(!navigator.onLine){const l=Promise.reject(ia.create("app-offline"));return{installationEntry:e,registrationPromise:l}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},s=nO(r,n);return{installationEntry:n,registrationPromise:s}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:iO(r)}:{installationEntry:e}}async function nO(r,e){try{const n=await FD(r,e);return Rh(r.appConfig,n)}catch(n){throw sS(n)&&n.customData.serverCode===409?await pS(r.appConfig):await Rh(r.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function iO(r){let e=await h0(r.appConfig);for(;e.registrationStatus===1;)await hS(100),e=await h0(r.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:s}=await Wp(r);return s||n}return e}function h0(r){return Wh(r,e=>{if(!e)throw ia.create("installation-not-found");return gS(e)})}function gS(r){return rO(r)?{fid:r.fid,registrationStatus:0}:r}function rO(r){return r.registrationStatus===1&&r.registrationTime+nS<Date.now()}/**
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
 */async function sO({appConfig:r,heartbeatServiceProvider:e},n){const s=aO(r,n),l=BD(r,n),u=e.getImmediate({optional:!0});if(u){const g=await u.getHeartbeatsHeader();g&&l.append("x-firebase-client",g)}const f={installation:{sdkVersion:iS,appId:r.appId}},p={method:"POST",headers:l,body:JSON.stringify(f)},y=await cS(()=>fetch(s,p));if(y.ok){const g=await y.json();return oS(g)}else throw await lS("Generate Auth Token",y)}function aO(r,{fid:e}){return`${aS(r)}/${e}/authTokens:generate`}/**
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
 */async function eg(r,e=!1){let n;const s=await Wh(r.appConfig,u=>{if(!yS(u))throw ia.create("not-registered");const f=u.authToken;if(!e&&uO(f))return u;if(f.requestStatus===1)return n=oO(r,e),u;{if(!navigator.onLine)throw ia.create("app-offline");const p=hO(u);return n=lO(r,p),p}});return n?await n:s.authToken}async function oO(r,e){let n=await f0(r.appConfig);for(;n.authToken.requestStatus===1;)await hS(100),n=await f0(r.appConfig);const s=n.authToken;return s.requestStatus===0?eg(r,e):s}function f0(r){return Wh(r,e=>{if(!yS(e))throw ia.create("not-registered");const n=e.authToken;return fO(n)?{...e,authToken:{requestStatus:0}}:e})}async function lO(r,e){try{const n=await sO(r,e),s={...e,authToken:n};return await Rh(r.appConfig,s),n}catch(n){if(sS(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await pS(r.appConfig);else{const s={...e,authToken:{requestStatus:0}};await Rh(r.appConfig,s)}throw n}}function yS(r){return r!==void 0&&r.registrationStatus===2}function uO(r){return r.requestStatus===2&&!cO(r)}function cO(r){const e=Date.now();return e<r.creationTime||r.creationTime+r.expiresIn<e+PD}function hO(r){const e={requestStatus:1,requestTime:Date.now()};return{...r,authToken:e}}function fO(r){return r.requestStatus===1&&r.requestTime+nS<Date.now()}/**
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
 */async function dO(r){const e=r,{installationEntry:n,registrationPromise:s}=await Wp(e);return s?s.catch(console.error):eg(e).catch(console.error),n.fid}/**
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
 */async function mO(r,e=!1){const n=r;return await pO(n),(await eg(n,e)).token}async function pO(r){const{registrationPromise:e}=await Wp(r);e&&await e}/**
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
 */function gO(r){if(!r||!r.options)throw vm("App Configuration");if(!r.name)throw vm("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!r.options[n])throw vm(n);return{appName:r.name,projectId:r.options.projectId,apiKey:r.options.apiKey,appId:r.options.appId}}function vm(r){return ia.create("missing-app-config-values",{valueName:r})}/**
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
 */const _S="installations",yO="installations-internal",_O=r=>{const e=r.getProvider("app").getImmediate(),n=gO(e),s=go(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:s,_delete:()=>Promise.resolve()}},vO=r=>{const e=r.getProvider("app").getImmediate(),n=go(e,_S).getImmediate();return{getId:()=>dO(n),getToken:l=>mO(n,l)}};function EO(){Li(new ri(_S,_O,"PUBLIC")),Li(new ri(yO,vO,"PRIVATE"))}EO();qn(tS,Jp);qn(tS,Jp,"esm2020");/**
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
 */const TO="/firebase-messaging-sw.js",AO="/firebase-cloud-messaging-push-scope",vS="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4",SO="https://fcmregistrations.googleapis.com/v1",ES="google.c.a.c_id",bO="google.c.a.c_l",wO="google.c.a.ts",RO="google.c.a.e",d0=1e4;var m0;(function(r){r[r.DATA_MESSAGE=1]="DATA_MESSAGE",r[r.DISPLAY_NOTIFICATION=3]="DISPLAY_NOTIFICATION"})(m0||(m0={}));/**
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
 */var eu;(function(r){r.PUSH_RECEIVED="push-received",r.NOTIFICATION_CLICKED="notification-clicked"})(eu||(eu={}));/**
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
 */function rr(r){const e=new Uint8Array(r);return btoa(String.fromCharCode(...e)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function IO(r){const e="=".repeat((4-r.length%4)%4),n=(r+e).replace(/\-/g,"+").replace(/_/g,"/"),s=atob(n),l=new Uint8Array(s.length);for(let u=0;u<s.length;++u)l[u]=s.charCodeAt(u);return l}/**
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
 */const Em="fcm_token_details_db",CO=5,p0="fcm_token_object_Store";async function NO(r){if("databases"in indexedDB&&!(await indexedDB.databases()).map(u=>u.name).includes(Em))return null;let e=null;return(await Ch(Em,CO,{upgrade:async(s,l,u,f)=>{if(l<2||!s.objectStoreNames.contains(p0))return;const p=f.objectStore(p0),y=await p.index("fcmSenderId").get(r);if(await p.clear(),!!y){if(l===2){const g=y;if(!g.auth||!g.p256dh||!g.endpoint)return;e={token:g.fcmToken,createTime:g.createTime??Date.now(),subscriptionOptions:{auth:g.auth,p256dh:g.p256dh,endpoint:g.endpoint,swScope:g.swScope,vapidKey:typeof g.vapidKey=="string"?g.vapidKey:rr(g.vapidKey)}}}else if(l===3){const g=y;e={token:g.fcmToken,createTime:g.createTime,subscriptionOptions:{auth:rr(g.auth),p256dh:rr(g.p256dh),endpoint:g.endpoint,swScope:g.swScope,vapidKey:rr(g.vapidKey)}}}else if(l===4){const g=y;e={token:g.fcmToken,createTime:g.createTime,subscriptionOptions:{auth:rr(g.auth),p256dh:rr(g.p256dh),endpoint:g.endpoint,swScope:g.swScope,vapidKey:rr(g.vapidKey)}}}}}})).close(),await lm(Em),await lm("fcm_vapid_details_db"),await lm("undefined"),DO(e)?e:null}function DO(r){if(!r||!r.subscriptionOptions)return!1;const{subscriptionOptions:e}=r;return typeof r.createTime=="number"&&r.createTime>0&&typeof r.token=="string"&&r.token.length>0&&typeof e.auth=="string"&&e.auth.length>0&&typeof e.p256dh=="string"&&e.p256dh.length>0&&typeof e.endpoint=="string"&&e.endpoint.length>0&&typeof e.swScope=="string"&&e.swScope.length>0&&typeof e.vapidKey=="string"&&e.vapidKey.length>0}/**
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
 */const OO="firebase-messaging-database",xO=1,tu="firebase-messaging-store";let Tm=null;function TS(){return Tm||(Tm=Ch(OO,xO,{upgrade:(r,e)=>{switch(e){case 0:r.createObjectStore(tu)}}})),Tm}async function VO(r){const e=AS(r),s=await(await TS()).transaction(tu).objectStore(tu).get(e);if(s)return s;{const l=await NO(r.appConfig.senderId);if(l)return await tg(r,l),l}}async function tg(r,e){const n=AS(r),l=(await TS()).transaction(tu,"readwrite");return await l.objectStore(tu).put(e,n),await l.done,e}function AS({appConfig:r}){return r.appId}/**
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
 */const MO={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"only-available-in-window":"This method is available in a Window context.","only-available-in-sw":"This method is available in a service worker context.","permission-default":"The notification permission was not granted and dismissed instead.","permission-blocked":"The notification permission was not granted and blocked instead.","unsupported-browser":"This browser doesn't support the API's required to use the Firebase SDK.","indexed-db-unsupported":"This browser doesn't support indexedDb.open() (ex. Safari iFrame, Firefox Private Browsing, etc)","failed-service-worker-registration":"We are unable to register the default service worker. {$browserErrorMessage}","token-subscribe-failed":"A problem occurred while subscribing the user to FCM: {$errorInfo}","token-subscribe-no-token":"FCM returned no token when subscribing the user to push.","token-unsubscribe-failed":"A problem occurred while unsubscribing the user from FCM: {$errorInfo}","token-update-failed":"A problem occurred while updating the user from FCM: {$errorInfo}","token-update-no-token":"FCM returned no token when updating the user to push.","use-sw-after-get-token":"The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.","invalid-sw-registration":"The input to useServiceWorker() must be a ServiceWorkerRegistration.","invalid-bg-handler":"The input to setBackgroundMessageHandler() must be a function.","invalid-vapid-key":"The public VAPID key must be a string.","use-vapid-key-after-get-token":"The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used."},rn=new sa("messaging","Messaging",MO);/**
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
 */async function kO(r,e){const n=await ig(r),s=SS(e),l={method:"POST",headers:n,body:JSON.stringify(s)};let u;try{u=await(await fetch(ng(r.appConfig),l)).json()}catch(f){throw rn.create("token-subscribe-failed",{errorInfo:f==null?void 0:f.toString()})}if(u.error){const f=u.error.message;throw rn.create("token-subscribe-failed",{errorInfo:f})}if(!u.token)throw rn.create("token-subscribe-no-token");return u.token}async function LO(r,e){const n=await ig(r),s=SS(e.subscriptionOptions),l={method:"PATCH",headers:n,body:JSON.stringify(s)};let u;try{u=await(await fetch(`${ng(r.appConfig)}/${e.token}`,l)).json()}catch(f){throw rn.create("token-update-failed",{errorInfo:f==null?void 0:f.toString()})}if(u.error){const f=u.error.message;throw rn.create("token-update-failed",{errorInfo:f})}if(!u.token)throw rn.create("token-update-no-token");return u.token}async function PO(r,e){const s={method:"DELETE",headers:await ig(r)};try{const u=await(await fetch(`${ng(r.appConfig)}/${e}`,s)).json();if(u.error){const f=u.error.message;throw rn.create("token-unsubscribe-failed",{errorInfo:f})}}catch(l){throw rn.create("token-unsubscribe-failed",{errorInfo:l==null?void 0:l.toString()})}}function ng({projectId:r}){return`${SO}/projects/${r}/registrations`}async function ig({appConfig:r,installations:e}){const n=await e.getToken();return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":r.apiKey,"x-goog-firebase-installations-auth":`FIS ${n}`})}function SS({p256dh:r,auth:e,endpoint:n,vapidKey:s}){const l={web:{endpoint:n,auth:e,p256dh:r}};return s!==vS&&(l.web.applicationPubKey=s),l}/**
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
 */const UO=10080*60*1e3;async function zO(r){const e=await BO(r.swRegistration,r.vapidKey),n={vapidKey:r.vapidKey,swScope:r.swRegistration.scope,endpoint:e.endpoint,auth:rr(e.getKey("auth")),p256dh:rr(e.getKey("p256dh"))},s=await VO(r.firebaseDependencies);if(s){if(qO(s.subscriptionOptions,n))return Date.now()>=s.createTime+UO?jO(r,{token:s.token,createTime:Date.now(),subscriptionOptions:n}):s.token;try{await PO(r.firebaseDependencies,s.token)}catch(l){console.warn(l)}return g0(r.firebaseDependencies,n)}else return g0(r.firebaseDependencies,n)}async function jO(r,e){try{const n=await LO(r.firebaseDependencies,e),s={...e,token:n,createTime:Date.now()};return await tg(r.firebaseDependencies,s),n}catch(n){throw n}}async function g0(r,e){const s={token:await kO(r,e),createTime:Date.now(),subscriptionOptions:e};return await tg(r,s),s.token}async function BO(r,e){const n=await r.pushManager.getSubscription();return n||r.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:IO(e)})}function qO(r,e){const n=e.vapidKey===r.vapidKey,s=e.endpoint===r.endpoint,l=e.auth===r.auth,u=e.p256dh===r.p256dh;return n&&s&&l&&u}/**
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
 */function y0(r){const e={from:r.from,collapseKey:r.collapse_key,messageId:r.fcmMessageId};return HO(e,r),FO(e,r),GO(e,r),e}function HO(r,e){if(!e.notification)return;r.notification={};const n=e.notification.title;n&&(r.notification.title=n);const s=e.notification.body;s&&(r.notification.body=s);const l=e.notification.image;l&&(r.notification.image=l);const u=e.notification.icon;u&&(r.notification.icon=u)}function FO(r,e){e.data&&(r.data=e.data)}function GO(r,e){var l,u,f,p;if(!e.fcmOptions&&!((l=e.notification)!=null&&l.click_action))return;r.fcmOptions={};const n=((u=e.fcmOptions)==null?void 0:u.link)??((f=e.notification)==null?void 0:f.click_action);n&&(r.fcmOptions.link=n);const s=(p=e.fcmOptions)==null?void 0:p.analytics_label;s&&(r.fcmOptions.analyticsLabel=s)}/**
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
 */function KO(r){return typeof r=="object"&&!!r&&ES in r}/**
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
 */function YO(r){if(!r||!r.options)throw Am("App Configuration Object");if(!r.name)throw Am("App Name");const e=["projectId","apiKey","appId","messagingSenderId"],{options:n}=r;for(const s of e)if(!n[s])throw Am(s);return{appName:r.name,projectId:n.projectId,apiKey:n.apiKey,appId:n.appId,senderId:n.messagingSenderId}}function Am(r){return rn.create("missing-app-config-values",{valueName:r})}/**
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
 */class QO{constructor(e,n,s){this.deliveryMetricsExportedToBigQueryEnabled=!1,this.onBackgroundMessageHandler=null,this.onMessageHandler=null,this.logEvents=[],this.isLogServiceStarted=!1;const l=YO(e);this.firebaseDependencies={app:e,appConfig:l,installations:n,analyticsProvider:s}}_delete(){return Promise.resolve()}}/**
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
 */async function XO(r){try{r.swRegistration=await navigator.serviceWorker.register(TO,{scope:AO}),r.swRegistration.update().catch(()=>{}),await $O(r.swRegistration)}catch(e){throw rn.create("failed-service-worker-registration",{browserErrorMessage:e==null?void 0:e.message})}}async function $O(r){return new Promise((e,n)=>{const s=setTimeout(()=>n(new Error(`Service worker not registered after ${d0} ms`)),d0),l=r.installing||r.waiting;r.active?(clearTimeout(s),e()):l?l.onstatechange=u=>{var f;((f=u.target)==null?void 0:f.state)==="activated"&&(l.onstatechange=null,clearTimeout(s),e())}:(clearTimeout(s),n(new Error("No incoming service worker found.")))})}/**
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
 */async function JO(r,e){if(!e&&!r.swRegistration&&await XO(r),!(!e&&r.swRegistration)){if(!(e instanceof ServiceWorkerRegistration))throw rn.create("invalid-sw-registration");r.swRegistration=e}}/**
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
 */async function ZO(r,e){e?r.vapidKey=e:r.vapidKey||(r.vapidKey=vS)}/**
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
 */async function bS(r,e){if(!navigator)throw rn.create("only-available-in-window");if(Notification.permission==="default"&&await Notification.requestPermission(),Notification.permission!=="granted")throw rn.create("permission-blocked");return await ZO(r,e==null?void 0:e.vapidKey),await JO(r,e==null?void 0:e.serviceWorkerRegistration),zO(r)}/**
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
 */async function WO(r,e,n){const s=ex(e);(await r.firebaseDependencies.analyticsProvider.get()).logEvent(s,{message_id:n[ES],message_name:n[bO],message_time:n[wO],message_device_time:Math.floor(Date.now()/1e3)})}function ex(r){switch(r){case eu.NOTIFICATION_CLICKED:return"notification_open";case eu.PUSH_RECEIVED:return"notification_foreground";default:throw new Error}}/**
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
 */async function tx(r,e){const n=e.data;if(!n.isFirebaseMessaging)return;r.onMessageHandler&&n.messageType===eu.PUSH_RECEIVED&&(typeof r.onMessageHandler=="function"?r.onMessageHandler(y0(n)):r.onMessageHandler.next(y0(n)));const s=n.data;KO(s)&&s[RO]==="1"&&await WO(r,n.messageType,s)}const _0="@firebase/messaging",v0="0.12.23";/**
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
 */const nx=r=>{const e=new QO(r.getProvider("app").getImmediate(),r.getProvider("installations-internal").getImmediate(),r.getProvider("analytics-internal"));return navigator.serviceWorker.addEventListener("message",n=>tx(e,n)),e},ix=r=>{const e=r.getProvider("messaging").getImmediate();return{getToken:s=>bS(e,s)}};function rx(){Li(new ri("messaging",nx,"PUBLIC")),Li(new ri("messaging-internal",ix,"PRIVATE")),qn(_0,v0),qn(_0,v0,"esm2020")}/**
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
 */async function sx(){try{await k0()}catch{return!1}return typeof window<"u"&&M0()&&z1()&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}/**
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
 */function ax(r=ip()){return sx().then(e=>{if(!e)throw rn.create("unsupported-browser")},e=>{throw rn.create("indexed-db-unsupported")}),go(yt(r),"messaging").getImmediate()}async function ox(r,e){return r=yt(r),bS(r,e)}rx();var lx="firebase",ux="12.9.0";/**
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
 */qn(lx,ux,"app");const cx={apiKey:"AIzaSyCNQaTYYDvt-ETlEZ7b8CiK1QG4vGynJDo",authDomain:"cabconnect-b75f6.firebaseapp.com",projectId:"cabconnect-b75f6",storageBucket:"cabconnect-b75f6.firebasestorage.app",messagingSenderId:"837263009325",appId:"1:837263009325:web:10336c1678738b6a593aa4",measurementId:"G-FPY7FZKFX4"},rg=U0(cx),wn=vD(rg,"cabconnect"),Rn=h2(rg),hx=ax(rg),fx="BNbalcEHKDYuy5PgNYsGCe7oEPxNg1RCe3QVfus4FfuRNGvw0RehK8T_YK7K-k8twZxwtR9VqTM0zpO5WWguXwE";async function dx(){try{if(typeof Notification<"u"&&await Notification.requestPermission()!=="granted"){console.warn("Notifications permission not granted");return}const r=await navigator.serviceWorker.register("/cabConnect/firebase-messaging-sw.js",{scope:"/cabConnect/"}),e=await ox(hx,{vapidKey:fx,serviceWorkerRegistration:r});e&&Rn.currentUser&&await wh(Mi(wn,"users",Rn.currentUser.uid),{fcmToken:e})}catch(r){console.error("Failed to register FCM token:",r)}}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wS=(...r)=>r.filter((e,n,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,s)=>s?s.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=r=>{const e=px(r);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var gx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=r=>{for(const e in r)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=we.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:f,...p},y)=>we.createElement("svg",{ref:y,...gx,width:e,height:e,stroke:r,strokeWidth:s?Number(n)*24/Number(e):n,className:wS("lucide",l),...!u&&!yx(p)&&{"aria-hidden":"true"},...p},[...f.map(([g,T])=>we.createElement(g,T)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=(r,e)=>{const n=we.forwardRef(({className:s,...l},u)=>we.createElement(_x,{ref:u,iconNode:e,className:wS(`lucide-${mx(E0(r))}`,`lucide-${r}`,s),...l}));return n.displayName=E0(r),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]],T0=Wt("car",vx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ex=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],RS=Wt("clock",Ex);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tx=[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]],IS=Wt("key-round",Tx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ax=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],A0=Wt("loader-circle",Ax);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],CS=Wt("lock",Sx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]],NS=Wt("log-out",bx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],Zm=Wt("mail",wx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],Wm=Wt("map-pin",Rx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ix=[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]],Cx=Wt("navigation",Ix);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],Dx=Wt("phone",Nx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ox=[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]],xx=Wt("power",Ox);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Mx=Wt("send",Vx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],S0=Wt("shield-check",kx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lx=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]],Px=Wt("user-x",Lx);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ux=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],zx=Wt("user",Ux);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]],b0=Wt("users",jx),Bx=({onLogout:r})=>{const[e,n]=we.useState(!1),[s,l]=we.useState([]),[u,f]=we.useState(!0);we.useEffect(()=>{const g=Rn.currentUser;if(!g)return;dx();const T=Mi(wn,"users",g.uid),S=$m(T,b=>{if(b.exists()){const q=b.data();n(!!q.available)}else n(!1);f(!1)});return()=>S()},[]),we.useEffect(()=>{const g=Rn.currentUser;if(!g)return;const T=Qp(Th(wn,"requests"),DD("timestamp","desc")),S=$m(T,b=>{const q=b.docs.map(Z=>({id:Z.id,...Z.data()})).filter(Z=>Z.status==="pending"||Z.status==="accepted"&&Z.driverId===g.uid);l(q)});return()=>S()},[]);const p=async()=>{try{const g=Rn.currentUser;if(!g)throw new Error("Not authenticated");const T=Mi(wn,"users",g.uid);await wh(T,{available:!e,lastAvailableUpdate:Sh()})}catch(g){console.error("Error toggling availability:",g),alert("Failed to update availability. Check internet connection.")}},y=g=>g?(g.toDate?g.toDate():new Date(g)).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"}):"";return u?k.jsx("div",{className:"min-h-screen flex items-center justify-center text-gray-500",children:"Connecting to HQ..."}):k.jsxs("div",{className:"min-h-screen bg-gray-100 flex flex-col",children:[k.jsxs("header",{className:"bg-white shadow-sm p-4 flex justify-between items-center sticky top-0 z-10",children:[k.jsx("h1",{className:"text-xl font-bold text-gray-800",children:"Driver Console"}),k.jsx("button",{onClick:r,className:"text-gray-500 hover:text-red-500 transition-colors",children:k.jsx(NS,{size:24})})]}),k.jsxs("main",{className:"flex-1 p-4 max-w-2xl mx-auto w-full",children:[k.jsx("div",{className:"mb-8",children:k.jsxs("button",{onClick:p,className:`w-full py-8 rounded-3xl shadow-lg flex flex-col items-center justify-center transition-all duration-300 transform active:scale-95 ${e?"bg-green-500 text-white hover:bg-green-600 shadow-green-200":"bg-gray-800 text-gray-300 hover:bg-gray-900 shadow-gray-400"}`,children:[k.jsx(xx,{size:48,className:`mb-2 ${e?"text-white":"text-gray-500"}`}),k.jsx("span",{className:"text-2xl font-bold uppercase tracking-wider",children:e?"You are Available":"You are Unavailable"}),k.jsx("span",{className:"text-sm opacity-80 mt-1",children:e?"Receiving new requests":"Tap to start shift"})]})}),k.jsxs("div",{className:"space-y-4",children:[k.jsxs("h2",{className:"text-lg font-semibold text-gray-700 flex items-center gap-2",children:[k.jsx(RS,{size:20}),"Ride Requests"]}),s.length===0?k.jsx("div",{className:"bg-white rounded-xl p-8 text-center text-gray-400",children:"No requests."}):s.map(g=>k.jsxs("div",{className:`bg-white rounded-xl p-4 shadow-sm border-l-4 ${g.status==="pending"?"border-blue-500":"border-green-500"} animate-fade-in`,children:[k.jsxs("div",{className:"flex justify-between items-start mb-3",children:[k.jsx("h3",{className:"font-bold text-lg text-gray-800",children:g.customerName}),k.jsx("span",{className:"text-xs font-medium bg-gray-100 text-gray-500 px-2 py-1 rounded-full",children:y(g.timestamp)})]}),k.jsxs("div",{className:"space-y-2",children:[k.jsxs("div",{className:"flex items-start gap-3 text-gray-600",children:[k.jsx(Wm,{className:"w-5 h-5 text-green-500 mt-0.5 shrink-0"}),k.jsxs("div",{children:[k.jsx("span",{className:"text-xs text-gray-400 uppercase font-bold block",children:"Pickup"}),g.pickup]})]}),k.jsxs("div",{className:"flex items-start gap-3 text-gray-600",children:[k.jsx(Wm,{className:"w-5 h-5 text-red-500 mt-0.5 shrink-0"}),k.jsxs("div",{children:[k.jsx("span",{className:"text-xs text-gray-400 uppercase font-bold block",children:"Dropoff"}),g.dropoff]})]}),k.jsxs("div",{className:"flex items-center gap-3 text-gray-600 pt-2 border-t mt-2",children:[k.jsx(Dx,{className:"w-4 h-4 text-gray-400"}),k.jsx("a",{href:`tel:${g.phone}`,className:"text-blue-600 hover:underline",children:g.phone})]})]}),g.status==="pending"?k.jsx("div",{className:"mt-4 flex justify-end",children:k.jsx("button",{className:"bg-blue-600 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-700 transition",onClick:async()=>{const T=Rn.currentUser;if(!T)return alert("Not authenticated");await wh(Mi(wn,"requests",g.id),{status:"accepted",driverId:T.uid,acceptedAt:Sh()}),alert("Ride accepted!")},children:"Accept Ride"})}):k.jsx("div",{className:"mt-4 text-green-700 font-semibold text-right",children:"Ride accepted by you"})]},g.id))]})]})]})},qx=({onDriverLoginClick:r})=>{const[e,n]=we.useState(null),[s,l]=we.useState(!0),[u,f]=we.useState(!1),[p,y]=we.useState({name:"",phone:"",pickup:"",dropoff:""});we.useEffect(()=>{(async()=>{const b=Qp(Th(wn,"users"),bh("role","==","driver"),bh("available","==",!0)),q=await xD(b);n(!q.empty),l(!1)})()},[]);const g=async S=>{if(S.preventDefault(),!(!p.name||!p.pickup||!p.dropoff||!p.phone)){f(!0);try{await kD(Th(wn,"requests"),{customerName:p.name,pickup:p.pickup,dropoff:p.dropoff,phone:p.phone,status:"pending",timestamp:new Date}),alert("Your ride request has been submitted! You will be notified when a driver accepts."),y({name:"",phone:"",pickup:"",dropoff:""})}catch(b){console.error("Booking failed:",b),alert("Something went wrong. Please try again.")}finally{f(!1)}}},T=S=>{y({...p,[S.target.name]:S.target.value})};return s?k.jsx("div",{className:"min-h-screen bg-slate-50 flex items-center justify-center",children:k.jsx(A0,{className:"animate-spin text-emerald-600 w-10 h-10"})}):e?k.jsxs("div",{className:"min-h-screen bg-slate-50 flex flex-col",children:[k.jsx("header",{className:"bg-emerald-600 text-white p-6 shadow-lg rounded-b-[2.5rem] relative z-10",children:k.jsxs("div",{className:"max-w-md mx-auto",children:[k.jsxs("div",{className:"flex items-center gap-3 mb-2",children:[k.jsx(T0,{className:"w-8 h-8"}),k.jsx("h1",{className:"text-2xl font-bold",children:"CabConnect"})]}),k.jsx("p",{className:"text-emerald-100 text-sm",children:"Safe, reliable rides at your fingertips."})]})}),k.jsx("main",{className:"flex-1 -mt-8 p-4",children:k.jsx("div",{className:"max-w-md mx-auto",children:k.jsxs("form",{onSubmit:g,className:"bg-white rounded-3xl shadow-xl p-6 space-y-5",children:[k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1 ml-1",children:"Your Name"}),k.jsx("input",{type:"text",name:"name",required:!0,className:"w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all",placeholder:"John Doe",value:p.name,onChange:T})]}),k.jsxs("div",{children:[k.jsx("label",{className:"block text-sm font-medium text-gray-700 mb-1 ml-1",children:"Phone Number"}),k.jsx("input",{type:"tel",name:"phone",required:!0,className:"w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all",placeholder:"0123456789",value:p.phone,onChange:T})]}),k.jsxs("div",{className:"relative",children:[k.jsx("div",{className:"absolute left-4 top-10 bottom-4 w-0.5 bg-gray-200"}),k.jsxs("div",{className:"relative mb-4",children:[k.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-1 ml-1",children:[k.jsx(Cx,{className:"w-4 h-4 text-emerald-600"})," Pickup Location"]}),k.jsx("input",{type:"text",name:"pickup",required:!0,className:"w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all",placeholder:"Current Location / Address",value:p.pickup,onChange:T})]}),k.jsxs("div",{className:"relative",children:[k.jsxs("label",{className:"flex items-center gap-2 text-sm font-medium text-gray-700 mb-1 ml-1",children:[k.jsx(Wm,{className:"w-4 h-4 text-red-500"})," Drop-off"]}),k.jsx("input",{type:"text",name:"dropoff",required:!0,className:"w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all",placeholder:"Where to?",value:p.dropoff,onChange:T})]})]}),k.jsx("button",{type:"submit",disabled:u,className:"w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-emerald-200 transform transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4",children:u?k.jsxs(k.Fragment,{children:[k.jsx(A0,{className:"animate-spin w-5 h-5"})," Processing..."]}):k.jsxs(k.Fragment,{children:[k.jsx(Mx,{className:"w-5 h-5"})," Request Ride"]})}),k.jsx("p",{className:"text-xs text-center text-gray-400 mt-4",children:"By requesting a ride, you agree to share your details with the driver so they can contact you."})]})})}),k.jsx("footer",{className:"p-4 text-center",children:k.jsx("button",{onClick:r,className:"text-gray-300 text-xs hover:text-gray-500",children:"Partner Login"})})]}):k.jsxs("div",{className:"min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6 text-center",children:[k.jsxs("div",{className:"bg-white rounded-3xl p-8 shadow-xl max-w-md w-full",children:[k.jsx("div",{className:"bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6",children:k.jsx(T0,{className:"w-10 h-10 text-gray-400"})}),k.jsx("h2",{className:"text-2xl font-bold text-gray-800 mb-2",children:"Service Unavailable"}),k.jsx("p",{className:"text-gray-500 mb-8",children:"Our drivers are currently unavailable. Please check back later or call us directly if it's urgent."}),k.jsx("div",{className:"h-1 w-24 bg-gray-200 mx-auto rounded-full"})]}),k.jsx("button",{onClick:r,className:"mt-8 text-gray-400 text-sm hover:text-gray-600 underline",children:"Driver Login"})]})},Hx=({onSuccess:r,onPending:e,onCancel:n})=>{const[s,l]=we.useState(""),[u,f]=we.useState(""),[p,y]=we.useState(!1),[g,T]=we.useState(null),S=async b=>{var q,Z;b.preventDefault(),T(null),y(!0);try{const J=await ZR(Rn,s.trim(),u),W=await WA(Mi(wn,"users",J.user.uid)),he=W.exists()?W.data():null;if(!he||he.role!=="driver")throw await cp(Rn),new Error("This account is not a driver account.");if(he.approved===!1){e();return}r()}catch(J){const W=(q=J==null?void 0:J.message)!=null&&q.includes("auth/invalid-credential")?"Incorrect email or password.":(Z=J==null?void 0:J.message)!=null&&Z.includes("auth/too-many-requests")?"Too many attempts. Try again later.":(J==null?void 0:J.message)||"Login failed.";T(W)}finally{y(!1)}};return k.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 p-4",children:k.jsxs("div",{className:"w-full max-w-md bg-white rounded-2xl shadow p-6",children:[k.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[k.jsx(CS,{className:"w-5 h-5"}),k.jsx("h1",{className:"text-xl font-semibold",children:"Driver Login"})]}),k.jsx("p",{className:"text-sm text-gray-600 mb-6",children:"Sign in to access the Driver Dashboard."}),k.jsxs("form",{onSubmit:S,className:"space-y-4",children:[k.jsxs("label",{className:"block",children:[k.jsxs("span",{className:"text-sm text-gray-700 flex items-center gap-2",children:[k.jsx(Zm,{className:"w-4 h-4"})," Email"]}),k.jsx("input",{className:"mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring",type:"email",value:s,onChange:b=>l(b.target.value),placeholder:"driver@example.com",required:!0,autoComplete:"email"})]}),k.jsxs("label",{className:"block",children:[k.jsxs("span",{className:"text-sm text-gray-700 flex items-center gap-2",children:[k.jsx(IS,{className:"w-4 h-4"})," Password"]}),k.jsx("input",{className:"mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring",type:"password",value:u,onChange:b=>f(b.target.value),placeholder:"••••••••",required:!0,autoComplete:"current-password"})]}),g&&k.jsx("div",{className:"rounded-xl bg-red-50 border border-red-200 text-red-700 px-3 py-2 text-sm",children:g}),k.jsx("button",{type:"submit",disabled:p,className:"w-full rounded-xl bg-black text-white py-2 font-medium disabled:opacity-60",children:p?"Signing in…":"Sign in"}),k.jsx("button",{type:"button",onClick:n,className:"w-full rounded-xl border border-gray-200 py-2 font-medium",children:"Back"}),k.jsx("button",{type:"button",onClick:()=>window.dispatchEvent(new CustomEvent("driver-register")),className:"w-full rounded-xl border border-blue-200 py-2 font-medium text-blue-700 mt-2",children:"Register as Driver"})]}),k.jsxs("div",{className:"mt-6 text-xs text-gray-500",children:[k.jsxs("p",{children:[k.jsx("strong",{children:"Tip:"})," Create your driver users in Firebase Auth, then add a Firestore profile doc:"]}),k.jsx("pre",{className:"mt-2 bg-gray-50 border border-gray-200 rounded-xl p-3 overflow-auto",children:`users/{uid}
{
  role: "driver",
  displayName: "Driver Name"
}`})]})]})})},Fx=({onSuccess:r,onCancel:e})=>{const[n,s]=we.useState(""),[l,u]=we.useState(""),[f,p]=we.useState(""),[y,g]=we.useState(""),[T,S]=we.useState(!1),[b,q]=we.useState(null),Z=async J=>{J.preventDefault(),q(null),S(!0);try{const W=await JR(Rn,n.trim(),l);await VD(Mi(wn,"users",W.user.uid),{role:"driver",approved:!1,displayName:f,phone:y,createdAt:Sh()}),r()}catch(W){q((W==null?void 0:W.message)||"Registration failed.")}finally{S(!1)}};return k.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 p-4",children:k.jsxs("div",{className:"w-full max-w-md bg-white rounded-2xl shadow p-6",children:[k.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[k.jsx(CS,{className:"w-5 h-5"}),k.jsx("h1",{className:"text-xl font-semibold",children:"Register as Driver"})]}),k.jsxs("form",{onSubmit:Z,className:"space-y-4",children:[k.jsxs("label",{className:"block",children:[k.jsxs("span",{className:"text-sm text-gray-700 flex items-center gap-2",children:[k.jsx(zx,{className:"w-4 h-4"})," Name"]}),k.jsx("input",{className:"mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring",type:"text",value:f,onChange:J=>p(J.target.value),placeholder:"Driver Name",required:!0})]}),k.jsxs("label",{className:"block",children:[k.jsxs("span",{className:"text-sm text-gray-700 flex items-center gap-2",children:[k.jsx(Zm,{className:"w-4 h-4"})," Email"]}),k.jsx("input",{className:"mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring",type:"email",value:n,onChange:J=>s(J.target.value),placeholder:"driver@example.com",required:!0,autoComplete:"email"})]}),k.jsxs("label",{className:"block",children:[k.jsxs("span",{className:"text-sm text-gray-700 flex items-center gap-2",children:[k.jsx(IS,{className:"w-4 h-4"})," Password"]}),k.jsx("input",{className:"mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring",type:"password",value:l,onChange:J=>u(J.target.value),placeholder:"••••••••",required:!0,autoComplete:"new-password"})]}),k.jsxs("label",{className:"block",children:[k.jsxs("span",{className:"text-sm text-gray-700 flex items-center gap-2",children:[k.jsx(Zm,{className:"w-4 h-4"})," Phone"]}),k.jsx("input",{className:"mt-1 w-full rounded-xl border border-gray-200 px-3 py-2 focus:outline-none focus:ring",type:"tel",value:y,onChange:J=>g(J.target.value),placeholder:"Phone Number",required:!0})]}),b&&k.jsx("div",{className:"rounded-xl bg-red-50 border border-red-200 text-red-700 px-3 py-2 text-sm",children:b}),k.jsx("button",{type:"submit",disabled:T,className:"w-full rounded-xl bg-black text-white py-2 font-medium disabled:opacity-60",children:T?"Registering…":"Register"}),k.jsx("button",{type:"button",onClick:e,className:"w-full rounded-xl border border-gray-200 py-2 font-medium",children:"Back"})]})]})})},Gx=({onLogout:r})=>{const e=async()=>{await cp(Rn),r()};return k.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-50 p-4",children:k.jsxs("div",{className:"w-full max-w-md bg-white rounded-2xl shadow p-8 text-center",children:[k.jsx("div",{className:"flex justify-center mb-4",children:k.jsx("div",{className:"bg-yellow-100 rounded-full p-4",children:k.jsx(RS,{className:"w-8 h-8 text-yellow-600"})})}),k.jsx("h1",{className:"text-xl font-semibold mb-2",children:"Awaiting Approval"}),k.jsx("p",{className:"text-gray-500 text-sm mb-6",children:"Your driver account has been created and is pending review by an admin. You'll be able to log in once your account is approved."}),k.jsx("div",{className:"rounded-xl bg-yellow-50 border border-yellow-200 text-yellow-800 px-4 py-3 text-sm mb-6",children:"If you believe this is taking too long, please contact support."}),k.jsx("button",{onClick:e,className:"w-full rounded-xl border border-gray-200 py-2 font-medium text-gray-700 hover:bg-gray-50",children:"Sign out"})]})})},Kx=({onLogout:r})=>{const[e,n]=we.useState([]),[s,l]=we.useState(!0),[u,f]=we.useState(null),[p,y]=we.useState(null);we.useEffect(()=>{const S=hT(Rn,b=>y((b==null?void 0:b.uid)??null));return()=>S()},[]),we.useEffect(()=>{const S=Qp(Th(wn,"users"),bh("role","==","driver"),bh("approved","==",!1)),b=$m(S,q=>{n(q.docs.map(Z=>({uid:Z.id,...Z.data()}))),l(!1)});return()=>b()},[]);const g=async S=>{f(S);try{await wh(Mi(wn,"users",S),{approved:!0,approvedAt:Sh(),approvedBy:p??"admin"})}finally{f(null)}},T=async S=>{f(S);try{await MD(Mi(wn,"users",S))}finally{f(null)}};return k.jsx("div",{className:"min-h-screen bg-gray-50 p-4",children:k.jsxs("div",{className:"max-w-2xl mx-auto",children:[k.jsxs("div",{className:"flex items-center justify-between mb-2",children:[k.jsxs("div",{className:"flex items-center gap-2",children:[k.jsx(S0,{className:"w-6 h-6 text-emerald-600"}),k.jsx("h1",{className:"text-xl font-semibold",children:"Admin — Driver Approvals"})]}),k.jsxs("button",{onClick:r,className:"flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700",children:[k.jsx(NS,{className:"w-4 h-4"})," Sign out"]})]}),k.jsxs("div",{className:"mb-6 rounded-xl bg-gray-100 border border-gray-200 px-3 py-2 text-xs text-gray-500 flex items-center gap-2",children:[k.jsx("span",{className:"font-medium text-gray-700",children:"Your UID:"}),k.jsx("span",{className:"font-mono break-all select-all",children:p??"—"})]}),s?k.jsx("p",{className:"text-gray-400 text-sm text-center mt-16",children:"Loading…"}):e.length===0?k.jsxs("div",{className:"bg-white rounded-2xl shadow p-8 text-center",children:[k.jsx(b0,{className:"w-8 h-8 text-gray-300 mx-auto mb-3"}),k.jsx("p",{className:"text-gray-400 text-sm",children:"No drivers pending approval."})]}):k.jsx("div",{className:"space-y-3",children:e.map(S=>k.jsxs("div",{className:"bg-white rounded-2xl shadow p-4 flex items-center gap-4",children:[k.jsx("div",{className:"bg-emerald-100 rounded-full p-2",children:k.jsx(b0,{className:"w-5 h-5 text-emerald-600"})}),k.jsxs("div",{className:"flex-1 min-w-0",children:[k.jsx("p",{className:"font-medium truncate",children:S.displayName||"Unknown"}),k.jsx("p",{className:"text-sm text-gray-500",children:S.phone||"—"})]}),k.jsxs("div",{className:"flex gap-2 shrink-0",children:[k.jsxs("button",{disabled:u===S.uid,onClick:()=>g(S.uid),className:"flex items-center gap-1 rounded-xl bg-emerald-600 text-white px-3 py-1.5 text-sm font-medium disabled:opacity-50 hover:bg-emerald-700",children:[k.jsx(S0,{className:"w-4 h-4"})," Approve"]}),k.jsxs("button",{disabled:u===S.uid,onClick:()=>T(S.uid),className:"flex items-center gap-1 rounded-xl border border-red-200 text-red-600 px-3 py-1.5 text-sm font-medium disabled:opacity-50 hover:bg-red-50",children:[k.jsx(Px,{className:"w-4 h-4"})," Reject"]})]})]},S.uid))})]})})};function Yx(){const[r,e]=we.useState("client"),[n,s]=we.useState(null),[l,u]=we.useState(null),[f,p]=we.useState(null),[y,g]=we.useState(!0);we.useEffect(()=>{const b=()=>e("driverRegister");return window.addEventListener("driver-register",b),()=>window.removeEventListener("driver-register",b)},[]),we.useEffect(()=>{const b=hT(Rn,async q=>{if(s(q),!q){u(null),g(!1);return}try{const Z=await WA(Mi(wn,"users",q.uid)),J=Z.exists()?Z.data():null;u((J==null?void 0:J.role)??null),p((J==null?void 0:J.approved)??null),(J==null?void 0:J.role)==="admin"?e("admin"):(J==null?void 0:J.role)==="driver"?J.approved===!1?e("pendingApproval"):e("driver"):e("client")}catch{u(null)}finally{g(!1)}});return()=>b()},[]);const T=()=>{if(n&&l==="driver"){e(f===!1?"pendingApproval":"driver");return}e("driverLogin")},S=async()=>{await cp(Rn),e("client")};return y?k.jsx("div",{className:"min-h-screen flex items-center justify-center text-gray-500",children:"Starting CabConnect…"}):k.jsxs("div",{className:"font-sans text-gray-900",children:[r==="client"&&k.jsx(qx,{onDriverLoginClick:T}),r==="driverLogin"&&k.jsx(Hx,{onSuccess:()=>e("driver"),onPending:()=>e("pendingApproval"),onCancel:()=>e("client")}),r==="driverRegister"&&k.jsx(Fx,{onSuccess:()=>e("driverLogin"),onCancel:()=>e("driverLogin")}),r==="driver"&&k.jsx(Bx,{onLogout:S}),r==="pendingApproval"&&k.jsx(Gx,{onLogout:S}),r==="admin"&&k.jsx(Kx,{onLogout:S})]})}const DS=document.getElementById("root");if(!DS)throw new Error("Could not find root element to mount to");const Qx=_1.createRoot(DS);Qx.render(k.jsx(c1.StrictMode,{children:k.jsx(Yx,{})}));"serviceWorker"in navigator&&!window.location.host.includes("stackblitz")&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").catch(r=>{console.log("ServiceWorker registration failed: ",r)})});
