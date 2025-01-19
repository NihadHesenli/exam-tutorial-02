const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routers = require('./routers/router')
const app = express()
const DB_URL = 'mongodb+srv://niad:Aroundeworld000!@cluster0.la2f2.mongodb.net/exam-T-03?retryWrites=true&w=majority&appName=Cluster0'
const PORT = 8080
app.use(express.json())
app.use(cors())


app.use('/watches', routers)


mongoose.connect(DB_URL).then(()=>{app.listen(PORT,()=>{console.log(`http://localhost:${PORT} / connected !`);
})})