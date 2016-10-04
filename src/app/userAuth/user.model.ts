import {Validators} from "@angular/forms";
export interface IAddress {
	street: string;
	city: string;
	zip: number;
}
export interface IUser {
	username: string;
	email: string;
	password: string;
	address: IAddress[]
}

export const userFieldsValidationSchema = {
	username: [Validators.required],
	email: [Validators.required],
	password: [Validators.required, Validators.minLength(5)],
	repeatPassword: [Validators.required],
	address_street: [Validators.required],
	address_city: [Validators.required],
	address_zip: [Validators.required, Validators.pattern('\\d{5,7}')],
};