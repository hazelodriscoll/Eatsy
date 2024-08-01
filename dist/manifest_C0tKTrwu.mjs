import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import './chunks/astro/server_C5xvivdp.mjs';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    const path = toPath(sanitizedParams);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"","routes":[{"file":"file:///C:/Users/Hazel/Documents/Project/Eatsy/dist/ingredients/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/ingredients","isIndex":false,"type":"page","pattern":"^\\/ingredients\\/?$","segments":[[{"content":"ingredients","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/ingredients.astro","pathname":"/ingredients","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Hazel/Documents/Project/Eatsy/dist/instructions/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/instructions","isIndex":false,"type":"page","pattern":"^\\/instructions\\/?$","segments":[[{"content":"instructions","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/instructions.astro","pathname":"/instructions","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Hazel/Documents/Project/Eatsy/dist/recipies/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/recipies","isIndex":false,"type":"page","pattern":"^\\/recipies\\/?$","segments":[[{"content":"recipies","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/recipies.astro","pathname":"/recipies","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Hazel/Documents/Project/Eatsy/dist/searchResults/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/searchresults","isIndex":false,"type":"page","pattern":"^\\/searchResults\\/?$","segments":[[{"content":"searchResults","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/searchResults.astro","pathname":"/searchResults","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/Hazel/Documents/Project/Eatsy/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://hazelodriscoll.github.io/Eatsy","base":"/Eatsy","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Hazel/Documents/Project/Eatsy/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Hazel/Documents/Project/Eatsy/src/pages/ingredients.astro",{"propagation":"none","containsHead":true}],["C:/Users/Hazel/Documents/Project/Eatsy/src/pages/instructions.astro",{"propagation":"none","containsHead":true}],["C:/Users/Hazel/Documents/Project/Eatsy/src/pages/recipies.astro",{"propagation":"none","containsHead":true}],["C:/Users/Hazel/Documents/Project/Eatsy/src/pages/searchResults.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/ingredients@_@astro":"pages/ingredients.astro.mjs","\u0000@astro-page:src/pages/instructions@_@astro":"pages/instructions.astro.mjs","\u0000@astro-page:src/pages/recipies@_@astro":"pages/recipies.astro.mjs","\u0000@astro-page:src/pages/searchResults@_@astro":"pages/searchresults.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_C0tKTrwu.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CF-4p6vD.js","@astrojs/svelte/client.js":"_astro/client.Cx1FBVJX.js","C:/Users/Hazel/Documents/Project/Eatsy/src/components/RecipieCard.svelte":"_astro/RecipieCard.B_ApJlnj.js","C:/Users/Hazel/Documents/Project/Eatsy/src/components/RecipiePagination.svelte":"_astro/RecipiePagination.rX7Q79oG.js","C:/Users/Hazel/Documents/Project/Eatsy/src/components/DisplayRandomRecipie.svelte":"_astro/DisplayRandomRecipie.BAWl3jyU.js","C:/Users/Hazel/Documents/Project/Eatsy/src/components/RandomItem.svelte":"_astro/RandomItem.D8zP8ck8.js","C:/Users/Hazel/Documents/Project/Eatsy/src/components/DisplaySearchRecipie.svelte":"_astro/DisplaySearchRecipie.D-PNZ82e.js","C:/Users/Hazel/Documents/Project/Eatsy/src/components/SearchResult.svelte":"_astro/SearchResult.BUyj64yI.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/Eatsy/file:///C:/Users/Hazel/Documents/Project/Eatsy/dist/ingredients/index.html","/Eatsy/file:///C:/Users/Hazel/Documents/Project/Eatsy/dist/instructions/index.html","/Eatsy/file:///C:/Users/Hazel/Documents/Project/Eatsy/dist/recipies/index.html","/Eatsy/file:///C:/Users/Hazel/Documents/Project/Eatsy/dist/searchResults/index.html","/Eatsy/file:///C:/Users/Hazel/Documents/Project/Eatsy/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"rewritingEnabled":false,"experimentalEnvGetSecretEnabled":false});

export { manifest };
