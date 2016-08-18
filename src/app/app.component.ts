import {Component, ViewEncapsulation} from "@angular/core";
import {ToastsManager} from "ng2-toastr/ng2-toastr";
import {ChatRoomService} from "./chat/chat-room.service";
import * as io from "socket.io-client";


@Component({
    selector: 'app',
    // template: `HI THERE`,
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    providers: [ChatRoomService, ToastsManager, {provide: 'io', useValue: io}]

})
export class AppComponent {
}
