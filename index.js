const axios = require('axios')
require('dotenv').config()


const articles = [] ;  
async function fetchForexArticles() {
    try {
     const res =  await (axios.get('https://newsapi.org/v2/top-headlines?category=business&apiKey=96e1c501488b41f1b15d8938e6d1a990') )
     console.log(res.data.articles) 
    }
    catch(err){
        console.log(err)
    }
 
 }

 
fetchForexArticles()

