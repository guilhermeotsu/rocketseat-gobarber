// exporta um arquivo de configuração, precisa ser a sintaxe do comonjs por que vai ser acessado pelo sequelize cli
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'docker',
    database: 'gobarber',
    define: {
        timestamps: true, // define duas colunas de CreatedAt/UpdatedAt em cada tabela do db
        underscored: true, // define a nomenclatura da criação de tabelas e coluna do padrao underscored (ex: user_groups)
        underscoredAll: true,
    },
};
