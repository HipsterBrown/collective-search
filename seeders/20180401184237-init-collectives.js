// builtin modules
const path = require('path')

// node_modules
const pg = require('pg')

// project modules
const env = process.env.NODE_ENV || 'development'
const config = require('../config/config')[env]

const dataPath = path.resolve('data', 'collectives.csv')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    const client = new pg.Client(config)

    console.log('Connecting to client, then copying from', dataPath)
    return client.connect()
    .then(() => client.query(`COPY "Collectives" FROM '${dataPath}' CSV HEADER`))
    .then(() => console.log('Seed complete!'))
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Collective', null, {})
  }
};
