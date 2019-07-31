// roteamento do express
import { Router } from 'express';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', UserController.store); // store é o nome do método que está sendo utilizado dentro da classe

// exportando as rotas
export default routes;
