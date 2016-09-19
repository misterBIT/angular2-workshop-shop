import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {StoreFrontComponent} from './store-front.component';
import {StoreService} from './store.service';
import {StoreListComponent} from './store-list.component';
import {ShoppingCartCompoennt} from './shopping-cart-compoenent';
@NgModule({
    providers: [StoreService],
    declarations: [StoreFrontComponent, StoreListComponent, ShoppingCartCompoennt],
    imports: [SharedModule],
    exports: [StoreFrontComponent],
})
export class StoreModule {
}
