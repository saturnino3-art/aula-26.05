const express = require('express')
const app = express();

app.use(express.json())

//let estoque = "Lapis"
let estoque = [
    {nome:"Lapis", valor: 1.50, quantidade: 25},
    {nome:"Caderno", valor: 15.50, quantidade: 25},
    {nome:"Borracha", valor: 1.00, quantidade: 25}
    ]


const porta = 3000;

app.get('/produtos', (req, res) => {
    res.json(estoque)
})

app.post('/produto' , (req, res) => {
    const novoProduto = req.body;

    estoque.push(novoProduto)

    res.send("Produto: " + novoProduto.nome + "cadastrado!")
});

app.listen(porta, () => {
    console.log("Servidor rodando a porta: " + porta)
})