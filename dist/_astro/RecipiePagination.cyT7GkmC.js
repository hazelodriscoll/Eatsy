import{S as Te,i as Re,s as Le,k as se,e as m,t as q,l as D,c as v,a as w,m as G,d as b,p as j,j as ne,q as p,M as Ne,b as x,u,v as le,x as me,B as Y,C as Ee,D as X,y as ve,L as De,z as ke,I as Se,n as de,E as je,F as Ve,G as Be,H as Ue}from"./favourite.Z1-Hp_GV.js";import Me from"./RecipieCard.CI3qP-kk.js";import{g as Ke}from"./recipieService.DUCIO3jB.js";import"./store.B61S4mW1.js";const fe="selectedOption",oe=()=>{const l=sessionStorage.getItem(fe);return l?l.split(","):[]},Ae=l=>{const e=oe();e.includes(l)||(e.push(l),sessionStorage.setItem(fe,e.join(",")))},Fe=l=>{let e=oe();e=e.filter(t=>t!==l),sessionStorage.setItem(fe,e.join(","))};function ye(l,e,t){const s=l.slice();return s[18]=e[t],s}function Pe(l,e,t){const s=l.slice();return s[21]=e[t],s}function Oe(l){let e,t,s,i,r,c,h=l[9](l[21])+"",a,k,E,O;return{c(){e=m("li"),t=m("div"),s=m("input"),r=D(),c=m("label"),a=q(h),k=D(),this.h()},l(_){e=v(_,"LI",{class:!0});var T=w(e);t=v(T,"DIV",{class:!0});var N=w(t);s=v(N,"INPUT",{class:!0,type:!0,id:!0}),r=j(N),c=v(N,"LABEL",{class:!0,for:!0});var S=w(c);a=G(S,h),S.forEach(b),N.forEach(b),k=j(T),T.forEach(b),this.h()},h(){p(s,"class","form-check-input"),p(s,"type","checkbox"),s.value=l[21],p(s,"id",l[21]),s.checked=i=l[2].includes(l[21]),p(c,"class","form-check-label"),p(c,"for",l[21]),p(t,"class","form-check"),p(e,"class","mb-2")},m(_,T){x(_,e,T),u(e,t),u(t,s),u(t,r),u(t,c),u(c,a),u(e,k),E||(O=le(s,"change",l[10]),E=!0)},p(_,T){T&4&&i!==(i=_[2].includes(_[21]))&&(s.checked=i)},d(_){_&&b(e),E=!1,O()}}}function Ie(l){let e,t='<div class="spinner-border text-info" role="status"><span class="visually-hidden">Loading...</span></div>';return{c(){e=m("div"),e.innerHTML=t,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),ne(e)!=="svelte-1votrpu"&&(e.innerHTML=t),this.h()},h(){p(e,"class","text-center my-4")},m(s,i){x(s,e,i)},d(s){s&&b(e)}}}function He(l){let e,t="Error: Invalid recipe data";return{c(){e=m("div"),e.textContent=t},l(s){e=v(s,"DIV",{"data-svelte-h":!0}),ne(e)!=="svelte-1i39b7z"&&(e.textContent=t)},m(s,i){x(s,e,i)},p:de,i:de,o:de,d(s){s&&b(e)}}}function ze(l){let e,t,s,i;return t=new Me({props:{recipie:l[18]}}),{c(){e=m("div"),je(t.$$.fragment),s=D(),this.h()},l(r){e=v(r,"DIV",{class:!0});var c=w(e);Ve(t.$$.fragment,c),s=j(c),c.forEach(b),this.h()},h(){p(e,"class","col-md-4")},m(r,c){x(r,e,c),Be(t,e,null),u(e,s),i=!0},p(r,c){const h={};c&16&&(h.recipie=r[18]),t.$set(h)},i(r){i||(Y(t.$$.fragment,r),i=!0)},o(r){X(t.$$.fragment,r),i=!1},d(r){r&&b(e),Ue(t)}}}function we(l){let e,t,s,i;const r=[ze,He],c=[];function h(a,k){return a[18]&&a[18].title?0:1}return e=h(l),t=c[e]=r[e](l),{c(){t.c(),s=ke()},l(a){t.l(a),s=ke()},m(a,k){c[e].m(a,k),x(a,s,k),i=!0},p(a,k){let E=e;e=h(a),e===E?c[e].p(a,k):(Se(),X(c[E],1,1,()=>{c[E]=null}),Ee(),t=c[e],t?t.p(a,k):(t=c[e]=r[e](a),t.c()),Y(t,1),t.m(s.parentNode,s))},i(a){i||(Y(t),i=!0)},o(a){X(t),i=!1},d(a){a&&b(s),c[e].d(a)}}}function Je(l){let e,t,s,i=l[2].map(l[9]).join(", ")+"",r,c,h,a,k="Refresh Recipies",E,O,_,T="Add Options",N,S,Q,F,V,W,R,d,y,C,H,L,re,Z,ie,B,ae,$,U,ce,pe,z=se(l[11]),P=[];for(let n=0;n<z.length;n+=1)P[n]=Oe(Pe(l,z,n));let I=l[5]&&Ie(),K=se(l[4]),g=[];for(let n=0;n<K.length;n+=1)g[n]=we(ye(l,K,n));const Ce=n=>X(g[n],1,1,()=>{g[n]=null});return{c(){e=m("div"),t=m("div"),s=m("h4"),r=q(i),c=D(),h=m("div"),a=m("button"),a.textContent=k,E=D(),O=m("div"),_=m("button"),_.textContent=T,N=D(),S=m("ul");for(let n=0;n<P.length;n+=1)P[n].c();Q=D(),I&&I.c(),F=D(),V=m("div");for(let n=0;n<g.length;n+=1)g[n].c();W=D(),R=m("div"),d=m("button"),y=q("Previous"),H=D(),L=m("span"),re=q("Page "),Z=q(l[0]),ie=D(),B=m("button"),ae=q("Next"),this.h()},l(n){e=v(n,"DIV",{class:!0});var f=w(e);t=v(f,"DIV",{class:!0});var o=w(t);s=v(o,"H4",{class:!0,style:!0});var M=w(s);r=G(M,i),M.forEach(b),c=j(o),h=v(o,"DIV",{class:!0});var ee=w(h);a=v(ee,"BUTTON",{class:!0,"data-svelte-h":!0}),ne(a)!=="svelte-1rjp7wp"&&(a.textContent=k),E=j(ee),O=v(ee,"DIV",{class:!0});var te=w(O);_=v(te,"BUTTON",{class:!0,type:!0,id:!0,"data-bs-toggle":!0,"aria-expanded":!0,"data-svelte-h":!0}),ne(_)!=="svelte-1x6p236"&&(_.textContent=T),N=j(te),S=v(te,"UL",{class:!0,"aria-labelledby":!0});var he=w(S);for(let A=0;A<P.length;A+=1)P[A].l(he);he.forEach(b),te.forEach(b),ee.forEach(b),o.forEach(b),Q=j(f),I&&I.l(f),F=j(f),V=v(f,"DIV",{class:!0});var _e=w(V);for(let A=0;A<g.length;A+=1)g[A].l(_e);_e.forEach(b),W=j(f),R=v(f,"DIV",{class:!0});var J=w(R);d=v(J,"BUTTON",{class:!0});var ge=w(d);y=G(ge,"Previous"),ge.forEach(b),H=j(J),L=v(J,"SPAN",{class:!0});var ue=w(L);re=G(ue,"Page "),Z=G(ue,l[0]),ue.forEach(b),ie=j(J),B=v(J,"BUTTON",{class:!0});var be=w(B);ae=G(be,"Next"),be.forEach(b),J.forEach(b),f.forEach(b),this.h()},h(){p(s,"class","bg-secondary text-white px-2 py-1 rounded"),Ne(s,"display","inline-block"),p(a,"class","btn btn-secondary me-2"),p(_,"class","btn btn-secondary dropdown-toggle"),p(_,"type","button"),p(_,"id","dropdownMenuButton"),p(_,"data-bs-toggle","dropdown"),p(_,"aria-expanded","false"),p(S,"class","dropdown-menu p-3"),p(S,"aria-labelledby","dropdownMenuButton"),p(O,"class","dropdown"),p(h,"class","button-container d-flex"),p(t,"class","title-button-container"),p(V,"class","card-group row row-cols-1 row-cols-md-3 g-4"),p(d,"class","btn btn-primary"),d.disabled=C=l[0]===1,p(L,"class","page-number"),p(B,"class","btn btn-primary"),B.disabled=$=l[0]===Math.ceil(l[3].recipes.length/l[1]),p(R,"class","pagination-controls d-flex justify-content-between align-items-center mt-4"),p(e,"class","container-fluid container-background")},m(n,f){x(n,e,f),u(e,t),u(t,s),u(s,r),u(t,c),u(t,h),u(h,a),u(h,E),u(h,O),u(O,_),u(O,N),u(O,S);for(let o=0;o<P.length;o+=1)P[o]&&P[o].m(S,null);u(e,Q),I&&I.m(e,null),u(e,F),u(e,V);for(let o=0;o<g.length;o+=1)g[o]&&g[o].m(V,null);u(e,W),u(e,R),u(R,d),u(d,y),u(R,H),u(R,L),u(L,re),u(L,Z),u(R,ie),u(R,B),u(B,ae),U=!0,ce||(pe=[le(a,"click",l[12]),le(d,"click",l[7]),le(B,"click",l[8])],ce=!0)},p(n,[f]){if((!U||f&4)&&i!==(i=n[2].map(n[9]).join(", ")+"")&&me(r,i),f&3588){z=se(n[11]);let o;for(o=0;o<z.length;o+=1){const M=Pe(n,z,o);P[o]?P[o].p(M,f):(P[o]=Oe(M),P[o].c(),P[o].m(S,null))}for(;o<P.length;o+=1)P[o].d(1);P.length=z.length}if(n[5]?I||(I=Ie(),I.c(),I.m(e,F)):I&&(I.d(1),I=null),f&16){K=se(n[4]);let o;for(o=0;o<K.length;o+=1){const M=ye(n,K,o);g[o]?(g[o].p(M,f),Y(g[o],1)):(g[o]=we(M),g[o].c(),Y(g[o],1),g[o].m(V,null))}for(Se(),o=K.length;o<g.length;o+=1)Ce(o);Ee()}(!U||f&1&&C!==(C=n[0]===1))&&(d.disabled=C),(!U||f&1)&&me(Z,n[0]),(!U||f&11&&$!==($=n[0]===Math.ceil(n[3].recipes.length/n[1])))&&(B.disabled=$)},i(n){if(!U){for(let f=0;f<K.length;f+=1)Y(g[f]);U=!0}},o(n){g=g.filter(Boolean);for(let f=0;f<g.length;f+=1)X(g[f]);U=!1},d(n){n&&b(e),ve(P,n),I&&I.d(),ve(g,n),ce=!1,De(pe)}}}function qe(l,e,t){let{recipiesPerPage:s}=e,{currentPage:i}=e,r={recipes:[]},c=[],h=oe(),a=!1,k=!1;const E=d=>{if(d){const y=new URL(window.location);y.searchParams.set("selectedOptions",d.join(",")),window.history.pushState({},"",y)}},O=d=>{if(!r||!r.recipes)return[];const y=(d-1)*s,C=y+s;return r.recipes.slice(y,C)},_=async(d=!1)=>{if(!k){k=!0,t(5,a=!0);try{const C=`allRecipies_${h.slice().sort().join("_")}`;console.log("Storage Key:",C);const H=sessionStorage.getItem(C);if(H&&!d)t(3,r=JSON.parse(H)),console.log("Loaded recipes from session storage: ",r);else{const L={apiKey:"fb571eb0a36b417daee401017d390f99","include-tags":h.length>0?h:null,number:"27",includeInstructions:!0};(L["include-tags"]===null||L["include-tags"].length===0)&&delete L["include-tags"],t(3,r=await Ke(L)),console.log("Fetched new recipes: ",r),sessionStorage.setItem(C,JSON.stringify(r))}t(4,c=O(i))}catch(y){console.error("Failed to fetch recipes:",y),t(3,r={recipes:[]})}finally{t(5,a=!1),k=!1}}},T=()=>{window.scrollTo({top:0,behavior:"smooth"})},N=d=>{t(4,c=O(d)),t(0,i=d),T()},S=()=>{i>1&&N(i-1)},Q=()=>{i<Math.ceil(r.recipes.length/s)&&N(i+1)},F=d=>d.charAt(0).toUpperCase()+d.slice(1),V=d=>{const y=d.target.value;d.target.checked?Ae(y):Fe(y),t(2,h=oe())},W=["vegetarian","vegan","pescatarian","gluten free","dairy free","breakfast","lunch","dinner","dessert","drinks"],R=()=>_(!0);return l.$$set=d=>{"recipiesPerPage"in d&&t(1,s=d.recipiesPerPage),"currentPage"in d&&t(0,i=d.currentPage)},l.$$.update=()=>{if(l.$$.dirty&5){const y=`allRecipies_${h.slice().sort().join("_")}`,C=sessionStorage.getItem(y);h.length>0&&C?t(3,r=JSON.parse(C)):_(!0),t(4,c=O(i))}l.$$.dirty&4&&E(h)},[i,s,h,r,c,a,_,S,Q,F,V,W,R]}class We extends Te{constructor(e){super(),Re(this,e,qe,Je,Le,{recipiesPerPage:1,currentPage:0})}}export{We as default};
