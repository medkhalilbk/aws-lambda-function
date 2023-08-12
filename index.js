const axios = require('axios')
require('dotenv').config()


const articles = [] ; 


async function fetchForexArticles() {
    try {
     const res =  await (axios.get('https://newsapi.org/v2/top-headlines?category=business&apiKey=96e1c501488b41f1b15d8938e6d1a990') )
     console.log(res.data)
    }
    catch(err){
        console.log(err)
    }
 
 }

async function functionOne() {
   try {
    const test = await axios.get('https://coffeecart.trading/wp-json/wp/v2/posts') 
    console.log(test)
   } catch (error) {
    console.log(process.env.TEST)
   }

}
fetchForexArticles()

