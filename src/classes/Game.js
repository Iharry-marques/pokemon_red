import Player from './Player.js';
import GameMap from './GameMap.js';

export default class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.player = null;
        this.map = null;
        this.currentScene = null;
        this.gameLoop = null;
    }

    init() {
        this.player = new Player("Red");
        this.map = new GameMap();
        this.setupControls();
        this.startGameLoop();
    }

    setupControls() {
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                case 'ArrowUp':
                    this.player.move('up');
                    break;
                case 'ArrowDown':
                    this.player.move('down');
                    break;
                case 'ArrowLeft':
                    this.player.move('left');
                    break;
                case 'ArrowRight':
                    this.player.move('right');
                    break;
                case 'z': // Botão A
                    this.player.interact();
                    break;
                case 'x': // Botão B
                    this.player.openMenu();
                    break;
            }
        });
    }

    startGameLoop() {
        this.gameLoop = setInterval(() => {
            this.update();
            this.render();
        }, 1000/60); // 60 FPS
    }

    update() {
        this.player.update();
        this.map.update();
        this.checkCollisions();
        this.checkEncounters();
    }

    render() {
        // Limpar o canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Renderizar mapa
        this.map.render(this.ctx);
        
        // Renderizar player
        this.player.render(this.ctx);
    }

    checkCollisions() {
        // Verificar colisões com objetos e NPCs
    }

    checkEncounters() {
        if (this.map.isGrassArea(this.player.position) && Math.random() < 0.1) {
            this.startBattle();
        }
    }

    startBattle() {
        // Iniciar batalha Pokémon
        console.log("Batalha iniciada!");
    }
}