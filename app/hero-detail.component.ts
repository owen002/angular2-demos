import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeroService} from "./hero.service";
import {ActivatedRoute} from "@angular/router";
import {Hero} from "./Hero";

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/herodetail.component.html',
    styleUrls: ['app/herodetail.component.css']
})

export class HeroDetailComponent implements OnInit,OnDestroy {
    hero:Hero;
    sub:any;

    constructor(private heroService:HeroService,
                private route:ActivatedRoute) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params=> {
            let id = +params['id'];
            this.heroService.getHero(id).then(hero=>this.hero = hero)
        })
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    goBack() {
        window.history.back();
    }

    key($event) {
        console.log($event);
    }
}