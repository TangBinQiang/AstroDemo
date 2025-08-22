import { b as createAstro, c as createComponent, r as renderComponent, m as maybeRenderHead, e as addAttribute, d as renderSlot, f as renderScript, g as renderTransition, a as renderTemplate } from './astro/server_DbTCsXAD.mjs';
import { $ as $$Breadcrumb } from './Breadcrumb_DHyrXA37.mjs';
/* empty css                         */

const $$Astro = createAstro("https://astro-paper.pages.dev/");
const $$Main = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Main;
  const { props } = Astro2;
  const backUrl = Astro2.url.pathname ;
  return renderTemplate`${renderComponent($$result, "Breadcrumb", $$Breadcrumb, {})} ${maybeRenderHead()}<main${addAttribute(backUrl, "data-backUrl")} id="main-content" class="mx-auto w-full max-w-app px-4 pb-4"> ${"titleTransition" in props ? renderTemplate`<h1 class="text-2xl font-semibold sm:text-3xl"> ${props.pageTitle[0]} <span${addAttribute(renderTransition($$result, "hn2qarie", "", props.titleTransition), "data-astro-transition-scope")}> ${props.pageTitle[1]} </span> </h1>` : renderTemplate`<h1 class="text-2xl font-semibold sm:text-3xl">${props.pageTitle}</h1>`} <p class="mt-2 mb-6 italic">${props.pageDesc}</p> ${renderSlot($$result, $$slots["default"])} </main> ${renderScript($$result, "D:/Code/AstroProjects/demo03/src/layouts/Main.astro?astro&type=script&index=0&lang.ts")}`;
}, "D:/Code/AstroProjects/demo03/src/layouts/Main.astro", "self");

export { $$Main as $ };
