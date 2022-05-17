const db = require ('../../data/db-config')




const getAll = () => {
  return db('accounts')
  // DO YOUR MAGIC
}

const getById = id => {
  return db('accounts').where({id:id}).first();
  // DO YOUR MAGIC
}

// async function create(account) {
//   let result = await db('accounts').insert(account)
//   return getById(result[0])
// }

const create = account => {
 return db('accounts')
  .insert(account)
  .then(result => {
    return getById(result[0])
  })
  // DO YOUR MAGIC
}

const updateById = (id, account) => {
  db('accounts')
  .update(account).where('id', id);
  return getById(id)
  // DO YOUR MAGIC
}

const deleteById = id => {
    return db('accounts').where({id:id}).delete()
  // const deletedItem= db('accounts').where({id:id}).first();
  // db('accounts').delete().where({id:id})
  // return deletedItem
  // DO YOUR MAGIC
}

const checkIfNameUnique = filter => {
  return db('accounts').where(filter)
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  checkIfNameUnique
}
