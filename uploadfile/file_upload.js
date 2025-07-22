const express = require('express');
const app = express();
const multer = require('multer');
const path = require('path');
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }))


var options = multer.diskStorage({
    destination: (req, file, cb) => {
        if (file.mimetype !== 'image/jpeg') {
            return cb(new Error('Only .jpg format allowed!'), false);
        }
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})
var upload = multer({ storage: options });


app.post('/file_upload', upload.single('myfile'), (req, res) => {
    res.send("File uploaded successfully! " + req.body.first_name + req.body.first_name + req.file.path);
})

app.post('/photos_upload', upload.array('photos',2), (req, res) => {
    res.send("File uploaded successfully! " + req.body.first_name + req.body.first_name + req.files[0].path);
})
app.listen(3000);