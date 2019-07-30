// usar a sintaxe de import só é possivel após a instalação do sucrase
import express from 'express';

// importando as rotas de outro arquivo

import routes from './routes';

// isntanciando a aplicação
class App {
    constructor() {
        // apenas o server vai ser exportado da aplicação
        this.server = express();

        this.middlewares();
        this.routes();
    }

    // métodos:
    middlewares() {
        // preparar para que nossa aplicação possa receber arquivos em json
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

// exportando uma instancia de App
export default new App().server;