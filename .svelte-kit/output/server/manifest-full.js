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
		client: null,
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
			},
			{
				id: "/api/add-todo",
				pattern: /^\/api\/add-todo\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/add-todo/_server.js'))
			},
			{
				id: "/api/delete-todo",
				pattern: /^\/api\/delete-todo\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/delete-todo/_server.js'))
			},
			{
				id: "/api/edit-todo",
				pattern: /^\/api\/edit-todo\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/edit-todo/_server.js'))
			},
			{
				id: "/api/get-todo",
				pattern: /^\/api\/get-todo\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/get-todo/_server.js'))
			},
			{
				id: "/api/login",
				pattern: /^\/api\/login\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/login/_server.js'))
			},
			{
				id: "/api/sign-in",
				pattern: /^\/api\/sign-in\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/sign-in/_server.js'))
			},
			{
				id: "/api/sign-up",
				pattern: /^\/api\/sign-up\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('./entries/endpoints/api/sign-up/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
