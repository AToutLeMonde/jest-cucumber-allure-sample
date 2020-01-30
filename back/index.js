const express = require('express')
const app = express()

app.use(express.json())

const PORT = 8080;

function setCORSHeaders(res) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    
    const HEADERS = 'Origin, X-Requested-With, Accept, Authorization, Content-Type, Access-Control-Allow-Headers, Access-Control-Request-Method';
    res.set('Access-Control-Allow-Headers', HEADERS);
    res.set('Access-Control-Expose-Headers', HEADERS);

    return res;
}

const users = [
    'your_mom',
    'olivia8',
    'black.star',
    'z0',
    'brother'
]

app.options('/reset', (req, res) => {
    res = setCORSHeaders(res);
    res.status(200).send();
})

function sendError(res) {
    res.status(400).send({ error: 'unknown message'});
}

app.post('/reset', (req, res) => {    
    res = setCORSHeaders(res);
    let result = {success: false}    

    if (!req.body) {        
        sendError(res);
        return;
    }

    const username = req.body.login;

    if (username) {
        if (users.indexOf(username) >=0 ) result.success = true;
        res.send(result)
    }else sendError(res);
        
})

app.listen(PORT, () => console.log(`Stub app listening on port ${PORT}!`))