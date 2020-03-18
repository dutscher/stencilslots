var __extends=this&&this.__extends||function(){var e=function(r,t){e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var t in r)if(r.hasOwnProperty(t))e[t]=r[t]};return e(r,t)};return function(r,t){e(r,t);function n(){this.constructor=r}r.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}();var __awaiter=this&&this.__awaiter||function(e,r,t,n){function a(e){return e instanceof t?e:new t((function(r){r(e)}))}return new(t||(t=Promise))((function(t,i){function s(e){try{l(n.next(e))}catch(r){i(r)}}function o(e){try{l(n["throw"](e))}catch(r){i(r)}}function l(e){e.done?t(e.value):a(e.value).then(s,o)}l((n=n.apply(e,r||[])).next())}))};var __generator=this&&this.__generator||function(e,r){var t={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},n,a,i,s;return s={next:o(0),throw:o(1),return:o(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function o(e){return function(r){return l([e,r])}}function l(s){if(n)throw new TypeError("Generator is already executing.");while(t)try{if(n=1,a&&(i=s[0]&2?a["return"]:s[0]?a["throw"]||((i=a["return"])&&i.call(a),0):a.next)&&!(i=i.call(a,s[1])).done)return i;if(a=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:t.label++;return{value:s[1],done:false};case 5:t.label++;a=s[1];s=[0];continue;case 7:s=t.ops.pop();t.trys.pop();continue;default:if(!(i=t.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){t=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){t.label=s[1];break}if(s[0]===6&&t.label<i[1]){t.label=i[1];i=s;break}if(i&&t.label<i[2]){t.label=i[2];t.ops.push(s);break}if(i[2])t.ops.pop();t.trys.pop();continue}s=r.call(e,t)}catch(o){s=[6,o];a=0}finally{n=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,r=0,t=arguments.length;r<t;r++)e+=arguments[r].length;for(var n=Array(e),a=0,r=0;r<t;r++)for(var i=arguments[r],s=0,o=i.length;s<o;s++,a++)n[a]=i[s];return n};System.register([],(function(e,r){"use strict";return{execute:function(){var t=this;var n="slots";var a;var i;var s=false;var o=false;var l=false;var f=false;var u=0;var $=false;var c=typeof window!=="undefined"?window:{};var v=c.CSS;var d=c.document||{head:{}};var h={$flags$:0,$resourcesUrl$:"",jmp:function(e){return e()},raf:function(e){return requestAnimationFrame(e)},ael:function(e,r,t,n){return e.addEventListener(r,t,n)},rel:function(e,r,t,n){return e.removeEventListener(r,t,n)}};var p=function(e){return Promise.resolve(e)};var m=function(){try{new CSSStyleSheet;return true}catch(e){}return false}();var g="{visibility:hidden}.hydrated{visibility:inherit}";var y=function(e,r){if(r===void 0){r=""}{return function(){return}}};var b=function(e,r){{return function(){return}}};var w=new WeakMap;var N=function(e,r,t){var n=ke.get(e);if(m&&t){n=n||new CSSStyleSheet;n.replace(r)}else{n=r}ke.set(e,n)};var _=function(e,r,t,n){var a=R(r.$tagName$);var i=ke.get(a);e=e.nodeType===11?e:d;if(i){if(typeof i==="string"){e=e.head||e;var s=w.get(e);var o=void 0;if(!s){w.set(e,s=new Set)}if(!s.has(a)){{if(h.$cssShim$){o=h.$cssShim$.createHostStyle(n,a,i,!!(r.$flags$&10));var l=o["s-sc"];if(l){a=l;s=null}}else{o=d.createElement("style");o.innerHTML=i}e.insertBefore(o,e.querySelector("link"))}if(s){s.add(a)}}}else if(!e.adoptedStyleSheets.includes(i)){e.adoptedStyleSheets=__spreadArrays(e.adoptedStyleSheets,[i])}}return a};var S=function(e){var r=e.$cmpMeta$;var t=e.$hostElement$;var n=y("attachStyles",r.$tagName$);var a=_(t.getRootNode(),r,e.$modeName$,t);n()};var R=function(e,r){return"sc-"+e};var x={};var C=function(e){e=typeof e;return e==="object"||e==="function"};var T=function(e){return"__sc_import_"+e.replace(/\s|-/g,"_")};var j=e("h",(function(e,r){var t=[];for(var n=2;n<arguments.length;n++){t[n-2]=arguments[n]}var a=null;var i=null;var s=false;var o=false;var l=[];var f=function(r){for(var t=0;t<r.length;t++){a=r[t];if(Array.isArray(a)){f(a)}else if(a!=null&&typeof a!=="boolean"){if(s=typeof e!=="function"&&!C(a)){a=String(a)}if(s&&o){l[l.length-1].$text$+=a}else{l.push(s?k(null,a):a)}o=s}}};f(t);if(r){if(r.name){i=r.name}{var u=r.className||r.class;if(u){r.class=typeof u!=="object"?u:Object.keys(u).filter((function(e){return u[e]})).join(" ")}}}if(typeof e==="function"){return e(r,l,M)}var $=k(e,null);$.$attrs$=r;if(l.length>0){$.$children$=l}{$.$name$=i}return $}));var k=function(e,r){var t={$flags$:0,$tag$:e,$text$:r,$elm$:null,$children$:null};{t.$attrs$=null}{t.$name$=null}return t};var A=e("H",{});var E=function(e){return e&&e.$tag$===A};var M={forEach:function(e,r){return e.map(U).forEach(r)},map:function(e,r){return e.map(U).map(r).map(B)}};var U=function(e){return{vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}};var B=function(e){var r=k(e.vtag,e.vtext);r.$attrs$=e.vattrs;r.$children$=e.vchildren;r.$key$=e.vkey;r.$name$=e.vname;return r};var L=function(e,r,t,n,a,i){if(t!==n){var s=xe(e,r);var o=r.toLowerCase();if(r==="class"){var l=e.classList;var f=P(t);var u=P(n);l.remove.apply(l,f.filter((function(e){return e&&!u.includes(e)})));l.add.apply(l,u.filter((function(e){return e&&!f.includes(e)})))}else{var $=C(n);if((s||$&&n!==null)&&!a){try{if(!e.tagName.includes("-")){var c=n==null?"":n;if(r==="list"){s=false}else if(t==null||e[r]!=c){e[r]=c}}else{e[r]=n}}catch(v){}}if(n==null||n===false){{e.removeAttribute(r)}}else if((!s||i&4||a)&&!$){n=n===true?"":n;{e.setAttribute(r,n)}}}}};var O=/\s/;var P=function(e){return!e?[]:e.split(O)};var I=function(e,r,t,n){var a=r.$elm$.nodeType===11&&r.$elm$.host?r.$elm$.host:r.$elm$;var i=e&&e.$attrs$||x;var s=r.$attrs$||x;{for(n in i){if(!(n in s)){L(a,n,i[n],undefined,t,r.$flags$)}}}for(n in s){L(a,n,i[n],s[n],t,r.$flags$)}};var H=function(e,r,t,n){var o=r.$children$[t];var u=0;var $;var c;var v;if(!s){l=true;if(o.$tag$==="slot"){o.$flags$|=o.$children$?2:1}}if(o.$text$!==null){$=o.$elm$=d.createTextNode(o.$text$)}else if(o.$flags$&1){$=o.$elm$=d.createTextNode("")}else{$=o.$elm$=d.createElement(o.$flags$&2?"slot-fb":o.$tag$);{I(null,o,f)}if(o.$children$){for(u=0;u<o.$children$.length;++u){c=H(e,o,u);if(c){$.appendChild(c)}}}}{$["s-hn"]=i;if(o.$flags$&(2|1)){$["s-sr"]=true;$["s-cr"]=a;$["s-sn"]=o.$name$||"";v=e&&e.$children$&&e.$children$[t];if(v&&v.$tag$===o.$tag$&&e.$elm$){z(e.$elm$,false)}}}return $};var z=function(e,r){h.$flags$|=1;var t=e.childNodes;for(var n=t.length-1;n>=0;n--){var a=t[n];if(a["s-hn"]!==i&&a["s-ol"]){Q(a).insertBefore(a,G(a));a["s-ol"].remove();a["s-ol"]=undefined;l=true}if(r){z(a,r)}}h.$flags$&=~1};var q=function(e,r,t,n,a,i){var s=e["s-cr"]&&e["s-cr"].parentNode||e;var o;for(;a<=i;++a){if(n[a]){o=H(null,t,a);if(o){n[a].$elm$=o;s.insertBefore(o,G(r))}}}};var V=function(e,r,t,n,a){for(;r<=t;++r){if(n=e[r]){a=n.$elm$;{o=true;if(a["s-ol"]){a["s-ol"].remove()}else{z(a,true)}}a.remove()}}};var F=function(e,r,t,n){var a=0;var i=0;var s=r.length-1;var o=r[0];var l=r[s];var f=n.length-1;var u=n[0];var $=n[f];var c;while(a<=s&&i<=f){if(o==null){o=r[++a]}else if(l==null){l=r[--s]}else if(u==null){u=n[++i]}else if($==null){$=n[--f]}else if(W(o,u)){D(o,u);o=r[++a];u=n[++i]}else if(W(l,$)){D(l,$);l=r[--s];$=n[--f]}else if(W(o,$)){if(o.$tag$==="slot"||$.$tag$==="slot"){z(o.$elm$.parentNode,false)}D(o,$);e.insertBefore(o.$elm$,l.$elm$.nextSibling);o=r[++a];$=n[--f]}else if(W(l,u)){if(o.$tag$==="slot"||$.$tag$==="slot"){z(l.$elm$.parentNode,false)}D(l,u);e.insertBefore(l.$elm$,o.$elm$);l=r[--s];u=n[++i]}else{{c=H(r&&r[i],t,i);u=n[++i]}if(c){{Q(o.$elm$).insertBefore(c,G(o.$elm$))}}}}if(a>s){q(e,n[f+1]==null?null:n[f+1].$elm$,t,n,i,f)}else if(i>f){V(r,a,s)}};var W=function(e,r){if(e.$tag$===r.$tag$){if(e.$tag$==="slot"){return e.$name$===r.$name$}return true}return false};var G=function(e){return e&&e["s-ol"]||e};var Q=function(e){return(e["s-ol"]?e["s-ol"]:e).parentNode};var D=function(e,r){var t=r.$elm$=e.$elm$;var n=e.$children$;var a=r.$children$;var i=r.$tag$;var s=r.$text$;var o;if(s===null){{if(i==="slot");else{I(e,r,f)}}if(n!==null&&a!==null){F(t,n,r,a)}else if(a!==null){if(e.$text$!==null){t.textContent=""}q(t,null,r,a,0,a.length-1)}else if(n!==null){V(n,0,n.length-1)}}else if(o=t["s-cr"]){o.parentNode.textContent=s}else if(e.$text$!==s){t.data=s}};var J=function(e){var r=e.childNodes;var t;var n;var a;var i;var s;var o;for(n=0,a=r.length;n<a;n++){t=r[n];if(t.nodeType===1){if(t["s-sr"]){s=t["s-sn"];t.hidden=false;for(i=0;i<a;i++){if(r[i]["s-hn"]!==t["s-hn"]){o=r[i].nodeType;if(s!==""){if(o===1&&s===r[i].getAttribute("slot")){t.hidden=true;break}}else{if(o===1||o===3&&r[i].textContent.trim()!==""){t.hidden=true;break}}}}}J(t)}}};var K=[];var X=function(e){var r;var t;var n;var a;var i;var s;var l=0;var f=e.childNodes;var u=f.length;for(;l<u;l++){r=f[l];if(r["s-sr"]&&(t=r["s-cr"])){n=t.parentNode.childNodes;a=r["s-sn"];for(s=n.length-1;s>=0;s--){t=n[s];if(!t["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==r["s-hn"]){if(Y(t,a)){i=K.find((function(e){return e.$nodeToRelocate$===t}));o=true;t["s-sn"]=t["s-sn"]||a;if(i){i.$slotRefNode$=r}else{K.push({$slotRefNode$:r,$nodeToRelocate$:t})}if(t["s-sr"]){K.map((function(e){if(Y(e.$nodeToRelocate$,t["s-sn"])){i=K.find((function(e){return e.$nodeToRelocate$===t}));if(i&&!e.$slotRefNode$){e.$slotRefNode$=i.$slotRefNode$}}}))}}else if(!K.some((function(e){return e.$nodeToRelocate$===t}))){K.push({$nodeToRelocate$:t})}}}}if(r.nodeType===1){X(r)}}};var Y=function(e,r){if(e.nodeType===1){if(e.getAttribute("slot")===null&&r===""){return true}if(e.getAttribute("slot")===r){return true}return false}if(e["s-sn"]===r){return true}return r===""};var Z=function(e,r){var t=e.$hostElement$;var n=e.$cmpMeta$;var f=e.$vnode$||k(null,null);var u=E(r)?r:j(null,null,r);i=t.tagName;u.$tag$=null;u.$flags$|=4;e.$vnode$=u;u.$elm$=f.$elm$=t;{a=t["s-cr"];s=(n.$flags$&1)!==0;o=false}D(f,u);{if(l){h.$flags$|=1;X(u.$elm$);var $=void 0;var c=void 0;var v=void 0;var p=void 0;var m=void 0;var g=void 0;var y=0;for(;y<K.length;y++){$=K[y];c=$.$nodeToRelocate$;if(!c["s-ol"]){v=d.createTextNode("");v["s-nr"]=c;c.parentNode.insertBefore(c["s-ol"]=v,c)}}for(y=0;y<K.length;y++){$=K[y];c=$.$nodeToRelocate$;if($.$slotRefNode$){p=$.$slotRefNode$.parentNode;m=$.$slotRefNode$.nextSibling;v=c["s-ol"];while(v=v.previousSibling){g=v["s-nr"];if(g&&g["s-sn"]===c["s-sn"]&&p===g.parentNode){g=g.nextSibling;if(!g||!g["s-nr"]){m=g;break}}}if(!m&&p!==c.parentNode||c.nextSibling!==m){if(c!==m){if(!c["s-hn"]&&c["s-ol"]){c["s-hn"]=c["s-ol"].parentNode.nodeName}p.insertBefore(c,m)}}}else{if(c.nodeType===1){c.hidden=true}}}h.$flags$&=~1}if(o){J(u.$elm$)}K.length=0}};var ee=function(e,r){if(r&&!e.$onRenderResolve$){r["s-p"].push(new Promise((function(r){return e.$onRenderResolve$=r})))}};var re=function(e,r){{e.$flags$|=16}if(e.$flags$&4){e.$flags$|=512;return}var t=y("scheduleUpdate",e.$cmpMeta$.$tagName$);var n=e.$ancestorComponent$;var a=e.$lazyInstance$;var i=function(){return te(e,a,r)};ee(e,n);var s;t();return oe(s,(function(){return Ie(i)}))};var te=function(e,r,t){var n=e.$hostElement$;var a=y("update",e.$cmpMeta$.$tagName$);var i=n["s-rc"];if(t){S(e)}var s=y("render",e.$cmpMeta$.$tagName$);{{Z(e,ne(r))}}if(h.$cssShim$){h.$cssShim$.updateHost(n)}{e.$flags$&=~16}{e.$flags$|=2}if(i){i.map((function(e){return e()}));n["s-rc"]=undefined}s();a();{var o=n["s-p"];var l=function(){return ae(e)};if(o.length===0){l()}else{Promise.all(o).then(l);e.$flags$|=4;o.length=0}}};var ne=function(e){try{e=e.render()}catch(r){Ce(r)}return e};var ae=function(e){var r=e.$cmpMeta$.$tagName$;var t=e.$hostElement$;var n=y("postUpdate",r);var a=e.$ancestorComponent$;if(!(e.$flags$&64)){e.$flags$|=64;{le(t)}n();{e.$onReadyResolve$(t);if(!a){se()}}}else{n()}{if(e.$onRenderResolve$){e.$onRenderResolve$();e.$onRenderResolve$=undefined}if(e.$flags$&512){Pe((function(){return re(e,false)}))}e.$flags$&=~(4|512)}};var ie=function(e){{var r=_e(e);var t=r.$hostElement$.isConnected;if(t&&(r.$flags$&(2|16))===2){re(r,false)}return t}};var se=function(e){{le(d.documentElement)}{h.$flags$|=2}};var oe=function(e,r){return e&&e.then?e.then(r):r()};var le=function(e){return e.classList.add("hydrated")};var fe=function(e,r){if(e!=null&&!C(e)){if(r&4){return e==="false"?false:e===""||!!e}if(r&1){return String(e)}return e}return e};var ue=function(e,r){return _e(e).$instanceValues$.get(r)};var $e=function(e,r,t,n){var a=_e(e);var i=a.$instanceValues$.get(r);var s=a.$flags$;var o=a.$lazyInstance$;t=fe(t,n.$members$[r][0]);if((!(s&8)||i===undefined)&&t!==i){a.$instanceValues$.set(r,t);if(o){if((s&(2|16))===2){re(a,false)}}}};var ce=function(e,r,t){if(r.$members$){var n=Object.entries(r.$members$);var a=e.prototype;n.map((function(e){var n=e[0],i=e[1][0];if(i&31||t&2&&i&32){Object.defineProperty(a,n,{get:function(){return ue(this,n)},set:function(e){$e(this,n,e,r)},configurable:true,enumerable:true})}}));if(t&1){var i=new Map;a.attributeChangedCallback=function(e,r,t){var n=this;h.jmp((function(){var r=i.get(e);n[r]=t===null&&typeof n[r]==="boolean"?false:t}))};e.observedAttributes=n.filter((function(e){var r=e[0],t=e[1];return t[0]&15})).map((function(e){var r=e[0],t=e[1];var n=t[1]||r;i.set(n,r);return n}))}}return e};var ve=function(e,r,n,a,i){return __awaiter(t,void 0,void 0,(function(){var e,t,a,s,o,l,f;return __generator(this,(function(u){switch(u.label){case 0:if(!((r.$flags$&32)===0))return[3,3];r.$flags$|=32;i=je(n);if(!i.then)return[3,2];e=b();return[4,i];case 1:i=u.sent();e();u.label=2;case 2:if(!i.isProxied){ce(i,n,2);i.isProxied=true}t=y("createInstance",n.$tagName$);{r.$flags$|=8}try{new i(r)}catch($){Ce($)}{r.$flags$&=~8}t();a=R(n.$tagName$);if(!ke.has(a)&&i.style){s=y("registerStyles",n.$tagName$);o=i.style;N(a,o,!!(n.$flags$&1));s()}u.label=3;case 3:l=r.$ancestorComponent$;f=function(){return re(r,true)};if(l&&l["s-rc"]){l["s-rc"].push(f)}else{f()}return[2]}}))}))};var de=function(e){if((h.$flags$&1)===0){var r=_e(e);var t=r.$cmpMeta$;var n=y("connectedCallback",t.$tagName$);if(!(r.$flags$&1)){r.$flags$|=1;{if(t.$flags$&(4|8)){he(e)}}{var a=e;while(a=a.parentNode||a.host){if(a["s-p"]){ee(r,r.$ancestorComponent$=a);break}}}if(t.$members$){Object.entries(t.$members$).map((function(r){var t=r[0],n=r[1][0];if(n&31&&e.hasOwnProperty(t)){var a=e[t];delete e[t];e[t]=a}}))}{ve(e,r,t)}}n()}};var he=function(e){var r=e["s-cr"]=d.createComment("");r["s-cn"]=true;e.insertBefore(r,e.firstChild)};var pe=function(e){if((h.$flags$&1)===0){var r=_e(e);if(h.$cssShim$){h.$cssShim$.removeHost(e)}}};var me=function(e){e.__appendChild=e.appendChild;e.appendChild=function(e){var r=e["s-sn"]=ge(e);var t=ye(this.childNodes,r);if(t){var n=be(t,r);var a=n[n.length-1];return a.parentNode.insertBefore(e,a.nextSibling)}return this.__appendChild(e)}};var ge=function(e){return e["s-sn"]||e.nodeType===1&&e.getAttribute("slot")||""};var ye=function(e,r){var t=0;var n;for(;t<e.length;t++){n=e[t];if(n["s-sr"]&&n["s-sn"]===r){return n}n=ye(n.childNodes,r);if(n){return n}}return null};var be=function(e,r){var t=[e];while((e=e.nextSibling)&&e["s-sn"]===r){t.push(e)}return t};var we=e("b",(function(e,r){if(r===void 0){r={}}var t=y();var n=[];var a=r.exclude||[];var i=c.customElements;var s=d.head;var o=s.querySelector("meta[charset]");var l=d.createElement("style");var f=[];var u;var $=true;Object.assign(h,r);h.$resourcesUrl$=new URL(r.resourcesUrl||"./",d.baseURI).href;if(r.syncQueue){h.$flags$|=4}e.map((function(e){return e[1].map((function(r){var t={$flags$:r[0],$tagName$:r[1],$members$:r[2],$listeners$:r[3]};{t.$members$=r[2]}var s=t.$tagName$;var o=function(e){__extends(r,e);function r(r){var n=e.call(this,r)||this;r=n;Re(r,t);return n}r.prototype.connectedCallback=function(){var e=this;if(u){clearTimeout(u);u=null}if($){f.push(this)}else{h.jmp((function(){return de(e)}))}};r.prototype.disconnectedCallback=function(){var e=this;h.jmp((function(){return pe(e)}))};r.prototype.forceUpdate=function(){ie(this)};r.prototype.componentOnReady=function(){return _e(this).$onReadyPromise$};return r}(HTMLElement);{me(o.prototype)}t.$lazyBundleIds$=e[0];if(!a.includes(s)&&!i.get(s)){n.push(s);i.define(s,ce(o,t,1))}}))}));{l.innerHTML=n+g;l.setAttribute("data-styles","");s.insertBefore(l,o?o.nextSibling:s.firstChild)}$=false;if(f.length){f.map((function(e){return e.connectedCallback()}))}else{{h.jmp((function(){return u=setTimeout(se,30)}))}}t()}));var Ne=new WeakMap;var _e=function(e){return Ne.get(e)};var Se=e("r",(function(e,r){return Ne.set(r.$lazyInstance$=e,r)}));var Re=function(e,r){var t={$flags$:0,$hostElement$:e,$cmpMeta$:r,$instanceValues$:new Map};{t.$onReadyPromise$=new Promise((function(e){return t.$onReadyResolve$=e}));e["s-p"]=[];e["s-rc"]=[]}return Ne.set(e,t)};var xe=function(e,r){return r in e};var Ce=function(e){return console.error(e)};var Te=new Map;var je=function(e,t,n){var a=e.$tagName$.replace(/-/g,"_");var i=e.$lazyBundleIds$;var s=Te.get(i);if(s){return s[a]}return r.import("./"+i+".entry.js"+"").then((function(e){{Te.set(i,e)}return e[a]}),Ce)};var ke=new Map;var Ae=[];var Ee=[];var Me=[];var Ue=function(e,r){return function(t){e.push(t);if(!$){$=true;if(r&&h.$flags$&4){Pe(Oe)}else{h.raf(Oe)}}}};var Be=function(e){for(var r=0;r<e.length;r++){try{e[r](performance.now())}catch(t){Ce(t)}}e.length=0};var Le=function(e,r){var t=0;var n=0;while(t<e.length&&(n=performance.now())<r){try{e[t++](n)}catch(a){Ce(a)}}if(t===e.length){e.length=0}else if(t!==0){e.splice(0,t)}};var Oe=function(){u++;Be(Ae);var e=(h.$flags$&6)===2?performance.now()+10*Math.ceil(u*(1/22)):Infinity;Le(Ee,e);Le(Me,e);if(Ee.length>0){Me.push.apply(Me,Ee);Ee.length=0}if($=Ae.length+Ee.length+Me.length>0){h.raf(Oe)}else{u=0}};var Pe=function(e){return p().then(e)};var Ie=Ue(Ee,true);var He=e("a",(function(){if(!(v&&v.supports&&v.supports("color","var(--c)"))){return r.import("./p-ee63d33a.system.js").then((function(){if(h.$cssShim$=c.__cssshim){return h.$cssShim$.i()}else{return 0}}))}return p()}));var ze=e("p",(function(){{h.$cssShim$=c.__cssshim}var e=Array.from(d.querySelectorAll("script")).find((function(e){return new RegExp("/"+n+"(\\.esm)?\\.js($|\\?|#)").test(e.src)||e.getAttribute("data-stencil-namespace")===n}));var t=e["data-opts"]||{};if("onbeforeload"in e&&!history.scrollRestoration){return{then:function(){}}}{t.resourcesUrl=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,c.location.href)).href;{qe(t.resourcesUrl,e)}if(!c.customElements){return r.import("./p-88ff3f20.system.js").then((function(){return t}))}}return p(t)}));var qe=function(e,r){var t=T(n);try{c[t]=new Function("w","return import(w);//"+Math.random())}catch(i){var a=new Map;c[t]=function(n){var i=new URL(n,e).href;var s=a.get(i);if(!s){var o=d.createElement("script");o.type="module";o.crossOrigin=r.crossOrigin;o.src=URL.createObjectURL(new Blob(["import * as m from '"+i+"'; window."+t+".m = m;"],{type:"application/javascript"}));s=new Promise((function(e){o.onload=function(){e(c[t].m);o.remove()}}));a.set(i,s);d.head.appendChild(o)}return s}}}}}}));