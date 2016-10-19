"use strict";
var router_1 = require('@angular/router');
var heros_component_1 = require("./heros.component");
var DashboardComponent_1 = require("./DashboardComponent");
var hero_detail_component_1 = require("./hero-detail.component");
var hero_form_component_1 = require("./hero-form.component");
var routes = [
    { path: 'heroes', component: heros_component_1.HerosComponent },
    { path: 'dashboard', component: DashboardComponent_1.DashboardComponent },
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent },
    { path: 'form', component: hero_form_component_1.HeroFormComponent }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map