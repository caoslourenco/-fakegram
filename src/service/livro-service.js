const livro = require ("../model/model-livro")

async function getAllBooks() {
  return await livro.find()
  
}

async function creatBook(livroData) {
  const novoLivro = new livro (livroData)
  return await novoLivro.save()
}

module.exports = {getAllBooks, creatBook}