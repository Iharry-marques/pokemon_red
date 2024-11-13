export default class Pokemon {
    constructor(name, level, moves) {
        this.name = name;
        this.level = level;
        this.hp = 100;
        this.maxHp = 100;
        this.moves = moves || [];
        this.status = 'normal';
        this.experience = 0;
        this.nextLevelExp = this.level * 100;
    }

    attack(move, target) {
        if (!this.moves.includes(move)) {
            return false;
        }
        
        // Lógica básica de dano
        const damage = Math.floor(Math.random() * 20) + 10;
        target.takeDamage(damage);
        return true;
    }

    takeDamage(amount) {
        this.hp = Math.max(0, this.hp - amount);
        return this.hp === 0;
    }

    heal(amount) {
        this.hp = Math.min(this.maxHp, this.hp + amount);
    }

    gainExperience(amount) {
        this.experience += amount;
        if (this.experience >= this.nextLevelExp) {
            this.levelUp();
        }
    }

    levelUp() {
        this.level++;
        this.experience -= this.nextLevelExp;
        this.nextLevelExp = this.level * 100;
        this.maxHp += 5;
        this.hp = this.maxHp;
        console.log(`${this.name} subiu para o nível ${this.level}!`);
    }
}