// roteamento do express
import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

const routes = new Router();

routes.post('/users', UserController.store); // rota para criar usuario
routes.post('/sessions', SessionController.store); // rota para logar

// exportando as rotas
export default routes;
