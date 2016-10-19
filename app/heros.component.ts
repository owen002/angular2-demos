import {Component} from '@angular/core';
import {Hero} from "./Hero";
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'my-heroes',
    templateUrl:'app/heros.component.html',
    directives: [HeroDetailComponent]
})

export class HerosComponent implements OnInit {
    ngOnInit() {
        this.getHeros();
    }

    heroes:Hero[];
    selectedHero:Hero;

    constructor(private heroService:HeroService,private route:Router) {
    }

    getHeros() {
        this.heroService.getHeros().then(heros => {this.heroes = heros;});
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    gotoDetail(hero:Hero) {
        let link = ['/detail', hero.id];
        this.route.navigate(link);
    }
}
