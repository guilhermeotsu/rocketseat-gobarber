// roteamento do express
import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    return res.json({ message: 'Hello Guilherme!' });
});

// exportando as rotas
export default routes;
