import {Component, ViewEncapsulation} from "@angular/core";
import {ToastsManager} from "ng2-toastr/ng2-toastr";
import {MonsterService} from "./monster/monster.service";
import {ChatRoomService} from "./chat/chat-room.service";
import * as io from "socket.io-client";


@Component({
	selector     : 'app',
	moduleId     : module.id,
	templateUrl  : 'app.component.html',
	styleUrls    : ['app.component.scss'],
	encapsulation: ViewEncapsulation.None,
	providers    : [MonsterService, ChatRoomService, ToastsManager, {provide: 'io', useValue: io}]

})
export class AppComponent {
}
