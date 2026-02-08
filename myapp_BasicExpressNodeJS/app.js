// Server Config
const express = require('express')
const app = express()
const port = 3000

// Routing
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('about')
})

// Conditional Routing
app.get('/foo', (req, res, next) => {
  const conditionalPass = Math.random() > 0.5  
  if (conditionalPass){
    next()
  }else{
    res.send('Sometimes this') 
  }
});
app.get('/foo', (req, res) => {
    res.send("and sometimes that");
});

//Dynamic Route Handling
app.get('/user/:username', (req, res) => {
    res.send(`Hello ${req.params.username}`)
})


//Regular Expression Routes
app.get(/\/user(name)?/, (req, res) => {
  res.send("Who are you? The name of the user?")
 })

//Error Handling: 
app.use((req, res, next) => {
    res.status(404).send("Sorry, we can't find that page!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
