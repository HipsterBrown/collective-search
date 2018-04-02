const {CollectiveMaterializedView} = require('../models');

module.exports = {
  up: () => CollectiveMaterializedView.refresh(),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
};
