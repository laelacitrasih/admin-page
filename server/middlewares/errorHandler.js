module.exports = (err, req, res, next) => {
  console.log(err,'----------> error')
  if (err.type === 'CustomError'){
    res.status(err.status).json({ error: err.error })
  } else {
    res.status(500).json({ error: 'Internal Server Error' })
  }
}