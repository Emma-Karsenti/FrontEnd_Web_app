import{S as _t,i as ht,s as mt,a as gt,e as V,c as wt,b as J,g as te,t as j,d as ne,f as C,h as H,j as yt,o as Ne,k as vt,l as bt,m as Et,n as Oe,p as Q,q as kt,r as Rt,u as Lt,v as le,w as M,x as W,y as _e,z as G,A as Y,B as ve}from"./chunks/index-20254749.js";import{S as lt,a as ct,I as z,g as Ze,f as xe,b as Ie,c as be,s as Z,i as et,d as ue,e as ae,P as tt,h as St,j as Pt,k as At}from"./chunks/singletons-f38e7c19.js";import{R as nt,H as de}from"./chunks/control-e7f5239e.js";import{u as Ot}from"./chunks/parse-b67c4dc9.js";function It(a,e){return a==="/"||e==="ignore"?a:e==="never"?a.endsWith("/")?a.slice(0,-1):a:e==="always"&&!a.endsWith("/")?a+"/":a}function Ut(a){return a.split("%25").map(decodeURI).join("%25")}function Tt(a){for(const e in a)a[e]=decodeURIComponent(a[e]);return a}const $t=["href","pathname","search","searchParams","toString","toJSON"];function Dt(a,e){const n=new URL(a);for(const s of $t){let o=n[s];Object.defineProperty(n,s,{get(){return e(),o},enumerable:!0,configurable:!0})}return Nt(n),n}function Nt(a){Object.defineProperty(a,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const Vt="/__data.json";function jt(a){return a.replace(/\/$/,"")+Vt}function ft(a){try{return JSON.parse(sessionStorage[a])}catch{}}function at(a,e){const n=JSON.stringify(e);try{sessionStorage[a]=n}catch{}}function Ct(...a){let e=5381;for(const n of a)if(typeof n=="string"){let s=n.length;for(;s;)e=e*33^n.charCodeAt(--s)}else if(ArrayBuffer.isView(n)){const s=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let o=s.length;for(;o;)e=e*33^s[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const Ee=window.fetch;window.fetch=(a,e)=>((a instanceof Request?a.method:(e==null?void 0:e.method)||"GET")!=="GET"&&pe.delete(je(a)),Ee(a,e));const pe=new Map;function qt(a,e){const n=je(a,e),s=document.querySelector(n);if(s!=null&&s.textContent){const{body:o,...d}=JSON.parse(s.textContent),t=s.getAttribute("data-ttl");return t&&pe.set(n,{body:o,init:d,ttl:1e3*Number(t)}),Promise.resolve(new Response(o,d))}return Ee(a,e)}function Bt(a,e,n){if(pe.size>0){const s=je(a,n),o=pe.get(s);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(o.body,o.init);pe.delete(s)}}return Ee(e,n)}function je(a,e){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(a instanceof Request?a.url:a)}]`;if(e!=null&&e.headers||e!=null&&e.body){const o=[];e.headers&&o.push([...new Headers(e.headers)].join(",")),e.body&&(typeof e.body=="string"||ArrayBuffer.isView(e.body))&&o.push(e.body),s+=`[data-hash="${Ct(...o)}"]`}return s}const Ft=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Ht(a){const e=[];return{pattern:a==="/"?/^\/$/:new RegExp(`^${zt(a).map(s=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);if(o)return e.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);if(d)return e.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!s)return;const t=s.split(/\[(.+?)\](?!\])/);return"/"+t.map((_,h)=>{if(h%2){if(_.startsWith("x+"))return Ue(String.fromCharCode(parseInt(_.slice(2),16)));if(_.startsWith("u+"))return Ue(String.fromCharCode(..._.slice(2).split("-").map(S=>parseInt(S,16))));const g=Ft.exec(_);if(!g)throw new Error(`Invalid param: ${_}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,L,T,D,B]=g;return e.push({name:D,matcher:B,optional:!!L,rest:!!T,chained:T?h===1&&t[0]==="":!1}),T?"(.*?)":L?"([^/]*)?":"([^/]+?)"}return Ue(_)}).join("")}).join("")}/?$`),params:e}}function Kt(a){return!/^\([^)]+\)$/.test(a)}function zt(a){return a.slice(1).split("/").filter(Kt)}function Jt(a,e,n){const s={},o=a.slice(1);let d=0;for(let t=0;t<e.length;t+=1){const f=e[t],_=o[t-d];if(f.chained&&f.rest&&d){s[f.name]=o.slice(t-d,t+1).filter(h=>h).join("/"),d=0;continue}if(_===void 0){f.rest&&(s[f.name]="");continue}if(!f.matcher||n[f.matcher](_)){s[f.name]=_;continue}if(f.optional&&f.chained){d++;continue}return}if(!d)return s}function Ue(a){return a.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Mt(a,e,n,s){const o=new Set(e);return Object.entries(n).map(([f,[_,h,g]])=>{const{pattern:L,params:T}=Ht(f),D={id:f,exec:B=>{const S=L.exec(B);if(S)return Jt(S,T,s)},errors:[1,...g||[]].map(B=>a[B]),layouts:[0,...h||[]].map(t),leaf:d(_)};return D.errors.length=D.layouts.length=Math.max(D.errors.length,D.layouts.length),D});function d(f){const _=f<0;return _&&(f=~f),[_,a[f]]}function t(f){return f===void 0?f:[o.has(f),a[f]]}}function Wt(a){let e,n,s;var o=a[1][0];function d(t){return{props:{data:t[3],form:t[2]}}}return o&&(e=M(o,d(a)),a[15](e)),{c(){e&&W(e.$$.fragment),n=V()},l(t){e&&_e(e.$$.fragment,t),n=V()},m(t,f){e&&G(e,t,f),J(t,n,f),s=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&4&&(_.form=t[2]),o!==(o=t[1][0])){if(e){te();const h=e;j(h.$$.fragment,1,0,()=>{Y(h,1)}),ne()}o?(e=M(o,d(t)),t[15](e),W(e.$$.fragment),C(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&j(e.$$.fragment,t),s=!1},d(t){a[15](null),t&&H(n),e&&Y(e,t)}}}function Gt(a){let e,n,s;var o=a[1][0];function d(t){return{props:{data:t[3],$$slots:{default:[Zt]},$$scope:{ctx:t}}}}return o&&(e=M(o,d(a)),a[14](e)),{c(){e&&W(e.$$.fragment),n=V()},l(t){e&&_e(e.$$.fragment,t),n=V()},m(t,f){e&&G(e,t,f),J(t,n,f),s=!0},p(t,f){const _={};if(f&8&&(_.data=t[3]),f&65591&&(_.$$scope={dirty:f,ctx:t}),o!==(o=t[1][0])){if(e){te();const h=e;j(h.$$.fragment,1,0,()=>{Y(h,1)}),ne()}o?(e=M(o,d(t)),t[14](e),W(e.$$.fragment),C(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&j(e.$$.fragment,t),s=!1},d(t){a[14](null),t&&H(n),e&&Y(e,t)}}}function Yt(a){let e,n,s;var o=a[1][1];function d(t){return{props:{data:t[4],form:t[2]}}}return o&&(e=M(o,d(a)),a[13](e)),{c(){e&&W(e.$$.fragment),n=V()},l(t){e&&_e(e.$$.fragment,t),n=V()},m(t,f){e&&G(e,t,f),J(t,n,f),s=!0},p(t,f){const _={};if(f&16&&(_.data=t[4]),f&4&&(_.form=t[2]),o!==(o=t[1][1])){if(e){te();const h=e;j(h.$$.fragment,1,0,()=>{Y(h,1)}),ne()}o?(e=M(o,d(t)),t[13](e),W(e.$$.fragment),C(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&j(e.$$.fragment,t),s=!1},d(t){a[13](null),t&&H(n),e&&Y(e,t)}}}function Xt(a){let e,n,s;var o=a[1][1];function d(t){return{props:{data:t[4],$$slots:{default:[Qt]},$$scope:{ctx:t}}}}return o&&(e=M(o,d(a)),a[12](e)),{c(){e&&W(e.$$.fragment),n=V()},l(t){e&&_e(e.$$.fragment,t),n=V()},m(t,f){e&&G(e,t,f),J(t,n,f),s=!0},p(t,f){const _={};if(f&16&&(_.data=t[4]),f&65575&&(_.$$scope={dirty:f,ctx:t}),o!==(o=t[1][1])){if(e){te();const h=e;j(h.$$.fragment,1,0,()=>{Y(h,1)}),ne()}o?(e=M(o,d(t)),t[12](e),W(e.$$.fragment),C(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&j(e.$$.fragment,t),s=!1},d(t){a[12](null),t&&H(n),e&&Y(e,t)}}}function Qt(a){let e,n,s;var o=a[1][2];function d(t){return{props:{data:t[5],form:t[2]}}}return o&&(e=M(o,d(a)),a[11](e)),{c(){e&&W(e.$$.fragment),n=V()},l(t){e&&_e(e.$$.fragment,t),n=V()},m(t,f){e&&G(e,t,f),J(t,n,f),s=!0},p(t,f){const _={};if(f&32&&(_.data=t[5]),f&4&&(_.form=t[2]),o!==(o=t[1][2])){if(e){te();const h=e;j(h.$$.fragment,1,0,()=>{Y(h,1)}),ne()}o?(e=M(o,d(t)),t[11](e),W(e.$$.fragment),C(e.$$.fragment,1),G(e,n.parentNode,n)):e=null}else o&&e.$set(_)},i(t){s||(e&&C(e.$$.fragment,t),s=!0)},o(t){e&&j(e.$$.fragment,t),s=!1},d(t){a[11](null),t&&H(n),e&&Y(e,t)}}}function Zt(a){let e,n,s,o;const d=[Xt,Yt],t=[];function f(_,h){return _[1][2]?0:1}return e=f(a),n=t[e]=d[e](a),{c(){n.c(),s=V()},l(_){n.l(_),s=V()},m(_,h){t[e].m(_,h),J(_,s,h),o=!0},p(_,h){let g=e;e=f(_),e===g?t[e].p(_,h):(te(),j(t[g],1,1,()=>{t[g]=null}),ne(),n=t[e],n?n.p(_,h):(n=t[e]=d[e](_),n.c()),C(n,1),n.m(s.parentNode,s))},i(_){o||(C(n),o=!0)},o(_){j(n),o=!1},d(_){t[e].d(_),_&&H(s)}}}function rt(a){let e,n=a[7]&&it(a);return{c(){e=vt("div"),n&&n.c(),this.h()},l(s){e=bt(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=Et(e);n&&n.l(o),o.forEach(H),this.h()},h(){Oe(e,"id","svelte-announcer"),Oe(e,"aria-live","assertive"),Oe(e,"aria-atomic","true"),Q(e,"position","absolute"),Q(e,"left","0"),Q(e,"top","0"),Q(e,"clip","rect(0 0 0 0)"),Q(e,"clip-path","inset(50%)"),Q(e,"overflow","hidden"),Q(e,"white-space","nowrap"),Q(e,"width","1px"),Q(e,"height","1px")},m(s,o){J(s,e,o),n&&n.m(e,null)},p(s,o){s[7]?n?n.p(s,o):(n=it(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&H(e),n&&n.d()}}}function it(a){let e;return{c(){e=kt(a[8])},l(n){e=Rt(n,a[8])},m(n,s){J(n,e,s)},p(n,s){s&256&&Lt(e,n[8])},d(n){n&&H(e)}}}function xt(a){let e,n,s,o,d;const t=[Gt,Wt],f=[];function _(g,L){return g[1][1]?0:1}e=_(a),n=f[e]=t[e](a);let h=a[6]&&rt(a);return{c(){n.c(),s=gt(),h&&h.c(),o=V()},l(g){n.l(g),s=wt(g),h&&h.l(g),o=V()},m(g,L){f[e].m(g,L),J(g,s,L),h&&h.m(g,L),J(g,o,L),d=!0},p(g,[L]){let T=e;e=_(g),e===T?f[e].p(g,L):(te(),j(f[T],1,1,()=>{f[T]=null}),ne(),n=f[e],n?n.p(g,L):(n=f[e]=t[e](g),n.c()),C(n,1),n.m(s.parentNode,s)),g[6]?h?h.p(g,L):(h=rt(g),h.c(),h.m(o.parentNode,o)):h&&(h.d(1),h=null)},i(g){d||(C(n),d=!0)},o(g){j(n),d=!1},d(g){f[e].d(g),g&&H(s),h&&h.d(g),g&&H(o)}}}function en(a,e,n){let{stores:s}=e,{page:o}=e,{constructors:d}=e,{components:t=[]}=e,{form:f}=e,{data_0:_=null}=e,{data_1:h=null}=e,{data_2:g=null}=e;yt(s.page.notify);let L=!1,T=!1,D=null;Ne(()=>{const E=s.page.subscribe(()=>{L&&(n(7,T=!0),n(8,D=document.title||"untitled page"))});return n(6,L=!0),E});function B(E){le[E?"unshift":"push"](()=>{t[2]=E,n(0,t)})}function S(E){le[E?"unshift":"push"](()=>{t[1]=E,n(0,t)})}function re(E){le[E?"unshift":"push"](()=>{t[1]=E,n(0,t)})}function X(E){le[E?"unshift":"push"](()=>{t[0]=E,n(0,t)})}function he(E){le[E?"unshift":"push"](()=>{t[0]=E,n(0,t)})}return a.$$set=E=>{"stores"in E&&n(9,s=E.stores),"page"in E&&n(10,o=E.page),"constructors"in E&&n(1,d=E.constructors),"components"in E&&n(0,t=E.components),"form"in E&&n(2,f=E.form),"data_0"in E&&n(3,_=E.data_0),"data_1"in E&&n(4,h=E.data_1),"data_2"in E&&n(5,g=E.data_2)},a.$$.update=()=>{a.$$.dirty&1536&&s.page.set(o)},[t,d,f,_,h,g,L,T,D,s,o,B,S,re,X,he]}class tn extends _t{constructor(e){super(),ht(this,e,en,xt,mt,{stores:9,page:10,constructors:1,components:0,form:2,data_0:3,data_1:4,data_2:5})}}const nn="modulepreload",an=function(a,e){return new URL(a,e).href},ot={},q=function(e,n,s){if(!n||n.length===0)return e();const o=document.getElementsByTagName("link");return Promise.all(n.map(d=>{if(d=an(d,s),d in ot)return;ot[d]=!0;const t=d.endsWith(".css"),f=t?'[rel="stylesheet"]':"";if(!!s)for(let g=o.length-1;g>=0;g--){const L=o[g];if(L.href===d&&(!t||L.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const h=document.createElement("link");if(h.rel=t?"stylesheet":nn,t||(h.as="script",h.crossOrigin=""),h.href=d,document.head.appendChild(h),t)return new Promise((g,L)=>{h.addEventListener("load",g),h.addEventListener("error",()=>L(new Error(`Unable to preload CSS for ${d}`)))})})).then(()=>e())},rn={},ke=[()=>q(()=>import("./chunks/0-3eabad1e.js"),["./chunks/0-3eabad1e.js","./components/pages/_layout.svelte-3401ab20.js","./chunks/index-20254749.js","./chunks/stores-83f40538.js","./chunks/singletons-f38e7c19.js","./assets/_layout-0900238b.css"],import.meta.url),()=>q(()=>import("./chunks/1-2023ce05.js"),["./chunks/1-2023ce05.js","./components/pages/_error.svelte-20579c7a.js","./chunks/index-20254749.js","./chunks/stores-83f40538.js","./chunks/singletons-f38e7c19.js","./assets/_error-055ffb4d.css"],import.meta.url),()=>q(()=>import("./chunks/2-4f30578c.js"),["./chunks/2-4f30578c.js","./components/pages/profile/@_user_/_layout.svelte-5b1fc231.js","./chunks/index-20254749.js","./chunks/forms-73b5ffc7.js","./chunks/parse-b67c4dc9.js","./chunks/singletons-f38e7c19.js","./chunks/stores-83f40538.js"],import.meta.url),()=>q(()=>import("./chunks/3-c223137a.js"),["./chunks/3-c223137a.js","./components/pages/_page.svelte-cdfbca0e.js","./chunks/index-20254749.js","./chunks/stores-83f40538.js","./chunks/singletons-f38e7c19.js","./chunks/index-d0400b9a.js","./chunks/forms-73b5ffc7.js","./chunks/parse-b67c4dc9.js"],import.meta.url),()=>q(()=>import("./chunks/4-45430c1e.js"),["./chunks/4-45430c1e.js","./components/pages/article/_slug_/_page.svelte-a8bc4ee4.js","./chunks/index-20254749.js","./chunks/forms-73b5ffc7.js","./chunks/parse-b67c4dc9.js","./chunks/singletons-f38e7c19.js","./assets/_page-f204af20.css"],import.meta.url),()=>q(()=>import("./chunks/5-3c17420e.js"),["./chunks/5-3c17420e.js","./components/pages/editor/_page.svelte-09da2328.js","./chunks/index-20254749.js","./chunks/Editor-a9d6b6fd.js","./chunks/forms-73b5ffc7.js","./chunks/parse-b67c4dc9.js","./chunks/singletons-f38e7c19.js","./chunks/ListErrors-1b15f5ad.js","./assets/Editor-42c9ce99.css"],import.meta.url),()=>q(()=>import("./chunks/6-62ceb380.js"),["./chunks/6-62ceb380.js","./components/pages/editor/_slug_/_page.svelte-27e1749e.js","./chunks/index-20254749.js","./chunks/Editor-a9d6b6fd.js","./chunks/forms-73b5ffc7.js","./chunks/parse-b67c4dc9.js","./chunks/singletons-f38e7c19.js","./chunks/ListErrors-1b15f5ad.js","./assets/Editor-42c9ce99.css"],import.meta.url),()=>q(()=>import("./chunks/7-c23246b0.js"),["./chunks/7-c23246b0.js","./components/pages/login/_page.svelte-756c5f7e.js","./chunks/index-20254749.js","./chunks/forms-73b5ffc7.js","./chunks/parse-b67c4dc9.js","./chunks/singletons-f38e7c19.js","./chunks/ListErrors-1b15f5ad.js"],import.meta.url),()=>q(()=>import("./chunks/8-448bdb3d.js"),["./chunks/8-448bdb3d.js","./chunks/_page-46c9d4b7.js","./chunks/control-e7f5239e.js","./components/pages/profile/_page.svelte-2a86d700.js","./chunks/index-20254749.js"],import.meta.url),()=>q(()=>import("./chunks/9-4dc3b2f8.js"),["./chunks/9-4dc3b2f8.js","./components/pages/profile/@_user_/_page.svelte-dad57502.js","./chunks/index-20254749.js","./chunks/index-d0400b9a.js","./chunks/stores-83f40538.js","./chunks/singletons-f38e7c19.js","./chunks/forms-73b5ffc7.js","./chunks/parse-b67c4dc9.js"],import.meta.url),()=>q(()=>import("./chunks/10-2ea1aefd.js"),["./chunks/10-2ea1aefd.js","./components/pages/profile/@_user_/favorites/_page.svelte-1b26f789.js","./chunks/index-20254749.js","./chunks/index-d0400b9a.js","./chunks/stores-83f40538.js","./chunks/singletons-f38e7c19.js","./chunks/forms-73b5ffc7.js","./chunks/parse-b67c4dc9.js"],import.meta.url),()=>q(()=>import("./chunks/11-fcb1f6a6.js"),["./chunks/11-fcb1f6a6.js","./components/pages/register/_page.svelte-4231c623.js","./chunks/index-20254749.js","./chunks/forms-73b5ffc7.js","./chunks/parse-b67c4dc9.js","./chunks/singletons-f38e7c19.js","./chunks/ListErrors-1b15f5ad.js"],import.meta.url),()=>q(()=>import("./chunks/12-e49ab483.js"),["./chunks/12-e49ab483.js","./components/pages/settings/_page.svelte-2c21daf7.js","./chunks/index-20254749.js","./chunks/forms-73b5ffc7.js","./chunks/parse-b67c4dc9.js","./chunks/singletons-f38e7c19.js","./chunks/ListErrors-1b15f5ad.js"],import.meta.url)],ut=[0,2],on={"/":[-4],"/article/[slug]":[-5],"/editor":[-6],"/editor/[slug]":[-7],"/login":[-8],"/profile":[8],"/profile/@[user]":[-10,[2]],"/profile/@[user]/favorites":[-11,[2]],"/register":[-12],"/settings":[-13]},sn={handleError:({error:a})=>{console.error(a)}};async function ln(a){var e;for(const n in a)if(typeof((e=a[n])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(a).map(async([s,o])=>[s,await o])));return a}function cn(a){return a.filter(e=>e!=null)}const Te=Mt(ke,ut,on,rn),dt=ke[0],Ve=ke[1];dt();Ve();const ee=ft(lt)??{},ce=ft(ct)??{};function $e(a){ee[a]=ue()}function fn({target:a}){var Ye;const e=document.documentElement,n=[],s=[];let o=null;const d={before_navigate:[],after_navigate:[]};let t={branch:[],error:null,url:null},f=!1,_=!1,h=!0,g=!1,L=!1,T=!1,D=!1,B,S=(Ye=history.state)==null?void 0:Ye[z];S||(S=Date.now(),history.replaceState({...history.state,[z]:S},"",location.href));const re=ee[S];re&&(history.scrollRestoration="manual",scrollTo(re.x,re.y));let X,he,E;async function Ce(){E=E||Promise.resolve(),await E,E=null;const r=new URL(location.href),i=oe(r,!0);o=null,await He(i,r,[])}function qe(r){s.some(i=>i==null?void 0:i.snapshot)&&(ce[r]=s.map(i=>{var c;return(c=i==null?void 0:i.snapshot)==null?void 0:c.capture()}))}function Be(r){var i;(i=ce[r])==null||i.forEach((c,l)=>{var p,u;(u=(p=s[l])==null?void 0:p.snapshot)==null||u.restore(c)})}async function Re(r,{noScroll:i=!1,replaceState:c=!1,keepFocus:l=!1,state:p={},invalidateAll:u=!1},w,m){return typeof r=="string"&&(r=new URL(r,Ze(document))),ye({url:r,scroll:i?ue():null,keepfocus:l,redirect_chain:w,details:{state:p,replaceState:c},nav_token:m,accepted:()=>{u&&(D=!0)},blocked:()=>{},type:"goto"})}async function Fe(r){return o={id:r.id,promise:Je(r).then(i=>(i.type==="loaded"&&i.state.error&&(o=null),i))},o.promise}async function me(...r){const c=Te.filter(l=>r.some(p=>l.exec(p))).map(l=>Promise.all([...l.layouts,l.leaf].map(p=>p==null?void 0:p[1]())));await Promise.all(c)}async function He(r,i,c,l,p,u={},w){var v,y;he=u;let m=r&&await Je(r);if(m||(m=await Ge(i,{id:null},await fe(new Error(`Not found: ${i.pathname}`),{url:i,params:{},route:{id:null}}),404)),i=(r==null?void 0:r.url)||i,he!==u)return!1;if(m.type==="redirect")if(c.length>10||c.includes(i.pathname))m=await ge({status:500,error:await fe(new Error("Redirect loop"),{url:i,params:{},route:{id:null}}),url:i,route:{id:null}});else return Re(new URL(m.location,i).href,{},[...c,i.pathname],u),!1;else((y=(v=m.props)==null?void 0:v.page)==null?void 0:y.status)>=400&&await Z.updated.check()&&await se(i);if(n.length=0,D=!1,g=!0,l&&($e(l),qe(l)),p&&p.details){const{details:k}=p,A=k.replaceState?0:1;if(k.state[z]=S+=A,history[k.replaceState?"replaceState":"pushState"](k.state,"",i),!k.replaceState){let I=S+1;for(;ce[I]||ee[I];)delete ce[I],delete ee[I],I+=1}}if(o=null,_?(t=m.state,m.props.page&&(m.props.page.url=i),B.$set(m.props)):Ke(m),p){const{scroll:k,keepfocus:A}=p,{activeElement:I}=document;await ve();const P=document.activeElement!==I&&document.activeElement!==document.body;if(!A&&!P&&await De(),h){const b=i.hash&&document.getElementById(decodeURIComponent(i.hash.slice(1)));k?scrollTo(k.x,k.y):b?b.scrollIntoView():scrollTo(0,0)}}else await ve();h=!0,m.props.page&&(X=m.props.page),w&&w(),g=!1}function Ke(r){var l;t=r.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),X=r.props.page,B=new tn({target:a,props:{...r.props,stores:Z,components:s},hydrate:!0}),Be(S);const c={from:null,to:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};d.after_navigate.forEach(p=>p(c)),_=!0}async function ie({url:r,params:i,branch:c,status:l,error:p,route:u,form:w}){let m="never";for(const P of c)(P==null?void 0:P.slash)!==void 0&&(m=P.slash);r.pathname=It(r.pathname,m),r.search=r.search;const v={type:"loaded",state:{url:r,params:i,branch:c,error:p,route:u},props:{constructors:cn(c).map(P=>P.node.component)}};w!==void 0&&(v.props.form=w);let y={},k=!X,A=0;for(let P=0;P<Math.max(c.length,t.branch.length);P+=1){const b=c[P],$=t.branch[P];(b==null?void 0:b.data)!==($==null?void 0:$.data)&&(k=!0),b&&(y={...y,...b.data},k&&(v.props[`data_${A}`]=y),A+=1)}return(!t.url||r.href!==t.url.href||t.error!==p||w!==void 0&&w!==X.form||k)&&(v.props.page={error:p,params:i,route:{id:(u==null?void 0:u.id)??null},status:l,url:new URL(r),form:w??null,data:k?y:X.data}),v}async function Le({loader:r,parent:i,url:c,params:l,route:p,server_data_node:u}){var y,k,A;let w=null;const m={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await r();if((y=v.universal)!=null&&y.load){let I=function(...b){for(const $ of b){const{href:F}=new URL($,c);m.dependencies.add(F)}};const P={route:{get id(){return m.route=!0,p.id}},params:new Proxy(l,{get:(b,$)=>(m.params.add($),b[$])}),data:(u==null?void 0:u.data)??null,url:Dt(c,()=>{m.url=!0}),async fetch(b,$){let F;b instanceof Request?(F=b.url,$={body:b.method==="GET"||b.method==="HEAD"?void 0:await b.blob(),cache:b.cache,credentials:b.credentials,headers:b.headers,integrity:b.integrity,keepalive:b.keepalive,method:b.method,mode:b.mode,redirect:b.redirect,referrer:b.referrer,referrerPolicy:b.referrerPolicy,signal:b.signal,...$}):F=b;const K=new URL(F,c);return I(K.href),K.origin===c.origin&&(F=K.href.slice(c.origin.length)),_?Bt(F,K.href,$):qt(F,$)},setHeaders:()=>{},depends:I,parent(){return m.parent=!0,i()}};w=await v.universal.load.call(null,P)??null,w=w?await ln(w):null}return{node:v,loader:r,server:u,universal:(k=v.universal)!=null&&k.load?{type:"data",data:w,uses:m}:null,data:w??(u==null?void 0:u.data)??null,slash:((A=v.universal)==null?void 0:A.trailingSlash)??(u==null?void 0:u.slash)}}function ze(r,i,c,l,p){if(D)return!0;if(!l)return!1;if(l.parent&&r||l.route&&i||l.url&&c)return!0;for(const u of l.params)if(p[u]!==t.params[u])return!0;for(const u of l.dependencies)if(n.some(w=>w(new URL(u))))return!0;return!1}function Se(r,i){return(r==null?void 0:r.type)==="data"?{type:"data",data:r.data,uses:{dependencies:new Set(r.uses.dependencies??[]),params:new Set(r.uses.params??[]),parent:!!r.uses.parent,route:!!r.uses.route,url:!!r.uses.url},slash:r.slash}:(r==null?void 0:r.type)==="skip"?i??null:null}async function Je({id:r,invalidating:i,url:c,params:l,route:p}){if((o==null?void 0:o.id)===r)return o.promise;const{errors:u,layouts:w,leaf:m}=p,v=[...w,m];u.forEach(R=>R==null?void 0:R().catch(()=>{})),v.forEach(R=>R==null?void 0:R[1]().catch(()=>{}));let y=null;const k=t.url?r!==t.url.pathname+t.url.search:!1,A=t.route?p.id!==t.route.id:!1;let I=!1;const P=v.map((R,N)=>{var x;const O=t.branch[N],U=!!(R!=null&&R[0])&&((O==null?void 0:O.loader)!==R[1]||ze(I,A,k,(x=O.server)==null?void 0:x.uses,l));return U&&(I=!0),U});if(P.some(Boolean)){try{y=await st(c,P)}catch(R){return ge({status:R instanceof de?R.status:500,error:await fe(R,{url:c,params:l,route:{id:p.id}}),url:c,route:p})}if(y.type==="redirect")return y}const b=y==null?void 0:y.nodes;let $=!1;const F=v.map(async(R,N)=>{var Pe;if(!R)return;const O=t.branch[N],U=b==null?void 0:b[N];if((!U||U.type==="skip")&&R[1]===(O==null?void 0:O.loader)&&!ze($,A,k,(Pe=O.universal)==null?void 0:Pe.uses,l))return O;if($=!0,(U==null?void 0:U.type)==="error")throw U;return Le({loader:R[1],url:c,params:l,route:p,parent:async()=>{var Qe;const Xe={};for(let Ae=0;Ae<N;Ae+=1)Object.assign(Xe,(Qe=await F[Ae])==null?void 0:Qe.data);return Xe},server_data_node:Se(U===void 0&&R[0]?{type:"skip"}:U??null,R[0]?O==null?void 0:O.server:void 0)})});for(const R of F)R.catch(()=>{});const K=[];for(let R=0;R<v.length;R+=1)if(v[R])try{K.push(await F[R])}catch(N){if(N instanceof nt)return{type:"redirect",location:N.location};let O=500,U;if(b!=null&&b.includes(N))O=N.status??O,U=N.error;else if(N instanceof de)O=N.status,U=N.body;else{if(await Z.updated.check())return await se(c);U=await fe(N,{params:l,url:c,route:{id:p.id}})}const x=await Me(R,K,u);return x?await ie({url:c,params:l,branch:K.slice(0,x.idx).concat(x.node),status:O,error:U,route:p}):await Ge(c,{id:p.id},U,O)}else K.push(void 0);return await ie({url:c,params:l,branch:K,status:200,error:null,route:p,form:i?void 0:null})}async function Me(r,i,c){for(;r--;)if(c[r]){let l=r;for(;!i[l];)l-=1;try{return{idx:l+1,node:{node:await c[r](),loader:c[r],data:{},server:null,universal:null}}}catch{continue}}}async function ge({status:r,error:i,url:c,route:l}){const p={};let u=null;if(ut[0]===0)try{const y=await st(c,[!0]);if(y.type!=="data"||y.nodes[0]&&y.nodes[0].type!=="data")throw 0;u=y.nodes[0]??null}catch{(c.origin!==location.origin||c.pathname!==location.pathname||f)&&await se(c)}const m=await Le({loader:dt,url:c,params:p,route:l,parent:()=>Promise.resolve({}),server_data_node:Se(u)}),v={node:await Ve(),loader:Ve,universal:null,server:null,data:null};return await ie({url:c,params:p,branch:[m,v],status:r,error:i,route:null})}function oe(r,i){if(et(r,ae))return;const c=we(r);for(const l of Te){const p=l.exec(c);if(p)return{id:r.pathname+r.search,invalidating:i,route:l,params:Tt(p),url:r}}}function we(r){return Ut(r.pathname.slice(ae.length)||"/")}function We({url:r,type:i,intent:c,delta:l}){var m,v;let p=!1;const u={from:{params:t.params,route:{id:((m=t.route)==null?void 0:m.id)??null},url:t.url},to:{params:(c==null?void 0:c.params)??null,route:{id:((v=c==null?void 0:c.route)==null?void 0:v.id)??null},url:r},willUnload:!c,type:i};l!==void 0&&(u.delta=l);const w={...u,cancel:()=>{p=!0}};return L||d.before_navigate.forEach(y=>y(w)),p?null:u}async function ye({url:r,scroll:i,keepfocus:c,redirect_chain:l,details:p,type:u,delta:w,nav_token:m,accepted:v,blocked:y}){const k=oe(r,!1),A=We({url:r,type:u,delta:w,intent:k});if(!A){y();return}const I=S;v(),L=!0,_&&Z.navigating.set(A),await He(k,r,l,I,{scroll:i,keepfocus:c,details:p},m,()=>{L=!1,d.after_navigate.forEach(P=>P(A)),Z.navigating.set(null)})}async function Ge(r,i,c,l){return r.origin===location.origin&&r.pathname===location.pathname&&!f?await ge({status:l,error:c,url:r,route:i}):await se(r)}function se(r){return location.href=r.href,new Promise(()=>{})}function pt(){let r;e.addEventListener("mousemove",u=>{const w=u.target;clearTimeout(r),r=setTimeout(()=>{l(w,2)},20)});function i(u){l(u.composedPath()[0],1)}e.addEventListener("mousedown",i),e.addEventListener("touchstart",i,{passive:!0});const c=new IntersectionObserver(u=>{for(const w of u)w.isIntersecting&&(me(we(new URL(w.target.href))),c.unobserve(w.target))},{threshold:0});function l(u,w){const m=xe(u,e);if(!m)return;const{url:v,external:y}=Ie(m,ae);if(y)return;const k=be(m);if(!k.reload)if(w<=k.preload_data){const A=oe(v,!1);A&&Fe(A)}else w<=k.preload_code&&me(we(v))}function p(){c.disconnect();for(const u of e.querySelectorAll("a")){const{url:w,external:m}=Ie(u,ae);if(m)continue;const v=be(u);v.reload||(v.preload_code===tt.viewport&&c.observe(u),v.preload_code===tt.eager&&me(we(w)))}}d.after_navigate.push(p),p()}return{after_navigate:r=>{Ne(()=>(d.after_navigate.push(r),()=>{const i=d.after_navigate.indexOf(r);d.after_navigate.splice(i,1)}))},before_navigate:r=>{Ne(()=>(d.before_navigate.push(r),()=>{const i=d.before_navigate.indexOf(r);d.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(g||!_)&&(h=!1)},goto:(r,i={})=>Re(r,i,[]),invalidate:r=>{if(typeof r=="function")n.push(r);else{const{href:i}=new URL(r,location.href);n.push(c=>c.href===i)}return Ce()},invalidateAll:()=>(D=!0,Ce()),preload_data:async r=>{const i=new URL(r,Ze(document)),c=oe(i,!1);if(!c)throw new Error(`Attempted to preload a URL that does not belong to this app: ${i}`);await Fe(c)},preload_code:me,apply_action:async r=>{if(r.type==="error"){const i=new URL(location.href),{branch:c,route:l}=t;if(!l)return;const p=await Me(t.branch.length,c,l.errors);if(p){const u=await ie({url:i,params:t.params,branch:c.slice(0,p.idx).concat(p.node),status:r.status??500,error:r.error,route:l});t=u.state,B.$set(u.props),ve().then(De)}}else if(r.type==="redirect")Re(r.location,{invalidateAll:!0},[]);else{const i={form:r.data,page:{...X,form:r.data,status:r.status}};B.$set(i),r.type==="success"&&ve().then(De)}},_start_router:()=>{var r;history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var l;let c=!1;if(!L){const p={from:{params:t.params,route:{id:((l=t.route)==null?void 0:l.id)??null},url:t.url},to:null,willUnload:!0,type:"leave",cancel:()=>c=!0};d.before_navigate.forEach(u=>u(p))}c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&($e(S),at(lt,ee),qe(S),at(ct,ce))}),(r=navigator.connection)!=null&&r.saveData||pt(),e.addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const c=xe(i.composedPath()[0],e);if(!c)return;const{url:l,external:p,target:u}=Ie(c,ae);if(!l)return;if(u==="_parent"||u==="_top"){if(window.parent!==window)return}else if(u&&u!=="_self")return;const w=be(c);if(!(c instanceof SVGAElement)&&l.protocol!==location.protocol&&!(l.protocol==="https:"||l.protocol==="http:"))return;if(p||w.reload){We({url:l,type:"link"})||i.preventDefault(),L=!0;return}const[v,y]=l.href.split("#");if(y!==void 0&&v===location.href.split("#")[0]){T=!0,$e(S),t.url=l,Z.page.set({...X,url:l}),Z.page.notify();return}ye({url:l,scroll:w.noscroll?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:l.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),e.addEventListener("submit",i=>{if(i.defaultPrevented)return;const c=HTMLFormElement.prototype.cloneNode.call(i.target),l=i.submitter;if(((l==null?void 0:l.formMethod)||c.method)!=="get")return;const u=new URL((l==null?void 0:l.hasAttribute("formaction"))&&(l==null?void 0:l.formAction)||c.action);if(et(u,ae))return;const w=i.target,{noscroll:m,reload:v}=be(w);if(v)return;i.preventDefault(),i.stopPropagation();const y=new FormData(w),k=l==null?void 0:l.getAttribute("name");k&&y.append(k,(l==null?void 0:l.getAttribute("value"))??""),u.search=new URLSearchParams(y).toString(),ye({url:u,scroll:m?ue():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:!1},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async i=>{var c;if((c=i.state)!=null&&c[z]){if(i.state[z]===S)return;const l=ee[i.state[z]];if(t.url.href.split("#")[0]===location.href.split("#")[0]){ee[S]=ue(),S=i.state[z],scrollTo(l.x,l.y);return}const p=i.state[z]-S;let u=!1;await ye({url:new URL(location.href),scroll:l,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{S=i.state[z]},blocked:()=>{history.go(-p),u=!0},type:"popstate",delta:p}),u||Be(S)}}),addEventListener("hashchange",()=>{T&&(T=!1,history.replaceState({...history.state,[z]:++S},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&Z.navigating.set(null)})},_hydrate:async({status:r=200,error:i,node_ids:c,params:l,route:p,data:u,form:w})=>{f=!0;const m=new URL(location.href);({params:l={},route:p={id:null}}=oe(m,!1)||{});let v;try{const y=c.map(async(k,A)=>{const I=u[A];return Le({loader:ke[k],url:m,params:l,route:p,parent:async()=>{const P={};for(let b=0;b<A;b+=1)Object.assign(P,(await y[b]).data);return P},server_data_node:Se(I)})});v=await ie({url:m,params:l,branch:await Promise.all(y),status:r,error:i,form:w,route:Te.find(({id:k})=>k===p.id)??null})}catch(y){if(y instanceof nt){await se(new URL(y.location,location.href));return}v=await ge({status:y instanceof de?y.status:500,error:await fe(y,{url:m,params:l,route:p}),url:m,route:p})}Ke(v)}}}async function st(a,e){var d;const n=new URL(a);n.pathname=jt(a.pathname),n.searchParams.append("x-sveltekit-invalidated",e.map(t=>t?"1":"").join("_"));const s=await Ee(n.href),o=await s.json();if(!s.ok)throw new de(s.status,o);return(d=o.nodes)==null||d.forEach(t=>{(t==null?void 0:t.type)==="data"&&(t.data=Ot(t.data),t.uses={dependencies:new Set(t.uses.dependencies??[]),params:new Set(t.uses.params??[]),parent:!!t.uses.parent,route:!!t.uses.route,url:!!t.uses.url})}),o}function fe(a,e){return a instanceof de?a.body:sn.handleError({error:a,event:e})??{message:e.route.id!=null?"Internal Error":"Not Found"}}function De(){const a=document.querySelector("[autofocus]");if(a)a.focus();else{const e=document.body,n=e.getAttribute("tabindex");return e.tabIndex=-1,e.focus({preventScroll:!0}),n!==null?e.setAttribute("tabindex",n):e.removeAttribute("tabindex"),new Promise(s=>{setTimeout(()=>{var o;s((o=getSelection())==null?void 0:o.removeAllRanges())})})}}async function hn({assets:a,env:e,hydrate:n,target:s,version:o}){Pt(a),At(o);const d=fn({target:s});St({client:d}),n?await d._hydrate(n):d.goto(location.href,{replaceState:!0}),d._start_router()}export{hn as start};
