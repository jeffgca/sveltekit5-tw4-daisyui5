export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.37uHRxZH.js",app:"_app/immutable/entry/app.D27PZjP0.js",imports:["_app/immutable/entry/start.37uHRxZH.js","_app/immutable/chunks/Bvgi7SGl.js","_app/immutable/chunks/BveQWnBo.js","_app/immutable/chunks/t5tdSBRJ.js","_app/immutable/entry/app.D27PZjP0.js","_app/immutable/chunks/BveQWnBo.js","_app/immutable/chunks/B5O1kK1y.js","_app/immutable/chunks/B1FFKlHf.js","_app/immutable/chunks/YpQ80f9b.js","_app/immutable/chunks/t5tdSBRJ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
