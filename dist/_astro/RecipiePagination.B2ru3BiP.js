import{S as Z,i as x,s as $,e as P,h as T,t as V,c as k,a as R,d as g,k as M,j as B,l as w,b as S,m as h,p as H,x as D,y as W,q as ee,z as I,r as te,F as le,u as J,E as X,g as ae,n as U,A as ie,B as ne,C as re,D as se}from"./index.D0JLGyvO.js";import{e as K}from"./each.-gASlQSi.js";import ce from"./RecipieCard.BgKqnY05.js";import"./store.BcsExgd1.js";import"./favourite.CmckLUa8.js";function L(u,e,t){const a=u.slice();return a[8]=e[t],a}function oe(u){let e,t="Error: Invalid recipie data";return{c(){e=P("div"),e.textContent=t},l(a){e=k(a,"DIV",{"data-svelte-h":!0}),ae(e)!=="svelte-p2pwgg"&&(e.textContent=t)},m(a,i){S(a,e,i)},p:U,i:U,o:U,d(a){a&&g(e)}}}function ue(u){let e,t,a,i;return t=new ce({props:{recipie:u[8]}}),{c(){e=P("div"),ie(t.$$.fragment),a=T(),this.h()},l(l){e=k(l,"DIV",{class:!0});var c=R(e);ne(t.$$.fragment,c),a=M(c),c.forEach(g),this.h()},h(){w(e,"class","col-md-4")},m(l,c){S(l,e,c),re(t,e,null),h(e,a),i=!0},p(l,c){const p={};c&8&&(p.recipie=l[8]),t.$set(p)},i(l){i||(D(t.$$.fragment,l),i=!0)},o(l){I(t.$$.fragment,l),i=!1},d(l){l&&g(e),se(t)}}}function Q(u){let e,t,a,i;const l=[ue,oe],c=[];function p(r,d){return r[8]&&r[8].title?0:1}return e=p(u),t=c[e]=l[e](u),{c(){t.c(),a=J()},l(r){t.l(r),a=J()},m(r,d){c[e].m(r,d),S(r,a,d),i=!0},p(r,d){let b=e;e=p(r),e===b?c[e].p(r,d):(X(),I(c[b],1,1,()=>{c[b]=null}),W(),t=c[e],t?t.p(r,d):(t=c[e]=l[e](r),t.c()),D(t,1),t.m(a.parentNode,a))},i(r){i||(D(t),i=!0)},o(r){I(t),i=!1},d(r){r&&g(a),c[e].d(r)}}}function fe(u){let e,t,a,i,l,c,p,r,d,b,_,C,m,j,N,E,q,z,y=K(u[3]),s=[];for(let n=0;n<y.length;n+=1)s[n]=Q(L(u,y,n));const Y=n=>I(s[n],1,1,()=>{s[n]=null});return{c(){e=P("div"),t=P("div");for(let n=0;n<s.length;n+=1)s[n].c();a=T(),i=P("div"),l=P("button"),c=V("Previous"),r=T(),d=P("span"),b=V("Page "),_=V(u[0]),C=T(),m=P("button"),j=V("Next"),this.h()},l(n){e=k(n,"DIV",{class:!0});var f=R(e);t=k(f,"DIV",{class:!0});var o=R(t);for(let O=0;O<s.length;O+=1)s[O].l(o);o.forEach(g),a=M(f),i=k(f,"DIV",{class:!0});var v=R(i);l=k(v,"BUTTON",{class:!0});var F=R(l);c=B(F,"Previous"),F.forEach(g),r=M(v),d=k(v,"SPAN",{class:!0});var A=R(d);b=B(A,"Page "),_=B(A,u[0]),A.forEach(g),C=M(v),m=k(v,"BUTTON",{class:!0});var G=R(m);j=B(G,"Next"),G.forEach(g),v.forEach(g),f.forEach(g),this.h()},h(){w(t,"class","card-group row row-cols-1 row-cols-md-3 g-4"),w(l,"class","btn btn-primary"),l.disabled=p=u[0]===1,w(d,"class","page-number"),w(m,"class","btn btn-primary"),m.disabled=N=u[0]===Math.ceil(u[1].recipes.length/u[2]),w(i,"class","pagination-controls d-flex justify-content-between align-items-center mt-4"),w(e,"class","container-fluid container-background")},m(n,f){S(n,e,f),h(e,t);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(t,null);h(e,a),h(e,i),h(i,l),h(l,c),h(i,r),h(i,d),h(d,b),h(d,_),h(i,C),h(i,m),h(m,j),E=!0,q||(z=[H(l,"click",u[4]),H(m,"click",u[5])],q=!0)},p(n,[f]){if(f&8){y=K(n[3]);let o;for(o=0;o<y.length;o+=1){const v=L(n,y,o);s[o]?(s[o].p(v,f),D(s[o],1)):(s[o]=Q(v),s[o].c(),D(s[o],1),s[o].m(t,null))}for(X(),o=y.length;o<s.length;o+=1)Y(o);W()}(!E||f&1&&p!==(p=n[0]===1))&&(l.disabled=p),(!E||f&1)&&ee(_,n[0]),(!E||f&7&&N!==(N=n[0]===Math.ceil(n[1].recipes.length/n[2])))&&(m.disabled=N)},i(n){if(!E){for(let f=0;f<y.length;f+=1)D(s[f]);E=!0}},o(n){s=s.filter(Boolean);for(let f=0;f<s.length;f+=1)I(s[f]);E=!1},d(n){n&&g(e),te(s,n),q=!1,le(z)}}}function de(u,e,t){let{allRecipies:a}=e,{recipiesPerPage:i}=e,{currentPage:l}=e;const c=_=>{const C=(_-1)*i,m=C+i;return a.recipes.slice(C,m)};let p=c(l);const r=_=>{t(3,p=c(_)),t(0,l=_)},d=()=>{l>1&&r(l-1)},b=()=>{l<Math.ceil(a.recipes.length/i)&&r(l+1)};return u.$$set=_=>{"allRecipies"in _&&t(1,a=_.allRecipies),"recipiesPerPage"in _&&t(2,i=_.recipiesPerPage),"currentPage"in _&&t(0,l=_.currentPage)},[l,a,i,p,d,b]}class be extends Z{constructor(e){super(),x(this,e,de,fe,$,{allRecipies:1,recipiesPerPage:2,currentPage:0})}}export{be as default};
