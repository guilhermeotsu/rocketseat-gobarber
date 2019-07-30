import Sequelize, { Model } from 'sequelize';

class User extends Model {
    // método que vai ser chamado automaticamente pelo sequeliza
    static init(sequelize) {
        super.init(
            {
                // super é uma classe pai (está chamando o método init da classe Model)
                // colunas que vao ter na db
                // aqui vai ser o primeiro parametro do init contendo todos os valores que o usuario pode receber
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                password_hash: Sequelize.STRING,
                provider: Sequelize.BOOLEAN,
            },
            {
                sequelize,
            }
        );
    }
}

export default User;
