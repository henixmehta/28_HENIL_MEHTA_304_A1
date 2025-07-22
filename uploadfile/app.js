const express = require('express');
const app = express();
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }))


app.get('/process_get1', (req, res) => {
    res.send(req.query.first_name + " " + req.query.last_name)
});


app.post('/process_post', (req, res) => {
    res.send(req.body.first_name + " " + req.body.last_name)
})
app.listen(3000);