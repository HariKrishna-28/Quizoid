const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(cors())




app.use(express.static('../build'));
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'build', 'index.html')));

app.listen(5000, ()=>{
    console.log("Server started on port 5000")
    console.log("visit : http://localhost:5000/")
})