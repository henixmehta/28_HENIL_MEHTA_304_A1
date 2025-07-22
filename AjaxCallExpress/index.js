const express = require('express');
const app = express();
app.use(express.static("./resources"));
app.use(express.urlencoded({ extended: true }));

app.get('/getData', (req, res) => {
    res.send('Welcome to the Ajax Call Express App!');
});


app.post('/postData', (req, res) => {
    console.log(req.body.fname + " " + req.body.lname);
    res.send(req.body.fname + " " + req.body.lname);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
