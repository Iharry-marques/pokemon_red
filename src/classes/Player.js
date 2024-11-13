import Inventory from './Inventory.js';

export default class Player {
    constructor(name) {
        this.name = name;
        this.position = { x: 128, y: 96 }; // Posição inicial no centro
        this.speed = 2; // Velocidade de movimento
        this.pokemon = [];
        this.badges = 0;
        this.inventory = new Inventory();
        this.direction = 'down'; // direção que o jogador está olhando
        this.isMoving = false;
    }

    move(direction) {
        this.direction = direction;
        this.isMoving = true;
        
        switch(direction) {
            case 'up':
                this.position.y -= this.speed;
                break;
            case 'down':
                this.position.y += this.speed;
                break;
            case 'left':
                this.position.x -= this.speed;
                break;
            case 'right':
                this.position.x += this.speed;
                break;
        }
    }

    update() {
        // Atualizar animações e estado do jogador
    }

    render(ctx) {
        // Renderizar um retângulo simples por enquanto
        ctx.fillStyle = 'red';
        ctx.fillRect(this.position.x, this.position.y, 16, 16);
    }

    interact() {
        // Interagir com NPCs ou objetos
        console.log('Interagindo...');
    }

    openMenu() {
        // Abrir menu do jogo
        console.log('Menu aberto');
    }
}