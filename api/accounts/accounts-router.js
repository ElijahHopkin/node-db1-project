const router = require('express').Router()
const Accounts = require ('./accounts-model')
const {checkAccountId, checkAccountNameUnique, checkAccountPayload} = require('./accounts-middleware');
 

router.get('/', (req, res, next) => {
  Accounts.getAll()
    .then(results => {
      res.json(results)
    })
    .catch(err => {
      res.status(500).json({message: err.message})
    })
})

router.get('/:id', checkAccountId, (req, res, next) => {
  res.json(req.account)
  // DO YOUR MAGIC
})

router.post('/', checkAccountPayload, checkAccountNameUnique, (req, res, next) => {
  Accounts.create(req.body)
  .then (result => {
    res.status(201).json(result)
  })
  // DO YOUR MAGIC
})

router.put('/:id', checkAccountId, checkAccountPayload, checkAccountNameUnique, (req, res, next) => {
  // Accounts.updateById(req.params.id, req.body)
  // .then(result => {

  // })
  // DO YOUR MAGIC
});

router.delete('/:id', checkAccountId, (req, res, next) => {
      Accounts.deleteById(req.params.id)
      .then(results => {
        res.json(req.account)
      })

  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
