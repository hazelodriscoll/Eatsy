import{S as F,i as K,s as Q,e as j,a as w,n as $,d as u,c as T,o as W,b as h,f as p,g as U,t as z,h as q,j as b,k as A,l as L,m,p as G,q as f,r as B,u as X}from"./index.B9LIzVyG.js";import{w as Y,e as J}from"./index.scphXcbb.js";function O(o,e,i){const n=o.slice();return n[2]=e[i],n}function Z(o){let e,i="Recipe not found.";return{c(){e=h("p"),e.textContent=i},l(n){e=p(n,"P",{"data-svelte-h":!0}),U(e)!=="svelte-1vhb4mb"&&(e.textContent=i)},m(n,t){w(n,e,t)},p:$,d(n){n&&u(e)}}}function ee(o){let e,i,n=o[0].title+"",t,l,c,v,I,H="Ingredients",D,k,R,y,_,E,x,C=J(o[0].extendedIngredients),r=[];for(let s=0;s<C.length;s+=1)r[s]=P(O(o,C,s));return{c(){e=h("div"),i=h("h3"),t=z(n),l=q(),c=h("div"),v=h("div"),I=h("h3"),I.textContent=H,D=q(),k=h("ul");for(let s=0;s<r.length;s+=1)r[s].c();R=q(),y=h("div"),_=h("img"),this.h()},l(s){e=p(s,"DIV",{});var d=b(e);i=p(d,"H3",{class:!0});var a=b(i);t=A(a,n),a.forEach(u),l=L(d),c=p(d,"DIV",{class:!0});var g=b(c);v=p(g,"DIV",{class:!0});var S=b(v);I=p(S,"H3",{"data-svelte-h":!0}),U(I)!=="svelte-k9mecy"&&(I.textContent=H),D=L(S),k=p(S,"UL",{});var M=b(k);for(let V=0;V<r.length;V+=1)r[V].l(M);M.forEach(u),S.forEach(u),R=L(g),y=p(g,"DIV",{class:!0});var N=b(y);_=p(N,"IMG",{src:!0,alt:!0,class:!0}),N.forEach(u),g.forEach(u),d.forEach(u),this.h()},h(){m(i,"class","display-4"),m(v,"class","ingredientsList"),G(_.src,E=o[0].image)||m(_,"src",E),m(_,"alt",x=o[0].title),m(_,"class","ingredientsImage custom-rounded"),m(y,"class","incredientsImage"),m(c,"class","ingredientsContainer")},m(s,d){w(s,e,d),f(e,i),f(i,t),f(e,l),f(e,c),f(c,v),f(v,I),f(v,D),f(v,k);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(k,null);f(c,R),f(c,y),f(y,_)},p(s,d){if(d&1&&n!==(n=s[0].title+"")&&B(t,n),d&1){C=J(s[0].extendedIngredients);let a;for(a=0;a<C.length;a+=1){const g=O(s,C,a);r[a]?r[a].p(g,d):(r[a]=P(g),r[a].c(),r[a].m(k,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=C.length}d&1&&!G(_.src,E=s[0].image)&&m(_,"src",E),d&1&&x!==(x=s[0].title)&&m(_,"alt",x)},d(s){s&&u(e),X(r,s)}}}function P(o){let e,i=o[2].original+"",n;return{c(){e=h("li"),n=z(i)},l(t){e=p(t,"LI",{});var l=b(e);n=A(l,i),l.forEach(u)},m(t,l){w(t,e,l),f(e,n)},p(t,l){l&1&&i!==(i=t[2].original+"")&&B(n,i)},d(t){t&&u(e)}}}function te(o){let e;function i(l,c){return l[0]?ee:Z}let n=i(o),t=n(o);return{c(){t.c(),e=j()},l(l){t.l(l),e=j()},m(l,c){t.m(l,c),w(l,e,c)},p(l,[c]){n===(n=i(l))&&t?t.p(l,c):(t.d(1),t=n(l),t&&(t.c(),t.m(e.parentNode,e)))},i:$,o:$,d(l){l&&u(e),t.d(l)}}}function le(o,e,i){let n;const t=Y(null);return T(o,t,l=>i(0,n=l)),W(()=>{if(typeof window<"u"&&typeof localStorage<"u"){const l=localStorage.getItem("currentRecipie");l&&t.set(JSON.parse(l))}}),[n,t]}class se extends F{constructor(e){super(),K(this,e,le,te,Q,{})}}export{se as default};
