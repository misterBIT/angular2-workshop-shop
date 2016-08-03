import {Resolve, ActivatedRouteSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {MonsterService} from "./monster.service";
import {Observable} from "rxjs/Rx";
@Injectable()
export class MonsterResolver implements Resolve {
	constructor(private monsterService:MonsterService) {
	}

	resolve(route:ActivatedRouteSnapshot):any {
		const id = route.params['id'];
		return Observable.from(this.monsterService.get(id))
	}
}