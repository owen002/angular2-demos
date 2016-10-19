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
var mock_heros_1 = require('./mock-heros');
var http_1 = require("@angular/http");
require('rxjs/add/operator/toPromise');
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.herosurl = 'app/heroes';
    }
    HeroService.prototype.getHeros = function () {
        // return Promise.resolve(HEROES);
        // return this.getHeroesSlowly();
        return this.http.get(this.herosurl).toPromise().then(function (response) { return response.json().data; }).catch(this.handleError);
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeros().then(function (heros) { return heros.find(function (hero) { return hero.id === id; }); });
    };
    HeroService.prototype.getHeroesSlowly = function () {
        return new Promise(function (resolve) {
            return setTimeout(function () { return resolve(mock_heros_1.HEROES); }, 200);
        } // 2 seconds
         // 2 seconds
        );
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    HeroService.prototype.post = function (hero) {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        return this.http.post(this.herosurl, JSON.stringify(hero), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map