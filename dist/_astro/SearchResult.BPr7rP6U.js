import{S as Ae,i as Me,s as Ue,e as c,a as b,t as se,c as i,b as g,f as y,g as le,d as p,w as ce,F as Pe,h as t,j as be,k as e,l as ie,o as ge,x as ye,H as Ne,p as Se,n as qe,m as Ie,r as Be,D as _e,E as Qe,v as Le,C as me,q as Ge,y as Oe,z as je,A as ze,B as He}from"./index.BXI5Iv19.js";import{e as Re}from"./each.-gASlQSi.js";import{s as Ke}from"./recipieService.DUCIO3jB.js";import{s as Je,a as We}from"./store.C7fbvvZc.js";async function Xe(a,l=0,r=null){const s={apiKey:"fb571eb0a36b417daee401017d390f99",query:a,addRecipeInstructions:!0,addRecipeNutrition:!0,number:"9",offset:l};r&&(s.diet=r);try{return await Ke(s)}catch(n){throw console.error("Failed to fetch search results:",n),new Error("Failed to fetch search results.")}}function Ye(a){let l,r,s,n,C,k,M,P,_=a[0].title+"",I,S,m,v,w,N,R,E,B="Total Time:",U,z,A=a[0].readyInMinutes+"",f,G,o,d,h,W,T,V,$="Servings:",u,D,L=a[0].servings+"",Q,ee,X,O,xe,fe,H,K="Recipe by:",j,Y,oe=a[0].sourceName+"",he,pe,te,ae,F="View Full Recipie",J,re;return{c(){l=c("div"),r=c("div"),s=c("img"),k=b(),M=c("div"),P=c("h5"),I=se(_),S=b(),m=c("div"),v=c("div"),w=c("img"),R=b(),E=c("span"),E.textContent=B,U=b(),z=c("span"),f=se(A),G=se(" mins"),o=b(),d=c("div"),h=c("img"),T=b(),V=c("span"),V.textContent=$,u=b(),D=c("span"),Q=se(L),ee=b(),X=c("div"),O=c("img"),fe=b(),H=c("span"),H.textContent=K,j=b(),Y=c("a"),he=se(oe),te=b(),ae=c("button"),ae.textContent=F,this.h()},l(q){l=i(q,"DIV",{class:!0});var x=g(l);r=i(x,"DIV",{class:!0});var ue=g(r);s=i(ue,"IMG",{src:!0,class:!0,alt:!0}),k=y(ue),M=i(ue,"DIV",{class:!0});var de=g(M);P=i(de,"H5",{class:!0});var ve=g(P);I=le(ve,_),ve.forEach(p),S=y(de),m=i(de,"DIV",{class:!0});var Z=g(m);v=i(Z,"DIV",{class:!0});var ne=g(v);w=i(ne,"IMG",{src:!0,alt:!0,class:!0}),R=y(ne),E=i(ne,"SPAN",{class:!0,"data-svelte-h":!0}),ce(E)!=="svelte-6ivwmf"&&(E.textContent=B),U=y(ne),z=i(ne,"SPAN",{});var ke=g(z);f=le(ke,A),G=le(ke," mins"),ke.forEach(p),ne.forEach(p),o=y(Z),d=i(Z,"DIV",{class:!0});var Ce=g(d);h=i(Ce,"IMG",{src:!0,alt:!0,class:!0}),T=y(Ce),V=i(Ce,"SPAN",{class:!0,"data-svelte-h":!0}),ce(V)!=="svelte-1bdf15t"&&(V.textContent=$),u=y(Ce),D=i(Ce,"SPAN",{class:!0});var Ve=g(D);Q=le(Ve,L),Ve.forEach(p),Ce.forEach(p),ee=y(Z),X=i(Z,"DIV",{class:!0});var Ee=g(X);O=i(Ee,"IMG",{src:!0,alt:!0,class:!0}),fe=y(Ee),H=i(Ee,"SPAN",{class:!0,"data-svelte-h":!0}),ce(H)!=="svelte-1m28vzp"&&(H.textContent=K),j=y(Ee),Y=i(Ee,"A",{href:!0,target:!0,class:!0});var we=g(Y);he=le(we,oe),we.forEach(p),Ee.forEach(p),te=y(Z),ae=i(Z,"BUTTON",{class:!0,"data-svelte-h":!0}),ce(ae)!=="svelte-1b8g4dz"&&(ae.textContent=F),Z.forEach(p),de.forEach(p),ue.forEach(p),x.forEach(p),this.h()},h(){Pe(s.src,n=a[0].image)||t(s,"src",n),t(s,"class","card-img-top sr-custom-rounded"),t(s,"alt",C=a[0].title),t(P,"class","card-title"),Pe(w.src,N="/Eatsy/images/time-icon.png")||t(w,"src",N),t(w,"alt","Time"),t(w,"class","sr-detail-icon"),t(E,"class","sr-detail-name"),t(v,"class","sr-detail-item"),Pe(h.src,W="/Eatsy/images/servings-icon.png")||t(h,"src",W),t(h,"alt","Servings"),t(h,"class","sr-detail-icon"),t(V,"class","sr-detail-name"),t(D,"class","sr-detail-info"),t(d,"class","sr-detail-item"),Pe(O.src,xe="/Eatsy/images/recipie-by-icon.png")||t(O,"src",xe),t(O,"alt","Recipe by"),t(O,"class","sr-detail-icon"),t(H,"class","sr-detail-name"),t(Y,"href",pe=a[0].spoonacularSourceUrl),t(Y,"target","_blank"),t(Y,"class","sr-detail-info"),t(X,"class","sr-detail-item"),t(ae,"class","btn btn-primary"),t(m,"class","sr-recipe-details"),t(M,"class","card-body"),t(r,"class","card"),t(l,"class","col")},m(q,x){be(q,l,x),e(l,r),e(r,s),e(r,k),e(r,M),e(M,P),e(P,I),e(M,S),e(M,m),e(m,v),e(v,w),e(v,R),e(v,E),e(v,U),e(v,z),e(z,f),e(z,G),e(m,o),e(m,d),e(d,h),e(d,T),e(d,V),e(d,u),e(d,D),e(D,Q),e(m,ee),e(m,X),e(X,O),e(X,fe),e(X,H),e(X,j),e(X,Y),e(Y,he),e(m,te),e(m,ae),J||(re=ie(ae,"click",a[2]),J=!0)},p(q,[x]){x&1&&!Pe(s.src,n=q[0].image)&&t(s,"src",n),x&1&&C!==(C=q[0].title)&&t(s,"alt",C),x&1&&_!==(_=q[0].title+"")&&ge(I,_),x&1&&A!==(A=q[0].readyInMinutes+"")&&ge(f,A),x&1&&L!==(L=q[0].servings+"")&&ge(Q,L),x&1&&oe!==(oe=q[0].sourceName+"")&&ge(he,oe),x&1&&pe!==(pe=q[0].spoonacularSourceUrl)&&t(Y,"href",pe)},i:ye,o:ye,d(q){q&&p(l),J=!1,re()}}}function Ze(a,l,r){let{recipie:s}=l;const n=k=>{Je(k),window.location.href="/Eatsy/ingredients"},C=()=>n(s);return a.$$set=k=>{"recipie"in k&&r(0,s=k.recipie)},[s,n,C]}class $e extends Ae{constructor(l){super(),Me(this,l,Ze,Ye,Ue,{recipie:0})}}function Te(a,l,r){const s=a.slice();return s[28]=l[r],s}function et(a){let l,r,s,n,C,k,M,P,_,I,S,m=Math.ceil(a[5]/De)+"",v,w,N,R,E,B,U,z,A=Re(a[4]),f=[];for(let o=0;o<A.length;o+=1)f[o]=Fe(Te(a,A,o));const G=o=>Se(f[o],1,1,()=>{f[o]=null});return{c(){l=c("div");for(let o=0;o<f.length;o+=1)f[o].c();r=b(),s=c("div"),n=c("button"),C=se("Previous"),M=b(),P=c("span"),_=se("Page "),I=se(a[0]),S=se(" of "),v=se(m),w=b(),N=c("button"),R=se("Next"),this.h()},l(o){l=i(o,"DIV",{class:!0});var d=g(l);for(let $=0;$<f.length;$+=1)f[$].l(d);d.forEach(p),r=y(o),s=i(o,"DIV",{class:!0});var h=g(s);n=i(h,"BUTTON",{class:!0});var W=g(n);C=le(W,"Previous"),W.forEach(p),M=y(h),P=i(h,"SPAN",{});var T=g(P);_=le(T,"Page "),I=le(T,a[0]),S=le(T," of "),v=le(T,m),T.forEach(p),w=y(h),N=i(h,"BUTTON",{class:!0});var V=g(N);R=le(V,"Next"),V.forEach(p),h.forEach(p),this.h()},h(){t(l,"class","card-group row row-cols-1 row-cols-md-3 g-4"),t(n,"class","btn btn-primary"),n.disabled=k=a[0]===1,t(N,"class","btn btn-primary"),N.disabled=E=a[0]===Math.ceil(a[5]/De),t(s,"class","pagination-controls d-flex justify-content-between align-items-center mt-4")},m(o,d){be(o,l,d);for(let h=0;h<f.length;h+=1)f[h]&&f[h].m(l,null);be(o,r,d),be(o,s,d),e(s,n),e(n,C),e(s,M),e(s,P),e(P,_),e(P,I),e(P,S),e(P,v),e(s,w),e(s,N),e(N,R),B=!0,U||(z=[ie(n,"click",a[15]),ie(N,"click",a[14])],U=!0)},p(o,d){if(d&16){A=Re(o[4]);let h;for(h=0;h<A.length;h+=1){const W=Te(o,A,h);f[h]?(f[h].p(W,d),Ie(f[h],1)):(f[h]=Fe(W),f[h].c(),Ie(f[h],1),f[h].m(l,null))}for(Le(),h=A.length;h<f.length;h+=1)G(h);qe()}(!B||d&1&&k!==(k=o[0]===1))&&(n.disabled=k),(!B||d&1)&&ge(I,o[0]),(!B||d&32)&&m!==(m=Math.ceil(o[5]/De)+"")&&ge(v,m),(!B||d&33&&E!==(E=o[0]===Math.ceil(o[5]/De)))&&(N.disabled=E)},i(o){if(!B){for(let d=0;d<A.length;d+=1)Ie(f[d]);B=!0}},o(o){f=f.filter(Boolean);for(let d=0;d<f.length;d+=1)Se(f[d]);B=!1},d(o){o&&(p(l),p(r),p(s)),Ge(f,o),U=!1,Be(z)}}}function tt(a){let l,r;return{c(){l=c("p"),r=se(a[3])},l(s){l=i(s,"P",{});var n=g(l);r=le(n,a[3]),n.forEach(p)},m(s,n){be(s,l,n),e(l,r)},p(s,n){n&8&&ge(r,s[3])},i:ye,o:ye,d(s){s&&p(l)}}}function st(a){let l,r="Loading...";return{c(){l=c("p"),l.textContent=r},l(s){l=i(s,"P",{"data-svelte-h":!0}),ce(l)!=="svelte-qdsr2u"&&(l.textContent=r)},m(s,n){be(s,l,n)},p:ye,i:ye,o:ye,d(s){s&&p(l)}}}function Fe(a){let l,r;return l=new $e({props:{recipie:a[28]}}),{c(){Oe(l.$$.fragment)},l(s){je(l.$$.fragment,s)},m(s,n){ze(l,s,n),r=!0},p(s,n){const C={};n&16&&(C.recipie=s[28]),l.$set(C)},i(s){r||(Ie(l.$$.fragment,s),r=!0)},o(s){Se(l.$$.fragment,s),r=!1},d(s){He(l,s)}}}function lt(a){let l,r,s,n,C,k,M="Search",P,_,I,S,m,v,w="Vegetarian",N,R,E,B,U,z="Pescetarian",A,f,G,o,d,h="Vegan",W,T,V,$,u,D="Gluten Free",L,Q,ee,X,O,xe="Dairy Free",fe,H,K,j,Y,oe,he;const pe=[st,tt,et],te=[];function ae(F,J){return F[2]?0:F[3]?1:2}return K=ae(a),j=te[K]=pe[K](a),{c(){l=c("div"),r=c("form"),s=c("div"),n=c("input"),C=b(),k=c("button"),k.textContent=M,P=b(),_=c("div"),I=c("div"),S=c("input"),m=b(),v=c("label"),v.textContent=w,N=b(),R=c("div"),E=c("input"),B=b(),U=c("label"),U.textContent=z,A=b(),f=c("div"),G=c("input"),o=b(),d=c("label"),d.textContent=h,W=b(),T=c("div"),V=c("input"),$=b(),u=c("label"),u.textContent=D,L=b(),Q=c("div"),ee=c("input"),X=b(),O=c("label"),O.textContent=xe,fe=b(),H=c("div"),j.c(),this.h()},l(F){l=i(F,"DIV",{class:!0});var J=g(l);r=i(J,"FORM",{class:!0,id:!0});var re=g(r);s=i(re,"DIV",{class:!0});var q=g(s);n=i(q,"INPUT",{class:!0,type:!0,id:!0,placeholder:!0}),C=y(q),k=i(q,"BUTTON",{class:!0,type:!0,"data-svelte-h":!0}),ce(k)!=="svelte-1fsppor"&&(k.textContent=M),q.forEach(p),P=y(re),_=i(re,"DIV",{id:!0,class:!0});var x=g(_);I=i(x,"DIV",{class:!0});var ue=g(I);S=i(ue,"INPUT",{class:!0,type:!0,id:!0}),m=y(ue),v=i(ue,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ce(v)!=="svelte-1x0trca"&&(v.textContent=w),ue.forEach(p),N=y(x),R=i(x,"DIV",{class:!0});var de=g(R);E=i(de,"INPUT",{class:!0,type:!0,id:!0}),B=y(de),U=i(de,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ce(U)!=="svelte-1aslwyo"&&(U.textContent=z),de.forEach(p),A=y(x),f=i(x,"DIV",{class:!0});var ve=g(f);G=i(ve,"INPUT",{class:!0,type:!0,id:!0}),o=y(ve),d=i(ve,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ce(d)!=="svelte-1lmcfn8"&&(d.textContent=h),ve.forEach(p),W=y(x),T=i(x,"DIV",{class:!0});var Z=g(T);V=i(Z,"INPUT",{class:!0,type:!0,id:!0}),$=y(Z),u=i(Z,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ce(u)!=="svelte-1uqssi8"&&(u.textContent=D),Z.forEach(p),L=y(x),Q=i(x,"DIV",{class:!0});var ne=g(Q);ee=i(ne,"INPUT",{class:!0,type:!0,id:!0}),X=y(ne),O=i(ne,"LABEL",{class:!0,for:!0,"data-svelte-h":!0}),ce(O)!=="svelte-w0ymo"&&(O.textContent=xe),ne.forEach(p),x.forEach(p),re.forEach(p),fe=y(J),H=i(J,"DIV",{class:!0});var ke=g(H);j.l(ke),ke.forEach(p),J.forEach(p),this.h()},h(){t(n,"class","form-control me-2"),t(n,"type","text"),t(n,"id","searchQuery"),t(n,"placeholder","Search recipes..."),t(k,"class","btn btn-primary"),t(k,"type","submit"),t(s,"class","d-flex mb-3 w-100"),t(S,"class","form-check-input"),t(S,"type","checkbox"),t(S,"id","vegetarianCheckbox"),S.value="vegetarian",t(v,"class","form-check-label"),t(v,"for","vegetarianCheckbox"),t(I,"class","form-check form-check-inline"),t(E,"class","form-check-input"),t(E,"type","checkbox"),t(E,"id","pescetarianCheckbox"),E.value="pescetarian",t(U,"class","form-check-label"),t(U,"for","pescetarianCheckbox"),t(R,"class","form-check form-check-inline"),t(G,"class","form-check-input"),t(G,"type","checkbox"),t(G,"id","veganCheckbox"),G.value="vegan",t(d,"class","form-check-label"),t(d,"for","veganCheckbox"),t(f,"class","form-check form-check-inline"),t(V,"class","form-check-input"),t(V,"type","checkbox"),t(V,"id","glutenFreeCheckbox"),V.value="gluten free",t(u,"class","form-check-label"),t(u,"for","glutenFreeCheckbox"),t(T,"class","form-check form-check-inline"),t(ee,"class","form-check-input"),t(ee,"type","checkbox"),t(ee,"id","dairyFreeCheckbox"),ee.value="dairy free",t(O,"class","form-check-label"),t(O,"for","dairyFreeCheckbox"),t(Q,"class","form-check form-check-inline"),t(_,"id","dietFilter"),t(_,"class","d-flex flex-wrap justify-content-start"),t(r,"class","d-flex flex-column align-items-end"),t(r,"id","searchForm"),t(H,"class","container"),t(l,"class","container-fluid container-background")},m(F,J){be(F,l,J),e(l,r),e(r,s),e(s,n),Ne(n,a[1]),e(s,C),e(s,k),e(r,P),e(r,_),e(_,I),e(I,S),e(I,m),e(I,v),e(_,N),e(_,R),e(R,E),e(R,B),e(R,U),e(_,A),e(_,f),e(f,G),e(f,o),e(f,d),e(_,W),e(_,T),e(T,V),e(T,$),e(T,u),e(_,L),e(_,Q),e(Q,ee),e(Q,X),e(Q,O),e(l,fe),e(l,H),te[K].m(H,null),Y=!0,oe||(he=[ie(n,"input",a[18]),ie(S,"change",a[19]),ie(E,"change",a[20]),ie(G,"change",a[21]),ie(V,"change",a[22]),ie(ee,"change",a[23]),ie(r,"submit",a[13])],oe=!0)},p(F,[J]){J&2&&n.value!==F[1]&&Ne(n,F[1]);let re=K;K=ae(F),K===re?te[K].p(F,J):(Le(),Se(te[re],1,1,()=>{te[re]=null}),qe(),j=te[K],j?j.p(F,J):(j=te[K]=pe[K](F),j.c()),Ie(j,1),j.m(H,null))},i(F){Y||(Ie(j),Y=!0)},o(F){Se(j),Y=!1},d(F){F&&p(l),te[K].d(),oe=!1,Be(he)}}}const De=9;function at(a,l,r){let s,n,C,k,M,P,_,I=me([]);_e(a,I,u=>r(4,P=u));let S=me("");_e(a,S,u=>r(1,C=u));let m=me(!1);_e(a,m,u=>r(2,k=u));let v=me("");_e(a,v,u=>r(3,M=u));let w=me(1);_e(a,w,u=>r(0,n=u));let N=me(0);_e(a,N,u=>r(5,_=u));let R=me([]);_e(a,R,u=>r(17,s=u));let E;const B=U(z,1e3);function U(u,D){return function(...L){clearTimeout(E),E=setTimeout(()=>u.apply(this,L),D)}}Qe(async()=>{if(typeof window<"u"&&typeof localStorage<"u"){console.log("Running in the browser");const u=localStorage.getItem("searchQuery");console.log("Stored query:",u),u&&S.set(u)}});async function z(u,D,L){m.set(!0),v.set("");try{const Q=await Xe(u,D,L);I.set(Q.results),N.set(Q.totalResults)}catch{v.set("Failed to fetch search results."),I.set([])}finally{m.set(!1)}}function A(u){u.preventDefault();const D=u.target.querySelector("#searchQuery").value;if(D){We.set(D),localStorage.setItem("searchQuery",D);const L=s.join(",");z(D,0,L),w.set(1)}}function f(){w.update(u=>u+1)}function G(){w.update(u=>u>1?u-1:u)}function o(u){R.update(D=>D.includes(u)?D.filter(L=>L!==u):[...D,u])}function d(){C=this.value,S.set(C)}const h=()=>o("vegetarian"),W=()=>o("pescetarian"),T=()=>o("vegan"),V=()=>o("gluten free"),$=()=>o("dairy free");return a.$$.update=()=>{a.$$.dirty&131075&&C&&B(C,(n-1)*De,s)},[n,C,k,M,P,_,I,S,m,v,w,N,R,A,f,G,o,s,d,h,W,T,V,$]}class ot extends Ae{constructor(l){super(),Me(this,l,at,lt,Ue,{})}}export{ot as default};
