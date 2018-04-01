module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Collectives', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      currency: {
        type: Sequelize.STRING
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      longDescription: {
        type: Sequelize.TEXT
      },
      image: {
        type: Sequelize.TEXT
      },
      slug: {
        type: Sequelize.STRING
      },
      website: {
        type: Sequelize.STRING
      },
      twitterHandle: {
        type: Sequelize.STRING
      },
      mission: {
        type: Sequelize.TEXT
      },
      backgroundImage: {
        type: Sequelize.TEXT
      },
      tags: {
        type: Sequelize.ARRAY(Sequelize.STRING)
      },
      isSupercollective: {
        type: Sequelize.BOOLEAN,
      },
      type: {
        type: Sequelize.STRING
      },
      data: {
        type: Sequelize.JSON
      },
      createdAt: {
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Collectives')
  }
};
