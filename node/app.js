const express = require('express')
const app = express()
const port = 3000
const path = require('path');
const fs = require('fs');
const directoryPath = path.join(__dirname, './../sollkon');
const directoryPath2 = path.join(__dirname, './../istkon');
const array = [];
const array2 = [];
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/sollkon', (req, res) => {
    fs.readdir(directoryPath, function(err, files) {
        //handling error
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        //listing all files using forEach
        let arr = [];
        files.forEach(function(file) {
            // Do whatever you want to do with the file
            arr.push(file);
            array.push(file);
        });
        res.json({ "sollkon": arr })
    });
})

app.get('/:id/:chart', (req, res) => {
    console.log("=============================")
    console.log(req.params.id)
    console.log(req.params.chart)

    let check = array.indexOf(req.params.id);
    let check2 = array2.indexOf(req.params.id);
    if (check != -1) {
        console.log("Starting........... A1 , A2");
        let A1 = [];
        let A2 = [];
        let arraytest = fs.readFileSync(`${directoryPath}/${req.params.id}`).toString().split("\n");
        for (let i = 0; i < arraytest.length - 1; i++) {
            arraytest[i].split(",")[0] ? A1.push(arraytest[i].split(",")[0]) : ''
            arraytest[i].split(",")[1] ? A2.push(arraytest[i].split(",")[1]) : ''
            if (i + 2 === arraytest.length) res.json({ "A1": A1, "A2": A2 })
        }
        console.log("Carry on executing................");
    } else {
        let A3 = [];
        let A4 = [];

        console.log("Starting A3 A4");
        let arraytest2 = fs.readFileSync(`${directoryPath2}/${req.params.id}`).toString().split("\n");
        for (let i = 0; i < arraytest2.length - 1; i++) {
            arraytest2[i].split(",")[0] ? A3.push(arraytest2[i].split(",")[0]) : ''
            arraytest2[i].split(",")[1] ? A4.push(arraytest2[i].split(",")[1]) : ''
            if (i + 2 === arraytest2.length) res.json({ "A3": A3, "A4": A4 })
        }
        console.log("Carry on executing");
    }
    console.log("................................")
})

app.get('/istkon', (req, res) => {
    fs.readdir(directoryPath2, function(err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }
        let arr = [];
        files.forEach(function(file) {
            arr.push(file);
            array2.push(file);
        });
        res.json({ "istkon": arr })
    });
})

app.get('/:id', (req, res) => {
    console.log("...downloading")
    let check = array.indexOf(req.params.id);
    if (check != -1) {
        let A = [];
        let arraytest = fs.readFileSync(`${directoryPath}/${req.params.id}`).toString().split("\n");
        for (let i = 0; i < arraytest.length - 1; i++) {
            A.push([arraytest[i]])
            if (i + 2 === arraytest.length) res.json({ "A": A })
        }
    } else {
        let A = [];
        console.log("Starting A3 A4");
        let arraytest2 = fs.readFileSync(`${directoryPath2}/${req.params.id}`).toString().split("\n");
        for (let i = 0; i < arraytest2.length - 1; i++) {
            A.push([arraytest2[i]])
            if (i + 2 === arraytest2.length) res.json({ "A": A })
        }
        console.log("Carry on executing");
    }
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
