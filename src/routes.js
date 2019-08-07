// roteamento do express
import { Router } from 'express'; 
import multer from 'multer';
import multerConfig from './config/multer'

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';


import authMiddleware from './app/middlewares/auth'; // middleware que vai fazer autenticação do jwt

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store); // rota para criar usuario
routes.post('/sessions', SessionController.store); // rota para logar

routes.use(authMiddleware);

routes.put('/users', UserController.update); // rota para o usuario alterar as rotas cadastrais

// passando o middleware upload, um de cada vez (single) e o nome do campo que será enviado na requisição -> upload.single('file')
routes.post('/files', upload.single('file'), (req, res) => {
    return res.json({ ok: true })
});

// exportando as rotas
export default routes;
