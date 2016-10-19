import {Component, OnInit} from "@angular/core";
import {Hero} from "./Hero";
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";
@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls:['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    heros:Hero[] = [];

    constructor(private heroService:HeroService, private route:Router) {
    }

    getHeros() {
        this.heroService.getHeros().then(heros => {
            this.heros = heros.slice(1, 5);
        })
    }

    ngOnInit() {
        this.getHeros();
    }

    gotoDetail(hero:Hero) {
        let link = ['/detail', hero.id];
        this.route.navigate(link);
    }
}