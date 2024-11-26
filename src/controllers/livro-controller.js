const livroService = require ("../services/livro-service")

async function getLivros(req, res) {
  try{
    const livros = await livroService.getAllBooks()
    res.status(200).json(livros)
  }catch(error){
    console.error ("livros não encontrados", error.message)
    res.status(500).json({message:"erro interno no servidor"})
  }
  
}

async function criarLivros(req, res) {
  try{
    const novoLivro = await livroService.creatBook(req.body)
    res.status(201).json(novoLivro)
  }catch (error){
    console.error("não pode criar livro meu amigo", error.message)
    res.status(400).json({message:"erro ao criar livro"})  }
  
}

module.exports = {getLivros, criarLivros}