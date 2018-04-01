require('dotenv').config()

module.exports = {
  'development': {
    'username': process.env.PGUSER,
    'password': process.env.PGPASSWORD,
    'database': 'oc_development',
    'host': process.env.PGHOST,
    'dialect': 'postgres'
  },
  'test': {
    'username': process.env.PGUSER,
    'password': process.env.PGPASSWORD,
    'database': 'oc_test',
    'host': process.env.PGHOST,
    'dialect': 'postgres'
  },
  'production': {
    'username': process.env.PGUSER,
    'password': process.env.PGPASSWORD,
    'database': 'oc_production',
    'host': process.env.PGHOST,
    'dialect': 'postgres'
  }
}
