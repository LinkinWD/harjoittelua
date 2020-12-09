const express = require('express')
const app = express()

app.use(() => {
    console.log('we got request')
})

app.listen(3000, () => {
    console.log('server up and running')
})