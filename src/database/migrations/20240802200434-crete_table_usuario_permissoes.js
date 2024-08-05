'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('usuario_permissoes', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
      },
      usuario_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'usuarios', 
          key: 'id'
        },
      },
      permissao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'permissoes', 
          key: 'id'
        },
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt :{
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE,
        allowNull: true
      }
  })
  }, 

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('usuario_permissoes')
  }
};