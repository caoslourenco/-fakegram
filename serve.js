const express = require ("express");
const connectDB = require("./src/db/mongoConfig")
const routeLivros = require ("./src/rotas/livro-rota")

// const posts = [
//     { id: 1, descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150" },
//     { id: 2, descricao: "Gato fazendo yoga", imagem: "https://placecats.com/millie/300/150" },
//     { id: 3, descricao: "Gato fazendo panqueca", imagem: "https://placecats.com/millie/300/150"},
// ];

const app = express();
app.use(express.json());

connectDB();

app.use("/livro", routeLivros)

const PORT=process.env.PORT || 3000; 




app.listen (PORT, ()=>{
    console.log ("conectado")
})


// app.listen(3000, () => {
//     console.log("Servidor escutando...");
// });

// app.get("/posts", (req, res) => {
//     res.send(posts);
//     res.status(200).json(posts);
// });


// function buscarPostPorID(id) {
//     return posts.findIndex((post) => {
//         return post.id === Number(id)
//     })
// }

// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostPorID(req.params.id)
//     res.status(200).json(posts[index]);
// });