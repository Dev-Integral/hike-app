const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

router.get('/delta', (req, res) => {
    res.render("delta", { title: "Hey", message: "Hello there!" });
});
router.get('/polls', (req, res) => {
    res.sendFile(__dirname + '/pages/polls.html');
});

// add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');