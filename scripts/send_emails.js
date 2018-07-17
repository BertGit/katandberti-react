let nodemailer = require('nodemailer')
let fs = require('fs')
const readline = require('readline-sync');

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

let subjectEn = `SAVE THE DATE - Kat and Berti's Wedding - 1st June 2019`
let contentEn =
    `Dear %NAME%,

As you may know, we are tying the knot in June next year and we'd be thrilled to have you as our guest!

If you follow the link below, you'll find more information on our Save the Date.

%LINK%

With warmest wishes,
Kat and Berti
`

let subjectDe = `SAVE THE DATE - Berti und Kat's Hochzeit - 1ster Juni 2019`
let contentDe =
    `%NAME%,

Wie Du vielleicht schon weißt, werden wir im nächsten Juni heiraten und wir würden uns sehr freuen, Dich als Gast begrüßen zu dürfen!

Mehr informationen zum Save the Date findest Du unter folgendem Link.

%LINK%

Wir freuen uns schon sehr darauf, von Dir zu hören!

Liebste Grüße,
Kat & Berti
`

let contentDePlural =
    `%NAME%,

Wie Ihr vielleicht schon wisst, werden wir im nächsten Juni heiraten und wir würden uns sehr freuen, Euch als Gast begrüßen zu dürfen!

Mehr informationen zum Save the Date findet Ihr unter folgendem Link.

%LINK%

Wir freuen uns schon sehr darauf, von Euch zu hören!

Liebste Grüße,
Kat & Berti
`


fs.readFile(__dirname + '/passwd', function (err, data) {
    if (err) {
        throw err;
    }
    loadData(data.toString())
})

function loadData(passwd) {
    console.log("Loading data...")
    let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'bertiandkat@gmail.com',
            pass: passwd
        }
    })
    const guestsRef = firebase.database().ref('guests')
    guestsRef.once('value', (data) => {
        if (data.val()) {
            data = data.val()
            // console.log('Received data from server', data)
            console.log(Object.keys(data).length)
            for (key in data) {
                sendEmail(transporter, key, data[key])
            }
        } else {
            console.log("Error trying to receive data from firebase")
        }
    })
}

function sendEmail(transporter, userId, data) {
    if (!data.emails || data.emails.length === 0) {
        console.log("SKIPPING " + userId)
        return
    }
    console.log(userId, data)
    let title = '...'
    if (data.names.length >= 2) {
        title = [data.names.slice(0, -1).join(', '), data.names.slice(-1)].join(' & ')
    } else {
        title = data.names.join(' & ')
    }
    let plural = data.names.length > 1 || data.names[0].toLowerCase().includes("family")

    console.log("Sending email to " + title)

    let link = 'www.katandberti.com/' + userId

    let content = contentEn
    if (data.lang === "de") {
        content = plural ? contentDePlural : contentDe
    }
    content = content.replace('%NAME%', title).replace('%LINK%', link)

    let subject = data.lang === "de" ? subjectDe : subjectEn

    let mailOptions = {
        from: 'Kat and Berti <bertiandkat@gmail.com>',
        to: data.emails.join(', '),
        subject: subject,
        text: content
    }
    checkMail(transporter, mailOptions)
}

function checkMail(transporter, mailOptions) {
    console.log(mailOptions)
    let ok = false
    while (!ok) {
        ok = true
        let answer = readline.question("1: Send, 2: Skip, 3: Change First Line\n")

        if (answer === "1") {
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    console.log('ERROR', err);
                } else {
                    console.log('Message sent to ' + title)
                }
            })
        } else if (answer === "2") {
            return
        } else if (answer === "3") {
            let line = readline.question("Enter new address line:")
            mailOptions.text = line + ',\n' + mailOptions.text.split("\n").slice(1).join("\n")
            checkMail(transporter, mailOptions)
        } else {
            ok = false
        }
    }
}