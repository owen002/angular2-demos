import {Injectable} from '@angular/core';
import {HEROES} from './mock-heros';
import {Hero} from "./Hero";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {
    private herosurl = 'app/heroes';
    constructor(private http:Http){}

    getHeros() {
        // return Promise.resolve(HEROES);
        // return this.getHeroesSlowly();

        return this.http.get(this.herosurl).toPromise().then(response=> response.json().data).catch(this.handleError);
    }

    getHero(id:number) {
        return this.getHeros().then(heros => heros.find(hero=> hero.id === id));
    }

    getHeroesSlowly() {
        return new Promise<Hero[]>(resolve =>
            setTimeout(() => resolve(HEROES), 200) // 2 seconds
        );
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    private post(hero:Hero):Promise<Hero>{
        let headers = new Headers({
            'Content-Type':'application/json'
        });
        return this.http.post(this.herosurl,JSON.stringify(hero),{headers:headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }
}