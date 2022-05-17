const {checkIfNameUnique, getById} = require('./accounts-model')

exports.checkAccountPayload = (req, res, next) => {
  const {name, budget} = req.body
  if(!name|| !budget){
    res.status(400).json({message: "name and budget are required"})
    return
  } 
  if (name.trim().length<3 || name.trim().length> 100) {
    res.status(400).json({ message: "name of account must be between 3 and 100"})
    return
  }
  if (parseInt(budget) == isNaN ){
    res.status(400).json({message: 'budget of account must be a number'})
    return
  }
  if (parseInt(budget) <0 || parseInt(budget) > 1000000) {
    res.status(400).json({message: "budget of account is too large or too small"})
    return
  }
  next();

  // DO YOUR MAGIC
  // Note: you can either write "manual" validation logic
  // or use the Yup library (not currently installed)
}

exports.checkAccountNameUnique = (req, res, next) => {
  const {name} = req.body
  checkIfNameUnique({'name': name.trim()}) 
    .then(result => {
      if(result.length>0) {
        res.status(400).json({message:'that name is taken'})
        return
      }else{
        next()
      }
    })

  
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  const {id} = req.params;
  getById(id)
  .then(result => {
    if(result == null) {
      res.status(404).json({message: 'account not found'})
      return
    }else{
      req.account=result
      next();
    }
  })

  
  // DO YOUR MAGIC
}

