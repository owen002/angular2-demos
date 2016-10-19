"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var hero_service_1 = require("./hero.service");
var router_1 = require("@angular/router");
var Appcomponent = (function () {
    function Appcomponent() {
        this.title = 'Tour of Heroes';
    }
    Appcomponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{title}}</h1>\n                <nav>\n                    <a [routerLink]=\"['/heroes']\" routerLinkActive=\"active\">Heroes</a>\n                    <a [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">Dashboard</a>\n                    <a [routerLink]=\"['/form']\" routerLinkActive=\"active\">Form</a>\n                </nav>\n                <router-outlet></router-outlet>\n                ",
            styleUrls: ['app/app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [hero_service_1.HeroService]
        }), 
        __metadata('design:paramtypes', [])
    ], Appcomponent);
    return Appcomponent;
}());
exports.Appcomponent = Appcomponent;
//# sourceMappingURL=app.component.js.map