import Sequelize, { Model } from 'sequelize';

class File extends Model {
    // método que vai ser chamado automaticamente pelo sequeliza
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                path: Sequelize.STRING,
                // campo virtual que vai conter o caminho do arquivo para o front consumir
                url: { 
                    type: Sequelize.VIRTUAL,
                    get() {
                        return `htpp://localhost:3333/files/${this.path}`;
                    }
                }
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default File;
