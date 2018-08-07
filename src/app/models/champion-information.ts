export class ChampionInformation {
    id: number;
    name: string;
    key: string;
    imageName: string;

    constructor(id: number, name: string, key: string, imageName: string) {
        this.id = id;
        this.name = name;
        this.key = key;
        this.imageName = imageName;
    }
}
