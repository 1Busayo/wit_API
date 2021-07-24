const axios = require('axios');

/*
axios.get('https://api.github.com/user', {
  headers: {
    'Authorization': `token ${access_token}`
  }
})
.then((res) => {
  console.log(res.data)
})ß
.catch((error) => {
  console.error(error)
})*/

 const access_token = 'QDG7EGGBQ4QZODIGW2YAYBZWTPRZVMKY';
 const text = 'i want airtime';


axios.get(`https://api.wit.ai/message?v=20210723&q=${text}`, {
  headers: {
    'Authorization': `Bearer ${access_token}`
  }
})
.then((res) => {
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
})