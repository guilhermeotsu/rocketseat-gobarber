import User from '../models/User';

class UserController {
    // método de  criação
    async store(req, res) {
        const userExist = await User.findOne({
            where: { email: req.body.email },
        });

        if (userExist) {
            return res.status(400).json({ error: 'User already exist.' });
        }

        const { id, name, email, provider } = await User.create(req.body);
        return res.json({
            id,
            name,
            email,
            provider,
        });
    }

    // método de update, usuario fazer modificação de seus dados cadastrais
    async update(req, res) {
        // console.log(req.userId);  pegar a variavel que vai inserida dentro do req pelo middleware auth
        const { email, oldPassword } = req.body;

        const user = await User.findByPk(req.userId);

        // validação se o usuário vai cadastrar email novo
        if (email !== user.email) {
            const userExist = await User.findOne({
                where: { email },
            });

            if (userExist) {
                return res.status(400).json({ error: 'User already exist.' });
            }
        }

        // validação se o usuario quer trocar a senha e se a oldPassword bate com a cadastrada
        if (oldPassword && !(await user.checkPassword(oldPassword))) {
            return res.status(401).json({ error: 'Password does not match' });
        }

        // se todas as verificações passarem ele dá update no usuario com as informações do body
        const { id, name, provider } = await user.update(req.body);

        return res.json({
            id,
            name,
            email,
            provider,
        });
    }
}

export default new UserController();
