import{S as fe,i as he,s as de,b,f as I,j as E,d as p,a as J,n as T,c as _e,o as pe,g as W,t as R,h as C,k as D,l as S,m as v,p as le,q as c,r as F,u as X,e as se}from"./index.B9LIzVyG.js";import{w as ve,e as z}from"./index.scphXcbb.js";/* empty css                              */function ne(r,e,n){const t=r.slice();return t[2]=e[n],t}function ie(r,e,n){const t=r.slice();return t[5]=e[n],t}function ae(r,e,n){const t=r.slice();return t[8]=e[n],t}function ge(r){let e,n="Recipe not found.";return{c(){e=b("p"),e.textContent=n},l(t){e=I(t,"P",{"data-svelte-h":!0}),W(e)!=="svelte-1vhb4mb"&&(e.textContent=n)},m(t,l){J(t,e,l)},p:T,d(t){t&&p(e)}}}function me(r){let e,n,t,l=r[0].title+"",s,a,_,d,j,f,u,h,P,V,y,Y="Ingredients",U,L,K,w,q,Z="Instructions",Q,A,M=z(r[0].nutrition.ingredients),g=[];for(let o=0;o<M.length;o+=1)g[o]=re(ae(r,M,o));let O=z(r[0].analyzedInstructions),m=[];for(let o=0;o<O.length;o+=1)m[o]=ce(ne(r,O,o));return{c(){e=b("div"),n=b("h3"),t=R("Recipie: "),s=R(l),a=C(),_=b("div"),d=b("div"),j=b("div"),f=b("img"),P=C(),V=b("div"),y=b("h2"),y.textContent=Y,U=C(),L=b("ul");for(let o=0;o<g.length;o+=1)g[o].c();K=C(),w=b("div"),q=b("h2"),q.textContent=Z,Q=C(),A=b("ol");for(let o=0;o<m.length;o+=1)m[o].c();this.h()},l(o){e=I(o,"DIV",{class:!0});var k=E(e);n=I(k,"H3",{class:!0});var i=E(n);t=D(i,"Recipie: "),s=D(i,l),i.forEach(p),a=S(k),_=I(k,"DIV",{class:!0});var N=E(_);d=I(N,"DIV",{class:!0});var $=E(d);j=I($,"DIV",{class:!0});var x=E(j);f=I(x,"IMG",{src:!0,alt:!0,class:!0}),x.forEach(p),P=S($),V=I($,"DIV",{class:!0});var B=E(V);y=I(B,"H2",{class:!0,"data-svelte-h":!0}),W(y)!=="svelte-d4pyay"&&(y.textContent=Y),U=S(B),L=I(B,"UL",{class:!0});var ee=E(L);for(let H=0;H<g.length;H+=1)g[H].l(ee);ee.forEach(p),B.forEach(p),K=S($),w=I($,"DIV",{class:!0});var G=E(w);q=I(G,"H2",{class:!0,"data-svelte-h":!0}),W(q)!=="svelte-ed3wkn"&&(q.textContent=Z),Q=S(G),A=I(G,"OL",{class:!0});var te=E(A);for(let H=0;H<m.length;H+=1)m[H].l(te);te.forEach(p),G.forEach(p),$.forEach(p),N.forEach(p),k.forEach(p),this.h()},h(){v(n,"class","instructions-page-title svelte-1jdi3pr"),le(f.src,u=r[0].image)||v(f,"src",u),v(f,"alt",h=r[0].title),v(f,"class","instructions-page-image svelte-1jdi3pr"),v(j,"class","instructions-page-image-section svelte-1jdi3pr"),v(y,"class","svelte-1jdi3pr"),v(L,"class","instructions-page-ingredients-list svelte-1jdi3pr"),v(V,"class","instructions-page-ingredients-section svelte-1jdi3pr"),v(q,"class","svelte-1jdi3pr"),v(A,"class","instructions-page-instructions-list svelte-1jdi3pr"),v(w,"class","instructions-page-instructions-section svelte-1jdi3pr"),v(d,"class","instructions-page-details-section svelte-1jdi3pr"),v(_,"class","instructions-page-content svelte-1jdi3pr"),v(e,"class","instructions-page-container svelte-1jdi3pr")},m(o,k){J(o,e,k),c(e,n),c(n,t),c(n,s),c(e,a),c(e,_),c(_,d),c(d,j),c(j,f),c(d,P),c(d,V),c(V,y),c(V,U),c(V,L);for(let i=0;i<g.length;i+=1)g[i]&&g[i].m(L,null);c(d,K),c(d,w),c(w,q),c(w,Q),c(w,A);for(let i=0;i<m.length;i+=1)m[i]&&m[i].m(A,null)},p(o,k){if(k&1&&l!==(l=o[0].title+"")&&F(s,l),k&1&&!le(f.src,u=o[0].image)&&v(f,"src",u),k&1&&h!==(h=o[0].title)&&v(f,"alt",h),k&1){M=z(o[0].nutrition.ingredients);let i;for(i=0;i<M.length;i+=1){const N=ae(o,M,i);g[i]?g[i].p(N,k):(g[i]=re(N),g[i].c(),g[i].m(L,null))}for(;i<g.length;i+=1)g[i].d(1);g.length=M.length}if(k&1){O=z(o[0].analyzedInstructions);let i;for(i=0;i<O.length;i+=1){const N=ne(o,O,i);m[i]?m[i].p(N,k):(m[i]=ce(N),m[i].c(),m[i].m(A,null))}for(;i<m.length;i+=1)m[i].d(1);m.length=O.length}},d(o){o&&p(e),X(g,o),X(m,o)}}}function re(r){let e,n=ue(r[8].amount*r[0].servings)+"",t,l,s=r[8].unit+"",a,_,d=r[8].name+"",j,f;return{c(){e=b("li"),t=R(n),l=C(),a=R(s),_=R(" of "),j=R(d),f=C(),this.h()},l(u){e=I(u,"LI",{class:!0});var h=E(e);t=D(h,n),l=S(h),a=D(h,s),_=D(h," of "),j=D(h,d),f=S(h),h.forEach(p),this.h()},h(){v(e,"class","svelte-1jdi3pr")},m(u,h){J(u,e,h),c(e,t),c(e,l),c(e,a),c(e,_),c(e,j),c(e,f)},p(u,h){h&1&&n!==(n=ue(u[8].amount*u[0].servings)+"")&&F(t,n),h&1&&s!==(s=u[8].unit+"")&&F(a,s),h&1&&d!==(d=u[8].name+"")&&F(j,d)},d(u){u&&p(e)}}}function oe(r){let e,n,t=r[5].number+"",l,s,a,_=r[5].step.replace(/\.(?=\S)/g,". ")+"",d,j;return{c(){e=b("li"),n=b("b"),l=R(t),s=R(":"),a=C(),d=R(_),j=C(),this.h()},l(f){e=I(f,"LI",{class:!0});var u=E(e);n=I(u,"B",{});var h=E(n);l=D(h,t),s=D(h,":"),h.forEach(p),a=S(u),d=D(u,_),j=S(u),u.forEach(p),this.h()},h(){v(e,"class","svelte-1jdi3pr")},m(f,u){J(f,e,u),c(e,n),c(n,l),c(n,s),c(e,a),c(e,d),c(e,j)},p(f,u){u&1&&t!==(t=f[5].number+"")&&F(l,t),u&1&&_!==(_=f[5].step.replace(/\.(?=\S)/g,". ")+"")&&F(d,_)},d(f){f&&p(e)}}}function ce(r){let e,n=z(r[2].steps),t=[];for(let l=0;l<n.length;l+=1)t[l]=oe(ie(r,n,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=se()},l(l){for(let s=0;s<t.length;s+=1)t[s].l(l);e=se()},m(l,s){for(let a=0;a<t.length;a+=1)t[a]&&t[a].m(l,s);J(l,e,s)},p(l,s){if(s&1){n=z(l[2].steps);let a;for(a=0;a<n.length;a+=1){const _=ie(l,n,a);t[a]?t[a].p(_,s):(t[a]=oe(_),t[a].c(),t[a].m(e.parentNode,e))}for(;a<t.length;a+=1)t[a].d(1);t.length=n.length}},d(l){l&&p(e),X(t,l)}}}function be(r){let e;function n(s,a){return s[0]?me:ge}let t=n(r),l=t(r);return{c(){e=b("main"),l.c()},l(s){e=I(s,"MAIN",{});var a=E(e);l.l(a),a.forEach(p)},m(s,a){J(s,e,a),l.m(e,null)},p(s,[a]){t===(t=n(s))&&l?l.p(s,a):(l.d(1),l=t(s),l&&(l.c(),l.m(e,null)))},i:T,o:T,d(s){s&&p(e),l.d()}}}function ue(r){const e=parseFloat(r);return Number.isInteger(e)?e.toString():e.toFixed(1)}function Ie(r,e,n){let t;const l=ve(null);return _e(r,l,s=>n(0,t=s)),pe(()=>{if(typeof window<"u"&&typeof localStorage<"u"){const s=localStorage.getItem("searchRecipie");s&&(console.log(JSON.parse(s)),l.set(JSON.parse(s)))}}),[t,l]}class Ce extends fe{constructor(e){super(),he(this,e,Ie,be,de,{})}}export{Ce as default};
