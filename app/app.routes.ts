import {provideRouter, RouterConfig} from '@angular/router';
import {HerosComponent} from "./heros.component";
import {DashboardComponent} from "./DashboardComponent";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroFormComponent} from "./hero-form.component";

const routes:RouterConfig = [
    {path: 'heroes', component: HerosComponent},
    {path: 'dashboard', component: DashboardComponent},
    {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    {path: 'detail/:id', component: HeroDetailComponent},
    {path: 'form', component: HeroFormComponent}
]

export const appRouterProviders = [
    provideRouter(routes)
]