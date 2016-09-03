declare module 'simulant' {
    namespace simulant {
        export interface Simulant {
            (event: string, data: any): Event;
            fire(target: Node, event: Event);
        }
    }
    export = simulant.Simulant;
}