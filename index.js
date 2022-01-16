const express = require('express')
const app = express()
const port = 5000
const bodyParser = require("body-parser");
const { User } = require("./models/User");

const confing = require("./config/key");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


const mongoose = require('mongoose')
mongoose.connect(confing.mongoURI).then(() => console.log('mongoDB Connected..'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('hello ~~^^'))

app.post('/register', (req, res) => {


    // 클라이언트에게 받은 정보를 데이터베이스에 넣는다
    const user = new User(req.body)

    user.save((err, userInfo) => {
        if(err) return res.json({success: false, err})
        return res.status(200).json({success: true})
    });

})


app.listen(port,() => console.log('example app on port ${port}'))