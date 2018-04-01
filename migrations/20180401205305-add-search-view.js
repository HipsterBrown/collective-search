// node_modules
const { QueryInterface } = require('pg-search-sequelize')

// project modules
const { Collective } = require('../models')

const materializedViewName = 'collective_materialized_view'

const attributes = {
  name: 'A',
  description: 'B',
  longDescription: 'B',
  mission: 'B',
  tags: 'C'
}

module.exports = {
  up: (queryInterface) => new QueryInterface(queryInterface).createMaterializedView(materializedViewName, Collective, attributes, {}),

  down: (queryInterface) => new QueryInterface(queryInterface).dropMaterializedView(materializedViewName)
}
