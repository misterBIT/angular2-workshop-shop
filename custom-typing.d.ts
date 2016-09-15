declare module 'simulant' {

	namespace Simulant {
		interface simulant {
			(event: string, data: any): Event;
			fire(target: Node, event: Event);
		}
		function simulant(): simulant;
	}
	export = Simulant.simulant;
}

