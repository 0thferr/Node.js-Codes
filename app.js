// Carregando módulos    
const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require("body-parser");
const app = express();
const admin = require("./routes/admin");
const path = require("path")
const mongoose = require("mongoose")

// Configurações
// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handlebars
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Mongoose
        mongoose.Promise = global.Promise;
        mongoose.connect("mongodb://localhost/blogapp").then(() => {
            console.log("Conectado ao mongo")
        }).catch((err) => {
            console.log9("Erro ao se conectar: "+err)
        })
    // Public
app.use(express.static(path.join(__dirname,"public")))
// Rotas

app.get('/posts', (req, res) => {
    res.send("Lista Posts")
})

app.use('/admin', admin)

app.use('/', (req, res) => {
    res.send('Rota principal')
})
// Outros
const PORT = 8081;
app.listen(PORT, () => {
    console.log("Servidor rodando! ");
});
