// project modules
const app = require('../app')
const db = require('../models')

// setup environment
require('dotenv').config()

const port = process.env.PORT || '8080'
app.set('port', port)

// setup db, then start server
db.sequelize.sync()
  .then(() => {
    app.listen(port, (error) => {
      if (error) {
        return logErrorAndExit(error)
      }
      console.log(`\n Server listening on port ${port}. View application in the browser at http://localhost:${port} \n`)
    })
  })
  .catch(logErrorAndExit)

function logErrorAndExit (error) {
  console.error(error)
  process.exit(1)
}
