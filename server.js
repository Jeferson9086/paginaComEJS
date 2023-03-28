const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            tiltle: "D",
            menssage: "esenvolver aplicações/serviços de forma fácil"
        },
        {
            tiltle: "E",
            menssage: "JS usa JavaScript para renderizar HTML"
        },
        {
            tiltle: "M",
            menssage: "uito fácil de usar "
        },
        {
            tiltle: "A",
            menssage: "morzinho"
        }, {
            tiltle: "I",
            menssage: "nstall ejs"
        }, {
            tiltle: "S",
            menssage: "intaxe simples"
        },
    ];
    const subtitle = "Uma linguagem para criação de página HTML "
    res.render("pages/node", {
        qualitys: items,
        subtitle: subtitle,
    });
})
app.get("/sobre", function (req, res) {
    res.render("pages/about");
})
app.listen(8080);
console.log("Rodando");