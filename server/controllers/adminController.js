const Admin = require('../models/admin')

class AdminController {
  static async find(req, res, next) {
    try {
      const admins = await Admin.find()
      res.status(200).json(admins)
      next()
    } catch (error) {
      next(error)
    }
  }

  static async findOne(req, res, next) {
    try {
      const id = req.params.id
      const admin = await Admin.findOne(id)
      res.status(200).json(admin)
      next()
    } catch (error) {
      next(error)
    }

  }

  static async create(req, res, next) {
    try {
      const admin = req.body
      const admins = await Admin.create(admin)
      res.status(201).json(admins.ops[0])
      next()
    } catch (error) {
      next(error)
    }
  }

  static async updateOne(req, res, next) {
    try {
      const id = req.params.id
      const updateData = req.body
      const admin = await Admin.updateOne(id, updateData)
      if (admin.result.n === 0) throw ({type: 'CustomError', error: "Data not found", status: 404})
      res.status(200).json({_id: id, success: 'Data successfully updated'})
      next()
    } catch (error) {
      next(error)
    }
  }

  static async deleteOne(req, res, next) {
    try {
      const id = req.params.id
      const admin = await Admin.deleteOne(id)
      if (admin.result.n === 0) throw ({type: 'CustomError', error: "Data not found", status: 404})
      res.status(200).json({_id: id, success: 'Data successfully deleted'})
    } catch (error) {
      next(error)
    }
  }
}

module.exports = AdminController