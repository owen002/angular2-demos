import {Component} from "@angular/core";
import {Hero2} from "./Hero";

@Component({
    selector:'hero-form',
    templateUrl:'app/hero-form.component.html'
})

export class HeroFormComponent{
    powers = ['Really Smart', 'Super Flexible',
        'Super Hot', 'Weather Changer'];
    model = new Hero2(18, 'Dr IQ', this.powers[2], 'Chuck Overstreet');
    submitted = false;
    onSubmit(){
        this.submitted = true;
    }
    get diagnostic() { return JSON.stringify(this.model); }
}