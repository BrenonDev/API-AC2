const express = require('express');
const userRouter = require('./routes/userRouter');
const calcRouter = require('./routes/calcRouter');
const mongoose = require('mongoose');
require('dotenv').config();
const conexao = process.env.DBCONEXAO;

const app = express();
app.use(express.json());
app.use('/users', userRouter);
app.use('/calc', calcRouter);

app.get('/', (request, response) => {
    const nome = request.query.nome ?? 'World';
    return response.json(
        {'message': `Hello, ${nome}!`}
    )
})

app.get('/soma/:n1/:n2', (request, response) => {
    const n1 = parseFloat(request.params.n1);
    const n2 = parseFloat(request.params.n2);
    const resultado = n1 + n2;
    return response.json({'resultado': resultado });
});

app.post('/soma', (request, response) => {
    const n1 = parseFloat(request.body.n1);
    const n2 = parseFloat(request.body.n2);
    const resultado = n1 + n2;
    return response.json({'resultado': resultado});
});

mongoose.connect(conexao)
    .then(() => {
        app.listen(3000, () => {
        console.log('Conectado ao MongoDB');
        console.log('Servidor rodando na porta: 3000');
        });
    })
    .catch((err) => {
        console.error('Erro ao conectar ao MongoDB:', err);
    });

