import{S as M,i as S,s as j,b as u,h,e as x,f as _,j as T,g as $,d as r,l as v,m as y,a as d,q as k,v as q,n as B,t as E,k as N,r as O}from"./index.G0FiUpWy.js";function I(c){let e,l,m="Option:",o,f;return{c(){e=u("p"),l=u("b"),l.textContent=m,o=h(),f=E(c[0])},l(a){e=_(a,"P",{});var n=T(e);l=_(n,"B",{"data-svelte-h":!0}),$(l)!=="svelte-1uo5bfd"&&(l.textContent=m),o=v(n),f=N(n,c[0]),n.forEach(r)},m(a,n){d(a,e,n),k(e,l),k(e,o),k(e,f)},p(a,n){n&1&&O(f,a[0])},d(a){a&&r(e)}}}function D(c){let e,l,m="Take Me to Random Recipie",o,f,a,n,b,p,C,R,s=c[0]&&I(c);return{c(){e=u("div"),l=u("button"),l.textContent=m,o=h(),f=u("br"),a=h(),n=u("br"),b=h(),s&&s.c(),p=x(),this.h()},l(t){e=_(t,"DIV",{class:!0});var i=T(e);l=_(i,"BUTTON",{class:!0,"data-svelte-h":!0}),$(l)!=="svelte-1p94bky"&&(l.textContent=m),i.forEach(r),o=v(t),f=_(t,"BR",{}),a=v(t),n=_(t,"BR",{}),b=v(t),s&&s.l(t),p=x(),this.h()},h(){y(l,"class","btn btn-primary btn-lg"),y(e,"class","center-content")},m(t,i){d(t,e,i),k(e,l),d(t,o,i),d(t,f,i),d(t,a,i),d(t,n,i),d(t,b,i),s&&s.m(t,i),d(t,p,i),C||(R=q(l,"click",c[1]),C=!0)},p(t,[i]){t[0]?s?s.p(t,i):(s=I(t),s.c(),s.m(p.parentNode,p)):s&&(s.d(1),s=null)},i:B,o:B,d(t){t&&(r(e),r(o),r(f),r(a),r(n),r(b),r(p)),s&&s.d(t),C=!1,R()}}}function F(c,e,l){let m=["Steak Fahitjas","Beef Tacos","Roast Chicken","Chicken Curry"],o="";function f(){console.log("Button clicked");const a=Math.floor(Math.random()*m.length);l(0,o=m[a]),console.log("Random item:",o)}return[o,f]}class U extends M{constructor(e){super(),S(this,e,F,D,j,{})}}export{U as default};
