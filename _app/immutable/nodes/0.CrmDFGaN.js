import{s as z,n as x,b as $e,y as q,z as ke,p as ee,u as te,q as se,v as le,r as oe,A as Ce,i as Ee,B as ae,o as Ie}from"../chunks/scheduler.B3tHrB3u.js";import{S as R,i as F,e as I,c as D,g as j,a as u,E as re,b as y,D as O,d as v,F as De,s as B,x as G,j as w,f as H,y as J,l as E,z as U,q as N,o as S,A as K,m as ie,t as Q,k as W,n as ue,v as Ve,p as Te}from"../chunks/index.BhFJeZh0.js";import{e as Y}from"../chunks/each.D6YF6ztN.js";import{g as ce,s as ye}from"../chunks/entry.DgoCYJ9n.js";import{E as X}from"../chunks/Constants.Dw3frr49.js";import{m as fe,c as we}from"../chunks/store.BhCE0TLf.js";const Me=!0,at=Object.freeze(Object.defineProperty({__proto__:null,prerender:Me},Symbol.toStringTag,{value:"Module"}));function Be(o){let e,t='<svg width="32" height="24" class="svelte-15fktif"><line id="top" x1="0" y1="2" x2="32" y2="2" class="svelte-15fktif"></line><line id="middle" x1="0" y1="12" x2="32" y2="12" class="svelte-15fktif"></line><line id="bottom" x1="0" y1="22" x2="32" y2="22" class="svelte-15fktif"></line></svg>',l,a;return{c(){e=I("button"),e.innerHTML=t,this.h()},l(s){e=D(s,"BUTTON",{"aria-label":!0,class:!0,"data-svelte-h":!0}),j(e)!=="svelte-1x3lald"&&(e.innerHTML=t),this.h()},h(){u(e,"aria-label","menu-burger-button"),u(e,"class","text-gray-500 hover:text-gray-700 cursor-pointer mr-4 border-none focus:outline-none svelte-15fktif"),re(e,"open",o[0])},m(s,n){y(s,e,n),l||(a=O(e,"click",o[1]),l=!0)},p(s,[n]){n&1&&re(e,"open",s[0])},i:x,o:x,d(s){s&&v(e),l=!1,a()}}}function He(o,e,t){let{open:l=!1}=e;const a=()=>t(0,l=!l);return o.$$set=s=>{"open"in s&&t(0,l=s.open)},[l,a]}class Ne extends R{constructor(e){super(),F(this,e,He,Be,z,{open:0})}}const Z=[{href:"/",label:"Home"},{href:"/about",label:"About"},{href:"/contact",label:"Contact"}];function de(o,e,t){const l=o.slice();return l[3]=e[t],l}function pe(o,e,t){const l=o.slice();return l[3]=e[t],l}function he(o){let e,t=o[3].label+"",l,a;return{c(){e=I("a"),l=Q(t),this.h()},l(s){e=D(s,"A",{class:!0,href:!0});var n=w(e);l=W(n,t),n.forEach(v),this.h()},h(){u(e,"class",a=q(`button ${o[0]===o[3].href?"selected":""}`)+" svelte-pl1i74"),u(e,"href",o[3].href)},m(s,n){y(s,e,n),E(e,l)},p(s,n){n&1&&a!==(a=q(`button ${s[0]===s[3].href?"selected":""}`)+" svelte-pl1i74")&&u(e,"class",a)},d(s){s&&v(e)}}}function _e(o){let e,t=o[3].label+"",l,a;return{c(){e=I("a"),l=Q(t),this.h()},l(s){e=D(s,"A",{class:!0,href:!0});var n=w(e);l=W(n,t),n.forEach(v),this.h()},h(){u(e,"class",a=q(`button ${o[0]===o[3].href?"selected":""}`)+" svelte-pl1i74"),u(e,"href",o[3].href)},m(s,n){y(s,e,n),E(e,l)},p(s,n){n&1&&a!==(a=q(`button ${s[0]===s[3].href?"selected":""}`)+" svelte-pl1i74")&&u(e,"class",a)},d(s){s&&v(e)}}}function Se(o){let e,t,l,a="VOID TRADING",s,n,i,h,g,m,b,p,k,f;function C(_){o[2](_)}let d={};o[1]!==void 0&&(d.open=o[1]),i=new Ne({props:d}),$e.push(()=>De(i,"open",C));let r=Y(Z),c=[];for(let _=0;_<r.length;_+=1)c[_]=he(pe(o,r,_));let L=Y(Z),V=[];for(let _=0;_<L.length;_+=1)V[_]=_e(de(o,L,_));return{c(){e=I("div"),t=I("div"),l=I("a"),l.textContent=a,s=B(),n=I("div"),G(i.$$.fragment),g=B(),m=I("div");for(let _=0;_<c.length;_+=1)c[_].c();b=B(),p=I("div");for(let _=0;_<V.length;_+=1)V[_].c();this.h()},l(_){e=D(_,"DIV",{class:!0});var M=w(e);t=D(M,"DIV",{class:!0});var T=w(t);l=D(T,"A",{href:!0,class:!0,"data-svelte-h":!0}),j(l)!=="svelte-1uabbwr"&&(l.textContent=a),s=H(T),n=D(T,"DIV",{class:!0});var $=w(n);J(i.$$.fragment,$),$.forEach(v),g=H(T),m=D(T,"DIV",{class:!0});var A=w(m);for(let P=0;P<c.length;P+=1)c[P].l(A);A.forEach(v),T.forEach(v),b=H(M),p=D(M,"DIV",{class:!0});var ne=w(p);for(let P=0;P<V.length;P+=1)V[P].l(ne);ne.forEach(v),M.forEach(v),this.h()},h(){u(l,"href","/"),u(l,"class","innerContainerText svelte-pl1i74"),u(n,"class","burger svelte-pl1i74"),u(m,"class","buttons svelte-pl1i74"),u(t,"class","innerContainer svelte-pl1i74"),u(p,"class","responsiveButtons buttons svelte-pl1i74"),u(e,"class",k=q(o[1]?"NavBar open":"NavBar")+" svelte-pl1i74")},m(_,M){y(_,e,M),E(e,t),E(t,l),E(t,s),E(t,n),U(i,n,null),E(t,g),E(t,m);for(let T=0;T<c.length;T+=1)c[T]&&c[T].m(m,null);E(e,b),E(e,p);for(let T=0;T<V.length;T+=1)V[T]&&V[T].m(p,null);f=!0},p(_,[M]){const T={};if(!h&&M&2&&(h=!0,T.open=_[1],ke(()=>h=!1)),i.$set(T),M&1){r=Y(Z);let $;for($=0;$<r.length;$+=1){const A=pe(_,r,$);c[$]?c[$].p(A,M):(c[$]=he(A),c[$].c(),c[$].m(m,null))}for(;$<c.length;$+=1)c[$].d(1);c.length=r.length}if(M&1){L=Y(Z);let $;for($=0;$<L.length;$+=1){const A=de(_,L,$);V[$]?V[$].p(A,M):(V[$]=_e(A),V[$].c(),V[$].m(p,null))}for(;$<V.length;$+=1)V[$].d(1);V.length=L.length}(!f||M&2&&k!==(k=q(_[1]?"NavBar open":"NavBar")+" svelte-pl1i74"))&&u(e,"class",k)},i(_){f||(N(i.$$.fragment,_),f=!0)},o(_){S(i.$$.fragment,_),f=!1},d(_){_&&v(e),K(i),ie(c,_),ie(V,_)}}}function Le(o,e,t){let l=!1,{segment:a}=e;function s(n){l=n,t(1,l)}return o.$$set=n=>{"segment"in n&&t(0,a=n.segment)},[a,l,s]}class Oe extends R{constructor(e){super(),F(this,e,Le,Se,z,{segment:0})}}function Ae(o){let e,t,l,a;const s=o[1].default,n=ee(s,o,o[0],null);return{c(){e=I("div"),n&&n.c(),this.h()},l(i){e=D(i,"DIV",{class:!0,role:!0,tabindex:!0});var h=w(e);n&&n.l(h),h.forEach(v),this.h()},h(){u(e,"class","button svelte-1hqedx4"),u(e,"role","button"),u(e,"tabindex","0")},m(i,h){y(i,e,h),n&&n.m(e,null),t=!0,l||(a=[O(e,"keypress",o[2]),O(e,"click",o[3])],l=!0)},p(i,[h]){n&&n.p&&(!t||h&1)&&te(n,s,i,i[0],t?le(s,i[0],h,null):se(i[0]),null)},i(i){t||(N(n,i),t=!0)},o(i){S(n,i),t=!1},d(i){i&&v(e),n&&n.d(i),l=!1,oe(a)}}}function qe(o,e,t){let{$$slots:l={},$$scope:a}=e;const s=()=>{ce(`mailto:${X}`)},n=()=>ce(`mailto:${X}`);return o.$$set=i=>{"$$scope"in i&&t(0,a=i.$$scope)},[a,l,s,n]}class Pe extends R{constructor(e){super(),F(this,e,qe,Ae,z,{})}}function je(o){let e,t;const l=o[2].default,a=ee(l,o,o[1],null);return{c(){e=I("div"),a&&a.c(),this.h()},l(s){e=D(s,"DIV",{"data-tooltip":!0,class:!0});var n=w(e);a&&a.l(n),n.forEach(v),this.h()},h(){u(e,"data-tooltip",o[0]),u(e,"class","container svelte-xp1qch")},m(s,n){y(s,e,n),a&&a.m(e,null),t=!0},p(s,[n]){a&&a.p&&(!t||n&2)&&te(a,l,s,s[1],t?le(l,s[1],n,null):se(s[1]),null),(!t||n&1)&&u(e,"data-tooltip",s[0])},i(s){t||(N(a,s),t=!0)},o(s){S(a,s),t=!1},d(s){s&&v(e),a&&a.d(s)}}}function ze(o,e,t){let{$$slots:l={},$$scope:a}=e,{tooltip:s}=e;return o.$$set=n=>{"tooltip"in n&&t(0,s=n.tooltip),"$$scope"in n&&t(1,a=n.$$scope)},[s,a,l]}class Re extends R{constructor(e){super(),F(this,e,ze,je,z,{tooltip:0})}}const Fe=()=>{const o=ye;return{page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},updated:o.updated}},Ge={subscribe(o){return Fe().page.subscribe(o)}},Je=o=>({}),ve=o=>({});function me(o){let e,t,l,a,s,n,i,h,g;const m=o[4].content,b=ee(m,o,o[3],ve);return{c(){e=I("div"),t=I("div"),l=B(),a=I("div"),s=I("div"),b&&b.c(),this.h()},l(p){e=D(p,"DIV",{class:!0});var k=w(e);t=D(k,"DIV",{class:!0,role:!0,tabindex:!0}),w(t).forEach(v),l=H(k),a=D(k,"DIV",{class:!0});var f=w(a);s=D(f,"DIV",{class:!0});var C=w(s);b&&b.l(C),C.forEach(v),f.forEach(v),k.forEach(v),this.h()},h(){u(t,"class","backdrop svelte-16oogs0"),u(t,"role","button"),u(t,"tabindex","0"),u(s,"class","content svelte-16oogs0"),u(a,"class","content-wrapper svelte-16oogs0"),u(e,"class",n=q(`modal ${o[1]&&"closing"}`)+" svelte-16oogs0")},m(p,k){y(p,e,k),E(e,t),E(e,l),E(e,a),E(a,s),b&&b.m(s,null),i=!0,h||(g=[O(t,"click",o[2]),O(t,"keypress",o[2])],h=!0)},p(p,k){b&&b.p&&(!i||k&8)&&te(b,m,p,p[3],i?le(m,p[3],k,Je):se(p[3]),ve),(!i||k&2&&n!==(n=q(`modal ${p[1]&&"closing"}`)+" svelte-16oogs0"))&&u(e,"class",n)},i(p){i||(N(b,p),i=!0)},o(p){S(b,p),i=!1},d(p){p&&v(e),b&&b.d(p),h=!1,oe(g)}}}function Ue(o){let e,t,l=o[0]&&me(o);return{c(){l&&l.c(),e=ue()},l(a){l&&l.l(a),e=ue()},m(a,s){l&&l.m(a,s),y(a,e,s),t=!0},p(a,[s]){a[0]?l?(l.p(a,s),s&1&&N(l,1)):(l=me(a),l.c(),N(l,1),l.m(e.parentNode,e)):l&&(Ve(),S(l,1,1,()=>{l=null}),Te())},i(a){t||(N(l),t=!0)},o(a){S(l),t=!1},d(a){a&&v(e),l&&l.d(a)}}}function Ke(o,e,t){let{$$slots:l={},$$scope:a}=e,s=!1,n=!1;fe.subscribe(h=>{t(1,n=!1),t(0,s=h)});const i=()=>{t(1,n=!0),setTimeout(()=>{fe.set(!1)},300)};return o.$$set=h=>{"$$scope"in h&&t(3,a=h.$$scope)},[s,n,i,a,l]}class Qe extends R{constructor(e){super(),F(this,e,Ke,Ue,z,{})}}function be(o){let e,t,l='🍪 This website use <a href="privacy-policy" class="svelte-hbd2su">Cookies.</a>',a,s,n="✕",i,h;return{c(){e=I("div"),t=I("p"),t.innerHTML=l,a=B(),s=I("div"),s.textContent=n,this.h()},l(g){e=D(g,"DIV",{class:!0});var m=w(e);t=D(m,"P",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-1iwts5v"&&(t.innerHTML=l),a=H(m),s=D(m,"DIV",{role:!0,tabindex:!0,class:!0,"data-svelte-h":!0}),j(s)!=="svelte-1bl8vgs"&&(s.textContent=n),m.forEach(v),this.h()},h(){u(t,"class","svelte-hbd2su"),u(s,"role","button"),u(s,"tabindex","0"),u(s,"class","svelte-hbd2su"),u(e,"class","cookieContainer svelte-hbd2su")},m(g,m){y(g,e,m),E(e,t),E(e,a),E(e,s),i||(h=[O(s,"keypress",o[7]),O(s,"click",o[8])],i=!0)},p:x,d(g){g&&v(e),i=!1,oe(h)}}}function We(o){let e,t="",l,a;return{c(){e=I("div"),e.innerHTML=t,this.h()},l(s){e=D(s,"DIV",{id:!0,role:!0,tabindex:!0,class:!0,"data-svelte-h":!0}),j(e)!=="svelte-17q5dgv"&&(e.innerHTML=t),this.h()},h(){u(e,"id","clipboard"),u(e,"role","button"),u(e,"tabindex","0"),u(e,"class","svelte-hbd2su")},m(s,n){y(s,e,n),l||(a=[O(e,"keypress",o[9]),O(e,"click",o[10])],l=!0)},p:x,d(s){s&&v(e),l=!1,oe(a)}}}function Xe(o){let e;return{c(){e=Q("Send Email")},l(t){e=W(t,"Send Email")},m(t,l){y(t,e,l)},d(t){t&&v(e)}}}function Ye(o){let e,t,l="Email:",a,s,n,i,h,g,m,b,p,k;return m=new Re({props:{tooltip:o[0]?"Copied":"Copy",$$slots:{default:[We]},$$scope:{ctx:o}}}),p=new Pe({props:{$$slots:{default:[Xe]},$$scope:{ctx:o}}}),{c(){e=I("div"),t=I("h1"),t.textContent=l,a=B(),s=I("div"),n=I("p"),i=Q(X),h=Q(`
			 
			`),g=I("div"),G(m.$$.fragment),b=B(),G(p.$$.fragment),this.h()},l(f){e=D(f,"DIV",{slot:!0,class:!0});var C=w(e);t=D(C,"H1",{class:!0,"data-svelte-h":!0}),j(t)!=="svelte-7qu70e"&&(t.textContent=l),a=H(C),s=D(C,"DIV",{class:!0});var d=w(s);n=D(d,"P",{class:!0});var r=w(n);i=W(r,X),r.forEach(v),h=W(d,`
			 
			`),g=D(d,"DIV",{class:!0});var c=w(g);J(m.$$.fragment,c),c.forEach(v),d.forEach(v),b=H(C),J(p.$$.fragment,C),C.forEach(v),this.h()},h(){u(t,"class","svelte-hbd2su"),u(n,"class","svelte-hbd2su"),u(g,"class","tooltip svelte-hbd2su"),u(s,"class","svelte-hbd2su"),u(e,"slot","content"),u(e,"class","modalContainer svelte-hbd2su")},m(f,C){y(f,e,C),E(e,t),E(e,a),E(e,s),E(s,n),E(n,i),E(s,h),E(s,g),U(m,g,null),E(e,b),U(p,e,null),k=!0},p(f,C){const d={};C&1&&(d.tooltip=f[0]?"Copied":"Copy"),C&2049&&(d.$$scope={dirty:C,ctx:f}),m.$set(d);const r={};C&2048&&(r.$$scope={dirty:C,ctx:f}),p.$set(r)},i(f){k||(N(m.$$.fragment,f),N(p.$$.fragment,f),k=!0)},o(f){S(m.$$.fragment,f),S(p.$$.fragment,f),k=!1},d(f){f&&v(e),K(m),K(p)}}}function Ze(o){let e,t,l,a,s,n,i,h,g,m='Copyright © <a class="me svelte-hbd2su" href="/about">VOID TRADING Ltd</a> 2024',b,p,k,f=o[1]&&ge&&be(o);a=new Qe({props:{$$slots:{content:[Ye]},$$scope:{ctx:o}}}),n=new Oe({props:{segment:o[3].url.pathname}});const C=o[6].default,d=ee(C,o,o[11],null);return{c(){t=B(),f&&f.c(),l=B(),G(a.$$.fragment),s=B(),G(n.$$.fragment),i=B(),d&&d.c(),h=B(),g=I("footer"),g.innerHTML=m,this.h()},l(r){t=H(r),f&&f.l(r),l=H(r),J(a.$$.fragment,r),s=H(r),J(n.$$.fragment,r),i=H(r),d&&d.l(r),h=H(r),g=D(r,"FOOTER",{class:!0,"data-svelte-h":!0}),j(g)!=="svelte-1a3iiyc"&&(g.innerHTML=m),this.h()},h(){u(g,"class","svelte-hbd2su")},m(r,c){y(r,t,c),f&&f.m(r,c),y(r,l,c),U(a,r,c),y(r,s,c),U(n,r,c),y(r,i,c),d&&d.m(r,c),y(r,h,c),y(r,g,c),b=!0,p||(k=Ce(e=o[4].call(null,document.body,{background:o[2]})),p=!0)},p(r,[c]){e&&Ee(e.update)&&c&4&&e.update.call(null,{background:r[2]}),r[1]&&ge?f?f.p(r,c):(f=be(r),f.c(),f.m(l.parentNode,l)):f&&(f.d(1),f=null);const L={};c&2049&&(L.$$scope={dirty:c,ctx:r}),a.$set(L);const V={};c&8&&(V.segment=r[3].url.pathname),n.$set(V),d&&d.p&&(!b||c&2048)&&te(d,C,r,r[11],b?le(C,r[11],c,null):se(r[11]),null)},i(r){b||(N(a.$$.fragment,r),N(n.$$.fragment,r),N(d,r),b=!0)},o(r){S(a.$$.fragment,r),S(n.$$.fragment,r),S(d,r),b=!1},d(r){r&&(v(t),v(l),v(s),v(i),v(h),v(g)),f&&f.d(r),K(a,r),K(n,r),d&&d.d(r),p=!1,k()}}}const ge=!1;function xe(o,e,t){let l,a,s;ae(o,we,d=>t(2,a=d)),ae(o,Ge,d=>t(3,s=d));let{$$slots:n={},$$scope:i}=e,h=!1;const g=(d,r)=>(m(d,r),{update(c){m(d,c)}}),m=(d,r)=>{for(const c in r)d.style.setProperty(`--${c}`,r[c])},b=()=>{navigator.clipboard.writeText(X)};Ie(()=>{const d=localStorage.getItem("showCookieModal");d!==null?t(1,l=JSON.parse(d)):t(1,l=!0)});const p=()=>{t(1,l=!1),localStorage.setItem("showCookieModal","false")},k=()=>{t(1,l=!1),localStorage.setItem("showCookieModal","false")},f=()=>{t(0,h=!0),b(),setTimeout(()=>{t(0,h=!1)},500)},C=()=>{t(0,h=!0),b(),setTimeout(()=>{t(0,h=!1)},500)};return o.$$set=d=>{"$$scope"in d&&t(11,i=d.$$scope)},t(1,l=!1),[h,l,a,s,g,b,n,p,k,f,C,i]}class rt extends R{constructor(e){super(),F(this,e,xe,Ze,z,{})}}export{rt as component,at as universal};
