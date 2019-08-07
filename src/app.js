// usar a sintaxe de import só é possivel após a instalação do sucrase
import express from 'express';
import path from 'path';
// importando as rotas de outro arquivo
import routes from './routes';

// importando o arquivo que faz a conexao com o banco de dados e carrega os models
import './database';

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
        
        // servir arquivos estaticos (css, html, imagens, etc)
        this.server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads' )))
    }

    routes() {
        this.server.use(routes);
    }
}

// exportando uma instancia de App
export default new App().server;
