const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.use(express.static(path.join(__dirname, 'pages')))

app.get('/', function(req,res){
  res.render(index)
})

app.listen( port , function (){
  console.log ('Your express server is running on port ' + port)
})
