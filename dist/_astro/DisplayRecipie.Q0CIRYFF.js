import{S as Pe,i as Oe,s as Ue,e as d,c as h,a as v,d as u,b as w,n as he,f as Je,o as Ke,w as Qe,g as We,r as Xe,h as Ye,j as Z,k as c,l as q,t as B,m as C,p as G,q as H,u as we,v as r,x as Ge,y as J,z as ae,A as Y,B as x}from"./favourite.CYmlvXJL.js";function Me(a,e,i){const t=a.slice();return t[6]=e[i],t}function Ce(a,e,i){const t=a.slice();return t[9]=e[i],t}function He(a,e,i){const t=a.slice();return t[12]=e[i],t}function Te(a,e,i){const t=a.slice();return t[12]=e[i],t}function Ze(a){let e,i="<p>Recipe not found.</p>";return{c(){e=d("div"),e.innerHTML=i,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-oiosum"&&(e.innerHTML=i),this.h()},h(){c(e,"class","container")},m(t,l){w(t,e,l)},p:he,d(t){t&&u(e)}}}function xe(a){let e,i,t,l,n=a[3].title+"",s,f,p,m,M,g,_,T,S,R,A,_e="Ingredients",re,F,$,ce,P,oe,K,Q,z,j,me="Instructions",ue,O,fe,pe;function ge(o,I){return o[0]?et:$e}let ee=ge(a),N=ee(a),D=a[1]&&Le(),V=a[2]&&Fe(),y=a[3].nutrition&&Se(a),E=a[3].extendedIngredients&&Re(a);function ve(o,I){return o[3].image?lt:tt}let te=ve(a),L=te(a),W=q(a[3].analyzedInstructions),k=[];for(let o=0;o<W.length;o+=1)k[o]=je(Me(a,W,o));return{c(){e=d("div"),i=d("div"),t=d("div"),l=d("h1"),s=B(n),f=C(),p=d("div"),m=d("button"),N.c(),M=C(),D&&D.c(),g=C(),V&&V.c(),_=C(),T=d("div"),S=d("div"),R=d("div"),A=d("h3"),A.textContent=_e,re=C(),F=d("ul"),y&&y.c(),$=C(),E&&E.c(),ce=C(),P=d("div"),L.c(),oe=C(),K=d("div"),Q=d("div"),z=d("div"),j=d("h3"),j.textContent=me,ue=C(),O=d("div");for(let o=0;o<k.length;o+=1)k[o].c();this.h()},l(o){e=h(o,"DIV",{class:!0});var I=v(e);i=h(I,"DIV",{class:!0});var b=v(i);t=h(b,"DIV",{class:!0});var U=v(t);l=h(U,"H1",{class:!0});var be=v(l);s=G(be,n),be.forEach(u),f=H(U),p=h(U,"DIV",{});var X=v(p);m=h(X,"BUTTON",{class:!0});var ke=v(m);N.l(ke),ke.forEach(u),M=H(X),D&&D.l(X),g=H(X),V&&V.l(X),X.forEach(u),U.forEach(u),b.forEach(u),_=H(I),T=h(I,"DIV",{class:!0});var le=v(T);S=h(le,"DIV",{class:!0});var Ie=v(S);R=h(Ie,"DIV",{class:!0});var ie=v(R);A=h(ie,"H3",{class:!0,style:!0,"data-svelte-h":!0}),Z(A)!=="svelte-1czhu5z"&&(A.textContent=_e),re=H(ie),F=h(ie,"UL",{class:!0});var se=v(F);y&&y.l(se),$=H(se),E&&E.l(se),se.forEach(u),ie.forEach(u),Ie.forEach(u),ce=H(le),P=h(le,"DIV",{class:!0});var ye=v(P);L.l(ye),ye.forEach(u),le.forEach(u),oe=H(I),K=h(I,"DIV",{class:!0});var Ee=v(K);Q=h(Ee,"DIV",{class:!0});var De=v(Q);z=h(De,"DIV",{class:!0});var ne=v(z);j=h(ne,"H3",{class:!0,style:!0,"data-svelte-h":!0}),Z(j)!=="svelte-1lmi706"&&(j.textContent=me),ue=H(ne),O=h(ne,"DIV",{class:!0});var Ve=v(O);for(let de=0;de<k.length;de+=1)k[de].l(Ve);Ve.forEach(u),ne.forEach(u),De.forEach(u),Ee.forEach(u),I.forEach(u),this.h()},h(){c(l,"class","display-4"),c(m,"class","image-button"),c(t,"class","col-12 d-flex justify-content-between align-items-center"),c(i,"class","row mb-4"),c(A,"class","bg-secondary text-white px-2 py-1 rounded"),we(A,"display","inline-block"),c(F,"class","list-group list-unstyled"),c(R,"class","bg-light p-3 rounded"),c(S,"class","col-md-4"),c(P,"class","col-md-8 d-flex justify-content-center align-items-center"),c(T,"class","row mb-4"),c(j,"class","bg-secondary text-white px-2 py-1 rounded"),we(j,"display","inline-block"),c(O,"class","list-group"),c(z,"class","bg-light p-3 rounded container-background"),c(Q,"class","col-12"),c(K,"class","row"),c(e,"class","container container-background")},m(o,I){w(o,e,I),r(e,i),r(i,t),r(t,l),r(l,s),r(t,f),r(t,p),r(p,m),N.m(m,null),r(p,M),D&&D.m(p,null),r(p,g),V&&V.m(p,null),r(e,_),r(e,T),r(T,S),r(S,R),r(R,A),r(R,re),r(R,F),y&&y.m(F,null),r(F,$),E&&E.m(F,null),r(T,ce),r(T,P),L.m(P,null),r(e,oe),r(e,K),r(K,Q),r(Q,z),r(z,j),r(z,ue),r(z,O);for(let b=0;b<k.length;b+=1)k[b]&&k[b].m(O,null);fe||(pe=Ge(m,"click",a[5]),fe=!0)},p(o,I){if(I&8&&n!==(n=o[3].title+"")&&J(s,n),ee!==(ee=ge(o))&&(N.d(1),N=ee(o),N&&(N.c(),N.m(m,null))),o[1]?D||(D=Le(),D.c(),D.m(p,g)):D&&(D.d(1),D=null),o[2]?V||(V=Fe(),V.c(),V.m(p,null)):V&&(V.d(1),V=null),o[3].nutrition?y?y.p(o,I):(y=Se(o),y.c(),y.m(F,$)):y&&(y.d(1),y=null),o[3].extendedIngredients?E?E.p(o,I):(E=Re(o),E.c(),E.m(F,null)):E&&(E.d(1),E=null),te===(te=ve(o))&&L?L.p(o,I):(L.d(1),L=te(o),L&&(L.c(),L.m(P,null))),I&8){W=q(o[3].analyzedInstructions);let b;for(b=0;b<W.length;b+=1){const U=Me(o,W,b);k[b]?k[b].p(U,I):(k[b]=je(U),k[b].c(),k[b].m(O,null))}for(;b<k.length;b+=1)k[b].d(1);k.length=W.length}},d(o){o&&u(e),N.d(),D&&D.d(),V&&V.d(),y&&y.d(),E&&E.d(),L.d(),ae(k,o),fe=!1,pe()}}}function $e(a){let e,i;return{c(){e=d("img"),this.h()},l(t){e=h(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){x(e.src,i="/Eatsy/images/favouriteButton.png")||c(e,"src",i),c(e,"alt","favourite"),c(e,"class","detail-icon")},m(t,l){w(t,e,l)},d(t){t&&u(e)}}}function et(a){let e,i;return{c(){e=d("img"),this.h()},l(t){e=h(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){x(e.src,i="/Eatsy/images/favouritedButton.png")||c(e,"src",i),c(e,"alt","favourited"),c(e,"class","detail-icon")},m(t,l){w(t,e,l)},d(t){t&&u(e)}}}function Le(a){let e,i='Added to favourites <img src="/Eatsy/images/happyIcon.png" alt="smiley face" class="detail-icon"/>';return{c(){e=d("div"),e.innerHTML=i,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-w5ijgx"&&(e.innerHTML=i),this.h()},h(){c(e,"class","popup popup-display")},m(t,l){w(t,e,l)},d(t){t&&u(e)}}}function Fe(a){let e,i='Removed from favourites <img src="/Eatsy/images/sadIcon.png" alt="sad face" class="detail-icon"/>';return{c(){e=d("div"),e.innerHTML=i,this.h()},l(t){e=h(t,"DIV",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-u8w7a5"&&(e.innerHTML=i),this.h()},h(){c(e,"class","popup popup-display")},m(t,l){w(t,e,l)},d(t){t&&u(e)}}}function Se(a){let e,i=q(a[3].nutrition.ingredients),t=[];for(let l=0;l<i.length;l+=1)t[l]=Ne(Te(a,i,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=Y()},l(l){for(let n=0;n<t.length;n+=1)t[n].l(l);e=Y()},m(l,n){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(l,n);w(l,e,n)},p(l,n){if(n&8){i=q(l[3].nutrition.ingredients);let s;for(s=0;s<i.length;s+=1){const f=Te(l,i,s);t[s]?t[s].p(f,n):(t[s]=Ne(f),t[s].c(),t[s].m(e.parentNode,e))}for(;s<t.length;s+=1)t[s].d(1);t.length=i.length}},d(l){l&&u(e),ae(t,l)}}}function Ne(a){let e,i=Be(a[12].amount*a[3].servings)+"",t,l,n=a[12].unit+"",s,f,p=a[12].name+"",m,M;return{c(){e=d("li"),t=B(i),l=C(),s=B(n),f=C(),m=B(p),M=C(),this.h()},l(g){e=h(g,"LI",{class:!0});var _=v(e);t=G(_,i),l=H(_),s=G(_,n),f=H(_),m=G(_,p),M=H(_),_.forEach(u),this.h()},h(){c(e,"class","list-group-item")},m(g,_){w(g,e,_),r(e,t),r(e,l),r(e,s),r(e,f),r(e,m),r(e,M)},p(g,_){_&8&&i!==(i=Be(g[12].amount*g[3].servings)+"")&&J(t,i),_&8&&n!==(n=g[12].unit+"")&&J(s,n),_&8&&p!==(p=g[12].name+"")&&J(m,p)},d(g){g&&u(e)}}}function Re(a){let e,i=q(a[3].extendedIngredients),t=[];for(let l=0;l<i.length;l+=1)t[l]=Ae(He(a,i,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=Y()},l(l){for(let n=0;n<t.length;n+=1)t[n].l(l);e=Y()},m(l,n){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(l,n);w(l,e,n)},p(l,n){if(n&8){i=q(l[3].extendedIngredients);let s;for(s=0;s<i.length;s+=1){const f=He(l,i,s);t[s]?t[s].p(f,n):(t[s]=Ae(f),t[s].c(),t[s].m(e.parentNode,e))}for(;s<t.length;s+=1)t[s].d(1);t.length=i.length}},d(l){l&&u(e),ae(t,l)}}}function Ae(a){let e,i=a[12].original+"",t;return{c(){e=d("li"),t=B(i),this.h()},l(l){e=h(l,"LI",{class:!0});var n=v(e);t=G(n,i),n.forEach(u),this.h()},h(){c(e,"class","list-group-item")},m(l,n){w(l,e,n),r(e,t)},p(l,n){n&8&&i!==(i=l[12].original+"")&&J(t,i)},d(l){l&&u(e)}}}function tt(a){let e,i,t;return{c(){e=d("img"),this.h()},l(l){e=h(l,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){x(e.src,i=qe)||c(e,"src",i),c(e,"class","img-fluid ingredientsImage custom-rounded"),c(e,"alt",t=a[3].title)},m(l,n){w(l,e,n)},p(l,n){n&8&&t!==(t=l[3].title)&&c(e,"alt",t)},d(l){l&&u(e)}}}function lt(a){let e,i,t,l,n;return{c(){e=d("img"),this.h()},l(s){e=h(s,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){x(e.src,i=a[3].image)||c(e,"src",i),c(e,"class","img-fluid ingredientsImage custom-rounded"),c(e,"alt",t=a[3].title)},m(s,f){w(s,e,f),l||(n=Ge(e,"error",st),l=!0)},p(s,f){f&8&&!x(e.src,i=s[3].image)&&c(e,"src",i),f&8&&t!==(t=s[3].title)&&c(e,"alt",t)},d(s){s&&u(e),l=!1,n()}}}function ze(a){let e,i,t,l=a[9].number+"",n,s,f,p=a[9].step+"",m,M;return{c(){e=d("div"),i=d("h5"),t=B("Step "),n=B(l),s=C(),f=d("p"),m=B(p),M=C(),this.h()},l(g){e=h(g,"DIV",{class:!0});var _=v(e);i=h(_,"H5",{class:!0});var T=v(i);t=G(T,"Step "),n=G(T,l),T.forEach(u),s=H(_),f=h(_,"P",{class:!0});var S=v(f);m=G(S,p),S.forEach(u),M=H(_),_.forEach(u),this.h()},h(){c(i,"class","step-number"),c(f,"class","step-text"),c(e,"class","list-group-item instruction-step")},m(g,_){w(g,e,_),r(e,i),r(i,t),r(i,n),r(e,s),r(e,f),r(f,m),r(e,M)},p(g,_){_&8&&l!==(l=g[9].number+"")&&J(n,l),_&8&&p!==(p=g[9].step+"")&&J(m,p)},d(g){g&&u(e)}}}function je(a){let e,i=q(a[6].steps),t=[];for(let l=0;l<i.length;l+=1)t[l]=ze(Ce(a,i,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=Y()},l(l){for(let n=0;n<t.length;n+=1)t[n].l(l);e=Y()},m(l,n){for(let s=0;s<t.length;s+=1)t[s]&&t[s].m(l,n);w(l,e,n)},p(l,n){if(n&8){i=q(l[6].steps);let s;for(s=0;s<i.length;s+=1){const f=Ce(l,i,s);t[s]?t[s].p(f,n):(t[s]=ze(f),t[s].c(),t[s].m(e.parentNode,e))}for(;s<t.length;s+=1)t[s].d(1);t.length=i.length}},d(l){l&&u(e),ae(t,l)}}}function it(a){let e;function i(n,s){return n[3]?xe:Ze}let t=i(a),l=t(a);return{c(){e=d("main"),l.c()},l(n){e=h(n,"MAIN",{});var s=v(e);l.l(s),s.forEach(u)},m(n,s){w(n,e,s),l.m(e,null)},p(n,[s]){t===(t=i(n))&&l?l.p(n,s):(l.d(1),l=t(n),l&&(l.c(),l.m(e,null)))},i:he,o:he,d(n){n&&u(e),l.d()}}}const qe="/Eatsy/images/fallbackImage.png";function Be(a){const e=parseFloat(a);return Number.isInteger(e)?e.toString():e.toFixed(1)}function st(a){a.target.src=qe}function nt(a,e,i){let t;const l=Qe(null);Je(a,l,m=>i(3,t=m));let n=!1,s=!1,f=!1;return Ke(()=>{if(typeof window<"u"&&typeof localStorage<"u"){const m=localStorage.getItem("currentRecipie");if(m){const M=JSON.parse(m);l.set(M),i(0,n=We(M.id))}}}),[n,s,f,t,l,()=>{l.update(m=>(n?(Xe(m.id),i(2,f=!0),setTimeout(()=>i(2,f=!1),2e3)):(Ye(m),i(1,s=!0),setTimeout(()=>i(1,s=!1),2e3)),i(0,n=!n),m))}]}class rt extends Pe{constructor(e){super(),Oe(this,e,nt,it,Ue,{})}}export{rt as default};
