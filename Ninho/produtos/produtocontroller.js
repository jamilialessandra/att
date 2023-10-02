const express = require ("express");
const router = express.Router();
const Produto = require("./Produto");

router.get("/produto", (req, res)=>{
    res.render("produto");
});

router.post("/salvarProduto", (req,res)=>{
    res.render("produto");
});

router.post("/salvarProduto", (req, res)=>{
    var titulo = req.body.titulo;
    var descricao = req.body.descricao;
    Produto.create({
        titulo : titulo,
        descricao : descricao
    }).then (()=>{
        res.redirect("/");
    })
});

router.get("produtolist", (req, res)=>{
    Produto.finAll({raw : true }).then(produtos=>{
        console.log(produtos)
    });

    res.render("index");
});