import{S as M,i as S,s as j,b as u,h,e as x,f as _,j as T,g as $,d as f,l as v,m as B,a as d,q as k,v as q,n as y,t as E,k as N,r as O}from"./index.G0FiUpWy.js";function I(r){let e,l,m="Option:",o,c;return{c(){e=u("p"),l=u("b"),l.textContent=m,o=h(),c=E(r[0])},l(a){e=_(a,"P",{});var n=T(e);l=_(n,"B",{"data-svelte-h":!0}),$(l)!=="svelte-1uo5bfd"&&(l.textContent=m),o=v(n),c=N(n,r[0]),n.forEach(f)},m(a,n){d(a,e,n),k(e,l),k(e,o),k(e,c)},p(a,n){n&1&&O(c,a[0])},d(a){a&&f(e)}}}function D(r){let e,l,m="Take Me to Random Recipie",o,c,a,n,b,p,C,R,s=r[0]&&I(r);return{c(){e=u("div"),l=u("button"),l.textContent=m,o=h(),c=u("br"),a=h(),n=u("br"),b=h(),s&&s.c(),p=x(),this.h()},l(t){e=_(t,"DIV",{class:!0});var i=T(e);l=_(i,"BUTTON",{class:!0,"data-svelte-h":!0}),$(l)!=="svelte-1m3p5ck"&&(l.textContent=m),i.forEach(f),o=v(t),c=_(t,"BR",{}),a=v(t),n=_(t,"BR",{}),b=v(t),s&&s.l(t),p=x(),this.h()},h(){B(l,"class","btn btn-primary btn-lg"),B(e,"class","center-content")},m(t,i){d(t,e,i),k(e,l),d(t,o,i),d(t,c,i),d(t,a,i),d(t,n,i),d(t,b,i),s&&s.m(t,i),d(t,p,i),C||(R=q(l,"click",r[1]),C=!0)},p(t,[i]){t[0]?s?s.p(t,i):(s=I(t),s.c(),s.m(p.parentNode,p)):s&&(s.d(1),s=null)},i:y,o:y,d(t){t&&(f(e),f(o),f(c),f(a),f(n),f(b),f(p)),s&&s.d(t),C=!1,R()}}}function F(r,e,l){let m=["Steak Fahitjas","Beef Tacos","Roast Chicken","Chicken Curry"],o="";function c(){console.log("Button clicked");const a=Math.floor(Math.random()*m.length);l(0,o=m[a]),console.log("Random item:",o)}return[o,c]}class U extends M{constructor(e){super(),S(this,e,F,D,j,{})}}export{U as default};
