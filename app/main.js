"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var app_component_1 = require('./app.component');
var app_routes_1 = require("./app.routes");
var http_1 = require("@angular/http");
var index_1 = require("angular2-in-memory-web-api/index");
var in_memory_data_service_1 = require("./in-memory-data.service");
var forms_1 = require('@angular/forms');
platform_browser_dynamic_1.bootstrap(app_component_1.Appcomponent, [app_routes_1.appRouterProviders, http_1.HTTP_PROVIDERS, {
        provide: http_1.XHRBackend, useClass: index_1.InMemoryBackendService
    }, { provide: index_1.SEED_DATA, useClass: in_memory_data_service_1.InMemoryDataService },
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()]);
//# sourceMappingURL=main.js.map