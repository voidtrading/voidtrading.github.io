import{s as A,p as le,u as re,q as ie,v as oe,w as V,x as z,n as R,r as ce}from"../chunks/scheduler.B3tHrB3u.js";import{S as O,i as S,B as q,n as X,C as N,j as h,d as f,a as c,b as E,l as _,q as B,o as H,t as fe,k as ue,u as _e,x as C,y as T,z as L,A as j,s as x,e as g,h as de,f as D,c as p,g as Y,D as Z}from"../chunks/index.BhFJeZh0.js";import{m as ee}from"../chunks/store.BhCE0TLf.js";function ne(i,e){const t={},s={},a={$$scope:1};let n=i.length;for(;n--;){const l=i[n],r=e[n];if(r){for(const o in l)o in r||(s[o]=1);for(const o in r)a[o]||(t[o]=r[o],a[o]=1);i[n]=r}else for(const o in l)a[o]=1}for(const l in s)l in t||(t[l]=void 0);return t}function se(i){return typeof i=="object"&&i!==null?i:{}}const he=!0,xe=Object.freeze(Object.defineProperty({__proto__:null,prerender:he},Symbol.toStringTag,{value:"Module"}));function te(i){let e,t;return{c(){e=q("title"),t=fe(i[0])},l(s){e=N(s,"title",{});var a=h(e);t=ue(a,i[0]),a.forEach(f)},m(s,a){E(s,e,a),_(e,t)},p(s,a){a&1&&_e(t,s[0])},d(s){s&&f(e)}}}function me(i){let e,t,s,a=i[0]&&te(i);const n=i[3].default,l=le(n,i,i[2],null);return{c(){e=q("svg"),a&&a.c(),t=X(),l&&l.c(),this.h()},l(r){e=N(r,"svg",{xmlns:!0,viewBox:!0,class:!0});var o=h(e);a&&a.l(o),t=X(),l&&l.l(o),o.forEach(f),this.h()},h(){c(e,"xmlns","http://www.w3.org/2000/svg"),c(e,"viewBox",i[1]),c(e,"class","svelte-c8tyih")},m(r,o){E(r,e,o),a&&a.m(e,null),_(e,t),l&&l.m(e,null),s=!0},p(r,[o]){r[0]?a?a.p(r,o):(a=te(r),a.c(),a.m(e,t)):a&&(a.d(1),a=null),l&&l.p&&(!s||o&4)&&re(l,n,r,r[2],s?oe(n,r[2],o,null):ie(r[2]),null),(!s||o&2)&&c(e,"viewBox",r[1])},i(r){s||(B(l,r),s=!0)},o(r){H(l,r),s=!1},d(r){r&&f(e),a&&a.d(),l&&l.d(r)}}}function ve(i,e,t){let{$$slots:s={},$$scope:a}=e,{title:n=null}=e,{viewBox:l}=e;return i.$$set=r=>{"title"in r&&t(0,n=r.title),"viewBox"in r&&t(1,l=r.viewBox),"$$scope"in r&&t(2,a=r.$$scope)},[n,l,a,s]}class ae extends O{constructor(e){super(),S(this,e,ve,me,A,{title:0,viewBox:1})}}function ge(i){let e;return{c(){e=q("path"),this.h()},l(t){e=N(t,"path",{d:!0}),h(e).forEach(f),this.h()},h(){c(e,"d","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z")},m(t,s){E(t,e,s)},p:R,d(t){t&&f(e)}}}function pe(i){let e,t;const s=[{viewBox:"0 0 448 512"},i[0]];let a={$$slots:{default:[ge]},$$scope:{ctx:i}};for(let n=0;n<s.length;n+=1)a=V(a,s[n]);return e=new ae({props:a}),{c(){C(e.$$.fragment)},l(n){T(e.$$.fragment,n)},m(n,l){L(e,n,l),t=!0},p(n,[l]){const r=l&1?ne(s,[s[0],se(n[0])]):{};l&2&&(r.$$scope={dirty:l,ctx:n}),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){H(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function $e(i,e,t){return i.$$set=s=>{t(0,e=V(V({},e),z(s)))},e=z(e),[e]}class be extends O{constructor(e){super(),S(this,e,$e,pe,A,{})}}function we(i){let e;return{c(){e=q("path"),this.h()},l(t){e=N(t,"path",{d:!0}),h(e).forEach(f),this.h()},h(){c(e,"d","M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z")},m(t,s){E(t,e,s)},p:R,d(t){t&&f(e)}}}function ke(i){let e,t;const s=[{viewBox:"0 0 512 512"},i[0]];let a={$$slots:{default:[we]},$$scope:{ctx:i}};for(let n=0;n<s.length;n+=1)a=V(a,s[n]);return e=new ae({props:a}),{c(){C(e.$$.fragment)},l(n){T(e.$$.fragment,n)},m(n,l){L(e,n,l),t=!0},p(n,[l]){const r=l&1?ne(s,[s[0],se(n[0])]):{};l&2&&(r.$$scope={dirty:l,ctx:n}),e.$set(r)},i(n){t||(B(e.$$.fragment,n),t=!0)},o(n){H(e.$$.fragment,n),t=!1},d(n){j(e,n)}}}function ye(i,e,t){return i.$$set=s=>{t(0,e=V(V({},e),z(s)))},e=z(e),[e]}class Ve extends O{constructor(e){super(),S(this,e,ye,ke,A,{})}}function Ee(i){let e,t,s,a="VOID TRADING<br/>",n,l,r=`proprietary high frequency trading firm<br/>
		based in Korea`,o,v,m,w,$,F,d,k,b,I,G,K;return $=new Ve({}),b=new be({}),{c(){e=x(),t=g("main"),s=g("h1"),s.innerHTML=a,n=x(),l=g("h2"),l.innerHTML=r,o=x(),v=g("div"),m=g("div"),w=g("div"),C($.$$.fragment),F=x(),d=g("a"),k=g("div"),C(b.$$.fragment),this.h()},l(u){de("svelte-1t52y1f",document.head).forEach(f),e=D(u),t=p(u,"MAIN",{class:!0});var y=h(t);s=p(y,"H1",{class:!0,"data-svelte-h":!0}),Y(s)!=="svelte-ke7uab"&&(s.innerHTML=a),n=D(y),l=p(y,"H2",{"data-svelte-h":!0}),Y(l)!=="svelte-tce9cs"&&(l.innerHTML=r),o=D(y),v=p(y,"DIV",{class:!0});var M=h(v);m=p(M,"DIV",{role:!0,tabindex:!0});var J=h(m);w=p(J,"DIV",{class:!0});var Q=h(w);T($.$$.fragment,Q),Q.forEach(f),J.forEach(f),F=D(M),d=p(M,"A",{href:!0,"aria-label":!0,target:!0,rel:!0,class:!0});var U=h(d);k=p(U,"DIV",{class:!0});var W=h(k);T(b.$$.fragment,W),W.forEach(f),U.forEach(f),M.forEach(f),y.forEach(f),this.h()},h(){document.title="VOID TRADING",c(s,"class","svelte-y9ents"),c(w,"class","icon svelte-y9ents"),c(m,"role","button"),c(m,"tabindex","0"),c(k,"class","icon svelte-y9ents"),c(d,"href","https://www.linkedin.com/"),c(d,"aria-label","Linkedin"),c(d,"target","_blank"),c(d,"rel","noopener noreferrer"),c(d,"class","svelte-y9ents"),c(v,"class","icons svelte-y9ents"),c(t,"class","svelte-y9ents")},m(u,P){E(u,e,P),E(u,t,P),_(t,s),_(t,n),_(t,l),_(t,o),_(t,v),_(v,m),_(m,w),L($,w,null),_(v,F),_(v,d),_(d,k),L(b,k,null),I=!0,G||(K=[Z(m,"keypress",i[0]),Z(m,"click",i[1])],G=!0)},p:R,i(u){I||(B($.$$.fragment,u),B(b.$$.fragment,u),I=!0)},o(u){H($.$$.fragment,u),H(b.$$.fragment,u),I=!1},d(u){u&&(f(e),f(t)),j($),j(b),G=!1,ce(K)}}}function Be(i){return[()=>{ee.set(!0)},()=>{ee.set(!0)}]}class De extends O{constructor(e){super(),S(this,e,Be,Ee,A,{})}}export{De as component,xe as universal};
