(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[545],{7677:function(n,t,e){"use strict";e.d(t,{jw:function(){return tV},tv:function(){return tK}});var i=e(7294);function o(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}var r="(prefers-reduced-motion: reduce)";function u(n){n.length=0}function s(n,t,e){return Array.prototype.slice.call(n,t,e)}function a(n){return n.bind.apply(n,[null].concat(s(arguments,1)))}var c=setTimeout,l=function(){};function f(n){return requestAnimationFrame(n)}function d(n,t){return typeof t===n}function p(n){return null!==n&&d("object",n)}var h=Array.isArray,v=a(d,"function"),g=a(d,"string"),m=a(d,"undefined");function y(n){try{return n instanceof(n.ownerDocument.defaultView||window).HTMLElement}catch(n){return!1}}function b(n){return h(n)?n:[n]}function w(n,t){b(n).forEach(t)}function E(n,t){return n.indexOf(t)>-1}function S(n,t){return n.push.apply(n,b(t)),n}function x(n,t,e){n&&w(t,function(t){t&&n.classList[e?"add":"remove"](t)})}function k(n,t){x(n,g(t)?t.split(" "):t,!0)}function _(n,t){w(t,n.appendChild.bind(n))}function C(n,t){w(n,function(n){var e=(t||n).parentNode;e&&e.insertBefore(n,t)})}function P(n,t){return y(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function A(n,t){var e=n?s(n.children):[];return t?e.filter(function(n){return P(n,t)}):e}function L(n,t){return t?A(n,t)[0]:n.firstElementChild}var M=Object.keys;function D(n,t,e){return n&&(e?M(n).reverse():M(n)).forEach(function(e){"__proto__"!==e&&t(n[e],e)}),n}function N(n){return s(arguments,1).forEach(function(t){D(t,function(e,i){n[i]=t[i]})}),n}function O(n){return s(arguments,1).forEach(function(t){D(t,function(t,e){h(t)?n[e]=t.slice():p(t)?n[e]=O({},p(n[e])?n[e]:{},t):n[e]=t})}),n}function z(n,t){w(t||M(n),function(t){delete n[t]})}function R(n,t){w(n,function(n){w(t,function(t){n&&n.removeAttribute(t)})})}function j(n,t,e){p(t)?D(t,function(t,e){j(n,e,t)}):w(n,function(n){null===e||""===e?R(n,t):n.setAttribute(t,String(e))})}function T(n,t,e){var i=document.createElement(n);return t&&(g(t)?k(i,t):j(i,t)),e&&_(e,i),i}function I(n,t,e){if(m(e))return getComputedStyle(n)[t];null!==e&&(n.style[t]=""+e)}function F(n,t){I(n,"display",t)}function W(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function X(n,t){return n.getAttribute(t)}function G(n,t){return n&&n.classList.contains(t)}function U(n){return n.getBoundingClientRect()}function B(n){w(n,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function H(n){return L(new DOMParser().parseFromString(n,"text/html").body)}function Y(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function q(n,t){return n&&n.querySelector(t)}function K(n,t){return t?s(n.querySelectorAll(t)):[]}function V(n,t){x(n,t,!1)}function J(n){return n.timeStamp}function Q(n){return g(n)?n:n?n+"px":""}var Z="splide",$="data-"+Z;function nn(n,t){if(!n)throw Error("["+Z+"] "+(t||""))}var nt=Math.min,ne=Math.max,ni=Math.floor,no=Math.ceil,nr=Math.abs;function nu(n,t,e,i){var o=nt(t,e),r=ne(t,e);return i?o<n&&n<r:o<=n&&n<=r}function ns(n,t,e){var i=nt(t,e),o=ne(t,e);return nt(ne(i,n),o)}function na(n){return+(n>0)-+(n<0)}function nc(n,t){return w(t,function(t){n=n.replace("%s",""+t)}),n}function nl(n){return n<10?"0"+n:""+n}var nf={};function nd(){var n=[];function t(n,t,e){w(n,function(n){n&&w(t,function(t){t.split(" ").forEach(function(t){var i=t.split(".");e(n,i[0],i[1])})})})}return{bind:function(e,i,o,r){t(e,i,function(t,e,i){var u="addEventListener"in t,s=u?t.removeEventListener.bind(t,e,o,r):t.removeListener.bind(t,o);u?t.addEventListener(e,o,r):t.addListener(o),n.push([t,e,i,o,s])})},unbind:function(e,i,o){t(e,i,function(t,e,i){n=n.filter(function(n){return n[0]!==t||n[1]!==e||n[2]!==i||!!o&&n[3]!==o||(n[4](),!1)})})},dispatch:function(n,t,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:!0,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach(function(n){n[4]()}),u(n)}}}var np="mounted",nh="ready",nv="move",ng="moved",nm="click",ny="active",nb="inactive",nw="visible",nE="hidden",nS="refresh",nx="updated",nk="resize",n_="resized",nC="drag",nP="dragging",nA="dragged",nL="scroll",nM="scrolled",nD="destroy",nN="arrows:mounted",nO="arrows:updated",nz="pagination:mounted",nR="pagination:updated",nj="navigation:mounted",nT="autoplay:play",nI="autoplay:playing",nF="autoplay:pause",nW="lazyload:loaded";function nX(n){var t=n?n.event.bus:document.createDocumentFragment(),e=nd();return n&&n.event.on(nD,e.destroy),N(e,{bus:t,on:function(n,i){e.bind(t,b(n).join(" "),function(n){i.apply(i,h(n.detail)?n.detail:[])})},off:a(e.unbind,t),emit:function(n){e.dispatch(t,n,s(arguments,1))}})}function nG(n,t,e,i){var o,r,u=Date.now,s=0,a=!0,c=0;function l(){if(!a){if(s=n?nt((u()-o)/n,1):1,e&&e(s),s>=1&&(t(),o=u(),i&&++c>=i))return d();r=f(l)}}function d(){a=!0}function p(){r&&cancelAnimationFrame(r),s=0,r=0,a=!0}return{start:function(t){t||p(),o=u()-(t?s*n:0),a=!1,r=f(l)},rewind:function(){o=u(),s=0,e&&e(s)},pause:d,cancel:p,set:function(t){n=t},isPaused:function(){return a}}}var nU="Arrow",nB=nU+"Left",nH=nU+"Right",nY=nU+"Up",nq=nU+"Down",nK={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[nY,nH],ArrowRight:[nq,nB]},nV="role",nJ="tabindex",nQ="aria-",nZ=nQ+"controls",n$=nQ+"current",n0=nQ+"selected",n1=nQ+"label",n4=nQ+"labelledby",n5=nQ+"hidden",n3=nQ+"orientation",n6=nQ+"roledescription",n2=nQ+"live",n8=nQ+"busy",n7=nQ+"atomic",n9=[nV,nJ,"disabled",nZ,n$,n1,n4,n5,n3,n6],tn=Z+"__",tt=tn+"track",te=tn+"list",ti=tn+"slide",to=ti+"--clone",tr=ti+"__container",tu=tn+"arrows",ts=tn+"arrow",ta=ts+"--prev",tc=ts+"--next",tl=tn+"pagination",tf=tl+"__page",td=tn+"progress__bar",tp=tn+"toggle",th=tn+"sr",tv="is-active",tg="is-prev",tm="is-next",ty="is-visible",tb="is-loading",tw="is-focus-in",tE="is-overflow",tS=[tv,ty,tg,tm,tb,tw,tE],tx="touchstart mousedown",tk="touchmove mousemove",t_="touchend touchcancel mouseup click",tC="slide",tP="loop",tA="fade",tL=$+"-interval",tM={passive:!1,capture:!0},tD={Spacebar:" ",Right:nH,Left:nB,Up:nY,Down:nq};function tN(n){return tD[n=g(n)?n:n.key]||n}var tO="keydown",tz=$+"-lazy",tR=tz+"-srcset",tj="["+tz+"], ["+tR+"]",tT=[" ","Enter"],tI=Object.freeze({__proto__:null,Media:function(n,t,e){var i=n.state,o=e.breakpoints||{},u=e.reducedMotion||{},s=nd(),a=[];function c(n){n&&s.destroy()}function l(n,t){var e=matchMedia(t);s.bind(e,"change",f),a.push([n,e])}function f(){var t=i.is(7),o=e.direction,r=a.reduce(function(n,t){return O(n,t[1].matches?t[0]:{})},{});z(e),d(r),e.destroy?n.destroy("completely"===e.destroy):t?(c(!0),n.mount()):o!==e.direction&&n.refresh()}function d(t,o,r){O(e,t),o&&O(Object.getPrototypeOf(e),t),(r||!i.is(1))&&n.emit(nx,e)}return{setup:function(){var n="min"===e.mediaQuery;M(o).sort(function(t,e){return n?+t-+e:+e-+t}).forEach(function(t){l(o[t],"("+(n?"min":"max")+"-width:"+t+"px)")}),l(u,r),f()},destroy:c,reduce:function(n){matchMedia(r).matches&&(n?O(e,u):z(e,M(u)))},set:d}},Direction:function(n,t,e){return{resolve:function(n,t,i){var o="rtl"!==(i=i||e.direction)||t?"ttb"===i?0:-1:1;return nK[n]&&nK[n][o]||n.replace(/width|left|right/i,function(n,t){var e=nK[n.toLowerCase()][o]||n;return t>0?e.charAt(0).toUpperCase()+e.slice(1):e})},orient:function(n){return n*("rtl"===e.direction?1:-1)}}},Elements:function(n,t,e){var i,o,r,s=nX(n),a=s.on,c=s.bind,l=n.root,f=e.i18n,d={},p=[],h=[],g=[];function m(){var n,t;o=L(i=w("."+tt),"."+te),nn(i&&o,"A track/list element is missing."),S(p,A(o,"."+ti+":not(."+to+")")),D({arrows:tu,pagination:tl,prev:ta,next:tc,bar:td,toggle:tp},function(n,t){d[t]=w("."+n)}),N(d,{root:l,track:i,list:o,slides:p}),n=l.id||""+Z+nl(nf[Z]=(nf[Z]||0)+1),t=e.role,l.id=n,i.id=i.id||n+"-track",o.id=o.id||n+"-list",!X(l,nV)&&"SECTION"!==l.tagName&&t&&j(l,nV,t),j(l,n6,f.carousel),j(o,nV,"presentation"),b()}function y(n){var t=n9.concat("style");u(p),V(l,h),V(i,g),R([i,o],t),R(l,n?t:["style",n6])}function b(){V(l,h),V(i,g),h=E(Z),g=E(tt),k(l,h),k(i,g),j(l,n1,e.label),j(l,n4,e.labelledby)}function w(n){var t=q(l,n);return t&&function(n,t){if(v(n.closest))return n.closest(t);for(var e=n;e&&1===e.nodeType&&!P(e,t);)e=e.parentElement;return e}(t,"."+Z)===l?t:void 0}function E(n){return[n+"--"+e.type,n+"--"+e.direction,e.drag&&n+"--draggable",e.isNavigation&&n+"--nav",n===Z&&tv]}return N(d,{setup:m,mount:function(){a(nS,y),a(nS,m),a(nx,b),c(document,tx+" keydown",function(n){r="keydown"===n.type},{capture:!0}),c(l,"focusin",function(){x(l,tw,!!r)})},destroy:y})},Slides:function(n,t,e){var i=nX(n),o=i.on,r=i.emit,s=i.bind,c=t.Elements,l=c.slides,f=c.list,d=[];function p(){l.forEach(function(n,t){m(n,t,-1)})}function h(){A(function(n){n.destroy()}),u(d)}function m(t,e,i){var o=function(n,t,e,i){var o,r=nX(n),u=r.on,s=r.emit,c=r.bind,l=n.Components,f=n.root,d=n.options,p=d.isNavigation,h=d.updateOnMove,v=d.i18n,g=d.pagination,m=d.slideFocus,y=l.Direction.resolve,b=X(i,"style"),w=X(i,n1),E=e>-1,S=L(i,"."+tr);function k(){var o=n.splides.map(function(n){var e=n.splide.Components.Slides.getAt(t);return e?e.slide.id:""}).join(" ");j(i,n1,nc(v.slideX,(E?e:t)+1)),j(i,nZ,o),j(i,nV,m?"button":""),m&&R(i,n6)}function _(){o||C()}function C(){if(!o){var e,r=n.index;(e=P())!==G(i,tv)&&(x(i,tv,e),j(i,n$,p&&e||""),s(e?ny:nb,A)),function(){var t=function(){if(n.is(tA))return P();var t=U(l.Elements.track),e=U(i),o=y("left",!0),r=y("right",!0);return ni(t[o])<=no(e[o])&&ni(e[r])<=no(t[r])}(),e=!t&&(!P()||E);if(n.state.is([4,5])||j(i,n5,e||""),j(K(i,d.focusableNodes||""),nJ,e?-1:""),m&&j(i,nJ,e?-1:0),t!==G(i,ty)&&(x(i,ty,t),s(t?nw:nE,A)),!t&&document.activeElement===i){var o=l.Slides.getAt(n.index);o&&W(o.slide)}}(),x(i,tg,t===r-1),x(i,tm,t===r+1)}}function P(){var i=n.index;return i===t||d.cloneStatus&&i===e}var A={index:t,slideIndex:e,slide:i,container:S,isClone:E,mount:function(){E||(i.id=f.id+"-slide"+nl(t+1),j(i,nV,g?"tabpanel":"group"),j(i,n6,v.slide),j(i,n1,w||nc(v.slideLabel,[t+1,n.length]))),c(i,"click",a(s,nm,A)),c(i,"keydown",a(s,"sk",A)),u([ng,"sh",nM],C),u(nj,k),h&&u(nv,_)},destroy:function(){o=!0,r.destroy(),V(i,tS),R(i,n9),j(i,"style",b),j(i,n1,w||"")},update:C,style:function(n,t,e){I(e&&S||i,n,t)},isWithin:function(e,i){var o=nr(e-t);return!E&&(d.rewind||n.is(tP))&&(o=nt(o,n.length-o)),o<=i}};return A}(n,e,i,t);o.mount(),d.push(o),d.sort(function(n,t){return n.index-t.index})}function S(n){return n?M(function(n){return!n.isClone}):d}function A(n,t){S(t).forEach(n)}function M(n){return d.filter(v(n)?n:function(t){return g(n)?P(t.slide,n):E(b(n),t.index)})}return{mount:function(){p(),o(nS,h),o(nS,p)},destroy:h,update:function(){A(function(n){n.update()})},register:m,get:S,getIn:function(n){var i=t.Controller,o=i.toIndex(n),r=i.hasFocus()?1:e.perPage;return M(function(n){return nu(n.index,o,o+r-1)})},getAt:function(n){return M(n)[0]},add:function(n,t){w(n,function(n){if(g(n)&&(n=H(n)),y(n)){var i,o,u,c,d=l[t];d?C(n,d):_(f,n),k(n,e.classes.slide),i=n,o=a(r,nk),(c=(u=K(i,"img")).length)?u.forEach(function(n){s(n,"load error",function(){--c||o()})}):o()}}),r(nS)},remove:function(n){B(M(n).map(function(n){return n.slide})),r(nS)},forEach:A,filter:M,style:function(n,t,e){A(function(i){i.style(n,t,e)})},getLength:function(n){return n?l.length:d.length},isEnough:function(){return d.length>e.perPage}}},Layout:function(n,t,e){var i,o,r,u=nX(n),s=u.on,c=u.bind,l=u.emit,f=t.Slides,d=t.Direction.resolve,h=t.Elements,v=h.root,g=h.track,m=h.list,y=f.getAt,b=f.style;function w(){i="ttb"===e.direction,I(v,"maxWidth",Q(e.width)),I(g,d("paddingLeft"),S(!1)),I(g,d("paddingRight"),S(!0)),E(!0)}function E(n){var t,u=U(v);(n||o.width!==u.width||o.height!==u.height)&&(I(g,"height",(t="",i&&(nn(t=k(),"height or heightRatio is missing."),t="calc("+t+" - "+S(!1)+" - "+S(!0)+")"),t)),b(d("marginRight"),Q(e.gap)),b("width",e.autoWidth?null:Q(e.fixedWidth)||(i?"":_())),b("height",Q(e.fixedHeight)||(i?e.autoHeight?null:_():k()),!0),o=u,l(n_),r!==(r=D())&&(x(v,tE,r),l("overflow",r)))}function S(n){var t=e.padding,i=d(n?"right":"left");return t&&Q(t[i]||(p(t)?0:t))||"0px"}function k(){return Q(e.height||U(m).width*e.heightRatio)}function _(){var n=Q(e.gap);return"calc((100%"+(n&&" + "+n)+")/"+(e.perPage||1)+(n&&" - "+n)+")"}function C(){return U(m)[d("width")]}function P(n,t){var e=y(n||0);return e?U(e.slide)[d("width")]+(t?0:M()):0}function A(n,t){var e=y(n);return e?nr(U(e.slide)[d("right")]-U(m)[d("left")])+(t?0:M()):0}function L(t){return A(n.length-1)-A(0)+P(0,t)}function M(){var n=y(0);return n&&parseFloat(I(n.slide,d("marginRight")))||0}function D(){return n.is(tA)||L(!0)>C()}return{mount:function(){var n;w(),c(window,"resize load",(n=nG(0,a(l,nk),null,1),function(){n.isPaused()&&n.start()})),s([nx,nS],w),s(nk,E)},resize:E,listSize:C,slideSize:P,sliderSize:L,totalSize:A,getPadding:function(n){return parseFloat(I(g,d("padding"+(n?"Right":"Left"))))||0},isOverflow:D}},Clones:function(n,t,e){var i,o=nX(n),r=o.on,s=t.Elements,a=t.Slides,c=t.Direction.resolve,l=[];function f(){r(nS,d),r([nx,nk],h),(i=v())&&(function(t){var i=a.get().slice(),o=i.length;if(o){for(;i.length<t;)S(i,i);S(i.slice(-t),i.slice(0,t)).forEach(function(r,u){var c,f=u<t,d=(k(c=r.slide.cloneNode(!0),e.classes.clone),c.id=n.root.id+"-clone"+nl(u+1),c);f?C(d,i[0].slide):_(s.list,d),S(l,d),a.register(d,u-t+(f?0:o),r.index)})}}(i),t.Layout.resize(!0))}function d(){p(),f()}function p(){B(l),u(l),o.destroy()}function h(){var n=v();i!==n&&(i<n||!n)&&o.emit(nS)}function v(){var i=e.clones;if(n.is(tP)){if(m(i)){var o=e[c("fixedWidth")]&&t.Layout.slideSize(0);i=o&&no(U(s.track)[c("width")]/o)||e[c("autoWidth")]&&n.length||2*e.perPage}}else i=0;return i}return{mount:f,destroy:p}},Move:function(n,t,e){var i,o=nX(n),r=o.on,u=o.emit,s=n.state.set,a=t.Layout,c=a.slideSize,l=a.getPadding,f=a.totalSize,d=a.listSize,p=a.sliderSize,h=t.Direction,v=h.resolve,g=h.orient,y=t.Elements,b=y.list,w=y.track;function E(){t.Controller.isBusy()||(t.Scroll.cancel(),S(n.index),t.Slides.update())}function S(n){x(P(n,!0))}function x(e,i){if(!n.is(tA)){var o=i?e:function(e){if(n.is(tP)){var i=C(e),o=i>t.Controller.getEnd();(i<0||o)&&(e=k(e,o))}return e}(e);I(b,"transform","translate"+v("X")+"("+o+"px)"),e!==o&&u("sh")}}function k(n,t){var e=n-L(t),i=p();return n-g(i*(no(nr(e)/i)||1))*(t?1:-1)}function _(){x(A(),!0),i.cancel()}function C(n){for(var e=t.Slides.get(),i=0,o=1/0,r=0;r<e.length;r++){var u=e[r].index,s=nr(P(u,!0)-n);if(s<=o)o=s,i=u;else break}return i}function P(t,i){var o,r,u=g(f(t-1)-("center"===(o=e.focus)?(d()-c(t,!0))/2:+o*c(t)||0));return i?(r=u,e.trimSpace&&n.is(tC)&&(r=ns(r,0,g(p(!0)-d()))),r):u}function A(){var n=v("left");return U(b)[n]-U(w)[n]+g(l(!1))}function L(n){return P(n?t.Controller.getEnd():0,!!e.trimSpace)}return{mount:function(){i=t.Transition,r([np,n_,nx,nS],E)},move:function(n,t,e,o){var r,a;n!==t&&(r=n>e,a=g(k(A(),r)),r?a>=0:a<=b[v("scrollWidth")]-U(w)[v("width")])&&(_(),x(k(A(),n>e),!0)),s(4),u(nv,t,e,n),i.start(t,function(){s(3),u(ng,t,e,n),o&&o()})},jump:S,translate:x,shift:k,cancel:_,toIndex:C,toPosition:P,getPosition:A,getLimit:L,exceededLimit:function(n,t){t=m(t)?A():t;var e=!0!==n&&g(t)<g(L(!1)),i=!1!==n&&g(t)>g(L(!0));return e||i},reposition:E}},Controller:function(n,t,e){var i,o,r,u,s=nX(n),c=s.on,l=s.emit,f=t.Move,d=f.getPosition,p=f.getLimit,h=f.toPosition,v=t.Slides,y=v.isEnough,b=v.getLength,w=e.omitEnd,E=n.is(tP),S=n.is(tC),x=a(L,!1),k=a(L,!0),_=e.start||0,C=_;function P(){o=b(!0),r=e.perMove,u=e.perPage,i=N();var n=ns(_,0,w?i:o-1);n!==_&&(_=n,f.reposition())}function A(){i!==N()&&l("ei")}function L(n,t){var e=M(_+(r||(j()?1:u))*(n?-1:1),_,!(r||j()));return -1===e&&S&&!(1>nr(d()-p(!n)))?n?0:i:t?e:D(e)}function M(t,s,a){if(y()||j()){var c=function(t){if(S&&"move"===e.trimSpace&&t!==_)for(var i=d();i===h(t,!0)&&nu(t,0,n.length-1,!e.rewind);)t<_?--t:++t;return t}(t);c!==t&&(s=t,t=c,a=!1),t<0||t>i?t=!r&&(nu(0,t,s,!0)||nu(i,s,t,!0))?O(z(t)):E?a?t<0?-(o%u||u):o:t:e.rewind?t<0?i:0:-1:a&&t!==s&&(t=O(z(s)+(t<s?-1:1)))}else t=-1;return t}function D(n){return E?(n+o)%o||0:n}function N(){for(var n=o-(j()||E&&r?1:u);w&&n-- >0;)if(h(o-1,!0)!==h(n,!0)){n++;break}return ns(n,0,o-1)}function O(n){return ns(j()?n:u*n,0,i)}function z(n){return j()?nt(n,i):ni((n>=i?o-1:n)/u)}function R(n){n!==_&&(C=_,_=n)}function j(){return!m(e.focus)||e.isNavigation}function T(){return n.state.is([4,5])&&!!e.waitForTransition}return{mount:function(){P(),c([nx,nS,"ei"],P),c(n_,A)},go:function(n,t,e){if(!T()){var o=function(n){var t=_;if(g(n)){var e=n.match(/([+\-<>])(\d+)?/)||[],o=e[1],r=e[2];"+"===o||"-"===o?t=M(_+ +(""+o+(+r||1)),_):">"===o?t=r?O(+r):x(!0):"<"===o&&(t=k(!0))}else t=E?n:ns(n,0,i);return t}(n),r=D(o);r>-1&&(t||r!==_)&&(R(r),f.move(o,r,C,e))}},scroll:function(n,e,o,r){t.Scroll.scroll(n,e,o,function(){var n=D(f.toIndex(d()));R(w?nt(n,i):n),r&&r()})},getNext:x,getPrev:k,getAdjacent:L,getEnd:N,setIndex:R,getIndex:function(n){return n?C:_},toIndex:O,toPage:z,toDest:function(n){var t=f.toIndex(n);return S?ns(t,0,i):t},hasFocus:j,isBusy:T}},Arrows:function(n,t,e){var i,o,r=nX(n),u=r.on,s=r.bind,c=r.emit,l=e.classes,f=e.i18n,d=t.Elements,p=t.Controller,h=d.arrows,v=d.track,g=h,m=d.prev,y=d.next,b={};function w(){var n;(n=e.arrows)&&!(m&&y)&&(g=h||T("div",l.arrows),m=P(!0),y=P(!1),i=!0,_(g,[m,y]),h||C(g,v)),m&&y&&(N(b,{prev:m,next:y}),F(g,n?"":"none"),k(g,o=tu+"--"+e.direction),n&&(u([np,ng,nS,nM,"ei"],A),s(y,"click",a(x,">")),s(m,"click",a(x,"<")),A(),j([m,y],nZ,v.id),c(nN,m,y))),u(nx,E)}function E(){S(),w()}function S(){r.destroy(),V(g,o),i?(B(h?[m,y]:g),m=y=null):R([m,y],n9)}function x(n){p.go(n,!0)}function P(n){return H('<button class="'+l.arrow+" "+(n?l.prev:l.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function A(){if(m&&y){var t=n.index,e=p.getPrev(),i=p.getNext(),o=e>-1&&t<e?f.last:f.prev,r=i>-1&&t>i?f.first:f.next;m.disabled=e<0,y.disabled=i<0,j(m,n1,o),j(y,n1,r),c(nO,m,y,e,i)}}return{arrows:b,mount:w,destroy:S,update:A}},Autoplay:function(n,t,e){var i,o,r=nX(n),u=r.on,s=r.bind,a=r.emit,c=nG(e.interval,n.go.bind(n,">"),function(n){var t=f.bar;t&&I(t,"width",100*n+"%"),a(nI,n)}),l=c.isPaused,f=t.Elements,d=t.Elements,p=d.root,h=d.toggle,v=e.autoplay,g="pause"===v;function m(){l()&&t.Slides.isEnough()&&(c.start(!e.resetProgress),o=i=g=!1,w(),a(nT))}function y(n){void 0===n&&(n=!0),g=!!n,w(),l()||(c.pause(),a(nF))}function b(){g||(i||o?y(!1):m())}function w(){h&&(x(h,tv,!g),j(h,n1,e.i18n[g?"play":"pause"]))}function E(n){var i=t.Slides.getAt(n);c.set(i&&+X(i.slide,tL)||e.interval)}return{mount:function(){v&&(e.pauseOnHover&&s(p,"mouseenter mouseleave",function(n){i="mouseenter"===n.type,b()}),e.pauseOnFocus&&s(p,"focusin focusout",function(n){o="focusin"===n.type,b()}),h&&s(h,"click",function(){g?m():y(!0)}),u([nv,nL,nS],c.rewind),u(nv,E),h&&j(h,nZ,f.track.id),g||m(),w())},destroy:c.cancel,play:m,pause:y,isPaused:l}},Cover:function(n,t,e){var i=nX(n).on;function o(n){t.Slides.forEach(function(t){var e=L(t.container||t.slide,"img");e&&e.src&&r(n,e,t)})}function r(n,t,e){e.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),F(t,n?"none":"")}return{mount:function(){e.cover&&(i(nW,a(r,!0)),i([np,nx,nS],a(o,!0)))},destroy:a(o,!1)}},Scroll:function(n,t,e){var i,o,r=nX(n),u=r.on,s=r.emit,c=n.state.set,l=t.Move,f=l.getPosition,d=l.getLimit,p=l.exceededLimit,h=l.translate,v=n.is(tC),g=1;function m(n,e,r,u,d){var h=f();if(w(),r&&(!v||!p())){var m=t.Layout.sliderSize(),E=na(n)*m*ni(nr(n)/m)||0;n=l.toPosition(t.Controller.toDest(n%m))+E}g=1,e=1>nr(h-n)?0:e||ne(nr(n-h)/1.5,800),o=u,i=nG(e,y,a(b,h,n,d),1),c(5),s(nL),i.start()}function y(){c(3),o&&o(),s(nM)}function b(n,t,i,r){var u,s=f(),a=(n+(t-n)*((u=e.easingFunc)?u(r):1-Math.pow(1-r,4))-s)*g;h(s+a),v&&!i&&p()&&(g*=.6,10>nr(a)&&m(d(p(!0)),600,!1,o,!0))}function w(){i&&i.cancel()}function E(){i&&!i.isPaused()&&(w(),y())}return{mount:function(){u(nv,w),u([nx,nS],E)},destroy:w,scroll:m,cancel:E}},Drag:function(n,t,e){var i,o,r,u,s,a,c,f,d=nX(n),h=d.on,v=d.emit,g=d.bind,m=d.unbind,y=n.state,b=t.Move,w=t.Scroll,E=t.Controller,S=t.Elements.track,x=t.Media.reduce,k=t.Direction,_=k.resolve,C=k.orient,A=b.getPosition,L=b.exceededLimit,M=!1;function D(){var n=e.drag;c=!n,u="free"===n}function N(n){if(a=!1,!c){var t,i,o=W(n);t=n.target,i=e.noDrag,P(t,"."+tf+", ."+ts)||i&&P(t,i)||!o&&n.button||(E.isBusy()?Y(n,!0):(f=o?S:window,s=y.is([4,5]),r=null,g(f,tk,O,tM),g(f,t_,z,tM),b.cancel(),w.cancel(),j(n)))}}function O(t){if(y.is(6)||(y.set(6),v(nC)),t.cancelable){if(s){b.translate(i+T(t)/(M&&n.is(tC)?5:1));var o,r,u,c,l=I(t)>200,f=M!==(M=L());(l||f)&&j(t),a=!0,v(nP),Y(t)}else nr(T(t))>nr(T(t,!0))&&(u=(r=p(o=e.dragMinThreshold))&&o.mouse||0,c=(r?o.touch:+o)||10,s=nr(T(t))>(W(t)?c:u),Y(t))}}function z(i){var o,r,a,c;y.is(6)&&(y.set(3),v(nA)),s&&(o=r=function(t){if(n.is(tP)||!M){var e=I(t);if(e&&e<200)return T(t)/e}return 0}(i),a=A()+na(o)*nt(nr(o)*(e.flickPower||600),u?1/0:t.Layout.listSize()*(e.flickMaxPages||1)),c=e.rewind&&e.rewindByDrag,x(!1),u?E.scroll(a,0,e.snap):n.is(tA)?E.go(0>C(na(r))?c?"<":"-":c?">":"+"):n.is(tC)&&M&&c?E.go(L(!0)?">":"<"):E.go(E.toDest(a),!0),x(!0),Y(i)),m(f,tk,O),m(f,t_,z),s=!1}function R(n){!c&&a&&Y(n,!0)}function j(n){r=o,o=n,i=A()}function T(n,t){return F(n,t)-F(o===n&&r||o,t)}function I(n){return J(n)-J(o===n&&r||o)}function F(n,t){return(W(n)?n.changedTouches[0]:n)["page"+_(t?"Y":"X")]}function W(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}return{mount:function(){g(S,tk,l,tM),g(S,t_,l,tM),g(S,tx,N,tM),g(S,"click",R,{capture:!0}),g(S,"dragstart",Y),h([np,nx],D)},disable:function(n){c=n},isDragging:function(){return s}}},Keyboard:function(n,t,e){var i,o,r=nX(n),u=r.on,s=r.bind,a=r.unbind,l=n.root,f=t.Direction.resolve;function d(){var n=e.keyboard;n&&s(i="global"===n?window:l,tO,v)}function p(){a(i,tO)}function h(){var n=o;o=!0,c(function(){o=n})}function v(t){if(!o){var e=tN(t);e===f(nB)?n.go("<"):e===f(nH)&&n.go(">")}}return{mount:function(){d(),u(nx,p),u(nx,d),u(nv,h)},destroy:p,disable:function(n){o=n}}},LazyLoad:function(n,t,e){var i=nX(n),o=i.on,r=i.off,s=i.bind,c=i.emit,l="sequential"===e.lazyLoad,f=[ng,nM],d=[];function p(){u(d),t.Slides.forEach(function(n){K(n.slide,tj).forEach(function(t){var i=X(t,tz),o=X(t,tR);if(i!==t.src||o!==t.srcset){var r=e.classes.spinner,u=t.parentElement,s=L(u,"."+r)||T("span",r,u);d.push([t,n,s]),t.src||F(t,"none")}})}),l?m():(r(f),o(f,h),h())}function h(){(d=d.filter(function(t){var i=e.perPage*((e.preloadPages||1)+1)-1;return!t[1].isWithin(n.index,i)||v(t)})).length||r(f)}function v(n){var t=n[0];k(n[1].slide,tb),s(t,"load error",a(g,n)),j(t,"src",X(t,tz)),j(t,"srcset",X(t,tR)),R(t,tz),R(t,tR)}function g(n,t){var e=n[0],i=n[1];V(i.slide,tb),"error"!==t.type&&(B(n[2]),F(e,""),c(nW,e,i),c(nk)),l&&m()}function m(){d.length&&v(d.shift())}return{mount:function(){e.lazyLoad&&(p(),o(nS,p))},destroy:a(u,d),check:h}},Pagination:function(n,t,e){var i,o,r=nX(n),c=r.on,l=r.emit,f=r.bind,d=t.Slides,p=t.Elements,h=t.Controller,v=h.hasFocus,g=h.getIndex,m=h.go,y=t.Direction.resolve,b=p.pagination,w=[];function E(){i&&(B(b?s(i.children):i),V(i,o),u(w),i=null),r.destroy()}function S(n){m(">"+n,!0)}function x(n,t){var e=w.length,i=tN(t),o=_(),r=-1;i===y(nH,!1,o)?r=++n%e:i===y(nB,!1,o)?r=(--n+e)%e:"Home"===i?r=0:"End"===i&&(r=e-1);var u=w[r];u&&(W(u.button),m(">"+r),Y(t,!0))}function _(){return e.paginationDirection||e.direction}function C(n){return w[h.toPage(n)]}function P(){var n=C(g(!0)),t=C(g());if(n){var e=n.button;V(e,tv),R(e,n0),j(e,nJ,-1)}if(t){var o=t.button;k(o,tv),j(o,n0,!0),j(o,nJ,"")}l(nR,{list:i,items:w},n,t)}return{items:w,mount:function t(){E(),c([nx,nS,"ei"],t);var r=e.pagination;b&&F(b,r?"":"none"),r&&(c([nv,nL,nM],P),function(){var t=n.length,r=e.classes,u=e.i18n,s=e.perPage,c=v()?h.getEnd()+1:no(t/s);k(i=b||T("ul",r.pagination,p.track.parentElement),o=tl+"--"+_()),j(i,nV,"tablist"),j(i,n1,u.select),j(i,n3,"ttb"===_()?"vertical":"");for(var l=0;l<c;l++){var g=T("li",null,i),m=T("button",{class:r.page,type:"button"},g),y=d.getIn(l).map(function(n){return n.slide.id}),E=!v()&&s>1?u.pageX:u.slideX;f(m,"click",a(S,l)),e.paginationKeyboard&&f(m,"keydown",a(x,l)),j(g,nV,"presentation"),j(m,nV,"tab"),j(m,nZ,y.join(" ")),j(m,n1,nc(E,l+1)),j(m,nJ,-1),w.push({li:g,button:m,page:l})}}(),P(),l(nz,{list:i,items:w},C(n.index)))},destroy:E,getAt:C,update:P}},Sync:function(n,t,e){var i=e.isNavigation,o=e.slideFocus,r=[];function s(){var t,e;n.splides.forEach(function(t){t.isParent||(l(n,t.splide),l(t.splide,n))}),i&&((e=(t=nX(n)).on)(nm,d),e("sk",p),e([np,nx],f),r.push(t),t.emit(nj,n.splides))}function c(){r.forEach(function(n){n.destroy()}),u(r)}function l(n,t){var e=nX(n);e.on(nv,function(n,e,i){t.go(t.is(tP)?i:n)}),r.push(e)}function f(){j(t.Elements.list,n3,"ttb"===e.direction?"vertical":"")}function d(t){n.go(t.index)}function p(n,t){E(tT,tN(t))&&(d(n),Y(t))}return{setup:a(t.Media.set,{slideFocus:m(o)?i:o},!0),mount:s,destroy:c,remount:function(){c(),s()}}},Wheel:function(n,t,e){var i=nX(n).bind,o=0;function r(i){if(i.cancelable){var r=i.deltaY,u=r<0,s=J(i),a=e.wheelMinThreshold||0,c=e.wheelSleep||0;nr(r)>a&&s-o>c&&(n.go(u?"<":">"),o=s),(!e.releaseWheel||n.state.is(4)||-1!==t.Controller.getAdjacent(u))&&Y(i)}}return{mount:function(){e.wheel&&i(t.Elements.track,"wheel",r,tM)}}},Live:function(n,t,e){var i=nX(n).on,o=t.Elements.track,r=e.live&&!e.isNavigation,u=T("span",th),s=nG(90,a(c,!1));function c(n){j(o,n8,n),n?(_(o,u),s.start()):(B(u),s.cancel())}function l(n){r&&j(o,n2,n?"off":"polite")}return{mount:function(){r&&(l(!t.Autoplay.isPaused()),j(o,n7,!0),u.textContent="…",i(nT,a(l,!0)),i(nF,a(l,!1)),i([ng,nM],a(c,!0)))},disable:l,destroy:function(){R(o,[n2,n7,n8]),B(u)}}}}),tF={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:{slide:ti,clone:to,arrows:tu,arrow:ts,prev:ta,next:tc,pagination:tl,page:tf,spinner:tn+"spinner"},i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function tW(n,t,e){var i=t.Slides;function o(){i.forEach(function(n){n.style("transform","translateX(-"+100*n.index+"%)")})}return{mount:function(){nX(n).on([np,nS],o)},start:function(n,t){i.style("transition","opacity "+e.speed+"ms "+e.easing),c(t)},cancel:l}}function tX(n,t,e){var i,o=t.Move,r=t.Controller,u=t.Scroll,s=t.Elements.list,c=a(I,s,"transition");function l(){c(""),u.cancel()}return{mount:function(){nX(n).bind(s,"transitionend",function(n){n.target===s&&i&&(l(),i())})},start:function(t,s){var a=o.toPosition(t,!0),l=o.getPosition(),f=function(t){var i=e.rewindSpeed;if(n.is(tC)&&i){var o=r.getIndex(!0),u=r.getEnd();if(0===o&&t>=u||o>=u&&0===t)return i}return e.speed}(t);nr(a-l)>=1&&f>=1?e.useScroll?u.scroll(a,f,!1,s):(c("transform "+f+"ms "+e.easing),o.translate(a,!0),i=s):(o.jump(t),s())},cancel:l}}var tG=function(){function n(t,e){this.event=nX(),this.Components={},this.state=(i=1,{set:function(n){i=n},is:function(n){return E(b(n),i)}}),this.splides=[],this._o={},this._E={};var i,o=g(t)?q(document,t):t;nn(o,o+" is invalid."),this.root=o,e=O({label:X(o,n1)||"",labelledby:X(o,n4)||""},tF,n.defaults,e||{});try{O(e,JSON.parse(X(o,$)))}catch(n){nn(!1,"Invalid JSON")}this._o=Object.create(O({},e))}var t,e=n.prototype;return e.mount=function(n,t){var e=this,i=this.state,o=this.Components;nn(i.is([1,7]),"Already mounted!"),i.set(1),this._C=o,this._T=t||this._T||(this.is(tA)?tW:tX),this._E=n||this._E;var r=N({},tI,this._E,{Transition:this._T});return D(r,function(n,t){var i=n(e,o,e._o);o[t]=i,i.setup&&i.setup()}),D(o,function(n){n.mount&&n.mount()}),this.emit(np),k(this.root,"is-initialized"),i.set(3),this.emit(nh),this},e.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(3)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},e.go=function(n){return this._C.Controller.go(n),this},e.on=function(n,t){return this.event.on(n,t),this},e.off=function(n){return this.event.off(n),this},e.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(s(arguments,1))),this},e.add=function(n,t){return this._C.Slides.add(n,t),this},e.remove=function(n){return this._C.Slides.remove(n),this},e.is=function(n){return this._o.type===n},e.refresh=function(){return this.emit(nS),this},e.destroy=function(n){void 0===n&&(n=!0);var t=this.event,e=this.state;return e.is(1)?nX(this).on(nh,this.destroy.bind(this,n)):(D(this._C,function(t){t.destroy&&t.destroy(n)},!0),t.emit(nD),t.destroy(),n&&u(this.splides),e.set(7)),this},o(n.prototype,[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),t&&o(n,t),Object.defineProperty(n,"prototype",{writable:!1}),n}();tG.defaults={},tG.STATES={CREATED:1,MOUNTED:2,IDLE:3,MOVING:4,SCROLLING:5,DRAGGING:6,DESTROYED:7};var tU=[[np,"onMounted"],[nh,"onReady"],[nv,"onMove"],[ng,"onMoved"],[nm,"onClick"],[ny,"onActive"],[nb,"onInactive"],[nw,"onVisible"],[nE,"onHidden"],[nS,"onRefresh"],[nx,"onUpdated"],[nk,"onResize"],[n_,"onResized"],[nC,"onDrag"],[nP,"onDragging"],[nA,"onDragged"],[nL,"onScroll"],[nM,"onScrolled"],[nD,"onDestroy"],[nN,"onArrowsMounted"],[nO,"onArrowsUpdated"],[nz,"onPaginationMounted"],[nR,"onPaginationUpdated"],[nj,"onNavigationMounted"],[nT,"onAutoplayPlay"],[nI,"onAutoplayPlaying"],[nF,"onAutoplayPause"],[nW,"onLazyLoadLoaded"]];function tB(...n){return n.filter(Boolean).join(" ")}function tH(n){return null!==n&&"object"==typeof n}function tY(n,t){let e=n;return!function(n,t){if(n){let e=Object.keys(n);for(let i=0;i<e.length;i++){let o=e[i];if("__proto__"!==o&&!1===t(n[o],o))break}}}(t,(n,t)=>{Array.isArray(n)?e[t]=n.slice():tH(n)?e[t]=tY(tH(e[t])?e[t]:{},n):e[t]=n}),e}var tq=({children:n,className:t,...e})=>i.createElement("div",{className:tB("splide__track",t),...e},i.createElement("ul",{className:"splide__list"},n)),tK=class extends i.Component{constructor(){super(...arguments),this.splideRef=i.createRef(),this.slides=[]}componentDidMount(){let{options:n,extensions:t,transition:e}=this.props,{current:i}=this.splideRef;i&&(this.splide=new tG(i,n),this.bind(this.splide),this.splide.mount(t,e),this.options=tY({},n||{}),this.slides=this.getSlides())}componentWillUnmount(){this.splide&&(this.splide.destroy(),this.splide=void 0),this.options=void 0,this.slides.length=0}componentDidUpdate(){var n;if(!this.splide)return;let{options:t}=this.props;t&&!function n(t,e){if(Array.isArray(t)&&Array.isArray(e))return t.length===e.length&&!t.some((t,i)=>!n(t,e[i]));if(tH(t)&&tH(e)){let i=Object.keys(t),o=Object.keys(e);return i.length===o.length&&!i.some(i=>!Object.prototype.hasOwnProperty.call(e,i)||!n(t[i],e[i]))}return t===e}(this.options,t)&&(this.splide.options=t,this.options=tY({},t));let e=this.getSlides();((n=this.slides).length!==e.length||n.some((n,t)=>n!==e[t]))&&(this.splide.refresh(),this.slides=e)}sync(n){var t;null==(t=this.splide)||t.sync(n)}go(n){var t;null==(t=this.splide)||t.go(n)}getSlides(){var n;if(this.splide){let t=null==(n=this.splide.Components.Elements)?void 0:n.list.children;return t&&Array.prototype.slice.call(t)||[]}return[]}bind(n){tU.forEach(([t,e])=>{let i=this.props[e];"function"==typeof i&&n.on(t,(...t)=>{i(n,...t)})})}omit(n,t){return t.forEach(t=>{Object.prototype.hasOwnProperty.call(n,t)&&delete n[t]}),n}render(){let{className:n,tag:t="div",hasTrack:e=!0,children:o,...r}=this.props;return i.createElement(t,{className:tB("splide",n),ref:this.splideRef,...this.omit(r,["options",...tU.map(n=>n[1])])},e?i.createElement(tq,null,o):o)}},tV=({children:n,className:t,...e})=>i.createElement("li",{className:tB("splide__slide",t),...e},n);/*!
 * Splide.js
 * Version  : 4.1.3
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */},5638:function(){}}]);