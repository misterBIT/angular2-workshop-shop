import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {StoreFrontComponent} from './store-front.component';
import {StoreService} from './store.service';
@NgModule({
    providers: [StoreService],
    declarations: [StoreFrontComponent],
    imports: [SharedModule],
    exports: [StoreFrontComponent],
})
export class StoreModule {
}
