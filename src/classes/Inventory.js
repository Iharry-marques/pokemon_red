export default class Inventory {
    constructor() {
        this.items = [];
        this.money = 0;
        this.maxItems = 20; // Limite máximo de itens
    }

    addItem(item) {
        if (this.items.length < this.maxItems) {
            this.items.push(item);
            return true;
        }
        return false; // Inventário cheio
    }

    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }

    hasItem(itemName) {
        return this.items.some(item => item.name === itemName);
    }

    addMoney(amount) {
        this.money += amount;
    }

    removeMoney(amount) {
        if (this.money >= amount) {
            this.money -= amount;
            return true;
        }
        return false;
    }
}