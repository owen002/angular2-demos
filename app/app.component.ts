import {Component} from '@angular/core';
import {HeroService} from "./hero.service";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    selector: 'my-app',
    template: `<h1>{{title}}</h1>
                <nav>
                    <a [routerLink]="['/heroes']" routerLinkActive="active">Heroes</a>
                    <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
                    <a [routerLink]="['/form']" routerLinkActive="active">Form</a>
                </nav>
                <router-outlet></router-outlet>
                `,
    styleUrls:['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers:[HeroService]
})

export class Appcomponent {
    title = 'Tour of Heroes';
}
