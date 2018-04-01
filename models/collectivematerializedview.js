const SearchModel = require('pg-search-sequelize')

module.exports = (sequelize, DataTypes) => {
  const CollectiveMaterializedView = sequelize.define('CollectiveMaterializedView', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    currency: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    longDescription: DataTypes.TEXT,
    image: DataTypes.TEXT,
    slug: DataTypes.STRING,
    website: DataTypes.STRING,
    twitterHandle: DataTypes.STRING,
    mission: DataTypes.TEXT,
    backgroundImage: DataTypes.TEXT,
    tags: DataTypes.ARRAY(DataTypes.STRING),
    type: DataTypes.STRING,
    data: DataTypes.JSON,
    document: DataTypes.TEXT
  }, {
    tableName: 'collective_materialized_view',
    referenceModel: 'Collective',
    search: true,
    timestamps: false
  })
  return new SearchModel(CollectiveMaterializedView)
}
