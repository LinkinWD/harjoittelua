const express = require('express')
const app = express()

/* app.use((req, res) => {
    console.log('we got request')
    res.send("hello you we got you")
})
 */

 // root
app.get('/', (req, res) => {
    res.send('<h1>Tervetuloa, nyt teen muutoksen, mites nodemon tykkää</h1>')
})

//hakuja /r/: jälkeen, pitää varman olla objectina.
app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>kiertelen tässä ${subreddit} joka on subredissä, jonka postas ${postId}`)
})

//post request
app.post('/jasen', (req, res) => {
    res.send('tervetuloa takaisin')
})

app.get('/vieras', (req, res) => {
    res.send("Welcome vierailija")
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if(!q) {
        res.send('mitään ei läydä jos ei eti mitään')
    }
    res.send(`<p>Etsintäsi tulos oli : ${q} </p> `)
})
// aina viimeisenä, valinta mikä ei osu mihinkään ylempään.
app.get('*', (req, res) => {
    res.send('Ei ole tääläistä sivua')
})

app.listen(3000, () => {
    console.log('server up and running')
})