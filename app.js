const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
//server start
app.listen(port, () => {
  console.log(`server start on port localhost: ${port}`)
  //template string format to write 
})