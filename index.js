const express = require('express')
const cookieParser = require('cookie-parser')
const server = express()
const port = process.env.PORT || 6000
const usersRouter = require('./routers/users-router')
const authRouter = require('./routers/auth-router')

server.use(express.json())
server.use(cookieParser())
server.use('/users', usersRouter)
server.use('/auth', authRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: 'something went wrong'
    })
})

server.listen(port, () => {
    console.log(`server running at http://localhost:${port}`)
})