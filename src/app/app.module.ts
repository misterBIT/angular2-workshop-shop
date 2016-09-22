import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {AppComponent} from "./app.component";
import {HomeComponent} from "./home/home.component";
import {routes} from "./app.routes";
import {SharedModule} from "./shared/shared.module";
import {BrowserModule} from "@angular/platform-browser";
import {StoreModule} from './shop/shop.module';
import {LoginComponent} from "./shared/login.component";
import {NgReduxModule, NgRedux} from 'ng2-redux';
import * as createLogger from 'redux-logger';
import {IShopState, StoreInitialState} from "./shop/shop.initialState";
import {combineReducers, Reducer} from "redux";
import {CartReducer, ItemsReducer} from "./shop/shop.reducer";
import {LoginReducer} from "./shared/login.reducer";
import {LoginActions} from "./shared/login.actions";

@NgModule({
	imports: [BrowserModule, StoreModule, RouterModule.forRoot(routes), SharedModule, NgReduxModule],       // module dependencies
	declarations: [AppComponent, HomeComponent, LoginComponent],   // components and directives
	providers: [LoginActions],
	bootstrap: [AppComponent],     // root component
})
export class AppModule {
	constructor(ngRedux: NgRedux<IShopState>) {
		ngRedux.configureStore(<Reducer<IShopState>>combineReducers({items: ItemsReducer, shoppingCart: CartReducer, login: LoginReducer}), StoreInitialState, [createLogger()]);
	}
}

