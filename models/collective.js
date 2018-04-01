module.exports = (sequelize, DataTypes) => {
  const Collective = sequelize.define('Collective', {
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
    deletedAt: DataTypes.DATE
  }, {})
  Collective.associate = function(models) {
    // associations can be defined here
  }
  return Collective
}
