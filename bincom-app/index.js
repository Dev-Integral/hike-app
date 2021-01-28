const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const https = require('https');

let deltaPolls = '';
let request = https.get('https://drive.google.com/file/d/0B77xAtHK1hd4Ukx6SHpqTkd6TWM/view', (res) => {
    if (res.statusCode !== 200) {
        console.error(`Couldn't get data`);
        res.resume();
        return;
    } else {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('close', () => {
            console.log('Retrieved all data');
            deltaPolls = (JSON.parse(data));
        });
        request.on('error', (err) => {
            console.error(`Encountered an error trying to make request:${err.message}`)
        })
    }
});

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