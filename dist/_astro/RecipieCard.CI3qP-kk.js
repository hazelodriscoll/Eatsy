import{S as xe,i as $e,s as et,k as je,e as n,l as k,t as K,c,a as E,p as y,m as J,d as u,j as $,q as a,A as F,b as A,u as r,v as Se,x as ee,n as Ke,y as tt,L as lt,o as st,K as at,g as Je,r as it,h as rt}from"./favourite.Z1-Hp_GV.js";import{s as nt}from"./store.B61S4mW1.js";function Qe(l,e,s){const t=l.slice();return t[7]=e[s],t}function ct(l){let e,s,t;return{c(){e=n("img"),this.h()},l(i){e=c(i,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){F(e.src,s=Ze)||a(e,"src",s),a(e,"class","card-img-top sr-custom-rounded"),a(e,"alt",t=l[0].title)},m(i,o){A(i,e,o)},p(i,o){o&1&&t!==(t=i[0].title)&&a(e,"alt",t)},d(i){i&&u(e)}}}function ot(l){let e,s,t,i,o;return{c(){e=n("img"),this.h()},l(m){e=c(m,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){F(e.src,s=l[0].image)||a(e,"src",s),a(e,"class","card-img-top sr-custom-rounded"),a(e,"alt",t=l[0].title)},m(m,C){A(m,e,C),i||(o=Se(e,"error",ht),i=!0)},p(m,C){C&1&&!F(e.src,s=m[0].image)&&a(e,"src",s),C&1&&t!==(t=m[0].title)&&a(e,"alt",t)},d(m){m&&u(e),i=!1,o()}}}function ut(l){let e=l[0].creditsText+"",s;return{c(){s=K(e)},l(t){s=J(t,e)},m(t,i){A(t,s,i)},p(t,i){i&1&&e!==(e=t[0].creditsText+"")&&ee(s,e)},d(t){t&&u(s)}}}function ft(l){let e=l[0].sourceName+"",s;return{c(){s=K(e)},l(t){s=J(t,e)},m(t,i){A(t,s,i)},p(t,i){i&1&&e!==(e=t[0].sourceName+"")&&ee(s,e)},d(t){t&&u(s)}}}function dt(l){let e,s;return{c(){e=n("img"),this.h()},l(t){e=c(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){F(e.src,s="/Eatsy/images/favouriteButton.png")||a(e,"src",s),a(e,"alt","favourite"),a(e,"class","detail-icon")},m(t,i){A(t,e,i)},d(t){t&&u(e)}}}function _t(l){let e,s;return{c(){e=n("img"),this.h()},l(t){e=c(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){F(e.src,s="/Eatsy/images/favouritedButton.png")||a(e,"src",s),a(e,"alt","favourited"),a(e,"class","detail-icon")},m(t,i){A(t,e,i)},d(t){t&&u(e)}}}function We(l){let e,s='Added to favourites <img src="/Eatsy/images/happyIcon.png" alt="smiley face" class="detail-icon"/>';return{c(){e=n("div"),e.innerHTML=s,this.h()},l(t){e=c(t,"DIV",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-q7lgvp"&&(e.innerHTML=s),this.h()},h(){a(e,"class","popup popup-card")},m(t,i){A(t,e,i)},d(t){t&&u(e)}}}function Xe(l){let e,s='Removed from favourites <img src="/Eatsy/images/sadIcon.png" alt="sad face" class="detail-icon"/>';return{c(){e=n("div"),e.innerHTML=s,this.h()},l(t){e=c(t,"DIV",{class:!0,"data-svelte-h":!0}),$(e)!=="svelte-1c5pg7l"&&(e.innerHTML=s),this.h()},h(){a(e,"class","popup popup-card")},m(t,i){A(t,e,i)},d(t){t&&u(e)}}}function Ye(l){let e,s=l[7]+"",t;return{c(){e=n("span"),t=K(s),this.h()},l(i){e=c(i,"SPAN",{class:!0});var o=E(e);t=J(o,s),o.forEach(u),this.h()},h(){a(e,"class","badge rounded-pill text-bg-secondary")},m(i,o){A(i,e,o),r(e,t)},p(i,o){o&1&&s!==(s=i[7]+"")&&ee(t,s)},d(i){i&&u(e)}}}function mt(l){let e,s,t,i,o,m=l[0].title+"",C,te,v,_,H,Ve,fe,L,De="Total Time:",de,Q,le=l[0].readyInMinutes+"",ae,_e,me,V,q,Ne,he,B,Ae="Servings:",ve,W,se=l[0].servings+"",ie,pe,D,U,we,ge,z,Pe="Recipe by:",be,T,re,ke,I,P,Re="View Full Recipie",ye,R,Ee,ne,Ie,O,Ce,Ge;function Fe(f,p){return f[0].image?ot:ct}let ce=Fe(l),M=ce(l);function He(f,p){return f[0].sourceName?ft:ut}let oe=He(l),S=oe(l);function Le(f,p){return f[1]?_t:dt}let ue=Le(l),w=ue(l),g=l[2]&&We(),b=l[3]&&Xe(),X=je(l[0].diets),h=[];for(let f=0;f<X.length;f+=1)h[f]=Ye(Qe(l,X,f));return{c(){e=n("div"),s=n("div"),M.c(),t=k(),i=n("div"),o=n("h5"),C=K(m),te=k(),v=n("div"),_=n("div"),H=n("img"),fe=k(),L=n("span"),L.textContent=De,de=k(),Q=n("span"),ae=K(le),_e=K(" mins"),me=k(),V=n("div"),q=n("img"),he=k(),B=n("span"),B.textContent=Ae,ve=k(),W=n("span"),ie=K(se),pe=k(),D=n("div"),U=n("img"),ge=k(),z=n("span"),z.textContent=Pe,be=k(),T=n("a"),S.c(),ke=k(),I=n("div"),P=n("button"),P.textContent=Re,ye=k(),R=n("button"),w.c(),Ee=k(),g&&g.c(),ne=k(),b&&b.c(),Ie=k(),O=n("div");for(let f=0;f<h.length;f+=1)h[f].c();this.h()},l(f){e=c(f,"DIV",{class:!0});var p=E(e);s=c(p,"DIV",{class:!0});var d=E(s);M.l(d),t=y(d),i=c(d,"DIV",{class:!0});var j=E(i);o=c(j,"H5",{class:!0});var qe=E(o);C=J(qe,m),qe.forEach(u),te=y(j),v=c(j,"DIV",{class:!0});var N=E(v);_=c(N,"DIV",{class:!0});var Y=E(_);H=c(Y,"IMG",{src:!0,alt:!0,class:!0}),fe=y(Y),L=c(Y,"SPAN",{class:!0,"data-svelte-h":!0}),$(L)!=="svelte-6ivwmf"&&(L.textContent=De),de=y(Y),Q=c(Y,"SPAN",{});var Te=E(Q);ae=J(Te,le),_e=J(Te," mins"),Te.forEach(u),Y.forEach(u),me=y(N),V=c(N,"DIV",{class:!0});var Z=E(V);q=c(Z,"IMG",{src:!0,alt:!0,class:!0}),he=y(Z),B=c(Z,"SPAN",{class:!0,"data-svelte-h":!0}),$(B)!=="svelte-1bdf15t"&&(B.textContent=Ae),ve=y(Z),W=c(Z,"SPAN",{class:!0});var Be=E(W);ie=J(Be,se),Be.forEach(u),Z.forEach(u),pe=y(N),D=c(N,"DIV",{class:!0});var x=E(D);U=c(x,"IMG",{src:!0,alt:!0,class:!0}),ge=y(x),z=c(x,"SPAN",{class:!0,"data-svelte-h":!0}),$(z)!=="svelte-1m28vzp"&&(z.textContent=Pe),be=y(x),T=c(x,"A",{href:!0,target:!0,rel:!0,class:!0});var Ue=E(T);S.l(Ue),Ue.forEach(u),x.forEach(u),ke=y(N),I=c(N,"DIV",{class:!0});var G=E(I);P=c(G,"BUTTON",{class:!0,"data-svelte-h":!0}),$(P)!=="svelte-1xhe0tz"&&(P.textContent=Re),ye=y(G),R=c(G,"BUTTON",{class:!0});var ze=E(R);w.l(ze),ze.forEach(u),Ee=y(G),g&&g.l(G),ne=y(G),b&&b.l(G),G.forEach(u),Ie=y(N),O=c(N,"DIV",{class:!0});var Oe=E(O);for(let Me=0;Me<h.length;Me+=1)h[Me].l(Oe);Oe.forEach(u),N.forEach(u),j.forEach(u),d.forEach(u),p.forEach(u),this.h()},h(){a(o,"class","card-title"),F(H.src,Ve="/Eatsy/images/time-icon.png")||a(H,"src",Ve),a(H,"alt","Time"),a(H,"class","sr-detail-icon"),a(L,"class","sr-detail-name"),a(_,"class","sr-detail-item"),F(q.src,Ne="/Eatsy/images/servings-icon.png")||a(q,"src",Ne),a(q,"alt","Servings"),a(q,"class","sr-detail-icon"),a(B,"class","sr-detail-name"),a(W,"class","sr-detail-info"),a(V,"class","sr-detail-item"),F(U.src,we="/Eatsy/images/recipie-by-icon.png")||a(U,"src",we),a(U,"alt","Recipe by"),a(U,"class","sr-detail-icon"),a(z,"class","sr-detail-name"),a(T,"href",re=l[0].spoonacularSourceUrl),a(T,"target","_blank"),a(T,"rel","noopener noreferrer"),a(T,"class","link-dark"),a(D,"class","sr-detail-item"),a(P,"class","btn btn-primary"),a(R,"class","image-button"),a(I,"class","button-container"),a(O,"class","sr-detail-item badge-container"),a(v,"class","sr-recipe-details"),a(i,"class","card-body"),a(s,"class","card"),a(e,"class","col")},m(f,p){A(f,e,p),r(e,s),M.m(s,null),r(s,t),r(s,i),r(i,o),r(o,C),r(i,te),r(i,v),r(v,_),r(_,H),r(_,fe),r(_,L),r(_,de),r(_,Q),r(Q,ae),r(Q,_e),r(v,me),r(v,V),r(V,q),r(V,he),r(V,B),r(V,ve),r(V,W),r(W,ie),r(v,pe),r(v,D),r(D,U),r(D,ge),r(D,z),r(D,be),r(D,T),S.m(T,null),r(v,ke),r(v,I),r(I,P),r(I,ye),r(I,R),w.m(R,null),r(I,Ee),g&&g.m(I,null),r(I,ne),b&&b.m(I,null),r(v,Ie),r(v,O);for(let d=0;d<h.length;d+=1)h[d]&&h[d].m(O,null);Ce||(Ge=[Se(P,"click",l[6]),Se(R,"click",function(){at(l[5](l[0]))&&l[5](l[0]).apply(this,arguments)})],Ce=!0)},p(f,[p]){if(l=f,ce===(ce=Fe(l))&&M?M.p(l,p):(M.d(1),M=ce(l),M&&(M.c(),M.m(s,t))),p&1&&m!==(m=l[0].title+"")&&ee(C,m),p&1&&le!==(le=l[0].readyInMinutes+"")&&ee(ae,le),p&1&&se!==(se=l[0].servings+"")&&ee(ie,se),oe===(oe=He(l))&&S?S.p(l,p):(S.d(1),S=oe(l),S&&(S.c(),S.m(T,null))),p&1&&re!==(re=l[0].spoonacularSourceUrl)&&a(T,"href",re),ue!==(ue=Le(l))&&(w.d(1),w=ue(l),w&&(w.c(),w.m(R,null))),l[2]?g||(g=We(),g.c(),g.m(I,ne)):g&&(g.d(1),g=null),l[3]?b||(b=Xe(),b.c(),b.m(I,null)):b&&(b.d(1),b=null),p&1){X=je(l[0].diets);let d;for(d=0;d<X.length;d+=1){const j=Qe(l,X,d);h[d]?h[d].p(j,p):(h[d]=Ye(j),h[d].c(),h[d].m(O,null))}for(;d<h.length;d+=1)h[d].d(1);h.length=X.length}},i:Ke,o:Ke,d(f){f&&u(e),M.d(),S.d(),w.d(),g&&g.d(),b&&b.d(),tt(h,f),Ce=!1,lt(Ge)}}}const Ze="/Eatsy/images/fallbackImage.png";function ht(l){l.target.src=Ze}function vt(l,e,s){let{recipie:t}=e;const i=_=>{nt(_),window.location.href="/Eatsy/ingredients"};let o=!1,m=!1,C=!1;const te=_=>{s(1,o=Je(_.id)),o?(it(_.id),s(3,C=!0),setTimeout(()=>s(3,C=!1),2e3)):(rt(_),s(2,m=!0),setTimeout(()=>s(2,m=!1),2e3)),s(1,o=!o)};st(()=>{typeof window<"u"&&typeof localStorage<"u"&&s(1,o=Je(t.id))});const v=()=>i(t);return l.$$set=_=>{"recipie"in _&&s(0,t=_.recipie)},[t,o,m,C,i,te,v]}class bt extends xe{constructor(e){super(),$e(this,e,vt,mt,et,{recipie:0})}}export{bt as default};
