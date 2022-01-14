const express = require('express')
const app = express()
const port = 5000

//{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify: false}

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://sua:sua_010!@plate-cluster0.bo64x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
,).then(() => console.log('mongoDB Connected..'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello'))

app.listen(port,() => console.log('example app on port ${port}'))