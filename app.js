const express = require('express')
const userRouter = require('./user.router')

const port = 8000
const app = express()

app.use(express.json())

app.use('/api/v1', userRouter)
app.listen(port, () => {
  console.log(`port started at ${port}`)
})

