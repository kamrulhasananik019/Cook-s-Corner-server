const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;
app.use(cors())

const Dashes = require('./data/dashes.json')

app.get('/', (req, res) => {
    res.send("Server is running")
});

app.get('/dashes', (req, res) => {
    res.send(Dashes)
});

app.get('/dashes/:id', (req, res) => {
    const id = req.params.id;
    const DashesId = Dashes.find(n => n.id == id)
    res.send(DashesId)
})

app.listen(port, () => {
    console.log(`SERVER IS Running on port : ${port}`);
})