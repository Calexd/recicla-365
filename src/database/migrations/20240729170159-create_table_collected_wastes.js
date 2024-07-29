'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('collected_wastes', {
      id: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
      },
      collection_point_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'collection_points', 
          key: 'id'
        },
      },
      waste_type_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'waste_types', 
          key: 'id'
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable('collected_wastes')
  }
};