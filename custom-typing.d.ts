declare module 'simulant' {
	namespace Simulant {
		export interface simulant {
			(event: string, data: any): Event;
			fire(target: Node, event: Event);
		}
	}
	export = Simulant.simulant;
}