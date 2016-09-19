import {Component, OnInit} from '@angular/core';

@Component({
    styles: [`section {background: lightgray; padding: 10px;width:70%;float:left; box-sizing:border-box;}`],
    template: `<section>
                    <h1>Home sweet Home</h1>
                    <p>This is a Misterbit's Angular2 seed project:</p>
                    <ul>
                        <li>Webpack 2</li>
                        <li>Typescript 2</li>
                        <li>Angular 2!</li>
                    </ul>
                </section>`
})
export class HomeComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }

}
