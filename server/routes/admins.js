const router = require('express').Router()
const AdminController = require('../controllers/adminController')

router.delete('/:id', AdminController.deleteOne)
router.put('/:id', AdminController.updateOne)
router.get('/', AdminController.find)
router.get('/:id', AdminController.findOne)
router.post('/', AdminController.create)

module.exports = router