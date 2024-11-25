const axios = require ("axios")

async function chatGemini(message) {
  try {
    const response = await axios.post("https://generativelanguage.googleapis.com/v1beta2/models/chat-bison-001:generateMessage", {
      prompt: {
        messages: [
          {
            author: 'user', 
            content: message ,  
          }
        ]
      }
    }, {
      headers: {
        Authorization: `Bearer ${process.env.GOOGLE_API_KEY}` 
      }
    })
    return response.data 
  }catch(error){
    console.error("Chat não Funciona", error.message)
    throw new Error("falha na comunicação da api do Google")
  }
  
}

module.exports = {chatGemini}