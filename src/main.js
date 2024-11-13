import Game from './classes/Game.js';

// Configuração do canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Definir tamanho real do canvas (resolução interna)
canvas.width = 256;
canvas.height = 192;

// Iniciar o jogo
const game = new Game(canvas, ctx);
game.init();