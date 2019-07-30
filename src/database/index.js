// esse arquivo que realiza a conexao com o db e carrega as models
import Sequelize from 'sequelize'; // responsavel por faze ra conexao com o banco

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class DataBase {
    constructor() {
        this.init();
    }

    init() {
        // faz a conexao com o banco e carrega as models
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection)); // percorrendo todos os models
    }
}

export default new DataBase();
