// usar a sintaxe de import só é possivel após a instalação do sucrase
import express from 'express';
import path from 'path';
import Youch from 'youch';
import * as Sentry from '@sentry/node';
import 'express-async-errors';
import routes from './routes'; // importando as rotas de outro arquivo
import sentryConfig from './config/sentry';

// importando o arquivo que faz a conexao com o banco de dados e carrega os models
import './database';

// instanciando a aplicação
class App {
    constructor() {
        // apenas o server vai ser exportado da aplicação
        this.server = express();

        Sentry.init(sentryConfig);

        this.middlewares();
        this.routes();
        this.exceptionHandler();
    }

    // métodos:
    middlewares() {
        this.server.use(Sentry.Handlers.requestHandler());

        // preparar para que nossa aplicação possa receber arquivos em json
        this.server.use(express.json());

        // servir arquivos estaticos (css, html, imagens, etc)
        this.server.use(
            '/files',
            express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
        );
    }

    routes() {
        this.server.use(routes);
        this.server.use(Sentry.Handlers.errorHandler());
    }

    exceptionHandler() {
        this.server.use(async (err, req, res, next) => {
            const errors = await new Youch(err, req).toJSON();

            return res.status(500).json(errors);
        })
    }
}

// exportando uma instancia de App
export default new App().server;
