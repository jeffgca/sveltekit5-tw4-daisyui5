import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.DuOVuMfF.js","_app/immutable/chunks/B1FFKlHf.js","_app/immutable/chunks/BveQWnBo.js","_app/immutable/chunks/B5O1kK1y.js","_app/immutable/chunks/t5tdSBRJ.js","_app/immutable/chunks/cpRWnR1j.js","_app/immutable/chunks/YpQ80f9b.js","_app/immutable/chunks/BlLiMPqa.js"];
export const stylesheets = ["_app/immutable/assets/0.CVMmNN2Z.css"];
export const fonts = [];
