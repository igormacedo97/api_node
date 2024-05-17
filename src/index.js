const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
app.use(express.json());
const port = 3000;
const mongoUri = process.env.MONGO_URI;

const Doacao = mongoose.model('Doacao', { 
    nome: String,
    descricao: String,
    remetente: String,
    imagem_url: String
});


app.get('/', async (req, res) => {
    const doacoes = await Doacao.find()
    return res.send(doacoes)
})

app.get('/:id', async (req, res) => {
    const doacao = await Doacao.findById(req.params.id)
    return res.send(doacao)
})

app.delete('/:id', async(req, res) => {
    const doacao = await Doacao.findByIdAndDelete(req.params.id);
    return res.send(doacao)
})

app.put('/:id', async(req, res) => {
    const doacao = await Doacao.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        descricao: req.body.descricao,
        remetente: req.body.remetente,
        imagem_url: req.body.imagem_url
    }, {
        new: true
    })

    return res.send(doacao);
})

app.post('/', async(req, res) => {
    const doacao = new Doacao({
        nome: req.body.nome,
        descricao: req.body.descricao,
        remetente: req.body.remetente,
        imagem_url: req.body.imagem_url
    })
    await doacao.save();
    return res.send(doacao)
})
  
app.listen(port, () => {
    mongoose.connect(mongoUri);
    console.log(`Example app listening on port ${port}`)
})