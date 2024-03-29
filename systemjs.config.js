(function (global) {
	System.config({
		paths: {
			"npm:": "node_modules/",
		},
		map: {
			app: "build",

			"@angular/core": "npm:@angular/core/bundles/core.umd.js",
			"@angular/common": "npm:@angular/common/bundles/common.umd.js",
			"@angular/compiler": "npm:@angular/compiler/bundles/compiler.umd.js",
			"@angular/platform-browser": "npm:@angular/platform-browser/bundles/platform-browser.umd.js",
			"@angular/platform-browser-dynamic": "npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
			"@angular/http": "npm:@angular/http/bundles/http.umd.js",
			"@angular/router": "npm:@angular/router/bundles/router.umd.js",

			"rxjs": "npm:rxjs",
			"angular-in-memory-web-api": "npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js",
			"typescript-dotnet-system": "npm:typescript-dotnet-system"
		},
		packages: {
			app: {
				main: "./main.js",
				defaultExtension: "js"
			},
			rxjs: {
				defaultExtension: "js"
			},
			"typescript-dotnet-system": {
				defaultExtension: "js"
			}
		}
	});
})(this);
