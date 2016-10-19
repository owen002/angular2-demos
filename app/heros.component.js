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
var hero_detail_component_1 = require('./hero-detail.component');
var hero_service_1 = require('./hero.service');
var router_1 = require("@angular/router");
var HerosComponent = (function () {
    function HerosComponent(heroService, route) {
        this.heroService = heroService;
        this.route = route;
    }
    HerosComponent.prototype.ngOnInit = function () {
        this.getHeros();
    };
    HerosComponent.prototype.getHeros = function () {
        var _this = this;
        this.heroService.getHeros().then(function (heros) { _this.heroes = heros; });
    };
    HerosComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HerosComponent.prototype.gotoDetail = function (hero) {
        var link = ['/detail', hero.id];
        this.route.navigate(link);
    };
    HerosComponent = __decorate([
        core_1.Component({
            selector: 'my-heroes',
            templateUrl: 'app/heros.component.html',
            directives: [hero_detail_component_1.HeroDetailComponent]
        }), 
        __metadata('design:paramtypes', [hero_service_1.HeroService, router_1.Router])
    ], HerosComponent);
    return HerosComponent;
}());
exports.HerosComponent = HerosComponent;
//# sourceMappingURL=heros.component.js.map