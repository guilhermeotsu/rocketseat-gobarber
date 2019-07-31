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
        console.log(req.userId); // pegar a variavel que vai inserida dentro do req pelo middleware auth
        return res.json({ ok: true });
    }
}

export default new UserController();
