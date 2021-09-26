const express = require('express');
 
const app = express();

app.get('/auth/current-user',(req,res)=>{
  return res.json({
    user: {
      id: 'eee1r21sadw',
      name:'Sam'
    }
  })
})
app.listen(5000,()=>{console.log('listening on port 5000')});