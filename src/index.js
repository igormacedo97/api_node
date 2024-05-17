const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.use(express.json());
const port = 3000;
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
    mongoose.connect('mongodb+srv://igormacedo097:3cLugBIaIXJvUUnX@node-api.fb0nqqm.mongodb.net/?retryWrites=true&w=majority&appName=node-api');
    console.log(`Example app listening on port ${port}`)
})