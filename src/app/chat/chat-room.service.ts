import {Injectable, Inject} from "@angular/core";
import {Observable, Subject} from "rxjs/Rx";
import * as io from "socket.io-client";

@Injectable()
export class ChatRoomService {
    // url$ = Observable.of('https://socket-chat-example-qsaokhakmv.now.sh/');
    url = 'http://localhost:3003';
    private socket$: any;
    public connected$: any;
    public messages$: any;
    public send$ = new Subject();
    private socketRef;

    constructor(@Inject('io') io) {
        this.socketRef = io(this.url);
        // Shutdown socket functionality untill needed
        // this.socket$ = Observable.of(this.socketRef);
        this.socket$ = Observable.never();

        this.messages$ = this.socket$
            .switchMap(socket => Observable.fromEvent(socket, 'chat message'))
            .startWith([])
            .scan((acc, curr)=> [...acc, curr]);

        const disconnect$ = this.socket$
            .switchMap(socket => Observable.fromEvent(socket, 'disconnect'));

        const connect$ = this.socket$
            .switchMap(socket => Observable.fromEvent(socket, 'connect'));


        this.connected$ = Observable.merge(
            connect$.mapTo(true),
            disconnect$.mapTo(false)
        );

        this.send$
            .withLatestFrom(this.socket$, (message, socket: SocketIOClient.Socket)=> {
                return {message, socket};
            })
            .subscribe(({message, socket})=> {
                // console.log('sending message: ', message);
                socket.emit('chat message', message);
            });
    }

    toggleConnectionStatus() {
        this.socketRef.disconnected ? this.socketRef.connect() : this.socketRef.disconnect();
    }
}

