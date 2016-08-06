export enum PetKind {
    cat,
    dog
}

export interface PetOptions {
    name?: string;
    awake?: boolean;
    kind?: PetKind;
}
export class PetModel implements PetOptions {
    private static maxId = 0;
    id: number;
    name: string;
    awake: boolean = false;
    kind: PetKind;

    constructor(options: PetOptions|string = {}) {
        if (typeof options === "object") {
            Object.assign(this, options);
        } else if (typeof options === 'string') {
            this.name = options;
        }
        this.id = ++PetModel.maxId;
    }

    toggle() {
        this.awake = !this.awake;
    }

    getImgUrl() {
        return `img/pet/${PetKind[this.kind]}s/${this.id}.png`;
    }
}

export class PetService {
    pets = [new PetModel({name: 'Avsha', kind: PetKind.cat}), new PetModel({name: 'Abulele', kind: PetKind.cat}), new PetModel({name: 'AvAv', kind: PetKind.cat}),
        new PetModel({name: 'Banian', kind: PetKind.cat}), new PetModel({name: 'Baba', kind: PetKind.cat}), new PetModel({name: 'Basta', kind: PetKind.dog}),
        new PetModel({name: 'Craco', kind: PetKind.dog}), new PetModel({name: 'Charli', kind: PetKind.dog}), new PetModel({name: 'Chompi', kind: PetKind.dog})
    ];

    addPet(pet: PetModel) {
        this.pets = [...this.pets, pet];
    }

    togglePet(pet: PetModel) {
        pet.toggle();
        const i = this.pets.indexOf(pet);
        this.pets = [...this.pets.slice(0, i), pet, ...this.pets.slice(i + 1)];
    }

}

