import{C as r}from"./index.BXI5Iv19.js";const i=typeof window<"u"&&typeof localStorage<"u",t=i?localStorage.getItem("currentRecipie"):null,o=r(t?JSON.parse(t):null);i&&o.subscribe(e=>{e?localStorage.setItem("currentRecipie",JSON.stringify(e)):localStorage.removeItem("currentRecipie")});function s(e){o.set(e)}const n=r("");export{n as a,s};
