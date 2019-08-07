// esse arquivo que realiza a conexao com o db e carrega as models
import Sequelize from 'sequelize'; // responsavel por faze ra conexao com o banco

import User from '../app/models/User';
import File from '../app/models/File';

import databaseConfig from '../config/database';

const models = [User, File];

class DataBase {
    constructor() {
        this.init();
    }

    init() {
        // faz a conexao com o banco e carrega as models
        this.connection = new Sequelize(databaseConfig);

        models
        .map(model => model.init(this.connection)) // percorrendo todos os models
        .map(model => model.associate && model.associate(this.connection.models)) // só vai executar o segundo model.associate se o primeiro for verdade, ou seja se existir o associate dentro do model 
    }
}

export default new DataBase();
