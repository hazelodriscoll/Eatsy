import{S as Le,i as Ne,s as qe,e as m,c as g,a as M,d as c,b as p,n as fe,f as Ae,o as Be,w as Ge,g as ze,r as Pe,h as Oe,j as W,k as A,t as T,l as R,m as H,p as w,q as h,u as f,v as Te,x as z,y as te,z as Q,A as X}from"./favourite.MyfShI5x.js";function be(r,e,n){const t=r.slice();return t[6]=e[n],t}function ke(r,e,n){const t=r.slice();return t[9]=e[n],t}function Ie(r,e,n){const t=r.slice();return t[12]=e[n],t}function Ee(r,e,n){const t=r.slice();return t[12]=e[n],t}function je(r){let e,n="Recipe not found.";return{c(){e=m("p"),e.textContent=n},l(t){e=g(t,"P",{"data-svelte-h":!0}),W(e)!=="svelte-1vhb4mb"&&(e.textContent=n)},m(t,l){p(t,e,l)},p:fe,d(t){t&&c(e)}}}function Je(r){let e,n,t,l,s=r[3].title+"",i,u,C,_,o,d,b,le,q,F,P,ue="Ingredients",ie,Y,ne,B,se,O,L,j,_e="Instructions",re,ae,de;function he(a,I){return a[0]?Ke:Ue}let Z=he(r),N=Z(r),D=r[1]&&ye(),V=r[2]&&Ce(),E=r[3].nutrition&&De(r),y=r[3].extendedIngredients&&Me(r);function me(a,I){return a[3].image?We:Qe}let x=me(r),S=x(r),J=A(r[3].analyzedInstructions),k=[];for(let a=0;a<J.length;a+=1)k[a]=Fe(be(r,J,a));return{c(){e=m("div"),n=m("div"),t=m("div"),l=m("h3"),i=T(s),u=T(" Recipie"),C=R(),_=m("div"),o=m("button"),N.c(),d=R(),D&&D.c(),b=R(),V&&V.c(),le=R(),q=m("div"),F=m("div"),P=m("h3"),P.textContent=ue,ie=R(),E&&E.c(),Y=R(),y&&y.c(),ne=R(),B=m("div"),S.c(),se=R(),O=m("div"),L=m("div"),j=m("h3"),j.textContent=_e,re=R();for(let a=0;a<k.length;a+=1)k[a].c();this.h()},l(a){e=g(a,"DIV",{class:!0});var I=M(e);n=g(I,"DIV",{class:!0});var v=M(n);t=g(v,"DIV",{class:!0});var G=M(t);l=g(G,"H3",{class:!0});var ce=M(l);i=H(ce,s),u=H(ce," Recipie"),ce.forEach(c),C=w(G),_=g(G,"DIV",{});var U=M(_);o=g(U,"BUTTON",{class:!0});var ge=M(o);N.l(ge),ge.forEach(c),d=w(U),D&&D.l(U),b=w(U),V&&V.l(U),U.forEach(c),G.forEach(c),v.forEach(c),le=w(I),q=g(I,"DIV",{class:!0});var $=M(q);F=g($,"DIV",{class:!0});var K=M(F);P=g(K,"H3",{"data-svelte-h":!0}),W(P)!=="svelte-k9mecy"&&(P.textContent=ue),ie=w(K),E&&E.l(K),Y=w(K),y&&y.l(K),K.forEach(c),ne=w($),B=g($,"DIV",{class:!0});var ve=M(B);S.l(ve),ve.forEach(c),$.forEach(c),se=w(I),O=g(I,"DIV",{class:!0});var pe=M(O);L=g(pe,"DIV",{class:!0});var ee=M(L);j=g(ee,"H3",{"data-svelte-h":!0}),W(j)!=="svelte-2qbm11"&&(j.textContent=_e),re=w(ee);for(let oe=0;oe<k.length;oe+=1)k[oe].l(ee);ee.forEach(c),pe.forEach(c),I.forEach(c),this.h()},h(){h(l,"class","display-4"),h(o,"class","image-button"),h(t,"class","col-12 title-button-container"),h(n,"class","row"),h(F,"class","ingredientsList col-md-4"),h(B,"class","ingredientsImage col-md-8"),h(q,"class","row"),h(L,"class","col-12"),h(O,"class","row"),h(e,"class","container")},m(a,I){p(a,e,I),f(e,n),f(n,t),f(t,l),f(l,i),f(l,u),f(t,C),f(t,_),f(_,o),N.m(o,null),f(_,d),D&&D.m(_,null),f(_,b),V&&V.m(_,null),f(e,le),f(e,q),f(q,F),f(F,P),f(F,ie),E&&E.m(F,null),f(F,Y),y&&y.m(F,null),f(q,ne),f(q,B),S.m(B,null),f(e,se),f(e,O),f(O,L),f(L,j),f(L,re);for(let v=0;v<k.length;v+=1)k[v]&&k[v].m(L,null);ae||(de=Te(o,"click",r[5]),ae=!0)},p(a,I){if(I&8&&s!==(s=a[3].title+"")&&z(i,s),Z!==(Z=he(a))&&(N.d(1),N=Z(a),N&&(N.c(),N.m(o,null))),a[1]?D||(D=ye(),D.c(),D.m(_,b)):D&&(D.d(1),D=null),a[2]?V||(V=Ce(),V.c(),V.m(_,null)):V&&(V.d(1),V=null),a[3].nutrition?E?E.p(a,I):(E=De(a),E.c(),E.m(F,Y)):E&&(E.d(1),E=null),a[3].extendedIngredients?y?y.p(a,I):(y=Me(a),y.c(),y.m(F,null)):y&&(y.d(1),y=null),x===(x=me(a))&&S?S.p(a,I):(S.d(1),S=x(a),S&&(S.c(),S.m(B,null))),I&8){J=A(a[3].analyzedInstructions);let v;for(v=0;v<J.length;v+=1){const G=be(a,J,v);k[v]?k[v].p(G,I):(k[v]=Fe(G),k[v].c(),k[v].m(L,null))}for(;v<k.length;v+=1)k[v].d(1);k.length=J.length}},d(a){a&&c(e),N.d(),D&&D.d(),V&&V.d(),E&&E.d(),y&&y.d(),S.d(),te(k,a),ae=!1,de()}}}function Ue(r){let e,n;return{c(){e=m("img"),this.h()},l(t){e=g(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){X(e.src,n="/Eatsy/images/favouriteButton.png")||h(e,"src",n),h(e,"alt","favourite"),h(e,"class","detail-icon")},m(t,l){p(t,e,l)},d(t){t&&c(e)}}}function Ke(r){let e,n;return{c(){e=m("img"),this.h()},l(t){e=g(t,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){X(e.src,n="/Eatsy/images/favouritedButton.png")||h(e,"src",n),h(e,"alt","favourited"),h(e,"class","detail-icon")},m(t,l){p(t,e,l)},d(t){t&&c(e)}}}function ye(r){let e,n='Added to favourites <img src="/Eatsy/images/happyIcon.png" alt="smiley face" class="detail-icon"/>';return{c(){e=m("div"),e.innerHTML=n,this.h()},l(t){e=g(t,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-19iq3y2"&&(e.innerHTML=n),this.h()},h(){h(e,"class","popup")},m(t,l){p(t,e,l)},d(t){t&&c(e)}}}function Ce(r){let e,n='Removed from favourites <img src="/Eatsy/images/sadIcon.png" alt="sad face" class="detail-icon"/>';return{c(){e=m("div"),e.innerHTML=n,this.h()},l(t){e=g(t,"DIV",{class:!0,"data-svelte-h":!0}),W(e)!=="svelte-1y1941q"&&(e.innerHTML=n),this.h()},h(){h(e,"class","popup")},m(t,l){p(t,e,l)},d(t){t&&c(e)}}}function De(r){let e,n=A(r[3].nutrition.ingredients),t=[];for(let l=0;l<n.length;l+=1)t[l]=Ve(Ee(r,n,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=Q()},l(l){for(let s=0;s<t.length;s+=1)t[s].l(l);e=Q()},m(l,s){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(l,s);p(l,e,s)},p(l,s){if(s&8){n=A(l[3].nutrition.ingredients);let i;for(i=0;i<n.length;i+=1){const u=Ee(l,n,i);t[i]?t[i].p(u,s):(t[i]=Ve(u),t[i].c(),t[i].m(e.parentNode,e))}for(;i<t.length;i+=1)t[i].d(1);t.length=n.length}},d(l){l&&c(e),te(t,l)}}}function Ve(r){let e,n=Se(r[12].amount*r[3].servings)+"",t,l,s=r[12].unit+"",i,u,C=r[12].name+"",_,o;return{c(){e=m("li"),t=T(n),l=R(),i=T(s),u=T(" of "),_=T(C),o=R()},l(d){e=g(d,"LI",{});var b=M(e);t=H(b,n),l=w(b),i=H(b,s),u=H(b," of "),_=H(b,C),o=w(b),b.forEach(c)},m(d,b){p(d,e,b),f(e,t),f(e,l),f(e,i),f(e,u),f(e,_),f(e,o)},p(d,b){b&8&&n!==(n=Se(d[12].amount*d[3].servings)+"")&&z(t,n),b&8&&s!==(s=d[12].unit+"")&&z(i,s),b&8&&C!==(C=d[12].name+"")&&z(_,C)},d(d){d&&c(e)}}}function Me(r){let e,n=A(r[3].extendedIngredients),t=[];for(let l=0;l<n.length;l+=1)t[l]=Re(Ie(r,n,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=Q()},l(l){for(let s=0;s<t.length;s+=1)t[s].l(l);e=Q()},m(l,s){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(l,s);p(l,e,s)},p(l,s){if(s&8){n=A(l[3].extendedIngredients);let i;for(i=0;i<n.length;i+=1){const u=Ie(l,n,i);t[i]?t[i].p(u,s):(t[i]=Re(u),t[i].c(),t[i].m(e.parentNode,e))}for(;i<t.length;i+=1)t[i].d(1);t.length=n.length}},d(l){l&&c(e),te(t,l)}}}function Re(r){let e,n=r[12].original+"",t;return{c(){e=m("li"),t=T(n)},l(l){e=g(l,"LI",{});var s=M(e);t=H(s,n),s.forEach(c)},m(l,s){p(l,e,s),f(e,t)},p(l,s){s&8&&n!==(n=l[12].original+"")&&z(t,n)},d(l){l&&c(e)}}}function Qe(r){let e,n,t;return{c(){e=m("img"),this.h()},l(l){e=g(l,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){X(e.src,n=He)||h(e,"src",n),h(e,"class","ingredientsImage custom-rounded"),h(e,"alt",t=r[3].title)},m(l,s){p(l,e,s)},p(l,s){s&8&&t!==(t=l[3].title)&&h(e,"alt",t)},d(l){l&&c(e)}}}function We(r){let e,n,t,l,s;return{c(){e=m("img"),this.h()},l(i){e=g(i,"IMG",{src:!0,class:!0,alt:!0}),this.h()},h(){X(e.src,n=r[3].image)||h(e,"src",n),h(e,"class","ingredientsImage custom-rounded"),h(e,"alt",t=r[3].title)},m(i,u){p(i,e,u),l||(s=Te(e,"error",Ye),l=!0)},p(i,u){u&8&&!X(e.src,n=i[3].image)&&h(e,"src",n),u&8&&t!==(t=i[3].title)&&h(e,"alt",t)},d(i){i&&c(e),l=!1,s()}}}function we(r){let e,n=r[9].number+"",t,l,s,i=r[9].step.replace(/\.(?=\S)/g,". ")+"",u,C,_;return{c(){e=m("b"),t=T(n),l=T(":"),s=R(),u=T(i),C=R(),_=m("br")},l(o){e=g(o,"B",{});var d=M(e);t=H(d,n),l=H(d,":"),d.forEach(c),s=w(o),u=H(o,i),C=w(o),_=g(o,"BR",{})},m(o,d){p(o,e,d),f(e,t),f(e,l),p(o,s,d),p(o,u,d),p(o,C,d),p(o,_,d)},p(o,d){d&8&&n!==(n=o[9].number+"")&&z(t,n),d&8&&i!==(i=o[9].step.replace(/\.(?=\S)/g,". ")+"")&&z(u,i)},d(o){o&&(c(e),c(s),c(u),c(C),c(_))}}}function Fe(r){let e,n=A(r[6].steps),t=[];for(let l=0;l<n.length;l+=1)t[l]=we(ke(r,n,l));return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=Q()},l(l){for(let s=0;s<t.length;s+=1)t[s].l(l);e=Q()},m(l,s){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(l,s);p(l,e,s)},p(l,s){if(s&8){n=A(l[6].steps);let i;for(i=0;i<n.length;i+=1){const u=ke(l,n,i);t[i]?t[i].p(u,s):(t[i]=we(u),t[i].c(),t[i].m(e.parentNode,e))}for(;i<t.length;i+=1)t[i].d(1);t.length=n.length}},d(l){l&&c(e),te(t,l)}}}function Xe(r){let e;function n(s,i){return s[3]?Je:je}let t=n(r),l=t(r);return{c(){e=m("main"),l.c()},l(s){e=g(s,"MAIN",{});var i=M(e);l.l(i),i.forEach(c)},m(s,i){p(s,e,i),l.m(e,null)},p(s,[i]){t===(t=n(s))&&l?l.p(s,i):(l.d(1),l=t(s),l&&(l.c(),l.m(e,null)))},i:fe,o:fe,d(s){s&&c(e),l.d()}}}const He="/Eatsy/images/fallbackImage.png";function Se(r){const e=parseFloat(r);return Number.isInteger(e)?e.toString():e.toFixed(1)}function Ye(r){r.target.src=He}function Ze(r,e,n){let t;const l=Ge(null);Ae(r,l,_=>n(3,t=_));let s=!1,i=!1,u=!1;return Be(()=>{if(typeof window<"u"&&typeof localStorage<"u"){const _=localStorage.getItem("currentRecipie");if(_){const o=JSON.parse(_);l.set(o),n(0,s=ze(o.id))}}}),[s,i,u,t,l,()=>{l.update(_=>(s?(Pe(_.id),n(2,u=!0),setTimeout(()=>n(2,u=!1),2e3)):(Oe(_),n(1,i=!0),setTimeout(()=>n(1,i=!1),2e3)),n(0,s=!s),_))}]}class $e extends Le{constructor(e){super(),Ne(this,e,Ze,Xe,qe,{})}}export{$e as default};
