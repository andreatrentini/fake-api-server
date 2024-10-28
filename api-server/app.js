const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('', (request, response) => {
    response.status(200).send('Hello world!');
})

app.get('/usr', (request, response) => {
    response.status(404).send('Non esiste la tabella usr');
})

app.get('/users', (request, response) => {
    response.status(200).send([
        {
            id: 1,
            nome: 'Mario',
            cognome: 'Rossi'
        },
        {
            id: 2,
            nome: 'Matteo',
            cognome: 'Bianchi'
        },
        {
            id: 3,
            nome: 'Francesco',
            cognome: 'Verdi'
        },
])
})

app.get('/users/:id', (request, response) => {
    console.log('ok')
    if (request.params.id == 1)
    {
        response.status(200).send({
            id: 1,
            nome: 'Mario',
            cognome: 'Rossi'
        })
    }
    else {
        {
            response.status(500).send('Utente non trovato')
        }
    }
})

app.post('/users/', (request, response) => {
    const token = request.header("Authorization");
    if (!token) return response.sendStatus(401);

    response.status(200).send('Utente aggiunto al database.')
})


const server = app.listen(3000, () => {
    console.log('server avviato...');
})