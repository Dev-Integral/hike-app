const express = require('express')
const app = express()
const port = 3000

app.get('/delta', (req, res) => {
    res.sendFile(__dirname + './pages/delta.html');
});
app.get('/polls', (req, res) => {
    res.sendFile(__dirname + './pages/polls.html');
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})