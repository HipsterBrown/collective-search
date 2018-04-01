// node_modules
const express = require('express')
const { Op } = require('sequelize')

// builtin modules
const { Collective, CollectiveMaterializedView } = require('../models')

const router = express.Router()

router.get('/', async (_, response) => {
  const collectives = await Collective.findAll({
    limit: 20,
    order: [['updatedAt', 'DESC']],
    where: {
      isActive: true,
      updatedAt: {
        [Op.not]: null
      }
    }
  })
  response.render('index', { recent: true, collectives })
})

router.get('/collectives', async (request, response) => {
  const { query } = request.query
  try {
    const collectives = await CollectiveMaterializedView.search(query)
    response.render('index', {
      collectives: collectives.filter(({ isActive }) => isActive), // bug in pg-search-sequelize that prevents boolean queries
      query
    })
  } catch (error) {
    response.render('index', { query, error })
  }
})

module.exports = router
