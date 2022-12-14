const userControllers = require('./users.controlles')

const getAllUsers = (req, res) => {
  const data = userControllers.findAllUsers()
  res.status(200).json(data)
}

const getUserById = (req, res) => {
  const id = req.params.id
  const data = userControllers.findUsersbyId(id)
  if (data) {
    res.status(200).json(data)
  }
  else {
    res.status(404).json({ message: 'Invalid id' })
  }
}

const postNewUser = (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body
  const data = userControllers.newUser({ first_name, last_name, email, password, birthday })
  if (first_name && last_name && email && password && birthday) {
    res.status(201).json(data)
  } else {
    res.status(404).json({
      message: 'User invalid', fields: {
        "first_name": "string",
        "last_name": "string",
        "email": "string",
        "password": "string",
        "birthday": "YYYY/MM/DD"
      }
    })
  }
}

const deleteUserById = (req, res) => {
  id = req.params.id
  const data = userControllers.deleteUser(id)
  if (data) {
    res.status(200).json(data)
  } else {
    res.status(404).json({ message: 'Invalid id' })
  }
}

const patchUserById = (req, res) => {
  const { first_name, last_name, email, password, birthday } = req.body
  id = req.params.id
  const data = userControllers.patchUser(id, { first_name, last_name, email, password, birthday })
  if (data && first_name && last_name && email && password && birthday) {
    res.status(200).json(data)
  } else {
    res.status(404).json({
      message: 'Invalid id', fields: {
        "first_name": "string",
        "last_name": "string",
        "email": "string",
        "password": "string",
        "birthday": "YYYY/MM/DD"
      }
    }
    )
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  postNewUser,
  deleteUserById,
  patchUserById
}