export default class Player {
    constructor(name) {
        this.name = name;
        this.position = { x: 0, y: 0 };
        this.pokemon = [];
        this.badges = 0;
        this.inventory = new Inventory();
    }
    // ... resto do código da classe Player
}
