import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ShopFrontComponent} from './shop/shop-front.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'shop', component: ShopFrontComponent},
];
