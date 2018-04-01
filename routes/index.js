// node_modules
const express = require('express')
const { Op } = require('sequelize')

// builtin modules
const { Collective } = require('../models')

const router = express.Router()

router.get('/', (_, response) => {
  response.render('index')
})

router.get('/collectives', async (request, response) => {
  const { query } = request.query
  const collectives = await Collective.findAll({
    where: {
      isActive: true,
      name: {
        [Op.iLike]: `%${query}%`
      }
    }
  })
  console.log('Collective data:', collectives)
  response.render('index', { collectives, query })
})

module.exports = router
