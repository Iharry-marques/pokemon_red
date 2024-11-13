export default class GameMap {
    constructor() {
        this.tiles = [];
        this.npcs = [];
        this.items = [];
        this.createBasicMap(); // Criar um mapa básico para teste
    }

    createBasicMap() {
        // Criar um mapa básico 16x16 para teste
        this.width = 16;
        this.height = 16;
        this.tiles = Array(this.width * this.height).fill(0); // 0 representa grama normal
        
        // Adicionar algumas áreas de grama alta (1)
        for (let i = 0; i < 20; i++) {
            const x = Math.floor(Math.random() * this.width);
            const y = Math.floor(Math.random() * this.height);
            this.tiles[y * this.width + x] = 1;
        }
    }

    update() {
        // Atualizar estado do mapa
    }

    render(ctx) {
        // Renderizar o mapa
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const tile = this.tiles[y * this.width + x];
                ctx.fillStyle = tile === 0 ? '#90EE90' : '#228B22'; // Verde claro para grama normal, verde escuro para grama alta
                ctx.fillRect(x * 16, y * 16, 16, 16);
            }
        }
    }

    isGrassArea(position) {
        const tileX = Math.floor(position.x / 16);
        const tileY = Math.floor(position.y / 16);
        if (tileX < 0 || tileX >= this.width || tileY < 0 || tileY >= this.height) {
            return false;
        }
        return this.tiles[tileY * this.width + tileX] === 1;
    }
}