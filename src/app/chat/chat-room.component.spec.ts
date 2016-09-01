import {TestBed, inject} from "@angular/core/testing/test_bed";
import {ChatRoomComponent} from "./chat-room.component";
import {ChatRoomService} from "./chat-room.service";
import {Observable, Subject} from "rxjs";
import {async} from "@angular/core/testing/async";
import {ComponentFixture} from "@angular/core/testing/component_fixture";
import {By} from "@angular/platform-browser";
import * as simulant from "simulant";
declare module "simulant" {
	export interface Simulant {
		(event: string, data: any): Event;
		fire(target: Node, event: Event);
	}
	export = Simulant;

}

describe("CounterPageComponent", () => {
	let fixture: ComponentFixture, component: any,
	    messagesMockSubject: Subject<string>,
	    connectedMockSubject: Subject<boolean>;

	interface ChatRoomServiceMock {
		send: jasmine.Spy;
		connect: jasmine.Spy;
		toggleConnectionStatus: jasmine.Spy;
		message$: Subject<string>;
		connected$: Subject<boolean>;
	}
	beforeEach(() => {

		connectedMockSubject = new Subject();
		messagesMockSubject = new Subject();
		let chatRoomServiceMock: ChatRoomServiceMock = Object.assign(jasmine.createSpyObj('chatRoomSvc', ['connect', 'send', 'toggleConnectionStatus']), {
			message$  : messagesMockSubject,
			connected$: connectedMockSubject
		});

		TestBed.configureTestingModule({
			providers   : [{provide: ChatRoomService, useValue: chatRoomServiceMock}],
			declarations: [ChatRoomComponent]
		});

		// TestBed.overrideComponent(CounterPageComponent, {
		// 	set: {
		// 		template: `<div>Overridden template here</div>`
		// 	}
		// });
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ChatRoomComponent);
		fixture.detectChanges();
		component = fixture.componentInstance;
	});


	it("it calls chatRoomService.connect on construction", inject([ChatRoomService], (chatRoomServiceMock: ChatRoomServiceMock) => {
		expect(chatRoomServiceMock.connect).toHaveBeenCalled();
	}));

	it("connection status is shown in title", async(inject([ChatRoomService], (chatRoomServiceMock: ChatRoomServiceMock) => {
			let title = fixture.debugElement.query(By.css('h2')).nativeElement;
			expect(title.innerText).toEqual('Disconnected...');
			chatRoomServiceMock.connected$.next(true);
			fixture.detectChanges();
			expect(title.innerText).toEqual('Connected!');
		}
	)));
	it("connection button is calling toggleConnectionStatus and updating text and class names by connection status ", async(inject([ChatRoomService], (chatRoomServiceMock: ChatRoomServiceMock) => {
			let connectBtn = fixture.debugElement.query(By.css('button')).nativeElement;
			expect(connectBtn.innerText).toEqual('Connect');
			expect(connectBtn.classList.contains('btn-danger')).toBeFalsy();
			expect(connectBtn.classList.contains('btn-info')).toBeTruthy();
			connectBtn.click();
			expect(chatRoomServiceMock.toggleConnectionStatus).toHaveBeenCalled();
			chatRoomServiceMock.connected$.next(true);
			fixture.detectChanges();
			expect(connectBtn.innerText).toEqual('Disconnect');
			expect(connectBtn.classList.contains('btn-info')).toBeFalsy();
			expect(connectBtn.classList.contains('btn-danger')).toBeTruthy();
		}
	)));

	it('checks input sends message on enter with text input value', async(inject([ChatRoomService], (chatRoomServiceMock: ChatRoomServiceMock) => {
		chatRoomServiceMock.connected$.next(true);
		fixture.detectChanges();
		let input = fixture.debugElement.query(By.css('input')).nativeElement;
		input.value = 'test';
		fixture.detectChanges();
		let event = simulant('keyup', {key: 'enter', code: 13, keyCode: 13});
		simulant.fire(input, event);
		fixture.detectChanges();
		expect(chatRoomServiceMock.send).toHaveBeenCalledWith('test');
	})));

	it('shows messages$ value in messages list',()=>{
		//todo;
	})
});