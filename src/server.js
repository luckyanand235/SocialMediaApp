const express = require('express')

const { db } = require('./db/models')
const { userRoute } = require('./routes/users')
const { postRoute } = require('./routes/posts')
const { urlencoded } = require('express')

const app = express()


app.use(express.json())
app.use(urlencoded({extended: true}))



app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)
app.use('/', express.static(__dirname + '/public'))

db.sync()
    .then(() => {
        app.listen(8383, () => {
            console.log("Server started on http://localhost:8383")
        })
    })
    .catch((err) => {
        console.error(new Error('Could not start database'))
        console.error(err)
    })

