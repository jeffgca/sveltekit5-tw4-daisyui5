

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CF-cqaBs.js","_app/immutable/chunks/B1FFKlHf.js","_app/immutable/chunks/BveQWnBo.js","_app/immutable/chunks/cpRWnR1j.js"];
export const stylesheets = [];
export const fonts = [];
