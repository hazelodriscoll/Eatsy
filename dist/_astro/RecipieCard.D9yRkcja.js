import{S as Ne,i as Ve,s as De,e as r,a as m,t as q,c as i,b as p,f as h,g as z,d as u,w as Z,F as H,h as t,j as ve,k as e,l as Te,o as O,x as ye}from"./index.BXI5Iv19.js";import{s as Ae}from"./store.C7fbvvZc.js";function Me(c){let a=c[0].creditsText+"",l;return{c(){l=q(a)},l(s){l=z(s,a)},m(s,o){ve(s,l,o)},p(s,o){o&1&&a!==(a=s[0].creditsText+"")&&O(l,a)},d(s){s&&u(l)}}}function Re(c){let a=c[0].sourceName+"",l;return{c(){l=q(a)},l(s){l=z(s,a)},m(s,o){ve(s,l,o)},p(s,o){o&1&&a!==(a=s[0].sourceName+"")&&O(l,a)},d(s){s&&u(l)}}}function we(c){let a,l,s,o,M,E,I,R,F=c[0].title+"",J,$,v,g,y,fe,ee,N,_e="Total Time:",te,w,j=c[0].readyInMinutes+"",K,se,ae,b,V,me,le,D,pe="Servings:",re,P,B=c[0].servings+"",L,ie,C,T,he,ne,A,ge="Recipe by:",ce,f,Q,oe,k,be="View Full Recipie",ue,Ce;function Ee(n,d){return n[0].sourceName?Re:Me}let W=Ee(c),_=W(c);return{c(){a=r("div"),l=r("div"),s=r("img"),E=m(),I=r("div"),R=r("h5"),J=q(F),$=m(),v=r("div"),g=r("div"),y=r("img"),ee=m(),N=r("span"),N.textContent=_e,te=m(),w=r("span"),K=q(j),se=q(" mins"),ae=m(),b=r("div"),V=r("img"),le=m(),D=r("span"),D.textContent=pe,re=m(),P=r("span"),L=q(B),ie=m(),C=r("div"),T=r("img"),ne=m(),A=r("span"),A.textContent=ge,ce=m(),f=r("a"),_.c(),oe=m(),k=r("button"),k.textContent=be,this.h()},l(n){a=i(n,"DIV",{class:!0});var d=p(a);l=i(d,"DIV",{class:!0});var X=p(l);s=i(X,"IMG",{src:!0,class:!0,alt:!0}),E=h(X),I=i(X,"DIV",{class:!0});var Y=p(I);R=i(Y,"H5",{class:!0});var Ie=p(R);J=z(Ie,F),Ie.forEach(u),$=h(Y),v=i(Y,"DIV",{class:!0});var S=p(v);g=i(S,"DIV",{class:!0});var G=p(g);y=i(G,"IMG",{src:!0,alt:!0,class:!0}),ee=h(G),N=i(G,"SPAN",{class:!0,"data-svelte-h":!0}),Z(N)!=="svelte-6ivwmf"&&(N.textContent=_e),te=h(G),w=i(G,"SPAN",{});var de=p(w);K=z(de,j),se=z(de," mins"),de.forEach(u),G.forEach(u),ae=h(S),b=i(S,"DIV",{class:!0});var x=p(b);V=i(x,"IMG",{src:!0,alt:!0,class:!0}),le=h(x),D=i(x,"SPAN",{class:!0,"data-svelte-h":!0}),Z(D)!=="svelte-1bdf15t"&&(D.textContent=pe),re=h(x),P=i(x,"SPAN",{class:!0});var ke=p(P);L=z(ke,B),ke.forEach(u),x.forEach(u),ie=h(S),C=i(S,"DIV",{class:!0});var U=p(C);T=i(U,"IMG",{src:!0,alt:!0,class:!0}),ne=h(U),A=i(U,"SPAN",{class:!0,"data-svelte-h":!0}),Z(A)!=="svelte-1m28vzp"&&(A.textContent=ge),ce=h(U),f=i(U,"A",{href:!0,target:!0,rel:!0,class:!0});var Se=p(f);_.l(Se),Se.forEach(u),U.forEach(u),oe=h(S),k=i(S,"BUTTON",{class:!0,"data-svelte-h":!0}),Z(k)!=="svelte-1b8g4dz"&&(k.textContent=be),S.forEach(u),Y.forEach(u),X.forEach(u),d.forEach(u),this.h()},h(){H(s.src,o=c[0].image)||t(s,"src",o),t(s,"class","card-img-top sr-custom-rounded"),t(s,"alt",M=c[0].title),t(R,"class","card-title"),H(y.src,fe="/Eatsy/images/time-icon.png")||t(y,"src",fe),t(y,"alt","Time"),t(y,"class","sr-detail-icon"),t(N,"class","sr-detail-name"),t(g,"class","sr-detail-item"),H(V.src,me="/Eatsy/images/servings-icon.png")||t(V,"src",me),t(V,"alt","Servings"),t(V,"class","sr-detail-icon"),t(D,"class","sr-detail-name"),t(P,"class","sr-detail-info"),t(b,"class","sr-detail-item"),H(T.src,he="/Eatsy/images/recipie-by-icon.png")||t(T,"src",he),t(T,"alt","Recipe by"),t(T,"class","sr-detail-icon"),t(A,"class","sr-detail-name"),t(f,"href",Q=c[0].spoonacularSourceUrl),t(f,"target","_blank"),t(f,"rel","noopener noreferrer"),t(f,"class","link-dark"),t(C,"class","sr-detail-item"),t(k,"class","btn btn-primary"),t(v,"class","sr-recipe-details"),t(I,"class","card-body"),t(l,"class","card"),t(a,"class","col")},m(n,d){ve(n,a,d),e(a,l),e(l,s),e(l,E),e(l,I),e(I,R),e(R,J),e(I,$),e(I,v),e(v,g),e(g,y),e(g,ee),e(g,N),e(g,te),e(g,w),e(w,K),e(w,se),e(v,ae),e(v,b),e(b,V),e(b,le),e(b,D),e(b,re),e(b,P),e(P,L),e(v,ie),e(v,C),e(C,T),e(C,ne),e(C,A),e(C,ce),e(C,f),_.m(f,null),e(v,oe),e(v,k),ue||(Ce=Te(k,"click",c[2]),ue=!0)},p(n,[d]){d&1&&!H(s.src,o=n[0].image)&&t(s,"src",o),d&1&&M!==(M=n[0].title)&&t(s,"alt",M),d&1&&F!==(F=n[0].title+"")&&O(J,F),d&1&&j!==(j=n[0].readyInMinutes+"")&&O(K,j),d&1&&B!==(B=n[0].servings+"")&&O(L,B),W===(W=Ee(n))&&_?_.p(n,d):(_.d(1),_=W(n),_&&(_.c(),_.m(f,null))),d&1&&Q!==(Q=n[0].spoonacularSourceUrl)&&t(f,"href",Q)},i:ye,o:ye,d(n){n&&u(a),_.d(),ue=!1,Ce()}}}function Pe(c,a,l){let{recipie:s}=a;const o=E=>{Ae(E),window.location.href="/Eatsy/ingredients"},M=()=>o(s);return c.$$set=E=>{"recipie"in E&&l(0,s=E.recipie)},[s,o,M]}class Ue extends Ne{constructor(a){super(),Ve(this,a,Pe,we,De,{recipie:0})}}export{Ue as default};
