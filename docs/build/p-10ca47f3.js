let t,e,n=0,l=!1,o=!1,s=!1,r=!1;const i="undefined"!=typeof window?window:{},c=i.document||{head:{}},a={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},f=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),u=new WeakMap,$=t=>u.get(t),m=(t,e)=>u.set(e.o=t,e),p=t=>console.error(t),d=new Map,h=new Map,y=[],w=[],b=[],v=(t,e)=>n=>{t.push(n),l||(l=!0,e&&4&a.t?j(g):a.raf(g))},_=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(o){p(o)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},g=()=>{n++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){p(e)}t.length=0})(y);const t=2==(6&a.t)?performance.now()+10*Math.ceil(n*(1/22)):1/0;_(w,t),_(b,t),w.length>0&&(b.push(...w),w.length=0),(l=y.length+w.length+b.length>0)?a.raf(g):n=0},j=t=>Promise.resolve().then(t),S=v(w,!0),k={},M=t=>"object"==(t=typeof t)||"function"===t,R=()=>i.CSS&&i.CSS.supports&&i.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_slots("./p-73bc5e11.js").then(()=>{a.s=i.__stencil_cssshim}),P=()=>{a.s=i.__stencil_cssshim;const t=Array.from(c.querySelectorAll("script")).find(t=>new RegExp("/slots(\\.esm)?\\.js($|\\?|#)").test(t.src)||"slots"===t.getAttribute("data-stencil-namespace")),e=t["data-opts"]||{};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(e.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,i.location.href)).href,U(e.resourcesUrl,t),window.customElements?Promise.resolve(e):__sc_import_slots("./p-3b66a627.js").then(()=>e))},U=(t,e)=>{const n=(()=>`__sc_import_${"slots".replace(/\s|-/g,"_")}`)();try{i[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const o=new Map;i[n]=l=>{const s=new URL(l,t).href;let r=o.get(s);if(!r){const t=c.createElement("script");t.type="module",t.crossOrigin=e.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${n}.m = m;`],{type:"application/javascript"})),r=new Promise(e=>{t.onload=()=>{e(i[n].m),t.remove()}}),o.set(s,r),c.head.appendChild(t)}return r}}},L=new WeakMap,O=t=>"sc-"+t,x=(t,e,...n)=>{let l=null,o=null,s=!1,r=!1,i=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((s="function"!=typeof t&&!M(l))&&(l=String(l)),s&&r?i[i.length-1].i+=l:i.push(s?C(null,l):l),r=s)};if(c(n),e){e.name&&(o=e.name);{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}if("function"==typeof t)return t(e,i,T);const a=C(t,null);return a.u=e,i.length>0&&(a.$=i),a.p=o,a},C=(t,e)=>({t:0,h:t,i:e,v:null,$:null,u:null,p:null}),E={},T={forEach:(t,e)=>t.map(A).forEach(e),map:(t,e)=>t.map(A).map(e).map(F)},A=t=>({vattrs:t.u,vchildren:t.$,vkey:t._,vname:t.p,vtag:t.h,vtext:t.i}),F=t=>{const e=C(t.vtag,t.vtext);return e.u=t.vattrs,e.$=t.vchildren,e._=t.vkey,e.p=t.vname,e},H=(t,e,n,l,o,s)=>{if(n===l)return;let r=((t,e)=>e in t)(t,e);if(e.toLowerCase(),"class"===e){const e=t.classList,o=W(n),s=W(l);e.remove(...o.filter(t=>t&&!s.includes(t))),e.add(...s.filter(t=>t&&!o.includes(t)))}else{const c=M(l);if((r||c&&null!==l)&&!o)try{if(t.tagName.includes("-"))t[e]=l;else{let o=null==l?"":l;"list"===e?r=!1:null!=n&&t[e]==o||(t[e]=o)}}catch(i){}null==l||!1===l?t.removeAttribute(e):(!r||4&s||o)&&!c&&t.setAttribute(e,l=!0===l?"":l)}},N=/\s/,W=t=>t?t.split(N):[],q=(t,e,n,l)=>{const o=11===e.v.nodeType&&e.v.host?e.v.host:e.v,s=t&&t.u||k,r=e.u||k;for(l in s)l in r||H(o,l,s[l],void 0,n,e.t);for(l in r)H(o,l,s[l],r[l],n,e.t)},B=(n,l,s)=>{let i,a,f,u=l.$[s],$=0;if(o||(r=!0,"slot"===u.h&&(u.t|=u.$?2:1)),null!==u.i)i=u.v=c.createTextNode(u.i);else if(1&u.t)i=u.v=c.createTextNode("");else if(i=u.v=c.createElement(2&u.t?"slot-fb":u.h),q(null,u,!1),u.$)for($=0;$<u.$.length;++$)(a=B(n,u,$,i))&&i.appendChild(a);return i["s-hn"]=e,3&u.t&&(i["s-sr"]=!0,i["s-cr"]=t,i["s-sn"]=u.p||"",(f=n&&n.$&&n.$[s])&&f.h===u.h&&n.v&&V(n.v,!1)),i},V=(t,n)=>{a.t|=1;const l=t.childNodes;for(let o=l.length-1;o>=0;o--){const t=l[o];t["s-hn"]!==e&&t["s-ol"]&&(J(t).insertBefore(t,I(t)),t["s-ol"].remove(),t["s-ol"]=void 0,r=!0),n&&V(t,n)}a.t&=-2},z=(t,e,n,l,o,s)=>{let r,i=t["s-cr"]&&t["s-cr"].parentNode||t;for(;o<=s;++o)l[o]&&(r=B(null,n,o,t))&&(l[o].v=r,i.insertBefore(r,I(e)))},D=(t,e,n,l,o)=>{for(;e<=n;++e)(l=t[e])&&(s=!0,(o=l.v)["s-ol"]?o["s-ol"].remove():V(o,!0),o.remove())},G=(t,e)=>t.h===e.h&&("slot"!==t.h||t.p===e.p),I=t=>t&&t["s-ol"]||t,J=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,K=(t,e)=>{const n=e.v=t.v,l=t.$,o=e.$;let s;null===e.i?("slot"===e.h||q(t,e,!1),null!==l&&null!==o?((t,e,n,l)=>{let o,s=0,r=0,i=e.length-1,c=e[0],a=e[i],f=l.length-1,u=l[0],$=l[f];for(;s<=i&&r<=f;)null==c?c=e[++s]:null==a?a=e[--i]:null==u?u=l[++r]:null==$?$=l[--f]:G(c,u)?(K(c,u),c=e[++s],u=l[++r]):G(a,$)?(K(a,$),a=e[--i],$=l[--f]):G(c,$)?("slot"!==c.h&&"slot"!==$.h||V(c.v.parentNode,!1),K(c,$),t.insertBefore(c.v,a.v.nextSibling),c=e[++s],$=l[--f]):G(a,u)?("slot"!==c.h&&"slot"!==$.h||V(a.v.parentNode,!1),K(a,u),t.insertBefore(a.v,c.v),a=e[--i],u=l[++r]):(o=B(e&&e[r],n,r,t),u=l[++r],o&&J(c.v).insertBefore(o,I(c.v)));s>i?z(t,null==l[f+1]?null:l[f+1].v,n,l,r,f):r>f&&D(e,s,i)})(n,l,e,o):null!==o?(null!==t.i&&(n.textContent=""),z(n,null,e,o,0,o.length-1)):null!==l&&D(l,0,l.length-1)):(s=n["s-cr"])?s.parentNode.textContent=e.i:t.i!==e.i&&(n.data=e.i)},Q=t=>{let e,n,l,o,s,r,i=t.childNodes;for(n=0,l=i.length;n<l;n++)if(1===(e=i[n]).nodeType){if(e["s-sr"])for(s=e["s-sn"],e.hidden=!1,o=0;o<l;o++)if(i[o]["s-hn"]!==e["s-hn"])if(r=i[o].nodeType,""!==s){if(1===r&&s===i[o].getAttribute("slot")){e.hidden=!0;break}}else if(1===r||3===r&&""!==i[o].textContent.trim()){e.hidden=!0;break}Q(e)}},X=[],Y=t=>{let e,n,l,o,r=t.childNodes,i=r.length,c=0,a=0,f=0;for(i=r.length;c<i;c++){if((e=r[c])["s-sr"]&&(n=e["s-cr"]))for(o=e["s-sn"],a=(l=n.parentNode.childNodes).length-1;a>=0;a--)(n=l[a])["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===o||1===f&&null===n.getAttribute("slot")&&""===o||1===f&&n.getAttribute("slot")===o)&&(X.some(t=>t.g===n)||(s=!0,n["s-sn"]=o,X.push({j:e,g:n})));1===e.nodeType&&Y(e)}},Z=(t,e)=>{e&&!t.S&&e["s-p"].push(new Promise(e=>t.S=e))},tt=(t,e,n,l)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const o=e.o,s=()=>et(t,e,n,o,l);return Z(e,e.k),st(void 0,()=>S(s))},et=(n,l,i,f,u)=>{const $=n["s-rc"];u&&((t,e)=>{((t,e)=>{let n=O(e.M),l=h.get(n);if(t=11===t.nodeType?t:c,l)if("string"==typeof l){let e,o=L.get(t=t.head||t);o||L.set(t,o=new Set),o.has(n)||((e=c.createElement("style")).innerHTML=l,t.insertBefore(e,t.querySelector("link")),o&&o.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l])})(t.getRootNode(),e)})(n,i),((n,l,i,f)=>{e=n.tagName;const u=l.R||C(null,null),$=(t=>t&&t.h===E)(f)?f:x(null,null,f);if($.h=null,$.t|=4,l.R=$,$.v=u.v=n,t=n["s-cr"],o=!1,s=!1,K(u,$),r){Y($.v);for(let t=0;t<X.length;t++){const e=X[t];if(!e.g["s-ol"]){const t=c.createTextNode("");t["s-nr"]=e.g,e.g.parentNode.insertBefore(e.g["s-ol"]=t,e.g)}}a.t|=1;for(let t=0;t<X.length;t++){const e=X[t],n=e.j.parentNode;let l=e.j.nextSibling,o=e.g["s-ol"];for(;o=o.previousSibling;){let t=o["s-nr"];if(t&&t["s-sn"]===e.g["s-sn"]&&n===t.parentNode&&(!(t=t.nextSibling)||!t["s-nr"])){l=t;break}}(!l&&n!==e.g.parentNode||e.g.nextSibling!==l)&&e.g!==l&&n.insertBefore(e.g,l)}a.t&=-2}s&&Q($.v),X.length=0})(n,l,0,nt(f)),l.t&=-17,l.t|=2,$&&($.forEach(t=>t()),n["s-rc"]=void 0);{const t=n["s-p"],e=()=>lt(n,l,i);0===t.length?e():(Promise.all(t).then(e),l.t|=4,t.length=0)}},nt=t=>{try{t=t.render()}catch(e){p(e)}return t},lt=(t,e,n)=>{const l=e.k;64&e.t||(e.t|=64,t.classList.add("hydrated"),e.P(t),l||ot()),e.S&&(e.S(),e.S=void 0),512&e.t&&j(()=>tt(t,e,n,!1)),e.t&=-517},ot=()=>{c.documentElement.classList.add("hydrated"),a.t|=2},st=(t,e)=>t&&t.then?t.then(e):e(),rt=(t,e,n)=>{if(e.U){const l=Object.entries(e.U),o=t.prototype;if(l.forEach(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(o,t,{get(){return((t,e)=>$(t).L.get(e))(this,t)},set(n){((t,e,n,l)=>{const o=$(this),s=o.O,r=o.L.get(e),i=o.t,c=o.o;(n=((t,e)=>null==t||M(t)?t:4&e?"false"!==t&&(""===t||!!t):1&e?String(t):t)(n,l.U[e][0]))===r||8&i&&void 0!==r||(o.L.set(e,n),c&&2==(18&i)&&tt(s,o,l,!1))})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;o.attributeChangedCallback=function(t,n,l){a.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},it=(t,e={})=>{const n=[],l=e.exclude||[],o=c.head,s=i.customElements,r=o.querySelector("meta[charset]"),m=c.createElement("style"),y=[];let w,b=!0;Object.assign(a,e),a.l=new URL(e.resourcesUrl||"./",c.baseURI).href,e.syncQueue&&(a.t|=4),t.forEach(t=>t[1].forEach(e=>{const o={t:e[0],M:e[1],U:e[2],C:e[3]};o.U=e[2];const r=o.M,i=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,O:t,L:new Map};e.T=new Promise(t=>e.P=t),t["s-p"]=[],t["s-rc"]=[],u.set(t,e)})(t=this)}connectedCallback(){w&&(clearTimeout(w),w=null),b?y.push(this):a.jmp(()=>((t,e)=>{if(0==(1&a.t)){const n=()=>{},l=$(t);if(!(1&l.t)){let n;l.t|=1,n||4&e.t&&(t=>{const e=t["s-cr"]=c.createComment("");e["s-cn"]=!0,t.insertBefore(e,t.firstChild)})(t);{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){Z(l,l.k=e);break}}e.U&&Object.entries(e.U).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),j(()=>(async(t,e,n,l,o)=>{if(0==(32&e.t)){e.t|=32;{if((o=(t=>{const e=t.M.replace(/-/g,"_"),n=t.A,l=d.get(n);return l?l[e]:__sc_import_slots(`./${n}.entry.js`).then(t=>(d.set(n,t),t[e]),p)})(n)).then){const t=()=>{};o=await o,t()}o.isProxied||(rt(o,n,2),o.isProxied=!0);const t=()=>{};e.t|=8;try{new o(e)}catch(i){p(i)}e.t&=-9,t()}const t=O(n.M);if(!h.has(t)&&o.style){const e=()=>{};((t,e,n)=>{let l=h.get(t);f&&n?(l=l||new CSSStyleSheet).replace(e):l=e,h.set(t,l)})(t,o.style,!!(1&n.t)),e()}}const s=e.k,r=()=>tt(t,e,n,!0);s&&s["s-rc"]?s["s-rc"].push(r):r()})(t,l,e))}n()}})(this,o))}disconnectedCallback(){a.jmp(()=>void 0)}forceUpdate(){((t,e)=>{{const n=$(t);n.O.isConnected&&2==(18&n.t)&&tt(t,n,e,!1)}})(this,o)}componentOnReady(){return $(this).T}};o.A=t[0],l.includes(r)||s.get(r)||(n.push(r),s.define(r,rt(i,o,1)))})),m.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",m.setAttribute("data-styles",""),o.insertBefore(m,r?r.nextSibling:o.firstChild),b=!1,y.length>0?y.forEach(t=>t.connectedCallback()):a.jmp(()=>w=setTimeout(ot,30,"timeout"))};export{E as H,R as a,it as b,x as h,P as p,m as r};