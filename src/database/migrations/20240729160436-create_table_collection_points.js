'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('collection_points', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users', 
          key: 'id'
        },
      },
      name: {
        type: Sequelize.STRING(150),
        allowNull: false,
      },
      address:{
        type: Sequelize.TEXT,
        allowNull: false,
      },
      latitude:{
        type: Sequelize.DECIMAL(10, 8),
        allowNull: false
      },
      longitude:{
        type: Sequelize.DECIMAL(10, 8),
        allowNull: false
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
    await queryInterface.dropTable('collection_points')
  }
};