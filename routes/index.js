const router = require('express').Router()
const userRoutes = require('./userRoutes')
const thoughtRoutes = require('./thoughtRoutes')

router.use('/api/Users',userRoutes)
router.use('/api/Thoughts',thoughtRoutes)

module.exports = router