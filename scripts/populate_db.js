require('babel-register')({
    presets: ['env']
})


var firebase = require('firebase')
const config = {
    apiKey: "AIzaSyBadmk35qRg3bwn2uBFteS7SQoKRCKTUgc",
    authDomain: "katandberti.firebaseapp.com",
    databaseURL: "https://katandberti.firebaseio.com",
    projectId: "katandberti",
    storageBucket: "katandberti.appspot.com",
    messagingSenderId: "952774658924"
}
firebase.initializeApp(config)

console.log("Loading data from csv file into firebase")

var fs = require('fs');
var CsvReadableStream = require('csv-reader');

var inputStream = fs.createReadStream('./scripts/guests.csv', 'utf8');
let completed = false
let execCounter = 0

function closeOnCompletion() {
    execCounter -= 1
    if (completed && execCounter === 0) firebase.database().goOffline()
}

inputStream
    .pipe(CsvReadableStream({ parseNumbers: true, parseBooleans: true, trim: true }))
    .on('data', function (row) {
        let [link, names, emails] = row
        names = names.split(',').map(n => n.trim()).filter(n => n !== "")
        emails = emails.split(',').map(e => e.trim()).filter(e => e !== "")
        execCounter += 2
        firebase.database().ref('guests/' + link.trim() + '/names').set(names).then(closeOnCompletion)
        firebase.database().ref('guests/' + link.trim() + '/emails').set(emails).then(closeOnCompletion)
    })
    .on('end', function (data) {
        console.log('Complete');
        completed = true
    });