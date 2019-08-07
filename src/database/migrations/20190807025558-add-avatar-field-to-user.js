'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    // adicionando uma nova coluna, especificando a tabela que vai ser criada e o nome da coluna
      return queryInterface.addColumn(
        'users',
        'avatar_id',
        {
          type: Sequelize.INTEGER,
          references: { model: 'files', key: 'id' }, // FK
          onUpdate: 'CASCADE', // se o arquivo for alterado dentro da tabela file vai espelhar na tabela de user
          onDelete: 'SET NULL', // se o arquivo for deletado na tabela de arquivos o 'avatar_id do user vai ser setado como NULL
          allowNull: true,
        }
      )
  },

  down: (queryInterface) => {
      return queryInterface.removeColumn('users', 'avatar_id')
  },
};
