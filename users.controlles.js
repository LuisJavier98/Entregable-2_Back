let users = []
let id = 1

const findAllUsers = () => {
  return users
}
const findUsersbyId = (id) => {
  const user = users.find(user => id == user.id)
  return user
}
const newUser = (obj) => {
  const user = {
    id: id++,
    first_name: obj.first_name,
    last_name: obj.last_name,
    email: obj.email,
    password: obj.password,
    birthday: obj.birthday
  }
  users.push(user)
  return user
}

const deleteUser = (id) => {
  const user = users.find(user => id == user.id)
  for (let index = 0; index < users.length; index++) {
    if (id == users[index].id) {
      users.splice(index, index + 1)
    }
  }
  return user
}






module.exports = {
  findAllUsers,
  findUsersbyId,
  newUser,
  deleteUser
}