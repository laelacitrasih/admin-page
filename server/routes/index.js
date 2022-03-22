const router = require('express').Router()
const adminRouter = require('./admins')

router.use('/admins', adminRouter)

module.exports = router