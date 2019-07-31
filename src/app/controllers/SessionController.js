// controle de autenticação de usuario
import jwt from 'jsonwebtoken';

import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
    async store(req, res) {
        const { email, password } = req.body;

        // verificando se o email que usario está tentado acessar existe
        const user = await User.findOne({ where: { email } });

        // usuario nao autorizado
        if (!user) {
            return res.status(401).json({ error: 'User not found' });
        }

        // validação de senha do usuario com o metodo criado no model de user
        if (!(await user.checkPassword(password))) {
            return res.status(401).json({ error: 'Password does not match' });
        }

        const { id, name } = user;

        return res.json({
            user: {
                id,
                name,
                email,
            },
            // passando o payload como parametro de sign e uma string unica, e algumas configurações do token
            token: jwt.sign({ id }, authConfig.secre, {
                expiresIn: authConfig.expiresIn,
            }),
        });
    }
}

export default new SessionController();
