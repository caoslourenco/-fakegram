const mongoose = require("mongoose");

const livroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  publishedYear: { type: Number },
});

 
module.exports = mongoose.model("Livro", livroSchema);
