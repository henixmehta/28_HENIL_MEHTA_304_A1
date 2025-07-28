const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.set('views', './view-dir');
app.use(express.static("./resources"));
app.use(express.urlencoded({ extended: true }));


app.route('/form').get((req, res) => {
    res.render('form');
}).post((req, res) => {
    const { fname, lname } = req.body;
    const errors = [];

    if (!fname || fname.trim() === '') {
        errors.push('First name is required.');
    }

    if (!lname || lname.trim() === '') {
        errors.push('Last name is required.');
    }

    if (errors.length > 0) {
        res.render('form', { errors });
    } else {
        res.render('form', { fname, lname });
    }
});


app.get('/getData', (req, res) => {
    res.send('Welcome to the Ajax Call Express App!');
});


app.post('/postData', (req, res) => {
    console.log(req.body.fname + " " + req.body.lname);
    res.send(req.body.fname + " " + req.body.lname);
}).listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
