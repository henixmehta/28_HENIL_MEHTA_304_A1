const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/', (req, res) => {
    res.status(200).send("welcome cookie page!")
});


app.get('/cookieset', (req, res) => {
    res.cookie("cookie1", 'value1');
    res.cookie("cname", 'cval');
    res.cookie('company', 'comp1', { expires: new Date(Date.now() + 360000) }); 
    res.cookie("name", 'name1');
    res.status(200).send("cookie has been stored!");
});

app.get('/cookieget', (req, res) => {
    res.status(200).send(req.cookies);
});
app.listen(3000);