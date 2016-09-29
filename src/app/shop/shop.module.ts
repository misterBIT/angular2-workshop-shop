import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {ShopFrontComponent} from './shop-front.component';
import {ShopService} from './shop.service';
@NgModule({
    providers: [ShopService],
    declarations: [ShopFrontComponent],
    imports: [SharedModule],
    exports: [ShopFrontComponent],
})
export class ShopModule {
}
