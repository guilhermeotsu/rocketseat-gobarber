// roteamento do express
import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth'; // middleware que vai fazer autenticação do jwt

const routes = new Router();

routes.post('/users', UserController.store); // rota para criar usuario
routes.post('/sessions', SessionController.store); // rota para logar

routes.use(authMiddleware);

routes.put('/users', UserController.update); // rota para o usuario alterar as rotas cadastrais

// exportando as rotas
export default routes;
