// roteamento do express
import { Router } from 'express'; 
import multer from 'multer';
import multerConfig from './config/multer'

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';

import authMiddleware from './app/middlewares/auth'; // middleware que vai fazer autenticação do jwt

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store); // rota para criar usuario
routes.post('/sessions', SessionController.store); // rota para logar

routes.use(authMiddleware);

routes.put('/users', UserController.update); // rota para o usuario alterar as rotas cadastrais

// passando o middleware upload, um de cada vez (single) e o nome do campo que será enviado na requisição -> upload.single('file')
routes.post('/files', upload.single('file'), FileController.store);

routes.get('/providers', ProviderController.index);

// exportando as rotas
export default routes;
