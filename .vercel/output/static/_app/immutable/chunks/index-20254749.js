function w(){}const Y=t=>t;function mt(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function U(){return Object.create(null)}function A(t){t.forEach(Z)}function H(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let B;function Gt(t,e){return B||(B=document.createElement("a")),B.href=e,t===B.href}function pt(t){return Object.keys(t).length===0}function yt(t,...e){if(t==null)return w;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function It(t,e,n){t.$$.on_destroy.push(yt(e,n))}function Jt(t,e,n,i){if(t){const r=tt(t,e,n,i);return t[0](r)}}function tt(t,e,n,i){return t[1]&&i?mt(n.ctx.slice(),t[1](i(e))):n.ctx}function Kt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const c=[],s=Math.max(e.dirty.length,r.length);for(let o=0;o<s;o+=1)c[o]=e.dirty[o]|r[o];return c}return e.dirty|r}return e.dirty}function Qt(t,e,n,i,r,c){if(r){const s=tt(e,n,i,c);t.p(s,r)}}function Ut(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Vt(t){return t&&H(t.destroy)?t.destroy:w}const et=typeof window<"u";let nt=et?()=>window.performance.now():()=>Date.now(),K=et?t=>requestAnimationFrame(t):w;const k=new Set;function it(t){k.forEach(e=>{e.c(t)||(k.delete(e),e.f())}),k.size!==0&&K(it)}function rt(t){let e;return k.size===0&&K(it),{promise:new Promise(n=>{k.add(e={c:t,f:n})}),abort(){k.delete(e)}}}let F=!1;function gt(){F=!0}function xt(){F=!1}function bt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function wt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let u=0;u<e.length;u++){const f=e[u];f.claim_order!==void 0&&l.push(f)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let l=0;l<e.length;l++){const u=e[l].claim_order,f=(r>0&&e[n[r]].claim_order<=u?r+1:bt(1,r,h=>e[n[h]].claim_order,u))-1;i[l]=n[f]+1;const _=f+1;n[_]=l,r=Math.max(_,r)}const c=[],s=[];let o=e.length-1;for(let l=n[r]+1;l!=0;l=i[l-1]){for(c.push(e[l-1]);o>=l;o--)s.push(e[o]);o--}for(;o>=0;o--)s.push(e[o]);c.reverse(),s.sort((l,u)=>l.claim_order-u.claim_order);for(let l=0,u=0;l<s.length;l++){for(;u<c.length&&s[l].claim_order>=c[u].claim_order;)u++;const f=u<c.length?c[u]:null;t.insertBefore(s[l],f)}}function $t(t,e){t.appendChild(e)}function st(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function vt(t){const e=lt("style");return Et(st(t),e),e.sheet}function Et(t,e){return $t(t.head||t,e),e.sheet}function Nt(t,e){if(F){for(wt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Xt(t,e,n){F&&!n?Nt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function ot(t){t.parentNode&&t.parentNode.removeChild(t)}function Yt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function lt(t){return document.createElement(t)}function Q(t){return document.createTextNode(t)}function Zt(){return Q(" ")}function te(){return Q("")}function ee(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function ne(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ie(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ct(t){return Array.from(t.childNodes)}function St(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,r=!1){St(t);const c=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r||(t.claim_info.last_index=s),o}}for(let s=t.claim_info.last_index-1;s>=0;s--){const o=t[s];if(e(o)){const l=n(o);return l===void 0?t.splice(s,1):t[s]=l,r?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,o}}return i()})();return c.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,c}function kt(t,e,n,i){return ct(t,r=>r.nodeName===e,r=>{const c=[];for(let s=0;s<r.attributes.length;s++){const o=r.attributes[s];n[o.name]||c.push(o.name)}c.forEach(s=>r.removeAttribute(s))},()=>i(e))}function re(t,e,n){return kt(t,e,n,lt)}function At(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>Q(e),!0)}function se(t){return At(t," ")}function oe(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function le(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ce(t,e,n){t.classList[n?"add":"remove"](e)}function Mt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ue(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const c=r.textContent.trim();c===`HEAD_${t}_END`?(i-=1,n.push(r)):c===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ae(t,e){return new t(e)}const q=new Map;let L=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Dt(t,e){const n={stylesheet:vt(e),rules:{}};return q.set(t,n),n}function I(t,e,n,i,r,c,s,o=0){const l=16.666/i;let u=`{
`;for(let p=0;p<=1;p+=l){const g=e+(n-e)*c(p);u+=p*100+`%{${s(g,1-g)}}
`}const f=u+`100% {${s(n,1-n)}}
}`,_=`__svelte_${jt(f)}_${o}`,h=st(t),{stylesheet:a,rules:d}=q.get(h)||Dt(h,t);d[_]||(d[_]=!0,a.insertRule(`@keyframes ${_} ${f}`,a.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${_} ${i}ms linear ${r}ms 1 both`,L+=1,_}function ut(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?c=>c.indexOf(e)<0:c=>c.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),L-=r,L||Rt())}function Rt(){K(()=>{L||(q.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&ot(e)}),q.clear())})}function fe(t,e,n,i){if(!e)return w;const r=t.getBoundingClientRect();if(e.left===r.left&&e.right===r.right&&e.top===r.top&&e.bottom===r.bottom)return w;const{delay:c=0,duration:s=300,easing:o=Y,start:l=nt()+c,end:u=l+s,tick:f=w,css:_}=n(t,{from:e,to:r},i);let h=!0,a=!1,d;function y(){_&&(d=I(t,0,1,s,c,o,_)),c||(a=!0)}function p(){_&&ut(t,d),h=!1}return rt(g=>{if(!a&&g>=l&&(a=!0),a&&g>=u&&(f(1,0),p()),!h)return!1;if(a){const $=g-l,v=0+1*o($/s);f(v,1-v)}return!0}),y(),f(0,1),p}function _e(t){const e=getComputedStyle(t);if(e.position!=="absolute"&&e.position!=="fixed"){const{width:n,height:i}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=i,Tt(t,r)}}function Tt(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const i=getComputedStyle(t),r=i.transform==="none"?"":i.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}let R;function D(t){R=t}function at(){if(!R)throw new Error("Function called outside component initialization");return R}function de(t){at().$$.on_mount.push(t)}function he(t){at().$$.after_update.push(t)}const S=[],V=[],O=[],X=[],ft=Promise.resolve();let J=!1;function _t(){J||(J=!0,ft.then(dt))}function me(){return _t(),ft}function z(t){O.push(t)}const W=new Set;let C=0;function dt(){if(C!==0)return;const t=R;do{try{for(;C<S.length;){const e=S[C];C++,D(e),Bt(e.$$)}}catch(e){throw S.length=0,C=0,e}for(D(null),S.length=0,C=0;V.length;)V.pop()();for(let e=0;e<O.length;e+=1){const n=O[e];W.has(n)||(W.add(n),n())}O.length=0}while(S.length);for(;X.length;)X.pop()();J=!1,W.clear(),D(t)}function Bt(t){if(t.fragment!==null){t.update(),A(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let j;function Ot(){return j||(j=Promise.resolve(),j.then(()=>{j=null})),j}function G(t,e,n){t.dispatchEvent(Mt(`${e?"intro":"outro"}${n}`))}const P=new Set;let E;function pe(){E={r:0,c:[],p:E}}function ye(){E.r||A(E.c),E=E.p}function ht(t,e){t&&t.i&&(P.delete(t),t.i(e))}function Pt(t,e,n,i){if(t&&t.o){if(P.has(t))return;P.add(t),E.c.push(()=>{P.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const qt={duration:0};function ge(t,e,n,i){const r={direction:"both"};let c=e(t,n,r),s=i?0:1,o=null,l=null,u=null;function f(){u&&ut(t,u)}function _(a,d){const y=a.b-s;return d*=Math.abs(y),{a:s,b:a.b,d:y,duration:d,start:a.start,end:a.start+d,group:a.group}}function h(a){const{delay:d=0,duration:y=300,easing:p=Y,tick:g=w,css:$}=c||qt,v={start:nt()+d,b:a};a||(v.group=E,E.r+=1),o||l?l=v:($&&(f(),u=I(t,s,a,y,d,p,$)),a&&g(0,1),o=_(v,y),z(()=>G(t,a,"start")),rt(N=>{if(l&&N>l.start&&(o=_(l,y),l=null,G(t,o.b,"start"),$&&(f(),u=I(t,s,o.b,o.duration,0,p,c.css))),o){if(N>=o.end)g(s=o.b,1-s),G(t,o.b,"end"),l||(o.b?f():--o.group.r||A(o.group.c)),o=null;else if(N>=o.start){const M=N-o.start;s=o.a+o.d*p(M/o.duration),g(s,1-s)}}return!!(o||l)}))}return{run(a){H(c)?Ot().then(()=>{c=c(r),h(a)}):h(a)},end(){f(),o=l=null}}}function Lt(t,e){Pt(t,1,1,()=>{e.delete(t.key)})}function xe(t,e){t.f(),Lt(t,e)}function be(t,e,n,i,r,c,s,o,l,u,f,_){let h=t.length,a=c.length,d=h;const y={};for(;d--;)y[t[d].key]=d;const p=[],g=new Map,$=new Map;for(d=a;d--;){const m=_(r,c,d),x=n(m);let b=s.get(x);b?i&&b.p(m,e):(b=u(x,m),b.c()),g.set(x,p[d]=b),x in y&&$.set(x,Math.abs(d-y[x]))}const v=new Set,N=new Set;function M(m){ht(m,1),m.m(o,f),s.set(m.key,m),f=m.first,a--}for(;h&&a;){const m=p[a-1],x=t[h-1],b=m.key,T=x.key;m===x?(f=m.first,h--,a--):g.has(T)?!s.has(b)||v.has(b)?M(m):N.has(T)?h--:$.get(b)>$.get(T)?(N.add(b),M(m)):(v.add(T),h--):(l(x,s),h--)}for(;h--;){const m=t[h];g.has(m.key)||l(m,s)}for(;a;)M(p[a-1]);return p}function we(t){t&&t.c()}function $e(t,e){t&&t.l(e)}function zt(t,e,n,i){const{fragment:r,after_update:c}=t.$$;r&&r.m(e,n),i||z(()=>{const s=t.$$.on_mount.map(Z).filter(H);t.$$.on_destroy?t.$$.on_destroy.push(...s):A(s),t.$$.on_mount=[]}),c.forEach(z)}function Ht(t,e){const n=t.$$;n.fragment!==null&&(A(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ft(t,e){t.$$.dirty[0]===-1&&(S.push(t),_t(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ve(t,e,n,i,r,c,s,o=[-1]){const l=R;D(t);const u=t.$$={fragment:null,ctx:[],props:c,update:w,not_equal:r,bound:U(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:U(),dirty:o,skip_bound:!1,root:e.target||l.$$.root};s&&s(u.root);let f=!1;if(u.ctx=n?n(t,e.props||{},(_,h,...a)=>{const d=a.length?a[0]:h;return u.ctx&&r(u.ctx[_],u.ctx[_]=d)&&(!u.skip_bound&&u.bound[_]&&u.bound[_](d),f&&Ft(t,_)),h}):[],u.update(),f=!0,A(u.before_update),u.fragment=i?i(u.ctx):!1,e.target){if(e.hydrate){gt();const _=Ct(e.target);u.fragment&&u.fragment.l(_),_.forEach(ot)}else u.fragment&&u.fragment.c();e.intro&&ht(t.$$.fragment),zt(t,e.target,e.anchor,e.customElement),xt(),dt()}D(l)}class Ee{$destroy(){Ht(this,1),this.$destroy=w}$on(e,n){if(!H(n))return w;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!pt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Ht as A,me as B,w as C,ce as D,Nt as E,It as F,Jt as G,Qt as H,Ut as I,Kt as J,ue as K,Gt as L,Vt as M,H as N,Yt as O,be as P,Lt as Q,ee as R,Ee as S,A as T,ne as U,_e as V,Tt as W,fe as X,z as Y,ge as Z,xe as _,Zt as a,Xt as b,se as c,ye as d,te as e,ht as f,pe as g,ot as h,ve as i,he as j,lt as k,re as l,Ct as m,ie as n,de as o,le as p,Q as q,At as r,Wt as s,Pt as t,oe as u,V as v,ae as w,we as x,$e as y,zt as z};
